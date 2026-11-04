import { readFile } from "node:fs/promises";
import { join } from "node:path";

export function weatherUrl(input: string) {
    if (typeof input !== "string" || input.length > 2048) throw Error("Invalid weather request");
    const url = new URL(input);
    if (url.protocol !== "https:" || url.username || url.password || url.port || url.hash ||
        !((url.hostname === "geocoding-api.open-meteo.com" && url.pathname === "/v1/search") ||
          (url.hostname === "api.open-meteo.com" && url.pathname === "/v1/forecast"))) throw Error("Unsupported weather endpoint");
    return url;
}

type Config = {port:number; key:string};
async function mediaConfig(): Promise<Config> {
    if (process.platform !== "win32" || !process.env.APPDATA) throw Error("Windows media requires Windows");
    const roots = [join(process.env.APPDATA, "StillCord", "Media"), join(process.env.APPDATA, "BetterDiscord", "plugins")];
    for (const root of roots) {
        try {
            const config = JSON.parse(await readFile(join(root, "StillMediaBridge.json"), "utf8"));
            if (!Number.isInteger(config.port) || config.port < 1024 || config.port > 65535 || !/^[a-f0-9]{64}$/.test(config.key)) throw Error("Invalid media setup");
            return config;
        } catch (error) { if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error; }
    }
    throw Error("Install the optional StillCord media adapter");
}

// Only fixed weather endpoints and authenticated localhost media are exposed.
// Credentials stay in the main process and are never returned over IPC.
export function createBridge(fetcher: typeof fetch = fetch, configLoader = mediaConfig) {
    const pending = new Map<string, AbortController>();
    const keyFor = (owner: number, id: string) => {
        if (!Number.isInteger(owner) || typeof id !== "string" || !/^[a-zA-Z0-9-]{1,64}$/.test(id)) throw Error("Invalid request ID");
        return `${owner}:${id}`;
    };
    async function request(owner: number, id: string, timeout: number, run: (signal:AbortSignal) => Promise<unknown>) {
        const key = keyFor(owner,id);
        if (pending.has(key) || [...pending.keys()].filter(k => k.startsWith(`${owner}:`)).length >= 8) throw Error("Too many requests");
        const controller = new AbortController(); pending.set(key,controller);
        const timer = setTimeout(() => controller.abort(), timeout);
        try { return await run(controller.signal); }
        finally { clearTimeout(timer); pending.delete(key); }
    }
    async function json(url: string | URL, options: RequestInit) {
        const response = await fetcher(url, {...options, redirect:"error"});
        // Bound even a compromised/misconfigured local adapter response.
        if (Number(response.headers.get("content-length")) > 262144) throw Error("Response too large");
        const reader = response.body?.getReader(); const chunks:Uint8Array[] = []; let size = 0;
        if (reader) {
            try {
                while (true) {
                    const {done,value} = await reader.read(); if (done) break;
                    size += value.length;
                    if (size > 262144) throw Error("Response too large");
                    chunks.push(value);
                }
            } finally { await reader.cancel().catch(() => {}); reader.releaseLock(); }
        }
        const bytes = new Uint8Array(size); let offset = 0;
        for (const chunk of chunks) { bytes.set(chunk,offset); offset += chunk.length; }
        const data = JSON.parse(new TextDecoder().decode(bytes));
        return {ok:response.ok,data};
    }
    const media = async (suffix: string, signal:AbortSignal, body?: string) => {
        const config = await configLoader();
        const result = await json(`http://127.0.0.1:${config.port}${suffix}`, {
            signal, method:body ? "POST" : "GET", body,
            headers:{Authorization:`Bearer ${config.key}`,"Content-Type":"application/json"}
        });
        if (!result.ok) throw Error("Media service unavailable");
        return result.data;
    };
    return {
        weather(owner:number, input:string, id:string) {
            const url = weatherUrl(input);
            return request(owner,id,12000,signal => json(url,{signal})) as Promise<{ok:boolean; data:any}>;
        },
        mediaState(owner:number, revision:number, id:string) {
            if (!Number.isSafeInteger(revision) || revision < -1) throw Error("Invalid media revision");
            return request(owner,id,30000,signal => media(`/state?after=${revision}`,signal)) as Promise<{revision:number; state:any}>;
        },
        mediaControl(owner:number, command:string, id:string) {
            if (!["toggle","previous","next"].includes(command)) throw Error("Invalid media control");
            return request(owner,id,5000,signal => media("/control",signal,JSON.stringify({command})));
        },
        cancel(owner:number,id:string) { pending.get(keyFor(owner,id))?.abort(); },
        close(owner:number) { for(const [key,controller] of pending) if(key.startsWith(`${owner}:`)) controller.abort(); }
    };
}

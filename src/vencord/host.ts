import * as DataStore from "@api/DataStore";
import { find, findStore } from "@webpack";
import { NavigationRouter, showToast } from "@webpack/common";

import type { PluginNative } from "@utils/types";

type Native = PluginNative<typeof import("./native")>;
const DATA_KEY = "StillCord:v1";
const DATA_KEYS = new Set(["settings", "location", "browseOpen", "channelControlsVisible", "activityDraft", "browseRecentGuilds", "browsePosition", "widgetsCollapsed", "weatherCache"]);
// Shared across toggles so a new startup waits for the previous instance's writes.
let writes: Promise<unknown> = Promise.resolve();

export async function createHost() {
    await writes;
    const stored = await DataStore.get<Record<string, unknown>>(DATA_KEY);
    const data = Object.fromEntries(Object.entries(stored || {}).filter(([key]) => DATA_KEYS.has(key)));
    const native = VencordNative.pluginHelpers.StillCord as Native | undefined;
    const pending = new Map<string, () => void>();
    const watchers = new Set<() => void>();
    let disposed = false;
    const abortError = () => new DOMException("Cancelled", "AbortError");

    const call = <T>(run: (id: string) => Promise<T>, signal?: AbortSignal): Promise<T> => {
        if (disposed || signal?.aborted) return Promise.reject(abortError());
        const id = crypto.randomUUID();
        return new Promise((resolve, reject) => {
            const finish = () => { pending.delete(id); signal?.removeEventListener("abort", abort); };
            const abort = () => {
                finish(); void native?.cancelRequest(id).catch(() => {});
                reject(abortError());
            };
            pending.set(id, abort); signal?.addEventListener("abort", abort, {once:true});
            run(id).then(value => { finish(); if (disposed || signal?.aborted) reject(abortError()); else resolve(value); }, error => { finish(); reject(error); });
        });
    };

    return {
        Data: {
            load: (key: string) => data[key],
            save(key: string, value: unknown) {
                if (disposed || !DATA_KEYS.has(key)) return;
                data[key] = structuredClone(value);
                const snapshot = structuredClone(data);
                writes = writes.then(() => DataStore.set(DATA_KEY, snapshot)).catch(error => {
                    console.error("[StillCord] Could not save preferences", error);
                    showToast({text:"StillCord could not save your preferences.", variant:"critical"});
                });
            }
        },
        DOM: {
            addStyle(id: string, css: string) {
                let style = document.getElementById(id) as HTMLStyleElement | null;
                if (!style) { style = document.createElement("style"); style.id = id; document.head.append(style); }
                if (style.textContent !== css) style.textContent = css;
            },
            removeStyle: (id: string) => document.getElementById(id)?.remove(),
            onAdded(selector: string, callback: () => void) {
                const observer = new MutationObserver(() => {
                    if (!document.querySelector(selector)) return;
                    cancel(); callback();
                });
                const cancel = () => { observer.disconnect(); watchers.delete(cancel); };
                watchers.add(cancel); observer.observe(document.body, {childList:true, subtree:true});
                // The observer exists only while waiting for Discord's shell.
                return cancel;
            }
        },
        Webpack: {
            getStore: (name: string) => { try { return findStore(name); } catch { return undefined; } },
            getByKeys: (...keys: string[]) => keys.includes("transitionTo") ? NavigationRouter : find(m => m && keys.every(key => key in m), {isIndirect:true}),
            getModule: (filter: (module: any) => boolean) => find(filter, {isIndirect:true})
        },
        Net: {fetch: async (url: string, options: {signal?: AbortSignal} = {}) => {
            if (!native) throw Error("Weather requires Vencord desktop.");
            const result = await call(id => native.weather(url, id), options.signal);
            return {ok:result.ok, json:async () => result.data};
        }},
        Media: native ? {
            read: (revision: number, signal?: AbortSignal) => call(id => native.mediaState(revision, id), signal),
            command: (command: string) => call(id => native.mediaControl(command, id))
        } : undefined,
        UI: {showToast: (text: string) => showToast({text})},
        dispose() {
            disposed = true;
            for (const cancel of [...pending.values()]) cancel();
            for (const cancel of [...watchers]) cancel();
        }
    };
}

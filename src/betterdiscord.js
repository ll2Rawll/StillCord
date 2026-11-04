// BetterDiscord is the only build that has access to BdApi / require.
function stillBetterDiscordHost() {
    const api = new BdApi("StillCord");
    const mediaRequest = async (suffix, options) => {
        const fs = require("fs"), path = require("path");
        const shared = path.resolve(BdApi.Plugins.folder, "..", "..", "StillCord", "Media", "StillMediaBridge.json");
        const legacy = path.join(BdApi.Plugins.folder, "StillMediaBridge.json");
        const config = JSON.parse(fs.readFileSync(fs.existsSync(shared) ? shared : legacy, "utf8"));
        if (!Number.isInteger(config.port) || config.port < 1024 || config.port > 65535 || !/^[a-f0-9]{64}$/.test(config.key)) throw Error("Invalid media setup");
        const response = await api.Net.fetch(`http://127.0.0.1:${config.port}${suffix}`, {
            ...options, redirect: "error", headers: {Authorization: `Bearer ${config.key}`, "Content-Type": "application/json"}
        });
        if (!response.ok) throw Error("Media service unavailable");
        return response.json();
    };
    return {
        Data: api.Data, DOM: api.DOM, Webpack: api.Webpack, Net: api.Net, UI: api.UI,
        prepare() {
            if (api.Data.load("settings") === undefined) {
                const old = new BdApi("StillSpeed");
                for (const key of ["settings", "browseOpen", "channelControlsVisible", "activityDraft", "browseRecentGuilds", "browsePosition", "widgetsCollapsed"]) {
                    const value = old.Data.load(key);
                    if (value !== undefined) api.Data.save(key, value);
                }
            }
            if (BdApi.Plugins?.isEnabled("StillSpeed")) BdApi.Plugins.disable("StillSpeed");
            if (BdApi.Themes?.isEnabled("Still")) BdApi.Themes.disable("Still");
        },
        Media: {
            read: (revision, signal) => mediaRequest(`/state?after=${revision}`, {signal, timeout: 30000}),
            command: command => {
                if (!["toggle", "previous", "next"].includes(command)) throw Error("Invalid media control");
                return mediaRequest("/control", {method: "POST", body: JSON.stringify({command}), timeout: 5000});
            }
        }
    };
}

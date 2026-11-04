// StillCord Vencord edition. MIT; see the repository LICENSE.
import definePlugin from "@utils/types";
import ErrorBoundary from "@components/ErrorBoundary";
import { FluxDispatcher, React, SelectedChannelStore, SelectedGuildStore } from "@webpack/common";

import { createHost } from "./host";
import { Lifecycle } from "./lifecycle";
import StillCord from "./runtime";

const lifecycle = new Lifecycle<Instance>();

class Instance {
    core: StillCord;
    private frame = 0;
    private frame2 = 0;
    private observer?: MutationObserver;
    private active = false;
    constructor(private host: Awaited<ReturnType<typeof createHost>>) { this.core = new StillCord(host); }
    changed = () => {
        if (!this.active || this.frame) return;
        // Flux announces navigation before React commits. Two frames allow the
        // new route to commit; a shallow structural observer covers lazy mounts.
        this.frame = requestAnimationFrame(() => {
            this.frame = 0;
            this.frame2 = requestAnimationFrame(() => { this.frame2 = 0; if (this.active) this.core.onSwitch(); });
        });
    };
    watchShell() {
        const list = document.querySelector('[class*="sidebarList_"]');
        const content = list?.parentElement?.parentElement;
        const page = content?.querySelector(':scope > [class*="page_"]');
        this.observer?.disconnect();
        if (!content || !page) return;
        this.observer = new MutationObserver(() => { this.changed(); this.watchShell(); });
        this.observer.observe(content, {childList:true});
        this.observer.observe(page, {childList:true});
        const chat = page.querySelector(':scope > [class*="chat_"]');
        if (chat) this.observer.observe(chat, {childList:true});
    }
    start() {
        this.active = true; this.core.start(); this.watchShell();
        SelectedChannelStore.addChangeListener(this.changed);
        SelectedGuildStore.addChangeListener(this.changed);
        FluxDispatcher.subscribe("CONNECTION_OPEN", this.changed);
        // Login may finish after startup. onSwitch also refreshes the shallow watch.
        const onSwitch = this.core.onSwitch.bind(this.core);
        this.core.onSwitch = () => { onSwitch(); this.watchShell(); };
    }
    stop() {
        if (!this.active) { this.host.dispose(); return; }
        this.active = false;
        SelectedChannelStore.removeChangeListener(this.changed);
        SelectedGuildStore.removeChangeListener(this.changed);
        FluxDispatcher.unsubscribe("CONNECTION_OPEN", this.changed);
        cancelAnimationFrame(this.frame); cancelAnimationFrame(this.frame2);
        this.observer?.disconnect();
        this.core.stop(); this.host.dispose();
    }
}

function Settings() {
    const root = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        const panel = lifecycle.current?.core.getSettingsPanel();
        if (panel) root.current?.append(panel);
        return () => panel?.remove();
    }, []);
    return <div ref={root}>{!lifecycle.current && <p>Enable StillCord to open its settings.</p>}</div>;
}

export default definePlugin({
    name: "StillCord",
    description: "An OLED glass workspace with floating Browse, connected bubbles, ZIP-based weather and time, and Windows media controls.",
    authors: [{name:"ll2Rawll", id:0n}],
    tags: ["Appearance", "Customisation"],
    settingsAboutComponent: ErrorBoundary.wrap(Settings, {noop:false}),
    toolboxActions: {"StillCord settings": () => lifecycle.current?.core.openSettings()},
    start: () => lifecycle.start(async () => new Instance(await createHost())).catch(error => console.error("[StillCord] Startup failed", error)),
    stop: () => lifecycle.stop()
});

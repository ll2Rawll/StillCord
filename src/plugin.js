/**
 * @name StillCord
 * @author ll2Rawll
 * @version 3.1.0
 * @description An integrated OLED glass theme, minimal workspace, widgets and thoughtful motion.
 * @website https://github.com/ll2Rawll/StillCord
 * @source https://github.com/ll2Rawll/StillCord/blob/main/StillCord.plugin.js
 */

const DEFAULTS = Object.freeze({
    palette: "oled",
    accent: "#b9d8f4",
    monochrome: true,
    starfield: true,
    backgroundStyle: "satin",
    starIntensity: "subtle",
    reduceMotion: true,
    microMotion: true,
    readingMode: true,
    smoothWheel: true,
    mouseWheelMode: true,
    respectReaderMotion: true,
    efficientGlass: true,
    reduceEffects: false,
    pauseDecorations: true,
    quietNavigation: true,
    hideActivity: true,
    customLayout: true,
    focusView: true,
    pinNavigation: false,
    movableBrowse: true,
    activityEditor: true,
    widgets: true,
    clockWidget: true,
    weatherWidget: true,
    mediaWidget: true,
    notificationsWidget: true,
    fahrenheit: true,
    clock24: false,
    zipTime: true
});

const PALETTES = Object.freeze({
    graphite: {base: "#15171c", inset: "#101216", rail: "#0d0f13", surface: "#1c1f26", raised: "#242832", hover: "#272c36", text: "#e6e9ef", muted: "#a1a9b8", faint: "#7d8798", border: "#2c313c"},
    oled: {base: "#000000", inset: "#000000", rail: "#000000", surface: "#070a0e", raised: "#0b1016", hover: "#111923", text: "#dde5ee", muted: "#939eae", faint: "#798596", border: "#1b2531"},
    light: {base: "#f6f7f9", inset: "#eceef2", rail: "#e5e8ee", surface: "#ffffff", raised: "#f0f2f6", hover: "#e3e7ee", text: "#202735", muted: "#545f73", faint: "#667085", border: "#cdd3de"}
});

const STAR_VEILS = Object.freeze({subtle: "rgb(0 0 0 / 52%)", balanced: "rgb(0 0 0 / 18%)", bright: "rgb(0 0 0 / 0%)"});

const NEUTRAL_PALETTES = Object.freeze({
    oled: {base: "#000000", inset: "#000000", rail: "#000000", surface: "#0b0b0b", raised: "#141414", hover: "#202020", text: "#e6e6e6", muted: "#ababab", faint: "#858585", border: "#292929"},
    graphite: {base: "#171717", inset: "#121212", rail: "#0e0e0e", surface: "#202020", raised: "#282828", hover: "#303030", text: "#e6e6e6", muted: "#ababab", faint: "#898989", border: "#353535"},
    light: {base: "#f6f6f6", inset: "#ededed", rail: "#e6e6e6", surface: "#ffffff", raised: "#f0f0f0", hover: "#e4e4e4", text: "#252525", muted: "#595959", faint: "#707070", border: "#d1d1d1"}
});

const UI_MOTION = `
    [role="menu"], [role="menu"] [role^="menuitem"],
    [role="dialog"], [class*="layer_"], [class*="tooltip_"],
    [class*="sidebarList_"] [class*="link_"],
    [class*="privateChannels_"] [class*="interactive_"],
    [class*="members_"] [class*="member_"],
    [class*="button_"], [class*="item_"][role="tab"],
    [class*="userProfileOuter_"], .user-profile-popout, .user-profile-modal,
    .user-profile-modal-v2, .user-profile-sidebar, [class*="messagesPopoutWrap_"],
    [class*="quickswitcher_"], [class*="emojiPicker_"]
`;
const DECORATIONS = `[class*="avatarDecoration_"], [class*="profileEffect_"], [class*="premiumIcon_"], [class*="premiumButton_"]`;
const FLOATING_SURFACES = `[role="menu"], [role="dialog"], .user-profile-popout,
    [class*="messagesPopoutWrap_"], [class*="quickswitcher_"],
    [class*="emojiPicker_"], [class*="stickerPicker_"], [class*="gifPicker_"]`;
const PRESS_CONTROLS = `#stillspeed-air-controls button, .still-settings button,
    [data-still-sidebar] [class*="link_"], [role="menu"] [role^="menuitem"]`;

function normalizedSettings(saved) {
    const next = {...DEFAULTS};
    if (!saved || typeof saved !== "object") return next;
    if (Object.hasOwn(PALETTES, saved.palette)) next.palette = saved.palette;
    if (Object.hasOwn(STAR_VEILS, saved.starIntensity)) next.starIntensity = saved.starIntensity;
    if (["satin", "stars"].includes(saved.backgroundStyle)) next.backgroundStyle = saved.backgroundStyle;
    if (typeof saved.accent === "string" && /^#[0-9a-f]{6}$/i.test(saved.accent)) next.accent = saved.accent;
    for (const key of Object.keys(DEFAULTS)) {
        if (typeof DEFAULTS[key] === "boolean" && typeof saved[key] === "boolean") next[key] = saved[key];
    }
    return next;
}

function foregroundFor(hex) {
    const rgb = hex.match(/[0-9a-f]{2}/gi).map(v => parseInt(v, 16) / 255)
        .map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4);
    const luminance = .2126 * rgb[0] + .7152 * rgb[1] + .0722 * rgb[2];
    return luminance > .179 ? "#000000" : "#ffffff";
}

function stillAttribute(node, name, value) {
    const text = String(value);
    if (node.getAttribute(name) !== text) node.setAttribute(name, text);
}

class StillCord {
    constructor(api) { this.api = api; }

    start() {
        if (this.running) return;
        this.api.prepare?.();
        this.location = stillLocation(this.api.Data.load("location"));
        this.styleCache = new Map();
        this.settings = normalizedSettings(this.api.Data.load("settings"));
        this.activity = new StillActivity(this);
        this.navigationOpen = this.api.Data.load("browseOpen") !== false;
        this.channelControlsVisible = this.api.Data.load("channelControlsVisible") !== false;
        this.auxiliary = this.channelControlsVisible ? "tools" : "none";
        this.onVisibility = () => {
            document.documentElement.classList.toggle("still-background", document.hidden);
            this.workspace?.visibilityChanged();
            this.workspace?.scheduleCaption();
            this.reader?.visibilityChanged();
            this.messageGroups?.schedule();
            this.browser?.sync();
        };
        this.running = true;
        try {
            document.addEventListener("visibilitychange", this.onVisibility);
            this.setStyle("stillcord-theme", STILL_THEME);
            this.onVisibility();
            this.apply();
        } catch (error) {
            this.stop();
            throw error;
        }
    }

    stop() {
        this.running = false;
        this.locationAbort?.abort(); this.locationAbort = null;
        this.closeSettings?.();
        this.unmountLayout();
        this.activity?.destroy();
        this.activity = null;
        if (this.onVisibility) document.removeEventListener("visibilitychange", this.onVisibility);
        this.onVisibility = null;
        document.documentElement.classList.remove("still-background", "still-color");
        this.api?.DOM.removeStyle("stillcord-theme");
        this.api?.DOM.removeStyle("stillspeed-appearance");
        this.api?.DOM.removeStyle("stillspeed-performance");
        this.styleCache?.clear();
    }

    setStyle(id, css) {
        // Focus/navigation updates should not replace global style sheets.
        // Reinsert if the style was removed externally, even if text matches.
        if (this.styleCache.get(id) === css && document.getElementById(id)) return;
        this.api.DOM.addStyle(id, css);
        this.styleCache.set(id, css);
    }

    apply() {
        if (!this.running) return;
        const s = this.settings;
        document.documentElement.classList.toggle("still-color", !s.monochrome);
        const palette = (s.monochrome ? NEUTRAL_PALETTES : PALETTES)[s.palette];
        const accent = s.monochrome ? (s.palette === "light" ? "#444444" : "#d9d9d9")
            : s.palette === "light" && s.accent === DEFAULTS.accent ? "#365fb0" : s.accent;
        const wallpaper = s.starfield && s.palette !== "light"
            ? `linear-gradient(var(--still-star-veil), var(--still-star-veil)), var(--still-${s.backgroundStyle === "stars" ? "star" : "ambient"}-map, none)`
            : "none";
        const vars = Object.entries(palette).map(([k, v]) => `--still-${k}: ${v} !important;`).join("\n");
        const isLight = s.palette === "light";
        const glassFill = isLight ? "rgb(255 255 255 / 86%)" : s.monochrome ? "rgb(17 17 17 / 82%)" : "rgb(14 17 23 / 82%)";
        const glassTint = s.monochrome ? (isLight ? "rgb(240 240 240 / 80%)" : "rgb(27 27 27 / 64%)")
            : isLight ? "rgb(235 241 249 / 80%)" : "rgb(20 25 34 / 64%)";
        this.setStyle("stillspeed-appearance", `
            :root, .theme-dark, .theme-light, .theme-darker, .theme-midnight {
                ${vars}
                --still-accent: ${accent} !important;
                --still-accent-text: ${foregroundFor(accent)} !important;
                --still-accent-soft: color-mix(in srgb, ${accent} 8%, ${palette.base}) !important;
                --still-star-veil: ${s.backgroundStyle === "stars" ? STAR_VEILS[s.starIntensity] : {subtle:"rgb(0 0 0 / 10%)", balanced:"rgb(0 0 0 / 0%)", bright:"rgb(255 255 255 / 3%)"}[s.starIntensity]} !important;
                --still-wallpaper: ${wallpaper} !important;
                --still-wallpaper-size: ${s.backgroundStyle === "stars" ? "1440px 960px" : "cover"} !important;
                --still-wallpaper-repeat: ${s.backgroundStyle === "stars" ? "repeat" : "no-repeat"} !important;
                --still-glass-fill: ${glassFill} !important;
                --still-glass-tint: ${glassTint} !important;
                --still-glass-filter: ${s.reduceEffects ? "none" : s.efficientGlass ? "blur(8px)" : "blur(12px) saturate(135%)"} !important;
                --still-glass-shadow: ${s.reduceEffects ? "none" : s.efficientGlass ? "inset 0 1px 0 rgb(255 255 255 / 11%), inset 0 -1px 0 rgb(255 255 255 / 3%), 0 6px 18px rgb(0 0 0 / 20%)" : "inset 0 1px 0 rgb(255 255 255 / 11%), inset 0 -1px 0 rgb(255 255 255 / 3%), 0 8px 28px rgb(0 0 0 / 24%)"} !important;
                --still-glass-rim: ${isLight ? "rgb(255 255 255 / 85%)" : s.monochrome ? "rgb(245 245 245 / 19%)" : "rgb(238 247 255 / 19%)"} !important;
                --still-glass-edge: ${s.monochrome ? (isLight ? "rgb(50 50 50 / 12%)" : "rgb(245 245 245 / 6%)") : isLight ? "rgb(35 55 80 / 12%)" : "rgb(238 247 255 / 6%)"} !important;
                color-scheme: ${s.palette === "light" ? "light" : "dark"} !important;
            }
        `);

        const css = [];
        if (s.reduceMotion) css.push(`
            :is(${UI_MOTION}) { transition-duration: 0s !important; animation-duration: .001ms !important; animation-iteration-count: 1 !important; }
            [class*="scroller_"], [class*="scrollerBase_"] { scroll-behavior: auto !important; }
        `);
        if (s.efficientGlass) css.push(`
            /* These bars sit over static space; gloss does not need live blur. */
            #stillspeed-air-controls,
            [data-still-sidebar] > [class*="panels_"],
            [data-still-header] [class*="toolbar_"],
            [data-still-page] [class*="channelTextArea_"] [class*="scrollableContainer_"] {
                backdrop-filter: none !important; -webkit-backdrop-filter: none !important;
            }
            [data-still-sidebar] { box-shadow: var(--still-glass-shadow), 0 16px 32px rgb(0 0 0 / 32%) !important; }
            /* Do not stack glass filters inside an already-filtered popout. */
            :is(${FLOATING_SURFACES}) :is(${FLOATING_SURFACES}) {
                backdrop-filter: none !important; -webkit-backdrop-filter: none !important;
            }
        `);
        if (s.reduceEffects) css.push(`
            :is([role="menu"], [role="dialog"], [class*="userProfileOuter_"], .user-profile-popout, .user-profile-modal, .user-profile-modal-v2, .user-profile-sidebar, [class*="messagesPopoutWrap_"], [class*="panels_"], [class*="tooltip_"], [data-still-sidebar], #stillspeed-air-controls) {
                backdrop-filter: none !important; -webkit-backdrop-filter: none !important; box-shadow: none !important;
            }
            [class*="profileFrameContainer_"]::before { box-shadow: none !important; }
        `);
        if (s.pauseDecorations) css.push(`
            :is(${DECORATIONS}), :is(${DECORATIONS})::before, :is(${DECORATIONS})::after { animation-play-state: paused !important; }
            [class*="profileEffects_"] { display: none !important; }
        `);
        css.push(`
            /* Reflow only once when a drawer or panel toggles. */
            [data-still-shell], [data-still-sidebar], [data-still-page] {
                transition: none !important;
            }
        `);
        if (s.microMotion) css.push(`
            @keyframes stillspeed-appear { from { opacity: .78; } to { opacity: 1; } }
            @media (prefers-reduced-motion: no-preference) {
                :root :is(${FLOATING_SURFACES}) {
                    animation: stillspeed-appear 100ms ease-out 1 !important;
                }
                :is(${FLOATING_SURFACES}) :is(${FLOATING_SURFACES}) { animation: none !important; }
                :is(${PRESS_CONTROLS}) { transition: opacity 80ms ease-out !important; }
                :is(${PRESS_CONTROLS}):active { opacity: .78; }
            }
        `);
        css.push(`
            @media (prefers-reduced-motion: reduce) {
                :is(${UI_MOTION}) {
                    transition-duration: 0s !important;
                    animation-duration: .001ms !important;
                    animation-iteration-count: 1 !important;
                }
                [data-still-sidebar], :is(${PRESS_CONTROLS}) {
                    animation: none !important; transition: none !important;
                }
            }
            html.still-background :is(${FLOATING_SURFACES}, [data-still-sidebar], ${PRESS_CONTROLS}),
            html.still-background [data-still-shell][data-still-navigation] [data-still-sidebar] {
                animation: none !important; transition: none !important;
            }
        `);
        css.push(`html.still-background :is(${UI_MOTION}, ${DECORATIONS}) { animation-play-state: paused !important; }`);
        if (s.quietNavigation) css.push(`
            [class*="privateChannels_"] a:is([href="/store"], [href="/shop"]),
            [class*="privateChannels_"] li:has(a:is([href="/store"], [href="/shop"])) { display: none !important; }
        `);
        if (s.hideActivity) css.push(`[class*="nowPlayingColumn_"], [class*="nowPlayingSidebar_"] { display: none !important; }`);
        this.setStyle("stillspeed-performance", css.join("\n"));
        this.mountLayout();
    }

    onSwitch() {
        if (!this.running) return;
        this.mountLayout();
    }

    mountLayout() {
        if (!this.settings.customLayout) { this.unmountLayout(); return; }
        const list = document.querySelector('[class*="sidebarList_"]');
        const sidebar = list?.parentElement;
        const content = sidebar?.parentElement;
        const shell = content?.parentElement;
        const page = content?.querySelector(':scope > [class*="page_"]');
        const chat = page?.querySelector('[class*="chat_"]') || null;
        const header = chat?.querySelector(':scope > [class*="title_"], :scope > [class*="subtitleContainer_"] > [class*="title_"]') || null;
        const chatContent = chat?.querySelector('[class*="chatContent_"]') || null;
        const messages = chatContent?.querySelector(':scope > [class*="messagesWrapper_"]') || null;
        const composer = chatContent?.querySelector(':scope > [class*="form_"]') || null;
        // Only mark the verified current desktop shell; unknown structures keep
        // their native layout and receive material styling alone.
        if (!shell?.matches('[class*="base_"]') || !sidebar?.matches('[class*="sidebar_"]') ||
            !sidebar.querySelector(':scope > [class*="guilds_"]') || !page) {
            this.unmountLayout();
            if (!list && !this.cancelWaiting && this.api.DOM.onAdded) {
                this.cancelWaiting = this.api.DOM.onAdded('[class*="sidebarList_"]', () => {
                    this.cancelWaiting = null;
                    if (this.running) this.mountLayout();
                });
            }
            return;
        }
        if (this.shell !== shell || this.sidebar !== sidebar || this.page !== page ||
            this.chat !== chat || this.header !== header || this.messages !== messages || this.composer !== composer || !this.controls?.isConnected || !this.workspace?.handle?.isConnected) {
            const wasOpen = this.navigationOpen;
            this.unmountLayout();
            this.shell = shell;
            this.sidebar = sidebar;
            this.page = page;
            this.list = list;
            this.chat = chat;
            this.header = header;
            this.messages = messages;
            this.composer = composer;
            this.marked = [[shell, "data-still-shell"], [sidebar, "data-still-sidebar"], [page, "data-still-page"],
                [chat, "data-still-chat"], [header, "data-still-header"],
                [messages, "data-still-messages"], [composer, "data-still-composer"]].filter(([node]) => node);
            this.previousMarks = this.marked.map(([node, name]) => [node, name, node.getAttribute(name)]);
            for (const [node, name] of this.marked) node.setAttribute(name, "");
            if (!sidebar.id) {
                this.previousMarks.push([sidebar, "id", null]);
                sidebar.id = "stillspeed-air-sidebar";
            }
            this.controls = document.createElement("nav");
            this.controls.id = "stillspeed-air-controls";
            this.controls.setAttribute("aria-label", "Still layout");
            this.controls.style.display = "none"; // Safe when the theme is off.
            const icon = (paths) => {
                const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                for (const [key, value] of Object.entries({viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "1.6", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"})) svg.setAttribute(key, value);
                for (const d of paths) { const p = document.createElementNS(svg.namespaceURI, "path"); p.setAttribute("d", d); svg.append(p); }
                return svg;
            };
            this.browse = document.createElement("button");
            this.browse.type = "button";
            this.browse.setAttribute("aria-label", "Browse servers and channels");
            this.browse.setAttribute("aria-controls", sidebar.id);
            this.browse.setAttribute("aria-keyshortcuts", "Control+Alt+B");
            this.browse.title = "Servers, channels and your controls · Ctrl+Alt+B";
            const label = document.createElement("span");
            label.dataset.stillBrowseLabel = "";
            label.textContent = "Browse";
            this.browse.append(icon(["M4 5h16v14H4z", "M10 5v14"]), label);
            this.browse.addEventListener("click", () => this.setNavigation(!this.navigationOpen, true));
            this.focus = document.createElement("button");
            this.focus.type = "button";
            this.focus.setAttribute("aria-label", "Focus view");
            this.focus.append(icon(["M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3", "M9 12h6"]));
            this.focus.addEventListener("click", () => this.update("focusView", !this.settings.focusView));
            this.controls.append(this.browse, this.focus);
            shell.append(this.controls);
            this.onLayoutKey = event => {
                if (event.key === "Escape" && this.auxiliary === "activity" && !this.hasOpenPopup()) {
                    event.preventDefault(); this.closeAuxiliary(); this.browser?.menuButton?.focus({preventScroll:true}); return;
                }
                // Ordinary typing takes this fast exit before ANY layout read.
                const shortcut = event.ctrlKey && event.altKey && !event.shiftKey && !event.metaKey && event.code === "KeyB" && !event.repeat && !event.getModifierState("AltGraph");
                if (!shortcut) return;
                if (!this.running || !this.controls?.isConnected || shell.closest('[aria-hidden="true"]')) return;
                if (shortcut) {
                    event.preventDefault();
                    this.setNavigation(!this.navigationOpen, true);
                    (this.navigationOpen ? this.workspace?.grip : this.browse)?.focus({preventScroll: true});
                }
            };
            document.addEventListener("keydown", this.onLayoutKey);
            this.workspace = new StillWorkspace(this);
            this.browser = new StillBrowse(this);
            this.reader = messages && composer ? new StillReader(this) : null;
            this.messageGroups = messages ? new StillMessageGroups(messages, () => { this.workspace?.scheduleCaption(); this.reader?.scheduleLayout(); }, () => this.reader?.sync()) : null;
            // Watch structural child lists, including Discord's live wrappers.
            // Never observe the message list, its subtree, or attributes.
            this.shellObserver = new MutationObserver(records => {
                if (!this.running) return;
                if (!this.shell?.isConnected || records.some(record => record.target !== shell.parentElement)) this.mountLayout();
            });
            const structuralNodes = new Set([shell.parentElement, content, page, chat, chatContent, chatContent?.parentElement, header?.parentElement]);
            for (let ancestor = chat?.parentElement; ancestor && ancestor !== page; ancestor = ancestor.parentElement) structuralNodes.add(ancestor);
            for (const node of structuralNodes) if (node) this.shellObserver.observe(node, {childList: true});
            this.setNavigation(wasOpen);
        }
        const focusState = this.settings.focusView ? "on" : "off";
        if (this.shell.getAttribute("data-still-focus") !== focusState) {
            this.shell.setAttribute("data-still-focus", focusState);
            this.focus.setAttribute("aria-pressed", String(this.settings.focusView));
            this.focus.title = this.settings.focusView ? "Focus on · click to reveal open member and profile panels" : "Focus off · click to hide optional side panels";
        }
        this.workspace?.sync();
        this.browser?.sync();
        this.workspace?.scheduleCaption();
        this.reader?.sync();
        this.reader?.scheduleLayout();
    }

    hasOpenPopup() {
        return [...document.querySelectorAll('[role="dialog"], [role="menu"]')]
            .some(node => node.getClientRects().length && !node.closest('[aria-hidden="true"]'));
    }

    setNavigation(open, remember = false) {
        if (!this.shell) return;
        const state = open ? "open" : "closed";
        if (this.navigationOpen === Boolean(open) && this.shell.getAttribute("data-still-navigation") === state) return;
        const restoreFocus = !open && this.sidebar.contains(document.activeElement);
        if (!open) this.browser?.closeMenu();
        this.navigationOpen = Boolean(open);
        if (remember) this.api.Data.save("browseOpen", this.navigationOpen);
        this.shell.setAttribute("data-still-navigation", state);
        this.browse?.setAttribute("aria-expanded", String(Boolean(open)));
        if (restoreFocus) this.browse?.focus({preventScroll:true});
        if (open) this.workspace?.fitBrowse();
        this.browser?.sync();
        this.workspace?.scheduleCaption();
    }

    setAuxiliary(mode) {
        const next = ["tools", "activity"].includes(mode) ? mode : "none";
        if (next !== "activity" && this.channelControlsVisible !== (next === "tools")) {
            this.channelControlsVisible = next === "tools";
            this.api.Data.save("channelControlsVisible", this.channelControlsVisible);
        }
        if (this.auxiliary === next) return;
        this.auxiliary = next;
        this.workspace?.sync();
    }

    closeAuxiliary() {
        if (this.auxiliary !== "activity") return;
        this.auxiliary = this.channelControlsVisible ? "tools" : "none";
        this.workspace?.sync();
    }

    unmountLayout() {
        this.reader?.destroy();
        this.reader = null;
        this.browser?.destroy();
        this.browser = null;
        this.messageGroups?.destroy();
        this.messageGroups = null;
        this.workspace?.destroy();
        this.workspace = null;
        this.cancelWaiting?.();
        this.cancelWaiting = null;
        this.shellObserver?.disconnect();
        this.shellObserver = null;
        if (this.onLayoutKey) document.removeEventListener("keydown", this.onLayoutKey);
        if (this.onLayoutClick) this.shell?.removeEventListener("click", this.onLayoutClick);
        if (this.controls?.contains(document.activeElement)) document.activeElement.blur();
        this.controls?.remove();
        this.shell?.removeAttribute("data-still-navigation");
        this.shell?.removeAttribute("data-still-focus");
        for (const [node, name, value] of this.previousMarks || []) {
            if (value === null) node.removeAttribute(name); else node.setAttribute(name, value);
        }
        this.previousMarks = [];
        this.marked = [];
        this.controls = this.shell = this.sidebar = this.page = this.list = this.browse = this.focus = null;
        this.chat = this.header = this.messages = this.composer = null;
        this.onLayoutKey = this.onLayoutClick = null;
    }

    update(key, value) {
        if (!this.running || !Object.hasOwn(DEFAULTS, key)) return;
        const next = normalizedSettings({...this.settings, [key]: value});
        if (next[key] === this.settings[key]) return;
        this.settings = next;
        this.api.Data.save("settings", this.settings);
        if (["customLayout", "focusView", "pinNavigation", "movableBrowse", "activityEditor", "widgets", "clockWidget", "weatherWidget", "mediaWidget", "notificationsWidget", "fahrenheit", "clock24", "zipTime"].includes(key)) this.mountLayout();
        else this.apply();
    }

    async setLocation(zip) {
        if (!this.running) throw new Error("Enable StillCord before updating your location.");
        this.locationAbort?.abort();
        const abort = new AbortController(); this.locationAbort = abort;
        try {
            const place = await stillResolveZip(this.api, zip, abort.signal);
            if (!this.running || abort.signal.aborted || this.locationAbort !== abort) throw new DOMException("Cancelled", "AbortError");
            this.location = place; this.api.Data.save("location", place);
            this.workspace?.changeLocation();
            return place;
        } finally { if(this.locationAbort === abort)this.locationAbort = null; }
    }

    getSettingsPanel() {
        if (!this.running) { const note = document.createElement("p"); note.textContent = "Enable StillCord to customize your workspace."; return note; }
        return stillSettingsPanel(this);
    }

    openSettings() {
        if (this.settingsDialog?.isConnected) { this.settingsDialog.focus(); return; }
        const previous = document.activeElement, dialog = document.createElement("dialog");
        dialog.id = "stillcord-settings-dialog"; dialog.setAttribute("aria-label", "StillCord settings");
        const close = document.createElement("button"); close.type = "button"; close.className = "sc-settings-close";
        close.textContent = "×"; close.setAttribute("aria-label", "Close StillCord settings");
        this.closeSettings = () => { dialog.close(); dialog.remove(); this.settingsDialog = null; this.closeSettings = null; if(previous?.isConnected)previous.focus({preventScroll:true}); };
        close.addEventListener("click", () => this.closeSettings?.());
        dialog.addEventListener("cancel", event => { event.preventDefault(); this.closeSettings?.(); });
        dialog.addEventListener("click", event => { if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)this.closeSettings?.();} });
        dialog.append(close, this.getSettingsPanel()); document.body.append(dialog); this.settingsDialog=dialog; dialog.showModal();
    }
};

// One painted surface per native consecutive-message group. Discord retains
// every message node and its controls. Sizing affects only an absolute decoration,
// so ResizeObserver cannot feed back into layout. No polling or content scanning.
/* A small local directory over Discord's stores. Native channel, voice and
   account controls stay mounted; no DOM polling or replacement of React nodes. */
/* Uses Discord's native LOCAL_ACTIVITY_UPDATE event through the host API. Activity is
   published only on an explicit form submit, never on input or startup. */
class StillActivity {
    constructor(plugin) {
        this.api = plugin.api;
        this.socketId = "StillSpeed-ProfileActivity";
        this.listeners = new Set();
        this.active = false;
        this.owned = false;
        this.error = "";
        const saved = this.api.Data.load("activityDraft") || {};
        this.draft = {type:saved.type === 2 ? 2 : 0, name:typeof saved.name === "string" ? saved.name.slice(0,128) : "", details:typeof saved.details === "string" ? saved.details.slice(0,128) : ""};
        this.savedSignature = JSON.stringify(this.draft);
        try {
            this.local = this.api.Webpack?.getStore?.("LocalActivityStore");
            this.privacy = this.api.Webpack?.getStore?.("UserSettingsProtoStore");
            this.dispatcher = this.local?._dispatcher || this.api.Webpack?.getModule?.(m => m && typeof m.dispatch === "function" && typeof m.subscribe === "function" && m._actionHandlers, {searchExports:true});
        } catch {}
        this.available = typeof this.dispatcher?.dispatch === "function" && typeof this.local?.getActivities === "function";
        this.onPrivacy = () => this.emit();
        this.privacy?.addChangeListener?.(this.onPrivacy);
    }
    sharing() { return this.privacy?.settings?.status?.showCurrentGame?.value; }
    saveDraft() {
        const signature = JSON.stringify(this.draft);
        if (signature === this.savedSignature) return;
        this.api.Data.save("activityDraft", {...this.draft});
        this.savedSignature = signature;
    }
    emit() { for (const fn of this.listeners) fn(); }
    apply() {
        if (!this.available) { this.error = "Activity controls are unavailable in this Discord version."; this.emit(); return false; }
        const name = this.draft.name.trim(), details = this.draft.details.trim();
        if (!name) { this.error = "Enter a game or song name."; this.emit(); return false; }
        const activity = {name, type:this.draft.type === 2 ? 2 : 0, application_id:"0", flags:1};
        if (details) activity.details = details;
        try {
            this.owned = true;
            this.dispatcher.dispatch({type:"LOCAL_ACTIVITY_UPDATE", socketId:this.socketId, activity});
            this.active = true;
            this.appliedSignature = JSON.stringify(this.draft);
            this.error = "";
            this.saveDraft();
            this.emit();
            return true;
        } catch {
            this.error = "Discord could not apply this activity. Try again.";
            this.emit();
            return false;
        }
    }
    clear() {
        if (!this.owned) return true;
        try {
            this.dispatcher.dispatch({type:"LOCAL_ACTIVITY_UPDATE", socketId:this.socketId, activity:null});
            this.active = this.owned = false;
            this.error = "";
            this.emit();
            return true;
        } catch {
            this.error = "Discord could not clear the activity. Try again.";
            this.emit(); return false;
        }
    }
    destroy() {
        this.listeners.clear();
        this.clear();
        this.saveDraft();
        this.privacy?.removeChangeListener?.(this.onPrivacy);
    }
}

class StillActivityView {
    constructor(workspace) {
        this.workspace = workspace;
        this.model = workspace.plugin.activity;
        const el = (tag, cls, text) => workspace.el(tag, cls, text);
        this.root = el("form", "still-activity-editor");
        this.root.id = "stillspeed-activity-editor";
        this.root.style.display = "none";
        this.root.setAttribute("aria-label", "Profile activity editor");
        const heading = el("div", "still-activity-heading");
        heading.append(el("span", "", "Profile activity"));
        this.state = el("span", "still-activity-state");
        heading.append(this.state);
        const close = workspace.button("Close activity editor", "close", () => workspace.plugin.closeAuxiliary());
        close.classList.add("still-activity-dismiss"); heading.append(close);
        const row = el("div", "still-activity-fields");
        this.type = el("select");
        this.type.setAttribute("aria-label", "Activity type");
        for (const [value, text] of [[0,"Playing"],[2,"Listening"]]) { const option = el("option", "", text); option.value = value; this.type.append(option); }
        this.type.value = String(this.model.draft.type);
        this.name = el("input"); this.name.type = "text"; this.name.maxLength = 128; this.name.required = true;
        this.name.placeholder = "Game or song"; this.name.setAttribute("aria-label", "Activity name"); this.name.autocomplete = "off"; this.name.value = this.model.draft.name;
        row.append(this.type, this.name);
        this.details = el("input"); this.details.type = "text"; this.details.maxLength = 128; this.details.placeholder = "Details · optional"; this.details.setAttribute("aria-label", "Activity details"); this.details.autocomplete = "off"; this.details.value = this.model.draft.details;
        const actions = el("div", "still-activity-actions");
        this.note = el("span", "still-activity-note"); this.note.setAttribute("role", "status");
        this.clear = el("button", "still-activity-clear", "Clear"); this.clear.type = "button";
        this.apply = el("button", "still-activity-apply", "Apply"); this.apply.type = "submit";
        actions.append(this.note, this.clear, this.apply);
        this.hint = el("p", "still-activity-hint");
        this.root.append(heading, row, this.details, actions, this.hint);
        this.root.addEventListener("input", () => this.readDraft());
        this.root.addEventListener("change", () => { this.readDraft(); this.model.saveDraft(); });
        this.root.addEventListener("submit", e => { e.preventDefault(); this.readDraft(); if (this.name.value.trim()) this.model.apply(); else this.name.focus(); });
        this.clear.addEventListener("click", () => this.model.clear());
        this.refresh = () => this.render();
        this.model.listeners.add(this.refresh);
        workspace.shell.append(this.root);
        workspace.shell.setAttribute("data-still-activity-editor", "");
        this.render();
    }
    readDraft() { this.model.draft = {type:Number(this.type.value) === 2 ? 2 : 0, name:this.name.value.slice(0,128), details:this.details.value.slice(0,128)}; this.render(); }
    render() {
        const model = this.model;
        this.state.textContent = model.active && JSON.stringify(model.draft) === model.appliedSignature ? "Applied" : model.draft.name.trim() ? "Draft" : "Off";
        this.note.textContent = model.error ? "Try again" : model.active ? "Ready" : "";
        this.apply.disabled = !model.available;
        this.clear.disabled = !model.owned;
        this.hint.textContent = model.error || (!model.available ? "Activity controls unavailable in this Discord version." : model.sharing() === false ? "Enable activity sharing in Settings → Activity Privacy." : "Apply shares on your profile. Clear stops this activity.");
    }
    destroy() {
        this.readDraft(); this.model.saveDraft();
        this.model.listeners.delete(this.refresh);
        this.root.remove();
        this.workspace.shell.removeAttribute("data-still-activity-editor");
    }
}


class StillBrowse {
    constructor(plugin) {
        this.plugin = plugin;
        this.api = plugin.api;
        this.sidebar = plugin.sidebar;
        this.workspace = plugin.workspace;
        this.alive = true;
        this.subscriptions = [];
        this.mode = "channels";
        this.unreadOnly = false;
        this.query = "";
        this.recent = (this.api.Data.load("browseRecentGuilds") || []);
        if (!Array.isArray(this.recent)) this.recent = [];
        this.recent = this.recent.filter(id => typeof id === "string").slice(0, 4);
        try {
            this.stores = Object.fromEntries(["GuildStore", "SortedGuildStore", "SelectedGuildStore", "SelectedChannelStore", "GuildChannelStore", "ChannelStore", "PermissionStore", "ReadStateStore"].map(n => [n, this.api.Webpack?.getStore?.(n)]));
            this.route = this.workspace.route || this.api.Webpack?.getByKeys?.("transitionTo", "replaceWith");
            if (!this.route) {
                const fn = this.api.Webpack?.getModule?.(v => typeof v === "function" && Function.prototype.toString.call(v).includes("transitionTo -"), {searchExports: true});
                if (fn) this.route = {transitionTo: fn};
            }
            if (!this.stores.GuildStore?.getGuilds || !this.stores.SelectedGuildStore?.getGuildId || !this.stores.GuildChannelStore?.getChannels || !this.stores.PermissionStore?.can || !this.route?.transitionTo) return;
            this.mount();
            for (const [name, store] of Object.entries(this.stores)) {
                if (!store?.addChangeListener || !store?.removeChangeListener) continue;
                const listener = () => {
                    const showingResults = this.mode === "servers" || this.mode === "channels" && (this.query || this.unreadOnly);
                    if (name !== "SelectedGuildStore" && !showingResults) return;
                    if (this.mode === "servers" && !["GuildStore", "SortedGuildStore", "SelectedGuildStore"].includes(name)) return;
                    if (name === "ReadStateStore" && (this.mode !== "channels" || (!this.query && !this.unreadOnly))) return;
                    this.schedule();
                };
                store.addChangeListener(listener);
                this.subscriptions.push(() => store.removeChangeListener(listener));
            }
            this.sync();
        } catch {
            // An unsupported client keeps the complete native sidebar.
            this.destroy();
        }
    }
    el(tag, cls = "", text) { return this.workspace.el(tag, cls, text); }
    button(label, action, cls = "") {
        const b = this.el("button", cls, label);
        b.type = "button";
        b.addEventListener("click", action);
        return b;
    }
    mount() {
        this.toolbar = this.el("div", "still-browse-toolbar");
        this.toolbar.style.display = "none";
        this.toolbar.setAttribute("aria-label", "Browse navigation");
        const top = this.el("div", "still-browse-top");
        const modes = this.el("div", "still-browse-modes");
        modes.setAttribute("role", "group");
        modes.setAttribute("aria-label", "Browse view");
        this.channelButton = this.button("Channels", () => this.setMode("channels"));
        this.serverButton = this.button("Servers", () => this.setMode("servers"));
        modes.append(this.channelButton, this.serverButton);
        const home = this.workspace.button("Direct messages", "inbox", () => this.navigate("/channels/@me"));
        home.classList.add("still-browse-utility");
        this.menuButton = this.workspace.button("More Browse options", "more", () => this.menu ? this.closeMenu() : this.openMenu());
        this.menuButton.classList.add("still-browse-utility");
        this.menuButton.setAttribute("aria-haspopup", "menu");
        this.menuButton.setAttribute("aria-expanded", "false");
        top.append(modes, home, this.menuButton);
        this.searchRow = this.el("div", "still-browse-search-row");
        const field = this.el("div", "still-browse-search");
        const searchIcon = this.el("span", "still-browse-search-symbol", "⌕");
        searchIcon.setAttribute("aria-hidden", "true");
        this.input = this.el("input");
        this.input.type = "search";
        this.input.autocomplete = "off";
        this.input.spellcheck = false;
        this.input.addEventListener("input", () => {
            this.query = this.input.value.trim().toLocaleLowerCase();
            this.sync();
        });
        this.input.addEventListener("keydown", e => {
            if (e.key === "Escape") {
                e.preventDefault(); e.stopPropagation();
                this.input.value = this.query = "";
                this.unreadOnly = false; this.sync();
            } else if (e.key === "ArrowDown") {
                if (this.sidebar.getAttribute("data-still-browse-results") !== "true") return;
                const first = this.results.querySelector("button[data-browse-key]");
                if (first) { e.preventDefault(); first.focus(); }
            } else if (e.key === "Enter") {
                if (this.sidebar.getAttribute("data-still-browse-results") !== "true") return;
                const first = this.results.querySelector("button[data-browse-key]");
                if (first) { e.preventDefault(); first.click(); }
            }
        });
        field.append(searchIcon, this.input);
        this.unreadButton = this.button("Unread", () => { this.unreadOnly = !this.unreadOnly; this.sync(); }, "still-browse-unread");
        this.unreadButton.setAttribute("aria-label", "Show unread channels");
        this.searchRow.append(field, this.unreadButton);
        this.toolbar.append(top, this.searchRow);
        this.results = this.el("div", "still-browse-results");
        this.results.style.display = "none";
        this.results.setAttribute("role", "region");
        this.results.setAttribute("aria-label", "Browse results");
        this.results.addEventListener("keydown", e => {
            const rows = [...this.results.querySelectorAll("button[data-browse-key]")];
            const index = rows.indexOf(document.activeElement);
            if (index < 0) return;
            if (["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
                e.preventDefault();
                const next = e.key === "Home" ? 0 : e.key === "End" ? rows.length - 1 : Math.max(0, Math.min(rows.length - 1, index + (e.key === "ArrowDown" ? 1 : -1)));
                rows[next]?.focus();
            } else if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); this.input.focus(); }
        });
        this.sidebar.append(this.toolbar, this.results);
        this.sidebar.setAttribute("data-still-browser", "");
        this.plugin.shell.setAttribute("data-still-clean-left", "");
    }
    openMenu() {
        if (this.menu) return;
        this.menu = this.el("div", "still-browse-menu");
        this.menu.setAttribute("role", "menu");
        this.menu.setAttribute("aria-label", "More Browse options");
        const item = (label, action, checked) => {
            const button = this.button(label, () => { this.closeMenu(false); action(); }, "still-browse-menu-item");
            button.setAttribute("role", checked === undefined ? "menuitem" : "menuitemcheckbox");
            button.setAttribute("aria-label", label);
            if (checked !== undefined) button.setAttribute("aria-checked", String(checked));
            this.menu.append(button);
        };
        item("Channel controls", () => this.plugin.setAuxiliary(this.plugin.auxiliary === "tools" ? "none" : "tools"), this.plugin.auxiliary === "tools");
        if (this.workspace.activityView) item("Profile activity", () => {
            if (this.plugin.auxiliary === "activity") this.plugin.closeAuxiliary();
            else this.plugin.setAuxiliary("activity");
            if (this.plugin.auxiliary === "activity") this.workspace.activityView?.name.focus({preventScroll:true});
        }, this.plugin.auxiliary === "activity");
        item("Discord tools and server folders", () => this.setMode(this.mode === "native" ? "channels" : "native"), this.mode === "native");
        item("StillCord settings", () => this.plugin.openSettings());
        item("Focus view", () => this.plugin.update("focusView", !this.plugin.settings.focusView), this.plugin.settings.focusView);
        item("Reset Browse position", () => this.workspace.resetPosition());
        this.menu.addEventListener("keydown", e => {
            const buttons = [...this.menu.querySelectorAll("button")];
            const current = buttons.indexOf(document.activeElement);
            if (["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
                e.preventDefault(); const next = e.key === "Home" ? 0 : e.key === "End" ? buttons.length - 1 : (current + (e.key === "ArrowDown" ? 1 : -1) + buttons.length) % buttons.length; buttons[next]?.focus();
            } else if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); this.closeMenu(true); }
            else if (e.key === "Tab") this.closeMenu(true);
        });
        this.outsideMenu = e => { if (!this.menu?.contains(e.target) && !this.menuButton.contains(e.target)) this.closeMenu(false); };
        document.addEventListener("pointerdown", this.outsideMenu);
        this.toolbar.append(this.menu);
        stillAttribute(this.menuButton, "aria-expanded", true);
        this.menu.querySelector("button")?.focus({preventScroll:true});
    }
    closeMenu(focus = false) {
        if (!this.menu) return;
        document.removeEventListener("pointerdown", this.outsideMenu);
        this.menu.remove(); this.menu = null; this.outsideMenu = null;
        stillAttribute(this.menuButton, "aria-expanded", false);
        if (focus) this.menuButton.focus({preventScroll:true});
    }
    setMode(mode) {
        this.closeMenu();
        this.mode = mode;
        this.input.value = this.query = "";
        this.unreadOnly = false;
        this.sync();
        if (mode === "servers") this.input.focus({preventScroll: true});
    }
    schedule() {
        if (!this.alive || !this.toolbar || document.hidden || !this.plugin.navigationOpen || this.timer) return;
        this.timer = setTimeout(() => { this.timer = 0; this.sync(); }, 120);
    }
    sync() {
        if (!this.alive || !this.toolbar || document.hidden || !this.plugin.navigationOpen) return;
        try {
            this.guildId = this.stores.SelectedGuildStore.getGuildId() || null;
            if (this.guildId !== this.lastGuildId) {
                if (this.lastGuildId !== undefined) { this.mode = "channels"; this.input.value = this.query = ""; this.unreadOnly = false; }
                this.lastGuildId = this.guildId;
                if (this.guildId && this.recent[0] !== this.guildId) {
                    this.recent = [this.guildId, ...this.recent.filter(id => id !== this.guildId)].slice(0, 4);
                    this.api.Data.save("browseRecentGuilds", this.recent);
                }
            }
            const servers = this.mode === "servers";
            const isResults = servers || this.mode === "channels" && Boolean(this.query || this.unreadOnly);
            stillAttribute(this.sidebar, "data-still-browse-view", this.mode);
            stillAttribute(this.sidebar, "data-still-browse-results", isResults);
            stillAttribute(this.channelButton, "aria-pressed", this.mode === "channels");
            stillAttribute(this.serverButton, "aria-pressed", servers);
            stillAttribute(this.input, "placeholder", servers ? "Find a server…" : "Find a channel…");
            stillAttribute(this.input, "aria-label", servers ? "Find a server" : "Find a channel");
            if (this.unreadButton.hidden !== servers) this.unreadButton.hidden = servers;
            stillAttribute(this.unreadButton, "aria-pressed", this.unreadOnly);
            if (this.searchRow.hidden !== (this.mode === "native")) this.searchRow.hidden = this.mode === "native";
            if (isResults) this.render(servers ? this.serverRows() : this.channelRows(), servers);
        } catch {
            this.sidebar.setAttribute("data-still-browse-view", "native");
            this.sidebar.setAttribute("data-still-browse-results", "false");
        }
    }
    serverRows() {
        const guilds = this.stores.GuildStore.getGuilds();
        const order = this.stores.SortedGuildStore?.getFlattenedGuildIds?.() || Object.keys(guilds);
        const ids = [...new Set([...this.recent, ...order, ...Object.keys(guilds)])];
        return ids.map(id => guilds[id]).filter(g => g && (!this.query || g.name.toLocaleLowerCase().includes(this.query))).map(g => ({id:g.id, name:g.name, icon:g.icon, current:g.id===this.guildId, group:!this.query && this.recent.includes(g.id) ? "Recent" : this.query ? "Search results" : "All servers"}));
    }
    channelRows() {
        if (!this.guildId) return [];
        const groups = this.stores.GuildChannelStore.getChannels(this.guildId);
        const seen = new Set();
        const selected = this.stores.SelectedChannelStore?.getChannelId?.();
        return [...(groups.SELECTABLE || []), ...(groups.VOCAL || [])].map(entry => entry.channel).filter(c => {
            if (!c || seen.has(c.id) || c.type === 4) return false;
            seen.add(c.id);
            if (!this.stores.PermissionStore.can(1024n, c)) return false;
            const category = this.stores.ChannelStore?.getChannel?.(c.parent_id)?.name || "";
            return (!this.query || (c.name + " " + category).toLocaleLowerCase().includes(this.query)) && (!this.unreadOnly || this.stores.ReadStateStore?.hasUnread?.(c.id) || this.stores.ReadStateStore?.getMentionCount?.(c.id) > 0);
        }).map(c => ({id:c.id, name:c.name, group:"Channels", context:this.stores.ChannelStore?.getChannel?.(c.parent_id)?.name || "", voice:c.type===2 || c.type===13, current:c.id===selected, mentions:this.stores.ReadStateStore?.getMentionCount?.(c.id) || 0}));
    }
    render(rows, servers) {
        const signature = JSON.stringify([servers, this.query, this.unreadOnly, this.guildId, rows]);
        if (signature === this.signature) return;
        this.signature = signature;
        const focused = this.results.contains(document.activeElement) ? document.activeElement.dataset.browseKey : null;
        const fragment = document.createDocumentFragment();
        const heading = this.el("div", "still-browse-heading");
        heading.append(this.el("span", "", servers ? "Your spaces" : this.unreadOnly ? "Unread channels" : "Channel results"), this.el("span", "still-browse-count", rows.length));
        fragment.append(heading);
        let lastGroup;
        for (const row of rows) {
            if (servers && row.group !== lastGroup) { fragment.append(this.el("div", "still-browse-section", row.group)); lastGroup = row.group; }
            const button = this.button("", () => servers ? this.openServer(row.id) : this.navigate(`/channels/${this.guildId}/${row.id}`), "still-browse-row");
            button.dataset.browseKey = row.id;
            if (row.current) button.setAttribute("aria-current", "true");
            const icon = this.el("span", "still-browse-avatar", servers ? row.name.replace(/[^\p{L}\p{N}\s]/gu, "").split(/\s+/).filter(Boolean).slice(0,2).map(s=>s[0]).join("").toUpperCase() || "·" : row.voice ? "◖" : "#");
            icon.setAttribute("aria-hidden", "true");
            if (servers && /^\d{5,20}$/.test(row.id) && /^[a-zA-Z0-9_]+$/.test(row.icon || "")) {
                const img = this.el("img"); img.alt = ""; img.loading = "lazy"; img.decoding = "async";
                img.src = `https://cdn.discordapp.com/icons/${row.id}/${row.icon}.webp?size=64`;
                img.addEventListener("error", () => img.remove(), {once:true}); icon.append(img);
            }
            const copy = this.el("span", "still-browse-copy");
            copy.append(this.el("span", "still-browse-name", row.name));
            if (!servers && (row.context || row.voice)) copy.append(this.el("span", "still-browse-context", [row.context, row.voice ? "Voice" : ""].filter(Boolean).join(" · ")));
            const end = this.el("span", "still-browse-end", row.mentions ? row.mentions > 99 ? "99+" : row.mentions : row.current ? "•" : "›");
            end.setAttribute("aria-hidden", "true");
            if (row.mentions) button.setAttribute("aria-label", `${row.name}, ${row.mentions} mentions`);
            button.title = row.name;
            button.append(icon, copy, end); fragment.append(button);
        }
        if (!rows.length) {
            const empty = this.el("div", "still-browse-empty");
            empty.append(this.el("strong", "", !servers && !this.guildId ? "Direct messages" : this.unreadOnly && !this.query ? "All caught up" : "Nothing found"), this.el("p", "", !servers && !this.guildId ? "Clear the search to return to your conversations." : this.unreadOnly && !this.query ? "Switch off Unread to see every channel." : "Try a shorter name or another search."));
            fragment.append(empty);
        }
        this.results.replaceChildren(fragment);
        if (focused) [...this.results.querySelectorAll("button[data-browse-key]")].find(e=>e.dataset.browseKey===focused)?.focus({preventScroll:true});
        else this.results.scrollTop = 0;
    }
    openServer(id) {
        const channelId = this.stores.SelectedChannelStore?.getLastSelectedChannelId?.(id);
        this.navigate(`/channels/${id}${channelId ? `/${channelId}` : ""}`);
    }
    navigate(path) {
        this.setMode("channels");
        try { this.route.transitionTo(path); }
        catch { this.setMode("native"); this.api.UI?.showToast("Use Discord tools to open this destination.", {type:"info"}); }
    }
    destroy() {
        this.alive = false;
        this.closeMenu();
        clearTimeout(this.timer);
        for (const unsubscribe of this.subscriptions || []) unsubscribe();
        this.subscriptions = [];
        this.toolbar?.remove(); this.results?.remove();
        for (const key of ["data-still-browser", "data-still-browse-view", "data-still-browse-results"]) this.sidebar?.removeAttribute(key);
        this.plugin.shell?.removeAttribute("data-still-clean-left");
    }
}


// A finite reading transition and short wheel easing. No idle frame loop,
// message reparenting, draft storage or whole-tree observer.
class StillReader {
    constructor(plugin) {
        this.plugin = plugin; this.shell = plugin.shell; this.messages = plugin.messages; this.composer = plugin.composer;
        this.alive = true; this.expanded = false; this.wantReading = false; this.mode = "latest";
        this.animations = []; this.revision = 0; this.listeners = [];
        this.motion = matchMedia("(prefers-reduced-motion: reduce)");
        this.tab = document.createElement("button"); this.tab.type = "button"; this.tab.id = "stillspeed-reader-tab";
        this.tab.textContent = "Message"; this.tab.title = "Restore the message input"; this.tab.setAttribute("aria-label", "Write a message");
        this.tab.style.display = "none"; this.shell.append(this.tab); this.showTab(false);
        this.rim = document.createElement("span"); this.rim.className = "still-reader-rim";
        this.rim.setAttribute("aria-hidden", "true"); this.messages.append(this.rim);
        this.listen(this.tab, "click", () => this.showComposer(true));
        this.listen(this.composer, "focusin", () => { this.manualReveal = true; this.setReading(false, {pin: false}); });
        this.listen(this.composer, "beforeinput", () => { this.typingAt = performance.now(); this.manualReveal = true; this.setReading(false, {pin:false, instant:true}); });
        this.listen(this.composer, "keydown", event => {
            if (!this.expanded) return;
            if (event.key === "Enter") { event.preventDefault(); event.stopPropagation(); this.manualReveal = true; this.setReading(false, {pin:false, instant:true}); }
        }, true);
        this.listen(this.composer, "focusout", () => this.scheduleCheck());
        this.listen(this.motion, "change", () => this.visibilityChanged());
        this.sync(); this.scheduleLayout();
    }
    listen(target, name, fn, options) { target.addEventListener(name, fn, options); this.listeners.push(() => target.removeEventListener(name, fn, options)); }
    get reduced() { return this.motion.matches && this.plugin.settings.respectReaderMotion !== false; }
    sync() {
        if (!this.alive) return;
        stillAttribute(this.shell, "data-still-reader-motion", this.plugin.settings.respectReaderMotion === false ? "custom" : "system");
        const scroller = this.messages.querySelector(':scope > [class*="scroller_"]') || this.messages.querySelector('[class*="scroller_"]');
        if (scroller !== this.scroller) {
            this.unbind(); this.scroller = scroller; this.interacted = false; this.manualReveal = false;
            if (scroller) {
                this.basePadding = parseFloat(scroller.style.getPropertyValue("--still-reader-base-padding") || getComputedStyle(scroller).paddingBottom) || 0;
                scroller.style.setProperty("--still-reader-base-padding", `${this.basePadding}px`);
                scroller.setAttribute("data-still-reader-scroll", "");
                this.onScroll = () => this.scheduleCheck();
                this.onWheel = event => this.wheel(event);
                this.onPointer = () => { this.interacted = true; this.manualReveal = false; this.stopWheel(); };
                this.onKey = event => { if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key) && !event.target.closest('input,textarea,[contenteditable="true"]')) { this.interacted = true; this.manualReveal = false; this.stopWheel(); } };
                scroller.addEventListener("scroll", this.onScroll, {passive:true});
                scroller.addEventListener("wheel", this.onWheel, {passive:false});
                this.messages.addEventListener("pointerdown", this.onPointer, {passive:true});
                this.messages.addEventListener("keydown", this.onKey);
            }
            this.reset(); this.scheduleLayout();
        }
        if (!this.plugin.settings.readingMode && this.expanded) this.setReading(false, {instant:true});
        if (!this.plugin.settings.smoothWheel) this.stopWheel();
    }
    unbind() {
        this.stopWheel();
        if (!this.scroller) return;
        this.scroller.removeEventListener("scroll", this.onScroll); this.scroller.removeEventListener("wheel", this.onWheel);
        this.messages.removeEventListener("pointerdown", this.onPointer); this.messages.removeEventListener("keydown", this.onKey);
        this.scroller.removeAttribute("data-still-reader-scroll"); this.scroller.style.removeProperty("--still-reader-base-padding"); this.scroller = null;
    }
    scheduleLayout() {
        if (!this.alive || document.hidden || this.layoutFrame) return;
        this.layoutFrame = requestAnimationFrame(() => { this.layoutFrame = 0; this.layout(); });
    }
    layout() {
        if (!this.alive || document.hidden || !this.scroller) return;
        if (this.busy) { this.layoutDirty = true; return; }
        const box = this.messages.getBoundingClientRect(), shell = this.shell.getBoundingClientRect(), input = this.composer.getBoundingClientRect();
        if (!box.width || !input.height) return;
        this.zoom = Number(getComputedStyle(this.composer.parentElement).zoom) || 1;
        if (!this.viewportReady) this.normalMargin = parseFloat(getComputedStyle(this.messages).marginBottom) || 0;
        const inputTop = input.top - (this.expanded ? (this.travel || 0) * this.zoom : 0);
        const gap = Math.max(0, (shell.bottom - inputTop) / this.zoom + this.normalMargin);
        this.gap = Number(gap.toFixed(3)); this.travel = Number(Math.max(input.height / this.zoom + 24, (shell.bottom - inputTop + 12) / this.zoom).toFixed(3));
        const viewport = this.messages.parentElement.getBoundingClientRect();
        const tabLeft = viewport.right - box.right >= 30 ? box.right + 4 : box.left - viewport.left >= 30 ? box.left - 30 : Math.min(shell.right - 30, box.right - 26);
        const vars = {"--still-reader-gap": `${this.gap}px`, "--still-reader-margin": `${Number((this.normalMargin - this.gap).toFixed(3))}px`, "--still-reader-travel": `${this.travel}px`, "--still-reader-tab-x": `${Number(Math.max(2, tabLeft).toFixed(3))}px`, "--still-reader-tab-y": `${Number(Math.max(96, shell.bottom - 126).toFixed(3))}px`};
        for (const [key, value] of Object.entries(vars)) if (this.shell.style.getPropertyValue(key) !== value) this.shell.style.setProperty(key, value);
        // Reserve the composer space inside one constant scroll viewport. Toggling
        // reading only changes the visible clip, never Discord's virtual-list size.
        this.viewportReady = true; stillAttribute(this.shell, "data-still-reader-viewport", "stable");
        stillAttribute(this.shell, "data-still-reader", this.expanded ? "expanded" : "latest");
    }
    scheduleCheck() {
        if (!this.alive || document.hidden || this.checkFrame) return;
        this.checkFrame = requestAnimationFrame(() => { this.checkFrame = 0; this.check(); });
    }
    distance() { return this.scroller ? Math.max(0, this.scroller.scrollHeight - this.scroller.clientHeight - this.scroller.scrollTop) : 0; }
    check() {
        if (!this.scroller || !this.plugin.settings.readingMode || !this.interacted || document.hidden) return;
        if (this.manualReveal || this.composer.contains(document.activeElement) && this.typingAt && performance.now() - this.typingAt < 1200) { this.setReading(false, {pin:false}); return; }
        const distance = this.distance();
        if (!this.wantReading && distance >= Math.max(160, (this.gap || 0) + 80)) this.setReading(true);
        else if (this.wantReading && distance <= 2 && !this.wheelFrame) this.setReading(false, {pin:true});
    }
    showTab(visible) {
        stillAttribute(this.tab, "aria-hidden", !visible); this.tab.tabIndex = visible ? 0 : -1;
        stillAttribute(this.shell, "data-still-reader-tab", visible ? "visible" : "hidden");
    }
    showComposer(focus = false) {
        this.manualReveal = true; this.stopWheel(); this.setReading(false, {pin: this.distance() <= 48});
        if (focus) this.composer.querySelector('[role="textbox"][contenteditable="true"],textarea:not([disabled]),input:not([disabled]),[contenteditable="true"]')?.focus({preventScroll:true});
    }
    setReading(reading, {pin = false, instant = false} = {}) {
        if (!this.alive || !this.scroller || reading === this.wantReading && (this.busy ? !instant : this.mode === (reading ? "reading" : "latest"))) return;
        if (reading && (!this.plugin.settings.readingMode || getComputedStyle(document.documentElement).getPropertyValue("--still-air-ready").trim() !== "1")) return;
        if (!this.expanded && reading) this.layout();
        const revision = ++this.revision, scroller = this.scroller;
        const fromClip = getComputedStyle(this.messages).clipPath;
        const fromTransform = getComputedStyle(this.composer).transform;
        const fromRim = getComputedStyle(this.rim).transform;
        for (const animation of this.animations) animation.cancel(); this.animations = [];
        this.wantReading = reading; this.showTab(false);
        if (!this.expanded && !reading) { this.mode = "latest"; return; }
        if (!this.expanded) {
            this.expanded = true; stillAttribute(this.shell, "data-still-reader", "expanded");
        }
        this.busy = true; this.mode = reading ? "entering" : "leaving";
        stillAttribute(this.shell, "data-still-reader-mode", this.mode);
        const clipped = `inset(0px 0px ${this.gap || 0}px 0px round 0px 0px 28px 28px)`, open = "inset(0px 0px 0px 0px round 0px 0px 0px 0px)";
        const clipStart = fromClip && fromClip !== "none" ? fromClip : open;
        const finish = () => {
            if (!this.alive || revision !== this.revision) return;
            this.expanded = reading; this.busy = false; this.mode = reading ? "reading" : "latest";
            stillAttribute(this.shell, "data-still-reader", reading ? "expanded" : "latest");
            stillAttribute(this.shell, "data-still-reader-mode", this.mode);
            for (const animation of this.animations) animation.cancel(); this.animations = [];
            this.layoutDirty = false; this.layout();
            this.showTab(reading && this.composer.getBoundingClientRect().top >= this.shell.getBoundingClientRect().bottom - 1);
        };
        if (instant || this.reduced || this.plugin.settings.microMotion === false || typeof this.messages.animate !== "function" || document.hidden) { finish(); return; }
        const options = {duration:reading ? 360 : 300, easing:"cubic-bezier(.22,.61,.36,1)", fill:"both"};
        this.animations.push(this.messages.animate([{clipPath:clipStart}, {clipPath:reading ? open : clipped}], options));
        this.animations.push(this.composer.animate([{transform:fromTransform, opacity:1}, {transform:reading ? `translateY(${this.travel}px)` : "none", opacity:1}], options));
        this.animations.push(this.rim.animate([{transform:fromRim, opacity:1}, {transform:reading ? "none" : `translateY(-${this.gap || 0}px)`, opacity:1}], options));
        Promise.all(this.animations.map(a => a.finished)).then(finish).catch(() => {});
    }
    wheel(event) {
        if (!this.alive || event.defaultPrevented || event.ctrlKey || event.metaKey || !event.deltaY || Math.abs(event.deltaX) > Math.abs(event.deltaY) * .35 || event.target.closest('input,textarea,[contenteditable="true"]')) return;
        this.interacted = true; this.manualReveal = false;
        const legacy = Math.abs(Number(event.wheelDeltaY || event.wheelDelta || 0));
        const stepped = this.plugin.settings.mouseWheelMode === true || event.deltaMode !== 0 || legacy >= 120 && legacy % 120 === 0 || !legacy && Math.abs(event.deltaY) >= 40 && Number.isInteger(event.deltaY);
        if (!this.plugin.settings.smoothWheel || this.reduced || !stepped || !event.cancelable) { this.stopWheel(); return; }
        const scroller = this.scroller, max = Math.max(0, scroller.scrollHeight - scroller.clientHeight), current = scroller.scrollTop;
        const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? scroller.clientHeight : 1);
        if (current <= 0 && delta < 0 || current >= max && delta > 0) return;
        event.preventDefault();
        if (!this.wheelFrame || Math.sign(delta) !== Math.sign(this.wheelTarget - current)) {
            this.wheelTarget = this.wheelPosition = this.wheelLastWrite = current;
            this.wheelVelocity = 0; this.wheelTime = performance.now();
        }
        this.wheelTarget = Math.max(0, Math.min(max, this.wheelTarget + delta));
        if (this.wheelFrame) return;
        const step = now => {
            this.wheelFrame = 0;
            if (!this.alive || document.hidden || scroller !== this.scroller) return;
            const actual = scroller.scrollTop, shift = actual - this.wheelLastWrite;
            if (Math.abs(shift) > 2) { this.wheelTarget += shift; this.wheelPosition += shift; }
            const limit = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
            this.wheelTarget = Math.max(0, Math.min(limit, this.wheelTarget));
            const dt = Math.max(1, Math.min(40, now - this.wheelTime)) / 1000; this.wheelTime = now;
            // Exact critically damped step: start with zero velocity and keep
            // fractional position between paints, even when scrollTop rounds.
            const omega = 32, offset = this.wheelPosition - this.wheelTarget;
            const impulse = (this.wheelVelocity + omega * offset) * dt, decay = Math.exp(-omega * dt);
            let position = this.wheelTarget + (offset + impulse) * decay;
            this.wheelVelocity = (this.wheelVelocity - omega * impulse) * decay;
            if (offset * (position - this.wheelTarget) < 0) { position = this.wheelTarget; this.wheelVelocity = 0; }
            this.wheelPosition = Math.max(0, Math.min(limit, position));
            scroller.scrollTop = this.wheelPosition; this.wheelLastWrite = this.wheelPosition;
            if (Math.abs(this.wheelTarget - this.wheelPosition) > .25 || Math.abs(this.wheelVelocity) > 8) this.wheelFrame = requestAnimationFrame(step);
            else { scroller.scrollTop = this.wheelTarget; this.wheelLastWrite = this.wheelTarget; this.wheelVelocity = 0; this.scheduleCheck(); }
        };
        this.wheelFrame = requestAnimationFrame(step);
    }
    stopWheel() { cancelAnimationFrame(this.wheelFrame); this.wheelFrame = 0; this.wheelVelocity = 0; }
    reset() {
        this.revision++; for (const animation of this.animations) animation.cancel(); this.animations = [];
        this.expanded = this.wantReading = this.busy = false; this.mode = "latest";
        stillAttribute(this.shell, "data-still-reader", "latest"); stillAttribute(this.shell, "data-still-reader-mode", "latest"); this.showTab(false);
    }
    visibilityChanged() {
        this.stopWheel();
        if (document.hidden) { this.reset(); cancelAnimationFrame(this.checkFrame); cancelAnimationFrame(this.layoutFrame); this.checkFrame = this.layoutFrame = 0; }
        else { this.scheduleLayout(); this.scheduleCheck(); }
    }
    destroy() {
        this.reset(); this.alive = false; this.unbind();
        cancelAnimationFrame(this.layoutFrame); cancelAnimationFrame(this.checkFrame);
        for (const remove of this.listeners) remove(); this.tab.remove(); this.rim.remove();
        for (const key of ["data-still-reader", "data-still-reader-mode", "data-still-reader-tab", "data-still-reader-motion", "data-still-reader-viewport"]) this.shell.removeAttribute(key);
        for (const key of ["--still-reader-margin", "--still-reader-gap", "--still-reader-travel", "--still-reader-tab-x", "--still-reader-tab-y"]) this.shell.style.removeProperty(key);
    }
}

class StillMessageGroups {
    constructor(root, onViewportChange, onStructureChange) {
        this.root = root;
        this.viewport = root.parentElement;
        this.onViewportChange = onViewportChange;
        this.onStructureChange = onStructureChange;
        this.alive = true;
        this.rows = new Set();
        this.surfaces = new Map();
        this.groups = [];
        this.frame = 0;
        this.dirty = true;
        this.mutations = new MutationObserver(records => {
            if (!records.some(r => r.type === "childList" ||
                /\bgroupStart_/.test(r.oldValue || "") !== /\bgroupStart_/.test(r.target.className || ""))) return;
            this.dirty = true;
            this.schedule();
        });
        this.resize = new ResizeObserver(records => {
            this.schedule();
            if (records.some(record => record.target === this.viewport || record.target === this.root)) this.onViewportChange?.();
        });
        if (this.viewport) this.resize.observe(this.viewport);
        this.resize.observe(this.root);
        this.schedule();
    }

    schedule() {
        if (!this.alive || this.frame || document.hidden) return;
        this.frame = requestAnimationFrame(() => {
            this.frame = 0;
            if (!this.alive || document.hidden) return;
            if (this.dirty) this.collect();
            this.paint();
        });
    }

    collect() {
        this.dirty = false;
        this.onStructureChange?.();
        const list = this.root.querySelector('[data-list-id="chat-messages"], [class*="scrollerInner_"]');
        const rows = new Set(), groups = [];
        let group = null;
        for (const item of list?.children || []) {
            const row = item.matches('[class*="cozyMessage_"]') ? item : item.querySelector(':scope > [class*="cozyMessage_"]');
            if (!row) { group = null; continue; } // Date/unread/system separators.
            rows.add(row);
            const starts = row.matches('[class*="groupStart_"]') || row.querySelector(':scope > [class*="contents_"] > [class*="avatar_"]');
            if (!group || starts) { group = []; groups.push(group); }
            group.push(row);
        }
        const connected = groups.filter(g => g.length > 1), starts = new Set(connected.map(g => g[0]));
        for (const [row, surface] of this.surfaces) {
            if (!starts.has(row)) { surface.remove(); row.style.removeProperty("--still-bubble-height"); this.surfaces.delete(row); }
        }
        const parts = new Map();
        for (const g of connected) {
            g.forEach((row, i) => parts.set(row, i === 0 ? "start" : i === g.length - 1 ? "end" : "middle"));
            if (!this.surfaces.has(g[0])) {
                const surface = document.createElement("div");
                surface.className = "still-message-surface";
                surface.setAttribute("aria-hidden", "true");
                surface.style.display = "none"; // Safe if the theme is disabled first.
                g[0].append(surface);
                this.surfaces.set(g[0], surface);
            }
        }
        for (const row of new Set([...this.rows, ...rows])) {
            const part = parts.get(row);
            if (part && row.getAttribute("data-still-sequence") !== part) row.setAttribute("data-still-sequence", part);
            else if (!part) row.removeAttribute("data-still-sequence");
            if (rows.has(row) && !this.rows.has(row)) this.resize.observe(row);
            if (!rows.has(row)) this.resize.unobserve(row);
        }
        this.rows = rows;
        this.groups = connected;
        // Shallow child-list watches catch virtualized rows/list replacement.
        // Row class watches only react when Discord changes a group boundary.
        this.mutations.disconnect();
        for (let node = list; node && this.root.contains(node); node = node.parentElement) {
            this.mutations.observe(node, {childList: true});
            if (node === this.root) break;
        }
        if (!list) this.mutations.observe(this.root, {childList: true});
        for (const row of rows) this.mutations.observe(row, {attributes: true, attributeFilter: ["class"], attributeOldValue: true});
        for (const item of list?.children || []) if (!rows.has(item)) this.mutations.observe(item, {childList: true});
    }

    paint() {
        if (!this.root.isConnected || !this.groups.length) return;
        const chat = this.root.closest('[class*="chatContent_"]');
        const zoom = Number(chat && getComputedStyle(chat).zoom) || 1;
        // Read all geometry first, then write only decorative sizes.
        const sizes = this.groups.map(group => {
            const rects = group.map(row => row.getBoundingClientRect());
            const first = rects[0], last = rects[rects.length - 1];
            return [this.surfaces.get(group[0]), group[0], Math.max(...rects.map(r => r.width)) / zoom, (last.bottom - first.top) / zoom];
        });
        for (const [surface, row, width, height] of sizes) {
            const w = `${width.toFixed(3)}px`, h = `${height.toFixed(3)}px`;
            if (surface.style.width !== w) surface.style.width = w;
            if (surface.style.height !== h) surface.style.height = h;
            if (row.style.getPropertyValue("--still-bubble-height") !== h) row.style.setProperty("--still-bubble-height", h);
        }
    }

    destroy() {
        this.alive = false;
        cancelAnimationFrame(this.frame);
        this.mutations.disconnect();
        this.resize.disconnect();
        for (const row of this.rows) { row.removeAttribute("data-still-sequence"); row.style.removeProperty("--still-bubble-height"); }
        for (const surface of this.surfaces.values()) surface.remove();
        this.rows.clear();
        this.surfaces.clear();
        this.groups = [];
    }
}

// Local workspace UI. Owns its nodes, timers, store listeners and media process.
// It never reparents Discord's React nodes or observes the message subtree.
class StillWorkspace {
    constructor(plugin) {
        this.plugin = plugin;
        this.api = plugin.api;
        this.shell = plugin.shell;
        this.sidebar = plugin.sidebar;
        this.alive = true;
        this.position = this.api.Data.load("browsePosition");
        this.collapsed = this.api.Data.load("widgetsCollapsed") === true;
        this.weather = this.api.Data.load("weatherCache");
        if (!plugin.location || this.weather?.zip !== plugin.location.zip) this.weather = null;
        this.media = {available: false};
        this.listeners = [];
        this.handle = this.el("div", "still-window-bar");
        this.handle.style.display = "none";
        this.grip = this.button("Move Browse window", "grip");
        this.grip.className = "still-window-grip";
        this.grip.append(this.el("span", "", "Browse"));
        this.grip.title = "Drag to move · Arrow keys to adjust · Double-click or Home to reset";
        const reset = this.button("Reset Browse position", "reset", () => this.resetPosition());
        reset.classList.add("still-window-reset");
        const close = this.button("Close Browse", "close", () => plugin.setNavigation(false, true));
        this.handle.append(this.grip, reset, close);
        this.sidebar.append(this.handle);
        this.on(this.grip, "pointerdown", e => this.beginDrag(e));
        this.on(this.grip, "pointermove", e => this.moveDrag(e));
        this.on(this.grip, "pointerup", () => this.endDrag());
        this.on(this.grip, "pointercancel", () => this.endDrag(true));
        this.on(this.grip, "lostpointercapture", () => this.endDrag());
        this.on(this.grip, "dblclick", () => this.resetPosition());
        this.on(this.grip, "keydown", e => {
            if (!this.plugin.settings.movableBrowse) return;
            if (e.key === "Home") { e.preventDefault(); this.resetPosition(); return; }
            const direction = {ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1]}[e.key];
            if (!direction) return;
            e.preventDefault();
            const step = e.shiftKey ? 40 : 10;
            this.position = {x: this.bounds.x + direction[0] * step, y: this.bounds.y + direction[1] * step};
            this.fitBrowse(); this.savePosition();
        });
        this.toggle = this.button("Widgets", "widgets", () => {
            this.collapsed = !this.collapsed;
            this.api.Data.save("widgetsCollapsed", this.collapsed);
            this.sync();
        });
        this.toggle.id = "stillspeed-widget-toggle";
        this.toggle.style.display = "none";
        this.toggle.title = "Show or hide your widgets";
        this.toggle.setAttribute("aria-controls", "stillspeed-widgets");
        this.dock = this.el("aside", "");
        this.dock.id = "stillspeed-widgets";
        this.dock.style.display = "none";
        this.dock.setAttribute("aria-label", "Still widgets");
        this.shell.append(this.toggle, this.dock);
        this.on(window, "resize", () => {
            if (this.resizeFrame) return;
            this.resizeFrame = requestAnimationFrame(() => { this.resizeFrame = 0; if (this.alive) { this.endDrag(true); this.fitBrowse(); this.updateCaption(); } });
        });
        this.sync();
    }

    el(tag, className = "", text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined) node.textContent = String(text);
        return node;
    }
    icon(name) {
        const paths = {
            grip: ["M8 8h.01M16 8h.01M8 12h.01M16 12h.01M8 16h.01M16 16h.01"],
            more: ["M5 12h.01M12 12h.01M19 12h.01"],
            reset: ["M4 10a8 8 0 1 1 0 5", "M4 4v6h6"],
            close: ["m6 6 12 12M18 6 6 18"],
            widgets: ["M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"],
            moon: ["M20 13a8 8 0 0 1-9-9 8 8 0 1 0 9 9Z"],
            sun: ["M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1 1M18 18l1 1M5 19l1-1M18 6l1-1"],
            cloud: ["M6 18h12a4 4 0 0 0 .5-8 6 6 0 0 0-11.5-1A4.5 4.5 0 0 0 6 18Z"],
            rain: ["M5 15a4 4 0 0 1 1-8 6 6 0 0 1 11.5 1 4 4 0 0 1 .5 8M8 17l-1 3M13 17l-1 3"],
            snow: ["M12 3v18M4 7l16 10M4 17 20 7M9 5l3 2 3-2M9 19l3-2 3 2"],
            music: ["M9 18V5l11-2v13M9 15c-4-1-7 1-6 4s6 1 6-1M20 13c-4-1-7 1-6 4s6 1 6-1M9 9l11-2"],
            previous: ["M5 5v14M19 5 7 12l12 7V5Z"],
            next: ["M19 5v14M5 5l12 7-12 7V5Z"],
            play: ["m9 5 11 7-11 7V5Z"],
            pause: ["M8 5v14M16 5v14"],
            inbox: ["M4 4h16v16H4zM4 14h5l2 3h2l2-3h5"],
            arrow: ["M6 12h12M13 7l5 5-5 5"]
        };
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        for (const [key, value] of Object.entries({viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "1.6", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"})) svg.setAttribute(key, value);
        for (const d of paths[name] || paths.cloud) { const p = document.createElementNS(svg.namespaceURI, "path"); p.setAttribute("d", d); svg.append(p); }
        return svg;
    }
    button(label, icon, action) {
        const button = this.el("button", "still-icon-button");
        button.type = "button";
        button.setAttribute("aria-label", label);
        button.title = label;
        button.append(this.icon(icon));
        if (action) button.addEventListener("click", action);
        return button;
    }
    on(target, name, callback) {
        target.addEventListener(name, callback);
        this.listeners.push(() => target.removeEventListener(name, callback));
    }
    scheduleCaption() {
        if (!this.alive || this.captionFrame || document.hidden || this.shell.getAttribute("data-still-navigation") !== "closed") return;
        this.captionFrame = requestAnimationFrame(() => { this.captionFrame = 0; this.updateCaption(); });
    }
    updateCaption() {
        if (!this.alive || document.hidden || !this.plugin.settings.movableBrowse || this.shell.getAttribute("data-still-navigation") !== "closed") return;
        const bounds = this.plugin.messages?.getBoundingClientRect();
        if (!bounds?.width) return;
        // One rectangle on layout changes, never a frame loop or member scan.
        const width = Math.max(124, Math.min(220, bounds.left - 16));
        const left = Math.max(12, bounds.left - width - 4);
        for (const [name, value] of [["--still-caption-left", left], ["--still-caption-width", width]]) {
            const text = `${Number(value.toFixed(3))}px`;
            if (this.shell.style.getPropertyValue(name) !== text) this.shell.style.setProperty(name, text);
        }
    }
    fitBrowse() {
        if (!this.alive || !this.plugin.settings.movableBrowse) return;
        const shell = this.shell.getBoundingClientRect();
        const width = Math.min(344, Math.max(0, shell.width - 24));
        const position = this.position && Number.isFinite(this.position.x) && Number.isFinite(this.position.y) ? this.position : {x: 20, y: 118};
        const auxiliary = this.shell.getAttribute("data-still-auxiliary");
        const reserve = auxiliary === "activity" && this.activityView ? 212 : auxiliary === "tools" ? 140 : 24;
        const height = Math.max(150, Math.min(620, shell.height - Math.max(44, position.y) - reserve));
        const top = Math.min(44, Math.max(0, shell.height - height));
        const maxX = Math.max(12, shell.width - width - 12), maxY = Math.max(top, shell.height - height - reserve);
        const x = Math.max(12, Math.min(maxX, position.x)), y = Math.max(top, Math.min(maxY, position.y));
        this.bounds = {x, y, maxX, maxY, top, height};
        for (const [name, value] of [["--still-nav-x", x], ["--still-nav-y", y], ["--still-nav-height", height]]) {
            const text = `${value}px`;
            if (this.shell.style.getPropertyValue(name) !== text) this.shell.style.setProperty(name, text);
        }
        stillAttribute(this.shell, "data-still-navigation-docked", x <= 40);
    }
    beginDrag(event) {
        if (!this.plugin.settings.movableBrowse || event.button !== 0 || !event.isPrimary) return;
        event.preventDefault();
        this.fitBrowse();
        this.grip.focus({preventScroll: true});
        this.drag = {pointer: event.pointerId, startX: event.clientX, startY: event.clientY, ...this.bounds};
        this.nextPosition = {x: this.bounds.x, y: this.bounds.y};
        this.sidebar.setAttribute("data-still-dragging", "");
        this.shell.setAttribute("data-still-window-dragging", "");
        this.grip.setPointerCapture(event.pointerId);
    }
    moveDrag(event) {
        const d = this.drag;
        if (!d || event.pointerId !== d.pointer) return;
        this.nextPosition = {x: Math.max(12, Math.min(d.maxX, d.x + event.clientX - d.startX)), y: Math.max(d.top, Math.min(d.maxY, d.y + event.clientY - d.startY))};
        if (this.dragFrame) return;
        this.dragFrame = requestAnimationFrame(() => {
            this.dragFrame = 0;
            if (!this.drag) return;
            this.shell.style.setProperty("--still-drag-x", `${this.nextPosition.x - d.x}px`);
            this.shell.style.setProperty("--still-drag-y", `${this.nextPosition.y - d.y}px`);
        });
    }
    endDrag(cancel = false) {
        if (!this.drag) return;
        const pointer = this.drag.pointer;
        this.drag = null;
        cancelAnimationFrame(this.dragFrame); this.dragFrame = 0;
        this.sidebar.removeAttribute("data-still-dragging");
        this.shell.removeAttribute("data-still-window-dragging");
        this.shell.style.removeProperty("--still-drag-x");
        this.shell.style.removeProperty("--still-drag-y");
        if (!cancel) this.position = this.nextPosition;
        if (this.grip.hasPointerCapture(pointer)) this.grip.releasePointerCapture(pointer);
        this.fitBrowse();
        if (!cancel) this.savePosition();
    }
    savePosition() { this.position = {x: this.bounds.x, y: this.bounds.y}; this.api.Data.save("browsePosition", this.position); }
    resetPosition() { this.endDrag(true); this.position = null; this.api.Data.save("browsePosition", null); this.fitBrowse(); }

    sync() {
        const s = this.plugin.settings;
        const showActivity = Boolean(s.activityEditor && s.movableBrowse && this.plugin.header && this.plugin.activity);
        const activityChanged = showActivity !== Boolean(this.activityView);
        if (activityChanged) {
            if (showActivity) this.activityView = new StillActivityView(this);
            else { this.activityView.destroy(); this.activityView = null; }
        }
        const auxiliary = this.plugin.auxiliary === "activity" && !this.activityView ? (this.plugin.channelControlsVisible ? "tools" : "none") : this.plugin.auxiliary;
        const auxiliaryChanged = this.shell.getAttribute("data-still-auxiliary") !== auxiliary;
        stillAttribute(this.shell, "data-still-auxiliary", auxiliary);
        const moved = this.shell.getAttribute("data-still-movable") !== String(s.movableBrowse);
        stillAttribute(this.shell, "data-still-movable", s.movableBrowse);
        if (moved || activityChanged || auxiliaryChanged || !this.bounds) this.fitBrowse();
        stillAttribute(this.shell, "data-still-widgets", !s.widgets ? "disabled" : this.collapsed ? "closed" : "open");
        stillAttribute(this.toggle, "aria-expanded", s.widgets && !this.collapsed);
        const signature = [s.clockWidget, s.weatherWidget, s.mediaWidget, s.notificationsWidget, this.plugin.location?.zip, s.zipTime].join("|");
        if (signature !== this.signature) { this.signature = signature; this.buildCards(); }
        const refresh = [signature, s.widgets, this.collapsed, document.hidden, s.fahrenheit, s.clock24, s.zipTime].join("|");
        if (refresh !== this.refreshSignature) { this.refreshSignature = refresh; this.visibilityChanged(); this.scheduleCaption(); }
    }
    visible() { return this.alive && this.plugin.settings.widgets && !this.collapsed && !document.hidden; }
    card(name, label) {
        const card = this.el("section", `still-widget still-widget-${name}`);
        card.setAttribute("aria-label", label);
        const heading = this.el("div", "still-widget-heading");
        heading.append(this.el("h3", "", label));
        card.append(heading);
        this.dock.append(card);
        return {card, heading};
    }
    buildCards() {
        this.dock.replaceChildren();
        this.clockUI = this.weatherUI = this.mediaUI = this.inboxUI = null;
        const s = this.plugin.settings;
        if (s.clockWidget) {
            const {card, heading} = this.card("clock", "Local time");
            const zone = this.el("span", "still-widget-caption", (s.zipTime && this.plugin.location ? this.plugin.location.name : Intl.DateTimeFormat().resolvedOptions().timeZone.split("/").pop().replaceAll("_", " ")));
            heading.append(zone);
            const time = this.el("time", "still-clock-time"), date = this.el("div", "still-widget-muted");
            card.append(time, date); this.clockUI = {time, date};
        }
        if (s.weatherWidget) {
            const {card, heading} = this.card("weather", this.plugin.location?.name || "Weather");
            const refresh = this.button("Refresh weather", "reset", () => this.refreshWeather(true));
            heading.append(refresh);
            const main = this.el("div", "still-weather-main"), temperature = this.el("div", "still-weather-temperature", "—"), symbol = this.el("div", "still-weather-symbol");
            symbol.append(this.icon("cloud")); main.append(temperature, symbol);
            const condition = this.el("div", "still-widget-subtitle", "Weather loading"), details = this.el("div", "still-widget-muted");
            const footer = this.el("div", "still-weather-footer"), status = this.el("span", ""), credit = this.el("a", "", "Open-Meteo");
            credit.href = "https://open-meteo.com/"; credit.target = "_blank"; credit.rel = "noopener noreferrer";
            footer.append(status, credit); card.append(main, condition, details, footer);
            this.weatherUI = {temperature, symbol, condition, details, status, refresh};
        }
        if (s.mediaWidget) {
            const {card, heading} = this.card("media", "Now playing");
            const source = this.el("span", "still-widget-caption", "Windows"); heading.append(source);
            const row = this.el("div", "still-media-track"), artwork = this.el("div", "still-media-icon"); artwork.append(this.icon("music"));
            const text = this.el("div", "still-media-copy"), title = this.el("div", "still-media-title", "Nothing playing"), artist = this.el("div", "still-widget-muted", "Play something in Spotify or a browser");
            text.append(title, artist); row.append(artwork, text);
            const controls = this.el("div", "still-media-controls");
            const previous = this.button("Previous track", "previous", () => this.mediaCommand("previous"));
            const toggle = this.button("Play", "play", () => this.mediaCommand("toggle")); toggle.classList.add("still-media-play");
            const next = this.button("Next track", "next", () => this.mediaCommand("next"));
            controls.append(previous, toggle, next); card.append(row, controls);
            this.mediaUI = {source, title, artist, previous, toggle, next};
        }
        if (s.notificationsWidget) {
            const {card, heading} = this.card("inbox", "Discord inbox");
            const open = this.button("Open Discord inbox", "arrow", () => this.openInbox()); heading.append(open);
            const summary = this.el("div", "still-inbox-summary", "Connecting to Discord"), list = this.el("div", "still-inbox-list");
            card.append(summary, list); this.inboxUI = {summary, list}; this.inboxSignature = null;
        }
        if (!this.dock.children.length) this.dock.append(this.el("p", "still-widget-muted still-widget-empty", "Enable widgets in StillCord settings."));
    }
    visibilityChanged() {
        clearTimeout(this.clockTimer); clearTimeout(this.weatherTimer); clearTimeout(this.inboxTimer);
        this.clockTimer = this.weatherTimer = this.inboxTimer = 0;
        if (!this.visible()) { this.weatherAbort?.abort(); this.unsubscribeInbox(); this.stopMedia(); return; }
        this.tickClock();
        if (this.weatherUI) { this.renderWeather(); this.refreshWeather(); }
        else this.weatherAbort?.abort();
        if (this.mediaUI) { this.startMedia(); this.renderMedia(); } else this.stopMedia();
        if (this.inboxUI) { this.subscribeInbox(); this.renderInbox(); } else this.unsubscribeInbox();
    }
    tickClock() {
        if (!this.visible() || !this.clockUI) return;
        const now = new Date(), timeZone = this.plugin.settings.zipTime ? this.plugin.location?.timezone : undefined;
        this.clockUI.time.textContent = new Intl.DateTimeFormat(undefined, {hour: "numeric", minute: "2-digit", hour12: !this.plugin.settings.clock24, timeZone}).format(now);
        this.clockUI.time.dateTime = now.toISOString();
        this.clockUI.date.textContent = new Intl.DateTimeFormat(undefined, {weekday: "long", month: "short", day: "numeric", timeZone}).format(now);
        this.clockTimer = setTimeout(() => this.tickClock(), 60000 - Date.now() % 60000 + 40);
    }
    changeLocation() {
        this.weatherAbort?.abort(); this.weatherAbort = null;
        clearTimeout(this.weatherTimer); this.weather = null; this.weatherError = false;
        this.lastWeatherAttempt = 0; this.signature = this.refreshSignature = null; this.sync();
    }
    async refreshWeather(force = false) {
        if (!this.visible() || !this.weatherUI || this.weatherAbort || !this.api.Net?.fetch || !this.plugin.location) return;
        const location = this.plugin.location;
        const age = Date.now() - Number(this.weather?.at || 0);
        if (!force && age >= 0 && age < 900000) { this.scheduleWeather(900000 - age); return; }
        if (force && Date.now() - (this.lastWeatherAttempt || 0) < 30000) return;
        this.lastWeatherAttempt = Date.now();
        const abort = new AbortController(); this.weatherAbort = abort;
        this.weatherUI.refresh.disabled = true;
        try {
            // Location-derived endpoint; no Discord identifiers or account credentials.
            const response = await this.api.Net.fetch(stillForecastUrl(location), {method: "GET", timeout: 12000, signal: abort.signal, redirect: "error"});
            if (!response.ok) throw new Error("Weather unavailable");
            const data = await response.json();
            const c = data.current, d = data.daily;
            if (![c?.temperature_2m, c?.apparent_temperature, c?.weather_code, d?.temperature_2m_max?.[0], d?.temperature_2m_min?.[0]].every(Number.isFinite)) throw new Error("Weather data unavailable");
            if (!this.alive || abort.signal.aborted || location !== this.plugin.location) return;
            this.weather = {zip:location.zip, at: Date.now(), temperature: c.temperature_2m, feels: c.apparent_temperature, code: c.weather_code, day: c.is_day === 1, high: d.temperature_2m_max[0], low: d.temperature_2m_min[0]};
            this.weatherError = false; this.api.Data.save("weatherCache", this.weather);
        } catch {
            if (this.alive && !abort.signal.aborted && location === this.plugin.location) this.weatherError = true;
        } finally {
            const current = this.weatherAbort === abort;
            if (current) this.weatherAbort = null;
            if (this.alive && current && location === this.plugin.location) {
                if (this.weatherUI) this.weatherUI.refresh.disabled = false;
                this.renderWeather(); this.scheduleWeather(this.weatherError ? 300000 : 900000);
            }
        }
    }
    scheduleWeather(delay) { clearTimeout(this.weatherTimer); if (this.visible() && this.weatherUI) this.weatherTimer = setTimeout(() => this.refreshWeather(), Math.max(1000, delay)); }
    renderWeather() {
        if (!this.weatherUI) return;
        const ui = this.weatherUI, w = this.weather;
        if (!this.plugin.location) { ui.condition.textContent = "Choose your location"; ui.details.textContent = "Set a ZIP in StillCord settings"; ui.refresh.disabled = true; return; }
        if (!w || ![w.temperature, w.high, w.low, w.feels, w.code, w.at].every(Number.isFinite)) {
            ui.condition.textContent = this.weatherError ? "Weather unavailable" : "Weather loading";
            ui.details.textContent = this.weatherError ? "Try again when you're online" : [this.plugin.location.name, this.plugin.location.region].filter(Boolean).join(", ");
            return;
        }
        const temp = value => Math.round(this.plugin.settings.fahrenheit ? value * 9 / 5 + 32 : value);
        const code = w.code;
        const condition = code === 0 ? [w.day ? "Clear sky" : "Clear night", w.day ? "sun" : "moon"] : code <= 3 ? [code === 3 ? "Overcast" : "Partly cloudy", "cloud"] : code <= 48 ? ["Fog", "cloud"] : code >= 95 ? ["Thunderstorms", "rain"] : (code >= 71 && code <= 77) || code === 85 || code === 86 ? ["Snow", "snow"] : [code < 60 ? "Drizzle" : "Rain", "rain"];
        ui.temperature.textContent = `${temp(w.temperature)}°`;
        ui.temperature.setAttribute("aria-label", `${temp(w.temperature)} degrees ${this.plugin.settings.fahrenheit ? "Fahrenheit" : "Celsius"}`);
        ui.condition.textContent = condition[0]; ui.symbol.replaceChildren(this.icon(condition[1]));
        ui.details.textContent = `H:${temp(w.high)}°  L:${temp(w.low)}°  ·  Feels ${temp(w.feels)}°`;
        const age = Math.max(0, Math.floor((Date.now() - w.at) / 60000));
        ui.status.textContent = this.weatherError || age >= 20 ? `Saved · ${age < 60 ? age + "m" : Math.floor(age / 60) + "h"} ago` : "Updated " + new Intl.DateTimeFormat(undefined, {hour: "numeric", minute: "2-digit"}).format(w.at);
    }

    async startMedia() {
        if (this.mediaSession || this.mediaRetry || !this.api.Media) return;
        const session = {}; this.mediaSession = session;
        try {
            let revision = -1;
            while (this.visible() && this.mediaSession === session) {
                const abort = new AbortController(); this.mediaAbort = abort;
                const startedAt = Date.now();
                const data = await this.api.Media.read(revision, abort.signal);
                if (this.mediaSession !== session || !this.visible()) break;
                if (!Number.isFinite(data.revision) || !data.state || typeof data.state.available !== "boolean") throw Error("Invalid media state");
                // An unchanged response should be held by the service. Back off
                // if a malfunctioning adapter starts returning it immediately.
                if (data.revision === revision && Date.now() - startedAt < 1000) throw Error("Media service did not wait");
                if (data.revision !== revision) { this.media = data.state; this.renderMedia(); }
                revision = data.revision;
            }
        } catch {
            if (this.mediaSession === session && this.visible()) {
                this.media = {available: false, error: "Windows media is reconnecting"}; this.renderMedia();
                this.mediaRetry = setTimeout(() => { this.mediaRetry = 0; if (this.visible()) this.startMedia(); }, 15000);
            }
        } finally { if (this.mediaSession === session) { this.mediaSession = null; this.mediaAbort = null; } }
    }
    stopMedia() {
        this.mediaSession = null;
        this.mediaAbort?.abort(); this.mediaAbort = null;
        clearTimeout(this.mediaRetry); this.mediaRetry = 0;
    }
    async mediaCommand(command) {
        if (!["toggle", "previous", "next"].includes(command) || !this.api.Media || !this.visible()) return;
        try {
            await this.api.Media.command(command);
        } catch { this.api.UI?.showToast("This player is unavailable. Try again when media is playing.", {type: "info"}); }
    }
    renderMedia() {
        if (!this.mediaUI) return;
        const ui = this.mediaUI, m = this.media;
        const source = String(m.source || "").toLowerCase();
        ui.source.textContent = !m.available ? "Windows" : source.includes("spotify") ? "Spotify" : source.includes("chrome") ? "Chrome" : source.includes("msedge") ? "Edge" : source.includes("firefox") ? "Firefox" : "Windows";
        ui.title.textContent = m.available ? String(m.title || "Media playing").slice(0, 300) : m.error || "Nothing playing";
        ui.title.title = ui.title.textContent;
        ui.artist.textContent = m.available ? String(m.artist || (m.playing ? "Playing" : "Paused")).slice(0, 300) : "Play something in Spotify or a browser";
        ui.previous.disabled = !m.available || !m.canPrevious;
        ui.next.disabled = !m.available || !m.canNext;
        ui.toggle.disabled = !m.available || !m.canToggle;
        const label = m.playing ? "Pause" : "Play";
        ui.toggle.setAttribute("aria-label", label); ui.toggle.title = label;
        ui.toggle.replaceChildren(this.icon(m.playing ? "pause" : "play"));
    }

    subscribeInbox() {
        if (this.inboxStores || !this.api.Webpack?.getStore) return;
        const names = ["ReadStateStore", "ChannelStore", "GuildStore", "UserStore", "PrivateChannelSortStore"];
        this.inboxStores = Object.fromEntries(names.map(name => [name, this.api.Webpack.getStore(name)]));
        this.route = this.api.Webpack.getByKeys?.("transitionTo", "replaceWith");
        if (!this.route) {
            const transitionTo = this.api.Webpack.getModule?.(value => typeof value === "function" && Function.prototype.toString.call(value).includes("transitionTo -"), {searchExports: true});
            if (transitionTo) this.route = {transitionTo};
        }
        this.onInboxChange = () => {
            if (!this.visible() || this.inboxTimer) return;
            this.inboxTimer = setTimeout(() => { this.inboxTimer = 0; if (this.visible()) this.renderInbox(); }, 200);
        };
        for (const store of Object.values(this.inboxStores)) store?.addChangeListener?.(this.onInboxChange);
    }
    unsubscribeInbox() {
        if (this.inboxStores) for (const store of Object.values(this.inboxStores)) store?.removeChangeListener?.(this.onInboxChange);
        this.inboxStores = null; this.onInboxChange = null;
    }
    renderInbox() {
        if (!this.inboxUI) return;
        const {ReadStateStore: read, ChannelStore: channels, GuildStore: guilds, UserStore: users, PrivateChannelSortStore: privateChannels} = this.inboxStores || {};
        if (!read?.getMentionChannelIds || !channels?.getChannel) { this.inboxUI.summary.textContent = "Open Discord inbox to see updates"; return; }
        try {
            const mentioned = Array.from(read.getMentionChannelIds() || []);
            const unreadDMs = Array.from(privateChannels?.getPrivateChannelIds?.() || []).filter(id => read.hasUnread?.(id));
            let total = 0;
            const rows = [...new Set([...mentioned, ...unreadDMs])].map(id => {
                if (!/^\d{5,25}$/.test(String(id))) return null;
                const channel = channels.getChannel(id); if (!channel) return null;
                const count = Math.max(0, Number(read.getMentionCount?.(id)) || 0); total += count;
                const guild = channel.guild_id ? guilds?.getGuild?.(channel.guild_id) : null;
                const name = channel.name || (channel.recipients || []).map(userId => { const u = users?.getUser?.(userId); return u?.globalName || u?.username || "Someone"; }).join(", ") || "Direct message";
                return {id: String(id), guildId: /^\d{5,25}$/.test(String(channel.guild_id)) ? String(channel.guild_id) : "@me", name, context: guild?.name || "Direct message", count, time: Number(read.lastMessageTimestamp?.(id)) || 0};
            }).filter(Boolean).sort((a, b) => Number(b.count > 0) - Number(a.count > 0) || b.time - a.time).slice(0, 3);
            const summary = total ? `${total > 999 ? "999+" : total} mention${total === 1 ? "" : "s"}${unreadDMs.length ? ` · ${unreadDMs.length} unread DM${unreadDMs.length === 1 ? "" : "s"}` : ""}` : unreadDMs.length ? `${unreadDMs.length} unread DM${unreadDMs.length === 1 ? "" : "s"}` : "You're all caught up";
            const signature = JSON.stringify([summary, rows]); if (signature === this.inboxSignature) return; this.inboxSignature = signature;
            this.inboxUI.summary.textContent = summary;
            this.inboxUI.list.replaceChildren();
            for (const row of rows) {
                const button = this.el("button", "still-inbox-row"); button.type = "button";
                const text = this.el("span", "still-inbox-copy"); text.append(this.el("span", "still-inbox-name", row.name), this.el("span", "still-widget-muted", row.context));
                button.append(text, this.el("span", "still-inbox-badge", row.count ? row.count > 99 ? "99+" : row.count : "•"));
                button.title = `${row.context} · ${row.name}`;
                button.addEventListener("click", () => {
                    if (typeof this.route?.transitionTo === "function") this.route.transitionTo(`/channels/${row.guildId}/${row.id}`);
                    else this.openInbox();
                });
                this.inboxUI.list.append(button);
            }
        } catch { this.inboxUI.summary.textContent = "Open Discord inbox to see updates"; }
    }
    openInbox() {
        const button = document.querySelector('[aria-label="Inbox"], [aria-label="Notification Center"], [aria-label="Notifications"]');
        if (button instanceof HTMLElement) button.click();
        else this.api.UI?.showToast("Use Discord's Inbox button in the title bar.", {type: "info"});
    }
    destroy() {
        this.alive = false;
        this.endDrag(true);
        this.activityView?.destroy(); this.activityView = null;
        cancelAnimationFrame(this.resizeFrame); cancelAnimationFrame(this.dragFrame); cancelAnimationFrame(this.captionFrame);
        clearTimeout(this.clockTimer); clearTimeout(this.weatherTimer); clearTimeout(this.inboxTimer);
        this.weatherAbort?.abort(); this.unsubscribeInbox(); this.stopMedia();
        for (const remove of this.listeners) remove();
        this.handle.remove(); this.toggle.remove(); this.dock.remove();
        for (const name of ["data-still-movable", "data-still-navigation-docked", "data-still-widgets", "data-still-window-dragging", "data-still-auxiliary"]) this.shell.removeAttribute(name);
        for (const name of ["--still-nav-x", "--still-nav-y", "--still-nav-height", "--still-drag-x", "--still-drag-y", "--still-caption-left", "--still-caption-width"]) this.shell.style.removeProperty(name);
    }
}

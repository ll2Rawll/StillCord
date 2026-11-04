const STILL_RESTLESS_FEATURES = Object.freeze([
    ["restlessSurfaceLight", "Glass light", "A soft light follows your pointer across glass panels."],
    ["restlessLiquidRims", "Liquid rims", "A silver highlight sweeps over the edge of a hovered card."],
    ["restlessEntrances", "Soft entrances", "Panels, menus, profiles, and settings settle into place."],
    ["restlessMessages", "Message arrivals", "New messages ease in without shifting the conversation."],
    ["restlessAvatars", "Halo avatars", "Profile pictures lift into a fine halo on hover."],
    ["restlessNavigation", "Channel glide", "Channel, server, and member rows respond with a gentle glide."],
    ["restlessRipples", "Touch ripples", "A small, fading ring follows each button press."],
    ["restlessComposer", "Composer aura", "The message field glows softly while you write."],
    ["restlessWidgets", "Living widgets", "Cards lift on hover; the media icon breathes during playback."],
    ["restlessDepth", "Quiet depth", "The live canvas follows your pointer with subtle parallax."]
]);

class StillRestless {
    constructor(plugin) {
        this.plugin = plugin;
        this.animations = new Set();
        this.ripples = new Set();
        this.listeners = [];
        this.frame = 0;
        this.alive = true;
        this.motion = matchMedia("(prefers-reduced-motion: reduce)");
        this.backdrop = document.createElement("div");
        this.backdrop.id = "still-restless-backdrop";
        this.backdrop.setAttribute("aria-hidden", "true"); this.backdrop.inert = true;
        this.depth = document.createElement("div"); this.depth.className = "sr-depth-layer";
        // Original vector artwork. Only the three painted layers move; no canvas
        // loop, remote media, image downloads, animated blur, or video decoder.
        const svg = `<svg viewBox="0 0 1600 1000" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="sr-silk" x1="0" y1="0" x2="1" y2="1"><stop stop-color="currentColor" stop-opacity=".38"/><stop offset=".38" stop-color="currentColor" stop-opacity=".05"/><stop offset=".65" stop-color="currentColor" stop-opacity="0"/><stop offset="1" stop-color="currentColor" stop-opacity=".18"/></linearGradient></defs><path fill="url(#sr-silk)" d="M-100 780C300 100 580 1150 1090 440S1730-50 1760 300L1760 1060H-100Z"/><path fill="none" stroke="currentColor" stroke-opacity=".24" d="M-100 780C300 100 580 1150 1090 440S1730-50 1760 300"/></svg>`;
        for (let i = 0; i < 3; i++) {
            const field = document.createElement("div"); field.className = `sr-field sr-field-${i}`;
            if (i < 2) field.innerHTML = svg.replaceAll("sr-silk", `sr-silk-${i}`);
            this.depth.append(field);
        }
        this.backdrop.append(this.depth); document.body.prepend(this.backdrop);
        this.effects = document.createElement("div"); this.effects.id = "still-restless-effects";
        this.effects.setAttribute("aria-hidden", "true"); this.effects.inert = true;
        this.light = document.createElement("div"); this.light.className = "sr-hover-light";
        this.spot = document.createElement("div"); this.spot.className = "sr-light-spot";
        this.light.append(this.spot); this.effects.append(this.light); document.body.append(this.effects);
        this.surfaceSelector = '[data-still-sidebar], [data-still-header], [data-still-messages], .still-widget, .sc-card, [class*="membersWrap_"], [class*="userProfileOuter_"]';
        this.on(document, "pointermove", event => this.pointer(event), {passive:true});
        this.on(document, "pointerdown", event => this.press(event), {passive:true});
        this.on(document, "pointerleave", () => this.clearPointer());
        this.on(document, "scroll", () => this.clearPointer(), {capture:true,passive:true});
        this.on(window, "resize", () => this.clearPointer(), {passive:true});
        this.on(window, "blur", () => this.clearPointer());
        this.on(document, "fullscreenchange", () => this.visibilityChanged());
        this.on(this.motion, "change", () => this.visibilityChanged());
        // Discord replaces the root class list during navigation/theme changes.
        // Watch only that one attribute; write only missing or changed flags.
        this.rootObserver = new MutationObserver(() => this.updateClasses());
        this.rootObserver.observe(document.documentElement, {attributes:true,attributeFilter:["class"]});
    }
    on(target, name, callback, options) {
        target.addEventListener(name,callback,options);
        this.listeners.push(() => target.removeEventListener(name,callback,options));
    }
    active() { return this.alive && !document.hidden && !(this.motion.matches && this.plugin.settings.restlessRespectMotion) && !document.fullscreenElement; }
    updateClasses() {
        if (!this.alive) return;
        const s = this.plugin.settings, root = document.documentElement;
        const flags = [["still-restless",true],["sr-live",s.restlessLive],["sr-system-motion",s.restlessRespectMotion],["sr-paused",!this.active()],...STILL_RESTLESS_FEATURES.map(([key])=>[`sr-${key.slice(8).toLowerCase()}`,s[key]])];
        for (const [name,enabled] of flags) if (root.classList.contains(name) !== Boolean(enabled)) root.classList.toggle(name,Boolean(enabled));
    }
    sync() {
        const s = this.plugin.settings;
        this.updateClasses();
        this.backdrop.dataset.scene = s.restlessScene;
        const pace = {calm:[46,330], balanced:[32,250], vivid:[22,200]}[s.restlessTempo];
        this.duration = pace[1];
        this.plugin.setStyle("stillcord-restless-config", `:root { --sr-tint: ${s.restlessTint}; --sr-strength: ${s.restlessStrength / 100}; --sr-cycle: ${pace[0]}s; --sr-time: ${pace[1]}ms; }`);
        for (const animation of [...this.animations]) animation.cancel();
        this.clearPointer();
        this.visibilityChanged();
    }
    visibilityChanged() {
        this.updateClasses();
        if (!this.active()) {
            this.clearPointer();
            for (const animation of [...this.animations]) animation.cancel();
        }
    }
    clearPointer() {
        cancelAnimationFrame(this.frame); this.frame = 0;
        this.point = null; this.surface = null;
        this.light.style.opacity = "0";
        this.depth.style.transform = "translate3d(0,0,0)";
    }
    pointer(event) {
        if (!this.active() || event.pointerType === "touch" || event.buttons || this.plugin.shell?.hasAttribute("data-still-window-dragging")) return;
        const s = this.plugin.settings;
        if (!s.restlessSurfaceLight && !(s.restlessDepth && s.restlessLive)) return;
        this.point = {x:event.clientX, y:event.clientY, target:event.target};
        if (this.frame) return;
        this.frame = requestAnimationFrame(() => {
            this.frame = 0; if (!this.active() || !this.point) return;
            const p = this.point;
            if (s.restlessDepth && s.restlessLive) {
                const x = (p.x / Math.max(1,innerWidth) - .5) * 12, y = (p.y / Math.max(1,innerHeight) - .5) * 9;
                this.depth.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
            }
            const surface = s.restlessSurfaceLight && p.target instanceof Element ? p.target.closest(this.surfaceSelector) : null;
            if (!surface || !surface.isConnected || surface.closest('[aria-hidden="true"]')) { this.light.style.opacity = "0"; return; }
            const rect = surface.getBoundingClientRect();
            if (!rect.width || !rect.height) return;
            const radius = this.surface === surface ? this.radius : getComputedStyle(surface).borderRadius;
            this.surface = surface; this.radius = radius;
            Object.assign(this.light.style,{width:`${rect.width}px`,height:`${rect.height}px`,borderRadius:radius,transform:`translate3d(${rect.left}px,${rect.top}px,0)`,opacity:"1"});
            this.spot.style.transform = `translate3d(${p.x-rect.left-160}px,${p.y-rect.top-160}px,0)`;
        });
    }
    animate(node, frames, options, cleanup) {
        if (!this.active() || !node?.isConnected || !node.animate || this.animations.size >= 24) { cleanup?.(); return; }
        const animation = node.animate(frames,{duration:this.duration,easing:"cubic-bezier(.2,.75,.25,1)",...options});
        this.animations.add(animation);
        const done = () => { this.animations.delete(animation); cleanup?.(); };
        animation.finished.then(done,done);
        return animation;
    }
    enter(node) {
        if (this.plugin.settings.restlessEntrances) this.animate(node,[{opacity:.4,translate:"0 6px"},{opacity:1,translate:"0 0"}]);
    }
    messagesAdded(rows) {
        if (!this.active() || !this.plugin.settings.restlessMessages) return;
        const scroller = this.plugin.reader?.scroller;
        if (scroller && scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight > 150) return;
        for (const [i,row] of rows.slice(-6).entries()) {
            const rect = row.getBoundingClientRect(); if (rect.bottom < 0 || rect.top > innerHeight) continue;
            const contents = row.querySelector(':scope > [class*="contents_"]');
            this.animate(contents,[{opacity:.3,translate:"0 4px"},{opacity:1,translate:"0 0"}],{delay:i*22});
        }
    }
    press(event) {
        if (!this.active() || !this.plugin.settings.restlessRipples || event.button !== 0 || this.ripples.size >= 4) return;
        const button = event.target instanceof Element && event.target.closest('button, [role="button"], [role="tab"]');
        if (!button || button.matches(':disabled,[aria-disabled="true"]') || button.closest('dialog') || button.closest('[contenteditable="true"]')) return;
        const rect = button.getBoundingClientRect();
        if (!rect.width || rect.width > 400 || rect.height > 120) return;
        const clip = document.createElement("span"); clip.className = "sr-ripple-clip";
        Object.assign(clip.style,{left:`${rect.left}px`,top:`${rect.top}px`,width:`${rect.width}px`,height:`${rect.height}px`,borderRadius:getComputedStyle(button).borderRadius});
        const ring = document.createElement("span"); ring.className = "sr-ripple";
        const size = Math.min(180,Math.max(rect.width,rect.height)*1.5);
        Object.assign(ring.style,{left:`${event.clientX-rect.left-size/2}px`,top:`${event.clientY-rect.top-size/2}px`,width:`${size}px`,height:`${size}px`});
        clip.append(ring); this.effects.append(clip); this.ripples.add(clip);
        this.animate(ring,[{opacity:.4,transform:"scale(.15)"},{opacity:0,transform:"scale(1)"}],{duration:420},()=>{clip.remove();this.ripples.delete(clip);});
    }
    destroy() {
        this.alive = false; this.clearPointer();
        this.rootObserver.disconnect();
        for (const remove of this.listeners) remove(); this.listeners=[];
        for (const animation of [...this.animations]) animation.cancel(); this.animations.clear();
        for (const ripple of this.ripples) ripple.remove(); this.ripples.clear();
        this.backdrop.remove(); this.effects.remove();
        const root = document.documentElement;
        root.classList.remove("still-restless","sr-live","sr-paused","sr-system-motion");
        for (const [key] of STILL_RESTLESS_FEATURES) root.classList.remove(`sr-${key.slice(8).toLowerCase()}`);
        this.plugin.api.DOM.removeStyle("stillcord-restless-config");
        this.plugin.styleCache?.delete("stillcord-restless-config");
    }
}

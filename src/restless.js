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
    ["restlessDepth", "Quiet depth", "The live canvas follows your pointer with subtle parallax."],
    ["restlessConstellations", "Constellations", "Small star clusters and fine connecting lines drift behind the glass."],
    ["restlessMeteors", "Shooting light", "Occasional silver streaks cross the canvas."],
    ["restlessCaustics", "Glass caustics", "Slow reflected light ripples across the background."],
    ["restlessGrain", "Frosted grain", "A fine, still texture gives the canvas a tactile finish."],
    ["restlessVignette", "Gallery lighting", "Darkened edges frame the artwork and keep the center readable."],
    ["restlessPrism", "Prismatic edges", "A two-tone reflection traces the glass panel under your pointer."],
    ["restlessTrail", "Comet cursor", "Four fading points of light follow pointer movement."],
    ["restlessMagnetic", "Magnetic icons", "Toolbar icons lean gently toward your pointer inside their buttons."],
    ["restlessPhotos", "Photo depth", "Images lift and tilt slightly when you hover over an attachment."],
    ["restlessReactions", "Reaction bounce", "Reaction emoji give a short, springy response on hover."],
    ["restlessUnread", "Unread beacons", "New unread markers give two soft pulses, then settle."],
    ["restlessWriting", "Writing rhythm", "Three small lights respond while you type in the message field."],
    ["restlessSearch", "Search lens", "Search fields gain a crisp, illuminated focus treatment."],
    ["restlessCrossings", "Channel crossing", "A brief light sweep marks the move into another channel."],
    ["restlessScrollGlint", "Reading glint", "A light on the chat edge follows your position while scrolling."]
]);
const STILL_RESTLESS_GROUPS = Object.freeze([
    ["Atmosphere", ["Depth","Constellations","Meteors","Caustics","Grain","Vignette"]],
    ["Glass & space", ["SurfaceLight","LiquidRims","Entrances","Prism","Crossings"]],
    ["Interaction", ["Navigation","Ripples","Trail","Magnetic","Photos","Reactions","Search"]],
    ["Conversation", ["Messages","Avatars","Composer","Widgets","Unread","Writing","ScrollGlint"]]
]);
function stillRestlessPreset(settings, name) {
    const enabled = name === "subtle" ? new Set(["SurfaceLight","Entrances","Messages","Navigation","Ripples","Avatars","Grain","Vignette","Search","ScrollGlint"])
        : name === "expressive" ? new Set(STILL_RESTLESS_FEATURES.map(([key])=>key.slice(8)).filter(key=>!["Trail","Meteors","Caustics"].includes(key)))
        : name === "allout" ? new Set(STILL_RESTLESS_FEATURES.map(([key])=>key.slice(8))) : null;
    if (!enabled) return null;
    return {...settings,restless:true,restlessLive:true,restlessQuality:name==="subtle"?"still":"efficient",restlessEnergy:name==="subtle"?35:name==="expressive"?65:85,restlessTempo:name==="subtle"?"calm":name==="expressive"?"balanced":"vivid",
        ...Object.fromEntries(STILL_RESTLESS_FEATURES.map(([key])=>[key,enabled.has(key.slice(8))]))};
}

class StillRestless {
    constructor(plugin) {
        this.plugin = plugin;
        this.animations = new Set();
        this.ripples = new Set();
        this.transients = new Set();
        this.listeners = [];
        this.frame = 0;
        this.scrollFrame = 0;
        this.pointerActive = false;
        this.trailTimer = 0;
        this.point = null;
        this.surface = null;
        this.trailPoints = [];
        this.lastPath = location.pathname;
        this.alive = true;
        this.motion = matchMedia("(prefers-reduced-motion: reduce)");
        this.backdrop = document.createElement("div");
        this.backdrop.id = "still-restless-backdrop";
        this.backdrop.setAttribute("aria-hidden", "true"); this.backdrop.inert = true;
        this.depth = document.createElement("div"); this.depth.className = "sr-depth-layer";
        this.artwork = document.createElement("div"); this.artwork.className = "sr-artwork";
        for (let i = 0; i < 3; i++) {
            const field = document.createElement("div"); field.className = `sr-field sr-field-${i}`;
            this.artwork.append(field);
        }
        this.depth.append(this.artwork);
        this.atmosphere = document.createElement("div"); this.atmosphere.className = "sr-atmosphere-layer"; this.atmosphere.innerHTML = stillAtmosphere();
        this.backdrop.append(this.depth,this.atmosphere); document.body.prepend(this.backdrop);
        this.effects = document.createElement("div"); this.effects.id = "still-restless-effects";
        this.effects.setAttribute("aria-hidden", "true"); this.effects.inert = true;
        this.light = document.createElement("div"); this.light.className = "sr-hover-light";
        this.spot = document.createElement("div"); this.spot.className = "sr-light-spot";
        this.light.append(this.spot); this.effects.append(this.light); document.body.append(this.effects);
        this.trail = document.createElement("div"); this.trail.className="sr-cursor-lights";
        for(let i=0;i<4;i++){const dot=document.createElement("i");dot.style.setProperty("--sr-index",i);this.trail.append(dot);}
        this.writing=document.createElement("div");this.writing.className="sr-writing-indicator";
        for(let i=0;i<3;i++){const dot=document.createElement("i");dot.style.setProperty("--sr-index",i);this.writing.append(dot);}
        this.glint=document.createElement("div");this.glint.className="sr-reading-light";
        this.effects.append(this.trail,this.writing,this.glint);
        this.surfaceSelector = '[data-still-sidebar], [data-still-header], [data-still-messages], .still-widget, .sc-card, [class*="membersWrap_"], [class*="userProfileOuter_"]';
        this.on(document, "pointermove", event => this.pointer(event), {passive:true});
        this.on(document, "pointerdown", event => this.press(event), {passive:true});
        this.on(document, "pointerleave", () => this.clearPointer());
        this.on(document, "scroll", event => this.scroll(event), {capture:true,passive:true});
        this.on(document, "input", event => this.typed(event), {passive:true});
        this.on(document, "focusout", () => this.clearWriting());
        this.on(window, "resize", () => this.clearPointer(), {passive:true});
        this.on(window, "blur", () => this.visibilityChanged());
        this.on(window, "focus", () => this.visibilityChanged());
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
    active() { return this.alive && !document.hidden && document.hasFocus?.() !== false && !(this.motion.matches && this.plugin.settings.restlessRespectMotion) && !document.fullscreenElement; }
    updateClasses() {
        if (!this.alive) return;
        const s = this.plugin.settings, root = document.documentElement;
        const flags = [["still-restless",true],["sr-live",s.restlessLive],["sr-efficient",s.restlessQuality!=="layered"],["sr-still",s.restlessQuality==="still"],["sr-system-motion",s.restlessRespectMotion],["sr-paused",!this.active()],...STILL_RESTLESS_FEATURES.map(([key])=>[`sr-${key.slice(8).toLowerCase()}`,s[key]])];
        for (const [name,enabled] of flags) if (root.classList.contains(name) !== Boolean(enabled)) root.classList.toggle(name,Boolean(enabled));
    }
    sync() {
        const s = this.plugin.settings;
        this.updateClasses();
        if(this.backdrop.dataset.scene !== s.restlessScene) {
            [...this.artwork.children].forEach((field,i)=>{field.innerHTML=stillWallpaper(s.restlessScene,i);});
        }
        this.backdrop.dataset.scene = s.restlessScene;
        const pace = {calm:[46,330], balanced:[32,250], vivid:[22,200]}[s.restlessTempo];
        this.duration = pace[1];
        this.plugin.setStyle("stillcord-restless-config", `:root { --sr-tint: ${s.restlessTint}; --sr-secondary: ${s.restlessSecondary}; --sr-flair: ${s.restlessEnergy / 100}; --sr-strength: ${s.restlessStrength / 100}; --sr-cycle: ${pace[0]}s; --sr-time: ${pace[1]}ms; }`);
        for (const animation of [...this.animations]) animation.cancel();
        this.clearPointer();
        this.clearWriting(); this.clearScroll();
        this.visibilityChanged();
    }
    visibilityChanged() {
        this.updateClasses();
        if (!this.active()) {
            this.clearPointer();
            this.clearWriting(); this.clearScroll();
            for (const animation of [...this.animations]) animation.cancel();
        }
    }
    clearPointer() {
        if (!this.pointerActive && !this.frame && !this.magneticNode) return;
        this.pointerActive = false;
        cancelAnimationFrame(this.frame); this.frame = 0;
        this.point = null; this.surface = null;
        this.light.style.opacity = "0";
        this.depth.style.transform = "translate3d(0,0,0)";
        clearTimeout(this.trailTimer); this.trailTimer=0; this.trailPoints=[];
        this.trail.style.opacity="0";
        this.clearMagnet();
    }
    pointer(event) {
        if (!this.active() || event.pointerType === "touch" || event.buttons || this.plugin.shell?.hasAttribute("data-still-window-dragging")) return;
        const s = this.plugin.settings;
        if (!s.restlessSurfaceLight && !s.restlessPrism && !s.restlessTrail && !s.restlessMagnetic && !(s.restlessDepth && s.restlessLive && s.restlessQuality!=="still")) return;
        this.pointerActive = true;
        this.point = {x:event.clientX, y:event.clientY, target:event.target};
        if (this.frame) return;
        this.frame = requestAnimationFrame(() => {
            this.frame = 0; if (!this.active() || !this.point) return;
            const p = this.point;
            // Measure before changing styles: pointer input must not alternate
            // layout reads and writes on every display frame.
            const surface = (s.restlessSurfaceLight || s.restlessPrism) && p.target instanceof Element ? p.target.closest(this.surfaceSelector) : null;
            const visible = surface?.isConnected && !surface.closest('[aria-hidden="true"]');
            const rect = visible ? surface.getBoundingClientRect() : null;
            const radius = rect && (this.surface === surface ? this.radius : getComputedStyle(surface).borderRadius);
            this.magnet(s.restlessMagnetic ? p : null);
            if(s.restlessTrail) {
                this.trailPoints.unshift({x:p.x,y:p.y});this.trailPoints.length=Math.min(4,this.trailPoints.length);
                [...this.trail.children].forEach((dot,i)=>{const point=this.trailPoints[Math.min(i,this.trailPoints.length-1)];dot.style.transform=`translate3d(${point.x}px,${point.y}px,0)`;});
                this.trail.style.opacity="1";clearTimeout(this.trailTimer);
                this.trailTimer=setTimeout(()=>{this.trail.style.opacity="0";this.trailTimer=0;},160);
            }
            if (s.restlessDepth && s.restlessLive && s.restlessQuality!=="still") {
                const x = (p.x / Math.max(1,innerWidth) - .5) * 12, y = (p.y / Math.max(1,innerHeight) - .5) * 9;
                this.depth.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
            }
            if (!rect?.width || !rect.height) { this.light.style.opacity = "0"; return; }
            this.surface = surface; this.radius = radius;
            Object.assign(this.light.style,{width:`${rect.width}px`,height:`${rect.height}px`,borderRadius:radius,transform:`translate3d(${rect.left}px,${rect.top}px,0)`,opacity:"1"});
            this.spot.style.transform = `translate3d(${p.x-rect.left-160}px,${p.y-rect.top-160}px,0)`;
        });
    }
    clearMagnet(ease = false) {
        if(!this.magneticNode)return;
        if(ease) this.animate(this.magneticNode,[{translate:`${this.magneticNode.style.getPropertyValue("--sr-mx")} ${this.magneticNode.style.getPropertyValue("--sr-my")}`},{translate:"0px 0px"}],{duration:150});
        this.magneticNode.removeAttribute("data-sr-magnetic");
        for(const name of ["--sr-mx","--sr-my"])this.magneticNode.style.removeProperty(name);
        this.magneticNode=null;
    }
    magnet(point) {
        const button=point?.target instanceof Element ? point.target.closest('button,[role="button"]') : null;
        const rect=button?.getBoundingClientRect();
        const icon=rect && rect.width<=90 && rect.height<=90 && !button.matches(':disabled,[aria-disabled="true"]') ? button.querySelector("svg") : null;
        if(this.magneticNode!==icon)this.clearMagnet(true);
        if(!icon)return;
        this.magneticNode=icon;
        if(!icon.hasAttribute("data-sr-magnetic"))icon.setAttribute("data-sr-magnetic","");
        const energy=this.plugin.settings.restlessEnergy/100;
        icon.style.setProperty("--sr-mx",`${((point.x-rect.left-rect.width/2)/Math.max(1,rect.width)*5*energy).toFixed(2)}px`);
        icon.style.setProperty("--sr-my",`${((point.y-rect.top-rect.height/2)/Math.max(1,rect.height)*5*energy).toFixed(2)}px`);
    }
    clearWriting() {
        clearTimeout(this.writingTimer);this.writingTimer=0;
        this.writing.classList.remove("sr-writing-visible");
    }
    typed(event) {
        if(!this.active() || !this.plugin.settings.restlessWriting || !(event.target instanceof Element))return;
        const field=event.target.closest('[contenteditable="true"],textarea');
        if(!field || !this.plugin.composer?.contains(field))return;
        const rect=field.getBoundingClientRect();
        if(rect.bottom<0 || rect.top>innerHeight)return;
        this.writing.style.transform=`translate3d(${Math.max(4,Math.min(innerWidth-40,rect.right-32))}px,${Math.max(4,rect.top-10)}px,0)`;
        this.writing.classList.add("sr-writing-visible");clearTimeout(this.writingTimer);
        this.writingTimer=setTimeout(()=>this.clearWriting(),850);
    }
    clearScroll() {
        cancelAnimationFrame(this.scrollFrame);this.scrollFrame=0;
        clearTimeout(this.glintTimer);this.glintTimer=0;this.glint.style.opacity="0";
    }
    scroll(event) {
        this.clearPointer();
        const reader=this.plugin.reader,scroller=reader?.scroller;
        if(!this.active() || !this.plugin.settings.restlessScrollGlint || event.target!==scroller || this.scrollFrame)return;
        if(reader.busy){this.clearScroll();return;}
        this.scrollFrame=requestAnimationFrame(()=>{
            this.scrollFrame=0;
            if(!this.active() || !scroller?.isConnected)return;
            const rect=this.plugin.messages?.getBoundingClientRect();
            const range=scroller.scrollHeight-scroller.clientHeight;
            if(!rect || range<=0)return;
            const visibleBottom=rect.bottom-(reader.expanded?0:(reader.gap||0)*(reader.zoom||1));
            const top=Math.max(8,rect.top),bottom=Math.min(innerHeight-8,visibleBottom),progress=Math.max(0,Math.min(1,scroller.scrollTop/range));
            this.glint.style.transform=`translate3d(${rect.right-3}px,${top+Math.max(0,bottom-top-44)*progress}px,0)`;
            this.glint.style.opacity="1";clearTimeout(this.glintTimer);
            this.glintTimer=setTimeout(()=>{this.glint.style.opacity="0";this.glintTimer=0;},550);
        });
    }
    channelChanged() {
        const path=location.pathname;
        if(path===this.lastPath)return;
        this.lastPath=path;this.clearPointer();this.clearWriting();this.clearScroll();
        if(!this.active() || !this.plugin.settings.restlessCrossings || !this.plugin.messages || this.transients.size>=2)return;
        const rect=this.plugin.messages.getBoundingClientRect();
        if(!rect.width || !rect.height)return;
        const clip=document.createElement("div");clip.className="sr-crossing-clip";
        Object.assign(clip.style,{left:`${rect.left}px`,top:`${rect.top}px`,width:`${rect.width}px`,height:`${rect.height}px`,borderRadius:getComputedStyle(this.plugin.messages).borderRadius});
        const beam=document.createElement("div");beam.className="sr-crossing-beam";clip.append(beam);this.effects.append(clip);this.transients.add(clip);
        this.animate(beam,[{transform:"translateX(-110%)",opacity:0},{opacity:.65,offset:.2},{transform:"translateX(360%)",opacity:0}],{duration:650},()=>{clip.remove();this.transients.delete(clip);});
    }
    animate(node, frames, options, cleanup) {
        const budget = this.plugin.settings.restlessQuality === "layered" ? 24 : 10;
        if (!this.active() || !node?.isConnected || !node.animate || this.animations.size >= budget) { cleanup?.(); return; }
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
        this.clearWriting();this.clearScroll();
        this.rootObserver.disconnect();
        for (const remove of this.listeners) remove(); this.listeners=[];
        for (const animation of [...this.animations]) animation.cancel(); this.animations.clear();
        for (const ripple of this.ripples) ripple.remove(); this.ripples.clear();
        for (const node of this.transients)node.remove();this.transients.clear();
        this.backdrop.remove(); this.effects.remove();
        const root = document.documentElement;
        root.classList.remove("still-restless","sr-live","sr-efficient","sr-still","sr-paused","sr-system-motion");
        for (const [key] of STILL_RESTLESS_FEATURES) root.classList.remove(`sr-${key.slice(8).toLowerCase()}`);
        this.plugin.api.DOM.removeStyle("stillcord-restless-config");
        this.plugin.styleCache?.delete("stillcord-restless-config");
    }
}

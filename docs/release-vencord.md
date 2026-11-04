**StillCord 3.3 · Restless Expanded**, packaged for **Vencord desktop**.

- Same visual system, floating Browse, bubbles, widgets, reading mode and settings.
- Vencord lifecycle, DataStore persistence, module lookup and settings integration.
- Native weather and authenticated Windows media bridge, with cancellation and cleanup.
- No BetterDiscord dependency or renderer-side Node access.
- **25 effects** and six redesigned live wallpapers, with two light colors, brightness, and pace controls.
- Subtle, Expressive, and All out presets, plus individual switches.
- Hidden/unfocused/fullscreen pause, optional system reduced motion, and bounded effects with cleanup.
- Efficient rendering is the default: one moving artwork group, static ambient reflections, and a ten-effect limit. Subtle uses still artwork.
- Restored the chat panel’s rounded lower edge and balanced its bottom glass lighting.

Download **StillCord-Vencord-3.3.0.zip**. Copy its `stillCord` folder to your Vencord source checkout's `src/userplugins/`, rebuild Vencord, and enable StillCord.

**Custom Vencord plugins require a source build.** This download is a userplugin package, not a drop-in `.plugin.js`, a full Vencord installer, or an official Vencord catalog entry.

[Install instructions](https://github.com/ll2Rawll/StillCord/blob/main/vencord/stillCord/README.md) · [Vencord custom-plugin guide](https://docs.vencord.dev/installing/custom-plugins/)

Built and type-checked against Vencord `8d64c8be7e68616f8f116a6fff9480051aa2a0c5`. The Vencord host integration was tested in 3.1 inside Discord with Vencord running alone: channel switching, Browse open/close, settings persistence, ZIP lookup, weather, time, inbox, Windows media connection, and three clean disable/re-enable cycles. Media playback commands and activity publishing are tested with simulated endpoints so validation does not change playback or publish a profile activity. Repository previews were captured in the BetterDiscord edition.

Restless 3.3 uses the same shared runtime in both editions. Validation includes 22 unit/boundary tests, browser motion/settings/cleanup checks, live BetterDiscord checks, and a fresh Vencord build and type check. Enable it in **StillCord settings → Restless**.

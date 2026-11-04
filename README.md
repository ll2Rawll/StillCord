<div align="center">

<img src="docs/wordmark.svg" width="520" alt="StillCord — less noise, more room" />

**A quieter Discord. Two editions.**

OLED glass · floating navigation · connected message bubbles · useful widgets

[BetterDiscord release](https://github.com/ll2Rawll/StillCord/releases/tag/betterdiscord-v3.1.0) · [Vencord release](https://github.com/ll2Rawll/StillCord/releases/tag/vencord-v3.1.0) · [Previews](#six-ways-to-make-it-yours) · [Settings](#make-it-yours)

</div>

---

StillCord brings a minimal, glass-inspired workspace to **BetterDiscord and Vencord desktop**. A soft satin canvas, restrained highlights, and floating panels make room for the conversation. Both editions share the same visual source and include the theme.

| Your client | Download | Install |
| --- | --- | --- |
| **BetterDiscord** | [Plugin + optional media helper](https://github.com/ll2Rawll/StillCord/releases/tag/betterdiscord-v3.1.0) | Drop `StillCord.plugin.js` into Plugins. |
| **Vencord** | [Custom userplugin + optional media helper](https://github.com/ll2Rawll/StillCord/releases/tag/vencord-v3.1.0) | Add `stillCord` to `src/userplugins/` and rebuild Vencord. |

Choose the edition for your client. Vencord custom plugins require a source build; the Vencord ZIP is not a standalone installer or an official catalog plugin.

## Six ways to make it yours

These are captures of the **actual Discord desktop app running the BetterDiscord edition**, including its real channels and controls. Both editions share this visual system. The activity editor shows an unsubmitted demo draft. Open an image for the full-size view.

| Browse at your side | Just the conversation |
| :---: | :---: |
| [![Browse open](docs/previews/01-browse-open.png)](docs/previews/01-browse-open.png) | [![Browse closed, focused chat](docs/previews/02-focus.png)](docs/previews/02-focus.png) |
| A searchable channel list and your account controls, together. | Close Browse to let the conversation breathe. |

| A little context | Your activity, your way |
| :---: | :---: |
| [![Widgets beside chat](docs/previews/03-widgets.png)](docs/previews/03-widgets.png) | [![Activity editor and member list](docs/previews/04-activity.png)](docs/previews/04-activity.png) |
| Time, weather, Windows media, and your Discord inbox. | A compact Playing / Listening editor beside the conversation. |

| A finish that fits | Set your place |
| :---: | :---: |
| [![StillCord appearance settings](docs/previews/05-settings.png)](docs/previews/05-settings.png) | [![ZIP code and time-zone settings](docs/previews/06-location.png)](docs/previews/06-location.png) |
| Four tidy settings tabs, with changes saved as you go. | One US ZIP code sets the forecast and the clock’s time zone. |

## Install

### BetterDiscord

1. Install [BetterDiscord](https://betterdiscord.app/) for Discord desktop.
2. Download [**StillCord.plugin.js**](https://raw.githubusercontent.com/ll2Rawll/StillCord/main/StillCord.plugin.js). If it opens as text, save it with that exact filename.
3. In Discord, open **User Settings → BetterDiscord → Plugins → Open Plugins Folder**. Put the file there and enable **StillCord**.

**No separate theme is needed.** The artwork and styles are embedded; no remote stylesheet is loaded.

Upgrading from Still / StillSpeed? StillCord imports the previous layout preferences and disables the old Still theme and StillSpeed plugin to avoid duplicates. Keep a backup, then remove those two old addon files when you are happy with the upgrade. Existing Windows media setup continues to work.

### Vencord desktop

1. Prepare a [Vencord source build](https://docs.vencord.dev/installing/).
2. Download the [Vencord release](https://github.com/ll2Rawll/StillCord/releases/tag/vencord-v3.1.0). Put its `stillCord` folder in `Vencord/src/userplugins/`.
3. Run `pnpm install --frozen-lockfile`, then `pnpm build` in the Vencord checkout. Install that build following Vencord's guide, restart Discord, and enable **StillCord**.

[Full Vencord instructions](vencord/stillCord/README.md) · [Official custom-plugin guide](https://docs.vencord.dev/installing/custom-plugins/)

Use one client mod at a time. Each edition stores its preferences locally in its own client. Windows media is optional and the same adapter works with either edition.

## Make it yours

Open **Browse → ⋯ → StillCord settings**, or the settings button on StillCord's plugin card in either client. Vencord also exposes the panel through its Toolbox.

| Tab | What you can change |
| --- | --- |
| **Appearance** | OLED black, graphite, or light; satin curves or stars; brightness, monochrome, and accent color. |
| **Layout** | Floating layout, draggable Browse, Focus view, activity editor, and quieter navigation. |
| **Widgets & location** | Five-digit US ZIP, ZIP-based or device time, 12/24-hour clock, weather units, and individual widgets. |
| **Motion** | Reading mode, mouse-wheel smoothing, trackpad behavior, reduced motion, and lighter glass effects. |

ZIP lookup saves only after a valid result. A failed lookup keeps the last working location. The time zone comes from the selected location and follows daylight-saving changes. New installations use device time until a ZIP is set.

## Small details, considered

- **Browse** switches between channels and a searchable server directory. Drag its handle to move it; double-click to reset. **Ctrl + Alt + B** opens or closes it.
- **Connected bubbles** bring consecutive messages together, with a thin role-colored accent along their edge.
- **Reading mode** lets the glass reach the bottom while the input slides away. A vertical **Message** tab brings the input back, preserving your draft.
- **Quiet identity** uses neutral names and avatars, subtle role markers, and small game/music indicators.
- **Profile activity** is available from Browse’s More menu. **Apply** shares the activity; **Clear** removes StillCord’s custom activity. Saved drafts are not published automatically.

## Optional Windows media controls

The theme, navigation, clock, weather, inbox, and settings are included in both editions. Controlling Spotify, browsers, and other Windows media sessions uses a small optional local adapter.

1. Download and extract either edition's release ZIP (or this repository).
2. Install [Node.js](https://nodejs.org/) if needed.
3. Run `media/Install-Media.ps1` in PowerShell. It installs the adapter and a quiet startup shortcut for your Windows account.

The adapter listens only on `127.0.0.1` and uses a locally generated access key. Player support determines which controls are available. `media/Remove-Media.ps1` stops the service and removes its startup shortcut. The C# bridge source and build script are included.

## Lightweight by design

The canvas is static. Permanent panels avoid live blur. Wheel easing stops after it settles; reading transitions keep Discord’s scroll viewport stable. Clock updates happen once per minute, weather is cached for 15 minutes, and widget work pauses when hidden. Discord data uses local store listeners instead of a polling loop.

Actual smoothness still depends on Discord, the device, other plugins, and media on screen. Use **Motion → Low power finish** if you want fewer effects.

## Data & credits

Preferences, ZIP lookup results, and activity drafts are stored locally through BetterDiscord or Vencord's DataStore. ZIP lookup sends the ZIP to [Open-Meteo geocoding](https://open-meteo.com/en/docs/geocoding-api), powered by GeoNames. Forecast requests send city coordinates to [Open-Meteo](https://open-meteo.com/). Discord messages, member lists, and inbox data are not sent to those services. There is no analytics or telemetry service in StillCord.

StillCord is an independent, unofficial customization. Discord, BetterDiscord, Vencord, and content visible in screenshots belong to their respective owners. StillCord's code is [MIT licensed](LICENSE); Vencord keeps its own GPL license and is not redistributed in these packages.

## Development

```sh
npm ci
npm run build
npm run check
npm test
npm run package
```

`src/plugin.js`, `src/theme.css`, `src/settings.*`, and `src/location.js` are shared by both editions. `src/betterdiscord.js` and `src/vencord/` adapt the host APIs. `scripts/build.mjs` generates `StillCord.plugin.js` and the self-contained `vencord/stillCord/` userplugin folder. Edit the sources, not generated files. esbuild is a test dependency; Python 3 packages the release ZIPs.

The release workflow validates both editions, builds and type-checks against the Vencord commit pinned in `release.json`, then publishes two separate tagged releases with checksums. Bump the version and release notes before publishing a new pair.

The release was checked for integrated-theme lifecycle, settings changes, ZIP errors and cancellation, stale lookup responses, layout controls, activity-editor behavior, compact sizing, cleanup, and idle work. Screenshots in `docs/previews/` come from Discord; test fixtures are not used as product previews.

The Vencord edition was also tested in the actual Discord desktop app without BetterDiscord: channel switching, Browse toggles, persisted preferences, ZIP weather/time, inbox, media connection, and three disable/re-enable cycles passed. Playback commands and profile activity publishing use simulated endpoints in automated tests. No fixed frame-rate or future Discord-version compatibility is promised.

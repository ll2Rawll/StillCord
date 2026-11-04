<div align="center">

<img src="docs/wordmark.svg" width="520" alt="StillCord — less noise, more room" />

**A quieter Discord. One file.**

OLED glass · floating navigation · connected message bubbles · useful widgets

[Download StillCord](https://raw.githubusercontent.com/ll2Rawll/StillCord/main/StillCord.plugin.js) · [Preview](#six-ways-to-make-it-yours) · [Install](#install) · [Settings](#make-it-yours)

</div>

---

StillCord brings a minimal, glass-inspired workspace to BetterDiscord. A soft satin canvas, restrained highlights, and floating panels make room for the conversation. The theme and plugin are bundled together: **install `StillCord.plugin.js` and enable it.**

## Six ways to make it yours

These are captures of the **actual Discord desktop app running StillCord 3.0**, including its real channels and controls. The activity editor shows an unsubmitted demo draft. Open an image for the full-size view.

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

1. Install [BetterDiscord](https://betterdiscord.app/) for Discord desktop.
2. Download [**StillCord.plugin.js**](https://raw.githubusercontent.com/ll2Rawll/StillCord/main/StillCord.plugin.js). If it opens as text, save it with that exact filename.
3. In Discord, open **User Settings → BetterDiscord → Plugins → Open Plugins Folder**. Put the file there and enable **StillCord**.

**No separate theme is needed.** The artwork and styles are embedded; no remote stylesheet is loaded.

Upgrading from Still / StillSpeed? StillCord imports the previous layout preferences and disables the old Still theme and StillSpeed plugin to avoid duplicates. Keep a backup, then remove those two old addon files when you are happy with the upgrade. Existing Windows media setup continues to work.

## Make it yours

Open **Browse → ⋯ → StillCord settings**, or use the gear on StillCord’s BetterDiscord plugin card.

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

The theme, navigation, clock, weather, inbox, and settings work from the single plugin file. Controlling Spotify, browsers, and other Windows media sessions uses a small optional local adapter.

1. Download this repository using **Code → Download ZIP**, then extract it.
2. Install [Node.js](https://nodejs.org/) if needed.
3. Run `media/Install-Media.ps1` in PowerShell. It installs the adapter and a quiet startup shortcut for your Windows account.

The adapter listens only on `127.0.0.1` and uses a locally generated access key. Player support determines which controls are available. `media/Remove-Media.ps1` stops the service and removes its startup shortcut. The C# bridge source and build script are included.

## Lightweight by design

The canvas is static. Permanent panels avoid live blur. Wheel easing stops after it settles; reading transitions keep Discord’s scroll viewport stable. Clock updates happen once per minute, weather is cached for 15 minutes, and widget work pauses when hidden. Discord data uses local store listeners instead of a polling loop.

Actual smoothness still depends on Discord, the device, other plugins, and media on screen. Use **Motion → Low power finish** if you want fewer effects.

## Data & credits

Preferences, ZIP lookup results, and activity drafts are stored locally through BetterDiscord. ZIP lookup sends the ZIP to [Open-Meteo geocoding](https://open-meteo.com/en/docs/geocoding-api), powered by GeoNames. Forecast requests send city coordinates to [Open-Meteo](https://open-meteo.com/). Discord messages, member lists, and inbox data are not sent to those services. There is no analytics or telemetry service in StillCord.

StillCord is an independent, unofficial customization. Discord, BetterDiscord, and content visible in screenshots belong to their respective owners. The code is [MIT licensed](LICENSE).

## Development

```sh
npm run build
npm run check
npm test
```

No build dependencies are required. `src/plugin.js` contains the workspace, `src/theme.css` the visual system, and `src/settings.*` / `src/location.js` the new settings and location support. `scripts/build.mjs` produces the installable `StillCord.plugin.js`.

The release was checked for integrated-theme lifecycle, settings changes, ZIP errors and cancellation, stale lookup responses, layout controls, activity-editor behavior, compact sizing, cleanup, and idle work. Screenshots in `docs/previews/` come from Discord; test fixtures are not used as product previews.

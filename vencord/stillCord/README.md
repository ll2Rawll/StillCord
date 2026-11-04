# StillCord · Vencord

The StillCord glass workspace, built for **Vencord desktop**. Includes the same
layout, bubbles, settings, ZIP weather/time, activity editor, reading motion, and
optional Windows media controls as the BetterDiscord edition.

This is a custom **userplugin**, not a standalone `.plugin.js` or an official
Vencord catalog plugin. It must be compiled into your Vencord source build.

1. Follow https://docs.vencord.dev/installing/ to prepare a Vencord source checkout.
2. Put this entire `stillCord` folder under `Vencord/src/userplugins/`.
   The entry point must be `src/userplugins/stillCord/index.tsx`.
3. In the Vencord checkout, run `pnpm install --frozen-lockfile`, then `pnpm build`.
4. Install your custom Vencord build following its guide (`pnpm inject` on desktop),
   fully restart Discord, then enable **StillCord** in **Vencord → Plugins**.
5. Open its settings button or **Browse → ⋯ → StillCord settings**.

Use one Discord client mod at a time. The BetterDiscord and Vencord release files
are alternatives. Preferences are saved in Vencord's local DataStore and are
independent from BetterDiscord preferences. Set your ZIP in **Widgets & location**.

The optional media adapter in the release ZIP uses `media/Install-Media.ps1`.
An existing StillCord/StillSpeed Windows media adapter is also detected. Its key
stays in the native process. No Discord account token is needed or accessed.

The six repository previews were captured in the BetterDiscord edition; both
editions share the same visual source. Build compatibility and automated tests
do not guarantee compatibility with every future Discord update or other theme.

Source, releases, and support: https://github.com/ll2Rawll/StillCord

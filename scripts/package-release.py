"""Package the two client editions; no settings or developer state is included."""
from pathlib import Path
import hashlib
import json
import zipfile

root = Path(__file__).resolve().parent.parent
version = json.loads((root / "release.json").read_text())["version"]
dist = root / "dist"
dist.mkdir(exist_ok=True)
media = ["Install-Media.ps1", "Remove-Media.ps1", "Build-MediaBridge.ps1",
         "StillMediaBridge.cs", "StillMediaBridge.exe", "still-media-service.cjs"]
def package(client, files):
    output = dist / f"StillCord-{client}-{version}.zip"
    with zipfile.ZipFile(output, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for source, destination in files:
            info = zipfile.ZipInfo(destination, (2026, 1, 1, 0, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o644 << 16
            archive.writestr(info, source.read_bytes())
    return output

common = [(root / "LICENSE", "LICENSE")] + [(root / "media" / name, "media/" + name) for name in media]
bd = package("BetterDiscord", common + [(root / "StillCord.plugin.js", "StillCord.plugin.js"), (root / "docs/BetterDiscord.md", "INSTALL.md")])
vc = package("Vencord", common + [(path, "stillCord/" + path.name) for path in sorted((root / "vencord/stillCord").iterdir()) if path.is_file()])
(dist / "StillCord.plugin.js").write_bytes((root / "StillCord.plugin.js").read_bytes())
artifacts = [bd,vc,dist / "StillCord.plugin.js"]
(dist / "SHA256SUMS.txt").write_text("".join(hashlib.sha256(p.read_bytes()).hexdigest() + "  " + p.name + "\n" for p in artifacts))
for path in artifacts:
    print(f"Packaged {path.name} ({path.stat().st_size:,} bytes)")

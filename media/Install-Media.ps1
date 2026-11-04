$ErrorActionPreference = 'Stop'
$plugins = Join-Path $env:APPDATA 'StillCord\Media'
$legacy = Join-Path $env:APPDATA 'BetterDiscord\plugins'
$nodeExe = (Get-Command node -ErrorAction Stop).Source
New-Item -ItemType Directory -Path $plugins -Force | Out-Null
$service = Join-Path $plugins 'still-media-service.cjs'
Get-CimInstance Win32_Process -Filter "Name='node.exe'" | Where-Object {
    $_.CommandLine -and ($_.CommandLine.Contains('"'+$service+'"') -or $_.CommandLine.Contains('"'+(Join-Path $legacy 'still-media-service.cjs')+'"'))
} | ForEach-Object { Stop-Process -Id $_.ProcessId -ErrorAction SilentlyContinue }
Get-CimInstance Win32_Process -Filter "Name='StillMediaBridge.exe'" | Where-Object {
    $_.ExecutablePath -eq (Join-Path $plugins 'StillMediaBridge.exe') -or $_.ExecutablePath -eq (Join-Path $legacy 'StillMediaBridge.exe')
} | ForEach-Object { Stop-Process -Id $_.ProcessId -ErrorAction SilentlyContinue }
foreach ($name in @('StillMediaBridge.exe','still-media-service.cjs')) { Copy-Item -LiteralPath (Join-Path $PSScriptRoot $name) -Destination (Join-Path $plugins $name) -Force }
$config = Join-Path $plugins 'StillMediaBridge.json'
if (-not (Test-Path -LiteralPath $config)) {
    $legacyConfig = Join-Path $legacy 'StillMediaBridge.json'
    if (Test-Path -LiteralPath $legacyConfig) { $settings = Get-Content -Raw -LiteralPath $legacyConfig | ConvertFrom-Json }
    else { $settings = @{port=18749; key=[guid]::NewGuid().ToString('N')+[guid]::NewGuid().ToString('N')} }
    if ($settings.port -lt 1024 -or $settings.port -gt 65535 -or $settings.key -notmatch '^[a-f0-9]{64}$') { throw 'Invalid existing media configuration.' }
    [IO.File]::WriteAllText($config,($settings|ConvertTo-Json),[Text.UTF8Encoding]::new($false))
}
$launcher = Join-Path $plugins 'StillMediaStart.vbs'
$vbs = 'CreateObject("WScript.Shell").Run """'+$nodeExe+'"" ""'+$service+'""", 0, False'
[IO.File]::WriteAllText($launcher,$vbs,[Text.UTF8Encoding]::new($false))
$wsh = New-Object -ComObject WScript.Shell
$shortcut = $wsh.CreateShortcut((Join-Path ([Environment]::GetFolderPath('Startup')) 'Still Windows Media.lnk'))
$shortcut.TargetPath = Join-Path $env:WINDIR 'System32\wscript.exe'
$shortcut.Arguments = '"'+$launcher+'"'
$shortcut.Description = 'Local Windows media controls for Still Discord'
$shortcut.Save()
Start-Process -FilePath $nodeExe -ArgumentList ('"'+$service+'"') -WindowStyle Hidden
Write-Output 'Still Windows media is installed. It starts quietly when you sign in to Windows.'

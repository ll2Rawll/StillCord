$ErrorActionPreference = 'Stop'
$plugins = Join-Path $env:APPDATA 'StillCord\Media'
$service = Join-Path $plugins 'still-media-service.cjs'
$legacy = Join-Path $env:APPDATA 'BetterDiscord\plugins'
$shortcut = Join-Path ([Environment]::GetFolderPath('Startup')) 'Still Windows Media.lnk'
if (Test-Path -LiteralPath $shortcut) { Remove-Item -LiteralPath $shortcut }
Get-CimInstance Win32_Process -Filter "Name='node.exe'" | Where-Object {
    $_.CommandLine -and ($_.CommandLine.Contains('"'+$service+'"') -or $_.CommandLine.Contains('"'+(Join-Path $legacy 'still-media-service.cjs')+'"'))
} | ForEach-Object { Stop-Process -Id $_.ProcessId -ErrorAction SilentlyContinue }
Get-CimInstance Win32_Process -Filter "Name='StillMediaBridge.exe'" | Where-Object {
    $_.ExecutablePath -eq (Join-Path $plugins 'StillMediaBridge.exe') -or $_.ExecutablePath -eq (Join-Path $legacy 'StillMediaBridge.exe')
} | ForEach-Object { Stop-Process -Id $_.ProcessId -ErrorAction SilentlyContinue }
Write-Output 'StillCord media startup and the local service have been stopped. Turn off the Windows media widget in StillCord settings.'

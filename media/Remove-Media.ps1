$ErrorActionPreference = 'Stop'
$plugins = Join-Path $env:APPDATA 'BetterDiscord\plugins'
$service = Join-Path $plugins 'still-media-service.cjs'
$shortcut = Join-Path ([Environment]::GetFolderPath('Startup')) 'Still Windows Media.lnk'
if (Test-Path -LiteralPath $shortcut) { Remove-Item -LiteralPath $shortcut }
Get-CimInstance Win32_Process -Filter "Name='node.exe'" | Where-Object {
    $_.CommandLine -and $_.CommandLine.Contains('"'+$service+'"')
} | ForEach-Object { Stop-Process -Id $_.ProcessId -ErrorAction SilentlyContinue }
Write-Output 'Still media startup and the local service have been stopped. Turn off the Windows audio controls widget in StillSpeed settings.'

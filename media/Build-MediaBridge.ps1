$ErrorActionPreference = 'Stop'
$framework = Join-Path $env:WINDIR 'Microsoft.NET\Framework64\v4.0.30319'
$metadata = Join-Path ${env:ProgramFiles(x86)} 'Windows Kits\10\UnionMetadata\10.0.19041.0\Windows.winmd'
$output = Join-Path $PSScriptRoot 'StillMediaBridge.exe'
if (-not (Test-Path -LiteralPath $metadata)) { throw 'Windows 10 SDK 19041 metadata is required to rebuild the optional Windows media bridge.' }
& (Join-Path $framework 'csc.exe') /nologo /target:exe /platform:anycpu /optimize+ "/out:$output" "/reference:$metadata" "/reference:$framework\System.Runtime.WindowsRuntime.dll" "/reference:$framework\System.Runtime.dll" "/reference:$framework\System.Threading.Tasks.dll" "/reference:$framework\System.Runtime.InteropServices.WindowsRuntime.dll" /reference:System.Web.Extensions.dll (Join-Path $PSScriptRoot 'StillMediaBridge.cs')
if ($LASTEXITCODE -ne 0) { throw 'Media bridge compilation failed.' }
Get-FileHash -LiteralPath $output -Algorithm SHA256

import {readFileSync,writeFileSync} from 'node:fs';
const read = name => readFileSync(new URL('../src/' + name, import.meta.url),'utf8');
const source = read('plugin.js');
const header = source.slice(0, source.indexOf('*/') + 2);
const body = source.slice(source.indexOf('*/') + 2);
const bundle = `${header}\n\n// Built from src/. No remote styles or runtime dependencies.\nconst STILL_THEME = ${JSON.stringify(read('theme.css') + '\n' + read('settings.css'))};\n${read('location.js')}\n${read('settings.js')}\n${body}`;
writeFileSync(new URL('../StillCord.plugin.js',import.meta.url),bundle);
console.log(`Built StillCord.plugin.js (${Buffer.byteLength(bundle)} bytes).`);

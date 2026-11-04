import {readFileSync,writeFileSync,mkdirSync,copyFileSync} from 'node:fs';
const read = name => readFileSync(new URL('../src/' + name, import.meta.url),'utf8');
const source = read('plugin.js');
const header = source.slice(0, source.indexOf('*/') + 2);
const body = source.slice(source.indexOf('*/') + 2);
const runtime = `// Generated from the shared src/. Run npm run build to update.\nconst STILL_THEME = ${JSON.stringify(read('theme.css') + '\n' + read('settings.css') + '\n' + read('restless.css'))};\n${read('restless.js')}\n${read('location.js')}\n${read('settings.js')}\n${body}`;
const bundle = `${header}\n\n${runtime}\n${read('betterdiscord.js')}\nmodule.exports = class extends StillCord { constructor() { super(); } start() { if (!this.running) this.api = stillBetterDiscordHost(); super.start(); } };\n`;
writeFileSync(new URL('../StillCord.plugin.js',import.meta.url),bundle);
console.log(`Built StillCord.plugin.js (${Buffer.byteLength(bundle)} bytes).`);
const vencord = new URL('../vencord/stillCord/', import.meta.url);
mkdirSync(vencord, {recursive:true});
writeFileSync(new URL('runtime.js',vencord),`${runtime}\nexport {StillCord as default};\n`);
for (const file of ['index.tsx','host.ts','native.ts','nativeBridge.ts','lifecycle.ts','runtime.d.ts','README.md']) {
    copyFileSync(new URL('../src/vencord/'+file,import.meta.url),new URL(file,vencord));
}
console.log('Built vencord/stillCord (self-contained Vencord userplugin).');

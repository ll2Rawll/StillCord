const test = require('node:test'), assert = require('node:assert/strict');
const {buildSync} = require('esbuild'), Module = require('node:module'), path = require('node:path'), fs = require('node:fs');
function load(name) {
    const file = path.resolve(__dirname,'../src/vencord/'+name+'.ts');
    const code = buildSync({entryPoints:[file],bundle:true,platform:'node',format:'cjs',write:false}).outputFiles[0].text;
    const module = new Module(file); module.paths = Module._nodeModulePaths(path.dirname(file)); module._compile(code,file); return module.exports;
}
const {createBridge,weatherUrl} = load('nativeBridge'), {Lifecycle} = load('lifecycle');
const forecast = 'https://api.open-meteo.com/v1/forecast?latitude=41.5&longitude=-88';
test('Vencord native network boundary only permits the two weather endpoints',()=>{
    assert.equal(weatherUrl(forecast).hostname,'api.open-meteo.com');
    for(const url of ['http://api.open-meteo.com/v1/forecast','https://api.open-meteo.com.evil.test/v1/forecast','https://api.open-meteo.com/other','https://key@api.open-meteo.com/v1/forecast','http://127.0.0.1/','file:///C:/Windows/system.ini']) assert.throws(()=>weatherUrl(url));
});
test('media calls stay on localhost; the key never reaches the renderer response',async()=>{
    const calls=[];const key='a'.repeat(64);
    const bridge=createBridge(async(url,options)=>{calls.push({url:String(url),options});return new Response(JSON.stringify({revision:3,state:{available:true,title:'Example'}}))},async()=>({port:18749,key}));
    const result=await bridge.mediaState(1,-1,'state');
    assert.equal(calls[0].url,'http://127.0.0.1:18749/state?after=-1');
    assert.equal(calls[0].options.headers.Authorization,'Bearer '+key);assert.equal(calls[0].options.redirect,'error');
    assert.equal(JSON.stringify(result).includes(key),false);
    await bridge.mediaControl(1,'toggle','control');assert.equal(calls[1].options.method,'POST');assert.deepEqual(JSON.parse(calls[1].options.body),{command:'toggle'});
    assert.throws(()=>bridge.mediaControl(1,'shell','bad'));assert.throws(()=>bridge.mediaState(1,NaN,'bad'));
});
test('abort is scoped to the caller and cancels a held network request',async()=>{
    let signal;const bridge=createBridge((url,options)=>new Promise((resolve,reject)=>{signal=options.signal;signal.addEventListener('abort',()=>reject(new DOMException('Cancelled','AbortError')))}));
    const pending=bridge.weather(1,forecast,'weather');const rejected=assert.rejects(pending,e=>e.name==='AbortError');
    bridge.cancel(2,'weather');assert.equal(signal.aborted,false);bridge.cancel(1,'weather');assert.equal(signal.aborted,true);await rejected;
});
test('destroying the caller cancels all its pending requests',async()=>{
    const bridge=createBridge((url,options)=>new Promise((resolve,reject)=>options.signal.addEventListener('abort',()=>reject(new DOMException('Cancelled','AbortError')))));
    const requests=['one','two'].map(id=>assert.rejects(bridge.weather(1,forecast,id),e=>e.name==='AbortError'));bridge.close(1);await Promise.all(requests);
});
test('native responses are bounded',async()=>{
    const bridge=createBridge(async()=>new Response('x'.repeat(262145)));
    await assert.rejects(bridge.weather(1,forecast,'large'),/too large/);
});
test('disable during asynchronous startup never starts the stale instance',async()=>{
    const lifecycle=new Lifecycle();let resolve,starts=0,stops=0;
    const starting=lifecycle.start(()=>new Promise(r=>resolve=r));lifecycle.stop();
    resolve({start(){starts++},stop(){stops++}});await starting;assert.equal(starts,0);assert.equal(stops,1);assert.equal(lifecycle.current,undefined);
});
test('only the most recent startup wins; failure cleans up',async()=>{
    const lifecycle=new Lifecycle();let resolve,firstStarts=0,secondStops=0;
    const first=lifecycle.start(()=>new Promise(r=>resolve=r));
    const second={start(){},stop(){secondStops++}};await lifecycle.start(async()=>second);
    resolve({start(){firstStarts++},stop(){}});await first;assert.equal(lifecycle.current,second);assert.equal(firstStarts,0);
    lifecycle.stop();assert.equal(secondStops,1);
    let cleanup=0;await assert.rejects(lifecycle.start(async()=>({start(){throw Error('failed')},stop(){cleanup++}})),/failed/);assert.equal(cleanup,1);assert.equal(lifecycle.current,undefined);
});
test('Vencord runtime has no BetterDiscord or Node renderer dependency',()=>{
    const runtime=fs.readFileSync(path.resolve(__dirname,'../vencord/stillCord/runtime.js'),'utf8');
    assert.doesNotMatch(runtime,/\bBdApi\b|\brequire\s*\(/);
    const bd=fs.readFileSync(path.resolve(__dirname,'../StillCord.plugin.js'),'utf8');
    const theme=s=>s.match(/const STILL_THEME = (.*);/)[1];assert.equal(theme(runtime),theme(bd));
});

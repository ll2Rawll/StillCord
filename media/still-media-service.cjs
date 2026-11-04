// Local-only Windows media adapter for BetterDiscord's restricted Node API.
// Events come from StillMediaBridge.exe. Clients use a held HTTP request, not
// frequent polling. No accounts, remote network, telemetry or media history.
'use strict';
const http = require('http'), fs = require('fs'), path = require('path');
const {spawn} = require('child_process');
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'StillMediaBridge.json'), 'utf8'));
let child, idleTimer, latest = {available:false}, revision = 0, stopping = false;
let bridgeFailures = 0, nextBridgeStart = 0;
const pending = new Set();
function reply(res, code, value) { if(res.destroyed || res.writableEnded)return;res.writeHead(code, {'Content-Type':'application/json','Cache-Control':'no-store'});res.end(JSON.stringify(value)); }
function changed(state) {
    if(JSON.stringify(state)===JSON.stringify(latest))return;
    latest = state; revision++;
    for(const item of pending) {clearTimeout(item.timer);reply(item.res,200,{revision,state:latest});}
    pending.clear();
}
function startBridge() {
    if(child || stopping || Date.now()<nextBridgeStart)return;
    const startedAt=Date.now();
    child = spawn(path.join(__dirname,'StillMediaBridge.exe'),[],{windowsHide:true,stdio:['pipe','pipe','ignore'],shell:false});
    const active=child; let buffer='';active.stdout.setEncoding('utf8');
    active.stdout.on('data',chunk=>{buffer+=chunk;if(buffer.length>32768){buffer='';return;}const lines=buffer.split('\n');buffer=lines.pop();for(const line of lines){try{const state=JSON.parse(line);if(!state.commandError)changed(state);}catch{}}});
    active.stdin.on('error',()=>{});
    const failed=()=>{
        if(child!==active)return;
        child=null;
        if(Date.now()-startedAt>=60000)bridgeFailures=0;
        // A broken/missing bridge must not create an HTTP -> spawn -> exit loop.
        nextBridgeStart=Date.now()+Math.min(60000,15000*2**bridgeFailures);
        bridgeFailures=Math.min(bridgeFailures+1,2);
        changed({available:false,error:'Waiting for Windows media'});
    };
    active.on('error',failed);active.on('exit',failed);
}
const server=http.createServer((req,res)=>{
    if(req.headers.authorization!=='Bearer '+config.key){reply(res,403,{error:'Forbidden'});return;}
    const url=new URL(req.url,'http://127.0.0.1');
    if(req.method==='GET'&&url.pathname==='/state') {
        clearTimeout(idleTimer);
        idleTimer=setTimeout(()=>{const active=child;child=null;active?.kill();latest={available:false};revision++;},45000);
        startBridge();
        if(Number(url.searchParams.get('after'))!==revision){reply(res,200,{revision,state:latest});return;}
        if(pending.size>=4){reply(res,429,{error:'Too many connections'});return;}
        const item={res,timer:setTimeout(()=>{pending.delete(item);reply(res,200,{revision,state:latest});},25000)};
        pending.add(item);res.on('close',()=>{clearTimeout(item.timer);pending.delete(item);});return;
    }
    if(req.method==='POST'&&url.pathname==='/control') {
        let body='';req.on('data',chunk=>{body+=chunk;if(body.length>128)req.destroy()});
        req.on('end',()=>{try{const {command}=JSON.parse(body);if(!['toggle','previous','next'].includes(command)){reply(res,400,{error:'Unknown control'});return;}if(!child?.stdin.writable){reply(res,503,{error:'Player unavailable'});return;}child.stdin.write(command+'\n');reply(res,200,{accepted:true});}catch{reply(res,400,{error:'Invalid request'});}});return;
    }
    reply(res,404,{error:'Not found'});
});
server.headersTimeout=10000;server.requestTimeout=35000;
server.on('error',()=>{stopping=true;child?.kill();process.exit(0)});
server.listen(config.port,'127.0.0.1');
function close(){stopping=true;for(const item of pending){clearTimeout(item.timer);item.res.end();}child?.kill();server.close();process.exit(0)}
process.on('SIGTERM',close);process.on('SIGINT',close);

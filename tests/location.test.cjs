const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const context=vm.createContext({Intl,URLSearchParams,AbortController,DOMException,module:{exports:{}},console});
vm.runInContext(fs.readFileSync(require.resolve('../StillCord.plugin.js'),'utf8')+'\nthis.resolveZip=stillResolveZip;this.validate=stillLocation;this.forecast=stillForecastUrl;',context);
const ny={zip:'10001',name:'New York',region:'New York',latitude:40.71427,longitude:-74.00597,timezone:'America/New_York'};
const place={...ny,country_code:'US',postcodes:['10001'],admin1:'New York'};
test('valid ZIP resolves coordinates and clock zone; request is scoped to the ZIP',async()=>{
 let request;const api={Net:{fetch:async(url,options)=>{request={url,options};return{ok:true,json:async()=>({results:[place]})}}}};
 const result=await context.resolveZip(api,' 10001 ',new AbortController().signal);
 assert.equal(result.timezone,ny.timezone);assert.equal(result.zip,'10001');
 const url=new URL(request.url);assert.equal(url.searchParams.get('name'),'10001');assert.equal(url.searchParams.get('countryCode'),'US');assert.equal(request.options.timeout,12000);
 const forecast=new URL(context.forecast(result));assert.equal(forecast.searchParams.get('timezone'),ny.timezone);assert.equal(forecast.searchParams.has('zip'),false);
});
test('invalid, unknown, and unsuccessful lookups never produce a location',async()=>{
 let requests=0;const api={Net:{fetch:async()=>{requests++;return{ok:true,json:async()=>({results:[]})}}}};
 await assert.rejects(context.resolveZip(api,'12x45'),/five-digit/);assert.equal(requests,0);
 await assert.rejects(context.resolveZip(api,'00000'),/No location/);
 await assert.rejects(context.resolveZip({Net:{fetch:async()=>({ok:false})}},'10001'),/unavailable/);
 assert.equal(context.validate({...ny,timezone:'Invalid/Zone'}),null);assert.equal(context.validate({...ny,latitude:100}),null);
});
test('a failed change preserves the previous location and never saves',async()=>{
 const plugin=new context.module.exports();plugin.running=true;plugin.location=ny;
 let saves=0;plugin.api={Net:{fetch:async()=>({ok:true,json:async()=>({results:[]})})},Data:{save(){saves++}}};
 await assert.rejects(plugin.setLocation('00000'));assert.equal(plugin.location,ny);assert.equal(saves,0);
});
test('the newest lookup wins even when an aborted server response arrives last',async()=>{
 const plugin=new context.module.exports();plugin.running=true;let responses=[],saved=[],refreshes=0;
 plugin.workspace={changeLocation(){refreshes++}};plugin.api={Data:{save:(k,v)=>saved.push(v)},Net:{fetch:()=>new Promise(resolve=>responses.push(resolve))}};
 const first=plugin.setLocation('10001'),firstRejected=assert.rejects(first,e=>e.name==='AbortError');
 const second=plugin.setLocation('94103');responses[1]({ok:true,json:async()=>({results:[{name:'San Francisco',admin1:'California',latitude:37.77,longitude:-122.42,timezone:'America/Los_Angeles',country_code:'US',postcodes:['94103']}]})});await second;
 responses[0]({ok:true,json:async()=>({results:[place]})});await firstRejected;
 assert.equal(plugin.location.zip,'94103');assert.equal(saved.length,1);assert.equal(refreshes,1);
});
test('stopping cancels a pending location change',async()=>{
 const plugin=new context.module.exports();plugin.running=true;let resolve;let saves=0;
 plugin.api={Data:{save(){saves++}},Net:{fetch:()=>new Promise(r=>resolve=r)}};
 const promise=plugin.setLocation('10001');plugin.running=false;plugin.locationAbort.abort();
 resolve({ok:true,json:async()=>({results:[place]})});await assert.rejects(promise,e=>e.name==='AbortError');assert.equal(saves,0);
});

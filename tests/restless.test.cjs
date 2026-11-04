const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const context=vm.createContext({Intl,URLSearchParams,AbortController,DOMException,module:{exports:{}},console,document:{hidden:false,fullscreenElement:null},innerHeight:1000});
vm.runInContext(fs.readFileSync(require.resolve('../StillCord.plugin.js'),'utf8')+'\nthis.Restless=StillRestless;this.normalize=normalizedSettings;',context);
function motion(){const engine=Object.create(context.Restless.prototype);Object.assign(engine,{alive:true,motion:{matches:false},animations:new Set(),duration:250,plugin:{settings:context.normalize({restless:true})}});context.document.hidden=false;context.document.fullscreenElement=null;return engine;}

test('Restless preferences reject injected values and clamp artwork intensity',()=>{
    const s=context.normalize({restless:true,restlessTint:'red;display:none',restlessScene:'remote-video',restlessTempo:'fastest',restlessStrength:Infinity,restlessWidgets:'true'});
    assert.equal(s.restless,true);assert.equal(s.restlessTint,'#d3d9e4');assert.equal(s.restlessScene,'silk');assert.equal(s.restlessTempo,'balanced');assert.equal(s.restlessStrength,45);
    assert.equal(context.normalize({restlessStrength:200}).restlessStrength,85);assert.equal(context.normalize({restlessStrength:-2}).restlessStrength,15);
    assert.equal(context.normalize({restlessWidgets:false}).restlessWidgets,false);assert.equal(context.normalize({}).restless,false);
});

test('hidden windows, reduced motion, fullscreen and stopped instances cannot animate',()=>{
    const engine=motion();assert.equal(engine.active(),true);
    context.document.hidden=true;assert.equal(engine.active(),false);context.document.hidden=false;
    engine.motion.matches=true;assert.equal(engine.active(),false);
    engine.plugin.settings.restlessRespectMotion=false;assert.equal(engine.active(),true);engine.motion.matches=false;
    context.document.fullscreenElement={};assert.equal(engine.active(),false);context.document.fullscreenElement=null;
    engine.alive=false;assert.equal(engine.active(),false);
});

test('arrival effects skip history reading and offscreen rows and bound message bursts',()=>{
    const engine=motion(),animated=[];engine.animate=node=>animated.push(node);
    const row=i=>({getBoundingClientRect:()=>({top:i===8?1100:100,bottom:200}),querySelector:()=>i});
    const rows=Array.from({length:10},(_,i)=>row(i));
    engine.plugin.reader={scroller:{scrollHeight:3000,scrollTop:0,clientHeight:900}};
    engine.messagesAdded(rows);assert.equal(animated.length,0);
    engine.plugin.reader.scroller.scrollTop=2100;engine.messagesAdded(rows);assert.deepEqual(animated,[4,5,6,7,9]);
    animated.length=0;engine.plugin.settings.restlessMessages=false;engine.messagesAdded(rows);assert.equal(animated.length,0);
});

test('finite effects release their tracking on completion and cancellation',async()=>{
    const engine=motion();let finish,reject,cleanups=0;
    const animation={finished:new Promise((resolve,fail)=>{finish=resolve;reject=fail})};
    engine.animate({isConnected:true,animate:()=>animation},[],{},()=>cleanups++);assert.equal(engine.animations.size,1);
    finish();await Promise.resolve();assert.equal(engine.animations.size,0);assert.equal(cleanups,1);
    animation.finished=new Promise((resolve,fail)=>{finish=resolve;reject=fail});
    engine.animate({isConnected:true,animate:()=>animation},[],{},()=>cleanups++);reject(new Error('cancelled'));await Promise.resolve();
    assert.equal(engine.animations.size,0);assert.equal(cleanups,2);
});

test('effect budget refuses excess work and cleans up rejected decoration nodes',()=>{
    const engine=motion();let started=0,cleaned=0;const node={isConnected:true,animate:()=>started++};
    for(let i=0;i<24;i++)engine.animations.add({});
    engine.animate(node,[],{},()=>cleaned++);assert.equal(started,0);assert.equal(cleaned,1);
    engine.animations.clear();context.document.hidden=true;engine.animate(node,[],{},()=>cleaned++);assert.equal(started,0);assert.equal(cleaned,2);
});

test('changing Restless details preserves the layout and only updates the motion layer',()=>{
    const plugin=new context.module.exports();plugin.running=true;plugin.settings=context.normalize({restless:true});
    let updates=0,layout=0,saves=0;plugin.syncRestless=()=>updates++;plugin.apply=()=>layout++;plugin.api={Data:{save:()=>saves++}};
    plugin.update('restlessScene','orbit');assert.equal(plugin.settings.restlessScene,'orbit');assert.equal(updates,1);assert.equal(layout,0);assert.equal(saves,1);
    plugin.update('restlessScene','orbit');assert.equal(updates,1);assert.equal(saves,1);
    plugin.update('restless',false);assert.equal(layout,1);
});

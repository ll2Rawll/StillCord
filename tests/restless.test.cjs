const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const context=vm.createContext({Intl,URLSearchParams,AbortController,DOMException,module:{exports:{}},console,document:{hidden:false,fullscreenElement:null},innerHeight:1000});
vm.runInContext(fs.readFileSync(require.resolve('../StillCord.plugin.js'),'utf8')+'\nthis.Restless=StillRestless;this.normalize=normalizedSettings;this.preset=stillRestlessPreset;this.features=STILL_RESTLESS_FEATURES;this.groups=STILL_RESTLESS_GROUPS;this.scenes=STILL_SCENES;this.wallpaper=stillWallpaper;',context);
function motion(){const engine=Object.create(context.Restless.prototype);Object.assign(engine,{alive:true,motion:{matches:false},animations:new Set(),duration:250,plugin:{settings:context.normalize({restless:true})}});context.document.hidden=false;context.document.fullscreenElement=null;return engine;}

test('Restless preferences reject injected values and clamp artwork intensity',()=>{
    const s=context.normalize({restless:true,restlessTint:'red;display:none',restlessScene:'remote-video',restlessTempo:'fastest',restlessStrength:Infinity,restlessWidgets:'true'});
    assert.equal(s.restless,true);assert.equal(s.restlessTint,'#d3d9e4');assert.equal(s.restlessScene,'silk');assert.equal(s.restlessTempo,'balanced');assert.equal(s.restlessStrength,45);
    assert.equal(context.normalize({restlessStrength:200}).restlessStrength,85);assert.equal(context.normalize({restlessStrength:-2}).restlessStrength,15);
    assert.equal(context.normalize({restlessWidgets:false}).restlessWidgets,false);assert.equal(context.normalize({}).restless,false);
});

test('hidden or unfocused windows, reduced motion, fullscreen and stopped instances cannot animate',()=>{
    const engine=motion();assert.equal(engine.active(),true);
    context.document.hidden=true;assert.equal(engine.active(),false);context.document.hidden=false;
    context.document.hasFocus=()=>false;assert.equal(engine.active(),false);delete context.document.hasFocus;
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

test('efficient rendering caps finite effects at ten; full depth allows twenty-four',()=>{
    const engine=motion();let started=0,cleaned=0;const node={isConnected:true,animate:()=>started++};
    assert.equal(engine.plugin.settings.restlessQuality,'efficient');
    for(let i=0;i<10;i++)engine.animations.add({});
    engine.animate(node,[],{},()=>cleaned++);assert.equal(started,0);assert.equal(cleaned,1);
    engine.plugin.settings.restlessQuality='layered';
    for(let i=0;i<14;i++)engine.animations.add({});
    engine.animate(node,[],{},()=>cleaned++);assert.equal(started,0);assert.equal(cleaned,2);
    engine.animations.clear();context.document.hidden=true;engine.animate(node,[],{},()=>cleaned++);assert.equal(started,0);assert.equal(cleaned,3);
});

test('changing Restless details preserves the layout and only updates the motion layer',()=>{
    const plugin=new context.module.exports();plugin.running=true;plugin.settings=context.normalize({restless:true});
    let updates=0,layout=0,saves=0;plugin.syncRestless=()=>updates++;plugin.apply=()=>layout++;plugin.api={Data:{save:()=>saves++}};
    plugin.update('restlessScene','orbit');assert.equal(plugin.settings.restlessScene,'orbit');assert.equal(updates,1);assert.equal(layout,0);assert.equal(saves,1);
    plugin.update('restlessScene','orbit');assert.equal(updates,1);assert.equal(saves,1);
    plugin.update('restless',false);assert.equal(layout,1);
});

test('the expanded collection exposes exactly 25 unique effects, each in one settings group',()=>{
    const keys=Array.from(context.features,([key])=>key),grouped=Array.from(context.groups).flatMap(([,names])=>Array.from(names,key=>'restless'+key));
    assert.equal(keys.length,25);assert.equal(new Set(keys).size,25);assert.deepEqual(grouped.sort(),keys.sort());
    assert.ok(keys.every(key=>typeof context.normalize({})[key]==='boolean'));
});

test('presets preserve identity and layout preferences and apply a bounded set of effects',()=>{
    const before=context.normalize({restlessTint:'#112233',restlessSecondary:'#445566',restlessScene:'prism',restlessRespectMotion:false,focusView:false});
    const all=context.preset(before,'allout'),quiet=context.preset(before,'subtle');
    assert.equal(all.restless,true);assert.equal(all.restlessEnergy,85);assert.ok(context.features.every(([key])=>all[key]));
    assert.ok(context.features.filter(([key])=>quiet[key]).length<25);assert.equal(quiet.restlessTrail,false);
    assert.equal(quiet.restlessQuality,'still');assert.equal(all.restlessQuality,'efficient');
    assert.equal(context.normalize({restlessQuality:'unlimited'}).restlessQuality,'efficient');
    for(const next of [all,quiet])for(const key of ['restlessTint','restlessSecondary','restlessScene','restlessRespectMotion','focusView'])assert.equal(next[key],before[key]);
    assert.equal(before.restless,false);assert.equal(context.preset(before,'unknown'),null);
});

test('all six artworks have independent gradient IDs and no external content',()=>{
    const ids=[];assert.equal(context.scenes.length,6);
    for(const [scene] of context.scenes)for(let layer=0;layer<3;layer++){
        assert.equal(context.normalize({restlessScene:scene}).restlessScene,scene);
        const svg=context.wallpaper(scene,layer);assert.match(svg,/viewBox="0 0 1600 1000"/);assert.doesNotMatch(svg,/<script|<foreignObject|<image|<filter|onload=|https?:\/\/(?!www\.w3\.org)/);
        ids.push(...Array.from(svg.matchAll(/id="([^"]+)"/g),m=>m[1]));
    }
    assert.equal(ids.length,new Set(ids).size);
    const invalid=context.normalize({restlessSecondary:'red;opacity:0',restlessEnergy:-100});assert.equal(invalid.restlessSecondary,'#89939f');assert.equal(invalid.restlessEnergy,20);
    assert.equal(context.normalize({restlessEnergy:900}).restlessEnergy,100);
});

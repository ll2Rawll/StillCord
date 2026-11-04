let stillSettingsId = 0;
function stillSettingsPanel(plugin) {
    const id = `stillcord-settings-${++stillSettingsId}`;
    const el = (tag, cls, text) => {const node=document.createElement(tag); if(cls)node.className=cls; if(text!==undefined)node.textContent=text; return node;};
    const root=el('section','stillcord-settings'); root.setAttribute('aria-label','StillCord settings');
    const header=el('header','sc-settings-header'), mark=el('span','sc-mark','S'); mark.setAttribute('aria-hidden','true');
    const brand=el('div');brand.append(el('div','sc-eyebrow','YOUR DISCORD, QUIETLY REFINED'),el('h2','','StillCord'));
    header.append(mark,brand,el('span','sc-version','3.3'));root.append(header);
    root.append(el('p','sc-settings-intro','A little less noise. A little more you.'));
    const tabs=el('div','sc-tabs');tabs.setAttribute('role','tablist');tabs.setAttribute('aria-label','Settings category');root.append(tabs);
    const panels=new Map(),buttons=[];
    const activate=(key,focus=false)=>{for(const [name,panel] of panels){const active=name===key;panel.hidden=!active;const button=buttons.find(b=>b.dataset.page===name);button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;if(active&&focus)button.focus();}};
    for(const [key,title] of [['appearance','Appearance'],['layout','Layout'],['widgets','Widgets & location'],['motion','Motion'],['restless','Restless']]){
        const button=el('button','sc-tab',title);button.type='button';button.dataset.page=key;button.id=`${id}-${key}-tab`;button.setAttribute('role','tab');button.setAttribute('aria-controls',`${id}-${key}`);
        button.addEventListener('click',()=>activate(key));buttons.push(button);tabs.append(button);
        const panel=el('div','sc-tab-panel');panel.id=`${id}-${key}`;panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',button.id);panels.set(key,panel);root.append(panel);
    }
    tabs.addEventListener('keydown',event=>{const index=buttons.indexOf(document.activeElement);if(index<0)return;let next=index;
        if(event.key==='ArrowRight')next=(index+1)%buttons.length;else if(event.key==='ArrowLeft')next=(index+buttons.length-1)%buttons.length;
        else if(event.key==='Home')next=0;else if(event.key==='End')next=buttons.length-1;else return;
        event.preventDefault();activate(buttons[next].dataset.page,true);});
    const card=(page,title,note)=>{const card=el('section','sc-card');card.append(el('h3','',title));if(note)card.append(el('p','sc-card-note',note));panels.get(page).append(card);return card;};
    const row=(target,key,title,note,control)=>{const wrapper=el('div','sc-setting');const label=el('label','sc-setting-copy');label.htmlFor=`${id}-${key}`;
        label.append(el('span','sc-setting-name',title));if(note){const detail=el('span','sc-setting-note',note);detail.id=`${id}-${key}-hint`;label.append(detail);control.setAttribute('aria-describedby',detail.id);}
        control.id=`${id}-${key}`;control.setAttribute('aria-label',title);wrapper.append(label,control);target.append(wrapper);return control;};
    const toggle=(target,key,title,note)=>{const input=el('input','sc-switch');input.type='checkbox';input.setAttribute('role','switch');input.checked=plugin.settings[key];input.addEventListener('change',()=>plugin.update(key,input.checked));return row(target,key,title,note,input);};
    const select=(target,key,title,note,choices)=>{const input=el('select','sc-select');for(const [value,label] of choices){const opt=el('option','',label);opt.value=value;input.append(opt);}input.value=plugin.settings[key];input.addEventListener('change',()=>plugin.update(key,input.value));return row(target,key,title,note,input);};
    const appearance=card('appearance','The canvas','Soft light, clean edges, room to breathe.');
    select(appearance,'palette','Finish','Choose the tone of your space.',[['oled','OLED black'],['graphite','Graphite'],['light','Soft light']]);
    select(appearance,'backgroundStyle','Artwork','Built in, static, and lightweight.',[['satin','Satin curves'],['stars','Quiet stars']]);
    select(appearance,'starIntensity','Brightness','How much of the artwork comes through.',[['subtle','Subtle'],['balanced','Balanced'],['bright','Brighter']]);
    toggle(appearance,'starfield','Show artwork','Switch off for a plain canvas.');
    const identity=card('appearance','Identity');
    toggle(identity,'monochrome','Monochrome','Neutral names and avatars. Role colors stay in the small accents.');
    const accent=el('input','sc-color');accent.type='color';accent.value=plugin.settings.accent;accent.addEventListener('change',()=>plugin.update('accent',accent.value));row(identity,'accent','Accent color','Visible when Monochrome is off.',accent);
    const layout=card('layout','Make room');
    for(const item of [
        ['customLayout','Floating layout','Chat, navigation, and widgets in their own space.'],
        ['movableBrowse','Move Browse','Drag its handle. Double-click to return it home.'],
        ['focusView','Focus view','Tuck away the member and profile sidebars.'],
        ['activityEditor','Activity editor','Set a custom Playing or Listening activity from Browse.']
    ])toggle(layout,...item);
    const quiet=card('layout','Keep it simple');
    toggle(quiet,'quietNavigation','Quiet navigation','Hide the Nitro and Shop shortcuts.');
    toggle(quiet,'hideActivity','Quiet Friends screen','Hide the extra activity column on Friends.');
    const location=card('widgets','Your place','One ZIP code for the forecast and the clock.');
    const locationForm=el('form','sc-location-form'),zip=el('input','sc-zip');zip.type='text';zip.inputMode='numeric';zip.autocomplete='postal-code';zip.maxLength=5;zip.pattern='[0-9]{5}';zip.required=true;zip.placeholder='US ZIP code';zip.value=plugin.location?.zip||'';zip.id=`${id}-zip`;
    const zipLabel=el('label','sc-location-label','ZIP code');zipLabel.htmlFor=zip.id;
    const save=el('button','sc-primary','Update location');save.type='submit';
    const fields=el('div','sc-location-fields');fields.append(zip,save);locationForm.append(zipLabel,fields);location.append(locationForm);
    const status=el('p','sc-location-status',plugin.location?`${plugin.location.name}, ${plugin.location.region} · ${plugin.location.timezone.replaceAll('_',' ')}`:'Choose a ZIP to enable weather. The clock uses your device time until then.');
    status.setAttribute('role','status');status.setAttribute('aria-live','polite');location.append(status);
    locationForm.addEventListener('submit',async event=>{event.preventDefault();if(!locationForm.reportValidity())return;save.disabled=true;zip.disabled=true;status.textContent='Finding your location…';status.removeAttribute('data-error');
        try{const place=await plugin.setLocation(zip.value);if(!root.isConnected)return;status.textContent=`${place.name}, ${place.region} · ${place.timezone.replaceAll('_',' ')}`;}
        catch(error){if(root.isConnected){status.textContent=error.name==='AbortError'?'Lookup cancelled.':error.message;status.setAttribute('data-error','true');}}
        finally{save.disabled=false;zip.disabled=false;}});
    toggle(location,'zipTime','Match the clock to your ZIP','Turn off to use your device time zone.');
    const privacy=el('p','sc-privacy','Location lookup uses Open-Meteo / GeoNames. Only your ZIP and city coordinates are sent; Discord data stays in Discord.');location.append(privacy);
    const widgets=card('widgets','At a glance');
    for(const item of [
        ['widgets','Widget dock','Show or hide the entire dock.'],['clockWidget','Clock','Time and date, updated once a minute.'],
        ['clock24','24-hour time','Use 18:30 instead of 6:30 PM.'],['weatherWidget','Weather','Refreshes at most every 15 minutes.'],
        ['fahrenheit','Fahrenheit','Turn off for Celsius.'],['mediaWidget','Windows media','Requires the optional local Windows adapter.'],
        ['notificationsWidget','Discord inbox','Mentions and unread DMs, available locally.']
    ])toggle(widgets,...item);
    const motion=card('motion','Smooth, with restraint','Short movements. No idle animation loop.');
    for(const item of [
        ['readingMode','Reading mode','The input slides away while you read older messages.'],
        ['smoothWheel','Smooth scrolling','Ease mouse-wheel ticks into a short, controlled glide.'],
        ['mouseWheelMode','Mouse-wheel input','Switch off for a trackpad with its own momentum.'],
        ['respectReaderMotion','Follow reduced motion','Use your system preference for scrolling and reading mode.'],
        ['microMotion','Small animations','Subtle popouts and button feedback.'],['reduceMotion','Trim Discord motion','Reduce long native transitions.']
    ])toggle(motion,...item);
    const performance=card('motion','Light on your desktop');
    toggle(performance,'efficientGlass','Lightweight glass','Static gloss on permanent panels.');
    toggle(performance,'reduceEffects','Low power finish','Remove extra shadows and blur.');
    toggle(performance,'pauseDecorations','Quiet decorations','Hide decorative profile effects.');
    const restless=card('restless','Restless','Six live worlds. Twenty-five ways to make them yours.');
    restless.classList.add('sc-restless-hero');
    const art=el('div','sc-restless-art');art.setAttribute('aria-hidden','true');
    art.innerHTML=stillWallpaper('eclipse',0)+stillWallpaper('eclipse',1);restless.prepend(art,el('span','sc-eyebrow','THE EXPANDED COLLECTION'));
    toggle(restless,'restless','Enable Restless','Coordinated motion throughout Discord. Switch off to return to your usual finish.');
    const presets=el('div','sc-presets');presets.setAttribute('aria-label','Restless presets');
    const count=el('p','sc-effect-count');
    const refreshRestless=()=>{
        root.style.setProperty('--sr-tint',plugin.settings.restlessTint);root.style.setProperty('--sr-secondary',plugin.settings.restlessSecondary);
        count.textContent=`${STILL_RESTLESS_FEATURES.filter(([key])=>plugin.settings[key]).length} / 25 effects enabled`;
        for(const control of panels.get('restless').querySelectorAll('[id]')) {
            const key=control.id.slice(id.length+1);if(!Object.hasOwn(plugin.settings,key))continue;
            if(control.type==='checkbox')control.checked=plugin.settings[key];else if('value' in control){control.value=plugin.settings[key];if(control.type==='range')control.setAttribute('aria-valuetext',`${control.value}%`);}
        }
        for(const button of presets.children){const next=stillRestlessPreset(plugin.settings,button.dataset.preset);button.setAttribute('aria-pressed',String(plugin.settings.restless&&next.restlessQuality===plugin.settings.restlessQuality&&next.restlessEnergy===plugin.settings.restlessEnergy&&next.restlessTempo===plugin.settings.restlessTempo&&STILL_RESTLESS_FEATURES.every(([key])=>next[key]===plugin.settings[key])));}
    };
    for(const [value,title,note] of [['subtle','Subtle','Low power'],['expressive','Expressive','Light & depth'],['allout','All out','The full collection']]){
        const button=el('button','sc-preset');button.type='button';button.dataset.preset=value;button.append(el('strong','',title),el('span','',note));
        button.addEventListener('click',()=>{plugin.setRestlessPreset(value);refreshRestless();});presets.append(button);
    }
    restless.append(presets,count);
    const canvas=card('restless','Live canvas','Original moving artwork. Quiet by default, yours to customize.');
    toggle(canvas,'restlessLive','Scene background','Original artwork behind your conversations.');
    select(canvas,'restlessQuality','Rendering','Efficient keeps every detail with shared motion. Still artwork uses no background animation.',[['efficient','Efficient (recommended)'],['layered','Full depth'],['still','Still artwork']]);
    const scenes=el('fieldset','sc-scenes'),legend=el('legend','sc-setting-name','Scene');scenes.append(legend);
    for(const [value,title,note] of STILL_SCENES){
        const label=el('label','sc-scene'),input=el('input');input.type='radio';input.name=`${id}-scene`;input.value=value;input.checked=plugin.settings.restlessScene===value;
        input.setAttribute('aria-label',title);input.addEventListener('change',()=>{if(input.checked)plugin.update('restlessScene',value);});
        const swatch=el('span','sc-scene-art');swatch.setAttribute('aria-hidden','true');swatch.innerHTML=[0,1,2].map(layer=>stillWallpaper(value,layer)).join('');
        label.append(input,swatch,el('span','sc-scene-title',title),el('span','sc-setting-note',note));scenes.append(label);
    }
    canvas.append(scenes);
    const tint=el('input','sc-color');tint.type='color';tint.value=plugin.settings.restlessTint;tint.addEventListener('change',()=>plugin.update('restlessTint',tint.value));row(canvas,'restlessTint','Light color','Silver, or a color of your own.',tint);
    const secondary=el('input','sc-color');secondary.type='color';secondary.value=plugin.settings.restlessSecondary;secondary.addEventListener('change',()=>plugin.update('restlessSecondary',secondary.value));row(canvas,'restlessSecondary','Reflection color','A second tone inside the glass and artwork.',secondary);
    const strength=el('input','sc-range');strength.type='range';strength.min='15';strength.max='85';strength.step='1';strength.value=plugin.settings.restlessStrength;
    strength.setAttribute('aria-valuetext',`${strength.value}%`);strength.addEventListener('input',()=>strength.setAttribute('aria-valuetext',`${strength.value}%`));strength.addEventListener('change',()=>plugin.update('restlessStrength',Number(strength.value)));
    row(canvas,'restlessStrength','Light intensity','Keep it subtle, or bring the artwork forward.',strength);
    const energy=el('input','sc-range');energy.type='range';energy.min='20';energy.max='100';energy.step='1';energy.value=plugin.settings.restlessEnergy;
    energy.setAttribute('aria-valuetext',`${energy.value}%`);energy.addEventListener('input',()=>energy.setAttribute('aria-valuetext',`${energy.value}%`));energy.addEventListener('change',()=>plugin.update('restlessEnergy',Number(energy.value)));
    row(canvas,'restlessEnergy','Extra light intensity','Constellations, reflections, and pointer lights.',energy);
    select(canvas,'restlessTempo','Pace','Background drift and panel arrivals.',[['calm','Calm'],['balanced','Balanced'],['vivid','Lively']]);
    toggle(canvas,'restlessRespectMotion','Follow system reduced motion','Keep Restless still when your device requests less animation. Turn off to control motion here.');
    const effects=card('restless','The collection','25 details, individually yours. Open a group to fine-tune it.');
    for(const [title,keys] of STILL_RESTLESS_GROUPS){
        const group=el('details','sc-effect-group'),summary=el('summary');summary.append(el('span','',title),el('span','sc-group-count',`${keys.length} effects`));group.append(summary);
        for(const key of keys){const index=STILL_RESTLESS_FEATURES.findIndex(([name])=>name==='restless'+key);const control=toggle(group,...STILL_RESTLESS_FEATURES[index]);control.parentElement.dataset.effect=String(index+1).padStart(2,'0');}
        effects.append(group);
    }
    effects.classList.add('sc-restless-features');
    panels.get('restless').addEventListener('change',refreshRestless);refreshRestless();
    panels.get('restless').append(el('p','sc-privacy','Restless pauses when Discord is hidden, unfocused, or a video is full screen. Subtle keeps the artwork still and adds light interaction feedback. System reduced motion is followed by default.'));
    const footer=el('footer','sc-settings-footer');footer.append(el('span','','Changes save automatically.'));
    const reset=el('button','sc-text-button','Reset preferences');reset.type='button';let armed=false;
    reset.addEventListener('click',()=>{if(!armed){armed=true;reset.textContent='Confirm reset';return;}plugin.settings={...DEFAULTS};plugin.api.Data.save('settings',plugin.settings);plugin.apply();root.replaceWith(stillSettingsPanel(plugin));});footer.append(reset);root.append(footer);
    activate('appearance');return root;
}

let stillSettingsId = 0;
function stillSettingsPanel(plugin) {
    const id = `stillcord-settings-${++stillSettingsId}`;
    const el = (tag, cls, text) => {const node=document.createElement(tag); if(cls)node.className=cls; if(text!==undefined)node.textContent=text; return node;};
    const root=el('section','stillcord-settings'); root.setAttribute('aria-label','StillCord settings');
    const header=el('header','sc-settings-header'), mark=el('span','sc-mark','S'); mark.setAttribute('aria-hidden','true');
    const brand=el('div');brand.append(el('div','sc-eyebrow','YOUR DISCORD, QUIETLY REFINED'),el('h2','','StillCord'));
    header.append(mark,brand,el('span','sc-version','3.0'));root.append(header);
    root.append(el('p','sc-settings-intro','A little less noise. A little more you.'));
    const tabs=el('div','sc-tabs');tabs.setAttribute('role','tablist');tabs.setAttribute('aria-label','Settings category');root.append(tabs);
    const panels=new Map(),buttons=[];
    const activate=(key,focus=false)=>{for(const [name,panel] of panels){const active=name===key;panel.hidden=!active;const button=buttons.find(b=>b.dataset.page===name);button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;if(active&&focus)button.focus();}};
    for(const [key,title] of [['appearance','Appearance'],['layout','Layout'],['widgets','Widgets & location'],['motion','Motion']]){
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
    const footer=el('footer','sc-settings-footer');footer.append(el('span','','Changes save automatically.'));
    const reset=el('button','sc-text-button','Reset preferences');reset.type='button';let armed=false;
    reset.addEventListener('click',()=>{if(!armed){armed=true;reset.textContent='Confirm reset';return;}plugin.settings={...DEFAULTS};plugin.api.Data.save('settings',plugin.settings);plugin.apply();root.replaceWith(stillSettingsPanel(plugin));});footer.append(reset);root.append(footer);
    activate('appearance');return root;
}

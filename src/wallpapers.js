const STILL_SCENES = Object.freeze([
    ["silk", "Silk", "Liquid chrome folds"], ["orbit", "Orbit", "Sculpted orbital light"],
    ["aurora", "Aurora", "Luminous flowing ribbons"], ["eclipse", "Eclipse", "An obsidian sun"],
    ["prism", "Prism", "Suspended optical glass"], ["contour", "Contour", "Waves of silver terrain"]
]);
let stillArtworkId = 0;

// Original vector scenes, painted once per selection. CSS moves three layers;
// geometry, gradients and light falloff never need a per-frame JS render pass.
function stillWallpaper(scene, layer = 0) {
    if (!STILL_SCENES.some(([key]) => key === scene)) scene = "silk";
    const id = `sr-art-${++stillArtworkId}`;
    const paint = name => `url(#${id}-${name})`;
    const defs = `<defs>
      <linearGradient id="${id}-metal" x1="0" y1="0" x2=".8" y2="1"><stop stop-color="currentColor" stop-opacity=".02"/><stop offset=".34" stop-color="currentColor" stop-opacity=".12"/><stop offset=".46" stop-color="currentColor" stop-opacity=".8"/><stop offset=".49" stop-color="#fff" stop-opacity=".85"/><stop offset=".51" stop-color="currentColor" stop-opacity=".12"/><stop offset=".72" stop-color="var(--sr-secondary,#89939f)" stop-opacity=".04"/><stop offset="1" stop-color="currentColor" stop-opacity=".35"/></linearGradient>
      <linearGradient id="${id}-rim"><stop stop-color="currentColor" stop-opacity="0"/><stop offset=".36" stop-color="currentColor" stop-opacity=".2"/><stop offset=".58" stop-color="#fff" stop-opacity=".9"/><stop offset=".8" stop-color="currentColor" stop-opacity=".3"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient>
      <linearGradient id="${id}-veil" x1="0" y1="0" x2="1" y2="1"><stop stop-color="currentColor" stop-opacity=".34"/><stop offset=".4" stop-color="var(--sr-secondary,#89939f)" stop-opacity=".1"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient>
      <radialGradient id="${id}-halo"><stop stop-color="currentColor" stop-opacity=".35"/><stop offset=".42" stop-color="var(--sr-secondary,#89939f)" stop-opacity=".14"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></radialGradient>
      <radialGradient id="${id}-sphere" cx=".72" cy=".2" r=".9"><stop stop-color="currentColor" stop-opacity=".3"/><stop offset=".16" stop-color="#1c2027"/><stop offset=".55" stop-color="#030405"/><stop offset="1" stop-color="#000"/></radialGradient>
      <radialGradient id="${id}-corona"><stop offset=".6" stop-color="currentColor" stop-opacity="0"/><stop offset=".68" stop-color="currentColor" stop-opacity=".08"/><stop offset=".73" stop-color="currentColor" stop-opacity=".7"/><stop offset=".75" stop-color="#fff" stop-opacity=".9"/><stop offset=".77" stop-color="currentColor" stop-opacity=".45"/><stop offset=".83" stop-color="currentColor" stop-opacity=".07"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></radialGradient>
    </defs>`;
    let art = "";
    if (scene === "silk") {
        const shapes = [
            ['M-250 950C150 50 650 1220 1120 410S1550-240 1850 240L1840 480C1430-40 1430 650 1060 880S300 200-250 1220Z', 'M-250 950C150 50 650 1220 1120 410S1550-240 1850 240'],
            ['M-150 260C400-180 620 600 1200 200S1800 100 1800-100L1800 210C1330 760 710 250 300 300S40 430-150 550Z', 'M-150 260C400-180 620 600 1200 200S1800 100 1800-100']
        ];
        if (layer < 2) {
            const [d,edge] = shapes[layer];
            art = `<path d="${d}" fill="${paint('metal')}"/><path d="${edge}" fill="none" stroke="${paint('rim')}" stroke-width="1.6"/>`;
            for (let i=1;i<7;i++) art += `<path d="${edge}" transform="translate(0 ${i*5})" fill="none" stroke="currentColor" stroke-opacity="${.065-i*.007}" stroke-width=".7"/>`;
        } else art = `<ellipse cx="1230" cy="130" rx="640" ry="390" fill="${paint('halo')}"/><path d="M-100 1130Q800 580 1750 1050" fill="none" stroke="${paint('rim')}" stroke-width="2"/>`;
    } else if (scene === "orbit") {
        if (layer === 0) art = `<ellipse cx="1030" cy="470" rx="650" ry="440" fill="${paint('halo')}"/><g transform="rotate(-28 990 480)" fill="none" stroke="${paint('rim')}"><ellipse cx="990" cy="480" rx="680" ry="220" stroke-width="1.4"/><ellipse cx="990" cy="480" rx="580" ry="185" stroke-width="14" opacity=".13"/><ellipse cx="990" cy="480" rx="770" ry="290" opacity=".25"/></g>`;
        if (layer === 1) art = `<circle cx="990" cy="480" r="224" fill="${paint('sphere')}" stroke="${paint('rim')}" stroke-width="2"/><path d="M845 310A224 224 0 0 1 1209 447" fill="none" stroke="${paint('rim')}" stroke-width="4" opacity=".45"/>`;
        if (layer === 2) art = `<g transform="rotate(-28 990 480)" fill="none" stroke="${paint('rim')}"><path d="M310 480A680 220 0 0 0 1670 480" stroke-width="2.3"/><path d="M410 480A580 185 0 0 0 1570 480" stroke-width="18" opacity=".13"/><path d="M410 480A580 185 0 0 0 1570 480" stroke-width=".8"/><circle cx="1530" cy="610" r="4" fill="currentColor"/></g>`;
    } else if (scene === "aurora") {
        const paths = ['M-180 850C210-170 490 850 850 200S1450 950 1780 120','M-100 1100C290 160 720 1300 1020 580S1430-250 1810 160','M-200 40C410 720 590-100 1120 250S1300 850 1790 600'];
        const d=paths[layer];
        for(let i=0;i<9;i++) art+=`<path d="${d}" fill="none" stroke="${paint(i>5?'rim':'veil')}" stroke-width="${190-i*22}" stroke-opacity="${.025+i*.012}"/>`;
        art+=`<path d="${d}" fill="none" stroke="${paint('rim')}" stroke-width="1.1" opacity=".7"/>`;
    } else if (scene === "eclipse") {
        if(layer===0) art=`<ellipse cx="990" cy="470" rx="680" ry="550" fill="${paint('halo')}" opacity=".8"/><circle cx="990" cy="470" r="400" fill="${paint('corona')}"/>`;
        if(layer===1) art=`<circle cx="990" cy="470" r="296" fill="#010203"/><path d="M743 306A296 296 0 0 1 1267 366" fill="none" stroke="${paint('rim')}" stroke-width="2.1"/><ellipse cx="990" cy="470" rx="297" ry="296" fill="none" stroke="currentColor" stroke-opacity=".18"/>`;
        if(layer===2) art=`<g transform="rotate(-16 990 470)"><path d="M-100 610C600 500 650 430 990 478S1380 580 1770 320" fill="none" stroke="${paint('rim')}" stroke-width="1.4"/><path d="M-100 614C600 504 650 434 990 482S1380 584 1770 324" fill="none" stroke="${paint('veil')}" stroke-width="28" opacity=".25"/><ellipse cx="1250" cy="440" rx="300" ry="30" fill="${paint('halo')}"/></g>`;
    } else if (scene === "prism") {
        if(layer===0) art=`<ellipse cx="1080" cy="540" rx="650" ry="460" fill="${paint('halo')}" opacity=".6"/><path d="M790 40L1450 340 1080 970 420 660Z" fill="${paint('veil')}" stroke="${paint('rim')}"/>`;
        if(layer===1) art=`<g stroke="${paint('rim')}" stroke-width="1.2"><path d="M790 40L1080 970 420 660Z" fill="${paint('metal')}" opacity=".7"/><path d="M790 40L1450 340 1080 970Z" fill="${paint('veil')}"/><path d="M420 660L1450 340" fill="none" opacity=".4"/></g>`;
        if(layer===2) art=`<g stroke="${paint('rim')}" fill="${paint('veil')}" opacity=".8"><path d="M110 350L340 170 450 500 220 680Z"/><path d="M1320 710L1620 530 1740 880 1440 1060Z"/></g><path d="M790 40L1080 970" fill="none" stroke="${paint('rim')}" stroke-width="2"/>`;
    } else if (scene === "contour") {
        if(layer===2) art=`<ellipse cx="1000" cy="700" rx="800" ry="480" fill="${paint('halo')}" opacity=".5"/>`;
        else for(let i=0;i<22;i++) {
            const y=layer===0?460+i*18:-150+i*18, a=layer===0?-340:320;
            art+=`<path d="M-200 ${y}C300 ${y+a} 470 ${y+400} 980 ${y+80}S1550 ${y-310} 1830 ${y+30}" fill="none" stroke="${paint('rim')}" stroke-width="${i%7===0?1.9:.85}" stroke-opacity="${i%7===0?.8:.35}"/>`;
        }
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${defs}${art}</svg>`;
}

function stillAtmosphere() {
    let stars="";
    for(let i=0;i<64;i++) {
        const x=(i*317+71)%1600,y=(i*i*29+53)%1000,r=i%13===0?1.8:.65;
        stars+=`<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor" opacity="${.2+(i%5)*.13}"/>`;
        if(i%13===0) stars+=`<path d="M${x-5} ${y}h10M${x} ${y-5}v10" stroke="currentColor" stroke-width=".5" opacity=".32"/>`;
    }
    stars+='<path d="M71 53L388 82 705 169 1022 314M217 733L534 530 851 385" fill="none" stroke="currentColor" stroke-width=".6" opacity=".14"/>';
    return `<div class="sr-star-sheet"><svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">${stars}</svg></div><div class="sr-caustic-sheet">${stillWallpaper('contour',0)}</div><div class="sr-meteor sr-meteor-a"></div><div class="sr-meteor sr-meteor-b"></div><div class="sr-grain-sheet"></div><div class="sr-vignette-sheet"></div>`;
}

/* Event-map exploration. Keyword/region groupings never alter archived event records. */
(()=>{
  'use strict';
  const data=window.EVENT_MAP_DATA,timeline=document.getElementById('timeline'),sidebar=document.getElementById('yearnav');
  if(!data||!timeline||!sidebar)return;
  const escape=value=>String(value||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const clean=value=>String(value||'').replace(/—/g,'–'),cities=data.cities;
  // Client confirmations, 1 November 2026. These affect map assignments only.
  const confirmedBhubaneswar=new Set(['e3','e11','e15','e17','e18','e21','e30','e34','e45','e54','e65','e66','e67','e69','e70','e71','e72','e74','e75','e81','e83','e86','e92','e98','e99','e104','e106','e107','e113','e116','e122','e125','e128','e129','e130','e131','e132','e141','e143','e149','e150','e151','e153','e154','e156','e157','e159','e162']);
  const confirmedMedia=new Set(['e20','e27','e62','e73','e148']);
  const aliases={Rourkela:/\b(?:Rourkela|Raurkela)\b/i,Visakhapatnam:/\b(?:Visakhapatnam|Vishakhapatnam)\b/i,'New Delhi':/\b(?:New )?Delhi\b/i,Khordha:/\b(?:Khordha|Khurda|Kalibeti|Deras|Info\s*Valley)\b/i,Paradip:/\b(?:Paradip|Paradeep|Paradwip)\b/i,Sambalpur:/\b(?:Sambalpur|Sabalpur)\b/i,Keonjhar:/\b(?:Keonjhar|Kendujhar|Keonjhargarh)\b/i,Berhampur:/\b(?:Berhampur|Brahmapur)\b/i,UAE:/\b(?:UAE|U\.?A\.?E\.?|United Arab Emirates|Abu Dhabi|Dubai)\b/i,Singapore:/\bSingapore\b/i};
  const matchers=cities.filter(city=>!city.region).map(city=>({city,regex:aliases[city.name]||new RegExp('\\b'+city.name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b','i')}));
  function classify(event){
    const venue=event.location||'',title=event.title||'',description=event.description||'';
    if(confirmedMedia.has(event.id))return {kind:'unplaced',cities:[],match:'confirmed-media'};
    if(confirmedBhubaneswar.has(event.id)||/\bSLSWCA\b|\bHLCA\b|State\s+Level\s+Single\s+Window\s+Clearance|High[\s–—-]*Level\s+Clearance\s+Authority/i.test(title))return {kind:'india',cities:['Bhubaneswar'],match:'confirmed'};
    if(event.id==='e97')return {kind:'india',cities:['Berhampur'],match:'confirmed'};
    if(/\b(?:interview|magazine|newspaper|article|BusinessLine|Business Standard|Indian Chemical News|media feature)\b/i.test(venue+' '+title+' '+description.slice(0,700)))return {kind:'unplaced',cities:[],match:'editorial'};
    const matches=text=>matchers.filter(({regex})=>regex.test(text)).map(({city})=>city);
    let matched=matches(venue),match='venue';
    // Named venues take precedence over foreign visitors' origins or project names in a title.
    if(!matched.length){
      matched=matches(title);match='keyword';
      // An Odisha-based meeting about Singapore / UAE is not an overseas visit.
      if(/Odisha|Orissa|IPICOL/i.test(venue))matched=matched.filter(city=>city.kind==='india');
      if(/delegation|knowledge.exchange/i.test(title)&&/Odisha|Orissa|IPICOL/i.test(venue))matched=[];
    }
    if(matched.length){
      const kind=matched.some(city=>city.kind==='india')?'india':'international';
      let names=matched.filter(city=>city.kind===kind).map(city=>city.name);
      if(names.includes('Bhubaneswar'))names=names.filter(name=>name!=='Khordha');
      return {kind,cities:[...new Set(names)],match};
    }
    if(/Odisha|Orissa|IPICOL|SLSWCA|HLCA|Single Window|Clearance Authority|\bACS\b|Hemant Sharma/i.test(venue+' '+title+' '+description))return {kind:'india',cities:['Odisha-wide'],match:'region'};
    return {kind:'unplaced',cities:[],match:'other'};
  }
  const desktop=document.createElement('button');desktop.type='button';desktop.className='explore-event-map';desktop.innerHTML='<span>Explore on the Map ↗</span>';desktop.setAttribute('aria-haspopup','dialog');
  function mount(){if(!sidebar.contains(desktop))sidebar.append(desktop);}
  new MutationObserver(mount).observe(sidebar,{childList:true});mount();
  const mobile=document.createElement('button');mobile.type='button';mobile.className='mobile-event-map';mobile.textContent='Map ↗';mobile.setAttribute('aria-label','Explore events on the map');mobile.setAttribute('aria-haspopup','dialog');document.querySelector('.mobile-timeline-nav')?.append(mobile);
  const dialog=document.createElement('dialog');dialog.className='event-map-window';dialog.setAttribute('aria-labelledby','event-map-heading');
  dialog.innerHTML='<header class="event-map-header"><div><h2 id="event-map-heading">Explore on the map</h2><p id="event-map-context"></p></div><button type="button" class="event-map-close" aria-label="Close map and return to timeline">Close ×</button></header><div class="event-map-tabs" role="group" aria-label="Event location groups"></div><div class="event-map-body"><div class="event-map-canvas"><svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 620 600" role="group" aria-label="Event locations"><g class="event-map-geography"></g><g class="event-map-pins"></g></svg><div class="event-map-controls" role="group" aria-label="Map zoom controls"><button type="button" data-map-zoom="in" aria-label="Zoom in">+</button><button type="button" data-map-zoom="out" aria-label="Zoom out">−</button><button type="button" data-map-zoom="reset">Reset</button><button type="button" data-map-zoom="odisha">Odisha</button><output class="event-map-scale" aria-live="polite">1×</output></div><div class="event-map-key">Scroll or pinch to zoom · Drag to move</div></div><section class="event-map-results" aria-label="Events by location"></section></div><footer class="event-map-footer"><span class="event-map-method-note">Event locations · City and regional groupings, not exact venues. ◇ Odisha-wide = regional fallback; multi-city events may appear under several places.<br></span>India boundary: © Survey of India, Government of India · <a href="https://surveyofindia.gov.in/pages/outline-maps-of-india" target="_blank" rel="noopener noreferrer">Official source ↗</a> · Asia land context: Natural Earth.</footer>';
  document.body.append(dialog);
  const tabs=dialog.querySelector('.event-map-tabs'),canvas=dialog.querySelector('.event-map-canvas'),results=dialog.querySelector('.event-map-results');
  const svg=canvas.querySelector('svg'),geography=canvas.querySelector('.event-map-geography'),pins=canvas.querySelector('.event-map-pins'),controls=canvas.querySelector('.event-map-controls');
  let selected='',mode='india',records=[],opener=null,savedScroll=0,priorOverflow='',zoom=1,center=[310,300],dragged=false,dragStart=null,pinchStart=null;
  const pointers=new Map();
  const visibleEvents=()=>{
    const ids=new Set(Array.from(timeline.querySelectorAll('.ecard')).map(card=>card.getAttribute('onclick')?.match(/showEvent\('([^']+)'\)/)?.[1]).filter(Boolean));
    return events.filter(event=>ids.has(event.id)).sort((a,b)=>String(b.date).localeCompare(String(a.date))).map(event=>({event,...classify(event)}));
  };
  const counts=()=>Object.fromEntries(['india','international','unplaced'].map(kind=>[kind,records.filter(row=>row.kind===kind).length]));
  function renderTabs(){const n=counts();tabs.innerHTML=[['india','India'],['international','Asia · Overseas'],['unplaced','Media & Features']].map(([key,label])=>'<button type="button" data-map-mode="'+key+'" aria-pressed="'+(mode===key)+'">'+label+' · '+n[key]+'</button>').join('');}
  function cityCounts(){return cities.filter(city=>city.kind===mode).map(city=>({...city,count:records.filter(row=>row.kind===mode&&row.cities.includes(city.name)).length})).filter(city=>city.count).sort((a,b)=>a.region?-1:b.region?1:a.name.localeCompare(b.name));}
  function renderPins(){
    const box=svg.getBoundingClientRect(),displayScale=Math.min(box.width/620,box.height/600)||1;
    pins.innerHTML=cityCounts().map(city=>{
      const [x,y]=city.point,showLabel=city.name===selected||zoom>=4||mode==='international'||!city.odisha;
      const left=['Mumbai','Ahmedabad','Vadodara','Khordha','Sambalpur'].includes(city.name),dy=city.name==='Cuttack'?-13:city.name==='Bhubaneswar'?22:city.name==='Khordha'?20:-10;
      return '<g class="event-map-pin '+(city.region?'regional-pin':'')+'" transform="translate('+x+' '+y+') scale('+(1/zoom/displayScale)+')" role="button" tabindex="0" data-map-city="'+escape(city.name)+'" aria-label="'+escape(city.name)+', '+city.count+' events'+(city.region?', regional grouping':'')+'" aria-pressed="'+(selected===city.name)+'"><title>'+escape(city.name)+' · '+city.count+' events</title><circle class="map-pin-halo" r="20"/>'+(city.region?'<path class="map-pin-dot" d="M0,-8L8,0L0,8L-8,0Z"/>':'<circle class="map-pin-dot" r="6"/>')+(showLabel?'<text x="'+(left?-13:13)+'" y="'+dy+'" text-anchor="'+(left?'end':'start')+'">'+escape(city.name)+'</text>':'')+'</g>';
    }).join('');
  }
  function updateView(){
    svg.setAttribute('data-map-zoomed',String(zoom>=4));
    const w=620/zoom,h=600/zoom;center=[Math.max(w/2,Math.min(620-w/2,center[0])),Math.max(h/2,Math.min(600-h/2,center[1]))];
    svg.setAttribute('viewBox',[center[0]-w/2,center[1]-h/2,w,h].join(' '));canvas.querySelector('.event-map-scale').textContent=Number(zoom.toFixed(1))+'×';
    controls.querySelector('[data-map-zoom="in"]').disabled=zoom>=20;controls.querySelector('[data-map-zoom="out"]').disabled=zoom<=1;renderPins();
  }
  function resetView(){zoom=1;center=[310,300];updateView();}
  function renderMap(){
    svg.setAttribute('data-map-region',mode);canvas.hidden=mode==='unplaced';dialog.classList.toggle('media-map-view',mode==='unplaced');controls.querySelector('[data-map-zoom="odisha"]').hidden=mode!=='india';if(mode==='unplaced')return;
    geography.innerHTML=(mode==='international'?data.asiaPaths:data.paths).map(country=>'<path class="map-country '+(country.source==='Survey of India'?'government-india':country.contextOnly?'asia-land-context':'neighbour')+'" data-boundary-source="'+(country.source==='Survey of India'?'Survey of India':'Land context')+'" fill-rule="evenodd" vector-effect="non-scaling-stroke" d="'+country.d+'"/>').join('');
    svg.setAttribute('aria-label',mode==='international'?'Zoomable Asia map with UAE and Singapore event groups':'Zoomable India map with event location groups');updateView();
  }
  function renderResults(){
    const active=cityCounts();if(mode!=='unplaced'&&!active.some(city=>city.name===selected))selected=active[0]?.name||'';
    const rows=records.filter(row=>row.kind===mode&&(mode==='unplaced'||row.cities.includes(selected)));
    const title=mode==='unplaced'?'Media & Features':selected||(mode==='international'?'No overseas events':'No mapped events');
    const note=mode==='unplaced'?'Magazine and newspaper articles, interviews, and other coverage without a location grouping.':selected==='Odisha-wide'?'Other Odisha-related entries without a confirmed city. This is a statewide grouping, not a confirmed event venue.':rows.length+' '+(rows.length===1?'event':'events')+' grouped by location. Select a pin or a place below. Zoom in to separate nearby pins.';
    results.innerHTML='<h3>'+escape(title)+'</h3><p class="map-results-note">'+escape(note)+'</p>'+(mode!=='unplaced'?'<div class="event-map-city-list" role="group" aria-label="Choose an event location">'+active.map(city=>'<button type="button" data-map-city="'+escape(city.name)+'" aria-pressed="'+(selected===city.name)+'">'+(city.region?'◇ ':'')+escape(city.name)+' · '+city.count+'</button>').join('')+'</div>':'')+'<div class="event-map-event-list">'+rows.map(({event,match})=>'<button type="button" class="event-map-event" data-map-event="'+escape(event.id)+'"><time>'+escape(new Date(event.date+'T12:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'}))+'</time><strong>'+escape(clean(event.title))+'</strong><span>'+escape(match==='region'?'Odisha-wide · regional grouping':clean(event.location)||'Grouped by event location keywords')+' · Explore event ↗</span></button>').join('')+(rows.length?'':'<p class="map-results-note">No events here with the current timeline filters. Close the map and try another year or clear the filters.</p>')+'</div>';results.scrollTop=0;
    const strip=results.querySelector('.event-map-city-list'),chosen=strip?.querySelector('[aria-pressed="true"]');
    if(strip?.clientWidth&&Number.isFinite(chosen?.offsetLeft))strip.scrollLeft=Math.max(0,chosen.offsetLeft-strip.offsetLeft-(strip.clientWidth-chosen.offsetWidth)/2);
  }
  function paint(){renderTabs();renderResults();renderMap();}
  function openMap(event){
    opener=event.currentTarget;savedScroll=window.scrollY;records=visibleEvents();mode='india';selected='Bhubaneswar';zoom=1;center=[310,300];
    const year=document.getElementById('year').value||'All years',category=document.getElementById('category'),search=document.getElementById('search').value.trim();
    dialog.querySelector('#event-map-context').textContent=[year,category.value?category.selectedOptions[0].textContent:'All categories',search?'Search: '+search:'',records.length+' events in the current timeline'].filter(Boolean).join(' · ');
    priorOverflow=document.body.style.overflow;document.body.style.overflow='hidden';dialog.showModal();paint();dialog.querySelector('.event-map-body').scrollTop=0;dialog.querySelector('.event-map-close').focus({preventScroll:true});
  }
  function selectCity(name,focusMap=false){
    selected=name;renderResults();const city=cities.find(item=>item.name===selected&&item.kind===mode);const keepOverview=window.matchMedia?.('(max-width:760px)')?.matches&&zoom===1;if(city&&!keepOverview){center=[...city.point];if(city.odisha)zoom=Math.max(zoom,8);updateView();}else renderPins();
    (focusMap?canvas:results).querySelector('[data-map-city="'+selected+'"]')?.focus({preventScroll:true});
  }
  desktop.addEventListener('click',openMap);mobile.addEventListener('click',openMap);dialog.querySelector('.event-map-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{
    if(dragged&&event.target.closest('svg'))return;
    if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();return;}
    const group=event.target.closest('[data-map-mode]');if(group){mode=group.dataset.mapMode;selected='';zoom=1;center=[310,300];paint();dialog.querySelector('.event-map-body').scrollTop=0;tabs.querySelector('[data-map-mode="'+mode+'"]')?.focus({preventScroll:true});return;}
    const city=event.target.closest('[data-map-city]');if(city){selectCity(city.dataset.mapCity,!!city.closest('svg'));return;}
    const control=event.target.closest('[data-map-zoom]');if(control){
      const action=control.dataset.mapZoom;if(action==='reset')resetView();else if(action==='odisha'){zoom=8;center=[...cities.find(item=>item.region).point];updateView();}else{zoom=Math.max(1,Math.min(20,zoom*(action==='in'?1.6:1/1.6)));updateView();}return;
    }
    const item=event.target.closest('[data-map-event]');if(item){const id=item.dataset.mapEvent;dialog.close();showEvent(id);}
  });
  function pointAt(clientX,clientY){const r=svg.getBoundingClientRect(),scale=Math.min(r.width/620,r.height/600),px=(clientX-r.left-(r.width-620*scale)/2)/scale,py=(clientY-r.top-(r.height-600*scale)/2)/scale;return [center[0]+(px-310)/zoom,center[1]+(py-300)/zoom];}
  function zoomAt(factor,x,y){const before=pointAt(x,y);zoom=Math.max(1,Math.min(20,zoom*factor));const after=pointAt(x,y);center=[center[0]+before[0]-after[0],center[1]+before[1]-after[1]];updateView();}
  svg.addEventListener('wheel',event=>{event.preventDefault();zoomAt(Math.exp(-event.deltaY*.002),event.clientX,event.clientY);},{passive:false});
  svg.addEventListener('dblclick',event=>{if(!event.target.closest('[data-map-city]')){event.preventDefault();zoomAt(2,event.clientX,event.clientY);}});
  svg.addEventListener('pointerdown',event=>{
    if(event.button!==undefined&&event.button!==0)return;dragged=false;pointers.set(event.pointerId,{x:event.clientX,y:event.clientY});dragStart={x:event.clientX,y:event.clientY,center:[...center]};pinchStart=null;
    if(!event.target.closest('[data-map-city]'))svg.setPointerCapture(event.pointerId);
    if(pointers.size===2){const [a,b]=[...pointers.values()];pinchStart={distance:Math.hypot(a.x-b.x,a.y-b.y),zoom};dragged=true;for(const id of pointers.keys())svg.setPointerCapture(id);}
  });
  svg.addEventListener('pointermove',event=>{
    if(!pointers.has(event.pointerId))return;pointers.set(event.pointerId,{x:event.clientX,y:event.clientY});
    if(pointers.size===2&&pinchStart){const [a,b]=[...pointers.values()],next=Math.max(1,Math.min(20,pinchStart.zoom*Math.hypot(a.x-b.x,a.y-b.y)/Math.max(1,pinchStart.distance)));zoomAt(next/zoom,(a.x+b.x)/2,(a.y+b.y)/2);return;}
    if(!dragStart||pointers.size!==1)return;const dx=event.clientX-dragStart.x,dy=event.clientY-dragStart.y;if(Math.hypot(dx,dy)<5&&!dragged)return;dragged=true;svg.setPointerCapture(event.pointerId);
    const r=svg.getBoundingClientRect(),scale=Math.min(r.width/620,r.height/600);center=[dragStart.center[0]-dx/scale/zoom,dragStart.center[1]-dy/scale/zoom];updateView();
  });
  function endPointer(event){pointers.delete(event.pointerId);pinchStart=null;dragStart=null;if(!pointers.size&&dragged)window.setTimeout(()=>{dragged=false},0);}
  svg.addEventListener('pointerup',endPointer);svg.addEventListener('pointercancel',endPointer);
  svg.addEventListener('keydown',event=>{
    const city=event.target.closest('[data-map-city]');if(city&&['Enter',' '].includes(event.key)){event.preventDefault();selectCity(city.dataset.mapCity,true);return;}
    if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','=','-','0'].includes(event.key)){
      event.preventDefault();if(event.key==='0')resetView();else if(['+','=','-'].includes(event.key)){zoom=Math.max(1,Math.min(20,zoom*(event.key==='-'?1/1.6:1.6)));updateView();}else{const step=60/zoom;center=[center[0]+(event.key==='ArrowLeft'?-step:event.key==='ArrowRight'?step:0),center[1]+(event.key==='ArrowUp'?-step:event.key==='ArrowDown'?step:0)];updateView();}
      if(city)canvas.querySelector('[data-map-city="'+city.dataset.mapCity+'"]')?.focus({preventScroll:true});
    }
  });
  dialog.addEventListener('close',()=>{pointers.clear();dragStart=null;pinchStart=null;document.body.style.overflow=priorOverflow;window.scrollTo({top:savedScroll,behavior:'instant'});opener?.focus({preventScroll:true});});
  window.addEventListener('resize',()=>{if(dialog.open&&mode!=='unplaced')updateView();},{passive:true});
})();

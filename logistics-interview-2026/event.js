/* Official Invest Odisha summit and interview coverage; local media and versioned updates. */
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2087794408741863586";
 const supplied={
  "title": "Smart Logistics Summit & Awards 2026",
  "date": "2026-08-13",
  "endDate": "2026-08-13",
  "category": "Conferences & summits",
  "location": "Taj Vivanta, Bhubaneswar, Odisha",
  "description": "At the Smart Logistics Summit & Awards 2026, organised by Maritime Gateway in association with the Government of Odisha, Shri Hemant Sharma, Additional Chief Secretary for Industries, Home and I&PR, presented the state’s port-led industrial and logistics opportunities.\n\nThe session highlighted Odisha’s emerging maritime-industrial corridor and opportunities to improve multimodal connectivity, cargo movement and logistics infrastructure. The summit brought these themes into focus through presentations and industry discussion.",
  "highlights": [],
  "sections": [
    {
      "id": "summit",
      "title": "Port-led Industry & Multimodal Connectivity",
      "date": "2026-08-13",
      "location": "Taj Vivanta, Bhubaneswar",
      "description": "The official Invest Odisha post documents Shri Hemant Sharma’s address and a summit session. The photographs below show the presentation and gathering; no specific award recipient or award outcome is identified in the supplied post.",
      "photos": [
        {
          "key": "smartlog-01",
          "data": "logistics-interview-2026/summit-01.jpg",
          "caption": "Shri Hemant Sharma addressing the Smart Logistics Summit & Awards 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2087794408741863586"
        },
        {
          "key": "smartlog-02",
          "data": "logistics-interview-2026/summit-02.jpg",
          "caption": "Presentation on Odisha’s port-led industrial and logistics opportunity",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2087794408741863586"
        },
        {
          "key": "smartlog-03",
          "data": "logistics-interview-2026/summit-03.jpg",
          "caption": "Summit session at Taj Vivanta, Bhubaneswar · 13 August 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2087794408741863586"
        }
      ]
    }
  ],
  "coverPhoto": {
    "key": "smartlog-01",
    "data": "logistics-interview-2026/summit-01.jpg",
    "caption": "Shri Hemant Sharma addressing the Smart Logistics Summit & Awards 2026",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2087794408741863586"
  },
  "imageUrl": "logistics-interview-2026/summit-01.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2087794408741863586",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e8');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e8');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e8');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e8'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e8'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="smartlogView('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="smartlogCaption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="smartlogSetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="smartlogRemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Logistics summit</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e8')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}</section>
      <nav class="chem-index" aria-label="Logistics summit">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="smartlogEditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="smartlogUpload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="smartlogEditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e8'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="smartlogStep(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="smartlogStep(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.smartlogView=async key=>{viewing=await getPhotos('e8');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.smartlogStep=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')smartlogStep(1);if(ev.key==='ArrowLeft')smartlogStep(-1);});
  window.smartlogEditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Smart Logistics Summit & Awards 2026</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e8')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e8');};
    cls().scrollTop=0;
  };
  window.smartlogUpload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'smartlog-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e8',sectionId,data,caption:file.name});}await showEvent('e8');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e8')).find(p=>p.key===key);
  window.smartlogCaption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('smartlog-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e8');};
  window.smartlogSetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e8');};
  window.smartlogRemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e8');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2087439758788288551";
 const supplied={
  "title": "MD Interview — Odisha’s Chemical & Petrochemical Opportunities",
  "date": "2026-08-12",
  "endDate": "2026-08-12",
  "category": "Media & interviews",
  "location": "Indian Chemical News",
  "description": "In an exclusive interview with Indian Chemical News, Smt. Aboli Naravane, Managing Director, IPICOL, discussed investment opportunities in Odisha’s chemicals, petrochemicals, plastics, green hydrogen and coal-gasification sectors.\n\nInvest Odisha’s coverage highlighted the state’s three major ports, resource base, skilled workforce and expanding industrial ecosystem as foundations for next-generation industries.\n\nThis timeline entry is dated 12 August 2026, when Invest Odisha shared the interview. The linked Indian Chemical News article is dated 7 August 2026; the interview recording date is not confirmed.",
  "highlights": [],
  "sections": [
    {
      "id": "interview",
      "title": "Interview Coverage & Original Article",
      "date": "2026-08-12",
      "location": "Shared by Invest Odisha",
      "description": "The linked article discusses coal-gasification incentives and green-hydrogen ambitions alongside Odisha’s petrochemical and polymer ecosystem. The image below is the article’s interview preview, not a separately supplied event photograph.",
      "photos": [
        {
          "key": "icn-interview",
          "data": "logistics-interview-2026/interview.png",
          "caption": "Indian Chemical News interview preview featuring Smt. Aboli Naravane, MD, IPICOL · source: linked article",
          "sourceUrl": "https://www.indianchemicalnews.com/interviews/odisha-offers-30-subsidy-on-plant-and-machinery-for-coal-gasification-projects-aboli-naravane-md-industrial-promotion-investment-corporation-of-odisha-limited-ipicol-govt-of-odisha-594"
        }
      ]
    }
  ],
  "coverPhoto": {
    "key": "icn-interview",
    "data": "logistics-interview-2026/interview.png",
    "caption": "Indian Chemical News interview preview featuring Smt. Aboli Naravane, MD, IPICOL · source: linked article",
    "sourceUrl": "https://www.indianchemicalnews.com/interviews/odisha-offers-30-subsidy-on-plant-and-machinery-for-coal-gasification-projects-aboli-naravane-md-industrial-promotion-investment-corporation-of-odisha-limited-ipicol-govt-of-odisha-594"
  },
  "imageUrl": "logistics-interview-2026/interview.png",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2087439758788288551",
  "articleUrl": "https://www.indianchemicalnews.com/interviews/odisha-offers-30-subsidy-on-plant-and-machinery-for-coal-gasification-projects-aboli-naravane-md-industrial-promotion-investment-corporation-of-odisha-limited-ipicol-govt-of-odisha-594",
  "articlePublishedAt": "2026-08-07",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e9');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e9');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e9');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e9'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e9'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="icnView('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="icnCaption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="icnSetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="icnRemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Media interview</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e9')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a><a class="btn" href="${esc(e.articleUrl)}" target="_blank" rel="noopener">Read original interview ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}</section>
      <nav class="chem-index" aria-label="Media interview">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="icnEditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="icnUpload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="icnEditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e9'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="icnStep(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="icnStep(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.icnView=async key=>{viewing=await getPhotos('e9');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.icnStep=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')icnStep(1);if(ev.key==='ArrowLeft')icnStep(-1);});
  window.icnEditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">MD Interview — Odisha’s Chemical & Petrochemical Opportunities</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e9')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e9');};
    cls().scrollTop=0;
  };
  window.icnUpload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'icn-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e9',sectionId,data,caption:file.name});}await showEvent('e9');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e9')).find(p=>p.key===key);
  window.icnCaption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('icn-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e9');};
  window.icnSetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e9');};
  window.icnRemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e9');};
  render();
})();




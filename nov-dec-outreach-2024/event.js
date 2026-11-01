// Source-backed November–December 2024 offline update. All existing events retained.
(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1873591738360885482";
const supplied={
  "id": "e127",
  "title": "Energon Polymatic MSME Unit Inauguration — Paradip Plastic Park",
  "date": "2024-12-23",
  "endDate": "2024-12-23",
  "datePrecision": "day",
  "location": "Paradip Plastic Park, Odisha",
  "category": "Industrial programmes",
  "description": "Union Education Minister Shri Dharmendra Pradhan and Industries Minister Shri Sampad Chandra Swain inaugurated Energon Polymatic, an MSME unit at Paradip Plastic Park, in the presence of other dignitaries.\n\nDate correction: the supplied official post was published on 30 December but explicitly dates the inauguration to 23 December 2024. The timeline uses 23 December. No unreported investment, production-capacity or employment figures are added.",
  "sections": [
    {
      "id": "nd-energon",
      "title": "MSME Manufacturing Unit Inauguration",
      "date": "2024-12-23",
      "endDate": "2024-12-23",
      "location": "Paradip Plastic Park",
      "description": "The inauguration marked a manufacturing-unit milestone at Paradip Plastic Park. The event date follows the date stated within the official post, not its later publication date.",
      "photos": [
        {
          "key": "nd24-post-1-1.jpg",
          "data": "nov-dec-outreach-2024/post-1-1.jpg",
          "caption": "Energon Polymatic inauguration — 23 December; post published 30 December",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1873591738360885482",
          "mediaKind": "image"
        }
      ]
    }
  ],
  "highlights": [],
  "officialSources": [
    {
      "label": "Official Invest Odisha coverage — 1",
      "url": "https://x.com/InvestInOdisha/status/1873591738360885482"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1873591738360885482",
  "contentVersion": 1,
  "reportedOn": "2024-12-30",
  "coverPhoto": {
    "key": "nd24-post-1-1.jpg",
    "data": "nov-dec-outreach-2024/post-1-1.jpg",
    "caption": "Energon Polymatic inauguration — 23 December; post published 30 December",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1873591738360885482",
    "mediaKind": "image"
  },
  "imageUrl": "nov-dec-outreach-2024/post-1-1.jpg"
};
const eventRecord=events.find(e=>e.id==='e127');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e127');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e127');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e127'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e127'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="nd24e127View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="nd24e127Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="nd24e127SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="nd24e127RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e127')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="nd24e127EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="nd24e127Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="nd24e127EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e127'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="nd24e127Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="nd24e127Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.nd24e127View=async key=>{viewing=await getPhotos('e127');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.nd24e127Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')nd24e127Step(1);if(ev.key==='ArrowLeft')nd24e127Step(-1);});
  window.nd24e127EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e127')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e127');};
    cls().scrollTop=0;
  };
  window.nd24e127Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'nd24e127-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e127',sectionId,data,caption:file.name});}await showEvent('e127');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e127')).find(p=>p.key===key);
  window.nd24e127Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('nd24e127-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e127');};
  window.nd24e127SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e127');};
  window.nd24e127RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e127');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1870008473431277937";
const supplied={
  "id": "e128",
  "title": "Minimising Regulatory Compliance Burden — DPIIT Workshop",
  "date": "2024-12-20",
  "endDate": "2024-12-20",
  "datePrecision": "day",
  "location": "Odisha",
  "category": "Government meetings",
  "description": "A workshop on Minimising Regulatory Compliance Burden (MRCB), under DPIIT, was chaired by Shri Bhupendra Singh Poonia, Managing Director of IPICOL, and DPIIT senior official Shri Jitender Juyal.\n\nThe workshop explored simpler compliance, removal of outdated regulations and digitisation reforms, including a live demonstration of the RCB Portal. It is recorded as a workshop, not evidence that particular regulations had already been repealed.",
  "sections": [
    {
      "id": "nd-mrcb",
      "title": "Workshop & Institutional Participation",
      "date": "2024-12-20",
      "endDate": "2024-12-20",
      "location": "Odisha",
      "description": "Officials discussed reducing regulatory compliance burdens and improving ease of doing business.",
      "photos": [
        {
          "key": "nd24-post-2-1.jpg",
          "data": "nov-dec-outreach-2024/post-2-1.jpg",
          "caption": "MRCB workshop — official coverage",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1870008473431277937",
          "mediaKind": "image"
        }
      ]
    },
    {
      "id": "nd-rcb",
      "title": "RCB Portal Demonstration",
      "date": "2024-12-20",
      "endDate": "2024-12-20",
      "location": "Odisha",
      "description": "A live RCB Portal demonstration supported discussion of compliance simplification, outdated requirements and digitisation reforms.",
      "photos": [
        {
          "key": "nd24-post-3-1.jpg",
          "data": "nov-dec-outreach-2024/post-3-1.jpg",
          "caption": "RCB Portal demonstration at the MRCB workshop",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1870081769849999374",
          "mediaKind": "image"
        }
      ]
    }
  ],
  "highlights": [],
  "officialSources": [
    {
      "label": "Official Invest Odisha coverage — 2",
      "url": "https://x.com/InvestInOdisha/status/1870008473431277937"
    },
    {
      "label": "Official Invest Odisha coverage — 3",
      "url": "https://x.com/InvestInOdisha/status/1870081769849999374"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1870008473431277937",
  "contentVersion": 1,
  "coverPhoto": {
    "key": "nd24-post-2-1.jpg",
    "data": "nov-dec-outreach-2024/post-2-1.jpg",
    "caption": "MRCB workshop — official coverage",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1870008473431277937",
    "mediaKind": "image"
  },
  "imageUrl": "nov-dec-outreach-2024/post-2-1.jpg"
};
const eventRecord=events.find(e=>e.id==='e128');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e128');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e128');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e128'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e128'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="nd24e128View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="nd24e128Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="nd24e128SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="nd24e128RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e128')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="nd24e128EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="nd24e128Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="nd24e128EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e128'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="nd24e128Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="nd24e128Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.nd24e128View=async key=>{viewing=await getPhotos('e128');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.nd24e128Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')nd24e128Step(1);if(ev.key==='ArrowLeft')nd24e128Step(-1);});
  window.nd24e128EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e128')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e128');};
    cls().scrollTop=0;
  };
  window.nd24e128Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'nd24e128-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e128',sectionId,data,caption:file.name});}await showEvent('e128');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e128')).find(p=>p.key===key);
  window.nd24e128Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('nd24e128-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e128');};
  window.nd24e128SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e128');};
  window.nd24e128RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e128');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1869381072162816293";
const supplied={
  "id": "e129",
  "title": "Atmanirbhar Odisha 2024 — Minister on Skills, Industry & Women Entrepreneurs",
  "date": "2024-12-18",
  "endDate": "2024-12-18",
  "datePrecision": "day",
  "location": "Odisha",
  "category": "Conferences & summits",
  "description": "Industries Minister Shri Sampad Chandra Swain addressed News18 Odia’s Atmanirbhar Odisha 2024, highlighting state initiatives in youth skill development, industrial diversification and women’s entrepreneurship.",
  "sections": [
    {
      "id": "nd-news18",
      "title": "News18 Odia — Atmanirbhar Odisha Address",
      "date": "2024-12-18",
      "endDate": "2024-12-18",
      "location": "Odisha",
      "description": "The Minister discussed these priorities in the context of the vision for Viksit Odisha.",
      "photos": [
        {
          "key": "nd24-post-4-1.jpg",
          "data": "nov-dec-outreach-2024/post-4-1.jpg",
          "caption": "Minister’s address at Atmanirbhar Odisha 2024",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1869381072162816293",
          "mediaKind": "image"
        }
      ]
    }
  ],
  "highlights": [],
  "officialSources": [
    {
      "label": "Official Invest Odisha coverage — 4",
      "url": "https://x.com/InvestInOdisha/status/1869381072162816293"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1869381072162816293",
  "contentVersion": 1,
  "coverPhoto": {
    "key": "nd24-post-4-1.jpg",
    "data": "nov-dec-outreach-2024/post-4-1.jpg",
    "caption": "Minister’s address at Atmanirbhar Odisha 2024",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1869381072162816293",
    "mediaKind": "image"
  },
  "imageUrl": "nov-dec-outreach-2024/post-4-1.jpg"
};
const eventRecord=events.find(e=>e.id==='e129');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e129');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e129');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e129'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e129'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="nd24e129View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="nd24e129Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="nd24e129SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="nd24e129RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e129')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="nd24e129EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="nd24e129Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="nd24e129EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e129'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="nd24e129Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="nd24e129Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.nd24e129View=async key=>{viewing=await getPhotos('e129');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.nd24e129Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')nd24e129Step(1);if(ev.key==='ArrowLeft')nd24e129Step(-1);});
  window.nd24e129EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e129')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e129');};
    cls().scrollTop=0;
  };
  window.nd24e129Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'nd24e129-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e129',sectionId,data,caption:file.name});}await showEvent('e129');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e129')).find(p=>p.key===key);
  window.nd24e129Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('nd24e129-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e129');};
  window.nd24e129SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e129');};
  window.nd24e129RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e129');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1869050988424048715";
const supplied={
  "id": "e130",
  "title": "Utkarsh Odisha 2025 Website & Registration Launch",
  "date": "2024-12-17",
  "endDate": "2024-12-17",
  "datePrecision": "day",
  "location": "Odisha",
  "category": "Institutional milestones",
  "description": "Industries & SDTE Minister Shri Sampad Chandra Swain launched the official website for Utkarsh Odisha — Make in Odisha 2025 on 17 December 2024, with registrations opening that day.\n\nA follow-up post on 18 December described session registrations, event information and scheduling of government-to-business meetings. These are historical launch announcements; no claim is made about the website’s present registration status.",
  "sections": [
    {
      "id": "nd-launch",
      "title": "Website Launch & Registrations Open",
      "date": "2024-12-17",
      "endDate": "2024-12-17",
      "location": "Odisha",
      "description": "The Minister launched the conclave’s official website and announced the opening of registrations.",
      "photos": [
        {
          "key": "nd24-post-5-1.jpg",
          "data": "nov-dec-outreach-2024/post-5-1.jpg",
          "caption": "Utkarsh Odisha 2025 website launch",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1869050988424048715",
          "mediaKind": "image"
        }
      ]
    },
    {
      "id": "nd-webfollow",
      "title": "Follow-up — Website Features",
      "date": "2024-12-18",
      "endDate": "2024-12-18",
      "location": "Odisha",
      "description": "The next-day update highlighted exploring opportunities, registering for sessions, viewing event highlights and scheduling G2B meetings.",
      "photos": [
        {
          "key": "nd24-post-6-1.jpg",
          "data": "nov-dec-outreach-2024/post-6-1.jpg",
          "caption": "Utkarsh Odisha website features — follow-up coverage — official video preview still",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1869289544195158156",
          "mediaKind": "video-preview"
        }
      ]
    }
  ],
  "highlights": [],
  "officialSources": [
    {
      "label": "Official Invest Odisha coverage — 5",
      "url": "https://x.com/InvestInOdisha/status/1869050988424048715"
    },
    {
      "label": "Official Invest Odisha coverage — 6",
      "url": "https://x.com/InvestInOdisha/status/1869289544195158156"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1869050988424048715",
  "contentVersion": 1,
  "coverPhoto": {
    "key": "nd24-post-5-1.jpg",
    "data": "nov-dec-outreach-2024/post-5-1.jpg",
    "caption": "Utkarsh Odisha 2025 website launch",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1869050988424048715",
    "mediaKind": "image"
  },
  "imageUrl": "nov-dec-outreach-2024/post-5-1.jpg"
};
const eventRecord=events.find(e=>e.id==='e130');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e130');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e130');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e130'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e130'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="nd24e130View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="nd24e130Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="nd24e130SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="nd24e130RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e130')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="nd24e130EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="nd24e130Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="nd24e130EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e130'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="nd24e130Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="nd24e130Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.nd24e130View=async key=>{viewing=await getPhotos('e130');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.nd24e130Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')nd24e130Step(1);if(ev.key==='ArrowLeft')nd24e130Step(-1);});
  window.nd24e130EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e130')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e130');};
    cls().scrollTop=0;
  };
  window.nd24e130Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'nd24e130-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e130',sectionId,data,caption:file.name});}await showEvent('e130');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e130')).find(p=>p.key===key);
  window.nd24e130Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('nd24e130-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e130');};
  window.nd24e130SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e130');};
  window.nd24e130RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e130');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1867209438852948479";
const supplied={
  "id": "e131",
  "title": "OSSIA’s 69th Foundation Day — MSME Development & Opportunities",
  "date": "2024-12-12",
  "endDate": "2024-12-12",
  "datePrecision": "day",
  "location": "Odisha",
  "category": "Industry engagements",
  "description": "The 69th Foundation Day of OSSIA featured addresses by MSME Minister Shri Gokulananda Mallick and Principal Secretary, Industries & MSME, Shri Hemant Sharma, focusing on MSME development and Odisha’s economic vision.",
  "sections": [
    {
      "id": "nd-ossia-ps",
      "title": "Principal Secretary — MSMEs & District-Level Growth",
      "date": "2024-12-12",
      "endDate": "2024-12-12",
      "location": "Odisha",
      "description": "Shri Hemant Sharma highlighted MSMEs’ role in reducing poverty, the vision for Odisha in 2036 and a plan for an MSME park in every district. This is a stated plan, not a claim that all parks were operational.",
      "photos": [
        {
          "key": "nd24-post-7-1.jpg",
          "data": "nov-dec-outreach-2024/post-7-1.jpg",
          "caption": "Principal Secretary at OSSIA’s 69th Foundation Day",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1867209438852948479",
          "mediaKind": "image"
        }
      ]
    },
    {
      "id": "nd-ossia-min",
      "title": "Minister — PM Vishwakarma & Ekta Mall",
      "date": "2024-12-12",
      "endDate": "2024-12-12",
      "location": "Odisha",
      "description": "Shri Gokulananda Mallick discussed PM Vishwakarma’s contribution to rural livelihoods and the ₹130 crore Ekta Mall in Gandamunda as an ODOP hub. The source does not establish completion or operational status.",
      "photos": [
        {
          "key": "nd24-post-8-1.jpg",
          "data": "nov-dec-outreach-2024/post-8-1.jpg",
          "caption": "MSME Minister at OSSIA’s 69th Foundation Day",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1867198720015470622",
          "mediaKind": "image"
        }
      ]
    }
  ],
  "highlights": [],
  "officialSources": [
    {
      "label": "Official Invest Odisha coverage — 7",
      "url": "https://x.com/InvestInOdisha/status/1867209438852948479"
    },
    {
      "label": "Official Invest Odisha coverage — 8",
      "url": "https://x.com/InvestInOdisha/status/1867198720015470622"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1867209438852948479",
  "contentVersion": 1,
  "coverPhoto": {
    "key": "nd24-post-7-1.jpg",
    "data": "nov-dec-outreach-2024/post-7-1.jpg",
    "caption": "Principal Secretary at OSSIA’s 69th Foundation Day",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1867209438852948479",
    "mediaKind": "image"
  },
  "imageUrl": "nov-dec-outreach-2024/post-7-1.jpg"
};
const eventRecord=events.find(e=>e.id==='e131');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e131');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e131');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e131'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e131'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="nd24e131View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="nd24e131Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="nd24e131SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="nd24e131RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e131')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="nd24e131EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="nd24e131Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="nd24e131EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e131'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="nd24e131Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="nd24e131Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.nd24e131View=async key=>{viewing=await getPhotos('e131');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.nd24e131Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')nd24e131Step(1);if(ev.key==='ArrowLeft')nd24e131Step(-1);});
  window.nd24e131EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e131')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e131');};
    cls().scrollTop=0;
  };
  window.nd24e131Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'nd24e131-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e131',sectionId,data,caption:file.name});}await showEvent('e131');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e131')).find(p=>p.key===key);
  window.nd24e131Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('nd24e131-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e131');};
  window.nd24e131SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e131');};
  window.nd24e131RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e131');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1866426236903518619";
const supplied={
  "id": "e132",
  "title": "Chief Minister Meets Singapore High Commissioner Simon Wong",
  "date": "2024-12-10",
  "endDate": "2024-12-10",
  "datePrecision": "day",
  "location": "Odisha",
  "category": "Delegations & partnerships",
  "description": "Hon’ble Chief Minister Shri Mohan Charan Majhi met Singapore’s High Commissioner to India, Mr. Simon Wong. Official coverage announced Singapore’s participation as a partner country at Utkarsh Odisha — Make in Odisha Conclave 2025.",
  "sections": [
    {
      "id": "nd-simon",
      "title": "Singapore Partnership for Utkarsh Odisha",
      "date": "2024-12-10",
      "endDate": "2024-12-10",
      "location": "Odisha",
      "description": "The meeting reinforced Odisha–Singapore engagement ahead of the 2025 investment conclave.",
      "photos": [
        {
          "key": "nd24-post-9-1.jpg",
          "data": "nov-dec-outreach-2024/post-9-1.jpg",
          "caption": "Chief Minister’s meeting with Singapore High Commissioner Simon Wong",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1866426236903518619",
          "mediaKind": "image"
        }
      ]
    }
  ],
  "highlights": [],
  "officialSources": [
    {
      "label": "Official Invest Odisha coverage — 9",
      "url": "https://x.com/InvestInOdisha/status/1866426236903518619"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1866426236903518619",
  "contentVersion": 1,
  "coverPhoto": {
    "key": "nd24-post-9-1.jpg",
    "data": "nov-dec-outreach-2024/post-9-1.jpg",
    "caption": "Chief Minister’s meeting with Singapore High Commissioner Simon Wong",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1866426236903518619",
    "mediaKind": "image"
  },
  "imageUrl": "nov-dec-outreach-2024/post-9-1.jpg"
};
const eventRecord=events.find(e=>e.id==='e132');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e132');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e132');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e132'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e132'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="nd24e132View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="nd24e132Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="nd24e132SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="nd24e132RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e132')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="nd24e132EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="nd24e132Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="nd24e132EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e132'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="nd24e132Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="nd24e132Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.nd24e132View=async key=>{viewing=await getPhotos('e132');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.nd24e132Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')nd24e132Step(1);if(ev.key==='ArrowLeft')nd24e132Step(-1);});
  window.nd24e132EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e132')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e132');};
    cls().scrollTop=0;
  };
  window.nd24e132Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'nd24e132-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e132',sectionId,data,caption:file.name});}await showEvent('e132');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e132')).find(p=>p.key===key);
  window.nd24e132Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('nd24e132-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e132');};
  window.nd24e132SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e132');};
  window.nd24e132RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e132');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1866078555135680552";
const supplied={
  "id": "e133",
  "title": "Pravasi Bharatiya Divas 2025 — Bhumi Pujan & Venue Preparations",
  "date": "2024-12-09",
  "endDate": "2024-12-09",
  "datePrecision": "day",
  "location": "Janata Maidan, Bhubaneswar",
  "category": "Institutional milestones",
  "description": "A Bhumi Pujan ceremony at Janata Maidan marked preparations for the 18th Pravasi Bharatiya Divas Convention scheduled for January 2025. MD, IPICOL, Shri Bhupendra Singh Poonia officiated in the presence of Principal Secretary Shri Hemant Sharma and other dignitaries.\n\nThis entry records the December preparatory ceremony, separate from the 8–10 January 2025 convention.",
  "sections": [
    {
      "id": "nd-pbdprep",
      "title": "Bhumi Pujan at Janata Maidan",
      "date": "2024-12-09",
      "endDate": "2024-12-09",
      "location": "Janata Maidan, Bhubaneswar",
      "description": "The ceremony began venue preparations for the upcoming diaspora convention. “PVD” in the old heading is corrected to Pravasi Bharatiya Divas.",
      "photos": [
        {
          "key": "nd24-post-10-1.jpg",
          "data": "nov-dec-outreach-2024/post-10-1.jpg",
          "caption": "Bhumi Pujan for PBD 2025 preparations, 9 December",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1866078555135680552",
          "mediaKind": "image"
        }
      ]
    }
  ],
  "highlights": [],
  "officialSources": [
    {
      "label": "Official Invest Odisha coverage — 10",
      "url": "https://x.com/InvestInOdisha/status/1866078555135680552"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1866078555135680552",
  "contentVersion": 1,
  "coverPhoto": {
    "key": "nd24-post-10-1.jpg",
    "data": "nov-dec-outreach-2024/post-10-1.jpg",
    "caption": "Bhumi Pujan for PBD 2025 preparations, 9 December",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1866078555135680552",
    "mediaKind": "image"
  },
  "imageUrl": "nov-dec-outreach-2024/post-10-1.jpg"
};
const eventRecord=events.find(e=>e.id==='e133');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e133');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e133');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e133'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e133'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="nd24e133View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="nd24e133Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="nd24e133SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="nd24e133RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e133')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="nd24e133EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="nd24e133Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="nd24e133EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e133'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="nd24e133Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="nd24e133Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.nd24e133View=async key=>{viewing=await getPhotos('e133');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.nd24e133Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')nd24e133Step(1);if(ev.key==='ArrowLeft')nd24e133Step(-1);});
  window.nd24e133EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e133')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e133');};
    cls().scrollTop=0;
  };
  window.nd24e133Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'nd24e133-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e133',sectionId,data,caption:file.name});}await showEvent('e133');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e133')).find(p=>p.key===key);
  window.nd24e133Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('nd24e133-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e133');};
  window.nd24e133SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e133');};
  window.nd24e133RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e133');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1865366736838504453";
const supplied={
  "id": "e134",
  "title": "CII MSME Connect 2024 — Industry Collaboration at Paradip",
  "date": "2024-12-07",
  "endDate": "2024-12-07",
  "datePrecision": "day",
  "location": "Paradip, Odisha",
  "category": "Conferences & summits",
  "description": "CII MSME Connect 2024 at Paradip brought government leaders and industry stakeholders together to discuss the role of MSMEs in Odisha’s industrial development.",
  "sections": [
    {
      "id": "nd-cii-ind",
      "title": "Industries Minister’s Address",
      "date": "2024-12-07",
      "endDate": "2024-12-07",
      "location": "Paradip",
      "description": "Shri Sampad Chandra Swain highlighted MSMEs’ importance to Odisha’s industrial growth.",
      "photos": [
        {
          "key": "nd24-post-13-1.jpg",
          "data": "nov-dec-outreach-2024/post-13-1.jpg",
          "caption": "Industries Minister at CII MSME Connect 2024",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1865334224099684504",
          "mediaKind": "image"
        }
      ]
    },
    {
      "id": "nd-cii-msme",
      "title": "MSME Minister’s Engagement",
      "date": "2024-12-07",
      "endDate": "2024-12-07",
      "location": "Paradip",
      "description": "Shri Gokulananda Mallick engaged with MSME industry leaders and stakeholders.",
      "photos": [
        {
          "key": "nd24-post-12-1.jpg",
          "data": "nov-dec-outreach-2024/post-12-1.jpg",
          "caption": "MSME Minister at CII MSME Connect 2024",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1865351977330196844",
          "mediaKind": "image"
        }
      ]
    },
    {
      "id": "nd-cii-ps",
      "title": "Principal Secretary — Collaboration & Growth",
      "date": "2024-12-07",
      "endDate": "2024-12-07",
      "location": "Paradip",
      "description": "Principal Secretary, Industries & MSME, Shri Hemant Sharma addressed collaboration and growth in the state’s MSME sector.",
      "photos": [
        {
          "key": "nd24-post-11-1.jpg",
          "data": "nov-dec-outreach-2024/post-11-1.jpg",
          "caption": "Principal Secretary at CII MSME Connect 2024",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1865366736838504453",
          "mediaKind": "image"
        }
      ]
    }
  ],
  "highlights": [],
  "officialSources": [
    {
      "label": "Official Invest Odisha coverage — 11",
      "url": "https://x.com/InvestInOdisha/status/1865366736838504453"
    },
    {
      "label": "Official Invest Odisha coverage — 12",
      "url": "https://x.com/InvestInOdisha/status/1865351977330196844"
    },
    {
      "label": "Official Invest Odisha coverage — 13",
      "url": "https://x.com/InvestInOdisha/status/1865334224099684504"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1865366736838504453",
  "contentVersion": 1,
  "coverPhoto": {
    "key": "nd24-post-13-1.jpg",
    "data": "nov-dec-outreach-2024/post-13-1.jpg",
    "caption": "Industries Minister at CII MSME Connect 2024",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1865334224099684504",
    "mediaKind": "image"
  },
  "imageUrl": "nov-dec-outreach-2024/post-13-1.jpg"
};
const eventRecord=events.find(e=>e.id==='e134');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e134');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e134');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e134'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e134'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="nd24e134View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="nd24e134Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="nd24e134SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="nd24e134RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e134')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="nd24e134EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="nd24e134Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="nd24e134EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e134'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="nd24e134Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="nd24e134Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.nd24e134View=async key=>{viewing=await getPhotos('e134');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.nd24e134Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')nd24e134Step(1);if(ev.key==='ArrowLeft')nd24e134Step(-1);});
  window.nd24e134EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e134')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e134');};
    cls().scrollTop=0;
  };
  window.nd24e134Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'nd24e134-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e134',sectionId,data,caption:file.name});}await showEvent('e134');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e134')).find(p=>p.key===key);
  window.nd24e134Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('nd24e134-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e134');};
  window.nd24e134SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e134');};
  window.nd24e134RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e134');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1862164660373573920";
const supplied={
  "id": "e135",
  "title": "37th High-Level Clearance Authority Meeting",
  "date": "2024-11-28",
  "endDate": "2024-11-28",
  "datePrecision": "day",
  "location": "Odisha",
  "category": "Clearances & approvals",
  "description": "The 37th HLCA, led by Hon’ble Chief Minister Shri Mohan Charan Majhi, approved projects with proposed investment of ₹1,36,622 crore and employment potential of 74,350.\n\nThe supplied official post does not state a project count or provide a project-wise breakdown. Investment denotes approvals and employment denotes potential outcomes, not realised investment or jobs already created.",
  "sections": [
    {
      "id": "nd-hlca37",
      "title": "Meeting Overview & Approvals",
      "date": "2024-11-28",
      "endDate": "2024-11-28",
      "location": "Odisha",
      "description": "Official coverage reports investment approvals of ₹1,36,622 crore and 74,350 potential jobs. No unsupported project count is added.",
      "photos": [
        {
          "key": "nd24-post-14-1.jpg",
          "data": "nov-dec-outreach-2024/post-14-1.jpg",
          "caption": "37th HLCA — official meeting photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1862164660373573920",
          "mediaKind": "image"
        }
      ]
    }
  ],
  "highlights": [
    {
      "value": "₹1,36,622 crore",
      "label": "Approved investment"
    },
    {
      "value": "74,350",
      "label": "Employment potential"
    }
  ],
  "officialSources": [
    {
      "label": "Official Invest Odisha coverage — 14",
      "url": "https://x.com/InvestInOdisha/status/1862164660373573920"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1862164660373573920",
  "contentVersion": 1,
  "coverPhoto": {
    "key": "nd24-post-14-1.jpg",
    "data": "nov-dec-outreach-2024/post-14-1.jpg",
    "caption": "37th HLCA — official meeting photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1862164660373573920",
    "mediaKind": "image"
  },
  "imageUrl": "nov-dec-outreach-2024/post-14-1.jpg"
};
const eventRecord=events.find(e=>e.id==='e135');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e135');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e135');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e135'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e135'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="nd24e135View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="nd24e135Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="nd24e135SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="nd24e135RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e135')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="nd24e135EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="nd24e135Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="nd24e135EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e135'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="nd24e135Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="nd24e135Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.nd24e135View=async key=>{viewing=await getPhotos('e135');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.nd24e135Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')nd24e135Step(1);if(ev.key==='ArrowLeft')nd24e135Step(-1);});
  window.nd24e135EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e135')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e135');};
    cls().scrollTop=0;
  };
  window.nd24e135Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'nd24e135-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e135',sectionId,data,caption:file.name});}await showEvent('e135');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e135')).find(p=>p.key===key);
  window.nd24e135Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('nd24e135-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e135');};
  window.nd24e135SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e135');};
  window.nd24e135RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e135');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1861755800609529912";
const supplied={
  "id": "e136",
  "title": "Odisha Pavilion at International Engineering Sourcing Show XII",
  "date": "2024-11-27",
  "endDate": "2024-11-29",
  "datePrecision": "day",
  "location": "Chennai, Tamil Nadu",
  "category": "Conferences & summits",
  "description": "Officials from the MSME Department and IPICOL presented Odisha’s engineering and industrial strengths at International Engineering Sourcing Show XII in Chennai, held from 27 to 29 November 2024.\n\nThe Odisha Pavilion highlighted the state’s industrial capabilities and growth opportunities. The source does not report quantified commitments or deals.",
  "sections": [
    {
      "id": "nd-iess",
      "title": "Odisha Pavilion & Industry Outreach",
      "date": "2024-11-27",
      "endDate": "2024-11-29",
      "location": "Chennai",
      "description": "Odisha’s delegation showcased engineering and industrial capabilities at the three-day sourcing show.",
      "photos": [
        {
          "key": "nd24-post-15-1.jpg",
          "data": "nov-dec-outreach-2024/post-15-1.jpg",
          "caption": "Odisha Pavilion at IESS XII, Chennai",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1861755800609529912",
          "mediaKind": "image"
        }
      ]
    }
  ],
  "highlights": [],
  "officialSources": [
    {
      "label": "Official Invest Odisha coverage — 15",
      "url": "https://x.com/InvestInOdisha/status/1861755800609529912"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1861755800609529912",
  "contentVersion": 1,
  "coverPhoto": {
    "key": "nd24-post-15-1.jpg",
    "data": "nov-dec-outreach-2024/post-15-1.jpg",
    "caption": "Odisha Pavilion at IESS XII, Chennai",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1861755800609529912",
    "mediaKind": "image"
  },
  "imageUrl": "nov-dec-outreach-2024/post-15-1.jpg"
};
const eventRecord=events.find(e=>e.id==='e136');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e136');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e136');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e136'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e136'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="nd24e136View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="nd24e136Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="nd24e136SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="nd24e136RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e136')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="nd24e136EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="nd24e136Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="nd24e136EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e136'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="nd24e136Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="nd24e136Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.nd24e136View=async key=>{viewing=await getPhotos('e136');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.nd24e136Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')nd24e136Step(1);if(ev.key==='ArrowLeft')nd24e136Step(-1);});
  window.nd24e136EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e136')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e136');};
    cls().scrollTop=0;
  };
  window.nd24e136Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'nd24e136-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e136',sectionId,data,caption:file.name});}await showEvent('e136');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e136')).find(p=>p.key===key);
  window.nd24e136Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('nd24e136-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e136');};
  window.nd24e136SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e136');};
  window.nd24e136RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e136');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://drive.google.com/drive/folders/18Aqu4jH3Fn1cBOZr5RvOL4TwdBqO0DPX";
const supplied={
  "id": "e137",
  "title": "Odisha Investors’ Connect, Singapore — Government, Industry & Diaspora Engagement",
  "date": "2024-11-17",
  "endDate": "2024-11-20",
  "datePrecision": "day",
  "location": "Singapore",
  "category": "Investors’ meets",
  "description": "Hon’ble Chief Minister Shri Mohan Charan Majhi and Industries Minister Shri Sampad Chandra Swain led Odisha’s investment outreach in Singapore during 17–20 November 2024. The programme combined investor meetings, government engagement, industry roundtables, infrastructure and skills visits, an Odisha Business Meet and diaspora interaction.\n\nThe supplied coverage includes proposed opportunities in green fuels, petrochemicals, industrial gases, light engineering, semiconductors, water management, recycling and food-sector infrastructure. Discussions and proposals are not presented as completed investments, signed commitments or operational facilities unless specifically supported.\n\nThe requested main-programme dates are retained. The 16 November arrival and later 26–28 November recap posts are kept in separate sections; the PSA Horizons visit is dated 19 November because its 20 November post says it occurred the previous day.",
  "sections": [
    {
      "id": "sg-g2b17",
      "title": "17 November — Investor Meetings",
      "date": "2024-11-17",
      "endDate": "2024-11-17",
      "location": "Singapore",
      "description": "The Chief Minister and Industries Minister met Visa Group promoter Vivek Agarwal; CT Metrix founder Dr. Edward Morton, UBCT Chairman B. C. Tan and iHub founder/CEO Sushant Patnaik; and Orind Singapore Chairman Rabin Jhunjhunwala. The Orind discussion covered interest in bio-fertilisers. These were investment discussions, not announced completed projects.",
      "photos": [
        {
          "key": "nd24-post-18-1.jpg",
          "data": "nov-dec-outreach-2024/post-18-1.jpg",
          "caption": "17 November investor engagements",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858051936349733371",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-19-1.jpg",
          "data": "nov-dec-outreach-2024/post-19-1.jpg",
          "caption": "17 November investor engagements",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858058576377282760",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-20-1.jpg",
          "data": "nov-dec-outreach-2024/post-20-1.jpg",
          "caption": "17 November investor engagements",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858064155665744054",
          "mediaKind": "image"
        }
      ]
    },
    {
      "id": "sg-sembcorp",
      "title": "17 November — Sembcorp Industries Visit",
      "date": "2024-11-17",
      "endDate": "2024-11-17",
      "location": "Singapore",
      "description": "The delegation met Group President and CEO Wong Kim Yin and senior Sembcorp officials at its 30 Hill Street headquarters. Day 1 official coverage also summarised G2B meetings and the Sembcorp visit.",
      "photos": [
        {
          "key": "nd24-post-21-1.jpg",
          "data": "nov-dec-outreach-2024/post-21-1.jpg",
          "caption": "Sembcorp visit and Day 1 coverage",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858090819829305430",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-22-1.jpg",
          "data": "nov-dec-outreach-2024/post-22-1.jpg",
          "caption": "Sembcorp visit and Day 1 coverage — official video preview still",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858174425062854790",
          "mediaKind": "video-preview"
        },
        {
          "key": "nd24-drive-sembcorp-0.jpg",
          "data": "nov-dec-outreach-2024/drive-sembcorp-0.jpg",
          "caption": "Sembcorp Industries engagement — supplied 17 November album",
          "sourceUrl": "https://drive.google.com/file/d/1dpGUjseo6M79B14itSPjToS3x4kv2u9P/view",
          "mediaKind": "drive-viewing-copy"
        },
        {
          "key": "nd24-drive-sembcorp-24.jpg",
          "data": "nov-dec-outreach-2024/drive-sembcorp-24.jpg",
          "caption": "Sembcorp Industries engagement — supplied 17 November album — additional view",
          "sourceUrl": "https://drive.google.com/file/d/1eTp0Xug3tBrHBwp1a9RxtCDKX9SuEBmP/view",
          "mediaKind": "drive-viewing-copy"
        }
      ]
    },
    {
      "id": "sg-gov18",
      "title": "18 November — Jurong & Singapore Government Engagement",
      "date": "2024-11-18",
      "endDate": "2024-11-18",
      "location": "Singapore",
      "description": "The Chief Minister and Minister visited the Jurong Petrochemicals Complex to study infrastructure and industry practices. They met Deputy Prime Minister and Minister of Trade and Industry Gan Kim Yong, presenting Odisha’s eastern-seaboard opportunities, and Ms. Sim Ann of Singapore’s Ministry of Foreign Affairs on economic, cultural and strategic cooperation.",
      "photos": [
        {
          "key": "nd24-post-23-1.jpg",
          "data": "nov-dec-outreach-2024/post-23-1.jpg",
          "caption": "18 November infrastructure and government engagements — official video preview still",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858438649278611718",
          "mediaKind": "video-preview"
        },
        {
          "key": "nd24-post-24-1.jpg",
          "data": "nov-dec-outreach-2024/post-24-1.jpg",
          "caption": "18 November infrastructure and government engagements — official video preview still",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858453962581840365",
          "mediaKind": "video-preview"
        },
        {
          "key": "nd24-post-25-1.jpg",
          "data": "nov-dec-outreach-2024/post-25-1.jpg",
          "caption": "18 November infrastructure and government engagements — official video preview still",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858462811799642505",
          "mediaKind": "video-preview"
        },
        {
          "key": "nd24-drive-jurong-0.jpg",
          "data": "nov-dec-outreach-2024/drive-jurong-0.jpg",
          "caption": "Jurong Petrochemicals Complex visit — supplied 18 November album",
          "sourceUrl": "https://drive.google.com/file/d/1761i9bzw7uOOVIGddl094vBiereJewdn/view",
          "mediaKind": "drive-viewing-copy"
        },
        {
          "key": "nd24-drive-jurong-5.jpg",
          "data": "nov-dec-outreach-2024/drive-jurong-5.jpg",
          "caption": "Jurong Petrochemicals Complex visit — supplied 18 November album — additional view",
          "sourceUrl": "https://drive.google.com/file/d/1oB2rP28pyrobpeu5mgVfRB8HXWNrW574/view",
          "mediaKind": "drive-viewing-copy"
        }
      ]
    },
    {
      "id": "sg-delegation18",
      "title": "18 November — Odisha Business Delegation Discussion",
      "date": "2024-11-18",
      "endDate": "2024-11-18",
      "location": "Singapore",
      "description": "The leadership held discussions with the Odisha business delegation on stronger Odisha–Singapore trade collaboration.",
      "photos": [
        {
          "key": "nd24-post-26-1.jpg",
          "data": "nov-dec-outreach-2024/post-26-1.jpg",
          "caption": "Odisha business delegation discussion, 18 November",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858506767354798277",
          "mediaKind": "image"
        }
      ]
    },
    {
      "id": "sg-skills19",
      "title": "19 November — Transport & Skills Cooperation",
      "date": "2024-11-19",
      "endDate": "2024-11-19",
      "location": "Singapore",
      "description": "The Chief Minister and Industries Minister met Singapore Transport Minister Chee Hong Tat. Their visit to ITEES highlighted Odisha’s skill-development journey and international collaboration.",
      "photos": [
        {
          "key": "nd24-post-27-1.jpg",
          "data": "nov-dec-outreach-2024/post-27-1.jpg",
          "caption": "Transport and skills engagements, 19 November — official video preview still",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858717753730875427",
          "mediaKind": "video-preview"
        },
        {
          "key": "nd24-post-28-1.jpg",
          "data": "nov-dec-outreach-2024/post-28-1.jpg",
          "caption": "Transport and skills engagements, 19 November — official video preview still",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858745373252026523",
          "mediaKind": "video-preview"
        }
      ]
    },
    {
      "id": "sg-roundtable19",
      "title": "19 November — FICCI–Enterprise Singapore Industry Roundtable",
      "date": "2024-11-19",
      "endDate": "2024-11-19",
      "location": "Singapore",
      "description": "The Odisha Industry Roundtable, organised by FICCI and Enterprise Singapore, showcased opportunities in minerals, renewable energy, petrochemicals and technology.",
      "photos": [
        {
          "key": "nd24-post-29-1.jpg",
          "data": "nov-dec-outreach-2024/post-29-1.jpg",
          "caption": "FICCI–Enterprise Singapore Industry Roundtable — official video preview still",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858767662316150965",
          "mediaKind": "video-preview"
        },
        {
          "key": "nd24-drive-roundtable-0.jpg",
          "data": "nov-dec-outreach-2024/drive-roundtable-0.jpg",
          "caption": "Odisha Industry Roundtable — supplied 19 November album",
          "sourceUrl": "https://drive.google.com/file/d/1VCZ1GRgHNRLnyZo5SfUVm2AKIOH2PFHL/view",
          "mediaKind": "drive-viewing-copy"
        },
        {
          "key": "nd24-drive-roundtable-25.jpg",
          "data": "nov-dec-outreach-2024/drive-roundtable-25.jpg",
          "caption": "Odisha Industry Roundtable — supplied 19 November album — additional view",
          "sourceUrl": "https://drive.google.com/file/d/19XB2sOVNMGj19lUee8PCaDDozSxY9YhL/view",
          "mediaKind": "drive-viewing-copy"
        }
      ]
    },
    {
      "id": "sg-investors19",
      "title": "19 November — Company & Investment Discussions",
      "date": "2024-11-19",
      "endDate": "2024-11-19",
      "location": "Singapore",
      "description": "Linde India Managing Director Abhijit Banerjee discussed an industrial-gas pipe network, a Centre of Excellence in Bhubaneswar and a global plant-monitoring centre. Hardik Gesota of Capital Land Investments discussed infrastructure financing. Vena Energy representatives Juan Mas Valor and Monika Rathi discussed a green-hydrogen proposal described as 400 MW in the official post.\n\nEverstone Capital’s Amit Manocha discussed light engineering and data centres. Indorama Executive Director Yash Lohia discussed its upcoming PET-recycling plant in Khordha. The archive records these as discussions and reported proposals, not operational facilities or completed investments.",
      "photos": [
        {
          "key": "nd24-post-30-1.jpg",
          "data": "nov-dec-outreach-2024/post-30-1.jpg",
          "caption": "19 November company and investor discussions",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858793807757951017",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-31-1.jpg",
          "data": "nov-dec-outreach-2024/post-31-1.jpg",
          "caption": "19 November company and investor discussions",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858796909051195697",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-32-1.jpg",
          "data": "nov-dec-outreach-2024/post-32-1.jpg",
          "caption": "19 November company and investor discussions",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858811511025606986",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-33-1.jpg",
          "data": "nov-dec-outreach-2024/post-33-1.jpg",
          "caption": "19 November company and investor discussions",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858816102286991641",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-34-1.jpg",
          "data": "nov-dec-outreach-2024/post-34-1.jpg",
          "caption": "19 November company and investor discussions",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858818635839504678",
          "mediaKind": "image"
        }
      ]
    },
    {
      "id": "sg-business19",
      "title": "19 November — Odisha Business Meet & Investor Presentation",
      "date": "2024-11-19",
      "endDate": "2024-11-19",
      "location": "Singapore",
      "description": "The Odisha Business Meet and interactive session highlighted the state’s investment opportunities. Chief Secretary Manoj Ahuja discussed ease of doing business, infrastructure and a whole-of-government approach; Indian High Commissioner Dr. Shilpak Ambule spoke on India–Singapore trade ties.\n\nPrincipal Secretary Hemant Sharma presented sectoral opportunities. Industries Minister Sampad Chandra Swain highlighted metals, petrochemicals, textiles and food processing. The Chief Minister outlined growth, innovation, renewable-energy and technology opportunities. MD, IPICOL & IDCO, Bhupendra Singh Poonia delivered the closing thanks.",
      "photos": [
        {
          "key": "nd24-post-35-1.jpg",
          "data": "nov-dec-outreach-2024/post-35-1.jpg",
          "caption": "Odisha Business Meet and investor presentations, 19 November",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858855769208234332",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-36-1.jpg",
          "data": "nov-dec-outreach-2024/post-36-1.jpg",
          "caption": "Odisha Business Meet and investor presentations, 19 November",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858858448215228473",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-37-1.jpg",
          "data": "nov-dec-outreach-2024/post-37-1.jpg",
          "caption": "Odisha Business Meet and investor presentations, 19 November",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858863029598707961",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-38-1.jpg",
          "data": "nov-dec-outreach-2024/post-38-1.jpg",
          "caption": "Odisha Business Meet and investor presentations, 19 November",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858874302747246998",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-39-1.jpg",
          "data": "nov-dec-outreach-2024/post-39-1.jpg",
          "caption": "Odisha Business Meet and investor presentations, 19 November",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858881346929570065",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-40-1.jpg",
          "data": "nov-dec-outreach-2024/post-40-1.jpg",
          "caption": "Odisha Business Meet and investor presentations, 19 November",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1858893504690483275",
          "mediaKind": "image"
        },
        {
          "key": "nd24-drive-business-0.jpg",
          "data": "nov-dec-outreach-2024/drive-business-0.jpg",
          "caption": "Odisha Business Meet — supplied 19 November album",
          "sourceUrl": "https://drive.google.com/file/d/1O-E-BAtoPToedyTPbGwlTu39xjHttlFC/view",
          "mediaKind": "drive-viewing-copy"
        },
        {
          "key": "nd24-drive-business-25.jpg",
          "data": "nov-dec-outreach-2024/drive-business-25.jpg",
          "caption": "Odisha Business Meet — supplied 19 November album — additional view",
          "sourceUrl": "https://drive.google.com/file/d/1rB1LogtUUQ3ddX0kB5gIF-9OZ19FxrfU/view",
          "mediaKind": "drive-viewing-copy"
        }
      ]
    },
    {
      "id": "sg-psa19",
      "title": "19 November — PSA Horizons & Smart Logistics",
      "date": "2024-11-19",
      "endDate": "2024-11-19",
      "location": "Singapore",
      "description": "The leadership visited PSA Horizons to study port digitalisation and smart logistics. The official post was published on 20 November and explicitly says the visit took place “yesterday”; the section is therefore dated 19 November.",
      "photos": [
        {
          "key": "nd24-post-41-1.jpg",
          "data": "nov-dec-outreach-2024/post-41-1.jpg",
          "caption": "PSA Horizons visit — 19 November; post published 20 November",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1859071346296451370",
          "mediaKind": "image"
        }
      ]
    },
    {
      "id": "sg-water20",
      "title": "20 November — Water Management & Ship Recycling Discussions",
      "date": "2024-11-20",
      "endDate": "2024-11-20",
      "location": "Singapore",
      "description": "Meetings with Marcus Lim of Ecosoftt and Pradeepto Biswas of Plataforma Asia addressed wastewater management and water quality. Discussions with Rene Pill Pedersen of A. P. Moller–Maersk covered a prospective ship-recycling facility in Odisha. No signed agreement or commissioned facility is inferred.",
      "photos": [
        {
          "key": "nd24-post-42-1.jpg",
          "data": "nov-dec-outreach-2024/post-42-1.jpg",
          "caption": "20 November water and ship-recycling discussions",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1859080597437833403",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-43-1.jpg",
          "data": "nov-dec-outreach-2024/post-43-1.jpg",
          "caption": "20 November water and ship-recycling discussions",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1859085129425224123",
          "mediaKind": "image"
        }
      ]
    },
    {
      "id": "sg-visits20",
      "title": "20 November — Suntec City & PEP Innovation Visits",
      "date": "2024-11-20",
      "endDate": "2024-11-20",
      "location": "Singapore",
      "description": "The delegation visited Suntec City Convention & Exhibition Center to explore the MICE ecosystem, and PEP Innovation to engage with the semiconductor ecosystem. The visits are learning and industry engagements, not project approvals.",
      "photos": [
        {
          "key": "nd24-post-44-1.jpg",
          "data": "nov-dec-outreach-2024/post-44-1.jpg",
          "caption": "Suntec City and PEP Innovation visits — official video preview still",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1859102249630220731",
          "mediaKind": "video-preview"
        },
        {
          "key": "nd24-post-45-1.jpg",
          "data": "nov-dec-outreach-2024/post-45-1.jpg",
          "caption": "Suntec City and PEP Innovation visits",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1859125863901446248",
          "mediaKind": "image"
        },
        {
          "key": "nd24-drive-pep-0.jpg",
          "data": "nov-dec-outreach-2024/drive-pep-0.jpg",
          "caption": "PEP Innovation visit — supplied 20 November album",
          "sourceUrl": "https://drive.google.com/file/d/1oPAvZaIkubviw10H4fUb2LT7UgwGMPj-/view",
          "mediaKind": "drive-viewing-copy"
        },
        {
          "key": "nd24-drive-pep-24.jpg",
          "data": "nov-dec-outreach-2024/drive-pep-24.jpg",
          "caption": "PEP Innovation visit — supplied 20 November album — additional view",
          "sourceUrl": "https://drive.google.com/file/d/1kEwMrChTvJJeKXGmXSEiRFoW-1nWi8l1/view",
          "mediaKind": "drive-viewing-copy"
        }
      ]
    },
    {
      "id": "sg-official20",
      "title": "20 November — Chief Secretary-led Industry Meetings",
      "date": "2024-11-20",
      "endDate": "2024-11-20",
      "location": "Singapore",
      "description": "Chief Secretary-led meetings covered Phan Bach’s plans for industrial refrigeration to support seafood and food processing; JERA’s renewable-energy and green-fuel ecosystem and its reported partnership with ReNew for green ammonia; and IHI’s ACME off-take relationship and progress on the Gopalpur project.\n\nFurther discussions with Masan High Tech covered critical-mineral exploration and value addition, including tungsten and feldspar as named in the source. ACE Gases explored industrial-gas manufacturing opportunities in Eastern India. These items reflect the official posts at the time, not independently verified completion or current project status.",
      "photos": [
        {
          "key": "nd24-post-46-1.jpg",
          "data": "nov-dec-outreach-2024/post-46-1.jpg",
          "caption": "Chief Secretary-led industry meetings, 20 November",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1859161488491163899",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-47-1.jpg",
          "data": "nov-dec-outreach-2024/post-47-1.jpg",
          "caption": "Chief Secretary-led industry meetings, 20 November",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1859164480145690815",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-48-1.jpg",
          "data": "nov-dec-outreach-2024/post-48-1.jpg",
          "caption": "Chief Secretary-led industry meetings, 20 November",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1859165800848097671",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-49-1.jpg",
          "data": "nov-dec-outreach-2024/post-49-1.jpg",
          "caption": "Chief Secretary-led industry meetings, 20 November",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1859169709096411435",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-50-1.jpg",
          "data": "nov-dec-outreach-2024/post-50-1.jpg",
          "caption": "Chief Secretary-led industry meetings, 20 November",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1859170554349281676",
          "mediaKind": "image"
        }
      ]
    },
    {
      "id": "sg-diaspora20",
      "title": "20 November — Odia Diaspora Interaction",
      "date": "2024-11-20",
      "endDate": "2024-11-20",
      "location": "Singapore",
      "description": "The Odisha delegation hosted an interactive session with the Odia diaspora. The Industries Minister highlighted the state’s business environment; the Chief Minister stressed the role of Odias worldwide in supporting growth and global partnerships.",
      "photos": [
        {
          "key": "nd24-post-51-1.jpg",
          "data": "nov-dec-outreach-2024/post-51-1.jpg",
          "caption": "Odia diaspora interaction, Singapore, 20 November",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1859227896860303556",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-52-1.jpg",
          "data": "nov-dec-outreach-2024/post-52-1.jpg",
          "caption": "Odia diaspora interaction, Singapore, 20 November",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1859237320916107269",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-53-1.jpg",
          "data": "nov-dec-outreach-2024/post-53-1.jpg",
          "caption": "Odia diaspora interaction, Singapore, 20 November — official video preview still",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1859263139893936215",
          "mediaKind": "video-preview"
        }
      ]
    },
    {
      "id": "sg-arrival16",
      "title": "Before the Programme — Arrival & Welcome, 16 November",
      "date": "2024-11-16",
      "endDate": "2024-11-16",
      "location": "Singapore",
      "description": "Indian High Commissioner Dr. Shilpak Ambule received the Chief Minister at Changi Airport. Team Odisha welcomed him at Shangri-La Hotel, venue for the business meet and diaspora interaction. Arrival coverage is separated from the requested 17–20 November main programme.",
      "photos": [
        {
          "key": "nd24-post-16-1.jpg",
          "data": "nov-dec-outreach-2024/post-16-1.jpg",
          "caption": "16 November arrival and welcome in Singapore",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1857822540783034505",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-17-1.jpg",
          "data": "nov-dec-outreach-2024/post-17-1.jpg",
          "caption": "16 November arrival and welcome in Singapore",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1857826453343310248",
          "mediaKind": "image"
        }
      ]
    },
    {
      "id": "sg-recap",
      "title": "Follow-up Coverage — Business Meet Recaps",
      "date": "2024-11-26",
      "endDate": "2024-11-28",
      "location": "Singapore",
      "description": "Official recap posts on 26 and 28 November highlighted the business meet, Singapore government and industry engagements, and opportunities for cooperation. These publication dates do not extend the visit or establish quantified investments.",
      "photos": [
        {
          "key": "nd24-post-54-1.jpg",
          "data": "nov-dec-outreach-2024/post-54-1.jpg",
          "caption": "Singapore business meet — official follow-up recap",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1861360621415211044",
          "mediaKind": "image"
        },
        {
          "key": "nd24-post-55-1.jpg",
          "data": "nov-dec-outreach-2024/post-55-1.jpg",
          "caption": "Singapore business meet — official follow-up recap",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1862001054482674169",
          "mediaKind": "image"
        }
      ]
    }
  ],
  "highlights": [],
  "officialSources": [
    {
      "label": "Official Invest Odisha coverage — 16",
      "url": "https://x.com/InvestInOdisha/status/1857822540783034505"
    },
    {
      "label": "Official Invest Odisha coverage — 17",
      "url": "https://x.com/InvestInOdisha/status/1857826453343310248"
    },
    {
      "label": "Official Invest Odisha coverage — 18",
      "url": "https://x.com/InvestInOdisha/status/1858051936349733371"
    },
    {
      "label": "Official Invest Odisha coverage — 19",
      "url": "https://x.com/InvestInOdisha/status/1858058576377282760"
    },
    {
      "label": "Official Invest Odisha coverage — 20",
      "url": "https://x.com/InvestInOdisha/status/1858064155665744054"
    },
    {
      "label": "Official Invest Odisha coverage — 21",
      "url": "https://x.com/InvestInOdisha/status/1858090819829305430"
    },
    {
      "label": "Official Invest Odisha coverage — 22",
      "url": "https://x.com/InvestInOdisha/status/1858174425062854790"
    },
    {
      "label": "Official Invest Odisha coverage — 23",
      "url": "https://x.com/InvestInOdisha/status/1858438649278611718"
    },
    {
      "label": "Official Invest Odisha coverage — 24",
      "url": "https://x.com/InvestInOdisha/status/1858453962581840365"
    },
    {
      "label": "Official Invest Odisha coverage — 25",
      "url": "https://x.com/InvestInOdisha/status/1858462811799642505"
    },
    {
      "label": "Official Invest Odisha coverage — 26",
      "url": "https://x.com/InvestInOdisha/status/1858506767354798277"
    },
    {
      "label": "Official Invest Odisha coverage — 27",
      "url": "https://x.com/InvestInOdisha/status/1858717753730875427"
    },
    {
      "label": "Official Invest Odisha coverage — 28",
      "url": "https://x.com/InvestInOdisha/status/1858745373252026523"
    },
    {
      "label": "Official Invest Odisha coverage — 29",
      "url": "https://x.com/InvestInOdisha/status/1858767662316150965"
    },
    {
      "label": "Official Invest Odisha coverage — 30",
      "url": "https://x.com/InvestInOdisha/status/1858793807757951017"
    },
    {
      "label": "Official Invest Odisha coverage — 31",
      "url": "https://x.com/InvestInOdisha/status/1858796909051195697"
    },
    {
      "label": "Official Invest Odisha coverage — 32",
      "url": "https://x.com/InvestInOdisha/status/1858811511025606986"
    },
    {
      "label": "Official Invest Odisha coverage — 33",
      "url": "https://x.com/InvestInOdisha/status/1858816102286991641"
    },
    {
      "label": "Official Invest Odisha coverage — 34",
      "url": "https://x.com/InvestInOdisha/status/1858818635839504678"
    },
    {
      "label": "Official Invest Odisha coverage — 35",
      "url": "https://x.com/InvestInOdisha/status/1858855769208234332"
    },
    {
      "label": "Official Invest Odisha coverage — 36",
      "url": "https://x.com/InvestInOdisha/status/1858858448215228473"
    },
    {
      "label": "Official Invest Odisha coverage — 37",
      "url": "https://x.com/InvestInOdisha/status/1858863029598707961"
    },
    {
      "label": "Official Invest Odisha coverage — 38",
      "url": "https://x.com/InvestInOdisha/status/1858874302747246998"
    },
    {
      "label": "Official Invest Odisha coverage — 39",
      "url": "https://x.com/InvestInOdisha/status/1858881346929570065"
    },
    {
      "label": "Official Invest Odisha coverage — 40",
      "url": "https://x.com/InvestInOdisha/status/1858893504690483275"
    },
    {
      "label": "Official Invest Odisha coverage — 41",
      "url": "https://x.com/InvestInOdisha/status/1859071346296451370"
    },
    {
      "label": "Official Invest Odisha coverage — 42",
      "url": "https://x.com/InvestInOdisha/status/1859080597437833403"
    },
    {
      "label": "Official Invest Odisha coverage — 43",
      "url": "https://x.com/InvestInOdisha/status/1859085129425224123"
    },
    {
      "label": "Official Invest Odisha coverage — 44",
      "url": "https://x.com/InvestInOdisha/status/1859102249630220731"
    },
    {
      "label": "Official Invest Odisha coverage — 45",
      "url": "https://x.com/InvestInOdisha/status/1859125863901446248"
    },
    {
      "label": "Official Invest Odisha coverage — 46",
      "url": "https://x.com/InvestInOdisha/status/1859161488491163899"
    },
    {
      "label": "Official Invest Odisha coverage — 47",
      "url": "https://x.com/InvestInOdisha/status/1859164480145690815"
    },
    {
      "label": "Official Invest Odisha coverage — 48",
      "url": "https://x.com/InvestInOdisha/status/1859165800848097671"
    },
    {
      "label": "Official Invest Odisha coverage — 49",
      "url": "https://x.com/InvestInOdisha/status/1859169709096411435"
    },
    {
      "label": "Official Invest Odisha coverage — 50",
      "url": "https://x.com/InvestInOdisha/status/1859170554349281676"
    },
    {
      "label": "Official Invest Odisha coverage — 51",
      "url": "https://x.com/InvestInOdisha/status/1859227896860303556"
    },
    {
      "label": "Official Invest Odisha coverage — 52",
      "url": "https://x.com/InvestInOdisha/status/1859237320916107269"
    },
    {
      "label": "Official Invest Odisha coverage — 53",
      "url": "https://x.com/InvestInOdisha/status/1859263139893936215"
    },
    {
      "label": "Official Invest Odisha coverage — 54",
      "url": "https://x.com/InvestInOdisha/status/1861360621415211044"
    },
    {
      "label": "Official Invest Odisha coverage — 55",
      "url": "https://x.com/InvestInOdisha/status/1862001054482674169"
    },
    {
      "label": "Original Singapore photograph collection",
      "url": "https://drive.google.com/drive/folders/18Aqu4jH3Fn1cBOZr5RvOL4TwdBqO0DPX"
    }
  ],
  "sourceUrl": "https://drive.google.com/drive/folders/18Aqu4jH3Fn1cBOZr5RvOL4TwdBqO0DPX",
  "contentVersion": 1,
  "coverPhoto": {
    "key": "nd24-post-39-1.jpg",
    "data": "nov-dec-outreach-2024/post-39-1.jpg",
    "caption": "Chief Minister at Odisha Business Meet Singapore, 19 November",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1858881346929570065",
    "mediaKind": "image"
  },
  "imageUrl": "nov-dec-outreach-2024/post-39-1.jpg"
};
const eventRecord=events.find(e=>e.id==='e137');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e137');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e137');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e137'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e137'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="nd24e137View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="nd24e137Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="nd24e137SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="nd24e137RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e137')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Full photo collection ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="nd24e137EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="nd24e137Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="nd24e137EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e137'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="nd24e137Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="nd24e137Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.nd24e137View=async key=>{viewing=await getPhotos('e137');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.nd24e137Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')nd24e137Step(1);if(ev.key==='ArrowLeft')nd24e137Step(-1);});
  window.nd24e137EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e137')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e137');};
    cls().scrollTop=0;
  };
  window.nd24e137Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'nd24e137-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e137',sectionId,data,caption:file.name});}await showEvent('e137');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e137')).find(p=>p.key===key);
  window.nd24e137Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('nd24e137-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e137');};
  window.nd24e137SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e137');};
  window.nd24e137RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original in Google Drive will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e137');};
  render();
})();

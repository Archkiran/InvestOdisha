/* February–March event enrichment, with one new Swiss interaction and extracted video stills. */
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2033201513032794374";
 const supplied={
  "id": "e44",
  "title": "Chief Minister’s Review — Paradip Industrial Projects",
  "date": "2026-03-15",
  "endDate": "2026-03-15",
  "location": "Odisha · Paradip project review",
  "category": "Project Review",
  "description": "Hon’ble Chief Minister Shri Mohan Charan Majhi reviewed upcoming industrial projects in Paradip, joined by Industries Minister Shri Sampad Chandra Swain, ACS Shri Hemant Sharma and senior officials.\n\nThe review focused on accelerating clearances and advancing port expansion, shipbuilding and repair facilities, and investments by Indian Oil Corporation and JSW Group. This was a progress review, not a new project-approval or commissioning announcement.",
  "highlights": [],
  "sections": [
    {
      "id": "programme",
      "title": "Programme Details",
      "description": "Hon’ble Chief Minister Shri Mohan Charan Majhi reviewed upcoming industrial projects in Paradip, joined by Industries Minister Shri Sampad Chandra Swain, ACS Shri Hemant Sharma and senior officials.\n\nThe review focused on accelerating clearances and advancing port expansion, shipbuilding and repair facilities, and investments by Indian Oil Corporation and JSW Group. This was a progress review, not a new project-approval or commissioning announcement.",
      "photos": [
        {
          "key": "mf-post-1-1",
          "data": "feb-march-meetings-2026/post-1-1.jpg",
          "caption": "Chief Minister’s review of upcoming Paradip industrial projects · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2033201513032794374"
        },
        {
          "key": "mf-post-1-2",
          "data": "feb-march-meetings-2026/post-1-2.jpg",
          "caption": "Chief Minister’s review of upcoming Paradip industrial projects · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2033201513032794374"
        },
        {
          "key": "mf-post-1-3",
          "data": "feb-march-meetings-2026/post-1-3.jpg",
          "caption": "Chief Minister’s review of upcoming Paradip industrial projects · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2033201513032794374"
        }
      ],
      "date": "2026-03-15",
      "location": "Odisha · Paradip project review"
    }
  ],
  "coverPhoto": {
    "key": "mf-post-1-1",
    "data": "feb-march-meetings-2026/post-1-1.jpg",
    "caption": "Chief Minister’s review of upcoming Paradip industrial projects · official photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2033201513032794374"
  },
  "imageUrl": "feb-march-meetings-2026/post-1-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2033201513032794374",
  "officialSources": [
    {
      "label": "Official Invest Odisha post",
      "url": "https://x.com/InvestInOdisha/status/2033201513032794374"
    }
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e44');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e44');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e44');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e44'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e44'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="mfe44View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="mfe44Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="mfe44SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="mfe44RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Event details</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e44')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original source ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & date verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Programme details">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="mfe44EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="mfe44Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="mfe44EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e44'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="mfe44Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="mfe44Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.mfe44View=async key=>{viewing=await getPhotos('e44');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.mfe44Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')mfe44Step(1);if(ev.key==='ArrowLeft')mfe44Step(-1);});
  window.mfe44EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event Programme</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e44')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e44');};
    cls().scrollTop=0;
  };
  window.mfe44Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'mfe44-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e44',sectionId,data,caption:file.name});}await showEvent('e44');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e44')).find(p=>p.key===key);
  window.mfe44Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('mfe44-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e44');};
  window.mfe44SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e44');};
  window.mfe44RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e44');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2032066136192532583";
 const supplied={
  "id": "e45",
  "title": "CII Odisha Annual Meeting 2026 — Industry–Government Partnership",
  "date": "2026-03-12",
  "endDate": "2026-03-12",
  "location": "Odisha · CII Annual Meeting",
  "category": "Industry Engagement",
  "description": "The CII Odisha Annual Meeting 2026 brought together government leadership, industry representatives and entrepreneurs to discuss Odisha’s industrial transformation, investment ecosystem and industry-linked skills.\n\nIndustries Minister Shri Sampad Chandra Swain emphasised partnerships among government, industry, institutions and MSMEs. Chief Secretary Smt. Anu Garg presented the Odisha EDGE, while ACS Shri Hemant Sharma reviewed the State’s industrial journey and its shift towards technology-driven growth.",
  "highlights": [],
  "sections": [
    {
      "id": "minister",
      "title": "Industry, Institutions & MSME Partnerships",
      "description": "Industries Minister Shri Sampad Chandra Swain highlighted the importance of strong partnerships between government, industry, institutions and MSMEs in advancing Odisha’s growth.",
      "photos": [
        {
          "key": "mf-post-4-1",
          "data": "feb-march-meetings-2026/post-4-1.jpg",
          "caption": "Industries Minister Shri Sampad Chandra Swain at the CII Odisha Annual Meeting · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2032042800876044707"
        },
        {
          "key": "mf-post-4-2",
          "data": "feb-march-meetings-2026/post-4-2.jpg",
          "caption": "Industries Minister Shri Sampad Chandra Swain at the CII Odisha Annual Meeting · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2032042800876044707"
        }
      ],
      "date": "2026-03-12",
      "location": "CII Odisha Annual Meeting"
    },
    {
      "id": "chief-secretary",
      "title": "Odisha EDGE & Industry-Linked Skilling",
      "description": "Chief Secretary Smt. Anu Garg outlined Odisha EDGE: economic fundamentals, demography, geography and the State ecosystem. She encouraged young entrepreneurs and invited CII collaboration on industry-relevant skilling, including ITI training.",
      "photos": [
        {
          "key": "mf-post-3-1",
          "data": "feb-march-meetings-2026/post-3-1.jpg",
          "caption": "Chief Secretary Smt. Anu Garg at the CII Odisha Annual Meeting · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2032055267945562566"
        },
        {
          "key": "mf-post-3-2",
          "data": "feb-march-meetings-2026/post-3-2.jpg",
          "caption": "Chief Secretary Smt. Anu Garg at the CII Odisha Annual Meeting · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2032055267945562566"
        }
      ],
      "date": "2026-03-12",
      "location": "CII Odisha Annual Meeting"
    },
    {
      "id": "acs",
      "title": "Industrial Progress & Viksit Odisha 2036",
      "description": "ACS Shri Hemant Sharma welcomed industry leaders and reviewed the year’s industrial progress, highlighting a whole-of-government approach and the transition from resource-led growth towards a technology-driven industrial future.",
      "photos": [
        {
          "key": "mf-post-2-1",
          "data": "feb-march-meetings-2026/post-2-1.jpg",
          "caption": "Shri Hemant Sharma at the CII Odisha Annual Meeting · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2032066136192532583"
        },
        {
          "key": "mf-post-2-2",
          "data": "feb-march-meetings-2026/post-2-2.jpg",
          "caption": "Shri Hemant Sharma at the CII Odisha Annual Meeting · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2032066136192532583"
        }
      ],
      "date": "2026-03-12",
      "location": "CII Odisha Annual Meeting"
    }
  ],
  "coverPhoto": {
    "key": "mf-post-2-1",
    "data": "feb-march-meetings-2026/post-2-1.jpg",
    "caption": "Shri Hemant Sharma at the CII Odisha Annual Meeting · official photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2032066136192532583"
  },
  "imageUrl": "feb-march-meetings-2026/post-2-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2032066136192532583",
  "officialSources": [
    {
      "label": "Official Invest Odisha post 2",
      "url": "https://x.com/InvestInOdisha/status/2032066136192532583"
    },
    {
      "label": "Official Invest Odisha post 3",
      "url": "https://x.com/InvestInOdisha/status/2032055267945562566"
    },
    {
      "label": "Official Invest Odisha post 4",
      "url": "https://x.com/InvestInOdisha/status/2032042800876044707"
    }
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e45');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e45');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e45');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e45'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e45'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="mfe45View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="mfe45Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="mfe45SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="mfe45RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Event details</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e45')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original source ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & date verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Programme details">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="mfe45EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="mfe45Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="mfe45EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e45'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="mfe45Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="mfe45Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.mfe45View=async key=>{viewing=await getPhotos('e45');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.mfe45Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')mfe45Step(1);if(ev.key==='ArrowLeft')mfe45Step(-1);});
  window.mfe45EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event Programme</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e45')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e45');};
    cls().scrollTop=0;
  };
  window.mfe45Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'mfe45-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e45',sectionId,data,caption:file.name});}await showEvent('e45');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e45')).find(p=>p.key===key);
  window.mfe45Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('mfe45-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e45');};
  window.mfe45SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e45');};
  window.mfe45RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e45');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2030145109011091531";
 const supplied={
  "id": "e46",
  "title": "IndiaSkills 2025–26 East Regional — Odisha Champions’ Recap",
  "date": "2026-03-07",
  "endDate": "2026-03-07",
  "location": "Bhubaneswar, Odisha · regional competition recap",
  "category": "Skills & Talent",
  "description": "Invest Odisha’s 7 March video celebrates Odisha’s performance at the IndiaSkills 2025–26 Regional Competition (East), reporting that the State topped the regional medal tally. The reel highlights achievement across 59 skill categories and Odisha’s training ecosystem.\n\nThe timeline date records this recap’s publication, not a claim that the competition took place on 7 March. The official competition calendar lists the East Regional closing ceremony on 2 March. Three stills extracted from the supplied video are included offline; the full video remains linked.",
  "highlights": [],
  "sections": [
    {
      "id": "programme",
      "title": "Programme Details",
      "description": "Invest Odisha’s 7 March video celebrates Odisha’s performance at the IndiaSkills 2025–26 Regional Competition (East), reporting that the State topped the regional medal tally. The reel highlights achievement across 59 skill categories and Odisha’s training ecosystem.\n\nThe timeline date records this recap’s publication, not a claim that the competition took place on 7 March. The official competition calendar lists the East Regional closing ceremony on 2 March. Three stills extracted from the supplied video are included offline; the full video remains linked.",
      "photos": [
        {
          "key": "mf-indiaskills-1",
          "data": "feb-march-meetings-2026/indiaskills-frame-1.jpg",
          "caption": "Odisha’s East Regional champions — official medal-tally recap · video still at 8s",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2030145109011091531",
          "frameSeconds": 8
        },
        {
          "key": "mf-indiaskills-2",
          "data": "feb-march-meetings-2026/indiaskills-frame-2.jpg",
          "caption": "Prize-giving and skill-category highlights · video still at 24s",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2030145109011091531",
          "frameSeconds": 24
        },
        {
          "key": "mf-indiaskills-3",
          "data": "feb-march-meetings-2026/indiaskills-frame-3.jpg",
          "caption": "IndiaSkills East Regional medal winners · video still at 43s",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2030145109011091531",
          "frameSeconds": 43
        }
      ],
      "date": "2026-03-07",
      "location": "Bhubaneswar, Odisha · regional competition recap"
    }
  ],
  "coverPhoto": {
    "key": "mf-indiaskills-1",
    "data": "feb-march-meetings-2026/indiaskills-frame-1.jpg",
    "caption": "Odisha’s East Regional champions — official medal-tally recap · video still at 8s",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2030145109011091531",
    "frameSeconds": 8
  },
  "imageUrl": "feb-march-meetings-2026/indiaskills-frame-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2030145109011091531",
  "officialSources": [
    {
      "label": "Invest Odisha: original champions’ video",
      "url": "https://x.com/InvestInOdisha/status/2030145109011091531"
    },
    {
      "label": "WorldSkills India: East Regional competition calendar",
      "url": "https://indiaskills2025.worldskillsindia.co.in/competitions-calendar/category/indiaskills-2025-26-east-regional-competition/"
    }
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e46');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e46');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e46');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e46'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e46'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="mfe46View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="mfe46Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="mfe46SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="mfe46RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Event details</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e46')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original source ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & date verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Programme details">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="mfe46EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="mfe46Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="mfe46EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e46'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="mfe46Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="mfe46Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.mfe46View=async key=>{viewing=await getPhotos('e46');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.mfe46Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')mfe46Step(1);if(ev.key==='ArrowLeft')mfe46Step(-1);});
  window.mfe46EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event Programme</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e46')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e46');};
    cls().scrollTop=0;
  };
  window.mfe46Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'mfe46-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e46',sectionId,data,caption:file.name});}await showEvent('e46');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e46')).find(p=>p.key===key);
  window.mfe46Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('mfe46-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e46');};
  window.mfe46SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e46');};
  window.mfe46RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e46');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://www.ocidodisha.org/en/initiatives/vikash-manthan";
 const supplied={
  "id": "e47",
  "title": "Vikash Manthan 1.0 — Governance in Action",
  "date": "2026-02-27",
  "endDate": "2026-02-28",
  "location": "State Convention Centre, Lok Seva Bhawan, Bhubaneswar",
  "category": "Governance Conclave",
  "description": "Vikash Manthan 1.0 brought together policymakers, administrators, scholars and stakeholders for a two-day governance conclave on 27–28 February 2026. It was organised by the Planning & Convergence Department, Government of Odisha, with the Odisha Centre for Integrated Development (OCID).\n\nThe discussions focused on coordinated policy and sector strategies for Viksit Odisha 2036, aligned with Viksit Bharat 2047. This entry uses separate organiser coverage: the X link supplied under both Vikash Manthan and Summit actually covers the ICC HR Leadership Summit and is not used as Vikash Manthan evidence.",
  "highlights": [],
  "sections": [
    {
      "id": "programme",
      "title": "Programme Details",
      "description": "A structured forum for policy deliberation and sector strategies, organised over two days. No photograph from the unrelated HR summit has been assigned to this event.",
      "photos": [],
      "date": "2026-02-27",
      "location": "State Convention Centre, Lok Seva Bhawan, Bhubaneswar",
      "endDate": "2026-02-28"
    }
  ],
  "coverPhoto": null,
  "imageUrl": "",
  "sourceUrl": "https://www.ocidodisha.org/en/initiatives/vikash-manthan",
  "officialSources": [
    {
      "label": "OCID: Vikash Manthan organiser overview",
      "url": "https://www.ocidodisha.org/en/initiatives/vikash-manthan"
    },
    {
      "label": "OCID: home-page February conclave summary",
      "url": "https://www.ocidodisha.org/"
    }
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e47');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e47');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e47');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e47'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e47'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="mfe47View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="mfe47Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="mfe47SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="mfe47RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Event details</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e47')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original source ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & date verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Programme details">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="mfe47EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="mfe47Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="mfe47EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e47'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="mfe47Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="mfe47Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.mfe47View=async key=>{viewing=await getPhotos('e47');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.mfe47Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')mfe47Step(1);if(ev.key==='ArrowLeft')mfe47Step(-1);});
  window.mfe47EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event Programme</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e47')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e47');};
    cls().scrollTop=0;
  };
  window.mfe47Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'mfe47-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e47',sectionId,data,caption:file.name});}await showEvent('e47');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e47')).find(p=>p.key===key);
  window.mfe47Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('mfe47-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e47');};
  window.mfe47SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e47');};
  window.mfe47RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e47');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2027354457244418176";
 const supplied={
  "id": "e48",
  "title": "ICC HR Leadership Summit 2026 — IPICOL Address",
  "date": "2026-02-27",
  "endDate": "2026-02-27",
  "location": "Bhubaneswar, Odisha",
  "category": "Leadership Summit",
  "description": "Shri Kalyan Mohanty, Executive Director, IPICOL, addressed the HR Leadership Summit 2026 organised by the Indian Chamber of Commerce. The supplied photographs identify the summit and its 27 February date.\n\nThis is the event covered by the X link repeated under both Summit and Vikash Manthan; it is kept distinct from the governance conclave.",
  "highlights": [],
  "sections": [
    {
      "id": "programme",
      "title": "Programme Details",
      "description": "Shri Kalyan Mohanty, Executive Director, IPICOL, addressed the HR Leadership Summit 2026 organised by the Indian Chamber of Commerce. The supplied photographs identify the summit and its 27 February date.\n\nThis is the event covered by the X link repeated under both Summit and Vikash Manthan; it is kept distinct from the governance conclave.",
      "photos": [
        {
          "key": "mf-post-6-1",
          "data": "feb-march-meetings-2026/post-6-1.jpg",
          "caption": "Shri Kalyan Mohanty, ED, IPICOL, at ICC HR Leadership Summit 2026 · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2027354457244418176"
        },
        {
          "key": "mf-post-6-2",
          "data": "feb-march-meetings-2026/post-6-2.jpg",
          "caption": "Shri Kalyan Mohanty, ED, IPICOL, at ICC HR Leadership Summit 2026 · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2027354457244418176"
        }
      ],
      "date": "2026-02-27",
      "location": "Bhubaneswar, Odisha"
    }
  ],
  "coverPhoto": {
    "key": "mf-post-6-1",
    "data": "feb-march-meetings-2026/post-6-1.jpg",
    "caption": "Shri Kalyan Mohanty, ED, IPICOL, at ICC HR Leadership Summit 2026 · official photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2027354457244418176"
  },
  "imageUrl": "feb-march-meetings-2026/post-6-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2027354457244418176",
  "officialSources": [
    {
      "label": "Official Invest Odisha post",
      "url": "https://x.com/InvestInOdisha/status/2027354457244418176"
    }
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e48');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e48');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e48');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e48'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e48'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="mfe48View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="mfe48Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="mfe48SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="mfe48RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Event details</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e48')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original source ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & date verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Programme details">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="mfe48EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="mfe48Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="mfe48EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e48'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="mfe48Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="mfe48Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.mfe48View=async key=>{viewing=await getPhotos('e48');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.mfe48Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')mfe48Step(1);if(ev.key==='ArrowLeft')mfe48Step(-1);});
  window.mfe48EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event Programme</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e48')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e48');};
    cls().scrollTop=0;
  };
  window.mfe48Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'mfe48-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e48',sectionId,data,caption:file.name});}await showEvent('e48');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e48')).find(p=>p.key===key);
  window.mfe48Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('mfe48-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e48');};
  window.mfe48SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e48');};
  window.mfe48RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e48');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2027292988670697800";
 const supplied={
  "id": "e157",
  "title": "Swiss Ambassador’s Investment Interaction with Odisha Officials",
  "date": "2026-02-27",
  "endDate": "2026-02-27",
  "location": "Odisha · investment interaction",
  "category": "International Engagement",
  "description": "ACS Shri Hemant Sharma and IPICOL officials interacted with H.E. Maya Tissafi, Ambassador of Switzerland, and Heads of Mission to explore collaboration and investment opportunities.\n\nThe supplied official post documents the interaction. It does not announce a signed MoU, investment commitment or project approval, so no such outcome is inferred.",
  "highlights": [],
  "sections": [
    {
      "id": "programme",
      "title": "Programme Details",
      "description": "ACS Shri Hemant Sharma and IPICOL officials interacted with H.E. Maya Tissafi, Ambassador of Switzerland, and Heads of Mission to explore collaboration and investment opportunities.\n\nThe supplied official post documents the interaction. It does not announce a signed MoU, investment commitment or project approval, so no such outcome is inferred.",
      "photos": [
        {
          "key": "mf-post-7-1",
          "data": "feb-march-meetings-2026/post-7-1.jpg",
          "caption": "Swiss Ambassador H.E. Maya Tissafi’s investment interaction with Odisha officials · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2027292988670697800"
        },
        {
          "key": "mf-post-7-2",
          "data": "feb-march-meetings-2026/post-7-2.jpg",
          "caption": "Swiss Ambassador H.E. Maya Tissafi’s investment interaction with Odisha officials · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2027292988670697800"
        },
        {
          "key": "mf-post-7-3",
          "data": "feb-march-meetings-2026/post-7-3.jpg",
          "caption": "Swiss Ambassador H.E. Maya Tissafi’s investment interaction with Odisha officials · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2027292988670697800"
        }
      ],
      "date": "2026-02-27",
      "location": "Odisha · investment interaction"
    }
  ],
  "coverPhoto": {
    "key": "mf-post-7-1",
    "data": "feb-march-meetings-2026/post-7-1.jpg",
    "caption": "Swiss Ambassador H.E. Maya Tissafi’s investment interaction with Odisha officials · official photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2027292988670697800"
  },
  "imageUrl": "feb-march-meetings-2026/post-7-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2027292988670697800",
  "officialSources": [
    {
      "label": "Official Invest Odisha post",
      "url": "https://x.com/InvestInOdisha/status/2027292988670697800"
    }
  ],
  "contentVersion": 1
};
 const swissMigration='ipicolSwissFeb2026AddedV1';
 if(!events.some(e=>e.id==='e157')&&!localStorage.getItem(swissMigration)){events.push(JSON.parse(JSON.stringify(supplied)));save();try{localStorage.setItem(swissMigration,'1');}catch{}}
 if(!SEED_EVENTS.some(e=>e.id==='e157'))SEED_EVENTS.push(JSON.parse(JSON.stringify(supplied)));
  const eventRecord=events.find(e=>e.id==='e157');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e157');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e157');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e157'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e157'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="mfe157View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="mfe157Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="mfe157SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="mfe157RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Event details</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e157')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original source ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & date verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Programme details">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="mfe157EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="mfe157Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="mfe157EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e157'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="mfe157Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="mfe157Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.mfe157View=async key=>{viewing=await getPhotos('e157');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.mfe157Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')mfe157Step(1);if(ev.key==='ArrowLeft')mfe157Step(-1);});
  window.mfe157EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event Programme</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e157')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e157');};
    cls().scrollTop=0;
  };
  window.mfe157Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'mfe157-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e157',sectionId,data,caption:file.name});}await showEvent('e157');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e157')).find(p=>p.key===key);
  window.mfe157Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('mfe157-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e157');};
  window.mfe157SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e157');};
  window.mfe157RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e157');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2026827154386989302";
 const supplied={
  "id": "e49",
  "title": "Minister’s Review — HLCA & SLSWCA Project Progress",
  "date": "2026-02-26",
  "endDate": "2026-02-26",
  "location": "Kharavela Bhawan, Bhubaneswar",
  "category": "Project Review",
  "description": "Industries and Skill Development & Technical Education Minister Shri Sampad Chandra Swain reviewed the progress of HLCA and SLSWCA projects at Kharavela Bhawan, with the ACS and senior officials from the Industries Department, IDCO and IPICOL.\n\nThis entry follows the supplied 26 February coverage. It records implementation monitoring, not a separate round of investment approvals.",
  "highlights": [],
  "sections": [
    {
      "id": "programme",
      "title": "Programme Details",
      "description": "Industries and Skill Development & Technical Education Minister Shri Sampad Chandra Swain reviewed the progress of HLCA and SLSWCA projects at Kharavela Bhawan, with the ACS and senior officials from the Industries Department, IDCO and IPICOL.\n\nThis entry follows the supplied 26 February coverage. It records implementation monitoring, not a separate round of investment approvals.",
      "photos": [
        {
          "key": "mf-post-8-1",
          "data": "feb-march-meetings-2026/post-8-1.jpg",
          "caption": "Minister-led review of HLCA and SLSWCA project progress · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2026827154386989302"
        },
        {
          "key": "mf-post-8-2",
          "data": "feb-march-meetings-2026/post-8-2.jpg",
          "caption": "Minister-led review of HLCA and SLSWCA project progress · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2026827154386989302"
        },
        {
          "key": "mf-post-8-3",
          "data": "feb-march-meetings-2026/post-8-3.jpg",
          "caption": "Minister-led review of HLCA and SLSWCA project progress · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2026827154386989302"
        },
        {
          "key": "mf-post-8-4",
          "data": "feb-march-meetings-2026/post-8-4.jpg",
          "caption": "Minister-led review of HLCA and SLSWCA project progress · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2026827154386989302"
        }
      ],
      "date": "2026-02-26",
      "location": "Kharavela Bhawan, Bhubaneswar"
    }
  ],
  "coverPhoto": {
    "key": "mf-post-8-1",
    "data": "feb-march-meetings-2026/post-8-1.jpg",
    "caption": "Minister-led review of HLCA and SLSWCA project progress · official photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2026827154386989302"
  },
  "imageUrl": "feb-march-meetings-2026/post-8-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2026827154386989302",
  "officialSources": [
    {
      "label": "Official Invest Odisha post",
      "url": "https://x.com/InvestInOdisha/status/2026827154386989302"
    }
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e49');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e49');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e49');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e49'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e49'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="mfe49View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="mfe49Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="mfe49SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="mfe49RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Event details</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e49')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original source ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & date verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Programme details">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="mfe49EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="mfe49Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="mfe49EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e49'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="mfe49Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="mfe49Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.mfe49View=async key=>{viewing=await getPhotos('e49');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.mfe49Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')mfe49Step(1);if(ev.key==='ArrowLeft')mfe49Step(-1);});
  window.mfe49EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event Programme</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e49')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e49');};
    cls().scrollTop=0;
  };
  window.mfe49Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'mfe49-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e49',sectionId,data,caption:file.name});}await showEvent('e49');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e49')).find(p=>p.key===key);
  window.mfe49Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('mfe49-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e49');};
  window.mfe49SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e49');};
  window.mfe49RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e49');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2025249092230938758";
 const supplied={
  "id": "e50",
  "title": "44th HLCA — Major Investment Approvals",
  "date": "2026-02-21",
  "endDate": "2026-02-21",
  "location": "Lok Seva Bhawan, Bhubaneswar",
  "category": "Clearances & approvals",
  "description": "Hon’ble Chief Minister Shri Mohan Charan Majhi chaired the 44th High Level Clearance Authority meeting, approving 10 projects across eight districts with investment of ₹44,200 crore, according to Invest Odisha.\n\nThe post reports employment potential exceeding 8,700 jobs. These figures concern approved projects and potential employment, not confirmation of completed investments or jobs already created.",
  "highlights": [
    {
      "value": "10",
      "label": "Projects approved"
    },
    {
      "value": "₹44,200 crore",
      "label": "Approved investment"
    },
    {
      "value": "8",
      "label": "Districts covered"
    },
    {
      "value": "8,700+",
      "label": "Employment potential — official post text"
    }
  ],
  "sections": [
    {
      "id": "programme",
      "title": "Programme Details",
      "description": "Hon’ble Chief Minister Shri Mohan Charan Majhi chaired the 44th High Level Clearance Authority meeting, approving 10 projects across eight districts with investment of ₹44,200 crore, according to Invest Odisha.\n\nThe post reports employment potential exceeding 8,700 jobs. These figures concern approved projects and potential employment, not confirmation of completed investments or jobs already created.",
      "photos": [
        {
          "key": "mf-post-9-1",
          "data": "feb-march-meetings-2026/post-9-1.jpg",
          "caption": "44th HLCA meeting chaired by Chief Minister Shri Mohan Charan Majhi · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2025249092230938758"
        }
      ],
      "date": "2026-02-21",
      "location": "Lok Seva Bhawan, Bhubaneswar"
    }
  ],
  "coverPhoto": {
    "key": "mf-post-9-1",
    "data": "feb-march-meetings-2026/post-9-1.jpg",
    "caption": "44th HLCA meeting chaired by Chief Minister Shri Mohan Charan Majhi · official photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2025249092230938758"
  },
  "imageUrl": "feb-march-meetings-2026/post-9-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2025249092230938758",
  "officialSources": [
    {
      "label": "Invest Odisha: 44th HLCA approval post",
      "url": "https://x.com/InvestInOdisha/status/2025249092230938758"
    },
    {
      "label": "CM Office: meeting date and venue",
      "url": "https://cm.odisha.gov.in/en/node/715"
    }
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e50');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e50');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e50');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e50'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e50'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="mfe50View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="mfe50Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="mfe50SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="mfe50RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Event details</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e50')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original source ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & date verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Programme details">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="mfe50EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="mfe50Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="mfe50EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e50'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="mfe50Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="mfe50Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.mfe50View=async key=>{viewing=await getPhotos('e50');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.mfe50Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')mfe50Step(1);if(ev.key==='ArrowLeft')mfe50Step(-1);});
  window.mfe50EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event Programme</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e50')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e50');};
    cls().scrollTop=0;
  };
  window.mfe50Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'mfe50-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e50',sectionId,data,caption:file.name});}await showEvent('e50');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e50')).find(p=>p.key===key);
  window.mfe50Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('mfe50-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e50');};
  window.mfe50SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e50');};
  window.mfe50RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e50');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2024471540608487738";
 const supplied={
  "id": "e51",
  "title": "World Skill Center — MoUs for ITIs, Women’s Employment & Robotics",
  "date": "2026-02-19",
  "endDate": "2026-02-19",
  "location": "World Skill Center, Bhubaneswar",
  "category": "Skills Partnerships",
  "description": "Invest Odisha’s 19 February announcement documents MoU exchanges at the World Skill Center in the presence of Industries and Skill Development & Technical Education Minister Shri Sampad Chandra Swain.\n\nThe partnerships focus on upgrading ITIs, supporting women’s employment through UNICEF YouthHub and strengthening robotics skills. Three stills from the supplied video are saved offline. The announcement describes partnership objectives, not completed training or employment outcomes.",
  "highlights": [],
  "sections": [
    {
      "id": "programme",
      "title": "Programme Details",
      "description": "Invest Odisha’s 19 February announcement documents MoU exchanges at the World Skill Center in the presence of Industries and Skill Development & Technical Education Minister Shri Sampad Chandra Swain.\n\nThe partnerships focus on upgrading ITIs, supporting women’s employment through UNICEF YouthHub and strengthening robotics skills. Three stills from the supplied video are saved offline. The announcement describes partnership objectives, not completed training or employment outcomes.",
      "photos": [
        {
          "key": "mf-wsc-1",
          "data": "feb-march-meetings-2026/wsc-frame-1.jpg",
          "caption": "World Skill Center exterior · video still at 3s",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2024471540608487738",
          "frameSeconds": 3
        },
        {
          "key": "mf-wsc-2",
          "data": "feb-march-meetings-2026/wsc-frame-2.jpg",
          "caption": "MoU exchange in the presence of Industries Minister Shri Sampad Chandra Swain · video still at 8s",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2024471540608487738",
          "frameSeconds": 8
        },
        {
          "key": "mf-wsc-3",
          "data": "feb-march-meetings-2026/wsc-frame-3.jpg",
          "caption": "Partnership exchange at World Skill Center · video still at 15s",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2024471540608487738",
          "frameSeconds": 15
        }
      ],
      "date": "2026-02-19",
      "location": "World Skill Center, Bhubaneswar"
    }
  ],
  "coverPhoto": {
    "key": "mf-wsc-1",
    "data": "feb-march-meetings-2026/wsc-frame-1.jpg",
    "caption": "World Skill Center exterior · video still at 3s",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2024471540608487738",
    "frameSeconds": 3
  },
  "imageUrl": "feb-march-meetings-2026/wsc-frame-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2024471540608487738",
  "officialSources": [
    {
      "label": "Official Invest Odisha post",
      "url": "https://x.com/InvestInOdisha/status/2024471540608487738"
    }
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e51');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e51');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e51');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e51'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e51'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="mfe51View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="mfe51Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="mfe51SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="mfe51RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Event details</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e51')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original source ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & date verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Programme details">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="mfe51EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="mfe51Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="mfe51EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e51'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="mfe51Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="mfe51Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.mfe51View=async key=>{viewing=await getPhotos('e51');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.mfe51Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')mfe51Step(1);if(ev.key==='ArrowLeft')mfe51Step(-1);});
  window.mfe51EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event Programme</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e51')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e51');};
    cls().scrollTop=0;
  };
  window.mfe51Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'mfe51-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e51',sectionId,data,caption:file.name});}await showEvent('e51');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e51')).find(p=>p.key===key);
  window.mfe51Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('mfe51-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e51');};
  window.mfe51SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e51');};
  window.mfe51RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e51');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2022853841449009558";
 const supplied={
  "id": "e52",
  "title": "Keonjhar — Textile Park & Disaster Recovery Data Centre Foundation Stones",
  "date": "2026-02-14",
  "endDate": "2026-02-14",
  "location": "Balabhadrapur & Dharanidhar University, Keonjhar",
  "category": "Foundation Stones",
  "description": "Hon’ble Chief Minister Shri Mohan Charan Majhi laid the foundation stones for a Textile Park at Balabhadrapur and a Disaster Recovery Data Centre at the Dharanidhar University campus in Keonjhar on 14 February 2026.\n\nThe CM Office reports a ₹100 crore textile park with potential for 1,200 jobs, alongside a ₹187 crore data centre intended to strengthen digital backup and disaster recovery. These are project and potential-employment figures, not completed infrastructure or filled jobs.\n\nThe event date is confirmed by the CM Office record. The supplied Invest Odisha post was published on 15 February.",
  "highlights": [
    {
      "value": "₹100 crore",
      "label": "Textile Park project"
    },
    {
      "value": "1,200",
      "label": "Textile Park employment potential"
    },
    {
      "value": "₹187 crore",
      "label": "Disaster Recovery Data Centre project"
    }
  ],
  "sections": [
    {
      "id": "programme",
      "title": "Programme Details",
      "description": "Hon’ble Chief Minister Shri Mohan Charan Majhi laid the foundation stones for a Textile Park at Balabhadrapur and a Disaster Recovery Data Centre at the Dharanidhar University campus in Keonjhar on 14 February 2026.\n\nThe CM Office reports a ₹100 crore textile park with potential for 1,200 jobs, alongside a ₹187 crore data centre intended to strengthen digital backup and disaster recovery. These are project and potential-employment figures, not completed infrastructure or filled jobs.\n\nThe event date is confirmed by the CM Office record. The supplied Invest Odisha post was published on 15 February.",
      "photos": [
        {
          "key": "mf-post-11-1",
          "data": "feb-march-meetings-2026/post-11-1.jpg",
          "caption": "Chief Minister’s Keonjhar foundation-stone programme · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2022853841449009558"
        },
        {
          "key": "mf-post-11-2",
          "data": "feb-march-meetings-2026/post-11-2.jpg",
          "caption": "Chief Minister’s Keonjhar foundation-stone programme · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2022853841449009558"
        },
        {
          "key": "mf-post-11-3",
          "data": "feb-march-meetings-2026/post-11-3.jpg",
          "caption": "Chief Minister’s Keonjhar foundation-stone programme · official photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2022853841449009558"
        }
      ],
      "date": "2026-02-14",
      "location": "Balabhadrapur & Dharanidhar University, Keonjhar"
    }
  ],
  "coverPhoto": {
    "key": "mf-post-11-1",
    "data": "feb-march-meetings-2026/post-11-1.jpg",
    "caption": "Chief Minister’s Keonjhar foundation-stone programme · official photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2022853841449009558"
  },
  "imageUrl": "feb-march-meetings-2026/post-11-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2022853841449009558",
  "officialSources": [
    {
      "label": "Invest Odisha: supplied foundation-stone coverage",
      "url": "https://x.com/InvestInOdisha/status/2022853841449009558"
    },
    {
      "label": "CM Office: 14 February programme and project figures",
      "url": "https://cm.odisha.gov.in/en/latest-news/honble-cm-shri-mohan-charan-majhi-laid-foundation-stones-two-mega-projects-during-his"
    }
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e52');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e52');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e52');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e52'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e52'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="mfe52View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="mfe52Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="mfe52SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="mfe52RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Event details</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e52')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original source ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & date verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Programme details">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="mfe52EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="mfe52Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="mfe52EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e52'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="mfe52Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="mfe52Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.mfe52View=async key=>{viewing=await getPhotos('e52');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.mfe52Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')mfe52Step(1);if(ev.key==='ArrowLeft')mfe52Step(-1);});
  window.mfe52EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event Programme</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e52')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e52');};
    cls().scrollTop=0;
  };
  window.mfe52Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'mfe52-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e52',sectionId,data,caption:file.name});}await showEvent('e52');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e52')).find(p=>p.key===key);
  window.mfe52Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('mfe52-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e52');};
  window.mfe52SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e52');};
  window.mfe52RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e52');};
  render();
})();



/* August–October 2025 updates: retain existing event identities and user edits. */
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1979108617891758129";
 const supplied={
  "id": "e80",
  "title": "CII Odisha Mining Conclave 2025 — Industry Dialogue & Sustainable Growth",
  "date": "2025-10-17",
  "endDate": "2025-10-18",
  "location": "Jharsuguda, Odisha",
  "category": "Summits & conferences",
  "description": "Industries Minister Shri Sampad Chandra Swain participated in the CII Odisha Mining Conclave 2025 in Jharsuguda on 17–18 October. He engaged industry leaders on investment opportunities and partnerships, with ACS Industries Shri Hemant Sharma and other senior government officials present.\n\nIn his address, the Minister highlighted the mining sector’s contribution to sustainable growth and balanced regional development. The supplied posts record discussions and leadership participation, not a quantified new investment commitment.",
  "sections": [
    {
      "id": "g2b",
      "title": "Government-to-Business Meetings",
      "date": "2025-10-17",
      "endDate": "2025-10-17",
      "location": "",
      "description": "The Minister met industry captains to discuss investment opportunities and strengthen industry partnerships, alongside ACS Hemant Sharma and senior officials.",
      "photos": [
        {
          "key": "aso-2-1",
          "data": "aug-oct-2025/post-2-1.jpg",
          "caption": "Government-to-Business Meetings · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1979108617891758129"
        },
        {
          "key": "aso-2-2",
          "data": "aug-oct-2025/post-2-2.jpg",
          "caption": "Government-to-Business Meetings · official Invest Odisha source · page / view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1979108617891758129"
        },
        {
          "key": "aso-3-1",
          "data": "aug-oct-2025/post-3-1.jpg",
          "caption": "Government-to-Business Meetings · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1979108626867597693"
        },
        {
          "key": "aso-3-2",
          "data": "aug-oct-2025/post-3-2.jpg",
          "caption": "Government-to-Business Meetings · official Invest Odisha source · page / view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1979108626867597693"
        }
      ]
    },
    {
      "id": "address",
      "title": "Minister’s Address — Sustainable Mining-led Growth",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The Minister addressed the conclave on the sector’s role in sustainable growth and balanced regional development. Supporting post published 18 October.",
      "photos": [
        {
          "key": "aso-1-1",
          "data": "aug-oct-2025/post-1-1.jpg",
          "caption": "Minister’s Address — Sustainable Mining-led Growth · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1979365596786806966"
        },
        {
          "key": "aso-1-2",
          "data": "aug-oct-2025/post-1-2.jpg",
          "caption": "Minister’s Address — Sustainable Mining-led Growth · official Invest Odisha source · page / view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1979365596786806966"
        }
      ]
    }
  ],
  "highlights": [],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1979108617891758129",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1979108617891758129",
      "url": "https://x.com/InvestInOdisha/status/1979108617891758129"
    },
    {
      "label": "Official Invest Odisha post · 1979108626867597693",
      "url": "https://x.com/InvestInOdisha/status/1979108626867597693"
    },
    {
      "label": "Official Invest Odisha post · 1979365596786806966",
      "url": "https://x.com/InvestInOdisha/status/1979365596786806966"
    }
  ],
  "coverPhoto": {
    "key": "aso-2-1",
    "data": "aug-oct-2025/post-2-1.jpg",
    "caption": "Government-to-Business Meetings · official Invest Odisha source",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1979108617891758129"
  },
  "imageUrl": "aug-oct-2025/post-2-1.jpg",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e80');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e80');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e80');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e80'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e80'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="asoe80View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="asoe80Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="asoe80SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="asoe80RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e80')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="asoe80EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="asoe80Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="asoe80EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e80'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="asoe80Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="asoe80Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.asoe80View=async key=>{viewing=await getPhotos('e80');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.asoe80Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')asoe80Step(1);if(ev.key==='ArrowLeft')asoe80Step(-1);});
  window.asoe80EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e80')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e80');};
    cls().scrollTop=0;
  };
  window.asoe80Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'asoe80-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e80',sectionId,data,caption:file.name});}await showEvent('e80');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e80')).find(p=>p.key===key);
  window.asoe80Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('asoe80-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e80');};
  window.asoe80SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e80');};
  window.asoe80RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e80');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1975957372784017436";
 const supplied={
  "id": "e81",
  "title": "ACS Hemant Sharma Engages UK Businesses on Regional Investment Opportunities",
  "date": "2025-10-08",
  "endDate": "2025-10-08",
  "location": "UK business engagement",
  "category": "Industry engagements",
  "description": "Shri Hemant Sharma, Additional Chief Secretary, Industries, joined the session “Spotlight on States: Unlocking Regional Opportunities”. He engaged UK businesses on regional investment pathways and state-level collaboration.\n\nThe official post describes business engagement; it does not announce a signed agreement or investment value.",
  "sections": [
    {
      "id": "session",
      "title": "Spotlight on States — Unlocking Regional Opportunities",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The session connected UK businesses with regional investment opportunities and state-level collaboration pathways.",
      "photos": [
        {
          "key": "aso-4-1",
          "data": "aug-oct-2025/post-4-1.jpg",
          "caption": "Spotlight on States — Unlocking Regional Opportunities · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1975957372784017436"
        },
        {
          "key": "aso-4-2",
          "data": "aug-oct-2025/post-4-2.jpg",
          "caption": "Spotlight on States — Unlocking Regional Opportunities · official Invest Odisha source · page / view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1975957372784017436"
        }
      ]
    }
  ],
  "highlights": [],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1975957372784017436",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1975957372784017436",
      "url": "https://x.com/InvestInOdisha/status/1975957372784017436"
    }
  ],
  "coverPhoto": {
    "key": "aso-4-1",
    "data": "aug-oct-2025/post-4-1.jpg",
    "caption": "Spotlight on States — Unlocking Regional Opportunities · official Invest Odisha source",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1975957372784017436"
  },
  "imageUrl": "aug-oct-2025/post-4-1.jpg",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e81');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e81');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e81');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e81'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e81'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="asoe81View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="asoe81Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="asoe81SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="asoe81RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e81')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="asoe81EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="asoe81Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="asoe81EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e81'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="asoe81Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="asoe81Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.asoe81View=async key=>{viewing=await getPhotos('e81');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.asoe81Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')asoe81Step(1);if(ev.key==='ArrowLeft')asoe81Step(-1);});
  window.asoe81EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e81')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e81');};
    cls().scrollTop=0;
  };
  window.asoe81Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'asoe81-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e81',sectionId,data,caption:file.name});}await showEvent('e81');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e81')).find(p=>p.key===key);
  window.asoe81Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('asoe81-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e81');};
  window.asoe81SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e81');};
  window.asoe81RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e81');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1968980664981540939";
 const supplied={
  "id": "e82",
  "title": "140th SLSWCA — Investment Approvals",
  "date": "2025-09-19",
  "endDate": "2025-09-19",
  "location": "Bhubaneswar, Odisha",
  "category": "Clearances & approvals",
  "description": "Chief Secretary Shri Manoj Ahuja chaired the 140th State Level Single Window Clearance Authority meeting, approving 25 projects worth ₹4,739 crore with employment potential of 25,200 across 13 key sectors.\n\nThe eight supplied sector graphics list 21 projects totalling ₹4,052.99 crore and 22,880 potential jobs. This is a partial breakdown: 4 projects, ₹686.01 crore and 2,320 potential jobs are not allocated in these graphics. No missing proponents or sector allocations have been invented.\n\nThe sector posts were published on 19–21 September and support the 19 September approval meeting. Repeated companies in different locations or sectors are retained as separately listed proposals; missing coverage is marked as unspecified.",
  "sections": [
    {
      "id": "meeting",
      "title": "140th SLSWCA Meeting",
      "date": "2025-09-19",
      "endDate": "2025-09-19",
      "location": "",
      "description": "Chief Secretary Shri Manoj Ahuja chaired the meeting. The overview and sector breakdown retain their respective reported figures.",
      "photos": [
        {
          "key": "aso-5-1",
          "data": "aug-oct-2025/post-5-1.jpg",
          "caption": "140th SLSWCA Meeting · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1968980664981540939"
        }
      ],
      "isMeeting": true,
      "sourceUrl": "https://x.com/InvestInOdisha/status/1968980664981540939"
    },
    {
      "id": "sector-1",
      "title": "Textile, Apparel & Technical Textile",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Figures and proponent / coverage labels reproduced from the official sector graphic. Employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "aso-6-1",
          "data": "aug-oct-2025/post-6-1.jpg",
          "caption": "Textile, Apparel & Technical Textile · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1968996783758926116"
        }
      ],
      "investment": 1684.87,
      "employment": 18450,
      "projects": [
        {
          "name": "Colortone Textiles Private Limited",
          "district": "Khordha"
        },
        {
          "name": "Techno Activewear Private Limited",
          "district": "Cuttack"
        },
        {
          "name": "Hindalco Industries Ltd",
          "district": "Keonjhar"
        },
        {
          "name": "Hindalco Industries Ltd",
          "district": "Sambalpur"
        },
        {
          "name": "SCM Garments Private Limited",
          "district": "Not specified in graphic"
        },
        {
          "name": "Carloo Tex Private Limited",
          "district": "Cuttack"
        },
        {
          "name": "Perfect Infra Vision Private Limited",
          "district": "Balangir"
        },
        {
          "name": "Wovinova Private Limited",
          "district": "Cuttack"
        },
        {
          "name": "Piu Fashion Private Limited",
          "district": "Khordha"
        },
        {
          "name": "Aditi Lifestyle Private Limited",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1968996783758926116"
    },
    {
      "id": "sector-2",
      "title": "Steel, Metal Downstream & Electrical Capital Goods",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Figures and proponent / coverage labels reproduced from the official sector graphic. Employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "aso-7-1",
          "data": "aug-oct-2025/post-7-1.jpg",
          "caption": "Steel, Metal Downstream & Electrical Capital Goods · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1969281377146155333"
        }
      ],
      "investment": 1228,
      "employment": 2500,
      "projects": [
        {
          "name": "Rahee Track Technologies Private Limited",
          "district": "Khordha"
        },
        {
          "name": "Konark Ispat Limited",
          "district": "Jharsuguda"
        },
        {
          "name": "Mascot Electromech Private Limited",
          "district": "Mayurbhanj"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1969281377146155333"
    },
    {
      "id": "sector-3",
      "title": "Power & Renewable Energy",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Figures and proponent / coverage labels reproduced from the official sector graphic. Employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "aso-8-1",
          "data": "aug-oct-2025/post-8-1.jpg",
          "caption": "Power & Renewable Energy · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1969354163529162898"
        }
      ],
      "investment": 140,
      "employment": 360,
      "projects": [
        {
          "name": "Prozeal Green Energy Limited",
          "district": "Subarnapur"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1969354163529162898"
    },
    {
      "id": "sector-4",
      "title": "Chemicals & Circular Economy",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Figures and proponent / coverage labels reproduced from the official sector graphic. Employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "aso-9-1",
          "data": "aug-oct-2025/post-9-1.jpg",
          "caption": "Chemicals & Circular Economy · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1969381923433955489"
        }
      ],
      "investment": 526.14,
      "employment": 745,
      "projects": [
        {
          "name": "Beil Infrastructure Limited",
          "district": "Ganjam"
        },
        {
          "name": "Sirius Speciality Chemicals Private Limited",
          "district": "Jajpur"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1969381923433955489"
    },
    {
      "id": "sector-5",
      "title": "Tourism",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Figures and proponent / coverage labels reproduced from the official sector graphic. Employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "aso-10-1",
          "data": "aug-oct-2025/post-10-1.jpg",
          "caption": "Tourism · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1969436698343002523"
        }
      ],
      "investment": 107.42,
      "employment": 150,
      "projects": [
        {
          "name": "Syce India (OPC) Pvt Ltd",
          "district": "Sambalpur"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1969436698343002523"
    },
    {
      "id": "sector-6",
      "title": "IT / ITES",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Figures and proponent / coverage labels reproduced from the official sector graphic. Employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "aso-11-1",
          "data": "aug-oct-2025/post-11-1.jpg",
          "caption": "IT / ITES · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1969577210383384988"
        }
      ],
      "investment": 82,
      "employment": 210,
      "projects": [
        {
          "name": "Linde India Limited",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1969577210383384988"
    },
    {
      "id": "sector-7",
      "title": "Infrastructure",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Figures and proponent / coverage labels reproduced from the official sector graphic. Employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "aso-12-1",
          "data": "aug-oct-2025/post-12-1.jpg",
          "caption": "Infrastructure · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1969629687182999590"
        }
      ],
      "investment": 105.7,
      "employment": 35,
      "projects": [
        {
          "name": "Linde India Limited",
          "district": "Jajpur"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1969629687182999590"
    },
    {
      "id": "sector-8",
      "title": "Transportation & Cold Storage Infrastructure",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Figures and proponent / coverage labels reproduced from the official sector graphic. Employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "aso-13-1",
          "data": "aug-oct-2025/post-13-1.jpg",
          "caption": "Transportation & Cold Storage Infrastructure · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1969722715247698095"
        }
      ],
      "investment": 178.86,
      "employment": 430,
      "projects": [
        {
          "name": "Saizar Enterprise Private Limited",
          "district": "Angul"
        },
        {
          "name": "PPD Ispat Private Limited",
          "district": "Gajapati"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1969722715247698095"
    }
  ],
  "highlights": [
    {
      "value": "25",
      "label": "Projects approved"
    },
    {
      "value": "₹4,739 crore",
      "label": "Approved investment"
    },
    {
      "value": "25,200",
      "label": "Employment potential"
    },
    {
      "value": "13",
      "label": "Key sectors in overview"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1968980664981540939",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1968980664981540939",
      "url": "https://x.com/InvestInOdisha/status/1968980664981540939"
    },
    {
      "label": "Official Invest Odisha post · 1968996783758926116",
      "url": "https://x.com/InvestInOdisha/status/1968996783758926116"
    },
    {
      "label": "Official Invest Odisha post · 1969281377146155333",
      "url": "https://x.com/InvestInOdisha/status/1969281377146155333"
    },
    {
      "label": "Official Invest Odisha post · 1969354163529162898",
      "url": "https://x.com/InvestInOdisha/status/1969354163529162898"
    },
    {
      "label": "Official Invest Odisha post · 1969381923433955489",
      "url": "https://x.com/InvestInOdisha/status/1969381923433955489"
    },
    {
      "label": "Official Invest Odisha post · 1969436698343002523",
      "url": "https://x.com/InvestInOdisha/status/1969436698343002523"
    },
    {
      "label": "Official Invest Odisha post · 1969577210383384988",
      "url": "https://x.com/InvestInOdisha/status/1969577210383384988"
    },
    {
      "label": "Official Invest Odisha post · 1969629687182999590",
      "url": "https://x.com/InvestInOdisha/status/1969629687182999590"
    },
    {
      "label": "Official Invest Odisha post · 1969722715247698095",
      "url": "https://x.com/InvestInOdisha/status/1969722715247698095"
    }
  ],
  "coverPhoto": {
    "key": "aso-5-1",
    "data": "aug-oct-2025/post-5-1.jpg",
    "caption": "140th SLSWCA Meeting · official Invest Odisha source",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1968980664981540939"
  },
  "imageUrl": "aug-oct-2025/post-5-1.jpg",
  "contentVersion": 1,
  "breakdownStatus": "partial",
  "breakdownTotals": {
    "projects": 21,
    "investment": 4052.99,
    "employment": 22880
  },
  "sourceUrls": [
    "https://x.com/InvestInOdisha/status/1968980664981540939",
    "https://x.com/InvestInOdisha/status/1968996783758926116",
    "https://x.com/InvestInOdisha/status/1969281377146155333",
    "https://x.com/InvestInOdisha/status/1969354163529162898",
    "https://x.com/InvestInOdisha/status/1969381923433955489",
    "https://x.com/InvestInOdisha/status/1969436698343002523",
    "https://x.com/InvestInOdisha/status/1969577210383384988",
    "https://x.com/InvestInOdisha/status/1969629687182999590",
    "https://x.com/InvestInOdisha/status/1969722715247698095"
  ]
};
const eventRecord=events.find(e=>e.id==='e82');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e82');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e82');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e82'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const money=n=>'₹'+Number(n).toLocaleString('en-IN',{minimumFractionDigits:2,maximumFractionDigits:2})+' crore';
  const sectorDetails=s=>s.isMeeting?'':`<div class="slswca-metrics"><div><strong>${esc(money(s.investment||0))}</strong><span>Approved investment</span></div><div><strong>${Number(s.employment||0).toLocaleString('en-IN')}</strong><span>Employment potential</span></div></div><div class="slswca-table-wrap"><table class="slswca-projects"><thead><tr><th scope="col">Approved proponent</th><th scope="col">District / coverage</th></tr></thead><tbody>${(s.projects||[]).map(p=>`<tr><td>${esc(p.name)}</td><td>${esc(p.district)}</td></tr>`).join('')}</tbody></table></div>${s.sourceUrl?`<a class="slswca-source" href="${esc(s.sourceUrl)}" target="_blank" rel="noopener">View original Invest Odisha post ↗</a>`:''}`;
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal','slswca-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e82'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="s140View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="s140Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="s140SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="s140RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Sector approvals</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e82')">Edit overview & highlights</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Official overview post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="140th SLSWCA meeting and sector approvals">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Section ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="s140EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${sectorDetails(s)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this sector</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="s140Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="s140EditSection()">+ Add sector</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal','slswca-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e82'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="s140Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="s140Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.s140View=async key=>{viewing=await getPhotos('e82');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.s140Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')s140Step(1);if(ev.key==='ArrowLeft')s140Step(-1);});
  window.s140EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">140th SLSWCA</div><h2>${id?'Edit sector':'Add sector'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div>${s.isMeeting?'':`<div class="formgrid"><div class="field"><label>Approved investment (₹ crore)</label><input name="sectorInvestment" type="number" min="0" step="0.01" required value="${esc(String(s.investment||0))}"></div><div class="field"><label>Employment potential</label><input name="sectorEmployment" type="number" min="0" step="1" required value="${esc(String(s.employment||0))}"></div></div><div class="field"><label>Projects — one per line: proponent | district</label><textarea name="sectorProjects">${esc((s.projects||[]).map(p=>p.name+" | "+p.district).join("\n"))}</textarea></div>`}<div class="chem-tools"><button class="btn red">Save sector</button><button type="button" class="btn" onclick="showEvent('e82')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!s.isMeeting){s.investment=Number(f.get('sectorInvestment')||0);s.employment=Number(f.get('sectorEmployment')||0);s.projects=String(f.get('sectorProjects')||'').split(/\n/).filter(x=>x.trim()).map(x=>{const [name,...district]=x.split('|');return {name:name.trim(),district:district.join('|').trim()};});}if(!id)current().sections.push(s);save();showEvent('e82');};
    cls().scrollTop=0;
  };
  window.s140Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'s140-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e82',sectionId,data,caption:file.name});}await showEvent('e82');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e82')).find(p=>p.key===key);
  window.s140Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('s140-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e82');};
  window.s140SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e82');};
  window.s140RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e82');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1967566537839284422";
 const supplied={
  "id": "e83",
  "title": "Groundbreaking of 27 Industrial Projects Across 12 Odisha Districts",
  "date": "2025-09-15",
  "endDate": "2025-09-15",
  "location": "Odisha",
  "category": "Industry engagements",
  "description": "Chief Minister Shri Mohan Charan Majhi, joined by Industries Minister Shri Sampad Chandra Swain and other dignitaries, led the groundbreaking ceremony for 27 industrial projects across 12 districts. The official announcement reports over ₹25,000 crore in investment and employment potential exceeding 52,000.\n\nThe projects span renewable energy, textiles, pharmaceuticals, chemicals and downstream industries. Leadership addresses emphasised collaboration among government, industry and people, regional balance and timely implementation.\n\nThese figures describe the projects brought to groundbreaking and their potential employment, not investment already fully realised or jobs already filled.",
  "sections": [
    {
      "id": "ceremony",
      "title": "Groundbreaking Ceremony & Chief Minister’s Address",
      "date": "2025-09-15",
      "endDate": "2025-09-15",
      "location": "",
      "description": "The Chief Minister led the ceremony and highlighted industrial opportunities across 12 districts.",
      "photos": [
        {
          "key": "aso-14-1",
          "data": "aug-oct-2025/post-14-1.jpg",
          "caption": "Groundbreaking Ceremony & Chief Minister’s Address · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1967566537839284422"
        },
        {
          "key": "aso-14-2",
          "data": "aug-oct-2025/post-14-2.jpg",
          "caption": "Groundbreaking Ceremony & Chief Minister’s Address · official Invest Odisha source · page / view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1967566537839284422"
        },
        {
          "key": "aso-16-1",
          "data": "aug-oct-2025/post-16-1.jpg",
          "caption": "Groundbreaking Ceremony & Chief Minister’s Address · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1967521359766159379"
        },
        {
          "key": "aso-16-2",
          "data": "aug-oct-2025/post-16-2.jpg",
          "caption": "Groundbreaking Ceremony & Chief Minister’s Address · official Invest Odisha source · page / view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1967521359766159379"
        }
      ]
    },
    {
      "id": "minister",
      "title": "Industries Minister’s Address",
      "date": "2025-09-15",
      "endDate": "2025-09-15",
      "location": "",
      "description": "The Minister stressed collective effort and taking industrial development across districts to create balanced opportunities for young people.",
      "photos": [
        {
          "key": "aso-15-1",
          "data": "aug-oct-2025/post-15-1.jpg",
          "caption": "Industries Minister’s Address · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1967537642914091354"
        },
        {
          "key": "aso-15-2",
          "data": "aug-oct-2025/post-15-2.jpg",
          "caption": "Industries Minister’s Address · official Invest Odisha source · page / view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1967537642914091354"
        }
      ]
    },
    {
      "id": "welcome",
      "title": "ACS Welcome Address",
      "date": "2025-09-15",
      "endDate": "2025-09-15",
      "location": "",
      "description": "ACS Hemant Sharma welcomed dignitaries and highlighted implementation momentum and investor confidence.",
      "photos": [
        {
          "key": "aso-17-1",
          "data": "aug-oct-2025/post-17-1.jpg",
          "caption": "ACS Welcome Address · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1967506542871339401"
        },
        {
          "key": "aso-17-2",
          "data": "aug-oct-2025/post-17-2.jpg",
          "caption": "ACS Welcome Address · official Invest Odisha source · page / view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1967506542871339401"
        }
      ]
    }
  ],
  "highlights": [
    {
      "value": "27",
      "label": "Industrial projects"
    },
    {
      "value": "12",
      "label": "Districts covered"
    },
    {
      "value": "₹25,000 crore+",
      "label": "Announced project investment"
    },
    {
      "value": "52,000+",
      "label": "Employment potential"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1967566537839284422",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1967566537839284422",
      "url": "https://x.com/InvestInOdisha/status/1967566537839284422"
    },
    {
      "label": "Official Invest Odisha post · 1967521359766159379",
      "url": "https://x.com/InvestInOdisha/status/1967521359766159379"
    },
    {
      "label": "Official Invest Odisha post · 1967537642914091354",
      "url": "https://x.com/InvestInOdisha/status/1967537642914091354"
    },
    {
      "label": "Official Invest Odisha post · 1967506542871339401",
      "url": "https://x.com/InvestInOdisha/status/1967506542871339401"
    }
  ],
  "coverPhoto": {
    "key": "aso-14-1",
    "data": "aug-oct-2025/post-14-1.jpg",
    "caption": "Groundbreaking Ceremony & Chief Minister’s Address · official Invest Odisha source",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1967566537839284422"
  },
  "imageUrl": "aug-oct-2025/post-14-1.jpg",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e83');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e83');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e83');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e83'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e83'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="asoe83View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="asoe83Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="asoe83SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="asoe83RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e83')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="asoe83EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="asoe83Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="asoe83EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e83'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="asoe83Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="asoe83Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.asoe83View=async key=>{viewing=await getPhotos('e83');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.asoe83Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')asoe83Step(1);if(ev.key==='ArrowLeft')asoe83Step(-1);});
  window.asoe83EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e83')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e83');};
    cls().scrollTop=0;
  };
  window.asoe83Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'asoe83-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e83',sectionId,data,caption:file.name});}await showEvent('e83');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e83')).find(p=>p.key===key);
  window.asoe83Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('asoe83-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e83');};
  window.asoe83SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e83');};
  window.asoe83RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e83');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1961685672420675717";
 const supplied={
  "id": "e84",
  "title": "Odisha’s Textile Vision 2030 — Feature with ACS Hemant Sharma",
  "date": "2025-08-30",
  "endDate": "2025-08-30",
  "location": "Odisha · Textile Magazine",
  "category": "Media & publications",
  "description": "Invest Odisha shared a Textile Magazine feature on Odisha’s ambition to become a major eastern Indian textile centre by 2030. Featuring ACS Hemant Sharma’s perspective, it discusses investment readiness, manufacturing support, skills and sustainability.\n\nThe accompanying post reports ₹7,808 crore in investment intentions at OdishaTEX 2025. This is a reported intention figure, not realised investment. The timeline date is set to 30 August 2025 as requested, matching the official post date.",
  "sections": [
    {
      "id": "feature",
      "title": "Textile Magazine — Odisha’s Textile Vision",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The feature, by K. Gopalakrishnan, presents Odisha’s textile-sector aspirations and industry opportunities. The source pages are retained as images; this entry provides only a short summary.",
      "photos": [
        {
          "key": "aso-31-1",
          "data": "aug-oct-2025/post-31-1.png",
          "caption": "Textile Magazine — Odisha’s Textile Vision · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1961685672420675717"
        },
        {
          "key": "aso-31-2",
          "data": "aug-oct-2025/post-31-2.png",
          "caption": "Textile Magazine — Odisha’s Textile Vision · official Invest Odisha source · page / view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1961685672420675717"
        },
        {
          "key": "aso-31-3",
          "data": "aug-oct-2025/post-31-3.png",
          "caption": "Textile Magazine — Odisha’s Textile Vision · official Invest Odisha source · page / view 3",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1961685672420675717"
        }
      ]
    }
  ],
  "highlights": [
    {
      "value": "2030",
      "label": "Textile vision horizon"
    },
    {
      "value": "₹7,808 crore",
      "label": "OdishaTEX investment intentions"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1961685672420675717",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1961685672420675717",
      "url": "https://x.com/InvestInOdisha/status/1961685672420675717"
    }
  ],
  "coverPhoto": {
    "key": "aso-31-1",
    "data": "aug-oct-2025/post-31-1.png",
    "caption": "Textile Magazine — Odisha’s Textile Vision · official Invest Odisha source",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1961685672420675717"
  },
  "imageUrl": "aug-oct-2025/post-31-1.png",
  "contentVersion": 1,
  "datePrecision": "day"
};
  const eventRecord=events.find(e=>e.id==='e84');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e84');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e84');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e84'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e84'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="asoe84View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="asoe84Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="asoe84SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="asoe84RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e84')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="asoe84EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="asoe84Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="asoe84EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e84'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="asoe84Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="asoe84Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.asoe84View=async key=>{viewing=await getPhotos('e84');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.asoe84Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')asoe84Step(1);if(ev.key==='ArrowLeft')asoe84Step(-1);});
  window.asoe84EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e84')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e84');};
    cls().scrollTop=0;
  };
  window.asoe84Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'asoe84-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e84',sectionId,data,caption:file.name});}await showEvent('e84');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e84')).find(p=>p.key===key);
  window.asoe84Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('asoe84-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e84');};
  window.asoe84SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e84');};
  window.asoe84RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e84');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1958156758448242922";
 const supplied={
  "id": "e85",
  "title": "139th SLSWCA — Investment Approvals",
  "date": "2025-08-20",
  "endDate": "2025-08-20",
  "location": "Bhubaneswar, Odisha",
  "category": "Clearances & approvals",
  "description": "Chief Secretary Shri Manoj Ahuja chaired the 139th State Level Single Window Clearance Authority meeting. The official overview reports ₹4,514.83 crore in approved investment and employment potential of 8,206.\n\nThe ten supplied sector graphics list 18 projects. Their employment figures reconcile exactly to 8,206, but their investment figures add to ₹4,515.43 crore — ₹0.60 crore above the overview. Both source figures are retained, and the investment discrepancy is flagged rather than silently adjusted.\n\nSector graphics were published on 21–24 August as supporting updates to the 20 August meeting. Investment represents approved proposal value and employment represents potential, not realised outcomes. Generic proponent wording in the source is retained without inferring a legal company name.",
  "sections": [
    {
      "id": "meeting",
      "title": "139th SLSWCA Meeting",
      "date": "2025-08-20",
      "endDate": "2025-08-20",
      "location": "",
      "description": "Chief Secretary Shri Manoj Ahuja chaired the meeting. The overview and sector breakdown retain their respective reported figures.",
      "photos": [
        {
          "key": "aso-18-1",
          "data": "aug-oct-2025/post-18-1.jpg",
          "caption": "139th SLSWCA Meeting · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1958156758448242922"
        },
        {
          "key": "aso-18-2",
          "data": "aug-oct-2025/post-18-2.jpg",
          "caption": "139th SLSWCA Meeting · official Invest Odisha source · page / view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1958156758448242922"
        }
      ],
      "isMeeting": true,
      "sourceUrl": "https://x.com/InvestInOdisha/status/1958156758448242922"
    },
    {
      "id": "sector-1",
      "title": "Steel & Steel Downstream",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Figures and proponent / coverage labels reproduced from the official sector graphic. Employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "aso-19-1",
          "data": "aug-oct-2025/post-19-1.jpg",
          "caption": "Steel & Steel Downstream · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1958418944332562921"
        }
      ],
      "investment": 1121.55,
      "employment": 2400,
      "projects": [
        {
          "name": "Betabuilds Technologies Pvt Ltd",
          "district": "Sundergarh"
        },
        {
          "name": "Konark Ispat Limited",
          "district": "Jharsuguda"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1958418944332562921"
    },
    {
      "id": "sector-2",
      "title": "Electric Vehicles",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Figures and proponent / coverage labels reproduced from the official sector graphic. Employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "aso-20-1",
          "data": "aug-oct-2025/post-20-1.jpg",
          "caption": "Electric Vehicles · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1958780195566989539"
        }
      ],
      "investment": 300,
      "employment": 145,
      "projects": [
        {
          "name": "Sanaka Auto Corp Limited",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1958780195566989539"
    },
    {
      "id": "sector-3",
      "title": "Green Energy Equipment",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Figures and proponent / coverage labels reproduced from the official sector graphic. Employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "aso-21-1",
          "data": "aug-oct-2025/post-21-1.jpg",
          "caption": "Green Energy Equipment · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1958834867329745147"
        }
      ],
      "investment": 1033,
      "employment": 566,
      "projects": [
        {
          "name": "Inox Solar Ltd",
          "district": "Dhenkanal"
        },
        {
          "name": "Green Energy Equipment Manufacturing Company",
          "district": "Ganjam"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1958834867329745147"
    },
    {
      "id": "sector-4",
      "title": "Food & Beverage",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Figures and proponent / coverage labels reproduced from the official sector graphic. Employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "aso-22-1",
          "data": "aug-oct-2025/post-22-1.jpg",
          "caption": "Food & Beverage · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1958855047107797020"
        }
      ],
      "investment": 393.65,
      "employment": 1922,
      "projects": [
        {
          "name": "Elixir of East – The Artisan Distillery LLP",
          "district": "Khordha"
        },
        {
          "name": "Associated Alcohols and Breweries Limited",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1958855047107797020"
    },
    {
      "id": "sector-5",
      "title": "Data Centres",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Figures and proponent / coverage labels reproduced from the official sector graphic. Employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "aso-23-1",
          "data": "aug-oct-2025/post-23-1.jpg",
          "caption": "Data Centres · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1959151413252039036"
        }
      ],
      "investment": 552,
      "employment": 640,
      "projects": [
        {
          "name": "Shreetech Data Limited",
          "district": "Khordha"
        },
        {
          "name": "West Edge Data Centres Pvt Ltd",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1959151413252039036"
    },
    {
      "id": "sector-6",
      "title": "Tourism",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Figures and proponent / coverage labels reproduced from the official sector graphic. Employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "aso-24-1",
          "data": "aug-oct-2025/post-24-1.jpg",
          "caption": "Tourism · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1959185540395237792"
        }
      ],
      "investment": 363.23,
      "employment": 704,
      "projects": [
        {
          "name": "Padma Hospitality Pvt Ltd",
          "district": "Jagatsinghpur"
        },
        {
          "name": "SNM Hotels & Resorts Pvt Ltd",
          "district": "Jagatsinghpur"
        },
        {
          "name": "Orissa Stevedores Ltd",
          "district": "Jagatsinghpur"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1959185540395237792"
    },
    {
      "id": "sector-7",
      "title": "Infrastructure",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Figures and proponent / coverage labels reproduced from the official sector graphic. Employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "aso-25-1",
          "data": "aug-oct-2025/post-25-1.jpg",
          "caption": "Infrastructure · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1959235559626334482"
        }
      ],
      "investment": 182,
      "employment": 600,
      "projects": [
        {
          "name": "Shree Jagannath Carriers Pvt Ltd",
          "district": "Angul"
        },
        {
          "name": "Sapient Resources Pvt Ltd",
          "district": "Angul"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1959235559626334482"
    },
    {
      "id": "sector-8",
      "title": "Waste Management & Biofuel",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Figures and proponent / coverage labels reproduced from the official sector graphic. Employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "aso-26-1",
          "data": "aug-oct-2025/post-26-1.jpg",
          "caption": "Waste Management & Biofuel · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1959487679999217958"
        }
      ],
      "investment": 400,
      "employment": 995,
      "projects": [
        {
          "name": "Gravita India Limited",
          "district": "Angul"
        },
        {
          "name": "Vibrant Spirits Private Limited",
          "district": "Sundargarh"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1959487679999217958"
    },
    {
      "id": "sector-9",
      "title": "Green Hydrogen & Green Ammonia",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Figures and proponent / coverage labels reproduced from the official sector graphic. Employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "aso-27-1",
          "data": "aug-oct-2025/post-27-1.jpg",
          "caption": "Green Hydrogen & Green Ammonia · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1959528779350683652"
        }
      ],
      "investment": 90,
      "employment": 89,
      "projects": [
        {
          "name": "Jindal Stainless Limited",
          "district": "Jaipur (as printed)"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1959528779350683652"
    },
    {
      "id": "sector-10",
      "title": "Pharmaceuticals",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Figures and proponent / coverage labels reproduced from the official sector graphic. Employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "aso-28-1",
          "data": "aug-oct-2025/post-28-1.jpg",
          "caption": "Pharmaceuticals · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1959569382377504992"
        }
      ],
      "investment": 80,
      "employment": 145,
      "projects": [
        {
          "name": "Starcaps Global LLP",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1959569382377504992"
    }
  ],
  "highlights": [
    {
      "value": "₹4,514.83 crore",
      "label": "Approved investment — overview"
    },
    {
      "value": "8,206",
      "label": "Employment potential"
    },
    {
      "value": "18",
      "label": "Projects listed in sector graphics"
    },
    {
      "value": "₹0.60 crore",
      "label": "Sector investment exceeds overview"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1958156758448242922",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1958156758448242922",
      "url": "https://x.com/InvestInOdisha/status/1958156758448242922"
    },
    {
      "label": "Official Invest Odisha post · 1958418944332562921",
      "url": "https://x.com/InvestInOdisha/status/1958418944332562921"
    },
    {
      "label": "Official Invest Odisha post · 1958780195566989539",
      "url": "https://x.com/InvestInOdisha/status/1958780195566989539"
    },
    {
      "label": "Official Invest Odisha post · 1958834867329745147",
      "url": "https://x.com/InvestInOdisha/status/1958834867329745147"
    },
    {
      "label": "Official Invest Odisha post · 1958855047107797020",
      "url": "https://x.com/InvestInOdisha/status/1958855047107797020"
    },
    {
      "label": "Official Invest Odisha post · 1959151413252039036",
      "url": "https://x.com/InvestInOdisha/status/1959151413252039036"
    },
    {
      "label": "Official Invest Odisha post · 1959185540395237792",
      "url": "https://x.com/InvestInOdisha/status/1959185540395237792"
    },
    {
      "label": "Official Invest Odisha post · 1959235559626334482",
      "url": "https://x.com/InvestInOdisha/status/1959235559626334482"
    },
    {
      "label": "Official Invest Odisha post · 1959487679999217958",
      "url": "https://x.com/InvestInOdisha/status/1959487679999217958"
    },
    {
      "label": "Official Invest Odisha post · 1959528779350683652",
      "url": "https://x.com/InvestInOdisha/status/1959528779350683652"
    },
    {
      "label": "Official Invest Odisha post · 1959569382377504992",
      "url": "https://x.com/InvestInOdisha/status/1959569382377504992"
    }
  ],
  "coverPhoto": {
    "key": "aso-18-1",
    "data": "aug-oct-2025/post-18-1.jpg",
    "caption": "139th SLSWCA Meeting · official Invest Odisha source",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1958156758448242922"
  },
  "imageUrl": "aug-oct-2025/post-18-1.jpg",
  "contentVersion": 1,
  "breakdownStatus": "investment-discrepancy",
  "breakdownTotals": {
    "projects": 18,
    "investment": 4515.43,
    "employment": 8206
  },
  "sourceUrls": [
    "https://x.com/InvestInOdisha/status/1958156758448242922",
    "https://x.com/InvestInOdisha/status/1958418944332562921",
    "https://x.com/InvestInOdisha/status/1958780195566989539",
    "https://x.com/InvestInOdisha/status/1958834867329745147",
    "https://x.com/InvestInOdisha/status/1958855047107797020",
    "https://x.com/InvestInOdisha/status/1959151413252039036",
    "https://x.com/InvestInOdisha/status/1959185540395237792",
    "https://x.com/InvestInOdisha/status/1959235559626334482",
    "https://x.com/InvestInOdisha/status/1959487679999217958",
    "https://x.com/InvestInOdisha/status/1959528779350683652",
    "https://x.com/InvestInOdisha/status/1959569382377504992"
  ]
};
const eventRecord=events.find(e=>e.id==='e85');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e85');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e85');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e85'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const money=n=>'₹'+Number(n).toLocaleString('en-IN',{minimumFractionDigits:2,maximumFractionDigits:2})+' crore';
  const sectorDetails=s=>s.isMeeting?'':`<div class="slswca-metrics"><div><strong>${esc(money(s.investment||0))}</strong><span>Approved investment</span></div><div><strong>${Number(s.employment||0).toLocaleString('en-IN')}</strong><span>Employment potential</span></div></div><div class="slswca-table-wrap"><table class="slswca-projects"><thead><tr><th scope="col">Approved proponent</th><th scope="col">District / coverage</th></tr></thead><tbody>${(s.projects||[]).map(p=>`<tr><td>${esc(p.name)}</td><td>${esc(p.district)}</td></tr>`).join('')}</tbody></table></div>${s.sourceUrl?`<a class="slswca-source" href="${esc(s.sourceUrl)}" target="_blank" rel="noopener">View original Invest Odisha post ↗</a>`:''}`;
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal','slswca-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e85'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="s139View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="s139Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="s139SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="s139RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Sector approvals</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e85')">Edit overview & highlights</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Official overview post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="139th SLSWCA meeting and sector approvals">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Section ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="s139EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${sectorDetails(s)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this sector</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="s139Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="s139EditSection()">+ Add sector</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal','slswca-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e85'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="s139Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="s139Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.s139View=async key=>{viewing=await getPhotos('e85');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.s139Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')s139Step(1);if(ev.key==='ArrowLeft')s139Step(-1);});
  window.s139EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">139th SLSWCA</div><h2>${id?'Edit sector':'Add sector'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div>${s.isMeeting?'':`<div class="formgrid"><div class="field"><label>Approved investment (₹ crore)</label><input name="sectorInvestment" type="number" min="0" step="0.01" required value="${esc(String(s.investment||0))}"></div><div class="field"><label>Employment potential</label><input name="sectorEmployment" type="number" min="0" step="1" required value="${esc(String(s.employment||0))}"></div></div><div class="field"><label>Projects — one per line: proponent | district</label><textarea name="sectorProjects">${esc((s.projects||[]).map(p=>p.name+" | "+p.district).join("\n"))}</textarea></div>`}<div class="chem-tools"><button class="btn red">Save sector</button><button type="button" class="btn" onclick="showEvent('e85')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!s.isMeeting){s.investment=Number(f.get('sectorInvestment')||0);s.employment=Number(f.get('sectorEmployment')||0);s.projects=String(f.get('sectorProjects')||'').split(/\n/).filter(x=>x.trim()).map(x=>{const [name,...district]=x.split('|');return {name:name.trim(),district:district.join('|').trim()};});}if(!id)current().sections.push(s);save();showEvent('e85');};
    cls().scrollTop=0;
  };
  window.s139Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'s139-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e85',sectionId,data,caption:file.name});}await showEvent('e85');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e85')).find(p=>p.key===key);
  window.s139Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('s139-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e85');};
  window.s139SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e85');};
  window.s139RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e85');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1957834632835059766";
 const supplied={
  "id": "e86",
  "title": "News18 Odia Rising Odisha 2025 — Industrial Growth & Investment Outlook",
  "date": "2025-08-19",
  "endDate": "2025-08-19",
  "location": "Odisha",
  "category": "Summits & conferences",
  "description": "At News18 Odia Rising Odisha 2025, Industries Minister Shri Sampad Chandra Swain discussed measures to accelerate industrial growth, ground projects and promote employment-intensive sectors.\n\nChief Minister Shri Mohan Charan Majhi highlighted Odisha’s port connectivity, plug-and-play facilities, Utkarsh Odisha, investor outreach and OdishaTEX 2025 as elements of the state’s investment proposition. His supporting post was published on 20 August; the entry retains the supplied event date of 19 August.",
  "sections": [
    {
      "id": "minister",
      "title": "Industries Minister — Project Grounding & Jobs",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The Minister discussed industrial implementation and employment-intensive opportunities.",
      "photos": [
        {
          "key": "aso-30-1",
          "data": "aug-oct-2025/post-30-1.jpg",
          "caption": "Industries Minister — Project Grounding & Jobs · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1957834632835059766"
        }
      ]
    },
    {
      "id": "cm",
      "title": "Chief Minister — Odisha’s Investment Advantages",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The Chief Minister spoke on connectivity, infrastructure and proactive investor outreach. Supporting post published 20 August.",
      "photos": [
        {
          "key": "aso-29-1",
          "data": "aug-oct-2025/post-29-1.jpg",
          "caption": "Chief Minister — Odisha’s Investment Advantages · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1958007715357131107"
        },
        {
          "key": "aso-29-2",
          "data": "aug-oct-2025/post-29-2.jpg",
          "caption": "Chief Minister — Odisha’s Investment Advantages · official Invest Odisha source · page / view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1958007715357131107"
        }
      ]
    }
  ],
  "highlights": [],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1957834632835059766",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1957834632835059766",
      "url": "https://x.com/InvestInOdisha/status/1957834632835059766"
    },
    {
      "label": "Official Invest Odisha post · 1958007715357131107",
      "url": "https://x.com/InvestInOdisha/status/1958007715357131107"
    }
  ],
  "coverPhoto": {
    "key": "aso-30-1",
    "data": "aug-oct-2025/post-30-1.jpg",
    "caption": "Industries Minister — Project Grounding & Jobs · official Invest Odisha source",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1957834632835059766"
  },
  "imageUrl": "aug-oct-2025/post-30-1.jpg",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e86');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e86');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e86');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e86'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e86'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="asoe86View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="asoe86Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="asoe86SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="asoe86RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e86')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="asoe86EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="asoe86Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="asoe86EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e86'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="asoe86Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="asoe86Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.asoe86View=async key=>{viewing=await getPhotos('e86');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.asoe86Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')asoe86Step(1);if(ev.key==='ArrowLeft')asoe86Step(-1);});
  window.asoe86EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e86')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e86');};
    cls().scrollTop=0;
  };
  window.asoe86Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'asoe86-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e86',sectionId,data,caption:file.name});}await showEvent('e86');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e86')).find(p=>p.key===key);
  window.asoe86Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('asoe86-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e86');};
  window.asoe86SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e86');};
  window.asoe86RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e86');};
  render();
})();

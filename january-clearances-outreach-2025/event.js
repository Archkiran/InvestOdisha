// January 2025: six existing entries and one new Odisha–Singapore entry. Offline only.
(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1882083545574969847";
const supplied={
  "id": "e121",
  "title": "134th State Level Single Window Clearance Authority Meeting",
  "date": "2025-01-22",
  "endDate": "2025-01-22",
  "datePrecision": "day",
  "location": "Odisha",
  "category": "Clearances & approvals",
  "description": "Chief Secretary Shri Manoj Ahuja chaired the 134th SLSWCA on 22 January 2025. The authority approved 17 projects involving proposed investment of ₹3,883.72 crore and employment potential of 12,280.\n\nThe supplied official post provides aggregate approval figures, not a project-wise breakdown. Investment and employment figures are approvals and potential outcomes, not realised investment or jobs already created.",
  "sections": [
    {
      "id": "s134-overview",
      "title": "Meeting Overview & Approvals",
      "date": "2025-01-22",
      "endDate": "2025-01-22",
      "location": "Odisha",
      "description": "The Chief Secretary-led meeting approved 17 projects. No sector-wise or proponent-level detail is inferred without supporting sources.",
      "photos": [
        {
          "key": "ja25-post-1-1.jpg",
          "data": "january-clearances-outreach-2025/post-1-1.jpg",
          "caption": "134th SLSWCA — official meeting photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1882083545574969847"
        }
      ]
    }
  ],
  "highlights": [
    {
      "value": "17",
      "label": "Approved projects"
    },
    {
      "value": "₹3,883.72 crore",
      "label": "Approved investment"
    },
    {
      "value": "12,280",
      "label": "Employment potential"
    }
  ],
  "contentVersion": 1,
  "officialSources": [
    {
      "label": "134th SLSWCA overview",
      "url": "https://x.com/InvestInOdisha/status/1882083545574969847"
    }
  ],
  "coverPhoto": {
    "key": "ja25-post-1-1.jpg",
    "data": "january-clearances-outreach-2025/post-1-1.jpg",
    "caption": "134th SLSWCA — official meeting photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1882083545574969847"
  },
  "imageUrl": "january-clearances-outreach-2025/post-1-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/1882083545574969847"
};
const eventRecord=events.find(e=>e.id==='e121');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e121');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e121');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e121'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e121'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="jae121View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="jae121Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="jae121SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="jae121RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e121')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="jae121EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="jae121Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="jae121EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e121'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="jae121Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="jae121Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.jae121View=async key=>{viewing=await getPhotos('e121');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.jae121Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')jae121Step(1);if(ev.key==='ArrowLeft')jae121Step(-1);});
  window.jae121EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e121')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e121');};
    cls().scrollTop=0;
  };
  window.jae121Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'jae121-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e121',sectionId,data,caption:file.name});}await showEvent('e121');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e121')).find(p=>p.key===key);
  window.jae121Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('jae121-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e121');};
  window.jae121SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e121');};
  window.jae121RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e121');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1881975554209157405";
const supplied={
  "id": "e122",
  "title": "Utkarsh Odisha — Media & Liaison Officer Briefings",
  "date": "2025-01-22",
  "endDate": "2025-01-22",
  "datePrecision": "day",
  "location": "Odisha",
  "category": "Government meetings",
  "description": "Shri Hemant Sharma briefed media representatives and liaison officers ahead of Utkarsh Odisha — Make in Odisha 2025. The briefings covered Odisha’s industrial-growth vision, guest coordination and event responsibilities.\n\nThe supplied contemporaneous posts identify Shri Hemant Sharma as Principal Secretary. This designation is retained in the event details rather than retrospectively using ACS.",
  "sections": [
    {
      "id": "ja-media",
      "title": "Media Briefing",
      "date": "2025-01-22",
      "endDate": "2025-01-22",
      "location": "Odisha",
      "description": "Principal Secretary Shri Hemant Sharma addressed media representatives on Odisha’s industrial ambition, innovation and global investment opportunities, inviting their participation in the success of Utkarsh Odisha.",
      "photos": [
        {
          "key": "ja25-post-3-1.jpg",
          "data": "january-clearances-outreach-2025/post-3-1.jpg",
          "caption": "Utkarsh Odisha media briefing, 22 January",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1881975554209157405"
        },
        {
          "key": "ja25-post-3-2.jpg",
          "data": "january-clearances-outreach-2025/post-3-2.jpg",
          "caption": "Utkarsh Odisha media briefing, 22 January — view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1881975554209157405"
        }
      ]
    },
    {
      "id": "ja-liaison",
      "title": "Liaison Officers’ Planning & Responsibilities",
      "date": "2025-01-22",
      "endDate": "2025-01-22",
      "location": "Odisha",
      "description": "Principal Secretary Shri Hemant Sharma briefed liaison officers on planning and responsibilities, emphasising smooth coordination and a positive guest experience.",
      "photos": [
        {
          "key": "ja25-post-2-1.jpg",
          "data": "january-clearances-outreach-2025/post-2-1.jpg",
          "caption": "Liaison officers’ briefing for Utkarsh Odisha, 22 January",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1882000145304408074"
        },
        {
          "key": "ja25-post-2-2.jpg",
          "data": "january-clearances-outreach-2025/post-2-2.jpg",
          "caption": "Liaison officers’ briefing for Utkarsh Odisha, 22 January — view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1882000145304408074"
        }
      ]
    }
  ],
  "highlights": [],
  "contentVersion": 1,
  "officialSources": [
    {
      "label": "Media representatives’ briefing",
      "url": "https://x.com/InvestInOdisha/status/1881975554209157405"
    },
    {
      "label": "Liaison officers’ briefing",
      "url": "https://x.com/InvestInOdisha/status/1882000145304408074"
    }
  ],
  "coverPhoto": {
    "key": "ja25-post-3-1.jpg",
    "data": "january-clearances-outreach-2025/post-3-1.jpg",
    "caption": "Utkarsh Odisha media briefing, 22 January",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1881975554209157405"
  },
  "imageUrl": "january-clearances-outreach-2025/post-3-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/1881975554209157405"
};
const eventRecord=events.find(e=>e.id==='e122');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e122');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e122');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e122'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e122'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="jae122View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="jae122Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="jae122SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="jae122RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e122')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="jae122EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="jae122Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="jae122EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e122'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="jae122Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="jae122Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.jae122View=async key=>{viewing=await getPhotos('e122');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.jae122Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')jae122Step(1);if(ev.key==='ArrowLeft')jae122Step(-1);});
  window.jae122EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e122')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e122');};
    cls().scrollTop=0;
  };
  window.jae122Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'jae122-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e122',sectionId,data,caption:file.name});}await showEvent('e122');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e122')).find(p=>p.key===key);
  window.jae122Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('jae122-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e122');};
  window.jae122SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e122');};
  window.jae122RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e122');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1880495478439309713";
const supplied={
  "id": "e159",
  "title": "Odisha–Singapore Partnership — Eight MoUs Exchanged",
  "date": "2025-01-18",
  "endDate": "2025-01-18",
  "datePrecision": "day",
  "location": "Odisha",
  "category": "Delegations & partnerships",
  "description": "Eight MoUs were exchanged in the presence of Singapore President Mr. Tharman Shanmugaratnam, Hon’ble Chief Minister Shri Mohan Charan Majhi and Union Minister Shri Dharmendra Pradhan, strengthening Odisha–Singapore cooperation in industrial growth, skilling and innovation.\n\nThis new archive entry uses the requested 18 January date, matching publication of the supplied official post. The post does not independently specify the ceremony day. No unreported MoU values, individual signatories or implementation outcomes have been inferred.",
  "sections": [
    {
      "id": "ja-singapore",
      "title": "MoU Exchange & Strategic Cooperation",
      "date": "2025-01-18",
      "endDate": "2025-01-18",
      "location": "Odisha",
      "description": "Official coverage records eight MoUs to support industrial growth, skilling and innovation. The images belong to this Odisha–Singapore engagement and are not reused as Pravasi Bharatiya Divas photographs.",
      "photos": [
        {
          "key": "ja25-post-4-1.jpg",
          "data": "january-clearances-outreach-2025/post-4-1.jpg",
          "caption": "Odisha–Singapore MoU exchange — official coverage shared 18 January",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1880495478439309713"
        },
        {
          "key": "ja25-post-4-2.jpg",
          "data": "january-clearances-outreach-2025/post-4-2.jpg",
          "caption": "Odisha–Singapore MoU exchange — official coverage shared 18 January — view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1880495478439309713"
        },
        {
          "key": "ja25-post-4-3.jpg",
          "data": "january-clearances-outreach-2025/post-4-3.jpg",
          "caption": "Odisha–Singapore MoU exchange — official coverage shared 18 January — view 3",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1880495478439309713"
        },
        {
          "key": "ja25-post-4-4.jpg",
          "data": "january-clearances-outreach-2025/post-4-4.jpg",
          "caption": "Odisha–Singapore MoU exchange — official coverage shared 18 January — view 4",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1880495478439309713"
        }
      ]
    }
  ],
  "highlights": [
    {
      "value": "8",
      "label": "MoUs exchanged"
    }
  ],
  "contentVersion": 1,
  "officialSources": [
    {
      "label": "Odisha–Singapore MoU exchange — published 18 January",
      "url": "https://x.com/InvestInOdisha/status/1880495478439309713"
    }
  ],
  "dateBasis": "official-post-publication",
  "coverPhoto": {
    "key": "ja25-post-4-1.jpg",
    "data": "january-clearances-outreach-2025/post-4-1.jpg",
    "caption": "Odisha–Singapore MoU exchange — official coverage shared 18 January",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1880495478439309713"
  },
  "imageUrl": "january-clearances-outreach-2025/post-4-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/1880495478439309713"
};
const migration='ipicolSingaporeJanuary2025AddedV1';
if(!events.some(e=>e.id==='e159')&&!localStorage.getItem(migration)){events.push(JSON.parse(JSON.stringify(supplied)));save();try{localStorage.setItem(migration,'1');}catch{}}
if(!SEED_EVENTS.some(e=>e.id==='e159'))SEED_EVENTS.push(JSON.parse(JSON.stringify(supplied)));
const eventRecord=events.find(e=>e.id==='e159');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e159');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e159');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e159'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e159'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="jae159View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="jae159Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="jae159SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="jae159RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e159')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="jae159EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="jae159Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="jae159EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e159'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="jae159Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="jae159Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.jae159View=async key=>{viewing=await getPhotos('e159');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.jae159Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')jae159Step(1);if(ev.key==='ArrowLeft')jae159Step(-1);});
  window.jae159EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e159')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e159');};
    cls().scrollTop=0;
  };
  window.jae159Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'jae159-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e159',sectionId,data,caption:file.name});}await showEvent('e159');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e159')).find(p=>p.key===key);
  window.jae159Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('jae159-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e159');};
  window.jae159SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e159');};
  window.jae159RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e159');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1876913902983815394";
const supplied={
  "id": "e123",
  "title": "18th Pravasi Bharatiya Divas Convention — Odisha & Diaspora Engagement",
  "date": "2025-01-08",
  "endDate": "2025-01-10",
  "datePrecision": "day",
  "location": "Bhubaneswar, Odisha",
  "category": "Conferences & summits",
  "description": "The 18th Pravasi Bharatiya Divas Convention in Bhubaneswar brought together Indian diaspora members and national and state leadership during 8–10 January 2025. The supplied coverage records addresses on Odisha’s growth, investment facilitation and skills, the Prime Minister’s inauguration, and the President’s valedictory participation.\n\nThe supplied “high res pics” link repeats the unrelated Odisha–Singapore MoU post. This gallery therefore uses only photographs from the five PBD source posts; a separate high-resolution PBD collection has not been supplied.",
  "sections": [
    {
      "id": "pbd-eam",
      "title": "External Affairs Minister — Trade, Technology & Tourism",
      "date": "2025-01-08",
      "endDate": "2025-01-08",
      "location": "Bhubaneswar, Odisha",
      "description": "External Affairs Minister Dr. S. Jaishankar highlighted trade, technology and tourism — the 3Ts — at the 18th Pravasi Bharatiya Divas.",
      "photos": [
        {
          "key": "ja25-post-5-1.jpg",
          "data": "january-clearances-outreach-2025/post-5-1.jpg",
          "caption": "External Affairs Minister’s PBD address, 8 January",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1876913902983815394"
        }
      ]
    },
    {
      "id": "pbd-cm",
      "title": "Chief Minister — Vision for Samrudh Odisha",
      "date": "2025-01-08",
      "endDate": "2025-01-08",
      "location": "Bhubaneswar, Odisha",
      "description": "The Chief Minister addressed dignitaries and outlined the vision for Samrudh Odisha.",
      "photos": [
        {
          "key": "ja25-post-6-1.jpg",
          "data": "january-clearances-outreach-2025/post-6-1.jpg",
          "caption": "Chief Minister’s address at PBD, 8 January",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1876945220341785059"
        },
        {
          "key": "ja25-post-6-2.jpg",
          "data": "january-clearances-outreach-2025/post-6-2.jpg",
          "caption": "Chief Minister’s address at PBD, 8 January — view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1876945220341785059"
        },
        {
          "key": "ja25-post-6-3.jpg",
          "data": "january-clearances-outreach-2025/post-6-3.jpg",
          "caption": "Chief Minister’s address at PBD, 8 January — view 3",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1876945220341785059"
        }
      ]
    },
    {
      "id": "pbd-industry",
      "title": "MEA–Odisha Discussion — Investment & Skills",
      "date": "2025-01-08",
      "endDate": "2025-01-08",
      "location": "Bhubaneswar, Odisha",
      "description": "At the joint MEA–Odisha discussion, Industries & SDTE Minister Shri Sampad Chandra Swain highlighted ease of doing business, investment facilitation through GO SWIFT, skilled workers and new-age industries.",
      "photos": [
        {
          "key": "ja25-post-7-1.jpg",
          "data": "january-clearances-outreach-2025/post-7-1.jpg",
          "caption": "MEA–Odisha discussion at PBD, 8 January",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1876971464269746412"
        },
        {
          "key": "ja25-post-7-2.jpg",
          "data": "january-clearances-outreach-2025/post-7-2.jpg",
          "caption": "MEA–Odisha discussion at PBD, 8 January — view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1876971464269746412"
        }
      ]
    },
    {
      "id": "pbd-pm",
      "title": "Prime Minister’s Inauguration",
      "date": "2025-01-09",
      "endDate": "2025-01-09",
      "location": "Bhubaneswar, Odisha",
      "description": "Hon’ble Prime Minister Shri Narendra Modi inaugurated the convention in Bhubaneswar, highlighting the Indian diaspora’s shared aspirations for Viksit Bharat.",
      "photos": [
        {
          "key": "ja25-post-8-1.jpg",
          "data": "january-clearances-outreach-2025/post-8-1.jpg",
          "caption": "Prime Minister inaugurates the PBD convention, 9 January",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1877293350644076936"
        }
      ]
    },
    {
      "id": "pbd-valedictory",
      "title": "Day 3 — President’s Valedictory Participation",
      "date": "2025-01-10",
      "endDate": "2025-01-10",
      "location": "Bhubaneswar, Odisha",
      "description": "Hon’ble President Smt. Droupadi Murmu attended the Day 3 valedictory session with the Governor, Chief Minister, Cabinet Ministers and diaspora members. The source was published on 11 January; its Day 3 description places this session on 10 January within the 8–10 January convention.",
      "photos": [
        {
          "key": "ja25-post-9-1.jpg",
          "data": "january-clearances-outreach-2025/post-9-1.jpg",
          "caption": "President at the PBD valedictory — Day 3; coverage published 11 January",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1877912446348018086"
        }
      ]
    }
  ],
  "highlights": [],
  "contentVersion": 1,
  "officialSources": [
    {
      "label": "External Affairs Minister’s address",
      "url": "https://x.com/InvestInOdisha/status/1876913902983815394"
    },
    {
      "label": "Chief Minister’s address",
      "url": "https://x.com/InvestInOdisha/status/1876945220341785059"
    },
    {
      "label": "MEA–Odisha discussion",
      "url": "https://x.com/InvestInOdisha/status/1876971464269746412"
    },
    {
      "label": "Prime Minister’s inauguration",
      "url": "https://x.com/InvestInOdisha/status/1877293350644076936"
    },
    {
      "label": "Day 3 valedictory — post published 11 January",
      "url": "https://x.com/InvestInOdisha/status/1877912446348018086"
    }
  ],
  "coverPhoto": {
    "key": "ja25-post-5-1.jpg",
    "data": "january-clearances-outreach-2025/post-5-1.jpg",
    "caption": "External Affairs Minister’s PBD address, 8 January",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1876913902983815394"
  },
  "imageUrl": "january-clearances-outreach-2025/post-5-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/1876913902983815394"
};
const eventRecord=events.find(e=>e.id==='e123');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e123');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e123');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e123'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e123'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="jae123View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="jae123Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="jae123SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="jae123RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e123')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="jae123EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="jae123Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="jae123EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e123'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="jae123Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="jae123Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.jae123View=async key=>{viewing=await getPhotos('e123');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.jae123Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')jae123Step(1);if(ev.key==='ArrowLeft')jae123Step(-1);});
  window.jae123EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e123')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e123');};
    cls().scrollTop=0;
  };
  window.jae123Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'jae123-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e123',sectionId,data,caption:file.name});}await showEvent('e123');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e123')).find(p=>p.key===key);
  window.jae123Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('jae123-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e123');};
  window.jae123SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e123');};
  window.jae123RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e123');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1876308745829195883";
const supplied={
  "id": "e124",
  "title": "38th High-Level Clearance Authority Meeting",
  "date": "2025-01-06",
  "endDate": "2025-01-06",
  "datePrecision": "day",
  "location": "Odisha",
  "category": "Clearances & approvals",
  "description": "The 38th HLCA, led by Hon’ble Chief Minister Shri Mohan Charan Majhi, approved five projects involving proposed investment of ₹44,793.03 crore and employment potential of 23,005.\n\nThese are approval-stage investment and employment opportunities, not realised outcomes. The supplied post does not provide a project-wise breakdown.",
  "sections": [
    {
      "id": "hlca38-overview",
      "title": "Meeting Overview & Approvals",
      "date": "2025-01-06",
      "endDate": "2025-01-06",
      "location": "Odisha",
      "description": "Official coverage reports five project approvals, ₹44,793.03 crore proposed investment and 23,005 potential employment opportunities.",
      "photos": [
        {
          "key": "ja25-post-10-1.jpg",
          "data": "january-clearances-outreach-2025/post-10-1.jpg",
          "caption": "38th HLCA — official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1876308745829195883"
        }
      ]
    }
  ],
  "highlights": [
    {
      "value": "5",
      "label": "Approved projects"
    },
    {
      "value": "₹44,793.03 crore",
      "label": "Approved investment"
    },
    {
      "value": "23,005",
      "label": "Employment potential"
    }
  ],
  "contentVersion": 1,
  "officialSources": [
    {
      "label": "38th HLCA overview",
      "url": "https://x.com/InvestInOdisha/status/1876308745829195883"
    }
  ],
  "coverPhoto": {
    "key": "ja25-post-10-1.jpg",
    "data": "january-clearances-outreach-2025/post-10-1.jpg",
    "caption": "38th HLCA — official Invest Odisha photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1876308745829195883"
  },
  "imageUrl": "january-clearances-outreach-2025/post-10-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/1876308745829195883"
};
const eventRecord=events.find(e=>e.id==='e124');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e124');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e124');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e124'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e124'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="jae124View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="jae124Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="jae124SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="jae124RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e124')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="jae124EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="jae124Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="jae124EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e124'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="jae124Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="jae124Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.jae124View=async key=>{viewing=await getPhotos('e124');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.jae124Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')jae124Step(1);if(ev.key==='ArrowLeft')jae124Step(-1);});
  window.jae124EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e124')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e124');};
    cls().scrollTop=0;
  };
  window.jae124Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'jae124-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e124',sectionId,data,caption:file.name});}await showEvent('e124');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e124')).find(p=>p.key===key);
  window.jae124Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('jae124-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e124');};
  window.jae124SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e124');};
  window.jae124RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e124');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1875499247598240012";
const supplied={
  "id": "e125",
  "title": "Chief Minister Reviews Utkarsh Odisha Preparations",
  "date": "2025-01-04",
  "endDate": "2025-01-04",
  "datePrecision": "day",
  "location": "Odisha",
  "category": "Government meetings",
  "description": "Hon’ble Chief Minister Shri Mohan Charan Majhi reviewed progress on preparations and assigned tasks for Utkarsh Odisha — Make in Odisha 2025, with Industries Minister Shri Sampad Chandra Swain and secretaries of key departments.\n\nOfficial coverage records the Chief Minister’s satisfaction with progress and his call for close interdepartmental coordination to deliver the event successfully.",
  "sections": [
    {
      "id": "ja-review",
      "title": "Preparation & Interdepartmental Coordination Review",
      "date": "2025-01-04",
      "endDate": "2025-01-04",
      "location": "Odisha",
      "description": "The meeting assessed task implementation and progress towards the upcoming investment conclave. It is a preparatory review, not the main conclave itself.",
      "photos": [
        {
          "key": "ja25-post-11-1.jpg",
          "data": "january-clearances-outreach-2025/post-11-1.jpg",
          "caption": "Chief Minister’s Utkarsh Odisha preparation review, 4 January",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1875499247598240012"
        }
      ]
    }
  ],
  "highlights": [],
  "contentVersion": 1,
  "officialSources": [
    {
      "label": "Chief Minister’s preparation review",
      "url": "https://x.com/InvestInOdisha/status/1875499247598240012"
    }
  ],
  "coverPhoto": {
    "key": "ja25-post-11-1.jpg",
    "data": "january-clearances-outreach-2025/post-11-1.jpg",
    "caption": "Chief Minister’s Utkarsh Odisha preparation review, 4 January",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1875499247598240012"
  },
  "imageUrl": "january-clearances-outreach-2025/post-11-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/1875499247598240012"
};
const eventRecord=events.find(e=>e.id==='e125');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e125');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e125');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e125'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e125'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="jae125View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="jae125Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="jae125SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="jae125RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e125')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="jae125EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="jae125Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="jae125EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e125'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="jae125Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="jae125Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.jae125View=async key=>{viewing=await getPhotos('e125');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.jae125Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')jae125Step(1);if(ev.key==='ArrowLeft')jae125Step(-1);});
  window.jae125EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e125')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e125');};
    cls().scrollTop=0;
  };
  window.jae125Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'jae125-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e125',sectionId,data,caption:file.name});}await showEvent('e125');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e125')).find(p=>p.key===key);
  window.jae125Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('jae125-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e125');};
  window.jae125SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e125');};
  window.jae125RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e125');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1874492982940098655";
const supplied={
  "id": "e126",
  "title": "133rd State Level Single Window Clearance Authority Meeting",
  "date": "2025-01-01",
  "endDate": "2025-01-01",
  "datePrecision": "day",
  "location": "Odisha",
  "category": "Clearances & approvals",
  "description": "Chief Secretary Shri Manoj Ahuja led the 133rd SLSWCA on 1 January 2025. The official overview reports proposed investment approvals of ₹4,222.24 crore and employment potential of 14,497.\n\nSource discrepancy: the 11 supplied sector graphics list 25 proponents and sum to ₹5,300.56 crore and 17,947 potential jobs — ₹1,078.32 crore and 3,450 potential jobs above the overview. Both source sets are retained without silently reconciling them. The count of 25 refers to names listed in the sector graphics; the supplied overview post does not state a project count.\n\nThe sector graphics were published on 3 January; the meeting remains dated 1 January. Investment figures represent approvals and jobs represent potential employment, not realised outcomes.",
  "sections": [
    {
      "id": "s133-meeting",
      "title": "Meeting Overview",
      "date": "2025-01-01",
      "endDate": "2025-01-01",
      "location": "Odisha",
      "description": "The Chief Secretary-led 133rd SLSWCA announced ₹4,222.24 crore in investment approvals and 14,497 potential jobs. See the discrepancy note before using sector totals.",
      "photos": [
        {
          "key": "ja25-post-12-1.jpg",
          "data": "january-clearances-outreach-2025/post-12-1.jpg",
          "caption": "133rd SLSWCA — official meeting photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1874492982940098655"
        }
      ],
      "isMeeting": true
    },
    {
      "id": "s133-1",
      "title": "Chemicals & biofuels",
      "date": "2025-01-01",
      "endDate": "2025-01-01",
      "location": "Odisha",
      "description": "Sector totals and project proponents are reproduced from the supplied official graphic. District names are normalised for readability; the source’s project spelling is retained where uncertain.",
      "photos": [
        {
          "key": "ja25-post-13-1.jpg",
          "data": "january-clearances-outreach-2025/post-13-1.jpg",
          "caption": "Chemicals & biofuels — 133rd SLSWCA official sector graphic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1875079603213176954"
        }
      ],
      "investment": 184.23,
      "employment": 349,
      "projects": [
        {
          "name": "Utkal Hydrocarbon Pvt. Ltd.",
          "district": "Jharsuguda"
        },
        {
          "name": "Reliance Bio Energy Limited",
          "district": "Bargarh"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1875079603213176954"
    },
    {
      "id": "s133-2",
      "title": "Minerals, rare earth & steel beneficiation",
      "date": "2025-01-01",
      "endDate": "2025-01-01",
      "location": "Odisha",
      "description": "Sector totals and project proponents are reproduced from the supplied official graphic. District names are normalised for readability; the source’s project spelling is retained where uncertain.",
      "photos": [
        {
          "key": "ja25-post-13-2.jpg",
          "data": "january-clearances-outreach-2025/post-13-2.jpg",
          "caption": "Minerals, rare earth & steel beneficiation — 133rd SLSWCA official sector graphic — view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1875079603213176954"
        }
      ],
      "investment": 823,
      "employment": 700,
      "projects": [
        {
          "name": "Shyammetalics Specialty Alloys Pvt. Ltd.",
          "district": "Sambalpur"
        },
        {
          "name": "Lavanyabati Minerals Private Limited",
          "district": "Sundargarh"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1875079603213176954"
    },
    {
      "id": "s133-3",
      "title": "Infrastructure",
      "date": "2025-01-01",
      "endDate": "2025-01-01",
      "location": "Odisha",
      "description": "Sector totals and project proponents are reproduced from the supplied official graphic. District names are normalised for readability; the source’s project spelling is retained where uncertain.",
      "photos": [
        {
          "key": "ja25-post-13-3.jpg",
          "data": "january-clearances-outreach-2025/post-13-3.jpg",
          "caption": "Infrastructure — 133rd SLSWCA official sector graphic — view 3",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1875079603213176954"
        }
      ],
      "investment": 166.95,
      "employment": 1475,
      "projects": [
        {
          "name": "Maa Durga Coal & Minerals Pvt. Ltd.",
          "district": "Jharsuguda"
        },
        {
          "name": "Orissa Stevedores Ltd.",
          "district": "Angul"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1875079603213176954"
    },
    {
      "id": "s133-4",
      "title": "Metal & aluminium downstream",
      "date": "2025-01-01",
      "endDate": "2025-01-01",
      "location": "Odisha",
      "description": "Sector totals and project proponents are reproduced from the supplied official graphic. District names are normalised for readability; the source’s project spelling is retained where uncertain.",
      "photos": [
        {
          "key": "ja25-post-13-4.jpg",
          "data": "january-clearances-outreach-2025/post-13-4.jpg",
          "caption": "Metal & aluminium downstream — 133rd SLSWCA official sector graphic — view 4",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1875079603213176954"
        }
      ],
      "investment": 335,
      "employment": 1310,
      "projects": [
        {
          "name": "KSE Electricals Private Limited",
          "district": "Khordha"
        },
        {
          "name": "Lumino Industries Ltd.",
          "district": "Jharsuguda"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1875079603213176954"
    },
    {
      "id": "s133-5",
      "title": "Food & agro processing",
      "date": "2025-01-01",
      "endDate": "2025-01-01",
      "location": "Odisha",
      "description": "Sector totals and project proponents are reproduced from the supplied official graphic. District names are normalised for readability; the source’s project spelling is retained where uncertain.",
      "photos": [
        {
          "key": "ja25-post-14-1.jpg",
          "data": "january-clearances-outreach-2025/post-14-1.jpg",
          "caption": "Food & agro processing — 133rd SLSWCA official sector graphic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1875137186800312731"
        }
      ],
      "investment": 747.79,
      "employment": 1725,
      "projects": [
        {
          "name": "Swaji Nutritionals Private Limited",
          "district": "Khordha"
        },
        {
          "name": "Bisleri International Private Limited",
          "district": "Khordha"
        },
        {
          "name": "Tarangini Distilleries Pvt. Ltd.",
          "district": "Ganjam"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1875137186800312731"
    },
    {
      "id": "s133-6",
      "title": "Pharmaceuticals",
      "date": "2025-01-01",
      "endDate": "2025-01-01",
      "location": "Odisha",
      "description": "Sector totals and project proponents are reproduced from the supplied official graphic. District names are normalised for readability; the source’s project spelling is retained where uncertain.",
      "photos": [
        {
          "key": "ja25-post-14-2.jpg",
          "data": "january-clearances-outreach-2025/post-14-2.jpg",
          "caption": "Pharmaceuticals — 133rd SLSWCA official sector graphic — view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1875137186800312731"
        }
      ],
      "investment": 700,
      "employment": 2600,
      "projects": [
        {
          "name": "Hetro Labs Limited (as printed)",
          "district": "Ganjam"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1875137186800312731"
    },
    {
      "id": "s133-7",
      "title": "Textiles & apparel",
      "date": "2025-01-01",
      "endDate": "2025-01-01",
      "location": "Odisha",
      "description": "Sector totals and project proponents are reproduced from the supplied official graphic. District names are normalised for readability; the source’s project spelling is retained where uncertain.",
      "photos": [
        {
          "key": "ja25-post-14-3.jpg",
          "data": "january-clearances-outreach-2025/post-14-3.jpg",
          "caption": "Textiles & apparel — 133rd SLSWCA official sector graphic — view 3",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1875137186800312731"
        }
      ],
      "investment": 191.02,
      "employment": 5000,
      "projects": [
        {
          "name": "Adishtam Ventures Private Limited",
          "district": "Khordha"
        },
        {
          "name": "Anubhav Apparels Pvt. Ltd.",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1875137186800312731"
    },
    {
      "id": "s133-8",
      "title": "Tourism",
      "date": "2025-01-01",
      "endDate": "2025-01-01",
      "location": "Odisha",
      "description": "Sector totals and project proponents are reproduced from the supplied official graphic. District names are normalised for readability; the source’s project spelling is retained where uncertain.",
      "photos": [
        {
          "key": "ja25-post-14-4.jpg",
          "data": "january-clearances-outreach-2025/post-14-4.jpg",
          "caption": "Tourism — 133rd SLSWCA official sector graphic — view 4",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1875137186800312731"
        }
      ],
      "investment": 277,
      "employment": 1035,
      "projects": [
        {
          "name": "Birendra Hotels and Banquets Private Limited",
          "district": "Khordha"
        },
        {
          "name": "Jagannath Corporation Projects Pvt. Ltd.",
          "district": "Puri"
        },
        {
          "name": "Tavasya Hospitality Pvt. Ltd.",
          "district": "Khordha"
        },
        {
          "name": "KIIT Hospitality Pvt. Ltd.",
          "district": "Kandhamal"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1875137186800312731"
    },
    {
      "id": "s133-9",
      "title": "Rubber & packaging",
      "date": "2025-01-01",
      "endDate": "2025-01-01",
      "location": "Odisha",
      "description": "Sector totals and project proponents are reproduced from the supplied official graphic. District names are normalised for readability; the source’s project spelling is retained where uncertain.",
      "photos": [
        {
          "key": "ja25-post-15-1.jpg",
          "data": "january-clearances-outreach-2025/post-15-1.jpg",
          "caption": "Rubber & packaging — 133rd SLSWCA official sector graphic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1875206214059249906"
        }
      ],
      "investment": 640.98,
      "employment": 850,
      "projects": [
        {
          "name": "Century Industrial Products Private Limited",
          "district": "Khordha"
        },
        {
          "name": "Shalimar Glass Works Private Limited",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1875206214059249906"
    },
    {
      "id": "s133-10",
      "title": "Green energy equipment",
      "date": "2025-01-01",
      "endDate": "2025-01-01",
      "location": "Odisha",
      "description": "Sector totals and project proponents are reproduced from the supplied official graphic. District names are normalised for readability; the source’s project spelling is retained where uncertain.",
      "photos": [
        {
          "key": "ja25-post-15-2.jpg",
          "data": "january-clearances-outreach-2025/post-15-2.jpg",
          "caption": "Green energy equipment — 133rd SLSWCA official sector graphic — view 2",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1875206214059249906"
        }
      ],
      "investment": 380,
      "employment": 850,
      "projects": [
        {
          "name": "Sova Solar Limited",
          "district": "Angul"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1875206214059249906"
    },
    {
      "id": "s133-11",
      "title": "Plastics",
      "date": "2025-01-01",
      "endDate": "2025-01-01",
      "location": "Odisha",
      "description": "Sector totals and project proponents are reproduced from the supplied official graphic. District names are normalised for readability; the source’s project spelling is retained where uncertain.",
      "photos": [
        {
          "key": "ja25-post-15-3.jpg",
          "data": "january-clearances-outreach-2025/post-15-3.jpg",
          "caption": "Plastics — 133rd SLSWCA official sector graphic — view 3",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1875206214059249906"
        }
      ],
      "investment": 854.59,
      "employment": 2053,
      "projects": [
        {
          "name": "Ganesha Ecopet Private Limited",
          "district": "Ganjam"
        },
        {
          "name": "Rarean Fluid-tech Pvt. Ltd.",
          "district": "Nabarangpur"
        },
        {
          "name": "Technoplast Packaging Private Limited",
          "district": "Ganjam"
        },
        {
          "name": "Supreme Industries Ltd.",
          "district": "Cuttack"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1875206214059249906"
    }
  ],
  "highlights": [
    {
      "value": "₹4,222.24 crore",
      "label": "Overview approved investment"
    },
    {
      "value": "14,497",
      "label": "Overview employment potential"
    },
    {
      "value": "25",
      "label": "Proponents listed in supplied sector graphics"
    }
  ],
  "contentVersion": 1,
  "breakdownStatus": "source-discrepancy",
  "breakdownTotals": {
    "investment": 5300.56,
    "employment": 17947,
    "projects": 25
  },
  "officialSources": [
    {
      "label": "133rd SLSWCA overview",
      "url": "https://x.com/InvestInOdisha/status/1874492982940098655"
    },
    {
      "label": "Sector approval graphics — post 13",
      "url": "https://x.com/InvestInOdisha/status/1875079603213176954"
    },
    {
      "label": "Sector approval graphics — post 14",
      "url": "https://x.com/InvestInOdisha/status/1875137186800312731"
    },
    {
      "label": "Sector approval graphics — post 15",
      "url": "https://x.com/InvestInOdisha/status/1875206214059249906"
    }
  ],
  "coverPhoto": {
    "key": "ja25-post-12-1.jpg",
    "data": "january-clearances-outreach-2025/post-12-1.jpg",
    "caption": "133rd SLSWCA — official meeting photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1874492982940098655"
  },
  "imageUrl": "january-clearances-outreach-2025/post-12-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/1874492982940098655"
};
const eventRecord=events.find(e=>e.id==='e126');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e126');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e126');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e126'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
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
    if(id!=='e126'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="s133View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="s133Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="s133SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="s133RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Sector approvals</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e126')">Edit overview & highlights</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Official overview post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="133rd SLSWCA meeting and sector approvals">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Section ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="s133EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${sectorDetails(s)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this sector</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="s133Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="s133EditSection()">+ Add sector</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal','slswca-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e126'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="s133Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="s133Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.s133View=async key=>{viewing=await getPhotos('e126');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.s133Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')s133Step(1);if(ev.key==='ArrowLeft')s133Step(-1);});
  window.s133EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">133rd SLSWCA</div><h2>${id?'Edit sector':'Add sector'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div>${s.isMeeting?'':`<div class="formgrid"><div class="field"><label>Approved investment (₹ crore)</label><input name="sectorInvestment" type="number" min="0" step="0.01" required value="${esc(String(s.investment||0))}"></div><div class="field"><label>Employment potential</label><input name="sectorEmployment" type="number" min="0" step="1" required value="${esc(String(s.employment||0))}"></div></div><div class="field"><label>Projects — one per line: proponent | district</label><textarea name="sectorProjects">${esc((s.projects||[]).map(p=>p.name+" | "+p.district).join("\n"))}</textarea></div>`}<div class="chem-tools"><button class="btn red">Save sector</button><button type="button" class="btn" onclick="showEvent('e126')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!s.isMeeting){s.investment=Number(f.get('sectorInvestment')||0);s.employment=Number(f.get('sectorEmployment')||0);s.projects=String(f.get('sectorProjects')||'').split(/\n/).filter(x=>x.trim()).map(x=>{const [name,...district]=x.split('|');return {name:name.trim(),district:district.join('|').trim()};});}if(!id)current().sections.push(s);save();showEvent('e126');};
    cls().scrollTop=0;
  };
  window.s133Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'s133-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e126',sectionId,data,caption:file.name});}await showEvent('e126');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e126')).find(p=>p.key===key);
  window.s133Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('s133-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e126');};
  window.s133SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e126');};
  window.s133RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e126');};
  render();
})();

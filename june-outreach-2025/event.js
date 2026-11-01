/* June 2025 updates and recoverable achievements/session merge. */
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1938182682493784330";
 const supplied={
  "id": "e92",
  "title": "Chief Secretary Meets Tirupur Exporters’ Association Delegation",
  "date": "2025-06-26",
  "endDate": "2025-06-26",
  "location": "Odisha",
  "category": "Industry engagements",
  "description": "A delegation from the Tirupur Exporters’ Association met Chief Secretary Shri Manoj Ahuja to explore opportunities for Odisha’s textile and apparel ecosystem. The delegation expressed interest in investment and collaboration.\n\nThe post records exploratory engagement, not a signed investment agreement.",
  "sections": [
    {
      "id": "meeting",
      "title": "Textile & Apparel Investment Collaboration",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The meeting explored collaboration and development of a stronger textile and apparel ecosystem in Odisha.",
      "photos": [
        {
          "key": "jun25-1-1",
          "data": "june-outreach-2025/post-1-1.jpg",
          "caption": "Textile & Apparel Investment Collaboration · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1938182682493784330"
        }
      ]
    }
  ],
  "highlights": [],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1938182682493784330",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1938182682493784330",
      "url": "https://x.com/InvestInOdisha/status/1938182682493784330"
    }
  ],
  "coverPhoto": {
    "key": "jun25-1-1",
    "data": "june-outreach-2025/post-1-1.jpg",
    "caption": "Textile & Apparel Investment Collaboration · official Invest Odisha photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1938182682493784330"
  },
  "imageUrl": "june-outreach-2025/post-1-1.jpg",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e92');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e92');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e92');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e92'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e92'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="june92View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="june92Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="june92SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="june92RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e92')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="june92EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="june92Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="june92EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e92'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="june92Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="june92Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.june92View=async key=>{viewing=await getPhotos('e92');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.june92Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')june92Step(1);if(ev.key==='ArrowLeft')june92Step(-1);});
  window.june92EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e92')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e92');};
    cls().scrollTop=0;
  };
  window.june92Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'june92-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e92',sectionId,data,caption:file.name});}await showEvent('e92');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e92')).find(p=>p.key===key);
  window.june92Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('june92-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e92');};
  window.june92SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e92');};
  window.june92RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e92');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1934666399651438764";
 const supplied={
  "id": "e93",
  "title": "41st HLCA — Major Industrial Investment Approvals",
  "date": "2025-06-16",
  "endDate": "2025-06-16",
  "location": "Bhubaneswar, Odisha",
  "category": "Clearances & approvals",
  "description": "Chief Minister Shri Mohan Charan Majhi chaired the 41st High-Level Clearance Authority meeting, approving investment proposals worth ₹1,51,239.50 crore with employment potential of 60,200.\n\nThe figures relate to approved proposals and potential jobs, not investment already realised or people already employed. No unsupported project-level breakdown is inferred from the meeting photographs.",
  "sections": [
    {
      "id": "meeting",
      "title": "41st HLCA Meeting",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The Chief Minister chaired the major industrial clearances meeting. The official overview reports ₹1,51,239.50 crore in approved investment and 60,200 potential jobs.",
      "photos": [
        {
          "key": "jun25-2-1",
          "data": "june-outreach-2025/post-2-1.jpg",
          "caption": "41st HLCA Meeting · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1934666399651438764"
        },
        {
          "key": "jun25-2-2",
          "data": "june-outreach-2025/post-2-2.jpg",
          "caption": "41st HLCA Meeting · official Invest Odisha photograph · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1934666399651438764"
        }
      ]
    }
  ],
  "highlights": [
    {
      "value": "₹1,51,239.50 crore",
      "label": "Approved investment"
    },
    {
      "value": "60,200",
      "label": "Employment potential"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1934666399651438764",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1934666399651438764",
      "url": "https://x.com/InvestInOdisha/status/1934666399651438764"
    }
  ],
  "coverPhoto": {
    "key": "jun25-2-1",
    "data": "june-outreach-2025/post-2-1.jpg",
    "caption": "41st HLCA Meeting · official Invest Odisha photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1934666399651438764"
  },
  "imageUrl": "june-outreach-2025/post-2-1.jpg",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e93');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e93');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e93');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e93'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e93'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="june93View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="june93Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="june93SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="june93RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e93')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="june93EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="june93Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="june93EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e93'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="june93Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="june93Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.june93View=async key=>{viewing=await getPhotos('e93');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.june93Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')june93Step(1);if(ev.key==='ArrowLeft')june93Step(-1);});
  window.june93EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e93')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e93');};
    cls().scrollTop=0;
  };
  window.june93Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'june93-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e93',sectionId,data,caption:file.name});}await showEvent('e93');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e93')).find(p=>p.key===key);
  window.june93Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('june93-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e93');};
  window.june93SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e93');};
  window.june93RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e93');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1933477449477533973";
 const supplied={
  "id": "e94",
  "title": "137th SLSWCA — Investment Approvals",
  "date": "2025-06-13",
  "endDate": "2025-06-13",
  "location": "Bhubaneswar, Odisha",
  "category": "Clearances & approvals",
  "description": "Chief Secretary Shri Manoj Ahuja chaired the 137th State Level Single Window Clearance Authority meeting, approving 17 projects across 11 districts with investment of ₹3,878.86 crore and employment potential of 10,584.\n\nThe eight supplied sector graphics list 16 projects totalling ₹3,825.86 crore and 10,468 potential jobs. The breakdown is partial: one project, ₹53 crore and 116 potential jobs remain unallocated in the supplied graphics. No missing proponent or sector has been invented.\n\nSector posts published on 15–16 June support the 13 June approval meeting. Investment values describe approved proposals and employment describes potential, not realised outcomes.",
  "sections": [
    {
      "id": "meeting",
      "title": "137th SLSWCA Meeting",
      "date": "2025-06-13",
      "endDate": "",
      "location": "",
      "description": "Chief Secretary Shri Manoj Ahuja chaired the meeting. The official headline totals are retained separately from the partial supplied sector breakdown.",
      "photos": [
        {
          "key": "jun25-3-1",
          "data": "june-outreach-2025/post-3-1.jpg",
          "caption": "137th SLSWCA Meeting · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1933477449477533973"
        }
      ],
      "isMeeting": true,
      "sourceUrl": "https://x.com/InvestInOdisha/status/1933477449477533973"
    },
    {
      "id": "sector-1",
      "title": "Textile, Apparel & Technical Textile",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Approved proposal value, employment potential and proponents reproduced from the official sector graphic. Coverage labels follow the source.",
      "photos": [
        {
          "key": "jun25-4-1",
          "data": "june-outreach-2025/post-4-1.jpg",
          "caption": "Textile, Apparel & Technical Textile · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1934102696707133679"
        }
      ],
      "investment": 936,
      "employment": 1875,
      "projects": [
        {
          "name": "MAS India Clothing Private Limited",
          "district": "Khordha"
        },
        {
          "name": "Isolloyd Engineering Technologies Limited",
          "district": "Jajpur"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1934102696707133679"
    },
    {
      "id": "sector-2",
      "title": "Plastics",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Approved proposal value, employment potential and proponents reproduced from the official sector graphic. Coverage labels follow the source.",
      "photos": [
        {
          "key": "jun25-5-1",
          "data": "june-outreach-2025/post-5-1.jpg",
          "caption": "Plastics · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1934232376118579687"
        }
      ],
      "investment": 1225.08,
      "employment": 3840,
      "projects": [
        {
          "name": "Greenwave Circularity Private Limited",
          "district": "Khordha"
        },
        {
          "name": "Gurumaharaj Mining & Industries Private Limited",
          "district": "Khordha"
        },
        {
          "name": "The Supreme Industries Limited",
          "district": "Khuntuni"
        },
        {
          "name": "Lucro Plastecycle Private Limited",
          "district": "Jagatsinghpur"
        },
        {
          "name": "Royal Touch Fablon Private Limited",
          "district": "Balasore"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1934232376118579687"
    },
    {
      "id": "sector-3",
      "title": "Logistics & Infrastructure",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Approved proposal value, employment potential and proponents reproduced from the official sector graphic. Coverage labels follow the source.",
      "photos": [
        {
          "key": "jun25-6-1",
          "data": "june-outreach-2025/post-6-1.jpg",
          "caption": "Logistics & Infrastructure · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1934472280459079873"
        }
      ],
      "investment": 436.2,
      "employment": 3100,
      "projects": [
        {
          "name": "Alpha Coal Beneficiation and Infrastructure LLP",
          "district": "Sundargarh"
        },
        {
          "name": "Bhubaneswar Logipark Private Limited",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1934472280459079873"
    },
    {
      "id": "sector-4",
      "title": "Food Processing, Beverages & Allied Sectors",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Approved proposal value, employment potential and proponents reproduced from the official sector graphic. Coverage labels follow the source.",
      "photos": [
        {
          "key": "jun25-7-1",
          "data": "june-outreach-2025/post-7-1.jpg",
          "caption": "Food Processing, Beverages & Allied Sectors · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1934494950449987727"
        }
      ],
      "investment": 162.38,
      "employment": 370,
      "projects": [
        {
          "name": "Ganesh Consumer Products Limited",
          "district": "Khordha"
        },
        {
          "name": "Ranisati Green Biofuels Private Limited",
          "district": "Boudh"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1934494950449987727"
    },
    {
      "id": "sector-5",
      "title": "ESDM",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Approved proposal value, employment potential and proponents reproduced from the official sector graphic. Coverage labels follow the source.",
      "photos": [
        {
          "key": "jun25-8-1",
          "data": "june-outreach-2025/post-8-1.jpg",
          "caption": "ESDM · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1934519474612494496"
        }
      ],
      "investment": 300.46,
      "employment": 730,
      "projects": [
        {
          "name": "Heraeus Technologies India Private Limited",
          "district": "Khordha"
        },
        {
          "name": "Addsoft Technologies Pvt Ltd",
          "district": "Cuttack"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1934519474612494496"
    },
    {
      "id": "sector-6",
      "title": "Power & Renewable Energy",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Approved proposal value, employment potential and proponents reproduced from the official sector graphic. Coverage labels follow the source.",
      "photos": [
        {
          "key": "jun25-9-1",
          "data": "june-outreach-2025/post-9-1.jpg",
          "caption": "Power & Renewable Energy · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1934551617069834462"
        }
      ],
      "investment": 310.75,
      "employment": 128,
      "projects": [
        {
          "name": "Iron Triangle Limited",
          "district": "Balangir"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1934551617069834462"
    },
    {
      "id": "sector-7",
      "title": "Chemicals & Chemical Products",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Approved proposal value, employment potential and proponents reproduced from the official sector graphic. Coverage labels follow the source.",
      "photos": [
        {
          "key": "jun25-10-1",
          "data": "june-outreach-2025/post-10-1.jpg",
          "caption": "Chemicals & Chemical Products · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1934576792905404574"
        }
      ],
      "investment": 54.99,
      "employment": 75,
      "projects": [
        {
          "name": "Special Blasts Limited",
          "district": "Angul"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1934576792905404574"
    },
    {
      "id": "sector-8",
      "title": "Steel",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Approved proposal value, employment potential and proponents reproduced from the official sector graphic. Coverage labels follow the source.",
      "photos": [
        {
          "key": "jun25-11-1",
          "data": "june-outreach-2025/post-11-1.jpg",
          "caption": "Steel · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1934579786585964734"
        }
      ],
      "investment": 400,
      "employment": 350,
      "projects": [
        {
          "name": "Samaleshwari Ferrometals Private Limited",
          "district": "Sambalpur"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1934579786585964734"
    }
  ],
  "highlights": [
    {
      "value": "17",
      "label": "Projects approved"
    },
    {
      "value": "₹3,878.86 crore",
      "label": "Approved investment"
    },
    {
      "value": "10,584",
      "label": "Employment potential"
    },
    {
      "value": "11",
      "label": "Districts covered"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1933477449477533973",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1933477449477533973",
      "url": "https://x.com/InvestInOdisha/status/1933477449477533973"
    },
    {
      "label": "Official Invest Odisha post · 1934102696707133679",
      "url": "https://x.com/InvestInOdisha/status/1934102696707133679"
    },
    {
      "label": "Official Invest Odisha post · 1934232376118579687",
      "url": "https://x.com/InvestInOdisha/status/1934232376118579687"
    },
    {
      "label": "Official Invest Odisha post · 1934472280459079873",
      "url": "https://x.com/InvestInOdisha/status/1934472280459079873"
    },
    {
      "label": "Official Invest Odisha post · 1934494950449987727",
      "url": "https://x.com/InvestInOdisha/status/1934494950449987727"
    },
    {
      "label": "Official Invest Odisha post · 1934519474612494496",
      "url": "https://x.com/InvestInOdisha/status/1934519474612494496"
    },
    {
      "label": "Official Invest Odisha post · 1934551617069834462",
      "url": "https://x.com/InvestInOdisha/status/1934551617069834462"
    },
    {
      "label": "Official Invest Odisha post · 1934576792905404574",
      "url": "https://x.com/InvestInOdisha/status/1934576792905404574"
    },
    {
      "label": "Official Invest Odisha post · 1934579786585964734",
      "url": "https://x.com/InvestInOdisha/status/1934579786585964734"
    }
  ],
  "coverPhoto": {
    "key": "jun25-3-1",
    "data": "june-outreach-2025/post-3-1.jpg",
    "caption": "137th SLSWCA Meeting · official Invest Odisha photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1933477449477533973"
  },
  "imageUrl": "june-outreach-2025/post-3-1.jpg",
  "contentVersion": 1,
  "breakdownStatus": "partial",
  "breakdownTotals": {
    "projects": 16,
    "investment": 3825.86,
    "employment": 10468
  },
  "sourceUrls": [
    "https://x.com/InvestInOdisha/status/1933477449477533973",
    "https://x.com/InvestInOdisha/status/1934102696707133679",
    "https://x.com/InvestInOdisha/status/1934232376118579687",
    "https://x.com/InvestInOdisha/status/1934472280459079873",
    "https://x.com/InvestInOdisha/status/1934494950449987727",
    "https://x.com/InvestInOdisha/status/1934519474612494496",
    "https://x.com/InvestInOdisha/status/1934551617069834462",
    "https://x.com/InvestInOdisha/status/1934576792905404574",
    "https://x.com/InvestInOdisha/status/1934579786585964734"
  ]
};
const eventRecord=events.find(e=>e.id==='e94');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e94');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e94');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e94'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
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
    if(id!=='e94'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="s137View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="s137Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="s137SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="s137RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Sector approvals</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e94')">Edit overview & highlights</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Official overview post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="137th SLSWCA meeting and sector approvals">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Section ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="s137EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${sectorDetails(s)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this sector</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="s137Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="s137EditSection()">+ Add sector</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal','slswca-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e94'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="s137Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="s137Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.s137View=async key=>{viewing=await getPhotos('e94');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.s137Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')s137Step(1);if(ev.key==='ArrowLeft')s137Step(-1);});
  window.s137EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">137th SLSWCA</div><h2>${id?'Edit sector':'Add sector'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div>${s.isMeeting?'':`<div class="formgrid"><div class="field"><label>Approved investment (₹ crore)</label><input name="sectorInvestment" type="number" min="0" step="0.01" required value="${esc(String(s.investment||0))}"></div><div class="field"><label>Employment potential</label><input name="sectorEmployment" type="number" min="0" step="1" required value="${esc(String(s.employment||0))}"></div></div><div class="field"><label>Projects — one per line: proponent | district</label><textarea name="sectorProjects">${esc((s.projects||[]).map(p=>p.name+" | "+p.district).join("\n"))}</textarea></div>`}<div class="chem-tools"><button class="btn red">Save sector</button><button type="button" class="btn" onclick="showEvent('e94')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!s.isMeeting){s.investment=Number(f.get('sectorInvestment')||0);s.employment=Number(f.get('sectorEmployment')||0);s.projects=String(f.get('sectorProjects')||'').split(/\n/).filter(x=>x.trim()).map(x=>{const [name,...district]=x.split('|');return {name:name.trim(),district:district.join('|').trim()};});}if(!id)current().sections.push(s);save();showEvent('e94');};
    cls().scrollTop=0;
  };
  window.s137Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'s137-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e94',sectionId,data,caption:file.name});}await showEvent('e94');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e94')).find(p=>p.key===key);
  window.s137Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('s137-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e94');};
  window.s137SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e94');};
  window.s137RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e94');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://drive.google.com/drive/folders/1ZBr70Aqwql3dMQj4SDHnnCAXVRXDXUtX";
 const supplied={
  "id": "e95",
  "title": "One Year of Industrial Progress — Achievements Wall, Industry Interaction & Review",
  "date": "2025-06-08",
  "endDate": "2025-06-09",
  "location": "Bhubaneswar, Odisha",
  "category": "Industry engagements",
  "description": "The first-year industrial progress programme brought together the achievements display, the Chief Minister’s interaction with industry representatives and an Annual Industry Review. Chief Minister Shri Mohan Charan Majhi was joined by Industries Minister Shri Sampad Chandra Swain and MSME Minister Shri Gokulananda Mallik.\n\nACS Industries Shri Hemant Sharma presented an assessment of the past year and priorities for the year ahead. Leadership remarks focused on industrial delivery, policy direction, inclusive growth and the MSME ecosystem.\n\nThe interactive-session and review posts are dated 8 June; the programme recap was published on 9 June. These are grouped in one 8–9 June entry, with the former separate Interactive Session/Review entry merged here.",
  "sections": [
    {
      "id": "wall",
      "title": "One Year of Industrial Progress — Achievements Display",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The supplied collection documents a first-year achievements wall alongside the interactive session programme. It presents the government’s industrial journey and investor engagements.",
      "photos": [
        {
          "key": "jun25-wall-1",
          "data": "june-outreach-2025/wall-1.jpg",
          "caption": "One-year industry achievements display",
          "sourceUrl": "https://drive.google.com/file/d/1o2jQ2dwFqkebtDA6cI1AKF0NJ6dJvyeE/view"
        },
        {
          "key": "jun25-wall-2",
          "data": "june-outreach-2025/wall-2.jpg",
          "caption": "Interactive session programme signage",
          "sourceUrl": "https://drive.google.com/file/d/1bQIuMlcMGT9OXUlR8S2x81vAqi_mH544/view"
        }
      ]
    },
    {
      "id": "interactive",
      "title": "Chief Minister’s Interactive Session with Industry",
      "date": "2025-06-08",
      "endDate": "2025-06-08",
      "location": "",
      "description": "Chief Minister Shri Mohan Charan Majhi led the interaction, joined by Industries Minister Shri Sampad Chandra Swain and MSME Minister Shri Gokulananda Mallik. The discussion reflected on the first year’s progress and priorities.",
      "photos": [
        {
          "key": "jun25-16-1",
          "data": "june-outreach-2025/post-16-1.jpg",
          "caption": "Chief Minister’s interactive session with industry",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1931652213593796939"
        },
        {
          "key": "jun25-16-2",
          "data": "june-outreach-2025/post-16-2.jpg",
          "caption": "Chief Minister’s interactive session with industry · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1931652213593796939"
        },
        {
          "key": "jun25-wall-3",
          "data": "june-outreach-2025/wall-3.jpg",
          "caption": "Arrival at the industry interaction",
          "sourceUrl": "https://drive.google.com/file/d/1j_KtmYy5bFv-mhq2K4155SyZbJcjtxsg/view"
        },
        {
          "key": "jun25-wall-4",
          "data": "june-outreach-2025/wall-4.jpg",
          "caption": "Chief Minister with industry representatives",
          "sourceUrl": "https://drive.google.com/file/d/1TjeIdQPWz4QN7alsVHW6RUMXl_gouM9B/view"
        },
        {
          "key": "jun25-wall-5",
          "data": "june-outreach-2025/wall-5.jpg",
          "caption": "Participants at the industry interaction",
          "sourceUrl": "https://drive.google.com/file/d/1ym-vs4wmXAuG9cwq_XfHxoK4UMNGUghv/view"
        },
        {
          "key": "jun25-wall-6",
          "data": "june-outreach-2025/wall-6.jpg",
          "caption": "Industries Minister addresses the industry interaction",
          "sourceUrl": "https://drive.google.com/file/d/1gon0EhJIk-NUDd43weAmZ-VtWfI43dWj/view"
        }
      ]
    },
    {
      "id": "ministers",
      "title": "Industries & MSME Ministers’ Addresses",
      "date": "2025-06-08",
      "endDate": "2025-06-08",
      "location": "",
      "description": "The Industries Minister highlighted speed, scale and policy direction in industrial progress. The MSME Minister reaffirmed support for an inclusive, sustainable MSME ecosystem.",
      "photos": [
        {
          "key": "jun25-15-1",
          "data": "june-outreach-2025/post-15-1.jpg",
          "caption": "Industries & MSME Ministers’ Addresses · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1931658617306157451"
        },
        {
          "key": "jun25-15-2",
          "data": "june-outreach-2025/post-15-2.jpg",
          "caption": "Industries & MSME Ministers’ Addresses · official Invest Odisha photograph · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1931658617306157451"
        },
        {
          "key": "jun25-14-1",
          "data": "june-outreach-2025/post-14-1.jpg",
          "caption": "Industries & MSME Ministers’ Addresses · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1931677448430879226"
        },
        {
          "key": "jun25-14-2",
          "data": "june-outreach-2025/post-14-2.jpg",
          "caption": "Industries & MSME Ministers’ Addresses · official Invest Odisha photograph · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1931677448430879226"
        }
      ]
    },
    {
      "id": "review",
      "title": "Annual Industry Review & Forward Roadmap",
      "date": "2025-06-08",
      "endDate": "2025-06-08",
      "location": "",
      "description": "ACS Industries Shri Hemant Sharma presented the Annual Industry Review to the Chief Minister, covering the past year’s achievements, lessons and the roadmap for the year ahead.",
      "photos": [
        {
          "key": "jun25-13-1",
          "data": "june-outreach-2025/post-13-1.jpg",
          "caption": "Annual Industry Review & Forward Roadmap · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1931719000309760251"
        },
        {
          "key": "jun25-13-2",
          "data": "june-outreach-2025/post-13-2.jpg",
          "caption": "Annual Industry Review & Forward Roadmap · official Invest Odisha photograph · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1931719000309760251"
        }
      ]
    }
  ],
  "highlights": [],
  "sourceUrl": "https://drive.google.com/drive/folders/1ZBr70Aqwql3dMQj4SDHnnCAXVRXDXUtX",
  "officialSources": [
    {
      "label": "User-supplied programme photographs",
      "url": "https://drive.google.com/drive/folders/1ZBr70Aqwql3dMQj4SDHnnCAXVRXDXUtX"
    },
    {
      "label": "Official Invest Odisha post · 1931954086871732513",
      "url": "https://x.com/InvestInOdisha/status/1931954086871732513"
    },
    {
      "label": "Official Invest Odisha post · 1931719000309760251",
      "url": "https://x.com/InvestInOdisha/status/1931719000309760251"
    },
    {
      "label": "Official Invest Odisha post · 1931677448430879226",
      "url": "https://x.com/InvestInOdisha/status/1931677448430879226"
    },
    {
      "label": "Official Invest Odisha post · 1931658617306157451",
      "url": "https://x.com/InvestInOdisha/status/1931658617306157451"
    },
    {
      "label": "Official Invest Odisha post · 1931652213593796939",
      "url": "https://x.com/InvestInOdisha/status/1931652213593796939"
    }
  ],
  "coverPhoto": {
    "key": "jun25-wall-1",
    "data": "june-outreach-2025/wall-1.jpg",
    "caption": "One-year industry achievements display",
    "sourceUrl": "https://drive.google.com/file/d/1o2jQ2dwFqkebtDA6cI1AKF0NJ6dJvyeE/view"
  },
  "imageUrl": "june-outreach-2025/wall-1.jpg",
  "contentVersion": 1,
  "mergedEventIds": [
    "e96"
  ]
};

  // Recoverable merge: archive source records and surface their notes/media.
  const oldSession=events.find(e=>e.id==='e96'),mergeTarget=events.find(e=>e.id==='e95');
  if(oldSession && mergeTarget){
    const destination=(mergeTarget.contentVersion||0)<VERSION?supplied:mergeTarget;
    destination.mergedEventRecords=destination.mergedEventRecords||[];
    const prior=(mergeTarget.contentVersion||0)<VERSION?[mergeTarget,oldSession]:[oldSession];
    for(const old of prior){
      const snapshot=JSON.parse(JSON.stringify(old));
      if(!destination.mergedEventRecords.some(x=>JSON.stringify(x)===JSON.stringify(snapshot)))destination.mergedEventRecords.push(snapshot);
      const notes=[old.description,...(old.sections||[]).map(s=>s.description)].filter(Boolean).join('\n\n');
      const media=[old.coverPhoto,...(old.sections||[]).flatMap(s=>s.photos||[]),...(old.images||[])].filter(Boolean).map((p,i)=>typeof p==='string'?{key:'legacy-'+old.id+'-'+i,data:p,caption:'Previously saved photograph'}:{...p,key:p.key||'legacy-'+old.id+'-'+i,data:p.data||p.url}).filter(p=>p.data);
      if(notes||media.length)destination.sections.push({id:'preserved-'+old.id+'-'+destination.mergedEventRecords.length,title:'Previously saved notes — '+old.title,date:old.date||'',location:old.location||'',description:notes,photos:[...new Map(media.map(p=>[p.key,p])).values()]});
    }
    destination.mergedEventIds=[...new Set([...(destination.mergedEventIds||[]),'e96'])];
    events.splice(events.indexOf(oldSession),1);
    if(destination===mergeTarget)save();
  }
  const oldSeed=SEED_EVENTS.findIndex(e=>e.id==='e96');if(oldSeed>=0)SEED_EVENTS.splice(oldSeed,1);
  // Keep legacy uploaded photos in place in IndexedDB; query both event IDs.
  const mergedLocalPhotos=async id=>[...(await localPhotos(id)),...(await localPhotos('e96')).map(p=>({...p,sectionId:'interactive'}))];
  const eventRecord=events.find(e=>e.id==='e95');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e95');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e95');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e95'?[...eventPhotos(current()||supplied),...(await mergedLocalPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id==='e96')id='e95';
    if(id!=='e95'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await mergedLocalPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="june95View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="june95Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="june95SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="june95RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e95')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Full photo collection ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="june95EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="june95Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="june95EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    if(id==='e96')id='e95';
    resetModal();
    baseEditor(id);
    if(id!=='e95'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="june95Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="june95Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.june95View=async key=>{viewing=await getPhotos('e95');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.june95Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')june95Step(1);if(ev.key==='ArrowLeft')june95Step(-1);});
  window.june95EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e95')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e95');};
    cls().scrollTop=0;
  };
  window.june95Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'june95-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e95',sectionId,data,caption:file.name});}await showEvent('e95');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e95')).find(p=>p.key===key);
  window.june95Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('june95-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e95');};
  window.june95SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e95');};
  window.june95RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original in Google Drive will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e95');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1930450874394128422";
 const supplied={
  "id": "e97",
  "title": "Ganjam Industrial Programme — Groundbreaking, Site Visits & CEO Roundtable",
  "date": "2025-06-05",
  "endDate": "2025-06-05",
  "location": "Chatrapur, Ganjam, Odisha",
  "category": "Industrial programmes",
  "description": "Chief Minister Shri Mohan Charan Majhi led the groundbreaking programme at Chatrapur, Ganjam, joined by Industries Minister Shri Sampad Chandra Swain and other dignitaries. The advance announcement identified 12 industrial projects.\n\nThe programme also included visits to TATA SEZ, Deepak Fertiliser and the Utility Corridor, alongside engagement with industry leaders. A supporting post published on 6 June records the Chief Minister-led CEO roundtable with the Industries and MSME Ministers, involving leaders from Adani Ports, Tata Steel SEZ, Avaada and others.\n\nThe groundbreaking marks a project milestone, not completion of all facilities or realised employment. The supporting roundtable post’s publication date is distinguished from the 5 June programme.",
  "sections": [
    {
      "id": "groundbreaking",
      "title": "Groundbreaking Ceremony at Chatrapur",
      "date": "2025-06-05",
      "endDate": "2025-06-05",
      "location": "",
      "description": "The Chief Minister led the groundbreaking ceremony for the industrial programme. The advance post identified 12 projects, while subsequent posts document the ceremony and leadership participation.",
      "photos": [
        {
          "key": "jun25-17-1",
          "data": "june-outreach-2025/post-17-1.jpg",
          "caption": "Groundbreaking Ceremony at Chatrapur · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1930450874394128422"
        },
        {
          "key": "jun25-19-1",
          "data": "june-outreach-2025/post-19-1.jpg",
          "caption": "Groundbreaking Ceremony at Chatrapur · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1930565458324787348"
        },
        {
          "key": "jun25-19-2",
          "data": "june-outreach-2025/post-19-2.jpg",
          "caption": "Groundbreaking Ceremony at Chatrapur · official Invest Odisha photograph · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1930565458324787348"
        }
      ]
    },
    {
      "id": "addresses",
      "title": "Leadership Addresses — Inclusive Industrial Development",
      "date": "2025-06-05",
      "endDate": "2025-06-05",
      "location": "",
      "description": "The Chief Minister and Industries Minister highlighted Ganjam’s infrastructure, talent and opportunities for inclusive regional industrial growth.",
      "photos": [
        {
          "key": "jun25-18-1",
          "data": "june-outreach-2025/post-18-1.jpg",
          "caption": "Leadership Addresses — Inclusive Industrial Development · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1930549778716197292"
        },
        {
          "key": "jun25-18-2",
          "data": "june-outreach-2025/post-18-2.jpg",
          "caption": "Leadership Addresses — Inclusive Industrial Development · official Invest Odisha photograph · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1930549778716197292"
        },
        {
          "key": "jun25-20-1",
          "data": "june-outreach-2025/post-20-1.jpg",
          "caption": "Leadership Addresses — Inclusive Industrial Development · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1930582972790686059"
        },
        {
          "key": "jun25-20-2",
          "data": "june-outreach-2025/post-20-2.jpg",
          "caption": "Leadership Addresses — Inclusive Industrial Development · official Invest Odisha photograph · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1930582972790686059"
        }
      ]
    },
    {
      "id": "visits",
      "title": "TATA SEZ, Deepak Fertiliser & Utility Corridor Visits",
      "date": "2025-06-05",
      "endDate": "2025-06-05",
      "location": "",
      "description": "The Chief Minister and Industries Minister visited industrial facilities and infrastructure in Ganjam, emphasising implementation and industrial development.",
      "photos": [
        {
          "key": "jun25-21-1",
          "data": "june-outreach-2025/post-21-1.jpg",
          "caption": "TATA SEZ, Deepak Fertiliser & Utility Corridor Visits · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1930612331773562940"
        },
        {
          "key": "jun25-21-2",
          "data": "june-outreach-2025/post-21-2.jpg",
          "caption": "TATA SEZ, Deepak Fertiliser & Utility Corridor Visits · official Invest Odisha photograph · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1930612331773562940"
        }
      ]
    },
    {
      "id": "roundtable",
      "title": "CEO Roundtable — Industry Partnerships",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The Chief Minister, joined by the Industries and MSME Ministers, interacted with industry leaders including representatives of Adani Ports, Tata Steel SEZ and Avaada. Supporting post published 6 June; no separate activity date is inferred.",
      "photos": [
        {
          "key": "jun25-22-1",
          "data": "june-outreach-2025/post-22-1.jpg",
          "caption": "CEO Roundtable — Industry Partnerships · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1930860757744496932"
        },
        {
          "key": "jun25-22-2",
          "data": "june-outreach-2025/post-22-2.jpg",
          "caption": "CEO Roundtable — Industry Partnerships · official Invest Odisha photograph · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1930860757744496932"
        }
      ]
    }
  ],
  "highlights": [
    {
      "value": "12",
      "label": "Projects in advance groundbreaking announcement"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1930450874394128422",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1930450874394128422",
      "url": "https://x.com/InvestInOdisha/status/1930450874394128422"
    },
    {
      "label": "Official Invest Odisha post · 1930549778716197292",
      "url": "https://x.com/InvestInOdisha/status/1930549778716197292"
    },
    {
      "label": "Official Invest Odisha post · 1930565458324787348",
      "url": "https://x.com/InvestInOdisha/status/1930565458324787348"
    },
    {
      "label": "Official Invest Odisha post · 1930582972790686059",
      "url": "https://x.com/InvestInOdisha/status/1930582972790686059"
    },
    {
      "label": "Official Invest Odisha post · 1930612331773562940",
      "url": "https://x.com/InvestInOdisha/status/1930612331773562940"
    },
    {
      "label": "Official Invest Odisha post · 1930860757744496932",
      "url": "https://x.com/InvestInOdisha/status/1930860757744496932"
    }
  ],
  "coverPhoto": {
    "key": "jun25-17-1",
    "data": "june-outreach-2025/post-17-1.jpg",
    "caption": "Groundbreaking Ceremony at Chatrapur · official Invest Odisha photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1930450874394128422"
  },
  "imageUrl": "june-outreach-2025/post-17-1.jpg",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e97');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e97');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e97');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e97'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e97'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="june97View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="june97Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="june97SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="june97RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e97')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="june97EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="june97Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="june97EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e97'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="june97Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="june97Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.june97View=async key=>{viewing=await getPhotos('e97');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.june97Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')june97Step(1);if(ev.key==='ArrowLeft')june97Step(-1);});
  window.june97EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e97')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e97');};
    cls().scrollTop=0;
  };
  window.june97Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'june97-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e97',sectionId,data,caption:file.name});}await showEvent('e97');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e97')).find(p=>p.key===key);
  window.june97Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('june97-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e97');};
  window.june97SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e97');};
  window.june97RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e97');};
  render();
})();

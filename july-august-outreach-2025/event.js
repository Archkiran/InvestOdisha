/* July–August 2025: TiECon, VCL office, OdishaTEX, SLSWCA and mining conference. */
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1954107436282876390";
 const supplied={
  "id": "e87",
  "title": "ACS Hemant Sharma at TiECon Bhubaneswar 2025",
  "date": "2025-08-09",
  "endDate": "2025-08-09",
  "location": "Bhubaneswar, Odisha",
  "category": "Summits & conferences",
  "description": "Shri Hemant Sharma, Additional Chief Secretary, Industries, addressed TiECon Bhubaneswar 2025 on Odisha’s entrepreneurship and investment opportunities. He highlighted coordinated Union–State policy implementation and a whole-of-government approach.\n\nThe address covered Odisha’s coastal and mineral advantages, diversification beyond mining into textiles, food processing, chemicals and petrochemicals, and opportunities in new-age sectors. The supplied link is a continuation of the official opening post; both are linked below.",
  "sections": [
    {
      "id": "address",
      "title": "TiECon Bhubaneswar — Entrepreneurship Opportunities",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The address presented Odisha’s opportunities across textiles, food processing, chemicals, petrochemicals and emerging sectors, supported by coordinated policy implementation.",
      "photos": [
        {
          "key": "jt-tiecon-1",
          "data": "july-august-outreach-2025/tiecon-1.jpg",
          "caption": "ACS Hemant Sharma at TiECon Bhubaneswar 2025 · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1954107432772206922"
        },
        {
          "key": "jt-tiecon-2",
          "data": "july-august-outreach-2025/tiecon-2.jpg",
          "caption": "ACS Hemant Sharma at TiECon Bhubaneswar 2025 · official Invest Odisha photograph · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1954107432772206922"
        }
      ]
    }
  ],
  "highlights": [],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1954107436282876390",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1954107436282876390",
      "url": "https://x.com/InvestInOdisha/status/1954107436282876390"
    },
    {
      "label": "Official opening post — TiECon context and photographs",
      "url": "https://x.com/InvestInOdisha/status/1954107432772206922"
    }
  ],
  "coverPhoto": {
    "key": "jt-tiecon-1",
    "data": "july-august-outreach-2025/tiecon-1.jpg",
    "caption": "ACS Hemant Sharma at TiECon Bhubaneswar 2025 · official Invest Odisha photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1954107432772206922"
  },
  "imageUrl": "july-august-outreach-2025/tiecon-1.jpg",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e87');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e87');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e87');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e87'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e87'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="jte87View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="jte87Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="jte87SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="jte87RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e87')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="jte87EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="jte87Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="jte87EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e87'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="jte87Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="jte87Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.jte87View=async key=>{viewing=await getPhotos('e87');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.jte87Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')jte87Step(1);if(ev.key==='ArrowLeft')jte87Step(-1);});
  window.jte87EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e87')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e87');};
    cls().scrollTop=0;
  };
  window.jte87Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'jte87-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e87',sectionId,data,caption:file.name});}await showEvent('e87');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e87')).find(p=>p.key===key);
  window.jte87Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('jte87-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e87');};
  window.jte87SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e87');};
  window.jte87RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e87');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1950471211185819953";
 const supplied={
  "id": "e88",
  "title": "VCL India Opens Its Bhubaneswar Office",
  "date": "2025-07-30",
  "endDate": "2025-07-30",
  "location": "Bhubaneswar, Odisha",
  "category": "Industry engagements",
  "description": "VCL India inaugurated its Bhubaneswar office, joining Odisha’s downstream and metal-ancillary ecosystem. ACS Industries Shri Hemant Sharma welcomed the move as a sign of Odisha’s appeal to global manufacturing investors.\n\nThis entry records the opening of an office, not the inauguration of a manufacturing plant. The company name is VCL India in the official post.",
  "sections": [
    {
      "id": "office",
      "title": "Bhubaneswar Office Inauguration",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The office opening added to Odisha’s downstream and metal-ancillary business ecosystem.",
      "photos": [
        {
          "key": "jt-2-1",
          "data": "july-august-outreach-2025/post-2-1.jpg",
          "caption": "Bhubaneswar Office Inauguration · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1950471211185819953"
        },
        {
          "key": "jt-2-2",
          "data": "july-august-outreach-2025/post-2-2.jpg",
          "caption": "Bhubaneswar Office Inauguration · official Invest Odisha photograph · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1950471211185819953"
        }
      ]
    }
  ],
  "highlights": [],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1950471211185819953",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1950471211185819953",
      "url": "https://x.com/InvestInOdisha/status/1950471211185819953"
    }
  ],
  "coverPhoto": {
    "key": "jt-2-1",
    "data": "july-august-outreach-2025/post-2-1.jpg",
    "caption": "Bhubaneswar Office Inauguration · official Invest Odisha photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1950471211185819953"
  },
  "imageUrl": "july-august-outreach-2025/post-2-1.jpg",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e88');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e88');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e88');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e88'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e88'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="jte88View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="jte88Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="jte88SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="jte88RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e88')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="jte88EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="jte88Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="jte88EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e88'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="jte88Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="jte88Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.jte88View=async key=>{viewing=await getPhotos('e88');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.jte88Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')jte88Step(1);if(ev.key==='ArrowLeft')jte88Step(-1);});
  window.jte88EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e88')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e88');};
    cls().scrollTop=0;
  };
  window.jte88Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'jte88-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e88',sectionId,data,caption:file.name});}await showEvent('e88');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e88')).find(p=>p.key===key);
  window.jte88Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('jte88-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e88');};
  window.jte88SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e88');};
  window.jte88RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e88');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://drive.google.com/drive/folders/1jRlnQSdJ8AMO94m1ucULdasQ-sdS-ZSL";
 const supplied={
  "id": "e89",
  "title": "OdishaTEX 2025 — Textiles & Apparel Conclave",
  "date": "2025-07-25",
  "endDate": "2025-07-25",
  "location": "Bhubaneswar, Odisha",
  "category": "Summits & conferences",
  "description": "Chief Minister Shri Mohan Charan Majhi launched OdishaTEX 2025 in Bhubaneswar, described in the official posts as Odisha’s first dedicated textiles and apparel conclave. The programme brought together investors, industry leaders, government officials and district-level stakeholders.\n\nLeadership addresses covered textile value-chain opportunities, skills, infrastructure, logistics, women’s participation and facilitation for investors. The programme included investor recognition, direct discussions with the Chief Minister and MoU exchanges documented in the supplied photo collection.\n\nIndustries Minister Shri Sampad Chandra Swain emphasised policy clarity, industrial infrastructure, job-linked skilling and follow-up on conclave resolutions.",
  "sections": [
    {
      "id": "welcome",
      "title": "Welcome & Textile-sector Opportunities",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "ACS Hemant Sharma welcomed dignitaries and industry representatives, presenting textile value-chain opportunities, Odisha’s location advantages and policy support.",
      "photos": [
        {
          "key": "jt-3-1",
          "data": "july-august-outreach-2025/post-3-1.jpg",
          "caption": "Welcome & Textile-sector Opportunities · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1948651015294620004"
        }
      ]
    },
    {
      "id": "launch",
      "title": "Chief Minister’s Launch & Sector Vision",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Chief Minister Shri Mohan Charan Majhi launched OdishaTEX 2025, positioning textiles and apparel as a priority for employment and industrial growth.",
      "photos": [
        {
          "key": "jt-8-1",
          "data": "july-august-outreach-2025/post-8-1.jpg",
          "caption": "Chief Minister’s Launch & Sector Vision · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1948709605959151691"
        },
        {
          "key": "jt-drive-main-0",
          "data": "july-august-outreach-2025/drive-main-0.jpg",
          "caption": "OdishaTEX 2025 main-session programme",
          "sourceUrl": "https://drive.google.com/file/d/1taRODdoIO8PXCz0H7vXSkoW_MuSC15E0/view",
          "originalFilename": "DSC_0554.JPG"
        },
        {
          "key": "jt-drive-main-25",
          "data": "july-august-outreach-2025/drive-main-25.jpg",
          "caption": "OdishaTEX 2025 main-session programme · additional view",
          "sourceUrl": "https://drive.google.com/file/d/1_iMqMuM2psWGZOoudNgS2w8hgfAcsWU_/view",
          "originalFilename": "DSC_4515.JPG"
        }
      ]
    },
    {
      "id": "skills",
      "title": "Skills, Infrastructure & Institutional Support",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Shri Bhupendra Singh Punia, Commissioner-cum-Secretary, SDTE, spoke on expanding the skilled workforce through ITIs, the World Skill Centre and other institutions. Chief Secretary Shri Manoj Ahuja highlighted infrastructure, logistics, policy support and women’s participation.",
      "photos": [
        {
          "key": "jt-5-1",
          "data": "july-august-outreach-2025/post-5-1.jpg",
          "caption": "Skills, Infrastructure & Institutional Support · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1948667358807294150"
        },
        {
          "key": "jt-6-1",
          "data": "july-august-outreach-2025/post-6-1.jpg",
          "caption": "Skills, Infrastructure & Institutional Support · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1948667680489431486"
        }
      ]
    },
    {
      "id": "minister",
      "title": "Industries Minister — A Future-ready Textile Ecosystem",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Industries Minister Shri Sampad Chandra Swain outlined infrastructure readiness, job-linked skilling, policy clarity and district-level opportunities, with a task force to follow up on conclave resolutions.",
      "photos": [
        {
          "key": "jt-7-1",
          "data": "july-august-outreach-2025/post-7-1.jpg",
          "caption": "Industries Minister — A Future-ready Textile Ecosystem · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1948695689048752240"
        }
      ]
    },
    {
      "id": "felicitation",
      "title": "Felicitation of Textile Investors",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The Chief Minister felicitated leading textile investors for their contribution to Odisha’s textile ecosystem. The official post names SHAHI, ABFRL, Page Industries, MAS, Trimetro, FirstSteps, SAPL, Wild Lotus and Sportsking among those recognised.",
      "photos": [
        {
          "key": "jt-4-1",
          "data": "july-august-outreach-2025/post-4-1.jpg",
          "caption": "Felicitation of Textile Investors · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1948652382113394778"
        },
        {
          "key": "jt-drive-felicitation-0",
          "data": "july-august-outreach-2025/drive-felicitation-0.jpg",
          "caption": "Investor felicitation at OdishaTEX 2025",
          "sourceUrl": "https://drive.google.com/file/d/1Ejttdt8XvR2XH-t_hBaPBtwJMdPOpF5I/view",
          "originalFilename": "DSC_9242.JPG"
        },
        {
          "key": "jt-drive-felicitation-15",
          "data": "july-august-outreach-2025/drive-felicitation-15.jpg",
          "caption": "Investor felicitation at OdishaTEX 2025 · additional view",
          "sourceUrl": "https://drive.google.com/file/d/1GUi_6YhjTZggJvjrmT7PI03XeMJKLLbT/view",
          "originalFilename": "DSC_9275.JPG"
        }
      ]
    },
    {
      "id": "investors",
      "title": "Investor Dialogue & One-on-One Meetings",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The Chief Minister engaged investors on Odisha’s textile and apparel proposition, including policies, raw materials, skilled labour and port connectivity.",
      "photos": [
        {
          "key": "jt-9-1",
          "data": "july-august-outreach-2025/post-9-1.jpg",
          "caption": "Investor Dialogue & One-on-One Meetings · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1948717234873835947"
        },
        {
          "key": "jt-drive-one-0",
          "data": "july-august-outreach-2025/drive-one-0.jpg",
          "caption": "Chief Minister’s investor dialogue at OdishaTEX 2025",
          "sourceUrl": "https://drive.google.com/file/d/1XJa0cMSvOa3IKWTcxRBiNUNB2vNLim1L/view",
          "originalFilename": "DSC_9056-2.JPG"
        },
        {
          "key": "jt-drive-one-12",
          "data": "july-august-outreach-2025/drive-one-12.jpg",
          "caption": "Chief Minister’s investor dialogue at OdishaTEX 2025 · additional view",
          "sourceUrl": "https://drive.google.com/file/d/1pmFLkHTekXwiDSeEuXSFwzjc6DPrB_AJ/view",
          "originalFilename": "DSC_9092-2.JPG"
        }
      ]
    },
    {
      "id": "mous",
      "title": "MoU Exchange",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The supplied photo collection records document exchanges during OdishaTEX 2025. No project-level value or company identity has been inferred from an image alone.",
      "photos": [
        {
          "key": "jt-drive-mou-0",
          "data": "july-august-outreach-2025/drive-mou-0.jpg",
          "caption": "MoU exchange at OdishaTEX 2025",
          "sourceUrl": "https://drive.google.com/file/d/1U1pRCdXOQO6IzMNI0EMMFTpIpicO9cGk/view",
          "originalFilename": "DSC_9329-2.JPG"
        },
        {
          "key": "jt-drive-mou-9",
          "data": "july-august-outreach-2025/drive-mou-9.jpg",
          "caption": "MoU exchange at OdishaTEX 2025 · additional view",
          "sourceUrl": "https://drive.google.com/file/d/12bY7lHynZ3lqpp9DbgcoC7h44zOyMQ27/view",
          "originalFilename": "DSC_9361-2.JPG"
        }
      ]
    }
  ],
  "highlights": [],
  "sourceUrl": "https://drive.google.com/drive/folders/1jRlnQSdJ8AMO94m1ucULdasQ-sdS-ZSL",
  "officialSources": [
    {
      "label": "User-supplied OdishaTEX photograph collection",
      "url": "https://drive.google.com/drive/folders/1jRlnQSdJ8AMO94m1ucULdasQ-sdS-ZSL"
    },
    {
      "label": "Official Invest Odisha post · 1948651015294620004",
      "url": "https://x.com/InvestInOdisha/status/1948651015294620004"
    },
    {
      "label": "Official Invest Odisha post · 1948652382113394778",
      "url": "https://x.com/InvestInOdisha/status/1948652382113394778"
    },
    {
      "label": "Official Invest Odisha post · 1948667358807294150",
      "url": "https://x.com/InvestInOdisha/status/1948667358807294150"
    },
    {
      "label": "Official Invest Odisha post · 1948667680489431486",
      "url": "https://x.com/InvestInOdisha/status/1948667680489431486"
    },
    {
      "label": "Official Invest Odisha post · 1948695689048752240",
      "url": "https://x.com/InvestInOdisha/status/1948695689048752240"
    },
    {
      "label": "Official Invest Odisha post · 1948709605959151691",
      "url": "https://x.com/InvestInOdisha/status/1948709605959151691"
    },
    {
      "label": "Official Invest Odisha post · 1948717234873835947",
      "url": "https://x.com/InvestInOdisha/status/1948717234873835947"
    }
  ],
  "coverPhoto": {
    "key": "jt-8-1",
    "data": "july-august-outreach-2025/post-8-1.jpg",
    "caption": "Chief Minister’s Launch & Sector Vision · official Invest Odisha photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1948709605959151691"
  },
  "imageUrl": "july-august-outreach-2025/post-8-1.jpg",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e89');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e89');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e89');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e89'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e89'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="jte89View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="jte89Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="jte89SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="jte89RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e89')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Full photo collection ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="jte89EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="jte89Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="jte89EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e89'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="jte89Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="jte89Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.jte89View=async key=>{viewing=await getPhotos('e89');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.jte89Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')jte89Step(1);if(ev.key==='ArrowLeft')jte89Step(-1);});
  window.jte89EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e89')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e89');};
    cls().scrollTop=0;
  };
  window.jte89Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'jte89-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e89',sectionId,data,caption:file.name});}await showEvent('e89');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e89')).find(p=>p.key===key);
  window.jte89Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('jte89-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e89');};
  window.jte89SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e89');};
  window.jte89RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original in Google Drive will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e89');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1948394416273805807";
 const supplied={
  "id": "e90",
  "title": "138th SLSWCA — Investment Approvals",
  "date": "2025-07-24",
  "endDate": "2025-07-24",
  "location": "Bhubaneswar, Odisha",
  "category": "Clearances & approvals",
  "description": "Chief Secretary Shri Manoj Ahuja chaired the 138th State Level Single Window Clearance Authority meeting, approving 23 projects across 12 districts with investment of ₹4,982.66 crore and employment potential of 11,933.\n\nAll nine supplied sector graphics reconcile to the overview: 23 projects, ₹4,982.66 crore and 11,933 potential jobs. Their proponent lists and coverage are reproduced below.\n\nThe sector posts published on 28–29 July are supporting updates to the 24 July meeting, not additional approval meetings. Investment figures are approved proposal values and employment is potential, not realised investment or jobs already created.",
  "sections": [
    {
      "id": "meeting",
      "title": "138th SLSWCA Meeting",
      "date": "2025-07-24",
      "endDate": "",
      "location": "",
      "description": "Chief Secretary Shri Manoj Ahuja chaired the meeting. The complete supplied sector breakdown reconciles with the overview totals.",
      "photos": [
        {
          "key": "jt-10-1",
          "data": "july-august-outreach-2025/post-10-1.jpg",
          "caption": "138th SLSWCA Meeting · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1948394416273805807"
        }
      ],
      "isMeeting": true,
      "sourceUrl": "https://x.com/InvestInOdisha/status/1948394416273805807"
    },
    {
      "id": "sector-1",
      "title": "Steel, Specialty & Downstream",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Approved proposal value, employment potential and proponents as listed in the official sector graphic. Coverage labels follow the source.",
      "photos": [
        {
          "key": "jt-11-1",
          "data": "july-august-outreach-2025/post-11-1.jpg",
          "caption": "Steel, Specialty & Downstream · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1949715663922033041"
        }
      ],
      "investment": 1515.7,
      "employment": 1710,
      "projects": [
        {
          "name": "Vidya Minerals Private Limited",
          "district": "Sundergarh"
        },
        {
          "name": "Jatia Steel Limited",
          "district": "Jajpur"
        },
        {
          "name": "Amsted Steel Foundries (India) Private Limited",
          "district": "Khurdha"
        },
        {
          "name": "Mankash Enterprises Private Limited",
          "district": "Sundergarh"
        },
        {
          "name": "Steelograph Ascenders",
          "district": "Sundergarh"
        },
        {
          "name": "OSC Steel Private Limited",
          "district": "Sundergarh"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1949715663922033041"
    },
    {
      "id": "sector-2",
      "title": "Apparel & Textiles",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Approved proposal value, employment potential and proponents as listed in the official sector graphic. Coverage labels follow the source.",
      "photos": [
        {
          "key": "jt-12-1",
          "data": "july-august-outreach-2025/post-12-1.jpg",
          "caption": "Apparel & Textiles · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1949734873494642768"
        }
      ],
      "investment": 350,
      "employment": 5000,
      "projects": [
        {
          "name": "KPR Mill Limited",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1949734873494642768"
    },
    {
      "id": "sector-3",
      "title": "Tourism",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Approved proposal value, employment potential and proponents as listed in the official sector graphic. Coverage labels follow the source.",
      "photos": [
        {
          "key": "jt-13-1",
          "data": "july-august-outreach-2025/post-13-1.jpg",
          "caption": "Tourism · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1949773443693719707"
        }
      ],
      "investment": 479.21,
      "employment": 1352,
      "projects": [
        {
          "name": "Jagannath Corporation Projects Pvt Ltd",
          "district": "Puri"
        },
        {
          "name": "Pratyaksh Estates Pvt Ltd",
          "district": "Gajapati"
        },
        {
          "name": "Hotel Pal Regency Private Limited",
          "district": "Puri"
        },
        {
          "name": "Arkasri Hospitality and Tourism Private Limited",
          "district": "Nayagarh"
        },
        {
          "name": "The World Hotels Pvt Ltd",
          "district": "Kandhamal"
        },
        {
          "name": "The World Hotels Pvt Ltd",
          "district": "Ganjam"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1949773443693719707"
    },
    {
      "id": "sector-4",
      "title": "Power & Renewable Energy",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Approved proposal value, employment potential and proponents as listed in the official sector graphic. Coverage labels follow the source.",
      "photos": [
        {
          "key": "jt-14-1",
          "data": "july-august-outreach-2025/post-14-1.jpg",
          "caption": "Power & Renewable Energy · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1949797478024307048"
        }
      ],
      "investment": 1050,
      "employment": 1100,
      "projects": [
        {
          "name": "Ecodynamix Green Energy Private Limited",
          "district": "Bargarh"
        },
        {
          "name": "Luminous Power Technologies Private (as printed)",
          "district": "Ganjam"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1949797478024307048"
    },
    {
      "id": "sector-5",
      "title": "Aerospace & Defence",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Approved proposal value, employment potential and proponents as listed in the official sector graphic. Coverage labels follow the source.",
      "photos": [
        {
          "key": "jt-15-1",
          "data": "july-august-outreach-2025/post-15-1.jpg",
          "caption": "Aerospace & Defence · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1950036943841997195"
        }
      ],
      "investment": 300,
      "employment": 760,
      "projects": [
        {
          "name": "BonV Technology Private Limited",
          "district": "Khurdha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1950036943841997195"
    },
    {
      "id": "sector-6",
      "title": "Pharmaceuticals",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Approved proposal value, employment potential and proponents as listed in the official sector graphic. Coverage labels follow the source.",
      "photos": [
        {
          "key": "jt-16-1",
          "data": "july-august-outreach-2025/post-16-1.jpg",
          "caption": "Pharmaceuticals · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1950056197429567889"
        }
      ],
      "investment": 100,
      "employment": 390,
      "projects": [
        {
          "name": "Synniat Pharma Pvt Ltd",
          "district": "Cuttack"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1950056197429567889"
    },
    {
      "id": "sector-7",
      "title": "IT & ITES",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Approved proposal value, employment potential and proponents as listed in the official sector graphic. Coverage labels follow the source.",
      "photos": [
        {
          "key": "jt-17-1",
          "data": "july-august-outreach-2025/post-17-1.jpg",
          "caption": "IT & ITES · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1950083599253791008"
        }
      ],
      "investment": 65,
      "employment": 155,
      "projects": [
        {
          "name": "APMOSYS Technologies Private Limited",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1950083599253791008"
    },
    {
      "id": "sector-8",
      "title": "Chemicals, Oxygen & Other Gases",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Approved proposal value, employment potential and proponents as listed in the official sector graphic. Coverage labels follow the source.",
      "photos": [
        {
          "key": "jt-18-1",
          "data": "july-august-outreach-2025/post-18-1.jpg",
          "caption": "Chemicals, Oxygen & Other Gases · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1950093411685716144"
        }
      ],
      "investment": 631,
      "employment": 370,
      "projects": [
        {
          "name": "Growing Tree Oil Refinery Private Limited",
          "district": "Bargarh"
        },
        {
          "name": "Linde India Limited",
          "district": "Sundergarh"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1950093411685716144"
    },
    {
      "id": "sector-9",
      "title": "Food, Beverage & Allied Sectors",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Approved proposal value, employment potential and proponents as listed in the official sector graphic. Coverage labels follow the source.",
      "photos": [
        {
          "key": "jt-19-1",
          "data": "july-august-outreach-2025/post-19-1.jpg",
          "caption": "Food, Beverage & Allied Sectors · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1950144358381981863"
        }
      ],
      "investment": 491.75,
      "employment": 1096,
      "projects": [
        {
          "name": "Hindustan Aqua Private Limited",
          "district": "Sundergarh"
        },
        {
          "name": "Pragati Milk Products Private Limited",
          "district": "Balasore"
        },
        {
          "name": "RV Breweries Private Limited",
          "district": "Deogarh"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1950144358381981863"
    }
  ],
  "highlights": [
    {
      "value": "23",
      "label": "Projects approved"
    },
    {
      "value": "₹4,982.66 crore",
      "label": "Approved investment"
    },
    {
      "value": "11,933",
      "label": "Employment potential"
    },
    {
      "value": "12",
      "label": "Districts covered"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1948394416273805807",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1948394416273805807",
      "url": "https://x.com/InvestInOdisha/status/1948394416273805807"
    },
    {
      "label": "Official Invest Odisha post · 1949715663922033041",
      "url": "https://x.com/InvestInOdisha/status/1949715663922033041"
    },
    {
      "label": "Official Invest Odisha post · 1949734873494642768",
      "url": "https://x.com/InvestInOdisha/status/1949734873494642768"
    },
    {
      "label": "Official Invest Odisha post · 1949773443693719707",
      "url": "https://x.com/InvestInOdisha/status/1949773443693719707"
    },
    {
      "label": "Official Invest Odisha post · 1949797478024307048",
      "url": "https://x.com/InvestInOdisha/status/1949797478024307048"
    },
    {
      "label": "Official Invest Odisha post · 1950036943841997195",
      "url": "https://x.com/InvestInOdisha/status/1950036943841997195"
    },
    {
      "label": "Official Invest Odisha post · 1950056197429567889",
      "url": "https://x.com/InvestInOdisha/status/1950056197429567889"
    },
    {
      "label": "Official Invest Odisha post · 1950083599253791008",
      "url": "https://x.com/InvestInOdisha/status/1950083599253791008"
    },
    {
      "label": "Official Invest Odisha post · 1950093411685716144",
      "url": "https://x.com/InvestInOdisha/status/1950093411685716144"
    },
    {
      "label": "Official Invest Odisha post · 1950144358381981863",
      "url": "https://x.com/InvestInOdisha/status/1950144358381981863"
    }
  ],
  "coverPhoto": {
    "key": "jt-10-1",
    "data": "july-august-outreach-2025/post-10-1.jpg",
    "caption": "138th SLSWCA Meeting · official Invest Odisha photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1948394416273805807"
  },
  "imageUrl": "july-august-outreach-2025/post-10-1.jpg",
  "contentVersion": 1,
  "breakdownStatus": "reconciled",
  "breakdownTotals": {
    "projects": 23,
    "investment": 4982.66,
    "employment": 11933
  },
  "sourceUrls": [
    "https://x.com/InvestInOdisha/status/1948394416273805807",
    "https://x.com/InvestInOdisha/status/1949715663922033041",
    "https://x.com/InvestInOdisha/status/1949734873494642768",
    "https://x.com/InvestInOdisha/status/1949773443693719707",
    "https://x.com/InvestInOdisha/status/1949797478024307048",
    "https://x.com/InvestInOdisha/status/1950036943841997195",
    "https://x.com/InvestInOdisha/status/1950056197429567889",
    "https://x.com/InvestInOdisha/status/1950083599253791008",
    "https://x.com/InvestInOdisha/status/1950093411685716144",
    "https://x.com/InvestInOdisha/status/1950144358381981863"
  ]
};
const eventRecord=events.find(e=>e.id==='e90');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e90');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e90');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e90'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
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
    if(id!=='e90'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="s138View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="s138Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="s138SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="s138RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Sector approvals</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e90')">Edit overview & highlights</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Official overview post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="138th SLSWCA meeting and sector approvals">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Section ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="s138EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${sectorDetails(s)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this sector</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="s138Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="s138EditSection()">+ Add sector</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal','slswca-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e90'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="s138Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="s138Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.s138View=async key=>{viewing=await getPhotos('e90');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.s138Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')s138Step(1);if(ev.key==='ArrowLeft')s138Step(-1);});
  window.s138EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">138th SLSWCA</div><h2>${id?'Edit sector':'Add sector'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div>${s.isMeeting?'':`<div class="formgrid"><div class="field"><label>Approved investment (₹ crore)</label><input name="sectorInvestment" type="number" min="0" step="0.01" required value="${esc(String(s.investment||0))}"></div><div class="field"><label>Employment potential</label><input name="sectorEmployment" type="number" min="0" step="1" required value="${esc(String(s.employment||0))}"></div></div><div class="field"><label>Projects — one per line: proponent | district</label><textarea name="sectorProjects">${esc((s.projects||[]).map(p=>p.name+" | "+p.district).join("\n"))}</textarea></div>`}<div class="chem-tools"><button class="btn red">Save sector</button><button type="button" class="btn" onclick="showEvent('e90')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!s.isMeeting){s.investment=Number(f.get('sectorInvestment')||0);s.employment=Number(f.get('sectorEmployment')||0);s.projects=String(f.get('sectorProjects')||'').split(/\n/).filter(x=>x.trim()).map(x=>{const [name,...district]=x.split('|');return {name:name.trim(),district:district.join('|').trim()};});}if(!id)current().sections.push(s);save();showEvent('e90');};
    cls().scrollTop=0;
  };
  window.s138Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'s138-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e90',sectionId,data,caption:file.name});}await showEvent('e90');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e90')).find(p=>p.key===key);
  window.s138Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('s138-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e90');};
  window.s138SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e90');};
  window.s138RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e90');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1946474434933707055";
 const supplied={
  "id": "e91",
  "title": "Mining & Allied Industries for Viksit Odisha 2036 — Technical Conference",
  "date": "2025-07-19",
  "endDate": "2025-07-19",
  "location": "Bhubaneswar, Odisha",
  "category": "Summits & conferences",
  "description": "Shri Hemant Sharma, Additional Chief Secretary, Industries, addressed the technical conference on “Contribution of Mining & Allied Industries for Viksit Odisha 2036” in Bhubaneswar. He underlined the sector’s role in Odisha’s growth and long-term development journey.",
  "sections": [
    {
      "id": "conference",
      "title": "Mining & Allied Industries — Odisha’s Growth Agenda",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The conference examined the contribution of mining and allied industries to the Viksit Odisha 2036 vision.",
      "photos": [
        {
          "key": "jt-20-1",
          "data": "july-august-outreach-2025/post-20-1.jpg",
          "caption": "Mining & Allied Industries — Odisha’s Growth Agenda · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1946474434933707055"
        },
        {
          "key": "jt-20-2",
          "data": "july-august-outreach-2025/post-20-2.jpg",
          "caption": "Mining & Allied Industries — Odisha’s Growth Agenda · official Invest Odisha photograph · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1946474434933707055"
        }
      ]
    }
  ],
  "highlights": [],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1946474434933707055",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1946474434933707055",
      "url": "https://x.com/InvestInOdisha/status/1946474434933707055"
    }
  ],
  "coverPhoto": {
    "key": "jt-20-1",
    "data": "july-august-outreach-2025/post-20-1.jpg",
    "caption": "Mining & Allied Industries — Odisha’s Growth Agenda · official Invest Odisha photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1946474434933707055"
  },
  "imageUrl": "july-august-outreach-2025/post-20-1.jpg",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e91');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e91');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e91');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e91'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e91'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="jte91View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="jte91Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="jte91SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="jte91RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e91')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="jte91EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="jte91Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="jte91EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e91'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="jte91Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="jte91Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.jte91View=async key=>{viewing=await getPhotos('e91');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.jte91Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')jte91Step(1);if(ev.key==='ArrowLeft')jte91Step(-1);});
  window.jte91EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e91')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e91');};
    cls().scrollTop=0;
  };
  window.jte91Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'jte91-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e91',sectionId,data,caption:file.name});}await showEvent('e91');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e91')).find(p=>p.key===key);
  window.jte91Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('jte91-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e91');};
  window.jte91SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e91');};
  window.jte91RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e91');};
  render();
})();

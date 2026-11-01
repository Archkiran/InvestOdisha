/* May 2025: one new steel feature and three existing programme updates. */
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1928403435847598441";
 const supplied={
  "id": "e158",
  "title": "Odisha’s Steel Sector — Technology, Sustainability & Value Addition",
  "date": "2025-05-30",
  "endDate": "2025-05-30",
  "location": "Odisha · Steel & Metallurgy",
  "category": "Media & publications",
  "description": "Invest Odisha shared a Steel & Metallurgy magazine article by Shri Hemant Sharma, IAS, Additional Chief Secretary, Industries, on Odisha’s steel-sector development. It discusses greener production, technology adoption and the shift toward higher-value manufacturing.\n\nThe timeline date is the official sharing date, 30 May 2025. The supplied pages are from the May 2025 issue; no separate original publication day is asserted.",
  "sections": [
    {
      "id": "article",
      "title": "Steel & Metallurgy — ACS Hemant Sharma’s Article",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The article considers steel-sector opportunities alongside infrastructure, logistics, policy support and sustainability. This entry provides a brief summary and retains the two pages shared in the official post.",
      "photos": [
        {
          "key": "may25-1-1",
          "data": "may-outreach-2025/post-1-1.jpg",
          "caption": "Steel & Metallurgy — ACS Hemant Sharma’s Article · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1928403435847598441"
        },
        {
          "key": "may25-1-2",
          "data": "may-outreach-2025/post-1-2.jpg",
          "caption": "Steel & Metallurgy — ACS Hemant Sharma’s Article · official Invest Odisha source · additional page / view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1928403435847598441"
        }
      ]
    }
  ],
  "highlights": [],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1928403435847598441",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1928403435847598441",
      "url": "https://x.com/InvestInOdisha/status/1928403435847598441"
    }
  ],
  "coverPhoto": {
    "key": "may25-1-1",
    "data": "may-outreach-2025/post-1-1.jpg",
    "caption": "Steel & Metallurgy — ACS Hemant Sharma’s Article · official Invest Odisha source",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1928403435847598441"
  },
  "imageUrl": "may-outreach-2025/post-1-1.jpg",
  "contentVersion": 1
};
 const migration='ipicolSteelFeatureMay2025AddedV1';
 if(!events.some(e=>e.id==='e158')&&!localStorage.getItem(migration)){events.push(JSON.parse(JSON.stringify(supplied)));save();try{localStorage.setItem(migration,'1');}catch{}}
 if(!SEED_EVENTS.some(e=>e.id==='e158'))SEED_EVENTS.push(JSON.parse(JSON.stringify(supplied)));
  const eventRecord=events.find(e=>e.id==='e158');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e158');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e158');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e158'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e158'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="maye158View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="maye158Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="maye158SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="maye158RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e158')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="maye158EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="maye158Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="maye158EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e158'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="maye158Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="maye158Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.maye158View=async key=>{viewing=await getPhotos('e158');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.maye158Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')maye158Step(1);if(ev.key==='ArrowLeft')maye158Step(-1);});
  window.maye158EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e158')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e158');};
    cls().scrollTop=0;
  };
  window.maye158Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'maye158-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e158',sectionId,data,caption:file.name});}await showEvent('e158');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e158')).find(p=>p.key===key);
  window.maye158Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('maye158-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e158');};
  window.maye158SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e158');};
  window.maye158RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e158');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1927634846085456207";
 const supplied={
  "id": "e98",
  "title": "Role of AI in Governance — ACS-led Session with PwC, IDCO & IPICOL",
  "date": "2025-05-28",
  "endDate": "2025-05-28",
  "location": "Odisha",
  "category": "Industry engagements",
  "description": "Shri Hemant Sharma, Additional Chief Secretary, Industries, chaired a session on the role of artificial intelligence in governance. In collaboration with PwC India, senior officials from IDCO and IPICOL explored AI-led opportunities for industrial promotion and development.\n\nThe post records a discussion of opportunities, not an announcement that specific AI systems had already been deployed.",
  "sections": [
    {
      "id": "session",
      "title": "AI-led Industrial Promotion & Development",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The session brought together PwC India and officials from IDCO and IPICOL to explore potential applications of AI in governance and industrial development.",
      "photos": [
        {
          "key": "may25-2-1",
          "data": "may-outreach-2025/post-2-1.jpg",
          "caption": "AI-led Industrial Promotion & Development · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1927634846085456207"
        },
        {
          "key": "may25-2-2",
          "data": "may-outreach-2025/post-2-2.jpg",
          "caption": "AI-led Industrial Promotion & Development · official Invest Odisha source · additional page / view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1927634846085456207"
        }
      ]
    }
  ],
  "highlights": [],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1927634846085456207",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1927634846085456207",
      "url": "https://x.com/InvestInOdisha/status/1927634846085456207"
    }
  ],
  "coverPhoto": {
    "key": "may25-2-1",
    "data": "may-outreach-2025/post-2-1.jpg",
    "caption": "AI-led Industrial Promotion & Development · official Invest Odisha source",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1927634846085456207"
  },
  "imageUrl": "may-outreach-2025/post-2-1.jpg",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e98');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e98');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e98');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e98'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e98'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="maye98View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="maye98Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="maye98SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="maye98RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e98')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="maye98EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="maye98Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="maye98EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e98'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="maye98Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="maye98Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.maye98View=async key=>{viewing=await getPhotos('e98');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.maye98Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')maye98Step(1);if(ev.key==='ArrowLeft')maye98Step(-1);});
  window.maye98EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e98')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e98');};
    cls().scrollTop=0;
  };
  window.maye98Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'maye98-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e98',sectionId,data,caption:file.name});}await showEvent('e98');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e98')).find(p=>p.key===key);
  window.maye98Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('maye98-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e98');};
  window.maye98SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e98');};
  window.maye98RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e98');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1925930221460459778";
 const supplied={
  "id": "e99",
  "title": "Ministerial Review — IndianOil Naphtha Cracker & Bhadrak Yarn Projects",
  "date": "2025-05-23",
  "endDate": "2025-05-23",
  "location": "Odisha",
  "category": "Industry engagements",
  "description": "Industries and Skill Development & Technical Education Minister Shri Sampad Chandra Swain chaired a review with the Minister for Higher Education, Sports & Youth Services and Odia Language. The meeting covered IndianOil’s Dual Feed Naphtha Cracker Project and the Bhadrak Yarn Project.\n\nThis entry records a project review, not fresh investment approvals or the inauguration of either project.",
  "sections": [
    {
      "id": "review",
      "title": "Review of Two Industrial Projects",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The ministers reviewed IndianOil’s Dual Feed Naphtha Cracker and Bhadrak Yarn projects.",
      "photos": [
        {
          "key": "may25-3-1",
          "data": "may-outreach-2025/post-3-1.jpg",
          "caption": "Review of Two Industrial Projects · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1925930221460459778"
        },
        {
          "key": "may25-3-2",
          "data": "may-outreach-2025/post-3-2.jpg",
          "caption": "Review of Two Industrial Projects · official Invest Odisha source · additional page / view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1925930221460459778"
        }
      ]
    }
  ],
  "highlights": [],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1925930221460459778",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1925930221460459778",
      "url": "https://x.com/InvestInOdisha/status/1925930221460459778"
    }
  ],
  "coverPhoto": {
    "key": "may25-3-1",
    "data": "may-outreach-2025/post-3-1.jpg",
    "caption": "Review of Two Industrial Projects · official Invest Odisha source",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1925930221460459778"
  },
  "imageUrl": "may-outreach-2025/post-3-1.jpg",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e99');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e99');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e99');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e99'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e99'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="maye99View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="maye99Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="maye99SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="maye99RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e99')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="maye99EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="maye99Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="maye99EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e99'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="maye99Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="maye99Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.maye99View=async key=>{viewing=await getPhotos('e99');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.maye99Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')maye99Step(1);if(ev.key==='ArrowLeft')maye99Step(-1);});
  window.maye99EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e99')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e99');};
    cls().scrollTop=0;
  };
  window.maye99Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'maye99-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e99',sectionId,data,caption:file.name});}await showEvent('e99');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e99')).find(p=>p.key===key);
  window.maye99Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('maye99-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e99');};
  window.maye99SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e99');};
  window.maye99RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e99');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1925399659759231407";
 const supplied={
  "id": "e100",
  "title": "Kalinganagar Industrial Programme — Inaugurations, Groundbreaking & CEO Roundtable",
  "date": "2025-05-22",
  "endDate": "2025-05-22",
  "location": "Kalinganagar, Jajpur, Odisha",
  "category": "Industrial programmes",
  "description": "Chief Minister Shri Mohan Charan Majhi, joined by Industries Minister Shri Sampad Chandra Swain and other dignitaries, led the inauguration and groundbreaking programme at Kalinganagar, Jajpur. The opening announcement covered 24 projects.\n\nThe programme included groundbreaking for IMFA’s new Kalinganagar unit and inauguration of Tata Steel’s phase-two expansion. Leadership addresses focused on industrial growth, innovation, jobs and MSME development.\n\nA supporting post published on 23 May records a Chief Minister-led CEO roundtable at Kalinganagar. It is included as an associated engagement without inferring a separate activity date from its publication date. Groundbreaking and inauguration are distinguished below; the 24-project announcement is not described as 24 completed factories.",
  "sections": [
    {
      "id": "ceremony",
      "title": "Inauguration & Groundbreaking Ceremony",
      "date": "2025-05-22",
      "endDate": "2025-05-22",
      "location": "",
      "description": "The Chief Minister and Industries Minister led the industrial programme at Kalinganagar, Jajpur. The opening announcement identified 24 projects across inauguration and groundbreaking milestones.",
      "photos": [
        {
          "key": "may25-4-1",
          "data": "may-outreach-2025/post-4-1.jpg",
          "caption": "Inauguration & Groundbreaking Ceremony · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1925399659759231407"
        },
        {
          "key": "may25-7-1",
          "data": "may-outreach-2025/post-7-1.jpg",
          "caption": "Inauguration & Groundbreaking Ceremony · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1925509327223497167"
        },
        {
          "key": "may25-7-2",
          "data": "may-outreach-2025/post-7-2.jpg",
          "caption": "Inauguration & Groundbreaking Ceremony · official Invest Odisha source · additional page / view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1925509327223497167"
        }
      ]
    },
    {
      "id": "addresses",
      "title": "Leadership Addresses — Industrial Growth & MSMEs",
      "date": "2025-05-22",
      "endDate": "2025-05-22",
      "location": "",
      "description": "The Chief Minister addressed Odisha’s industrial and economic growth. The Industries Minister highlighted innovation, employment and MSME development.",
      "photos": [
        {
          "key": "may25-5-1",
          "data": "may-outreach-2025/post-5-1.jpg",
          "caption": "Leadership Addresses — Industrial Growth & MSMEs · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1925477501566165483"
        },
        {
          "key": "may25-5-2",
          "data": "may-outreach-2025/post-5-2.jpg",
          "caption": "Leadership Addresses — Industrial Growth & MSMEs · official Invest Odisha source · additional page / view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1925477501566165483"
        },
        {
          "key": "may25-6-1",
          "data": "may-outreach-2025/post-6-1.jpg",
          "caption": "Leadership Addresses — Industrial Growth & MSMEs · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1925488926141374899"
        },
        {
          "key": "may25-6-2",
          "data": "may-outreach-2025/post-6-2.jpg",
          "caption": "Leadership Addresses — Industrial Growth & MSMEs · official Invest Odisha source · additional page / view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1925488926141374899"
        }
      ]
    },
    {
      "id": "imfa",
      "title": "IMFA New Unit — Groundbreaking",
      "date": "2025-05-22",
      "endDate": "2025-05-22",
      "location": "",
      "description": "The Chief Minister, joined by the Industries Minister and senior dignitaries, led the groundbreaking for IMFA’s new unit at Kalinganagar.",
      "photos": [
        {
          "key": "may25-8-1",
          "data": "may-outreach-2025/post-8-1.jpg",
          "caption": "IMFA New Unit — Groundbreaking · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1925516375214489924"
        },
        {
          "key": "may25-8-2",
          "data": "may-outreach-2025/post-8-2.jpg",
          "caption": "IMFA New Unit — Groundbreaking · official Invest Odisha source · additional page / view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1925516375214489924"
        }
      ]
    },
    {
      "id": "tata",
      "title": "Tata Steel Phase-two Expansion — Inauguration",
      "date": "2025-05-22",
      "endDate": "2025-05-22",
      "location": "",
      "description": "The Chief Minister and Industries Minister inaugurated Tata Steel’s phase-two expansion project at Kalinganagar.",
      "photos": [
        {
          "key": "may25-9-1",
          "data": "may-outreach-2025/post-9-1.jpg",
          "caption": "Tata Steel Phase-two Expansion — Inauguration · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1925538303048392919"
        },
        {
          "key": "may25-9-2",
          "data": "may-outreach-2025/post-9-2.jpg",
          "caption": "Tata Steel Phase-two Expansion — Inauguration · official Invest Odisha source · additional page / view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1925538303048392919"
        }
      ]
    },
    {
      "id": "roundtable",
      "title": "CEO Roundtable — Investor Engagement",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The Chief Minister, joined by the Industries Minister, engaged industry leaders in a CEO roundtable at Kalinganagar. Supporting post published 23 May; activity date not independently inferred.",
      "photos": [
        {
          "key": "may25-10-1",
          "data": "may-outreach-2025/post-10-1.jpg",
          "caption": "CEO Roundtable — Investor Engagement · official Invest Odisha source",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1925926298116837528"
        },
        {
          "key": "may25-10-2",
          "data": "may-outreach-2025/post-10-2.jpg",
          "caption": "CEO Roundtable — Investor Engagement · official Invest Odisha source · additional page / view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1925926298116837528"
        }
      ]
    }
  ],
  "highlights": [
    {
      "value": "24",
      "label": "Projects in inauguration / groundbreaking announcement"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1925399659759231407",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1925399659759231407",
      "url": "https://x.com/InvestInOdisha/status/1925399659759231407"
    },
    {
      "label": "Official Invest Odisha post · 1925477501566165483",
      "url": "https://x.com/InvestInOdisha/status/1925477501566165483"
    },
    {
      "label": "Official Invest Odisha post · 1925488926141374899",
      "url": "https://x.com/InvestInOdisha/status/1925488926141374899"
    },
    {
      "label": "Official Invest Odisha post · 1925509327223497167",
      "url": "https://x.com/InvestInOdisha/status/1925509327223497167"
    },
    {
      "label": "Official Invest Odisha post · 1925516375214489924",
      "url": "https://x.com/InvestInOdisha/status/1925516375214489924"
    },
    {
      "label": "Official Invest Odisha post · 1925538303048392919",
      "url": "https://x.com/InvestInOdisha/status/1925538303048392919"
    },
    {
      "label": "Official Invest Odisha post · 1925926298116837528",
      "url": "https://x.com/InvestInOdisha/status/1925926298116837528"
    }
  ],
  "coverPhoto": {
    "key": "may25-4-1",
    "data": "may-outreach-2025/post-4-1.jpg",
    "caption": "Inauguration & Groundbreaking Ceremony · official Invest Odisha source",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1925399659759231407"
  },
  "imageUrl": "may-outreach-2025/post-4-1.jpg",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e100');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e100');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e100');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e100'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e100'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="maye100View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="maye100Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="maye100SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="maye100RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e100')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="maye100EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="maye100Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="maye100EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e100'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="maye100Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="maye100Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.maye100View=async key=>{viewing=await getPhotos('e100');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.maye100Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')maye100Step(1);if(ev.key==='ArrowLeft')maye100Step(-1);});
  window.maye100EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e100')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e100');};
    cls().scrollTop=0;
  };
  window.maye100Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'maye100-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e100',sectionId,data,caption:file.name});}await showEvent('e100');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e100')).find(p=>p.key===key);
  window.maye100Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('maye100-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e100');};
  window.maye100SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e100');};
  window.maye100RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e100');};
  render();
})();

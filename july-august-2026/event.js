/* Seven July/August entries: supplied official posts, local media and one-time migrations. */
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2084905192592671226";
 const supplied={
  "title": "Energize Empower East (E3) 2026",
  "date": "2026-08-05",
  "endDate": "2026-08-06",
  "category": "Conferences & summits",
  "location": "Odisha",
  "description": "At IEEMA’s Energize Empower East (E3) 2026, Shri Kalyan Mohanty, Executive Director, IPICOL, presented Odisha’s strengths as a manufacturing destination for electrical and mechanical capital goods and electronics.\n\nThe presentation highlighted policy support, the state’s industrial ecosystem and growing market opportunities. The existing 5–6 August event range is retained and is also visible on the photographed event backdrop.",
  "sections": [
    {
      "id": "presentation",
      "title": "Odisha’s Manufacturing Proposition",
      "date": "2026-08-05",
      "location": "Energize Empower East (E3) 2026",
      "description": "The Invest Odisha post documents IPICOL’s presentation of manufacturing opportunities in electrical and mechanical capital goods and electronics.",
      "sourceUrl": "https://x.com/InvestInOdisha/status/2084905192592671226",
      "photos": [
        {
          "key": "july-post-1-1",
          "data": "july-august-2026/post-1-1.jpg",
          "caption": "Shri Kalyan Mohanty at Energize Empower East (E3) 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2084905192592671226"
        }
      ]
    }
  ],
  "highlights": [],
  "coverPhoto": {
    "key": "july-post-1-1",
    "data": "july-august-2026/post-1-1.jpg",
    "caption": "Shri Kalyan Mohanty at Energize Empower East (E3) 2026",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2084905192592671226"
  },
  "imageUrl": "july-august-2026/post-1-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2084905192592671226",
  "sourceUrls": [
    "https://x.com/InvestInOdisha/status/2084905192592671226"
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e11');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e11');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e11');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e11'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e11'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="batche11View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="batche11Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="batche11SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="batche11RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Industry outreach</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e11')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a>${e.articleUrl?`<a class="btn" href="${esc(e.articleUrl)}" target="_blank" rel="noopener">Read original interview ↗</a>`:''}${e.additionalSourceUrl?`<a class="btn" href="${esc(e.additionalSourceUrl)}" target="_blank" rel="noopener">Supporting coverage ↗</a>`:''}</div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}</section>
      <nav class="chem-index" aria-label="Industry outreach">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="batche11EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${s.sourceUrl?`<p><a href="${esc(s.sourceUrl)}" target="_blank" rel="noopener">View original Invest Odisha post ↗</a></p>`:''}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="batche11Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="batche11EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e11'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="batche11Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="batche11Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.batche11View=async key=>{viewing=await getPhotos('e11');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.batche11Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')batche11Step(1);if(ev.key==='ArrowLeft')batche11Step(-1);});
  window.batche11EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Energize Empower East (E3) 2026</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e11')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e11');};
    cls().scrollTop=0;
  };
  window.batche11Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'batche11-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e11',sectionId,data,caption:file.name});}await showEvent('e11');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e11')).find(p=>p.key===key);
  window.batche11Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('batche11-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e11');};
  window.batche11SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e11');};
  window.batche11RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e11');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2083225071041314845";
 const supplied={
  "title": "CII IWN Shakti Samman 2026",
  "date": "2026-07-31",
  "endDate": "2026-07-31",
  "category": "Conferences & summits",
  "location": "Bhubaneswar, Odisha",
  "description": "At CII IWN Shakti Samman 2026, Chief Secretary Smt. Anu Garg emphasised women’s role as partners in progress and drivers of Odisha’s economic transformation.\n\nThe programme also included the exchange of 13 MoUs with women entrepreneurs, representing ₹913.13 crore in proposed investments and employment potential of 4,302. Smt. Aboli Sunil Naravane, MD, IPICOL, Shri Deepankar Mohapatra, Director of Tourism, and Ms. Pooja Mishra, Director, Biotechnology, participated on behalf of the government. Three Single Window Approval Letters were handed over, reinforcing investment facilitation for women-led enterprises.",
  "highlights": [
    {
      "label": "MoUs with women entrepreneurs",
      "value": "13"
    },
    {
      "label": "Proposed investments",
      "value": "₹913.13 crore"
    },
    {
      "label": "Employment potential",
      "value": "4,302"
    },
    {
      "label": "Single Window Approval Letters",
      "value": "3"
    }
  ],
  "sections": [
    {
      "id": "shakti",
      "title": "Women-led Development & Investment Facilitation",
      "date": "2026-07-31",
      "location": "Bhubaneswar",
      "description": "The supplied post and photographs document the Chief Secretary’s address and a group MoU exchange. The entry retains the existing investment and approval details, with the MoU investment and employment figures also corroborated by same-day reporting.",
      "sourceUrl": "https://x.com/InvestInOdisha/status/2083225071041314845",
      "photos": [
        {
          "key": "july-post-2-1",
          "data": "july-august-2026/post-2-1.jpg",
          "caption": "CII IWN Shakti Samman 2026 · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2083225071041314845"
        },
        {
          "key": "july-post-2-2",
          "data": "july-august-2026/post-2-2.jpg",
          "caption": "CII IWN Shakti Samman 2026 · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2083225071041314845"
        },
        {
          "key": "july-post-2-3",
          "data": "july-august-2026/post-2-3.jpg",
          "caption": "CII IWN Shakti Samman 2026 · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2083225071041314845"
        }
      ]
    }
  ],
  "additionalSourceUrl": "https://www.prameyanews.com/odisha-signs-13-mous-with-women-entrepreneurs-attracts-913-crore-investment",
  "coverPhoto": {
    "key": "july-post-2-1",
    "data": "july-august-2026/post-2-1.jpg",
    "caption": "CII IWN Shakti Samman 2026 · official Invest Odisha photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2083225071041314845"
  },
  "imageUrl": "july-august-2026/post-2-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2083225071041314845",
  "sourceUrls": [
    "https://x.com/InvestInOdisha/status/2083225071041314845"
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e12');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e12');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e12');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e12'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e12'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="batche12View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="batche12Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="batche12SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="batche12RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Women-led development</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e12')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a>${e.articleUrl?`<a class="btn" href="${esc(e.articleUrl)}" target="_blank" rel="noopener">Read original interview ↗</a>`:''}${e.additionalSourceUrl?`<a class="btn" href="${esc(e.additionalSourceUrl)}" target="_blank" rel="noopener">Supporting coverage ↗</a>`:''}</div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}</section>
      <nav class="chem-index" aria-label="Women-led development">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="batche12EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${s.sourceUrl?`<p><a href="${esc(s.sourceUrl)}" target="_blank" rel="noopener">View original Invest Odisha post ↗</a></p>`:''}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="batche12Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="batche12EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e12'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="batche12Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="batche12Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.batche12View=async key=>{viewing=await getPhotos('e12');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.batche12Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')batche12Step(1);if(ev.key==='ArrowLeft')batche12Step(-1);});
  window.batche12EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">CII IWN Shakti Samman 2026</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e12')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e12');};
    cls().scrollTop=0;
  };
  window.batche12Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'batche12-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e12',sectionId,data,caption:file.name});}await showEvent('e12');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e12')).find(p=>p.key===key);
  window.batche12Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('batche12-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e12');};
  window.batche12SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e12');};
  window.batche12RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e12');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2082767060963360865";
 const supplied={
  "title": "Tottori Prefectural Delegation — Odisha–Japan Partnership",
  "date": "2026-07-30",
  "endDate": "2026-07-31",
  "category": "Delegations & partnerships",
  "location": "Bhubaneswar, Odisha",
  "description": "Odisha welcomed a delegation from Tottori Prefecture, Japan, led by Mr. Toshiki Endo, Chief Secretary of the Prefecture, for a two-day visit beginning on 30 July 2026.\n\nChief Secretary Smt. Anu Garg received the delegation at Lok Seva Bhawan. A further interaction at Kharavel Bhawan brought together the delegation and representatives of Japanese companies operating in Odisha, with Shri Hemant Sharma and Smt. Aboli Sunil Naravane presenting the state’s industrial strengths and investment opportunities.\n\nDiscussions addressed investment, industrial collaboration, innovation, startups, skill development, tourism, higher education and cultural exchange.",
  "highlights": [],
  "sections": [
    {
      "id": "welcome",
      "title": "Reception & Institutional Cooperation",
      "date": "2026-07-30",
      "location": "Lok Seva Bhawan, Bhubaneswar",
      "description": "Smt. Anu Garg received the delegation as the two-day visit began. Discussions explored broader institutional, economic and cultural cooperation between Odisha and Tottori Prefecture.",
      "sourceUrl": "https://x.com/InvestInOdisha/status/2082767060963360865",
      "photos": [
        {
          "key": "july-post-4-1",
          "data": "july-august-2026/post-4-1.jpg",
          "caption": "Tottori delegation received at Lok Seva Bhawan",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2082767060963360865"
        },
        {
          "key": "july-post-4-2",
          "data": "july-august-2026/post-4-2.jpg",
          "caption": "Tottori delegation received at Lok Seva Bhawan",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2082767060963360865"
        },
        {
          "key": "july-post-4-3",
          "data": "july-august-2026/post-4-3.jpg",
          "caption": "Tottori delegation received at Lok Seva Bhawan",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2082767060963360865"
        }
      ]
    },
    {
      "id": "industry",
      "title": "Industry Interaction & Investment Opportunities",
      "date": "2026-07-30",
      "location": "Kharavel Bhawan, Bhubaneswar",
      "description": "Shri Hemant Sharma briefed the delegation on Odisha’s industrial strengths, policy ecosystem and sector opportunities. Smt. Aboli Sunil Naravane invited Mr. Toshiki Endo to encourage companies from Tottori to explore investments in the state. Japanese companies already operating in Odisha also participated.",
      "sourceUrl": "https://x.com/InvestInOdisha/status/2082851205374710147",
      "photos": [
        {
          "key": "july-post-3-1",
          "data": "july-august-2026/post-3-1.jpg",
          "caption": "Tottori delegation interaction at Kharavel Bhawan",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2082851205374710147"
        },
        {
          "key": "july-post-3-2",
          "data": "july-august-2026/post-3-2.jpg",
          "caption": "Tottori delegation interaction at Kharavel Bhawan",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2082851205374710147"
        },
        {
          "key": "july-post-3-3",
          "data": "july-august-2026/post-3-3.jpg",
          "caption": "Tottori delegation interaction at Kharavel Bhawan",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2082851205374710147"
        }
      ]
    }
  ],
  "coverPhoto": {
    "key": "july-post-4-1",
    "data": "july-august-2026/post-4-1.jpg",
    "caption": "Tottori delegation received at Lok Seva Bhawan",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2082767060963360865"
  },
  "imageUrl": "july-august-2026/post-4-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2082767060963360865",
  "sourceUrls": [
    "https://x.com/InvestInOdisha/status/2082767060963360865",
    "https://x.com/InvestInOdisha/status/2082851205374710147"
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e13');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e13');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e13');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e13'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e13'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="batche13View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="batche13Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="batche13SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="batche13RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Odisha–Japan partnership</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e13')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a>${e.articleUrl?`<a class="btn" href="${esc(e.articleUrl)}" target="_blank" rel="noopener">Read original interview ↗</a>`:''}${e.additionalSourceUrl?`<a class="btn" href="${esc(e.additionalSourceUrl)}" target="_blank" rel="noopener">Supporting coverage ↗</a>`:''}</div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}</section>
      <nav class="chem-index" aria-label="Odisha–Japan partnership">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="batche13EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${s.sourceUrl?`<p><a href="${esc(s.sourceUrl)}" target="_blank" rel="noopener">View original Invest Odisha post ↗</a></p>`:''}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="batche13Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="batche13EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e13'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="batche13Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="batche13Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.batche13View=async key=>{viewing=await getPhotos('e13');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.batche13Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')batche13Step(1);if(ev.key==='ArrowLeft')batche13Step(-1);});
  window.batche13EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Tottori Prefectural Delegation — Odisha–Japan Partnership</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e13')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e13');};
    cls().scrollTop=0;
  };
  window.batche13Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'batche13-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e13',sectionId,data,caption:file.name});}await showEvent('e13');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e13')).find(p=>p.key===key);
  window.batche13Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('batche13-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e13');};
  window.batche13SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e13');};
  window.batche13RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e13');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2082711752433950746";
 const supplied={
  "title": "MD Interview — Odisha’s Integrated Textile Ecosystem",
  "date": "2026-07-29",
  "endDate": "2026-07-29",
  "category": "Media & interviews",
  "location": "The Textile Magazine",
  "description": "In an interview with The Textile Magazine, Smt. Aboli Sunil Naravane, MD, IPICOL and Director of Industries, described Odisha’s ambition to develop an integrated fibre-to-fashion ecosystem.\n\nThe discussion covered industrial infrastructure, skilled talent, investor support, sustainability and opportunities across fibre, yarn, fabric, technical textiles and apparel. It also highlighted women’s workforce participation and the importance of linking upstream and downstream activities.\n\nThe article is dated 29 July 2026, which remains this entry’s timeline date. Invest Odisha shared the interview on 30 July; the interview recording date is not established.",
  "highlights": [],
  "articleUrl": "https://www.indiantextilemagazine.in/odisha-weaves-a-new-growth-story-as-indias-emerging-integrated-textile-hub/",
  "articlePublishedAt": "2026-07-29",
  "postPublishedAt": "2026-07-30",
  "sections": [
    {
      "id": "textile-interview",
      "title": "Interview Coverage & Original Article",
      "date": "2026-07-29",
      "location": "The Textile Magazine",
      "description": "The preview image below comes from the article link shared by Invest Odisha. Use the original interview link to read the publisher’s full discussion.",
      "sourceUrl": "https://x.com/InvestInOdisha/status/2082711752433950746",
      "photos": [
        {
          "key": "july-textile-preview",
          "data": "july-august-2026/textile-preview.jpg",
          "caption": "The Textile Magazine article preview · Smt. Aboli Sunil Naravane",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2082711752433950746"
        }
      ]
    }
  ],
  "coverPhoto": {
    "key": "july-textile-preview",
    "data": "july-august-2026/textile-preview.jpg",
    "caption": "The Textile Magazine article preview · Smt. Aboli Sunil Naravane",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2082711752433950746"
  },
  "imageUrl": "july-august-2026/textile-preview.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2082711752433950746",
  "sourceUrls": [
    "https://x.com/InvestInOdisha/status/2082711752433950746"
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e14');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e14');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e14');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e14'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e14'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="batche14View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="batche14Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="batche14SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="batche14RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Media interview</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e14')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a>${e.articleUrl?`<a class="btn" href="${esc(e.articleUrl)}" target="_blank" rel="noopener">Read original interview ↗</a>`:''}${e.additionalSourceUrl?`<a class="btn" href="${esc(e.additionalSourceUrl)}" target="_blank" rel="noopener">Supporting coverage ↗</a>`:''}</div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}</section>
      <nav class="chem-index" aria-label="Media interview">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="batche14EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${s.sourceUrl?`<p><a href="${esc(s.sourceUrl)}" target="_blank" rel="noopener">View original Invest Odisha post ↗</a></p>`:''}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="batche14Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="batche14EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e14'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="batche14Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="batche14Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.batche14View=async key=>{viewing=await getPhotos('e14');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.batche14Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')batche14Step(1);if(ev.key==='ArrowLeft')batche14Step(-1);});
  window.batche14EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">MD Interview — Odisha’s Integrated Textile Ecosystem</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e14')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e14');};
    cls().scrollTop=0;
  };
  window.batche14Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'batche14-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e14',sectionId,data,caption:file.name});}await showEvent('e14');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e14')).find(p=>p.key===key);
  window.batche14Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('batche14-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e14');};
  window.batche14SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e14');};
  window.batche14RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e14');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2081598763122958434";
 const supplied={
  "title": "IPICOL Women Cell — Support for Women Entrepreneurs",
  "date": "2026-07-27",
  "endDate": "2026-07-27",
  "category": "Women entrepreneurship",
  "location": "Odisha",
  "description": "IPICOL’s Women Cell provides a dedicated platform connecting women-led enterprises with the government for support, facilitation and grievance redressal.\n\nIts focus includes promoting women entrepreneurship, supporting businesses through different stages of growth, increasing participation by women-owned enterprises, strengthening business-to-government engagement and helping resolve operational and business issues.\n\nThis entry records Invest Odisha’s 27 July information campaign, rather than a separately confirmed launch or meeting.",
  "highlights": [],
  "sections": [
    {
      "id": "support",
      "title": "Support, Facilitation & Assistance",
      "date": "2026-07-27",
      "location": "Statewide support platform",
      "description": "The official information graphics explain the Women Cell’s purpose, focus areas and published nodal-officer contacts. Contact information is reproduced within the original dated graphic and may change; refer to the original post for context.",
      "sourceUrl": "https://x.com/InvestInOdisha/status/2081598763122958434",
      "photos": [
        {
          "key": "july-post-6-1",
          "data": "july-august-2026/post-6-1.jpg",
          "caption": "IPICOL Women Cell · official support and facilitation information graphic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2081598763122958434"
        },
        {
          "key": "july-post-6-2",
          "data": "july-august-2026/post-6-2.jpg",
          "caption": "IPICOL Women Cell · official support and facilitation information graphic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2081598763122958434"
        },
        {
          "key": "july-post-6-3",
          "data": "july-august-2026/post-6-3.jpg",
          "caption": "IPICOL Women Cell · official support and facilitation information graphic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2081598763122958434"
        }
      ]
    }
  ],
  "coverPhoto": {
    "key": "july-post-6-1",
    "data": "july-august-2026/post-6-1.jpg",
    "caption": "IPICOL Women Cell · official support and facilitation information graphic",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2081598763122958434"
  },
  "imageUrl": "july-august-2026/post-6-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2081598763122958434",
  "sourceUrls": [
    "https://x.com/InvestInOdisha/status/2081598763122958434"
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e15');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e15');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e15');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e15'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e15'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="batche15View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="batche15Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="batche15SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="batche15RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Women entrepreneurship support</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e15')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a>${e.articleUrl?`<a class="btn" href="${esc(e.articleUrl)}" target="_blank" rel="noopener">Read original interview ↗</a>`:''}${e.additionalSourceUrl?`<a class="btn" href="${esc(e.additionalSourceUrl)}" target="_blank" rel="noopener">Supporting coverage ↗</a>`:''}</div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}</section>
      <nav class="chem-index" aria-label="Women entrepreneurship support">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="batche15EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${s.sourceUrl?`<p><a href="${esc(s.sourceUrl)}" target="_blank" rel="noopener">View original Invest Odisha post ↗</a></p>`:''}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="batche15Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="batche15EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e15'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="batche15Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="batche15Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.batche15View=async key=>{viewing=await getPhotos('e15');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.batche15Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')batche15Step(1);if(ev.key==='ArrowLeft')batche15Step(-1);});
  window.batche15EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">IPICOL Women Cell — Support for Women Entrepreneurs</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e15')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e15');};
    cls().scrollTop=0;
  };
  window.batche15Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'batche15-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e15',sectionId,data,caption:file.name});}await showEvent('e15');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e15')).find(p=>p.key===key);
  window.batche15Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('batche15-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e15');};
  window.batche15SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e15');};
  window.batche15RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e15');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2080615246050582996";
 const supplied={
  "title": "HCLTech & Sarvam AI — AI Data Centre and Global Delivery Centre MoUs",
  "date": "2026-07-24",
  "endDate": "2026-07-24",
  "category": "MoUs & partnerships",
  "location": "Lok Seva Bhawan, Bhubaneswar",
  "description": "Odisha signed MoUs with HCLTech and Sarvam AI for an AI Data Centre, and with HCLTech for a Global Delivery Centre. Invest Odisha’s announcement described proposed investment of over ₹15,000 crore, positioning the commitments within the state’s technology-investment agenda.\n\nHCLTech Chairperson Ms. Roshni Nadar Malhotra participated in the MoU signing with the Government of Odisha. The supplied posts document the signing programme and her remarks.\n\nThese are proposed investments and signed commitments, not confirmation that the facilities are already operational.",
  "highlights": [
    {
      "label": "Proposed investment · official overview",
      "value": "Over ₹15,000 crore"
    }
  ],
  "sections": [
    {
      "id": "mou",
      "title": "MoU Signing & Technology Partnerships",
      "date": "2026-07-24",
      "location": "Lok Seva Bhawan, Bhubaneswar",
      "description": "The official photographs document the signing programme for the AI Data Centre and Global Delivery Centre. The investment figure is the combined overview reported by Invest Odisha and is not assigned to either facility individually.",
      "sourceUrl": "https://x.com/InvestInOdisha/status/2080615246050582996",
      "photos": [
        {
          "key": "july-post-7-1",
          "data": "july-august-2026/post-7-1.jpg",
          "caption": "HCLTech and Sarvam AI MoU programme · 24 July 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2080615246050582996"
        },
        {
          "key": "july-post-7-2",
          "data": "july-august-2026/post-7-2.jpg",
          "caption": "HCLTech and Sarvam AI MoU programme · 24 July 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2080615246050582996"
        },
        {
          "key": "july-post-7-3",
          "data": "july-august-2026/post-7-3.jpg",
          "caption": "HCLTech and Sarvam AI MoU programme · 24 July 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2080615246050582996"
        },
        {
          "key": "july-post-7-4",
          "data": "july-august-2026/post-7-4.jpg",
          "caption": "HCLTech and Sarvam AI MoU programme · 24 July 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2080615246050582996"
        }
      ]
    },
    {
      "id": "remarks",
      "title": "Roshni Nadar Malhotra — Signing Programme Remarks",
      "date": "2026-07-24",
      "location": "Lok Seva Bhawan, Bhubaneswar",
      "description": "The second supplied post contains a video of the programme. A still preview is stored offline below; the original video remains available through the source link and requires internet access.",
      "sourceUrl": "https://x.com/InvestInOdisha/status/2080605518784332173",
      "photos": [
        {
          "key": "july-mou-video-preview",
          "data": "july-august-2026/mou-video-preview.jpg",
          "caption": "Video preview · Roshni Nadar Malhotra at the technology MoU signing",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2080605518784332173"
        }
      ]
    }
  ],
  "coverPhoto": {
    "key": "july-post-7-1",
    "data": "july-august-2026/post-7-1.jpg",
    "caption": "HCLTech and Sarvam AI MoU programme · 24 July 2026",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2080615246050582996"
  },
  "imageUrl": "july-august-2026/post-7-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2080615246050582996",
  "sourceUrls": [
    "https://x.com/InvestInOdisha/status/2080615246050582996",
    "https://x.com/InvestInOdisha/status/2080605518784332173"
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e16');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e16');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e16');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e16'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e16'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="batche16View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="batche16Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="batche16SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="batche16RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Technology investment MoUs</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e16')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a>${e.articleUrl?`<a class="btn" href="${esc(e.articleUrl)}" target="_blank" rel="noopener">Read original interview ↗</a>`:''}${e.additionalSourceUrl?`<a class="btn" href="${esc(e.additionalSourceUrl)}" target="_blank" rel="noopener">Supporting coverage ↗</a>`:''}</div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}</section>
      <nav class="chem-index" aria-label="Technology investment MoUs">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="batche16EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${s.sourceUrl?`<p><a href="${esc(s.sourceUrl)}" target="_blank" rel="noopener">View original Invest Odisha post ↗</a></p>`:''}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="batche16Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="batche16EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e16'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="batche16Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="batche16Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.batche16View=async key=>{viewing=await getPhotos('e16');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.batche16Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')batche16Step(1);if(ev.key==='ArrowLeft')batche16Step(-1);});
  window.batche16EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">HCLTech & Sarvam AI — AI Data Centre and Global Delivery Centre MoUs</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e16')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e16');};
    cls().scrollTop=0;
  };
  window.batche16Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'batche16-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e16',sectionId,data,caption:file.name});}await showEvent('e16');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e16')).find(p=>p.key===key);
  window.batche16Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('batche16-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e16');};
  window.batche16SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e16');};
  window.batche16RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e16');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2080308811517337754";
 const supplied={
  "title": "Women Entrepreneurs’ Associations Meeting with MD, IPICOL",
  "date": "2026-07-23",
  "endDate": "2026-07-23",
  "category": "Women entrepreneurship",
  "location": "IPICOL, Odisha",
  "description": "Smt. Aboli Sunil Naravane, MD, IPICOL, chaired a Women Cell meeting with representatives of women business associations to strengthen Odisha’s women-entrepreneurship ecosystem.\n\nDiscussions covered enterprise development, business promotion, policy support, stronger business-to-government engagement and timely resolution of issues faced by women entrepreneurs.\n\nThe engagement emphasised ongoing institutional support for women-led enterprises, from micro and small businesses to larger industries, and a more enabling business environment through continuous dialogue.",
  "highlights": [],
  "sections": [
    {
      "id": "associations",
      "title": "Association Dialogue & Enterprise Support",
      "date": "2026-07-23",
      "location": "IPICOL",
      "description": "The meeting connected women business associations with IPICOL’s leadership to discuss business needs and institutional support. The official group photograph below records the engagement.",
      "sourceUrl": "https://x.com/InvestInOdisha/status/2080308811517337754",
      "photos": [
        {
          "key": "july-post-9-1",
          "data": "july-august-2026/post-9-1.jpg",
          "caption": "Women business associations with MD, IPICOL · 23 July 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2080308811517337754"
        }
      ]
    }
  ],
  "coverPhoto": {
    "key": "july-post-9-1",
    "data": "july-august-2026/post-9-1.jpg",
    "caption": "Women business associations with MD, IPICOL · 23 July 2026",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2080308811517337754"
  },
  "imageUrl": "july-august-2026/post-9-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2080308811517337754",
  "sourceUrls": [
    "https://x.com/InvestInOdisha/status/2080308811517337754"
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e17');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e17');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e17');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e17'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e17'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="batche17View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="batche17Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="batche17SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="batche17RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Women entrepreneurship meeting</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e17')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a>${e.articleUrl?`<a class="btn" href="${esc(e.articleUrl)}" target="_blank" rel="noopener">Read original interview ↗</a>`:''}${e.additionalSourceUrl?`<a class="btn" href="${esc(e.additionalSourceUrl)}" target="_blank" rel="noopener">Supporting coverage ↗</a>`:''}</div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}</section>
      <nav class="chem-index" aria-label="Women entrepreneurship meeting">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="batche17EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${s.sourceUrl?`<p><a href="${esc(s.sourceUrl)}" target="_blank" rel="noopener">View original Invest Odisha post ↗</a></p>`:''}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="batche17Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="batche17EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e17'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="batche17Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="batche17Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.batche17View=async key=>{viewing=await getPhotos('e17');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.batche17Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')batche17Step(1);if(ev.key==='ArrowLeft')batche17Step(-1);});
  window.batche17EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Women Entrepreneurs’ Associations Meeting with MD, IPICOL</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e17')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e17');};
    cls().scrollTop=0;
  };
  window.batche17Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'batche17-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e17',sectionId,data,caption:file.name});}await showEvent('e17');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e17')).find(p=>p.key===key);
  window.batche17Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('batche17-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e17');};
  window.batche17SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e17');};
  window.batche17RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e17');};
  render();
})();




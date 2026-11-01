/* TYK session: 28 May event; 29 May official coverage. */
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2060244172154749171";
 const supplied={
  "title": "TYK Ceramics — Interactive Session with Japanese Delegates",
  "date": "2026-05-28",
  "endDate": "2026-05-28",
  "postPublishedAt": "2026-05-29",
  "location": "Bhubaneswar, Odisha",
  "category": "Meetings",
  "description": "Shri Hemant Sharma, IAS, Additional Chief Secretary for Industries, Home and I&PR, chaired an interactive session with Japanese delegates ahead of the commencement of TYK Ceramics Limited’s advanced ceramics manufacturing facility in Kalinganagar, Jajpur.\n\nThe discussion highlighted Odisha’s investment opportunities and the government’s role in facilitating and handholding foreign direct investment projects.\n\nThe event date remains 28 May 2026, as shown on the photographed banner. Invest Odisha published its coverage on 29 May. This entry records the interactive session, not a confirmed factory inauguration or start of commercial production.",
  "highlights": [],
  "sections": [
    {
      "id": "interaction",
      "title": "Japanese Delegation Interaction & FDI Facilitation",
      "date": "2026-05-28",
      "location": "Bhubaneswar, Odisha",
      "description": "The official photographs document the discussion with Japanese delegates. Kalinganagar, Jajpur is the location of the manufacturing facility referenced in the announcement, rather than the session’s venue.",
      "photos": [
        {
          "key": "tyk-meeting-1",
          "data": "tyk-ceramics-2026/meeting-01.jpg",
          "caption": "Interactive session with Japanese delegates ahead of TYK Ceramics’ facility commencement · 28 May 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2060244172154749171"
        },
        {
          "key": "tyk-meeting-2",
          "data": "tyk-ceramics-2026/meeting-02.jpg",
          "caption": "Interactive session with Japanese delegates ahead of TYK Ceramics’ facility commencement · 28 May 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2060244172154749171"
        },
        {
          "key": "tyk-meeting-3",
          "data": "tyk-ceramics-2026/meeting-03.jpg",
          "caption": "Interactive session with Japanese delegates ahead of TYK Ceramics’ facility commencement · 28 May 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2060244172154749171"
        },
        {
          "key": "tyk-meeting-4",
          "data": "tyk-ceramics-2026/meeting-04.jpg",
          "caption": "Interactive session with Japanese delegates ahead of TYK Ceramics’ facility commencement · 28 May 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2060244172154749171"
        }
      ]
    }
  ],
  "coverPhoto": {
    "key": "tyk-meeting-1",
    "data": "tyk-ceramics-2026/meeting-01.jpg",
    "caption": "Interactive session with Japanese delegates ahead of TYK Ceramics’ facility commencement · 28 May 2026",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2060244172154749171"
  },
  "imageUrl": "tyk-ceramics-2026/meeting-01.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2060244172154749171",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e31');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e31');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e31');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e31'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e31'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="tykView('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="tykCaption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="tykSetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="tykRemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Japanese delegation interaction</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e31')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}</section>
      <nav class="chem-index" aria-label="TYK Ceramics session">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="tykEditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="tykUpload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="tykEditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e31'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="tykStep(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="tykStep(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.tykView=async key=>{viewing=await getPhotos('e31');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.tykStep=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')tykStep(1);if(ev.key==='ArrowLeft')tykStep(-1);});
  window.tykEditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">TYK Ceramics Interactive Session</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e31')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e31');};
    cls().scrollTop=0;
  };
  window.tykUpload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'tyk-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e31',sectionId,data,caption:file.name});}await showEvent('e31');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e31')).find(p=>p.key===key);
  window.tykCaption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('tyk-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e31');};
  window.tykSetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e31');};
  window.tykRemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e31');};
  render();
})();



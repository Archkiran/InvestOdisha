/* October 2025: five existing entries, official posts and local photographs. */
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1983080628938817546";
 const supplied={
  "id": "e75",
  "title": "ACS Hemant Sharma Meets INOX Director Siddharth Jain",
  "date": "2025-10-28",
  "endDate": "2025-10-28",
  "location": "Odisha",
  "category": "Industry engagements",
  "description": "Shri Hemant Sharma, Additional Chief Secretary, Industries, met Shri Siddharth Jain, Director, INOX Air Products. Discussions covered plans for industrial-gas facilities in Odisha and expansion of the INOX brand’s multiplex presence across the state.\n\nThe official post records discussions of plans, not a signed agreement or project approval.",
  "sections": [
    {
      "id": "meeting",
      "title": "Industrial Gases & Multiplex Expansion",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "The meeting explored industrial-gas infrastructure and wider multiplex presence in Odisha.",
      "photos": [
        {
          "key": "oct-1-1",
          "data": "october-2025/post-1-1.jpg",
          "caption": "Industrial Gases & Multiplex Expansion · official Invest Odisha image",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1983080628938817546"
        }
      ]
    }
  ],
  "highlights": [],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1983080628938817546",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1983080628938817546",
      "url": "https://x.com/InvestInOdisha/status/1983080628938817546"
    }
  ],
  "coverPhoto": {
    "key": "oct-1-1",
    "data": "october-2025/post-1-1.jpg",
    "caption": "Industrial Gases & Multiplex Expansion · official Invest Odisha image",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1983080628938817546"
  },
  "imageUrl": "october-2025/post-1-1.jpg",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e75');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e75');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e75');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e75'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e75'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="octe75View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="octe75Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="octe75SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="octe75RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e75')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="octe75EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="octe75Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="octe75EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e75'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="octe75Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="octe75Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.octe75View=async key=>{viewing=await getPhotos('e75');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.octe75Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')octe75Step(1);if(ev.key==='ArrowLeft')octe75Step(-1);});
  window.octe75EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e75')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e75');};
    cls().scrollTop=0;
  };
  window.octe75Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'octe75-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e75',sectionId,data,caption:file.name});}await showEvent('e75');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e75')).find(p=>p.key===key);
  window.octe75Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('octe75-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e75');};
  window.octe75SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e75');};
  window.octe75RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e75');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1982844576412119088";
 const supplied={
  "id": "e76",
  "title": "India Maritime Week 2025 — Odisha’s Port-led Development & Industry Engagements",
  "date": "2025-10-26",
  "endDate": "2025-10-27",
  "location": "Mumbai, Maharashtra",
  "category": "Summits & conferences",
  "description": "Chief Minister Shri Mohan Charan Majhi visited Mumbai for India Maritime Week 2025, arriving on 26 October and taking part in the main engagements on 27 October. The programme included the inaugural session, a visit to the Odisha Pavilion, the Odisha State Session on port-led development and meetings with industry leaders.\n\nAt the state session, the Chief Minister outlined Odisha’s ambition to become India’s eastern maritime gateway and expand port capacity to 500 million tonnes per annum by 2047. The roadmap connected ports with the Blue Economy, sustainable growth and coastal development.\n\nAssociated Mumbai meetings covered Jain Metals’ proposed titanium project in Ganjam and Reliance Consumer Products’ upcoming FMCG facility in Khordha. These were project discussions, not additional approvals recorded at Maritime Week.",
  "sections": [
    {
      "id": "arrival",
      "title": "Arrival in Mumbai",
      "date": "2025-10-26",
      "endDate": "2025-10-26",
      "location": "",
      "description": "The Chief Minister arrived in Mumbai ahead of the Odisha special session and other Maritime Week engagements.",
      "photos": [
        {
          "key": "oct-7-1",
          "data": "october-2025/post-7-1.jpg",
          "caption": "Arrival in Mumbai · official Invest Odisha image",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1982467184099008964"
        },
        {
          "key": "oct-7-2",
          "data": "october-2025/post-7-2.jpg",
          "caption": "Arrival in Mumbai · official Invest Odisha image · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1982467184099008964"
        }
      ]
    },
    {
      "id": "inaugural",
      "title": "India Maritime Week Inaugural Session",
      "date": "2025-10-27",
      "endDate": "2025-10-27",
      "location": "",
      "description": "Union Home Minister Shri Amit Shah inaugurated India Maritime Week in Mumbai. The Chief Minister joined the session, presenting Odisha’s focus on sustainable maritime and port-led growth.",
      "photos": [
        {
          "key": "oct-3-1",
          "data": "october-2025/post-3-1.jpg",
          "caption": "India Maritime Week Inaugural Session · official Invest Odisha image",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1982784440481792469"
        },
        {
          "key": "oct-3-2",
          "data": "october-2025/post-3-2.jpg",
          "caption": "India Maritime Week Inaugural Session · official Invest Odisha image · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1982784440481792469"
        }
      ]
    },
    {
      "id": "pavilion",
      "title": "Visit to the Odisha Pavilion",
      "date": "2025-10-27",
      "endDate": "2025-10-27",
      "location": "",
      "description": "The pavilion presented Odisha’s seafaring heritage alongside modern ports and coastal infrastructure, highlighting investment and Blue Economy opportunities.",
      "photos": [
        {
          "key": "oct-4-1",
          "data": "october-2025/post-4-1.jpg",
          "caption": "Visit to the Odisha Pavilion · official Invest Odisha image",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1982777809882718656"
        },
        {
          "key": "oct-4-2",
          "data": "october-2025/post-4-2.jpg",
          "caption": "Visit to the Odisha Pavilion · official Invest Odisha image · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1982777809882718656"
        }
      ]
    },
    {
      "id": "state-session",
      "title": "Odisha State Session — Port-led Development to 2047",
      "date": "2025-10-27",
      "endDate": "2025-10-27",
      "location": "",
      "description": "The session, “Port-led Development in Odisha: A Perspective Plan for 2047”, brought together government and port/logistics industry leaders. The Chief Minister set out a 500 MTPA port-capacity ambition for 2047, supported by innovation, inclusion and sustainability.",
      "photos": [
        {
          "key": "oct-2-1",
          "data": "october-2025/post-2-1.jpg",
          "caption": "Odisha State Session — Port-led Development to 2047 · official Invest Odisha image",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1982844576412119088"
        },
        {
          "key": "oct-2-2",
          "data": "october-2025/post-2-2.jpg",
          "caption": "Odisha State Session — Port-led Development to 2047 · official Invest Odisha image · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1982844576412119088"
        }
      ]
    },
    {
      "id": "jain",
      "title": "Meeting with Jain Metals",
      "date": "2025-10-27",
      "endDate": "2025-10-27",
      "location": "",
      "description": "The Chief Minister met Shri Kamlesh Jain, Chairman, Jain Metals, to discuss the company’s proposed Titanium Metal and Titanium Dioxide plant in Ganjam, which the post describes as recently approved by HLCA.",
      "photos": [
        {
          "key": "oct-5-1",
          "data": "october-2025/post-5-1.jpg",
          "caption": "Meeting with Jain Metals · official Invest Odisha image",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1982698020895338867"
        },
        {
          "key": "oct-5-2",
          "data": "october-2025/post-5-2.jpg",
          "caption": "Meeting with Jain Metals · official Invest Odisha image · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1982698020895338867"
        }
      ]
    },
    {
      "id": "reliance",
      "title": "Meeting with Reliance Consumer Products",
      "date": "2025-10-27",
      "endDate": "2025-10-27",
      "location": "",
      "description": "The Chief Minister met Executive Director Shri Ketan Mody and senior leaders of Reliance Consumer Products Limited. Discussions concerned the proposed FMCG manufacturing facility in Khordha described in the post as approved at the recent HLCA meeting.",
      "photos": [
        {
          "key": "oct-6-1",
          "data": "october-2025/post-6-1.jpg",
          "caption": "Meeting with Reliance Consumer Products · official Invest Odisha image",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1982689786541564190"
        },
        {
          "key": "oct-6-2",
          "data": "october-2025/post-6-2.jpg",
          "caption": "Meeting with Reliance Consumer Products · official Invest Odisha image · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1982689786541564190"
        }
      ]
    }
  ],
  "highlights": [
    {
      "value": "500 MTPA",
      "label": "Port-capacity ambition"
    },
    {
      "value": "2047",
      "label": "Roadmap horizon"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1982844576412119088",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1982844576412119088",
      "url": "https://x.com/InvestInOdisha/status/1982844576412119088"
    },
    {
      "label": "Official Invest Odisha post · 1982784440481792469",
      "url": "https://x.com/InvestInOdisha/status/1982784440481792469"
    },
    {
      "label": "Official Invest Odisha post · 1982777809882718656",
      "url": "https://x.com/InvestInOdisha/status/1982777809882718656"
    },
    {
      "label": "Official Invest Odisha post · 1982698020895338867",
      "url": "https://x.com/InvestInOdisha/status/1982698020895338867"
    },
    {
      "label": "Official Invest Odisha post · 1982689786541564190",
      "url": "https://x.com/InvestInOdisha/status/1982689786541564190"
    },
    {
      "label": "Official Invest Odisha post · 1982467184099008964",
      "url": "https://x.com/InvestInOdisha/status/1982467184099008964"
    }
  ],
  "coverPhoto": {
    "key": "oct-2-1",
    "data": "october-2025/post-2-1.jpg",
    "caption": "Odisha State Session — Port-led Development to 2047 · official Invest Odisha image",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1982844576412119088"
  },
  "imageUrl": "october-2025/post-2-1.jpg",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e76');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e76');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e76');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e76'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e76'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="octe76View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="octe76Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="octe76SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="octe76RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e76')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="octe76EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="octe76Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="octe76EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e76'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="octe76Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="octe76Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.octe76View=async key=>{viewing=await getPhotos('e76');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.octe76Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')octe76Step(1);if(ev.key==='ArrowLeft')octe76Step(-1);});
  window.octe76EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e76')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e76');};
    cls().scrollTop=0;
  };
  window.octe76Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'octe76-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e76',sectionId,data,caption:file.name});}await showEvent('e76');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e76')).find(p=>p.key===key);
  window.octe76Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('octe76-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e76');};
  window.octe76SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e76');};
  window.octe76RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e76');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1982095133093851309";
 const supplied={
  "id": "e77",
  "title": "141st SLSWCA — Investment Approvals",
  "date": "2025-10-25",
  "endDate": "2025-10-25",
  "location": "Bhubaneswar, Odisha",
  "category": "Clearances & approvals",
  "description": "Chief Secretary Shri Manoj Ahuja chaired the 141st State Level Single Window Clearance Authority meeting. The official overview reports approved industrial investment of ₹4,019.53 crore and employment potential of 16,590. Contemporary reporting identifies 21 approved projects.\n\nThe eight supplied sector graphics list 18 projects worth ₹3,577 crore with 14,490 potential jobs. This is a partial breakdown: 3 projects, ₹442.53 crore and 2,100 potential jobs are not allocated in the supplied graphics. No missing sector or proponent has been inferred.\n\nSector posts published on 26–29 October support the 25 October meeting. The IT/ITES/data-centre label follows the infographic, which is more specific than its accompanying post text. Figures describe approved investment and potential employment, not realised outcomes.",
  "sections": [
    {
      "id": "meeting",
      "title": "141st SLSWCA Meeting",
      "date": "2025-10-25",
      "endDate": "2025-10-25",
      "location": "",
      "description": "Chief Secretary Shri Manoj Ahuja chaired the meeting. The official headline figures are retained separately from the incomplete supplied sector breakdown.",
      "photos": [
        {
          "key": "oct-8-1",
          "data": "october-2025/post-8-1.jpg",
          "caption": "141st SLSWCA Meeting · official Invest Odisha image",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1982095133093851309"
        },
        {
          "key": "oct-8-2",
          "data": "october-2025/post-8-2.jpg",
          "caption": "141st SLSWCA Meeting · official Invest Odisha image · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1982095133093851309"
        }
      ],
      "isMeeting": true,
      "sourceUrl": "https://x.com/InvestInOdisha/status/1982095133093851309"
    },
    {
      "id": "sector-1",
      "title": "Steel, Iron & Ferro Alloys",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Investment and employment potential reproduced from the supplied official sector infographic. These are approved proposal values and potential jobs.",
      "photos": [
        {
          "key": "oct-9-1",
          "data": "october-2025/post-9-1.jpg",
          "caption": "Steel, Iron & Ferro Alloys · official Invest Odisha image",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1982333595491680293"
        }
      ],
      "investment": 342,
      "employment": 1380,
      "projects": [
        {
          "name": "Umang Associates (P) Ltd",
          "district": "Jaipur (as printed)"
        },
        {
          "name": "Inland World Logistics Private Ltd",
          "district": "Jaipur (as printed)"
        },
        {
          "name": "Shree M K Steel Private Ltd",
          "district": "Jaipur (as printed)"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1982333595491680293"
    },
    {
      "id": "sector-2",
      "title": "Textiles & Apparel",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Investment and employment potential reproduced from the supplied official sector infographic. These are approved proposal values and potential jobs.",
      "photos": [
        {
          "key": "oct-10-1",
          "data": "october-2025/post-10-1.jpg",
          "caption": "Textiles & Apparel · official Invest Odisha image",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1982633300784271738"
        }
      ],
      "investment": 703,
      "employment": 9444,
      "projects": [
        {
          "name": "Toray MAS Apparel India Private Ltd",
          "district": "Khordha"
        },
        {
          "name": "Shree Ambica Cotspin Private Ltd",
          "district": "Balangir"
        },
        {
          "name": "Bonie Enclave Private Ltd",
          "district": "Puri"
        },
        {
          "name": "Iris Clothing Ltd",
          "district": "Khordha"
        },
        {
          "name": "Kartar Fashions Private Ltd",
          "district": "Cuttack"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1982633300784271738"
    },
    {
      "id": "sector-3",
      "title": "Food, Beverage & Allied Sectors",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Investment and employment potential reproduced from the supplied official sector infographic. These are approved proposal values and potential jobs.",
      "photos": [
        {
          "key": "oct-11-1",
          "data": "october-2025/post-11-1.jpg",
          "caption": "Food, Beverage & Allied Sectors · official Invest Odisha image",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1983004286759121286"
        }
      ],
      "investment": 997,
      "employment": 1207,
      "projects": [
        {
          "name": "Reliance Consumer",
          "district": "Khordha"
        },
        {
          "name": "Ashirbad Food Processing Private Ltd",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1983004286759121286"
    },
    {
      "id": "sector-4",
      "title": "Green Energy Equipment",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Investment and employment potential reproduced from the supplied official sector infographic. These are approved proposal values and potential jobs.",
      "photos": [
        {
          "key": "oct-12-1",
          "data": "october-2025/post-12-1.jpg",
          "caption": "Green Energy Equipment · official Invest Odisha image",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1983038935174394136"
        }
      ],
      "investment": 750,
      "employment": 515,
      "projects": [
        {
          "name": "Icon Solaren Power Technologies Private Ltd",
          "district": "Ganjam"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1983038935174394136"
    },
    {
      "id": "sector-5",
      "title": "Coal & Coke Screening, Washing & Briquetting",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Investment and employment potential reproduced from the supplied official sector infographic. These are approved proposal values and potential jobs.",
      "photos": [
        {
          "key": "oct-13-1",
          "data": "october-2025/post-13-1.jpg",
          "caption": "Coal & Coke Screening, Washing & Briquetting · official Invest Odisha image",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1983395095337660704"
        }
      ],
      "investment": 87,
      "employment": 340,
      "projects": [
        {
          "name": "Fuelco Power",
          "district": "Jharsuguda"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1983395095337660704"
    },
    {
      "id": "sector-6",
      "title": "IT, ITES & Data Centres",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Investment and employment potential reproduced from the supplied official sector infographic. These are approved proposal values and potential jobs.",
      "photos": [
        {
          "key": "oct-14-1",
          "data": "october-2025/post-14-1.jpg",
          "caption": "IT, ITES & Data Centres · official Invest Odisha image",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1983474424780370149"
        }
      ],
      "investment": 70,
      "employment": 290,
      "projects": [
        {
          "name": "NLC India Ltd",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1983474424780370149"
    },
    {
      "id": "sector-7",
      "title": "Tourism",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Investment and employment potential reproduced from the supplied official sector infographic. These are approved proposal values and potential jobs.",
      "photos": [
        {
          "key": "oct-15-1",
          "data": "october-2025/post-15-1.jpg",
          "caption": "Tourism · official Invest Odisha image",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1983474566094893216"
        }
      ],
      "investment": 478,
      "employment": 1014,
      "projects": [
        {
          "name": "Lyfe Hotel",
          "district": "Cuttack, Barang"
        },
        {
          "name": "Hotel Pal Regency Private Ltd",
          "district": "Khordha"
        },
        {
          "name": "Udra Constructions Private Ltd",
          "district": "Sambalpur"
        },
        {
          "name": "Mesmerizinn Paradorr Private Ltd",
          "district": "Kandhamal"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1983474566094893216"
    },
    {
      "id": "sector-8",
      "title": "Transportation & Storage",
      "date": "",
      "endDate": "",
      "location": "",
      "description": "Investment and employment potential reproduced from the supplied official sector infographic. These are approved proposal values and potential jobs.",
      "photos": [
        {
          "key": "oct-16-1",
          "data": "october-2025/post-16-1.jpg",
          "caption": "Transportation & Storage · official Invest Odisha image",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1983495902229660056"
        }
      ],
      "investment": 150,
      "employment": 300,
      "projects": [
        {
          "name": "Shri Mahavir Ferro Alloys",
          "district": "Cuttack"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1983495902229660056"
    }
  ],
  "highlights": [
    {
      "value": "21",
      "label": "Projects approved (supporting report)"
    },
    {
      "value": "₹4,019.53 crore",
      "label": "Approved investment"
    },
    {
      "value": "16,590",
      "label": "Employment potential"
    },
    {
      "value": "18 of 21",
      "label": "Projects in supplied sector data"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1982095133093851309",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1982095133093851309",
      "url": "https://x.com/InvestInOdisha/status/1982095133093851309"
    },
    {
      "label": "Official Invest Odisha post · 1982333595491680293",
      "url": "https://x.com/InvestInOdisha/status/1982333595491680293"
    },
    {
      "label": "Official Invest Odisha post · 1982633300784271738",
      "url": "https://x.com/InvestInOdisha/status/1982633300784271738"
    },
    {
      "label": "Official Invest Odisha post · 1983004286759121286",
      "url": "https://x.com/InvestInOdisha/status/1983004286759121286"
    },
    {
      "label": "Official Invest Odisha post · 1983038935174394136",
      "url": "https://x.com/InvestInOdisha/status/1983038935174394136"
    },
    {
      "label": "Official Invest Odisha post · 1983395095337660704",
      "url": "https://x.com/InvestInOdisha/status/1983395095337660704"
    },
    {
      "label": "Official Invest Odisha post · 1983474424780370149",
      "url": "https://x.com/InvestInOdisha/status/1983474424780370149"
    },
    {
      "label": "Official Invest Odisha post · 1983474566094893216",
      "url": "https://x.com/InvestInOdisha/status/1983474566094893216"
    },
    {
      "label": "Official Invest Odisha post · 1983495902229660056",
      "url": "https://x.com/InvestInOdisha/status/1983495902229660056"
    },
    {
      "label": "Elets eGov · separate HLCA and SLSWCA project counts",
      "url": "https://egov.eletsonline.com/2025/10/odisha-approves-33-new-projects-worth-1-46-lakh-crore/"
    }
  ],
  "coverPhoto": {
    "key": "oct-8-1",
    "data": "october-2025/post-8-1.jpg",
    "caption": "141st SLSWCA Meeting · official Invest Odisha image",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1982095133093851309"
  },
  "imageUrl": "october-2025/post-8-1.jpg",
  "contentVersion": 1,
  "breakdownStatus": "partial",
  "breakdownTotals": {
    "projects": 18,
    "investment": 3577,
    "employment": 14490
  },
  "sourceUrls": [
    "https://x.com/InvestInOdisha/status/1982095133093851309",
    "https://x.com/InvestInOdisha/status/1982333595491680293",
    "https://x.com/InvestInOdisha/status/1982633300784271738",
    "https://x.com/InvestInOdisha/status/1983004286759121286",
    "https://x.com/InvestInOdisha/status/1983038935174394136",
    "https://x.com/InvestInOdisha/status/1983395095337660704",
    "https://x.com/InvestInOdisha/status/1983474424780370149",
    "https://x.com/InvestInOdisha/status/1983474566094893216",
    "https://x.com/InvestInOdisha/status/1983495902229660056"
  ]
};
const eventRecord=events.find(e=>e.id==='e77');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e77');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e77');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e77'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
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
    if(id!=='e77'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="s141View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="s141Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="s141SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="s141RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Sector approvals</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e77')">Edit overview & highlights</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Official overview post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="141st SLSWCA meeting and sector approvals">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Section ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="s141EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${sectorDetails(s)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this sector</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="s141Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="s141EditSection()">+ Add sector</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal','slswca-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e77'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="s141Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="s141Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.s141View=async key=>{viewing=await getPhotos('e77');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.s141Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')s141Step(1);if(ev.key==='ArrowLeft')s141Step(-1);});
  window.s141EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">141st SLSWCA</div><h2>${id?'Edit sector':'Add sector'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div>${s.isMeeting?'':`<div class="formgrid"><div class="field"><label>Approved investment (₹ crore)</label><input name="sectorInvestment" type="number" min="0" step="0.01" required value="${esc(String(s.investment||0))}"></div><div class="field"><label>Employment potential</label><input name="sectorEmployment" type="number" min="0" step="1" required value="${esc(String(s.employment||0))}"></div></div><div class="field"><label>Projects — one per line: proponent | district</label><textarea name="sectorProjects">${esc((s.projects||[]).map(p=>p.name+" | "+p.district).join("\n"))}</textarea></div>`}<div class="chem-tools"><button class="btn red">Save sector</button><button type="button" class="btn" onclick="showEvent('e77')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!s.isMeeting){s.investment=Number(f.get('sectorInvestment')||0);s.employment=Number(f.get('sectorEmployment')||0);s.projects=String(f.get('sectorProjects')||'').split(/\n/).filter(x=>x.trim()).map(x=>{const [name,...district]=x.split('|');return {name:name.trim(),district:district.join('|').trim()};});}if(!id)current().sections.push(s);save();showEvent('e77');};
    cls().scrollTop=0;
  };
  window.s141Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'s141-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e77',sectionId,data,caption:file.name});}await showEvent('e77');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e77')).find(p=>p.key===key);
  window.s141Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('s141-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e77');};
  window.s141SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e77');};
  window.s141RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e77');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1982071994540552466";
 const supplied={
  "id": "e78",
  "title": "42nd HLCA — Major Industrial Investment Approvals",
  "date": "2025-10-25",
  "endDate": "2025-10-25",
  "location": "Bhubaneswar, Odisha",
  "category": "Clearances & approvals",
  "description": "Chief Minister Shri Mohan Charan Majhi chaired the 42nd High-Level Clearance Authority meeting, approving industrial projects worth ₹1,41,993.54 crore with employment potential of 49,745. Supporting contemporary reporting identifies 12 proposals.\n\nThis entry covers HLCA approvals only. The 141st SLSWCA met on the same date and is recorded separately; its figures have not been added here. Approved investment and potential employment are not realised investment or jobs already created.",
  "sections": [
    {
      "id": "meeting",
      "title": "42nd HLCA Meeting",
      "date": "2025-10-25",
      "endDate": "2025-10-25",
      "location": "",
      "description": "The Chief Minister chaired the meeting to consider major industrial proposals. The official post reports ₹1,41,993.54 crore in approvals and 49,745 potential jobs.",
      "photos": [
        {
          "key": "oct-17-1",
          "data": "october-2025/post-17-1.jpg",
          "caption": "42nd HLCA Meeting · official Invest Odisha image",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1982071994540552466"
        },
        {
          "key": "oct-17-2",
          "data": "october-2025/post-17-2.jpg",
          "caption": "42nd HLCA Meeting · official Invest Odisha image · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1982071994540552466"
        }
      ]
    }
  ],
  "highlights": [
    {
      "value": "12",
      "label": "Projects approved (supporting report)"
    },
    {
      "value": "₹1,41,993.54 crore",
      "label": "Approved investment"
    },
    {
      "value": "49,745",
      "label": "Employment potential"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1982071994540552466",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1982071994540552466",
      "url": "https://x.com/InvestInOdisha/status/1982071994540552466"
    },
    {
      "label": "Elets eGov · separate HLCA and SLSWCA project counts",
      "url": "https://egov.eletsonline.com/2025/10/odisha-approves-33-new-projects-worth-1-46-lakh-crore/"
    }
  ],
  "coverPhoto": {
    "key": "oct-17-1",
    "data": "october-2025/post-17-1.jpg",
    "caption": "42nd HLCA Meeting · official Invest Odisha image",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1982071994540552466"
  },
  "imageUrl": "october-2025/post-17-1.jpg",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e78');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e78');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e78');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e78'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e78'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="octe78View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="octe78Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="octe78SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="octe78RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e78')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="octe78EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="octe78Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="octe78EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e78'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="octe78Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="octe78Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.octe78View=async key=>{viewing=await getPhotos('e78');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.octe78Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')octe78Step(1);if(ev.key==='ArrowLeft')octe78Step(-1);});
  window.octe78EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e78')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e78');};
    cls().scrollTop=0;
  };
  window.octe78Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'octe78-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e78',sectionId,data,caption:file.name});}await showEvent('e78');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e78')).find(p=>p.key===key);
  window.octe78Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('octe78-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e78');};
  window.octe78SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e78');};
  window.octe78RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e78');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/1981373311117635884";
 const supplied={
  "id": "e79",
  "title": "Chief Minister Meets Vedanta Chairman Anil Agarwal",
  "date": "2025-10-23",
  "endDate": "2025-10-23",
  "location": "Lok Seva Bhawan, Bhubaneswar",
  "category": "Industry engagements",
  "description": "Chief Minister Shri Mohan Charan Majhi met Shri Anil Agarwal, Founder and Chairman of Vedanta Group, at Lok Seva Bhawan. They discussed Vedanta’s ₹1 lakh crore investment plans in Odisha across aluminium, ferro-alloys and downstream sectors.\n\nThe amount describes investment plans discussed at the meeting, not fresh approvals or investment already realised.",
  "sections": [
    {
      "id": "meeting",
      "title": "Vedanta’s Odisha Investment Plans",
      "date": "2025-10-23",
      "endDate": "2025-10-23",
      "location": "",
      "description": "The meeting focused on aluminium, ferro-alloys and downstream opportunities within Vedanta’s proposed investment plans.",
      "photos": [
        {
          "key": "oct-18-1",
          "data": "october-2025/post-18-1.jpg",
          "caption": "Vedanta’s Odisha Investment Plans · official Invest Odisha image",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1981373311117635884"
        },
        {
          "key": "oct-18-2",
          "data": "october-2025/post-18-2.jpg",
          "caption": "Vedanta’s Odisha Investment Plans · official Invest Odisha image · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1981373311117635884"
        },
        {
          "key": "oct-18-3",
          "data": "october-2025/post-18-3.jpg",
          "caption": "Vedanta’s Odisha Investment Plans · official Invest Odisha image · additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1981373311117635884"
        }
      ]
    }
  ],
  "highlights": [
    {
      "value": "₹1 lakh crore",
      "label": "Investment plans discussed"
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/1981373311117635884",
  "officialSources": [
    {
      "label": "Official Invest Odisha post · 1981373311117635884",
      "url": "https://x.com/InvestInOdisha/status/1981373311117635884"
    }
  ],
  "coverPhoto": {
    "key": "oct-18-1",
    "data": "october-2025/post-18-1.jpg",
    "caption": "Vedanta’s Odisha Investment Plans · official Invest Odisha image",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1981373311117635884"
  },
  "imageUrl": "october-2025/post-18-1.jpg",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e79');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e79');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e79');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e79'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e79'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="octe79View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="octe79Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="octe79SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="octe79RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e79')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="octe79EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="octe79Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="octe79EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e79'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="octe79Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="octe79Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.octe79View=async key=>{viewing=await getPhotos('e79');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.octe79Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')octe79Step(1);if(ev.key==='ArrowLeft')octe79Step(-1);});
  window.octe79EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e79')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e79');};
    cls().scrollTop=0;
  };
  window.octe79Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'octe79-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e79',sectionId,data,caption:file.name});}await showEvent('e79');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e79')).find(p=>p.key===key);
  window.octe79Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('octe79-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e79');};
  window.octe79SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e79');};
  window.octe79RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e79');};
  render();
})();

/* April 2026: EPIC campus inauguration and JSW–JFE partnership; offline media. */
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2049702801002180778";
 const supplied={
  "title": "EPIC Group — Trimetro Garment Manufacturing Campus Inauguration",
  "date": "2026-04-29",
  "endDate": "2026-04-29",
  "location": "Kalibeti, Khordha, Odisha",
  "category": "Inauguration",
  "description": "Hon’ble Industries and Skill Development & Technical Education Minister Shri Sampad Chandra Swain inaugurated Trimetro Garments India Pvt. Ltd., part of EPIC Group, at Kalibeti in Khordha on 29 April 2026.\n\nInvest Odisha reported an investment of ₹376.85 crore and employment potential of more than 7,000 jobs, with women expected to account for 90% of the workforce. The project is intended to strengthen apparel manufacturing and create opportunities for downstream, ancillary and MSME businesses in Khordha and nearby regions.\n\nThe employment figures describe the project’s reported potential, not a verified count of jobs already filled.",
  "highlights": [
    {
      "value": "₹376.85 crore",
      "label": "Investment reported by Invest Odisha"
    },
    {
      "value": "7,000+",
      "label": "Reported employment potential"
    },
    {
      "value": "90%",
      "label": "Women’s share of workforce envisaged"
    }
  ],
  "sections": [
    {
      "id": "campus-inauguration",
      "title": "Campus Opening & Women-Led Employment",
      "date": "2026-04-29",
      "location": "Kalibeti, Khordha",
      "description": "The programme included the plaque unveiling, ribbon-cutting and the Minister’s address. The inauguration marked a new garment-manufacturing milestone for the district, with a focus on inclusive employment and local industrial linkages.",
      "photos": [
        {
          "key": "epicapril-1",
          "data": "april-epic-jswjfe-2026/epic-1.jpg",
          "caption": "Plaque unveiling at EPIC Group’s Trimetro campus inauguration",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2049702801002180778"
        },
        {
          "key": "epicapril-2",
          "data": "april-epic-jswjfe-2026/epic-2.jpg",
          "caption": "Industries Minister Shri Sampad Chandra Swain addresses the inauguration",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2049702801002180778"
        },
        {
          "key": "epicapril-3",
          "data": "april-epic-jswjfe-2026/epic-3.jpg",
          "caption": "Trimetro campus inauguration stage — banner confirms 29 April 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2049702801002180778"
        },
        {
          "key": "epicapril-4",
          "data": "april-epic-jswjfe-2026/epic-4.jpg",
          "caption": "Ribbon-cutting during the Trimetro campus inauguration",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2049702801002180778"
        }
      ]
    }
  ],
  "coverPhoto": {
    "key": "epicapril-1",
    "data": "april-epic-jswjfe-2026/epic-1.jpg",
    "caption": "Plaque unveiling at EPIC Group’s Trimetro campus inauguration",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2049702801002180778"
  },
  "imageUrl": "april-epic-jswjfe-2026/epic-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2049702801002180778",
  "officialSources": [
    {
      "label": "Invest Odisha: inauguration and project figures",
      "url": "https://x.com/InvestInOdisha/status/2049702801002180778"
    }
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e37');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e37');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e37');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e37'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e37'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="epicaprilView('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="epicaprilCaption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="epicaprilSetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="epicaprilRemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Campus inauguration</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e37')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Programme sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="epicaprilEditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="epicaprilUpload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="epicaprilEditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e37'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="epicaprilStep(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="epicaprilStep(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.epicaprilView=async key=>{viewing=await getPhotos('e37');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.epicaprilStep=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')epicaprilStep(1);if(ev.key==='ArrowLeft')epicaprilStep(-1);});
  window.epicaprilEditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">EPIC Campus Inauguration</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e37')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e37');};
    cls().scrollTop=0;
  };
  window.epicaprilUpload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'epicapril-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e37',sectionId,data,caption:file.name});}await showEvent('e37');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e37')).find(p=>p.key===key);
  window.epicaprilCaption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('epicapril-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e37');};
  window.epicaprilSetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e37');};
  window.epicaprilRemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e37');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://drive.google.com/drive/folders/1BhsVU1trSRzwEy6ql4_QdlTTNwrFcNGH";
 const supplied={
  "title": "JSW–JFE — Joint Venture Establishment & Partnership Initiation",
  "date": "2026-04-24",
  "endDate": "2026-04-24",
  "location": "Sambalpur, Odisha",
  "category": "Industrial Partnership",
  "description": "Hon’ble Chief Minister Shri Mohan Charan Majhi attended the Joint Venture Establishment and Partnership Initiation Ceremony of JSW Steel Limited and Japan’s JFE Steel Corporation in Sambalpur on 24 April 2026, in the presence of Hon’ble Union Education Minister Shri Dharmendra Pradhan, Japanese diplomatic representatives and company leadership.\n\nThe partners unveiled the JSW JFE Steel Limited identity for their 50:50 joint venture encompassing integrated steel operations at Sambalpur. The collaboration brings together JSW’s operational experience and JFE’s steelmaking technology to strengthen Odisha’s high-value steel ecosystem.\n\nThis entry records the partnership ceremony and corporate-identity unveiling; it does not imply that all future expansion capacity was commissioned on this date.",
  "highlights": [
    {
      "value": "50:50",
      "label": "JSW Steel–JFE Steel joint venture"
    }
  ],
  "sections": [
    {
      "id": "leadership",
      "title": "Government, Diplomatic & Industry Participation",
      "date": "2026-04-24",
      "location": "Sambalpur, Odisha",
      "description": "The programme brought together the Chief Minister, Union Minister Shri Dharmendra Pradhan, Japanese diplomatic representatives and JSW–JFE leadership, reflecting the strategic importance of Indo-Japanese industrial collaboration.",
      "photos": [
        {
          "key": "jswjfeapril-3",
          "data": "april-epic-jswjfe-2026/jswjfe-3.jpg",
          "caption": "Chief Minister, Union Minister and industry leaders on the ceremony stage",
          "sourceUrl": "https://drive.google.com/file/d/1StQdvHRlXWK-PYevNdnBIv-EiT2ifOlQ/view"
        },
        {
          "key": "jswjfeapril-5",
          "data": "april-epic-jswjfe-2026/jswjfe-5.jpg",
          "caption": "Chief Minister Shri Mohan Charan Majhi addresses the ceremony",
          "sourceUrl": "https://drive.google.com/file/d/1gREyhEKb4m6ObjVh-08CNj-SoLsRz3dD/view"
        },
        {
          "key": "jswjfeapril-6",
          "data": "april-epic-jswjfe-2026/jswjfe-6.jpg",
          "caption": "Government, diplomatic and industry representatives at the JSW–JFE ceremony",
          "sourceUrl": "https://drive.google.com/file/d/1STLAqYxog9BSn8qqdZSJH0J-0Su0a64P/view"
        }
      ]
    },
    {
      "id": "partnership",
      "title": "Forging Ahead — JSW JFE Steel Limited",
      "date": "2026-04-24",
      "location": "Sambalpur, Odisha",
      "description": "The ceremony celebrated the partners’ shared industrial vision and unveiled the joint venture’s new identity. The partnership combines operational capabilities and technology expertise in support of Odisha’s steel-manufacturing ecosystem.",
      "photos": [
        {
          "key": "jswjfeapril-1",
          "data": "april-epic-jswjfe-2026/jswjfe-1.jpg",
          "caption": "JFE representatives address the JSW–JFE ceremony",
          "sourceUrl": "https://drive.google.com/file/d/1u7LJ7dsusL14OAzqrB6SXv0TSaMj9nSH/view"
        },
        {
          "key": "jswjfeapril-2",
          "data": "april-epic-jswjfe-2026/jswjfe-2.jpg",
          "caption": "Japanese diplomatic representation at the partnership ceremony",
          "sourceUrl": "https://drive.google.com/file/d/1n6Jubv2Uw2Y_XnCkSpRcwgbBPjwvwlp_/view"
        },
        {
          "key": "jswjfeapril-4",
          "data": "april-epic-jswjfe-2026/jswjfe-4.jpg",
          "caption": "Commemorative publication unveiled during the partnership programme",
          "sourceUrl": "https://drive.google.com/file/d/18gA9THPnNmcPdj6t9tvSscW82in26KPt/view"
        }
      ]
    }
  ],
  "coverPhoto": {
    "key": "jswjfeapril-6",
    "data": "april-epic-jswjfe-2026/jswjfe-6.jpg",
    "caption": "Government, diplomatic and industry representatives at the JSW–JFE ceremony",
    "sourceUrl": "https://drive.google.com/file/d/1STLAqYxog9BSn8qqdZSJH0J-0Su0a64P/view"
  },
  "imageUrl": "april-epic-jswjfe-2026/jswjfe-6.jpg",
  "sourceUrl": "https://drive.google.com/drive/folders/1BhsVU1trSRzwEy6ql4_QdlTTNwrFcNGH",
  "officialSources": [
    {
      "label": "Invest Odisha: supplied event post",
      "url": "https://x.com/InvestInOdisha/status/2047652204107194481"
    },
    {
      "label": "CM Office: ceremony and leadership",
      "url": "https://cm.odisha.gov.in/en/latest-news/honble-chief-minister-shri-mohan-charan-majhi-attend-joint-venture-establishment-and"
    },
    {
      "label": "JSW: joint venture identity and integrated operations",
      "url": "https://www.jsw.in/newsroom/press/jsw-jfe-unveil-jsw-jfe-steel-ltd-a-new-chapter-in-indias-steel-story/"
    }
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e38');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e38');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e38');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e38'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e38'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="jswjfeaprilView('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="jswjfeaprilCaption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="jswjfeaprilSetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="jswjfeaprilRemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Industrial partnership</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e38')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Full photo collection ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Programme sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="jswjfeaprilEditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="jswjfeaprilUpload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="jswjfeaprilEditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e38'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="jswjfeaprilStep(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="jswjfeaprilStep(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.jswjfeaprilView=async key=>{viewing=await getPhotos('e38');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.jswjfeaprilStep=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')jswjfeaprilStep(1);if(ev.key==='ArrowLeft')jswjfeaprilStep(-1);});
  window.jswjfeaprilEditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">JSW–JFE Partnership</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e38')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e38');};
    cls().scrollTop=0;
  };
  window.jswjfeaprilUpload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'jswjfeapril-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e38',sectionId,data,caption:file.name});}await showEvent('e38');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e38')).find(p=>p.key===key);
  window.jswjfeaprilCaption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('jswjfeapril-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e38');};
  window.jswjfeaprilSetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e38');};
  window.jswjfeaprilRemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original in Google Drive will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e38');};
  render();
})();



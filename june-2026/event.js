/* June council, two-year retrospective and 45th HLCA: official source-backed records. */
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2070472941301879067";
 const supplied={
  "title": "3rd CII Eastern Regional Council Meeting — Launch of Go East",
  "date": "2026-06-26",
  "endDate": "2026-06-26",
  "category": "Conferences & summits",
  "location": "Mayfair, Bhubaneswar, Odisha",
  "description": "At the CII Eastern Regional Council Meeting on 26 June 2026, Hon’ble Chief Minister Shri Mohan Charan Majhi unveiled Go East, a platform intended to accelerate industrialisation across Eastern India, and presented Odisha’s next phase of growth.\n\nIndustries Minister Shri Sampad Chandra Swain highlighted responsive governance, faster project grounding and diversification into new-age and labour-intensive industries. His address emphasised skilling, ease of doing business and industry partnerships, aligned with Samrudh Odisha 2036 and Viksit Bharat 2047.\n\nThe existing archive identifies this as the third council meeting at Mayfair, Bhubaneswar; that meeting number and venue are retained.",
  "highlights": [],
  "sections": [
    {
      "id": "go-east",
      "title": "Chief Minister’s Address & Go East Launch",
      "date": "2026-06-26",
      "location": "Bhubaneswar, Odisha",
      "description": "The Chief Minister’s address connected the Go East initiative with industrial development across Eastern India and Odisha’s growth roadmap. The official post records the unveiling and associated council engagement.",
      "sourceUrl": "https://x.com/InvestInOdisha/status/2070472941301879067",
      "photos": [
        {
          "key": "june-post-1-1",
          "data": "june-2026/post-1-1.jpg",
          "caption": "Chief Minister at the CII Eastern Regional Council Meeting · 26 June 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2070472941301879067"
        },
        {
          "key": "june-post-1-2",
          "data": "june-2026/post-1-2.jpg",
          "caption": "Chief Minister at the CII Eastern Regional Council Meeting · 26 June 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2070472941301879067"
        },
        {
          "key": "june-post-1-3",
          "data": "june-2026/post-1-3.jpg",
          "caption": "Chief Minister at the CII Eastern Regional Council Meeting · 26 June 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2070472941301879067"
        }
      ]
    },
    {
      "id": "minister",
      "title": "Industries Minister’s Address",
      "date": "2026-06-26",
      "location": "Bhubaneswar, Odisha",
      "description": "Shri Sampad Chandra Swain outlined Odisha’s industrial transformation, with an emphasis on timely implementation, sector diversification, quality employment and skills. The address also stressed government–industry collaboration and investor facilitation.",
      "sourceUrl": "https://x.com/InvestInOdisha/status/2070476970174107731",
      "photos": [
        {
          "key": "june-post-2-1",
          "data": "june-2026/post-2-1.jpg",
          "caption": "Industries Minister’s engagement at the CII Eastern Regional Council Meeting · 26 June 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2070476970174107731"
        },
        {
          "key": "june-post-2-2",
          "data": "june-2026/post-2-2.jpg",
          "caption": "Industries Minister’s engagement at the CII Eastern Regional Council Meeting · 26 June 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2070476970174107731"
        },
        {
          "key": "june-post-2-3",
          "data": "june-2026/post-2-3.jpg",
          "caption": "Industries Minister’s engagement at the CII Eastern Regional Council Meeting · 26 June 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2070476970174107731"
        }
      ]
    }
  ],
  "coverPhoto": {
    "key": "june-post-1-1",
    "data": "june-2026/post-1-1.jpg",
    "caption": "Chief Minister at the CII Eastern Regional Council Meeting · 26 June 2026",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2070472941301879067"
  },
  "imageUrl": "june-2026/post-1-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2070472941301879067",
  "sourceUrls": [
    "https://x.com/InvestInOdisha/status/2070472941301879067",
    "https://x.com/InvestInOdisha/status/2070476970174107731"
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e26');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e26');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e26');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e26'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal','slswca-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e26'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="junee26View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="junee26Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="junee26SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="junee26RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Industry council & Go East</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e26')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a>${e.officialReleaseUrl?`<a class="btn" href="${esc(e.officialReleaseUrl)}" target="_blank" rel="noopener">Chief Minister’s official release ↗</a>`:''}</div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}</section>
      <nav class="chem-index" aria-label="Industry council & Go East">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="junee26EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${s.sourceUrl?`<p><a href="${esc(s.sourceUrl)}" target="_blank" rel="noopener">View original Invest Odisha post ↗</a></p>`:''}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="junee26Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="junee26EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e26'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="junee26Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="junee26Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.junee26View=async key=>{viewing=await getPhotos('e26');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.junee26Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')junee26Step(1);if(ev.key==='ArrowLeft')junee26Step(-1);});
  window.junee26EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">3rd CII Eastern Regional Council Meeting — Launch of Go East</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e26')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e26');};
    cls().scrollTop=0;
  };
  window.junee26Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'junee26-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e26',sectionId,data,caption:file.name});}await showEvent('e26');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e26')).find(p=>p.key===key);
  window.junee26Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('junee26-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e26');};
  window.junee26SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e26');};
  window.junee26RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e26');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2067884879623446624";
 const supplied={
  "title": "Two Years of Industrial Growth — Reforms, Investment & Implementation",
  "date": "2026-06-16",
  "endDate": "2026-06-22",
  "category": "Achievements & milestones",
  "location": "Odisha · campaign retrospective",
  "description": "Invest Odisha’s two-year achievement campaign reviewed reforms, investment approvals, project implementation and investor outreach. The supplied posts were published between 19 and 22 June 2026 and report cumulative achievements over the two-year period, not outcomes from a single meeting.\n\nThe campaign reports 477 approved large projects representing ₹9.49 lakh crore of investment. Separately, it reports 152 projects grounded and inaugurated, ₹3,11,856 crore under execution and associated employment potential of 2,41,007.\n\nThese categories are not added together: approval, implementation, investment under execution and employment potential describe different stages and measures. The original 16 June archive start is retained; the end date is extended to 22 June to include all supplied posts.",
  "highlights": [
    {
      "label": "Large projects approved · two-year campaign",
      "value": "477"
    },
    {
      "label": "Investment approved · two-year campaign",
      "value": "₹9.49 lakh crore"
    },
    {
      "label": "Projects grounded & inaugurated · campaign",
      "value": "152"
    },
    {
      "label": "Investment under execution · campaign",
      "value": "₹3,11,856 crore"
    },
    {
      "label": "Employment potential · implementation projects",
      "value": "2,41,007"
    },
    {
      "label": "Investor meetings · two-year campaign",
      "value": "700+"
    }
  ],
  "sections": [
    {
      "id": "reforms",
      "title": "Reforms & National Recognition",
      "date": "2026-06-19",
      "location": "Two-year achievement campaign",
      "description": "The campaign graphic reports implementation of 98% of BRAP reforms, second rank in Phase I deregulation, and implementation across all 23 priority areas under Deregulation 1.0. These are figures reported in the dated official campaign, not a claim about the latest assessment.",
      "sourceUrl": "https://x.com/InvestInOdisha/status/2067884879623446624",
      "photos": [
        {
          "key": "june-post-4-1",
          "data": "june-2026/post-4-1.jpg",
          "caption": "Official two-year campaign graphic · reforms and national recognition",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2067884879623446624"
        }
      ]
    },
    {
      "id": "approvals",
      "title": "Investor Confidence & Approval Mechanisms",
      "date": "2026-06-19",
      "location": "Two-year achievement campaign",
      "description": "The official campaign reports ₹9.49 lakh crore in approved investment across 477 large projects. It records 18 SLSWCA meetings and 10 HLCA meetings, with 368 SLSWCA approvals and 109 HLCA approvals. The two approval counts sum to 477; these are cumulative campaign figures rather than the 45th HLCA’s meeting-specific approvals.",
      "sourceUrl": "https://x.com/InvestInOdisha/status/2067823813367304244",
      "photos": [
        {
          "key": "june-post-5-1",
          "data": "june-2026/post-5-1.jpg",
          "caption": "Official two-year campaign graphic · cumulative investment and approvals",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2067823813367304244"
        }
      ]
    },
    {
      "id": "governance",
      "title": "Smarter Governance — Jan Vishwas Reform",
      "date": "2026-06-19",
      "location": "Two-year achievement campaign",
      "description": "The campaign highlights the Odisha Jan Vishwas Act, 2025, reporting 161 provisions decriminalised and 16 state Acts reformed. The graphic presents the initiative in the context of reduced compliance burden, digital-first governance and faster service delivery. This is a summary of the historical announcement, not legal guidance on current obligations.",
      "sourceUrl": "https://x.com/InvestInOdisha/status/2067943208806666603",
      "photos": [
        {
          "key": "june-post-6-1",
          "data": "june-2026/post-6-1.jpg",
          "caption": "Official two-year campaign graphic · Jan Vishwas reform",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2067943208806666603"
        }
      ]
    },
    {
      "id": "implementation",
      "title": "From Approvals to Implementation",
      "date": "2026-06-20",
      "location": "Two-year achievement campaign",
      "description": "The implementation series distinguishes the approved pipeline from projects progressing on the ground. It reports 477 projects approved, 152 projects grounded and inaugurated, and ₹3,11,856 crore in investment under execution.\n\nIt also reports employment potential of 2,41,007 associated with projects that have moved into implementation. This is potential employment, not a verified count of people already hired. The graphic series uses photographs from earlier project milestones as retrospective illustrations.",
      "sourceUrl": "https://x.com/InvestInOdisha/status/2068191807922720896",
      "photos": [
        {
          "key": "june-post-7-1",
          "data": "june-2026/post-7-1.jpg",
          "caption": "Official two-year retrospective graphic · project approvals and implementation",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2068191807922720896"
        },
        {
          "key": "june-post-7-2",
          "data": "june-2026/post-7-2.jpg",
          "caption": "Official two-year retrospective graphic · project approvals and implementation",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2068191807922720896"
        },
        {
          "key": "june-post-7-3",
          "data": "june-2026/post-7-3.jpg",
          "caption": "Official two-year retrospective graphic · project approvals and implementation",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2068191807922720896"
        },
        {
          "key": "june-post-7-4",
          "data": "june-2026/post-7-4.jpg",
          "caption": "Official two-year retrospective graphic · project approvals and implementation",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2068191807922720896"
        }
      ]
    },
    {
      "id": "outreach",
      "title": "Investor Outreach & Partnerships",
      "date": "2026-06-22",
      "location": "Two-year achievement campaign",
      "description": "The outreach series reports nine domestic roadshows, one international roadshow, more than 700 investor meetings and more than 300 MoUs signed. These counts describe different activities and are not combined into a single total.\n\nThe campaign presents these engagements as a pipeline for future investment and stronger partnerships; it does not establish that every MoU has become an operational project.",
      "sourceUrl": "https://x.com/InvestInOdisha/status/2068921711064723623",
      "photos": [
        {
          "key": "june-post-8-1",
          "data": "june-2026/post-8-1.jpg",
          "caption": "Official two-year retrospective graphic · roadshows, meetings and MoUs",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2068921711064723623"
        },
        {
          "key": "june-post-8-2",
          "data": "june-2026/post-8-2.jpg",
          "caption": "Official two-year retrospective graphic · roadshows, meetings and MoUs",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2068921711064723623"
        },
        {
          "key": "june-post-8-3",
          "data": "june-2026/post-8-3.jpg",
          "caption": "Official two-year retrospective graphic · roadshows, meetings and MoUs",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2068921711064723623"
        },
        {
          "key": "june-post-8-4",
          "data": "june-2026/post-8-4.jpg",
          "caption": "Official two-year retrospective graphic · roadshows, meetings and MoUs",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2068921711064723623"
        }
      ]
    }
  ],
  "coverPhoto": {
    "key": "june-post-4-1",
    "data": "june-2026/post-4-1.jpg",
    "caption": "Official two-year campaign graphic · reforms and national recognition",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2067884879623446624"
  },
  "imageUrl": "june-2026/post-4-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2067884879623446624",
  "sourceUrls": [
    "https://x.com/InvestInOdisha/status/2067884879623446624",
    "https://x.com/InvestInOdisha/status/2067823813367304244",
    "https://x.com/InvestInOdisha/status/2067943208806666603",
    "https://x.com/InvestInOdisha/status/2068191807922720896",
    "https://x.com/InvestInOdisha/status/2068921711064723623"
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e27');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e27');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e27');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e27'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal','slswca-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e27'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="junee27View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="junee27Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="junee27SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="junee27RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Two-year retrospective</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e27')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a>${e.officialReleaseUrl?`<a class="btn" href="${esc(e.officialReleaseUrl)}" target="_blank" rel="noopener">Chief Minister’s official release ↗</a>`:''}</div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}</section>
      <nav class="chem-index" aria-label="Two-year retrospective">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="junee27EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${s.sourceUrl?`<p><a href="${esc(s.sourceUrl)}" target="_blank" rel="noopener">View original Invest Odisha post ↗</a></p>`:''}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="junee27Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="junee27EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal','slswca-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e27'||!current().highlights.length)return;
    cls().classList.add('chem-modal','slswca-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="junee27Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="junee27Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.junee27View=async key=>{viewing=await getPhotos('e27');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.junee27Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')junee27Step(1);if(ev.key==='ArrowLeft')junee27Step(-1);});
  window.junee27EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Two Years of Industrial Growth — Reforms, Investment & Implementation</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e27')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal','slswca-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e27');};
    cls().scrollTop=0;
  };
  window.junee27Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'junee27-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e27',sectionId,data,caption:file.name});}await showEvent('e27');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e27')).find(p=>p.key===key);
  window.junee27Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('junee27-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e27');};
  window.junee27SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e27');};
  window.junee27RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e27');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2067284451865035112";
 const supplied={
  "title": "45th HLCA — Investment Approvals",
  "date": "2026-06-17",
  "endDate": "2026-06-17",
  "category": "Clearances & approvals",
  "location": "Bhubaneswar, Odisha",
  "description": "The 45th High-Level Clearance Authority meeting, chaired by Hon’ble Chief Minister Shri Mohan Charan Majhi on 17 June 2026, approved 20 major industrial projects worth ₹76,612 crore across nine districts, with employment potential exceeding 50,500.\n\nThe Chief Minister’s official release identifies lab-grown diamonds, green-energy equipment and solar PV manufacturing, rare-earth-based value-added products and EV magnets, steel and ferro alloys, pharmaceuticals, railway coach manufacturing, and power and renewable energy among the investment sectors.\n\nThe figures describe approved proposals and potential employment, not projects already completed or jobs already created. They are specific to this HLCA meeting and are separate from the two-year campaign totals.",
  "highlights": [
    {
      "label": "Major projects approved · 45th HLCA",
      "value": "20"
    },
    {
      "label": "Approved investment · 45th HLCA",
      "value": "₹76,612 crore"
    },
    {
      "label": "Employment potential · 45th HLCA",
      "value": "50,500+"
    },
    {
      "label": "Districts covered · 45th HLCA",
      "value": "9"
    }
  ],
  "officialReleaseUrl": "https://cm.odisha.gov.in/en/latest-news/cm-shri-mohan-charan-majhi-chaired-45th-high-level-clearance-authority-hlca-meeting",
  "sections": [
    {
      "id": "hlca-meeting",
      "title": "Meeting & Industrial Investment Priorities",
      "date": "2026-06-17",
      "location": "Bhubaneswar, Odisha",
      "description": "The authority’s approvals cover advanced manufacturing, clean-energy equipment, critical-mineral value addition and other industrial sectors. The two supplied photographs document the meeting chaired by the Chief Minister.",
      "sourceUrl": "https://x.com/InvestInOdisha/status/2067284451865035112",
      "photos": [
        {
          "key": "june-post-3-1",
          "data": "june-2026/post-3-1.jpg",
          "caption": "45th HLCA meeting · official Invest Odisha photograph · 17 June 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2067284451865035112"
        },
        {
          "key": "june-post-3-2",
          "data": "june-2026/post-3-2.jpg",
          "caption": "45th HLCA meeting · official Invest Odisha photograph · 17 June 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2067284451865035112"
        }
      ]
    }
  ],
  "coverPhoto": {
    "key": "june-post-3-1",
    "data": "june-2026/post-3-1.jpg",
    "caption": "45th HLCA meeting · official Invest Odisha photograph · 17 June 2026",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2067284451865035112"
  },
  "imageUrl": "june-2026/post-3-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2067284451865035112",
  "sourceUrls": [
    "https://x.com/InvestInOdisha/status/2067284451865035112"
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e28');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e28');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e28');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e28'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal','slswca-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e28'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="junee28View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="junee28Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="junee28SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="junee28RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · High-level investment approvals</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e28')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a>${e.officialReleaseUrl?`<a class="btn" href="${esc(e.officialReleaseUrl)}" target="_blank" rel="noopener">Chief Minister’s official release ↗</a>`:''}</div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}</section>
      <nav class="chem-index" aria-label="High-level investment approvals">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="junee28EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${s.sourceUrl?`<p><a href="${esc(s.sourceUrl)}" target="_blank" rel="noopener">View original Invest Odisha post ↗</a></p>`:''}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="junee28Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="junee28EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e28'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="junee28Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="junee28Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.junee28View=async key=>{viewing=await getPhotos('e28');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.junee28Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')junee28Step(1);if(ev.key==='ArrowLeft')junee28Step(-1);});
  window.junee28EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">45th HLCA — Investment Approvals</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e28')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e28');};
    cls().scrollTop=0;
  };
  window.junee28Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'junee28-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e28',sectionId,data,caption:file.name});}await showEvent('e28');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e28')).find(p=>p.key===key);
  window.junee28Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('junee28-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e28');};
  window.junee28SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e28');};
  window.junee28RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e28');};
  render();
})();




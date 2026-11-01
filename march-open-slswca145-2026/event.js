/* March 2026: Open feature coverage and 145th SLSWCA approvals; local media. */
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2037416206756663351";
 const supplied={
  "title": "Open Magazine — “The Ore and More”: Odisha’s Industrial Transformation",
  "date": "2026-03-27",
  "endDate": "2026-03-27",
  "category": "Media Coverage",
  "location": "Odisha · Open magazine feature",
  "description": "Invest Odisha shared Open magazine’s feature “The Ore and More”, by Neelabh Raj, on 27 March 2026. The coverage explores Odisha’s economic diversification beyond minerals into manufacturing, MSMEs, port-linked activity and industry-connected skills development.\n\nThis entry records the date of Invest Odisha’s social-media coverage. The supplied magazine clipping carries the issue date 6 April 2026; it is not presented as a government event held on that date.",
  "highlights": [],
  "sections": [
    {
      "id": "coverage",
      "title": "Manufacturing, MSMEs, Ports & Skills",
      "date": "2026-03-27",
      "location": "Media coverage · issue dated 6 April 2026",
      "description": "The official post highlights ports, expanding MSMEs and industry-linked training as elements of Odisha’s evolving growth story. The gallery retains the three page images shared in that post. This is a short editorial summary, not a transcription of the full article.",
      "photos": [
        {
          "key": "openmarch-1",
          "data": "march-open-slswca145-2026/post-1-1.jpg",
          "caption": "Open magazine · “The Ore and More” by Neelabh Raj · supplied clipping 1 of 3",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2037416206756663351"
        },
        {
          "key": "openmarch-2",
          "data": "march-open-slswca145-2026/post-1-2.jpg",
          "caption": "Open magazine · “The Ore and More” by Neelabh Raj · supplied clipping 2 of 3",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2037416206756663351"
        },
        {
          "key": "openmarch-3",
          "data": "march-open-slswca145-2026/post-1-3.jpg",
          "caption": "Open magazine · “The Ore and More” by Neelabh Raj · supplied clipping 3 of 3",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2037416206756663351"
        }
      ]
    }
  ],
  "articleTitle": "The Ore and More",
  "articleAuthor": "Neelabh Raj",
  "issueDate": "2026-04-06",
  "coverPhoto": {
    "key": "openmarch-1",
    "data": "march-open-slswca145-2026/post-1-1.jpg",
    "caption": "Open magazine · “The Ore and More” by Neelabh Raj · supplied clipping 1 of 3",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2037416206756663351"
  },
  "imageUrl": "march-open-slswca145-2026/post-1-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2037416206756663351",
  "officialSources": [
    {
      "label": "Invest Odisha: original feature post",
      "url": "https://x.com/InvestInOdisha/status/2037416206756663351"
    },
    {
      "label": "Open magazine: 6 April issue listing",
      "url": "https://www.readwhere.com/magazine/open-magazine/OPEN/April-6-2026/4133517"
    }
  ],
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e42');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e42');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e42');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e42'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e42'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="openmarchView('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="openmarchCaption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="openmarchSetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="openmarchRemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Media coverage</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e42')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & publication dates</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Feature details">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="openmarchEditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="openmarchUpload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="openmarchEditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e42'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="openmarchStep(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="openmarchStep(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.openmarchView=async key=>{viewing=await getPhotos('e42');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.openmarchStep=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')openmarchStep(1);if(ev.key==='ArrowLeft')openmarchStep(-1);});
  window.openmarchEditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Open Magazine Feature</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e42')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e42');};
    cls().scrollTop=0;
  };
  window.openmarchUpload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'openmarch-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e42',sectionId,data,caption:file.name});}await showEvent('e42');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e42')).find(p=>p.key===key);
  window.openmarchCaption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('openmarch-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e42');};
  window.openmarchSetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e42');};
  window.openmarchRemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e42');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2033899057593389397";
 const supplied={
  "title": "145th SLSWCA — Investment Approvals",
  "date": "2026-03-17",
  "endDate": "2026-03-17",
  "category": "Clearances & approvals",
  "location": "Bhubaneswar, Odisha",
  "description": "The 145th State Level Single Window Clearance Authority meeting, chaired by Chief Secretary Smt. Anu Garg, approved 23 projects across 11 districts. Invest Odisha’s overview reports ₹4,510 crore in investment and employment potential of 10,122.\n\nThe supplied announcements cover 13 sectors, from tourism, apparel and IT services to pharmaceuticals, engineering and logistics. The sector sections reproduce the proponents, locations, investment and employment potential shown in the original graphics.\n\nPublished investment discrepancy: the sector figures total ₹4,511.02 crore, which is ₹1.02 crore above the overview’s ₹4,510 crore. The 23 listed projects and 10,122 potential jobs reconcile to the overview. Both published investment figures are retained without silently altering either.\n\nFigures describe approved proposals and potential employment, not completed investments or jobs already realised. Where a graphic omits a district, none is inferred.",
  "highlights": [
    {
      "value": "23",
      "label": "Projects approved"
    },
    {
      "value": "₹4,510 crore",
      "label": "Approved investment — official overview"
    },
    {
      "value": "10,122",
      "label": "Employment potential"
    },
    {
      "value": "11",
      "label": "Districts covered"
    }
  ],
  "sections": [
    {
      "id": "meeting",
      "title": "145th SLSWCA Meeting",
      "date": "2026-03-17",
      "location": "Bhubaneswar, Odisha",
      "isMeeting": true,
      "description": "Chief Secretary Smt. Anu Garg chaired the meeting. The supplied sector posts were published on 18–19 March and describe approvals from this 17 March meeting.",
      "sourceUrl": "https://x.com/InvestInOdisha/status/2033899057593389397",
      "photos": [
        {
          "key": "s145-meeting",
          "data": "march-open-slswca145-2026/post-2-1.jpg",
          "caption": "145th SLSWCA meeting chaired by Chief Secretary Smt. Anu Garg · 17 March 2026",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2033899057593389397"
        }
      ]
    },
    {
      "id": "sector-1",
      "title": "Tourism",
      "date": "2026-03-17",
      "location": "Koraput · Khordha · Bolangir · Puri",
      "description": "The supplied official graphic records ₹318.00 crore in approved investment and employment potential of 565. These figures apply to the sector as a whole; the proponent grouping follows the original graphic.",
      "investment": 318,
      "employment": 565,
      "projects": [
        {
          "name": "Agravanshi Private Limited",
          "district": "Koraput"
        },
        {
          "name": "Aryapride Hotel and Convention Pvt. Ltd.",
          "district": "Khordha"
        },
        {
          "name": "Shagun Retreat",
          "district": "Bolangir"
        },
        {
          "name": "Aaramya Private Limited",
          "district": "Puri"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2034129050369929216",
      "photos": [
        {
          "key": "s145-sector-1",
          "data": "march-open-slswca145-2026/post-3-1.jpg",
          "caption": "Official 145th SLSWCA graphic · Tourism · illustrative sector imagery",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2034129050369929216"
        }
      ]
    },
    {
      "id": "sector-2",
      "title": "Apparel & Technical Textiles",
      "date": "2026-03-17",
      "location": "Khordha",
      "description": "The supplied official graphic records ₹310.00 crore in approved investment and employment potential of 2,908. These figures apply to the sector as a whole; the proponent grouping follows the original graphic.",
      "investment": 310,
      "employment": 2908,
      "projects": [
        {
          "name": "Sonaselection India Limited",
          "district": "Khordha"
        },
        {
          "name": "Alphatex Private Limited",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2034215657437556847",
      "photos": [
        {
          "key": "s145-sector-2",
          "data": "march-open-slswca145-2026/post-4-1.jpg",
          "caption": "Official 145th SLSWCA graphic · Apparel & Technical Textiles · illustrative sector imagery",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2034215657437556847"
        }
      ]
    },
    {
      "id": "sector-3",
      "title": "IT / ITeS",
      "date": "2026-03-17",
      "location": "Khordha",
      "description": "The supplied official graphic records ₹60.00 crore in approved investment and employment potential of 640. These figures apply to the sector as a whole; the proponent grouping follows the original graphic.",
      "investment": 60,
      "employment": 640,
      "projects": [
        {
          "name": "PricewaterhouseCoopers Services LLP",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2034226552859426818",
      "photos": [
        {
          "key": "s145-sector-3",
          "data": "march-open-slswca145-2026/post-5-1.jpg",
          "caption": "Official 145th SLSWCA graphic · IT / ITeS · illustrative sector imagery",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2034226552859426818"
        }
      ]
    },
    {
      "id": "sector-4",
      "title": "Wood-Based Industries",
      "date": "2026-03-17",
      "location": "Koraput",
      "description": "The supplied official graphic records ₹870.82 crore in approved investment and employment potential of 1,000. These figures apply to the sector as a whole; the proponent grouping follows the original graphic.",
      "investment": 870.82,
      "employment": 1000,
      "projects": [
        {
          "name": "Century Plyboards (India) Limited",
          "district": "Koraput"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2034233351838822438",
      "photos": [
        {
          "key": "s145-sector-4",
          "data": "march-open-slswca145-2026/post-6-1.jpg",
          "caption": "Official 145th SLSWCA graphic · Wood-Based Industries · illustrative sector imagery",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2034233351838822438"
        }
      ]
    },
    {
      "id": "sector-5",
      "title": "Chemicals",
      "date": "2026-03-17",
      "location": "Balasore · Jagatsinghpur",
      "description": "The supplied official graphic records ₹486.00 crore in approved investment and employment potential of 117. These figures apply to the sector as a whole; the proponent grouping follows the original graphic.",
      "investment": 486,
      "employment": 117,
      "projects": [
        {
          "name": "Pidilite Industries Limited",
          "district": "Balasore"
        },
        {
          "name": "Paradeep Phosphates Limited",
          "district": "Jagatsinghpur"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2034462444953997640",
      "photos": [
        {
          "key": "s145-sector-5",
          "data": "march-open-slswca145-2026/post-7-1.jpg",
          "caption": "Official 145th SLSWCA graphic · Chemicals · illustrative sector imagery",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2034462444953997640"
        }
      ]
    },
    {
      "id": "sector-6",
      "title": "Steel & Metal Downstream",
      "date": "2026-03-17",
      "location": "Cuttack · Balasore · Sundargarh · Keonjhar",
      "description": "The supplied official graphic records ₹1,100.96 crore in approved investment and employment potential of 2,797. These figures apply to the sector as a whole; the proponent grouping follows the original graphic.",
      "investment": 1100.96,
      "employment": 2797,
      "projects": [
        {
          "name": "Sundar Steel Industries",
          "district": "Cuttack"
        },
        {
          "name": "Navprakriti Green Energies Pvt. Ltd.",
          "district": "Balasore"
        },
        {
          "name": "Llenroc Ventures",
          "district": "Sundargarh"
        },
        {
          "name": "Scan Steels Limited",
          "district": "Sundargarh"
        },
        {
          "name": "Siddhiridhi International Pvt. Ltd.",
          "district": "Keonjhar"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2034489139249508684",
      "photos": [
        {
          "key": "s145-sector-6",
          "data": "march-open-slswca145-2026/post-8-1.jpg",
          "caption": "Official 145th SLSWCA graphic · Steel & Metal Downstream · illustrative sector imagery",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2034489139249508684"
        }
      ]
    },
    {
      "id": "sector-7",
      "title": "Pharmaceuticals & Medical Devices",
      "date": "2026-03-17",
      "location": "Cuttack · Khordha",
      "description": "The supplied official graphic records ₹290.45 crore in approved investment and employment potential of 585. These figures apply to the sector as a whole; the proponent grouping follows the original graphic.",
      "investment": 290.45,
      "employment": 585,
      "projects": [
        {
          "name": "Alteus Life Limited",
          "district": "Cuttack"
        },
        {
          "name": "Shreeji Imaging & Diagnostic Centre Pvt. Ltd.",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2034514183010783656",
      "photos": [
        {
          "key": "s145-sector-7",
          "data": "march-open-slswca145-2026/post-9-1.jpg",
          "caption": "Official 145th SLSWCA graphic · Pharmaceuticals & Medical Devices · illustrative sector imagery",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2034514183010783656"
        }
      ]
    },
    {
      "id": "sector-8",
      "title": "Agro & Food Processing",
      "date": "2026-03-17",
      "location": "Kalahandi",
      "description": "The supplied official graphic records ₹350.00 crore in approved investment and employment potential of 500. These figures apply to the sector as a whole; the proponent grouping follows the original graphic.",
      "investment": 350,
      "employment": 500,
      "projects": [
        {
          "name": "Coastal Biotech Private Limited",
          "district": "Kalahandi"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2034583576667361774",
      "photos": [
        {
          "key": "s145-sector-8",
          "data": "march-open-slswca145-2026/post-10-1.jpg",
          "caption": "Official 145th SLSWCA graphic · Agro & Food Processing · illustrative sector imagery",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2034583576667361774"
        }
      ]
    },
    {
      "id": "sector-9",
      "title": "Aluminium Downstream",
      "date": "2026-03-17",
      "location": "Koraput",
      "description": "The supplied official graphic records ₹88.16 crore in approved investment and employment potential of 66. These figures apply to the sector as a whole; the proponent grouping follows the original graphic.",
      "investment": 88.16,
      "employment": 66,
      "projects": [
        {
          "name": "Odisha Special Grade Alumina Ltd.",
          "district": "Koraput"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2034591502270390540",
      "photos": [
        {
          "key": "s145-sector-9",
          "data": "march-open-slswca145-2026/post-11-1.jpg",
          "caption": "Official 145th SLSWCA graphic · Aluminium Downstream · illustrative sector imagery",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2034591502270390540"
        }
      ]
    },
    {
      "id": "sector-10",
      "title": "Electrical Equipment",
      "date": "2026-03-17",
      "location": "Khordha",
      "description": "The supplied official graphic records ₹55.03 crore in approved investment and employment potential of 120. These figures apply to the sector as a whole; the proponent grouping follows the original graphic.",
      "investment": 55.03,
      "employment": 120,
      "projects": [
        {
          "name": "Abhisek Contech (India) Pvt. Ltd.",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2034601000787644734",
      "photos": [
        {
          "key": "s145-sector-10",
          "data": "march-open-slswca145-2026/post-12-1.jpg",
          "caption": "Official 145th SLSWCA graphic · Electrical Equipment · illustrative sector imagery",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2034601000787644734"
        }
      ]
    },
    {
      "id": "sector-11",
      "title": "Manufacturing & Engineering",
      "date": "2026-03-17",
      "location": "Khordha",
      "description": "The supplied official graphic records ₹164.00 crore in approved investment and employment potential of 300. These figures apply to the sector as a whole; the proponent grouping follows the original graphic.",
      "investment": 164,
      "employment": 300,
      "projects": [
        {
          "name": "Nipha Limited",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2034617745497891032",
      "photos": [
        {
          "key": "s145-sector-11",
          "data": "march-open-slswca145-2026/post-13-1.jpg",
          "caption": "Official 145th SLSWCA graphic · Manufacturing & Engineering · illustrative sector imagery",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2034617745497891032"
        }
      ]
    },
    {
      "id": "sector-12",
      "title": "Infrastructure & Logistics",
      "date": "2026-03-17",
      "location": "Not specified in supplied graphic",
      "description": "The supplied official graphic records ₹174.10 crore in approved investment and employment potential of 234. These figures apply to the sector as a whole; the proponent grouping follows the original graphic.",
      "investment": 174.1,
      "employment": 234,
      "projects": [
        {
          "name": "Chalah Infratech Private Limited",
          "district": "Not specified in supplied graphic"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2034624624080916699",
      "photos": [
        {
          "key": "s145-sector-12",
          "data": "march-open-slswca145-2026/post-14-1.jpg",
          "caption": "Official 145th SLSWCA graphic · Infrastructure & Logistics · illustrative sector imagery",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2034624624080916699"
        }
      ]
    },
    {
      "id": "sector-13",
      "title": "Gemstones & Jewellery",
      "date": "2026-03-17",
      "location": "Khordha",
      "description": "The supplied official graphic records ₹243.50 crore in approved investment and employment potential of 290. These figures apply to the sector as a whole; the proponent grouping follows the original graphic.",
      "investment": 243.5,
      "employment": 290,
      "projects": [
        {
          "name": "Nuvo Aeon Diamond and Jewellery Pvt. Ltd.",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2034657996484350195",
      "photos": [
        {
          "key": "s145-sector-13",
          "data": "march-open-slswca145-2026/post-15-1.jpg",
          "caption": "Official 145th SLSWCA graphic · Gemstones & Jewellery · illustrative sector imagery",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2034657996484350195"
        }
      ]
    }
  ],
  "breakdownStatus": "investment-discrepancy",
  "breakdownTotals": {
    "projects": 23,
    "investment": 4511.02,
    "employment": 10122
  },
  "sourceUrls": [
    "https://x.com/InvestInOdisha/status/2033899057593389397",
    "https://x.com/InvestInOdisha/status/2034129050369929216",
    "https://x.com/InvestInOdisha/status/2034215657437556847",
    "https://x.com/InvestInOdisha/status/2034226552859426818",
    "https://x.com/InvestInOdisha/status/2034233351838822438",
    "https://x.com/InvestInOdisha/status/2034462444953997640",
    "https://x.com/InvestInOdisha/status/2034489139249508684",
    "https://x.com/InvestInOdisha/status/2034514183010783656",
    "https://x.com/InvestInOdisha/status/2034583576667361774",
    "https://x.com/InvestInOdisha/status/2034591502270390540",
    "https://x.com/InvestInOdisha/status/2034601000787644734",
    "https://x.com/InvestInOdisha/status/2034617745497891032",
    "https://x.com/InvestInOdisha/status/2034624624080916699",
    "https://x.com/InvestInOdisha/status/2034657996484350195"
  ],
  "coverPhoto": {
    "key": "s145-meeting",
    "data": "march-open-slswca145-2026/post-2-1.jpg",
    "caption": "145th SLSWCA meeting chaired by Chief Secretary Smt. Anu Garg · 17 March 2026",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2033899057593389397"
  },
  "imageUrl": "march-open-slswca145-2026/post-2-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/2033899057593389397",
  "contentVersion": 1
};
  const eventRecord=events.find(e=>e.id==='e43');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e43');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e43');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e43'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
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
    if(id!=='e43'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="s145View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="s145Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="s145SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="s145RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Sector approvals</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e43')">Edit overview & highlights</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Official overview post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}</section>
      <nav class="chem-index" aria-label="145th SLSWCA meeting and sector approvals">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Section ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="s145EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${sectorDetails(s)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this sector</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="s145Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="s145EditSection()">+ Add sector</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal','slswca-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e43'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="s145Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="s145Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.s145View=async key=>{viewing=await getPhotos('e43');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.s145Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')s145Step(1);if(ev.key==='ArrowLeft')s145Step(-1);});
  window.s145EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">145th SLSWCA</div><h2>${id?'Edit sector':'Add sector'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div>${s.isMeeting?'':`<div class="formgrid"><div class="field"><label>Approved investment (₹ crore)</label><input name="sectorInvestment" type="number" min="0" step="0.01" required value="${esc(String(s.investment||0))}"></div><div class="field"><label>Employment potential</label><input name="sectorEmployment" type="number" min="0" step="1" required value="${esc(String(s.employment||0))}"></div></div><div class="field"><label>Projects — one per line: proponent | district</label><textarea name="sectorProjects">${esc((s.projects||[]).map(p=>p.name+" | "+p.district).join("\n"))}</textarea></div>`}<div class="chem-tools"><button class="btn red">Save sector</button><button type="button" class="btn" onclick="showEvent('e43')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!s.isMeeting){s.investment=Number(f.get('sectorInvestment')||0);s.employment=Number(f.get('sectorEmployment')||0);s.projects=String(f.get('sectorProjects')||'').split(/\n/).filter(x=>x.trim()).map(x=>{const [name,...district]=x.split('|');return {name:name.trim(),district:district.join('|').trim()};});}if(!id)current().sections.push(s);save();showEvent('e43');};
    cls().scrollTop=0;
  };
  window.s145Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'s145-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e43',sectionId,data,caption:file.name});}await showEvent('e43');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e43')).find(p=>p.key===key);
  window.s145Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('s145-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e43');};
  window.s145SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e43');};
  window.s145RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e43');};
  render();
})();


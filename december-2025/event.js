(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2004507327517585870";
 const supplied={
  "title": "Odisha’s Maritime Roadmap — ACS Hemant Sharma Interview",
  "date": "2025-12-26",
  "endDate": "2025-12-26",
  "location": "Odisha · Maritime Gateway",
  "category": "Media & publications",
  "description": "Invest Odisha shared a Maritime Gateway interview with Shri Hemant Sharma, IAS, Additional Chief Secretary, Industries and I&PR, on Odisha’s maritime and industrial strategy. The discussion covers port-linked industry, freight connections and cleaner fuels.\n\nThe timeline date is the official social post date, 26 December 2025. The reproduced magazine pages are from the October 2025 issue; this is an interview feature, not a new project announcement.",
  "highlights": [],
  "sections": [
    {
      "id": "interview",
      "title": "Port-led Industrialisation & Connectivity",
      "description": "The interview discusses how coastal industrial hubs, transport links and port infrastructure can support trade and manufacturing. It also examines green-energy opportunities within this ecosystem.",
      "photos": [
        {
          "key": "dec-post-1-1",
          "data": "december-2025/post-1-1.png",
          "caption": "Maritime Gateway · October 2025 interview with Hemant Sharma · page 18",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2004507327517585870"
        },
        {
          "key": "dec-post-1-2",
          "data": "december-2025/post-1-2.png",
          "caption": "Maritime Gateway · interview continued · page 19",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2004507327517585870"
        }
      ],
      "date": "",
      "location": ""
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/2004507327517585870",
  "officialSources": [
    {
      "label": "Official Invest Odisha interview post · 26 December 2025",
      "url": "https://x.com/InvestInOdisha/status/2004507327517585870"
    }
  ],
  "contentVersion": 1,
  "coverPhoto": {
    "key": "dec-post-1-1",
    "data": "december-2025/post-1-1.png",
    "caption": "Maritime Gateway · October 2025 interview with Hemant Sharma · page 18",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2004507327517585870"
  },
  "imageUrl": "december-2025/post-1-1.png"
};
  const eventRecord=events.find(e=>e.id==='e60');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e60');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e60');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e60'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e60'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="decarticleView('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="decarticleCaption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="decarticleSetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="decarticleRemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e60')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="decarticleEditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="decarticleUpload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="decarticleEditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e60'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="decarticleStep(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="decarticleStep(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.decarticleView=async key=>{viewing=await getPhotos('e60');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.decarticleStep=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')decarticleStep(1);if(ev.key==='ArrowLeft')decarticleStep(-1);});
  window.decarticleEditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Odisha’s Maritime Roadmap — ACS Hemant Sharma Interview</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e60')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e60');};
    cls().scrollTop=0;
  };
  window.decarticleUpload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'decarticle-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e60',sectionId,data,caption:file.name});}await showEvent('e60');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e60')).find(p=>p.key===key);
  window.decarticleCaption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('decarticle-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e60');};
  window.decarticleSetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e60');};
  window.decarticleRemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e60');};
  render();
})();


(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2003812787232084378";
 const supplied={
  "title": "143rd SLSWCA — Investment Approvals",
  "date": "2025-12-24",
  "endDate": "2025-12-24",
  "location": "Bhubaneswar, Odisha",
  "category": "Clearances & approvals",
  "description": "The 143rd State Level Single Window Clearance Authority meeting, chaired by Chief Secretary Shri Manoj Ahuja, approved 11 industrial projects worth ₹1,332.80 crore, with employment potential of 7,474.\n\nThe eight supplied sector announcements identify 9 projects worth ₹1,208.79 crore and potential employment of 3,474. This is a partial breakdown: it falls short of the overview by 2 projects, ₹124.01 crore and 4,000 potential jobs. No unsupported proponents or sector allocations have been added.\n\nThe meeting date remains 24 December 2025. Sector graphics were published on 25–26 December and are supporting updates, not separate approval meetings. Figures represent approved proposals and employment potential.",
  "highlights": [
    {
      "label": "Projects approved",
      "value": "11"
    },
    {
      "label": "Approved investment",
      "value": "₹1,332.80 crore"
    },
    {
      "label": "Employment potential",
      "value": "7,474"
    },
    {
      "label": "Supplied sector breakdown",
      "value": "9 of 11 projects"
    }
  ],
  "sections": [
    {
      "id": "meeting",
      "title": "143rd SLSWCA Meeting",
      "description": "Chief Secretary Shri Manoj Ahuja chaired the meeting. The official overview reports 11 approvals with investment of ₹1,332.80 crore and potential employment of 7,474.",
      "photos": [
        {
          "key": "dec-post-2-1",
          "data": "december-2025/post-2-1.jpg",
          "caption": "143rd SLSWCA meeting · official Invest Odisha photograph",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2003812787232084378"
        }
      ],
      "date": "2025-12-24",
      "location": "",
      "isMeeting": true,
      "sourceUrl": "https://x.com/InvestInOdisha/status/2003812787232084378"
    },
    {
      "id": "sector-1",
      "title": "Ancillary & Downstream in Metals",
      "description": "Figures and proponents reproduced from the official sector announcement. Investment is approved proposal value; employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "dec-post-3-1",
          "data": "december-2025/post-3-1.jpg",
          "caption": "143rd SLSWCA · Ancillary & Downstream in Metals · official sector infographic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2004057240802918405"
        }
      ],
      "date": "",
      "location": "",
      "investment": 210,
      "employment": 530,
      "projects": [
        {
          "name": "Kalinga Copper Private Limited",
          "district": "Dhenkanal"
        },
        {
          "name": "M M Castings Private Limited",
          "district": "Ganjam"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2004057240802918405"
    },
    {
      "id": "sector-2",
      "title": "Food & Seafood Processing",
      "description": "Figures and proponents reproduced from the official sector announcement. Investment is approved proposal value; employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "dec-post-4-1",
          "data": "december-2025/post-4-1.jpg",
          "caption": "143rd SLSWCA · Food & Seafood Processing · official sector infographic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2004076635088466327"
        }
      ],
      "date": "",
      "location": "",
      "investment": 200,
      "employment": 700,
      "projects": [
        {
          "name": "Pasupati Agrovet Private Limited",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2004076635088466327"
    },
    {
      "id": "sector-3",
      "title": "Textiles & Apparel",
      "description": "Figures and proponents reproduced from the official sector announcement. Investment is approved proposal value; employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "dec-post-5-1",
          "data": "december-2025/post-5-1.jpg",
          "caption": "143rd SLSWCA · Textiles & Apparel · official sector infographic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2004146129483772290"
        }
      ],
      "date": "",
      "location": "",
      "investment": 60,
      "employment": 1250,
      "projects": [
        {
          "name": "Sree Lakshmi Apparels Private Limited",
          "district": "Cuttack"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2004146129483772290"
    },
    {
      "id": "sector-4",
      "title": "Chemicals & Chemical Products",
      "description": "Figures and proponents reproduced from the official sector announcement. Investment is approved proposal value; employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "dec-post-6-1",
          "data": "december-2025/post-6-1.jpg",
          "caption": "143rd SLSWCA · Chemicals & Chemical Products · official sector infographic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2004237515587572157"
        }
      ],
      "date": "",
      "location": "",
      "investment": 220,
      "employment": 215,
      "projects": [
        {
          "name": "Universal Industries",
          "district": "Jagatsinghpur"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2004237515587572157"
    },
    {
      "id": "sector-5",
      "title": "Green Hydrogen & Green Ammonia",
      "description": "Figures and proponents reproduced from the official sector announcement. Investment is approved proposal value; employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "dec-post-7-1",
          "data": "december-2025/post-7-1.jpg",
          "caption": "143rd SLSWCA · Green Hydrogen & Green Ammonia · official sector infographic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2004380747424321741"
        }
      ],
      "date": "",
      "location": "",
      "investment": 250,
      "employment": 47,
      "projects": [
        {
          "name": "Sara Green Energy Private Limited",
          "district": "Ganjam"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2004380747424321741"
    },
    {
      "id": "sector-6",
      "title": "Tourism",
      "description": "Figures and proponents reproduced from the official sector announcement. Investment is approved proposal value; employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "dec-post-8-1",
          "data": "december-2025/post-8-1.jpg",
          "caption": "143rd SLSWCA · Tourism · official sector infographic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2004414860394942910"
        }
      ],
      "date": "",
      "location": "",
      "investment": 50.84,
      "employment": 177,
      "projects": [
        {
          "name": "Khimji Retail Venture Private Limited",
          "district": "Mayurbhanj"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2004414860394942910"
    },
    {
      "id": "sector-7",
      "title": "Transportation & Storage",
      "description": "Figures and proponents reproduced from the official sector announcement. Investment is approved proposal value; employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "dec-post-9-1",
          "data": "december-2025/post-9-1.jpg",
          "caption": "143rd SLSWCA · Transportation & Storage · official sector infographic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2004451406032654356"
        }
      ],
      "date": "",
      "location": "",
      "investment": 159.75,
      "employment": 255,
      "projects": [
        {
          "name": "Steels and Carriers Private Limited",
          "district": "Angul"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2004451406032654356"
    },
    {
      "id": "sector-8",
      "title": "Coal & Coke Screening, Washing & Briquetting",
      "description": "Figures and proponents reproduced from the official sector announcement. Investment is approved proposal value; employment is potential, not jobs already created.",
      "photos": [
        {
          "key": "dec-post-10-1",
          "data": "december-2025/post-10-1.jpg",
          "caption": "143rd SLSWCA · Coal & Coke Screening, Washing & Briquetting · official sector infographic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2004501549813485734"
        }
      ],
      "date": "",
      "location": "",
      "investment": 58.2,
      "employment": 300,
      "projects": [
        {
          "name": "Sapient Coal Beneficiation Private Limited",
          "district": "Angul"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/2004501549813485734"
    }
  ],
  "breakdownStatus": "partial",
  "breakdownTotals": {
    "projects": 9,
    "investment": 1208.79,
    "employment": 3474
  },
  "sourceUrls": [
    "https://x.com/InvestInOdisha/status/2003812787232084378",
    "https://x.com/InvestInOdisha/status/2004057240802918405",
    "https://x.com/InvestInOdisha/status/2004076635088466327",
    "https://x.com/InvestInOdisha/status/2004146129483772290",
    "https://x.com/InvestInOdisha/status/2004237515587572157",
    "https://x.com/InvestInOdisha/status/2004380747424321741",
    "https://x.com/InvestInOdisha/status/2004414860394942910",
    "https://x.com/InvestInOdisha/status/2004451406032654356",
    "https://x.com/InvestInOdisha/status/2004501549813485734"
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/2003812787232084378",
  "contentVersion": 1,
  "coverPhoto": {
    "key": "dec-post-2-1",
    "data": "december-2025/post-2-1.jpg",
    "caption": "143rd SLSWCA meeting · official Invest Odisha photograph",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2003812787232084378"
  },
  "imageUrl": "december-2025/post-2-1.jpg"
};
  const eventRecord=events.find(e=>e.id==='e61');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e61');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e61');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e61'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
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
    if(id!=='e61'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="s143View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="s143Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="s143SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="s143RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Sector approvals</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e61')">Edit overview & highlights</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Official overview post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}</section>
      <nav class="chem-index" aria-label="143rd SLSWCA meeting and sector approvals">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Section ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="s143EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${sectorDetails(s)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this sector</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="s143Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="s143EditSection()">+ Add sector</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal','slswca-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e61'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="s143Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="s143Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.s143View=async key=>{viewing=await getPhotos('e61');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.s143Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')s143Step(1);if(ev.key==='ArrowLeft')s143Step(-1);});
  window.s143EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">143rd SLSWCA</div><h2>${id?'Edit sector':'Add sector'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div>${s.isMeeting?'':`<div class="formgrid"><div class="field"><label>Approved investment (₹ crore)</label><input name="sectorInvestment" type="number" min="0" step="0.01" required value="${esc(String(s.investment||0))}"></div><div class="field"><label>Employment potential</label><input name="sectorEmployment" type="number" min="0" step="1" required value="${esc(String(s.employment||0))}"></div></div><div class="field"><label>Projects — one per line: proponent | district</label><textarea name="sectorProjects">${esc((s.projects||[]).map(p=>p.name+" | "+p.district).join("\n"))}</textarea></div>`}<div class="chem-tools"><button class="btn red">Save sector</button><button type="button" class="btn" onclick="showEvent('e61')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!s.isMeeting){s.investment=Number(f.get('sectorInvestment')||0);s.employment=Number(f.get('sectorEmployment')||0);s.projects=String(f.get('sectorProjects')||'').split(/\n/).filter(x=>x.trim()).map(x=>{const [name,...district]=x.split('|');return {name:name.trim(),district:district.join('|').trim()};});}if(!id)current().sections.push(s);save();showEvent('e61');};
    cls().scrollTop=0;
  };
  window.s143Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'s143-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e61',sectionId,data,caption:file.name});}await showEvent('e61');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e61')).find(p=>p.key===key);
  window.s143Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('s143-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e61');};
  window.s143SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e61');};
  window.s143RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e61');};
  render();
})();
(() => {
 const VERSION=1;
 const DRIVE="https://x.com/InvestInOdisha/status/2003691084829065532";
 const supplied={
  "title": "18 Months of Industrial Progress — Odisha",
  "date": "2025-12-24",
  "endDate": "2025-12-24",
  "location": "Odisha",
  "category": "Industrial progress",
  "description": "Invest Odisha’s 18-month progress update reports 343 large industrial projects approved, investment value approved of over ₹7.1 lakh crore and employment potential of over 4.65 lakh.\n\nSeparately, it reports 85 projects grounded or inaugurated, investments realised of over ₹2 lakh crore and employment potential of over 1.65 lakh. These are distinct reported stages, not figures to add together. Employment remains potential rather than a count of jobs already created.",
  "highlights": [
    {
      "label": "Large projects approved",
      "value": "343"
    },
    {
      "label": "Investment value approved",
      "value": "₹7.1 lakh crore+"
    },
    {
      "label": "Approved-stage employment potential",
      "value": "4.65 lakh+"
    },
    {
      "label": "Projects grounded / inaugurated",
      "value": "85"
    },
    {
      "label": "Investments realised (reported)",
      "value": "₹2 lakh crore+"
    },
    {
      "label": "Grounded-stage employment potential",
      "value": "1.65 lakh+"
    }
  ],
  "sections": [
    {
      "id": "progress",
      "title": "Approval to On-ground Implementation",
      "description": "The official infographic summarises policy and implementation outcomes over the previous 18 months. Its approval-stage and grounded/inaugurated-stage indicators are kept separate here.",
      "photos": [
        {
          "key": "dec-post-11-1",
          "data": "december-2025/post-11-1.jpg",
          "caption": "18 Months of Industrial Progress · official Invest Odisha infographic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/2003691084829065532"
        }
      ],
      "date": "",
      "location": ""
    }
  ],
  "sourceUrl": "https://x.com/InvestInOdisha/status/2003691084829065532",
  "officialSources": [
    {
      "label": "Official Invest Odisha 18-month progress update",
      "url": "https://x.com/InvestInOdisha/status/2003691084829065532"
    }
  ],
  "contentVersion": 1,
  "coverPhoto": {
    "key": "dec-post-11-1",
    "data": "december-2025/post-11-1.jpg",
    "caption": "18 Months of Industrial Progress · official Invest Odisha infographic",
    "sourceUrl": "https://x.com/InvestInOdisha/status/2003691084829065532"
  },
  "imageUrl": "december-2025/post-11-1.jpg"
};
  const eventRecord=events.find(e=>e.id==='e62');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e62');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e62');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e62'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e62'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="decprogressView('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="decprogressCaption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="decprogressSetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="decprogressRemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e62')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources & verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="decprogressEditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="decprogressUpload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="decprogressEditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e62'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="decprogressStep(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="decprogressStep(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.decprogressView=async key=>{viewing=await getPhotos('e62');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.decprogressStep=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')decprogressStep(1);if(ev.key==='ArrowLeft')decprogressStep(-1);});
  window.decprogressEditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">18 Months of Industrial Progress — Odisha</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e62')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e62');};
    cls().scrollTop=0;
  };
  window.decprogressUpload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'decprogress-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e62',sectionId,data,caption:file.name});}await showEvent('e62');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e62')).find(p=>p.key===key);
  window.decprogressCaption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('decprogress-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e62');};
  window.decprogressSetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e62');};
  window.decprogressRemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e62');};
  render();
})();

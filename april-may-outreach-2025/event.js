// April–May 2025: source-backed offline enrichment. No external requests at startup.
(() => {
const VERSION=1;
const DRIVE="https://drive.google.com/drive/folders/1dJ4h8IvNoS-v4NXD_jyrmoe_vXwY0X_i";
const supplied={
  "id": "e101",
  "title": "Mumbai Investors’ Connect — One-on-One Industry Meetings",
  "date": "2025-05-03",
  "endDate": "2025-05-03",
  "datePrecision": "day",
  "description": "Hon’ble Chief Minister Shri Mohan Charan Majhi held a series of investor engagements in Mumbai on 3 May 2025, covering steel, irrigation equipment, technology, infrastructure, renewable energy and aluminium downstream manufacturing.\n\nThe supplied official posts record discussions and investment opportunities, not quantified commitments or completed projects. This programme is separate from the April Mumbai outreach.",
  "sections": [
    {
      "id": "may-1",
      "title": "Tata Steel",
      "date": "2025-05-03",
      "endDate": "2025-05-03",
      "location": "Mumbai",
      "description": "Hon’ble Chief Minister Shri Mohan Charan Majhi met T. V. Narendran, CEO and Managing Director of Tata Steel, to discuss the company’s continued expansion in Odisha.",
      "photos": [
        {
          "key": "am25-post-1-1.jpg",
          "data": "april-may-outreach-2025/post-1-1.jpg",
          "caption": "Tata Steel engagement at Mumbai Investors’ Connect, 3 May 2025",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1918669153772155095"
        },
        {
          "key": "am25-drive-may-tata-0.jpg",
          "data": "april-may-outreach-2025/drive-may-tata-0.jpg",
          "caption": "Tata Steel meeting, 3 May 2025 — programme photograph",
          "sourceUrl": "https://drive.google.com/file/d/1370M9ZqNxPyNvBaoAbCuQUCLxsGZGIzw/view"
        },
        {
          "key": "am25-drive-may-tata-4.jpg",
          "data": "april-may-outreach-2025/drive-may-tata-4.jpg",
          "caption": "Tata Steel meeting, 3 May 2025 — discussion view",
          "sourceUrl": "https://drive.google.com/file/d/1KD4XzolthJCuil2oD5eDTuhkv0hcCGYF/view"
        }
      ]
    },
    {
      "id": "may-2",
      "title": "Jain Irrigation Systems",
      "date": "2025-05-03",
      "endDate": "2025-05-03",
      "location": "Mumbai",
      "description": "The Chief Minister met Anil Bhavarlal Jain, Vice Chairman and CEO of Jain Irrigation Systems, to explore investments in agriculture and irrigation equipment.",
      "photos": [
        {
          "key": "am25-post-2-1.jpg",
          "data": "april-may-outreach-2025/post-2-1.jpg",
          "caption": "Jain Irrigation Systems engagement at Mumbai Investors’ Connect, 3 May 2025",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1918677347533828165"
        }
      ]
    },
    {
      "id": "may-3",
      "title": "Google",
      "date": "2025-05-03",
      "endDate": "2025-05-03",
      "location": "Mumbai",
      "description": "The Chief Minister engaged with representatives of Google to explore potential partnerships with Odisha.",
      "photos": [
        {
          "key": "am25-post-3-1.jpg",
          "data": "april-may-outreach-2025/post-3-1.jpg",
          "caption": "Google engagement at Mumbai Investors’ Connect, 3 May 2025",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1918683379828166664"
        },
        {
          "key": "am25-drive-may-google-0.jpg",
          "data": "april-may-outreach-2025/drive-may-google-0.jpg",
          "caption": "Google meeting, 3 May 2025 — programme photograph",
          "sourceUrl": "https://drive.google.com/file/d/11p1SOWuPGtfReBOWqSG8_4YxEv6wXTxN/view"
        },
        {
          "key": "am25-drive-may-google-3.jpg",
          "data": "april-may-outreach-2025/drive-may-google-3.jpg",
          "caption": "Google meeting, 3 May 2025 — discussion view",
          "sourceUrl": "https://drive.google.com/file/d/1zzBTKMdO6RkpHqJmn_dERaLyQTigCrpv/view"
        }
      ]
    },
    {
      "id": "may-4",
      "title": "Shapoorji Pallonji & Company",
      "date": "2025-05-03",
      "endDate": "2025-05-03",
      "location": "Mumbai",
      "description": "The Chief Minister met Shapoorji P. Mistry, Chairman of Shapoorji Pallonji & Company, to discuss synergies and future engagement with Odisha.",
      "photos": [
        {
          "key": "am25-post-4-1.jpg",
          "data": "april-may-outreach-2025/post-4-1.jpg",
          "caption": "Shapoorji Pallonji & Company engagement at Mumbai Investors’ Connect, 3 May 2025",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1918691516262052004"
        }
      ]
    },
    {
      "id": "may-5",
      "title": "Waaree Energies",
      "date": "2025-05-03",
      "endDate": "2025-05-03",
      "location": "Mumbai",
      "description": "Discussions with Hitesh Doshi, Chairman of Waaree Energies, covered ongoing projects and opportunities to scale renewable-energy investments in Odisha.",
      "photos": [
        {
          "key": "am25-post-5-1.jpg",
          "data": "april-may-outreach-2025/post-5-1.jpg",
          "caption": "Waaree Energies engagement at Mumbai Investors’ Connect, 3 May 2025",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1918696719417770465"
        },
        {
          "key": "am25-drive-may-waaree-0.jpg",
          "data": "april-may-outreach-2025/drive-may-waaree-0.jpg",
          "caption": "Waaree Energies meeting, 3 May 2025 — programme photograph",
          "sourceUrl": "https://drive.google.com/file/d/10SRgoR5suIm-IuB3_JhLQGOcEAjIelB2/view"
        },
        {
          "key": "am25-drive-may-waaree-4.jpg",
          "data": "april-may-outreach-2025/drive-may-waaree-4.jpg",
          "caption": "Waaree Energies meeting, 3 May 2025 — discussion view",
          "sourceUrl": "https://drive.google.com/file/d/1bjsS9-z1lF1xpw56spAYlBx3QKkk_60p/view"
        }
      ]
    },
    {
      "id": "may-6",
      "title": "JSK Industries",
      "date": "2025-05-03",
      "endDate": "2025-05-03",
      "location": "Mumbai",
      "description": "The Chief Minister met Anish Shah, Managing Director of JSK Industries, on opportunities for aluminium downstream and value-added manufacturing in Western Odisha.",
      "photos": [
        {
          "key": "am25-post-6-1.jpg",
          "data": "april-may-outreach-2025/post-6-1.jpg",
          "caption": "JSK Industries engagement at Mumbai Investors’ Connect, 3 May 2025",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1918702104375701622"
        },
        {
          "key": "am25-drive-may-jsk-0.jpg",
          "data": "april-may-outreach-2025/drive-may-jsk-0.jpg",
          "caption": "JSK Industries meeting, 3 May 2025 — programme photograph",
          "sourceUrl": "https://drive.google.com/file/d/17smy-GbRa-6SvC_CmeZROqgSNQdKNcsO/view"
        },
        {
          "key": "am25-drive-may-jsk-3.jpg",
          "data": "april-may-outreach-2025/drive-may-jsk-3.jpg",
          "caption": "JSK Industries meeting, 3 May 2025 — discussion view",
          "sourceUrl": "https://drive.google.com/file/d/1Ih_PHORaoiT4JAIzbThPSo0_ct6izY9_/view"
        }
      ]
    }
  ],
  "category": "Investors’ meets",
  "location": "Mumbai",
  "highlights": [
    {
      "value": "6",
      "label": "Documented company engagements"
    },
    {
      "value": "3 May 2025",
      "label": "Programme date"
    }
  ],
  "officialSources": [
    {
      "label": "Tata Steel meeting",
      "url": "https://x.com/InvestInOdisha/status/1918669153772155095"
    },
    {
      "label": "Jain Irrigation Systems meeting",
      "url": "https://x.com/InvestInOdisha/status/1918677347533828165"
    },
    {
      "label": "Google meeting",
      "url": "https://x.com/InvestInOdisha/status/1918683379828166664"
    },
    {
      "label": "Shapoorji Pallonji & Company meeting",
      "url": "https://x.com/InvestInOdisha/status/1918691516262052004"
    },
    {
      "label": "Waaree Energies meeting",
      "url": "https://x.com/InvestInOdisha/status/1918696719417770465"
    },
    {
      "label": "JSK Industries meeting",
      "url": "https://x.com/InvestInOdisha/status/1918702104375701622"
    },
    {
      "label": "User-supplied high-resolution photo collection",
      "url": "https://drive.google.com/drive/folders/1dJ4h8IvNoS-v4NXD_jyrmoe_vXwY0X_i"
    }
  ],
  "contentVersion": 1,
  "sourceUrl": "https://drive.google.com/drive/folders/1dJ4h8IvNoS-v4NXD_jyrmoe_vXwY0X_i",
  "coverPhoto": {
    "key": "am25-post-1-1.jpg",
    "data": "april-may-outreach-2025/post-1-1.jpg",
    "caption": "Tata Steel engagement at Mumbai Investors’ Connect, 3 May 2025",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1918669153772155095"
  },
  "imageUrl": "april-may-outreach-2025/post-1-1.jpg"
};
const eventRecord=events.find(e=>e.id==='e101');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e101');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e101');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e101'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e101'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="ame101View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="ame101Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="ame101SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="ame101RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e101')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Full photo collection ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="ame101EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="ame101Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="ame101EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e101'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="ame101Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="ame101Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.ame101View=async key=>{viewing=await getPhotos('e101');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.ame101Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')ame101Step(1);if(ev.key==='ArrowLeft')ame101Step(-1);});
  window.ame101EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e101')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e101');};
    cls().scrollTop=0;
  };
  window.ame101Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'ame101-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e101',sectionId,data,caption:file.name});}await showEvent('e101');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e101')).find(p=>p.key===key);
  window.ame101Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('ame101-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e101');};
  window.ame101SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e101');};
  window.ame101RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original in Google Drive will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e101');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1918294043404148955";
const supplied={
  "id": "e102",
  "title": "136th State Level Single Window Clearance Authority Meeting",
  "date": "2025-05-02",
  "endDate": "2025-05-02",
  "datePrecision": "day",
  "description": "The 136th SLSWCA, chaired by Chief Secretary Shri Manoj Ahuja on 2 May 2025, approved 19 projects with proposed investment of ₹3,898.54 crore and employment potential of 7,464.\n\nMeeting-number correction: the supplied overview and sector graphics identify this as the 136th meeting, not the 138th. Sector posts were published after the meeting; the event remains dated 2 May.\n\nPartial breakdown: the nine supplied sector graphics list 17 proponents totalling ₹3,422.14 crore and 7,254 potential jobs. Compared with the headline, 2 projects, ₹476.40 crore and 210 potential jobs are not accounted for in these graphics. The headline totals are retained separately; no missing projects or figures have been invented.",
  "sections": [
    {
      "id": "s136-meeting",
      "title": "Meeting overview",
      "date": "2025-05-02",
      "endDate": "2025-05-02",
      "location": "Odisha",
      "description": "Chief Secretary Shri Manoj Ahuja chaired the 136th SLSWCA. Investment and employment figures describe approvals and potential outcomes.",
      "photos": [
        {
          "key": "am25-post-7-1.jpg",
          "data": "april-may-outreach-2025/post-7-1.jpg",
          "caption": "136th SLSWCA meeting — official overview",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1918294043404148955"
        }
      ],
      "isMeeting": true
    },
    {
      "id": "s136-1",
      "title": "Apparel & textiles",
      "date": "2025-05-02",
      "endDate": "2025-05-02",
      "location": "Odisha",
      "description": "Approved sector figures transcribed from the supplied Invest Odisha graphic. These represent investment approvals and employment potential, not realised investment or jobs already created.",
      "photos": [
        {
          "key": "am25-post-8-1.jpg",
          "data": "april-may-outreach-2025/post-8-1.jpg",
          "caption": "Apparel & textiles — official 136th SLSWCA approval graphic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1919216919762137318"
        }
      ],
      "investment": 100,
      "employment": 1070,
      "projects": [
        {
          "name": "Shree Sidhi Vinayak Texcolours Pvt. Ltd.",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1919216919762137318"
    },
    {
      "id": "s136-2",
      "title": "Chemicals & plastics",
      "date": "2025-05-02",
      "endDate": "2025-05-02",
      "location": "Odisha",
      "description": "Approved sector figures transcribed from the supplied Invest Odisha graphic. These represent investment approvals and employment potential, not realised investment or jobs already created.",
      "photos": [
        {
          "key": "am25-post-9-1.jpg",
          "data": "april-may-outreach-2025/post-9-1.jpg",
          "caption": "Chemicals & plastics — official 136th SLSWCA approval graphic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1919249224526377399"
        }
      ],
      "investment": 116.05,
      "employment": 406,
      "projects": [
        {
          "name": "Jay Shree Tea & Industries Limited",
          "district": "Balasore"
        },
        {
          "name": "HVG Industries Pvt. Ltd.",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1919249224526377399"
    },
    {
      "id": "s136-3",
      "title": "Steel, iron & ferro alloys",
      "date": "2025-05-02",
      "endDate": "2025-05-02",
      "location": "Odisha",
      "description": "Approved sector figures transcribed from the supplied Invest Odisha graphic. These represent investment approvals and employment potential, not realised investment or jobs already created.",
      "photos": [
        {
          "key": "am25-post-10-1.jpg",
          "data": "april-may-outreach-2025/post-10-1.jpg",
          "caption": "Steel, iron & ferro alloys — official 136th SLSWCA approval graphic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1919289119617802535"
        }
      ],
      "investment": 1585,
      "employment": 1325,
      "projects": [
        {
          "name": "Tata Steel",
          "district": "Dhenkanal"
        },
        {
          "name": "Sree Metaliks Limited",
          "district": "Keonjhar"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1919289119617802535"
    },
    {
      "id": "s136-4",
      "title": "Steel downstream",
      "date": "2025-05-02",
      "endDate": "2025-05-02",
      "location": "Odisha",
      "description": "Approved sector figures transcribed from the supplied Invest Odisha graphic. These represent investment approvals and employment potential, not realised investment or jobs already created.",
      "photos": [
        {
          "key": "am25-post-11-1.jpg",
          "data": "april-may-outreach-2025/post-11-1.jpg",
          "caption": "Steel downstream — official 136th SLSWCA approval graphic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1919329041540145402"
        }
      ],
      "investment": 255,
      "employment": 1500,
      "projects": [
        {
          "name": "Surlon India Limited",
          "district": "Sundargarh"
        },
        {
          "name": "Lal Baba Seamless Tubes Private Limited",
          "district": "Cuttack"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1919329041540145402"
    },
    {
      "id": "s136-5",
      "title": "Food & beverages",
      "date": "2025-05-02",
      "endDate": "2025-05-02",
      "location": "Odisha",
      "description": "Approved sector figures transcribed from the supplied Invest Odisha graphic. These represent investment approvals and employment potential, not realised investment or jobs already created.",
      "photos": [
        {
          "key": "am25-post-12-1.jpg",
          "data": "april-may-outreach-2025/post-12-1.jpg",
          "caption": "Food & beverages — official 136th SLSWCA approval graphic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1919359345499742704"
        }
      ],
      "investment": 300,
      "employment": 820,
      "projects": [
        {
          "name": "Bhuvaneshwari Foods & Beverage Private Limited",
          "district": "Khordha"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1919359345499742704"
    },
    {
      "id": "s136-6",
      "title": "Tourism & hospitality",
      "date": "2025-05-02",
      "endDate": "2025-05-02",
      "location": "Odisha",
      "description": "Approved sector figures transcribed from the supplied Invest Odisha graphic. These represent investment approvals and employment potential, not realised investment or jobs already created.",
      "photos": [
        {
          "key": "am25-post-13-1.jpg",
          "data": "april-may-outreach-2025/post-13-1.jpg",
          "caption": "Tourism & hospitality — official 136th SLSWCA approval graphic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1919597025252790735"
        }
      ],
      "investment": 505.09,
      "employment": 1448,
      "projects": [
        {
          "name": "Birendra Hotel and Resorts LLP",
          "district": "Ganjam"
        },
        {
          "name": "Specbru Hotel Private Limited (own land)",
          "district": "Khordha"
        },
        {
          "name": "Surya Eco Resorts Private Limited (own land)",
          "district": "Angul"
        },
        {
          "name": "Tesko Hotels and Malls Infraprojects Private Limited (own land)",
          "district": "Khordha"
        },
        {
          "name": "Satya Oleo Private Limited",
          "district": "Not specified in supplied graphic"
        },
        {
          "name": "T. K. International Limited",
          "district": "Koraput"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1919597025252790735"
    },
    {
      "id": "s136-7",
      "title": "Metal ancillary & downstream",
      "date": "2025-05-02",
      "endDate": "2025-05-02",
      "location": "Odisha",
      "description": "Approved sector figures transcribed from the supplied Invest Odisha graphic. These represent investment approvals and employment potential, not realised investment or jobs already created.",
      "photos": [
        {
          "key": "am25-post-14-1.jpg",
          "data": "april-may-outreach-2025/post-14-1.jpg",
          "caption": "Metal ancillary & downstream — official 136th SLSWCA approval graphic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1919632198283481478"
        }
      ],
      "investment": 60,
      "employment": 314,
      "projects": [
        {
          "name": "Kalinga Infra Projects Limited",
          "district": "Sambalpur"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1919632198283481478"
    },
    {
      "id": "s136-8",
      "title": "Logistics",
      "date": "2025-05-02",
      "endDate": "2025-05-02",
      "location": "Odisha",
      "description": "Approved sector figures transcribed from the supplied Invest Odisha graphic. These represent investment approvals and employment potential, not realised investment or jobs already created.",
      "photos": [
        {
          "key": "am25-post-15-1.jpg",
          "data": "april-may-outreach-2025/post-15-1.jpg",
          "caption": "Logistics — official 136th SLSWCA approval graphic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1919660082716930270"
        }
      ],
      "investment": 366.5,
      "employment": 75,
      "projects": [
        {
          "name": "ACME Clean Energy Private Limited",
          "district": "Ganjam"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1919660082716930270"
    },
    {
      "id": "s136-9",
      "title": "Infrastructure",
      "date": "2025-05-02",
      "endDate": "2025-05-02",
      "location": "Odisha",
      "description": "Approved sector figures transcribed from the supplied Invest Odisha graphic. These represent investment approvals and employment potential, not realised investment or jobs already created.",
      "photos": [
        {
          "key": "am25-post-16-1.jpg",
          "data": "april-may-outreach-2025/post-16-1.jpg",
          "caption": "Infrastructure — official 136th SLSWCA approval graphic",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1919699097348358488"
        }
      ],
      "investment": 134.5,
      "employment": 296,
      "projects": [
        {
          "name": "Vasanth Vihar Constructions (India) Private Limited",
          "district": "Not specified in supplied graphic"
        }
      ],
      "sourceUrl": "https://x.com/InvestInOdisha/status/1919699097348358488"
    }
  ],
  "category": "Clearances & approvals",
  "location": "Odisha",
  "highlights": [
    {
      "value": "19",
      "label": "Approved projects"
    },
    {
      "value": "₹3,898.54 crore",
      "label": "Approved investment"
    },
    {
      "value": "7,464",
      "label": "Employment potential"
    }
  ],
  "officialSources": [
    {
      "label": "136th SLSWCA overview",
      "url": "https://x.com/InvestInOdisha/status/1918294043404148955"
    },
    {
      "label": "Sector approval: Apparel & textiles",
      "url": "https://x.com/InvestInOdisha/status/1919216919762137318"
    },
    {
      "label": "Sector approval: Chemicals & plastics",
      "url": "https://x.com/InvestInOdisha/status/1919249224526377399"
    },
    {
      "label": "Sector approval: Steel, iron & ferro alloys",
      "url": "https://x.com/InvestInOdisha/status/1919289119617802535"
    },
    {
      "label": "Sector approval: Steel downstream",
      "url": "https://x.com/InvestInOdisha/status/1919329041540145402"
    },
    {
      "label": "Sector approval: Food & beverages",
      "url": "https://x.com/InvestInOdisha/status/1919359345499742704"
    },
    {
      "label": "Sector approval: Tourism & hospitality",
      "url": "https://x.com/InvestInOdisha/status/1919597025252790735"
    },
    {
      "label": "Sector approval: Metal ancillary & downstream",
      "url": "https://x.com/InvestInOdisha/status/1919632198283481478"
    },
    {
      "label": "Sector approval: Logistics",
      "url": "https://x.com/InvestInOdisha/status/1919660082716930270"
    },
    {
      "label": "Sector approval: Infrastructure",
      "url": "https://x.com/InvestInOdisha/status/1919699097348358488"
    }
  ],
  "contentVersion": 1,
  "breakdownStatus": "partial",
  "breakdownTotals": {
    "investment": 3422.14,
    "employment": 7254,
    "projects": 17
  },
  "sourceUrl": "https://x.com/InvestInOdisha/status/1918294043404148955",
  "sourceUrls": [
    "https://x.com/InvestInOdisha/status/1918294043404148955",
    "https://x.com/InvestInOdisha/status/1919216919762137318",
    "https://x.com/InvestInOdisha/status/1919249224526377399",
    "https://x.com/InvestInOdisha/status/1919289119617802535",
    "https://x.com/InvestInOdisha/status/1919329041540145402",
    "https://x.com/InvestInOdisha/status/1919359345499742704",
    "https://x.com/InvestInOdisha/status/1919597025252790735",
    "https://x.com/InvestInOdisha/status/1919632198283481478",
    "https://x.com/InvestInOdisha/status/1919660082716930270",
    "https://x.com/InvestInOdisha/status/1919699097348358488"
  ],
  "coverPhoto": {
    "key": "am25-post-7-1.jpg",
    "data": "april-may-outreach-2025/post-7-1.jpg",
    "caption": "136th SLSWCA meeting — official overview",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1918294043404148955"
  },
  "imageUrl": "april-may-outreach-2025/post-7-1.jpg"
};
const eventRecord=events.find(e=>e.id==='e102');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e102');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e102');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e102'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
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
    if(id!=='e102'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="s136View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="s136Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="s136SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="s136RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Sector approvals</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e102')">Edit overview & highlights</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Official overview post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="136th SLSWCA meeting and sector approvals">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Section ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="s136EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${sectorDetails(s)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this sector</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="s136Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="s136EditSection()">+ Add sector</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal','slswca-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e102'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="s136Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="s136Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.s136View=async key=>{viewing=await getPhotos('e102');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.s136Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')s136Step(1);if(ev.key==='ArrowLeft')s136Step(-1);});
  window.s136EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">136th SLSWCA</div><h2>${id?'Edit sector':'Add sector'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div>${s.isMeeting?'':`<div class="formgrid"><div class="field"><label>Approved investment (₹ crore)</label><input name="sectorInvestment" type="number" min="0" step="0.01" required value="${esc(String(s.investment||0))}"></div><div class="field"><label>Employment potential</label><input name="sectorEmployment" type="number" min="0" step="1" required value="${esc(String(s.employment||0))}"></div></div><div class="field"><label>Projects — one per line: proponent | district</label><textarea name="sectorProjects">${esc((s.projects||[]).map(p=>p.name+" | "+p.district).join("\n"))}</textarea></div>`}<div class="chem-tools"><button class="btn red">Save sector</button><button type="button" class="btn" onclick="showEvent('e102')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!s.isMeeting){s.investment=Number(f.get('sectorInvestment')||0);s.employment=Number(f.get('sectorEmployment')||0);s.projects=String(f.get('sectorProjects')||'').split(/\n/).filter(x=>x.trim()).map(x=>{const [name,...district]=x.split('|');return {name:name.trim(),district:district.join('|').trim()};});}if(!id)current().sections.push(s);save();showEvent('e102');};
    cls().scrollTop=0;
  };
  window.s136Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'s136-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e102',sectionId,data,caption:file.name});}await showEvent('e102');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e102')).find(p=>p.key===key);
  window.s136Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('s136-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e102');};
  window.s136SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e102');};
  window.s136RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original X post will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e102');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1917597966300270981";
const supplied={
  "id": "e103",
  "title": "National Women’s Business Mela 2.0 — Women-Led Entrepreneurship",
  "date": "2025-04-30",
  "endDate": "2025-04-30",
  "datePrecision": "day",
  "description": "National Women’s Business Mela 2.0 in Bhubaneswar, organised by INWEC, brought women’s entrepreneurship and business participation into focus. ACS, Industries & MSME, Shri Hemant Sharma addressed the gathering.\n\nThe supplied coverage also records Hon’ble Chief Minister Shri Mohan Charan Majhi inaugurating the mela and Hon’ble Minister Shri Sampad Chandra Swain addressing participants. The archive retains the requested 30 April event date; the Chief Minister and Minister posts were published on 1 May.",
  "sections": [
    {
      "id": "mela-acs",
      "title": "ACS Address",
      "date": "2025-04-30",
      "endDate": "2025-04-30",
      "location": "Bhubaneswar",
      "description": "Shri Hemant Sharma addressed the INWEC-organised National Women’s Business Mela 2.0.",
      "photos": [
        {
          "key": "am25-post-19-1.jpg",
          "data": "april-may-outreach-2025/post-19-1.jpg",
          "caption": "National Women’s Business Mela 2.0 — ACS address",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1917597966300270981"
        },
        {
          "key": "am25-post-19-2.jpg",
          "data": "april-may-outreach-2025/post-19-2.jpg",
          "caption": "National Women’s Business Mela 2.0 — ACS address — additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1917597966300270981"
        }
      ]
    },
    {
      "id": "mela-cm",
      "title": "Chief Minister’s Inauguration",
      "date": "",
      "endDate": "",
      "location": "Bhubaneswar",
      "description": "Official coverage records the Chief Minister inaugurating the mela and highlighting women’s role in Odisha’s development. The source post was published on 1 May; this section does not assign a separate ceremony date.",
      "photos": [
        {
          "key": "am25-post-18-1.jpg",
          "data": "april-may-outreach-2025/post-18-1.jpg",
          "caption": "National Women’s Business Mela 2.0 — Chief Minister’s inauguration",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1917778826995605718"
        },
        {
          "key": "am25-post-18-2.jpg",
          "data": "april-may-outreach-2025/post-18-2.jpg",
          "caption": "National Women’s Business Mela 2.0 — Chief Minister’s inauguration — additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1917778826995605718"
        }
      ]
    },
    {
      "id": "mela-minister",
      "title": "Minister’s Address",
      "date": "",
      "endDate": "",
      "location": "Bhubaneswar",
      "description": "Hon’ble Minister Shri Sampad Chandra Swain addressed the mela. Source coverage was published on 1 May.",
      "photos": [
        {
          "key": "am25-post-17-1.jpg",
          "data": "april-may-outreach-2025/post-17-1.jpg",
          "caption": "National Women’s Business Mela 2.0 — Minister’s address",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1917794554025058427"
        },
        {
          "key": "am25-post-17-2.jpg",
          "data": "april-may-outreach-2025/post-17-2.jpg",
          "caption": "National Women’s Business Mela 2.0 — Minister’s address — additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1917794554025058427"
        }
      ]
    }
  ],
  "category": "Industry engagements",
  "location": "Bhubaneswar",
  "highlights": [],
  "officialSources": [
    {
      "label": "ACS address — published 30 April",
      "url": "https://x.com/InvestInOdisha/status/1917597966300270981"
    },
    {
      "label": "Chief Minister’s inauguration — published 1 May",
      "url": "https://x.com/InvestInOdisha/status/1917778826995605718"
    },
    {
      "label": "Minister’s address — published 1 May",
      "url": "https://x.com/InvestInOdisha/status/1917794554025058427"
    }
  ],
  "contentVersion": 1,
  "coverPhoto": {
    "key": "am25-post-19-1.jpg",
    "data": "april-may-outreach-2025/post-19-1.jpg",
    "caption": "National Women’s Business Mela 2.0 — ACS address",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1917597966300270981"
  },
  "imageUrl": "april-may-outreach-2025/post-19-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/1917597966300270981"
};
const eventRecord=events.find(e=>e.id==='e103');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e103');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e103');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e103'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e103'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="ame103View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="ame103Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="ame103SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="ame103RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e103')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="ame103EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="ame103Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="ame103EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e103'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="ame103Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="ame103Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.ame103View=async key=>{viewing=await getPhotos('e103');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.ame103Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')ame103Step(1);if(ev.key==='ArrowLeft')ame103Step(-1);});
  window.ame103EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e103')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e103');};
    cls().scrollTop=0;
  };
  window.ame103Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'ame103-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e103',sectionId,data,caption:file.name});}await showEvent('e103');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e103')).find(p=>p.key===key);
  window.ame103Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('ame103-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e103');};
  window.ame103SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e103');};
  window.ame103RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e103');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1916461322369466630";
const supplied={
  "id": "e104",
  "title": "Voice Conclave of Ideas — Roadmap for Viksit Odisha",
  "date": "2025-04-27",
  "endDate": "2025-04-27",
  "datePrecision": "day",
  "description": "ACS, Industries & MSME, Shri Hemant Sharma addressed the Voice Conclave of Ideas hosted by Odisha Bhaskar. His address outlined the roadmap towards Viksit Odisha 2036 and Viksit Bharat 2047.",
  "sections": [
    {
      "id": "voice",
      "title": "Voice Conclave of Ideas",
      "date": "2025-04-27",
      "endDate": "2025-04-27",
      "location": "Odisha",
      "description": "The address focused on Odisha’s development roadmap and its contribution to the national vision for 2047.",
      "photos": [
        {
          "key": "am25-post-20-1.jpg",
          "data": "april-may-outreach-2025/post-20-1.jpg",
          "caption": "Voice Conclave of Ideas — ACS address",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1916461322369466630"
        },
        {
          "key": "am25-post-20-2.jpg",
          "data": "april-may-outreach-2025/post-20-2.jpg",
          "caption": "Voice Conclave of Ideas — ACS address — additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1916461322369466630"
        }
      ]
    }
  ],
  "category": "Conferences & summits",
  "location": "Odisha",
  "highlights": [],
  "officialSources": [
    {
      "label": "Odisha Bhaskar’s Voice Conclave of Ideas",
      "url": "https://x.com/InvestInOdisha/status/1916461322369466630"
    }
  ],
  "contentVersion": 1,
  "coverPhoto": {
    "key": "am25-post-20-1.jpg",
    "data": "april-may-outreach-2025/post-20-1.jpg",
    "caption": "Voice Conclave of Ideas — ACS address",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1916461322369466630"
  },
  "imageUrl": "april-may-outreach-2025/post-20-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/1916461322369466630"
};
const eventRecord=events.find(e=>e.id==='e104');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e104');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e104');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e104'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e104'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="ame104View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="ame104Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="ame104SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="ame104RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e104')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="ame104EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="ame104Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="ame104EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e104'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="ame104Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="ame104Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.ame104View=async key=>{viewing=await getPhotos('e104');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.ame104Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')ame104Step(1);if(ev.key==='ArrowLeft')ame104Step(-1);});
  window.ame104EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e104')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e104');};
    cls().scrollTop=0;
  };
  window.ame104Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'ame104-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e104',sectionId,data,caption:file.name});}await showEvent('e104');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e104')).find(p=>p.key===key);
  window.ame104Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('ame104-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e104');};
  window.ame104SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e104');};
  window.ame104RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e104');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://drive.google.com/drive/folders/1ozDkEdkIuD_iGRcd1UEG40qEB3PZp8U1";
const supplied={
  "id": "e105",
  "title": "Mumbai Investors’ Connect & India Steel 2025 Engagements",
  "date": "2025-04-24",
  "endDate": "2025-04-26",
  "datePrecision": "day",
  "description": "Hon’ble Chief Minister Shri Mohan Charan Majhi led investor meetings and industry discussions in Mumbai, alongside Odisha’s participation at India Steel 2025. Engagements covered steel, chemicals, pharmaceuticals, textiles and manufacturing.\n\nDate verification: the supplied programme photographs explicitly display 24–26 April 2025, matching the dated official posts. The original 24–26 April range is therefore retained; the user’s broader 24–28 April reference is noted but no unsupported activities on 27–28 April have been added.\n\nThe sources describe engagement and investment opportunities; no unreported MoU amounts or investment commitments are asserted.",
  "sections": [
    {
      "id": "april-31",
      "title": "CEO Roundtable at India Steel",
      "date": "2025-04-24",
      "endDate": "2025-04-24",
      "location": "Mumbai",
      "description": "ACS Shri Hemant Sharma joined the CEO Roundtable at India Steel 2025, highlighting diversification and a future-ready industrial ecosystem.",
      "photos": [
        {
          "key": "am25-post-31-1.jpg",
          "data": "april-may-outreach-2025/post-31-1.jpg",
          "caption": "CEO Roundtable at India Steel — Mumbai outreach",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1915354762238976250"
        },
        {
          "key": "am25-post-31-2.jpg",
          "data": "april-may-outreach-2025/post-31-2.jpg",
          "caption": "CEO Roundtable at India Steel — Mumbai outreach — additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1915354762238976250"
        }
      ]
    },
    {
      "id": "april-28",
      "title": "Odisha State Roundtable at India Steel",
      "date": "2025-04-25",
      "endDate": "2025-04-25",
      "location": "Mumbai",
      "description": "The Chief Minister led the Odisha State Roundtable at India Steel 2025, highlighting opportunities for value creation in the steel ecosystem.",
      "photos": [
        {
          "key": "am25-post-28-1.jpg",
          "data": "april-may-outreach-2025/post-28-1.jpg",
          "caption": "Odisha State Roundtable at India Steel — Mumbai outreach",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1915698923617882554"
        },
        {
          "key": "am25-post-28-2.jpg",
          "data": "april-may-outreach-2025/post-28-2.jpg",
          "caption": "Odisha State Roundtable at India Steel — Mumbai outreach — additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1915698923617882554"
        },
        {
          "key": "am25-drive-april-state-0.jpg",
          "data": "april-may-outreach-2025/drive-april-state-0.jpg",
          "caption": "Odisha State Roundtable at India Steel — April 2025 — programme photograph",
          "sourceUrl": "https://drive.google.com/file/d/1DUjyQr-kTAqsjuaPa4K8-o2yMKaEHkfx/view"
        },
        {
          "key": "am25-drive-april-state-6.jpg",
          "data": "april-may-outreach-2025/drive-april-state-6.jpg",
          "caption": "Odisha State Roundtable at India Steel — April 2025 — discussion view",
          "sourceUrl": "https://drive.google.com/file/d/11NX4chv3W9qMCa0tn1DX5FwwHjQMRJV2/view"
        }
      ]
    },
    {
      "id": "april-30",
      "title": "Indian Chemical Council",
      "date": "2025-04-25",
      "endDate": "2025-04-25",
      "location": "Mumbai",
      "description": "The Chief Minister engaged with the Indian Chemical Council on chemical and petrochemical opportunities in Odisha.",
      "photos": [
        {
          "key": "am25-post-30-1.jpg",
          "data": "april-may-outreach-2025/post-30-1.jpg",
          "caption": "Indian Chemical Council — Mumbai outreach",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1915665225996525981"
        },
        {
          "key": "am25-post-30-2.jpg",
          "data": "april-may-outreach-2025/post-30-2.jpg",
          "caption": "Indian Chemical Council — Mumbai outreach — additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1915665225996525981"
        }
      ]
    },
    {
      "id": "april-29",
      "title": "Indian Drug Manufacturers’ Association",
      "date": "2025-04-25",
      "endDate": "2025-04-25",
      "location": "Mumbai",
      "description": "The Chief Minister engaged with the Indian Drug Manufacturers’ Association on opportunities in pharmaceuticals and healthcare.",
      "photos": [
        {
          "key": "am25-post-29-1.jpg",
          "data": "april-may-outreach-2025/post-29-1.jpg",
          "caption": "Indian Drug Manufacturers’ Association — Mumbai outreach",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1915673230808879587"
        },
        {
          "key": "am25-post-29-2.jpg",
          "data": "april-may-outreach-2025/post-29-2.jpg",
          "caption": "Indian Drug Manufacturers’ Association — Mumbai outreach — additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1915673230808879587"
        }
      ]
    },
    {
      "id": "april-27",
      "title": "Classic Products",
      "date": "2025-04-25",
      "endDate": "2025-04-25",
      "location": "Mumbai",
      "description": "The Chief Minister met Suresh Mutneja, Chairman and Managing Director of Classic Products, Indian partner of Ronmas GmbH, to explore manufacturing opportunities.",
      "photos": [
        {
          "key": "am25-post-27-1.jpg",
          "data": "april-may-outreach-2025/post-27-1.jpg",
          "caption": "Classic Products — Mumbai outreach",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1915766997373112652"
        }
      ]
    },
    {
      "id": "april-26",
      "title": "Archroma",
      "date": "2025-04-25",
      "endDate": "2025-04-25",
      "location": "Mumbai",
      "description": "Discussions with Anjani Prasad, CEO and Managing Director of Archroma India, covered specialty chemicals and sustainable manufacturing.",
      "photos": [
        {
          "key": "am25-post-26-1.jpg",
          "data": "april-may-outreach-2025/post-26-1.jpg",
          "caption": "Archroma — Mumbai outreach",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1915787423461642663"
        },
        {
          "key": "am25-drive-april-archroma-0.jpg",
          "data": "april-may-outreach-2025/drive-april-archroma-0.jpg",
          "caption": "Archroma — April 2025 — programme photograph",
          "sourceUrl": "https://drive.google.com/file/d/1gvsuVtEzNAOlt08arxFNION40bm6LU1-/view"
        },
        {
          "key": "am25-drive-april-archroma-2.jpg",
          "data": "april-may-outreach-2025/drive-april-archroma-2.jpg",
          "caption": "Archroma — April 2025 — discussion view",
          "sourceUrl": "https://drive.google.com/file/d/1-pOAPLXh4pw9CoQgCMLkV3QyTuLFk23i/view"
        }
      ]
    },
    {
      "id": "april-25",
      "title": "Sportking",
      "date": "2025-04-25",
      "endDate": "2025-04-25",
      "location": "Mumbai",
      "description": "The Chief Minister met Munish Avasthi, Chairman and Managing Director of Sportking, to discuss textile and apparel opportunities.",
      "photos": [
        {
          "key": "am25-post-25-1.jpg",
          "data": "april-may-outreach-2025/post-25-1.jpg",
          "caption": "Sportking — Mumbai outreach",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1915791358637334799"
        }
      ]
    },
    {
      "id": "april-24",
      "title": "Arvind",
      "date": "2025-04-25",
      "endDate": "2025-04-25",
      "location": "Mumbai",
      "description": "The Chief Minister met Ankur Trivedi, Head of Public Affairs at Arvind, to discuss investment opportunities in textiles.",
      "photos": [
        {
          "key": "am25-post-24-1.jpg",
          "data": "april-may-outreach-2025/post-24-1.jpg",
          "caption": "Arvind — Mumbai outreach",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1915793329087717652"
        }
      ]
    },
    {
      "id": "april-23",
      "title": "Hindustan Unilever",
      "date": "2025-04-25",
      "endDate": "2025-04-25",
      "location": "Mumbai",
      "description": "The Chief Minister met Kanchana T. K., Head of Government Affairs at Hindustan Unilever, on expansion and CSR opportunities.",
      "photos": [
        {
          "key": "am25-post-23-1.jpg",
          "data": "april-may-outreach-2025/post-23-1.jpg",
          "caption": "Hindustan Unilever — Mumbai outreach",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1915816902309368157"
        },
        {
          "key": "am25-drive-april-hul-0.jpg",
          "data": "april-may-outreach-2025/drive-april-hul-0.jpg",
          "caption": "Hindustan Unilever — April 2025 — programme photograph",
          "sourceUrl": "https://drive.google.com/file/d/1FPPpMJnTA9rb0y4YgFaWdhdqQTycBd5u/view"
        },
        {
          "key": "am25-drive-april-hul-2.jpg",
          "data": "april-may-outreach-2025/drive-april-hul-2.jpg",
          "caption": "Hindustan Unilever — April 2025 — discussion view",
          "sourceUrl": "https://drive.google.com/file/d/1PIpCucmOk4L5-Cj_WDrEuytEv8-ihToH/view"
        }
      ]
    },
    {
      "id": "april-22",
      "title": "Sarvesh Refractories",
      "date": "2025-04-26",
      "endDate": "2025-04-26",
      "location": "Mumbai",
      "description": "The Chief Minister met Kushal Agarwal, Managing Director of Sarvesh Refractories, to discuss manufacturing prospects.",
      "photos": [
        {
          "key": "am25-post-22-1.jpg",
          "data": "april-may-outreach-2025/post-22-1.jpg",
          "caption": "Sarvesh Refractories — Mumbai outreach",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1916041459062493335"
        }
      ]
    },
    {
      "id": "april-21",
      "title": "Shyam Steel Works",
      "date": "2025-04-26",
      "endDate": "2025-04-26",
      "location": "Mumbai",
      "description": "The Chief Minister met Siddharth Beriwal, Director of Shyam Steel Works, on opportunities to expand steel production.",
      "photos": [
        {
          "key": "am25-post-21-1.jpg",
          "data": "april-may-outreach-2025/post-21-1.jpg",
          "caption": "Shyam Steel Works — Mumbai outreach",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1916047234703233239"
        }
      ]
    },
    {
      "id": "april-exhibit",
      "title": "India Steel Exhibition Visit",
      "date": "",
      "endDate": "",
      "location": "Mumbai",
      "description": "Selected photographs from the supplied India Steel exhibition collection. The exact visit day is not independently established by these files.",
      "photos": [
        {
          "key": "am25-drive-april-exhibit-0.jpg",
          "data": "april-may-outreach-2025/drive-april-exhibit-0.jpg",
          "caption": "India Steel 2025 exhibition visit — programme photograph",
          "sourceUrl": "https://drive.google.com/file/d/1kFkLTgHuXo60rVNwmnlOgZQzlikJNRYW/view"
        },
        {
          "key": "am25-drive-april-exhibit-18.jpg",
          "data": "april-may-outreach-2025/drive-april-exhibit-18.jpg",
          "caption": "India Steel 2025 exhibition visit — discussion view",
          "sourceUrl": "https://drive.google.com/file/d/1Q6Ewoq8Hyz9-1AuaxeppsenGWdRbXbt2/view"
        }
      ]
    }
  ],
  "category": "Investors’ meets",
  "location": "Mumbai",
  "highlights": [
    {
      "value": "24–26 April",
      "label": "Programme-banner dates"
    },
    {
      "value": "11",
      "label": "Documented meeting / roundtable posts"
    }
  ],
  "officialSources": [
    {
      "label": "CEO Roundtable at India Steel",
      "url": "https://x.com/InvestInOdisha/status/1915354762238976250"
    },
    {
      "label": "Odisha State Roundtable at India Steel",
      "url": "https://x.com/InvestInOdisha/status/1915698923617882554"
    },
    {
      "label": "Indian Chemical Council",
      "url": "https://x.com/InvestInOdisha/status/1915665225996525981"
    },
    {
      "label": "Indian Drug Manufacturers’ Association",
      "url": "https://x.com/InvestInOdisha/status/1915673230808879587"
    },
    {
      "label": "Classic Products",
      "url": "https://x.com/InvestInOdisha/status/1915766997373112652"
    },
    {
      "label": "Archroma",
      "url": "https://x.com/InvestInOdisha/status/1915787423461642663"
    },
    {
      "label": "Sportking",
      "url": "https://x.com/InvestInOdisha/status/1915791358637334799"
    },
    {
      "label": "Arvind",
      "url": "https://x.com/InvestInOdisha/status/1915793329087717652"
    },
    {
      "label": "Hindustan Unilever",
      "url": "https://x.com/InvestInOdisha/status/1915816902309368157"
    },
    {
      "label": "Sarvesh Refractories",
      "url": "https://x.com/InvestInOdisha/status/1916041459062493335"
    },
    {
      "label": "Shyam Steel Works",
      "url": "https://x.com/InvestInOdisha/status/1916047234703233239"
    },
    {
      "label": "User-supplied April Mumbai photo collection",
      "url": "https://drive.google.com/drive/folders/1ozDkEdkIuD_iGRcd1UEG40qEB3PZp8U1"
    }
  ],
  "contentVersion": 1,
  "requestedDateRange": "2025-04-24/2025-04-28",
  "sourceUrl": "https://drive.google.com/drive/folders/1ozDkEdkIuD_iGRcd1UEG40qEB3PZp8U1",
  "coverPhoto": {
    "key": "am25-post-31-1.jpg",
    "data": "april-may-outreach-2025/post-31-1.jpg",
    "caption": "CEO Roundtable at India Steel — Mumbai outreach",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1915354762238976250"
  },
  "imageUrl": "april-may-outreach-2025/post-31-1.jpg"
};
const eventRecord=events.find(e=>e.id==='e105');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e105');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e105');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e105'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e105'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="ame105View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="ame105Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="ame105SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="ame105RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e105')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Full photo collection ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="ame105EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="ame105Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="ame105EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e105'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="ame105Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="ame105Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.ame105View=async key=>{viewing=await getPhotos('e105');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.ame105Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')ame105Step(1);if(ev.key==='ArrowLeft')ame105Step(-1);});
  window.ame105EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e105')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e105');};
    cls().scrollTop=0;
  };
  window.ame105Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'ame105-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e105',sectionId,data,caption:file.name});}await showEvent('e105');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e105')).find(p=>p.key===key);
  window.ame105Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('ame105-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e105');};
  window.ame105SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e105');};
  window.ame105RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original in Google Drive will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e105');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1913486144433508764";
const supplied={
  "id": "e106",
  "title": "Envisioning Viksit Odisha 2036 — ICC National Summit",
  "date": "2025-04-19",
  "endDate": "2025-04-19",
  "datePrecision": "day",
  "description": "ACS, Industries & MSME, Shri Hemant Sharma addressed the Indian Chamber of Commerce National Summit, Envisioning Viksit Odisha 2036. His remarks focused on structural transformation, rising incomes and sustainable growth.",
  "sections": [
    {
      "id": "icc",
      "title": "ICC National Summit",
      "date": "2025-04-19",
      "endDate": "2025-04-19",
      "location": "Odisha",
      "description": "The summit considered the pathways for Odisha’s development towards 2036.",
      "photos": [
        {
          "key": "am25-post-32-1.jpg",
          "data": "april-may-outreach-2025/post-32-1.jpg",
          "caption": "Envisioning Viksit Odisha 2036 — ICC National Summit",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1913486144433508764"
        },
        {
          "key": "am25-post-32-2.jpg",
          "data": "april-may-outreach-2025/post-32-2.jpg",
          "caption": "Envisioning Viksit Odisha 2036 — ICC National Summit — additional view",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1913486144433508764"
        }
      ]
    }
  ],
  "category": "Conferences & summits",
  "location": "Odisha",
  "highlights": [],
  "officialSources": [
    {
      "label": "ICC National Summit — Envisioning Viksit Odisha 2036",
      "url": "https://x.com/InvestInOdisha/status/1913486144433508764"
    }
  ],
  "contentVersion": 1,
  "coverPhoto": {
    "key": "am25-post-32-1.jpg",
    "data": "april-may-outreach-2025/post-32-1.jpg",
    "caption": "Envisioning Viksit Odisha 2036 — ICC National Summit",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1913486144433508764"
  },
  "imageUrl": "april-may-outreach-2025/post-32-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/1913486144433508764"
};
const eventRecord=events.find(e=>e.id==='e106');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e106');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e106');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e106'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e106'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="ame106View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="ame106Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="ame106SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="ame106RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e106')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="ame106EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="ame106Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="ame106EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e106'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="ame106Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="ame106Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.ame106View=async key=>{viewing=await getPhotos('e106');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.ame106Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')ame106Step(1);if(ev.key==='ArrowLeft')ame106Step(-1);});
  window.ame106EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e106')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e106');};
    cls().scrollTop=0;
  };
  window.ame106Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'ame106-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e106',sectionId,data,caption:file.name});}await showEvent('e106');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e106')).find(p=>p.key===key);
  window.ame106Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('ame106-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e106');};
  window.ame106SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e106');};
  window.ame106RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e106');};
  render();
})();

(() => {
const VERSION=1;
const DRIVE="https://x.com/InvestInOdisha/status/1911062812614414541";
const supplied={
  "id": "e107",
  "title": "IPICOL’s 52nd Foundation Day — Strategic Industry Outlook",
  "date": "2025-04-12",
  "endDate": "2025-04-12",
  "datePrecision": "day",
  "description": "IPICOL marked its 52nd Foundation Day with addresses by ACS Shri Hemant Sharma and Managing Director, IPICOL & IDCO, Shri Bhupendra Singh Poonia. They shared strategic insights and perspectives for the year ahead.",
  "sections": [
    {
      "id": "foundation",
      "title": "52nd Foundation Day",
      "date": "2025-04-12",
      "endDate": "2025-04-12",
      "location": "Odisha",
      "description": "Leadership addresses marked IPICOL’s institutional milestone and looked ahead to its industry-promotion priorities.",
      "photos": [
        {
          "key": "am25-post-33-1.jpg",
          "data": "april-may-outreach-2025/post-33-1.jpg",
          "caption": "IPICOL’s 52nd Foundation Day — leadership addresses",
          "sourceUrl": "https://x.com/InvestInOdisha/status/1911062812614414541"
        }
      ]
    }
  ],
  "category": "Institutional milestones",
  "location": "Odisha",
  "highlights": [],
  "officialSources": [
    {
      "label": "IPICOL’s 52nd Foundation Day",
      "url": "https://x.com/InvestInOdisha/status/1911062812614414541"
    }
  ],
  "contentVersion": 1,
  "coverPhoto": {
    "key": "am25-post-33-1.jpg",
    "data": "april-may-outreach-2025/post-33-1.jpg",
    "caption": "IPICOL’s 52nd Foundation Day — leadership addresses",
    "sourceUrl": "https://x.com/InvestInOdisha/status/1911062812614414541"
  },
  "imageUrl": "april-may-outreach-2025/post-33-1.jpg",
  "sourceUrl": "https://x.com/InvestInOdisha/status/1911062812614414541"
};
const eventRecord=events.find(e=>e.id==='e107');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){const priorDescription=eventRecord.description;Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));if(priorDescription?.trim()&&priorDescription.trim()!==supplied.description.trim())eventRecord.description+='\n\nPreviously saved notes:\n'+priorDescription;save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e107');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e107');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e107'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e107'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="ame107View('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="ame107Caption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="ame107SetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="ame107RemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · Official archive update</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e107')">Edit event details</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Original Invest Odisha post ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}<details><summary>Sources &amp; verification</summary><ul>${(e.officialSources||[]).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("")}</ul></details></section>
      <nav class="chem-index" aria-label="Event sections">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="ame107EditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="ame107Upload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="ame107EditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e107'||!current().highlights.length)return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="ame107Step(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="ame107Step(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.ame107View=async key=>{viewing=await getPhotos('e107');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.ame107Step=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')ame107Step(1);if(ev.key==='ArrowLeft')ame107Step(-1);});
  window.ame107EditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">Event details</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e107')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e107');};
    cls().scrollTop=0;
  };
  window.ame107Upload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'ame107-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e107',sectionId,data,caption:file.name});}await showEvent('e107');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e107')).find(p=>p.key===key);
  window.ame107Caption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('ame107-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e107');};
  window.ame107SetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e107');};
  window.ame107RemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original source will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e107');};
  render();
})();

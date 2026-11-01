/* India Chem 2026: supplied editorial copy and photographs from the user's shared Drive.
   This migration runs once, so subsequent admin edits survive refresh and backup restore. */
(() => {
  const VERSION = 1;
  const ROOT = 'india-chem-2026/';
  const DRIVE = 'https://drive.google.com/drive/folders/1O7WO8JLv3OsstXNdScA6iQwzasXnC3Fc';
  const photo = (name, driveId, caption) => ({key:'chem-'+name, data:ROOT+name+'.jpg', caption, sourceUrl:'https://drive.google.com/file/d/'+driveId+'/view'});
  const cover = photo('cover','1yNp39Ntp533FdUADNiT9YVBVXSXhX_9O','India Chem 2026 inaugural session, Mumbai · 22 October 2026');
  const supplied = {
    title:'India Chem 2026', date:'2026-10-21', endDate:'2026-10-23', location:'Mumbai, Maharashtra', category:'Events & summits',
    description:`Led by Hon’ble Chief Minister Shri Mohan Charan Majhi, a high-level Odisha delegation participated in India Chem 2026 in Mumbai, showcasing the state’s investment potential across chemicals, petrochemicals and allied industries.

The three-day outreach included the inaugural session and exhibition, Global CEOs Forum, one-on-one meetings with industry leaders, and a visit to Larsen & Toubro’s facility in Powai.

The engagements resulted in investment proposals worth ₹53,893.51 crore, comprising 9 MoUs and 4 investment intents, with the potential to generate 20,210 employment opportunities. The delegation also conducted 25 one-on-one industry meetings.

A major outcome was an MoU with NLC India Limited involving an investment of ₹36,763.51 crore in the chemicals and energy sectors.`,
    highlights:[
      {label:'Investment proposals',value:'₹53,893.51 crore'},
      {label:'Employment potential',value:'20,210'},
      {label:'MoUs signed',value:'9'},
      {label:'Investment intents',value:'4'},
      {label:'One-on-one meetings',value:'25'},
      {label:'NLC India MoU',value:'₹36,763.51 crore'}
    ],
    sections:[
      {id:'arrival',title:'Arrival & Preparations',date:'2026-10-21',location:'Mumbai',description:`Hon’ble Chief Minister Shri Mohan Charan Majhi arrived in Mumbai on 21 October 2026, leading a high-level Odisha delegation for India Chem 2026 and a series of engagements aimed at strengthening industrial partnerships and attracting investments to the state.

Ahead of the event, Additional Chief Secretary Shri Hemant Sharma chaired a preparatory meeting to review arrangements, coordinate the delegation’s programme and discuss the upcoming interactions with industry representatives.

The preparations focused on Odisha’s participation in the inaugural session, exhibition, Global CEOs Forum and investor meetings, ensuring coordinated engagement with policymakers and business leaders throughout the outreach programme.`,photos:[
        photo('arrival-01','1Tv7p6CvBZnZ_fwtCMbjZJBeTEwGkjM3N','Welcome to Mumbai ahead of the India Chem outreach · 21 October'),
        photo('arrival-02','1Qjs3aVx6-M_0KBN2KFe_07XdKz97mv1C','Arrival programme for the Odisha delegation · 21 October'),
        photo('preparation-01','1u7H2d9J3Et8P3X2H3CNomOm2GS-0_s5m','Preparatory meeting ahead of the delegation’s engagements · 21 October'),
        photo('preparation-02','1mhChEExU5DRaj8qsizVv6H9i-FiK8d67','Preparations for the investor outreach programme · 21 October')
      ]},
      {id:'inauguration',title:'Inaugural Session & Exhibition',date:'2026-10-22',location:'India Chem 2026, Mumbai',description:`Hon’ble Chief Minister Shri Mohan Charan Majhi participated in the inaugural session of India Chem 2026, inaugurated by Union Minister Shri J. P. Nadda, bringing together policymakers, industry leaders and stakeholders from the chemicals and petrochemicals sectors.

Addressing the gathering, the Chief Minister highlighted Odisha’s industrial strengths, strategic connectivity, infrastructure capabilities and emerging investment opportunities across chemicals, petrochemicals and downstream manufacturing.

The Chief Minister also visited the India Chem exhibition, exploring technological advancements, industrial innovations and emerging developments across the chemical and allied industries.

Odisha’s participation highlighted the state’s efforts to strengthen its industrial value chains, encourage diversification and expand its manufacturing ecosystem.`,photos:[
        cover,
        photo('inaugural-01','1IyKJacRaCa8EJZeCtMbjFxgmBMZboNCL','Delegates at the India Chem inaugural session · 22 October'),
        photo('inaugural-02','1ZXvcUMmbu8whyBSD1pe3oyLsIVYwgEK-','Address during the India Chem inaugural session · 22 October'),
        photo('exhibition-01','1XNgPTPHhEzODPZsohZ66x9vs1fhSj-3c','Exhibition engagement at India Chem 2026 · 22 October'),
        photo('exhibition-02','1tT_xNOVHbb7O6eKB3pXIUAT4gSXegGZ-','Exploring the India Chem exhibition · 22 October')
      ]},
      {id:'ceos',title:'Global CEOs Forum',date:'2026-10-22',location:'Mumbai',description:`Hon’ble Chief Minister Shri Mohan Charan Majhi co-chaired the Global CEOs Forum at India Chem 2026 alongside Union Minister Shri J. P. Nadda, Union Minister of State Smt. Anupriya Patel and Madhya Pradesh Chief Minister Dr. Mohan Yadav.

The forum brought together senior policymakers, global business leaders and industry representatives to discuss investment opportunities, supply chain resilience, technological innovation and sustainable industrial growth.

The discussions explored emerging opportunities across chemicals, petrochemicals and allied sectors, highlighting the importance of collaboration between governments and industry.

Odisha’s participation reinforced its commitment to attracting investments, developing industrial infrastructure and strengthening its position within India’s evolving chemicals and manufacturing ecosystem.`,photos:[
        photo('ceo-01','1PUXxazzTxGU9QWepGCsH8zkdOjFdGDMH','Industry and government representatives at the Global CEOs Forum · 22 October'),
        photo('ceo-02','1RhdyM3O6iFsoLuwt4idxjIWGvBPUKMwV','Roundtable discussion at the Global CEOs Forum · 22 October')
      ]},
      {id:'investors',title:'Odisha Investors’ Connect',date:'2026-10-22',endDate:'2026-10-23',location:'One-on-One Industry Meetings, Mumbai',description:`As part of Odisha’s industrial outreach at India Chem 2026, Hon’ble Chief Minister Shri Mohan Charan Majhi participated in one-on-one meetings with representatives of leading Indian and international companies.

A total of 25 industry meetings were conducted, focusing on investment opportunities, industrial expansion, technology integration, value addition and potential partnerships across chemicals, petrochemicals and allied manufacturing sectors.

Engagements included interactions with representatives of major enterprises such as POSCO India, JSW and companies from the United States and Europe.

The meetings contributed to Odisha’s investment outreach, which generated proposals worth ₹53,893.51 crore, with an estimated employment potential of 20,210 jobs across various sectors.`,photos:[
        photo('nlc-01','1YLi51uLH7wtCp8FESD7jHy6hkRcEi49X','NLC India engagement during Odisha Investors’ Connect'),
        photo('nlc-02','1cnMyBR8GN_ey1DCCPppuf7sHIUaIwZA2','Discussions during the NLC India engagement'),
        photo('posco-01','1XUgcZ9MOCgtlOaAyohf855aYUBv4Tt6n','POSCO India & JSW engagement during the Mumbai outreach'),
        photo('posco-02','1YB1JEy6kf-L8gvSUcGcXxPaVI_X-z12h','Presentation during the POSCO India & JSW engagement')
      ]},
      {id:'lt',title:'Visit to Larsen & Toubro',date:'2026-10-23',location:'A. M. Naik Tower, Powai, Mumbai',description:`Hon’ble Chief Minister Shri Mohan Charan Majhi visited Larsen & Toubro’s A. M. Naik Tower in Powai, Mumbai, on 23 October 2026, as part of Odisha’s industrial outreach programme.

The visit commenced with a felicitation of the Chief Minister by L&T’s senior leadership, followed by a tour of the company’s facilities to understand its technological expertise, industrial capabilities and operations.

A roundtable interaction with the L&T leadership focused on potential investment opportunities, infrastructure development, industrial expansion and areas of future collaboration with Odisha.

The engagement provided an opportunity to explore stronger government–industry cooperation and potential partnerships supporting Odisha’s expanding manufacturing and infrastructure ecosystem.`,photos:[
        photo('lt-felicitation-01','1VCxyb91nayFM8emoi94zqbJPABv2VVYJ','Felicitation during the Larsen & Toubro visit · 23 October'),
        photo('lt-felicitation-02','188uhH_rx-nTl0Au7k_w2h6EWuO3pQcE2','Welcome by the L&T leadership · 23 October'),
        photo('lt-roundtable-01','1_5HcSi0E2AUF4exKXG59nqGHr1Nk740q','Welcome at the L&T engagement in Powai · 23 October'),
        photo('lt-roundtable-02','1gIBbOqJHKNiGO5RQYxR-V4ztqvI32XR9','Roundtable interaction with the L&T leadership · 23 October'),
        photo('lt-visit-01','1I6nAZLgprgXIiaaWB_vnql_AV7PTF31H','Tour of the L&T facilities at Powai · 23 October'),
        photo('lt-visit-02','1sQwlKe2T3aeNnzQXpj_wDPdN7tkVM19N','Exploring L&T’s industrial capabilities · 23 October')
      ]},
      {id:'outcomes',title:'Outcomes & the Road Ahead',location:'Investment commitments',description:`Odisha’s participation in India Chem 2026 resulted in investment proposals worth ₹53,893.51 crore, with the potential to generate 20,210 employment opportunities.

The outreach secured 9 Memoranda of Understanding (MoUs) and 4 investment intents, alongside 25 one-on-one industry meetings. Among the significant commitments was an MoU with NLC India Limited worth ₹36,763.51 crore in the chemicals and energy sectors.

Another key announcement was the proposed organisation of Odisha Chem 2027 in October 2027, providing a platform for further industrial engagement.

The outcomes reflected Odisha’s efforts to develop an integrated industrial ecosystem encompassing chemicals, petrochemicals, metals, downstream manufacturing and allied industries.`,photos:[]}
    ], coverPhoto:cover, sourceUrl:DRIVE, imageUrl:cover.data, contentVersion:VERSION
  };
  const eventRecord=events.find(e=>e.id==='e1');
  if(eventRecord && (eventRecord.contentVersion||0)<VERSION){Object.assign(eventRecord,JSON.parse(JSON.stringify(supplied)));save();}
  const seedRecord=SEED_EVENTS.find(e=>e.id==='e1');
  if(seedRecord && (seedRecord.contentVersion||0)<VERSION)Object.assign(seedRecord,JSON.parse(JSON.stringify(supplied)));

  const eventById=id=>events.find(e=>e.id===id);
  const current=()=>eventById('e1');
  const sectionById=id=>current()?.sections?.find(s=>s.id===id);
  const eventPhotos=e=>[...new Map([e.coverPhoto,...(e.sections||[]).flatMap(s=>s.photos||[])].filter(Boolean).map(p=>[p.key,p])).values()];
  const originalPhotos=getPhotos;
  getPhotos=async id=>id==='e1'?[...eventPhotos(current()||supplied),...(await localPhotos(id))]:originalPhotos(id);
  const paragraph=text=>String(text||'').split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');
  const period=e=>e.date?`${fmt(e.date)}${e.endDate&&e.endDate!==e.date?' — '+fmt(e.endDate):''}`:'';
  const baseDetail=showEvent;
  const baseEditor=openEditor;
  const cls=()=>document.querySelector('.modal');
  const resetModal=()=>{cls().classList.remove('chem-modal');};
  const baseClose=closeModal;
  closeModal=()=>{baseClose();resetModal();};
  showEvent=async id=>{
    if(id!=='e1'){resetModal();return baseDetail(id);}
    const e=current();if(!e)return;
    const extra=await localPhotos(id);
    const gallery=(photos,sectionId)=>`<div class="chem-gallery">${photos.map(p=>`<figure><button class="chem-photo-button" onclick="chemView('${p.key}')" aria-label="Enlarge: ${esc(p.caption||'Event photograph')}"><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}" loading="lazy"></button><figcaption>${esc(p.caption||'Event photograph')}</figcaption><div class="chem-photo-actions"><button class="chem-text-button" onclick="chemCaption('${p.key}')">Edit caption</button><button class="chem-text-button" onclick="chemSetCover('${p.key}')">Use as cover</button><button class="chem-text-button" onclick="chemRemovePhoto('${p.key}','${sectionId}')">Remove</button></div></figure>`).join('')}</div>`;
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))} · 3-day outreach</div><h2>${esc(e.title)}</h2><div class="meta">${esc(period(e))} · ${esc(e.location)}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e1')">Edit event & statistics</button><a class="btn" href="${DRIVE}" target="_blank" rel="noopener">Full photo collection ↗</a></div></div>
      ${e.coverPhoto?`<figure class="chem-cover"><img src="${esc(e.coverPhoto.data)}" alt="${esc(e.coverPhoto.caption)}"><figcaption>${esc(e.coverPhoto.caption)}</figcaption></figure>`:''}
      <div class="chem-body"><div class="chem-stats">${(e.highlights||[]).map(s=>`<div class="chem-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div><section class="chem-overview">${paragraph(e.description)}</section>
      <nav class="chem-index" aria-label="India Chem engagements">${e.sections.map((s,i)=>`<button onclick="document.getElementById('chem-${s.id}').scrollIntoView({behavior:'smooth',block:'start'})">${String(i+1).padStart(2,'0')} · ${esc(s.title)}</button>`).join('')}</nav>
      ${e.sections.map((s,i)=>`<section class="chem-section" id="chem-${s.id}"><div class="chem-section-title"><div><div class="eyebrow">Engagement ${String(i+1).padStart(2,'0')}</div><h3>${esc(s.title)}</h3></div><button class="btn" onclick="chemEditSection('${s.id}')">Edit section</button></div><div class="meta">${esc([period(s),s.location].filter(Boolean).join(' | '))}</div>${paragraph(s.description)}${gallery([...(s.photos||[]),...extra.filter(p=>p.sectionId===s.id)],s.id)}<label class="chem-upload"><span>Add photographs to this engagement</span><input type="file" multiple accept="image/*" aria-label="Add photos to ${esc(s.title)}" onchange="chemUpload('${s.id}',this.files)"></label></section>`).join('')}
      ${extra.some(p=>!sectionById(p.sectionId))?`<section class="chem-section"><h3>Additional photographs</h3>${gallery(extra.filter(p=>!sectionById(p.sectionId)),'additional')}</section>`:''}
      <div class="chem-tools"><button class="btn" onclick="chemEditSection()">+ Add engagement</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>`);
    cls().classList.add('chem-modal');
    cls().scrollTop=0;
  };
  openEditor=id=>{
    resetModal();
    baseEditor(id);
    if(id!=='e1')return;
    cls().classList.add('chem-modal');
    const form=document.querySelector('#modalcontent form');
    form.insertAdjacentHTML('beforeend',`<fieldset style="margin-top:24px;border:1px solid #e6e5e1;border-radius:8px"><legend>Event highlights</legend><div class="formgrid">${current().highlights.map((s,i)=>`<div class="field"><label>${esc(s.label)}</label><input name="highlight-${i}" value="${esc(s.value)}"></div>`).join('')}</div></fieldset>`);
    form.addEventListener('submit',()=>{current().highlights.forEach((s,i)=>s.value=form.elements['highlight-'+i].value.trim());save();},true);
  };
  const viewer=document.createElement('dialog');viewer.className='chem-viewer';viewer.setAttribute('aria-label','Event photograph viewer');document.body.append(viewer);
  let viewing=[],viewIndex=0;
  viewer.addEventListener('close',()=>{viewer.replaceChildren();viewing=[];viewIndex=0;});
  const drawPhoto=()=>{const p=viewing[viewIndex];viewer.innerHTML=`<div class="chem-viewer-bar"><span>${viewIndex+1} / ${viewing.length}</span><div><button class="btn" onclick="chemStep(-1)" aria-label="Previous photo">←</button> <button class="btn" onclick="chemStep(1)" aria-label="Next photo">→</button> <button class="btn" onclick="this.closest('dialog').close()">Close ×</button></div></div><img src="${esc(p.data)}" alt="${esc(p.caption||'Event photograph')}"><p>${esc(p.caption||'Event photograph')}${p.sourceUrl?` · <a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener" style="color:#e8bcad">View original ↗</a>`:''}</p>`;};
  window.chemView=async key=>{viewing=await getPhotos('e1');viewIndex=viewing.findIndex(p=>p.key===key);if(viewIndex<0)return;drawPhoto();if(!viewer.open)viewer.showModal();};
  window.chemStep=n=>{viewIndex=(viewIndex+n+viewing.length)%viewing.length;drawPhoto();};
  viewer.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')chemStep(1);if(ev.key==='ArrowLeft')chemStep(-1);});
  window.chemEditSection=id=>{
    const s=sectionById(id)||{id:'engagement-'+Date.now(),title:'',date:'',endDate:'',location:'',description:'',photos:[]};
    modal(`<div class="chem-editor"><div class="eyebrow">India Chem 2026</div><h2>${id?'Edit engagement':'Add engagement'}</h2><form id="chem-section-form"><div class="field"><label for="section-title">Title</label><input id="section-title" name="title" required value="${esc(s.title)}"></div><div class="formgrid"><div class="field"><label for="section-date">Date (optional)</label><input id="section-date" name="date" type="date" value="${esc(s.date)}"></div><div class="field"><label for="section-end">End date (optional)</label><input id="section-end" name="endDate" type="date" value="${esc(s.endDate)}"></div></div><div class="field"><label for="section-location">Location / context</label><input id="section-location" name="location" value="${esc(s.location)}"></div><div class="field"><label for="section-description">Description</label><textarea id="section-description" name="description">${esc(s.description)}</textarea></div><div class="chem-tools"><button class="btn red">Save engagement</button><button type="button" class="btn" onclick="showEvent('e1')">Cancel</button></div></form></div>`);
    cls().classList.add('chem-modal');
    document.getElementById('chem-section-form').onsubmit=ev=>{ev.preventDefault();const f=new FormData(ev.target);for(const k of ['title','date','endDate','location','description'])s[k]=String(f.get(k)||'').trim();if(s.endDate&&s.date&&s.endDate<s.date){alert('The end date must be on or after the start date.');return;}if(!id)current().sections.push(s);save();showEvent('e1');};
    cls().scrollTop=0;
  };
  window.chemUpload=async (sectionId,files)=>{
    const section=sectionById(sectionId);if(!section)return;
    try{for(const file of files){if(!file.type.startsWith('image/'))continue;const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});await storePhoto({key:'chem-upload-'+Date.now()+'-'+Math.random().toString(36).slice(2),eventId:'e1',sectionId,data,caption:file.name});}await showEvent('e1');render();}catch{alert('The photograph could not be stored. Try a smaller file or export a backup to free browser space.');}
  };
  const findPhoto=async key=>(await getPhotos('e1')).find(p=>p.key===key);
  window.chemCaption=async key=>{const p=await findPhoto(key);if(!p)return;const caption=prompt('Photograph caption',p.caption||'');if(caption===null)return;p.caption=caption;if(key.startsWith('chem-upload-')||!eventPhotos(current()).some(x=>x.key===key))await storePhoto(p);else{for(const s of current().sections)for(const x of s.photos||[])if(x.key===key)x.caption=caption;if(current().coverPhoto?.key===key)current().coverPhoto.caption=caption;save();}showEvent('e1');};
  window.chemSetCover=async key=>{const p=await findPhoto(key);if(!p)return;current().coverPhoto={...p};current().imageUrl=p.data;save();render();showEvent('e1');};
  window.chemRemovePhoto=async key=>{if(!confirm('Remove this photograph from the event? The original in Google Drive will stay available.'))return;const e=current();for(const s of e.sections)s.photos=(s.photos||[]).filter(p=>p.key!==key);if(e.coverPhoto?.key===key){e.coverPhoto=e.sections.flatMap(s=>s.photos||[])[0]||null;e.imageUrl=e.coverPhoto?.data||'';}await deletePhoto(key);save();render();showEvent('e1');};
  render();
})();

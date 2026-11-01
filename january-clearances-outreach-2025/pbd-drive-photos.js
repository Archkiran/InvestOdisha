/* Add corrected PBD Drive photographs without replacing saved event edits. */
(() => {
  const source={label:"Pravasi Bharatiya Divas — high-resolution original collection",url:"https://drive.google.com/drive/folders/1mgNi5oGqvgg4tAkyPSyHByIl_kRu3uFH"};
  const photos=[
  {
    "key": "pbd25-drive-pbd-0.jpg",
    "data": "january-clearances-outreach-2025/drive-pbd-0.jpg",
    "caption": "Prime Minister at the PBD inaugural programme — 9 January 2025",
    "sourceUrl": "https://drive.google.com/file/d/1W93HbL-EOxWSOMjUblkRd1aaXeMfaGBF/view"
  },
  {
    "key": "pbd25-drive-pbd-4.jpg",
    "data": "january-clearances-outreach-2025/drive-pbd-4.jpg",
    "caption": "Delegates at the PBD convention — 9 January 2025",
    "sourceUrl": "https://drive.google.com/file/d/11v3iLQaqsA0mfYcBhYmiiTTh96Ifa6kE/view"
  },
  {
    "key": "pbd25-drive-pbd-8.jpg",
    "data": "january-clearances-outreach-2025/drive-pbd-8.jpg",
    "caption": "Delegates attending the PBD inaugural programme — 9 January 2025",
    "sourceUrl": "https://drive.google.com/file/d/1ie_-wHeu-yvuXqZKfjAHr4c78CFTU-0M/view"
  },
  {
    "key": "pbd25-drive-pbd-13.jpg",
    "data": "january-clearances-outreach-2025/drive-pbd-13.jpg",
    "caption": "Dignitaries in the PBD audience — 9 January 2025",
    "sourceUrl": "https://drive.google.com/file/d/1HtwEiaCfAJQYVzTC6SOvCC_n5MAWqomk/view"
  },
  {
    "key": "pbd25-drive-pbd-18.jpg",
    "data": "january-clearances-outreach-2025/drive-pbd-18.jpg",
    "caption": "Delegates listening at the PBD convention — 9 January 2025",
    "sourceUrl": "https://drive.google.com/file/d/112xa8AiMUwwYFii1iRDXvTv35gWoGq-H/view"
  },
  {
    "key": "pbd25-drive-pbd-23.jpg",
    "data": "january-clearances-outreach-2025/drive-pbd-23.jpg",
    "caption": "PBD inaugural programme — flag-off moment on stage — 9 January 2025",
    "sourceUrl": "https://drive.google.com/file/d/1Ckvqi7HwAlhqbWf9yfe-FfRRf-9Rixep/view"
  },
  {
    "key": "pbd25-drive-pbd-28.jpg",
    "data": "january-clearances-outreach-2025/drive-pbd-28.jpg",
    "caption": "Prime Minister addressing the PBD convention — 9 January 2025",
    "sourceUrl": "https://drive.google.com/file/d/1buQMYYXislFa5DPSaLXeuRjLF4ZKljxY/view"
  },
  {
    "key": "pbd25-drive-pbd-34.jpg",
    "data": "january-clearances-outreach-2025/drive-pbd-34.jpg",
    "caption": "Leadership at the PBD inaugural programme — 9 January 2025",
    "sourceUrl": "https://drive.google.com/file/d/1vNzdt51g8mdlb1stQmCf2OMgEXNQlpA0/view"
  },
  {
    "key": "pbd25-drive-pbd-38.jpg",
    "data": "january-clearances-outreach-2025/drive-pbd-38.jpg",
    "caption": "Audience participation at PBD — 9 January 2025",
    "sourceUrl": "https://drive.google.com/file/d/1wU8jGEIqmG8dHM_sDTb8QrC9aq4QVWO_/view"
  },
  {
    "key": "pbd25-drive-pbd-44.jpg",
    "data": "january-clearances-outreach-2025/drive-pbd-44.jpg",
    "caption": "Dignitaries on stage at the PBD convention — 9 January 2025",
    "sourceUrl": "https://drive.google.com/file/d/1GGo27B1hZAl2mSli2d1Kd6FJtCbbF04q/view"
  }
];
  const oldNotice='The supplied “high res pics” link repeats the unrelated Odisha–Singapore MoU post. This gallery therefore uses only photographs from the five PBD source posts; a separate high-resolution PBD collection has not been supplied.';
  const addGallery=e=>{
    if(!e||(e.pbdDrivePhotosVersion||0)>=1)return false;
    e.sections=e.sections||[];
    if(!e.sections.some(s=>s.id==='pbd-drive-jan9'))e.sections.push({
      id:"pbd-drive-jan9",title:"9 January — Inauguration & Delegate Photo Gallery",
      date:"2025-01-09",endDate:"2025-01-09",location:"Bhubaneswar, Odisha",
      description:"Selected photographs from the corrected 9 January album supplied by the user. The gallery covers the inaugural programme, leadership and delegates. Local viewing copies are provided for offline use; each photograph links to its original Drive file for full-resolution access.",
      photos:JSON.parse(JSON.stringify(photos))
    });
    e.description=String(e.description||'').replace(oldNotice,'Selected photographs from the corrected Drive collection are included in a separate 9 January gallery, alongside the original PBD post photographs.');
    e.officialSources=e.officialSources||[];
    if(!e.officialSources.some(s=>s.url===source.url))e.officialSources.push({...source});
    e.photoCollectionUrl=source.url;
    e.pbdDrivePhotosVersion=1;
    return true;
  };
  const changed=addGallery(events.find(e=>e.id==='e123'));
  addGallery(SEED_EVENTS.find(e=>e.id==='e123'));
  if(changed){save();render();}
})();

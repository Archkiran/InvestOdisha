/* Reviewed bundled cover defaults only. Never overwrite a custom cover/caption,
   or restore a photograph that an administrator removed from its gallery. */
(()=>{
  const selections=[
    ['e32','jsw-paradip-2026/ceremony-10.jpg','JSW Utkal Steel work-commencement programme · Paradip · 27 May 2026','jsw-paradip-2026/ceremony-05.jpg','Chief Minister at the JSW Paradip work-commencement programme · 27 May 2026'],
    ['e55','january-outreach-2026/enterprise-expo-1.jpg','Chief Minister’s exposition tour at 25th Enterprise Odisha','january-outreach-2026/enterprise-expo-3.jpg','Ceremonial lamp lighting at 25th Enterprise Odisha, Rourkela'],
    ['e95','june-outreach-2025/wall-1.jpg','One-year industry achievements display','june-outreach-2025/wall-4.jpg','Chief Minister’s interactive session with industry representatives'],
    ['e123','january-clearances-outreach-2025/post-5-1.jpg','External Affairs Minister’s PBD address, 8 January','january-clearances-outreach-2025/drive-pbd-34.jpg','Leadership at the PBD inaugural programme · 9 January 2025'],
    ['e142','oct-nov-outreach-2024/post-31.jpg','Chief Minister addressing the Utkarsh Odisha Delhi curtain raiser','oct-nov-outreach-2024/drive-delhi-itc-25.jpg','Leadership at the Ambassadors’ Meet · New Delhi · 3 October 2024']
  ];
  function update(records){let changed=false;for(const [id,oldPath,oldCaption,newPath,caption] of selections){const e=records.find(e=>e.id===id);if(!e||e.coverPhoto?.data!==oldPath||e.coverPhoto.caption!==oldCaption||e.imageUrl!==oldPath)continue;const photo=(e.sections||[]).flatMap(s=>s.photos||[]).find(p=>p.data===newPath);if(!photo)continue;e.coverPhoto={...photo,caption};e.imageUrl=newPath;changed=true;}
    const video=records.find(e=>e.id==='e146');
    if(video?.coverPhoto?.data==='aug-sept-outreach-2024/post-15.jpg'&&video.imageUrl===video.coverPhoto.data){video.coverPhoto=null;video.imageUrl='';video.coverUnavailableReason='OFFICIAL VIDEO COVERAGE';changed=true;}
    return changed;
  }
  if(update(events))save();
  update(SEED_EVENTS);
  // The unusable video preview remains in its source gallery; it is not a cover.
  const previousLoadThumb=loadThumb;
  loadThumb=async(id,target)=>{const e=events.find(e=>e.id===id);if(e?.coverUnavailableReason&&!e.imageUrl&&!e.coverPhoto){const el=target||document.getElementById('thumb-'+id);if(el?.isConnected)el.innerHTML='<span class="coverage-placeholder">OFFICIAL VIDEO<br>COVERAGE ↗</span>';return;}return previousLoadThumb(id,target);};
  render();
})();

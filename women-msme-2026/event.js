/* User-supplied description and single image for the 5 October MD meeting. */
(() => {
  const supplied={
    title:'Strengthening Women-led MSMEs',
    description:'Strengthening women-led MSMEs through greater representation, focused discussions and continued support.\n\nAt a meeting with industry associations, MD, IPICOL, Smt. Aboli Naravane, engaged with stakeholders on women-led entrepreneurship and emphasised the need for wider representation from across Odisha. Upcoming engagements will include sector-specific discussions with women-led MSMEs, with the IPICOL Women Entrepreneurship Cell facilitating greater participation and support.',
    category:'Meetings',
    imageUrl:'women-msme-2026/meeting.png',
    imageCaption:'Strengthening women-led MSMEs through focused discussions, wider representation and meaningful support.',
    womenMsmeVersion:1
  };
  const record=events.find(e=>e.id==='e3');
  if(record&&(record.womenMsmeVersion||0)<1){Object.assign(record,supplied);save();}
  const seed=SEED_EVENTS.find(e=>e.id==='e3');
  if(seed&&(seed.womenMsmeVersion||0)<1)Object.assign(seed,supplied);
  const previousPhotos=getPhotos;
  getPhotos=async id=>{
    if(id!=='e3')return previousPhotos(id);
    const e=events.find(e=>e.id===id),local=await localPhotos(id);
    return [...(e?.imageUrl?[{key:'women-msme-supplied',eventId:id,data:e.imageUrl,caption:e.imageCaption}]:[]),...local];
  };
  const previousDetail=showEvent;
  showEvent=async id=>{
    if(id!=='e3')return previousDetail(id);
    const e=events.find(e=>e.id===id);if(!e)return;
    const photos=await getPhotos(id);
    modal(`<div class="chem-head"><div class="tag">${esc(cat(e))}</div><h2>${esc(e.title)}</h2><div class="meta">${fmt(e.date)}${e.location?' · '+esc(e.location):''}</div><div class="chem-tools"><button class="btn dark" onclick="openEditor('e3')">Edit event details</button><button class="btn" onclick="closeModal()">Back to timeline</button></div></div>
      <div class="chem-body"><div class="chem-overview">${e.description.split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('')}</div></div>
      ${photos.map(p=>`<figure class="chem-cover" style="margin-bottom:24px"><a href="${esc(p.data)}" target="_blank" rel="noopener" aria-label="Open full meeting image"><img src="${esc(p.data)}" alt="${esc(p.caption||'Women-led MSME meeting')}" style="width:min(100%,540px);height:auto;max-height:none;object-fit:contain;margin:auto"></a><figcaption>${esc(p.caption||e.imageCaption)}</figcaption></figure>`).join('')}
      <div class="chem-body"><label class="chem-upload"><span>Add a photograph</span><input type="file" accept="image/*" aria-label="Upload meeting photograph" onchange="uploadPhotos('e3',this.files)"></label></div>`);
    const container=document.querySelector('.modal');container.classList.add('chem-modal');container.scrollTop=0;
  };
  render();
})();

/* Shared admin action for all event photo galleries. */
(()=>{
  let activeEventId=null;
  const previousShowEvent=showEvent;
  showEvent=async id=>{activeEventId=id;await previousShowEvent(id);addReplaceButtons();};
  function addReplaceButtons(){
    for(const group of document.querySelectorAll('#modalcontent .chem-photo-actions')){
      if(group.querySelector('[data-replace-image]'))continue;
      const caption=Array.from(group.querySelectorAll('button')).find(b=>b.textContent.trim()==='Edit caption');
      const match=caption?.getAttribute('onclick')?.match(/Caption\('([^']+)'\)/);
      if(!match)continue;
      const button=document.createElement('button');
      button.type='button';button.className='chem-text-button';button.textContent='Replace image';
      button.setAttribute('data-replace-image','');button.setAttribute('data-admin-control','');
      const id=activeEventId,key=match[1];
      button.addEventListener('click',()=>chooseReplacement(id,key));
      group.append(button);
    }
  }
  function chooseReplacement(id,key){
    if(!adminPreviewEnabled){showAdminSignIn();return;}
    const input=document.createElement('input');input.type='file';input.accept='image/*';
    input.addEventListener('change',async()=>{
      const file=input.files?.[0];if(!file)return;
      try{await replaceEventImage(id,key,file);}catch(error){alert(error.message||'The image could not be replaced. The previous image has been kept.');}
    });
    input.click();
  }
  async function optimise(file){
    if(!file.type.startsWith('image/'))throw Error('Please choose an image file.');
    if(file.size>30*1024*1024)throw Error('Please choose an image smaller than 30 MB.');
    const url=URL.createObjectURL(file);
    try{
      const image=new Image();image.src=url;await image.decode();
      const scale=Math.min(1,1600/Math.max(image.naturalWidth,image.naturalHeight));
      const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(image.naturalWidth*scale));canvas.height=Math.max(1,Math.round(image.naturalHeight*scale));
      const context=canvas.getContext('2d');context.fillStyle='#fff';context.fillRect(0,0,canvas.width,canvas.height);context.drawImage(image,0,0,canvas.width,canvas.height);
      return canvas.toDataURL('image/jpeg',0.85);
    }finally{URL.revokeObjectURL(url);}
  }
  async function replaceEventImage(id,key,file){
    if(!adminPreviewEnabled)throw Error('Please sign in before replacing photographs.');
    const data=await optimise(file);
    // Recheck access after decoding; a session may have expired while choosing a file.
    if(!adminPreviewEnabled)throw Error('Please sign in again before replacing photographs.');
    const event=events.find(e=>e.id===id);if(!event)throw Error('This event is no longer available.');
    const photo=(await getPhotos(id)).find(p=>p.key===key);if(!photo)throw Error('This photograph is no longer available.');
    const references=[...(event.sections||[]).flatMap(s=>s.photos||[]),event.coverPhoto].filter(p=>p?.key===key);
    const stored=await new Promise((resolve,reject)=>{
      if(!db)return resolve(null);
      const request=db.transaction('photos').objectStore('photos').get(key);
      request.onsuccess=()=>resolve(request.result||null);request.onerror=()=>reject(Error('Could not read photo storage.'));
    });
    const before=JSON.parse(JSON.stringify(event));
    const isCover=event.coverPhoto?.key===key||event.imageUrl===photo.data;
    const replacement={...photo,data};
    // Keep the key, section, position and caption so existing gallery controls still work.
    if(stored||!references.length){await storePhoto(replacement);}
    for(const reference of references)reference.data=data;
    if(isCover){event.coverPhoto={...replacement};event.imageUrl=data;}
    if((references.length||isCover)&&save()===false){
      for(const name of Object.keys(event))delete event[name];Object.assign(event,before);
      if(stored||!references.length)await storePhoto(photo);
      throw Error('Browser storage is full. Export a backup or choose a smaller image. The previous image has been kept.');
    }
    render();await showEvent(id);
  }
  window.replaceEventImage=replaceEventImage;
})();

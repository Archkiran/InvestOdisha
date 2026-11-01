/* One consistent event viewer, with lazy thumbnails and the complete image frame. */
(()=>{
  const content=document.getElementById('modalcontent');if(!content)return;
  const viewer=document.createElement('dialog');viewer.className='event-photo-viewer';viewer.setAttribute('aria-label','Event photo gallery');document.body.append(viewer);
  let photos=[],index=0,request=0,returnFocus=null;
  let mainImage,caption,count,strip;
  const makeButton=(label,text,action)=>{const button=document.createElement('button');button.type='button';button.setAttribute('aria-label',label);button.textContent=text;button.addEventListener('click',action);return button;};
  function draw(){
    const photo=photos[index];if(!photo)return;
    mainImage.src=photo.data;mainImage.alt=photo.caption||'Event photograph '+(index+1);
    count.textContent=(index+1)+' / '+photos.length;
    caption.replaceChildren(document.createTextNode(photo.caption||'Event photograph '+(index+1)));
    if(photo.sourceUrl&&/^https?:\/\//i.test(photo.sourceUrl)){caption.append(document.createTextNode(' · '));const link=document.createElement('a');link.href=photo.sourceUrl;link.target='_blank';link.rel='noopener noreferrer';link.textContent='View source photo ↗';caption.append(link);}
    Array.from(strip.children).forEach((button,i)=>button.setAttribute('aria-current',String(i===index)));
    const active=strip.children[index];
    // Scroll the strip only, never the underlying page or event window.
    strip.scrollTo({left:Math.max(0,active.offsetLeft-strip.offsetLeft-strip.clientWidth/2+active.offsetWidth/2),behavior:'auto'});
  }
  function step(amount){if(!photos.length)return;index=(index+amount+photos.length)%photos.length;draw();}
  async function open(image,trigger){
    const id=new URL(location.href).searchParams.get('event');if(!id)return;
    const ticket=++request;
    const records=await getPhotos(id);if(ticket!==request||!image.isConnected||!document.getElementById('overlay').classList.contains('show'))return;
    photos=Array.from(new Map(records.filter(p=>p?.data).map(p=>[p.key||p.data,p])).values());
    const src=image.getAttribute('src');index=photos.findIndex(p=>p.data===src||new URL(p.data,location.href).href===image.src);
    if(index<0){photos.unshift({key:'selected-photo',data:src,caption:image.alt});index=0;}
    returnFocus=trigger;
    viewer.replaceChildren();
    const toolbar=document.createElement('div');toolbar.className='event-photo-toolbar';count=document.createElement('span');count.setAttribute('aria-live','polite');
    const controls=document.createElement('div');controls.append(makeButton('Previous photo','←',()=>step(-1)),makeButton('Next photo','→',()=>step(1)),makeButton('Close photo gallery','Close ×',()=>viewer.close()));toolbar.append(count,controls);
    const stage=document.createElement('div');stage.className='event-photo-stage';mainImage=document.createElement('img');stage.append(mainImage);
    caption=document.createElement('p');caption.className='event-photo-caption';
    strip=document.createElement('nav');strip.className='event-photo-filmstrip';strip.setAttribute('aria-label','Photographs in this event');
    photos.forEach((photo,i)=>{
      const button=makeButton('Show photo '+(i+1)+': '+(photo.caption||'Event photograph'),'',()=>{index=i;draw();});button.className='event-photo-thumb';
      const thumbnail=document.createElement('img');thumbnail.alt='';thumbnail.loading='lazy';thumbnail.decoding='async';thumbnail.src=timelineThumbnail(photo.data);
      if(thumbnail.src!==new URL(photo.data,location.href).href)thumbnail.onerror=()=>{thumbnail.onerror=null;thumbnail.src=photo.data;};
      button.append(thumbnail);strip.append(button);
    });
    viewer.append(toolbar,stage,caption,strip);viewer.showModal();draw();
  }
  content.addEventListener('click',event=>{
    const button=event.target.closest('.chem-photo-button');
    const anchor=event.target.closest('.chem-cover a');
    const image=button?.querySelector('img')||(event.target.matches('img')?event.target:null)||anchor?.querySelector('img');
    if(!image||!image.closest('.chem-cover,.chem-gallery,.gallery'))return;
    event.preventDefault();event.stopImmediatePropagation();
    open(image,button||anchor||image).catch(()=>alert('The photo gallery could not be opened. Please try again.'));
  },true);
  viewer.addEventListener('keydown',event=>{
    if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();step(event.key==='ArrowRight'?1:-1);if(event.target.closest('.event-photo-filmstrip'))strip.children[index].focus({preventScroll:true});}
    if(event.key==='Home'||event.key==='End'){event.preventDefault();index=event.key==='Home'?0:photos.length-1;draw();}
  });
  viewer.addEventListener('close',()=>{request++;viewer.replaceChildren();photos=[];index=0;mainImage=caption=count=strip=null;if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true});returnFocus=null;});
  function makeCoversAccessible(){for(const image of content.querySelectorAll('.chem-cover img'))if(!image.closest('a,button')){image.setAttribute('role','button');image.tabIndex=0;image.setAttribute('aria-label','Enlarge: '+(image.alt||'Event photograph'));}}
  new MutationObserver(makeCoversAccessible).observe(content,{childList:true,subtree:true});
  content.addEventListener('keydown',event=>{if(event.target.matches('.chem-cover img[role=button]')&&['Enter',' '].includes(event.key)){event.preventDefault();event.target.click();}});
  makeCoversAccessible();
})();

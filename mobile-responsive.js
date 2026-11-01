/* Responsive presentation only: retain the same sign-in control and authentication handlers. */
(()=>{
  const button=document.getElementById('admin-signin'),footer=document.querySelector('.client-footer .shell');
  if(button&&footer){
    const home=document.createComment('Desktop admin sign-in position');button.before(home);
    const entry=document.createElement('div');entry.className='mobile-admin-entry';footer.append(entry);
    const small=window.matchMedia('(max-width:760px)');
    const move=()=>{if(small.matches)entry.append(button);else home.after(button);};
    small.addEventListener('change',move);move();
  }
  const content=document.getElementById('modalcontent');if(!content)return;
  function describeGalleries(){
    for(const gallery of content.querySelectorAll('.chem-gallery')){
      const figures=gallery.querySelectorAll('figure');
      if(figures.length>1){
        gallery.setAttribute('role','group');gallery.setAttribute('aria-label',figures.length+' photographs. Swipe horizontally to browse, or tap a photo to enlarge.');gallery.classList.add('swipe-gallery');
        if(!gallery.previousElementSibling?.classList.contains('mobile-gallery-hint')){const hint=document.createElement('p');hint.className='mobile-gallery-hint';hint.textContent=figures.length+' photos · Swipe to browse · Tap to enlarge';gallery.before(hint);}
      }
      figures.forEach((figure,i)=>{figure.setAttribute('aria-label','Photograph '+(i+1)+' of '+figures.length);});
      for(const img of gallery.querySelectorAll('img'))img.draggable=false;
    }
  }
  let queued=false;
  new MutationObserver(()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;describeGalleries();});}).observe(content,{childList:true,subtree:true});
  describeGalleries();
})();

(()=>{
  const timeline=document.getElementById('timeline');if(!timeline)return;
  let rows=[],current=null,queued=false;
  function update(){
    queued=false;
    const header=document.querySelector('.client-header');
    const top=Math.max(0,header?.getBoundingClientRect().bottom||0);
    const bottom=window.innerHeight-20;
    const readingLine=top+Math.max(0,bottom-top)*.35;
    let next=null,distance=Infinity;
    for(const row of rows){
      const rect=row.getBoundingClientRect();
      const dot=rect.top+34; // The centre of the existing date marker.
      if(dot<top+8||dot>bottom)continue;
      const delta=Math.abs(dot-readingLine);
      if(delta<distance){next=row;distance=delta;}
    }
    if(next===current)return;
    current?.classList.remove('timeline-current');
    next?.classList.add('timeline-current');current=next;
  }
  function schedule(){if(!queued){queued=true;requestAnimationFrame(update);}}
  function refresh(){rows=Array.from(timeline.querySelectorAll('.event'));schedule();}
  // Only the event list is watched, not image loading or unrelated page changes.
  new MutationObserver(refresh).observe(timeline,{childList:true});
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule,{passive:true});
  if(typeof ResizeObserver!=='undefined'){
    const header=document.querySelector('.client-header');
    if(header)new ResizeObserver(schedule).observe(header);
  }
  refresh();
})();

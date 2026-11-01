/* One-finger photo navigation. Vertical motion and multi-touch never change the image. */
window.attachPhotoSwipe=(stage,onStep)=>{
  let start=null,ignore=false;const pointers=new Set();
  const down=event=>{
    if(event.button!==undefined&&event.button!==0)return;
    pointers.add(event.pointerId);
    if(pointers.size!==1){ignore=true;start=null;return;}
    ignore=false;start={id:event.pointerId,x:event.clientX,y:event.clientY,time:Date.now()};
  };
  const move=event=>{
    if(ignore||!start||start.id!==event.pointerId)return;
    const dx=event.clientX-start.x,dy=event.clientY-start.y;
    if(Math.abs(dx)>12&&Math.abs(dx)>Math.abs(dy)*1.3){
      if(event.cancelable)event.preventDefault();
      try{stage.setPointerCapture(event.pointerId);}catch{}
    }
  };
  const finish=event=>{
    const gesture=start;pointers.delete(event.pointerId);
    if(!ignore&&gesture&&gesture.id===event.pointerId){
      const dx=event.clientX-gesture.x,dy=event.clientY-gesture.y;
      const threshold=Math.min(56,Math.max(32,stage.clientWidth*.12));
      if(Math.abs(dx)>=threshold&&Math.abs(dx)>Math.abs(dy)*1.3&&Date.now()-gesture.time<1500)onStep(dx<0?1:-1);
    }
    start=null;if(!pointers.size)ignore=false;
  };
  const cancel=event=>{pointers.delete(event.pointerId);start=null;ignore=pointers.size>0;};
  stage.addEventListener('pointerdown',down);stage.addEventListener('pointermove',move,{passive:false});stage.addEventListener('pointerup',finish);stage.addEventListener('pointercancel',cancel);
  return ()=>{stage.removeEventListener('pointerdown',down);stage.removeEventListener('pointermove',move);stage.removeEventListener('pointerup',finish);stage.removeEventListener('pointercancel',cancel);pointers.clear();start=null;};
};

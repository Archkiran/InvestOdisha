/* A lightweight section rail that follows the event window's own scroll position. */
(()=>{
  const panel=document.querySelector('.modal'),content=document.getElementById('modalcontent');if(!panel||!content)return;
  let rail=null,tooltip=null,targets=[],buttons=[],labels=[],current=-1,queued=false,scrub=null,suppressClick=false;
  function clear(){scrub=null;suppressClick=false;rail?.remove();tooltip?.remove();rail=tooltip=null;targets=[];buttons=[];labels=[];current=-1;panel.classList.remove('has-section-rail');}
  function position(){
    if(!rail)return;
    const rect=panel.getBoundingClientRect(),width=rail.getBoundingClientRect().width;
    rail.style.left=(rect.right-width-5)+'px';rail.style.top=(rect.top+rect.height/2)+'px';
  }
  function update(){
    queued=false;if(!rail||!targets.length||scrub)return;
    const rect=panel.getBoundingClientRect(),line=rect.top+Math.min(160,rect.height*.3);
    let active=0;
    targets.forEach((target,i)=>{if(target.getBoundingClientRect().top<=line)active=i;});
    if(active!==current){buttons[current]?.removeAttribute('aria-current');buttons[active].setAttribute('aria-current','location');current=active;}
  }
  function schedule(){if(!queued){queued=true;requestAnimationFrame(update);}}
  function hideLabel(){if(tooltip)tooltip.hidden=true;}
  function jump(index,behavior='instant'){
    const target=targets[index];if(!target)return;
    buttons[current]?.removeAttribute('aria-current');buttons[index].setAttribute('aria-current','location');current=index;
    const top=panel.scrollTop+target.getBoundingClientRect().top-panel.getBoundingClientRect().top-24;
    panel.scrollTo({top:Math.max(0,top),behavior});
  }
  function scrubAt(y){
    const rect=rail.querySelector('.event-section-rail-list').getBoundingClientRect();
    const index=Math.max(0,Math.min(targets.length-1,Math.floor((y-rect.top)/Math.max(1,rect.height)*targets.length)));
    if(scrub.index!==index){scrub.index=index;jump(index);showLabel(buttons[index],labels[index]);}
  }
  function showLabel(button,label){
    if(!tooltip)return;
    tooltip.textContent=label;tooltip.hidden=false;
    const rect=button.getBoundingClientRect(),width=Math.min(window.innerWidth-50,window.innerWidth<=600?200:230);
    tooltip.style.width=width+'px';tooltip.style.left=Math.max(8,rect.left-width-10)+'px';
    tooltip.style.top=Math.max(8,Math.min(window.innerHeight-tooltip.getBoundingClientRect().height-8,rect.top-5))+'px';
  }
  function build(){
    clear();
    const sections=Array.from(content.querySelectorAll('.chem-section')).filter(section=>section.querySelector('h3'));
    if(sections.length<3||content.querySelector('form'))return;
    const overview=content.querySelector('.chem-head');targets=overview?[overview,...sections]:sections;
    rail=document.createElement('nav');rail.className='event-section-rail';rail.setAttribute('aria-label','Event sections');
    const list=document.createElement('div');list.className='event-section-rail-list';rail.append(list);
    tooltip=document.createElement('div');tooltip.className='event-section-tooltip';tooltip.hidden=true;tooltip.setAttribute('aria-hidden','true');
    buttons=targets.map((target,i)=>{
      if(!target.id)target.id='event-section-'+i;
      const heading=target.querySelector('h3,h2');
      const name=target===overview?'Overview':heading.textContent.trim().replace(/\u2014/g,'\u2013');
      const label=(target===overview?'':String(i+(overview?0:1)).padStart(2,'0')+' · ')+name;labels.push(label);
      const button=document.createElement('button');button.type='button';button.className='event-section-marker';button.setAttribute('aria-label','Go to '+label);button.setAttribute('aria-controls',target.id);
      const tick=document.createElement('span');tick.setAttribute('aria-hidden','true');button.append(tick);
      button.addEventListener('mouseenter',()=>{if(!scrub)showLabel(button,label);});button.addEventListener('mouseleave',()=>{if(!scrub)hideLabel();});button.addEventListener('focus',()=>showLabel(button,label));button.addEventListener('blur',hideLabel);
      button.addEventListener('click',event=>{
        if(suppressClick&&event.detail!==0){suppressClick=false;event.preventDefault();return;}
        heading.tabIndex=-1;heading.focus({preventScroll:true});hideLabel();
        jump(i,window.matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth');
      });
      list.append(button);return button;
    });
    rail.style.setProperty('--section-count',targets.length);
    rail.addEventListener('pointerdown',event=>{
      if(event.isPrimary===false||event.button!==0||scrub)return;
      suppressClick=false;scrub={id:event.pointerId,startY:event.clientY,index:-1};
      rail.setPointerCapture(event.pointerId);rail.classList.add('is-scrubbing');event.preventDefault();scrubAt(event.clientY);
    });
    rail.addEventListener('pointermove',event=>{
      if(!scrub||event.pointerId!==scrub.id)return;
      event.preventDefault();if(Math.abs(event.clientY-scrub.startY)>5)suppressClick=true;scrubAt(event.clientY);
    });
    function endScrub(event){
      if(!scrub||event.pointerId!==scrub.id)return;
      const id=scrub.id;scrub=null;rail.classList.remove('is-scrubbing');
      if(rail.hasPointerCapture(id))rail.releasePointerCapture(id);hideLabel();schedule();
    }
    rail.addEventListener('pointerup',endScrub);rail.addEventListener('pointercancel',endScrub);rail.addEventListener('lostpointercapture',endScrub);
    rail.addEventListener('keydown',event=>{
      const index=buttons.indexOf(event.target);if(index<0)return;
      let next;if(event.key==='ArrowDown')next=(index+1)%buttons.length;else if(event.key==='ArrowUp')next=(index-1+buttons.length)%buttons.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=buttons.length-1;else return;
      event.preventDefault();buttons[next].focus();
    });
    panel.classList.add('has-section-rail');panel.append(rail,tooltip);position();update();
  }
  const previousShow=showEvent;showEvent=async id=>{await previousShow(id);if(document.getElementById('overlay').classList.contains('show'))build();};
  const previousModal=modal;modal=html=>{clear();previousModal(html);};
  const previousClose=closeModal;closeModal=()=>{clear();previousClose();};
  panel.addEventListener('scroll',()=>{if(!scrub)hideLabel();schedule();},{passive:true});
  content.addEventListener('load',schedule,true);
  window.addEventListener('resize',()=>{position();hideLabel();schedule();},{passive:true});
  if(typeof ResizeObserver!=='undefined')new ResizeObserver(()=>{position();schedule();}).observe(panel);
})();

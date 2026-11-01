/* A lightweight section rail that follows the event window's own scroll position. */
(()=>{
  const panel=document.querySelector('.modal'),content=document.getElementById('modalcontent');if(!panel||!content)return;
  let rail=null,tooltip=null,targets=[],buttons=[],current=-1,queued=false;
  function clear(){rail?.remove();tooltip?.remove();rail=tooltip=null;targets=[];buttons=[];current=-1;panel.classList.remove('has-section-rail');}
  function position(){
    if(!rail)return;
    const rect=panel.getBoundingClientRect(),width=rail.getBoundingClientRect().width;
    rail.style.left=(rect.right-width-5)+'px';rail.style.top=(rect.top+rect.height/2)+'px';
  }
  function update(){
    queued=false;if(!rail||!targets.length)return;
    const rect=panel.getBoundingClientRect(),line=rect.top+Math.min(160,rect.height*.3);
    let active=0;
    targets.forEach((target,i)=>{if(target.getBoundingClientRect().top<=line)active=i;});
    if(active!==current){buttons[current]?.removeAttribute('aria-current');buttons[active].setAttribute('aria-current','location');current=active;}
  }
  function schedule(){if(!queued){queued=true;requestAnimationFrame(update);}}
  function hideLabel(){if(tooltip)tooltip.hidden=true;}
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
      const label=(target===overview?'':String(i+(overview?0:1)).padStart(2,'0')+' · ')+name;
      const button=document.createElement('button');button.type='button';button.className='event-section-marker';button.setAttribute('aria-label','Go to '+label);button.setAttribute('aria-controls',target.id);
      const tick=document.createElement('span');tick.setAttribute('aria-hidden','true');button.append(tick);
      button.addEventListener('mouseenter',()=>showLabel(button,label));button.addEventListener('mouseleave',hideLabel);button.addEventListener('focus',()=>showLabel(button,label));button.addEventListener('blur',hideLabel);
      button.addEventListener('click',()=>{
        const top=panel.scrollTop+target.getBoundingClientRect().top-panel.getBoundingClientRect().top-24;
        heading.tabIndex=-1;heading.focus({preventScroll:true});hideLabel();
        panel.scrollTo({top:Math.max(0,top),behavior:window.matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});
      });
      list.append(button);return button;
    });
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
  panel.addEventListener('scroll',()=>{hideLabel();schedule();},{passive:true});
  content.addEventListener('load',schedule,true);
  window.addEventListener('resize',()=>{position();hideLabel();schedule();},{passive:true});
  if(typeof ResizeObserver!=='undefined')new ResizeObserver(()=>{position();schedule();}).observe(panel);
})();

/* Navigation, sharing and accessible interaction; event records remain unchanged. */
(()=>{
  const timeline=document.getElementById('timeline'),overlay=document.getElementById('overlay');
  if(!timeline||!overlay)return;
  const panel=overlay.querySelector('.modal'),content=document.getElementById('modalcontent');
  let currentEvent=null,opener=null,fromHistory=false,decorating=false,initialAddressPending=true;
  const reduced=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const smooth=()=>reduced()?'auto':'smooth';
  const eventId=card=>card?.getAttribute('onclick')?.match(/showEvent\('([^']+)'\)/)?.[1];
  const findCard=id=>Array.from(timeline.querySelectorAll('.ecard')).find(card=>eventId(card)===id);
  const status=document.createElement('p');status.className='timeline-results';status.setAttribute('role','status');status.setAttribute('aria-live','polite');status.setAttribute('aria-atomic','true');
  const layout=timeline.closest('.timeline-layout');layout.before(status);
  const nav=document.createElement('nav');nav.className='mobile-timeline-nav';nav.setAttribute('aria-label','Jump to a year and month');
  nav.innerHTML='<label for="mobile-timeline-year">Jump to year<select id="mobile-timeline-year"></select></label><label for="mobile-timeline-month">Jump to month<select id="mobile-timeline-month"><option value="">Choose a year first</option></select></label>';
  layout.before(nav);
  const year=nav.querySelector('#mobile-timeline-year'),month=nav.querySelector('#mobile-timeline-month');
  const topButton=document.createElement('button');topButton.className='back-to-top';topButton.type='button';topButton.textContent='↑ Back to top';topButton.hidden=window.scrollY<500;document.body.append(topButton);
  topButton.addEventListener('click',()=>{window.scrollTo({top:0,behavior:smooth()});document.querySelector('.client-menu a')?.focus({preventScroll:true});});
  function updateHeader(){const height=document.querySelector('.client-header')?.getBoundingClientRect().height||160;document.documentElement.style.setProperty('--timeline-header-height',height+'px');}
  if(typeof ResizeObserver!=='undefined')new ResizeObserver(updateHeader).observe(document.querySelector('.client-header'));
  updateHeader();window.addEventListener('resize',updateHeader,{passive:true});
  window.addEventListener('scroll',()=>{topButton.hidden=window.scrollY<500;},{passive:true});
  const option=(value,label)=>{const node=document.createElement('option');node.value=value;node.textContent=label;return node;};
  function decorate(){
    decorating=false;
    const cards=Array.from(timeline.querySelectorAll('.ecard'));
    const visible=[];
    for(const card of cards){
      const id=eventId(card),event=events.find(e=>e.id===id);if(!event)continue;visible.push(event);
      card.setAttribute('role','button');card.setAttribute('tabindex','0');card.setAttribute('aria-haspopup','dialog');card.setAttribute('aria-label','Explore event: '+event.title);
      card.id='event-card-'+id;
      const image=card.querySelector('.photo img');if(image)image.alt=event.coverPhoto?.caption||event.title+' – event photograph';
    }
    // Stable month anchors are derived from the visible event sequence.
    let rowIndex=0;
    for(const node of timeline.children){
      if(node.classList.contains('event'))rowIndex++;
      if(node.classList.contains('monthheading')&&visible[rowIndex])node.id='month-'+visible[rowIndex].date.slice(0,7);
    }
    const selected=document.getElementById('year').value;
    year.replaceChildren(option('','All years'),...[...new Set(events.map(e=>e.date.slice(0,4)))].sort().reverse().map(y=>option(y,y)));year.value=selected;
    const months=[...new Set(visible.filter(e=>e.date.startsWith(selected+'-')).map(e=>e.date.slice(0,7)))].sort().reverse();
    const previous=month.value;month.replaceChildren(option('',selected?'Choose a month':'Choose a year first'),...months.map(value=>option(value,mo[Number(value.slice(5,7))-1])));month.disabled=!selected||!months.length;if(months.includes(previous))month.value=previous;
    const message=cards.length+' '+(cards.length===1?'event':'events')+' shown';if(status.textContent!==message)status.textContent=message;
    const empty=timeline.querySelector('.empty');
    if(empty&&!empty.dataset.enhanced){
      empty.dataset.enhanced='true';empty.classList.add('empty-state');
      empty.innerHTML='<h3>No events found</h3><p></p><button class="btn" type="button">Clear search and filters</button>';
      const query=document.getElementById('search').value.trim();
      empty.querySelector('p').textContent=(query?'No events match “'+query+'” with the selected filters. ':'No events match the selected filters. ')+'Try a shorter keyword, a different year or another category.';
      empty.querySelector('button').addEventListener('click',()=>{resetFilters();document.getElementById('search').focus();});
    }
  }
  function queueDecorate(){if(!decorating){decorating=true;requestAnimationFrame(decorate);}}
  new MutationObserver(queueDecorate).observe(timeline,{childList:true,subtree:true});
  decorate();
  year.addEventListener('change',()=>{document.getElementById('year').value=year.value;month.value='';render();decorate();if(year.value)document.getElementById('year-'+year.value)?.scrollIntoView({behavior:smooth(),block:'start'});});
  month.addEventListener('change',()=>{if(month.value)document.getElementById('month-'+month.value)?.scrollIntoView({behavior:smooth(),block:'start'});});
  timeline.addEventListener('keydown',event=>{const card=event.target.closest('.ecard');if(!card||event.target!==card||!['Enter',' '].includes(event.key))return;event.preventDefault();card.click();});
  const inertBefore=new Map();
  function backgroundInert(enabled){
    if(enabled){
      for(const element of document.querySelectorAll('.client-header,#archive,.client-banner,.client-footer,.admin-preview-notice,.back-to-top')){if(!inertBefore.has(element))inertBefore.set(element,element.inert);element.inert=true;}
    }else{for(const [element,value]of inertBefore)element.inert=value;inertBefore.clear();}
  }
  const priorModal=modal;
  modal=html=>{
    const wasOpen=overlay.classList.contains('show');if(!wasOpen&&!currentEvent)opener=document.activeElement;
    priorModal(html);panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');
    overlay.querySelector('.close').setAttribute('aria-label','Close event window');
    const heading=content.querySelector('h2');
    if(heading){heading.id='event-window-title';heading.tabIndex=-1;panel.setAttribute('aria-labelledby',heading.id);panel.removeAttribute('aria-label');}
    else{panel.removeAttribute('aria-labelledby');panel.setAttribute('aria-label','Timeline window');}
    backgroundInert(true);(heading||overlay.querySelector('.close')).focus({preventScroll:true});describePhotos();
  };
  function describePhotos(){
    let index=0;
    for(const image of content.querySelectorAll('img')){
      index++;if(image.alt&&image.alt!=='Event photograph')continue;
      const caption=image.closest('figure')?.querySelector('figcaption')?.textContent.trim();
      image.alt=caption||((events.find(e=>e.id===currentEvent)?.title||'Event')+' – photograph '+index);
    }
  }
  new MutationObserver(describePhotos).observe(content,{childList:true,subtree:true});
  function sharedUrl(id){const url=new URL(location.href);url.search='';url.hash='';url.searchParams.set('event',id);return url.href;}
  function syncAddress(id,push=false){const url=new URL(location.href);if(id)url.searchParams.set('event',id);else url.searchParams.delete('event');if(url.href===location.href)return;history[push?'pushState':'replaceState']({...history.state,timelineEvent:id},'',url);}
  const priorShowEvent=showEvent;
  showEvent=async id=>{
    const record=events.find(e=>e.id===id);if(!record)return;
    const changed=currentEvent!==id;
    if(!overlay.classList.contains('show'))opener=findCard(id)||document.activeElement;
    currentEvent=id;
    await priorShowEvent(id);
    if(currentEvent!==id||!overlay.classList.contains('show'))return;
    if(!fromHistory)syncAddress(id,changed);
    const tools=document.createElement('div');tools.className='event-share-tools';
    const copy=document.createElement('button');copy.className='btn';copy.type='button';copy.textContent='Copy link';copy.setAttribute('aria-label','Copy link to this event');
    const feedback=document.createElement('span');feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');tools.append(copy,feedback);
    copy.addEventListener('click',async()=>{
      const url=sharedUrl(id);
      try{await navigator.clipboard.writeText(url);feedback.textContent='Event link copied.';}
      catch{
        feedback.textContent='Copy this event link:';
        if(!tools.querySelector('input')){const label=document.createElement('label');label.className='event-share-fallback';label.textContent='Event link';const input=document.createElement('input');input.type='text';input.readOnly=true;input.value=url;label.append(input);tools.append(label);input.focus();input.select();}
      }
    });
    content.querySelector('.event-share-tools')?.remove();
    const meta=content.querySelector('.meta');if(meta)meta.after(tools);else content.prepend(tools);
    describePhotos();
  };
  const priorCloseModal=closeModal;
  closeModal=()=>{
    const id=currentEvent;currentEvent=null;priorCloseModal();backgroundInert(false);
    if(!fromHistory&&!initialAddressPending)syncAddress(null);
    const target=opener?.isConnected&&!overlay.contains(opener)?opener:findCard(id)||document.getElementById('search');
    target?.focus({preventScroll:true});opener=null;
  };
  document.addEventListener('keydown',event=>{
    if(event.key!=='Tab'||!overlay.classList.contains('show')||document.querySelector('dialog[open]'))return;
    const items=Array.from(panel.querySelectorAll('button,a[href],input:not([type=hidden]),select,textarea,[tabindex="0"]')).filter(el=>!el.disabled&&!el.closest('[inert]')&&el.getClientRects().length);
    if(!items.length){event.preventDefault();panel.focus();return;}
    const first=items[0],last=items[items.length-1],focused=document.activeElement;
    if(event.shiftKey&&(focused===first||!items.includes(focused))){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&(focused===last||!panel.contains(focused))){event.preventDefault();first.focus();}
  });
  async function openAddress(){
    const id=new URL(location.href).searchParams.get('event');
    initialAddressPending=false;
    fromHistory=true;
    try{
      if(id&&events.some(e=>e.id===id))await showEvent(id);
      else if(id){if(overlay.classList.contains('show'))closeModal();status.textContent='This event link is unavailable. Browse the timeline or search for another event.';}
      else if(currentEvent)closeModal();
    }finally{fromHistory=false;}
  }
  window.addEventListener('popstate',openAddress);
  // Restoring an admin session closes the old sign-in UI. Open a deep link only
  // after that initial check, so session restoration cannot close the event.
  function openInitialAddress(){
    if(location.protocol!=='file:'&&!document.documentElement.dataset.timelineAuthReady){document.addEventListener('timeline-auth-ready',openAddress,{once:true});return;}
    openAddress();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',openInitialAddress,{once:true});else openInitialAddress();
})();

/* Extend existing controls and event views without changing the archived records. */
(()=>{
 let printOpen=false,printDismissedUntil=0;
 window.addEventListener('beforeprint',()=>{printOpen=true;});
 window.addEventListener('afterprint',()=>{printOpen=false;printDismissedUntil=Date.now()+700;});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&(printOpen||Date.now()<printDismissedUntil)){event.stopImmediatePropagation();}},true);
 const tools=window.timelineTools,filters=document.querySelector('.filters'),timeline=document.getElementById('timeline');if(!tools||!filters||!timeline)return;
 const sector=document.createElement('select');sector.id='sector';sector.setAttribute('aria-label','Filter by recorded sector');
 sector.title='Based only on explicitly labelled sector sections; many events do not have sector records.';
 sector.append(new Option('All sectors',''),...toolsSectorOptions());
 function toolsSectorOptions(){return [...new Set(events.flatMap(tools.sectors))].sort().map(label=>new Option(label,label)).concat(new Option('No sector recorded','unrecorded'));}
 filters.insertBefore(sector,filters.querySelector('.btn'));sector.addEventListener('change',()=>render());
 const explanation=document.createElement('p');explanation.className='sector-help';explanation.textContent='Choose All sectors to include events without sector details.';filters.after(explanation);
 const search=document.getElementById('search');search.placeholder='Search events, people or places…';search.setAttribute('aria-keyshortcuts','Control+k Meta+k');search.title='Search events · Ctrl/Cmd + K';
 document.addEventListener('keydown',event=>{if((event.ctrlKey||event.metaKey)&&!event.altKey&&event.key.toLowerCase()==='k'&&!document.querySelector('.overlay.show,dialog[open]')){event.preventDefault();search.focus();search.select();}});
 const oldReset=resetFilters;resetFilters=()=>{sector.value='';oldReset();};
 const previousModal=modal;modal=html=>{document.getElementById('event-print-summary')?.remove();previousModal(html);};
 const oldShow=showEvent;
 showEvent=async id=>{
  await oldShow(id);
  const content=document.getElementById('modalcontent'),record=events.find(e=>e.id===id);if(!record||new URL(location.href).searchParams.get('event')!==id||!document.getElementById('overlay').classList.contains('show'))return;
  const actions=content.querySelector('.event-share-tools');if(!actions||actions.querySelector('.event-pdf-button'))return;
  const button=document.createElement('button');button.className='btn event-pdf-button';button.type='button';button.textContent='Save event as PDF';button.title='Open a print-ready summary, then choose Save as PDF in your browser';
  button.addEventListener('click',async()=>{
   button.disabled=true;const label=button.textContent;button.textContent='Preparing summary…';
   try{await preparePrint(record);window.print();}catch{alert('The event summary could not be prepared. Please try again.');}finally{button.disabled=false;button.textContent=label;}
  });actions.append(button);
 };
 const text=(tag,value,parent)=>{const node=document.createElement(tag);node.textContent=value||'';parent.append(node);return node;};
 const safeUrl=value=>{try{const url=new URL(value,location.href);return ['http:','https:'].includes(url.protocol)?url.href:null;}catch{return null;}};
 async function preparePrint(record){
  document.getElementById('event-print-summary')?.remove();
  const root=document.createElement('article');root.id='event-print-summary';root.className='event-print-summary';
  text('p','INVEST ODISHA · EVENT SUMMARY',root).className='print-brand';text('h1',record.title,root);
  text('p',[fmt(record.date),record.endDate&&record.endDate!==record.date?fmt(record.endDate):'',record.location].filter(Boolean).join(' · '),root).className='print-meta';
  for(const paragraph of String(record.description||'').split(/\n\s*\n/))text('p',paragraph,root);
  const highlights=tools.badges(record);if(highlights.length){const row=document.createElement('div');row.className='print-highlights';for(const h of highlights)text('p',h.value+' · '+h.label,row);root.append(row);}
  const sourceSet=new Set();
  function sources(value){if(typeof value==='string'){const url=/^https?:\/\//i.test(value)?safeUrl(value):null;if(url)sourceSet.add(url);}else if(Array.isArray(value))value.forEach(sources);else if(value&&typeof value==='object')for(const [key,item]of Object.entries(value))if(/url|source/i.test(key))sources(item);}
  sources(record.sourceUrl);sources(record.sourceUrls);sources(record.officialSources);sources(record.officialReleaseUrl);
  if(record.sections?.length){text('h2','Programme and sector sections',root);for(const section of record.sections){const block=document.createElement('section');text('h3',section.title,block);text('p',[section.date?fmt(section.date):'',section.location].filter(Boolean).join(' · '),block).className='print-meta';for(const paragraph of String(section.description||'').split(/\n\s*\n/))text('p',paragraph,block);sources(section.sourceUrl);sources(section.sources);root.append(block);}}
  const records=await getPhotos(record.id),cover=record.coverPhoto?.data||record.imageUrl;
  const photos=[...(cover?[{data:cover,caption:record.coverPhoto?.caption||record.title}]:[]),...records].filter(p=>p?.data);
  const selected=[...new Map(photos.map(p=>[p.data,p])).values()].slice(0,6);
  if(selected.length){text('h2','Selected photographs',root);text('p','Up to six photographs are included. See the online event and photo gallery for the full collection.',root);const grid=document.createElement('div');grid.className='print-photo-grid';for(const photo of selected){const url=safeUrl(photo.data);if(!url&&!/^data:image\/(?:jpeg|png|webp);base64,/i.test(photo.data))continue;const figure=document.createElement('figure'),img=document.createElement('img');img.src=url||photo.data;img.alt=photo.caption||record.title;img.loading='eager';figure.append(img);text('figcaption',photo.caption||record.title,figure);grid.append(figure);sources(photo.sourceUrl);}root.append(grid);}
  const eventUrl=new URL(location.href);eventUrl.search='';eventUrl.hash='';eventUrl.searchParams.set('event',record.id);sourceSet.add(eventUrl.href);
  text('h2','Sources and online event',root);const list=document.createElement('ol');for(const url of sourceSet){const item=document.createElement('li'),link=document.createElement('a');link.href=url;link.textContent=url;item.append(link);list.append(item);}root.append(list);
  text('p','Figures retain the qualifications in the archive. Approved or proposed investment and employment potential are not realised investment or jobs already created.',root).className='print-footnote';document.body.append(root);
  await Promise.race([Promise.allSettled([...root.querySelectorAll('img')].map(img=>img.decode())),new Promise(resolve=>setTimeout(resolve,5000))]);
 }
})();

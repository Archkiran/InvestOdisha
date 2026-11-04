/* Month navigation follows the currently filtered timeline. */
(()=>{
 const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
 function decorate(){
  document.querySelectorAll('#timeline .yearheading').forEach(heading=>{
   if(heading.querySelector('.month-grid'))return;
   const year=heading.id.replace('year-',''),targets=new Map();
   for(let node=heading.nextElementSibling;node&&!node.classList.contains('yearheading');node=node.nextElementSibling){if(node.classList.contains('monthheading')){const index=months.findIndex(m=>node.textContent.trim().toLowerCase().startsWith(m.toLowerCase()));if(index>=0){node.id=`month-${year}-${index+1}`;node.style.scrollMarginTop='120px';targets.set(index,node);}}}
   const grid=document.createElement('nav');grid.className='month-grid';grid.setAttribute('aria-label',`Filter by month in ${year}`);
   months.forEach((month,index)=>{const button=document.createElement('button');button.type='button';button.textContent=month;button.disabled=!events.some(e=>e.date.startsWith(year+'-'+String(index+1).padStart(2,'0')));const selected=window.timelineMonthSelection===year+'-'+String(index+1).padStart(2,'0');button.setAttribute('aria-pressed',String(selected));if(selected)button.setAttribute('aria-current','true');button.setAttribute('aria-label',`${month} ${year}${button.disabled?' — no matching events':''}`);button.addEventListener('click',()=>{window.timelineMonthSelection=year+'-'+String(index+1).padStart(2,'0');document.getElementById('year').value=year;render();document.querySelector(`#year-${year} .month-grid button:nth-child(${index+1})`)?.focus({preventScroll:true});});grid.append(button);});heading.append(grid);
  });
 }
 const reset=resetFilters;resetFilters=function(){window.timelineMonthSelection=null;return reset.apply(this,arguments);};document.getElementById('year').addEventListener('change',()=>{window.timelineMonthSelection=null;render();});const jump=jumpYear;jumpYear=function(year){window.timelineMonthSelection=null;return jump(year);};
 const previous=render;render=function(...args){const result=previous.apply(this,args);decorate();return result;};
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',decorate);else decorate();
})();

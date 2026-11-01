/* Add the newly supplied preparation post without replacing existing edits. */
(() => {
  const source={label:"Official Invest Odisha post · final preparations · 24 July 2025",url:"https://x.com/InvestInOdisha/status/1948419998495441180"};
  const addPreparation=e=>{
    if(!e||(e.odishaTexPreparationsVersion||0)>=1)return false;
    e.sections=e.sections||[];
    if(!e.sections.some(s=>s.id==='preparations-july24'))e.sections.unshift({
      id:"preparations-july24",title:"Final Preparations Inspection — 24 July",date:"2025-07-24",endDate:"2025-07-24",location:"Bhubaneswar, Odisha",
      description:"Industries Minister Shri Sampad Chandra Swain inspected the final preparations for OdishaTEX 2025 on 24 July, ahead of the conclave on 25 July. The official update highlighted readiness for textile-led industrial growth and future-ready infrastructure.",
      sourceUrl:source.url,photos:[]
    });
    e.officialSources=e.officialSources||[];
    if(!e.officialSources.some(s=>s.url===source.url))e.officialSources.push({...source});
    e.odishaTexPreparationsVersion=1;
    return true;
  };
  const changed=addPreparation(events.find(e=>e.id==='e89'));
  addPreparation(SEED_EVENTS.find(e=>e.id==='e89'));
  if(changed){save();render();}
})();

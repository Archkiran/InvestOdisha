/* Presentation-only helpers: never rewrite event records or aggregate investment figures. */
(()=>{
 const normal=value=>String(value||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
 const aliases=value=>normal(value).replace(/\bslswca\b/g,'state level single window clearance authority').replace(/\bhlca\b/g,'high level clearance authority').replace(/\bipicol\b/g,'industrial promotion investment corporation odisha').replace(/\bcm\b/g,'chief minister').replace(/\bgo swift\b/g,'goswift').replace(/\bmake in odisha\b/g,'utkarsh odisha');
 const category=e=>{
  const c=normal(e.category||(typeof cat==='function'?cat(e):''));
  if(/clearance|approval|cabinet/.test(c))return 'Clearances & approvals';
  if(/media|interview|publication|coverage|industry features/.test(c))return 'Media & features';
  if(/groundbreaking|inaugurat|foundation|project milestone|industrial programme/.test(c))return 'Projects & inaugurations';
  if(/investor|investment outreach|international engagement|mou|delegation|partnership/.test(c))return 'Investment & partnerships';
  if(/conference|summit|conclave|events/.test(c))return 'Events & summits';
  if(/award|recognition|ranking|achievement|progress|institutional/.test(c))return 'Milestones & recognition';
  return 'Meetings & initiatives';
 };
 const sectorRules=[['Chemicals & petrochemicals',/chemical|petrochemical/],['Steel & metals',/steel|aluminium|aluminum|ferro|metal/],['Textiles & apparel',/textile|apparel|garment/],['Food processing',/food|agro|seafood/],['Healthcare & pharma',/pharma|medical|health/],['Energy & renewables',/energy|renewable|power|biofuel|hydrogen|solar/],['Technology & electronics',/electronic|semiconductor|data cent|artificial intelligence|\bai\b|capability|competency|\bgcc\b/],['Tourism & hospitality',/tourism|hospitality/],['Manufacturing',/manufactur|engineering/],['Infrastructure & logistics',/infrastructure|logistics|port/],['Circular economy',/circular|recycl|waste/],['Plastics',/plastic/],['Cement & building materials',/cement|building material|ceramic/]];
 function sectors(e){
  const labels=(e.sections||[]).filter(s=>s.investment!=null||s.employment!=null||Array.isArray(s.projects)&&s.projects.length).map(s=>s.title||'');
  if(Array.isArray(e.sectors))labels.push(...e.sectors.filter(s=>typeof s==='string'));
  return sectorRules.filter(([,rule])=>labels.some(label=>rule.test(normal(label)))).map(([label])=>label);
 }
 function near(a,b){
  if(a.length<5||Math.abs(a.length-b.length)>1)return false;
  let i=0,j=0,edits=0;while(i<a.length&&j<b.length){if(a[i]===b[j]){i++;j++;continue;}if(++edits>1)return false;if(a.length>=b.length)i++;if(b.length>=a.length)j++;}return edits+(i<a.length||j<b.length?1:0)<=1;
 }
 const cache=new WeakMap();
 function matches(e,query){
  if(!query.trim())return true;
  const raw=[e.title,e.description,e.location,e.category,e.date,...(e.sections||[]).map(s=>[s.title,s.description,JSON.stringify(s.projects||[])].join(' '))].join(' ');
  let entry=cache.get(e);if(entry?.raw!==raw){const text=aliases(raw);entry={raw,text,words:[...new Set(text.split(' '))]};cache.set(e,entry);}
  const q=aliases(query);if(entry.text.includes(q))return true;
  return q.split(' ').every(word=>entry.words.some(candidate=>candidate===word||word.length>=3&&candidate.startsWith(word)||!/[0-9]/.test(word)&&near(word,candidate)));
 }
 function badges(e){return (e.highlights||[]).filter(h=>h&&h.value!=null&&typeof h.label==='string'&&(/^employment potential\b/i.test(h.label)||/^(?:approved investment|investment proposals)\b/i.test(h.label)&&/[₹]|crore/i.test(String(h.value)))).slice(0,2).map(h=>({value:String(h.value),label:h.label.replace(/\u2014/g,'–')}));}
 window.timelineTools={category,sectors,matches,badges,normal,near,sectorMatches:(e,value)=>!value||(value==='unrecorded'?!sectors(e).length:sectors(e).includes(value))};
})();

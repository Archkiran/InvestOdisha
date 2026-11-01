/* Use the shorter en dash in displayed copy without rewriting saved event data. */
(()=>{
  const excluded='script,style,textarea,input,code,pre';
  function shorten(node){
    if(node.nodeType===3){
      if(node.parentElement?.closest(excluded))return;
      if(node.nodeValue.includes('\u2014'))node.nodeValue=node.nodeValue.replace(/\u2014/g,'\u2013');
      return;
    }
    if(node.nodeType!==1||node.matches(excluded))return;
    for(const child of node.childNodes)shorten(child);
  }
  document.title=document.title.replace(/\u2014/g,'\u2013');
  shorten(document.body);
  new MutationObserver(changes=>{
    for(const change of changes){
      if(change.type==='characterData')shorten(change.target);
      else for(const node of change.addedNodes)shorten(node);
    }
  }).observe(document.body,{subtree:true,childList:true,characterData:true});
})();

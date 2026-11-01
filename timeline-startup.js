/* Reveal the archive only after the final render and navigation decoration. */
(()=>{
  const archive=document.getElementById('archive'),status=document.getElementById('timeline-loading');
  if(!archive||!status)return;
  let finished=false;
  const fail=()=>{
    if(finished)return;
    status.textContent='The timeline could not finish loading. Please refresh the page to try again.';
    status.setAttribute('role','alert');archive.setAttribute('aria-busy','false');
  };
  const timeout=setTimeout(fail,15000);
  const reveal=()=>{
    const timeline=document.getElementById('timeline');
    if(!timeline?.querySelector('.ecard,.empty')){fail();return;}
    finished=true;clearTimeout(timeout);status.hidden=true;
    archive.removeAttribute('data-timeline-loading');archive.setAttribute('aria-busy','false');
  };
  // Both the render's MutationObservers and their queued frame must finish first.
  const ready=()=>requestAnimationFrame(()=>requestAnimationFrame(reveal));
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready,{once:true});else ready();
})();

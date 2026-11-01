/* Server-verified sign-in. No password or bearer token is stored in this script. */
(()=>{
  if(location.protocol==='file:')return; // The standalone offline file retains its labelled demo.
  let signedIn=false,expiryTimer=null;
  const demoToggle=setAdminPreview;
  function applySession(enabled){const changed=signedIn!==Boolean(enabled);signedIn=Boolean(enabled);if(changed)demoToggle(signedIn);const button=document.getElementById('admin-signin');if(button)button.textContent=signedIn?'Sign out':'Admin sign in';const notice=document.querySelector('.admin-preview-notice');if(notice)notice.textContent='ADMIN SESSION · Edits and photographs are saved only in this browser. Export a backup to preserve your work. Shared publishing is not connected.';clearTimeout(expiryTimer);if(signedIn)expiryTimer=setTimeout(()=>{applySession(false);},4*60*60*1000);}
  async function api(method='GET',body){const response=await fetch('/api/auth',{method,credentials:'same-origin',cache:'no-store',headers:body?{'Content-Type':'application/json'}:{},...(body?{body:JSON.stringify(body)}:{})});const data=await response.json();if(!response.ok)throw Error(data.error||'Sign-in is unavailable.');return data;}
  // Online mode never offers the old unauthenticated Preview admin tools button.
  setAdminPreview=enabled=>{if(!enabled){applySession(false);return;}if(signedIn)applySession(true);else showAdminSignIn();};
  showAdminSignIn=async()=>{
    if(signedIn){try{await api('DELETE');applySession(false);}catch{modal('<section class="signin-panel"><h2>Unable to sign out</h2><p>The server could not confirm sign-out. Please try again.</p><button class="btn" onclick="showAdminSignIn()">Retry sign-out</button></section>');}return;}
    modal('<section class="signin-panel"><h2>Admin sign in</h2><p>Checking the sign-in service…</p></section>');
    let state;try{state=await api();}catch{modal('<section class="signin-panel"><h2>Admin sign in</h2><p>Secure sign-in is available on the Cloudflare site. This copy does not have an active sign-in service.</p><a class="btn" href="https://ipicoltimeline.pages.dev/">Open IPICOL Timeline</a></section>');return;}
    if(state.authenticated){applySession(true);return;}
    if(!state.configured){modal('<section class="signin-panel"><h2>Admin sign in</h2><p>The sign-in service is deployed, but its private credentials have not been configured. Visitors can continue browsing normally.</p></section>');return;}
    modal('<section class="signin-panel"><span class="signin-status">Administrator access</span><h2>Admin sign in</h2><form id="admin-login-form"><div class="field"><label for="admin-username">Username</label><input id="admin-username" name="username" autocomplete="username" required maxlength="100"></div><div class="field"><label for="admin-password">Password</label><input id="admin-password" name="password" type="password" autocomplete="current-password" required maxlength="256"></div><p id="admin-login-error" role="alert" style="color:#a00000"></p><div class="signin-actions"><button id="admin-login-submit" class="btn dark" type="submit">Sign in</button><button class="btn" type="button" onclick="closeModal()">Cancel</button></div></form><p class="signin-footnote">Your password is checked on the server. Edits still save only in this browser; this is not a shared content-management system.</p></section>');
    const form=document.getElementById('admin-login-form');
    form.addEventListener('submit',async event=>{event.preventDefault();const submit=document.getElementById('admin-login-submit'),message=document.getElementById('admin-login-error'),password=form.elements.password;submit.disabled=true;message.textContent='';try{const result=await api('POST',{username:form.elements.username.value.trim(),password:password.value});password.value='';if(!result.authenticated)throw Error('Sign-in was not confirmed.');applySession(true);}catch(error){password.value='';message.textContent=error.message;}finally{submit.disabled=false;}});
    document.getElementById('admin-username').focus();
  };
  api().then(state=>{if(state.authenticated)applySession(true);}).catch(()=>{});
  // Re-check an existing session when returning to this tab; fail closed offline.
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&signedIn)api().then(state=>applySession(state.authenticated)).catch(()=>applySession(false));});
})();

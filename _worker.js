// Cloudflare Pages server code. Credential VALUES belong in encrypted bindings,
// never in this file, the HTML, localStorage, build settings, or Git history.
const COOKIE='__Host-ipicol_admin';
const TTL=4*60*60;
const attempts=new Map(); // Per-isolate abuse control; not a global WAF rate limit.
const encoder=new TextEncoder();
const json=(data,status=200,headers={})=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff',...headers}});
const b64=bytes=>btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
const unb64=s=>Uint8Array.from(atob(s.replace(/-/g,'+').replace(/_/g,'/')),c=>c.charCodeAt(0));
const ready=env=>typeof env.ADMIN_PASSWORD==='string'&&env.ADMIN_PASSWORD.length>=8&&typeof env.SESSION_SECRET==='string'&&env.SESSION_SECRET.length>=32;
async function sessionKey(env){return crypto.subtle.importKey('raw',encoder.encode(env.SESSION_SECRET+'\0'+env.ADMIN_PASSWORD),{name:'HMAC',hash:'SHA-256'},false,['sign','verify']);}
async function matches(a,b){const [x,y]=await Promise.all([a,b].map(s=>crypto.subtle.digest('SHA-256',encoder.encode(s))));const xx=new Uint8Array(x),yy=new Uint8Array(y);let diff=0;for(let i=0;i<xx.length;i++)diff|=xx[i]^yy[i];return diff===0;}
async function signedSession(env,origin){const payload=b64(encoder.encode(JSON.stringify({sub:'admin',aud:origin,exp:Math.floor(Date.now()/1000)+TTL,nonce:crypto.randomUUID()})));return payload+'.'+b64(await crypto.subtle.sign('HMAC',await sessionKey(env),encoder.encode(payload)));}
async function authenticated(request,env){if(!ready(env))return false;try{const values=(request.headers.get('Cookie')||'').split(';').map(s=>s.trim()).filter(s=>s.startsWith(COOKIE+'='));if(values.length!==1)return false;const token=values[0].slice(COOKIE.length+1);if(token.length>2048)return false;const [payload,sig,...rest]=token.split('.');if(!payload||!sig||rest.length)return false;if(!await crypto.subtle.verify('HMAC',await sessionKey(env),unb64(sig),encoder.encode(payload)))return false;const data=JSON.parse(new TextDecoder().decode(unb64(payload)));const now=Math.floor(Date.now()/1000);return data.sub==='admin'&&data.aud===new URL(request.url).origin&&Number.isInteger(data.exp)&&data.exp>now&&data.exp<=now+TTL;}catch{return false;}}
const cookie=(value,age)=>`${COOKIE}=${value}; Path=/; Max-Age=${age}; HttpOnly; Secure; SameSite=Strict`;
async function readSmallJson(request){const reader=request.body?.getReader();if(!reader)throw Error('Missing body');let length=0,chunks=[];while(true){const part=await reader.read();if(part.done)break;length+=part.value.length;if(length>2048){await reader.cancel();throw Error('Body too large');}chunks.push(part.value);}const bytes=new Uint8Array(length);let offset=0;for(const c of chunks){bytes.set(c,offset);offset+=c.length;}return JSON.parse(new TextDecoder().decode(bytes));}
export default {
  async fetch(request,env){
    const url=new URL(request.url);
    if(!url.pathname.startsWith('/api/'))return env.ASSETS.fetch(request);
    if(url.pathname!=='/api/auth')return json({error:'Not found'},404);
    if(url.protocol!=='https:')return json({error:'HTTPS required'},400);
    if(request.method==='GET')return json({configured:ready(env),authenticated:await authenticated(request,env)});
    if(!['POST','DELETE'].includes(request.method))return json({error:'Method not allowed'},405,{Allow:'GET, POST, DELETE'});
    if(request.headers.get('Origin')!==url.origin||request.headers.get('Sec-Fetch-Site')==='cross-site')return json({error:'Request not allowed'},403);
    if(request.method==='DELETE')return json({authenticated:false},200,{'Set-Cookie':cookie('',0)});
    if(!ready(env))return json({error:'Admin sign-in is not configured yet.'},503);
    if(!request.headers.get('Content-Type')?.toLowerCase().startsWith('application/json'))return json({error:'JSON required'},415);
    const ip=request.headers.get('CF-Connecting-IP')||'unknown';const now=Date.now();
    for(const [key,value] of attempts)if(value.until<=now)attempts.delete(key);
    const prior=attempts.get(ip);if(prior&&prior.count>=5)return json({error:'Too many attempts. Please try again in 15 minutes.'},429,{'Retry-After':String(Math.max(1,Math.ceil((prior.until-now)/1000)))});
    let body;try{body=await readSmallJson(request);}catch{return json({error:'Invalid sign-in request'},400);}
    if(!body||typeof body.username!=='string'||typeof body.password!=='string'||body.username.length>100||body.password.length>256)return json({error:'Invalid sign-in request'},400);
    const passwordOK=await matches(body.password,env.ADMIN_PASSWORD);
    if(body.username!=='admin'||!passwordOK){if(attempts.size>=10000)return json({error:'Sign-in temporarily unavailable'},429,{'Retry-After':'900'});attempts.set(ip,{count:(prior?.count||0)+1,until:prior?.until||now+900000});return json({error:'Username or password is incorrect.'},401);}
    attempts.delete(ip);
    return json({authenticated:true},200,{'Set-Cookie':cookie(await signedSession(env,url.origin),TTL)});
  }
};

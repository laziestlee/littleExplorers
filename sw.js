/* Cache only publicly encrypted site files. Never cache decrypted HTML or passwords. */
const CACHE='family-courses-encrypted-v3';
const ASSETS=['./','./index.html','./course.enc.json','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const u=new URL(event.request.url);
  if(u.origin!==self.location.origin||!u.pathname.startsWith(new URL(self.registration.scope).pathname))return;
  event.respondWith((async()=>{
    try{
      const resp=await fetch(event.request);
      if(resp.ok){const cache=await caches.open(CACHE);cache.put(event.request,resp.clone()).catch(()=>{});}
      return resp;
    }catch(_){return (await caches.match(event.request))||Response.error();}
  })());
});
const CACHE_NAME = "matbaa-tracker-v2";
const APP_SHELL = [
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// شبكة أولاً للبيانات الحية (Supabase)، وكاش احتياطي لباقي الملفات (يفتح التطبيق حتى بدون نت)
self.addEventListener("fetch", (event) => {
  const url = event.request.url;
  if (url.includes("supabase.co")) return; // طلبات قاعدة البيانات تروح للنت مباشرة
  if (url.includes("config.js")) return;   // الإعدادات متتخزنش عشان أي تعديل يظهر فورًا

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

const cacheName = 'cache-student';
self.addEventListener('install', function(event) {
 event.waitUntil(
 caches.open(cacheName).then(function(cache) {
 return cache.addAll(['/student/', '/student/icon-192.png', '/student/icon-512.png', '/student/manifest.json', '/student/javascript.js', '/student/members.json', '/student/index.html', '/student/nina.png', "/student/morten.png", "/student/olivia.png"]);
 })
 );
});


self.addEventListener('fetch', function(event) {
 event.respondWith(
 fetch(event.request).catch(() =>
 caches.open(cacheName).then(cache => cache.match(event.request))
 )
 );
});
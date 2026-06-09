// Dil (Service Worker Part)
// Program by Dark Mephilus
const CACHE_NAME = 'dil-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    './Dil-192.png',
    './Dil-512.png'
];
// Install Event Caching the structural files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('👑 Royal assets are being cached offline...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});
// Activate Event Cleaning old caches if any
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
// Fetch Event  Serving from cache when offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        }).catch(() => {
            return caches.match('./index.html');
        })
    );
});
// End of Program
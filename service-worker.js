
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('polish-flip-cards').then(function(cache) {
            return cache.addAll([
                'polish_alphabet_flip_cards.html',
                'manifest.json',
                'service-worker.js',
                'audio/A.mp3',
                'audio/Ą.mp3',
                'audio/B.mp3',
                'audio/C.mp3',
                'audio/Ć.mp3',
                'audio/D.mp3',
                'audio/E.mp3',
                'audio/Ę.mp3',
                'audio/F.mp3',
                'audio/G.mp3',
                'audio/H.mp3',
                'audio/I.mp3',
                'audio/J.mp3',
                'audio/K.mp3',
                'audio/L.mp3',
                'audio/Ł.mp3',
                'audio/M.mp3',
                'audio/N.mp3',
                'audio/Ń.mp3',
                'audio/O.mp3',
                'audio/Ó.mp3',
                'audio/P.mp3',
                'audio/R.mp3',
                'audio/S.mp3',
                'audio/Ś.mp3',
                'audio/T.mp3',
                'audio/U.mp3',
                'audio/W.mp3',
                'audio/Y.mp3',
                'audio/Z.mp3',
                'audio/Ź.mp3',
                'audio/Ż.mp3'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

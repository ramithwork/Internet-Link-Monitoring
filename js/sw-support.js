// sw-support.js - [JS File]
// Provides support for the main Service Worker.

// Validate the Service Worker is registered.
if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js') // async. Returns a promise.
        .then((reg) => { console.log('Service Worker Registered.') })
        .catch((err) => { console.log('Service Worker NOT Registered.', err) })
}
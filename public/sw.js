const cacheData = "dami-cache-v1"; // Set a unique cache name

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      return cache.addAll(["/static/js/bundle.js", "/index.html"]); // Cache important files
    })
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response; // Return the cached response if it exists
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type !== "basic"
          ) {
            return networkResponse; // Don't cache responses that are not successful or not from the network
          }

          // Clone the response as it can be read only once
          const responseToCache = networkResponse.clone();

          // Add the network response to the cache
          caches.open(cacheData).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse; // Return the network response
        })
        .catch(() => {
          // In case of an error during the fetch, you can return a custom offline page if you have one
          // Or simply respond with an empty response
          return new Response("Offline", {
            status: 503,
            statusText: "Service Unavailable",
          });
        });
    })
  );
});

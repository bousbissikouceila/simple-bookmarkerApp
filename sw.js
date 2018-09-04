importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");



workbox.precaching.precacheAndRoute([{
    "url": "css/bootstrap.min.css",
    "revision": "7da02c3dcc0d6e999fb1e88f33fdf504"
  },
  {
    "url": "css/style.css",
    "revision": "dbb4f742e315fd04333db2315b97779f"
  },
  {
    "url": "favicon.ico",
    "revision": "70088a001940877ecfc80d9ab710599b"
  },
  {
    "url": "index.html",
    "revision": "b7bd43f103f804d6daca0481395ad130"
  },
  {
    "url": "js/bootstrap.min.js",
    "revision": "b2599ed8bc15f4b0c1668c1bfd0dbbbd"
  },
  {
    "url": "js/main.js",
    "revision": "0f400944815429871d531757d130be07"
  }
]);
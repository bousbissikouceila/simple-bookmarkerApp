/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
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
    "revision": "ab646118054522395658c0802772cb09"
  },
  {
    "url": "js/bootstrap.min.js",
    "revision": "b2599ed8bc15f4b0c1668c1bfd0dbbbd"
  },
  {
    "url": "js/main.js",
    "revision": "0f400944815429871d531757d130be07"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

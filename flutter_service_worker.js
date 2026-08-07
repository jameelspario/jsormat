'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bc7e419d84d8d049ecc1b77a09dba4f7",
"version.json": "65d54485abcfbaa306e50c4900fe26d6",
"index.html": "36b69a93e7d287f4b3dc9b413668a9b1",
"/": "36b69a93e7d287f4b3dc9b413668a9b1",
"main.dart.js": "d106a0357371f21a8914c665870f7195",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"README.md": "d7f48a09caaed2bf205884e53e24b12f",
"favicon.png": "cb5bc8cd2e6706efc4af7ddda194a101",
"icons/Icon-192.png": "8349e6f61041c43850521c4a7dd2e6ee",
"icons/Icon-maskable-192.png": "8349e6f61041c43850521c4a7dd2e6ee",
"icons/Icon-maskable-512.png": "089112dec5072bbd269cc94367b6fab8",
"icons/Icon-512.png": "089112dec5072bbd269cc94367b6fab8",
"manifest.json": "cdc2bd481653e0ee3fd82c09a7c27ee2",
".git/ORIG_HEAD": "4a87414d1a086508e811db6653ed0afe",
".git/config": "b1701a7cc15ba6edd02598689804b3fd",
".git/objects/57/73c1e46a2e4d6c63d68283a313a8df9ecb9c95": "40817a1c7c15f6b584c447205385dab1",
".git/objects/9b/da4baa4fce217d42ba14284b721773f2f267da": "0046d46813d8cd897dbc87d69a5cbcdd",
".git/objects/35/d2ce9ef4da2159fde7c3f4f2cbe43162a770bc": "c15884f4610bc4ee8d93cd93dab33753",
".git/objects/58/74c54ff42e6a4da3fbe29dcbd790efe98a1dc6": "91a4eaeb9aa1a0c783e35dd2a20f34ab",
".git/objects/67/db03216c3cb9c367403616cff2b651fc121aa3": "f3b86bef846044e034d03a97288dbaa3",
".git/objects/9c/d433dab4adee5254e45c128a70d674391d678c": "18395eb246d39338be264100ba96a276",
".git/objects/a3/82855fcfea1cd8aacfe737e8cb540adea60fe2": "de04df88521880116873b7441c4d9556",
".git/objects/ac/6eba56274aff055bb99306c9f43d3b8a5fbe9f": "30fe740e2e69f3b469f3fabf3de0a634",
".git/objects/bb/b262787a76d9a806f6eb4eb3ec6839aba30c21": "06647ccc4552e2a2236326ca4be21de5",
".git/objects/bb/8f9c3a285f971af95385fbca58ec37b207a015": "f6d5890cb53bdbc2d0f8caabd55f5f55",
".git/objects/d7/f927ec60236995f5a4ce09aec7427686712e47": "a156384c88b9044080c6c3da521e1d3d",
".git/objects/bc/79e517e550a242017e22fdfdb6e8e763e9b6f7": "86567d9bafb876dee117e0a6278366df",
".git/objects/f3/8c03a7aa881c576fc926da6a9224672c9ed3f2": "fa4eb951bd32cba5ac77aeb3d0ccadd5",
".git/objects/c9/8e95e2364fcc0fcfd3cc8cdd4324c184c6d186": "13051a272750b99935b21dbe6b946bcb",
".git/objects/18/690226c537e97fb85f209d9996abe577c4e15b": "40b3ed0473285460256b801b0c047779",
".git/objects/18/e5f56820d02297a9498665f4654b9eaa14feb9": "ff5f0d2afad55f3727884b6db5dac94d",
".git/objects/pack/pack-35b87cfce9d8b6733397cf0f2dbaa0a2671dbbb4.rev": "ec1aa3ac45f525f48b5ff01e0978bb5c",
".git/objects/pack/pack-35b87cfce9d8b6733397cf0f2dbaa0a2671dbbb4.pack": "b07f1ace671184b52d2a08db1ced08f8",
".git/objects/pack/pack-35b87cfce9d8b6733397cf0f2dbaa0a2671dbbb4.idx": "4f952fb95e7682c237202152af07bdb0",
".git/objects/45/30f547bcfa97215eade068a8a429ef1ed6a245": "cc178e89e05ad83fce5193ad958c85bc",
".git/objects/73/e73a44bc29b3b723e1d66aa72c434211abf6b8": "9496eb412ca6129a70efe66834a03c66",
".git/objects/74/75fee9f44bfa7d685c16761e38344b180acd05": "5375cf69f09edddabd291285e1b2f6c1",
".git/objects/28/8d939bfa186dfc1d035c33836ace10f462dcbd": "c3f7e56f541484ef574cbf9fd5d7fba8",
".git/objects/10/7083be3f4c9e16ef445ca7fed961fdb7c43aed": "edc147b056693bc56963fb3cd9b47666",
".git/objects/19/0f181d1aaeed512d82d78c94360d7d788a084e": "db3e80cc1acc197bfa4f6598c13fd6f0",
".git/objects/26/2f19b062b18c0094aeb7dcfdc2c3300e93d980": "a1bb8f51d160d8e7c1be9f645e1d76f1",
".git/objects/72/d67c62b19d5e874e0922c2dff0dbe0a617836b": "a6f8e8532c7b4a843f9e3d87b9c6b5eb",
".git/objects/2a/3c8b451d17775bbeeeaf3fdce9cf05da15f037": "210d95693771c51822a82b322310cf02",
".git/objects/2a/e9ebe95f511a753ec96ba55336c78cc7480515": "eb228e8be4894a606c1cfa81f16a415e",
".git/objects/9f/04b1c2433159da01401886c473f9a4d92479cc": "ddc19ac52b54e43c332b59bc6ad9eeb5",
".git/objects/6e/0235ac13d029ec70fe8cd5b9064471a7e1beda": "fd4aa12850f11ac19acdf017aad9869e",
".git/objects/36/77e7cd96858c49733cde0da3ea7c2ceb69cbba": "0afbf02b34e6e2610cb72eb9a4d82622",
".git/objects/3f/b659295fa56376d0a412b2b71f2007f330e817": "91cca65aa78d4a10d84451490a5156e0",
".git/objects/30/544417202b7c2f1129af58e87e46c321d485dd": "803b047f00cb54b2358f020d195acf13",
".git/objects/37/899a75cd469f8bc2cb0c3a8a8e1018ae2418ed": "8904f2ce87c1bdf954f4960f59dfe0d7",
".git/objects/0a/ee53f56c549cb540870de8fe87a6347cdf9308": "3e8bd815e416b966b58907ad0b4af585",
".git/objects/64/7513ae0f7cc3f61a99589aaab2158a8a0bea0c": "7ad880afe1f3eda15cfe898b9f684d10",
".git/objects/de/44869ca2323e34ea3f9744b2b6c9ba4b19ecf5": "968e66956555102b305f81d088ed1af2",
".git/objects/cd/33c087ec86612feac7e7ccf997734ef7c03f4d": "5413057ffdb77bed900a4511b3cd4721",
".git/objects/cc/079e374d22b3810446558881d44aa15e283c7a": "c5af26e0c64439d595d69430c986f4ec",
".git/objects/f0/28a245f42890901e83edb03dd80749245739b5": "a301c7b975bc2c15da5b933ff039eed9",
".git/objects/79/fce9be62137778173452c250fb0fae606606ef": "2bdada14e639693cee01ee3876db59e5",
".git/objects/83/7b3eec4b7d876aba1cd207dcb3bb1ba255278b": "899c21d7d5ebeac775f1aa0748b2cd21",
".git/objects/1b/e8c25e5534807cdea1431381a3e248be54b9db": "b1b8962e6c5d062282d259ec23e0c720",
".git/objects/70/9d715efab11a1566042209dc3fe8a0359e9cfc": "7a21b9dd9f9b19066c5034a1013d19cb",
".git/objects/1e/48b621145cbe437241e2e910804419e6754d5d": "b0dac08e252afc99e0eaa4812f140abd",
".git/objects/76/eb52ac6f0dd5ca139d7d57ecd5c0d72abdd8a3": "e01e89710c560e2761c71cf027a817df",
".git/objects/49/989c4fa31f4f1f6da38a748ae9176f79788e63": "7dd441d9b26908274176c12707b3a8f7",
".git/objects/2b/935cf8cbc3ac3577e0aa51f0e873ff3a1e1f7d": "be360f30b26d1763692a41f54d90418c",
".git/objects/7f/8e127f3ed8e0ed23ea30ce6144b4bddd457c5b": "7f9583364333cfa590c48b3152d29e0f",
".git/objects/25/e49a433b5f60e6c3306c28259a578c8ba3b18b": "fcd53f5b677004e4f35f880730a24d3f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f2ed922528c268ce0cd691feee209cb5",
".git/logs/refs/heads/master": "f2ed922528c268ce0cd691feee209cb5",
".git/logs/refs/remotes/origin/HEAD": "605fe8ac4a2fe93db1d4dc1ca401c81e",
".git/logs/refs/remotes/origin/master": "626bcb77bd45da427e03070e5cea48c6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "6cf837269317dc569019ee472d5846b5",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "6cf837269317dc569019ee472d5846b5",
".git/index": "2695cdc095cfddca7764905565d4e8cd",
".git/packed-refs": "be0cc5d26560fc113a139457af1e51a5",
".git/COMMIT_EDITMSG": "db8573cb33d3b7cca4537b5c9756361f",
".git/FETCH_HEAD": "14993dc18e4d46327921bb1e82efc942",
"assets/NOTICES": "f93fd97c6565fb5896f98ee7ff1c96b7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f5d73d49f2bbf6e9941fed0fe61985f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "48dc2b24ecf3ea10e9aaa86694b88898",
"assets/fonts/MaterialIcons-Regular.otf": "cb6111d59363284d4366d6b894a13697",
"assets/assets/svg/person.svg": "d59ae37a7e88bac35bc4ed9bd3f60d9c",
"assets/assets/svg/clear.svg": "20538b61a666869374eaac70df8d206c",
"assets/assets/svg/text_decrease.svg": "ece05b00ca21f55da296520169275463",
"assets/assets/svg/json.svg": "4d3e685aa5c045bc983dbcd2ece30c87",
"assets/assets/svg/compress.svg": "67f80eb4fc69524a7f7cf4ab31103d5a",
"assets/assets/svg/text_increase.svg": "3abd42ccbe5959c48ccd8e4a64f2bb52",
"assets/assets/svg/bold.svg": "0f642113b1782988c629e01b9bb5e3f3",
"assets/assets/svg/copy.svg": "3c859b2919a95a1e588bccb7c2190ae6",
"assets/assets/svg/format.svg": "a3e08f2569fad735a30f06b86daefd50",
"assets/assets/svg/light-mode.svg": "2a67eb42c36467e6e6d80a22342bbf12",
"assets/assets/svg/paste.svg": "b44412e6e2504480f6fdd704cce15648",
"assets/assets/svg/italic.svg": "e38b5836715d46844316e458378a42f3",
"assets/assets/svg/dark-mode.svg": "22b2f69de72ae2414b74bb0fdbb15f5c",
"favicon.svg": "4d3e685aa5c045bc983dbcd2ece30c87",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

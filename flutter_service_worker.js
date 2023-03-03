'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c62f405b42d8cf44a0c7ab35f27ae128",
"assets/assets/animations/double_tap.json": "a6822a7137a55074abc9c8eaeb4ecced",
"assets/assets/animations/swipe.json": "c3532a78ab92eb63ff4431c3120af644",
"assets/assets/animations/swipe2.json": "d3733e744219a43327b8ee8a0e18a36d",
"assets/assets/animations/swipe3.json": "d5e503a298aa7cd67742525287fba148",
"assets/assets/audio/test.m4a": "5df86e22050301952c20969e4a518213",
"assets/assets/font/Cairo-Black.ttf": "4691baaaab6b5ad5a7f8fafe46b0ad02",
"assets/assets/font/Cairo-Bold.ttf": "e558b6a116119d88b796afd3254cc864",
"assets/assets/font/Cairo-ExtraBold.ttf": "6204e46edfdb3ba1955021289dc06bd5",
"assets/assets/font/Cairo-ExtraLight.ttf": "2fb2cbe26a952e8aa5bd87aac42e5ed4",
"assets/assets/font/Cairo-Light.ttf": "481b7173d47d4235eed15c2effdb7e33",
"assets/assets/font/Cairo-Medium.ttf": "fb96309e6902be422c107194e309f506",
"assets/assets/font/Cairo-Regular.ttf": "0e31c62ab5dd577225e5ab2983d06760",
"assets/assets/font/Cairo-SemiBold.ttf": "e960fd57af8c69446c80b323539ce029",
"assets/assets/Frame%25203.svg": "c628539275e70926c3082c2a480da868",
"assets/assets/Frame.svg": "17c059a9259fb9b738329dc34287fe30",
"assets/assets/icon/btn/0.png": "69ebe230a57c3d80215da0a0261013a0",
"assets/assets/icon/btn/0.svg": "292012ddfc78779048bc25dcda50ee47",
"assets/assets/icon/btn/1.png": "5b6045a4170fc197293ffde6d06fe7fe",
"assets/assets/icon/btn/1.svg": "6ffa4e075a71d92c0dd0ffaba8da59e0",
"assets/assets/icon/btn/2.png": "9ae1c6b7054bbbefdeecae98001a9c19",
"assets/assets/icon/btn/2.svg": "e6caeeb83418172c5eaf40eb17c70e6e",
"assets/assets/icon/btn/3.png": "42658060175fc28f9af7c40d3c3a08d2",
"assets/assets/icon/btn/3.svg": "ac66ab33af0bbd6efb4f78c2645c1a60",
"assets/assets/icon/btn/4.png": "019dedd7fdbea478c41c07bd6098ba6a",
"assets/assets/icon/btn/4.svg": "95a5dc53f7e82e65a172660654794add",
"assets/assets/icon/btn/document.svg": "95a5dc53f7e82e65a172660654794add",
"assets/assets/icon/btn/document2.svg": "1993ca382a5d81a98cad3d7860844232",
"assets/assets/icon/btn/home%2520-%2520Copy.svg": "fa2e3e056b34ee7bf10baf6db3a2ee95",
"assets/assets/icon/btn/home-2.png": "fd8ab6b228d21dac421000cb7fca5dec",
"assets/assets/icon/btn/home.svg": "e6caeeb83418172c5eaf40eb17c70e6e",
"assets/assets/icon/btn/home2.svg": "f4a949414e71dc330f95e75feb82f44b",
"assets/assets/icon/btn/map.svg": "6ffa4e075a71d92c0dd0ffaba8da59e0",
"assets/assets/icon/btn/map2.svg": "8d2a2f80dc342b0331fffebfc4525e7a",
"assets/assets/icon/btn/profile.svg": "ac66ab33af0bbd6efb4f78c2645c1a60",
"assets/assets/icon/btn/profile2.svg": "c6545b0780c77ba3d097aacdb61592fd",
"assets/assets/icon/btn/vas.svg": "292012ddfc78779048bc25dcda50ee47",
"assets/assets/icon/btn/vas2.svg": "5609dc66a10dde71068072e244e25692",
"assets/assets/icon/main_icon.svg": "364108a48f6ee52813323bd1cc1a088c",
"assets/assets/img/archive/compass-full.svg": "667a747d3e2f8a3a54ee1dc49765e223",
"assets/assets/img/archive/compass-full2.svg": "45b57663e4cf0674b984632a997866f1",
"assets/assets/img/bottom.svg": "c384d7219d53d70e9274f911425bc98d",
"assets/assets/img/choose1.svg": "2fec3deef12592da86fd5978e90140e4",
"assets/assets/img/choose2.svg": "67a593ebc6ccdf0d4b31667f55fc8d2c",
"assets/assets/img/cladding.svg": "8fb8cb0d3ad95cb743c68557e1aadeb7",
"assets/assets/img/document-text.svg": "95a5dc53f7e82e65a172660654794add",
"assets/assets/img/fig.7_ah_i_01_02_49_syrher_1440x800.png": "4180889799b77133cb2a521983e80d38",
"assets/assets/img/filter.svg": "ef01c03d7713cad365a963acb01679f8",
"assets/assets/img/floor.svg": "d97a4ed51f295bd4ca4f6f7efe2d8ef3",
"assets/assets/img/Frame%252018.svg": "13236831d442488b97e406fdbd8f9a33",
"assets/assets/img/Frame.svg": "f91c6048ee7dfeb8ebee89100b80d624",
"assets/assets/img/full-bottom.svg": "49e99d04f64e619fa672183ed9d48320",
"assets/assets/img/great-mosque.jpg": "066b61a14dba3c906c827c2854023914",
"assets/assets/img/Group%252072.svg": "292012ddfc78779048bc25dcda50ee47",
"assets/assets/img/grunge-paper-background.jpg": "4da9929bcce6e5bc4e680cfd2965b730",
"assets/assets/img/home-2.svg": "fa2e3e056b34ee7bf10baf6db3a2ee95",
"assets/assets/img/homeSlider1-2.png": "7df8e00d65f83246e7e77c7c31c056f7",
"assets/assets/img/homeSlider1-3.png": "dd2c67215593c46f26638e7219e22edb",
"assets/assets/img/homeSlider1.png": "02857e9f8e0e0e9ea3ce2ca311dcfa62",
"assets/assets/img/icon%2520_skip_.svg": "e57bdaa1af40531fc3e696774ec79165",
"assets/assets/img/icon-drawer/1.svg": "498721fdfc629a1d8034d2d74dde297f",
"assets/assets/img/icon-drawer/10.svg": "9a139847e4d2d8f1c4a37a8b23ab4283",
"assets/assets/img/icon-drawer/11.svg": "716b27348dd3303c74aab5587f77571e",
"assets/assets/img/icon-drawer/12.svg": "1201a55aebda04d361c634d54c01cdd2",
"assets/assets/img/icon-drawer/13.svg": "12c3201c26906a7325cf569c35288597",
"assets/assets/img/icon-drawer/2.svg": "23ee7594191ad1c898aa660342fedc7b",
"assets/assets/img/icon-drawer/3.svg": "c2671ffb12ed42a75cd8681da527c91a",
"assets/assets/img/icon-drawer/4.svg": "c31dae07359e514726b69a21664f038e",
"assets/assets/img/icon-drawer/5.svg": "7c9f22e9618719acc78f202d372fe851",
"assets/assets/img/icon-drawer/6.svg": "25910bdfcb3c096628e76e9c1a689441",
"assets/assets/img/icon-drawer/7.svg": "b56a493b256a7a019dd962e1acc9ddf7",
"assets/assets/img/icon-drawer/8.svg": "48c5b56cfeca014be4ae7db6902fee45",
"assets/assets/img/icon-drawer/9.svg": "cb879eaecfeef895fc3ebdb071e232de",
"assets/assets/img/icon-drawer/courthouse.svg": "e4a128dd9661e7123b741c4368bdaa7e",
"assets/assets/img/icon-drawer/tick-circle-false.svg": "03a6f08a7cd2850cd07709abc1ce2a3c",
"assets/assets/img/icon-drawer/tick-circle.svg": "5a207963de0784fde2bf66ebee27e553",
"assets/assets/img/info.svg": "a36f7073e47a7bc3c950737601c1a8f4",
"assets/assets/img/jobs-icon/1.svg": "871f63c4217c1fd02e2d7c20cb5ac998",
"assets/assets/img/jobs-icon/2.svg": "24d6ab7182041bd5c36dfc7bf75af71b",
"assets/assets/img/jobs-icon/3.svg": "4b4f95dd3988ad1c5e398e8c0f032edf",
"assets/assets/img/jobs-icon/4.svg": "88bb3d14d7853bc245382cae62099fcf",
"assets/assets/img/jobs-icon/5.svg": "055ac6c0dccf5e77a0051afb2c53756c",
"assets/assets/img/jobs-icon/6.svg": "f3cf00ba41bf2a177f362d61d6a56b00",
"assets/assets/img/jobs-icon/7.svg": "c90c04200ebbd06f1f2812867ae3cea1",
"assets/assets/img/logo-icon.png": "bfb43177f003d11f6a6e9d8dc8c1d8fe",
"assets/assets/img/logo-png.svg": "0c0b7d7c8c1a067ecded82eb3b7882c1",
"assets/assets/img/logo-simple.svg": "a1f434ca56a2374f5dee40393252a163",
"assets/assets/img/logo.png": "26e7b89fe6045b81d85cab8b5b4e5697",
"assets/assets/img/logo.svg": "62c513227f27beeee3391faa842e15f3",
"assets/assets/img/logo_hover.png": "58e50416e821055278d845bcb969e3c4",
"assets/assets/img/map.png": "bd0b4bf3d11eda9e9bd585c193b03ae1",
"assets/assets/img/map.svg": "6ffa4e075a71d92c0dd0ffaba8da59e0",
"assets/assets/img/Mapsicle%2520Map.png": "58abb6d6ca345abd5b8f863a8b12fae7",
"assets/assets/img/marker.png": "d09eb5911621686bbe75a46990b636c2",
"assets/assets/img/marker_selected.png": "63bf16ffa0d8c7832a4498ae3bca624a",
"assets/assets/img/mobile.svg": "e179bc00e2be72509b4b63bf610ba28c",
"assets/assets/img/onboarding/1.svg": "6c628fe1268c650648858d7e4f8be537",
"assets/assets/img/onboarding/2.png": "21123972d384ccb029c1c14e9caf2349",
"assets/assets/img/onboarding/2.svg": "8989f6ac7cefef671414b678d6ba1d32",
"assets/assets/img/onboarding/2p.svg": "829c6d10fac66d157d1170f53a22a8f3",
"assets/assets/img/onboarding/3.png": "0f3fac5b3ff63882648a9d4786b2e333",
"assets/assets/img/onboarding/3.svg": "da9de302f708772d0764bba073abd0e3",
"assets/assets/img/onboarding/4.png": "708d92a0fac1c32aa1e0af800ba0cb49",
"assets/assets/img/onboarding/4.svg": "cf9f2713ef941eea0e6c3089aca0fa6c",
"assets/assets/img/onboarding/5.png": "47504d67be9e60c2aca53bf089d03c14",
"assets/assets/img/onboarding/5.svg": "73df1956c047ad1c1e4d9cb6f3791e32",
"assets/assets/img/onboarding/6.png": "42f4ffdadd7b523e42d09320bfe8d963",
"assets/assets/img/onboarding/6.svg": "eef791a6af93347ebfc52e6abeaa1958",
"assets/assets/img/placeHolder.png": "cb73076240d3679630627eb19883c589",
"assets/assets/img/placeHolder2.png": "485ef2356a8460a7ce62a3e2ff309aaa",
"assets/assets/img/profile-2user.svg": "ac66ab33af0bbd6efb4f78c2645c1a60",
"assets/assets/img/R500500T-30-A.png": "7236344b7cb28b9f41c5546197dfb187",
"assets/assets/img/Rectangle.png": "95f62e84a3509d6b2a68644b126dd358",
"assets/assets/img/Rectangle.svg": "20d0be01bf678b5a23dbe998244ef83d",
"assets/assets/img/space.svg": "f2839eb2c96bea81f4e242c424c191d5",
"assets/assets/img/splash.png": "15cb270dcdbc599e0757036e6609b6a4",
"assets/assets/img/splash2.png": "50cfbd69265607fe333139542e628b33",
"assets/assets/img/splash3.png": "f1d8d29e2db0b7e407f40d0c6e69e18a",
"assets/assets/img/splash4.png": "2c2a5dcc676ca09a4afcc5d9b6c9c301",
"assets/assets/img/splash5.png": "f97ba79f80848b2b59388f446d558bfb",
"assets/assets/img/splash6.png": "e3b97b7f915ae3ca4077254c8ef80712",
"assets/assets/img/splash7.png": "ace3a43b2096eefbd1da38f504e9a266",
"assets/assets/img/splash8.png": "83bdd68aeba0c0e3bc0fb5efc7be56b6",
"assets/assets/img/Syria_Trust_for_Development_Logo.png": "9f3bdac95b8edcf432a68db271af60d8",
"assets/assets/img/test.jpg": "27b0135721f604e29158764b115919a4",
"assets/assets/img/test.svg": "15294ae07fb45a28091bec4be1aebb70",
"assets/assets/img/test2.jpg": "e064ac02b0cf6eef9e9d4d08fe28d741",
"assets/assets/img/trust2.png": "17f78d353a6f2c40bb324964ab61ad2b",
"assets/assets/img/tv1-2.png": "dd55a13008f8417e85811159673ed431",
"assets/assets/img/tv1.png": "96a224ed4a2186914bba9dad026bf2f5",
"assets/assets/img/tv2.png": "24277a0ed9c5b572960ee830ecce7f5b",
"assets/assets/img/tv3.png": "872c520e6d1fb38a045591943273a4eb",
"assets/assets/img/user.png": "f458388aeca0af4cbb03fb346f05a05e",
"assets/assets/img/vase1.svg": "bd0d70420b2c880ca09397ced731885f",
"assets/assets/img/vase2.svg": "c0de739c34b23c3e56eda6209f39e068",
"assets/assets/img/vase3.svg": "d0f53b208a2de69a4c8b9133936f2b73",
"assets/assets/img/workshop1.png": "deb4ab73da5f24f2f462a2617bb12151",
"assets/assets/img/workshop2.png": "30d06e99d616ba68a6c59669f46cecce",
"assets/assets/img/workshop3.png": "9cf3ed08de585416db0a2d376d9e8791",
"assets/assets/img/workshop4.png": "afb9d71cca563edc393bd96b03c9072b",
"assets/assets/img/workshop5.png": "3c571e27b525259226929018f099f1b6",
"assets/assets/img/workshop6.png": "6d870dca12cbdb57f979d3c3fc742a72",
"assets/FontManifest.json": "610883bf7a8941d28ce05298f1bd13b5",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "0b0c1e8ce902d0d5fff55db81ffb64aa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "83e4f945e034eee8c6f59854790db241",
"/": "83e4f945e034eee8c6f59854790db241",
"main.dart.js": "a6a4b4683440cc9caa361c612e8cb0cf",
"manifest.json": "5c06f07dd11a326e87d88529372138e6",
"version.json": "9f2298d3a052d541cf1afc73a31d8207"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

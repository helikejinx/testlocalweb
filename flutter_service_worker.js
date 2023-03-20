'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "48f48daae8d652618b997f9ed7fea5d3",
"assets/assets/img/bg_answer.png": "b9ef36809b3c07703fee73416f515cde",
"assets/assets/img/bg_ask_1.png": "a28f417714ab20faebb541ce991b86f7",
"assets/assets/img/bg_ask_2.png": "37c91683332a5fcf3a7cf73b644b2f36",
"assets/assets/img/bg_ask_3.png": "728aa605103cfa08d0bcb6075d0b53e7",
"assets/assets/img/bg_ask_4.png": "75efae2b958d6ba32fad7afa659c3f91",
"assets/assets/img/bg_ask_5.png": "cd86638fe69ed7ba130ad0d9612282e2",
"assets/assets/img/bg_ask_6.png": "47d33c005dbacaf091a5089a1131a959",
"assets/assets/img/bg_ask_7.png": "7b944bef91a5619059b9e73c2fd4d7eb",
"assets/assets/img/bg_ask_8.png": "44f0557868d8a3d532bca58a9c448845",
"assets/assets/img/bg_ask_done.png": "40a7b4d37877a5c0acb67ec75fe25632",
"assets/assets/img/bg_ask_mark.png": "d35b75dadef7abe75c4bb327902deea1",
"assets/assets/img/bg_ask_text_do.png": "ca7cef98bc56cb4702ea5997aab8b9aa",
"assets/assets/img/bg_ask_text_undo.png": "a9e24997cc40e0c01a249b708fe51d10",
"assets/assets/img/bg_ask_undo.png": "53afe942343cc67f6e23e5ad2aa5cfe2",
"assets/assets/img/bg_collect_border.png": "ac7e8f9a62344f6f2627dc16789948e7",
"assets/assets/img/bg_collect_border_inside.png": "22daa0a517771426711756831c4b1866",
"assets/assets/img/bg_dialog.png": "dac711f9a90100132bc796fad4468436",
"assets/assets/img/bg_dialog_txt.png": "8cef4d05a80368ee1e782a529165b3e4",
"assets/assets/img/bg_main.png": "35ccaa40aefbf188060e50545ebe56ce",
"assets/assets/img/bg_menu.png": "246995bae6271ece5e1f6fbc6cca80e4",
"assets/assets/img/bg_player.png": "c9500e6a8f249fce27089b97fad11e68",
"assets/assets/img/bg_show_book_jia.png": "9d6da0b02bd8ec296a5ab322318c066d",
"assets/assets/img/bg_tips_1.png": "3a659f4f36dd100c7e68d41d9b1eaa79",
"assets/assets/img/bg_tips_2.png": "b1cea1a76b4d4f8b7a87f04666ca7513",
"assets/assets/img/bg_tips_3.png": "2a682f30c4107e56800057cb5b67363b",
"assets/assets/img/bg_tips_4.png": "4b305c81cd55d623d21604ec13bb78d3",
"assets/assets/img/bg_tips_5.png": "d5c7f09fd9a830c57a7487620005fcd6",
"assets/assets/img/bg_tips_6.png": "40c28b2bf269d2c371bad5a19db922a7",
"assets/assets/img/bg_tips_7.png": "ef45970b92ea39d9d989682bd1c6a865",
"assets/assets/img/bg_tips_8.png": "284e8a858677f76b12b2000083d08e5c",
"assets/assets/img/bg_wechat.png": "d4180dc3504164dcb7090086bf5fdfa3",
"assets/assets/img/bg_wechat_line.png": "355d54b2f9b0bcdb744956103ba7207c",
"assets/assets/img/bg_write_content.png": "2569298c47312fc76fe0296540799c3b",
"assets/assets/img/bg_write_detail.png": "6fa082e3ebd9be3d14e9a40486f8efb7",
"assets/assets/img/bg_write_title.png": "9eaf3c7bfde448daf26e14a7d49af115",
"assets/assets/img/bg_write_title_unselected.png": "b80fda0e0b79555d3227c87e67e74873",
"assets/assets/img/ic_ask_1.png": "894bb231eb2264da2b78b8fad6d61ec9",
"assets/assets/img/ic_ask_2.png": "c24ccebcf81f64bab5aa0785a1d94d96",
"assets/assets/img/ic_ask_3.png": "91f319cf4017ec0c96c7b0492c9132ff",
"assets/assets/img/ic_ask_4.png": "57043dea6b13a18b9e8e3bb9854fe5b6",
"assets/assets/img/ic_ask_5.png": "84f7a9b8e3bc7d9c6d1b78dbb1788b7b",
"assets/assets/img/ic_ask_6.png": "a54f6d658d2fcebd678b99fee0a2f980",
"assets/assets/img/ic_ask_7.png": "32d48de4777ba2939c618560d07d9fc0",
"assets/assets/img/ic_ask_8.png": "1252bd1301e9819b2712a6834d35e7eb",
"assets/assets/img/ic_ask_do.png": "fdb55cc7e142276a193c60e207835afa",
"assets/assets/img/ic_ask_done.png": "4fed1d4cdf16cf4db10decc361c8b470",
"assets/assets/img/ic_ask_right.png": "4a9ae645d6b4cfc3301e6a433bfb5cf6",
"assets/assets/img/ic_ask_select.png": "bba0d20db90681fdec334db86330b142",
"assets/assets/img/ic_ask_text_logo.png": "ee2dbbcb7d4485bbfd706ac6a0a4ab2b",
"assets/assets/img/ic_ask_tips.png": "380907ff2d4e845889d9dd45ec3abac2",
"assets/assets/img/ic_ask_undo.png": "31abd789d03964e41c060f91d0aa9bb1",
"assets/assets/img/ic_ask_unselect.png": "47cbcfaa149ffedad4c4da6dccb8e053",
"assets/assets/img/ic_ask_wrong.png": "7e03c2272444ba62c5e59597b34d82f7",
"assets/assets/img/ic_back.png": "2e7dccaf43e38704763dd27c2eddea70",
"assets/assets/img/ic_book_jia.png": "725f3c9ca6a7e235447d294c75bd4e18",
"assets/assets/img/ic_close.png": "160a7a06e6b3a0a0964a5965d58e1c4a",
"assets/assets/img/ic_collect_button.png": "8e31483d4b0abc936ca14198d566da89",
"assets/assets/img/ic_collect_decoration.png": "042d01149f714d75c8059d9d42cdef34",
"assets/assets/img/ic_collect_detail_decoration.png": "38252f31d227e26aa713524b41413afe",
"assets/assets/img/ic_game_enter.png": "e3615297323ce872f26362572b99e01d",
"assets/assets/img/ic_game_left_bottom.png": "81a693c2982b4ed02904f4fa361b85e6",
"assets/assets/img/ic_game_pic.png": "492225275a6472d99b7bd361de2632bc",
"assets/assets/img/ic_game_quite.png": "1f79949c2a24e308449d204467827d21",
"assets/assets/img/ic_game_right.png": "3f1ce688869a72c45610db80fff81d99",
"assets/assets/img/ic_game_right_bottom.png": "f79122442200c41ec4fe3e9b55706edb",
"assets/assets/img/ic_game_right_text.png": "5be9fe6c392716e3909d4b9fded456ec",
"assets/assets/img/ic_game_txt.png": "7cb40b268724a4d4231c79c453409b80",
"assets/assets/img/ic_hand.gif": "ecdd99e1c2cd7d875bb9b92ad8a04006",
"assets/assets/img/ic_huizhang.png": "b3ea58366684f3375bfe917697a1f768",
"assets/assets/img/ic_left.png": "ba8f8cc473216c1b56a8665d25810c5c",
"assets/assets/img/ic_live_list_normal.png": "9b85b58faf812682e348c366f5d603fa",
"assets/assets/img/ic_live_list_select.png": "0ef21ee59e688b0dcd8372d38ed21fe3",
"assets/assets/img/ic_live_wc_normal.png": "ab5f924e8de0a27881d1a5f377e6aafe",
"assets/assets/img/ic_live_wc_select.png": "a611a536a1cc966c03d7edb062bba3d4",
"assets/assets/img/ic_main_book.png": "cc0ac91d7f5dde04756411e398c924d4",
"assets/assets/img/ic_main_collect.png": "844824dfd0643c7e5e7947f30e10eb3a",
"assets/assets/img/ic_main_game.png": "c6ad7eb4308c79092c1a74a68d8f8b9e",
"assets/assets/img/ic_main_knowledge.png": "df68208a4debf48beb7990dcdab6d7ea",
"assets/assets/img/ic_main_left.png": "b90a2fe8410cbf2f0cf21cb0076b3936",
"assets/assets/img/ic_main_live.png": "68444a2511f7d7f84d437d33a0d9681f",
"assets/assets/img/ic_main_write.png": "4ecbd53b003a447866c0f627662597d8",
"assets/assets/img/ic_music.png": "79d055c36cde19a61defa4e9d065f9d2",
"assets/assets/img/ic_next.png": "f9fddf3f29d15d5a59dd38075b1f4a99",
"assets/assets/img/ic_pause.png": "6870e3e3d380763360a43157f9337618",
"assets/assets/img/ic_playing.png": "fa160595ac3c987753d81606085ac882",
"assets/assets/img/ic_pre.png": "80c5a3ac8c6e0160ac16432d8d24d3d8",
"assets/assets/img/ic_swiper_selected.png": "b85fb25300b4f4a65f80eef679234c3e",
"assets/assets/img/ic_swiper_unselected.png": "36be655f499a4bd1237763376eb39a13",
"assets/assets/img/ic_text_line.png": "d9352c1687e25aa3613c197e4f6e4044",
"assets/assets/img/ic_text_logo.png": "2af942d7419ca1e05524e6a5d8b4e28a",
"assets/assets/img/ic_web_game_right.png": "50d5ade98104e022285f73257c425857",
"assets/assets/img/ic_write_content_left.png": "30f40a0c7ac500d27939205bef91b798",
"assets/assets/img/ic_write_line.png": "7f5cbb62a2d075cbcc56a771ac910f55",
"assets/assets/img/qr_ask_success.png": "96ad066e73a3452db43d4b21b1447fa8",
"assets/assets/img/qr_live.png": "4a5096b1bb98671513ee97a64c8a18f7",
"assets/assets/txt/game.txt": "36ac3e62aa02832fc8a0cc8a23af7964",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "cd5c2ccc8935d9dd92e4beb8ccfa2f26",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
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
"index.html": "4bbcc43cb4f79197a6b4826541c00170",
"/": "4bbcc43cb4f79197a6b4826541c00170",
"main.dart.js": "7d873f5a84c9e3ea60f6c413650d49a7",
"manifest.json": "1da491c6245605494958b58de7d491a1",
"version.json": "a7dc98f09acc2d86c3cd82333784d711"
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

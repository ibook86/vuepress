if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,r,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-2c301fb6"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.f3d822a2.css",revision:"1ba65105b637b016a2cbd41724c80f6c"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/12.863479ae.js",revision:"e931c43e0ef9d3d748b8834f4b1ea49a"},{url:"assets/js/app.2de840b5.js",revision:"1dd6bd1fca051d822d785242e474f3f5"},{url:"assets/js/layout-Blog.629ca30b.js",revision:"342c067b8b0ba51c4100027f9ce25d33"},{url:"assets/js/layout-Layout.54347a9b.js",revision:"705fe36c8e6c6cdd4228d02890c04b9f"},{url:"assets/js/layout-NotFound.bd7abb76.js",revision:"3a4db94d18b45d007ecc12d174662fb4"},{url:"assets/js/layout-Slide.24b17b37.js",revision:"4e6ba79b159798981d5563e15e2263ac"},{url:"assets/js/page-HelloVuePress.e42a178a.js",revision:"ffc91967aed212032cd0615823163a7d"},{url:"assets/js/page-InternetDownloadManager.770a383c.js",revision:"ef02a9f90487333cfb743ef87aac78eb"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.b3c31b8d.js",revision:"002866998263d85521b021c39b67f573"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.6536e0e8.js",revision:"e77ab07ad00a3abd88eca16717e703a6"},{url:"assets/js/vendors~layout-Layout.3537774e.js",revision:"735b403c9a6ab1a8528a15e910c18d87"},{url:"assets/js/vendors~photo-swipe.bb4cd584.js",revision:"5281002f84af1033a50fea51e1427303"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"e35e993d6f3bf66e2de6446e06d53397"},{url:"article/index.html",revision:"b4dad00945204c55e76c3e6f266be4b0"},{url:"category/index.html",revision:"a4ae99e289da5bd24306da55aa9258fa"},{url:"encrypt/index.html",revision:"9d71a92036a7ff8fdae5c578fd59b345"},{url:"index.html",revision:"e6f7105528cdc608facd0598b9e8b581"},{url:"list/idm/index.html",revision:"970923a0546273bf06a5e864e3430faf"},{url:"slide/index.html",revision:"018272e5acdbae0f17665266612a2631"},{url:"star/index.html",revision:"8f30cb87ce3d987c2997b387cd0f630d"},{url:"tag/index.html",revision:"1891048565cbc6bdb29d39d7eb3fc28f"},{url:"timeline/index.html",revision:"969b02ae86a19c50ea2dd5cc29eca918"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});

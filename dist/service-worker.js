if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const t={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return t;default:return e(r)}})).then(e=>{const r=n(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/./index.html",revision:"098519e5f77880ffa1e10ee62e56c4e4"},{url:"/./index.html.gz",revision:"a2b2ff060febeceb477a37bcf0708a0d"},{url:"/bundle.js",revision:"8e95371c7abbe4df1720002a1c2455d1"},{url:"/bundle.js.gz",revision:"7ec5b397dc804d0ce80df856423ecb12"},{url:"/bundle.js.map.gz",revision:"f159a826c325cbe180a32c0133c898dd"}],{})}));
//# sourceMappingURL=service-worker.js.map

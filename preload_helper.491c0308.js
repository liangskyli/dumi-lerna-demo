!function(){"use strict";var t="/dumi-lerna-demo/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"demo","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.27ace984.async.js",9],["packages__demo2__src__index.md.01be7ae6.async.js",29],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.7bdfa363.async.js",65],["packages__demo1__src__utils__get-name__index.md.b4e3cf46.async.js",123],["packages__demo1__src__index.md.0d5a9eb4.async.js",392],["packages__demo2__src__foo22__index.md.12889591.async.js",427],["nm__dumi__theme-default__layouts__DocLayout__index.21ac242a.async.js",519],["721.e8c51481.chunk.css",721],["721.34887b2f.async.js",721],["packages__demo1__src__foo__index.md.cd4016e7.async.js",742],["packages__demo1__src__utils__get-name2__index.md.da9e6065.async.js",785],["packages__demo1__src__foo2__index.md.a8710f0b.async.js",810],["dumi__tmp-production__dumi__theme__ContextWrapper.74606f94.async.js",923],["docs__index.md.6ee65f21.async.js",935],["docs__guide.md.c883462e.async.js",937]],"r":{"/*":[3,4,8,9,10,14],"/":[15,8,9,10,14],"/guide":[16,8,9,10,14],"/demo1s":[6,8,9,10,14],"/demo2s":[2,8,9,10,14],"/~demos/:id":[0,1,14],"/demo1s/foo":[11,8,9,10,14],"/demo1s/foo2":[13,8,9,10,14],"/demo1s/get-name":[5,8,9,10,14],"/demo1s/get-name2":[12,8,9,10,14],"/demo2s/foo22":[7,8,9,10,14]}},{publicPath:"/dumi-lerna-demo/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();
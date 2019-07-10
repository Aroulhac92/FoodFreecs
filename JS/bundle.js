!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=27)}([function(e,t,n){"use strict";var r=n(3),o=n(9),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===i.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){e.exports=n(8)},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(12),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:("undefined"!=typeof XMLHttpRequest?s=n(4):void 0!==t&&(s=n(4)),s),transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){c.headers[e]={}}),r.forEach(["post","put","patch"],function(e){c.headers[e]=r.merge(i)}),e.exports=c}).call(this,n(11))},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0),o=n(13),i=n(15),a=n(16),s=n(17),c=n(5),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(18);e.exports=function(e){return new Promise(function(t,l){var d=e.data,f=e.headers;r.isFormData(d)&&delete f["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||s(e.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var g=e.auth.username||"",y=e.auth.password||"";f.Authorization="Basic "+u(g+":"+y)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:e,request:p};o(t,l,r),p=null}},p.onerror=function(){l(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){l(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var v=n(19),w=(e.withCredentials||s(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;w&&(f[e.xsrfHeaderName]=w)}if("setRequestHeader"in p&&r.forEach(f,function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),l(e),p=null)}),void 0===d&&(d=null),p.send(d)})}},function(e,t,n){"use strict";var r=n(14);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";var r=n(0),o=n(3),i=n(10),a=n(2);function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=s(a);c.Axios=i,c.create=function(e){return s(r.merge(a,e))},c.Cancel=n(7),c.CancelToken=n(25),c.isCancel=n(6),c.all=function(e){return Promise.all(e)},c.spread=n(26),e.exports=c,e.exports.default=c},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,n){"use strict";var r=n(2),o=n(0),i=n(20),a=n(21);function s(e){this.defaults=e,this.interceptors={request:new i,response:new i}}s.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(e){s.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){s.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=s},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,d=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!l){var e=s(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(5);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))}))}),i=a.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}}),a):a}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,i=String(e),a="",s=0,c=r;i.charAt(0|s)||(c="=",s%1);a+=c.charAt(63&t>>8-s%1*8)){if((n=i.charCodeAt(s+=.75))>255)throw new o;t=t<<8|n}return a}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(22),i=n(6),a=n(2),s=n(23),c=n(24);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(7);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";n.r(t);var r={nav:document.querySelector(".nav"),navBar:document.querySelector(".nav-bar"),header:document.getElementById("header"),signupBtn:document.querySelector(".signup-btn"),loginBlock:document.querySelector(".login-block"),loginDiv:document.querySelector(".login-nav"),signupBlock:document.querySelector(".signup-block"),signupDiv:document.querySelector(".signup-nav"),userInput:document.querySelector(".right-side-header"),backToLogin:document.querySelector(".back-to-login"),searchArea:document.querySelector(".search-area"),searchBox:document.querySelector(".search-box"),searchBtn:document.querySelector(".search-btn"),date:document.querySelector(".date"),exitBtn:document.querySelector(".exit-btn"),randomBtn:document.querySelector(".random-rec"),joinBtn:document.querySelector(".join-btn"),loginPw:document.getElementById("pw"),loginUn:document.getElementById("un"),randomRecBtn:document.querySelector(".random-in-win"),headerNav:document.querySelector(".header-nav"),loginBtn:document.querySelector(".login-btn"),cotdImg:document.querySelector(".cotd-img"),cotdTitle:document.querySelector(".cotd-title"),cotdLink:document.querySelector(".cotd-link"),cotdIngredients:document.querySelector(".ingredients-class"),cotdEachIngredient:document.getElementById("ingredients"),dropdownOption:document.querySelector(".nom-drop"),innerText:document.getElementById("inner-text"),selectedImage:document.getElementById("selected-img"),UOTMName:document.querySelector(".featured-name"),UOTMBio:document.querySelector(".featured-bio"),UOTMFavMeal:document.querySelector(".fav-meal"),UOTMQuote:document.querySelector(".quote"),UOTMPhoto:document.querySelector(".featured-user-photo")};var o={proxy:"https://cors-anywhere.herokuapp.com/",myKey:"fcdbf947d9c514bb8ac972d86601f89c",myKey2:"f07d7e8d707d1c8a00efebde275f4149",myKey3:"f3ecb80fb6f2bb4f5ef3ac0a85a0139c",edamamID:"856345cd",edamamKey:"e7708fd8ff83e0ad87db36d5652780f2"},i=n(1),a=n.n(i);var s=Math.ceil(10*Math.random());r.userInput;const c=()=>new Promise(e=>{setTimeout(()=>{document.querySelector(".login-nav")?document.querySelector(".right-side-header").innerHTML='\n        <div class="col span-1-of-2">\n            <ul class="signup-nav">\n                <li><input type="text" id="firstName" placeholder="First Name"></li>\n                <li><input type="text" id="location" placeholder="Location (city, st.)"></li>\n                <li><input type="text" id="username" placeholder="Desired Username"></li>\n                <li><input type="password" id="password" placeholder="Password"></li>\n                <li><input type="password" id="password2" placeholder="Retype Password"></li>\n                <li></li>\n            </ul>\n        </div>\n        <div class="col span-1-of-2">\n            <ul class="spacing">\n                <li class="row"><a class="btn join-btn" href="#/">Join our community!</a></li>\n                <li class="row"><a class="btn back-to-login" href="#/">Back to login</a></li>\n            </ul>\n        </div>\n':document.querySelector(".signup-nav")&&(document.querySelector(".right-side-header").innerHTML='\n        <ul class="login-nav">\n            <li><a class="empty-btn random-rec" href="#">Random Recipe (External Link)</a></li>\n            <li><input type="text" name="user" id="un" placeholder="Username"></li>\n            <li><input type="password" name="pass" id="pw" placeholder="Password"></li>\n            <li><a class="forgot-pass" href="#/">Forgot Password ?</a></li>\n            <li><a class="btn login-btn" href="#/"><span>Login</span></a><a class="btn signup-btn" href="#/"><span>Sign up</span></a></li>\n        </ul>\n '),document.querySelector(".right-side-header").classList.remove("dim-hide")},200)});const u=()=>{try{r.nav.innerHTML=""}catch(e){console.log(e)}},l=(e,t,n,o)=>{let i=`        \n    <div class="nav-bar">   \n        <div class="col span-1-of-3">\n            <div class="row random-rec-box">\n                <a class="random-recipe-tag" href="${o}">${t}</a>\n            </div>\n            <div class="nav-img-box">\n                <img src="${n}" alt="searchImg" class="search-img">\n            </div>\n        </div>\n        \n        <div class="col span-1-of-3">\n            <div class="row nav-text-box">\n                <p>\n                    <div class="row you-searched">You searched:</div>\n                    <div class="nav-text">"${e}"</div>\n                </p>\n            </div>\n            <div class="row nav-bar-random"><a class="btn random-in-win" href="#">Another ${e} Recipe</a></div>\n            <div class="row nav-bar-random"><a class="btn random-in-win" href="#">Another Random Recipe</a></div>\n        </div>\n\n        <div class="col span-1-of-3">\n            <a class="exit-btn" href="#">X</a>\n        </div>\n    </div>\n    `;r.nav.insertAdjacentHTML("beforeend",i)};class d{constructor(e=""){this.name=e,this.ingredients=[]}async randomRecipe(e,t){try{const n=await a()(`https://www.food2fork.com/api/search?key=${o.myKey}&q=${this.name}`);let i=Math.ceil(30*Math.random()),s=n.data.recipes[i];if(0!==n.data.count||r.searchArea.children[2])n.data.count>0&&r.searchArea.children[2]?(document.querySelector(".spell-check").parentElement.removeChild(document.querySelector(".spell-check")),this.id=s.recipe_id,this.title=s.title,this.img=s.image_url,this.url=s.source_url,!0===e&&this.insertNav()):n.data.count>0&&(this.id=s.recipe_id,this.title=s.title,this.img=s.image_url,this.url=s.source_url,!0===e?this.insertNav():(document.getElementById(`meal-photo${t}`).src=this.img,document.getElementById(`figcaption${t}`).innerHTML=this.title,document.getElementById(`figcaptions${t}`).href=this.url));else{let e='\n                <div class="spell-check">Please check spelling and try your search again.</div>\n                ';r.searchArea.insertAdjacentHTML("beforeend",e)}}catch(e){console.log(e)}}insertNav(){""!==this.name?l(this.name,this.title,this.img,this.url):l("random",this.title,this.img,this.url)}pagination(e,t=1){let n,o,i;r.cotdEachIngredient.innerHTML="",n='<a id="page-left" href="#/">&lt;</a> <a id="page-right" href="#/">&gt;</a>',i='<a id="page-left" href="#/">&lt;</a>',o='<a id="page-right" href="#/">&gt;</a>';let a=Math.ceil(e.length/6);e.forEach((e,n,o)=>{o.length>6&&(document.getElementById("pages").innerHTML=1===t?'<a id="page-right" href="#/">&gt;</a>':t===a?'<a id="page-left" href="#/">&lt;</a>':'<a id="page-left" href="#/">&lt;</a> <a id="page-right" href="#/">&gt;</a>'),n<=6*t-1&&n>=6*(t-1)&&r.cotdEachIngredient.insertAdjacentHTML("beforeend",`<li>${e}</li>`)})}async getRecipe(e){let t=(await a()(`https://www.food2fork.com/api/get?key=${o.myKey}&rId=${e}`)).data.recipe;if(t){if(t.title.split("").length>28){let e=t.title.substring(0,26)+"...";r.cotdTitle.innerHTML=e}else r.cotdTitle.innerHTML=t.title;r.cotdImg.src=t.image_url,r.cotdLink.href=t.source_url,this.pagination(t.ingredients),this.ingredients=t.ingredients}}returnIngredients(){return this.ingredients}}class f{constructor(){this.name=document.getElementById("firstName").value,this.loc=document.getElementById("location").value,this.username=document.getElementById("username").value,this.pass=document.getElementById("password").value,this.retypePass=document.getElementById("password2").value}welcomeUser(){alert(`Welcome to FoodFreecs, ${this.name}.`)}fieldsComplete(){return""!==this.name&&""!==this.loc&&""!==this.pass&&""!==this.username&&""!==this.retryPass?!Array.from(this.name).includes(" ")&&this.pass===this.retypePass||(alert("Please only supply your first name and ensure your passwords match."),!1):(alert("Please complete all fields correctly. Thank you."),!1)}saveUsername(){return this.username}savePass(){return this.pass}alertName(){return this.name}}const p=()=>{r.selectedImage.classList.add("dim-hide")},h=()=>new Promise(e=>{setTimeout(()=>{r.innerText.innerHTML=(()=>{switch(r.dropdownOption.value){case"mexican":return r.selectedImage.src="http://localhost:8080/img/burrito.jpg","Mexican";case"asian":return r.selectedImage.src="http://localhost:8080/img/asianbowl.jpg","Asian Cuisine";case"barbq":return r.selectedImage.src="http://localhost:8080/img/barbecue.jpg","Bar-B-Que";case"carribean":return r.selectedImage.src="http://localhost:8080/img/carrotandcucumbersalad.jpg","Carribean"}})(),r.selectedImage.classList.remove("dim-hide")},200)});(()=>{(new d).randomRecipe(!1,1),(new d).randomRecipe(!1,2),(new d).randomRecipe(!1,3)})();let m=1,g=new Map,y=[];const v=new d("newCOTD");v.getRecipe("35169");const w=()=>{if(u(),"random"==r.searchBox.value||""==r.searchBox.value){(new d).randomRecipe(!0)}else{new d(r.searchBox.value).randomRecipe(!0)}(()=>r.searchBox.value="")()};document.addEventListener("click",e=>{if(e.target.matches(".signup-btn, .signup-btn *, .back-to-login, .back-to-login *"))!async function(){document.querySelector(".right-side-header").classList.add("dim-hide"),await c()}();else if(e.target.matches(".search-btn, .search-btn *"))try{w()}catch(e){console.log(e)}else if(e.target.matches(".exit-btn, .exit-btn *"))u();else if(e.target.matches(".random-rec, .random-rec *"))confirm("This link will take you offsite!!!")&&async function(){let e=await a()(`https://www.food2fork.com/api/search?key=${o.myKey2}`),t=s,n=e.data.recipes[t].source_url;window.location=n}();else if(e.target.matches(".random-in-win, .random-in-win *"))r.searchBox.value="random",w();else if(e.target.matches(".join-btn, .join-btn *")){let e=new f;e.fieldsComplete()&&(g.set(e.saveUsername(),e.savePass()),y.push(e.alertName()),document.getElementById("firstName").value="",document.getElementById("location").value="",document.getElementById("username").value="",document.getElementById("password").value="",document.getElementById("password2").value="",e.welcomeUser())}else e.target.matches(".login-btn, .login-btn *")?(e=>{let t=[document.getElementById("un").value,document.getElementById("pw").value];if(e.has(t[0])){let n,r;n=t[0],(r=e.get(n))===t[1]?alert("Welcome Back!"):alert("Username/Password combination is incorrect.")}else alert("That username does not exist.")})(g):e.target.matches("#page-right")?(m++,v.pagination(v.returnIngredients(),m)):e.target.matches("#page-left")?(m--,v.pagination(v.returnIngredients(),m)):e.target.matches(".like-btn")}),document.addEventListener("input",e=>{!async function(){p(),await h()}()})}]);
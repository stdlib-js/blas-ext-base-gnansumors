// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__;function f(e){return e!=e}function c(e,r,t){var n,o,i;if(o=0,e<=0)return o;if(1===e||0===t)return f(r[0])?o:r[0];for(n=t<0?(1-e)*t:0,i=0;i<e;i++)!1===f(r[n])&&(o+=r[n]),n+=t;return o}return e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(a.call(e,r)||l.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e},e(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n){var o,i,u;if(i=0,e<=0)return i;if(1===e||0===t)return f(r[n])?i:r[n];for(o=n,u=0;u<e;u++)!1===f(r[o])&&(i+=r[o]),o+=t;return i}}),c},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).gnansumors=r();
//# sourceMappingURL=index.js.map

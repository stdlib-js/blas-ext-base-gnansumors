// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;var c=t,_=function(r,e,t){var c,_,f,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},f=e()?c:_;var p=function(r){return r!=r},v=p;var b=p;var y=function(r,e,t){var n,o,a;if(o=0,r<=0)return o;if(1===r||0===t)return v(e[0])?o:e[0];for(n=t<0?(1-r)*t:0,a=0;a<r;a++)!1===v(e[n])&&(o+=e[n]),n+=t;return o},d=function(r,e,t,n){var o,a,u;if(a=0,r<=0)return a;if(1===r||0===t)return b(e[n])?a:e[n];for(o=n,u=0;u<r;u++)!1===b(e[o])&&(a+=e[o]),o+=t;return a};(function(r,e,t){f(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})})(y,"ndarray",d);var s=y;export{s as default,d as ndarray};
//# sourceMappingURL=mod.js.map

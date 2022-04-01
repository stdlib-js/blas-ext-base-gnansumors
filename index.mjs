// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";var n=e;var t=e;var s=function(r,e,t){var s,i,a;if(i=0,r<=0)return i;if(1===r||0===t)return n(e[0])?i:e[0];for(s=t<0?(1-r)*t:0,a=0;a<r;a++)!1===n(e[s])&&(i+=e[s]),s+=t;return i},i=function(r,e,n,s){var i,a,d;if(a=0,r<=0)return a;if(1===r||0===n)return t(e[s])?a:e[s];for(i=s,d=0;d<r;d++)!1===t(e[i])&&(a+=e[i]),i+=n;return a};r(s,"ndarray",i);var a=s;export{a as default,i as ndarray};
//# sourceMappingURL=index.mjs.map

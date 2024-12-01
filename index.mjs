// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";function n(r,n,t){var s,i,a;if(i=0,r<=0)return i;if(1===r||0===t)return e(n[0])?i:n[0];for(s=t<0?(1-r)*t:0,a=0;a<r;a++)!1===e(n[s])&&(i+=n[s]),s+=t;return i}function t(r,n,t,s){var i,a,d;if(a=0,r<=0)return a;if(1===r||0===t)return e(n[s])?a:n[s];for(i=s,d=0;d<r;d++)!1===e(n[i])&&(a+=n[i]),i+=t;return a}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map

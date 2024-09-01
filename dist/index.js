"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=t(function(b,v){
var f=require('@stdlib/math-base-assert-is-nan/dist');function p(e,r,u){var a,n,i;if(n=0,e<=0)return n;if(e===1||u===0)return f(r[0])?n:r[0];for(u<0?a=(1-e)*u:a=0,i=0;i<e;i++)f(r[a])===!1&&(n+=r[a]),a+=u;return n}v.exports=p
});var l=t(function(h,q){
var c=require('@stdlib/math-base-assert-is-nan/dist');function y(e,r,u,a){var n,i,s;if(i=0,e<=0)return i;if(e===1||u===0)return c(r[a])?i:r[a];for(n=a,s=0;s<e;s++)c(r[n])===!1&&(i+=r[n]),n+=u;return i}q.exports=y
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=o(),O=l();g(m,"ndarray",O);module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

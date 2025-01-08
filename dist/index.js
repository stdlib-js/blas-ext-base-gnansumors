"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=t(function(R,o){
var f=require('@stdlib/math-base-assert-is-nan/dist');function y(e,r,n,m){var u,a,i;if(e<=0)return 0;if(a=m,n===0)return f(r[a])?0:e*r[a];for(u=0,i=0;i<e;i++)f(r[a])===!1&&(u+=r[a]),a+=n;return u}o.exports=y
});var q=t(function(b,v){
var d=require('@stdlib/strided-base-stride2offset/dist'),p=s();function g(e,r,n){return p(e,r,n,d(e,n))}v.exports=g
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),x=s();l(c,"ndarray",x);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

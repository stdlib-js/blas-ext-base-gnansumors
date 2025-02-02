"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=f(function(B,m){
var q=require('@stdlib/math-base-assert-is-nan/dist');function d(e,r,u,o){var s,a,i,n,t,v;if(s=r.data,a=r.accessors[0],n=o,u===0)return t=a(s,n),q(t)?0:e*t;for(i=0,v=0;v<e;v++)t=a(s,n),q(t)===!1&&(i+=t),n+=u;return i}m.exports=d
});var c=f(function(C,g){
var j=require('@stdlib/array-base-arraylike2object/dist'),y=require('@stdlib/math-base-assert-is-nan/dist'),k=l();function O(e,r,u,o){var s,a,i,n;if(e<=0)return 0;if(i=j(r),i.accessorProtocol)return k(e,i,u,o);if(a=o,u===0)return y(r[a])?0:e*r[a];for(s=0,n=0;n<e;n++)y(r[a])===!1&&(s+=r[a]),a+=u;return s}g.exports=O
});var x=f(function(D,p){
var P=require('@stdlib/strided-base-stride2offset/dist'),R=c();function h(e,r,u){return R(e,r,u,P(e,u))}p.exports=h
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=x(),z=c();w(b,"ndarray",z);module.exports=b;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

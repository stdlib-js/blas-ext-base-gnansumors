"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var l=f(function(B,m){
var q=require('@stdlib/math-base-assert-is-nan/dist');function d(e,r,a,o){var s,u,i,n,t,v;if(s=r.data,u=r.accessors[0],n=o,a===0)return t=u(s,n),q(t)?0:e*t;for(i=0,v=0;v<e;v++)t=u(s,n),q(t)===!1&&(i+=t),n+=a;return i}m.exports=d
});var c=f(function(C,g){
var j=require('@stdlib/array-base-arraylike2object/dist'),y=require('@stdlib/math-base-assert-is-nan/dist'),k=l();function O(e,r,a,o){var s,u,i,n;if(e<=0)return 0;if(i=j(r),i.accessorProtocol)return k(e,i,a,o);if(u=o,a===0)return y(r[u])?0:e*r[u];for(s=0,n=0;n<e;n++)y(r[u])===!1&&(s+=r[u]),u+=a;return s}g.exports=O
});var x=f(function(D,p){
var P=require('@stdlib/strided-base-stride2offset/dist'),R=c();function h(e,r,a){return R(e,r,a,P(e,a))}p.exports=h
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=x(),z=c();w(b,"ndarray",z);module.exports=b;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

"use strict";var t=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(l){throw (e=0, l)}};};var s=t(function(d,n){
var m=require('@stdlib/utils-native-class/dist');function q(r){return m(r)==="[object Arguments]"}n.exports=q
});var a=t(function(w,o){
var p=s(),u;function A(){return p(arguments)}u=A();o.exports=u
});var g=t(function(G,c){
var f=require('@stdlib/assert-has-own-property/dist'),h=require('@stdlib/assert-is-enumerable-property/dist'),b=require('@stdlib/assert-is-array/dist'),v=require('@stdlib/math-base-assert-is-integer/dist'),y=require('@stdlib/constants-uint32-max/dist');function x(r){return r!==null&&typeof r=="object"&&!b(r)&&typeof r.length=="number"&&v(r.length)&&r.length>=0&&r.length<=y&&f(r,"callee")&&!h(r,"callee")}c.exports=x
});var j=a(),C=s(),E=g(),i;j?i=C:i=E;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

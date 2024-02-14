// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var r=e();var t=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function a(e,r){return null!=e&&i.call(e,r)}var n="function"==typeof Symbol?Symbol:void 0,o="function"==typeof n?n.toStringTag:"";var c=r&&"symbol"==typeof Symbol.toStringTag?function(e){var r,i,n;if(null==e)return t.call(e);i=e[o],r=a(e,o);try{e[o]=void 0}catch(r){return t.call(e)}return n=t.call(e),r?e[o]=i:delete e[o],n}:function(e){return t.call(e)};function s(e){return"[object Arguments]"===c(e)}var p=function(){return s(arguments)}(),l="function"==typeof Object.defineProperty?Object.defineProperty:null;var u=Object.defineProperty;function f(e){return"number"==typeof e}function g(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function d(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+g(a):g(a)+e,i&&(e="-"+e)),e}var h=String.prototype.toLowerCase,b=String.prototype.toUpperCase;function w(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!f(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=d(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=d(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===b.call(e.specifier)?b.call(t):h.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function v(e){return"string"==typeof e}var y=Math.abs,m=String.prototype.toLowerCase,_=String.prototype.toUpperCase,E=String.prototype.replace,k=/e\+(\d)$/,x=/e-(\d)$/,S=/^(\d+)$/,j=/^(\d+)e/,V=/\.0$/,I=/\.0*e/,T=/(\..*[^0])0*e/;function $(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!f(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":y(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=E.call(t,T,"$1e"),t=E.call(t,I,"e"),t=E.call(t,V,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=E.call(t,k,"e+0$1"),t=E.call(t,x,"e-0$1"),e.alternate&&(t=E.call(t,S,"$1."),t=E.call(t,j,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===_.call(e.specifier)?_.call(t):m.call(t)}function F(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function A(e,r,t){var i=r-e.length;return i<0?e:e=t?e+F(i):F(i)+e}var O=String.fromCharCode,C=isNaN,P=Array.isArray;function R(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Z(e){var r,t,i,a,n,o,c,s,p;if(!P(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(v(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=R(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,C(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,C(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=w(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!C(i.arg)){if((n=parseInt(i.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=C(n)?String(i.arg):O(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=$(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=d(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=A(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function W(e){var r,t,i,a;for(t=[],a=0,i=G.exec(e);i;)(r=e.slice(a,G.lastIndex-i[0].length)).length&&t.push(r),t.push(N(i)),a=G.lastIndex,i=G.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function L(e){return"string"==typeof e}function U(e){var r,t;if(!L(e))throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[W(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Z.apply(null,r)}var X=Object.prototype,M=X.toString,z=X.__defineGetter__,Y=X.__defineSetter__,q=X.__lookupGetter__,B=X.__lookupSetter__;var D=function(){try{return l({},"x",{}),!0}catch(e){return!1}}()?u:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(q.call(e,r)||B.call(e,r)?(i=e.__proto__,e.__proto__=X,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&z&&z.call(e,r,t.get),o&&Y&&Y.call(e,r,t.set),e};function H(e,r,t){D(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function J(e){return"string"==typeof e}var K=e();var Q=String.prototype.valueOf;var ee=K&&"symbol"==typeof Symbol.toStringTag;function re(e){return"object"==typeof e&&(e instanceof String||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object String]"===c(e)))}function te(e){return J(e)||re(e)}H(te,"isPrimitive",J),H(te,"isObject",re);var ie="function"==typeof Object.defineProperty?Object.defineProperty:null;var ae=Object.defineProperty;function ne(e){return"number"==typeof e}function oe(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ce(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+oe(a):oe(a)+e,i&&(e="-"+e)),e}var se=String.prototype.toLowerCase,pe=String.prototype.toUpperCase;function le(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ne(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ce(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ce(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===pe.call(e.specifier)?pe.call(t):se.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ue(e){return"string"==typeof e}var fe=Math.abs,ge=String.prototype.toLowerCase,de=String.prototype.toUpperCase,he=String.prototype.replace,be=/e\+(\d)$/,we=/e-(\d)$/,ve=/^(\d+)$/,ye=/^(\d+)e/,me=/\.0$/,_e=/\.0*e/,Ee=/(\..*[^0])0*e/;function ke(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ne(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":fe(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=he.call(t,Ee,"$1e"),t=he.call(t,_e,"e"),t=he.call(t,me,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=he.call(t,be,"e+0$1"),t=he.call(t,we,"e-0$1"),e.alternate&&(t=he.call(t,ve,"$1."),t=he.call(t,ye,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===de.call(e.specifier)?de.call(t):ge.call(t)}function xe(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Se(e,r,t){var i=r-e.length;return i<0?e:e=t?e+xe(i):xe(i)+e}var je=String.fromCharCode,Ve=isNaN,Ie=Array.isArray;function Te(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $e(e){var r,t,i,a,n,o,c,s,p;if(!Ie(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(ue(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Te(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ve(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ve(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=le(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ve(i.arg)){if((n=parseInt(i.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ve(n)?String(i.arg):je(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=ke(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ce(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Se(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Fe=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ae(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Oe(e){var r,t,i,a;for(t=[],a=0,i=Fe.exec(e);i;)(r=e.slice(a,Fe.lastIndex-i[0].length)).length&&t.push(r),t.push(Ae(i)),a=Fe.lastIndex,i=Fe.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function Ce(e){return"string"==typeof e}function Pe(e){var r,t;if(!Ce(e))throw new TypeError(Pe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Oe(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return $e.apply(null,r)}var Re=Object.prototype,Ze=Re.toString,Ge=Re.__defineGetter__,Ne=Re.__defineSetter__,We=Re.__lookupGetter__,Le=Re.__lookupSetter__;var Ue=function(){try{return ie({},"x",{}),!0}catch(e){return!1}}()?ae:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===Ze.call(e))throw new TypeError(Pe("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Ze.call(t))throw new TypeError(Pe("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(We.call(e,r)||Le.call(e,r)?(i=e.__proto__,e.__proto__=Re,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&Ge&&Ge.call(e,r,t.get),o&&Ne&&Ne.call(e,r,t.set),e};function Xe(e,r,t){Ue(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Me="function"==typeof Object.defineProperty?Object.defineProperty:null;var ze=Object.defineProperty;function Ye(e){return"number"==typeof e}function qe(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Be(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+qe(a):qe(a)+e,i&&(e="-"+e)),e}var De=String.prototype.toLowerCase,He=String.prototype.toUpperCase;function Je(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Ye(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Be(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Be(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===He.call(e.specifier)?He.call(t):De.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ke(e){return"string"==typeof e}var Qe=Math.abs,er=String.prototype.toLowerCase,rr=String.prototype.toUpperCase,tr=String.prototype.replace,ir=/e\+(\d)$/,ar=/e-(\d)$/,nr=/^(\d+)$/,or=/^(\d+)e/,cr=/\.0$/,sr=/\.0*e/,pr=/(\..*[^0])0*e/;function lr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Ye(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Qe(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=tr.call(t,pr,"$1e"),t=tr.call(t,sr,"e"),t=tr.call(t,cr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=tr.call(t,ir,"e+0$1"),t=tr.call(t,ar,"e-0$1"),e.alternate&&(t=tr.call(t,nr,"$1."),t=tr.call(t,or,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===rr.call(e.specifier)?rr.call(t):er.call(t)}function ur(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function fr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+ur(i):ur(i)+e}var gr=String.fromCharCode,dr=isNaN,hr=Array.isArray;function br(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function wr(e){var r,t,i,a,n,o,c,s,p;if(!hr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Ke(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=br(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,dr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,dr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Je(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!dr(i.arg)){if((n=parseInt(i.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=dr(n)?String(i.arg):gr(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=lr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Be(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=fr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var vr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function yr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function mr(e){var r,t,i,a;for(t=[],a=0,i=vr.exec(e);i;)(r=e.slice(a,vr.lastIndex-i[0].length)).length&&t.push(r),t.push(yr(i)),a=vr.lastIndex,i=vr.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function _r(e){return"string"==typeof e}function Er(e){var r,t;if(!_r(e))throw new TypeError(Er("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[mr(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return wr.apply(null,r)}var kr=Object.prototype,xr=kr.toString,Sr=kr.__defineGetter__,jr=kr.__defineSetter__,Vr=kr.__lookupGetter__,Ir=kr.__lookupSetter__;var Tr=function(){try{return Me({},"x",{}),!0}catch(e){return!1}}()?ze:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===xr.call(e))throw new TypeError(Er("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===xr.call(t))throw new TypeError(Er("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(Vr.call(e,r)||Ir.call(e,r)?(i=e.__proto__,e.__proto__=kr,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&Sr&&Sr.call(e,r,t.get),o&&jr&&jr.call(e,r,t.set),e};function $r(e,r,t){Tr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Fr(e){return"number"==typeof e}var Ar=e();var Or=Number,Cr=Or.prototype.toString;var Pr=Ar&&"symbol"==typeof Symbol.toStringTag;function Rr(e){return"object"==typeof e&&(e instanceof Or||(Pr?function(e){try{return Cr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===c(e)))}function Zr(e){return Fr(e)||Rr(e)}function Gr(e){return e!=e}function Nr(e){return Fr(e)&&Gr(e)}function Wr(e){return Rr(e)&&Gr(e.valueOf())}function Lr(e){return Nr(e)||Wr(e)}$r(Zr,"isPrimitive",Fr),$r(Zr,"isObject",Rr),Xe(Lr,"isPrimitive",Nr),Xe(Lr,"isObject",Wr);var Ur="function"==typeof Object.defineProperty?Object.defineProperty:null;var Xr=Object.defineProperty;function Mr(e){return"number"==typeof e}function zr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Yr(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+zr(a):zr(a)+e,i&&(e="-"+e)),e}var qr=String.prototype.toLowerCase,Br=String.prototype.toUpperCase;function Dr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Mr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Yr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Yr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Br.call(e.specifier)?Br.call(t):qr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Hr(e){return"string"==typeof e}var Jr=Math.abs,Kr=String.prototype.toLowerCase,Qr=String.prototype.toUpperCase,et=String.prototype.replace,rt=/e\+(\d)$/,tt=/e-(\d)$/,it=/^(\d+)$/,at=/^(\d+)e/,nt=/\.0$/,ot=/\.0*e/,ct=/(\..*[^0])0*e/;function st(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Mr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Jr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=et.call(t,ct,"$1e"),t=et.call(t,ot,"e"),t=et.call(t,nt,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=et.call(t,rt,"e+0$1"),t=et.call(t,tt,"e-0$1"),e.alternate&&(t=et.call(t,it,"$1."),t=et.call(t,at,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Qr.call(e.specifier)?Qr.call(t):Kr.call(t)}function pt(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function lt(e,r,t){var i=r-e.length;return i<0?e:e=t?e+pt(i):pt(i)+e}var ut=String.fromCharCode,ft=isNaN,gt=Array.isArray;function dt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ht(e){var r,t,i,a,n,o,c,s,p;if(!gt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Hr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=dt(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,ft(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,ft(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Dr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!ft(i.arg)){if((n=parseInt(i.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=ft(n)?String(i.arg):ut(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=st(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Yr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=lt(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var bt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function wt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function vt(e){var r,t,i,a;for(t=[],a=0,i=bt.exec(e);i;)(r=e.slice(a,bt.lastIndex-i[0].length)).length&&t.push(r),t.push(wt(i)),a=bt.lastIndex,i=bt.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function yt(e){return"string"==typeof e}function mt(e){var r,t;if(!yt(e))throw new TypeError(mt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[vt(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return ht.apply(null,r)}var _t=Object.prototype,Et=_t.toString,kt=_t.__defineGetter__,xt=_t.__defineSetter__,St=_t.__lookupGetter__,jt=_t.__lookupSetter__;var Vt=function(){try{return Ur({},"x",{}),!0}catch(e){return!1}}()?Xr:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===Et.call(e))throw new TypeError(mt("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Et.call(t))throw new TypeError(mt("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(St.call(e,r)||jt.call(e,r)?(i=e.__proto__,e.__proto__=_t,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&kt&&kt.call(e,r,t.get),o&&xt&&xt.call(e,r,t.set),e};function It(e,r,t){Vt(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Tt=Number.POSITIVE_INFINITY,$t=Or.NEGATIVE_INFINITY,Ft=Math.floor;function At(e){return Ft(e)===e}function Ot(e){return e<Tt&&e>$t&&At(e)}function Ct(e){return Fr(e)&&Ot(e)}function Pt(e){return Rr(e)&&Ot(e.valueOf())}function Rt(e){return Ct(e)||Pt(e)}It(Rt,"isPrimitive",Ct),It(Rt,"isObject",Pt);var Zt=Object.prototype.propertyIsEnumerable;var Gt=!Zt.call("beep","0");var Nt,Wt=Array.isArray?Array.isArray:function(e){return"[object Array]"===c(e)};Nt=p?s:function(e){return null!==e&&"object"==typeof e&&!Wt(e)&&"number"==typeof e.length&&At(e.length)&&e.length>=0&&e.length<=4294967295&&a(e,"callee")&&!function(e,r){var t;return null!=e&&(!(t=Zt.call(e,r))&&Gt&&te(e)?!Nr(r=+r)&&Ct(r)&&r>=0&&r<e.length:t)}(e,"callee")};var Lt=Nt;export{Lt as default};
//# sourceMappingURL=mod.js.map

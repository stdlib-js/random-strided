// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e,r,t,i,d,n,o,a,l,s){"use strict";var u="function"==typeof Object.defineProperty?Object.defineProperty:null,m=Object.defineProperty,b=Object.prototype,c=b.toString,f=b.__defineGetter__,p=b.__defineSetter__,_=b.__lookupGetter__,y=b.__lookupSetter__,g=function(){try{return u({},"x",{}),!0}catch(e){return!1}}()?m:function(e,r,t){var i,d,n,o;if("object"!=typeof e||null===e||"[object Array]"===c.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===c.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((d="value"in t)&&(_.call(e,r)||y.call(e,r)?(i=e.__proto__,e.__proto__=b,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,d&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&f&&f.call(e,r,t.get),o&&p&&p.call(e,r,t.set),e};function v(e,r,t){g(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var j={};return v(j,"arcsine",e),v(j,"beta",r),v(j,"discreteUniform",t),v(j,"exponential",i),v(j,"lognormal",d),v(j,"minstd",n),v(j,"mt19937",o),v(j,"normal",a),v(j,"randu",l),v(j,"uniform",s),j},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("@stdlib/random-strided-arcsine"),require("@stdlib/random-strided-beta"),require("@stdlib/random-strided-discrete-uniform"),require("@stdlib/random-strided-exponential"),require("@stdlib/random-strided-lognormal"),require("@stdlib/random-strided-minstd"),require("@stdlib/random-strided-mt19937"),require("@stdlib/random-strided-normal"),require("@stdlib/random-strided-randu"),require("@stdlib/random-strided-uniform")):"function"==typeof define&&define.amd?define(["@stdlib/random-strided-arcsine","@stdlib/random-strided-beta","@stdlib/random-strided-discrete-uniform","@stdlib/random-strided-exponential","@stdlib/random-strided-lognormal","@stdlib/random-strided-minstd","@stdlib/random-strided-mt19937","@stdlib/random-strided-normal","@stdlib/random-strided-randu","@stdlib/random-strided-uniform"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r(e.arcsine,e.beta,e.discreteUniform,e.exponential,e.lognormal,e.minstd,e.mt19937,e.normal,e.randu,e.uniform);
//# sourceMappingURL=index.js.map

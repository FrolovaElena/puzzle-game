(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+iL7":function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},"/dUa":function(t,n,e){var r=e("MoOl"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},"0K2p":function(t,n,e){var r=e("nEaP"),o=e("nHIk"),i=e("tF07"),c=e("Ya6V"),u=e("/dUa"),a=e("SkE4"),f=a.get,s=a.enforce,p=String(String).split("String");(t.exports=function(t,n,e,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,l=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=p.join("string"==typeof n?n:"")),t!==r?(a?!l&&t[n]&&(f=!0):delete t[n],f?t[n]=e:o(t,n,e)):f?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},"3pC9":function(t,n,e){var r=e("gIo2"),o=e("nrda"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},"41Zj":function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},"8OJN":function(t,n,e){var r=e("tF07"),o=e("M/tt"),i=e("kMPr").indexOf,c=e("s3NK");t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},"9nX2":function(t,n,e){var r=e("+iL7"),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},"9pAD":function(t,n,e){var r=e("Qean");t.exports=function(t){return Object(r(t))}},DJGK:function(t,n,e){var r=e("+iL7"),o=e("fSIz"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},Fup7:function(t,n,e){var r=e("Hvpk"),o=e("41Zj"),i=e("VSW8"),c=e("M/tt"),u=e("W9fh"),a=e("tF07"),f=e("xwiM"),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},HRgQ:function(t,n,e){var r=e("nEaP"),o=e("fT8P"),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},Hvpk:function(t,n,e){var r=e("+iL7");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},JRM0:function(t,n,e){var r=e("nEaP"),o=e("Fup7").f,i=e("nHIk"),c=e("0K2p"),u=e("Ya6V"),a=e("v0JE"),f=e("9nX2");t.exports=function(t,n){var e,s,p,l,v,d=t.target,g=t.global,h=t.stat;if(e=g?r:h?r[d]||u(d,{}):(r[d]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(g?s:d+(h?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),c(e,s,l,t)}}},L1EO:function(t,n,e){},LMdw:function(t,n,e){var r=e("UVdV"),o=e("OVha"),i=e("rk7W"),c=e("gDYM");t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},"M/tt":function(t,n,e){var r=e("DJGK"),o=e("Qean");t.exports=function(t){return r(o(t))}},MoOl:function(t,n,e){var r=e("nEaP"),o=e("Ya6V"),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},OVha:function(t,n,e){var r=e("8OJN"),o=e("ek/P").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},P2u4:function(t,n,e){var r=e("nEaP"),o=e("/dUa"),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},PCqT:function(t,n){t.exports=!1},Qean:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},QfWi:function(t,n,e){"use strict";e.r(n);e("aOEW"),e("L1EO");var r=null,o=null;function i(t,n,e){var r=f.container;r.style.gridTemplateColumns="repeat("+n+", 1fr)",r.style.gridTemplateRows="repeat("+t+", 1fr)";for(var o=r.offsetWidth,i=r.offsetHeight,c=[],u=0,a=0;a<n;a++)for(var s=0;s<t;s++){u++;var p=document.createElement("div");p.classList.add("puzzle-item"),p.style.backgroundImage="url("+e+")",p.style.backgroundSize=o+"px "+i+"px",p.style.backgroundPositionX=o/n*a+"px",p.style.backgroundPositionY=i/t*s+"px";var l=document.createElement("span");l.style.color="blue",l.style.backgroundColor="white",l.textContent=""+u,p.appendChild(l),c.push(p)}var v=c.sort((function(){return Math.random()-.5}));r.append.apply(r,v)}function c(t){"puzzle-container"!==t.target.class&&((r=t.target).classList.add("selected-item"),f.container.removeEventListener("click",c),f.container.addEventListener("click",u))}function u(t){t.target!==r&&"puzzle-container"!==t.target?((o=t.target).classList.add("selected-item"),function(){var t=r.nextSibling,n=r.previousSibling;if(o.replaceWith(r),null===n)return f.container.prepend(o),void a();if(null===t)return f.container.append(o),void a();t===o?(n.after(o),a()):(t.before(o),a())}()):(r.classList.remove("selected-item"),r=null),f.container.removeEventListener("click",u),f.container.addEventListener("click",c)}function a(){r.classList.remove("selected-item"),o.classList.remove("selected-item"),r=null,o=null}var f={container:document.querySelector(".puzzle-container"),containerBtn:document.querySelector(".buttons-container")};f.container.addEventListener("click",c),f.containerBtn.addEventListener("click",(function(t){if("BUTTON"===t.target.nodeName)switch(f.container.innerHTML="",console.log(t.target.id),t.target.id){case"cake-btn":i(3,4,"https://avatars.mds.yandex.net/get-pdb/1025945/ff5df732-8bcc-481c-9acf-5f887996a86a/s1200?webp=false");break;case"bus-btn":i(3,4,"https://os1.i.ua/3/1/13366463_43f431c8.jpg");break;case"store-btn":i(3,4,"https://gorod-novoross.ru/foto_dop/thumbs/-dlkugqfyv986mje0io4rzpct.jpg")}}))},SkE4:function(t,n,e){var r,o,i,c=e("P2u4"),u=e("nEaP"),a=e("fT8P"),f=e("nHIk"),s=e("tF07"),p=e("3pC9"),l=e("s3NK"),v=u.WeakMap;if(c){var d=new v,g=d.get,h=d.has,y=d.set;r=function(t,n){return y.call(d,t,n),n},o=function(t){return g.call(d,t)||{}},i=function(t){return h.call(d,t)}}else{var b=p("state");l[b]=!0,r=function(t,n){return f(t,b,n),n},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},UVdV:function(t,n,e){var r=e("lUv3"),o=e("nEaP"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},VSW8:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},W9fh:function(t,n,e){var r=e("fT8P");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},Ya6V:function(t,n,e){var r=e("nEaP"),o=e("nHIk");t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},aOEW:function(t,n,e){"use strict";var r=e("JRM0"),o=e("jmUq"),i=e("9pAD"),c=e("+iL7"),u=e("fK/z"),a=[],f=a.sort,s=c((function(){a.sort(void 0)})),p=c((function(){a.sort(null)})),l=u("sort");r({target:"Array",proto:!0,forced:s||!p||!l},{sort:function(t){return void 0===t?f.call(i(this)):f.call(i(this),o(t))}})},"ek/P":function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"fK/z":function(t,n,e){"use strict";var r=e("+iL7");t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},fSIz:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},fT8P:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},gDYM:function(t,n,e){var r=e("fT8P");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},gIo2:function(t,n,e){var r=e("PCqT"),o=e("MoOl");(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},glsI:function(t,n,e){var r=e("wTAb"),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},jmUq:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},kMPr:function(t,n,e){var r=e("M/tt"),o=e("zrDt"),i=e("glsI"),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},lUv3:function(t,n,e){var r=e("nEaP");t.exports=r},nEaP:function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e("pCvA"))},nHIk:function(t,n,e){var r=e("Hvpk"),o=e("nRc6"),i=e("VSW8");t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},nRc6:function(t,n,e){var r=e("Hvpk"),o=e("xwiM"),i=e("gDYM"),c=e("W9fh"),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},nrda:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},pCvA:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},rk7W:function(t,n){n.f=Object.getOwnPropertySymbols},s3NK:function(t,n){t.exports={}},tF07:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},v0JE:function(t,n,e){var r=e("tF07"),o=e("LMdw"),i=e("Fup7"),c=e("nRc6");t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},wTAb:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},xwiM:function(t,n,e){var r=e("Hvpk"),o=e("+iL7"),i=e("HRgQ");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},zrDt:function(t,n,e){var r=e("wTAb"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}}},[["QfWi",1]]]);
//# sourceMappingURL=main.3a19c0aaaec8db5ad4d0.js.map
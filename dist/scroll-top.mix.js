!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(self,(()=>(()=>{"use strict";var e={312:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(81),r=n.n(o),i=n(645),s=n.n(i)()(r());s.push([e.id,".st-scrolltop-wrap {\n  display: block;\n  font-size: 1rem;\n  box-sizing: border-box;\n}\n.st-scrolltop-wrap > .st-scrolltop {\n  background-color: rgb(98, 138, 199);\n  opacity: 0;\n  height: 3.75em;\n  width: 3.75em;\n  bottom: 2.18em;\n  right: 1.25em;\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  position: fixed;\n  cursor: pointer;\n  text-align: center;\n  z-index: 9999;\n  box-sizing: inherit;\n  font-size: inherit;\n  transition: opacity 0.5s ease;\n}\n.st-scrolltop-wrap > .st-scrolltop:hover {\n  background-color: rgb(103, 153, 232);\n  opacity: 0.7 !important;\n  transition: none;\n}\n.st-scrolltop-wrap > .st-scrolltop > .st-arrow {\n  border: solid white;\n  border-width: 0 0.2em 0.2em 0;\n  display: inline-block;\n  padding: 0.5em;\n  margin-top: 1.56em;\n  transform: rotate(-135deg);\n  -webkit-transform: rotate(-135deg);\n  box-sizing: inherit;\n  font-size: inherit;\n}\n\n@media (max-width: 2000px) {\n  .st-scrolltop-wrap {\n    font-size: 0.875rem;\n  }\n}\n@media (max-width: 1200px) {\n  .st-scrolltop-wrap {\n    font-size: 0.75rem;\n  }\n}\n@media (max-width: 900px) {\n  .st-scrolltop-wrap {\n    font-size: 0.625rem;\n  }\n}",""]);const l=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(s[a]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);o&&s[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},35:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var o=n(379),r=n.n(o),i=n(795),s=n.n(i),l=n(569),a=n.n(l),d=n(565),c=n.n(d),u=n(216),p=n.n(u),f=n(589),h=n.n(f),m=n(312),v={};v.styleTagTransform=h(),v.setAttributes=c(),v.insert=a().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=p(),r()(m.Z,v);const y=m.Z&&m.Z.locals?m.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},s=[],l=0;l<e.length;l++){var a=e[l],d=o.base?a[0]+o.base:a[0],c=i[d]||0,u="".concat(d," ").concat(c);i[d]=c+1;var p=n(u),f={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=r(f,o);o.byIndex=l,t.splice(l,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var l=n(i[s]);t[l].references--}for(var a=o(e,r),d=0;d<i.length;d++){var c=n(i[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=a}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},303:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollTop=void 0,t.ScrollTop=class{constructor(){this.scrollBase=100,this.elementId="shScrollTop",this.displaying=!1,this.isDebug=!1,this.isLoaded=!1,this.isDomLoadedEventBinded=!1,this.isRunningScrollRaf=!1}load(e){if(this.setOptions(e),!this.isLoaded&&"function"==typeof requestAnimationFrame&&void 0!==window.scrollY)if(this.isDomLoadedEventBinded){window.addEventListener("scroll",this.scrollEventHandler);const e=document.getElementById(this.elementId);e&&(e.style.display="block"),this.isLoaded=!0}else document.addEventListener("DOMContentLoaded",(()=>{var e;this.insertSymbolHTML(),this.scrollEventHandler=()=>this.scrollAnimate(),window.addEventListener("scroll",this.scrollEventHandler),null===(e=document.getElementById(this.elementId))||void 0===e||e.addEventListener("click",(e=>{this.scrollToTop()}))})),this.isDomLoadedEventBinded=!0,this.isLoaded=!0}unload(){if(!this.isLoaded)return;window.removeEventListener("scroll",this.scrollEventHandler),this.isLoaded=!1;const e=document.getElementById(this.elementId);e&&(e.style.opacity="0",e.style.display="none"),this.displaying=!1}setOptions(e){e&&(e.base&&(this.scrollBase=e.base),e.isDebug&&(this.isDebug=e.isDebug))}scrollAnimate(){this.isRunningScrollRaf||(this.isRunningScrollRaf=!0,requestAnimationFrame((()=>{this.fadeInOutByScrollY(this.getScrollY()),this.isRunningScrollRaf=!1})))}insertSymbolHTML(){var e;const t=`<div class="st-scrolltop-wrap"><div id="${this.elementId}" class="st-scrolltop">\n        <div class="st-arrow"></div>\n      </div></div>`;null===(e=document.querySelector("body"))||void 0===e||e.insertAdjacentHTML("beforeend",t)}fadeInOutByScrollY(e){if(void 0!==e){if(this.isDebug&&this.debugLog("scroll Y : ",e),e>this.scrollBase){if(!1===this.displaying){const e=document.getElementById(this.elementId);e&&(e.style.opacity="0.3"),this.displaying=!0}}else if(!0===this.displaying){const e=document.getElementById(this.elementId);e&&(e.style.opacity="0"),this.displaying=!1}}else this.isDebug&&this.debugLog("scroll Y is undefined")}getScrollY(){return window.scrollY}scrollToTop(){if("scrollBehavior"in document.documentElement.style)this.debugLog("scrollToTop(). behavior smooth."),window.scroll({top:0,behavior:"smooth"});else{this.debugLog("scrollToTop(). smoothScroll().");const e=t=>{const n=t||0;n>10?setTimeout((()=>{window.scrollTo(0,n),e(.9*n)}),10):window.scrollTo(0,0)};e(this.getScrollY())}}debugLog(...e){if(!this.isDebug)return;const t=e.map((e=>"object"==typeof e?JSON.parse(JSON.stringify(e)):e));console.log("[ScrollTop]",...t)}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var o={};return(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),n(35),(new(n(303).ScrollTop)).load()})(),o})()));
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(self,(function(){return function(){"use strict";var t={312:function(t,e,n){var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([t.id,".st-scrolltop-wrap {\n  display: block;\n  font-size: 1rem;\n  box-sizing: border-box;\n}\n.st-scrolltop-wrap > .scrolltop {\n  background-color: rgb(98, 138, 199);\n  opacity: 0.3;\n  height: 3.75em;\n  width: 3.75em;\n  bottom: 2.18em;\n  right: 1.25em;\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  position: fixed;\n  cursor: pointer;\n  text-align: center;\n  z-index: 9999;\n  box-sizing: inherit;\n  font-size: inherit;\n}\n.st-scrolltop-wrap > .scrolltop:hover {\n  background-color: rgb(103, 153, 232);\n  opacity: 0.7 !important;\n}\n.st-scrolltop-wrap > .scrolltop > .arrow {\n  border: solid white;\n  border-width: 0 0.2em 0.2em 0;\n  display: inline-block;\n  padding: 0.5em;\n  margin-top: 1.56em;\n  transform: rotate(-135deg);\n  -webkit-transform: rotate(-135deg);\n  box-sizing: inherit;\n  font-size: inherit;\n}\n\n@media (max-width: 1200px) {\n  .st-scrolltop-wrap {\n    font-size: 0.875rem;\n  }\n}\n@media (max-width: 900px) {\n  .st-scrolltop-wrap {\n    font-size: 0.75rem;\n  }\n}",""]),e.Z=a},645:function(t){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:function(t){t.exports=function(t){return t[1]}},379:function(t){var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],s=0;s<t.length;s++){var c=t[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=n(i[a]);e[s].references--}for(var c=o(t,r),l=0;l<i.length;l++){var d=n(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:function(t){var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:function(t){t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:function(t,e,n){t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:function(t){t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:function(t){t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nc=void 0;var o={};return function(){n.r(o);var t=n(379),e=n.n(t),r=n(795),i=n.n(r),a=n(569),s=n.n(a),c=n(565),l=n.n(c),d=n(216),u=n.n(d),p=n(589),f=n.n(p),m=n(312),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),e()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals,new(function(){function t(){var t=this;this.scrollBase=100,this.ticking=!1,this.displaying=!1,this.arrowId="shScrollTop",this.isDebug=!0,document.addEventListener("DOMContentLoaded",(function(){t.load()}))}return t.prototype.load=function(){var t,e=this;"function"==typeof requestAnimationFrame&&(this.insertArrowHTML(),window.addEventListener("scroll",(function(t){e.ticking||(window.requestAnimationFrame((function(){e.scrollEvent(e.getScrollY()),e.ticking=!1})),e.ticking=!0)})),null===(t=document.getElementById(this.arrowId))||void 0===t||t.addEventListener("click",(function(){e.scrollToTop()})))},t.prototype.scrollToTop=function(){if("scrollBehavior"in document.documentElement.style)this.debugLog("scrollToTop(). behavior smooth."),window.scroll({top:0,behavior:"smooth"});else{this.debugLog("scrollToTop(). smoothScroll().");var t=function(e){var n=e||0;n>10?setTimeout((function(){window.scrollTo(0,n),t(.9*n)}),10):window.scrollTo(0,0)};t(this.getScrollY())}},t.prototype.insertArrowHTML=function(){var t,e='<div class="st-scrolltop-wrap"><div id="'.concat(this.arrowId,'" class="scrolltop" style="display:none">\n\t\t<div class="arrow"></div>\n\t  </div></div>');null===(t=document.querySelector("body"))||void 0===t||t.insertAdjacentHTML("beforeend",e)},t.prototype.scrollEvent=function(t){if(void 0===t&&this.debugLog("scroll Y : ".concat(t)),t>this.scrollBase){if(!1===this.displaying){var e=document.getElementById(this.arrowId);this.fadeIn(e,.3),this.displaying=!0}}else!0===this.displaying&&(e=document.getElementById(this.arrowId),this.fadeOut(e),this.displaying=!1)},t.prototype.getScrollY=function(){return window.pageYOffset},t.prototype.getScrollY_Legacy=function(){var t=void 0!==window.pageXOffset,e="CSS1Compat"===(document.compatMode||"");return t?window.pageYOffset:e?document.documentElement.scrollTop:document.body.scrollTop},t.prototype.fadeIn=function(t,e,n,o){if(void 0===e&&(e=1),void 0===n&&(n=!0),void 0===o&&(o="block"),t)if(t.style.opacity=0,t.style.display=o,n){var r,i=0,a=function(){r=requestAnimationFrame(a),(i+=.02)>=e&&(i=e,cancelAnimationFrame(r)),t.style.opacity=i};a()}else t.style.opacity=1},t.prototype.fadeOut=function(t,e,n){if(void 0===e&&(e=!0),void 0===n&&(n="none"),t)if(e){var o,r=t.style.opacity,i=function(){o=requestAnimationFrame(i),(r-=.04)<=0&&(r=0,t.style.display=n,cancelAnimationFrame(o)),t.style.opacity=r};i()}else t.style.opacity=0},t.prototype.debugLog=function(t){this.isDebug&&console.log("[ScrollTop] ",t)},t}())}(),o}()}));
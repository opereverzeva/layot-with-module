parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qK9B":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function e(i){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;t(this,e),this.fun=i,this.timeout=n,this.id,this.isStopped=!0}return i(e,[{key:"__time",value:function(){var t=this;this.isStopped||(this.id=setTimeout(function(){t.fun(),t.__time()},this.timeout))}},{key:"start",value:function(){!1!==this.isStopped&&(this.isStopped=!1,this.__time())}},{key:"stop",value:function(){this.isStopped=!0,clearTimeout(this.id)}}]),e}(),o=function(t,e){var i=new n(t,e);return i.start(),i};exports.default=o;
},{}],"Y5Mt":[function(require,module,exports) {
"use strict";var e=t(require("./Ticker"));function t(e){return e&&e.__esModule?e:{default:e}}$(".contact__feedback").click(function(e){e.preventDefault(),$(".overlay").fadeIn(400,function(){$(".modal").fadeIn(400,function(){})})}),$(".window__close, .overlay").click(function(){$(".modal").fadeOut(400,function(){$(".overlay").fadeOut(400)})}),$(".feedback__button").click(function(e){$(".feedback__form").trigger("reset")});var n=$(".slide"),o=$.makeArray(n),i=o.length;function a(e){for(var t=0;t<e.length;t++)if($(e[t]).hasClass("slide_active"))var n=t;return n}function r(e){return e>=i?e=0:e<0?e=i-1:e}function c(e){var t=r(a(o)+e);$(".slide_active").removeClass("slide_active"),$(".slide").eq(t).addClass("slide_active")}function l(){for(var e=0;e<o.length;e++);}console.log(o,i),console.log(a(o)),$(".slider__button").click(function(e){c($(e.target).hasClass("slider__pre")?-1:1)});var u=(0,e.default)(function(){c(1)},4e3);$(".slider__button").on("mouseover",function(){u.stop()}),$(".slider__button").on("mouseout",function(){u.start()});
},{"./Ticker":"qK9B"}]},{},["Y5Mt"], null)
//# sourceMappingURL=/js.2492fcee.js.map
/*!
 * @rozelin/matter-tools 1.0.2 by @Rozelin
 * https://github.com/Rozelin-dc/matter-tools
 * License MIT
 *
 * The MIT License (MIT)
 *
 * Copyright (c) Rozelin.
 *
 * This software is a modified version of the original software licensed under
 * the MIT License. Original copyright (c) Liam Brummitt. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@rozelin/matter-ts"));
	else if(typeof define === 'function' && define.amd)
		define("MatterTools", ["@rozelin/matter-ts"], factory);
	else if(typeof exports === 'object')
		exports["MatterTools"] = factory(require("@rozelin/matter-ts"));
	else
		root["MatterTools"] = root["MatterTools"] || {}, root["MatterTools"]["Demo"] = factory(root["Matter"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__381__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 13:
/***/ (function(__unused_webpack_module, exports) {

/**
 * dat-gui JavaScript Controller Library
 * https://github.com/dataarts/dat.gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function(e,t){ true?t(exports):0}(this,function(e){"use strict";function t(e,t){var n=e.__state.conversionName.toString(),o=Math.round(e.r),i=Math.round(e.g),r=Math.round(e.b),s=e.a,a=Math.round(e.h),l=e.s.toFixed(1),d=e.v.toFixed(1);if(t||"THREE_CHAR_HEX"===n||"SIX_CHAR_HEX"===n){for(var c=e.hex.toString(16);c.length<6;)c="0"+c;return"#"+c}return"CSS_RGB"===n?"rgb("+o+","+i+","+r+")":"CSS_RGBA"===n?"rgba("+o+","+i+","+r+","+s+")":"HEX"===n?"0x"+e.hex.toString(16):"RGB_ARRAY"===n?"["+o+","+i+","+r+"]":"RGBA_ARRAY"===n?"["+o+","+i+","+r+","+s+"]":"RGB_OBJ"===n?"{r:"+o+",g:"+i+",b:"+r+"}":"RGBA_OBJ"===n?"{r:"+o+",g:"+i+",b:"+r+",a:"+s+"}":"HSV_OBJ"===n?"{h:"+a+",s:"+l+",v:"+d+"}":"HSVA_OBJ"===n?"{h:"+a+",s:"+l+",v:"+d+",a:"+s+"}":"unknown format"}function n(e,t,n){Object.defineProperty(e,t,{get:function(){return"RGB"===this.__state.space?this.__state[t]:(I.recalculateRGB(this,t,n),this.__state[t])},set:function(e){"RGB"!==this.__state.space&&(I.recalculateRGB(this,t,n),this.__state.space="RGB"),this.__state[t]=e}})}function o(e,t){Object.defineProperty(e,t,{get:function(){return"HSV"===this.__state.space?this.__state[t]:(I.recalculateHSV(this),this.__state[t])},set:function(e){"HSV"!==this.__state.space&&(I.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=e}})}function i(e){if("0"===e||S.isUndefined(e))return 0;var t=e.match(U);return S.isNull(t)?0:parseFloat(t[1])}function r(e){var t=e.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}function s(e,t){var n=Math.pow(10,t);return Math.round(e*n)/n}function a(e,t,n,o,i){return o+(e-t)/(n-t)*(i-o)}function l(e,t,n,o){e.style.background="",S.each(ee,function(i){e.style.cssText+="background: "+i+"linear-gradient("+t+", "+n+" 0%, "+o+" 100%); "})}function d(e){e.style.background="",e.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",e.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}function c(e,t,n){var o=document.createElement("li");return t&&o.appendChild(t),n?e.__ul.insertBefore(o,n):e.__ul.appendChild(o),e.onResize(),o}function u(e){X.unbind(window,"resize",e.__resizeHandler),e.saveToLocalStorageIfPossible&&X.unbind(window,"unload",e.saveToLocalStorageIfPossible)}function _(e,t){var n=e.__preset_select[e.__preset_select.selectedIndex];n.innerHTML=t?n.value+"*":n.value}function h(e,t,n){if(n.__li=t,n.__gui=e,S.extend(n,{options:function(t){if(arguments.length>1){var o=n.__li.nextElementSibling;return n.remove(),f(e,n.object,n.property,{before:o,factoryArgs:[S.toArray(arguments)]})}if(S.isArray(t)||S.isObject(t)){var i=n.__li.nextElementSibling;return n.remove(),f(e,n.object,n.property,{before:i,factoryArgs:[t]})}},name:function(e){return n.__li.firstElementChild.firstElementChild.innerHTML=e,n},listen:function(){return n.__gui.listen(n),n},remove:function(){return n.__gui.remove(n),n}}),n instanceof q){var o=new Q(n.object,n.property,{min:n.__min,max:n.__max,step:n.__step});S.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(e){var t=n[e],i=o[e];n[e]=o[e]=function(){var e=Array.prototype.slice.call(arguments);return i.apply(o,e),t.apply(n,e)}}),X.addClass(t,"has-slider"),n.domElement.insertBefore(o.domElement,n.domElement.firstElementChild)}else if(n instanceof Q){var i=function(t){if(S.isNumber(n.__min)&&S.isNumber(n.__max)){var o=n.__li.firstElementChild.firstElementChild.innerHTML,i=n.__gui.__listening.indexOf(n)>-1;n.remove();var r=f(e,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[n.__min,n.__max,n.__step]});return r.name(o),i&&r.listen(),r}return t};n.min=S.compose(i,n.min),n.max=S.compose(i,n.max)}else n instanceof K?(X.bind(t,"click",function(){X.fakeEvent(n.__checkbox,"click")}),X.bind(n.__checkbox,"click",function(e){e.stopPropagation()})):n instanceof Z?(X.bind(t,"click",function(){X.fakeEvent(n.__button,"click")}),X.bind(t,"mouseover",function(){X.addClass(n.__button,"hover")}),X.bind(t,"mouseout",function(){X.removeClass(n.__button,"hover")})):n instanceof $&&(X.addClass(t,"color"),n.updateDisplay=S.compose(function(e){return t.style.borderLeftColor=n.__color.toString(),e},n.updateDisplay),n.updateDisplay());n.setValue=S.compose(function(t){return e.getRoot().__preset_select&&n.isModified()&&_(e.getRoot(),!0),t},n.setValue)}function p(e,t){var n=e.getRoot(),o=n.__rememberedObjects.indexOf(t.object);if(-1!==o){var i=n.__rememberedObjectIndecesToControllers[o];if(void 0===i&&(i={},n.__rememberedObjectIndecesToControllers[o]=i),i[t.property]=t,n.load&&n.load.remembered){var r=n.load.remembered,s=void 0;if(r[e.preset])s=r[e.preset];else{if(!r[se])return;s=r[se]}if(s[o]&&void 0!==s[o][t.property]){var a=s[o][t.property];t.initialValue=a,t.setValue(a)}}}}function f(e,t,n,o){if(void 0===t[n])throw new Error('Object "'+t+'" has no property "'+n+'"');var i=void 0;if(o.color)i=new $(t,n);else{var r=[t,n].concat(o.factoryArgs);i=ne.apply(e,r)}o.before instanceof z&&(o.before=o.before.__li),p(e,i),X.addClass(i.domElement,"c");var s=document.createElement("span");X.addClass(s,"property-name"),s.innerHTML=i.property;var a=document.createElement("div");a.appendChild(s),a.appendChild(i.domElement);var l=c(e,a,o.before);return X.addClass(l,he.CLASS_CONTROLLER_ROW),i instanceof $?X.addClass(l,"color"):X.addClass(l,H(i.getValue())),h(e,l,i),e.__controllers.push(i),i}function m(e,t){return document.location.href+"."+t}function g(e,t,n){var o=document.createElement("option");o.innerHTML=t,o.value=t,e.__preset_select.appendChild(o),n&&(e.__preset_select.selectedIndex=e.__preset_select.length-1)}function b(e,t){t.style.display=e.useLocalStorage?"block":"none"}function v(e){var t=e.__save_row=document.createElement("li");X.addClass(e.domElement,"has-save"),e.__ul.insertBefore(t,e.__ul.firstChild),X.addClass(t,"save-row");var n=document.createElement("span");n.innerHTML="&nbsp;",X.addClass(n,"button gears");var o=document.createElement("span");o.innerHTML="Save",X.addClass(o,"button"),X.addClass(o,"save");var i=document.createElement("span");i.innerHTML="New",X.addClass(i,"button"),X.addClass(i,"save-as");var r=document.createElement("span");r.innerHTML="Revert",X.addClass(r,"button"),X.addClass(r,"revert");var s=e.__preset_select=document.createElement("select");if(e.load&&e.load.remembered?S.each(e.load.remembered,function(t,n){g(e,n,n===e.preset)}):g(e,se,!1),X.bind(s,"change",function(){for(var t=0;t<e.__preset_select.length;t++)e.__preset_select[t].innerHTML=e.__preset_select[t].value;e.preset=this.value}),t.appendChild(s),t.appendChild(n),t.appendChild(o),t.appendChild(i),t.appendChild(r),ae){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage");document.getElementById("dg-save-locally").style.display="block","true"===localStorage.getItem(m(e,"isLocal"))&&l.setAttribute("checked","checked"),b(e,a),X.bind(l,"change",function(){e.useLocalStorage=!e.useLocalStorage,b(e,a)})}var d=document.getElementById("dg-new-constructor");X.bind(d,"keydown",function(e){!e.metaKey||67!==e.which&&67!==e.keyCode||le.hide()}),X.bind(n,"click",function(){d.innerHTML=JSON.stringify(e.getSaveObject(),void 0,2),le.show(),d.focus(),d.select()}),X.bind(o,"click",function(){e.save()}),X.bind(i,"click",function(){var t=prompt("Enter a new preset name.");t&&e.saveAs(t)}),X.bind(r,"click",function(){e.revert()})}function y(e){function t(t){return t.preventDefault(),e.width+=i-t.clientX,e.onResize(),i=t.clientX,!1}function n(){X.removeClass(e.__closeButton,he.CLASS_DRAG),X.unbind(window,"mousemove",t),X.unbind(window,"mouseup",n)}function o(o){return o.preventDefault(),i=o.clientX,X.addClass(e.__closeButton,he.CLASS_DRAG),X.bind(window,"mousemove",t),X.bind(window,"mouseup",n),!1}var i=void 0;e.__resize_handle=document.createElement("div"),S.extend(e.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"}),X.bind(e.__resize_handle,"mousedown",o),X.bind(e.__closeButton,"mousedown",o),e.domElement.insertBefore(e.__resize_handle,e.domElement.firstElementChild)}function w(e,t){e.domElement.style.width=t+"px",e.__save_row&&e.autoPlace&&(e.__save_row.style.width=t+"px"),e.__closeButton&&(e.__closeButton.style.width=t+"px")}function x(e,t){var n={};return S.each(e.__rememberedObjects,function(o,i){var r={},s=e.__rememberedObjectIndecesToControllers[i];S.each(s,function(e,n){r[n]=t?e.initialValue:e.getValue()}),n[i]=r}),n}function E(e){for(var t=0;t<e.__preset_select.length;t++)e.__preset_select[t].value===e.preset&&(e.__preset_select.selectedIndex=t)}function C(e){0!==e.length&&oe.call(window,function(){C(e)}),S.each(e,function(e){e.updateDisplay()})}var A=Array.prototype.forEach,k=Array.prototype.slice,S={BREAK:{},extend:function(e){return this.each(k.call(arguments,1),function(t){(this.isObject(t)?Object.keys(t):[]).forEach(function(n){this.isUndefined(t[n])||(e[n]=t[n])}.bind(this))},this),e},defaults:function(e){return this.each(k.call(arguments,1),function(t){(this.isObject(t)?Object.keys(t):[]).forEach(function(n){this.isUndefined(e[n])&&(e[n]=t[n])}.bind(this))},this),e},compose:function(){var e=k.call(arguments);return function(){for(var t=k.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e)if(A&&e.forEach&&e.forEach===A)e.forEach(t,n);else if(e.length===e.length+0){var o=void 0,i=void 0;for(o=0,i=e.length;o<i;o++)if(o in e&&t.call(n,e[o],o)===this.BREAK)return}else for(var r in e)if(t.call(n,e[r],r)===this.BREAK)return},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var o=void 0;return function(){var i=this,r=arguments,s=n||!o;clearTimeout(o),o=setTimeout(function(){o=null,n||e.apply(i,r)},t),s&&e.apply(i,r)}},toArray:function(e){return e.toArray?e.toArray():k.call(e)},isUndefined:function(e){return void 0===e},isNull:function(e){return null===e},isNaN:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return isNaN(e)}),isArray:Array.isArray||function(e){return e.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return!1===e||!0===e},isFunction:function(e){return e instanceof Function}},O=[{litmus:S.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return null!==t&&{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:t},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return null!==t&&{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:t},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return null!==t&&{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:t},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return null!==t&&{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:t}}},{litmus:S.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:S.isArray,conversions:{RGB_ARRAY:{read:function(e){return 3===e.length&&{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return 4===e.length&&{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:S.isObject,conversions:{RGBA_OBJ:{read:function(e){return!!(S.isNumber(e.r)&&S.isNumber(e.g)&&S.isNumber(e.b)&&S.isNumber(e.a))&&{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return!!(S.isNumber(e.r)&&S.isNumber(e.g)&&S.isNumber(e.b))&&{space:"RGB",r:e.r,g:e.g,b:e.b}},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return!!(S.isNumber(e.h)&&S.isNumber(e.s)&&S.isNumber(e.v)&&S.isNumber(e.a))&&{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return!!(S.isNumber(e.h)&&S.isNumber(e.s)&&S.isNumber(e.v))&&{space:"HSV",h:e.h,s:e.s,v:e.v}},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],T=void 0,L=void 0,R=function(){L=!1;var e=arguments.length>1?S.toArray(arguments):arguments[0];return S.each(O,function(t){if(t.litmus(e))return S.each(t.conversions,function(t,n){if(T=t.read(e),!1===L&&!1!==T)return L=T,T.conversionName=n,T.conversion=t,S.BREAK}),S.BREAK}),L},B=void 0,N={hsv_to_rgb:function(e,t,n){var o=Math.floor(e/60)%6,i=e/60-Math.floor(e/60),r=n*(1-t),s=n*(1-i*t),a=n*(1-(1-i)*t),l=[[n,a,r],[s,n,r],[r,n,a],[r,s,n],[a,r,n],[n,r,s]][o];return{r:255*l[0],g:255*l[1],b:255*l[2]}},rgb_to_hsv:function(e,t,n){var o=Math.min(e,t,n),i=Math.max(e,t,n),r=i-o,s=void 0,a=void 0;return 0===i?{h:NaN,s:0,v:0}:(a=r/i,s=e===i?(t-n)/r:t===i?2+(n-e)/r:4+(e-t)/r,(s/=6)<0&&(s+=1),{h:360*s,s:a,v:i/255})},rgb_to_hex:function(e,t,n){var o=this.hex_with_component(0,2,e);return o=this.hex_with_component(o,1,t),o=this.hex_with_component(o,0,n)},component_from_hex:function(e,t){return e>>8*t&255},hex_with_component:function(e,t,n){return n<<(B=8*t)|e&~(255<<B)}},H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},P=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),D=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var s=i.get;if(void 0!==s)return s.call(o)},j=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},I=function(){function e(){if(F(this,e),this.__state=R.apply(this,arguments),!1===this.__state)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return P(e,[{key:"toString",value:function(){return t(this)}},{key:"toHexString",value:function(){return t(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),e}();I.recalculateRGB=function(e,t,n){if("HEX"===e.__state.space)e.__state[t]=N.component_from_hex(e.__state.hex,n);else{if("HSV"!==e.__state.space)throw new Error("Corrupted color state");S.extend(e.__state,N.hsv_to_rgb(e.__state.h,e.__state.s,e.__state.v))}},I.recalculateHSV=function(e){var t=N.rgb_to_hsv(e.r,e.g,e.b);S.extend(e.__state,{s:t.s,v:t.v}),S.isNaN(t.h)?S.isUndefined(e.__state.h)&&(e.__state.h=0):e.__state.h=t.h},I.COMPONENTS=["r","g","b","h","s","v","hex","a"],n(I.prototype,"r",2),n(I.prototype,"g",1),n(I.prototype,"b",0),o(I.prototype,"h"),o(I.prototype,"s"),o(I.prototype,"v"),Object.defineProperty(I.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}}),Object.defineProperty(I.prototype,"hex",{get:function(){return"HEX"!==this.__state.space&&(this.__state.hex=N.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var z=function(){function e(t,n){F(this,e),this.initialValue=t[n],this.domElement=document.createElement("div"),this.object=t,this.property=n,this.__onChange=void 0,this.__onFinishChange=void 0}return P(e,[{key:"onChange",value:function(e){return this.__onChange=e,this}},{key:"onFinishChange",value:function(e){return this.__onFinishChange=e,this}},{key:"setValue",value:function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),e}(),M={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},G={};S.each(M,function(e,t){S.each(e,function(e){G[e]=t})});var U=/(\d+(\.\d+)?)px/,X={makeSelectable:function(e,t){void 0!==e&&void 0!==e.style&&(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var o=n,i=t;S.isUndefined(i)&&(i=!0),S.isUndefined(o)&&(o=!0),e.style.position="absolute",i&&(e.style.left=0,e.style.right=0),o&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,o){var i=n||{},r=G[t];if(!r)throw new Error("Event type "+t+" not supported.");var s=document.createEvent(r);switch(r){case"MouseEvents":var a=i.x||i.clientX||0,l=i.y||i.clientY||0;s.initMouseEvent(t,i.bubbles||!1,i.cancelable||!0,window,i.clickCount||1,0,0,a,l,!1,!1,!1,!1,0,null);break;case"KeyboardEvents":var d=s.initKeyboardEvent||s.initKeyEvent;S.defaults(i,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),d(t,i.bubbles||!1,i.cancelable,window,i.ctrlKey,i.altKey,i.shiftKey,i.metaKey,i.keyCode,i.charCode);break;default:s.initEvent(t,i.bubbles||!1,i.cancelable||!0)}S.defaults(s,o),e.dispatchEvent(s)},bind:function(e,t,n,o){var i=o||!1;return e.addEventListener?e.addEventListener(t,n,i):e.attachEvent&&e.attachEvent("on"+t,n),X},unbind:function(e,t,n,o){var i=o||!1;return e.removeEventListener?e.removeEventListener(t,n,i):e.detachEvent&&e.detachEvent("on"+t,n),X},addClass:function(e,t){if(void 0===e.className)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);-1===n.indexOf(t)&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return X},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),o=n.indexOf(t);-1!==o&&(n.splice(o,1),e.className=n.join(" "))}else e.className=void 0;return X},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return i(t["border-left-width"])+i(t["border-right-width"])+i(t["padding-left"])+i(t["padding-right"])+i(t.width)},getHeight:function(e){var t=getComputedStyle(e);return i(t["border-top-width"])+i(t["border-bottom-width"])+i(t["padding-top"])+i(t["padding-bottom"])+i(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do{n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent}while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},K=function(e){function t(e,n){F(this,t);var o=V(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),i=o;return o.__prev=o.getValue(),o.__checkbox=document.createElement("input"),o.__checkbox.setAttribute("type","checkbox"),X.bind(o.__checkbox,"change",function(){i.setValue(!i.__prev)},!1),o.domElement.appendChild(o.__checkbox),o.updateDisplay(),o}return j(t,z),P(t,[{key:"setValue",value:function(e){var n=D(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,e);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),n}},{key:"updateDisplay",value:function(){return!0===this.getValue()?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),D(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(),Y=function(e){function t(e,n,o){F(this,t);var i=V(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),r=o,s=i;if(i.__select=document.createElement("select"),S.isArray(r)){var a={};S.each(r,function(e){a[e]=e}),r=a}return S.each(r,function(e,t){var n=document.createElement("option");n.innerHTML=t,n.setAttribute("value",e),s.__select.appendChild(n)}),i.updateDisplay(),X.bind(i.__select,"change",function(){var e=this.options[this.selectedIndex].value;s.setValue(e)}),i.domElement.appendChild(i.__select),i}return j(t,z),P(t,[{key:"setValue",value:function(e){var n=D(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,e);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),n}},{key:"updateDisplay",value:function(){return X.isActive(this.__select)?this:(this.__select.value=this.getValue(),D(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this))}}]),t}(),J=function(e){function t(e,n){function o(){r.setValue(r.__input.value)}F(this,t);var i=V(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),r=i;return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),X.bind(i.__input,"keyup",o),X.bind(i.__input,"change",o),X.bind(i.__input,"blur",function(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}),X.bind(i.__input,"keydown",function(e){13===e.keyCode&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return j(t,z),P(t,[{key:"updateDisplay",value:function(){return X.isActive(this.__input)||(this.__input.value=this.getValue()),D(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(),W=function(e){function t(e,n,o){F(this,t);var i=V(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),s=o||{};return i.__min=s.min,i.__max=s.max,i.__step=s.step,S.isUndefined(i.__step)?0===i.initialValue?i.__impliedStep=1:i.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(i.initialValue))/Math.LN10))/10:i.__impliedStep=i.__step,i.__precision=r(i.__impliedStep),i}return j(t,z),P(t,[{key:"setValue",value:function(e){var n=e;return void 0!==this.__min&&n<this.__min?n=this.__min:void 0!==this.__max&&n>this.__max&&(n=this.__max),void 0!==this.__step&&n%this.__step!=0&&(n=Math.round(n/this.__step)*this.__step),D(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,n)}},{key:"min",value:function(e){return this.__min=e,this}},{key:"max",value:function(e){return this.__max=e,this}},{key:"step",value:function(e){return this.__step=e,this.__impliedStep=e,this.__precision=r(e),this}}]),t}(),Q=function(e){function t(e,n,o){function i(){l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function r(e){var t=d-e.clientY;l.setValue(l.getValue()+t*l.__impliedStep),d=e.clientY}function s(){X.unbind(window,"mousemove",r),X.unbind(window,"mouseup",s),i()}F(this,t);var a=V(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,o));a.__truncationSuspended=!1;var l=a,d=void 0;return a.__input=document.createElement("input"),a.__input.setAttribute("type","text"),X.bind(a.__input,"change",function(){var e=parseFloat(l.__input.value);S.isNaN(e)||l.setValue(e)}),X.bind(a.__input,"blur",function(){i()}),X.bind(a.__input,"mousedown",function(e){X.bind(window,"mousemove",r),X.bind(window,"mouseup",s),d=e.clientY}),X.bind(a.__input,"keydown",function(e){13===e.keyCode&&(l.__truncationSuspended=!0,this.blur(),l.__truncationSuspended=!1,i())}),a.updateDisplay(),a.domElement.appendChild(a.__input),a}return j(t,W),P(t,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():s(this.getValue(),this.__precision),D(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(),q=function(e){function t(e,n,o,i,r){function s(e){e.preventDefault();var t=_.__background.getBoundingClientRect();return _.setValue(a(e.clientX,t.left,t.right,_.__min,_.__max)),!1}function l(){X.unbind(window,"mousemove",s),X.unbind(window,"mouseup",l),_.__onFinishChange&&_.__onFinishChange.call(_,_.getValue())}function d(e){var t=e.touches[0].clientX,n=_.__background.getBoundingClientRect();_.setValue(a(t,n.left,n.right,_.__min,_.__max))}function c(){X.unbind(window,"touchmove",d),X.unbind(window,"touchend",c),_.__onFinishChange&&_.__onFinishChange.call(_,_.getValue())}F(this,t);var u=V(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,{min:o,max:i,step:r})),_=u;return u.__background=document.createElement("div"),u.__foreground=document.createElement("div"),X.bind(u.__background,"mousedown",function(e){document.activeElement.blur(),X.bind(window,"mousemove",s),X.bind(window,"mouseup",l),s(e)}),X.bind(u.__background,"touchstart",function(e){1===e.touches.length&&(X.bind(window,"touchmove",d),X.bind(window,"touchend",c),d(e))}),X.addClass(u.__background,"slider"),X.addClass(u.__foreground,"slider-fg"),u.updateDisplay(),u.__background.appendChild(u.__foreground),u.domElement.appendChild(u.__background),u}return j(t,W),P(t,[{key:"updateDisplay",value:function(){var e=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=100*e+"%",D(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(),Z=function(e){function t(e,n,o){F(this,t);var i=V(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),r=i;return i.__button=document.createElement("div"),i.__button.innerHTML=void 0===o?"Fire":o,X.bind(i.__button,"click",function(e){return e.preventDefault(),r.fire(),!1}),X.addClass(i.__button,"button"),i.domElement.appendChild(i.__button),i}return j(t,z),P(t,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),t}(),$=function(e){function t(e,n){function o(e){u(e),X.bind(window,"mousemove",u),X.bind(window,"touchmove",u),X.bind(window,"mouseup",r),X.bind(window,"touchend",r)}function i(e){_(e),X.bind(window,"mousemove",_),X.bind(window,"touchmove",_),X.bind(window,"mouseup",s),X.bind(window,"touchend",s)}function r(){X.unbind(window,"mousemove",u),X.unbind(window,"touchmove",u),X.unbind(window,"mouseup",r),X.unbind(window,"touchend",r),c()}function s(){X.unbind(window,"mousemove",_),X.unbind(window,"touchmove",_),X.unbind(window,"mouseup",s),X.unbind(window,"touchend",s),c()}function a(){var e=R(this.value);!1!==e?(p.__color.__state=e,p.setValue(p.__color.toOriginal())):this.value=p.__color.toString()}function c(){p.__onFinishChange&&p.__onFinishChange.call(p,p.__color.toOriginal())}function u(e){-1===e.type.indexOf("touch")&&e.preventDefault();var t=p.__saturation_field.getBoundingClientRect(),n=e.touches&&e.touches[0]||e,o=n.clientX,i=n.clientY,r=(o-t.left)/(t.right-t.left),s=1-(i-t.top)/(t.bottom-t.top);return s>1?s=1:s<0&&(s=0),r>1?r=1:r<0&&(r=0),p.__color.v=s,p.__color.s=r,p.setValue(p.__color.toOriginal()),!1}function _(e){-1===e.type.indexOf("touch")&&e.preventDefault();var t=p.__hue_field.getBoundingClientRect(),n=1-((e.touches&&e.touches[0]||e).clientY-t.top)/(t.bottom-t.top);return n>1?n=1:n<0&&(n=0),p.__color.h=360*n,p.setValue(p.__color.toOriginal()),!1}F(this,t);var h=V(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));h.__color=new I(h.getValue()),h.__temp=new I(0);var p=h;h.domElement=document.createElement("div"),X.makeSelectable(h.domElement,!1),h.__selector=document.createElement("div"),h.__selector.className="selector",h.__saturation_field=document.createElement("div"),h.__saturation_field.className="saturation-field",h.__field_knob=document.createElement("div"),h.__field_knob.className="field-knob",h.__field_knob_border="2px solid ",h.__hue_knob=document.createElement("div"),h.__hue_knob.className="hue-knob",h.__hue_field=document.createElement("div"),h.__hue_field.className="hue-field",h.__input=document.createElement("input"),h.__input.type="text",h.__input_textShadow="0 1px 1px ",X.bind(h.__input,"keydown",function(e){13===e.keyCode&&a.call(this)}),X.bind(h.__input,"blur",a),X.bind(h.__selector,"mousedown",function(){X.addClass(this,"drag").bind(window,"mouseup",function(){X.removeClass(p.__selector,"drag")})}),X.bind(h.__selector,"touchstart",function(){X.addClass(this,"drag").bind(window,"touchend",function(){X.removeClass(p.__selector,"drag")})});var f=document.createElement("div");return S.extend(h.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),S.extend(h.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:h.__field_knob_border+(h.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),S.extend(h.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),S.extend(h.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),S.extend(f.style,{width:"100%",height:"100%",background:"none"}),l(f,"top","rgba(0,0,0,0)","#000"),S.extend(h.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),d(h.__hue_field),S.extend(h.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:h.__input_textShadow+"rgba(0,0,0,0.7)"}),X.bind(h.__saturation_field,"mousedown",o),X.bind(h.__saturation_field,"touchstart",o),X.bind(h.__field_knob,"mousedown",o),X.bind(h.__field_knob,"touchstart",o),X.bind(h.__hue_field,"mousedown",i),X.bind(h.__hue_field,"touchstart",i),h.__saturation_field.appendChild(f),h.__selector.appendChild(h.__field_knob),h.__selector.appendChild(h.__saturation_field),h.__selector.appendChild(h.__hue_field),h.__hue_field.appendChild(h.__hue_knob),h.domElement.appendChild(h.__input),h.domElement.appendChild(h.__selector),h.updateDisplay(),h}return j(t,z),P(t,[{key:"updateDisplay",value:function(){var e=R(this.getValue());if(!1!==e){var t=!1;S.each(I.COMPONENTS,function(n){if(!S.isUndefined(e[n])&&!S.isUndefined(this.__color.__state[n])&&e[n]!==this.__color.__state[n])return t=!0,{}},this),t&&S.extend(this.__color.__state,e)}S.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var n=this.__color.v<.5||this.__color.s>.5?255:0,o=255-n;S.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+n+","+n+","+n+")"}),this.__hue_knob.style.marginTop=100*(1-this.__color.h/360)+"px",this.__temp.s=1,this.__temp.v=1,l(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),S.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+n+","+n+","+n+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),t}(),ee=["-moz-","-o-","-webkit-","-ms-",""],te={load:function(e,t){var n=t||document,o=n.createElement("link");o.type="text/css",o.rel="stylesheet",o.href=e,n.getElementsByTagName("head")[0].appendChild(o)},inject:function(e,t){var n=t||document,o=document.createElement("style");o.type="text/css",o.innerHTML=e;var i=n.getElementsByTagName("head")[0];try{i.appendChild(o)}catch(e){}}},ne=function(e,t){var n=e[t];return S.isArray(arguments[2])||S.isObject(arguments[2])?new Y(e,t,arguments[2]):S.isNumber(n)?S.isNumber(arguments[2])&&S.isNumber(arguments[3])?S.isNumber(arguments[4])?new q(e,t,arguments[2],arguments[3],arguments[4]):new q(e,t,arguments[2],arguments[3]):S.isNumber(arguments[4])?new Q(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Q(e,t,{min:arguments[2],max:arguments[3]}):S.isString(n)?new J(e,t):S.isFunction(n)?new Z(e,t,""):S.isBoolean(n)?new K(e,t):null},oe=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},ie=function(){function e(){F(this,e),this.backgroundElement=document.createElement("div"),S.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),X.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),S.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;X.bind(this.backgroundElement,"click",function(){t.hide()})}return P(e,[{key:"show",value:function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),S.defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var e=this,t=function t(){e.domElement.style.display="none",e.backgroundElement.style.display="none",X.unbind(e.domElement,"webkitTransitionEnd",t),X.unbind(e.domElement,"transitionend",t),X.unbind(e.domElement,"oTransitionEnd",t)};X.bind(this.domElement,"webkitTransitionEnd",t),X.bind(this.domElement,"transitionend",t),X.bind(this.domElement,"oTransitionEnd",t),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-X.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-X.getHeight(this.domElement)/2+"px"}}]),e}(),re=function(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}}(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");te.inject(re);var se="Default",ae=function(){try{return!!window.localStorage}catch(e){return!1}}(),le=void 0,de=!0,ce=void 0,ue=!1,_e=[],he=function e(t){var n=this,o=t||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),X.addClass(this.domElement,"dg"),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],o=S.defaults(o,{closeOnTop:!1,autoPlace:!0,width:e.DEFAULT_WIDTH}),o=S.defaults(o,{resizable:o.autoPlace,hideable:o.autoPlace}),S.isUndefined(o.load)?o.load={preset:se}:o.preset&&(o.load.preset=o.preset),S.isUndefined(o.parent)&&o.hideable&&_e.push(this),o.resizable=S.isUndefined(o.parent)&&o.resizable,o.autoPlace&&S.isUndefined(o.scrollable)&&(o.scrollable=!0);var i=ae&&"true"===localStorage.getItem(m(this,"isLocal")),r=void 0,s=void 0;if(Object.defineProperties(this,{parent:{get:function(){return o.parent}},scrollable:{get:function(){return o.scrollable}},autoPlace:{get:function(){return o.autoPlace}},closeOnTop:{get:function(){return o.closeOnTop}},preset:{get:function(){return n.parent?n.getRoot().preset:o.load.preset},set:function(e){n.parent?n.getRoot().preset=e:o.load.preset=e,E(this),n.revert()}},width:{get:function(){return o.width},set:function(e){o.width=e,w(n,e)}},name:{get:function(){return o.name},set:function(e){o.name=e,s&&(s.innerHTML=o.name)}},closed:{get:function(){return o.closed},set:function(t){o.closed=t,o.closed?X.addClass(n.__ul,e.CLASS_CLOSED):X.removeClass(n.__ul,e.CLASS_CLOSED),this.onResize(),n.__closeButton&&(n.__closeButton.innerHTML=t?e.TEXT_OPEN:e.TEXT_CLOSED)}},load:{get:function(){return o.load}},useLocalStorage:{get:function(){return i},set:function(e){ae&&(i=e,e?X.bind(window,"unload",r):X.unbind(window,"unload",r),localStorage.setItem(m(n,"isLocal"),e))}}}),S.isUndefined(o.parent)){if(this.closed=o.closed||!1,X.addClass(this.domElement,e.CLASS_MAIN),X.makeSelectable(this.domElement,!1),ae&&i){n.useLocalStorage=!0;var a=localStorage.getItem(m(this,"gui"));a&&(o.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=e.TEXT_CLOSED,X.addClass(this.__closeButton,e.CLASS_CLOSE_BUTTON),o.closeOnTop?(X.addClass(this.__closeButton,e.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(X.addClass(this.__closeButton,e.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),X.bind(this.__closeButton,"click",function(){n.closed=!n.closed})}else{void 0===o.closed&&(o.closed=!0);var l=document.createTextNode(o.name);X.addClass(l,"controller-name"),s=c(n,l);X.addClass(this.__ul,e.CLASS_CLOSED),X.addClass(s,"title"),X.bind(s,"click",function(e){return e.preventDefault(),n.closed=!n.closed,!1}),o.closed||(this.closed=!1)}o.autoPlace&&(S.isUndefined(o.parent)&&(de&&(ce=document.createElement("div"),X.addClass(ce,"dg"),X.addClass(ce,e.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(ce),de=!1),ce.appendChild(this.domElement),X.addClass(this.domElement,e.CLASS_AUTO_PLACE)),this.parent||w(n,o.width)),this.__resizeHandler=function(){n.onResizeDebounced()},X.bind(window,"resize",this.__resizeHandler),X.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),X.bind(this.__ul,"transitionend",this.__resizeHandler),X.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),o.resizable&&y(this),r=function(){ae&&"true"===localStorage.getItem(m(n,"isLocal"))&&localStorage.setItem(m(n,"gui"),JSON.stringify(n.getSaveObject()))},this.saveToLocalStorageIfPossible=r,o.parent||function(){var e=n.getRoot();e.width+=1,S.defer(function(){e.width-=1})}()};he.toggleHide=function(){ue=!ue,S.each(_e,function(e){e.domElement.style.display=ue?"none":""})},he.CLASS_AUTO_PLACE="a",he.CLASS_AUTO_PLACE_CONTAINER="ac",he.CLASS_MAIN="main",he.CLASS_CONTROLLER_ROW="cr",he.CLASS_TOO_TALL="taller-than-window",he.CLASS_CLOSED="closed",he.CLASS_CLOSE_BUTTON="close-button",he.CLASS_CLOSE_TOP="close-top",he.CLASS_CLOSE_BOTTOM="close-bottom",he.CLASS_DRAG="drag",he.DEFAULT_WIDTH=245,he.TEXT_CLOSED="Close Controls",he.TEXT_OPEN="Open Controls",he._keydownHandler=function(e){"text"===document.activeElement.type||72!==e.which&&72!==e.keyCode||he.toggleHide()},X.bind(window,"keydown",he._keydownHandler,!1),S.extend(he.prototype,{add:function(e,t){return f(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return f(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;S.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&ce.removeChild(this.domElement);var e=this;S.each(this.__folders,function(t){e.removeFolder(t)}),X.unbind(window,"keydown",he._keydownHandler,!1),u(this)},addFolder:function(e){if(void 0!==this.__folders[e])throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new he(t);this.__folders[e]=n;var o=c(this,n.domElement);return X.addClass(o,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],u(e);var t=this;S.each(e.__folders,function(t){e.removeFolder(t)}),S.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=X.getOffset(e.__ul).top,n=0;S.each(e.__ul.childNodes,function(t){e.autoPlace&&t===e.__save_row||(n+=X.getHeight(t))}),window.innerHeight-t-20<n?(X.addClass(e.domElement,he.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-20+"px"):(X.removeClass(e.domElement,he.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&S.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:S.debounce(function(){this.onResize()},50),remember:function(){if(S.isUndefined(le)&&((le=new ie).domElement.innerHTML='<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>'),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;S.each(Array.prototype.slice.call(arguments),function(t){0===e.__rememberedObjects.length&&v(e),-1===e.__rememberedObjects.indexOf(t)&&e.__rememberedObjects.push(t)}),this.autoPlace&&w(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=x(this)),e.folders={},S.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=x(this),_(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[se]=x(this,!0)),this.load.remembered[e]=x(this),this.preset=e,g(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){S.each(this.__controllers,function(t){this.getRoot().load.remembered?p(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),S.each(this.__folders,function(e){e.revert(e)}),e||_(this.getRoot(),!1)},listen:function(e){var t=0===this.__listening.length;this.__listening.push(e),t&&C(this.__listening)},updateDisplay:function(){S.each(this.__controllers,function(e){e.updateDisplay()}),S.each(this.__folders,function(e){e.updateDisplay()})}});var pe={Color:I,math:N,interpret:R},fe={Controller:z,BooleanController:K,OptionController:Y,StringController:J,NumberController:W,NumberControllerBox:Q,NumberControllerSlider:q,FunctionController:Z,ColorController:$},me={dom:X},ge={GUI:he},be=he,ve={color:pe,controllers:fe,dom:me,gui:ge,GUI:be};e.color=pe,e.controllers=fe,e.dom=me,e.gui=ge,e.GUI=be,e.default=ve,Object.defineProperty(e,"__esModule",{value:!0})});


/***/ }),

/***/ 825:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict"; true&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")}, true&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return ce}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});


/***/ }),

/***/ 647:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jsTree - v3.3.16 - 2023-09-19 - (MIT) */

!function(e){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(825)], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(function(E,P){"use strict";if(!E.jstree){var s=0,a=!1,n=!1,o=!1,r=[],e=E("script:last").attr("src"),b=window.document,c=window.setImmediate,i=window.Promise;!c&&i&&(c=function(e,t){i.resolve(t).then(e)}),E.jstree={version:"3.3.16",defaults:{plugins:[]},plugins:{},path:e&&-1!==e.indexOf("/")?e.replace(/\/[^\/]+$/,""):"",idregex:/[\\:&!^|()\[\]<>@*'+~#";.,=\- \/${}%?`]/g,root:"#"},E.jstree.create=function(e,i){var r=new E.jstree.core(++s),t=i;return i=E.extend(!0,{},E.jstree.defaults,i),t&&t.plugins&&(i.plugins=t.plugins),E.each(i.plugins,function(e,t){"core"!==e&&(r=r.plugin(t,i[t]))}),E(e).data("jstree",r),r.init(e,i),r},E.jstree.destroy=function(){E(".jstree:jstree").jstree("destroy"),E(b).off(".jstree")},E.jstree.core=function(e){this._id=e,this._cnt=0,this._wrk=null,this._data={core:{themes:{name:!1,dots:!1,icons:!1,ellipsis:!1},selected:[],last_error:{},working:!1,worker_queue:[],focused:null}}},E.jstree.reference=function(t){var i=null,e=null;if(!t||!t.id||t.tagName&&t.nodeType||(t=t.id),!e||!e.length)try{e=E(t)}catch(e){}if(!e||!e.length)try{e=E("#"+t.replace(E.jstree.idregex,"\\$&"))}catch(e){}return e&&e.length&&(e=e.closest(".jstree")).length&&(e=e.data("jstree"))?i=e:E(".jstree").each(function(){var e=E(this).data("jstree");if(e&&e._model.data[t])return i=e,!1}),i},E.fn.jstree=function(i){var r="string"==typeof i,s=Array.prototype.slice.call(arguments,1),a=null;return!(!0===i&&!this.length)&&(this.each(function(){var e=E.jstree.reference(this),t=r&&e?e[i]:null;if(a=r&&t?t.apply(e,s):null,e||r||i!==P&&!E.isPlainObject(i)||E.jstree.create(this,i),null!==(a=e&&!r||!0===i?e||!1:a)&&a!==P)return!1}),null!==a&&a!==P?a:this)},E.expr.pseudos.jstree=E.expr.createPseudo(function(e){return function(e){return E(e).hasClass("jstree")&&E(e).data("jstree")!==P}}),E.jstree.defaults.core={data:!1,strings:!1,check_callback:!1,error:E.noop,animation:200,multiple:!0,themes:{name:!1,url:!1,dir:!1,dots:!0,icons:!0,ellipsis:!1,stripes:!1,variant:!1,responsive:!1},expand_selected_onload:!0,worker:!0,force_text:!1,dblclick_toggle:!0,loaded_state:!1,restore_focus:!0,compute_elements_positions:!1,keyboard:{"ctrl-space":function(e){e.type="click",E(e.currentTarget).trigger(e)},enter:function(e){e.type="click",E(e.currentTarget).trigger(e)},left:function(e){var e;e.preventDefault(),this.is_open(e.currentTarget)?this.close_node(e.currentTarget):(e=this.get_parent(e.currentTarget))&&e.id!==E.jstree.root&&this.get_node(e,!0).children(".jstree-anchor").trigger("focus")},up:function(e){e.preventDefault();var e=this.get_prev_dom(e.currentTarget);e&&e.length&&e.children(".jstree-anchor").trigger("focus")},right:function(e){var e;e.preventDefault(),this.is_closed(e.currentTarget)?this.open_node(e.currentTarget,function(e){this.get_node(e,!0).children(".jstree-anchor").trigger("focus")}):!this.is_open(e.currentTarget)||(e=this.get_node(e.currentTarget,!0).children(".jstree-children")[0])&&E(this._firstChild(e)).children(".jstree-anchor").trigger("focus")},down:function(e){e.preventDefault();var e=this.get_next_dom(e.currentTarget);e&&e.length&&e.children(".jstree-anchor").trigger("focus")},"*":function(e){this.open_all()},home:function(e){e.preventDefault();var e=this._firstChild(this.get_container_ul()[0]);e&&E(e).children(".jstree-anchor").filter(":visible").trigger("focus")},end:function(e){e.preventDefault(),this.element.find(".jstree-anchor").filter(":visible").last().trigger("focus")},f2:function(e){e.preventDefault(),this.edit(e.currentTarget)}},allow_reselect:!1},E.jstree.core.prototype={plugin:function(e,t){var i=E.jstree.plugins[e];return i?(this._data[e]={},i.prototype=this,new i(t,this)):this},init:function(e,t){this._model={data:{},changed:[],force_full_redraw:!1,redraw_timeout:!1,default_state:{loaded:!0,opened:!1,selected:!1,disabled:!1}},this._model.data[E.jstree.root]={id:E.jstree.root,parent:null,parents:[],children:[],children_d:[],state:{loaded:!1}},this.element=E(e).addClass("jstree jstree-"+this._id),this.settings=t,this._data.core.ready=!1,this._data.core.loaded=!1,this._data.core.rtl="rtl"===this.element.css("direction"),this.element[this._data.core.rtl?"addClass":"removeClass"]("jstree-rtl"),this.element.attr("role","tree"),this.settings.core.multiple&&this.element.attr("aria-multiselectable",!0),this.element.attr("tabindex")||this.element.attr("tabindex","0"),this.bind(),this.trigger("init"),this._data.core.original_container_html=this.element.find(" > ul > li").clone(!0),this._data.core.original_container_html.find("li").addBack().contents().filter(function(){return 3===this.nodeType&&(!this.nodeValue||/^\s+$/.test(this.nodeValue))}).remove(),this.element.html("<ul class='jstree-container-ul jstree-children' role='group'><li id='j"+this._id+"_loading' class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='none'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' role='treeitem' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>"+this.get_string("Loading ...")+"</a></li></ul>"),this.element.attr("aria-activedescendant","j"+this._id+"_loading"),this._data.core.li_height=this.get_container_ul().children("li").first().outerHeight()||24,this._data.core.node=this._create_prototype_node(),this.trigger("loading"),this.load_node(E.jstree.root)},destroy:function(e){if(this.trigger("destroy"),this._wrk)try{window.URL.revokeObjectURL(this._wrk),this._wrk=null}catch(e){}e||this.element.empty(),this.teardown()},_create_prototype_node:function(){var e=b.createElement("LI"),t,i;return e.setAttribute("role","none"),(t=b.createElement("I")).className="jstree-icon jstree-ocl",t.setAttribute("role","presentation"),e.appendChild(t),(t=b.createElement("A")).className="jstree-anchor",t.setAttribute("href","#"),t.setAttribute("tabindex","-1"),t.setAttribute("role","treeitem"),(i=b.createElement("I")).className="jstree-icon jstree-themeicon",i.setAttribute("role","presentation"),t.appendChild(i),e.appendChild(t),t=i=null,e},_kbevent_to_func:function(e){var t={8:"Backspace",9:"Tab",13:"Enter",19:"Pause",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"Print",45:"Insert",46:"Delete",96:"Numpad0",97:"Numpad1",98:"Numpad2",99:"Numpad3",100:"Numpad4",101:"Numpad5",102:"Numpad6",103:"Numpad7",104:"Numpad8",105:"Numpad9","-13":"NumpadEnter",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"Numlock",145:"Scrolllock",16:"Shift",17:"Ctrl",18:"Alt",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",107:"+",109:"-",110:".",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",111:"/",106:"*",173:"-"},i=[];if(e.ctrlKey&&i.push("ctrl"),e.altKey&&i.push("alt"),e.shiftKey&&i.push("shift"),i.push(t[e.which]?t[e.which].toLowerCase():e.which),"shift-shift"===(i=i.sort().join("-").toLowerCase())||"ctrl-ctrl"===i||"alt-alt"===i)return null;var r=this.settings.core.keyboard,s,a;for(s in r)if(r.hasOwnProperty(s)&&(a="-"!==(a=s)&&"+"!==a?(a=a.replace("--","-MINUS").replace("+-","-MINUS").replace("++","-PLUS").replace("-+","-PLUS")).split(/-|\+/).sort().join("-").replace("MINUS","-").replace("PLUS","+").toLowerCase():a)===i)return r[s];return null},teardown:function(){this.unbind(),this.element.removeClass("jstree").removeData("jstree").find("[class^='jstree']").addBack().attr("class",function(){return this.className.replace(/jstree[^ ]*|$/gi,"")}),this.element=null},bind:function(){var s="",a=null,t=0;this.element.on("dblclick.jstree",function(e){if(e.target.tagName&&"input"===e.target.tagName.toLowerCase())return!0;if(b.selection&&b.selection.empty)b.selection.empty();else if(window.getSelection){var e=window.getSelection();try{e.removeAllRanges(),e.collapse()}catch(e){}}}).on("mousedown.jstree",function(e){e.target===this.element[0]&&(e.preventDefault(),t=+new Date)}.bind(this)).on("mousedown.jstree",".jstree-ocl",function(e){e.preventDefault()}).on("click.jstree",".jstree-ocl",function(e){this.toggle_node(e.target)}.bind(this)).on("dblclick.jstree",".jstree-anchor",function(e){if(e.target.tagName&&"input"===e.target.tagName.toLowerCase())return!0;this.settings.core.dblclick_toggle&&this.toggle_node(e.target)}.bind(this)).on("click.jstree",".jstree-anchor",function(e){e.preventDefault(),e.currentTarget!==b.activeElement&&E(e.currentTarget).trigger("focus"),this.activate_node(e.currentTarget,e)}.bind(this)).on("keydown.jstree",".jstree-anchor",function(e){if(e.target.tagName&&"input"===e.target.tagName.toLowerCase())return!0;this._data.core.rtl&&(37===e.which?e.which=39:39===e.which&&(e.which=37));var t=this._kbevent_to_func(e);if(t){var e=t.call(this,e);if(!1===e||!0===e)return e}}.bind(this)).on("load_node.jstree",function(e,t){t.status&&(t.node.id!==E.jstree.root||this._data.core.loaded||(this._data.core.loaded=!0,this._firstChild(this.get_container_ul()[0])&&this.element.attr("aria-activedescendant",this._firstChild(this.get_container_ul()[0]).id),this.trigger("loaded")),this._data.core.ready||setTimeout(function(){if(this.element&&!this.get_container_ul().find(".jstree-loading").length){if(this._data.core.ready=!0,this._data.core.selected.length){if(this.settings.core.expand_selected_onload){for(var e=[],t,i,t=0,i=this._data.core.selected.length;t<i;t++)e=e.concat(this._model.data[this._data.core.selected[t]].parents);for(t=0,i=(e=E.vakata.array_unique(e)).length;t<i;t++)this.open_node(e[t],!1,0)}this.trigger("changed",{action:"ready",selected:this._data.core.selected})}this.trigger("ready")}}.bind(this),0))}.bind(this)).on("keypress.jstree",function(e){if(e.target.tagName&&"input"===e.target.tagName.toLowerCase())return!0;a&&clearTimeout(a),a=setTimeout(function(){s=""},500);var i=String.fromCharCode(e.which).toLowerCase(),t=this.element.find(".jstree-anchor").filter(":visible"),e=t.index(b.activeElement)||0,r=!1;if(1<(s+=i).length){if(t.slice(e).each(function(e,t){if(0===E(t).text().toLowerCase().indexOf(s))return E(t).trigger("focus"),!(r=!0)}.bind(this)),r)return;if(t.slice(0,e).each(function(e,t){if(0===E(t).text().toLowerCase().indexOf(s))return E(t).trigger("focus"),!(r=!0)}.bind(this)),r)return}new RegExp("^"+i.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")+"+$").test(s)&&(t.slice(e+1).each(function(e,t){if(E(t).text().toLowerCase().charAt(0)===i)return E(t).trigger("focus"),!(r=!0)}.bind(this)),r||t.slice(0,e+1).each(function(e,t){if(E(t).text().toLowerCase().charAt(0)===i)return E(t).trigger("focus"),!(r=!0)}.bind(this)))}.bind(this)).on("init.jstree",function(){var e=this.settings.core.themes;this._data.core.themes.dots=e.dots,this._data.core.themes.stripes=e.stripes,this._data.core.themes.icons=e.icons,this._data.core.themes.ellipsis=e.ellipsis,this.set_theme(e.name||"default",e.url),this.set_theme_variant(e.variant)}.bind(this)).on("loading.jstree",function(){this[this._data.core.themes.dots?"show_dots":"hide_dots"](),this[this._data.core.themes.icons?"show_icons":"hide_icons"](),this[this._data.core.themes.stripes?"show_stripes":"hide_stripes"](),this[this._data.core.themes.ellipsis?"show_ellipsis":"hide_ellipsis"]()}.bind(this)).on("blur.jstree",".jstree-anchor",function(e){this._data.core.focused=null,E(e.currentTarget).filter(".jstree-hovered").trigger("mouseleave"),this.element.attr("tabindex","0"),E(e.currentTarget).attr("tabindex","-1")}.bind(this)).on("focus.jstree",".jstree-anchor",function(e){var t=this.get_node(e.currentTarget);t&&(t.id||0===t.id)&&(this._data.core.focused=t.id),this.element.find(".jstree-hovered").not(e.currentTarget).trigger("mouseleave"),E(e.currentTarget).trigger("mouseenter"),this.element.attr("tabindex","-1"),E(e.currentTarget).attr("tabindex","0")}.bind(this)).on("focus.jstree",function(){var e;500<+new Date-t&&!this._data.core.focused&&this.settings.core.restore_focus&&(t=0,(e=this.get_node(this.element.attr("aria-activedescendant"),!0))&&e.find("> .jstree-anchor").trigger("focus"))}.bind(this)).on("mouseenter.jstree",".jstree-anchor",function(e){this.hover_node(e.currentTarget)}.bind(this)).on("mouseleave.jstree",".jstree-anchor",function(e){this.dehover_node(e.currentTarget)}.bind(this))},unbind:function(){this.element.off(".jstree"),E(b).off(".jstree-"+this._id)},trigger:function(e,t){((t=t||{}).instance=this).element.triggerHandler(e.replace(".jstree","")+".jstree",t)},get_container:function(){return this.element},get_container_ul:function(){return this.element.children(".jstree-children").first()},get_string:function(e){var t=this.settings.core.strings;return E.vakata.is_function(t)?t.call(this,e):t&&t[e]?t[e]:e},_firstChild:function(e){e=e?e.firstChild:null;while(null!==e&&1!==e.nodeType)e=e.nextSibling;return e},_nextSibling:function(e){e=e?e.nextSibling:null;while(null!==e&&1!==e.nodeType)e=e.nextSibling;return e},_previousSibling:function(e){e=e?e.previousSibling:null;while(null!==e&&1!==e.nodeType)e=e.previousSibling;return e},get_node:function(e,t){var i;(e=e&&(e.id||0===e.id)?e.id:e)instanceof E&&e.length&&e[0].id&&(e=e[0].id);try{if(this._model.data[e])e=this._model.data[e];else if("string"==typeof e&&this._model.data[e.replace(/^#/,"")])e=this._model.data[e.replace(/^#/,"")];else if("string"==typeof e&&(i=E("#"+e.replace(E.jstree.idregex,"\\$&"),this.element)).length&&this._model.data[i.closest(".jstree-node").attr("id")])e=this._model.data[i.closest(".jstree-node").attr("id")];else if((i=this.element.find(e)).length&&this._model.data[i.closest(".jstree-node").attr("id")])e=this._model.data[i.closest(".jstree-node").attr("id")];else{if(!(i=this.element.find(e)).length||!i.hasClass("jstree"))return!1;e=this._model.data[E.jstree.root]}return e=t?e.id===E.jstree.root?this.element:E("#"+e.id.replace(E.jstree.idregex,"\\$&"),this.element):e}catch(e){return!1}},get_path:function(e,t,i){if(!(e=e.parents?e:this.get_node(e))||e.id===E.jstree.root||!e.parents)return!1;var r,s,a=[];for(a.push(i?e.id:e.text),r=0,s=e.parents.length;r<s;r++)a.push(i?e.parents[r]:this.get_text(e.parents[r]));return a=a.reverse().slice(1),t?a.join(t):a},get_next_dom:function(e,t){var i;if((e=this.get_node(e,!0))[0]===this.element[0]){i=this._firstChild(this.get_container_ul()[0]);while(i&&0===i.offsetHeight)i=this._nextSibling(i);return!!i&&E(i)}if(!e||!e.length)return!1;if(t){i=e[0];do{i=this._nextSibling(i)}while(i&&0===i.offsetHeight);return!!i&&E(i)}if(e.hasClass("jstree-open")){i=this._firstChild(e.children(".jstree-children")[0]);while(i&&0===i.offsetHeight)i=this._nextSibling(i);if(null!==i)return E(i)}i=e[0];do{i=this._nextSibling(i)}while(i&&0===i.offsetHeight);return null!==i?E(i):e.parentsUntil(".jstree",".jstree-node").nextAll(".jstree-node:visible").first()},get_prev_dom:function(e,t){var i;if((e=this.get_node(e,!0))[0]===this.element[0]){i=this.get_container_ul()[0].lastChild;while(i&&0===i.offsetHeight)i=this._previousSibling(i);return!!i&&E(i)}if(!e||!e.length)return!1;if(t){i=e[0];do{i=this._previousSibling(i)}while(i&&0===i.offsetHeight);return!!i&&E(i)}i=e[0];do{i=this._previousSibling(i)}while(i&&0===i.offsetHeight);if(null===i)return!(!(i=e[0].parentNode.parentNode)||!i.className||-1===i.className.indexOf("jstree-node"))&&E(i);e=E(i);while(e.hasClass("jstree-open"))e=e.children(".jstree-children").first().children(".jstree-node:visible:last");return e},get_parent:function(e){return!(!(e=this.get_node(e))||e.id===E.jstree.root)&&e.parent},get_children_dom:function(e){return(e=this.get_node(e,!0))[0]===this.element[0]?this.get_container_ul().children(".jstree-node"):!(!e||!e.length)&&e.children(".jstree-children").children(".jstree-node")},is_parent:function(e){return(e=this.get_node(e))&&(!1===e.state.loaded||0<e.children.length)},is_loaded:function(e){return(e=this.get_node(e))&&e.state.loaded},is_loading:function(e){return(e=this.get_node(e))&&e.state&&e.state.loading},is_open:function(e){return(e=this.get_node(e))&&e.state.opened},is_closed:function(e){return(e=this.get_node(e))&&this.is_parent(e)&&!e.state.opened},is_leaf:function(e){return!this.is_parent(e)},load_node:function(n,o){var e=this.get_node(n,!0),t,i,r,s,a;if(E.vakata.is_array(n))return this._load_nodes(n.slice(),o),!0;if(!(n=this.get_node(n)))return o&&o.call(this,n,!1),!1;if(n.state.loaded){for(n.state.loaded=!1,r=0,s=n.parents.length;r<s;r++)this._model.data[n.parents[r]].children_d=E.vakata.array_filter(this._model.data[n.parents[r]].children_d,function(e){return-1===E.inArray(e,n.children_d)});for(t=0,i=n.children_d.length;t<i;t++)this._model.data[n.children_d[t]].state.selected&&(a=!0),delete this._model.data[n.children_d[t]];a&&(this._data.core.selected=E.vakata.array_filter(this._data.core.selected,function(e){return-1===E.inArray(e,n.children_d)})),n.children=[],n.children_d=[],a&&this.trigger("changed",{action:"load_node",node:n,selected:this._data.core.selected})}return n.state.failed=!1,n.state.loading=!0,(n.id!==E.jstree.root?e.children(".jstree-anchor"):e).attr("aria-busy",!0),e.addClass("jstree-loading"),this._load_node(n,function(e){(n=this._model.data[n.id]).state.loading=!1,n.state.loaded=e,n.state.failed=!n.state.loaded;for(var t=this.get_node(n,!0),i=0,r=0,s=this._model.data,a=!1,i=0,r=n.children.length;i<r;i++)if(s[n.children[i]]&&!s[n.children[i]].state.hidden){a=!0;break}n.state.loaded&&t&&t.length&&(t.removeClass("jstree-closed jstree-open jstree-leaf"),a?"#"!==n.id&&t.addClass(n.state.opened?"jstree-open":"jstree-closed"):t.addClass("jstree-leaf")),(n.id!==E.jstree.root?t.children(".jstree-anchor"):t).attr("aria-busy",!1),t.removeClass("jstree-loading"),this.trigger("load_node",{node:n,status:e}),o&&o.call(this,n,e)}.bind(this)),!0},_load_nodes:function(e,t,i,r){for(var s=!0,a=function(){this._load_nodes(e,t,!0)},n=this._model.data,o,d,c=[],o=0,d=e.length;o<d;o++)n[e[o]]&&(!n[e[o]].state.loaded&&!n[e[o]].state.failed||!i&&r)&&(this.is_loading(e[o])||this.load_node(e[o],a),s=!1);if(s){for(o=0,d=e.length;o<d;o++)n[e[o]]&&n[e[o]].state.loaded&&c.push(e[o]);t&&!t.done&&(t.call(this,c),t.done=!0)}},load_all:function(e,t){if(e=e||E.jstree.root,!(e=this.get_node(e)))return!1;var i=[],r=this._model.data,s=r[e.id].children_d,a,n;for(e.state&&!e.state.loaded&&i.push(e.id),a=0,n=s.length;a<n;a++)r[s[a]]&&r[s[a]].state&&!r[s[a]].state.loaded&&i.push(s[a]);i.length?this._load_nodes(i,function(){this.load_all(e,t)}):(t&&t.call(this,e),this.trigger("load_all",{node:e}))},_load_node:function(s,a){var e=this.settings.core.data,t,n=function e(){return 3!==this.nodeType&&8!==this.nodeType};return e?E.vakata.is_function(e)?e.call(this,s,function(e){!1===e?a.call(this,!1):this["string"==typeof e?"_append_html_data":"_append_json_data"](s,"string"==typeof e?E(E.parseHTML(e)).filter(n):e,function(e){a.call(this,e)})}.bind(this)):"object"==typeof e?e.url?(e=E.extend(!0,{},e),E.vakata.is_function(e.url)&&(e.url=e.url.call(this,s)),E.vakata.is_function(e.data)&&(e.data=e.data.call(this,s)),E.ajax(e).done(function(e,t,i){var r=i.getResponseHeader("Content-Type");return r&&-1!==r.indexOf("json")||"object"==typeof e?this._append_json_data(s,e,function(e){a.call(this,e)}):r&&-1!==r.indexOf("html")||"string"==typeof e?this._append_html_data(s,E(E.parseHTML(e)).filter(n),function(e){a.call(this,e)}):(this._data.core.last_error={error:"ajax",plugin:"core",id:"core_04",reason:"Could not load node",data:JSON.stringify({id:s.id,xhr:i})},this.settings.core.error.call(this,this._data.core.last_error),a.call(this,!1))}.bind(this)).fail(function(e){this._data.core.last_error={error:"ajax",plugin:"core",id:"core_04",reason:"Could not load node",data:JSON.stringify({id:s.id,xhr:e})},a.call(this,!1),this.settings.core.error.call(this,this._data.core.last_error)}.bind(this))):(t=E.vakata.is_array(e)?E.extend(!0,[],e):E.isPlainObject(e)?E.extend(!0,{},e):e,s.id===E.jstree.root?this._append_json_data(s,t,function(e){a.call(this,e)}):(this._data.core.last_error={error:"nodata",plugin:"core",id:"core_05",reason:"Could not load node",data:JSON.stringify({id:s.id})},this.settings.core.error.call(this,this._data.core.last_error),a.call(this,!1))):"string"==typeof e?s.id===E.jstree.root?this._append_html_data(s,E(E.parseHTML(e)).filter(n),function(e){a.call(this,e)}):(this._data.core.last_error={error:"nodata",plugin:"core",id:"core_06",reason:"Could not load node",data:JSON.stringify({id:s.id})},this.settings.core.error.call(this,this._data.core.last_error),a.call(this,!1)):a.call(this,!1):s.id===E.jstree.root?this._append_html_data(s,this._data.core.original_container_html.clone(!0),function(e){a.call(this,e)}):a.call(this,!1)},_node_changed:function(e){(e=this.get_node(e))&&-1===E.inArray(e.id,this._model.changed)&&this._model.changed.push(e.id)},_append_html_data:function(e,t,i){(e=this.get_node(e)).children=[],e.children_d=[];var t=t.is("ul")?t.children():t,r=e.id,s=[],a=[],n=this._model.data,o=n[r],e=this._data.core.selected.length,d,c,l;for(t.each(function(e,t){(d=this._parse_model_from_html(E(t),r,o.parents.concat()))&&(s.push(d),a.push(d),n[d].children_d.length&&(a=a.concat(n[d].children_d)))}.bind(this)),o.children=s,o.children_d=a,c=0,l=o.parents.length;c<l;c++)n[o.parents[c]].children_d=n[o.parents[c]].children_d.concat(a);this.trigger("model",{nodes:a,parent:r}),r!==E.jstree.root?(this._node_changed(r),this.redraw()):(this.get_container_ul().children(".jstree-initial-node").remove(),this.redraw(!0)),this._data.core.selected.length!==e&&this.trigger("changed",{action:"model",selected:this._data.core.selected}),i.call(this,!0)},_append_json_data:function(e,t,d,i){if(null!==this.element){(e=this.get_node(e)).children=[],e.children_d=[],t.d&&"string"==typeof(t=t.d)&&(t=JSON.parse(t)),E.vakata.is_array(t)||(t=[t]);var r=null,s={df:this._model.default_state,dat:t,par:e.id,m:this._model.data,t_id:this._id,t_cnt:this._cnt,sel:this._data.core.selected},v=this,a=function(e,c){var t=(e=e.data?e.data:e).dat,i=e.par,r=[],s=[],l=[],h=e.df,_=e.t_id,g=e.t_cnt,u=e.m,a=u[i],e=e.sel,n,o,d,f,p=function(e,t,i){i=i?i.concat():[],t&&i.unshift(t);var r=e.id.toString(),s,a,n,o,d={id:r,text:e.text||"",icon:e.icon===c||e.icon,parent:t,parents:i,children:e.children||[],children_d:e.children_d||[],data:e.data,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(s in h)h.hasOwnProperty(s)&&(d.state[s]=h[s]);if(e&&e.data&&e.data.jstree&&e.data.jstree.icon&&(d.icon=e.data.jstree.icon),d.icon!==c&&null!==d.icon&&""!==d.icon||(d.icon=!0),e&&e.data&&(d.data=e.data,e.data.jstree))for(s in e.data.jstree)e.data.jstree.hasOwnProperty(s)&&(d.state[s]=e.data.jstree[s]);if(e&&"object"==typeof e.state)for(s in e.state)e.state.hasOwnProperty(s)&&(d.state[s]=e.state[s]);if(e&&"object"==typeof e.li_attr)for(s in e.li_attr)e.li_attr.hasOwnProperty(s)&&(d.li_attr[s]=e.li_attr[s]);if(d.li_attr.id||(d.li_attr.id=r),e&&"object"==typeof e.a_attr)for(s in e.a_attr)e.a_attr.hasOwnProperty(s)&&(d.a_attr[s]=e.a_attr[s]);for(e&&e.children&&!0===e.children&&(d.state.loaded=!1,d.children=[],d.children_d=[]),s=0,a=(u[d.id]=d).children.length;s<a;s++)n=p(u[d.children[s]],d.id,i),o=u[n],d.children_d.push(n),o.children_d.length&&(d.children_d=d.children_d.concat(o.children_d));return delete e.data,delete e.children,u[d.id].original=e,d.state.selected&&l.push(d.id),d.id},m=function(e,t,i){i=i?i.concat():[],t&&i.unshift(t);var r=!1,s,a,n,o,d;do{r="j"+_+"_"+ ++g}while(u[r]);for(s in d={id:!1,text:"string"==typeof e?e:"",icon:"object"!=typeof e||e.icon===c||e.icon,parent:t,parents:i,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1},h)h.hasOwnProperty(s)&&(d.state[s]=h[s]);if(e&&(e.id||0===e.id)&&(d.id=e.id.toString()),e&&e.text&&(d.text=e.text),e&&e.data&&e.data.jstree&&e.data.jstree.icon&&(d.icon=e.data.jstree.icon),d.icon!==c&&null!==d.icon&&""!==d.icon||(d.icon=!0),e&&e.data&&(d.data=e.data,e.data.jstree))for(s in e.data.jstree)e.data.jstree.hasOwnProperty(s)&&(d.state[s]=e.data.jstree[s]);if(e&&"object"==typeof e.state)for(s in e.state)e.state.hasOwnProperty(s)&&(d.state[s]=e.state[s]);if(e&&"object"==typeof e.li_attr)for(s in e.li_attr)e.li_attr.hasOwnProperty(s)&&(d.li_attr[s]=e.li_attr[s]);if(d.li_attr.id&&!d.id&&0!==d.id&&(d.id=d.li_attr.id.toString()),d.id||0===d.id||(d.id=r),d.li_attr.id||(d.li_attr.id=d.id),e&&"object"==typeof e.a_attr)for(s in e.a_attr)e.a_attr.hasOwnProperty(s)&&(d.a_attr[s]=e.a_attr[s]);if(e&&e.children&&e.children.length){for(s=0,a=e.children.length;s<a;s++)n=m(e.children[s],d.id,i),o=u[n],d.children.push(n),o.children_d.length&&(d.children_d=d.children_d.concat(o.children_d));d.children_d=d.children_d.concat(d.children)}return e&&e.children&&!0===e.children&&(d.state.loaded=!1,d.children=[],d.children_d=[]),delete e.data,delete e.children,d.original=e,(u[d.id]=d).state.selected&&l.push(d.id),d.id};if(t.length&&t[0].id!==c&&t[0].parent!==c){for(o=0,d=t.length;o<d;o++)t[o].children||(t[o].children=[]),t[o].state||(t[o].state={}),u[t[o].id.toString()]=t[o];for(o=0,d=t.length;o<d;o++)u[t[o].parent.toString()]?(u[t[o].parent.toString()].children.push(t[o].id.toString()),a.children_d.push(t[o].id.toString())):void 0!==v&&(v._data.core.last_error={error:"parse",plugin:"core",id:"core_07",reason:"Node with invalid parent",data:JSON.stringify({id:t[o].id.toString(),parent:t[o].parent.toString()})},v.settings.core.error.call(v,v._data.core.last_error));for(o=0,d=a.children.length;o<d;o++)n=p(u[a.children[o]],i,a.parents.concat()),s.push(n),u[n].children_d.length&&(s=s.concat(u[n].children_d));for(o=0,d=a.parents.length;o<d;o++)u[a.parents[o]].children_d=u[a.parents[o]].children_d.concat(s);f={cnt:g,mod:u,sel:e,par:i,dpc:s,add:l}}else{for(o=0,d=t.length;o<d;o++)(n=m(t[o],i,a.parents.concat()))&&(r.push(n),s.push(n),u[n].children_d.length&&(s=s.concat(u[n].children_d)));for(a.children=r,a.children_d=s,o=0,d=a.parents.length;o<d;o++)u[a.parents[o]].children_d=u[a.parents[o]].children_d.concat(s);f={cnt:g,mod:u,sel:e,par:i,dpc:s,add:l}}if("undefined"!=typeof window&&void 0!==window.document)return f;postMessage(f)},n=function(e,t){if(null!==this.element){var i,r;for(i in this._cnt=e.cnt,r=this._model.data)r.hasOwnProperty(i)&&r[i].state&&r[i].state.loading&&e.mod[i]&&(e.mod[i].state.loading=!0);if(this._model.data=e.mod,t){var s,a=e.add,n=e.sel,o=this._data.core.selected.slice(),r=this._model.data;if(n.length!==o.length||E.vakata.array_unique(n.concat(o)).length!==n.length){for(i=0,s=n.length;i<s;i++)-1===E.inArray(n[i],a)&&-1===E.inArray(n[i],o)&&(r[n[i]].state.selected=!1);for(i=0,s=o.length;i<s;i++)-1===E.inArray(o[i],n)&&(r[o[i]].state.selected=!0)}}e.add.length&&(this._data.core.selected=this._data.core.selected.concat(e.add)),this.trigger("model",{nodes:e.dpc,parent:e.par}),e.par!==E.jstree.root?(this._node_changed(e.par),this.redraw()):this.redraw(!0),e.add.length&&this.trigger("changed",{action:"model",selected:this._data.core.selected}),!t&&c?c(function(){d.call(v,!0)}):d.call(v,!0)}};if(this.settings.core.worker&&window.Blob&&window.URL&&window.Worker)try{null===this._wrk&&(this._wrk=window.URL.createObjectURL(new window.Blob(["self.onmessage = "+a.toString()],{type:"text/javascript"}))),!this._data.core.working||i?(this._data.core.working=!0,(r=new window.Worker(this._wrk)).onmessage=function(e){n.call(this,e.data,!0);try{r.terminate(),r=null}catch(e){}this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1}.bind(this),r.onerror=function(e){n.call(this,a(s),!1),this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1}.bind(this),s.par?r.postMessage(s):this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1):this._data.core.worker_queue.push([e,t,d,!0])}catch(e){n.call(this,a(s),!1),this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1}else n.call(this,a(s),!1)}},_parse_model_from_html:function(e,t,i){i=i?[].concat(i):[],t&&i.unshift(t);var r,s,a=this._model.data,n={id:!1,text:!1,icon:!0,parent:t,parents:i,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1},o,t,d;for(o in this._model.default_state)this._model.default_state.hasOwnProperty(o)&&(n.state[o]=this._model.default_state[o]);if(t=E.vakata.attributes(e,!0),E.each(t,function(e,t){return!(t=E.vakata.trim(t)).length||(n.li_attr[e]=t,void("id"===e&&(n.id=t.toString())))}),(t=e.children("a").first()).length&&(t=E.vakata.attributes(t,!0),E.each(t,function(e,t){(t=E.vakata.trim(t)).length&&(n.a_attr[e]=t)})),(t=(e.children("a").first().length?e.children("a").first():e).clone()).children("ins, i, ul").remove(),t=t.html(),t=E("<div></div>").html(t),n.text=this.settings.core.force_text?t.text():t.html(),t=e.data(),n.data=t?E.extend(!0,{},t):null,n.state.opened=e.hasClass("jstree-open"),n.state.selected=e.children("a").hasClass("jstree-clicked"),n.state.disabled=e.children("a").hasClass("jstree-disabled"),n.data&&n.data.jstree)for(o in n.data.jstree)n.data.jstree.hasOwnProperty(o)&&(n.state[o]=n.data.jstree[o]);(t=e.children("a").children(".jstree-themeicon")).length&&(n.icon=!t.hasClass("jstree-themeicon-hidden")&&t.attr("rel")),n.state.icon!==P&&(n.icon=n.state.icon),n.icon!==P&&null!==n.icon&&""!==n.icon||(n.icon=!0),t=e.children("ul").children("li");do{d="j"+this._id+"_"+ ++this._cnt}while(a[d]);return n.id=n.li_attr.id?n.li_attr.id.toString():d,t.length?(t.each(function(e,t){r=this._parse_model_from_html(E(t),n.id,i),s=this._model.data[r],n.children.push(r),s.children_d.length&&(n.children_d=n.children_d.concat(s.children_d))}.bind(this)),n.children_d=n.children_d.concat(n.children)):e.hasClass("jstree-closed")&&(n.state.loaded=!1),n.li_attr.class&&(n.li_attr.class=n.li_attr.class.replace("jstree-closed","").replace("jstree-open","")),n.a_attr.class&&(n.a_attr.class=n.a_attr.class.replace("jstree-clicked","").replace("jstree-disabled","")),(a[n.id]=n).state.selected&&this._data.core.selected.push(n.id),n.id},_parse_model_from_flat_json:function(e,t,i){i=i?i.concat():[],t&&i.unshift(t);var r=e.id.toString(),s=this._model.data,a=this._model.default_state,n,o,d,c,l={id:r,text:e.text||"",icon:e.icon===P||e.icon,parent:t,parents:i,children:e.children||[],children_d:e.children_d||[],data:e.data,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(n in a)a.hasOwnProperty(n)&&(l.state[n]=a[n]);if(e&&e.data&&e.data.jstree&&e.data.jstree.icon&&(l.icon=e.data.jstree.icon),l.icon!==P&&null!==l.icon&&""!==l.icon||(l.icon=!0),e&&e.data&&(l.data=e.data,e.data.jstree))for(n in e.data.jstree)e.data.jstree.hasOwnProperty(n)&&(l.state[n]=e.data.jstree[n]);if(e&&"object"==typeof e.state)for(n in e.state)e.state.hasOwnProperty(n)&&(l.state[n]=e.state[n]);if(e&&"object"==typeof e.li_attr)for(n in e.li_attr)e.li_attr.hasOwnProperty(n)&&(l.li_attr[n]=e.li_attr[n]);if(l.li_attr.id||(l.li_attr.id=r),e&&"object"==typeof e.a_attr)for(n in e.a_attr)e.a_attr.hasOwnProperty(n)&&(l.a_attr[n]=e.a_attr[n]);for(e&&e.children&&!0===e.children&&(l.state.loaded=!1,l.children=[],l.children_d=[]),n=0,o=(s[l.id]=l).children.length;n<o;n++)c=s[d=this._parse_model_from_flat_json(s[l.children[n]],l.id,i)],l.children_d.push(d),c.children_d.length&&(l.children_d=l.children_d.concat(c.children_d));return delete e.data,delete e.children,s[l.id].original=e,l.state.selected&&this._data.core.selected.push(l.id),l.id},_parse_model_from_json:function(e,t,i){i=i?i.concat():[],t&&i.unshift(t);var r=!1,s,a,n,o,d=this._model.data,c=this._model.default_state,l;do{r="j"+this._id+"_"+ ++this._cnt}while(d[r]);for(s in l={id:!1,text:"string"==typeof e?e:"",icon:"object"!=typeof e||e.icon===P||e.icon,parent:t,parents:i,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1},c)c.hasOwnProperty(s)&&(l.state[s]=c[s]);if(e&&(e.id||0===e.id)&&(l.id=e.id.toString()),e&&e.text&&(l.text=e.text),e&&e.data&&e.data.jstree&&e.data.jstree.icon&&(l.icon=e.data.jstree.icon),l.icon!==P&&null!==l.icon&&""!==l.icon||(l.icon=!0),e&&e.data&&(l.data=e.data,e.data.jstree))for(s in e.data.jstree)e.data.jstree.hasOwnProperty(s)&&(l.state[s]=e.data.jstree[s]);if(e&&"object"==typeof e.state)for(s in e.state)e.state.hasOwnProperty(s)&&(l.state[s]=e.state[s]);if(e&&"object"==typeof e.li_attr)for(s in e.li_attr)e.li_attr.hasOwnProperty(s)&&(l.li_attr[s]=e.li_attr[s]);if(l.li_attr.id&&!l.id&&0!==l.id&&(l.id=l.li_attr.id.toString()),l.id||0===l.id||(l.id=r),l.li_attr.id||(l.li_attr.id=l.id),e&&"object"==typeof e.a_attr)for(s in e.a_attr)e.a_attr.hasOwnProperty(s)&&(l.a_attr[s]=e.a_attr[s]);if(e&&e.children&&e.children.length){for(s=0,a=e.children.length;s<a;s++)o=d[n=this._parse_model_from_json(e.children[s],l.id,i)],l.children.push(n),o.children_d.length&&(l.children_d=l.children_d.concat(o.children_d));l.children_d=l.children.concat(l.children_d)}return e&&e.children&&!0===e.children&&(l.state.loaded=!1,l.children=[],l.children_d=[]),delete e.data,delete e.children,l.original=e,(d[l.id]=l).state.selected&&this._data.core.selected.push(l.id),l.id},_redraw:function(){for(var e=(this._model.force_full_redraw?this._model.data[E.jstree.root].children:this._model.changed).concat([]),t=b.createElement("UL"),i,r,s,a=this._data.core.focused,r=0,s=e.length;r<s;r++)(i=this.redraw_node(e[r],!0,this._model.force_full_redraw))&&this._model.force_full_redraw&&t.appendChild(i);this._model.force_full_redraw&&(t.className=this.get_container_ul()[0].className,t.setAttribute("role","presentation"),this.element.empty().append(t)),null!==a&&this.settings.core.restore_focus&&((i=this.get_node(a,!0))&&i.length&&i.children(".jstree-anchor")[0]!==b.activeElement?i.children(".jstree-anchor").trigger("focus"):this._data.core.focused=null),this._model.force_full_redraw=!1,this._model.changed=[],this.trigger("redraw",{nodes:e})},redraw:function(e){e&&(this._model.force_full_redraw=!0),this._redraw()},draw_children:function(e){var t=this.get_node(e),i=!1,r=!1,s=!1,a=b;if(!t)return!1;if(t.id===E.jstree.root)return this.redraw(!0);if(!(e=this.get_node(e,!0))||!e.length)return!1;if(e.children(".jstree-children").remove(),e=e[0],t.children.length&&t.state.loaded){for((s=a.createElement("UL")).setAttribute("role","group"),s.className="jstree-children",i=0,r=t.children.length;i<r;i++)s.appendChild(this.redraw_node(t.children[i],!0,!0));e.appendChild(s)}},redraw_node:function(e,t,i,r){var s=this.get_node(e),a=!1,n=!1,o=!1,d=!1,c=!1,l=!1,h="",_=b,g=this._model.data,u=!1,f=!1,p=null,m=0,v=0,j=!1,k=!1;if(!s)return!1;if(s.id===E.jstree.root)return this.redraw(!0);if(t=t||0===s.children.length,e=b.querySelector?this.element[0].querySelector("#"+(-1!=="0123456789".indexOf(s.id[0])?"\\3"+s.id[0]+" "+s.id.substr(1).replace(E.jstree.idregex,"\\$&"):s.id.replace(E.jstree.idregex,"\\$&"))):b.getElementById(s.id))e=E(e),i||((a=e.parent().parent()[0])===this.element[0]&&(a=null),n=e.index()),(t=!t&&s.children.length&&!e.children(".jstree-children").length?!0:t)||(o=e.children(".jstree-children")[0]),u=e.children(".jstree-anchor")[0]===b.activeElement,e.remove();else if(t=!0,!i){if(!(null===(a=s.parent!==E.jstree.root?E("#"+s.parent.replace(E.jstree.idregex,"\\$&"),this.element)[0]:null)||a&&g[s.parent].state.opened))return!1;n=E.inArray(s.id,(null===a?g[E.jstree.root]:g[s.parent]).children)}for(d in e=this._data.core.node.cloneNode(!0),h="jstree-node ",s.li_attr)s.li_attr.hasOwnProperty(d)&&"id"!==d&&("class"!==d?e.setAttribute(d,s.li_attr[d]):h+=s.li_attr[d]);for(s.a_attr.id||(s.a_attr.id=s.id+"_anchor"),e.childNodes[1].setAttribute("aria-selected",!!s.state.selected),e.childNodes[1].setAttribute("aria-level",s.parents.length),this.settings.core.compute_elements_positions&&(e.childNodes[1].setAttribute("aria-setsize",g[s.parent].children.length),e.childNodes[1].setAttribute("aria-posinset",g[s.parent].children.indexOf(s.id)+1)),s.state.disabled&&e.childNodes[1].setAttribute("aria-disabled",!0),d=0,c=s.children.length;d<c;d++)if(!g[s.children[d]].state.hidden){j=!0;break}if(null!==s.parent&&g[s.parent]&&!s.state.hidden&&(d=E.inArray(s.id,g[s.parent].children),k=s.id,-1!==d))for(d++,c=g[s.parent].children.length;d<c;d++)if((k=!g[g[s.parent].children[d]].state.hidden?g[s.parent].children[d]:k)!==s.id)break;for(c in s.state.hidden&&(h+=" jstree-hidden"),s.state.loading&&(h+=" jstree-loading"),s.state.loaded&&!j?h+=" jstree-leaf":(h+=s.state.opened&&s.state.loaded?" jstree-open":" jstree-closed",e.childNodes[1].setAttribute("aria-expanded",s.state.opened&&s.state.loaded)),k===s.id&&(h+=" jstree-last"),e.id=s.id,e.className=h,h=(s.state.selected?" jstree-clicked":"")+(s.state.disabled?" jstree-disabled":""),s.a_attr)s.a_attr.hasOwnProperty(c)&&("href"===c&&"#"===s.a_attr[c]||("class"!==c?e.childNodes[1].setAttribute(c,s.a_attr[c]):h+=" "+s.a_attr[c]));if(h.length&&(e.childNodes[1].className="jstree-anchor "+h),(s.icon&&!0!==s.icon||!1===s.icon)&&(!1===s.icon?e.childNodes[1].childNodes[0].className+=" jstree-themeicon-hidden":-1===s.icon.indexOf("/")&&-1===s.icon.indexOf(".")?e.childNodes[1].childNodes[0].className+=" "+s.icon+" jstree-themeicon-custom":(e.childNodes[1].childNodes[0].style.backgroundImage='url("'+s.icon+'")',e.childNodes[1].childNodes[0].style.backgroundPosition="center center",e.childNodes[1].childNodes[0].style.backgroundSize="auto",e.childNodes[1].childNodes[0].className+=" jstree-themeicon-custom")),this.settings.core.force_text?e.childNodes[1].appendChild(_.createTextNode(s.text)):e.childNodes[1].innerHTML+=s.text,t&&s.children.length&&(s.state.opened||r)&&s.state.loaded){for((l=_.createElement("UL")).setAttribute("role","group"),l.className="jstree-children",d=0,c=s.children.length;d<c;d++)l.appendChild(this.redraw_node(s.children[d],t,!0));e.appendChild(l)}if(o&&e.appendChild(o),!i){for(d=0,c=(a=a||this.element[0]).childNodes.length;d<c;d++)if(a.childNodes[d]&&a.childNodes[d].className&&-1!==a.childNodes[d].className.indexOf("jstree-children")){p=a.childNodes[d];break}p||((p=_.createElement("UL")).setAttribute("role","group"),p.className="jstree-children",a.appendChild(p)),n<(a=p).childNodes.length?a.insertBefore(e,a.childNodes[n]):a.appendChild(e),u&&(m=this.element[0].scrollTop,v=this.element[0].scrollLeft,e.childNodes[1].focus(),this.element[0].scrollTop=m,this.element[0].scrollLeft=v)}return s.state.opened&&!s.state.loaded&&(s.state.opened=!1,setTimeout(function(){this.open_node(s.id,!1,0)}.bind(this),0)),e},open_node:function(e,i,r){var t,s,a,n;if(E.vakata.is_array(e)){for(t=0,s=(e=e.slice()).length;t<s;t++)this.open_node(e[t],i,r);return!0}return!(!(e=this.get_node(e))||e.id===E.jstree.root)&&(r=r===P?this.settings.core.animation:r,this.is_closed(e)?this.is_loaded(e)?(a=this.get_node(e,!0),n=this,a.length&&(r&&a.children(".jstree-children").length&&a.children(".jstree-children").stop(!0,!0),e.children.length&&!this._firstChild(a.children(".jstree-children")[0])&&this.draw_children(e),r?(this.trigger("before_open",{node:e}),a.children(".jstree-children").css("display","none").end().removeClass("jstree-closed").addClass("jstree-open").children(".jstree-anchor").attr("aria-expanded",!0).end().children(".jstree-children").stop(!0,!0).slideDown(r,function(){this.style.display="",n.element&&n.trigger("after_open",{node:e})})):(this.trigger("before_open",{node:e}),a[0].className=a[0].className.replace("jstree-closed","jstree-open"),a[0].childNodes[1].setAttribute("aria-expanded",!0))),e.state.opened=!0,i&&i.call(this,e,!0),a.length||this.trigger("before_open",{node:e}),this.trigger("open_node",{node:e}),r&&a.length||this.trigger("after_open",{node:e}),!0):this.is_loading(e)?setTimeout(function(){this.open_node(e,i,r)}.bind(this),500):void this.load_node(e,function(e,t){return t?this.open_node(e,i,r):!!i&&i.call(this,e,!1)}):(i&&i.call(this,e,!1),!1))},_open_to:function(e){if(!(e=this.get_node(e))||e.id===E.jstree.root)return!1;for(var t,i,r=e.parents,t=0,i=r.length;t<i;t+=1)t!==E.jstree.root&&this.open_node(r[t],!1,0);return E("#"+e.id.replace(E.jstree.idregex,"\\$&"),this.element)},close_node:function(e,t){var i,r,s,a;if(E.vakata.is_array(e)){for(i=0,r=(e=e.slice()).length;i<r;i++)this.close_node(e[i],t);return!0}return!(!(e=this.get_node(e))||e.id===E.jstree.root)&&(!this.is_closed(e)&&(t=t===P?this.settings.core.animation:t,a=(s=this).get_node(e,!0),e.state.opened=!1,this.trigger("close_node",{node:e}),void(a.length?t?a.children(".jstree-children").attr("style","display:block !important").end().removeClass("jstree-open").addClass("jstree-closed").children(".jstree-anchor").attr("aria-expanded",!1).end().children(".jstree-children").stop(!0,!0).slideUp(t,function(){this.style.display="",a.children(".jstree-children").remove(),s.element&&s.trigger("after_close",{node:e})}):(a[0].className=a[0].className.replace("jstree-open","jstree-closed"),a.children(".jstree-anchor").attr("aria-expanded",!1),a.children(".jstree-children").remove(),this.trigger("after_close",{node:e})):this.trigger("after_close",{node:e}))))},toggle_node:function(e){var t,i;if(E.vakata.is_array(e)){for(t=0,i=(e=e.slice()).length;t<i;t++)this.toggle_node(e[t]);return!0}return this.is_closed(e)?this.open_node(e):this.is_open(e)?this.close_node(e):void 0},open_all:function(e,i,r){if(e=e||E.jstree.root,!(e=this.get_node(e)))return!1;var t=e.id===E.jstree.root?this.get_container_ul():this.get_node(e,!0),s,a,n;if(!t.length){for(s=0,a=e.children_d.length;s<a;s++)this.is_closed(this._model.data[e.children_d[s]])&&(this._model.data[e.children_d[s]].state.opened=!0);return this.trigger("open_all",{node:e})}r=r||t,(t=(n=this).is_closed(e)?t.find(".jstree-closed").addBack():t.find(".jstree-closed")).each(function(){n.open_node(this,function(e,t){t&&this.is_parent(e)&&this.open_all(e,i,r)},i||0)}),0===r.find(".jstree-closed").length&&this.trigger("open_all",{node:this.get_node(r)})},close_all:function(e,t){if(e=e||E.jstree.root,!(e=this.get_node(e)))return!1;var i=e.id===E.jstree.root?this.get_container_ul():this.get_node(e,!0),r=this,s,a;for(i.length&&(i=this.is_open(e)?i.find(".jstree-open").addBack():i.find(".jstree-open"),E(i.get().reverse()).each(function(){r.close_node(this,t||0)})),s=0,a=e.children_d.length;s<a;s++)this._model.data[e.children_d[s]].state.opened=!1;this.trigger("close_all",{node:e})},is_disabled:function(e){return(e=this.get_node(e))&&e.state&&e.state.disabled},enable_node:function(e){var t,i;if(E.vakata.is_array(e)){for(t=0,i=(e=e.slice()).length;t<i;t++)this.enable_node(e[t]);return!0}if(!(e=this.get_node(e))||e.id===E.jstree.root)return!1;e.state.disabled=!1,this.get_node(e,!0).children(".jstree-anchor").removeClass("jstree-disabled").attr("aria-disabled",!1),this.trigger("enable_node",{node:e})},disable_node:function(e){var t,i;if(E.vakata.is_array(e)){for(t=0,i=(e=e.slice()).length;t<i;t++)this.disable_node(e[t]);return!0}if(!(e=this.get_node(e))||e.id===E.jstree.root)return!1;e.state.disabled=!0,this.get_node(e,!0).children(".jstree-anchor").addClass("jstree-disabled").attr("aria-disabled",!0),this.trigger("disable_node",{node:e})},is_hidden:function(e){return!0===(e=this.get_node(e)).state.hidden},hide_node:function(e,t){var i,r;if(E.vakata.is_array(e)){for(i=0,r=(e=e.slice()).length;i<r;i++)this.hide_node(e[i],!0);return t||this.redraw(),!0}if(!(e=this.get_node(e))||e.id===E.jstree.root)return!1;e.state.hidden||(e.state.hidden=!0,this._node_changed(e.parent),t||this.redraw(),this.trigger("hide_node",{node:e}))},show_node:function(e,t){var i,r;if(E.vakata.is_array(e)){for(i=0,r=(e=e.slice()).length;i<r;i++)this.show_node(e[i],!0);return t||this.redraw(),!0}if(!(e=this.get_node(e))||e.id===E.jstree.root)return!1;e.state.hidden&&(e.state.hidden=!1,this._node_changed(e.parent),t||this.redraw(),this.trigger("show_node",{node:e}))},hide_all:function(e){var t,i=this._model.data,r=[];for(t in i)i.hasOwnProperty(t)&&t!==E.jstree.root&&!i[t].state.hidden&&(i[t].state.hidden=!0,r.push(t));return this._model.force_full_redraw=!0,e||this.redraw(),this.trigger("hide_all",{nodes:r}),r},show_all:function(e){var t,i=this._model.data,r=[];for(t in i)i.hasOwnProperty(t)&&t!==E.jstree.root&&i[t].state.hidden&&(i[t].state.hidden=!1,r.push(t));return this._model.force_full_redraw=!0,e||this.redraw(),this.trigger("show_all",{nodes:r}),r},activate_node:function(e,t){if(this.is_disabled(e))return!1;if(t&&"object"==typeof t||(t={}),this._data.core.last_clicked=this._data.core.last_clicked&&this._data.core.last_clicked.id!==P?this.get_node(this._data.core.last_clicked.id):null,this._data.core.last_clicked&&!this._data.core.last_clicked.state.selected&&(this._data.core.last_clicked=null),!this._data.core.last_clicked&&this._data.core.selected.length&&(this._data.core.last_clicked=this.get_node(this._data.core.selected[this._data.core.selected.length-1])),this.settings.core.multiple&&(t.metaKey||t.ctrlKey||t.shiftKey)&&(!t.shiftKey||this._data.core.last_clicked&&this.get_parent(e)&&this.get_parent(e)===this._data.core.last_clicked.parent))if(t.shiftKey){for(var i=this.get_node(e).id,r=this._data.core.last_clicked.id,s=this.get_node(this._data.core.last_clicked.parent).children,a=!1,n,o,n=0,o=s.length;n<o;n+=1)s[n]===i&&(a=!a),s[n]===r&&(a=!a),this.is_disabled(s[n])||!a&&s[n]!==i&&s[n]!==r?t.ctrlKey||this.deselect_node(s[n],!0,t):this.is_hidden(s[n])||this.select_node(s[n],!0,!1,t);this.trigger("changed",{action:"select_node",node:this.get_node(e),selected:this._data.core.selected,event:t})}else this.is_selected(e)?this.deselect_node(e,!1,t):(t.ctrlKey&&(this._data.core.last_clicked=this.get_node(e)),this.select_node(e,!1,!1,t));else!this.settings.core.multiple&&(t.metaKey||t.ctrlKey||t.shiftKey)&&this.is_selected(e)?this.deselect_node(e,!1,t):(!this.settings.core.allow_reselect&&this.is_selected(e)&&1===this._data.core.selected.length||(this.deselect_all(!0),this.select_node(e,!1,!1,t)),this._data.core.last_clicked=this.get_node(e));this.trigger("activate_node",{node:this.get_node(e),event:t})},hover_node:function(e){if(!(e=this.get_node(e,!0))||!e.length||e.children(".jstree-hovered").length)return!1;var t=this.element.find(".jstree-hovered"),i=this.element;t&&t.length&&this.dehover_node(t),e.children(".jstree-anchor").addClass("jstree-hovered"),this.trigger("hover_node",{node:this.get_node(e)}),setTimeout(function(){i.attr("aria-activedescendant",e[0].id)},0)},dehover_node:function(e){if(!(e=this.get_node(e,!0))||!e.length||!e.children(".jstree-hovered").length)return!1;e.children(".jstree-anchor").removeClass("jstree-hovered"),this.trigger("dehover_node",{node:this.get_node(e)})},select_node:function(e,t,i,r){var s,a,n,o;if(E.vakata.is_array(e)){for(a=0,n=(e=e.slice()).length;a<n;a++)this.select_node(e[a],t,i,r);return!0}if(!(e=this.get_node(e))||e.id===E.jstree.root)return!1;s=this.get_node(e,!0),e.state.selected||(e.state.selected=!0,this._data.core.selected.push(e.id),(s=!i?this._open_to(e):s)&&s.length&&s.children(".jstree-anchor").addClass("jstree-clicked").attr("aria-selected",!0),this.trigger("select_node",{node:e,selected:this._data.core.selected,event:r}),t||this.trigger("changed",{action:"select_node",node:e,selected:this._data.core.selected,event:r}))},deselect_node:function(e,t,i){var r,s,a;if(E.vakata.is_array(e)){for(r=0,s=(e=e.slice()).length;r<s;r++)this.deselect_node(e[r],t,i);return!0}if(!(e=this.get_node(e))||e.id===E.jstree.root)return!1;a=this.get_node(e,!0),e.state.selected&&(e.state.selected=!1,this._data.core.selected=E.vakata.array_remove_item(this._data.core.selected,e.id),a.length&&a.children(".jstree-anchor").removeClass("jstree-clicked").attr("aria-selected",!1),this.trigger("deselect_node",{node:e,selected:this._data.core.selected,event:i}),t||this.trigger("changed",{action:"deselect_node",node:e,selected:this._data.core.selected,event:i}))},select_all:function(e){var t=this._data.core.selected.concat([]),i,r;for(this._data.core.selected=this._model.data[E.jstree.root].children_d.concat(),i=0,r=this._data.core.selected.length;i<r;i++)this._model.data[this._data.core.selected[i]]&&(this._model.data[this._data.core.selected[i]].state.selected=!0);this.redraw(!0),this.trigger("select_all",{selected:this._data.core.selected}),e||this.trigger("changed",{action:"select_all",selected:this._data.core.selected,old_selection:t})},deselect_all:function(e){for(var t=this._data.core.selected.concat([]),i,r,i=0,r=this._data.core.selected.length;i<r;i++)this._model.data[this._data.core.selected[i]]&&(this._model.data[this._data.core.selected[i]].state.selected=!1);this._data.core.selected=[],this.element.find(".jstree-clicked").removeClass("jstree-clicked").attr("aria-selected",!1),this.trigger("deselect_all",{selected:this._data.core.selected,node:t}),e||this.trigger("changed",{action:"deselect_all",selected:this._data.core.selected,old_selection:t})},is_selected:function(e){return!(!(e=this.get_node(e))||e.id===E.jstree.root)&&e.state.selected},get_selected:function(e){return e?E.map(this._data.core.selected,function(e){return this.get_node(e)}.bind(this)):this._data.core.selected.slice()},get_top_selected:function(e){for(var t=this.get_selected(!0),i={},r,s,a,n,r=0,s=t.length;r<s;r++)i[t[r].id]=t[r];for(r=0,s=t.length;r<s;r++)for(a=0,n=t[r].children_d.length;a<n;a++)i[t[r].children_d[a]]&&delete i[t[r].children_d[a]];for(r in t=[],i)i.hasOwnProperty(r)&&t.push(r);return e?E.map(t,function(e){return this.get_node(e)}.bind(this)):t},get_bottom_selected:function(e){for(var t=this.get_selected(!0),i=[],r,s,r=0,s=t.length;r<s;r++)t[r].children.length||i.push(t[r].id);return e?E.map(i,function(e){return this.get_node(e)}.bind(this)):i},get_state:function(){var e={core:{open:[],loaded:[],scroll:{left:this.element.scrollLeft(),top:this.element.scrollTop()},selected:[]}},t;for(t in this._model.data)this._model.data.hasOwnProperty(t)&&t!==E.jstree.root&&(this._model.data[t].state.loaded&&this.settings.core.loaded_state&&e.core.loaded.push(t),this._model.data[t].state.opened&&e.core.open.push(t),this._model.data[t].state.selected&&e.core.selected.push(t));return e},set_state:function(t,i){if(t){if(t.core&&t.core.selected&&t.core.initial_selection===P&&(t.core.initial_selection=this._data.core.selected.concat([]).sort().join(",")),t.core){var e,r,s,a,n;if(t.core.loaded)return this.settings.core.loaded_state&&E.vakata.is_array(t.core.loaded)&&t.core.loaded.length?this._load_nodes(t.core.loaded,function(e){delete t.core.loaded,this.set_state(t,i)}):(delete t.core.loaded,this.set_state(t,i)),!1;if(t.core.open)return E.vakata.is_array(t.core.open)&&t.core.open.length?this._load_nodes(t.core.open,function(e){this.open_node(e,!1,0),delete t.core.open,this.set_state(t,i)}):(delete t.core.open,this.set_state(t,i)),!1;if(t.core.scroll)return t.core.scroll&&t.core.scroll.left!==P&&this.element.scrollLeft(t.core.scroll.left),t.core.scroll&&t.core.scroll.top!==P&&this.element.scrollTop(t.core.scroll.top),delete t.core.scroll,this.set_state(t,i),!1;if(t.core.selected)return a=this,t.core.initial_selection!==P&&t.core.initial_selection!==this._data.core.selected.concat([]).sort().join(",")||(this.deselect_all(),E.each(t.core.selected,function(e,t){a.select_node(t,!1,!0)})),delete t.core.initial_selection,delete t.core.selected,this.set_state(t,i),!1;for(n in t)t.hasOwnProperty(n)&&"core"!==n&&-1===E.inArray(n,this.settings.plugins)&&delete t[n];if(E.isEmptyObject(t.core))return delete t.core,this.set_state(t,i),!1}return E.isEmptyObject(t)?(t=null,i&&i.call(this),this.trigger("set_state"),!1):!0}return!1},refresh:function(e,t){this._data.core.state=!0===t?{}:this.get_state(),t&&E.vakata.is_function(t)&&(this._data.core.state=t.call(this,this._data.core.state)),this._cnt=0,this._model.data={},this._model.data[E.jstree.root]={id:E.jstree.root,parent:null,parents:[],children:[],children_d:[],state:{loaded:!1}},this._data.core.selected=[],this._data.core.last_clicked=null,this._data.core.focused=null;var i=this.get_container_ul()[0].className;e||(this.element.html("<ul class='"+i+"' role='group'><li class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='none' id='j"+this._id+"_loading'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' role='treeitem' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>"+this.get_string("Loading ...")+"</a></li></ul>"),this.element.attr("aria-activedescendant","j"+this._id+"_loading")),this.load_node(E.jstree.root,function(e,t){t&&(this.get_container_ul()[0].className=i,this._firstChild(this.get_container_ul()[0])&&this.element.attr("aria-activedescendant",this._firstChild(this.get_container_ul()[0]).id),this.set_state(E.extend(!0,{},this._data.core.state),function(){this.trigger("refresh")})),this._data.core.state=null})},refresh_node:function(t){if(!(t=this.get_node(t))||t.id===E.jstree.root)return!1;var i=[],e=[],r=this._data.core.selected.concat([]);e.push(t.id),!0===t.state.opened&&i.push(t.id),this.get_node(t,!0).find(".jstree-open").each(function(){e.push(this.id),i.push(this.id)}),this._load_nodes(e,function(e){this.open_node(i,!1,0),this.select_node(r),this.trigger("refresh_node",{node:t,nodes:e})}.bind(this),!1,!0)},set_id:function(e,t){if(!(e=this.get_node(e))||e.id===E.jstree.root)return!1;var i,r,s=this._model.data,a=e.id;for(t=t.toString(),s[e.parent].children[E.inArray(e.id,s[e.parent].children)]=t,i=0,r=e.parents.length;i<r;i++)s[e.parents[i]].children_d[E.inArray(e.id,s[e.parents[i]].children_d)]=t;for(i=0,r=e.children.length;i<r;i++)s[e.children[i]].parent=t;for(i=0,r=e.children_d.length;i<r;i++)s[e.children_d[i]].parents[E.inArray(e.id,s[e.children_d[i]].parents)]=t;return-1!==(i=E.inArray(e.id,this._data.core.selected))&&(this._data.core.selected[i]=t),(i=this.get_node(e.id,!0))&&(i.attr("id",t),this.element.attr("aria-activedescendant")===e.id&&this.element.attr("aria-activedescendant",t)),delete s[e.id],e.id=t,s[e.li_attr.id=t]=e,this.trigger("set_id",{node:e,new:e.id,old:a}),!0},get_text:function(e){return!(!(e=this.get_node(e))||e.id===E.jstree.root)&&e.text},set_text:function(e,t){var i,r;if(E.vakata.is_array(e)){for(i=0,r=(e=e.slice()).length;i<r;i++)this.set_text(e[i],t);return!0}return!(!(e=this.get_node(e))||e.id===E.jstree.root)&&(e.text=t,this.get_node(e,!0).length&&this.redraw_node(e.id),this.trigger("set_text",{obj:e,text:t}),!0)},get_json:function(e,t,i){if(!(e=this.get_node(e||E.jstree.root)))return!1;t&&t.flat&&!i&&(i=[]);var r={id:e.id,text:e.text,icon:this.get_icon(e),li_attr:E.extend(!0,{},e.li_attr),a_attr:E.extend(!0,{},e.a_attr),state:{},data:(!t||!t.no_data)&&E.extend(!0,E.vakata.is_array(e.data)?[]:{},e.data)},s,a;if(t&&t.flat?r.parent=e.parent:r.children=[],t&&t.no_state)delete r.state;else for(s in e.state)e.state.hasOwnProperty(s)&&(r.state[s]=e.state[s]);if(t&&t.no_li_attr&&delete r.li_attr,t&&t.no_a_attr&&delete r.a_attr,t&&t.no_id&&(delete r.id,r.li_attr&&r.li_attr.id&&delete r.li_attr.id,r.a_attr&&r.a_attr.id&&delete r.a_attr.id),t&&t.flat&&e.id!==E.jstree.root&&i.push(r),!t||!t.no_children)for(s=0,a=e.children.length;s<a;s++)t&&t.flat?this.get_json(e.children[s],t,i):r.children.push(this.get_json(e.children[s],t));return t&&t.flat?i:e.id===E.jstree.root?r.children:r},create_node:function(e,t,i,r,s){if(null===e&&(e=E.jstree.root),!(e=this.get_node(e)))return!1;if(!(i=i===P?"last":i).toString().match(/^(before|after)$/)&&!s&&!this.is_loaded(e))return this.load_node(e,function(){this.create_node(e,t,i,r,!0)});var a,n,o,d;switch((t="string"==typeof(t=t||{text:this.get_string("New node")})?{text:t}:E.extend(!0,{},t)).text===P&&(t.text=this.get_string("New node")),i=e.id===E.jstree.root&&"after"===(i="before"===i?"first":i)?"last":i){case"before":a=this.get_node(e.parent),i=E.inArray(e.id,a.children),e=a;break;case"after":a=this.get_node(e.parent),i=E.inArray(e.id,a.children)+1,e=a;break;case"inside":case"first":i=0;break;case"last":i=e.children.length;break;default:i=i||0}if(i>e.children.length&&(i=e.children.length),t.id===P&&(t.id=!0),!this.check("create_node",t,e,i))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(!0===t.id&&delete t.id,!(t=this._parse_model_from_json(t,e.id,e.parents.concat())))return!1;for(a=this.get_node(t),(n=[]).push(t),n=n.concat(a.children_d),this.trigger("model",{nodes:n,parent:e.id}),e.children_d=e.children_d.concat(n),o=0,d=e.parents.length;o<d;o++)this._model.data[e.parents[o]].children_d=this._model.data[e.parents[o]].children_d.concat(n);for(t=a,a=[],o=0,d=e.children.length;o<d;o++)a[i<=o?o+1:o]=e.children[o];return a[i]=t.id,e.children=a,this.redraw_node(e,!0),this.trigger("create_node",{node:this.get_node(t),parent:e.id,position:i}),r&&r.call(this,this.get_node(t)),t.id},rename_node:function(e,t){var i,r,s;if(E.vakata.is_array(e)){for(i=0,r=(e=e.slice()).length;i<r;i++)this.rename_node(e[i],t);return!0}return!(!(e=this.get_node(e))||e.id===E.jstree.root)&&(s=e.text,this.check("rename_node",e,this.get_parent(e),t)?(this.set_text(e,t),this.trigger("rename_node",{node:e,text:t,old:s}),!0):(this.settings.core.error.call(this,this._data.core.last_error),!1))},delete_node:function(e){var t,i,r,s,a,n,o,d,c,l,h,s;if(E.vakata.is_array(e)){for(t=0,i=(e=e.slice()).length;t<i;t++)this.delete_node(e[t]);return!0}if(!(e=this.get_node(e))||e.id===E.jstree.root)return!1;if(r=this.get_node(e.parent),s=E.inArray(e.id,r.children),l=!1,!this.check("delete_node",e,r,s))return this.settings.core.error.call(this,this._data.core.last_error),!1;for(-1!==s&&(r.children=E.vakata.array_remove(r.children,s)),(a=e.children_d.concat([])).push(e.id),n=0,o=e.parents.length;n<o;n++)this._model.data[e.parents[n]].children_d=E.vakata.array_filter(this._model.data[e.parents[n]].children_d,function(e){return-1===E.inArray(e,a)});for(d=0,c=a.length;d<c;d++)if(this._model.data[a[d]].state.selected){l=!0;break}for(l&&(this._data.core.selected=E.vakata.array_filter(this._data.core.selected,function(e){return-1===E.inArray(e,a)})),this.trigger("delete_node",{node:e,parent:r.id}),l&&this.trigger("changed",{action:"delete_node",node:e,selected:this._data.core.selected,parent:r.id}),d=0,c=a.length;d<c;d++)delete this._model.data[a[d]];return-1!==E.inArray(this._data.core.focused,a)&&(this._data.core.focused=null,h=this.element[0].scrollTop,s=this.element[0].scrollLeft,r.id===E.jstree.root?this._model.data[E.jstree.root].children[0]&&this.get_node(this._model.data[E.jstree.root].children[0],!0).children(".jstree-anchor").trigger("focus"):this.get_node(r,!0).children(".jstree-anchor").trigger("focus"),this.element[0].scrollTop=h,this.element[0].scrollLeft=s),this.redraw_node(r,!0),!0},check:function(e,t,i,r,s){t=t&&t.id?t:this.get_node(t),i=i&&i.id?i:this.get_node(i);var a=e.match(/^(move_node|copy_node|create_node)$/i)?i:t,n=this.settings.core.check_callback;if("move_node"===e||"copy_node"===e){if(!(s&&s.is_multi||"move_node"!==e||E.inArray(t.id,i.children)!==r))return!(this._data.core.last_error={error:"check",plugin:"core",id:"core_08",reason:"Moving node to its current position",data:JSON.stringify({chk:e,pos:r,obj:!(!t||!t.id)&&t.id,par:!(!i||!i.id)&&i.id})});if(!(s&&s.is_multi||t.id!==i.id&&("move_node"!==e||E.inArray(t.id,i.children)!==r)&&-1===E.inArray(i.id,t.children_d)))return!(this._data.core.last_error={error:"check",plugin:"core",id:"core_01",reason:"Moving parent inside child",data:JSON.stringify({chk:e,pos:r,obj:!(!t||!t.id)&&t.id,par:!(!i||!i.id)&&i.id})})}return(a=a&&a.data?a.data:a)&&a.functions&&(!1===a.functions[e]||!0===a.functions[e])?(!1===a.functions[e]&&(this._data.core.last_error={error:"check",plugin:"core",id:"core_02",reason:"Node data prevents function: "+e,data:JSON.stringify({chk:e,pos:r,obj:!(!t||!t.id)&&t.id,par:!(!i||!i.id)&&i.id})}),a.functions[e]):!(!1===n||E.vakata.is_function(n)&&!1===n.call(this,e,t,i,r,s)||n&&!1===n[e])||!(this._data.core.last_error={error:"check",plugin:"core",id:"core_03",reason:"User config for core.check_callback prevents function: "+e,data:JSON.stringify({chk:e,pos:r,obj:!(!t||!t.id)&&t.id,par:!(!i||!i.id)&&i.id})})},last_error:function(){return this._data.core.last_error},move_node:function(e,t,i,r,s,a,n){var o,d,c,l,h,_,g,u,f,p,m,v,j,k;if(t=this.get_node(t),i=i===P?0:i,!t)return!1;if(!i.toString().match(/^(before|after)$/)&&!s&&!this.is_loaded(t))return this.load_node(t,function(){this.move_node(e,t,i,r,!0,!1,n)});if(E.vakata.is_array(e)){if(1!==e.length){for(o=0,d=e.length;o<d;o++)(f=this.move_node(e[o],t,i,r,s,!1,n))&&(t=f,i="after");return this.redraw(),!0}e=e[0]}if(!(e=e&&e.id!==P?e:this.get_node(e))||e.id===E.jstree.root)return!1;if(c=(e.parent||E.jstree.root).toString(),h=i.toString().match(/^(before|after)$/)&&t.id!==E.jstree.root?this.get_node(t.parent):t,g=!(_=n||(this._model.data[e.id]?this:E.jstree.reference(e.id)))||!_._id||this._id!==_._id,l=_&&_._id&&c&&_._model.data[c]&&_._model.data[c].children?E.inArray(e.id,_._model.data[c].children):-1,_&&_._id&&(e=_._model.data[e.id]),g)return!!(f=this.copy_node(e,t,i,r,s,!1,n))&&(_&&_.delete_node(e),f);switch(i=t.id===E.jstree.root&&"after"===(i="before"===i?"first":i)?"last":i){case"before":i=E.inArray(t.id,h.children);break;case"after":i=E.inArray(t.id,h.children)+1;break;case"inside":case"first":i=0;break;case"last":i=h.children.length;break;default:i=i||0}if(i>h.children.length&&(i=h.children.length),!this.check("move_node",e,h,i,{core:!0,origin:n,is_multi:_&&_._id&&_._id!==this._id,is_foreign:!_||!_._id}))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(e.parent===h.id){for(u=h.children.concat(),-1!==(f=E.inArray(e.id,u))&&(u=E.vakata.array_remove(u,f),f<i&&i--),f=[],p=0,m=u.length;p<m;p++)f[i<=p?p+1:p]=u[p];f[i]=e.id,h.children=f,this._node_changed(h.id),this.redraw(h.id===E.jstree.root)}else{for((f=e.children_d.concat()).push(e.id),p=0,m=e.parents.length;p<m;p++){for(u=[],v=0,j=(k=_._model.data[e.parents[p]].children_d).length;v<j;v++)-1===E.inArray(k[v],f)&&u.push(k[v]);_._model.data[e.parents[p]].children_d=u}for(_._model.data[c].children=E.vakata.array_remove_item(_._model.data[c].children,e.id),p=0,m=h.parents.length;p<m;p++)this._model.data[h.parents[p]].children_d=this._model.data[h.parents[p]].children_d.concat(f);for(u=[],p=0,m=h.children.length;p<m;p++)u[i<=p?p+1:p]=h.children[p];for(u[i]=e.id,h.children=u,h.children_d.push(e.id),h.children_d=h.children_d.concat(e.children_d),e.parent=h.id,(f=h.parents.concat()).unshift(h.id),k=e.parents.length,f=(e.parents=f).concat(),p=0,m=e.children_d.length;p<m;p++)this._model.data[e.children_d[p]].parents=this._model.data[e.children_d[p]].parents.slice(0,-1*k),Array.prototype.push.apply(this._model.data[e.children_d[p]].parents,f);c!==E.jstree.root&&h.id!==E.jstree.root||(this._model.force_full_redraw=!0),this._model.force_full_redraw||(this._node_changed(c),this._node_changed(h.id)),a||this.redraw()}return r&&r.call(this,e,h,i),this.trigger("move_node",{node:e,parent:h.id,position:i,old_parent:c,old_position:l,is_multi:_&&_._id&&_._id!==this._id,is_foreign:!_||!_._id,old_instance:_,new_instance:this}),e.id},copy_node:function(e,t,i,r,s,a,n){var o,d,c,l,h,_,g,u,f,p,m;if(t=this.get_node(t),i=i===P?0:i,!t)return!1;if(!i.toString().match(/^(before|after)$/)&&!s&&!this.is_loaded(t))return this.load_node(t,function(){this.copy_node(e,t,i,r,!0,!1,n)});if(E.vakata.is_array(e)){if(1!==e.length){for(o=0,d=e.length;o<d;o++)(l=this.copy_node(e[o],t,i,r,s,!0,n))&&(t=l,i="after");return this.redraw(),!0}e=e[0]}if(!(e=e&&e.id!==P?e:this.get_node(e))||e.id===E.jstree.root)return!1;switch(u=(e.parent||E.jstree.root).toString(),f=i.toString().match(/^(before|after)$/)&&t.id!==E.jstree.root?this.get_node(t.parent):t,m=!(p=n||(this._model.data[e.id]?this:E.jstree.reference(e.id)))||!p._id||this._id!==p._id,p&&p._id&&(e=p._model.data[e.id]),i=t.id===E.jstree.root&&"after"===(i="before"===i?"first":i)?"last":i){case"before":i=E.inArray(t.id,f.children);break;case"after":i=E.inArray(t.id,f.children)+1;break;case"inside":case"first":i=0;break;case"last":i=f.children.length;break;default:i=i||0}if(i>f.children.length&&(i=f.children.length),!this.check("copy_node",e,f,i,{core:!0,origin:n,is_multi:p&&p._id&&p._id!==this._id,is_foreign:!p||!p._id}))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(!(g=p?p.get_json(e,{no_id:!0,no_data:!0,no_state:!0}):e))return!1;if(!0===g.id&&delete g.id,!(g=this._parse_model_from_json(g,f.id,f.parents.concat())))return!1;for(l=this.get_node(g),e&&e.state&&!1===e.state.loaded&&(l.state.loaded=!1),(c=[]).push(g),c=c.concat(l.children_d),this.trigger("model",{nodes:c,parent:f.id}),h=0,_=f.parents.length;h<_;h++)this._model.data[f.parents[h]].children_d=this._model.data[f.parents[h]].children_d.concat(c);for(c=[],h=0,_=f.children.length;h<_;h++)c[i<=h?h+1:h]=f.children[h];return c[i]=l.id,f.children=c,f.children_d.push(l.id),f.children_d=f.children_d.concat(l.children_d),f.id===E.jstree.root&&(this._model.force_full_redraw=!0),this._model.force_full_redraw||this._node_changed(f.id),a||this.redraw(f.id===E.jstree.root),r&&r.call(this,l,f,i),this.trigger("copy_node",{node:l,original:e,parent:f.id,position:i,old_parent:u,old_position:p&&p._id&&u&&p._model.data[u]&&p._model.data[u].children?E.inArray(e.id,p._model.data[u].children):-1,is_multi:p&&p._id&&p._id!==this._id,is_foreign:!p||!p._id,old_instance:p,new_instance:this}),l.id},cut:function(e){if(e=e||this._data.core.selected.concat(),!(e=!E.vakata.is_array(e)?[e]:e).length)return!1;for(var t=[],i,r,s,r=0,s=e.length;r<s;r++)(i=this.get_node(e[r]))&&(i.id||0===i.id)&&i.id!==E.jstree.root&&t.push(i);if(!t.length)return!1;a=t,n="move_node",(o=this).trigger("cut",{node:e})},copy:function(e){if(e=e||this._data.core.selected.concat(),!(e=!E.vakata.is_array(e)?[e]:e).length)return!1;for(var t=[],i,r,s,r=0,s=e.length;r<s;r++)(i=this.get_node(e[r]))&&i.id!==P&&i.id!==E.jstree.root&&t.push(i);if(!t.length)return!1;a=t,n="copy_node",(o=this).trigger("copy",{node:e})},get_buffer:function(){return{mode:n,node:a,inst:o}},can_paste:function(){return!1!==n&&!1!==a},paste:function(e,t){if(!((e=this.get_node(e))&&n&&n.match(/^(copy_node|move_node)$/)&&a))return!1;this[n](a,e,t,!1,!1,!1,o)&&this.trigger("paste",{parent:e.id,node:a,mode:n}),o=n=a=!1},clear_buffer:function(){o=n=a=!1,this.trigger("clear_buffer")},edit:function(r,e,s){var t,i,a,n,o,d,c,t,l,h=!1;return!!(r=this.get_node(r))&&(this.check("edit",r,this.get_parent(r))?(l=r,e="string"==typeof e?e:r.text,this.set_text(r,""),r=this._open_to(r),l.text=e,t=this._data.core.rtl,i=this.element.width(),this._data.core.focused=l.id,a=r.children(".jstree-anchor").trigger("focus"),n=E("<span></span>"),o=e,d=E("<div></div>",{css:{position:"absolute",top:"-200px",left:t?"0px":"-1000px",visibility:"hidden"}}).appendTo(b.body),c=E("<input />",{value:o,class:"jstree-rename-input",css:{padding:"0",border:"1px solid silver","box-sizing":"border-box",display:"inline-block",height:this._data.core.li_height+"px",lineHeight:this._data.core.li_height+"px",width:"150px"},blur:function(e){e.stopImmediatePropagation(),e.preventDefault();var t,i=n.children(".jstree-rename-input").val(),e=this.settings.core.force_text,e;""===i&&(i=o),d.remove(),n.replaceWith(a),n.remove(),o=e?o:E("<div></div>").append(E.parseHTML(o)).html(),r=this.get_node(r),this.set_text(r,o),(e=!!this.rename_node(r,e?E("<div></div>").text(i).text():E("<div></div>").append(E.parseHTML(i)).html()))||this.set_text(r,o),this._data.core.focused=l.id,setTimeout(function(){var e=this.get_node(l.id,!0);e.length&&(this._data.core.focused=l.id,e.children(".jstree-anchor").trigger("focus"))}.bind(this),0),s&&s.call(this,l,e,h,i),c=null}.bind(this),keydown:function(e){var t=e.which;27===t&&(h=!0,this.value=o),27!==t&&13!==t&&37!==t&&38!==t&&39!==t&&40!==t&&32!==t||e.stopImmediatePropagation(),27!==t&&13!==t||(e.preventDefault(),this.blur())},click:function(e){e.stopImmediatePropagation()},mousedown:function(e){e.stopImmediatePropagation()},keyup:function(e){c.width(Math.min(d.text("pW"+this.value).width(),i))},keypress:function(e){if(13===e.which)return!1}}),t={fontFamily:a.css("fontFamily")||"",fontSize:a.css("fontSize")||"",fontWeight:a.css("fontWeight")||"",fontStyle:a.css("fontStyle")||"",fontStretch:a.css("fontStretch")||"",fontVariant:a.css("fontVariant")||"",letterSpacing:a.css("letterSpacing")||"",wordSpacing:a.css("wordSpacing")||""},n.attr("class",a.attr("class")).append(a.contents().clone()).append(c),a.replaceWith(n),d.css(t),c.css(t).width(Math.min(d.text("pW"+c[0].value).width(),i))[0].select(),void E(b).one("mousedown.jstree touchstart.jstree dnd_start.vakata",function(e){c&&e.target!==c&&E(c).trigger("blur")})):(this.settings.core.error.call(this,this._data.core.last_error),!1))},set_theme:function(e,t){if(!e)return!1;var i,i;(t=!0===t?(i=(i=this.settings.core.themes.dir)||E.jstree.path+"/themes")+"/"+e+"/style.css":t)&&-1===E.inArray(t,r)&&(E("head").append('<link rel="stylesheet" href="'+t+'" type="text/css" />'),r.push(t)),this._data.core.themes.name&&this.element.removeClass("jstree-"+this._data.core.themes.name),this._data.core.themes.name=e,this.element.addClass("jstree-"+e),this.element[this.settings.core.themes.responsive?"addClass":"removeClass"]("jstree-"+e+"-responsive"),this.trigger("set_theme",{theme:e})},get_theme:function(){return this._data.core.themes.name},set_theme_variant:function(e){this._data.core.themes.variant&&this.element.removeClass("jstree-"+this._data.core.themes.name+"-"+this._data.core.themes.variant),(this._data.core.themes.variant=e)&&this.element.addClass("jstree-"+this._data.core.themes.name+"-"+this._data.core.themes.variant)},get_theme_variant:function(){return this._data.core.themes.variant},show_stripes:function(){this._data.core.themes.stripes=!0,this.get_container_ul().addClass("jstree-striped"),this.trigger("show_stripes")},hide_stripes:function(){this._data.core.themes.stripes=!1,this.get_container_ul().removeClass("jstree-striped"),this.trigger("hide_stripes")},toggle_stripes:function(){this._data.core.themes.stripes?this.hide_stripes():this.show_stripes()},show_dots:function(){this._data.core.themes.dots=!0,this.get_container_ul().removeClass("jstree-no-dots"),this.trigger("show_dots")},hide_dots:function(){this._data.core.themes.dots=!1,this.get_container_ul().addClass("jstree-no-dots"),this.trigger("hide_dots")},toggle_dots:function(){this._data.core.themes.dots?this.hide_dots():this.show_dots()},show_icons:function(){this._data.core.themes.icons=!0,this.get_container_ul().removeClass("jstree-no-icons"),this.trigger("show_icons")},hide_icons:function(){this._data.core.themes.icons=!1,this.get_container_ul().addClass("jstree-no-icons"),this.trigger("hide_icons")},toggle_icons:function(){this._data.core.themes.icons?this.hide_icons():this.show_icons()},show_ellipsis:function(){this._data.core.themes.ellipsis=!0,this.get_container_ul().addClass("jstree-ellipsis"),this.trigger("show_ellipsis")},hide_ellipsis:function(){this._data.core.themes.ellipsis=!1,this.get_container_ul().removeClass("jstree-ellipsis"),this.trigger("hide_ellipsis")},toggle_ellipsis:function(){this._data.core.themes.ellipsis?this.hide_ellipsis():this.show_ellipsis()},set_icon:function(e,t){var i,r,s,a;if(E.vakata.is_array(e)){for(i=0,r=(e=e.slice()).length;i<r;i++)this.set_icon(e[i],t);return!0}return!(!(e=this.get_node(e))||e.id===E.jstree.root)&&(a=e.icon,e.icon=!0===t||null===t||t===P||""===t||t,s=this.get_node(e,!0).children(".jstree-anchor").children(".jstree-themeicon"),!1===t?(s.removeClass("jstree-themeicon-custom "+a).css("background","").removeAttr("rel"),this.hide_icon(e)):(!0===t||null===t||t===P||""===t?s.removeClass("jstree-themeicon-custom "+a).css("background","").removeAttr("rel"):-1===t.indexOf("/")&&-1===t.indexOf(".")?(s.removeClass(a).css("background",""),s.addClass(t+" jstree-themeicon-custom").attr("rel",t)):(s.removeClass(a).css("background",""),s.addClass("jstree-themeicon-custom").css("background","url('"+t+"') center center no-repeat").attr("rel",t)),!1===a&&this.show_icon(e)),!0)},get_icon:function(e){return!(!(e=this.get_node(e))||e.id===E.jstree.root)&&e.icon},hide_icon:function(e){var t,i;if(E.vakata.is_array(e)){for(t=0,i=(e=e.slice()).length;t<i;t++)this.hide_icon(e[t]);return!0}return!(!(e=this.get_node(e))||e===E.jstree.root)&&(e.icon=!1,this.get_node(e,!0).children(".jstree-anchor").children(".jstree-themeicon").addClass("jstree-themeicon-hidden"),!0)},show_icon:function(e){var t,i,r;if(E.vakata.is_array(e)){for(t=0,i=(e=e.slice()).length;t<i;t++)this.show_icon(e[t]);return!0}return!(!(e=this.get_node(e))||e===E.jstree.root)&&(r=this.get_node(e,!0),e.icon=!r.length||r.children(".jstree-anchor").children(".jstree-themeicon").attr("rel"),e.icon||(e.icon=!0),r.children(".jstree-anchor").children(".jstree-themeicon").removeClass("jstree-themeicon-hidden"),!0)}},E.vakata={},E.vakata.attributes=function(e,i){e=E(e)[0];var r=i?{}:[];return e&&e.attributes&&E.each(e.attributes,function(e,t){-1===E.inArray(t.name.toLowerCase(),["style","contenteditable","hasfocus","tabindex"])&&null!==t.value&&""!==E.vakata.trim(t.value)&&(i?r[t.name]=t.value:r.push(t.name))}),r},E.vakata.array_unique=function(e){for(var t=[],i,r,s,a={},i=0,s=e.length;i<s;i++)a[e[i]]===P&&(t.push(e[i]),a[e[i]]=!0);return t},E.vakata.array_remove=function(e,t){return e.splice(t,1),e},E.vakata.array_remove_item=function(e,t){var t=E.inArray(t,e);return-1!==t?E.vakata.array_remove(e,t):e},E.vakata.array_filter=function(e,t,i,r,s){if(e.filter)return e.filter(t,i);for(s in r=[],e)~~s+""==s+""&&0<=s&&t.call(i,e[s],+s,e)&&r.push(e[s]);return r},E.vakata.trim=function(e){return String.prototype.trim?String.prototype.trim.call(e.toString()):e.toString().replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},E.vakata.is_function=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},E.vakata.is_array=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},Function.prototype.bind||(Function.prototype.bind=function(){var t=this,i=arguments[0],r=Array.prototype.slice.call(arguments,1);if("function"!=typeof t)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");return function(){var e=r.concat(Array.prototype.slice.call(arguments));return t.apply(i,e)}}),E.jstree.plugins.changed=function(e,a){var n=[];this.trigger=function(e,t){var i,r;if(t=t||{},"changed"===e.replace(".jstree","")){t.changed={selected:[],deselected:[]};for(var s={},i=0,r=n.length;i<r;i++)s[n[i]]=1;for(i=0,r=t.selected.length;i<r;i++)s[t.selected[i]]?s[t.selected[i]]=2:t.changed.selected.push(t.selected[i]);for(i=0,r=n.length;i<r;i++)1===s[n[i]]&&t.changed.deselected.push(n[i]);n=t.selected.slice()}a.trigger.call(this,e,t)},this.refresh=function(e,t){return n=[],a.refresh.apply(this,arguments)}};var l=b.createElement("I"),h,_,g,d,u,f,p,w;l.className="jstree-icon jstree-checkbox",l.setAttribute("role","presentation"),E.jstree.defaults.checkbox={visible:!0,three_state:!0,whole_node:!0,keep_selected_style:!0,cascade:"",tie_selection:!0,cascade_to_disabled:!0,cascade_to_hidden:!0},E.jstree.plugins.checkbox=function(e,d){this.bind=function(){d.bind.call(this),this._data.checkbox.uto=!1,this._data.checkbox.selected=[],this.settings.checkbox.three_state&&(this.settings.checkbox.cascade="up+down+undetermined"),this.element.on("init.jstree",function(){this._data.checkbox.visible=this.settings.checkbox.visible,this.settings.checkbox.keep_selected_style||this.element.addClass("jstree-checkbox-no-clicked"),this.settings.checkbox.tie_selection&&this.element.addClass("jstree-checkbox-selection")}.bind(this)).on("loading.jstree",function(){this[this._data.checkbox.visible?"show_checkboxes":"hide_checkboxes"]()}.bind(this)),-1!==this.settings.checkbox.cascade.indexOf("undetermined")&&this.element.on("changed.jstree uncheck_node.jstree check_node.jstree uncheck_all.jstree check_all.jstree move_node.jstree copy_node.jstree redraw.jstree open_node.jstree",function(){this._data.checkbox.uto&&clearTimeout(this._data.checkbox.uto),this._data.checkbox.uto=setTimeout(this._undetermined.bind(this),50)}.bind(this)),this.settings.checkbox.tie_selection||this.element.on("model.jstree",function(e,t){for(var i=this._model.data,r=i[t.parent],s=t.nodes,a,n,a=0,n=s.length;a<n;a++)i[s[a]].state.checked=i[s[a]].state.checked||i[s[a]].original&&i[s[a]].original.state&&i[s[a]].original.state.checked,i[s[a]].state.checked&&this._data.checkbox.selected.push(s[a])}.bind(this)),-1===this.settings.checkbox.cascade.indexOf("up")&&-1===this.settings.checkbox.cascade.indexOf("down")||this.element.on("model.jstree",function(e,t){var i=this._model.data,r=i[t.parent],s=t.nodes,a=[],n,o,d,c,l,h,t=this.settings.checkbox.cascade,_=this.settings.checkbox.tie_selection;if(-1!==t.indexOf("down"))if(r.state[_?"selected":"checked"]){for(o=0,d=s.length;o<d;o++)i[s[o]].state[_?"selected":"checked"]=!0;this._data[_?"core":"checkbox"].selected=this._data[_?"core":"checkbox"].selected.concat(s)}else for(o=0,d=s.length;o<d;o++)if(i[s[o]].state[_?"selected":"checked"]){for(c=0,l=i[s[o]].children_d.length;c<l;c++)i[i[s[o]].children_d[c]].state[_?"selected":"checked"]=!0;this._data[_?"core":"checkbox"].selected=this._data[_?"core":"checkbox"].selected.concat(i[s[o]].children_d)}if(-1!==t.indexOf("up")){for(o=0,d=r.children_d.length;o<d;o++)i[r.children_d[o]].children.length||a.push(i[r.children_d[o]].parent);for(c=0,l=(a=E.vakata.array_unique(a)).length;c<l;c++){r=i[a[c]];while(r&&r.id!==E.jstree.root){for(o=n=0,d=r.children.length;o<d;o++)n+=i[r.children[o]].state[_?"selected":"checked"];if(n!==d)break;r.state[_?"selected":"checked"]=!0,this._data[_?"core":"checkbox"].selected.push(r.id),(h=this.get_node(r,!0))&&h.length&&h.children(".jstree-anchor").attr("aria-selected",!0).addClass(_?"jstree-clicked":"jstree-checked"),r=this.get_node(r.parent)}}}this._data[_?"core":"checkbox"].selected=E.vakata.array_unique(this._data[_?"core":"checkbox"].selected)}.bind(this)).on(this.settings.checkbox.tie_selection?"select_node.jstree":"check_node.jstree",function(e,t){var i=this,r=t.node,s=this._model.data,a=this.get_node(r.parent),n,o,d,c,t=this.settings.checkbox.cascade,l=this.settings.checkbox.tie_selection,h={},_=this._data[l?"core":"checkbox"].selected;for(n=0,o=_.length;n<o;n++)h[_[n]]=!0;if(-1!==t.indexOf("down"))for(var g=this._cascade_new_checked_state(r.id,!0),u=r.children_d.concat(r.id),n=0,o=u.length;n<o;n++)-1<g.indexOf(u[n])?h[u[n]]=!0:delete h[u[n]];if(-1!==t.indexOf("up"))while(a&&a.id!==E.jstree.root){for(n=d=0,o=a.children.length;n<o;n++)d+=s[a.children[n]].state[l?"selected":"checked"];if(d!==o)break;a.state[l?"selected":"checked"]=!0,h[a.id]=!0,(c=this.get_node(a,!0))&&c.length&&c.children(".jstree-anchor").attr("aria-selected",!0).addClass(l?"jstree-clicked":"jstree-checked"),a=this.get_node(a.parent)}for(n in _=[],h)h.hasOwnProperty(n)&&_.push(n);this._data[l?"core":"checkbox"].selected=_}.bind(this)).on(this.settings.checkbox.tie_selection?"deselect_all.jstree":"uncheck_all.jstree",function(e,t){for(var i=this.get_node(E.jstree.root),r=this._model.data,s,a,n,s=0,a=i.children_d.length;s<a;s++)(n=r[i.children_d[s]])&&n.original&&n.original.state&&n.original.state.undetermined&&(n.original.state.undetermined=!1)}.bind(this)).on(this.settings.checkbox.tie_selection?"deselect_node.jstree":"uncheck_node.jstree",function(e,t){var i=this,r=t.node,s=this.get_node(r,!0),a,n,o,d=this.settings.checkbox.cascade,c=this.settings.checkbox.tie_selection,t=this._data[c?"core":"checkbox"].selected,l={},h=[],_=r.children_d.concat(r.id),g,t;if(-1!==d.indexOf("down")&&(g=this._cascade_new_checked_state(r.id,!1),t=E.vakata.array_filter(t,function(e){return-1===_.indexOf(e)||-1<g.indexOf(e)})),-1!==d.indexOf("up")&&-1===t.indexOf(r.id)){for(a=0,n=r.parents.length;a<n;a++)(o=this._model.data[r.parents[a]]).state[c?"selected":"checked"]=!1,o&&o.original&&o.original.state&&o.original.state.undetermined&&(o.original.state.undetermined=!1),(o=this.get_node(r.parents[a],!0))&&o.length&&o.children(".jstree-anchor").attr("aria-selected",!1).removeClass(c?"jstree-clicked":"jstree-checked");t=E.vakata.array_filter(t,function(e){return-1===r.parents.indexOf(e)})}this._data[c?"core":"checkbox"].selected=t}.bind(this)),-1!==this.settings.checkbox.cascade.indexOf("up")&&this.element.on("delete_node.jstree",function(e,t){var i=this.get_node(t.parent),r=this._model.data,s,a,n,o,d=this.settings.checkbox.tie_selection;while(i&&i.id!==E.jstree.root&&!i.state[d?"selected":"checked"]){for(s=n=0,a=i.children.length;s<a;s++)n+=r[i.children[s]].state[d?"selected":"checked"];if(!(0<a&&n===a))break;i.state[d?"selected":"checked"]=!0,this._data[d?"core":"checkbox"].selected.push(i.id),(o=this.get_node(i,!0))&&o.length&&o.children(".jstree-anchor").attr("aria-selected",!0).addClass(d?"jstree-clicked":"jstree-checked"),i=this.get_node(i.parent)}}.bind(this)).on("move_node.jstree",function(e,t){var i=t.is_multi,r=t.old_parent,t=this.get_node(t.parent),s=this._model.data,a,n,o,d,c,l=this.settings.checkbox.tie_selection;if(!i){a=this.get_node(r);while(a&&a.id!==E.jstree.root&&!a.state[l?"selected":"checked"]){for(o=n=0,d=a.children.length;o<d;o++)n+=s[a.children[o]].state[l?"selected":"checked"];if(!(0<d&&n===d))break;a.state[l?"selected":"checked"]=!0,this._data[l?"core":"checkbox"].selected.push(a.id),(c=this.get_node(a,!0))&&c.length&&c.children(".jstree-anchor").attr("aria-selected",!0).addClass(l?"jstree-clicked":"jstree-checked"),a=this.get_node(a.parent)}}a=t;while(a&&a.id!==E.jstree.root){for(o=n=0,d=a.children.length;o<d;o++)n+=s[a.children[o]].state[l?"selected":"checked"];if(n===d)a.state[l?"selected":"checked"]||(a.state[l?"selected":"checked"]=!0,this._data[l?"core":"checkbox"].selected.push(a.id),(c=this.get_node(a,!0))&&c.length&&c.children(".jstree-anchor").attr("aria-selected",!0).addClass(l?"jstree-clicked":"jstree-checked"));else{if(!a.state[l?"selected":"checked"])break;a.state[l?"selected":"checked"]=!1,this._data[l?"core":"checkbox"].selected=E.vakata.array_remove_item(this._data[l?"core":"checkbox"].selected,a.id),(c=this.get_node(a,!0))&&c.length&&c.children(".jstree-anchor").attr("aria-selected",!1).removeClass(l?"jstree-clicked":"jstree-checked")}a=this.get_node(a.parent)}}.bind(this))},this.get_undetermined=function(e){if(-1===this.settings.checkbox.cascade.indexOf("undetermined"))return[];for(var i,r,s,a,n={},o=this._model.data,t=this.settings.checkbox.tie_selection,d=this._data[t?"core":"checkbox"].selected,c=[],l=this,h=[],i=0,r=d.length;i<r;i++)if(o[d[i]]&&o[d[i]].parents)for(s=0,a=o[d[i]].parents.length;s<a;s++){if(n[o[d[i]].parents[s]]!==P)break;o[d[i]].parents[s]!==E.jstree.root&&(n[o[d[i]].parents[s]]=!0,c.push(o[d[i]].parents[s]))}for(this.element.find(".jstree-closed").not(":has(.jstree-children)").each(function(){var e=l.get_node(this),t;if(e)if(e.state.loaded){for(i=0,r=e.children_d.length;i<r;i++)if(!(t=o[e.children_d[i]]).state.loaded&&t.original&&t.original.state&&t.original.state.undetermined&&!0===t.original.state.undetermined)for(n[t.id]===P&&t.id!==E.jstree.root&&(n[t.id]=!0,c.push(t.id)),s=0,a=t.parents.length;s<a;s++)n[t.parents[s]]===P&&t.parents[s]!==E.jstree.root&&(n[t.parents[s]]=!0,c.push(t.parents[s]))}else if(e.original&&e.original.state&&e.original.state.undetermined&&!0===e.original.state.undetermined)for(n[e.id]===P&&e.id!==E.jstree.root&&(n[e.id]=!0,c.push(e.id)),s=0,a=e.parents.length;s<a;s++)n[e.parents[s]]===P&&e.parents[s]!==E.jstree.root&&(n[e.parents[s]]=!0,c.push(e.parents[s]))}),i=0,r=c.length;i<r;i++)o[c[i]].state[t?"selected":"checked"]||h.push(e?o[c[i]]:c[i]);return h},this._undetermined=function(){if(null!==this.element){var e=this.get_undetermined(!1),t,i,r;for(this.element.find(".jstree-undetermined").removeClass("jstree-undetermined"),t=0,i=e.length;t<i;t++)(r=this.get_node(e[t],!0))&&r.length&&r.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-undetermined")}},this.redraw_node=function(e,t,i,r){if(e=d.redraw_node.apply(this,arguments)){for(var s,a,n=null,o=null,s=0,a=e.childNodes.length;s<a;s++)if(e.childNodes[s]&&e.childNodes[s].className&&-1!==e.childNodes[s].className.indexOf("jstree-anchor")){n=e.childNodes[s];break}n&&(!this.settings.checkbox.tie_selection&&this._model.data[e.id].state.checked&&(n.className+=" jstree-checked"),o=l.cloneNode(!1),this._model.data[e.id].state.checkbox_disabled&&(o.className+=" jstree-checkbox-disabled"),n.insertBefore(o,n.childNodes[0]))}return i||-1===this.settings.checkbox.cascade.indexOf("undetermined")||(this._data.checkbox.uto&&clearTimeout(this._data.checkbox.uto),this._data.checkbox.uto=setTimeout(this._undetermined.bind(this),50)),e},this.show_checkboxes=function(){this._data.core.themes.checkboxes=!0,this.get_container_ul().removeClass("jstree-no-checkboxes")},this.hide_checkboxes=function(){this._data.core.themes.checkboxes=!1,this.get_container_ul().addClass("jstree-no-checkboxes")},this.toggle_checkboxes=function(){this._data.core.themes.checkboxes?this.hide_checkboxes():this.show_checkboxes()},this.is_undetermined=function(e){e=this.get_node(e);var t=this.settings.checkbox.cascade,i,r,s=this.settings.checkbox.tie_selection,a=this._data[s?"core":"checkbox"].selected,n=this._model.data;if(!e||!0===e.state[s?"selected":"checked"]||-1===t.indexOf("undetermined")||-1===t.indexOf("down")&&-1===t.indexOf("up"))return!1;if(!e.state.loaded&&!0===e.original.state.undetermined)return!0;for(i=0,r=e.children_d.length;i<r;i++)if(-1!==E.inArray(e.children_d[i],a)||!n[e.children_d[i]].state.loaded&&n[e.children_d[i]].original.state.undetermined)return!0;return!1},this.disable_checkbox=function(e){var t,i,r;if(E.vakata.is_array(e)){for(t=0,i=(e=e.slice()).length;t<i;t++)this.disable_checkbox(e[t]);return!0}if(!(e=this.get_node(e))||e.id===E.jstree.root)return!1;r=this.get_node(e,!0),e.state.checkbox_disabled||(e.state.checkbox_disabled=!0,r&&r.length&&r.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-checkbox-disabled"),this.trigger("disable_checkbox",{node:e}))},this.enable_checkbox=function(e){var t,i,r;if(E.vakata.is_array(e)){for(t=0,i=(e=e.slice()).length;t<i;t++)this.enable_checkbox(e[t]);return!0}if(!(e=this.get_node(e))||e.id===E.jstree.root)return!1;r=this.get_node(e,!0),e.state.checkbox_disabled&&(e.state.checkbox_disabled=!1,r&&r.length&&r.children(".jstree-anchor").children(".jstree-checkbox").removeClass("jstree-checkbox-disabled"),this.trigger("enable_checkbox",{node:e}))},this.activate_node=function(e,t){return!E(t.target).hasClass("jstree-checkbox-disabled")&&(this.settings.checkbox.tie_selection&&(this.settings.checkbox.whole_node||E(t.target).hasClass("jstree-checkbox"))&&(t.ctrlKey=!0),this.settings.checkbox.tie_selection||!this.settings.checkbox.whole_node&&!E(t.target).hasClass("jstree-checkbox")?d.activate_node.call(this,e,t):!this.is_disabled(e)&&(this.is_checked(e)?this.uncheck_node(e,t):this.check_node(e,t),void this.trigger("activate_node",{node:this.get_node(e)})))},this.delete_node=function(e){if(this.settings.checkbox.tie_selection||E.vakata.is_array(e))return d.delete_node.call(this,e);var t,i,r,s=!1;if(!(e=this.get_node(e))||e.id===E.jstree.root)return!1;for((t=e.children_d.concat([])).push(e.id),i=0,r=t.length;i<r;i++)if(this._model.data[t[i]].state.checked){s=!0;break}return s&&(this._data.checkbox.selected=E.vakata.array_filter(this._data.checkbox.selected,function(e){return-1===E.inArray(e,t)})),d.delete_node.call(this,e)},this._cascade_new_checked_state=function(e,t){var i=this,r=this.settings.checkbox.tie_selection,s=this._model.data[e],a=[],n=[],o,d,c;if(!this.settings.checkbox.cascade_to_disabled&&s.state.disabled||!this.settings.checkbox.cascade_to_hidden&&s.state.hidden)c=this.get_checked_descendants(e),s.state[r?"selected":"checked"]&&c.push(s.id),a=a.concat(c);else{if(s.children)for(o=0,d=s.children.length;o<d;o++){var l=s.children[o],c=i._cascade_new_checked_state(l,t),a=a.concat(c);-1<c.indexOf(l)&&n.push(l)}var h=i.get_node(s,!0),e=0<n.length&&n.length<s.children.length;s.original&&s.original.state&&s.original.state.undetermined&&(s.original.state.undetermined=e),!e&&t&&n.length===s.children.length?(s.state[r?"selected":"checked"]=t,a.push(s.id),h.children(".jstree-anchor").attr("aria-selected",!0).addClass(r?"jstree-clicked":"jstree-checked")):(s.state[r?"selected":"checked"]=!1,h.children(".jstree-anchor").attr("aria-selected",!1).removeClass(r?"jstree-clicked":"jstree-checked"))}return a},this.get_checked_descendants=function(e){var t=this,i=t.settings.checkbox.tie_selection,e=t._model.data[e];return E.vakata.array_filter(e.children_d,function(e){return t._model.data[e].state[i?"selected":"checked"]})},this.check_node=function(e,t){if(this.settings.checkbox.tie_selection)return this.select_node(e,!1,!0,t);var i,r,s,a;if(E.vakata.is_array(e)){for(r=0,s=(e=e.slice()).length;r<s;r++)this.check_node(e[r],t);return!0}if(!(e=this.get_node(e))||e.id===E.jstree.root)return!1;i=this.get_node(e,!0),e.state.checked||(e.state.checked=!0,this._data.checkbox.selected.push(e.id),i&&i.length&&i.children(".jstree-anchor").addClass("jstree-checked"),this.trigger("check_node",{node:e,selected:this._data.checkbox.selected,event:t}))},this.uncheck_node=function(e,t){if(this.settings.checkbox.tie_selection)return this.deselect_node(e,!1,t);var i,r,s;if(E.vakata.is_array(e)){for(i=0,r=(e=e.slice()).length;i<r;i++)this.uncheck_node(e[i],t);return!0}if(!(e=this.get_node(e))||e.id===E.jstree.root)return!1;s=this.get_node(e,!0),e.state.checked&&(e.state.checked=!1,this._data.checkbox.selected=E.vakata.array_remove_item(this._data.checkbox.selected,e.id),s.length&&s.children(".jstree-anchor").removeClass("jstree-checked"),this.trigger("uncheck_node",{node:e,selected:this._data.checkbox.selected,event:t}))},this.check_all=function(){if(this.settings.checkbox.tie_selection)return this.select_all();var e=this._data.checkbox.selected.concat([]),t,i;for(this._data.checkbox.selected=this._model.data[E.jstree.root].children_d.concat(),t=0,i=this._data.checkbox.selected.length;t<i;t++)this._model.data[this._data.checkbox.selected[t]]&&(this._model.data[this._data.checkbox.selected[t]].state.checked=!0);this.redraw(!0),this.trigger("check_all",{selected:this._data.checkbox.selected})},this.uncheck_all=function(){if(this.settings.checkbox.tie_selection)return this.deselect_all();for(var e=this._data.checkbox.selected.concat([]),t,i,t=0,i=this._data.checkbox.selected.length;t<i;t++)this._model.data[this._data.checkbox.selected[t]]&&(this._model.data[this._data.checkbox.selected[t]].state.checked=!1);this._data.checkbox.selected=[],this.element.find(".jstree-checked").removeClass("jstree-checked"),this.trigger("uncheck_all",{selected:this._data.checkbox.selected,node:e})},this.is_checked=function(e){return this.settings.checkbox.tie_selection?this.is_selected(e):!(!(e=this.get_node(e))||e.id===E.jstree.root)&&e.state.checked},this.get_checked=function(e){return this.settings.checkbox.tie_selection?this.get_selected(e):e?E.map(this._data.checkbox.selected,function(e){return this.get_node(e)}.bind(this)):this._data.checkbox.selected.slice()},this.get_top_checked=function(e){if(this.settings.checkbox.tie_selection)return this.get_top_selected(e);for(var t=this.get_checked(!0),i={},r,s,a,n,r=0,s=t.length;r<s;r++)i[t[r].id]=t[r];for(r=0,s=t.length;r<s;r++)for(a=0,n=t[r].children_d.length;a<n;a++)i[t[r].children_d[a]]&&delete i[t[r].children_d[a]];for(r in t=[],i)i.hasOwnProperty(r)&&t.push(r);return e?E.map(t,function(e){return this.get_node(e)}.bind(this)):t},this.get_bottom_checked=function(e){if(this.settings.checkbox.tie_selection)return this.get_bottom_selected(e);for(var t=this.get_checked(!0),i=[],r,s,r=0,s=t.length;r<s;r++)t[r].children.length||i.push(t[r].id);return e?E.map(i,function(e){return this.get_node(e)}.bind(this)):i},this.load_node=function(e,t){var i,r,s,a,n,o;if(!E.vakata.is_array(e)&&!this.settings.checkbox.tie_selection&&(o=this.get_node(e))&&o.state.loaded)for(i=0,r=o.children_d.length;i<r;i++)this._model.data[o.children_d[i]].state.checked&&(this._data.checkbox.selected=E.vakata.array_remove_item(this._data.checkbox.selected,o.children_d[i]));return d.load_node.apply(this,arguments)},this.get_state=function(){var e=d.get_state.apply(this,arguments);return this.settings.checkbox.tie_selection||(e.checkbox=this._data.checkbox.selected.slice()),e},this.set_state=function(e,t){var i=d.set_state.apply(this,arguments),r;return i&&e.checkbox?(this.settings.checkbox.tie_selection||(this.uncheck_all(),r=this,E.each(e.checkbox,function(e,t){r.check_node(t)})),delete e.checkbox,this.set_state(e,t),!1):i},this.refresh=function(e,t){return this.settings.checkbox.tie_selection&&(this._data.checkbox.selected=[]),d.refresh.apply(this,arguments)}},E.jstree.defaults.conditionalselect=function(){return!0},E.jstree.plugins.conditionalselect=function(e,i){this.activate_node=function(e,t){if(this.settings.conditionalselect.call(this,this.get_node(e),t))return i.activate_node.call(this,e,t)}},E.jstree.defaults.contextmenu={select_node:!0,show_at_node:!0,items:function(e,t){return{create:{separator_before:!1,separator_after:!0,_disabled:!1,label:"Create",action:function(e){var i=E.jstree.reference(e.reference),e=i.get_node(e.reference);i.create_node(e,{},"last",function(t){try{i.edit(t)}catch(e){setTimeout(function(){i.edit(t)},0)}})}},rename:{separator_before:!1,separator_after:!1,_disabled:!1,label:"Rename",action:function(e){var t=E.jstree.reference(e.reference),e=t.get_node(e.reference);t.edit(e)}},remove:{separator_before:!1,icon:!1,separator_after:!1,_disabled:!1,label:"Delete",action:function(e){var t=E.jstree.reference(e.reference),e=t.get_node(e.reference);t.is_selected(e)?t.delete_node(t.get_selected()):t.delete_node(e)}},ccp:{separator_before:!0,icon:!1,separator_after:!1,label:"Edit",action:!1,submenu:{cut:{separator_before:!1,separator_after:!1,label:"Cut",action:function(e){var t=E.jstree.reference(e.reference),e=t.get_node(e.reference);t.is_selected(e)?t.cut(t.get_top_selected()):t.cut(e)}},copy:{separator_before:!1,icon:!1,separator_after:!1,label:"Copy",action:function(e){var t=E.jstree.reference(e.reference),e=t.get_node(e.reference);t.is_selected(e)?t.copy(t.get_top_selected()):t.copy(e)}},paste:{separator_before:!1,icon:!1,_disabled:function(e){return!E.jstree.reference(e.reference).can_paste()},separator_after:!1,label:"Paste",action:function(e){var t=E.jstree.reference(e.reference),e=t.get_node(e.reference);t.paste(e)}}}}}}},E.jstree.plugins.contextmenu=function(e,a){this.bind=function(){a.bind.call(this);var i=0,r=null,t,s;this.element.on("init.jstree loading.jstree ready.jstree",function(){this.get_container_ul().addClass("jstree-contextmenu")}.bind(this)).on("contextmenu.jstree",".jstree-anchor",function(e,t){"input"!==e.target.tagName.toLowerCase()&&(e.preventDefault(),i=e.ctrlKey?+new Date:0,(t||r)&&(i=+new Date+1e4),r&&clearTimeout(r),this.is_loading(e.currentTarget)||this.show_contextmenu(e.currentTarget,e.pageX,e.pageY,e))}.bind(this)).on("click.jstree",".jstree-anchor",function(e){this._data.contextmenu.visible&&(!i||250<+new Date-i)&&E.vakata.context.hide(),i=0}.bind(this)).on("touchstart.jstree",".jstree-anchor",function(e){e.originalEvent&&e.originalEvent.changedTouches&&e.originalEvent.changedTouches[0]&&(t=e.originalEvent.changedTouches[0].clientX,s=e.originalEvent.changedTouches[0].clientY,r=setTimeout(function(){E(e.currentTarget).trigger("contextmenu",!0)},750))}).on("touchmove.vakata.jstree",function(e){r&&e.originalEvent&&e.originalEvent.changedTouches&&e.originalEvent.changedTouches[0]&&(10<Math.abs(t-e.originalEvent.changedTouches[0].clientX)||10<Math.abs(s-e.originalEvent.changedTouches[0].clientY))&&(clearTimeout(r),E.vakata.context.hide())}).on("touchend.vakata.jstree",function(e){r&&clearTimeout(r)}),E(b).on("context_hide.vakata.jstree",function(e,t){this._data.contextmenu.visible=!1,E(t.reference).removeClass("jstree-context")}.bind(this))},this.teardown=function(){this._data.contextmenu.visible&&E.vakata.context.hide(),E(b).off("context_hide.vakata.jstree"),a.teardown.call(this)},this.show_contextmenu=function(t,i,r,e){if(!(t=this.get_node(t))||t.id===E.jstree.root)return!1;var s=this.settings.contextmenu,a,n=this.get_node(t,!0).children(".jstree-anchor"),o=!1,d=!1;!s.show_at_node&&i!==P&&r!==P||(o=n.offset(),i=o.left,r=o.top+this._data.core.li_height),this.settings.contextmenu.select_node&&!this.is_selected(t)&&this.activate_node(t,e),d=s.items,E.vakata.is_function(d)&&(d=d.call(this,t,function(e){this._show_contextmenu(t,i,r,e)}.bind(this))),E.isPlainObject(d)&&this._show_contextmenu(t,i,r,d)},this._show_contextmenu=function(e,t,i,r){var s,a=this.get_node(e,!0).children(".jstree-anchor");E(b).one("context_show.vakata.jstree",function(e,t){var i="jstree-contextmenu jstree-"+this.get_theme()+"-contextmenu";E(t.element).addClass(i),a.addClass("jstree-context")}.bind(this)),this._data.contextmenu.visible=!0,E.vakata.context.show(a,{x:t,y:i},r),this.trigger("show_contextmenu",{node:e,x:t,y:i})}},g={element:_=!1,reference:!1,position_x:0,position_y:0,items:[],html:"",is_visible:!1},(h=E).vakata.context={settings:{hide_onmouseleave:0,icons:!0},_trigger:function(e){h(b).triggerHandler("context_"+e+".vakata",{reference:g.reference,element:g.element,position:{x:g.position_x,y:g.position_y}})},_execute:function(e){return!(!(e=g.items[e])||e._disabled&&(!h.vakata.is_function(e._disabled)||e._disabled({item:e,reference:g.reference,element:g.element}))||!e.action)&&e.action.call(null,{item:e,reference:g.reference,element:g.element,position:{x:g.position_x,y:g.position_y}})},_parse:function(e,t){if(!e)return!1;t||(g.html="",g.items=[]);var i="",r=!1,s;return t&&(i+="<ul>"),h.each(e,function(e,t){return!t||(g.items.push(t),!r&&t.separator_before&&(i+="<li class='vakata-context-separator'><a href='#' "+(h.vakata.context.settings.icons?"":'class="vakata-context-no-icons"')+">&#160;</a></li>"),r=!1,i+="<li class='"+(t._class||"")+(!0===t._disabled||h.vakata.is_function(t._disabled)&&t._disabled({item:t,reference:g.reference,element:g.element})?" vakata-contextmenu-disabled ":"")+"' "+(t.shortcut?" data-shortcut='"+t.shortcut+"' ":"")+">",i+="<a href='#' rel='"+(g.items.length-1)+"' "+(t.title?"title='"+t.title+"'":"")+">",h.vakata.context.settings.icons&&(i+="<i ",t.icon&&(-1!==t.icon.indexOf("/")||-1!==t.icon.indexOf(".")?i+=" style='background:url(\""+t.icon+"\") center center no-repeat' ":i+=" class='"+t.icon+"' "),i+="></i><span class='vakata-contextmenu-sep'>&#160;</span>"),i+=(h.vakata.is_function(t.label)?t.label({item:e,reference:g.reference,element:g.element}):t.label)+(t.shortcut?' <span class="vakata-contextmenu-shortcut vakata-contextmenu-shortcut-'+t.shortcut+'">'+(t.shortcut_label||"")+"</span>":"")+"</a>",t.submenu&&(s=h.vakata.context._parse(t.submenu,!0))&&(i+=s),i+="</li>",void(t.separator_after&&(i+="<li class='vakata-context-separator'><a href='#' "+(h.vakata.context.settings.icons?"":'class="vakata-context-no-icons"')+">&#160;</a></li>",r=!0)))}),i=i.replace(/<li class\='vakata-context-separator'\><\/li\>$/,""),t&&(i+="</ul>"),t||(g.html=i,h.vakata.context._trigger("parse")),10<i.length&&i},_show_submenu:function(e){var t,i,r,s,a,n,o,d;(e=h(e)).length&&e.children("ul").length&&(t=e.children("ul"),r=(i=e.offset().left)+e.outerWidth(),s=e.offset().top,a=t.width(),n=t.height(),o=h(window).width()+h(window).scrollLeft(),d=h(window).height()+h(window).scrollTop(),_?e[r-(a+10+e.outerWidth())<0?"addClass":"removeClass"]("vakata-context-left"):e[o<r+a&&o-r<i?"addClass":"removeClass"]("vakata-context-right"),d<s+n+10&&t.css("bottom","-1px"),e.hasClass("vakata-context-right")?i<a&&t.css("margin-right",i-a):o-r<a&&t.css("margin-left",o-r-a),t.show())},show:function(e,t,i){var r,s,a,n,o,d,c,i,l=!0;switch(g.element&&g.element.length&&g.element.width(""),!0){case!t&&!e:return!1;case!!t&&!!e:g.reference=e,g.position_x=t.x,g.position_y=t.y;break;case!t&&!!e:r=(g.reference=e).offset(),g.position_x=r.left+e.outerHeight(),g.position_y=r.top;break;case!!t&&!e:g.position_x=t.x,g.position_y=t.y}e&&!i&&h(e).data("vakata_contextmenu")&&(i=h(e).data("vakata_contextmenu")),h.vakata.context._parse(i)&&g.element.html(g.html),g.items.length&&(g.element.appendTo(b.body),s=g.element,a=g.position_x,n=g.position_y,o=s.width(),d=s.height(),c=h(window).width()+h(window).scrollLeft(),i=h(window).height()+h(window).scrollTop(),_&&(a-=s.outerWidth()-h(e).outerWidth())<h(window).scrollLeft()+20&&(a=h(window).scrollLeft()+20),g.element.css({left:a=c<a+o+20?c-(o+20):a,top:n=i<n+d+20?i-(d+20):n}).show().find("a").first().trigger("focus").parent().addClass("vakata-context-hover"),g.is_visible=!0,h.vakata.context._trigger("show"))},hide:function(){g.is_visible&&(g.element.hide().find("ul").hide().end().find(":focus").trigger("blur").end().detach(),g.is_visible=!1,h.vakata.context._trigger("hide"))}},h(function(){_="rtl"===h(b.body).css("direction");var i=!1;g.element=h("<ul class='vakata-context'></ul>"),g.element.on("mouseenter","li",function(e){e.stopImmediatePropagation(),h.contains(this,e.relatedTarget)||(i&&clearTimeout(i),g.element.find(".vakata-context-hover").removeClass("vakata-context-hover").end(),h(this).siblings().find("ul").hide().end().end().parentsUntil(".vakata-context","li").addBack().addClass("vakata-context-hover"),h.vakata.context._show_submenu(this))}).on("mouseleave","li",function(e){h.contains(this,e.relatedTarget)||h(this).find(".vakata-context-hover").addBack().removeClass("vakata-context-hover")}).on("mouseleave",function(e){var t;h(this).find(".vakata-context-hover").removeClass("vakata-context-hover"),h.vakata.context.settings.hide_onmouseleave&&(i=setTimeout((t=this,function(){h.vakata.context.hide()}),h.vakata.context.settings.hide_onmouseleave))}).on("click","a",function(e){e.preventDefault(),h(this).trigger("blur").parent().hasClass("vakata-context-disabled")||!1===h.vakata.context._execute(h(this).attr("rel"))||h.vakata.context.hide()}).on("keydown","a",function(e){var t=null;switch(e.which){case 13:case 32:e.type="click",e.preventDefault(),h(e.currentTarget).trigger(e);break;case 37:g.is_visible&&(g.element.find(".vakata-context-hover").last().closest("li").first().find("ul").hide().find(".vakata-context-hover").removeClass("vakata-context-hover").end().end().children("a").trigger("focus"),e.stopImmediatePropagation(),e.preventDefault());break;case 38:g.is_visible&&((t=!(t=g.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").prevAll("li:not(.vakata-context-separator)").first()).length?g.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").last():t).addClass("vakata-context-hover").children("a").trigger("focus"),e.stopImmediatePropagation(),e.preventDefault());break;case 39:g.is_visible&&(g.element.find(".vakata-context-hover").last().children("ul").show().children("li:not(.vakata-context-separator)").removeClass("vakata-context-hover").first().addClass("vakata-context-hover").children("a").trigger("focus"),e.stopImmediatePropagation(),e.preventDefault());break;case 40:g.is_visible&&((t=!(t=g.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").nextAll("li:not(.vakata-context-separator)").first()).length?g.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").first():t).addClass("vakata-context-hover").children("a").trigger("focus"),e.stopImmediatePropagation(),e.preventDefault());break;case 27:h.vakata.context.hide(),e.preventDefault()}}).on("keydown",function(e){e.preventDefault();var e=g.element.find(".vakata-contextmenu-shortcut-"+e.which).parent();e.parent().not(".vakata-context-disabled")&&e.trigger("click")}),h(b).on("mousedown.vakata.jstree",function(e){g.is_visible&&g.element[0]!==e.target&&!h.contains(g.element[0],e.target)&&h.vakata.context.hide()}).on("context_show.vakata.jstree",function(e,t){g.element.find("li:has(ul)").children("a").addClass("vakata-context-parent"),_&&g.element.addClass("vakata-context-rtl").css("direction","rtl"),g.element.find("ul").hide().end()})}),E.jstree.defaults.dnd={copy:!0,open_timeout:500,is_draggable:!0,check_while_dragging:!0,always_copy:!1,inside_pos:0,drag_selection:!0,touch:!0,large_drop_target:!1,large_drag_target:!1,use_html5:!1,blank_space_drop:!1},E.jstree.plugins.dnd=function(e,o){this.init=function(e,t){o.init.call(this,e,t),this.settings.dnd.use_html5=this.settings.dnd.use_html5&&"draggable"in b.createElement("span")},this.bind=function(){o.bind.call(this),this.element.on(this.settings.dnd.use_html5?"dragstart.jstree":"mousedown.jstree touchstart.jstree",this.settings.dnd.large_drag_target?".jstree-node":".jstree-anchor",function(e){if(this.settings.dnd.large_drag_target&&E(e.target).closest(".jstree-node")[0]!==e.currentTarget)return!0;if("touchstart"===e.type&&(!this.settings.dnd.touch||"selected"===this.settings.dnd.touch&&!E(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").hasClass("jstree-clicked")))return!0;var t=this.get_node(e.target),i=this.is_selected(t)&&this.settings.dnd.drag_selection?this.get_top_selected().length:1,r=1<i?i+" "+this.get_string("nodes"):this.get_text(e.currentTarget);if(this.settings.core.force_text&&(r=E.vakata.html.escape(r)),t&&(t.id||0===t.id)&&t.id!==E.jstree.root&&(1===e.which||"touchstart"===e.type||"dragstart"===e.type)&&(!0===this.settings.dnd.is_draggable||E.vakata.is_function(this.settings.dnd.is_draggable)&&this.settings.dnd.is_draggable.call(this,1<i?this.get_top_selected(!0):[t],e))){if(d={jstree:!0,origin:this,obj:this.get_node(t,!0),nodes:1<i?this.get_top_selected():[t.id]},u=e.currentTarget,!this.settings.dnd.use_html5)return this.element.trigger("mousedown.jstree"),E.vakata.dnd.start(e,d,'<div id="jstree-dnd" class="jstree-'+this.get_theme()+" jstree-"+this.get_theme()+"-"+this.get_theme_variant()+" "+(this.settings.core.themes.responsive?" jstree-dnd-responsive":"")+'"><i class="jstree-icon jstree-er"></i>'+r+'<ins class="jstree-copy">+</ins></div>');E.vakata.dnd._trigger("start",e,{helper:E(),element:u,data:d})}}.bind(this)),this.settings.dnd.use_html5&&this.element.on("dragover.jstree",function(e){return e.preventDefault(),E.vakata.dnd._trigger("move",e,{helper:E(),element:u,data:d}),!1}).on("drop.jstree",function(e){return e.preventDefault(),E.vakata.dnd._trigger("stop",e,{helper:E(),element:u,data:d}),!1}.bind(this))},this.redraw_node=function(e,t,i,r){if((e=o.redraw_node.apply(this,arguments))&&this.settings.dnd.use_html5)if(this.settings.dnd.large_drag_target)e.setAttribute("draggable",!0);else{for(var s,a,n=null,s=0,a=e.childNodes.length;s<a;s++)if(e.childNodes[s]&&e.childNodes[s].className&&-1!==e.childNodes[s].className.indexOf("jstree-anchor")){n=e.childNodes[s];break}n&&n.setAttribute("draggable",!0)}return e}},E(function(){var N=!1,T=!1,O=!1,A=!1,S=E('<div id="jstree-marker">&#160;</div>').hide();E(b).on("dragover.vakata.jstree",function(e){u&&E.vakata.dnd._trigger("move",e,{helper:E(),element:u,data:d})}).on("drop.vakata.jstree",function(e){u&&(E.vakata.dnd._trigger("stop",e,{helper:E(),element:u,data:d}),d=u=null)}).on("dnd_start.vakata.jstree",function(e,t){O=N=!1,t&&t.data&&t.data.jstree&&S.appendTo(b.body)}).on("dnd_move.vakata.jstree",function(e,s){var a=s.event.target!==O.target;if(A&&(s.event&&"dragover"===s.event.type&&!a||clearTimeout(A)),s&&s.data&&s.data.jstree&&(!s.event.target.id||"jstree-marker"!==s.event.target.id)){O=s.event;var n=E.jstree.reference(s.event.target),o=!1,d=!1,t=!1,i,c,l,h,_,g,u,f,p,m,v,j,k,b,y,x,w,C;if(n&&n._data&&n._data.dnd)if(S.attr("class","jstree-"+n.get_theme()+(n.settings.core.themes.responsive?" jstree-dnd-responsive":"")),x=s.data.origin&&(s.data.origin.settings.dnd.always_copy||s.data.origin.settings.dnd.copy&&(s.event.metaKey||s.event.ctrlKey)),s.helper.children().attr("class","jstree-"+n.get_theme()+" jstree-"+n.get_theme()+"-"+n.get_theme_variant()+" "+(n.settings.core.themes.responsive?" jstree-dnd-responsive":"")).find(".jstree-copy").first()[x?"show":"hide"](),s.event.target!==n.element[0]&&s.event.target!==n.get_container_ul()[0]||0!==n.get_container_ul().children().length&&!n.settings.dnd.blank_space_drop){if((o=n.settings.dnd.large_drop_target?E(s.event.target).closest(".jstree-node").children(".jstree-anchor"):E(s.event.target).closest(".jstree-anchor"))&&o.length&&o.parent().is(".jstree-closed, .jstree-open, .jstree-leaf")&&(d=o.offset(),t=(s.event.pageY!==P?s.event:s.event.originalEvent).pageY-d.top,h=o.outerHeight(),u=t<h/3?["b","i","a"]:h-h/3<t?["a","i","b"]:h/2<t?["i","a","b"]:["i","b","a"],E.each(u,function(e,t){switch(t){case"b":c=d.left-6,l=d.top,_=n.get_parent(o),g=o.parent().index(),C="jstree-below";break;case"i":b=n.settings.dnd.inside_pos,y=n.get_node(o.parent()),c=d.left-2,l=d.top+h/2+1,_=y.id,g="first"===b?0:"last"===b?y.children.length:Math.min(b,y.children.length),C="jstree-inside";break;case"a":c=d.left-6,l=d.top+h,_=n.get_parent(o),g=o.parent().index()+1,C="jstree-above"}for(f=!0,p=0,m=s.data.nodes.length;p<m;p++)if(v=s.data.origin&&(s.data.origin.settings.dnd.always_copy||s.data.origin.settings.dnd.copy&&(s.event.metaKey||s.event.ctrlKey))?"copy_node":"move_node",j=g,"move_node"==v&&"a"===t&&s.data.origin&&s.data.origin===n&&_===n.get_parent(s.data.nodes[p])&&(k=n.get_node(_),j>E.inArray(s.data.nodes[p],k.children)&&--j),!(f=f&&(n&&n.settings&&n.settings.dnd&&!1===n.settings.dnd.check_while_dragging||n.check(v,s.data.origin&&s.data.origin!==n?s.data.origin.get_node(s.data.nodes[p]):s.data.nodes[p],_,j,{dnd:!0,ref:n.get_node(o.parent()),pos:t,origin:s.data.origin,is_multi:s.data.origin&&s.data.origin!==n,is_foreign:!s.data.origin})))){n&&n.last_error&&(T=n.last_error());break}var i,r;if("i"===t&&o.parent().is(".jstree-closed")&&n.settings.dnd.open_timeout&&(s.event&&"dragover"===s.event.type&&!a||(A&&clearTimeout(A),A=setTimeout((r=o,function(){i.open_node(r)}),(i=n).settings.dnd.open_timeout))),f)return(w=n.get_node(_,!0)).hasClass(".jstree-dnd-parent")||(E(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),w.addClass("jstree-dnd-parent")),N={ins:n,par:_,pos:"i"!==t||"last"!==b||0!==g||n.is_loaded(y)?g:"last"},S.css({left:c+"px",top:l+"px"}).show(),S.removeClass("jstree-above jstree-inside jstree-below").addClass(C),s.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"),s.event.originalEvent&&s.event.originalEvent.dataTransfer&&(s.event.originalEvent.dataTransfer.dropEffect=x?"copy":"move"),T={},!(u=!0)}),!0===u))return}else{for(f=!0,p=0,m=s.data.nodes.length;p<m;p++)if(!(f=f&&n.check(s.data.origin&&(s.data.origin.settings.dnd.always_copy||s.data.origin.settings.dnd.copy&&(s.event.metaKey||s.event.ctrlKey))?"copy_node":"move_node",s.data.origin&&s.data.origin!==n?s.data.origin.get_node(s.data.nodes[p]):s.data.nodes[p],E.jstree.root,"last",{dnd:!0,ref:n.get_node(E.jstree.root),pos:"i",origin:s.data.origin,is_multi:s.data.origin&&s.data.origin!==n,is_foreign:!s.data.origin})))break;if(f)return N={ins:n,par:E.jstree.root,pos:"last"},S.hide(),s.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"),void(s.event.originalEvent&&s.event.originalEvent.dataTransfer&&(s.event.originalEvent.dataTransfer.dropEffect=x?"copy":"move"))}E(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),N=!1,s.helper.find(".jstree-icon").removeClass("jstree-ok").addClass("jstree-er"),s.event.originalEvent&&s.event.originalEvent.dataTransfer,S.hide()}}).on("dnd_scroll.vakata.jstree",function(e,t){t&&t.data&&t.data.jstree&&(S.hide(),O=N=!1,t.helper.find(".jstree-icon").first().removeClass("jstree-ok").addClass("jstree-er"))}).on("dnd_stop.vakata.jstree",function(e,t){if(E(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),A&&clearTimeout(A),t&&t.data&&t.data.jstree){S.hide().detach();var i,r,s=[];if(N){for(i=0,r=t.data.nodes.length;i<r;i++)s[i]=t.data.origin?t.data.origin.get_node(t.data.nodes[i]):t.data.nodes[i];N.ins[t.data.origin&&(t.data.origin.settings.dnd.always_copy||t.data.origin.settings.dnd.copy&&(t.event.metaKey||t.event.ctrlKey))?"copy_node":"move_node"](s,N.par,N.pos,!1,!1,!1,t.data.origin)}else(i=E(t.event.target).closest(".jstree")).length&&T&&T.error&&"check"===T.error&&(i=i.jstree(!0))&&i.settings.core.error.call(this,T);N=O=!1}}).on("keyup.jstree keydown.jstree",function(e,t){(t=E.vakata.dnd._get())&&t.data&&t.data.jstree&&("keyup"===e.type&&27===e.which?(A&&clearTimeout(A),A=O=T=N=!1,S.hide().detach(),E.vakata.dnd._clean()):(t.helper.find(".jstree-copy").first()[t.data.origin&&(t.data.origin.settings.dnd.always_copy||t.data.origin.settings.dnd.copy&&(e.metaKey||e.ctrlKey))?"show":"hide"](),O&&(O.metaKey=e.metaKey,O.ctrlKey=e.ctrlKey,E.vakata.dnd._trigger("move",O))))})}),p={element:!((f=E).vakata.html={div:f("<div></div>"),escape:function(e){return f.vakata.html.div.text(e).html()},strip:function(e){return f.vakata.html.div.empty().append(f.parseHTML(e)).text()}}),target:!1,is_down:!1,is_drag:!1,helper:!1,helper_w:0,data:!1,init_x:0,init_y:0,scroll_l:0,scroll_t:0,scroll_e:!1,scroll_i:!1,is_touch:!1},f.vakata.dnd={settings:{scroll_speed:10,scroll_proximity:20,helper_left:5,helper_top:10,threshold:5,threshold_touch:10},_trigger:function(e,t,i){(i=i===P?f.vakata.dnd._get():i).event=t,f(b).triggerHandler("dnd_"+e+".vakata",i)},_get:function(){return{data:p.data,element:p.element,helper:p.helper}},_clean:function(){p.helper&&p.helper.remove(),p.scroll_i&&(clearInterval(p.scroll_i),p.scroll_i=!1),p={element:!1,target:!1,is_down:!1,is_drag:!1,helper:!1,helper_w:0,data:!1,init_x:0,init_y:0,scroll_l:0,scroll_t:0,scroll_e:!1,scroll_i:!1,is_touch:!1},u=null,f(b).off("mousemove.vakata.jstree touchmove.vakata.jstree",f.vakata.dnd.drag),f(b).off("mouseup.vakata.jstree touchend.vakata.jstree",f.vakata.dnd.stop)},_scroll:function(e){if(!p.scroll_e||!p.scroll_l&&!p.scroll_t)return p.scroll_i&&(clearInterval(p.scroll_i),p.scroll_i=!1),!1;if(!p.scroll_i)return p.scroll_i=setInterval(f.vakata.dnd._scroll,100),!1;if(!0===e)return!1;var t=p.scroll_e.scrollTop(),e=p.scroll_e.scrollLeft();p.scroll_e.scrollTop(t+p.scroll_t*f.vakata.dnd.settings.scroll_speed),p.scroll_e.scrollLeft(e+p.scroll_l*f.vakata.dnd.settings.scroll_speed),t===p.scroll_e.scrollTop()&&e===p.scroll_e.scrollLeft()||f.vakata.dnd._trigger("scroll",p.scroll_e)},start:function(e,t,i){"touchstart"===e.type&&e.originalEvent&&e.originalEvent.changedTouches&&e.originalEvent.changedTouches[0]&&(e.pageX=e.originalEvent.changedTouches[0].pageX,e.pageY=e.originalEvent.changedTouches[0].pageY,e.target=b.elementFromPoint(e.originalEvent.changedTouches[0].pageX-window.pageXOffset,e.originalEvent.changedTouches[0].pageY-window.pageYOffset)),p.is_drag&&f.vakata.dnd.stop({});try{e.currentTarget.unselectable="on",e.currentTarget.onselectstart=function(){return!1},e.currentTarget.style&&(e.currentTarget.style.touchAction="none",e.currentTarget.style.msTouchAction="none",e.currentTarget.style.MozUserSelect="none")}catch(e){}return p.init_x=e.pageX,p.init_y=e.pageY,p.data=t,p.is_down=!0,p.element=e.currentTarget,p.target=e.target,p.is_touch="touchstart"===e.type,!1!==i&&(p.helper=f("<div id='vakata-dnd'></div>").html(i).css({display:"block",margin:"0",padding:"0",position:"absolute",top:"-2000px",lineHeight:"16px",zIndex:"10000"})),f(b).on("mousemove.vakata.jstree touchmove.vakata.jstree",f.vakata.dnd.drag),f(b).on("mouseup.vakata.jstree touchend.vakata.jstree",f.vakata.dnd.stop),!1},drag:function(i){if("touchmove"===i.type&&i.originalEvent&&i.originalEvent.changedTouches&&i.originalEvent.changedTouches[0]&&(i.pageX=i.originalEvent.changedTouches[0].pageX,i.pageY=i.originalEvent.changedTouches[0].pageY,i.target=b.elementFromPoint(i.originalEvent.changedTouches[0].pageX-window.pageXOffset,i.originalEvent.changedTouches[0].pageY-window.pageYOffset)),p.is_down){if(!p.is_drag){if(!(Math.abs(i.pageX-p.init_x)>(p.is_touch?f.vakata.dnd.settings.threshold_touch:f.vakata.dnd.settings.threshold)||Math.abs(i.pageY-p.init_y)>(p.is_touch?f.vakata.dnd.settings.threshold_touch:f.vakata.dnd.settings.threshold)))return;p.helper&&(p.helper.appendTo(b.body),p.helper_w=p.helper.outerWidth()),p.is_drag=!0,f(p.target).one("click.vakata",!1),f.vakata.dnd._trigger("start",i)}var e=!1,t=!1,r=!1,s=!1,a=!1,n=!1,o=!1,d=!1,c=!1,l=!1;return p.scroll_t=0,p.scroll_l=0,p.scroll_e=!1,f(f(i.target).parentsUntil("body").addBack().get().reverse()).filter(function(){return this.ownerDocument&&/^auto|scroll$/.test(f(this).css("overflow"))&&(this.scrollHeight>this.offsetHeight||this.scrollWidth>this.offsetWidth)}).each(function(){var e=f(this),t=e.offset();if(this.scrollHeight>this.offsetHeight&&(t.top+e.height()-i.pageY<f.vakata.dnd.settings.scroll_proximity&&(p.scroll_t=1),i.pageY-t.top<f.vakata.dnd.settings.scroll_proximity&&(p.scroll_t=-1)),this.scrollWidth>this.offsetWidth&&(t.left+e.width()-i.pageX<f.vakata.dnd.settings.scroll_proximity&&(p.scroll_l=1),i.pageX-t.left<f.vakata.dnd.settings.scroll_proximity&&(p.scroll_l=-1)),p.scroll_t||p.scroll_l)return p.scroll_e=f(this),!1}),p.scroll_e||(e=f(b),t=f(window),r=e.height(),s=t.height(),a=e.width(),n=t.width(),o=e.scrollTop(),d=e.scrollLeft(),s<r&&i.pageY-o<f.vakata.dnd.settings.scroll_proximity&&(p.scroll_t=-1),s<r&&s-(i.pageY-o)<f.vakata.dnd.settings.scroll_proximity&&(p.scroll_t=1),n<a&&i.pageX-d<f.vakata.dnd.settings.scroll_proximity&&(p.scroll_l=-1),n<a&&n-(i.pageX-d)<f.vakata.dnd.settings.scroll_proximity&&(p.scroll_l=1),(p.scroll_t||p.scroll_l)&&(p.scroll_e=e)),p.scroll_e&&f.vakata.dnd._scroll(!0),p.helper&&(c=parseInt(i.pageY+f.vakata.dnd.settings.helper_top,10),l=parseInt(i.pageX+f.vakata.dnd.settings.helper_left,10),a&&l+p.helper_w>a&&(l=a-(p.helper_w+2)),p.helper.css({left:l+"px",top:(c=r&&r<c+25?r-50:c)+"px"})),f.vakata.dnd._trigger("move",i),!1}},stop:function(e){var t;return"touchend"===e.type&&e.originalEvent&&e.originalEvent.changedTouches&&e.originalEvent.changedTouches[0]&&(e.pageX=e.originalEvent.changedTouches[0].pageX,e.pageY=e.originalEvent.changedTouches[0].pageY,e.target=b.elementFromPoint(e.originalEvent.changedTouches[0].pageX-window.pageXOffset,e.originalEvent.changedTouches[0].pageY-window.pageYOffset)),p.is_drag?(e.target!==p.target&&f(p.target).off("click.vakata"),f.vakata.dnd._trigger("stop",e)):"touchend"===e.type&&e.target===p.target&&(t=setTimeout(function(){f(e.target).trigger("click")},100),f(e.target).one("click",function(){t&&clearTimeout(t)})),f.vakata.dnd._clean(),!1}},E.jstree.defaults.massload=null,E.jstree.plugins.massload=function(e,l){this.init=function(e,t){this._data.massload={},l.init.call(this,e,t)},this._load_nodes=function(a,n,o,d){var e=this.settings.massload,t=[],i=this._model.data,r,s,c;if(!o){for(r=0,s=a.length;r<s;r++)i[a[r]]&&(i[a[r]].state.loaded||i[a[r]].state.failed)&&!d||(t.push(a[r]),(c=this.get_node(a[r],!0))&&c.length&&c.addClass("jstree-loading").attr("aria-busy",!0));if(this._data.massload={},t.length){if(E.vakata.is_function(e))return e.call(this,t,function(e){var t,i;if(e)for(t in e)e.hasOwnProperty(t)&&(this._data.massload[t]=e[t]);for(t=0,i=a.length;t<i;t++)(c=this.get_node(a[t],!0))&&c.length&&c.removeClass("jstree-loading").attr("aria-busy",!1);l._load_nodes.call(this,a,n,o,d)}.bind(this));if("object"==typeof e&&e&&e.url)return e=E.extend(!0,{},e),E.vakata.is_function(e.url)&&(e.url=e.url.call(this,t)),E.vakata.is_function(e.data)&&(e.data=e.data.call(this,t)),E.ajax(e).done(function(e,t,i){var r,s;if(e)for(r in e)e.hasOwnProperty(r)&&(this._data.massload[r]=e[r]);for(r=0,s=a.length;r<s;r++)(c=this.get_node(a[r],!0))&&c.length&&c.removeClass("jstree-loading").attr("aria-busy",!1);l._load_nodes.call(this,a,n,o,d)}.bind(this)).fail(function(e){l._load_nodes.call(this,a,n,o,d)}.bind(this))}}return l._load_nodes.call(this,a,n,o,d)},this._load_node=function(e,t){var i=this._data.massload[e.id],r=null,i;return i?(r=this["string"==typeof i?"_append_html_data":"_append_json_data"](e,"string"==typeof i?E(E.parseHTML(i)).filter(function(){return 3!==this.nodeType}):i,function(e){t.call(this,e)}),(i=this.get_node(e.id,!0))&&i.length&&i.removeClass("jstree-loading").attr("aria-busy",!1),delete this._data.massload[e.id],r):l._load_node.call(this,e,t)}},E.jstree.defaults.search={ajax:!1,fuzzy:!1,case_sensitive:!1,show_only_matches:!1,show_only_matches_children:!1,close_opened_onclear:!0,search_leaves_only:!1,search_callback:!1},E.jstree.plugins.search=function(e,o){this.bind=function(){o.bind.call(this),this._data.search.str="",this._data.search.dom=E(),this._data.search.res=[],this._data.search.opn=[],this._data.search.som=!1,this._data.search.smc=!1,this._data.search.hdn=[],this.element.on("search.jstree",function(e,t){if(this._data.search.som&&t.res.length){for(var i=this._model.data,r,s,a=[],n,o,r=0,s=t.res.length;r<s;r++)if(i[t.res[r]]&&!i[t.res[r]].state.hidden&&(a.push(t.res[r]),a=a.concat(i[t.res[r]].parents),this._data.search.smc))for(n=0,o=i[t.res[r]].children_d.length;n<o;n++)i[i[t.res[r]].children_d[n]]&&!i[i[t.res[r]].children_d[n]].state.hidden&&a.push(i[t.res[r]].children_d[n]);a=E.vakata.array_remove_item(E.vakata.array_unique(a),E.jstree.root),this._data.search.hdn=this.hide_all(!0),this.show_node(a,!0),this.redraw(!0)}}.bind(this)).on("clear_search.jstree",function(e,t){this._data.search.som&&t.res.length&&(this.show_node(this._data.search.hdn,!0),this.redraw(!0))}.bind(this))},this.search=function(r,e,t,i,s,a){if(!1===r||""===E.vakata.trim(r.toString()))return this.clear_search();i=(i=this.get_node(i))&&(i.id||0===i.id)?i.id:null,r=r.toString();var n=this.settings.search,o=n.ajax||!1,d=this._model.data,c=null,l=[],h=[],_,g;if(this._data.search.res.length&&!s&&this.clear_search(),t===P&&(t=n.show_only_matches),a===P&&(a=n.show_only_matches_children),!e&&!1!==o)return E.vakata.is_function(o)?o.call(this,r,function(e){e&&e.d&&(e=e.d),this._load_nodes(E.vakata.is_array(e)?E.vakata.array_unique(e):[],function(){this.search(r,!0,t,i,s,a)})}.bind(this),i):((o=E.extend({},o)).data||(o.data={}),o.data.str=r,i&&(o.data.inside=i),this._data.search.lastRequest&&this._data.search.lastRequest.abort(),this._data.search.lastRequest=E.ajax(o).fail(function(){this._data.core.last_error={error:"ajax",plugin:"search",id:"search_01",reason:"Could not load search parents",data:JSON.stringify(o)},this.settings.core.error.call(this,this._data.core.last_error)}.bind(this)).done(function(e){e&&e.d&&(e=e.d),this._load_nodes(E.vakata.is_array(e)?E.vakata.array_unique(e):[],function(){this.search(r,!0,t,i,s,a)})}.bind(this)),this._data.search.lastRequest);if(s||(this._data.search.str=r,this._data.search.dom=E(),this._data.search.res=[],this._data.search.opn=[],this._data.search.som=t,this._data.search.smc=a),c=new E.vakata.search(r,!0,{caseSensitive:n.case_sensitive,fuzzy:n.fuzzy}),E.each(d[i||E.jstree.root].children_d,function(e,t){var i=d[t];i.text&&!i.state.hidden&&(!n.search_leaves_only||i.state.loaded&&0===i.children.length)&&(n.search_callback&&n.search_callback.call(this,r,i)||!n.search_callback&&c.search(i.text).isMatch)&&(l.push(t),h=h.concat(i.parents))}),l.length){for(_=0,g=(h=E.vakata.array_unique(h)).length;_<g;_++)h[_]!==E.jstree.root&&d[h[_]]&&!0===this.open_node(h[_],null,0)&&this._data.search.opn.push(h[_]);s?(this._data.search.dom=this._data.search.dom.add(E(this.element[0].querySelectorAll("#"+E.map(l,function(e){return-1!=="0123456789".indexOf(e[0])?"\\3"+e[0]+" "+e.substr(1).replace(E.jstree.idregex,"\\$&"):e.replace(E.jstree.idregex,"\\$&")}).join(", #")))),this._data.search.res=E.vakata.array_unique(this._data.search.res.concat(l))):(this._data.search.dom=E(this.element[0].querySelectorAll("#"+E.map(l,function(e){return-1!=="0123456789".indexOf(e[0])?"\\3"+e[0]+" "+e.substr(1).replace(E.jstree.idregex,"\\$&"):e.replace(E.jstree.idregex,"\\$&")}).join(", #"))),this._data.search.res=l),this._data.search.dom.children(".jstree-anchor").addClass("jstree-search")}this.trigger("search",{nodes:this._data.search.dom,str:r,res:this._data.search.res,show_only_matches:t})},this.clear_search=function(){this.settings.search.close_opened_onclear&&this.close_node(this._data.search.opn,0),this.trigger("clear_search",{nodes:this._data.search.dom,str:this._data.search.str,res:this._data.search.res}),this._data.search.res.length&&(this._data.search.dom=E(this.element[0].querySelectorAll("#"+E.map(this._data.search.res,function(e){return-1!=="0123456789".indexOf(e[0])?"\\3"+e[0]+" "+e.substr(1).replace(E.jstree.idregex,"\\$&"):e.replace(E.jstree.idregex,"\\$&")}).join(", #"))),this._data.search.dom.children(".jstree-anchor").removeClass("jstree-search")),this._data.search.str="",this._data.search.res=[],this._data.search.opn=[],this._data.search.dom=E()},this.redraw_node=function(e,t,i,r){if((e=o.redraw_node.apply(this,arguments))&&-1!==E.inArray(e.id,this._data.search.res)){for(var s,a,n=null,s=0,a=e.childNodes.length;s<a;s++)if(e.childNodes[s]&&e.childNodes[s].className&&-1!==e.childNodes[s].className.indexOf("jstree-anchor")){n=e.childNodes[s];break}n&&(n.className+=" jstree-search")}return e}},(w=E).vakata.search=function(p,e,m){m=m||{},!1!==(m=w.extend({},w.vakata.search.defaults,m)).fuzzy&&(m.fuzzy=!0),p=m.caseSensitive?p:p.toLowerCase();var v=m.location,i=m.distance,j=m.threshold,k=p.length,b,y,x,t;return 32<k&&(m.fuzzy=!1),m.fuzzy&&(b=1<<k-1,y=function(){for(var e={},t=0,t=0;t<k;t++)e[p.charAt(t)]=0;for(t=0;t<k;t++)e[p.charAt(t)]|=1<<k-t-1;return e}(),x=function(e,t){var e=e/k,t=Math.abs(v-t);return i?e+t/i:t?1:e}),t=function(e){if(e=m.caseSensitive?e.toString():e.toString().toLowerCase(),p===e||-1!==e.indexOf(p))return{isMatch:!0,score:0};if(!m.fuzzy)return{isMatch:!1,score:1};var t,i,r=e.length,s=j,a=e.indexOf(p,v),n,o,d=k+r,c,l,h,_,g,u=1,f=[];for(-1!==a&&(s=Math.min(x(0,a),s),-1!==(a=e.lastIndexOf(p,v+k))&&(s=Math.min(x(0,a),s))),a=-1,t=0;t<k;t++){n=0,o=d;while(n<o)x(t,v+o)<=s?n=o:d=o,o=Math.floor((d-n)/2+n);for(d=o,l=Math.max(1,v-o+1),h=Math.min(v+o,r)+k,(_=new Array(h+2))[h+1]=(1<<t)-1,i=h;l<=i;i--)if(g=y[e.charAt(i-1)],_[i]=0===t?(_[i+1]<<1|1)&g:(_[i+1]<<1|1)&g|(c[i+1]|c[i])<<1|1|c[i+1],_[i]&b&&(u=x(t,i-1))<=s){if(s=u,f.push(a=i-1),!(v<a))break;l=Math.max(1,2*v-a)}if(x(t+1,v)>s)break;c=_}return{isMatch:0<=a,score:u}},!0===e?{search:t}:t(e)},w.vakata.search.defaults={location:0,distance:100,threshold:.6,fuzzy:!1,caseSensitive:!1},E.jstree.defaults.sort=function(e,t){return this.get_text(e)>this.get_text(t)?1:-1};var m=!(E.jstree.plugins.sort=function(e,t){this.bind=function(){t.bind.call(this),this.element.on("model.jstree",function(e,t){this.sort(t.parent,!0)}.bind(this)).on("rename_node.jstree create_node.jstree",function(e,t){this.sort(t.parent||t.node.parent,!1),this.redraw_node(t.parent||t.node.parent,!0)}.bind(this)).on("move_node.jstree copy_node.jstree",function(e,t){this.sort(t.parent,!1),this.redraw_node(t.parent,!0)}.bind(this))},this.sort=function(e,t){var i,r;if((e=this.get_node(e))&&e.children&&e.children.length&&(e.children.sort(this.settings.sort.bind(this)),t))for(i=0,r=e.children_d.length;i<r;i++)this.sort(e.children_d[i],!1)}}),t,v;E.jstree.defaults.state={key:"jstree",events:"changed.jstree open_node.jstree close_node.jstree check_node.jstree uncheck_node.jstree",ttl:!1,filter:!1,preserve_loaded:!1},E.jstree.plugins.state=function(e,t){this.bind=function(){t.bind.call(this);var i=function(){this.element.on(this.settings.state.events,function(){m&&clearTimeout(m),m=setTimeout(function(){this.save_state()}.bind(this),100)}.bind(this)),this.trigger("state_ready")}.bind(this);this.element.on("ready.jstree",function(e,t){this.element.one("restore_state.jstree",i),this.restore_state()||i()}.bind(this))},this.save_state=function(){var e=this.get_state();this.settings.state.preserve_loaded||delete e.core.loaded;var e={state:e,ttl:this.settings.state.ttl,sec:+new Date};E.vakata.storage.set(this.settings.state.key,JSON.stringify(e))},this.restore_state=function(){var i=E.vakata.storage.get(this.settings.state.key);if(i)try{i=JSON.parse(i)}catch(e){return!1}return!(i&&i.ttl&&i.sec&&+new Date-i.sec>i.ttl)&&(!!(i=(i=i&&i.state?i.state:i)&&E.vakata.is_function(this.settings.state.filter)?this.settings.state.filter.call(this,i):i)&&(this.settings.state.preserve_loaded||delete i.core.loaded,this.element.one("set_state.jstree",function(e,t){t.instance.trigger("restore_state",{state:E.extend(!0,{},i)})}),this.set_state(i),!0))},this.clear_state=function(){return E.vakata.storage.del(this.settings.state.key)}},E.vakata.storage={set:function(e,t){return window.localStorage.setItem(e,t)},get:function(e){return window.localStorage.getItem(e)},del:function(e){return window.localStorage.removeItem(e)}},E.jstree.defaults.types={default:{}},E.jstree.defaults.types[E.jstree.root]={},E.jstree.plugins.types=function(e,l){this.init=function(e,t){var i,r;if(t&&t.types&&t.types.default)for(i in t.types)if("default"!==i&&i!==E.jstree.root&&t.types.hasOwnProperty(i))for(r in t.types.default)t.types.default.hasOwnProperty(r)&&t.types[i][r]===P&&(t.types[i][r]=t.types.default[r]);l.init.call(this,e,t),this._model.data[E.jstree.root].type=E.jstree.root},this.refresh=function(e,t){l.refresh.call(this,e,t),this._model.data[E.jstree.root].type=E.jstree.root},this.bind=function(){this.element.on("model.jstree",function(e,t){for(var i=this._model.data,r=t.nodes,s=this.settings.types,a,n,o="default",d,a=0,n=r.length;a<n;a++){if(o="default",i[r[a]].original&&i[r[a]].original.type&&s[i[r[a]].original.type]&&(o=i[r[a]].original.type),i[r[a]].data&&i[r[a]].data.jstree&&i[r[a]].data.jstree.type&&s[i[r[a]].data.jstree.type]&&(o=i[r[a]].data.jstree.type),i[r[a]].type=o,!0===i[r[a]].icon&&s[o].icon!==P&&(i[r[a]].icon=s[o].icon),s[o].li_attr!==P&&"object"==typeof s[o].li_attr)for(d in s[o].li_attr)s[o].li_attr.hasOwnProperty(d)&&"id"!==d&&(i[r[a]].li_attr[d]===P?i[r[a]].li_attr[d]=s[o].li_attr[d]:"class"===d&&(i[r[a]].li_attr.class=s[o].li_attr.class+" "+i[r[a]].li_attr.class));if(s[o].a_attr!==P&&"object"==typeof s[o].a_attr)for(d in s[o].a_attr)s[o].a_attr.hasOwnProperty(d)&&"id"!==d&&(i[r[a]].a_attr[d]===P?i[r[a]].a_attr[d]=s[o].a_attr[d]:"href"===d&&"#"===i[r[a]].a_attr[d]?i[r[a]].a_attr.href=s[o].a_attr.href:"class"===d&&(i[r[a]].a_attr.class=s[o].a_attr.class+" "+i[r[a]].a_attr.class))}i[E.jstree.root].type=E.jstree.root}.bind(this)),l.bind.call(this)},this.get_json=function(e,t,i){var r,s,a=this._model.data,n=t?E.extend(!0,{},t,{no_id:!1}):{},o=l.get_json.call(this,e,n,i);if(!1===o)return!1;if(E.vakata.is_array(o))for(r=0,s=o.length;r<s;r++)o[r].type=(o[r].id||0===o[r].id)&&a[o[r].id]&&a[o[r].id].type?a[o[r].id].type:"default",t&&t.no_id&&(delete o[r].id,o[r].li_attr&&o[r].li_attr.id&&delete o[r].li_attr.id,o[r].a_attr&&o[r].a_attr.id&&delete o[r].a_attr.id);else o.type=(o.id||0===o.id)&&a[o.id]&&a[o.id].type?a[o.id].type:"default",t&&t.no_id&&(o=this._delete_ids(o));return o},this._delete_ids=function(e){if(E.vakata.is_array(e)){for(var t=0,i=e.length;t<i;t++)e[t]=this._delete_ids(e[t]);return e}return delete e.id,e.li_attr&&e.li_attr.id&&delete e.li_attr.id,e.a_attr&&e.a_attr.id&&delete e.a_attr.id,e.children&&E.vakata.is_array(e.children)&&(e.children=this._delete_ids(e.children)),e},this.check=function(e,t,i,r,s){if(!1===l.check.call(this,e,t,i,r,s))return!1;t=t&&(t.id||0===t.id)?t:this.get_node(t),i=i&&(i.id||0===i.id)?i:this.get_node(i);var a,n,o,d,c,a=(a=t&&(t.id||0===t.id)?s&&s.origin?s.origin:E.jstree.reference(t.id):null)&&a._model&&a._model.data?a._model.data:null;switch(e){case"create_node":case"move_node":case"copy_node":if("move_node"!==e||-1===E.inArray(t.id,i.children)){if((n=this.get_rules(i)).max_children!==P&&-1!==n.max_children&&n.max_children===i.children.length)return!(this._data.core.last_error={error:"check",plugin:"types",id:"types_01",reason:"max_children prevents function: "+e,data:JSON.stringify({chk:e,pos:r,obj:!(!t||!t.id&&0!==t.id)&&t.id,par:!(!i||!i.id&&0!==i.id)&&i.id})});if(n.valid_children!==P&&-1!==n.valid_children&&-1===E.inArray(t.type||"default",n.valid_children))return!(this._data.core.last_error={error:"check",plugin:"types",id:"types_02",reason:"valid_children prevents function: "+e,data:JSON.stringify({chk:e,pos:r,obj:!(!t||!t.id&&0!==t.id)&&t.id,par:!(!i||!i.id&&0!==i.id)&&i.id})});if(a&&t.children_d&&t.parents){for(d=o=0,c=t.children_d.length;d<c;d++)o=Math.max(o,a[t.children_d[d]].parents.length);o=o-t.parents.length+1}(o<=0||o===P)&&(o=1);do{if(n.max_depth!==P&&-1!==n.max_depth&&n.max_depth<o)return!(this._data.core.last_error={error:"check",plugin:"types",id:"types_03",reason:"max_depth prevents function: "+e,data:JSON.stringify({chk:e,pos:r,obj:!(!t||!t.id&&0!==t.id)&&t.id,par:!(!i||!i.id&&0!==i.id)&&i.id})});i=this.get_node(i.parent),n=this.get_rules(i),o++}while(i)}}return!0},this.get_rules=function(e){if(!(e=this.get_node(e)))return!1;var e=this.get_type(e,!0);return e.max_depth===P&&(e.max_depth=-1),e.max_children===P&&(e.max_children=-1),e.valid_children===P&&(e.valid_children=-1),e},this.get_type=function(e,t){return!!(e=this.get_node(e))&&(t?E.extend({type:e.type},this.settings.types[e.type]):e.type)},this.set_type=function(e,t){var i=this._model.data,r,s,a,n,o,d,c,l;if(E.vakata.is_array(e)){for(s=0,a=(e=e.slice()).length;s<a;s++)this.set_type(e[s],t);return!0}if(r=this.settings.types,e=this.get_node(e),!r[t]||!e)return!1;if((c=this.get_node(e,!0))&&c.length&&(l=c.children(".jstree-anchor")),n=e.type,o=this.get_icon(e),e.type=t,!0!==o&&r[n]&&(r[n].icon===P||o!==r[n].icon)||this.set_icon(e,r[t].icon===P||r[t].icon),r[n]&&r[n].li_attr!==P&&"object"==typeof r[n].li_attr)for(d in r[n].li_attr)r[n].li_attr.hasOwnProperty(d)&&"id"!==d&&("class"===d?(i[e.id].li_attr.class=(i[e.id].li_attr.class||"").replace(r[n].li_attr[d],""),c&&c.removeClass(r[n].li_attr[d])):i[e.id].li_attr[d]===r[n].li_attr[d]&&(i[e.id].li_attr[d]=null,c&&c.removeAttr(d)));if(r[n]&&r[n].a_attr!==P&&"object"==typeof r[n].a_attr)for(d in r[n].a_attr)r[n].a_attr.hasOwnProperty(d)&&"id"!==d&&("class"===d?(i[e.id].a_attr.class=(i[e.id].a_attr.class||"").replace(r[n].a_attr[d],""),l&&l.removeClass(r[n].a_attr[d])):i[e.id].a_attr[d]===r[n].a_attr[d]&&("href"===d?(i[e.id].a_attr[d]="#",l&&l.attr("href","#")):(delete i[e.id].a_attr[d],l&&l.removeAttr(d))));if(r[t].li_attr!==P&&"object"==typeof r[t].li_attr)for(d in r[t].li_attr)r[t].li_attr.hasOwnProperty(d)&&"id"!==d&&(i[e.id].li_attr[d]===P?(i[e.id].li_attr[d]=r[t].li_attr[d],c&&("class"===d?c.addClass(r[t].li_attr[d]):c.attr(d,r[t].li_attr[d]))):"class"===d&&(i[e.id].li_attr.class=r[t].li_attr[d]+" "+i[e.id].li_attr.class,c&&c.addClass(r[t].li_attr[d])));if(r[t].a_attr!==P&&"object"==typeof r[t].a_attr)for(d in r[t].a_attr)r[t].a_attr.hasOwnProperty(d)&&"id"!==d&&(i[e.id].a_attr[d]===P?(i[e.id].a_attr[d]=r[t].a_attr[d],l&&("class"===d?l.addClass(r[t].a_attr[d]):l.attr(d,r[t].a_attr[d]))):"href"===d&&"#"===i[e.id].a_attr[d]?(i[e.id].a_attr.href=r[t].a_attr.href,l&&l.attr("href",r[t].a_attr.href)):"class"===d&&(i[e.id].a_attr.class=r[t].a_attr.class+" "+i[e.id].a_attr.class,l&&l.addClass(r[t].a_attr[d])));return!0}},E.jstree.defaults.unique={case_sensitive:!1,trim_whitespace:!1,duplicate:function(e,t){return e+" ("+t+")"}},E.jstree.plugins.unique=function(e,f){this.check=function(e,t,i,r,s){if(!1===f.check.call(this,e,t,i,r,s))return!1;if(t=t&&(t.id||0===t.id)?t:this.get_node(t),!(i=i&&(i.id||0===i.id)?i:this.get_node(i))||!i.children)return!0;for(var a="rename_node"===e?r:t.text,n=[],o=this.settings.unique.case_sensitive,d=this.settings.unique.trim_whitespace,c=this._model.data,l,h,_,l=0,h=i.children.length;l<h;l++)_=c[i.children[l]].text,o||(_=_.toLowerCase()),d&&(_=_.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),n.push(_);switch(o||(a=a.toLowerCase()),d&&(a=a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),e){case"delete_node":return!0;case"rename_node":return _=t.text||"",o||(_=_.toLowerCase()),d&&(_=_.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),(l=-1===E.inArray(a,n)||t.text&&_===a)||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_01",reason:"Child with name "+a+" already exists. Preventing: "+e,data:JSON.stringify({chk:e,pos:r,obj:!(!t||!t.id&&0!==t.id)&&t.id,par:!(!i||!i.id&&0!==i.id)&&i.id})}),l;case"create_node":return(l=-1===E.inArray(a,n))||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_04",reason:"Child with name "+a+" already exists. Preventing: "+e,data:JSON.stringify({chk:e,pos:r,obj:!(!t||!t.id&&0!==t.id)&&t.id,par:!(!i||!i.id&&0!==i.id)&&i.id})}),l;case"copy_node":return(l=-1===E.inArray(a,n))||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_02",reason:"Child with name "+a+" already exists. Preventing: "+e,data:JSON.stringify({chk:e,pos:r,obj:!(!t||!t.id&&0!==t.id)&&t.id,par:!(!i||!i.id&&0!==i.id)&&i.id})}),l;case"move_node":return(l=t.parent===i.id&&(!s||!s.is_multi)||-1===E.inArray(a,n))||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_03",reason:"Child with name "+a+" already exists. Preventing: "+e,data:JSON.stringify({chk:e,pos:r,obj:!(!t||!t.id&&0!==t.id)&&t.id,par:!(!i||!i.id&&0!==i.id)&&i.id})}),l}return!0},this.create_node=function(e,t,i,r,s){if(!t||"object"==typeof t&&t.text===P){if(null===e&&(e=E.jstree.root),!(e=this.get_node(e)))return f.create_node.call(this,e,t,i,r,s);if(!(i=i===P?"last":i).toString().match(/^(before|after)$/)&&!s&&!this.is_loaded(e))return f.create_node.call(this,e,t,i,r,s);t=t||{};for(var a,n,o,d,c,l=this._model.data,h=this.settings.unique.case_sensitive,_=this.settings.unique.trim_whitespace,g=this.settings.unique.duplicate,u,n=a=this.get_string("New node"),o=[],d=0,c=e.children.length;d<c;d++)u=l[e.children[d]].text,h||(u=u.toLowerCase()),_&&(u=u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),o.push(u);d=1,u=n,h||(u=u.toLowerCase()),_&&(u=u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""));while(-1!==E.inArray(u,o))u=n=g.call(this,a,++d).toString(),h||(u=u.toLowerCase()),_&&(u=u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""));t.text=n}return f.create_node.call(this,e,t,i,r,s)}};var j=b.createElement("DIV");if(j.setAttribute("unselectable","on"),j.setAttribute("role","presentation"),j.className="jstree-wholerow",j.innerHTML="&#160;",E.jstree.plugins.wholerow=function(e,a){this.bind=function(){a.bind.call(this),this.element.on("ready.jstree set_state.jstree",function(){this.hide_dots()}.bind(this)).on("init.jstree loading.jstree ready.jstree",function(){this.get_container_ul().addClass("jstree-wholerow-ul")}.bind(this)).on("deselect_all.jstree",function(e,t){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked")}.bind(this)).on("changed.jstree",function(e,t){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");for(var i=!1,r,s,r=0,s=t.selected.length;r<s;r++)(i=this.get_node(t.selected[r],!0))&&i.length&&i.children(".jstree-wholerow").addClass("jstree-wholerow-clicked")}.bind(this)).on("open_node.jstree",function(e,t){this.get_node(t.node,!0).find(".jstree-clicked").parent().children(".jstree-wholerow").addClass("jstree-wholerow-clicked")}.bind(this)).on("hover_node.jstree dehover_node.jstree",function(e,t){"hover_node"===e.type&&this.is_disabled(t.node)||this.get_node(t.node,!0).children(".jstree-wholerow")["hover_node"===e.type?"addClass":"removeClass"]("jstree-wholerow-hovered")}.bind(this)).on("contextmenu.jstree",".jstree-wholerow",function(e){var t;this._data.contextmenu&&(e.preventDefault(),t=E.Event("contextmenu",{metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,pageX:e.pageX,pageY:e.pageY}),E(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t))}.bind(this)).on("click.jstree",".jstree-wholerow",function(e){e.stopImmediatePropagation();var t=E.Event("click",{metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey});E(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t).trigger("focus")}).on("dblclick.jstree",".jstree-wholerow",function(e){e.stopImmediatePropagation();var t=E.Event("dblclick",{metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey});E(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t).trigger("focus")}).on("click.jstree",".jstree-leaf > .jstree-ocl",function(e){e.stopImmediatePropagation();var t=E.Event("click",{metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey});E(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t).trigger("focus")}.bind(this)).on("mouseover.jstree",".jstree-wholerow, .jstree-icon",function(e){return e.stopImmediatePropagation(),this.is_disabled(e.currentTarget)||this.hover_node(e.currentTarget),!1}.bind(this)).on("mouseleave.jstree",".jstree-node",function(e){this.dehover_node(e.currentTarget)}.bind(this))},this.teardown=function(){this.settings.wholerow&&this.element.find(".jstree-wholerow").remove(),a.teardown.call(this)},this.redraw_node=function(e,t,i,r){var s;return(e=a.redraw_node.apply(this,arguments))&&(s=j.cloneNode(!0),-1!==E.inArray(e.id,this._data.core.selected)&&(s.className+=" jstree-wholerow-clicked"),this._data.core.focused&&this._data.core.focused===e.id&&(s.className+=" jstree-wholerow-hovered"),e.insertBefore(s,e.childNodes[0])),e}},window.customElements&&Object&&Object.create){var e=Object.create(HTMLElement.prototype);e.createdCallback=function(){var e={core:{},plugins:[]},t;for(t in E.jstree.plugins)E.jstree.plugins.hasOwnProperty(t)&&this.attributes[t]&&(e.plugins.push(t),this.getAttribute(t)&&JSON.parse(this.getAttribute(t))&&(e[t]=JSON.parse(this.getAttribute(t))));for(t in E.jstree.defaults.core)E.jstree.defaults.core.hasOwnProperty(t)&&this.attributes[t]&&(e.core[t]=JSON.parse(this.getAttribute(t))||this.getAttribute(t));E(this).jstree(e)};try{window.customElements.define("vakata-jstree",function(){},{prototype:e})}catch(e){}}}});

/***/ }),

/***/ 37:
/***/ (function(module) {

//     keymaster.js
//     (c) 2011-2013 Thomas Fuchs
//     keymaster.js may be freely distributed under the MIT license.

;(function(global){
  var k,
    _handlers = {},
    _mods = { 16: false, 18: false, 17: false, 91: false },
    _scope = 'all',
    // modifier keys
    _MODIFIERS = {
      '⇧': 16, shift: 16,
      '⌥': 18, alt: 18, option: 18,
      '⌃': 17, ctrl: 17, control: 17,
      '⌘': 91, command: 91
    },
    // special keys
    _MAP = {
      backspace: 8, tab: 9, clear: 12,
      enter: 13, 'return': 13,
      esc: 27, escape: 27, space: 32,
      left: 37, up: 38,
      right: 39, down: 40,
      del: 46, 'delete': 46,
      home: 36, end: 35,
      pageup: 33, pagedown: 34,
      ',': 188, '.': 190, '/': 191,
      '`': 192, '-': 189, '=': 187,
      ';': 186, '\'': 222,
      '[': 219, ']': 221, '\\': 220
    },
    code = function(x){
      return _MAP[x] || x.toUpperCase().charCodeAt(0);
    },
    _downKeys = [];

  for(k=1;k<20;k++) _MAP['f'+k] = 111+k;

  // IE doesn't support Array#indexOf, so have a simple replacement
  function index(array, item){
    var i = array.length;
    while(i--) if(array[i]===item) return i;
    return -1;
  }

  // for comparing mods before unassignment
  function compareArray(a1, a2) {
    if (a1.length != a2.length) return false;
    for (var i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) return false;
    }
    return true;
  }

  var modifierMap = {
      16:'shiftKey',
      18:'altKey',
      17:'ctrlKey',
      91:'metaKey'
  };
  function updateModifierKey(event) {
      for(k in _mods) _mods[k] = event[modifierMap[k]];
  };

  // handle keydown event
  function dispatch(event) {
    var key, handler, k, i, modifiersMatch, scope;
    key = event.keyCode;

    if (index(_downKeys, key) == -1) {
        _downKeys.push(key);
    }

    // if a modifier key, set the key.<modifierkeyname> property to true and return
    if(key == 93 || key == 224) key = 91; // right command on webkit, command on Gecko
    if(key in _mods) {
      _mods[key] = true;
      // 'assignKey' from inside this closure is exported to window.key
      for(k in _MODIFIERS) if(_MODIFIERS[k] == key) assignKey[k] = true;
      return;
    }
    updateModifierKey(event);

    // see if we need to ignore the keypress (filter() can can be overridden)
    // by default ignore key presses if a select, textarea, or input is focused
    if(!assignKey.filter.call(this, event)) return;

    // abort if no potentially matching shortcuts found
    if (!(key in _handlers)) return;

    scope = getScope();

    // for each potential shortcut
    for (i = 0; i < _handlers[key].length; i++) {
      handler = _handlers[key][i];

      // see if it's in the current scope
      if(handler.scope == scope || handler.scope == 'all'){
        // check if modifiers match if any
        modifiersMatch = handler.mods.length > 0;
        for(k in _mods)
          if((!_mods[k] && index(handler.mods, +k) > -1) ||
            (_mods[k] && index(handler.mods, +k) == -1)) modifiersMatch = false;
        // call the handler and stop the event if neccessary
        if((handler.mods.length == 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91]) || modifiersMatch){
          if(handler.method(event, handler)===false){
            if(event.preventDefault) event.preventDefault();
              else event.returnValue = false;
            if(event.stopPropagation) event.stopPropagation();
            if(event.cancelBubble) event.cancelBubble = true;
          }
        }
      }
    }
  };

  // unset modifier keys on keyup
  function clearModifier(event){
    var key = event.keyCode, k,
        i = index(_downKeys, key);

    // remove key from _downKeys
    if (i >= 0) {
        _downKeys.splice(i, 1);
    }

    if(key == 93 || key == 224) key = 91;
    if(key in _mods) {
      _mods[key] = false;
      for(k in _MODIFIERS) if(_MODIFIERS[k] == key) assignKey[k] = false;
    }
  };

  function resetModifiers() {
    for(k in _mods) _mods[k] = false;
    for(k in _MODIFIERS) assignKey[k] = false;
  };

  // parse and assign shortcut
  function assignKey(key, scope, method){
    var keys, mods;
    keys = getKeys(key);
    if (method === undefined) {
      method = scope;
      scope = 'all';
    }

    // for each shortcut
    for (var i = 0; i < keys.length; i++) {
      // set modifier keys if any
      mods = [];
      key = keys[i].split('+');
      if (key.length > 1){
        mods = getMods(key);
        key = [key[key.length-1]];
      }
      // convert to keycode and...
      key = key[0]
      key = code(key);
      // ...store handler
      if (!(key in _handlers)) _handlers[key] = [];
      _handlers[key].push({ shortcut: keys[i], scope: scope, method: method, key: keys[i], mods: mods });
    }
  };

  // unbind all handlers for given key in current scope
  function unbindKey(key, scope) {
    var multipleKeys, keys,
      mods = [],
      i, j, obj;

    multipleKeys = getKeys(key);

    for (j = 0; j < multipleKeys.length; j++) {
      keys = multipleKeys[j].split('+');

      if (keys.length > 1) {
        mods = getMods(keys);
        key = keys[keys.length - 1];
      }

      key = code(key);

      if (scope === undefined) {
        scope = getScope();
      }
      if (!_handlers[key]) {
        return;
      }
      for (i = 0; i < _handlers[key].length; i++) {
        obj = _handlers[key][i];
        // only clear handlers if correct scope and mods match
        if (obj.scope === scope && compareArray(obj.mods, mods)) {
          _handlers[key][i] = {};
        }
      }
    }
  };

  // Returns true if the key with code 'keyCode' is currently down
  // Converts strings into key codes.
  function isPressed(keyCode) {
      if (typeof(keyCode)=='string') {
        keyCode = code(keyCode);
      }
      return index(_downKeys, keyCode) != -1;
  }

  function getPressedKeyCodes() {
      return _downKeys.slice(0);
  }

  function filter(event){
    var tagName = (event.target || event.srcElement).tagName;
    // ignore keypressed in any elements that support keyboard data input
    return !(tagName == 'INPUT' || tagName == 'SELECT' || tagName == 'TEXTAREA');
  }

  // initialize key.<modifier> to false
  for(k in _MODIFIERS) assignKey[k] = false;

  // set current scope (default 'all')
  function setScope(scope){ _scope = scope || 'all' };
  function getScope(){ return _scope || 'all' };

  // delete all handlers for a given scope
  function deleteScope(scope){
    var key, handlers, i;

    for (key in _handlers) {
      handlers = _handlers[key];
      for (i = 0; i < handlers.length; ) {
        if (handlers[i].scope === scope) handlers.splice(i, 1);
        else i++;
      }
    }
  };

  // abstract key logic for assign and unassign
  function getKeys(key) {
    var keys;
    key = key.replace(/\s/g, '');
    keys = key.split(',');
    if ((keys[keys.length - 1]) == '') {
      keys[keys.length - 2] += ',';
    }
    return keys;
  }

  // abstract mods logic for assign and unassign
  function getMods(key) {
    var mods = key.slice(0, key.length - 1);
    for (var mi = 0; mi < mods.length; mi++)
    mods[mi] = _MODIFIERS[mods[mi]];
    return mods;
  }

  // cross-browser events
  function addEvent(object, event, method) {
    if (object.addEventListener)
      object.addEventListener(event, method, false);
    else if(object.attachEvent)
      object.attachEvent('on'+event, function(){ method(window.event) });
  };

  // set the handlers globally on document
  addEvent(document, 'keydown', function(event) { dispatch(event) }); // Passing _scope to a callback to ensure it remains the same by execution. Fixes #48
  addEvent(document, 'keyup', clearModifier);

  // reset modifiers to false whenever the window is (re)focused.
  addEvent(window, 'focus', resetModifiers);

  // store previously defined key
  var previousKey = global.key;

  // restore previously defined key and return reference to our key object
  function noConflict() {
    var k = global.key;
    global.key = previousKey;
    return k;
  }

  // set window.key and window.key.set/get/deleteScope, and the default filter
  global.key = assignKey;
  global.key.setScope = setScope;
  global.key.getScope = getScope;
  global.key.deleteScope = deleteScope;
  global.key.filter = filter;
  global.key.isPressed = isPressed;
  global.key.getPressedKeyCodes = getPressedKeyCodes;
  global.key.noConflict = noConflict;
  global.key.unbind = unbindKey;

  if(true) module.exports = assignKey;

})(this);


/***/ }),

/***/ 10:
/***/ ((module) => {

module.exports = "/* jsTree default theme */\n.jstree-node,\n.jstree-children,\n.jstree-container-ul {\n  display: block;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  list-style-image: none;\n}\n.jstree-node {\n  white-space: nowrap;\n}\n.jstree-anchor {\n  display: inline-block;\n  color: black;\n  white-space: nowrap;\n  padding: 0 4px 0 1px;\n  margin: 0;\n  vertical-align: top;\n}\n.jstree-anchor:focus {\n  outline: 0;\n}\n.jstree-anchor,\n.jstree-anchor:link,\n.jstree-anchor:visited,\n.jstree-anchor:hover,\n.jstree-anchor:active {\n  text-decoration: none;\n  color: inherit;\n}\n.jstree-icon {\n  display: inline-block;\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n  vertical-align: top;\n  text-align: center;\n}\n.jstree-icon:empty {\n  display: inline-block;\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n  vertical-align: top;\n  text-align: center;\n}\n.jstree-ocl {\n  cursor: pointer;\n}\n.jstree-leaf > .jstree-ocl {\n  cursor: default;\n}\n.jstree .jstree-open > .jstree-children {\n  display: block;\n}\n.jstree .jstree-closed > .jstree-children,\n.jstree .jstree-leaf > .jstree-children {\n  display: none;\n}\n.jstree-anchor > .jstree-themeicon {\n  margin-right: 2px;\n}\n.jstree-no-icons .jstree-themeicon,\n.jstree-anchor > .jstree-themeicon-hidden {\n  display: none;\n}\n.jstree-hidden,\n.jstree-node.jstree-hidden {\n  display: none;\n}\n.jstree-rtl .jstree-anchor {\n  padding: 0 1px 0 4px;\n}\n.jstree-rtl .jstree-anchor > .jstree-themeicon {\n  margin-left: 2px;\n  margin-right: 0;\n}\n.jstree-rtl .jstree-node {\n  margin-left: 0;\n}\n.jstree-rtl .jstree-container-ul > .jstree-node {\n  margin-right: 0;\n}\n.jstree-wholerow-ul {\n  position: relative;\n  display: inline-block;\n  min-width: 100%;\n}\n.jstree-wholerow-ul .jstree-leaf > .jstree-ocl {\n  cursor: pointer;\n}\n.jstree-wholerow-ul .jstree-anchor,\n.jstree-wholerow-ul .jstree-icon {\n  position: relative;\n}\n.jstree-wholerow-ul .jstree-wholerow {\n  width: 100%;\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.jstree-contextmenu .jstree-anchor {\n  -webkit-user-select: none;\n  /* disable selection/Copy of UIWebView */\n  -webkit-touch-callout: none;\n  /* disable the IOS popup when long-press on a link */\n  user-select: none;\n}\n.vakata-context {\n  display: none;\n}\n.vakata-context,\n.vakata-context ul {\n  margin: 0;\n  padding: 2px;\n  position: absolute;\n  background: #f5f5f5;\n  border: 1px solid #979797;\n  box-shadow: 2px 2px 2px #999999;\n}\n.vakata-context ul {\n  list-style: none;\n  left: 100%;\n  margin-top: -2.7em;\n  margin-left: -4px;\n}\n.vakata-context .vakata-context-right ul {\n  left: auto;\n  right: 100%;\n  margin-left: auto;\n  margin-right: -4px;\n}\n.vakata-context li {\n  list-style: none;\n}\n.vakata-context li > a {\n  display: block;\n  padding: 0 2em 0 2em;\n  text-decoration: none;\n  width: auto;\n  color: black;\n  white-space: nowrap;\n  line-height: 2.4em;\n  text-shadow: 1px 1px 0 white;\n  border-radius: 1px;\n}\n.vakata-context li > a:hover {\n  position: relative;\n  background-color: #e8eff7;\n  box-shadow: 0 0 2px #0a6aa1;\n}\n.vakata-context li > a.vakata-context-parent {\n  background-image: url(\"data:image/gif;base64,R0lGODlhCwAHAIAAACgoKP///yH5BAEAAAEALAAAAAALAAcAAAIORI4JlrqN1oMSnmmZDQUAOw==\");\n  background-position: right center;\n  background-repeat: no-repeat;\n}\n.vakata-context li > a:focus {\n  outline: 0;\n}\n.vakata-context .vakata-context-no-icons {\n  margin-left: 0;\n}\n.vakata-context .vakata-context-hover > a {\n  position: relative;\n  background-color: #e8eff7;\n  box-shadow: 0 0 2px #0a6aa1;\n}\n.vakata-context .vakata-context-separator > a,\n.vakata-context .vakata-context-separator > a:hover {\n  background: white;\n  border: 0;\n  border-top: 1px solid #e2e3e3;\n  height: 1px;\n  min-height: 1px;\n  max-height: 1px;\n  padding: 0;\n  margin: 0 0 0 2.4em;\n  border-left: 1px solid #e0e0e0;\n  text-shadow: 0 0 0 transparent;\n  box-shadow: 0 0 0 transparent;\n  border-radius: 0;\n}\n.vakata-context .vakata-contextmenu-disabled a,\n.vakata-context .vakata-contextmenu-disabled a:hover {\n  color: silver;\n  background-color: transparent;\n  border: 0;\n  box-shadow: 0 0 0;\n}\n.vakata-context .vakata-contextmenu-disabled > a > i {\n  filter: grayscale(100%);\n}\n.vakata-context li > a > i {\n  text-decoration: none;\n  display: inline-block;\n  width: 2.4em;\n  height: 2.4em;\n  background: transparent;\n  margin: 0 0 0 -2em;\n  vertical-align: top;\n  text-align: center;\n  line-height: 2.4em;\n}\n.vakata-context li > a > i:empty {\n  width: 2.4em;\n  line-height: 2.4em;\n}\n.vakata-context li > a .vakata-contextmenu-sep {\n  display: inline-block;\n  width: 1px;\n  height: 2.4em;\n  background: white;\n  margin: 0 0.5em 0 0;\n  border-left: 1px solid #e2e3e3;\n}\n.vakata-context .vakata-contextmenu-shortcut {\n  font-size: 0.8em;\n  color: silver;\n  opacity: 0.5;\n  display: none;\n}\n.vakata-context-rtl ul {\n  left: auto;\n  right: 100%;\n  margin-left: auto;\n  margin-right: -4px;\n}\n.vakata-context-rtl li > a.vakata-context-parent {\n  background-image: url(\"data:image/gif;base64,R0lGODlhCwAHAIAAACgoKP///yH5BAEAAAEALAAAAAALAAcAAAINjI+AC7rWHIsPtmoxLAA7\");\n  background-position: left center;\n  background-repeat: no-repeat;\n}\n.vakata-context-rtl .vakata-context-separator > a {\n  margin: 0 2.4em 0 0;\n  border-left: 0;\n  border-right: 1px solid #e2e3e3;\n}\n.vakata-context-rtl .vakata-context-left ul {\n  right: auto;\n  left: 100%;\n  margin-left: -4px;\n  margin-right: auto;\n}\n.vakata-context-rtl li > a > i {\n  margin: 0 -2em 0 0;\n}\n.vakata-context-rtl li > a .vakata-contextmenu-sep {\n  margin: 0 0 0 0.5em;\n  border-left-color: white;\n  background: #e2e3e3;\n}\n#jstree-marker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: -5px 0 0 0;\n  padding: 0;\n  border-right: 0;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-left: 5px solid;\n  width: 0;\n  height: 0;\n  font-size: 0;\n  line-height: 0;\n}\n#jstree-dnd {\n  line-height: 16px;\n  margin: 0;\n  padding: 4px;\n}\n#jstree-dnd .jstree-icon,\n#jstree-dnd .jstree-copy {\n  display: inline-block;\n  text-decoration: none;\n  margin: 0 2px 0 0;\n  padding: 0;\n  width: 16px;\n  height: 16px;\n}\n#jstree-dnd .jstree-ok {\n  background: green;\n}\n#jstree-dnd .jstree-er {\n  background: red;\n}\n#jstree-dnd .jstree-copy {\n  margin: 0 2px 0 2px;\n}\n.jstree-default .jstree-node,\n.jstree-default .jstree-icon {\n  background-repeat: no-repeat;\n  background-color: transparent;\n}\n.jstree-default .jstree-anchor,\n.jstree-default .jstree-animated,\n.jstree-default .jstree-wholerow {\n  transition: background-color 0.15s, box-shadow 0.15s;\n}\n.jstree-default .jstree-hovered {\n  background: #e7f4f9;\n  border-radius: 2px;\n  box-shadow: inset 0 0 1px #cccccc;\n}\n.jstree-default .jstree-context {\n  background: #e7f4f9;\n  border-radius: 2px;\n  box-shadow: inset 0 0 1px #cccccc;\n}\n.jstree-default .jstree-clicked {\n  background: #beebff;\n  border-radius: 2px;\n  box-shadow: inset 0 0 1px #999999;\n}\n.jstree-default .jstree-no-icons .jstree-anchor > .jstree-themeicon {\n  display: none;\n}\n.jstree-default .jstree-disabled {\n  background: transparent;\n  color: #666666;\n}\n.jstree-default .jstree-disabled.jstree-hovered {\n  background: transparent;\n  box-shadow: none;\n}\n.jstree-default .jstree-disabled.jstree-clicked {\n  background: #efefef;\n}\n.jstree-default .jstree-disabled > .jstree-icon {\n  opacity: 0.8;\n  filter: url(\"data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\'><filter id=\\'jstree-grayscale\\'><feColorMatrix type=\\'matrix\\' values=\\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\\'/></filter></svg>#jstree-grayscale\");\n  /* Firefox 10+ */\n  filter: gray;\n  /* IE6-9 */\n  -webkit-filter: grayscale(100%);\n  /* Chrome 19+ & Safari 6+ */\n}\n.jstree-default .jstree-search {\n  font-style: italic;\n  color: #8b0000;\n  font-weight: bold;\n}\n.jstree-default .jstree-no-checkboxes .jstree-checkbox {\n  display: none !important;\n}\n.jstree-default.jstree-checkbox-no-clicked .jstree-clicked {\n  background: transparent;\n  box-shadow: none;\n}\n.jstree-default.jstree-checkbox-no-clicked .jstree-clicked.jstree-hovered {\n  background: #e7f4f9;\n}\n.jstree-default.jstree-checkbox-no-clicked > .jstree-wholerow-ul .jstree-wholerow-clicked {\n  background: transparent;\n}\n.jstree-default.jstree-checkbox-no-clicked > .jstree-wholerow-ul .jstree-wholerow-clicked.jstree-wholerow-hovered {\n  background: #e7f4f9;\n}\n.jstree-default > .jstree-striped {\n  min-width: 100%;\n  display: inline-block;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAkCAMAAAB/qqA+AAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlMNAMM9s3UAAAAXSURBVHjajcEBAQAAAIKg/H/aCQZ70AUBjAATb6YPDgAAAABJRU5ErkJggg==\") left top repeat;\n}\n.jstree-default > .jstree-wholerow-ul .jstree-hovered,\n.jstree-default > .jstree-wholerow-ul .jstree-clicked {\n  background: transparent;\n  box-shadow: none;\n  border-radius: 0;\n}\n.jstree-default .jstree-wholerow {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.jstree-default .jstree-wholerow-hovered {\n  background: #e7f4f9;\n}\n.jstree-default .jstree-wholerow-clicked {\n  background: #beebff;\n  background: -webkit-linear-gradient(top, #beebff 0%, #a8e4ff 100%);\n  background: linear-gradient(to bottom, #beebff 0%, #a8e4ff 100%);\n}\n.jstree-default .jstree-node {\n  min-height: 24px;\n  line-height: 24px;\n  margin-left: 24px;\n  min-width: 24px;\n}\n.jstree-default .jstree-anchor {\n  line-height: 24px;\n  height: 24px;\n}\n.jstree-default .jstree-icon {\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n}\n.jstree-default .jstree-icon:empty {\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n}\n.jstree-default.jstree-rtl .jstree-node {\n  margin-right: 24px;\n}\n.jstree-default .jstree-wholerow {\n  height: 24px;\n}\n.jstree-default .jstree-node,\n.jstree-default .jstree-icon {\n  background-image: url(\"32px.png\");\n}\n.jstree-default .jstree-node {\n  background-position: -292px -4px;\n  background-repeat: repeat-y;\n}\n.jstree-default .jstree-last {\n  background-image: none;\n}\n.jstree-default .jstree-open > .jstree-ocl {\n  background-position: -132px -4px;\n}\n.jstree-default .jstree-closed > .jstree-ocl {\n  background-position: -100px -4px;\n}\n.jstree-default .jstree-leaf > .jstree-ocl {\n  background-position: -68px -4px;\n}\n.jstree-default .jstree-themeicon {\n  background-position: -260px -4px;\n}\n.jstree-default > .jstree-no-dots .jstree-node,\n.jstree-default > .jstree-no-dots .jstree-leaf > .jstree-ocl {\n  background: transparent;\n}\n.jstree-default > .jstree-no-dots .jstree-open > .jstree-ocl {\n  background-position: -36px -4px;\n}\n.jstree-default > .jstree-no-dots .jstree-closed > .jstree-ocl {\n  background-position: -4px -4px;\n}\n.jstree-default .jstree-disabled {\n  background: transparent;\n}\n.jstree-default .jstree-disabled.jstree-hovered {\n  background: transparent;\n}\n.jstree-default .jstree-disabled.jstree-clicked {\n  background: #efefef;\n}\n.jstree-default .jstree-checkbox {\n  background-position: -164px -4px;\n}\n.jstree-default .jstree-checkbox:hover {\n  background-position: -164px -36px;\n}\n.jstree-default.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox,\n.jstree-default .jstree-checked > .jstree-checkbox {\n  background-position: -228px -4px;\n}\n.jstree-default.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox:hover,\n.jstree-default .jstree-checked > .jstree-checkbox:hover {\n  background-position: -228px -36px;\n}\n.jstree-default .jstree-anchor > .jstree-undetermined {\n  background-position: -196px -4px;\n}\n.jstree-default .jstree-anchor > .jstree-undetermined:hover {\n  background-position: -196px -36px;\n}\n.jstree-default .jstree-checkbox-disabled {\n  opacity: 0.8;\n  filter: url(\"data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\'><filter id=\\'jstree-grayscale\\'><feColorMatrix type=\\'matrix\\' values=\\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\\'/></filter></svg>#jstree-grayscale\");\n  /* Firefox 10+ */\n  filter: gray;\n  /* IE6-9 */\n  -webkit-filter: grayscale(100%);\n  /* Chrome 19+ & Safari 6+ */\n}\n.jstree-default > .jstree-striped {\n  background-size: auto 48px;\n}\n.jstree-default.jstree-rtl .jstree-node {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAACAQMAAAB49I5GAAAABlBMVEUAAAAdHRvEkCwcAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjAAMOBgAAGAAJMwQHdQAAAABJRU5ErkJggg==\");\n  background-position: 100% 1px;\n  background-repeat: repeat-y;\n}\n.jstree-default.jstree-rtl .jstree-last {\n  background-image: none;\n}\n.jstree-default.jstree-rtl .jstree-open > .jstree-ocl {\n  background-position: -132px -36px;\n}\n.jstree-default.jstree-rtl .jstree-closed > .jstree-ocl {\n  background-position: -100px -36px;\n}\n.jstree-default.jstree-rtl .jstree-leaf > .jstree-ocl {\n  background-position: -68px -36px;\n}\n.jstree-default.jstree-rtl > .jstree-no-dots .jstree-node,\n.jstree-default.jstree-rtl > .jstree-no-dots .jstree-leaf > .jstree-ocl {\n  background: transparent;\n}\n.jstree-default.jstree-rtl > .jstree-no-dots .jstree-open > .jstree-ocl {\n  background-position: -36px -36px;\n}\n.jstree-default.jstree-rtl > .jstree-no-dots .jstree-closed > .jstree-ocl {\n  background-position: -4px -36px;\n}\n.jstree-default .jstree-themeicon-custom {\n  background-color: transparent;\n  background-image: none;\n  background-position: 0 0;\n}\n.jstree-default > .jstree-container-ul .jstree-loading > .jstree-ocl {\n  background: url(\"throbber.gif\") center center no-repeat;\n}\n.jstree-default .jstree-file {\n  background: url(\"32px.png\") -100px -68px no-repeat;\n}\n.jstree-default .jstree-folder {\n  background: url(\"32px.png\") -260px -4px no-repeat;\n}\n.jstree-default > .jstree-container-ul > .jstree-node {\n  margin-left: 0;\n  margin-right: 0;\n}\n#jstree-dnd.jstree-default {\n  line-height: 24px;\n  padding: 0 4px;\n}\n#jstree-dnd.jstree-default .jstree-ok,\n#jstree-dnd.jstree-default .jstree-er {\n  background-image: url(\"32px.png\");\n  background-repeat: no-repeat;\n  background-color: transparent;\n}\n#jstree-dnd.jstree-default i {\n  background: transparent;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n}\n#jstree-dnd.jstree-default .jstree-ok {\n  background-position: -4px -68px;\n}\n#jstree-dnd.jstree-default .jstree-er {\n  background-position: -36px -68px;\n}\n.jstree-default .jstree-ellipsis {\n  overflow: hidden;\n}\n.jstree-default .jstree-ellipsis .jstree-anchor {\n  width: calc(100% - 24px + 5px);\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.jstree-default.jstree-rtl .jstree-node {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAACAQMAAAB49I5GAAAABlBMVEUAAAAdHRvEkCwcAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjAAMOBgAAGAAJMwQHdQAAAABJRU5ErkJggg==\");\n}\n.jstree-default.jstree-rtl .jstree-last {\n  background-image: none;\n}\n.jstree-default-small .jstree-node {\n  min-height: 18px;\n  line-height: 18px;\n  margin-left: 18px;\n  min-width: 18px;\n}\n.jstree-default-small .jstree-anchor {\n  line-height: 18px;\n  height: 18px;\n}\n.jstree-default-small .jstree-icon {\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n}\n.jstree-default-small .jstree-icon:empty {\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n}\n.jstree-default-small.jstree-rtl .jstree-node {\n  margin-right: 18px;\n}\n.jstree-default-small .jstree-wholerow {\n  height: 18px;\n}\n.jstree-default-small .jstree-node,\n.jstree-default-small .jstree-icon {\n  background-image: url(\"32px.png\");\n}\n.jstree-default-small .jstree-node {\n  background-position: -295px -7px;\n  background-repeat: repeat-y;\n}\n.jstree-default-small .jstree-last {\n  background-image: none;\n}\n.jstree-default-small .jstree-open > .jstree-ocl {\n  background-position: -135px -7px;\n}\n.jstree-default-small .jstree-closed > .jstree-ocl {\n  background-position: -103px -7px;\n}\n.jstree-default-small .jstree-leaf > .jstree-ocl {\n  background-position: -71px -7px;\n}\n.jstree-default-small .jstree-themeicon {\n  background-position: -263px -7px;\n}\n.jstree-default-small > .jstree-no-dots .jstree-node,\n.jstree-default-small > .jstree-no-dots .jstree-leaf > .jstree-ocl {\n  background: transparent;\n}\n.jstree-default-small > .jstree-no-dots .jstree-open > .jstree-ocl {\n  background-position: -39px -7px;\n}\n.jstree-default-small > .jstree-no-dots .jstree-closed > .jstree-ocl {\n  background-position: -7px -7px;\n}\n.jstree-default-small .jstree-disabled {\n  background: transparent;\n}\n.jstree-default-small .jstree-disabled.jstree-hovered {\n  background: transparent;\n}\n.jstree-default-small .jstree-disabled.jstree-clicked {\n  background: #efefef;\n}\n.jstree-default-small .jstree-checkbox {\n  background-position: -167px -7px;\n}\n.jstree-default-small .jstree-checkbox:hover {\n  background-position: -167px -39px;\n}\n.jstree-default-small.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox,\n.jstree-default-small .jstree-checked > .jstree-checkbox {\n  background-position: -231px -7px;\n}\n.jstree-default-small.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox:hover,\n.jstree-default-small .jstree-checked > .jstree-checkbox:hover {\n  background-position: -231px -39px;\n}\n.jstree-default-small .jstree-anchor > .jstree-undetermined {\n  background-position: -199px -7px;\n}\n.jstree-default-small .jstree-anchor > .jstree-undetermined:hover {\n  background-position: -199px -39px;\n}\n.jstree-default-small .jstree-checkbox-disabled {\n  opacity: 0.8;\n  filter: url(\"data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\'><filter id=\\'jstree-grayscale\\'><feColorMatrix type=\\'matrix\\' values=\\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\\'/></filter></svg>#jstree-grayscale\");\n  /* Firefox 10+ */\n  filter: gray;\n  /* IE6-9 */\n  -webkit-filter: grayscale(100%);\n  /* Chrome 19+ & Safari 6+ */\n}\n.jstree-default-small > .jstree-striped {\n  background-size: auto 36px;\n}\n.jstree-default-small.jstree-rtl .jstree-node {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAACAQMAAAB49I5GAAAABlBMVEUAAAAdHRvEkCwcAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjAAMOBgAAGAAJMwQHdQAAAABJRU5ErkJggg==\");\n  background-position: 100% 1px;\n  background-repeat: repeat-y;\n}\n.jstree-default-small.jstree-rtl .jstree-last {\n  background-image: none;\n}\n.jstree-default-small.jstree-rtl .jstree-open > .jstree-ocl {\n  background-position: -135px -39px;\n}\n.jstree-default-small.jstree-rtl .jstree-closed > .jstree-ocl {\n  background-position: -103px -39px;\n}\n.jstree-default-small.jstree-rtl .jstree-leaf > .jstree-ocl {\n  background-position: -71px -39px;\n}\n.jstree-default-small.jstree-rtl > .jstree-no-dots .jstree-node,\n.jstree-default-small.jstree-rtl > .jstree-no-dots .jstree-leaf > .jstree-ocl {\n  background: transparent;\n}\n.jstree-default-small.jstree-rtl > .jstree-no-dots .jstree-open > .jstree-ocl {\n  background-position: -39px -39px;\n}\n.jstree-default-small.jstree-rtl > .jstree-no-dots .jstree-closed > .jstree-ocl {\n  background-position: -7px -39px;\n}\n.jstree-default-small .jstree-themeicon-custom {\n  background-color: transparent;\n  background-image: none;\n  background-position: 0 0;\n}\n.jstree-default-small > .jstree-container-ul .jstree-loading > .jstree-ocl {\n  background: url(\"throbber.gif\") center center no-repeat;\n}\n.jstree-default-small .jstree-file {\n  background: url(\"32px.png\") -103px -71px no-repeat;\n}\n.jstree-default-small .jstree-folder {\n  background: url(\"32px.png\") -263px -7px no-repeat;\n}\n.jstree-default-small > .jstree-container-ul > .jstree-node {\n  margin-left: 0;\n  margin-right: 0;\n}\n#jstree-dnd.jstree-default-small {\n  line-height: 18px;\n  padding: 0 4px;\n}\n#jstree-dnd.jstree-default-small .jstree-ok,\n#jstree-dnd.jstree-default-small .jstree-er {\n  background-image: url(\"32px.png\");\n  background-repeat: no-repeat;\n  background-color: transparent;\n}\n#jstree-dnd.jstree-default-small i {\n  background: transparent;\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n}\n#jstree-dnd.jstree-default-small .jstree-ok {\n  background-position: -7px -71px;\n}\n#jstree-dnd.jstree-default-small .jstree-er {\n  background-position: -39px -71px;\n}\n.jstree-default-small .jstree-ellipsis {\n  overflow: hidden;\n}\n.jstree-default-small .jstree-ellipsis .jstree-anchor {\n  width: calc(100% - 18px + 5px);\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.jstree-default-small.jstree-rtl .jstree-node {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAACAQMAAABv1h6PAAAABlBMVEUAAAAdHRvEkCwcAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjAAMHBgAAiABBI4gz9AAAAABJRU5ErkJggg==\");\n}\n.jstree-default-small.jstree-rtl .jstree-last {\n  background-image: none;\n}\n.jstree-default-large .jstree-node {\n  min-height: 32px;\n  line-height: 32px;\n  margin-left: 32px;\n  min-width: 32px;\n}\n.jstree-default-large .jstree-anchor {\n  line-height: 32px;\n  height: 32px;\n}\n.jstree-default-large .jstree-icon {\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n}\n.jstree-default-large .jstree-icon:empty {\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n}\n.jstree-default-large.jstree-rtl .jstree-node {\n  margin-right: 32px;\n}\n.jstree-default-large .jstree-wholerow {\n  height: 32px;\n}\n.jstree-default-large .jstree-node,\n.jstree-default-large .jstree-icon {\n  background-image: url(\"32px.png\");\n}\n.jstree-default-large .jstree-node {\n  background-position: -288px 0px;\n  background-repeat: repeat-y;\n}\n.jstree-default-large .jstree-last {\n  background-image: none;\n}\n.jstree-default-large .jstree-open > .jstree-ocl {\n  background-position: -128px 0px;\n}\n.jstree-default-large .jstree-closed > .jstree-ocl {\n  background-position: -96px 0px;\n}\n.jstree-default-large .jstree-leaf > .jstree-ocl {\n  background-position: -64px 0px;\n}\n.jstree-default-large .jstree-themeicon {\n  background-position: -256px 0px;\n}\n.jstree-default-large > .jstree-no-dots .jstree-node,\n.jstree-default-large > .jstree-no-dots .jstree-leaf > .jstree-ocl {\n  background: transparent;\n}\n.jstree-default-large > .jstree-no-dots .jstree-open > .jstree-ocl {\n  background-position: -32px 0px;\n}\n.jstree-default-large > .jstree-no-dots .jstree-closed > .jstree-ocl {\n  background-position: 0px 0px;\n}\n.jstree-default-large .jstree-disabled {\n  background: transparent;\n}\n.jstree-default-large .jstree-disabled.jstree-hovered {\n  background: transparent;\n}\n.jstree-default-large .jstree-disabled.jstree-clicked {\n  background: #efefef;\n}\n.jstree-default-large .jstree-checkbox {\n  background-position: -160px 0px;\n}\n.jstree-default-large .jstree-checkbox:hover {\n  background-position: -160px -32px;\n}\n.jstree-default-large.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox,\n.jstree-default-large .jstree-checked > .jstree-checkbox {\n  background-position: -224px 0px;\n}\n.jstree-default-large.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox:hover,\n.jstree-default-large .jstree-checked > .jstree-checkbox:hover {\n  background-position: -224px -32px;\n}\n.jstree-default-large .jstree-anchor > .jstree-undetermined {\n  background-position: -192px 0px;\n}\n.jstree-default-large .jstree-anchor > .jstree-undetermined:hover {\n  background-position: -192px -32px;\n}\n.jstree-default-large .jstree-checkbox-disabled {\n  opacity: 0.8;\n  filter: url(\"data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\'><filter id=\\'jstree-grayscale\\'><feColorMatrix type=\\'matrix\\' values=\\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\\'/></filter></svg>#jstree-grayscale\");\n  /* Firefox 10+ */\n  filter: gray;\n  /* IE6-9 */\n  -webkit-filter: grayscale(100%);\n  /* Chrome 19+ & Safari 6+ */\n}\n.jstree-default-large > .jstree-striped {\n  background-size: auto 64px;\n}\n.jstree-default-large.jstree-rtl .jstree-node {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAACAQMAAAB49I5GAAAABlBMVEUAAAAdHRvEkCwcAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjAAMOBgAAGAAJMwQHdQAAAABJRU5ErkJggg==\");\n  background-position: 100% 1px;\n  background-repeat: repeat-y;\n}\n.jstree-default-large.jstree-rtl .jstree-last {\n  background-image: none;\n}\n.jstree-default-large.jstree-rtl .jstree-open > .jstree-ocl {\n  background-position: -128px -32px;\n}\n.jstree-default-large.jstree-rtl .jstree-closed > .jstree-ocl {\n  background-position: -96px -32px;\n}\n.jstree-default-large.jstree-rtl .jstree-leaf > .jstree-ocl {\n  background-position: -64px -32px;\n}\n.jstree-default-large.jstree-rtl > .jstree-no-dots .jstree-node,\n.jstree-default-large.jstree-rtl > .jstree-no-dots .jstree-leaf > .jstree-ocl {\n  background: transparent;\n}\n.jstree-default-large.jstree-rtl > .jstree-no-dots .jstree-open > .jstree-ocl {\n  background-position: -32px -32px;\n}\n.jstree-default-large.jstree-rtl > .jstree-no-dots .jstree-closed > .jstree-ocl {\n  background-position: 0px -32px;\n}\n.jstree-default-large .jstree-themeicon-custom {\n  background-color: transparent;\n  background-image: none;\n  background-position: 0 0;\n}\n.jstree-default-large > .jstree-container-ul .jstree-loading > .jstree-ocl {\n  background: url(\"throbber.gif\") center center no-repeat;\n}\n.jstree-default-large .jstree-file {\n  background: url(\"32px.png\") -96px -64px no-repeat;\n}\n.jstree-default-large .jstree-folder {\n  background: url(\"32px.png\") -256px 0px no-repeat;\n}\n.jstree-default-large > .jstree-container-ul > .jstree-node {\n  margin-left: 0;\n  margin-right: 0;\n}\n#jstree-dnd.jstree-default-large {\n  line-height: 32px;\n  padding: 0 4px;\n}\n#jstree-dnd.jstree-default-large .jstree-ok,\n#jstree-dnd.jstree-default-large .jstree-er {\n  background-image: url(\"32px.png\");\n  background-repeat: no-repeat;\n  background-color: transparent;\n}\n#jstree-dnd.jstree-default-large i {\n  background: transparent;\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n}\n#jstree-dnd.jstree-default-large .jstree-ok {\n  background-position: 0px -64px;\n}\n#jstree-dnd.jstree-default-large .jstree-er {\n  background-position: -32px -64px;\n}\n.jstree-default-large .jstree-ellipsis {\n  overflow: hidden;\n}\n.jstree-default-large .jstree-ellipsis .jstree-anchor {\n  width: calc(100% - 32px + 5px);\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.jstree-default-large.jstree-rtl .jstree-node {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAACAQMAAAAD0EyKAAAABlBMVEUAAAAdHRvEkCwcAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjgIIGBgABCgCBvVLXcAAAAABJRU5ErkJggg==\");\n}\n.jstree-default-large.jstree-rtl .jstree-last {\n  background-image: none;\n}\n@media (max-width: 768px) {\n  #jstree-dnd.jstree-dnd-responsive {\n    line-height: 40px;\n    font-weight: bold;\n    font-size: 1.1em;\n    text-shadow: 1px 1px white;\n  }\n  #jstree-dnd.jstree-dnd-responsive > i {\n    background: transparent;\n    width: 40px;\n    height: 40px;\n  }\n  #jstree-dnd.jstree-dnd-responsive > .jstree-ok {\n    background-image: url(\"40px.png\");\n    background-position: 0 -200px;\n    background-size: 120px 240px;\n  }\n  #jstree-dnd.jstree-dnd-responsive > .jstree-er {\n    background-image: url(\"40px.png\");\n    background-position: -40px -200px;\n    background-size: 120px 240px;\n  }\n  #jstree-marker.jstree-dnd-responsive {\n    border-left-width: 10px;\n    border-top-width: 10px;\n    border-bottom-width: 10px;\n    margin-top: -10px;\n  }\n}\n@media (max-width: 768px) {\n  .jstree-default-responsive {\n    /*\n\t.jstree-open > .jstree-ocl,\n\t.jstree-closed > .jstree-ocl { border-radius:20px; background-color:white; }\n\t*/\n  }\n  .jstree-default-responsive .jstree-icon {\n    background-image: url(\"40px.png\");\n  }\n  .jstree-default-responsive .jstree-node,\n  .jstree-default-responsive .jstree-leaf > .jstree-ocl {\n    background: transparent;\n  }\n  .jstree-default-responsive .jstree-node {\n    min-height: 40px;\n    line-height: 40px;\n    margin-left: 40px;\n    min-width: 40px;\n    white-space: nowrap;\n  }\n  .jstree-default-responsive .jstree-anchor {\n    line-height: 40px;\n    height: 40px;\n  }\n  .jstree-default-responsive .jstree-icon,\n  .jstree-default-responsive .jstree-icon:empty {\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n  }\n  .jstree-default-responsive > .jstree-container-ul > .jstree-node {\n    margin-left: 0;\n  }\n  .jstree-default-responsive.jstree-rtl .jstree-node {\n    margin-left: 0;\n    margin-right: 40px;\n    background: transparent;\n  }\n  .jstree-default-responsive.jstree-rtl .jstree-container-ul > .jstree-node {\n    margin-right: 0;\n  }\n  .jstree-default-responsive .jstree-ocl,\n  .jstree-default-responsive .jstree-themeicon,\n  .jstree-default-responsive .jstree-checkbox {\n    background-size: 120px 240px;\n  }\n  .jstree-default-responsive .jstree-leaf > .jstree-ocl,\n  .jstree-default-responsive.jstree-rtl .jstree-leaf > .jstree-ocl {\n    background: transparent;\n  }\n  .jstree-default-responsive .jstree-open > .jstree-ocl {\n    background-position: 0 0 !important;\n  }\n  .jstree-default-responsive .jstree-closed > .jstree-ocl {\n    background-position: 0 -40px !important;\n  }\n  .jstree-default-responsive.jstree-rtl .jstree-closed > .jstree-ocl {\n    background-position: -40px 0 !important;\n  }\n  .jstree-default-responsive .jstree-themeicon {\n    background-position: -40px -40px;\n  }\n  .jstree-default-responsive .jstree-checkbox,\n  .jstree-default-responsive .jstree-checkbox:hover {\n    background-position: -40px -80px;\n  }\n  .jstree-default-responsive.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox,\n  .jstree-default-responsive.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox:hover,\n  .jstree-default-responsive .jstree-checked > .jstree-checkbox,\n  .jstree-default-responsive .jstree-checked > .jstree-checkbox:hover {\n    background-position: 0 -80px;\n  }\n  .jstree-default-responsive .jstree-anchor > .jstree-undetermined,\n  .jstree-default-responsive .jstree-anchor > .jstree-undetermined:hover {\n    background-position: 0 -120px;\n  }\n  .jstree-default-responsive .jstree-anchor {\n    font-weight: bold;\n    font-size: 1.1em;\n    text-shadow: 1px 1px white;\n  }\n  .jstree-default-responsive > .jstree-striped {\n    background: transparent;\n  }\n  .jstree-default-responsive .jstree-wholerow {\n    border-top: 1px solid rgba(255, 255, 255, 0.7);\n    border-bottom: 1px solid rgba(64, 64, 64, 0.2);\n    background: #ebebeb;\n    height: 40px;\n  }\n  .jstree-default-responsive .jstree-wholerow-hovered {\n    background: #e7f4f9;\n  }\n  .jstree-default-responsive .jstree-wholerow-clicked {\n    background: #beebff;\n  }\n  .jstree-default-responsive .jstree-children .jstree-last > .jstree-wholerow {\n    box-shadow: inset 0 -6px 3px -5px #666666;\n  }\n  .jstree-default-responsive .jstree-children .jstree-open > .jstree-wholerow {\n    box-shadow: inset 0 6px 3px -5px #666666;\n    border-top: 0;\n  }\n  .jstree-default-responsive .jstree-children .jstree-open + .jstree-open {\n    box-shadow: none;\n  }\n  .jstree-default-responsive .jstree-node,\n  .jstree-default-responsive .jstree-icon,\n  .jstree-default-responsive .jstree-node > .jstree-ocl,\n  .jstree-default-responsive .jstree-themeicon,\n  .jstree-default-responsive .jstree-checkbox {\n    background-image: url(\"40px.png\");\n    background-size: 120px 240px;\n  }\n  .jstree-default-responsive .jstree-node {\n    background-position: -80px 0;\n    background-repeat: repeat-y;\n  }\n  .jstree-default-responsive .jstree-last {\n    background-image: none;\n  }\n  .jstree-default-responsive .jstree-leaf > .jstree-ocl {\n    background-position: -40px -120px;\n  }\n  .jstree-default-responsive .jstree-last > .jstree-ocl {\n    background-position: -40px -160px;\n  }\n  .jstree-default-responsive .jstree-themeicon-custom {\n    background-color: transparent;\n    background-image: none;\n    background-position: 0 0;\n  }\n  .jstree-default-responsive .jstree-file {\n    background: url(\"40px.png\") 0 -160px no-repeat;\n    background-size: 120px 240px;\n  }\n  .jstree-default-responsive .jstree-folder {\n    background: url(\"40px.png\") -40px -40px no-repeat;\n    background-size: 120px 240px;\n  }\n  .jstree-default-responsive > .jstree-container-ul > .jstree-node {\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n";

/***/ }),

/***/ 929:
/***/ ((module) => {

module.exports = "/*\n*\tMatterTools.Demo\n*/\n\n.matter-demo {\n  display: flex;\n  background: #14151f;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 100vh;\n  padding: 50px 0 0 0;\n}\n\n.matter-demo,\n.matter-demo * {\n  box-sizing: border-box;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.matter-demo *:focus,\n.matter-demo *:active {\n  outline: 0;\n}\n\n.matter-demo *:-moz-focusring {\n  outline: 3px solid #4da4e4;\n  outline-offset: -1px;\n  z-index: 5;\n}\n\n.matter-demo *:focus-visible {\n  outline: 3px solid #4da4e4;\n  outline-offset: -1px;\n  z-index: 5;\n}\n\n.matter-demo.matter-demo-inline {\n  padding: 0;\n  height: inherit;\n}\n\n.matter-demo canvas {\n  border-radius: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  max-width: 100%;\n  max-height: 100%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.matter-demo.matter-demo-inline canvas {\n  max-height: calc(100% - 49px);\n}\n\n.matter-is-fullscreen .matter-demo {\n  width: 100%;\n}\n\n.matter-is-fullscreen .dg.ac,\n.matter-is-fullscreen .ins-container {\n  display: none;\n}\n\n.matter-header-outer {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: #0e0f19;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.matter-demo-inline .matter-header-outer {\n  position: static;\n  background: transparent;\n  z-index: 0;\n  width: 100%;\n}\n\n.matter-header {\n  width: 100%;\n  padding: 7px 20px 8px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.matter-header-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.matter-header h1 {\n  display: none;\n  margin: 0 12px 0 0;\n  width: 18px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n\n.matter-header h1 a {\n  color: #c5c5cc;\n  font-size: 14px;\n  font-weight: 400;\n  display: block;\n  text-decoration: none;\n  padding: 3px 0 2px 0;\n  border-bottom: 1px solid transparent;\n  white-space: nowrap;\n  float: right;\n}\n\n.matter-header h1 a:hover,\n.matter-header h1 a:focus {\n  border-bottom: 1px solid #f5b862;\n  color: #fff;\n  outline: 0;\n}\n\n@media screen and (min-width: 300px) {\n  .matter-header h1 {\n    display: inline;\n  }\n}\n\n@media screen and (min-width: 600px) {\n  .matter-header h1 {\n    width: auto;\n    overflow: visible;\n  }\n}\n\n.btn-home {\n  display: none;\n}\n\n.matter-demo-title svg {\n  fill: #fff;\n  width: 14px;\n  height: 14px;\n  margin: 0px 0 -2px 2px;\n}\n\n.matter-link {\n  text-decoration: none;\n  line-height: 13px;\n  margin: 0 -10px 0 0;\n  flex-shrink: 0;\n}\n\n.matter-link:focus {\n  outline: none;\n}\n\n.matter-logo {\n  height: 33px;\n  width: 46px;\n}\n\n@media screen and (min-width: 1024px) {\n  .matter-logo {\n    width: 50px;\n  }\n}\n\n.matter-logo #m-triangle {\n  transform-origin: 14px 856px;\n  transition: transform 400ms ease;\n}\n\n.matter-link:focus #m-triangle,\n.matter-logo:hover #m-triangle {\n  transform: rotate(-30deg) translate(-98px, -25px);\n}\n\n.matter-logo #m-circle {\n  transition: transform 200ms ease;\n  transition-delay: 300ms;\n}\n\n.matter-link:focus #m-circle,\n.matter-logo:hover #m-circle {\n  transform: translate(18px, -33px);\n}\n\n.matter-logo #m-square {\n  transition: transform 150ms ease;\n  transition-delay: 400ms;\n}\n\n.matter-link:focus #m-square,\n.matter-logo:hover #m-square {\n  transform: translate(47px, -2px);\n}\n\n.matter-toolbar {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 18px 0 0;\n}\n\n.matter-select {\n  background: transparent;\n  color: #c5c5cc;\n  font-size: 14px;\n  line-height: 33px;\n  width: 100%;\n  outline: none;\n  padding: 0 25px 0 7px;\n  margin: 0;\n  border: 0;\n  border-radius: 0;\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.matter-select option {\n  background: #fff;\n  color: #000;\n}\n\n.matter-select-wrapper {\n  height: 33px;\n  width: 100%;\n  min-width: 100px;\n  max-width: 175px;\n  position: relative;\n  display: inline-block;\n  margin-right: 4%;\n}\n\n.matter-select-wrapper:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  pointer-events: none;\n  width: 28px;\n  height: 100%;\n  background: linear-gradient(-90deg, rgb(14 15 25), rgb(14 15 25 / 0));\n  right: 23px;\n  top: 0;\n}\n\n.matter-demo-inline .matter-select-wrapper:after {\n  display: none;\n}\n\n.matter-select:hover,\n.matter-select-wrapper:hover .matter-select {\n  color: #fff;\n}\n\n.matter-select:focus-visible {\n  color: #fff;\n}\n\n.matter-select:-moz-focusring {\n  color: #fff;\n}\n\n.matter-select:focus {\n  outline: 0;\n}\n\n.matter-select-wrapper svg:hover,\n.matter-select-wrapper:hover svg {\n  background: #232635;\n}\n\n.matter-select-wrapper:hover:after svg {\n  fill: #fff;\n}\n\n.matter-select-wrapper svg {\n  display: block;\n  pointer-events: none;\n  fill: #cecece;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  z-index: 2;\n  top: 6px;\n  right: 0;\n  border-radius: 5px;\n  background: #101119;\n}\n\n.matter-btn {\n  border: 0;\n  background: #0b0c15;\n  width: 40px;\n  height: 33px;\n  border-radius: 2px;\n  display: inline-block;\n  font-size: 16px;\n  line-height: 1;\n  color: #c2cad4;\n  text-decoration: none;\n  text-align: center;\n  cursor: default;\n  flex-shrink: 0;\n  flex-grow: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.matter-btn svg {\n  fill: #fff;\n  width: 15px;\n  height: 15px;\n  margin: 2px 0 0 0;\n}\n\n.matter-demo-inline .matter-btn {\n  background: #0f0f13;\n}\n\n.matter-btn:hover {\n  background: #1c1f2d;\n  outline: none;\n}\n\n.matter-btn:active {\n  transform: translate(0px, 1px);\n}\n\n.matter-btn:focus-visible {\n  background: #1c1f2d;\n  outline: none;\n}\n\n.matter-btn:-moz-focusring {\n  background: #1c1f2d;\n  outline: none;\n}\n\n.matter-btn-tools {\n  position: relative;\n  display: none;\n  font-size: 15px;\n}\n\n.matter-btn-tools svg {\n  margin-left: -3px;\n}\n\n.matter-btn-inspect {\n  position: relative;\n  display: none;\n}\n\n.matter-btn-inspect svg {\n  margin-left: -3px;\n}\n\n.matter-btn-source {\n  display: none;\n  font-size: 12px;\n  text-align: center;\n  line-height: 31px;\n}\n\n.matter-btn-fullscreen {\n  position: relative;\n  font-size: 18px;\n}\n\n.matter-btn-fullscreen svg {\n  margin-left: -3px;\n}\n\n.matter-is-fullscreen .matter-btn-tools,\n.matter-is-fullscreen .matter-btn-inspect {\n  display: none;\n}\n\n.matter-btn-fullscreen:after,\n.matter-btn-tools:after,\n.matter-btn-inspect:after {\n  content: \" \";\n  position: absolute;\n  bottom: 10px;\n  width: 3px;\n  height: 3px;\n  background: #f5df75;\n  border-radius: 1px;\n  opacity: 0;\n  transform: scale(0);\n  transition: opacity 100ms ease, transform 100ms ease;\n}\n\n.matter-btn-inspect:after {\n  left: 31px;\n}\n\n.matter-btn-tools:after {\n  background: #f45f5f;\n  left: 28px;\n}\n\n.matter-btn-fullscreen:after {\n  background: #76f09b;\n  left: 32px;\n}\n\n.matter-is-fullscreen .matter-btn-fullscreen:after,\n.matter-gui-active .matter-btn-tools:after,\n.matter-inspect-active .matter-btn-inspect:after {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.ins-container,\nbody .dg {\n  display: none;\n}\n\n@media screen and (min-width: 500px) {\n  .ins-container,\n  body .dg,\n  .matter-btn-tools,\n  .matter-btn-inspect,\n  .matter-btn-source {\n    display: block;\n  }\n}\n";

/***/ }),

/***/ 404:
/***/ ((module) => {

module.exports = "/*\n*\tMatterTools.Gui\n*/\n\nbody .dg .c,\nbody .dg .cr.function,\nbody .dg .c select,\nbody .dg .property-name,\nbody .dg .title {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nbody .dg.main {\n  z-index: 10;\n  height: 100%;\n  background: #14151f;\n  position: fixed;\n  top: 0;\n  right: 0;\n  padding: 48px 0 0 0;\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);\n}\n\nbody .dg.main,\nbody .dg.main * {\n  box-sizing: border-box;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nbody .dg.main *:focus,\nbody .dg.main *:active {\n  outline: 0;\n}\n\nbody .dg.main *:-moz-focusring {\n  outline: 3px solid #4da4e4;\n  outline-offset: -1px;\n  z-index: 5;\n}\n\nbody .dg.main *:focus-visible {\n  outline: 3px solid #4da4e4;\n  outline-offset: -1px;\n  z-index: 5;\n}\n\nbody .dg.ac {\n  position: static;\n  top: inherit;\n  left: inherit;\n  bottom: inherit;\n  right: inherit;\n}\n\nbody .dg.main {\n  transform: translate(230px, 0);\n  transition: transform ease;\n  transition-delay: 2000ms;\n  transition-duration: 300ms;\n}\n\nbody .dg.main:hover {\n  transform: translate(0, 0);\n  transition-delay: 0ms;\n  transition-duration: 400ms;\n}\n\n@media only screen and (min-width: 1300px) {\n  body .dg.main,\n  body .dg.main:hover {\n    transition-delay: 0ms;\n    transform: translate(0, 0);\n  }\n}\n\nbody .dg.main .close-button {\n  display: none;\n}\n\nbody .dg.main > ul {\n  height: 100%;\n  background: #191921;\n  overflow-y: auto;\n  scrollbar-color: #0d0f1b #0d0f1b;\n  scrollbar-width: thin;\n}\n\nbody .dg.main > ul:hover {\n  scrollbar-color: #44444e #0d0f1b;\n  scrollbar-width: thin;\n}\n\nbody .dg.main > ul::-webkit-scrollbar {\n  background: #0d0f1b;\n  width: 6px;\n  height: 6px;\n}\n\nbody .dg.main > ul::-webkit-scrollbar-track,\nbody .dg.main > ul::-webkit-scrollbar-corner {\n  background: #0d0f1b;\n}\n\nbody .dg.main > ul::-webkit-scrollbar-thumb {\n  background: #0d0f1b;\n  border-radius: 3px;\n}\n\nbody .dg.main > ul:hover::-webkit-scrollbar-thumb {\n  background: #44444e;\n}\n\nbody .dg {\n  color: #6d6d7d;\n  text-shadow: none !important;\n  font-size: 12px;\n}\n\nbody .dg .closed .cr {\n  display: none;\n}\n\nbody .dg li:not(.folder) {\n  height: 29px;\n  background: #1c1c25;\n  border-bottom: 0px;\n  padding: 0 8px 0 12px;\n}\n\nbody .dg li.save-row .button {\n  text-shadow: none !important;\n}\n\nbody .dg li.title {\n  padding: 2px 0 0 24px;\n  color: #6a6977;\n  background: #0d0f1b\n    url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==)\n    no-repeat;\n  background-position: 12px;\n}\n\nbody .dg li.title:hover {\n  color: #9494a2;\n}\n\nbody .dg .cr.boolean:hover {\n  background: #20212b;\n}\n\nbody .dg .cr.function {\n  background: #262731;\n  color: #636371;\n  border-top: 1px solid #30313c;\n}\n\nbody .dg .cr.function:hover {\n  background: #30313e;\n}\n\nbody .dg .cr.function:active {\n  background: #2d2e3a;\n}\n\nbody .dg .cr.function:active .property-name {\n  transform: translateY(1px);\n}\n\nbody .dg .c,\nbody .dg .property-name {\n  width: 50%;\n}\n\nbody .dg .c select {\n  margin-top: 2px;\n  margin-left: -5px;\n  padding: 3px 5px;\n}\n\nbody .dg .c select,\nbody .dg .c input[type=\"text\"],\nbody .dg .cr.number input[type=\"text\"] {\n  text-align: right;\n  background: transparent;\n  color: #686c7b;\n  border: 0;\n  border-radius: 2px;\n  overflow: hidden;\n  font-size: 11px;\n}\n\nbody .dg .cr.number,\nbody .dg .cr.boolean,\nbody .dg .cr.function {\n  border-left: 0;\n}\n\nbody .dg .c select,\nbody .dg .c select:focus {\n  width: 88px;\n}\n\nbody .dg .c input[type=\"text\"]:hover {\n  background: #2b2c3a;\n}\n\nbody .dg .c input[type=\"text\"]:focus {\n  background: #2b2c3a;\n  color: #fff;\n  outline: none;\n}\n\nbody .dg .c input[type=\"checkbox\"] {\n  margin-top: 10px;\n  border: none;\n  border-radius: 50%;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background: #35363e;\n  display: block;\n  width: 7px;\n  height: 7px;\n  float: right;\n}\n\nbody .dg .c input[type=\"checkbox\"]:checked {\n  background: #747784;\n}\n\nbody .dg .c .slider {\n  background: #23232d;\n  border-radius: 2px;\n  box-shadow: none;\n  padding: 0;\n  overflow: hidden;\n}\n\nbody .dg .c .slider:hover {\n  background: #282b3a;\n}\n\nbody .dg .c .slider-fg {\n  background: #3f4354;\n  border-radius: 0;\n  margin-left: 0;\n  padding-right: 0;\n}\n\nbody .dg .c .slider-fg:after {\n  display: none;\n}\n\nbody .dg .c .slider:hover .slider-fg {\n  background: #4d526b;\n}\n\nbody .dg li.folder {\n  border-left: 0;\n}\n\nbody .dg.a {\n  margin-right: 0;\n}\n";

/***/ }),

/***/ 521:
/***/ ((module) => {

module.exports = "/*\n*\tMatterTools.Inspector\n*/\n\n.ins-container,\n.jstree {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.ins-cursor-move canvas {\n  cursor: move !important;\n}\n\n.ins-cursor-rotate canvas {\n  cursor: ew-resize !important;\n}\n\n.ins-cursor-scale canvas {\n  cursor: nwse-resize !important;\n}\n\n.ins-container {\n  position: fixed;\n  z-index: 10;\n  width: 245px;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  background: #191921;\n  padding: 0;\n  font-size: 13px;\n  color: #7c7c85;\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);\n}\n\n.ins-container,\n.ins-container * {\n  box-sizing: border-box;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.ins-container *:focus,\n.ins-container *:active {\n  outline: 0;\n}\n\n.ins-container *:-moz-focusring {\n  outline: 3px solid #4da4e4;\n  outline-offset: -1px;\n  z-index: 5;\n}\n\n.ins-container *:focus-visible {\n  outline: 3px solid #4da4e4;\n  outline-offset: -1px;\n  z-index: 5;\n}\n\n.ins-container {\n  transform: translate(-220px, 0);\n  transition: transform ease;\n  transition-delay: 2000ms;\n  transition-duration: 300ms;\n}\n\n.ins-container:hover {\n  transform: translate(0, 0);\n  transition-delay: 0ms;\n  transition-duration: 400ms;\n}\n\n@media only screen and (min-width: 1300px) {\n  .ins-container,\n  .ins-container:hover {\n    transition-delay: 0ms;\n    transform: translate(0, 0);\n  }\n}\n\n.ins-world-tree {\n  position: absolute;\n  overflow: auto;\n  top: 91px;\n  left: 3px;\n  right: 0;\n  bottom: 0;\n  scrollbar-color: #191921 #191921;\n  scrollbar-width: thin;\n}\n\n.ins-world-tree:hover {\n  scrollbar-color: #32323a #191921;\n  scrollbar-width: thin;\n}\n\n.ins-world-tree::-webkit-scrollbar {\n  background: #191921;\n  width: 6px;\n  height: 6px;\n}\n\n.ins-world-tree::-webkit-scrollbar-track,\n.ins-world-tree::-webkit-scrollbar-corner {\n  background: #191921;\n}\n\n.ins-world-tree::-webkit-scrollbar-thumb {\n  background: #191921;\n  border-radius: 3px;\n}\n\n.ins-world-tree:hover::-webkit-scrollbar-thumb {\n  background: #32323a;\n}\n\n.ins-add-button.ins-button {\n  width: auto;\n  height: auto;\n  padding: 2px 5px;\n  margin: 1px 10px 0px 0;\n  right: 0px;\n  min-width: 0;\n  position: absolute;\n  z-index: 100;\n}\n\n.ins-top-panel {\n  height: 48px;\n  background: #14151f;\n}\n\n.ins-search-box {\n  margin: 7px 5px 9px 5px;\n  border: 0;\n  padding: 7px 8px;\n  font-size: 13px;\n  width: 235px;\n  border-radius: 3px;\n  background: #12131b;\n  color: #8e8d96;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n.ins-search-box:focus {\n  background: #0f1017;\n  border: 0;\n  outline: 0;\n}\n\n.ins-search-box::-webkit-search-cancel-button {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  height: 15px;\n  width: 8px;\n  cursor: pointer;\n}\n\n.ins-search-box::-webkit-search-cancel-button:before {\n  height: 10px;\n  width: 10px;\n  content: \"x\";\n  line-height: 0;\n  font-size: 13px;\n  color: #999;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.ins-search-box::-webkit-input-placeholder {\n  color: #56565f;\n}\n\n.ins-search-box:-moz-placeholder {\n  color: #56565f;\n}\n\n.ins-search-box::-moz-placeholder {\n  color: #56565f;\n}\n\n.ins-search-box:-ms-input-placeholder {\n  color: #56565f;\n}\n\n.ins-control-group {\n  display: block;\n  clear: both;\n  overflow: hidden;\n  padding: 14px 20px 12px 20px;\n  background: #191921;\n  border-bottom: 1px solid #29292d;\n}\n\n.ins-button {\n  display: block;\n  float: left;\n  font-size: 11px;\n  line-height: 1;\n  padding: 10px 11px;\n  min-width: 49px;\n  text-align: center;\n  background: #0e0f15;\n  border: 0;\n  color: #b1b1c3;\n  border-radius: 2px;\n  outline: none;\n  margin: 0;\n}\n\n.ins-button:hover {\n  background: #000;\n}\n\n.ins-button:active {\n  transform: translateY(1px);\n  background: #000;\n}\n\n.jstree-default .jstree-search {\n  font-style: italic;\n  color: #aaa;\n  font-weight: normal;\n}\n\n.jstree-default .jstree-wholerow-hovered,\n.jstree-default .jstree-hovered {\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n}\n\n.jstree-default .jstree-wholerow {\n  height: 28px;\n}\n\n.jstree-default .jstree-wholerow-clicked,\n.jstree-default .jstree-clicked {\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  transition: none;\n}\n\n.jstree-default .jstree-leaf .jstree-clicked {\n  color: #bbb !important;\n}\n\n.jstree-default .jstree-anchor {\n  line-height: 27px;\n  outline: none;\n}\n\n.jstree-default .jstree-container-ul {\n  margin-bottom: 12px;\n}\n\n.jstree-default .jstree-container-ul > .jstree-node > .jstree-anchor:before,\n.jstree-default\n  .jstree-open\n  > .jstree-children\n  > .jstree-node\n  > .jstree-anchor:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  right: 1px;\n  height: 28px;\n  border-radius: 0;\n  box-shadow: none;\n  border-right: none;\n  pointer-events: none;\n  background: rgb(44, 47, 62, 0.5);\n  opacity: 0;\n}\n\n.jstree-default .jstree-anchor.jstree-clicked:before {\n  opacity: 1 !important;\n  pointer-events: none;\n}\n\n.jstree-default .jstree-node,\n.jstree-default .jstree-leaf .jstree-ocl,\n.jstree-default .jstree-icon {\n  background: transparent;\n}\n\n.jstree-default .jstree-node {\n  min-height: 28px;\n  line-height: 28px;\n  margin-left: 12px;\n  min-width: 26px;\n}\n\n.jstree-default .jstree-icon {\n  position: relative;\n}\n\n.jstree-default .jstree-icon:before {\n  display: block;\n  pointer-events: none;\n  color: #d6d6d6;\n  font-style: normal;\n  font-size: 11px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 24px;\n  line-height: 24px;\n  transform-origin: 12px 12px;\n  transform: translate(0px, -0px);\n}\n\n.jstree-default .jstree-open > .jstree-icon:before {\n  content: \"▾\";\n  top: 2px;\n}\n\n.jstree-default .jstree-closed > .jstree-icon:before {\n  content: \"▾\";\n  transform: rotate(-90deg) translate(-2px, 0px);\n}\n\n.jstree-leaf .jstree-icon:before {\n  display: none;\n}\n\n.jstree-default .jstree-open .jstree-ocl {\n  background-position: -38px -1px;\n}\n\n.jstree-default .jstree-closed .jstree-ocl {\n  background-position: -4px -2px;\n}\n\n.jstree-anchor {\n  padding: 1px 0;\n  transition: none;\n}\n\n.jstree-anchor .jstree-icon {\n  display: none;\n}\n\n.jstree-node-type-bodies > .jstree-anchor,\n.jstree-node-type-constraints > .jstree-anchor,\n.jstree-node-type-composites > .jstree-anchor {\n  color: #51515d;\n}\n\n#vakata-dnd {\n  font-size: 12px;\n  color: #aaa;\n}\n";

/***/ }),

/***/ 332:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * # ResurrectJS
 * @version 1.0.3
 * @license Public Domain
 *
 * ResurrectJS preserves object behavior (prototypes) and reference
 * circularity with a special JSON encoding. Unlike regular JSON,
 * Date, RegExp, DOM objects, and `undefined` are also properly
 * preserved.
 *
 * ## Examples
 *
 * function Foo() {}
 * Foo.prototype.greet = function() { return "hello"; };
 *
 * // Behavior is preserved:
 * var necromancer = new Resurrect();
 * var json = necromancer.stringify(new Foo());
 * var foo = necromancer.resurrect(json);
 * foo.greet();  // => "hello"
 *
 * // References to the same object are preserved:
 * json = necromancer.stringify([foo, foo]);
 * var array = necromancer.resurrect(json);
 * array[0] === array[1];  // => true
 * array[1].greet();  // => "hello"
 *
 * // Dates are restored properly
 * json = necromancer.stringify(new Date());
 * var date = necromancer.resurrect(json);
 * Object.prototype.toString.call(date);  // => "[object Date]"
 *
 * ## Options
 *
 * Options are provided to the constructor as an object with these
 * properties:
 *
 *   prefix ('#'): A prefix string used for temporary properties added
 *     to objects during serialization and deserialization. It is
 *     important that you don't use any properties beginning with this
 *     string. This option must be consistent between both
 *     serialization and deserialization.
 *
 *   cleanup (false): Perform full property cleanup after both
 *     serialization and deserialization using the `delete`
 *     operator. This may cause performance penalties (breaking hidden
 *     classes in V8) on objects that ResurrectJS touches, so enable
 *     with care.
 *
 *   revive (true): Restore behavior (__proto__) to objects that have
 *     been resurrected. If this is set to false during serialization,
 *     resurrection information will not be encoded. You still get
 *     circularity and Date support.
 *
 *   resolver (Resurrect.NamespaceResolver(window)): Converts between
 *     a name and a prototype. Create a custom resolver if your
 *     constructors are not stored in global variables. The resolver
 *     has two methods: getName(object) and getPrototype(string).
 *
 * For example,
 *
 * var necromancer = new Resurrect({
 *     prefix: '__#',
 *     cleanup: true
 * });
 *
 * ## Caveats
 *
 *   * With the default resolver, all constructors must be named and
 *   stored in the global variable under that name. This is required
 *   so that the prototypes can be looked up and reconnected at
 *   resurrection time.
 *
 *   * The wrapper objects Boolean, String, and Number will be
 *   unwrapped. This means extra properties added to these objects
 *   will not be preserved.
 *
 *   * Functions cannot ever be serialized. Resurrect will throw an
 *   error if a function is found when traversing a data structure.
 *
 * @see http://nullprogram.com/blog/2013/03/28/
 */
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
class ResurrectError extends Error {
    constructor(message) {
        super(message);
        this.message = message || '';
        this.stack = new Error().stack;
    }
}
_a = ResurrectError;
(() => {
    _a.prototype.name = 'ResurrectError';
})();
class NamespaceResolver {
    /**
     * Resolves prototypes through the properties on an object and
     * constructor names.
     * @param scope
     */
    constructor(scope) {
        this.scope = scope;
    }
    /**
     * Gets the prototype of the given property name from an object. If
     * not found, it throws an error.
     * @param name
     */
    getPrototype(name) {
        const constructor = this.scope[name];
        if (constructor) {
            return constructor.prototype;
        }
        else {
            throw new Resurrect.prototype.Error('Unknown constructor: ' + name);
        }
    }
    /**
     * Get the prototype name for an object, to be fetched later with getPrototype.
     * @param object
     * @returns Null if the constructor is Object.\
     */
    getName(object) {
        let constructor = object.constructor.name;
        if (constructor == null) {
            // IE
            const funcPattern = /^\s*function\s*([A-Za-z0-9_$]*)/;
            constructor = funcPattern.exec(object.constructor)
                ? funcPattern.exec(object.constructor)[1]
                : null;
        }
        if (constructor === '') {
            const msg = "Can't serialize objects with anonymous constructors.";
            throw new Resurrect.prototype.Error(msg);
        }
        else if (constructor === 'Object' || constructor === 'Array') {
            return null;
        }
        else {
            return constructor;
        }
    }
}
class Resurrect {
    constructor(options = {}) {
        this.Error = ResurrectError;
        this.resolver = new Resurrect.NamespaceResolver(Resurrect.GLOBAL);
        this.table = null;
        this.prefix = '#';
        this.cleanup = false;
        this.revive = true;
        for (const option in options) {
            if (Object.prototype.hasOwnProperty.call(options, option)) {
                // @ts-ignore
                this[option] = options[option];
            }
        }
        this.refcode = this.prefix + 'id';
        this.origcode = this.prefix + 'original';
        this.buildcode = this.prefix + '.';
        this.valuecode = this.prefix + 'v';
    }
    /**
     * Escape special regular expression characters in a string.
     * @param string
     * @returns The string escaped for exact matches.
     * @see http://stackoverflow.com/a/6969486
     */
    static escapeRegExp(string) {
        // eslint-disable-next-line no-useless-escape
        return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }
    /**
     * Create a DOM node from HTML source; behaves like a constructor.
     * @param html
     */
    static Node(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.firstChild;
    }
    /**
     * @param type
     * @returns A function that tests for type.
     */
    static is(type) {
        const string = '[object ' + type + ']';
        return (object) => {
            return Object.prototype.toString.call(object) === string;
        };
    }
    static isArray(object) {
        const checker = Resurrect.is('Array');
        return checker(object);
    }
    static isAtom(object) {
        return !Resurrect.isObject(object) && !Resurrect.isArray(object);
    }
    /**
     * @param object
     * @returns True if object is a primitive or a primitive wrapper.
     */
    static isPrimitive(object) {
        return (object == null ||
            Resurrect.isNumber(object) ||
            Resurrect.isString(object) ||
            Resurrect.isBoolean(object));
    }
    /**
     * Create a reference (encoding) to an object.
     * @param object
     */
    ref(object) {
        const ref = {};
        if (!object) {
            ref[this.prefix] = -1;
        }
        else {
            ref[this.prefix] = object[this.refcode];
        }
        return ref;
    }
    /**
     * Lookup an object in the table by reference object.
     * @param ref
     */
    deref(ref) {
        if (!this.table) {
            return undefined;
        }
        return this.table[ref[this.prefix]];
    }
    /**
     * Put a temporary identifier on an object and store it in the table.
     * @param object
     * @returns The unique identifier number.
     */
    tag(object) {
        var _b, _c;
        if (this.revive) {
            const constructor = this.resolver.getName(object);
            if (constructor) {
                const proto = Object.getPrototypeOf(object);
                if (this.resolver.getPrototype(constructor) !== proto) {
                    throw new this.Error('Constructor mismatch!');
                }
                else {
                    object[this.prefix] = constructor;
                }
            }
        }
        object[this.refcode] = (_b = this.table) === null || _b === void 0 ? void 0 : _b.length;
        (_c = this.table) === null || _c === void 0 ? void 0 : _c.push(object);
        return object[this.refcode];
    }
    /**
     * Create a builder object (encoding) for serialization.
     * @param name The name of the constructor.
     * @param value The value to pass to the constructor.
     */
    builder(name, value) {
        const builder = {};
        builder[this.buildcode] = name;
        builder[this.valuecode] = value;
        return builder;
    }
    /**
     * Build a value from a deserialized builder.
     * @param ref
     * @see http://stackoverflow.com/a/14378462
     * @see http://nullprogram.com/blog/2013/03/24/
     */
    build(ref) {
        const type = ref[this.buildcode].split(/\./).reduce((object, name) => {
            return object[name];
        }, Resurrect.GLOBAL);
        /* Brilliant hack by kybernetikos: */
        const args = [null].concat(ref[this.valuecode]);
        const factory = type.bind.apply(type, args);
        const result = new factory();
        if (Resurrect.isPrimitive(result)) {
            if (!result) {
                return null;
            }
            return result.valueOf(); // unwrap
        }
        else {
            return result;
        }
    }
    /**
     * Dereference or build an object or value from an encoding.
     * @param ref
     */
    decode(ref) {
        if (this.prefix in ref) {
            return this.deref(ref);
        }
        else if (this.buildcode in ref) {
            return this.build(ref);
        }
        else {
            throw new this.Error('Unknown encoding.');
        }
    }
    /**
     * @param object
     * @returns True if the provided object is tagged for serialization.
     */
    isTagged(object) {
        return this.refcode in object && object[this.refcode] != null;
    }
    /**
     * Visit root and all its ancestors, visiting atoms with f.
     * @param root
     * @param f
     * @param replacer
     * @returns A fresh copy of root to be serialized.
     */
    visit(root, f, replacer) {
        if (Resurrect.isAtom(root)) {
            return f(root);
        }
        else if (!this.isTagged(root)) {
            let copy = null;
            if (Resurrect.isArray(root)) {
                copy = [];
                // @ts-ignore
                root[this.refcode] = this.tag(copy);
                for (let i = 0; i < root.length; i++) {
                    copy.push(this.visit(root[i], f, replacer));
                }
            }
            else {
                /* Object */
                copy = Object.create(Object.getPrototypeOf(root));
                root[this.refcode] = this.tag(copy);
                for (const key in root) {
                    let value = root[key];
                    if (Object.prototype.hasOwnProperty.call(root, key)) {
                        if (replacer && value !== undefined) {
                            // Call replacer like JSON.stringify's replacer
                            value = replacer.call(root, key, root[key]);
                            if (value === undefined) {
                                continue; // Omit from result
                            }
                        }
                        copy[key] = this.visit(value, f, replacer);
                    }
                }
            }
            copy[this.origcode] = root;
            return this.ref(copy);
        }
        else {
            return this.ref(root);
        }
    }
    /**
     * Manage special atom values, possibly returning an encoding.
     * @param atom
     */
    handleAtom(atom) {
        var _b;
        const Node = Resurrect.GLOBAL.Node || function () { };
        if (Resurrect.isFunction(atom)) {
            throw new this.Error("Can't serialize functions.");
        }
        else if (atom instanceof Node) {
            const xmls = new XMLSerializer();
            return this.builder('Resurrect.Node', [xmls.serializeToString(atom)]);
        }
        else if (Resurrect.isDate(atom)) {
            return this.builder('Date', [atom.toISOString()]);
        }
        else if (Resurrect.isRegExp(atom)) {
            const args = (_b = atom
                .toString()
                .match(/\/(.+)\/([gimy]*)/)) === null || _b === void 0 ? void 0 : _b.slice(1);
            return this.builder('RegExp', args);
        }
        else if (atom === undefined) {
            return this.ref(undefined);
        }
        else if (Resurrect.isNumber(atom) &&
            (isNaN(atom) || !isFinite(atom))) {
            return this.builder('Number', [atom.toString()]);
        }
        else {
            return atom;
        }
    }
    /**
     * Hides intrusive keys from a user-supplied replacer.
     * @param replacer function of two arguments (key, value)
     * @returns A function that skips the replacer for intrusive keys.
     */
    replacerWrapper(replacer) {
        const skip = new RegExp('^' + Resurrect.escapeRegExp(this.prefix));
        return (k, v) => {
            if (skip.test(k)) {
                return v;
            }
            else {
                return replacer(k, v);
            }
        };
    }
    /**
     * Serialize an arbitrary JavaScript object, carefully preserving it.
     * @param object
     * @param replacer
     * @param space
     */
    stringify(object, replacer, space) {
        if (Resurrect.isFunction(replacer)) {
            replacer = this.replacerWrapper(replacer);
        }
        else if (Resurrect.isArray(replacer)) {
            const acceptKeys = replacer;
            replacer = (k, v) => {
                return acceptKeys.indexOf(k) >= 0 ? v : undefined;
            };
        }
        if (Resurrect.isAtom(object)) {
            return JSON.stringify(this.handleAtom(object), replacer, space);
        }
        else {
            this.table = [];
            this.visit(object, this.handleAtom.bind(this), replacer);
            for (let i = 0; i < this.table.length; i++) {
                if (this.cleanup) {
                    delete this.table[i][this.origcode][this.refcode];
                }
                else {
                    this.table[i][this.origcode][this.refcode] = null;
                }
                delete this.table[i][this.refcode];
                delete this.table[i][this.origcode];
            }
            const table = this.table;
            this.table = null;
            return JSON.stringify(table, null, space);
        }
    }
    /**
     * Restore the __proto__ of the given object to the proper value.
     * @param object
     * @returns Its argument, or a copy, with the prototype restored.
     */
    fixPrototype(object) {
        if (this.prefix in object) {
            const name = object[this.prefix];
            const prototype = this.resolver.getPrototype(name);
            if ('__proto__' in object) {
                object.__proto__ = prototype;
                if (this.cleanup) {
                    delete object[this.prefix];
                }
                return object;
            }
            else {
                // IE
                const copy = Object.create(prototype);
                for (const key in object) {
                    if (Object.prototype.hasOwnProperty.call(object, key) &&
                        key !== this.prefix) {
                        copy[key] = object[key];
                    }
                }
                return copy;
            }
        }
        else {
            return object;
        }
    }
    /**
     * Deserialize an encoded object, restoring circularity and behavior.
     * @param string
     * @returns The decoded object or value.
     */
    resurrect(string) {
        let result = null;
        const data = JSON.parse(string);
        if (Resurrect.isArray(data)) {
            this.table = data;
            /* Restore __proto__. */
            if (this.revive) {
                for (let i = 0; i < this.table.length; i++) {
                    this.table[i] = this.fixPrototype(this.table[i]);
                }
            }
            /* Re-establish object references and construct atoms. */
            for (let i = 0; i < this.table.length; i++) {
                const object = this.table[i];
                for (const key in object) {
                    if (Object.prototype.hasOwnProperty.call(object, key)) {
                        if (!Resurrect.isAtom(object[key])) {
                            object[key] = this.decode(object[key]);
                        }
                    }
                }
            }
            result = this.table[0];
        }
        else if (Resurrect.isObject(data)) {
            this.table = [];
            result = this.decode(data);
        }
        else {
            result = data;
        }
        this.table = null;
        return result;
    }
}
/**
 * Portable access to the global object (window, global).
 * Uses indirect eval.
 * @constant
 */
Resurrect.GLOBAL = (0, eval)('this');
Resurrect.NamespaceResolver = NamespaceResolver;
Resurrect.isString = Resurrect.is('String');
Resurrect.isBoolean = Resurrect.is('Boolean');
Resurrect.isNumber = Resurrect.is('Number');
Resurrect.isFunction = Resurrect.is('Function');
Resurrect.isDate = Resurrect.is('Date');
Resurrect.isRegExp = Resurrect.is('RegExp');
Resurrect.isObject = Resurrect.is('Object');
exports["default"] = Resurrect;


/***/ }),

/***/ 560:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class Common {
    static injectStyles(styles, id) {
        if (document.getElementById(id)) {
            return;
        }
        const root = document.createElement('div');
        root.innerHTML = `<style id="${id}" type="text/css">${styles}</style>`;
        if (!root.firstElementChild) {
            return;
        }
        const lastStyle = document.head.querySelector('style:last-of-type');
        if (lastStyle) {
            Common.domInsertBefore(root.firstElementChild, lastStyle);
        }
        else {
            document.head.appendChild(root.firstElementChild);
        }
    }
    static injectScript(url, id, callback) {
        if (document.getElementById(id)) {
            return;
        }
        const script = document.createElement('script');
        script.id = id;
        script.src = url;
        script.onload = callback;
        document.body.appendChild(script);
    }
    static domRemove(element) {
        var _a;
        return (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(element);
    }
    static domInsertBefore(element, before) {
        var _a;
        return (_a = before.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(element, before.previousElementSibling);
    }
}
exports["default"] = Common;


/***/ }),

/***/ 80:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Gui_1 = __importDefault(__webpack_require__(485));
const Inspector_1 = __importDefault(__webpack_require__(159));
const Common_1 = __importDefault(__webpack_require__(560));
const MatterTypes = __importStar(__webpack_require__(381));
const Matter = MatterTypes.default;
/**
 * A tool for for running and testing example scenes.
 * @module Demo
 */
class Demo {
    /**
     * Creates a new demo instance.
     * See example for options and usage.
     * @function create
     * @param options
     */
    static create(options = {}) {
        var _a;
        const defaultDemo = {
            examples: [],
            resetOnOrientation: false,
            preventZoom: false,
            fullPage: false,
            startExample: true,
            appendTo: document.body,
            toolbar: {
                title: null,
                url: null,
                reset: true,
                source: false,
                inspector: false,
                tools: false,
                fullscreen: true,
                exampleSelect: false,
            },
            tools: {
                inspector: null,
                gui: null,
            },
        };
        const demo = Matter.Common.extend(defaultDemo, options);
        if (!options.toolbar ||
            (demo.examples.length > 1 &&
                options.toolbar &&
                options.toolbar.exampleSelect !== false)) {
            demo.toolbar.exampleSelect = true;
        }
        if (Demo._isIOS) {
            demo.toolbar.fullscreen = false;
        }
        demo.dom = Demo._createDom(demo);
        Demo._bindDom(demo);
        if (!demo.fullPage && demo.inline !== false) {
            (_a = demo.dom.root) === null || _a === void 0 ? void 0 : _a.classList.add('matter-demo-inline');
        }
        if (demo.appendTo && demo.dom.root) {
            demo.appendTo.appendChild(demo.dom.root);
        }
        if (demo.startExample) {
            Demo.start(demo, demo.startExample);
        }
        return demo;
    }
    /**
     * Starts a new demo instance by running the first or given example.
     * See example for options and usage.
     * @function start
     * @param demo
     * @param initalExampleId example to start (defaults to first)
     */
    static start(demo, initialExampleId) {
        let exampleId = typeof initialExampleId === 'string'
            ? initialExampleId
            : demo.examples[0].id;
        if (window.location.hash.length > 0) {
            exampleId = window.location.hash.slice(1);
        }
        Demo.setExampleById(demo, exampleId);
    }
    /**
     * Stops the currently running example in the demo.
     * This requires that the `example.init` function returned
     * an object specifiying a `stop` function.
     * @function stop
     * @param demo
     */
    static stop(demo) {
        if (demo.example && demo.example.instance) {
            demo.example.instance.stop();
        }
    }
    /**
     * Stops and restarts the currently running example.
     * @function reset
     * @param demo
     */
    static reset(demo) {
        // @ts-ignore
        Matter.Common._nextId = 0;
        // @ts-ignore
        Matter.Common._seed = 0;
        Demo.setExample(demo, demo.example);
    }
    /**
     * Starts the given example by its id.
     * Any running example will be stopped.
     * @function setExampleById
     * @param demo
     * @param exampleId
     */
    static setExampleById(demo, exampleId) {
        const example = demo.examples.filter((example) => {
            return example.id === exampleId;
        })[0];
        Demo.setExample(demo, example);
    }
    /**
     * Starts the given example.
     * Any running example will be stopped.
     * @function setExample
     * @param demo
     * @param example
     */
    static setExample(demo, example) {
        var _a, _b;
        if (!example) {
            Demo.setExample(demo, demo.examples[0]);
            return;
        }
        const prevExample = demo.example;
        let instance = prevExample === null || prevExample === void 0 ? void 0 : prevExample.instance;
        if (instance) {
            instance.stop();
            if (instance.canvas) {
                (_a = instance.canvas.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(instance.canvas);
            }
        }
        if (prevExample) {
            prevExample.instance = null;
        }
        window.location.hash = example.id;
        demo.example = example;
        demo.example.instance = instance = example.init(demo);
        if (!instance.canvas && instance.render) {
            instance.canvas = instance.render.canvas;
        }
        if (instance.canvas) {
            (_b = demo.dom.root) === null || _b === void 0 ? void 0 : _b.appendChild(instance.canvas);
        }
        if (demo.dom.exampleSelect) {
            demo.dom.exampleSelect.value = example.id;
        }
        if (demo.dom.buttonSource) {
            demo.dom.buttonSource.href = example.sourceLink || demo.url || '#';
        }
        setTimeout(function () {
            if (demo.tools.inspector) {
                Demo.setInspector(demo, true);
            }
            if (demo.tools.gui) {
                Demo.setGui(demo, true);
            }
        }, 500);
    }
    /**
     * Enables or disables the inspector tool.
     * If `enabled` a new `Inspector` instance will be created and the old one destroyed.
     * @function setInspector
     * @param demo
     * @param enabled
     */
    static setInspector(demo, enabled) {
        var _a, _b;
        if (!enabled) {
            Demo._destroyTools(demo, true, false);
            (_a = demo.dom.root) === null || _a === void 0 ? void 0 : _a.classList.toggle('matter-inspect-active', false);
            return;
        }
        const instance = demo.example.instance;
        Demo._destroyTools(demo, true, false);
        (_b = demo.dom.root) === null || _b === void 0 ? void 0 : _b.classList.toggle('matter-inspect-active', true);
        demo.tools.inspector = Inspector_1.default.create(instance.engine, instance.render);
    }
    /**
     * Enables or disables the Gui tool.
     * If `enabled` a new `Gui` instance will be created and the old one destroyed.
     * @function setGui
     * @param demo
     * @param enabled
     */
    static setGui(demo, enabled) {
        var _a, _b;
        if (!enabled) {
            Demo._destroyTools(demo, false, true);
            (_a = demo.dom.root) === null || _a === void 0 ? void 0 : _a.classList.toggle('matter-gui-active', false);
            return;
        }
        const instance = demo.example.instance;
        Demo._destroyTools(demo, false, true);
        (_b = demo.dom.root) === null || _b === void 0 ? void 0 : _b.classList.toggle('matter-gui-active', true);
        demo.tools.gui = Gui_1.default.create(instance.engine, instance.runner, instance.render);
    }
    static _destroyTools(demo, destroyInspector, destroyGui) {
        const inspector = demo.tools.inspector;
        const gui = demo.tools.gui;
        if (destroyInspector) {
            if (inspector && inspector !== true) {
                Inspector_1.default.destroy(inspector);
            }
            demo.tools.inspector = null;
        }
        if (destroyGui) {
            if (gui && gui !== true) {
                Gui_1.default.destroy(gui);
            }
            demo.tools.gui = null;
        }
    }
    static _toggleFullscreen(demo) {
        let fullscreenElement = document.fullscreenElement ||
            // @ts-ignore
            document.mozFullScreenElement ||
            // @ts-ignore
            document.webkitFullscreenElement;
        if (!fullscreenElement) {
            fullscreenElement = demo.dom.root;
            if (fullscreenElement.requestFullscreen) {
                fullscreenElement.requestFullscreen();
            }
            else if (fullscreenElement.mozRequestFullScreen) {
                fullscreenElement.mozRequestFullScreen();
            }
            else if (fullscreenElement.webkitRequestFullscreen) {
                // @ts-ignore
                fullscreenElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if ('mozCancelFullScreen' in document) {
                // @ts-ignore
                document.mozCancelFullScreen();
            }
            else if ('webkitExitFullscreen' in document) {
                // @ts-ignore
                document.webkitExitFullscreen();
            }
        }
    }
    static _bindDom(demo) {
        const dom = demo.dom;
        window.addEventListener('orientationchange', function () {
            setTimeout(() => {
                if (demo.resetOnOrientation) {
                    Demo.reset(demo);
                }
            }, 300);
        });
        if (demo.preventZoom) {
            document.body.addEventListener('gesturestart', function (event) {
                event.preventDefault();
            });
            let allowTap = true;
            let tapTimeout;
            document.body.addEventListener('touchstart', function (event) {
                if (!allowTap) {
                    event.preventDefault();
                }
                allowTap = false;
                clearTimeout(tapTimeout);
                tapTimeout = setTimeout(function () {
                    allowTap = true;
                }, 500);
            });
        }
        if (dom.exampleSelect) {
            dom.exampleSelect.addEventListener('change', function () {
                const exampleId = this.options[this.selectedIndex].value;
                Demo.setExampleById(demo, exampleId);
            });
        }
        if (dom.buttonReset) {
            dom.buttonReset.addEventListener('click', function () {
                Demo.reset(demo);
            });
        }
        if (dom.buttonInspect) {
            dom.buttonInspect.addEventListener('click', function () {
                const showInspector = !demo.tools.inspector;
                Demo.setInspector(demo, showInspector);
            });
        }
        if (dom.buttonTools) {
            dom.buttonTools.addEventListener('click', function () {
                const showGui = !demo.tools.gui;
                Demo.setGui(demo, showGui);
            });
        }
        if (dom.buttonFullscreen) {
            dom.buttonFullscreen.addEventListener('click', function () {
                Demo._toggleFullscreen(demo);
            });
            const fullscreenChange = function () {
                const isFullscreen = document.fullscreen ||
                    // @ts-ignore
                    document.webkitIsFullScreen ||
                    // @ts-ignore
                    document.mozFullScreen;
                document.body.classList.toggle('matter-is-fullscreen', isFullscreen);
            };
            document.addEventListener('webkitfullscreenchange', fullscreenChange);
            document.addEventListener('mozfullscreenchange', fullscreenChange);
            document.addEventListener('fullscreenchange', fullscreenChange);
        }
    }
    static _createDom(options) {
        var _a;
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const styles = __webpack_require__(929);
        Common_1.default.injectStyles(styles, 'matter-demo-style');
        const root = document.createElement('div');
        const exampleOptions = options.examples
            .map((example) => {
            return `<option value="${example.id}">${example.name}</option>`;
        })
            .join(' ');
        const preventZoomClass = options.preventZoom && Demo._isIOS ? 'prevent-zoom-ios' : '';
        root.innerHTML = `
    <div class="matter-demo ${options.toolbar.title} ${preventZoomClass}">
      <div class="matter-header-outer">
        <header class="matter-header">
          <div class="matter-header-inner">
            <h1 class="matter-demo-title">
              <a href="${options.toolbar.url}" target="_blank">
              ${options.toolbar.title}
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/>
                </svg>
              </a>
            </h1>
            <div class="matter-toolbar">
              <div class="matter-select-wrapper">
                <select aria-label="Select example" title="Select example" class="matter-example-select matter-select">
                  ${exampleOptions}
                </select>
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </div>
              <button class="matter-btn matter-btn-reset" title="Reset">
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </button>
              <a href="#" class="matter-btn matter-btn-source" title="Source" target="_blank">{ }</a>
              <button class="matter-btn matter-btn-tools" title="Tools">
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </button>
              <button class="matter-btn matter-btn-inspect" title="Inspect">
              <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zm7.32.19C16.84 3.05 15.01 2.25 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1c.86 1.11 1.44 2.44 1.62 3.9zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.31 4.9l1.43 1.43c1.21-1.48 2.01-3.32 2.21-5.32h-2.02c-.18 1.45-.76 2.78-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm-7.32-.19C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43z"/>
              </svg>
              </button>
              <button class="matter-btn matter-btn-fullscreen" title="Fullscreen">
                <svg fill="#000000" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                </svg>
              </button>
            </div>
            <a class="matter-link" href="${Demo._matterLink}" title="matter.ts" target="_blank">
              <svg class="matter-logo" height="100" viewBox="0 952.04859 330 100" width="268" xmlns="http://www.w3.org/2000/svg">
                <path id="m-triangle" style="fill:#76f09b;" d="m 115.83215,1052.3622 -57.916072,0 -57.916078053812107,0 L 28.958038,1002.2054 57.916077,952.04859 86.874114,1002.2054 Z" />
                <path id="m-square" style="fill:#f55f5f" d="m 168.03172,952.36218 0,100.00002 100,0 0,-100.00002 -100,0 z" />
                <circle id="m-circle" style="fill:#f5b862" r="12.947398" cy="1039.4148" cx="140.28374" />
              </svg>
            </a>
          </div>
        </header>
      </div>
    </div>
  `;
        const dom = {
            root: root.firstElementChild,
            title: root.querySelector('.matter-demo-title'),
            header: root.querySelector('.matter-header'),
            exampleSelect: root.querySelector('.matter-example-select'),
            buttonReset: root.querySelector('.matter-btn-reset'),
            buttonSource: root.querySelector('.matter-btn-source'),
            buttonTools: root.querySelector('.matter-btn-tools'),
            buttonInspect: root.querySelector('.matter-btn-inspect'),
            buttonFullscreen: root.querySelector('.matter-btn-fullscreen'),
        };
        if (!options.toolbar.title && dom.title) {
            Common_1.default.domRemove(dom.title);
        }
        if (!options.toolbar.exampleSelect && ((_a = dom.exampleSelect) === null || _a === void 0 ? void 0 : _a.parentElement)) {
            Common_1.default.domRemove(dom.exampleSelect.parentElement);
        }
        if (!options.toolbar.reset && dom.buttonReset) {
            Common_1.default.domRemove(dom.buttonReset);
        }
        if (!options.toolbar.source && dom.buttonSource) {
            Common_1.default.domRemove(dom.buttonSource);
        }
        if (!options.toolbar.inspector && dom.buttonInspect) {
            Common_1.default.domRemove(dom.buttonInspect);
        }
        if (!options.toolbar.tools && dom.buttonTools) {
            Common_1.default.domRemove(dom.buttonTools);
        }
        if (!options.toolbar.fullscreen && dom.buttonFullscreen) {
            Common_1.default.domRemove(dom.buttonFullscreen);
        }
        return dom;
    }
}
Demo._isIOS = window.navigator &&
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    // @ts-ignore
    !window.MSStream;
Demo._matterLink = 'https://github.com/Rozelin-dc/matter-ts';
exports["default"] = Demo;


/***/ }),

/***/ 485:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const dat_gui_1 = __importDefault(__webpack_require__(13));
const Common_1 = __importDefault(__webpack_require__(560));
const Serializer_1 = __importDefault(__webpack_require__(954));
const MatterTypes = __importStar(__webpack_require__(381));
const Matter = MatterTypes.default;
/**
 * A tool for modifying the properties of an engine and renderer.
 * @module Gui
 */
class Gui {
    /**
     * Creates a Gui
     * @function create
     * @param engine
     * @param runner
     * @param render
     * @return The created gui instance
     */
    static create(engine, runner, render) {
        dat_gui_1.default.GUI.TEXT_CLOSED = '▲';
        dat_gui_1.default.GUI.TEXT_OPEN = '▼';
        const datGui = new dat_gui_1.default.GUI({ autoPlace: false });
        const gui = {
            engine: engine,
            runner: runner,
            render: render,
            datGui: datGui,
            broadphase: 'grid',
            broadphaseCache: {
                grid: engine.broadphase ? engine.broadphase : Matter.Grid.create(),
                bruteForce: {
                    detector: Matter.Detector.bruteForce,
                },
            },
            amount: 1,
            size: 40,
            sides: 4,
            density: 0.001,
            restitution: 0,
            friction: 0.1,
            frictionStatic: 0.5,
            frictionAir: 0.01,
            offset: { x: 0, y: 0 },
            renderer: 'canvas',
            chamfer: 0,
            isRecording: false,
            serializer: Serializer_1.default.create(),
            events: {},
        };
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const styles = __webpack_require__(404);
        Common_1.default.injectStyles(styles, 'matter-gui-style');
        Gui._initDatGui(gui);
        return gui;
    }
    /**
     * Updates the Gui
     * @function update
     * @param gui
     */
    static update(gui, _) {
        const datGui = gui.datGui;
        for (const i in datGui.__folders) {
            Gui.update(gui, datGui.__folders[i]);
        }
        for (const i in datGui.__controllers) {
            const controller = datGui.__controllers[i];
            if (controller.updateDisplay) {
                controller.updateDisplay();
            }
        }
    }
    /**
     * Closes all sections of the Gui
     * @function closeAll
     * @param gui
     */
    static closeAll(gui) {
        const datGui = gui.datGui;
        for (const i in datGui.__folders) {
            datGui.__folders[i].close();
        }
    }
    /**
     * Destroys the GUI
     * @function destroy
     * @param gui
     */
    static destroy(gui) {
        var _a;
        (_a = gui.datGui.domElement.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(gui.datGui.domElement);
        gui.datGui.destroy();
    }
    static _initDatGui(gui) {
        const engine = gui.engine;
        const runner = gui.runner;
        const datGui = gui.datGui;
        const funcs = {
            addBody: function () {
                Gui._addBody(gui);
            },
            clear: function () {
                Gui._clear(gui);
            },
            save: function () {
                Serializer_1.default.saveState(gui.serializer, engine, 'guiState');
                Matter.Events.trigger(gui, 'save');
            },
            load: function () {
                Serializer_1.default.loadState(gui.serializer, engine, 'guiState');
                Matter.Events.trigger(gui, 'load');
            },
        };
        const metrics = datGui.addFolder('Metrics');
        if (runner) {
            metrics.add(runner, 'fps').listen();
        }
        if (engine.metrics.extended) {
            if (runner) {
                metrics.add(runner, 'delta').listen();
                // @ts-ignore
                metrics.add(runner, 'correction').listen();
            }
            if (engine) {
                metrics.add(engine.metrics, 'bodies').listen();
                metrics.add(engine.metrics, 'collisions').listen();
                metrics.add(engine.metrics, 'pairs').listen();
                metrics.add(engine.metrics, 'broadEff').listen();
                metrics.add(engine.metrics, 'midEff').listen();
                metrics.add(engine.metrics, 'narrowEff').listen();
                metrics.add(engine.metrics, 'narrowReuse').listen();
            }
            metrics.open();
        }
        if (engine) {
            const controls = datGui.addFolder('Add Body');
            controls.add(gui, 'amount', 1, 5).step(1);
            controls.add(gui, 'size', 5, 150).step(1);
            controls.add(gui, 'sides', 1, 8).step(1);
            controls.add(gui, 'density', 0.0001, 0.01).step(0.001);
            controls.add(gui, 'friction', 0, 1).step(0.05);
            controls.add(gui, 'frictionStatic', 0, 10).step(0.1);
            controls
                .add(gui, 'frictionAir', 0, gui.frictionAir * 10)
                .step(gui.frictionAir / 10);
            controls.add(gui, 'restitution', 0, 1).step(0.1);
            controls.add(gui, 'chamfer', 0, 30).step(2);
            controls.add(funcs, 'addBody');
            controls.open();
            const worldGui = datGui.addFolder('World');
            if (gui.serializer) {
                worldGui.add(funcs, 'load');
                worldGui.add(funcs, 'save');
            }
            worldGui.add(funcs, 'clear');
            worldGui.open();
            if (engine.world.gravity) {
                const gravity = datGui.addFolder('Gravity');
                gravity.add(engine.world.gravity, 'scale', 0, 0.001).step(0.0001);
                gravity.add(engine.world.gravity, 'x', -1, 1).step(0.01);
                gravity.add(engine.world.gravity, 'y', -1, 1).step(0.01);
            }
            const physics = datGui.addFolder('Engine');
            physics.add(engine, 'enableSleeping');
            physics.add(engine.timing, 'timeScale', 0, 1.2).step(0.05).listen();
            physics.add(engine, 'velocityIterations', 1, 10).step(1);
            physics.add(engine, 'positionIterations', 1, 10).step(1);
            physics.add(engine, 'constraintIterations', 1, 10).step(1);
            if (runner) {
                physics.add(runner, 'enabled');
            }
        }
        if (gui.render) {
            const render = datGui.addFolder('Render');
            render
                .add(gui.render.options, 'wireframes')
                .onFinishChange(function (value) {
                if (!value) {
                    angleIndicatorWidget.setValue(false);
                    axesWidget.setValue(false);
                }
            });
            render.add(gui.render.options, 'showDebug');
            render.add(gui.render.options, 'showPositions');
            render.add(gui.render.options, 'showBroadphase');
            render.add(gui.render.options, 'showBounds');
            render.add(gui.render.options, 'showVelocity');
            render.add(gui.render.options, 'showCollisions');
            render.add(gui.render.options, 'showSeparations');
            const axesWidget = render.add(gui.render.options, 'showAxes');
            const angleIndicatorWidget = render.add(gui.render.options, 'showAngleIndicator');
            render.add(gui.render.options, 'showSleeping');
            render.add(gui.render.options, 'showIds');
            render.add(gui.render.options, 'showVertexNumbers');
            render.add(gui.render.options, 'showConvexHulls');
            render.add(gui.render.options, 'showInternalEdges');
            render.add(gui.render.options, 'enabled');
            render.open();
        }
        document.body.appendChild(gui.datGui.domElement);
    }
    static _addBody(gui) {
        const engine = gui.engine;
        const options = {
            density: gui.density,
            friction: gui.friction,
            frictionStatic: gui.frictionStatic,
            frictionAir: gui.frictionAir,
            restitution: gui.restitution,
        };
        if (gui.chamfer && gui.sides > 2) {
            options.chamfer = {
                radius: gui.chamfer,
            };
        }
        for (let i = 0; i < gui.amount; i++) {
            Matter.World.add(engine.world, Matter.Bodies.polygon(gui.offset.x + 120 + i * gui.size + i * 50, gui.offset.y + 200, gui.sides, gui.size, options));
        }
    }
    static _clear(gui) {
        const engine = gui.engine;
        const constraints = Matter.Composite.allConstraints(engine.world);
        let mouseConstraint = null;
        // find mouse constraints
        for (const constraint of constraints) {
            // TODO: need a better way than this
            if (constraint.label === 'Mouse Constraint') {
                mouseConstraint = constraint;
                break;
            }
        }
        Matter.World.clear(engine.world, true);
        Matter.Engine.clear(engine);
        // add mouse constraint back in
        if (mouseConstraint) {
            Matter.Composite.add(engine.world, mouseConstraint);
        }
        // clear scene graph (if defined in controller)
        if (gui.render) {
            const renderController = gui.render.controller;
            if ('clear' in renderController) {
                // @ts-ignore
                renderController.clear(gui.render);
            }
        }
        Matter.Events.trigger(gui, 'clear');
    }
}
exports["default"] = Gui;


/***/ }),

/***/ 159:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const keymaster_1 = __importDefault(__webpack_require__(37));
const jquery_1 = __importDefault(__webpack_require__(825));
__webpack_require__(647);
const Common_1 = __importDefault(__webpack_require__(560));
const Serializer_1 = __importDefault(__webpack_require__(954));
const MatterTypes = __importStar(__webpack_require__(381));
const Matter = MatterTypes.default;
/**
 * A tool for inspecting worlds.
 * @module Inspector
 */
class Inspector {
    /**
     * Creates an inspector
     * @function create
     * @param engine
     * @param render
     * @param options
     * @return The created inspector instance.
     */
    static create(engine, render, options = {}) {
        let inspector = {
            isPaused: false,
            selected: [],
            selectStart: null,
            selectEnd: null,
            // @ts-ignore
            selectBounds: Matter.Bounds.create(),
            mousePrevPosition: { x: 0, y: 0 },
            offset: { x: 0, y: 0 },
            autoExpand: true,
            autoHide: true,
            autoRewind: true,
            hasExpanded: false,
            bodyClass: '',
            exportIndent: 0,
            clipboard: [],
            root: Matter.Composite.create({
                label: 'Root',
            }),
            keyBindings: [],
            events: {},
        };
        inspector = Matter.Common.extend(inspector, options);
        Inspector.instance = inspector;
        inspector.engine = engine;
        inspector.render = render;
        if (inspector.render) {
            inspector.mouse = Matter.Mouse.create(inspector.render.canvas);
            inspector.mouseConstraint = Matter.MouseConstraint.create(engine, {
                mouse: inspector.mouse,
            });
        }
        else {
            inspector.mouse = {
                position: {
                    x: 0,
                    y: 0,
                },
            };
        }
        if (Serializer_1.default) {
            inspector.serializer = Serializer_1.default.create();
            localStorage.removeItem('pauseState');
        }
        Inspector.$body = (0, jquery_1.default)('body');
        Matter.Composite.add(inspector.root, engine.world);
        engine.world.isModified = true;
        engine.world.parent = null;
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        let styles = __webpack_require__(10);
        Common_1.default.injectStyles(styles, 'js-tree-style');
        styles = __webpack_require__(521);
        Common_1.default.injectStyles(styles, 'matter-inspector-style');
        inspector.keyBind = Matter.Common.chain(keymaster_1.default, (key) => {
            inspector.keyBindings.push(key);
        });
        Inspector._initControls(inspector);
        Inspector._initEngineEvents(inspector);
        Inspector._initTree(inspector);
        Inspector._initKeyBinds(inspector);
        return inspector;
    }
    /**
     * Destroys the inspector
     * @function destroy
     * @param inspector
     */
    static destroy(inspector) {
        var _a;
        (_a = inspector.controls.worldTree) === null || _a === void 0 ? void 0 : _a.data('jstree').destroy();
        const inspectorElements = [].slice.call(document.body.querySelectorAll('.ins-container, .vakata-context, .jstree-marker'));
        inspectorElements.forEach(Common_1.default.domRemove);
        inspector.keyBindings.forEach((key) => {
            keymaster_1.default.unbind(key);
        });
        Matter.Events.off(inspector.engine, 'beforeUpdate', inspector.beforeEngineUpdate);
        if (inspector.render) {
            Matter.Events.off(inspector.render, 'afterRender', inspector.afterRender);
            // @ts-ignore
            Matter.Events.off(inspector.mouseConstraint);
        }
    }
    static _initControls(inspector) {
        const controls = inspector.controls || {};
        const $inspectorContainer = (0, jquery_1.default)('<div class="ins-container">');
        const $topPanel = (0, jquery_1.default)('<div class="ins-top-panel">');
        const $buttonGroup = (0, jquery_1.default)('<div class="ins-control-group">');
        const $searchBox = (0, jquery_1.default)('<input class="ins-search-box" type="search" placeholder="search">');
        const $importButton = (0, jquery_1.default)('<button class="ins-import-button ins-button">Import</button>');
        const $exportButton = (0, jquery_1.default)('<button class="ins-export-button ins-button">Export</button>');
        const $pauseButton = (0, jquery_1.default)('<button class="ins-pause-button ins-button">Pause</button>');
        const $helpButton = (0, jquery_1.default)('<button class="ins-help-button ins-button">Help</button>');
        const $addCompositeButton = (0, jquery_1.default)('<button aria-label="Add composite body" title="Add composite body" class="ins-add-button ins-button">+</button>');
        if (Serializer_1.default) {
            $buttonGroup.append($pauseButton, $importButton, $exportButton, $helpButton);
        }
        else {
            $buttonGroup.append($pauseButton, $helpButton);
        }
        $inspectorContainer.prepend($topPanel, $searchBox, $addCompositeButton);
        Inspector.$body.prepend($inspectorContainer);
        controls.pauseButton = $pauseButton;
        controls.importButton = $importButton;
        controls.exportButton = $exportButton;
        controls.helpButton = $helpButton;
        controls.searchBox = $searchBox;
        controls.container = $inspectorContainer;
        controls.addCompositeButton = $addCompositeButton;
        controls.pauseButton.on('click', function () {
            Inspector._setPaused(inspector, !inspector.isPaused);
        });
        controls.exportButton.on('click', function () {
            Inspector._exportFile(inspector);
        });
        controls.importButton.on('click', function () {
            Inspector._importFile(inspector);
        });
        controls.helpButton.on('click', function () {
            Inspector._showHelp();
        });
        controls.addCompositeButton.on('click', function () {
            Inspector._addNewComposite(inspector);
        });
        let searchTimeout;
        controls.searchBox.on('keyup', function () {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(function () {
                const value = controls.searchBox.val();
                const worldTree = controls.worldTree.data('jstree');
                worldTree.search(value);
            }, 250);
        });
        inspector.controls = controls;
    }
    static _showHelp() {
        let help = 'Matter Tools\n\n';
        help += 'Drag nodes in the tree to move them between composites.\n';
        help += "Use browser's developer console to inspect selected objects.\n";
        help += 'Note: selections only render if renderer supports it.\n\n';
        help += '[shift + space] pause or play simulation.\n';
        help += '[right click] and drag on empty space to select a region.\n';
        help += '[right click] and drag on an object to move it.\n';
        help += '[right click + shift] and drag to move whole selection.\n\n';
        help += '[ctrl-c] to copy selected world objects.\n';
        help += '[ctrl-v] to paste copied world objects to mouse position.\n';
        help += '[del] or [backspace] delete selected objects.\n\n';
        help += '[shift + s] scale-xy selected objects with mouse or arrows.\n';
        help += '[shift + s + d] scale-x selected objects with mouse or arrows.\n';
        help += '[shift + s + f] scale-y selected objects with mouse or arrows.\n';
        help += '[shift + r] rotate selected objects with mouse or arrows.\n\n';
        help += "[shift + q] set selected objects as static (can't be undone).\n";
        help += '[shift + i] import objects.\n';
        help += '[shift + o] export selected objects.\n';
        help += '[shift + h] toggle Matter.Gui.\n';
        help += '[shift + y] toggle auto-hide.\n';
        help += '[shift + r] toggle auto-rewind on play/pause.\n\n';
        help += '[shift + j] show this help message.';
        alert(help);
    }
    static _initKeyBinds(inspector) {
        inspector.keyBind('shift+space', function () {
            Inspector._setPaused(inspector, !inspector.isPaused);
        });
        if (inspector.serializer) {
            inspector.keyBind('shift+o', function () {
                Inspector._exportFile(inspector);
            });
            inspector.keyBind('shift+i', function () {
                Inspector._importFile(inspector);
            });
        }
        inspector.keyBind('shift+j', function () {
            Inspector._showHelp();
        });
        inspector.keyBind('shift+y', function () {
            inspector.autoHide = !inspector.autoHide;
            Inspector.$body.toggleClass('ins-auto-hide gui-auto-hide', inspector.autoHide);
        });
        inspector.keyBind('shift+r', function () {
            inspector.autoRewind = !inspector.autoRewind;
            if (!inspector.autoRewind)
                localStorage.removeItem('pauseState');
        });
        inspector.keyBind('shift+q', function () {
            for (let i = 0; i < inspector.selected.length; i++) {
                const object = inspector.selected[i].data;
                if (object.type === 'body' && !object.isStatic) {
                    Matter.Body.setStatic(object, true);
                }
            }
        });
        inspector.keyBind('del', function () {
            Inspector._deleteSelectedObjects(inspector);
        });
        inspector.keyBind('backspace', function () {
            Inspector._deleteSelectedObjects(inspector);
        });
        if (inspector.serializer) {
            inspector.keyBind('ctrl+c', function () {
                Inspector._copySelectedObjects(inspector);
            });
            inspector.keyBind('ctrl+v', function () {
                Inspector._pasteSelectedObjects(inspector);
            });
        }
        // prevent the backspace key from navigating back
        // http://stackoverflow.com/questions/1495219/how-can-i-prevent-the-backspace-key-from-navigating-back
        (0, jquery_1.default)(document)
            .unbind('keydown')
            .bind('keydown', function (event) {
            let doPrevent = false;
            if (event.keyCode === 8) {
                // @ts-ignore
                const d = event.srcElement || event.target;
                if ((d.tagName.toUpperCase() === 'INPUT' &&
                    (d.type.toUpperCase() === 'TEXT' ||
                        d.type.toUpperCase() === 'PASSWORD' ||
                        d.type.toUpperCase() === 'FILE' ||
                        d.type.toUpperCase() === 'EMAIL' ||
                        d.type.toUpperCase() === 'SEARCH')) ||
                    d.tagName.toUpperCase() === 'TEXTAREA') {
                    doPrevent = d.readOnly || d.disabled;
                }
                else {
                    doPrevent = true;
                }
            }
            if (doPrevent) {
                event.preventDefault();
            }
        });
    }
    static _initTree(inspector) {
        const engine = inspector.engine;
        const controls = inspector.controls;
        let deferTimeout;
        const worldTreeOptions = {
            core: {
                check_callback: true,
                animation: false,
            },
            dnd: {
                copy: false,
            },
            search: {
                show_only_matches: true,
                fuzzy: false,
            },
            types: {
                '#': {
                    valid_children: [],
                },
                body: {
                    valid_children: [],
                },
                constraint: {
                    valid_children: [],
                },
                composite: {
                    valid_children: [],
                },
                bodies: {
                    valid_children: ['body'],
                },
                constraints: {
                    valid_children: ['constraint'],
                },
                composites: {
                    valid_children: ['composite'],
                },
            },
            plugins: ['dnd', 'types', 'unique', 'search'],
        };
        // @ts-ignore
        controls.worldTree = (0, jquery_1.default)('<div class="ins-world-tree">').jstree(worldTreeOptions);
        controls.container.append(controls.worldTree);
        inspector.hasExpanded = false;
        controls.worldTree.on('refresh.jstree', function () {
            // expand tree on first update
            if (inspector.autoExpand && !inspector.hasExpanded) {
                inspector.hasExpanded = true;
                // @ts-ignore
                controls.worldTree.jstree('open_all');
            }
        });
        controls.worldTree.on('changed.jstree', function (event, data) {
            const selected = [];
            const worldTree = controls.worldTree.data('jstree');
            if (data.action !== 'select_node') {
                return;
            }
            // defer selection update until selection has finished propagating
            clearTimeout(deferTimeout);
            deferTimeout = setTimeout(function () {
                data.selected = worldTree.get_selected();
                for (let i = 0; i < data.selected.length; i++) {
                    const nodeId = data.selected[i];
                    const objectType = nodeId.split('_')[0];
                    const objectId = nodeId.split('_')[1];
                    const worldObject = Matter.Composite.get(engine.world, objectId, objectType);
                    switch (objectType) {
                        case 'body':
                        case 'constraint':
                        case 'composite':
                            selected.push(worldObject);
                            break;
                    }
                }
                Inspector._setSelectedObjects(inspector, selected);
            }, 1);
        });
        (0, jquery_1.default)(document).on('dnd_stop.vakata', function (event, data) {
            const worldTree = controls.worldTree.data('jstree');
            const nodes = data.data.nodes;
            // handle drag and drop
            // move items between composites
            for (let i = 0; i < nodes.length; i++) {
                const node = worldTree.get_node(nodes[i]);
                const parentNode = worldTree.get_node(worldTree.get_parent(nodes[i]));
                const prevCompositeId = node.data.compositeId;
                const newCompositeId = parentNode.data.compositeId;
                if (prevCompositeId === newCompositeId) {
                    continue;
                }
                const nodeId = nodes[i];
                const objectType = nodeId.split('_')[0];
                const objectId = nodeId.split('_')[1];
                const worldObject = Matter.Composite.get(inspector.root, objectId, objectType);
                const prevComposite = Matter.Composite.get(inspector.root, prevCompositeId, 'composite');
                const newComposite = Matter.Composite.get(inspector.root, newCompositeId, 'composite');
                Matter.Composite.move(prevComposite, worldObject, newComposite);
            }
        });
        controls.worldTree.on('dblclick.jstree', function () {
            const worldTree = controls.worldTree.data('jstree');
            const selected = worldTree.get_selected();
            // select all children of double clicked node
            for (let i = 0; i < selected.length; i++) {
                const nodeId = selected[i];
                const objectType = nodeId.split('_')[0];
                switch (objectType) {
                    case 'composite':
                    case 'composites':
                    case 'bodies':
                    case 'constraints':
                        const children = worldTree.get_node(nodeId).children;
                        for (let j = 0; j < children.length; j++) {
                            worldTree.select_node(children[j], false);
                        }
                        break;
                }
            }
        });
    }
    static _addBodyClass(inspector, classNames) {
        // only apply changes to prevent DOM lag
        if (inspector.bodyClass.indexOf(' ' + classNames) === -1) {
            Inspector.$body.addClass(classNames);
            inspector.bodyClass = ' ' + Inspector.$body.attr('class');
        }
    }
    static _removeBodyClass(inspector, classNames) {
        // only apply changes to prevent DOM lag
        let updateRequired = false;
        const classes = classNames.split(' ');
        for (let i = 0; i < classes.length; i++) {
            updateRequired = inspector.bodyClass.indexOf(' ' + classes[i]) !== -1;
            if (updateRequired)
                break;
        }
        if (updateRequired) {
            Inspector.$body.removeClass(classNames);
            inspector.bodyClass = ' ' + Inspector.$body.attr('class');
        }
    }
    static _getMousePosition(inspector) {
        return Matter.Vector.add(inspector.mouse.position, inspector.offset);
    }
    static _initEngineEvents(inspector) {
        const engine = inspector.engine;
        const mouse = inspector.mouse;
        const controls = inspector.controls;
        let mousePosition = Inspector._getMousePosition(inspector);
        inspector.beforeEngineUpdate = function () {
            // update mouse position reference
            mousePosition = Inspector._getMousePosition(inspector);
            const mouseDelta = mousePosition.x - inspector.mousePrevPosition.x;
            const keyDelta = Number(keymaster_1.default.isPressed('up')) +
                Number(keymaster_1.default.isPressed('right')) -
                Number(keymaster_1.default.isPressed('down')) -
                Number(keymaster_1.default.isPressed('left'));
            const delta = mouseDelta + keyDelta;
            // update interface when world changes
            if (engine.world.isModified) {
                const data = Inspector._generateCompositeTreeNode(inspector.root, null, true);
                Inspector._updateTree(controls.worldTree.data('jstree'), data);
                Inspector._setSelectedObjects(inspector, []);
            }
            // update region selection
            if (inspector.selectStart !== null) {
                if (inspector.selectEnd === null) {
                    inspector.selectEnd = {};
                }
                inspector.selectEnd.x = mousePosition.x;
                inspector.selectEnd.y = mousePosition.y;
                Matter.Bounds.update(inspector.selectBounds, [
                    inspector.selectStart,
                    inspector.selectEnd,
                ]);
            }
            // rotate mode
            if (keymaster_1.default.shift && keymaster_1.default.isPressed('r')) {
                const rotateSpeed = 0.03;
                const angle = Math.max(-2, Math.min(2, delta)) * rotateSpeed;
                Inspector._addBodyClass(inspector, 'ins-cursor-rotate');
                Inspector._rotateSelectedObjects(inspector, angle);
            }
            else {
                Inspector._removeBodyClass(inspector, 'ins-cursor-rotate');
            }
            // scale mode
            if (keymaster_1.default.shift && keymaster_1.default.isPressed('s')) {
                const scaleSpeed = 0.02;
                const scale = 1 + Math.max(-2, Math.min(2, delta)) * scaleSpeed;
                Inspector._addBodyClass(inspector, 'ins-cursor-scale');
                let scaleX;
                let scaleY;
                if (keymaster_1.default.isPressed('d')) {
                    scaleX = scale;
                    scaleY = 1;
                }
                else if (keymaster_1.default.isPressed('f')) {
                    scaleX = 1;
                    scaleY = scale;
                }
                else {
                    scaleX = scaleY = scale;
                }
                Inspector._scaleSelectedObjects(inspector, scaleX, scaleY);
            }
            else {
                Inspector._removeBodyClass(inspector, 'ins-cursor-scale');
            }
            // translate mode
            if (mouse.button === 2) {
                Inspector._addBodyClass(inspector, 'ins-cursor-move');
                Inspector._moveSelectedObjects(inspector, mousePosition.x, mousePosition.y);
            }
            else {
                Inspector._removeBodyClass(inspector, 'ins-cursor-move');
            }
            inspector.mousePrevPosition = Matter.Common.clone(mousePosition);
        };
        Matter.Events.on(inspector.engine, 'beforeUpdate', inspector.beforeEngineUpdate);
        if (inspector.mouseConstraint) {
            Matter.Events.on(inspector.mouseConstraint, 'mouseup', function () {
                // select objects in region if making a region selection
                if (inspector.selectStart !== null) {
                    const selected = Matter.Query.region(Matter.Composite.allBodies(engine.world), inspector.selectBounds);
                    Inspector._setSelectedObjects(inspector, selected);
                }
                // clear selection region
                inspector.selectStart = null;
                inspector.selectEnd = null;
                Matter.Events.trigger(inspector, 'selectEnd');
            });
            Matter.Events.on(inspector.mouseConstraint, 'mousedown', function () {
                const bodies = Matter.Composite.allBodies(engine.world);
                const constraints = Matter.Composite.allConstraints(engine.world);
                const isUnionSelect = keymaster_1.default.shift || keymaster_1.default.control;
                const worldTree = inspector.controls.worldTree.data('jstree');
                if (mouse.button === 2) {
                    let hasSelected = false;
                    for (const body of bodies) {
                        if (Matter.Bounds.contains(body.bounds, mousePosition) &&
                            Matter.Vertices.contains(body.vertices, mousePosition)) {
                            if (isUnionSelect) {
                                Inspector._addSelectedObject(inspector, body);
                            }
                            else {
                                Inspector._setSelectedObjects(inspector, [body]);
                            }
                            hasSelected = true;
                            break;
                        }
                    }
                    if (!hasSelected) {
                        for (const constraint of constraints) {
                            const bodyA = constraint.bodyA;
                            const bodyB = constraint.bodyB;
                            if (constraint.label.indexOf('Mouse Constraint') !== -1) {
                                continue;
                            }
                            let pointAWorld = constraint.pointA, pointBWorld = constraint.pointB;
                            if (bodyA) {
                                pointAWorld = Matter.Vector.add(bodyA.position, constraint.pointA);
                            }
                            if (bodyB) {
                                pointBWorld = Matter.Vector.add(bodyB.position, constraint.pointB);
                            }
                            if (!pointAWorld || !pointBWorld) {
                                continue;
                            }
                            const distA = Matter.Vector.magnitudeSquared(Matter.Vector.sub(mousePosition, pointAWorld));
                            const distB = Matter.Vector.magnitudeSquared(Matter.Vector.sub(mousePosition, pointBWorld));
                            if (distA < 100 || distB < 100) {
                                if (isUnionSelect) {
                                    Inspector._addSelectedObject(inspector, constraint);
                                }
                                else {
                                    Inspector._setSelectedObjects(inspector, [constraint]);
                                }
                                hasSelected = true;
                                break;
                            }
                        }
                        if (!hasSelected) {
                            worldTree.deselect_all(true);
                            Inspector._setSelectedObjects(inspector, []);
                            inspector.selectStart = Matter.Common.clone(mousePosition);
                            inspector.selectEnd = Matter.Common.clone(mousePosition);
                            Matter.Bounds.update(inspector.selectBounds, [
                                inspector.selectStart,
                                inspector.selectEnd,
                            ]);
                            Matter.Events.trigger(inspector, 'selectStart');
                        }
                        else {
                            inspector.selectStart = null;
                            inspector.selectEnd = null;
                        }
                    }
                }
                if (mouse.button === 2 && inspector.selected.length > 0) {
                    Inspector._addBodyClass(inspector, 'ins-cursor-move');
                    Inspector._updateSelectedMouseDownOffset(inspector);
                }
            });
        }
        if (inspector.render) {
            inspector.afterRender = function () {
                const renderController = inspector.render.controller;
                const context = inspector.render.context;
                if ('inspector' in renderController)
                    renderController.inspector(inspector, context);
            };
            Matter.Events.on(inspector.render, 'afterRender', inspector.afterRender);
        }
    }
    static _deleteSelectedObjects(inspector) {
        const objects = [];
        const worldTree = inspector.controls.worldTree.data('jstree');
        // delete objects in world
        for (let i = 0; i < inspector.selected.length; i++) {
            const object = inspector.selected[i].data;
            if (object !== inspector.engine.world) {
                objects.push(object);
            }
        }
        // also delete non-world composites (selected only in the UI tree)
        const selectedNodes = worldTree.get_selected();
        for (let i = 0; i < selectedNodes.length; i++) {
            let node = worldTree.get_node(selectedNodes[i]);
            if (node.type === 'composite') {
                node = worldTree.get_node(node.children[0]);
                if (node.data) {
                    const compositeId = node.data.compositeId;
                    const object = Matter.Composite.get(inspector.root, compositeId, 'composite');
                    if (object && object !== inspector.engine.world) {
                        objects.push(object);
                        worldTree.delete_node(selectedNodes[i]);
                    }
                }
            }
        }
        Matter.Composite.remove(inspector.root, objects, true);
        Inspector._setSelectedObjects(inspector, []);
    }
    static _copySelectedObjects(inspector) {
        inspector.clipboard.length = 0;
        // put selected objects into clipboard
        for (let i = 0; i < inspector.selected.length; i++) {
            const object = inspector.selected[i].data;
            if (object.type !== 'body') {
                continue;
            }
            inspector.clipboard.push(object);
        }
    }
    static _pasteSelectedObjects(inspector) {
        if (!inspector.serializer) {
            return;
        }
        const objects = [];
        const worldTree = inspector.controls.worldTree.data('jstree');
        // copy objects in world
        for (let i = 0; i < inspector.clipboard.length; i++) {
            const object = inspector.clipboard[i];
            const clone = Serializer_1.default.clone(inspector.serializer, object);
            Matter.Body.translate(clone, { x: 50, y: 50 });
            // add the clone to the same composite as original
            const node = worldTree.get_node(object.type + '_' + object.id, false);
            const compositeId = node.data.compositeId;
            const composite = Matter.Composite.get(inspector.engine.world, compositeId, 'composite');
            Matter.Composite.add(composite, clone);
            objects.push(clone);
        }
        // select clones after waiting for tree to update
        setTimeout(function () {
            Inspector._setSelectedObjects(inspector, objects);
        }, 200);
    }
    static _updateSelectedMouseDownOffset(inspector) {
        const selected = inspector.selected;
        const mousePosition = Inspector._getMousePosition(inspector);
        for (const item of selected) {
            const data = item.data;
            if ('position' in data) {
                item.mousedownOffset = {
                    x: mousePosition.x - data.position.x,
                    y: mousePosition.y - data.position.y,
                };
            }
            else if ('pointA' in data && !data.bodyA) {
                item.mousedownOffset = {
                    x: mousePosition.x - data.pointA.x,
                    y: mousePosition.y - data.pointA.y,
                };
            }
            else if ('pointB' in data && !data.bodyB) {
                item.mousedownOffset = {
                    x: mousePosition.x - data.pointB.x,
                    y: mousePosition.y - data.pointB.y,
                };
            }
        }
    }
    static _moveSelectedObjects(inspector, x, y) {
        const selected = inspector.selected;
        for (const item of selected) {
            const data = item.data;
            if (!item.mousedownOffset) {
                continue;
            }
            switch (data.type) {
                case 'body':
                    const delta = {
                        x: x - data.position.x - item.mousedownOffset.x,
                        y: y - data.position.y - item.mousedownOffset.y,
                    };
                    Matter.Body.translate(data, delta);
                    data.positionPrev.x = data.position.x;
                    data.positionPrev.y = data.position.y;
                    break;
                case 'constraint':
                    let point = data.pointA;
                    if (data.bodyA) {
                        point = data.pointB;
                    }
                    point.x = x - item.mousedownOffset.x;
                    point.y = y - item.mousedownOffset.y;
                    const initialPointA = data.bodyA
                        ? Matter.Vector.add(data.bodyA.position, data.pointA)
                        : data.pointA;
                    const initialPointB = data.bodyB
                        ? Matter.Vector.add(data.bodyB.position, data.pointB)
                        : data.pointB;
                    data.length = Matter.Vector.magnitude(Matter.Vector.sub(initialPointA, initialPointB));
                    break;
            }
        }
    }
    static _scaleSelectedObjects(inspector, scaleX, scaleY) {
        const selected = inspector.selected;
        for (const item of selected) {
            const data = item.data;
            switch (data.type) {
                case 'body':
                    Matter.Body.scale(data, scaleX, scaleY, data.position);
                    if (data.circleRadius) {
                        data.circleRadius *= scaleX;
                    }
                    break;
            }
        }
    }
    static _rotateSelectedObjects(inspector, angle) {
        const selected = inspector.selected;
        for (const item of selected) {
            const data = item.data;
            switch (data.type) {
                case 'body':
                    Matter.Body.rotate(data, angle);
                    break;
            }
        }
    }
    static _setPaused(inspector, isPaused) {
        if (isPaused) {
            if (inspector.autoRewind && inspector.serializer) {
                Inspector._setSelectedObjects(inspector, []);
                Serializer_1.default.loadState(inspector.serializer, inspector.engine, 'pauseState');
            }
            inspector.engine.timing.timeScale = 0;
            inspector.isPaused = true;
            inspector.controls.pauseButton.text('Play');
            Matter.Events.trigger(inspector, 'paused');
        }
        else {
            if (inspector.autoRewind && inspector.serializer) {
                Serializer_1.default.saveState(inspector.serializer, inspector.engine, 'pauseState');
            }
            inspector.engine.timing.timeScale = 1;
            inspector.isPaused = false;
            inspector.controls.pauseButton.text('Pause');
            Matter.Events.trigger(inspector, 'play');
        }
    }
    static _setSelectedObjects(inspector, objects) {
        const worldTree = inspector.controls.worldTree.data('jstree');
        for (let i = 0; i < inspector.selected.length; i++) {
            const data = inspector.selected[i].data;
            worldTree.deselect_node(data.type + '_' + data.id, true);
        }
        inspector.selected = [];
        if (objects.length > 0) {
            console.clear();
        }
        for (let i = 0; i < objects.length; i++) {
            const data = objects[i];
            if (data) {
                // add the object to the selection
                Inspector._addSelectedObject(inspector, data);
                // log selected objects to console for property inspection
                if (i < 5) {
                    console.log(data.label + ' ' + data.id + ': %O', data);
                }
                else if (i === 6) {
                    console.warn('Omitted inspecting ' + (objects.length - 5) + ' more objects');
                }
            }
        }
    }
    static _addSelectedObject(inspector, object) {
        if (!object) {
            return;
        }
        const worldTree = inspector.controls.worldTree.data('jstree');
        inspector.selected.push({ data: object });
        worldTree.select_node(object.type + '_' + object.id, true);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static _updateTree(tree, data) {
        data[0].state = data[0].state || { opened: true };
        tree.settings.core.data = data;
        tree.refresh(-1);
    }
    static _generateCompositeTreeNode(composite, compositeId, isRoot) {
        const children = [];
        const node = {
            id: 'composite_' + composite.id,
            data: {
                compositeId: compositeId,
            },
            type: 'composite',
            text: (composite.label ? composite.label : 'Composite') + ' ' + composite.id,
            li_attr: {
                class: 'jstree-node-type-composite',
            },
            children: [],
        };
        let childNode = Inspector._generateCompositesTreeNode(composite.composites, composite.id);
        childNode.id = 'composites_' + composite.id;
        children.push(childNode);
        if (isRoot) {
            return childNode.children;
        }
        childNode = Inspector._generateBodiesTreeNode(composite.bodies, composite.id);
        childNode.id = 'bodies_' + composite.id;
        children.push(childNode);
        childNode = Inspector._generateConstraintsTreeNode(composite.constraints, composite.id);
        childNode.id = 'constraints_' + composite.id;
        children.push(childNode);
        node.children = children;
        return node;
    }
    static _generateCompositesTreeNode(composites, compositeId) {
        const node = {
            type: 'composites',
            text: 'Composites',
            data: {
                compositeId: compositeId,
            },
            children: [],
            li_attr: {
                class: 'jstree-node-type-composites',
            },
        };
        for (const composite of composites) {
            node.children.push(Inspector._generateCompositeTreeNode(composite, compositeId));
        }
        return node;
    }
    static _generateBodiesTreeNode(bodies, compositeId) {
        const node = {
            type: 'bodies',
            text: 'Bodies',
            data: {
                compositeId: compositeId,
            },
            children: [],
            li_attr: {
                class: 'jstree-node-type-bodies',
            },
        };
        for (const body of bodies) {
            node.children.push({
                type: 'body',
                id: 'body_' + body.id,
                data: {
                    compositeId: compositeId,
                },
                text: (body.label ? body.label : 'Body') + ' ' + body.id,
                li_attr: {
                    class: 'jstree-node-type-body',
                },
                children: [],
            });
        }
        return node;
    }
    static _generateConstraintsTreeNode(constraints, compositeId) {
        const node = {
            type: 'constraints',
            text: 'Constraints',
            data: {
                compositeId: compositeId,
            },
            children: [],
            li_attr: {
                class: 'jstree-node-type-constraints',
            },
        };
        for (const constraint of constraints) {
            node.children.push({
                type: 'constraint',
                id: 'constraint_' + constraint.id,
                data: {
                    compositeId: compositeId,
                },
                text: (constraint.label ? constraint.label : 'Constraint') +
                    ' ' +
                    constraint.id,
                li_attr: {
                    class: 'jstree-node-type-constraint',
                },
                children: [],
            });
        }
        return node;
    }
    static _addNewComposite(inspector) {
        const newComposite = Matter.Composite.create();
        Matter.Composite.add(inspector.root, newComposite);
        // move new composite to the start so that it appears top of tree
        inspector.root.composites.splice(inspector.root.composites.length - 1, 1);
        inspector.root.composites.unshift(newComposite);
        Matter.Composite.setModified(inspector.engine.world, true, true, false);
    }
    static _exportFile(inspector) {
        if (!inspector.serializer) {
            alert('No serializer.');
            return;
        }
        if (inspector.selected.length === 0) {
            alert('No objects were selected, so export could not be created. Can only export objects that are in the World composite.');
            return;
        }
        let fileName = 'export-objects';
        const exportComposite = Matter.Composite.create({
            label: 'Exported Objects',
        });
        // add everything else, must be in top-down order
        for (let i = 0; i < inspector.selected.length; i++) {
            const object = inspector.selected[i].data;
            // skip if it's already in the composite tree
            // this means orphans will be added in the root
            if (Matter.Composite.get(exportComposite, object.id, object.type)) {
                continue;
            }
            Matter.Composite.add(exportComposite, object);
            // better filename for small exports
            if (inspector.selected.length === 1)
                fileName = 'export-' + object.label + '-' + object.id;
        }
        // santise filename
        // eslint-disable-next-line no-useless-escape
        fileName = fileName.toLowerCase().replace(/[^\w\-]/g, '') + '.json';
        // serialise
        const json = Serializer_1.default.serialise(inspector.serializer, exportComposite, inspector.exportIndent);
        // launch export download
        const _isWebkit = 'WebkitAppearance' in document.documentElement.style;
        if (_isWebkit) {
            const blob = new Blob([json], { type: 'application/json' });
            const anchor = document.createElement('a');
            anchor.download = fileName;
            anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
            anchor.dataset.downloadurl = [
                'application/json',
                anchor.download,
                anchor.href,
            ].join(':');
            anchor.click();
        }
        else {
            window.open('data:application/json;charset=utf-8,' + escape(json));
        }
        Matter.Events.trigger(inspector, 'export');
    }
    static _importFile(inspector) {
        if (!inspector.serializer) {
            alert('No serializer.');
            return;
        }
        const element = document.createElement('div');
        element.innerHTML = '<input type="file">';
        const fileInput = element.firstChild;
        fileInput === null || fileInput === void 0 ? void 0 : fileInput.addEventListener('change', function () {
            // @ts-ignore
            const file = fileInput.files[0];
            if (file.name.match(/\.(txt|json)$/)) {
                const reader = new FileReader();
                reader.onload = function () {
                    // @ts-ignore
                    const importedComposite = inspector.serializer.parse(reader.result);
                    if (importedComposite) {
                        importedComposite.label = 'Imported Objects';
                        Matter.Composite.rebase(importedComposite);
                        Matter.Composite.add(inspector.root, importedComposite);
                        // move imported composite to the start so that it appears top of tree
                        inspector.root.composites.splice(inspector.root.composites.length - 1, 1);
                        inspector.root.composites.unshift(importedComposite);
                        const worldTree = inspector.controls.worldTree.data('jstree');
                        const data = Inspector._generateCompositeTreeNode(inspector.root, null, true);
                        Inspector._updateTree(worldTree, data);
                    }
                };
                reader.readAsText(file);
            }
            else {
                alert('File not supported, .json or .txt JSON files only');
            }
        });
        // @ts-ignore
        fileInput === null || fileInput === void 0 ? void 0 : fileInput.click();
    }
}
exports["default"] = Inspector;


/***/ }),

/***/ 954:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResurrectExtend = void 0;
const resurrect_1 = __importDefault(__webpack_require__(332));
const MatterTypes = __importStar(__webpack_require__(381));
const Matter = MatterTypes.default;
class ResurrectExtend extends resurrect_1.default {
    constructor() {
        super(...arguments);
        this.parse = () => { };
    }
}
exports.ResurrectExtend = ResurrectExtend;
/**
 * An (experimental) tool for serializing matter.js worlds.
 * @module Serializer
 */
class Serializer {
    /**
     * Creates a serializer.
     * @return A serializer
     */
    static create() {
        const serializer = new ResurrectExtend({ prefix: '$', cleanup: true });
        serializer.parse = serializer.resurrect;
        return serializer;
    }
    /**
     * Clones an object using a serializer and assigns it a new id
     * @function Serializer.clone
     * @param serializer
     * @param object
     * @return The clone
     */
    static clone(serializer, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    object) {
        const clone = serializer.parse(Serializer.serialise(serializer, object));
        clone.id = Matter.Common.nextId();
        return clone;
    }
    /**
     * Saves world state to local storage
     * @function Serializer.saveState
     * @param serializer
     * @param engine
     * @param key
     */
    static saveState(serializer, engine, key) {
        localStorage.setItem(key, Serializer.serialise(serializer, engine.world));
    }
    /**
     * Loads world state from local storage
     * @function Serializer.loadState
     * @param serializer
     * @param engine
     * @param key
     */
    static loadState(serializer, engine, key) {
        const item = localStorage.getItem(key);
        if (!item) {
            return;
        }
        const loadedWorld = serializer.parse(item);
        if (loadedWorld) {
            Matter.Engine.merge(engine, {
                world: loadedWorld,
            });
        }
    }
    /**
     * Serialises the object using the given serializer and a Matter-specific replacer
     * @function Serializer.serialise
     * @param serializer
     * @param object
     * @param indent
     * @return The serialised object
     */
    static serialise(serializer, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    object, indent = 0) {
        return serializer.stringify(object, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (key, value) => {
            // limit precision of floats
            if (!/^#/.exec(key) && typeof value === 'number') {
                const fixed = parseFloat(value.toFixed(3));
                // do not limit if limiting will cause value to zero
                // TODO: this should ideally dynamically find the SF precision required
                if (fixed === 0 && value !== 0) {
                    return value;
                }
                return fixed;
            }
            return value;
        }, indent);
    }
}
exports["default"] = Serializer;


/***/ }),

/***/ 381:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__381__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(80);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
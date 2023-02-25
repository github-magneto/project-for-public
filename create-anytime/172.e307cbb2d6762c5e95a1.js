/*! For license information please see 172.e307cbb2d6762c5e95a1.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[172],{4593:(e,t,n)=>{var r=n(7159);t.Z=void 0;var o=r(n(5698)),i=n(4262),a=(0,o.default)((0,i.jsx)("path",{d:"M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14v2zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7l-6-6zm1.5 14h-6v-2h6v2zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2v2z"}),"Difference");t.Z=a},3914:(e,t,n)=>{var r=n(7159);t.Z=void 0;var o=r(n(5698)),i=n(4262),a=(0,o.default)((0,i.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");t.Z=a},8172:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var r=n(7629),o=n(9295),i=n(62),a=n(393),c=n(4566),l=n(4240),u=n(1901),s=n(1235),f=n(3930),h=n(9921),p=n(1144),d=n(5802),m=n(2872),y=n(5060),v=n(3914),g=n(7818),b=n(4165),w=n(4593),E=n(6887),x=n(7886);function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function S(){S=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=w(a,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,a),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var s={};function f(){}function h(){}function p(){}var d={};c(d,o,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(j([])));y&&y!==t&&n.call(y,o)&&(d=y);var v=p.prototype=f.prototype=Object.create(d);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function r(o,i,a,c){var l=u(e[o],e,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==Z(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(f).then((function(e){s.value=e,a(s)}),(function(e){return r("throw",e,a,c)}))}c(l.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=p,c(v,"constructor",p),c(p,"constructor",h),h.displayName=c(p,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,a,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(b.prototype),c(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new b(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(v),c(v,a,"Generator"),c(v,o,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}function O(e,t,n,r,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||C(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e){return r.createElement(c.Z,{open:!0,sx:{"& .MuiDialog-paper":{width:"100%",maxWidth:840}},onClose:e.onClose},r.createElement(u.Z,{dividers:!0},r.createElement("div",{style:{whiteSpace:"break-spaces",fontSize:14,lineHeight:1.5}},function(e,t){var n=[];return o.Kx(e,t).forEach((function(e,t){e.added?n.push(r.createElement("span",{key:t,style:{color:"green"}},e.value)):e.removed?n.push(r.createElement("span",{key:t,style:{color:"red"}},e.value)):n.push(r.createElement("span",{key:t},e.value))})),n}.apply(void 0,function(e){if(Array.isArray(e))return P(e)}(t=e.value)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||C(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))));var t}function A(e){return r.createElement(c.Z,{open:!0,sx:{"& .MuiDialog-paper":{width:"100%",maxWidth:720}},onClose:e.onClose},r.createElement(l.Z,null,"设置"),r.createElement(u.Z,{dividers:!0},r.createElement(f.ZP,{container:!0,spacing:1},r.createElement(f.ZP,{item:!0,xs:12},"内容生成长最大长度 ",e.value.max_length),r.createElement(f.ZP,{item:!0,xs:12},r.createElement(h.ZP,{value:e.value.max_length,onChange:function(t,n){e.onChange(_(_({},e.value),{},{max_length:n}))},min:1,max:1024,step:1})),r.createElement(f.ZP,{item:!0,xs:12},"内容生成长最小长度 ",e.value.min_length),r.createElement(f.ZP,{item:!0,xs:12},r.createElement(h.ZP,{value:e.value.min_length,onChange:function(t,n){e.onChange(_(_({},e.value),{},{min_length:n}))},min:1,max:512,step:1})))),r.createElement(s.Z,null,r.createElement(a.Z,{color:"primary",variant:"contained",onClick:function(){e.onClose()}},r.createElement(y.Z,null))))}const z=function(){var e=j(r.useState('Artificial intelligence is a branch of computer science, it attempts to understand the essence of intelligence, and can produce a new kind of response in the form of human intelligence similar intelligent machines, research in this field include robot, speech recognition, image recognition, natural language processing and expert system, etc.Since the birth of artificial intelligence, the theory and technology matures, application field expands unceasingly, also can imagine, the future of artificial intelligence technology, will be a "container" of human wisdom.'),2),t=e[0],n=e[1],o=j(r.useState({max_length:128,min_length:32}),2),c=o[0],l=o[1],u=j(r.useState([]),2),s=u[0],f=u[1],h=j(r.useState(),2),Z=h[0],L=h[1],k=j(r.useState(),2),C=k[0],P=k[1],z=function(){var e,n=(e=S().mark((function e(){var n,r;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return");case 2:return x.Z.setState((function(e){return e.loading=e.loading+1,e})),n=_({text:t},c),e.next=6,fetch(E.$b+"/api/main/transformers/facebook_bart_large_cnn_summarization",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json().then((function(e){return e}))}));case 6:(r=e.sent).response&&f(r.data),r.response||x.Z.setState((function(e){return e.message=r.data,e})),x.Z.setState((function(e){return e.loading=e.loading-1,e}));case 10:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){O(i,r,o,a,c,"next",e)}function c(e){O(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(){return n.apply(this,arguments)}}();return r.createElement("div",{style:{width:"100%",height:"100%"}},r.createElement("div",{style:{width:"100%",maxWidth:840,margin:"auto",padding:16}},r.createElement(p.Z,null,r.createElement(m.Z,{style:{padding:16,display:"flex",justifyContent:"space-between",alignItems:"center"}},r.createElement("div",{style:{fontSize:14}},"内容摘要"),r.createElement(b.Z,null))),r.createElement(p.Z,{style:{marginTop:16}},r.createElement(m.Z,{style:{padding:16}},r.createElement(i.Z,{minRows:4,sx:{"& .MuiOutlinedInput-root":{padding:0},"& textarea":{fontSize:14,lineHeight:1.5},"& fieldset":{border:"none"}},multiline:!0,fullWidth:!0,variant:"outlined",value:t,onChange:function(e){return n(e.target.value)}}))),r.createElement(p.Z,{style:{marginTop:16}},r.createElement(d.Z,{style:{padding:16,justifyContent:"end"}},r.createElement(a.Z,{variant:"contained",onClick:function(){return f([])}},r.createElement(g.Z,null)),r.createElement(a.Z,{variant:"contained",onClick:function(){return L(!0)}},r.createElement(v.Z,null)),r.createElement(a.Z,{variant:"contained",onClick:function(){return z()}},r.createElement(y.Z,null)))),s.length?r.createElement(p.Z,{style:{marginTop:16}},r.createElement(m.Z,{style:{padding:16}},s.map((function(e,n){return r.createElement(p.Z,{style:{marginBottom:n===s.length-1?0:8},key:n},r.createElement(m.Z,{style:{padding:16,fontSize:14,lineHeight:1.5,whiteSpace:"pre-line",color:"rgba(0, 0, 0, 0.5)"}},e.summary_text),r.createElement(d.Z,{style:{padding:16,paddingTop:0,justifyContent:"end"}},r.createElement(a.Z,{variant:"outlined",onClick:function(){P([t,e.summary_text])}},r.createElement(w.Z,null))))})))):null),Z?r.createElement(A,{value:c,onChange:l,onClose:function(){return L()}}):null,C?r.createElement(T,{value:C,onClose:function(){return P()}}):null)}},6887:(e,t,n)=>{n.d(t,{$b:()=>r,LR:()=>o});var r=window.location.origin,o=function(e,t){var n=document.createElement("a"),r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n.download=t,n.href=e,n.dispatchEvent(r)}}}]);
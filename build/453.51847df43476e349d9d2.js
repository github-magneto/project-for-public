/*! For license information please see 453.51847df43476e349d9d2.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[453],{1575:(t,e,r)=>{r.d(e,{p:()=>i});var n=r(7629);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t){var e,r,i=(e=n.useState(0),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,r)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],l=i[1];return n.useEffect((function(){return l(1)}),[]),n.createElement("div",{style:{opacity:a,transition:"0.5s all"}},t.children)}},8453:(t,e,r)=>{r.r(e),r.d(e,{default:()=>L});var n=r(7629),o=r(9295),i=r(3721),a=r(62),l=r(393),u=r(4566),c=r(1901),f=r(5060),s=r(7818),h=r(5348),p=r(3454),d=r(6887),y=r(7886),v=r(1575);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function g(){g=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof s?e:s,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var l=x(a,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=c(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function s(){}function h(){}function p(){}var d={};l(d,o,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(j([])));v&&v!==e&&r.call(v,o)&&(d=v);var w=p.prototype=s.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,l){var u=c(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==m(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,l)}),(function(t){n("throw",t,a,l)})):e.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,l)}))}l(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:A}}function A(){return{value:void 0,done:!0}}return h.prototype=p,l(w,"constructor",p),l(p,"constructor",h),h.displayName=l(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(E.prototype),l(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,a,"Generator"),l(w,o,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function w(t){return function(t){if(Array.isArray(t))return S(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||x(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e,r,n,o,i,a){try{var l=t[i](a),u=l.value}catch(t){return void r(t)}l.done?e(u):Promise.resolve(u).then(n,o)}function E(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(t,e)||x(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t,e){if(t){if("string"==typeof t)return S(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(t,e):void 0}}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function k(t){return n.createElement(u.Z,{open:!0,sx:{"& .MuiDialog-paper":{width:"100%",maxWidth:840}},onClose:t.onClose},n.createElement(c.Z,{dividers:!0},n.createElement("div",{style:{whiteSpace:"break-spaces"}},t.value)))}const L=function(){var t=n.useRef(),e=E(n.useState(""),2),r=e[0],u=e[1],c=E(n.useState([]),2),m=c[0],x=c[1],S=E(n.useState(),2),L=S[0],j=S[1],A=function(){var t,e=(t=g().mark((function t(){var e,n;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==r){t.next=2;break}return t.abrupt("return");case 2:return x((function(t){return[].concat(w(t),[r])})),u(""),y.Z.setState((function(t){return t.loading=t.loading+1,t})),t.next=7,fetch(d.$b+"/api/main/tool/rewrite",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:r})}).then((function(t){return t.json().then((function(t){return t}))}));case 7:if((e=t.sent).response){for(n=e.data;n.match(/^(\n)/);)n=n.replace(/^(\n)/,"");x((function(t){return[].concat(w(t),[n])}))}e.response||(x(m),u(r),y.Z.setState((function(t){return t.message=e.data,t}))),y.Z.setState((function(t){return t.loading=t.loading-1,t}));case 11:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){b(i,n,o,a,l,"next",t)}function l(t){b(i,n,o,a,l,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();return n.useEffect((function(){return t.current.scrollTo({behavior:"smooth",top:1e6})}),[m]),n.createElement("div",{ref:function(e){return t.current=e},style:{width:"100%",height:"100%",overflow:"auto",position:"relative",display:"flex",flexDirection:"column"}},n.createElement("div",{style:{flexGrow:1,overflow:"auto",position:"relative",paddingBottom:120},ref:function(e){return t.current=e}},m.length>0?m.map((function(t,e){return n.createElement(v.p,{key:e},n.createElement("div",{style:{background:e%2==0?"rgba(255, 255, 255, 1)":"rgba(25, 118, 210, 0.04)",overflow:"hidden"}},n.createElement("div",{style:{width:"100%",maxWidth:840,margin:"auto",padding:24,overflow:"hidden"}},n.createElement("div",{style:{display:"flex"}},e%2==0?n.createElement(h.Z,{color:"primary",style:{marginRight:8,flexShrink:0}}):null,e%2==1?n.createElement(p.Z,{color:"primary",style:{marginRight:8,flexShrink:0}}):null,n.createElement("div",{style:{fontWeight:"bold",flexGrow:1,width:0,whiteSpace:"break-spaces",fontSize:14,lineHeight:1.5}},t)),e%2==1?n.createElement(l.Z,{style:{display:"block",marginLeft:"auto"},onClick:function(){return j((t=m[e-1],r=m[e],i=[],o.Kx(t,r).forEach((function(t,e){t.added?i.push(n.createElement("span",{key:e,style:{color:"green"}},t.value)):t.removed?i.push(n.createElement("span",{key:e,style:{color:"red"}},t.value)):i.push(n.createElement("span",{key:e},t.value))})),i));var t,r,i}},"查看对比"):null)))})):null,m.length>0?n.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"12px 0"}},n.createElement(l.Z,{onClick:function(){return x([])},style:{width:200}},"清空对话",n.createElement(s.Z,null))):null,0===m.length?n.createElement("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto",width:"100%",height:"fit-content"}},n.createElement("div",{style:{textAlign:"center",margin:24}},"在下方输入框中输入需要降重的内容")):null),n.createElement("div",{style:{flexShrink:0,padding:"12px 24px",position:"absolute",bottom:0,width:"100%"}},n.createElement("div",{style:{width:"100%",maxWidth:840,margin:"auto",flexShrink:0,position:"relative",display:"flex",alignItems:"center",marginBottom:8}},n.createElement(a.Z,{style:{background:"rgba(255, 255, 255, 1)"},multiline:!0,fullWidth:!0,variant:"outlined",value:r,onChange:function(t){return u(t.target.value)}}),n.createElement(i.Z,{style:{position:"absolute",top:0,bottom:0,right:8,margin:"auto",width:"fit-content",height:"fit-content"},onClick:A},n.createElement(f.Z,null)))),L?n.createElement(k,{value:L,onClose:function(){return j()}}):null)}},6887:(t,e,r)=>{r.d(e,{$b:()=>n,LR:()=>o});var n=window.location.origin,o=function(t,e){var r=document.createElement("a"),n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r.download=e,r.href=t,r.dispatchEvent(n)}}}]);
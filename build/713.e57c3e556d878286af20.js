/*! For license information please see 713.e57c3e556d878286af20.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[713],{1575:(t,e,r)=>{r.d(e,{p:()=>i});var n=r(7629);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t){var e,r,i=(e=n.useState(0),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,r)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],u=i[1];return n.useEffect((function(){return u(1)}),[]),n.createElement("div",{style:{opacity:a,transition:"0.5s all"}},t.children)}},4713:(t,e,r)=>{r.r(e),r.d(e,{default:()=>E});var n=r(7629),o=r(2683),i=r(3721),a=r(62),u=r(393),c=r(5977),l=r(4106),f=r(5060),s=r(5953),h=r(7818),p=r(1575);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(){d=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof s?e:s,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=E(a,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f={};function s(){}function h(){}function p(){}var m={};u(m,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(j([])));g&&g!==e&&r.call(g,o)&&(m=g);var w=p.prototype=s.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var f=c.arg,s=f.value;return s&&"object"==y(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:A}}function A(){return{value:void 0,done:!0}}return h.prototype=p,u(w,"constructor",p),u(p,"constructor",h),h.displayName=u(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),u(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),u(w,a,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function m(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||b(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function g(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){v(i,n,o,a,u,"next",t)}function u(t){v(i,n,o,a,u,"throw",t)}a(void 0)}))}}function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,e)||b(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){if(t){if("string"==typeof t)return x(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(t,e):void 0}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const E=function(){var t=(0,o.k6)().push,e=n.useRef(),r=w(n.useState(""),2),y=r[0],v=r[1],b=w(n.useState([]),2),x=b[0],E=b[1],S=function(){var t=g(d().mark((function t(e,r){var n,o,i,a;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=d().mark((function t(r){return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v((function(t){return t+e[r]})),t.next=3,new Promise((function(t){return setTimeout((function(){return t()}),200)}));case 3:case"end":return t.stop()}}),t)})),o=0;case 2:if(!(o<e.length)){t.next=7;break}return t.delegateYield(n(o),"t0",4);case 4:o+=1,t.next=2;break;case 7:return E((function(t){return[].concat(m(t),[e])})),v(""),t.next=11,new Promise((function(t){return setTimeout((function(){return t()}),1e3)}));case 11:E((function(t){return[].concat(m(t),[""])})),i=d().mark((function t(e){return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E((function(t){return t[t.length-1]=t[t.length-1]+r[e],m(t)})),t.next=3,new Promise((function(t){return setTimeout((function(){return t()}),200)}));case 3:case"end":return t.stop()}}),t)})),a=0;case 14:if(!(a<r.length)){t.next=19;break}return t.delegateYield(i(a),"t1",16);case 16:a+=1,t.next=14;break;case 19:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();return n.useEffect(g(d().mark((function t(){return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==x.length){t.next=11;break}return t.next=3,new Promise((function(t){return setTimeout((function(){return t()}),1e3)}));case 3:return t.next=5,S("你好","你好旅行者，从菜单进入应用吧！");case 5:return t.next=7,new Promise((function(t){return setTimeout((function(){return t()}),1e3)}));case 7:return t.next=9,S("可以介绍一下海王星吗？","可以的，海王星是太阳系八大行星之一，也是已知太阳系中离太阳最远的大行星。海王星的轨道半长轴为30.07天文单位，公转周期为164.8年，质量为17.147地球质量，半径为3.86地球半径。");case 9:return t.next=11,new Promise((function(t){return setTimeout((function(){return t()}),4e3)}));case 11:case"end":return t.stop()}}),t)}))),[]),n.useEffect((function(){return e.current.scrollTo({behavior:"smooth",top:1e6})}),[x]),n.createElement("div",{style:{width:"100%",height:"100%",padding:24,overflow:"auto",position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}},n.createElement(l.Z,{style:{width:375,height:677,maxWidth:"100%",maxHeight:"100%",overflow:"auto",position:"relative",display:"flex",flexDirection:"column",flexShrink:0}},n.createElement("div",{style:{flexGrow:1,overflow:"auto",position:"relative"},ref:function(t){return e.current=t}},x.length>0?x.map((function(t,e){return n.createElement(p.p,{key:e},n.createElement("div",{style:{background:e%2==0?"rgba(255, 255, 255, 1)":"rgba(0, 0, 0, 0.04)"}},n.createElement("div",{style:{width:"100%",maxWidth:840,margin:"auto",padding:24}},n.createElement("div",{style:{display:"flex"}},n.createElement(s.Z,{style:{marginRight:8,fill:"rgba(0, 0, 0, 0.2)",flexShrink:0}}),n.createElement("div",{style:{fontWeight:"bold",flexGrow:1,width:0,whiteSpace:"break-spaces",fontSize:14,lineHeight:1.5}},t)))),n.createElement(c.Z,null))})):null,x.length>0?n.createElement(n.Fragment,null,n.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"12px 0"}},n.createElement(u.Z,{style:{width:200}},"清空对话",n.createElement(h.Z,null)))):null,n.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"12px 0"}},n.createElement(u.Z,{style:{textTransform:"none"},variant:"contained",onClick:function(){return t("/openai/chat/free")}},"进入 ChatGPT 免费版"))),n.createElement("div",{style:{flexShrink:0,padding:"12px 24px"}},n.createElement("div",{style:{width:"100%",maxWidth:840,margin:"auto",flexShrink:0,position:"relative",display:"flex",alignItems:"center",marginBottom:8}},n.createElement(a.Z,{style:{background:"rgba(255, 255, 255, 1)"},multiline:!0,fullWidth:!0,variant:"outlined",value:y}),n.createElement(i.Z,{style:{position:"absolute",top:0,bottom:0,right:8,margin:"auto",width:"fit-content",height:"fit-content"}},n.createElement(f.Z,null))))))}}}]);
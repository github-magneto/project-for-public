/*! For license information please see 637.b61b88306b4632a15531.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[637],{6042:(t,e,n)=>{var r=n(7159);e.Z=void 0;var o=r(n(5698)),i=n(4262),a=(0,o.default)((0,i.jsx)("path",{d:"M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"}),"Key");e.Z=a},1637:(t,e,n)=>{n.r(e),n.d(e,{default:()=>G});var r=n(7629),o=n(3721),i=n(62),a=n(393),c=n(4566),l=n(4240),u=n(1901),s=n(1235),f=n(3930),h=n(1144),p=n(157),d=n(5802),m=n(2872),y=n(5060),v=n(7818),g=n(1664),E=n(8562),w=n(8202),b=n(5348),x=n(3454),S=n(6042),Z=n(6887),k=n(7886);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function C(t){return function(t){if(Array.isArray(t))return I(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||O(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,e)||O(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){if(t){if("string"==typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,e):void 0}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function A(){A=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=w(a,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var s={};function f(){}function h(){}function p(){}var d={};c(d,o,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(Z([])));y&&y!==e&&n.call(y,o)&&(d=y);var v=p.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var l=u(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==L(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function Z(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=p,c(v,"constructor",p),c(p,"constructor",h),h.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(v),c(v,a,"Generator"),c(v,o,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=Z,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:Z(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}function P(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}function _(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){P(i,r,o,a,c,"next",t)}function c(t){P(i,r,o,a,c,"throw",t)}a(void 0)}))}}function T(t){var e=function(){var e=_(A().mark((function e(){var n;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k.Z.setState((function(t){return t.loading=t.loading+1,t})),e.next=3,fetch(Z.$b+"/api/main/mongo/openai/token/usage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t.value})}).then((function(t){return t.json().then((function(t){return t}))}));case 3:n=e.sent,k.Z.setState((function(t){return t.loading=t.loading-1,t.message=n.data,t}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=_(A().mark((function e(){return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("openai-token",t.value),k.Z.setState((function(t){return t.message="存储成功",t}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.createElement(c.Z,{open:!0,sx:{"& .MuiDialog-paper":{width:"100%",maxWidth:720}},onClose:t.onClose},r.createElement(l.Z,null,"口令"),r.createElement(u.Z,{dividers:!0},r.createElement(f.ZP,{container:!0,spacing:2},r.createElement(f.ZP,{item:!0,xs:12},r.createElement(i.Z,{fullWidth:!0,value:t.value,onChange:function(e){t.onChange(e.target.value)}})))),r.createElement(s.Z,null,r.createElement(a.Z,{color:"primary",variant:"contained",onClick:e},"查询额度"),r.createElement(a.Z,{color:"primary",variant:"contained",onClick:function(){n(),t.onClose()}},r.createElement(y.Z,null))))}const G=function(){var t=r.useRef(),e=j(r.useState(""),2),n=e[0],c=e[1],l=j(r.useState([]),2),u=l[0],s=l[1],f=j(r.useState(""),2),L=f[0],O=f[1],I=j(r.useState(!1),2),P=I[0],G=I[1],N=function(){var t=_(A().mark((function t(){var e,r,o;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==n){t.next=2;break}return t.abrupt("return");case 2:return s((function(t){return[].concat(C(t),[n])})),c(""),e={prompt:[].concat(C(u),[n]).map((function(t,e){return e%2==0?"Human:"+t:"AI:"+t})).join("\n")+"\nAI:",token:L},k.Z.setState((function(t){return t.loading=t.loading+1,t})),t.next=8,fetch(Z.$b+"/api/main/openai/chat/pay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json().then((function(t){return t}))}));case 8:if((r=t.sent).response){for(o=r.data;o.match(/^(\n)/);)o=o.replace(/^(\n)/,"");s((function(t){return[].concat(C(t),[o])}))}r.response||(s(u),c(n),k.Z.setState((function(t){return t.message=r.data,t}))),k.Z.setState((function(t){return t.loading=t.loading-1,t}));case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.useEffect((function(){return t.current.scrollTo({behavior:"smooth",top:1e6})}),[u]),r.useEffect((function(){localStorage.getItem("openai-token")&&O(localStorage.getItem("openai-token"))}),[]),r.createElement("div",{style:{width:"100%",height:"100%"},ref:function(e){return t.current=e}},r.createElement("div",{style:{width:"100%",minHeight:"100%",maxWidth:840,margin:"auto",padding:16,display:"flex",flexDirection:"column",justifyContent:"space-between"}},r.createElement("div",null,u.length>0?u.map((function(t,e){return r.createElement(h.Z,{style:{marginBottom:16},key:e},r.createElement(m.Z,{style:{padding:16,display:"flex"}},e%2==0?r.createElement(b.Z,{color:"primary",style:{marginRight:8,flexShrink:0}}):null,e%2==1?r.createElement(x.Z,{color:"primary",style:{marginRight:8,flexShrink:0}}):null,r.createElement("div",{style:{fontWeight:"bold",flexGrow:1,width:0,whiteSpace:"break-spaces",fontSize:14,lineHeight:1.5}},t)))})):null,0===u.length?r.createElement(r.Fragment,null,r.createElement(h.Z,{style:{marginBottom:16}},r.createElement(m.Z,{style:{padding:16,fontSize:12,lineHeight:2}},r.createElement("div",null,"ChatGPT 口令版"),r.createElement("div",null,"* 基于 OpenAI ChatGPT 3 提供的 API 开发"),r.createElement("div",null,"* 当前处于付费版 可以联系管理员兑换口令"),r.createElement("div",null,"* 🍗 19.8 可以对话 350000 个中文、或者 700000 个英文，有效期 3 个月"),r.createElement("div",null,"* 获取口令后 在下方点击钥匙按钮输入口令后可以使用"))),[["科普常识","什么是斐波那契数列？",r.createElement(g.Z,null)],["协助创作","写一份提纲关于社会学模型在当前社会的变化。",r.createElement(E.Z,null)],["安排旅程","帮我制定一份去迪士尼的旅游攻略。",r.createElement(w.Z,null)]].map((function(t,e){return r.createElement(h.Z,{style:{marginBottom:16},key:e},r.createElement(p.Z,{style:{padding:16,display:"flex",alignItems:"center"},onClick:function(){return c(t[1])}},r.createElement("div",{style:{marginRight:8}},r.createElement(o.Z,{component:"div"},t[2])),r.createElement("div",{style:{flexGrow:1,fontSize:14,lineHeight:2}},r.createElement("div",null,t[0]),r.createElement("div",{style:{color:"rgba(0, 0, 0, 0.5)"}},t[1]))))}))):null,r.createElement(h.Z,{style:{margin:"auto",marginBottom:16,width:"fit-content"}},r.createElement(d.Z,{style:{padding:16}},r.createElement(a.Z,{variant:"contained",onClick:function(){return G(!0)}},r.createElement(S.Z,null)),r.createElement(a.Z,{variant:"contained",onClick:function(){return s([])}},r.createElement(v.Z,null))))),r.createElement("div",null,r.createElement(h.Z,null,r.createElement(m.Z,{style:{padding:0,display:"flex",alignItems:"center"}},r.createElement(i.Z,{sx:{"& .MuiOutlinedInput-root":{padding:"16px",paddingRight:0},"& textarea":{fontSize:14,lineHeight:1.5},"& fieldset":{border:"none"}},multiline:!0,fullWidth:!0,variant:"outlined",value:n,onChange:function(t){return c(t.target.value)}}),r.createElement(o.Z,{style:{marginRight:4},onClick:N},r.createElement(y.Z,null)))))),P?r.createElement(T,{value:L,onChange:O,onClose:function(){return G()}}):null)}},6887:(t,e,n)=>{n.d(e,{$b:()=>r,LR:()=>o});var r=window.location.origin,o=function(t,e){var n=document.createElement("a"),r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n.download=e,n.href=t,n.dispatchEvent(r)}}}]);
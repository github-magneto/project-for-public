"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[937],{4165:(n,t,e)=>{var o=e(7159);t.Z=void 0;var r=o(e(5698)),i=e(4262),s=(0,r.default)((0,i.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Article");t.Z=s},7818:(n,t,e)=>{var o=e(7159);t.Z=void 0;var r=o(e(5698)),i=e(4262),s=(0,r.default)((0,i.jsx)("path",{d:"M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"}),"ClearAll");t.Z=s},1144:(n,t,e)=>{e.d(t,{Z:()=>m});var o=e(3246),r=e(3234),i=e(7629),s=e(4506),a=e(9837),u=e(3635),c=e(4899),p=e(4106),l=e(1439);function f(n){return(0,l.Z)("MuiCard",n)}(0,e(4951).Z)("MuiCard",["root"]);var v=e(4262),d=["className","raised"],h=(0,u.ZP)(p.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(n,t){return t.root}})((function(){return{overflow:"hidden"}}));const m=i.forwardRef((function(n,t){var e=(0,c.Z)({props:n,name:"MuiCard"}),i=e.className,u=e.raised,p=void 0!==u&&u,l=(0,r.Z)(e,d),m=(0,o.Z)({},e,{raised:p}),g=function(n){var t=n.classes;return(0,a.Z)({root:["root"]},f,t)}(m);return(0,v.jsx)(h,(0,o.Z)({className:(0,s.Z)(g.root,i),elevation:p?8:void 0,ref:t,ownerState:m},l))}))},5802:(n,t,e)=>{e.d(t,{Z:()=>h});var o=e(3234),r=e(3246),i=e(7629),s=e(4506),a=e(9837),u=e(3635),c=e(4899),p=e(1439);function l(n){return(0,p.Z)("MuiCardActions",n)}(0,e(4951).Z)("MuiCardActions",["root","spacing"]);var f=e(4262),v=["disableSpacing","className"],d=(0,u.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,!e.disableSpacing&&t.spacing]}})((function(n){var t=n.ownerState;return(0,r.Z)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})}));const h=i.forwardRef((function(n,t){var e=(0,c.Z)({props:n,name:"MuiCardActions"}),i=e.disableSpacing,u=void 0!==i&&i,p=e.className,h=(0,o.Z)(e,v),m=(0,r.Z)({},e,{disableSpacing:u}),g=function(n){var t=n.classes,e={root:["root",!n.disableSpacing&&"spacing"]};return(0,a.Z)(e,l,t)}(m);return(0,f.jsx)(d,(0,r.Z)({className:(0,s.Z)(g.root,p),ownerState:m,ref:t},h))}))},2872:(n,t,e)=>{e.d(t,{Z:()=>h});var o=e(3246),r=e(3234),i=e(7629),s=e(4506),a=e(9837),u=e(3635),c=e(4899),p=e(1439);function l(n){return(0,p.Z)("MuiCardContent",n)}(0,e(4951).Z)("MuiCardContent",["root"]);var f=e(4262),v=["className","component"],d=(0,u.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(n,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}}));const h=i.forwardRef((function(n,t){var e=(0,c.Z)({props:n,name:"MuiCardContent"}),i=e.className,u=e.component,p=void 0===u?"div":u,h=(0,r.Z)(e,v),m=(0,o.Z)({},e,{component:p}),g=function(n){var t=n.classes;return(0,a.Z)({root:["root"]},l,t)}(m);return(0,f.jsx)(d,(0,o.Z)({as:p,className:(0,s.Z)(g.root,i),ownerState:m,ref:t},h))}))},9295:(n,t,e)=>{function o(){}function r(n,t,e,o,r){for(var i=0,s=t.length,a=0,u=0;i<s;i++){var c=t[i];if(c.removed){if(c.value=n.join(o.slice(u,u+c.count)),u+=c.count,i&&t[i-1].added){var p=t[i-1];t[i-1]=t[i],t[i]=p}}else{if(!c.added&&r){var l=e.slice(a,a+c.count);l=l.map((function(n,t){var e=o[u+t];return e.length>n.length?e:n})),c.value=n.join(l)}else c.value=n.join(e.slice(a,a+c.count));a+=c.count,c.added||(u+=c.count)}}var f=t[s-1];return s>1&&"string"==typeof f.value&&(f.added||f.removed)&&n.equals("",f.value)&&(t[s-2].value+=f.value,t.pop()),t}function i(n){return{newPos:n.newPos,components:n.components.slice(0)}}e.d(t,{Kx:()=>a}),o.prototype={diff:function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=e.callback;"function"==typeof e&&(o=e,e={}),this.options=e;var s=this;function a(n){return o?(setTimeout((function(){o(void 0,n)}),0),!0):n}n=this.castInput(n),t=this.castInput(t),n=this.removeEmpty(this.tokenize(n));var u=(t=this.removeEmpty(this.tokenize(t))).length,c=n.length,p=1,l=u+c;e.maxEditLength&&(l=Math.min(l,e.maxEditLength));var f=[{newPos:-1,components:[]}],v=this.extractCommon(f[0],t,n,0);if(f[0].newPos+1>=u&&v+1>=c)return a([{value:this.join(t),count:t.length}]);function d(){for(var e=-1*p;e<=p;e+=2){var o=void 0,l=f[e-1],v=f[e+1],d=(v?v.newPos:0)-e;l&&(f[e-1]=void 0);var h=l&&l.newPos+1<u,m=v&&0<=d&&d<c;if(h||m){if(!h||m&&l.newPos<v.newPos?(o=i(v),s.pushComponent(o.components,void 0,!0)):((o=l).newPos++,s.pushComponent(o.components,!0,void 0)),d=s.extractCommon(o,t,n,e),o.newPos+1>=u&&d+1>=c)return a(r(s,o.components,t,n,s.useLongestToken));f[e]=o}else f[e]=void 0}p++}if(o)!function n(){setTimeout((function(){if(p>l)return o();d()||n()}),0)}();else for(;p<=l;){var h=d();if(h)return h}},pushComponent:function(n,t,e){var o=n[n.length-1];o&&o.added===t&&o.removed===e?n[n.length-1]={count:o.count+1,added:t,removed:e}:n.push({count:1,added:t,removed:e})},extractCommon:function(n,t,e,o){for(var r=t.length,i=e.length,s=n.newPos,a=s-o,u=0;s+1<r&&a+1<i&&this.equals(t[s+1],e[a+1]);)s++,a++,u++;return u&&n.components.push({count:u}),n.newPos=s,a},equals:function(n,t){return this.options.comparator?this.options.comparator(n,t):n===t||this.options.ignoreCase&&n.toLowerCase()===t.toLowerCase()},removeEmpty:function(n){for(var t=[],e=0;e<n.length;e++)n[e]&&t.push(n[e]);return t},castInput:function(n){return n},tokenize:function(n){return n.split("")},join:function(n){return n.join("")}};var s=new o;function a(n,t,e){return s.diff(n,t,e)}var u=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,c=/\S/,p=new o;p.equals=function(n,t){return this.options.ignoreCase&&(n=n.toLowerCase(),t=t.toLowerCase()),n===t||this.options.ignoreWhitespace&&!c.test(n)&&!c.test(t)},p.tokenize=function(n){for(var t=n.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/),e=0;e<t.length-1;e++)!t[e+1]&&t[e+2]&&u.test(t[e])&&u.test(t[e+2])&&(t[e]+=t[e+2],t.splice(e+1,2),e--);return t};var l=new o;function f(n){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},f(n)}l.tokenize=function(n){var t=[],e=n.split(/(\n|\r\n)/);e[e.length-1]||e.pop();for(var o=0;o<e.length;o++){var r=e[o];o%2&&!this.options.newlineIsToken?t[t.length-1]+=r:(this.options.ignoreWhitespace&&(r=r.trim()),t.push(r))}return t},(new o).tokenize=function(n){return n.split(/(\S.+?[.!?])(?=\s+|$)/)},(new o).tokenize=function(n){return n.split(/([{}:;,]|\s+)/)};var v=Object.prototype.toString,d=new o;function h(n,t,e,o,r){var i,s;for(t=t||[],e=e||[],o&&(n=o(r,n)),i=0;i<t.length;i+=1)if(t[i]===n)return e[i];if("[object Array]"===v.call(n)){for(t.push(n),s=new Array(n.length),e.push(s),i=0;i<n.length;i+=1)s[i]=h(n[i],t,e,o,r);return t.pop(),e.pop(),s}if(n&&n.toJSON&&(n=n.toJSON()),"object"===f(n)&&null!==n){t.push(n),s={},e.push(s);var a,u=[];for(a in n)n.hasOwnProperty(a)&&u.push(a);for(u.sort(),i=0;i<u.length;i+=1)s[a=u[i]]=h(n[a],t,e,o,a);t.pop(),e.pop()}else s=n;return s}d.useLongestToken=!0,d.tokenize=l.tokenize,d.castInput=function(n){var t=this.options,e=t.undefinedReplacement,o=t.stringifyReplacer,r=void 0===o?function(n,t){return void 0===t?e:t}:o;return"string"==typeof n?n:JSON.stringify(h(n,null,null,r),r,"  ")},d.equals=function(n,t){return o.prototype.equals.call(d,n.replace(/,([\r\n])/g,"$1"),t.replace(/,([\r\n])/g,"$1"))};var m=new o;m.tokenize=function(n){return n.slice()},m.join=m.removeEmpty=function(n){return n}}}]);
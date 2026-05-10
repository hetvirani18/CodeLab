import{o as e,t}from"./react-DtrESx-C.js";import{$ as n,F as r,G as i,H as a,I as o,J as s,K as c,L as l,M as u,N as d,P as f,Q as p,R as m,U as h,V as ee,W as te,X as ne,Y as re,Z as ie,at as ae,b as oe,ct as se,dt as ce,et as le,f as ue,it as de,k as fe,lt as pe,nt as g,ot as me,q as he,rt as _,st as ge,tt as _e,ut as v}from"./dist-CqVsBRjn.js";import{n as ve,t as ye}from"./hls-DxhZ1p7M.js";import{n as be,t as xe}from"./dist-C0NyMeF-.js";var Se=e(t(),1),Ce=Object.create,we=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,Ee=Object.getOwnPropertyNames,De=Object.getPrototypeOf,Oe=Object.prototype.hasOwnProperty,ke=function(e,t){return function(){return e&&(t=e(e=0)),t}},y=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},Ae=function(e,t,n,r){if(t&&typeof t==`object`||typeof t==`function`)for(var i=Ee(t),a=0,o=i.length,s;a<o;a++)s=i[a],!Oe.call(e,s)&&s!==n&&we(e,s,{get:function(e){return t[e]}.bind(null,s),enumerable:!(r=Te(t,s))||r.enumerable});return e},je=function(e,t,n){return n=e==null?{}:Ce(De(e)),Ae(t||!e||!e.__esModule?we(n,`default`,{value:e,enumerable:!0}):n,e)},Me=y(function(e,t){t.exports=typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{}});function Ne(e,t){return t!=null&&typeof Symbol<`u`&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):Ne(e,t)}var Pe=ke(function(){Pe()});function Fe(e){"@swc/helpers - typeof";return e&&typeof Symbol<`u`&&e.constructor===Symbol?`symbol`:typeof e}var Ie=ke(function(){}),Le=y(function(e,t){var n=Array.prototype.slice;t.exports=r;function r(e,t){for((`length`in e)||(e=[e]),e=n.call(e);e.length;){var r=e.shift(),i=t(r);if(i)return i;r.childNodes&&r.childNodes.length&&(e=n.call(r.childNodes).concat(e))}}}),Re=y(function(e,t){Pe(),t.exports=n;function n(e,t){if(!Ne(this,n))return new n(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}n.prototype.nodeType=8,n.prototype.nodeName=`#comment`,n.prototype.toString=function(){return`[object Comment]`}}),ze=y(function(e,t){Pe(),t.exports=n;function n(e,t){if(!Ne(this,n))return new n(e);this.data=e||``,this.length=this.data.length,this.ownerDocument=t||null}n.prototype.type=`DOMTextNode`,n.prototype.nodeType=3,n.prototype.nodeName=`#text`,n.prototype.toString=function(){return this.data},n.prototype.replaceData=function(e,t,n){var r=this.data,i=r.substring(0,e),a=r.substring(e+t,r.length);this.data=i+n+a,this.length=this.data.length}}),Be=y(function(e,t){t.exports=n;function n(e){var t=this,n=e.type;e.target||=t,t.listeners||={};var r=t.listeners[n];if(r)return r.forEach(function(n){e.currentTarget=t,typeof n==`function`?n(e):n.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),Ve=y(function(e,t){t.exports=n;function n(e,t){var n=this;n.listeners||={},n.listeners[e]||(n.listeners[e]=[]),n.listeners[e].indexOf(t)===-1&&n.listeners[e].push(t)}}),He=y(function(e,t){t.exports=n;function n(e,t){var n=this;if(n.listeners&&n.listeners[e]){var r=n.listeners[e],i=r.indexOf(t);i!==-1&&r.splice(i,1)}}}),Ue=y(function(e,t){Ie(),t.exports=r;var n=[`area`,`base`,`br`,`col`,`embed`,`hr`,`img`,`input`,`keygen`,`link`,`menuitem`,`meta`,`param`,`source`,`track`,`wbr`];function r(e){switch(e.nodeType){case 3:return u(e.data);case 8:return`<!--`+e.data+`-->`;default:return i(e)}}function i(e){var t=[],i=e.tagName;return e.namespaceURI===`http://www.w3.org/1999/xhtml`&&(i=i.toLowerCase()),t.push(`<`+i+l(e)+s(e)),n.indexOf(i)>-1?t.push(` />`):(t.push(`>`),e.childNodes.length?t.push.apply(t,e.childNodes.map(r)):e.textContent||e.innerText?t.push(u(e.textContent||e.innerText)):e.innerHTML&&t.push(e.innerHTML),t.push(`</`+i+`>`)),t.join(``)}function a(e,t){var n=Fe(e[t]);return t===`style`&&Object.keys(e.style).length>0?!0:e.hasOwnProperty(t)&&(n===`string`||n===`boolean`||n===`number`)&&t!==`nodeName`&&t!==`className`&&t!==`tagName`&&t!==`textContent`&&t!==`innerText`&&t!==`namespaceURI`&&t!==`innerHTML`}function o(e){if(typeof e==`string`)return e;var t=``;return Object.keys(e).forEach(function(n){var r=e[n];n=n.replace(/[A-Z]/g,function(e){return`-`+e.toLowerCase()}),t+=n+`:`+r+`;`}),t}function s(e){var t=e.dataset,n=[];for(var r in t)n.push({name:`data-`+r,value:t[r]});return n.length?c(n):``}function c(e){var t=[];return e.forEach(function(e){var n=e.name,r=e.value;n===`style`&&(r=o(r)),t.push(n+`="`+d(r)+`"`)}),t.length?` `+t.join(` `):``}function l(e){var t=[];for(var n in e)a(e,n)&&t.push({name:n,value:e[n]});for(var r in e._attributes)for(var i in e._attributes[r]){var o=e._attributes[r][i],s=(o.prefix?o.prefix+`:`:``)+i;t.push({name:s,value:o.value})}return e.className&&t.push({name:`class`,value:e.className}),t.length?c(t):``}function u(e){var t=``;return typeof e==`string`?t=e:e&&(t=e.toString()),t.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function d(e){return u(e).replace(/"/g,`&quot;`)}}),We=y(function(e,t){Pe();var n=Le(),r=Be(),i=Ve(),a=He(),o=Ue(),s=`http://www.w3.org/1999/xhtml`;t.exports=c;function c(e,t,n){if(!Ne(this,c))return new c(e);var r=n===void 0?s:n||null;this.tagName=r===s?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className=``,this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=r,this._attributes={},this.tagName===`INPUT`&&(this.type=`text`)}c.prototype.type=`DOMElement`,c.prototype.nodeType=1,c.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},c.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var n=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[n]=e,e.parentNode=this,t},c.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},c.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var n=t==null?-1:this.childNodes.indexOf(t);return n>-1?this.childNodes.splice(n,0,e):this.childNodes.push(e),e.parentNode=this,e},c.prototype.setAttributeNS=function(e,t,n){var r=null,i=t,a=t.indexOf(`:`);if(a>-1&&(r=t.substr(0,a),i=t.substr(a+1)),this.tagName===`INPUT`&&t===`type`)this.type=n;else{var o=this._attributes[e]||(this._attributes[e]={});o[i]={value:n,prefix:r}}},c.prototype.getAttributeNS=function(e,t){var n=this._attributes[e],r=n&&n[t]&&n[t].value;return this.tagName===`INPUT`&&t===`type`?this.type:typeof r==`string`?r:null},c.prototype.removeAttributeNS=function(e,t){var n=this._attributes[e];n&&delete n[t]},c.prototype.hasAttributeNS=function(e,t){var n=this._attributes[e];return!!n&&t in n},c.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},c.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},c.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},c.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},c.prototype.removeEventListener=a,c.prototype.addEventListener=i,c.prototype.dispatchEvent=r,c.prototype.focus=function(){},c.prototype.toString=function(){return o(this)},c.prototype.getElementsByClassName=function(e){var t=e.split(` `),r=[];return n(this,function(e){if(e.nodeType===1){var n=(e.className||``).split(` `);t.every(function(e){return n.indexOf(e)!==-1})&&r.push(e)}}),r},c.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return n(this.childNodes,function(n){n.nodeType===1&&(e===`*`||n.tagName.toLowerCase()===e)&&t.push(n)}),t},c.prototype.contains=function(e){return n(this,function(t){return e===t})||!1}}),Ge=y(function(e,t){Pe();var n=We();t.exports=r;function r(e){if(!Ne(this,r))return new r;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}r.prototype.type=`DocumentFragment`,r.prototype.nodeType=11,r.prototype.nodeName=`#document-fragment`,r.prototype.appendChild=n.prototype.appendChild,r.prototype.replaceChild=n.prototype.replaceChild,r.prototype.removeChild=n.prototype.removeChild,r.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join(``)}}),Ke=y(function(e,t){t.exports=n;function n(e){}n.prototype.initEvent=function(e,t,n){this.type=e,this.bubbles=t,this.cancelable=n},n.prototype.preventDefault=function(){}}),qe=y(function(e,t){Pe();var n=Le(),r=Re(),i=ze(),a=We(),o=Ge(),s=Ke(),c=Be(),l=Ve(),u=He();t.exports=d;function d(){if(!Ne(this,d))return new d;this.head=this.createElement(`head`),this.body=this.createElement(`body`),this.documentElement=this.createElement(`html`),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}var f=d.prototype;f.createTextNode=function(e){return new i(e,this)},f.createElementNS=function(e,t){return new a(t,this,e===null?null:String(e))},f.createElement=function(e){return new a(e,this)},f.createDocumentFragment=function(){return new o(this)},f.createEvent=function(e){return new s(e)},f.createComment=function(e){return new r(e,this)},f.getElementById=function(e){return e=String(e),n(this.childNodes,function(t){if(String(t.id)===e)return t})||null},f.getElementsByClassName=a.prototype.getElementsByClassName,f.getElementsByTagName=a.prototype.getElementsByTagName,f.contains=a.prototype.contains,f.removeEventListener=u,f.addEventListener=l,f.dispatchEvent=c}),Je=y(function(e,t){t.exports=new(qe())}),Ye=y(function(e,t){var n=typeof global<`u`?global:typeof window<`u`?window:{},r=Je(),i;typeof document<`u`?i=document:(i=n[`__GLOBAL_DOCUMENT_CACHE@4`],i||=n[`__GLOBAL_DOCUMENT_CACHE@4`]=r),t.exports=i});function Xe(e){if(Array.isArray(e))return e}function Ze(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(e){a=!0,s=e}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Qe(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function et(e,t){if(e){if(typeof e==`string`)return $e(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`)return Array.from(n);if(n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $e(e,t)}}function tt(e,t){return Xe(e)||Ze(e,t)||et(e,t)||Qe()}var nt=je(Me()),rt=je(Me()),it=je(Me()),b={now:function(){var e=it.default.performance,t=e&&e.timing,n=t&&t.navigationStart,r=typeof n==`number`&&typeof e.now==`function`?n+e.now():Date.now();return Math.round(r)}},at=function(){var e,t;if(typeof rt.default.crypto?.getRandomValues==`function`){t=new Uint8Array(32),rt.default.crypto.getRandomValues(t);for(var n=0;n<32;n++)t[n]=t[n]%16}else{t=[];for(var r=0;r<32;r++)t[r]=Math.random()*16|0}var i=0;e=`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,function(e){var n=e===`x`?t[i]:t[i]&3|8;return i++,n.toString(16)});var a=b.now()?.toString(16).substring(3);return a?e.substring(0,28)+a:e},ot=function(){return(`000000`+(Math.random()*36**6<<0).toString(36)).slice(-6)},st=function(e){if(e&&e.nodeName!==void 0)return e.muxId||=ot(),e.muxId;var t;try{t=document.querySelector(e)}catch{}return t&&!t.muxId&&(t.muxId=e),t?.muxId||e},ct=function(e){var t;e&&e.nodeName!==void 0?(t=e,e=st(t)):t=document.querySelector(e);var n=t&&t.nodeName?t.nodeName.toLowerCase():``;return[t,e,n]};function lt(e){if(Array.isArray(e))return $e(e)}function ut(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function dt(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ft(e){return lt(e)||ut(e)||et(e)||dt()}var pt={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},x=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,n,r,i,a,o,s=e?[console,e]:[console],c=(n=console.trace).bind.apply(n,ft(s)),l=(r=console.info).bind.apply(r,ft(s)),u=(i=console.debug).bind.apply(i,ft(s)),d=(a=console.warn).bind.apply(a,ft(s)),f=(o=console.error).bind.apply(o,ft(s)),p=t;return{trace:function(){var e=[...arguments];if(!(p>pt.TRACE))return c.apply(void 0,ft(e))},debug:function(){var e=[...arguments];if(!(p>pt.DEBUG))return u.apply(void 0,ft(e))},info:function(){var e=[...arguments];if(!(p>pt.INFO))return l.apply(void 0,ft(e))},warn:function(){var e=[...arguments];if(!(p>pt.WARN))return d.apply(void 0,ft(e))},error:function(){var e=[...arguments];if(!(p>pt.ERROR))return f.apply(void 0,ft(e))},get level(){return p},set level(e){e!==this.level&&(p=e??t)}}}(`[mux]`),mt=je(Me());function ht(){return(mt.default.doNotTrack||mt.default.navigator&&mt.default.navigator.doNotTrack)===`1`}function S(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}Pe();function C(e,t){if(!Ne(e,t))throw TypeError(`Cannot call a class as a function`)}function gt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _t(e,t,n){return t&&gt(e.prototype,t),n&&gt(e,n),e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vt(e){return vt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},vt(e)}function yt(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=vt(e),e!==null););return e}function bt(e,t,n){return bt=typeof Reflect<`u`&&Reflect.get?Reflect.get:function(e,t,n){var r=yt(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}},bt(e,t,n||e)}function xt(e,t){return xt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},xt(e,t)}function St(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&xt(e,t)}function Ct(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function wt(e,t){if(e==null)return{};var n=Ct(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Tt(){if(typeof Reflect>`u`||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy==`function`)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}Ie();function Et(e,t){return t&&(Fe(t)===`object`||typeof t==`function`)?t:S(e)}function Dt(e){var t=Tt();return function(){var n=vt(e),r;if(t){var i=vt(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Et(this,r)}}var Ot=function(e){return kt(e)[0]},kt=function(e){if(typeof e!=`string`||e===``)return[`localhost`];var t=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4],n;return t&&(n=(t.match(/[^\.]+\.[^\.]+$/)||[])[0]),[t,n]},At=je(Me()),jt={exists:function(){var e=At.default.performance;return(e&&e.timing)!==void 0},domContentLoadedEventEnd:function(){var e=At.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=At.default.performance,t=e&&e.timing;return t&&t.navigationStart}};function T(e,t,n){n=n===void 0?1:n,e[t]=e[t]||0,e[t]+=n}function Mt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t],r=Object.keys(n);typeof Object.getOwnPropertySymbols==`function`&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){w(e,t,n[t])})}return e}function Nt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Pt(e,t){return t??={},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Nt(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var Ft=[`x-cdn`,`content-type`],It=[`x-request-id`,`cf-ray`,`x-amz-cf-id`,`x-akamai-request-id`],Lt=Ft.concat(It);function Rt(e){e||=``;var t={};return e.trim().split(/[\r\n]+/).forEach(function(e){if(e){var n=e.split(`: `),r=n.shift();r&&(Lt.indexOf(r.toLowerCase())>=0||r.toLowerCase().indexOf(`x-litix-`)===0)&&(t[r]=n.join(`: `))}}),t}function zt(e){if(e){var t=It.find(function(t){return e[t]!==void 0});return t?e[t]:void 0}}var Bt=function(e){var t={};for(var n in e){var r=e[n];if(r[`DATA-ID`].search(`io.litix.data.`)!==-1){var i=r[`DATA-ID`].replace(`io.litix.data.`,``);t[i]=r.VALUE}}return t},Vt=function(e){if(!e)return{};var t=jt.navigationStart(),n=e.loading,r=n?n.start:e.trequest,i=n?n.first:e.tfirst,a=n?n.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+r),responseStart:Math.round(t+i),responseEnd:Math.round(t+a)}},Ht=function(e){if(!(!e||typeof e.getAllResponseHeaders!=`function`))return Rt(e.getAllResponseHeaders())},Ut=function(e,t,n){arguments.length>3&&arguments[3]!==void 0&&arguments[3];var r=arguments.length>4?arguments[4]:void 0,i=e.log,a=e.utils.secondsToMs,o=function(e){var t=parseInt(r.version),n;return t===1&&e.programDateTime!==null&&(n=e.programDateTime),t===0&&e.pdt!==null&&(n=e.pdt),n};if(!jt.exists()){i.warn(`performance timing not supported. Not tracking HLS.js.`);return}var s=function(n,r){return e.emit(t,n,r)},c=function(e,t){var n=t.levels,r=t.audioTracks,i=t.url,a=t.stats,o=t.networkDetails,c=t.sessionData,l={},u={};n.forEach(function(e,t){l[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),r.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var d=Vt(a),f=d.bytesLoaded,p=d.requestStart,m=d.responseStart,h=d.responseEnd;s(`requestcompleted`,Pt(Mt({},Bt(c)),{request_event_type:e,request_bytes_loaded:f,request_start:p,request_response_start:m,request_response_end:h,request_type:`manifest`,request_hostname:Ot(i),request_response_headers:Ht(o),request_rendition_lists:{media:l,audio:u,video:{}}}))};n.on(r.Events.MANIFEST_LOADED,c);var l=function(e,t){var n=t.details,r=t.level,i=t.networkDetails,c=t.stats,l=Vt(c),u=l.bytesLoaded,d=l.requestStart,f=l.responseStart,p=l.responseEnd,m=n.fragments[n.fragments.length-1],h=o(m)+a(m.duration);s(`requestcompleted`,{request_event_type:e,request_bytes_loaded:u,request_start:d,request_response_start:f,request_response_end:p,request_current_level:r,request_type:`manifest`,request_hostname:Ot(n.url),request_response_headers:Ht(i),video_holdback:n.holdBack&&a(n.holdBack),video_part_holdback:n.partHoldBack&&a(n.partHoldBack),video_part_target_duration:n.partTarget&&a(n.partTarget),video_target_duration:n.targetduration&&a(n.targetduration),video_source_is_live:n.live,player_manifest_newest_program_time:isNaN(h)?void 0:h})};n.on(r.Events.LEVEL_LOADED,l);var u=function(e,t){var n=t.details,r=t.networkDetails,i=t.stats,a=Vt(i),o=a.bytesLoaded,c=a.requestStart,l=a.responseStart,u=a.responseEnd;s(`requestcompleted`,{request_event_type:e,request_bytes_loaded:o,request_start:c,request_response_start:l,request_response_end:u,request_type:`manifest`,request_hostname:Ot(n.url),request_response_headers:Ht(r)})};n.on(r.Events.AUDIO_TRACK_LOADED,u);var d=function(e,t){var r=t.stats,i=t.networkDetails,a=t.frag;r||=a.stats;var o=Vt(r),c=o.bytesLoaded,l=o.requestStart,u=o.responseStart,d=o.responseEnd,f=i?Ht(i):void 0,p={request_event_type:e,request_bytes_loaded:c,request_start:l,request_response_start:u,request_response_end:d,request_hostname:i?Ot(i.responseURL):void 0,request_id:f?zt(f):void 0,request_response_headers:f,request_media_duration:a.duration,request_url:i?.responseURL};a.type===`main`?(p.request_type=`media`,p.request_current_level=a.level,p.request_video_width=(n.levels[a.level]||{}).width,p.request_video_height=(n.levels[a.level]||{}).height,p.request_labeled_bitrate=(n.levels[a.level]||{}).bitrate):p.request_type=a.type,s(`requestcompleted`,p)};n.on(r.Events.FRAG_LOADED,d);var f=function(e,t){var n=t.frag,r=n.start;s(`fragmentchange`,{currentFragmentPDT:o(n),currentFragmentStart:a(r)})};n.on(r.Events.FRAG_CHANGED,f);var p=function(e,t){var n=t.type,i=t.details,a=t.response,o=t.fatal,c=t.frag,l=t.networkDetails,u=c?.url||t.url||``,d=l?Ht(l):void 0;(i===r.ErrorDetails.MANIFEST_LOAD_ERROR||i===r.ErrorDetails.MANIFEST_LOAD_TIMEOUT||i===r.ErrorDetails.FRAG_LOAD_ERROR||i===r.ErrorDetails.FRAG_LOAD_TIMEOUT||i===r.ErrorDetails.LEVEL_LOAD_ERROR||i===r.ErrorDetails.LEVEL_LOAD_TIMEOUT||i===r.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||i===r.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||i===r.ErrorDetails.SUBTITLE_LOAD_ERROR||i===r.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||i===r.ErrorDetails.KEY_LOAD_ERROR||i===r.ErrorDetails.KEY_LOAD_TIMEOUT)&&s(`requestfailed`,{request_error:i,request_url:u,request_hostname:Ot(u),request_id:d?zt(d):void 0,request_type:i===r.ErrorDetails.FRAG_LOAD_ERROR||i===r.ErrorDetails.FRAG_LOAD_TIMEOUT?`media`:i===r.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||i===r.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?`audio`:i===r.ErrorDetails.SUBTITLE_LOAD_ERROR||i===r.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?`subtitle`:i===r.ErrorDetails.KEY_LOAD_ERROR||i===r.ErrorDetails.KEY_LOAD_TIMEOUT?`encryption`:`manifest`,request_error_code:a?.code,request_error_text:a?.text}),o&&s(`error`,{player_error_code:n,player_error_message:i,player_error_context:`${u?`url: ${u}
`:``}${a&&(a.code||a.text)?`response: ${a.code}, ${a.text}
`:``}${t.reason?`failure reason: ${t.reason}
`:``}${t.level?`level: ${t.level}
`:``}${t.parent?`parent stream controller: ${t.parent}
`:``}${t.buffer?`buffer length: ${t.buffer}
`:``}${t.error?`error: ${t.error}
`:``}${t.event?`event: ${t.event}
`:``}${t.err?`error message: ${t.err?.message}
`:``}`})};n.on(r.Events.ERROR,p);var m=function(e,t){var n=t.frag,r=n&&n._url||``;s(`requestcanceled`,{request_event_type:e,request_url:r,request_type:`media`,request_hostname:Ot(r)})};n.on(r.Events.FRAG_LOAD_EMERGENCY_ABORTED,m);var h=function(e,t){var r=t.level,a=n.levels[r];if(a&&a.attrs&&a.attrs.BANDWIDTH){var o=a.attrs.BANDWIDTH,c,l=parseFloat(a.attrs[`FRAME-RATE`]);isNaN(l)||(c=l),o?s(`renditionchange`,{video_source_fps:c,video_source_bitrate:o,video_source_width:a.width,video_source_height:a.height,video_source_rendition_name:a.name,video_source_codec:a?.videoCodec}):i.warn(`missing BANDWIDTH from HLS manifest parsed by HLS.js`)}};n.on(r.Events.LEVEL_SWITCHED,h),n._stopMuxMonitor=function(){n.off(r.Events.MANIFEST_LOADED,c),n.off(r.Events.LEVEL_LOADED,l),n.off(r.Events.AUDIO_TRACK_LOADED,u),n.off(r.Events.FRAG_LOADED,d),n.off(r.Events.FRAG_CHANGED,f),n.off(r.Events.ERROR,p),n.off(r.Events.FRAG_LOAD_EMERGENCY_ABORTED,m),n.off(r.Events.LEVEL_SWITCHED,h),n.off(r.Events.DESTROYING,n._stopMuxMonitor),delete n._stopMuxMonitor},n.on(r.Events.DESTROYING,n._stopMuxMonitor)},Wt=function(e){e&&typeof e._stopMuxMonitor==`function`&&e._stopMuxMonitor()},Gt=function(e,t){if(!e||!e.requestEndDate)return{};var n=Ot(e.url),r=e.url,i=e.bytesLoaded,a=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),s=new Date(e.requestEndDate).getTime(),c=isNaN(e.duration)?0:e.duration,l=typeof t.getMetricsFor==`function`?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType),u;l.length>0&&(u=Rt(l[l.length-1]._responseHeaders||``));var d=u?zt(u):void 0;return{requestStart:a,requestResponseStart:o,requestResponseEnd:s,requestBytesLoaded:i,requestResponseHeaders:u,requestMediaDuration:c,requestHostname:n,requestUrl:r,requestId:d}},Kt=function(e,t){if(typeof t.getCurrentRepresentationForType==`function`){var n=t.getCurrentRepresentationForType(e);return n?{currentLevel:n.absoluteIndex,renditionWidth:n.width||null,renditionHeight:n.height||null,renditionBitrate:n.bandwidth}:{}}var r=t.getQualityFor(e),i=t.getCurrentTrackFor(e).bitrateList;return i?{currentLevel:r,renditionWidth:i[r].width||null,renditionHeight:i[r].height||null,renditionBitrate:i[r].bandwidth}:{}},qt=function(e){return e.match(/.*codecs\*?="(.*)"/)?.[1]},Jt=function(e){try{var t,n;return(n=e.getVersion)==null||(t=n.call(e))==null?void 0:t.split(`.`).map(function(e){return parseInt(e)})[0]}catch{return!1}},Yt=function(e,t,n){arguments.length>3&&arguments[3]!==void 0&&arguments[3];var r=e.log;if(!n||!n.on){r.warn(`Invalid dash.js player reference. Monitoring blocked.`);return}var i=Jt(n),a=function(n,r){return e.emit(t,n,r)},o=function(e){var t=e.type,n=(e.data||{}).url;a(`requestcompleted`,{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:`manifest`,request_hostname:Ot(n),request_url:n})};n.on(`manifestLoaded`,o);var s={},c=function(e){if(typeof e.getRequests!=`function`)return null;var t=e.getRequests({state:`executed`});return t.length===0?null:t[t.length-1]},l=function(e){var t=e.type,n=e.fragmentModel,r=e.chunk;u({type:t,request:c(n),chunk:r})},u=function(e){var t=e.type,r=e.chunk,i=e.request,o=(r||{}).mediaInfo||{},c=o.type,l=o.bitrateList;l||=[];var u={};l.forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),c===`video`?s.video=u:c===`audio`?s.audio=u:s.media=u;var d=Gt(i,n),f=d.requestStart,p=d.requestResponseStart,m=d.requestResponseEnd,h=d.requestResponseHeaders,ee=d.requestMediaDuration,te=d.requestHostname,ne=d.requestUrl,re=d.requestId;a(`requestcompleted`,{request_event_type:t,request_start:f,request_response_start:p,request_response_end:m,request_bytes_loaded:-1,request_type:c+`_init`,request_response_headers:h,request_hostname:te,request_id:re,request_url:ne,request_media_duration:ee,request_rendition_lists:s})};i>=4?n.on(`initFragmentLoaded`,u):n.on(`initFragmentLoaded`,l);var d=function(e){var t=e.type,n=e.fragmentModel,r=e.chunk;f({type:t,request:c(n),chunk:r})},f=function(e){var t=e.type,r=e.chunk,i=e.request,o=r||{},s=o.mediaInfo,c=o.start,l=(s||{}).type,u=Gt(i,n),d=u.requestStart,f=u.requestResponseStart,p=u.requestResponseEnd,m=u.requestBytesLoaded,h=u.requestResponseHeaders,ee=u.requestMediaDuration,te=u.requestHostname,ne=u.requestUrl,re=u.requestId,ie=Kt(l,n),ae=ie.currentLevel,oe=ie.renditionWidth,se=ie.renditionHeight,ce=ie.renditionBitrate;a(`requestcompleted`,{request_event_type:t,request_start:d,request_response_start:f,request_response_end:p,request_bytes_loaded:m,request_type:l,request_response_headers:h,request_hostname:te,request_id:re,request_url:ne,request_media_start_time:c,request_media_duration:ee,request_current_level:ae,request_labeled_bitrate:ce,request_video_width:oe,request_video_height:se})};i>=4?n.on(`mediaFragmentLoaded`,f):n.on(`mediaFragmentLoaded`,d);var p={video:void 0,audio:void 0,totalBitrate:void 0},m=function(){if(p.video&&typeof p.video.bitrate==`number`){if(!(p.video.width&&p.video.height)){r.warn(`have bitrate info for video but missing width/height`);return}var e=p.video.bitrate;if(p.audio&&typeof p.audio.bitrate==`number`&&(e+=p.audio.bitrate),e!==p.totalBitrate)return p.totalBitrate=e,{video_source_bitrate:e,video_source_height:p.video.height,video_source_width:p.video.width,video_source_codec:qt(p.video.codec)}}},h=function(e,t,i){var o=e.mediaType;if(o===`audio`||o===`video`){var s;if(typeof n.getRepresentationsByType==`function`)if(e.newRepresentation)s={bitrate:e.newRepresentation.bandwidth,width:e.newRepresentation.width,height:e.newRepresentation.height,qualityIndex:e.newRepresentation.absoluteIndex};else{var c=n.getRepresentationsByType(o);if(c&&typeof e.newQuality==`number`){var l=c.find(function(t){return t.absoluteIndex===e.newQuality||t.index===e.newQuality});l&&(s={bitrate:l.bandwidth,width:l.width,height:l.height,qualityIndex:e.newQuality})}}else{if(typeof e.newQuality!=`number`){r.warn(`missing evt.newQuality in qualityChangeRendered event`,e);return}s=n.getBitrateInfoListFor(o).find(function(t){return t.qualityIndex===e.newQuality})}if(!(s&&typeof s.bitrate==`number`)){r.warn(`missing bitrate info for ${o}`);return}p[o]=Pt(Mt({},s),{codec:n.getCurrentTrackFor(o).codec});var u=m();u&&a(`renditionchange`,u)}};n.on(`qualityChangeRendered`,h);var ee=function(e){var t=e.request,n=e.mediaType;t||={},a(`requestcanceled`,{request_event_type:t.type+`_`+t.action,request_url:t.url,request_type:n,request_hostname:Ot(t.url)})};n.on(`fragmentLoadingAbandoned`,ee);var te=function(e){var t=e.error,n,r,i=(t==null||(n=t.data)==null?void 0:n.request)||{},o=(t==null||(r=t.data)==null?void 0:r.response)||{};t?.code===27&&a(`requestfailed`,{request_error:i.type+`_`+i.action,request_url:i.url,request_hostname:Ot(i.url),request_type:i.mediaType,request_error_code:o.status,request_error_text:o.statusText});var s=`${i!=null&&i.url?`url: ${i.url}
`:``}${o!=null&&o.status||o!=null&&o.statusText?`response: ${o?.status}, ${o?.statusText}
`:``}`;a(`error`,{player_error_code:t?.code,player_error_message:t?.message,player_error_context:s})};n.on(`error`,te),n._stopMuxMonitor=function(){n.off(`manifestLoaded`,o),n.off(`initFragmentLoaded`,u),n.off(`mediaFragmentLoaded`,f),n.off(`qualityChangeRendered`,h),n.off(`error`,te),n.off(`fragmentLoadingAbandoned`,ee),delete n._stopMuxMonitor}},Xt=function(e){e&&typeof e._stopMuxMonitor==`function`&&e._stopMuxMonitor()},Zt=0,Qt=function(){function e(){C(this,e),w(this,`_listeners`,void 0)}return _t(e,[{key:`on`,value:function(e,t,n){return t._eventEmitterGuid=t._eventEmitterGuid||++Zt,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],n&&(t=t.bind(n)),this._listeners[e].push(t),t}},{key:`off`,value:function(e,t){var n=this._listeners&&this._listeners[e];n&&n.forEach(function(e,r){e._eventEmitterGuid===t._eventEmitterGuid&&n.splice(r,1)})}},{key:`one`,value:function(e,t,n){var r=this;t._eventEmitterGuid=t._eventEmitterGuid||++Zt;var i=function(){r.off(e,i),t.apply(n||this,arguments)};i._eventEmitterGuid=t._eventEmitterGuid,this.on(e,i)}},{key:`emit`,value:function(e,t){var n=this;if(this._listeners){t||={};var r=this._listeners[`before`+e]||[],i=this._listeners[`before*`]||[],a=this._listeners[e]||[],o=this._listeners[`after`+e]||[],s=function(t,r){t=t.slice(),t.forEach(function(t){t.call(n,{type:e},r)})};s(r,t),s(i,t),s(a,t),s(o,t)}}}]),e}(),$t=je(Me()),en=function(){function e(t){var n=this;C(this,e),w(this,`_playbackHeartbeatInterval`,void 0),w(this,`_playheadShouldBeProgressing`,void 0),w(this,`pm`,void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on(`playing`,function(){n._playheadShouldBeProgressing=!0}),t.on(`play`,this._startPlaybackHeartbeatInterval.bind(this)),t.on(`playing`,this._startPlaybackHeartbeatInterval.bind(this)),t.on(`adbreakstart`,this._startPlaybackHeartbeatInterval.bind(this)),t.on(`adplay`,this._startPlaybackHeartbeatInterval.bind(this)),t.on(`adplaying`,this._startPlaybackHeartbeatInterval.bind(this)),t.on(`devicewake`,this._startPlaybackHeartbeatInterval.bind(this)),t.on(`viewstart`,this._startPlaybackHeartbeatInterval.bind(this)),t.on(`rebufferstart`,this._startPlaybackHeartbeatInterval.bind(this)),t.on(`pause`,this._stopPlaybackHeartbeatInterval.bind(this)),t.on(`ended`,this._stopPlaybackHeartbeatInterval.bind(this)),t.on(`viewend`,this._stopPlaybackHeartbeatInterval.bind(this)),t.on(`error`,this._stopPlaybackHeartbeatInterval.bind(this)),t.on(`aderror`,this._stopPlaybackHeartbeatInterval.bind(this)),t.on(`adpause`,this._stopPlaybackHeartbeatInterval.bind(this)),t.on(`adended`,this._stopPlaybackHeartbeatInterval.bind(this)),t.on(`adbreakend`,this._stopPlaybackHeartbeatInterval.bind(this)),t.on(`seeked`,function(){t.data.player_is_paused?n._stopPlaybackHeartbeatInterval():n._startPlaybackHeartbeatInterval()}),t.on(`timeupdate`,function(){n._playbackHeartbeatInterval!==null&&t.emit(`playbackheartbeat`)}),t.on(`devicesleep`,function(e,r){n._playbackHeartbeatInterval!==null&&($t.default.clearInterval(n._playbackHeartbeatInterval),t.emit(`playbackheartbeatend`,{viewer_time:r.viewer_time}),n._playbackHeartbeatInterval=null)})}return _t(e,[{key:`_startPlaybackHeartbeatInterval`,value:function(){var e=this;this._playbackHeartbeatInterval===null&&(this.pm.emit(`playbackheartbeat`),this._playbackHeartbeatInterval=$t.default.setInterval(function(){e.pm.emit(`playbackheartbeat`)},this.pm.playbackHeartbeatTime))}},{key:`_stopPlaybackHeartbeatInterval`,value:function(){this._playheadShouldBeProgressing=!1,this._playbackHeartbeatInterval!==null&&($t.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit(`playbackheartbeatend`),this._playbackHeartbeatInterval=null)}}]),e}(),tn=function e(t){var n=this;C(this,e),w(this,`viewErrored`,void 0),t.on(`viewinit`,function(){n.viewErrored=!1}),t.on(`error`,function(e,r){try{var i=t.errorTranslator({player_error_code:r.player_error_code,player_error_message:r.player_error_message,player_error_context:r.player_error_context,player_error_severity:r.player_error_severity,player_error_business_exception:r.player_error_business_exception});i&&(t.data.player_error_code=i.player_error_code||r.player_error_code,t.data.player_error_message=i.player_error_message||r.player_error_message,t.data.player_error_context=i.player_error_context||r.player_error_context,t.data.player_error_severity=i.player_error_severity||r.player_error_severity,t.data.player_error_business_exception=i.player_error_business_exception||r.player_error_business_exception,n.viewErrored=!0)}catch(e){t.mux.log.warn(`Exception in error translator callback.`,e),n.viewErrored=!0}}),t.on(`aftererror`,function(){var e,n,r,i,a;(e=t.data)==null||delete e.player_error_code,(n=t.data)==null||delete n.player_error_message,(r=t.data)==null||delete r.player_error_context,(i=t.data)==null||delete i.player_error_severity,(a=t.data)==null||delete a.player_error_business_exception})},nn=function(){function e(t){C(this,e),w(this,`_watchTimeTrackerLastCheckedTime`,void 0),w(this,`pm`,void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on(`playbackheartbeat`,this._updateWatchTime.bind(this)),t.on(`playbackheartbeatend`,this._clearWatchTimeState.bind(this))}return _t(e,[{key:`_updateWatchTime`,value:function(e,t){var n=t.viewer_time;this._watchTimeTrackerLastCheckedTime===null&&(this._watchTimeTrackerLastCheckedTime=n),T(this.pm.data,`view_watch_time`,n-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=n}},{key:`_clearWatchTimeState`,value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),rn=function(){function e(t){var n=this;C(this,e),w(this,`_playbackTimeTrackerLastPlayheadPosition`,void 0),w(this,`_lastTime`,void 0),w(this,`_isAdPlaying`,void 0),w(this,`_callbackUpdatePlaybackTime`,void 0),w(this,`pm`,void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=b.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,t.on(`viewinit`,function(){n.pm.data.view_playing_time_ms_cumulative=0});var r=this._startPlaybackTimeTracking.bind(this);t.on(`playing`,r),t.on(`adplaying`,r);var i=function(){n.pm.data.player_is_paused||r()};t.on(`seeked`,i),t.on(`rebufferend`,i);var a=this._stopPlaybackTimeTracking.bind(this);t.on(`playbackheartbeatend`,a),t.on(`seeking`,a),t.on(`rebufferstart`,a),t.on(`adplaying`,function(){n._isAdPlaying=!0}),t.on(`adended`,function(){n._isAdPlaying=!1}),t.on(`adpause`,function(){n._isAdPlaying=!1}),t.on(`adbreakstart`,function(){n._isAdPlaying=!1}),t.on(`adbreakend`,function(){n._isAdPlaying=!1}),t.on(`adplay`,function(){n._isAdPlaying=!1}),t.on(`viewinit`,function(){n._playbackTimeTrackerLastPlayheadPosition=-1,n._lastTime=b.now(),n._isAdPlaying=!1,n._callbackUpdatePlaybackTime=null})}return _t(e,[{key:`_startPlaybackTimeTracking`,value:function(){this._callbackUpdatePlaybackTime===null&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=b.now(),this.pm.on(`playbackheartbeat`,this._callbackUpdatePlaybackTime))}},{key:`_stopPlaybackTimeTracking`,value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off(`playbackheartbeat`,this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:`_updatePlaybackTime`,value:function(){var e=this.pm.data.player_playhead_time||0,t=b.now(),n=t-this._lastTime,r=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?r=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(r=n),r>0&&r<=1e3&&T(this.pm.data,`view_content_playback_time`,r),this._callbackUpdatePlaybackTime!==null&&n>0&&n<=1e3&&(this._isAdPlaying&&T(this.pm.data,`ad_playing_time_ms_cumulative`,n),T(this.pm.data,`view_playing_time_ms_cumulative`,n)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),an=function(){function e(t){C(this,e),w(this,`pm`,void 0),this.pm=t;var n=this._updatePlayheadTime.bind(this);t.on(`playbackheartbeat`,n),t.on(`playbackheartbeatend`,n),t.on(`timeupdate`,n),t.on(`destroy`,function(){t.off(`timeupdate`,n)})}return _t(e,[{key:`_updateMaxPlayheadPosition`,value:function(){this.pm.data.view_max_playhead_position=this.pm.data.view_max_playhead_position===void 0?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:`_updatePlayheadTime`,value:function(e,t){var n=this,r=function(){n.pm.currentFragmentPDT&&n.pm.currentFragmentStart&&(n.pm.data.player_program_time=n.pm.currentFragmentPDT+n.pm.data.player_playhead_time-n.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,r(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var i=this.pm.getPlayheadTime();i!==void 0&&(this.pm.data.player_playhead_time=i,r(),this._updateMaxPlayheadPosition())}}}]),e}(),on=300*1e3,sn=function e(t){if(C(this,e),!t.disableRebufferTracking){var n,r=function(e,t){i(t),n=void 0},i=function(e){if(n){var r=e.viewer_time-n;T(t.data,`view_rebuffer_duration`,r),n=e.viewer_time,t.data.view_rebuffer_duration>on&&(t.emit(`viewend`),t.send(`viewend`),t.mux.log.warn(`Ending view after rebuffering for longer than ${on}ms, future events will be ignored unless a programchange or videochange occurs.`))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on(`playbackheartbeat`,function(e,t){return i(t)}),t.on(`rebufferstart`,function(e,i){n||(T(t.data,`view_rebuffer_count`,1),n=i.viewer_time,t.one(`rebufferend`,r))}),t.on(`viewinit`,function(){n=void 0,t.off(`rebufferend`,r)})}},cn=function(){function e(t){var n=this;C(this,e),w(this,`_lastCheckedTime`,void 0),w(this,`_lastPlayheadTime`,void 0),w(this,`_lastPlayheadTimeUpdatedTime`,void 0),w(this,`_rebuffering`,void 0),w(this,`pm`,void 0),this.pm=t,!(t.disableRebufferTracking||t.disablePlayheadRebufferTracking)&&(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on(`playbackheartbeat`,this._checkIfRebuffering.bind(this)),t.on(`playbackheartbeatend`,this._cleanupRebufferTracker.bind(this)),t.on(`seeking`,function(){n._cleanupRebufferTracker(null,{viewer_time:b.now()})}))}return _t(e,[{key:`_checkIfRebuffering`,value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,t);return}if(this._lastCheckedTime===null){this._prepareRebufferTrackerState(t.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,t,!0);return}var n=t.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.sustainedRebufferThreshold==`number`&&n>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit(`rebufferstart`,{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:`_clearRebufferTrackerState`,value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:`_prepareRebufferTrackerState`,value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:`_cleanupRebufferTracker`,value:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(this._rebuffering)this._rebuffering=!1,this.pm.emit(`rebufferend`,{viewer_time:t.viewer_time});else{if(this._lastCheckedTime===null)return;var r=this.pm.data.player_playhead_time-this._lastPlayheadTime,i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.minimumRebufferDuration==`number`&&r>0&&i-r>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit(`rebufferstart`,{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit(`rebufferend`,{viewer_time:this._lastPlayheadTimeUpdatedTime+i-r}))}n?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),ln=function(){function e(t){var n=this;C(this,e),w(this,`pm`,void 0),this.pm=t,t.on(`viewinit`,function(){var e=t.data,r=e.view_id;if(!e.view_program_changed){var i=function(e,i){var a=i.viewer_time;(e.type===`playing`&&t.data.view_time_to_first_frame===void 0||e.type===`adplaying`&&(t.data.view_time_to_first_frame===void 0||n._inPrerollPosition()))&&n.calculateTimeToFirstFrame(a||b.now(),r)};t.one(`playing`,i),t.one(`adplaying`,i),t.one(`viewend`,function(){t.off(`playing`,i),t.off(`adplaying`,i)})}})}return _t(e,[{key:`_inPrerollPosition`,value:function(){return this.pm.data.view_content_playback_time===void 0||this.pm.data.view_content_playback_time<=1e3}},{key:`calculateTimeToFirstFrame`,value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),e}(),un=function e(t){var n=this;C(this,e),w(this,`_lastPlayerHeight`,void 0),w(this,`_lastPlayerWidth`,void 0),w(this,`_lastPlayheadPosition`,void 0),w(this,`_lastSourceHeight`,void 0),w(this,`_lastSourceWidth`,void 0),t.on(`viewinit`,function(){n._lastPlayheadPosition=-1}),[`pause`,`rebufferstart`,`seeking`,`error`,`adbreakstart`,`hb`,`renditionchange`,`orientationchange`,`viewend`,`playbackmodechange`].forEach(function(e){t.on(e,function(){if(n._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&n._lastPlayerWidth>=0&&n._lastSourceWidth>0&&n._lastPlayerHeight>=0&&n._lastSourceHeight>0){var e=t.data.player_playhead_time-n._lastPlayheadPosition;if(e<0){n._lastPlayheadPosition=-1;return}var r=Math.min(n._lastPlayerWidth/n._lastSourceWidth,n._lastPlayerHeight/n._lastSourceHeight),i=Math.max(0,r-1),a=Math.max(0,1-r);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,i),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,a),T(t.data,`view_total_content_playback_time`,e),T(t.data,`view_total_upscaling`,i*e),T(t.data,`view_total_downscaling`,a*e)}n._lastPlayheadPosition=-1})}),[`playing`,`hb`,`renditionchange`,`orientationchange`,`playbackmodechange`].forEach(function(e){t.on(e,function(){n._lastPlayheadPosition=t.data.player_playhead_time,n._lastPlayerWidth=t.data.player_width,n._lastPlayerHeight=t.data.player_height,n._lastSourceWidth=t.data.video_source_width,n._lastSourceHeight=t.data.video_source_height})})},dn=2e3,fn=function e(t){var n=this;C(this,e),w(this,`isSeeking`,void 0),this.isSeeking=!1;var r=-1,i=function(){var e=b.now(),i=(t.data.viewer_time||e)-(r||e);T(t.data,`view_seek_duration`,i),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,i),n.isSeeking=!1,r=-1};t.on(`seeking`,function(e,a){if(Object.assign(t.data,a),n.isSeeking&&a.viewer_time-r<=dn){r=a.viewer_time;return}n.isSeeking&&i(),n.isSeeking=!0,r=a.viewer_time,T(t.data,`view_seek_count`,1),t.send(`seeking`)}),t.on(`seeked`,function(){i()}),t.on(`viewend`,function(){n.isSeeking&&(i(),t.send(`seeked`)),n.isSeeking=!1,r=-1})},pn=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},mn=[`adbreakstart`,`adrequest`,`adresponse`,`adplay`,`adplaying`,`adpause`,`adended`,`adbreakend`,`aderror`,`adclicked`,`adskipped`],hn=function(){function e(t){var n=this;C(this,e),w(this,`_adHasPlayed`,void 0),w(this,`_adRequests`,void 0),w(this,`_adResponses`,void 0),w(this,`_currentAdRequestNumber`,void 0),w(this,`_currentAdResponseNumber`,void 0),w(this,`_prerollPlayTime`,void 0),w(this,`_wouldBeNewAdPlay`,void 0),w(this,`isAdBreak`,void 0),w(this,`pm`,void 0),this.pm=t,t.on(`viewinit`,function(){n.isAdBreak=!1,n._currentAdRequestNumber=0,n._currentAdResponseNumber=0,n._adRequests=[],n._adResponses=[],n._adHasPlayed=!1,n._wouldBeNewAdPlay=!0,n._prerollPlayTime=void 0}),mn.forEach(function(e){return t.on(e,n._updateAdData.bind(n))});var r=function(){n.isAdBreak=!1};t.on(`adbreakstart`,function(){n.isAdBreak=!0}),t.on(`play`,r),t.on(`playing`,r),t.on(`viewend`,r),t.on(`adrequest`,function(e,r){r=Object.assign({ad_request_id:`generatedAdRequestId`+ n._currentAdRequestNumber++},r),pn(n._adRequests,r),T(t.data,`view_ad_request_count`),n.inPrerollPosition()&&(t.data.view_preroll_requested=!0,n._adHasPlayed||T(t.data,`view_preroll_request_count`))}),t.on(`adresponse`,function(e,r){r=Object.assign({ad_request_id:`generatedAdRequestId`+ n._currentAdResponseNumber++},r),pn(n._adResponses,r);var i=n.findAdRequest(r.ad_request_id);i&&T(t.data,`view_ad_request_time`,Math.max(0,r.viewer_time-i.viewer_time))}),t.on(`adplay`,function(e,r){n._adHasPlayed=!0,n._wouldBeNewAdPlay&&(n._wouldBeNewAdPlay=!1,T(t.data,`view_ad_played_count`)),n.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,n._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,r.viewer_time-n._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,r.viewer_time-t.data.view_start)),n._prerollPlayTime=r.viewer_time)}),t.on(`adplaying`,function(e,r){n.inPrerollPosition()&&t.data.view_preroll_load_time===void 0&&n._prerollPlayTime!==void 0&&(t.data.view_preroll_load_time=r.viewer_time-n._prerollPlayTime,t.data.view_startup_preroll_load_time=r.viewer_time-n._prerollPlayTime)}),t.on(`adclicked`,function(e,r){n._wouldBeNewAdPlay||T(t.data,`view_ad_clicked_count`)}),t.on(`adskipped`,function(e,r){n._wouldBeNewAdPlay||T(t.data,`view_ad_skipped_count`)}),t.on(`adended`,function(){n._wouldBeNewAdPlay=!0}),t.on(`aderror`,function(){n._wouldBeNewAdPlay=!0})}return _t(e,[{key:`inPrerollPosition`,value:function(){return this.pm.data.view_content_playback_time===void 0||this.pm.data.view_content_playback_time<=1e3}},{key:`findAdRequest`,value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:`_updateAdData`,value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var n=tt(kt(t.ad_tag_url),2),r=n[0],i=n[1];this.pm.data.view_preroll_ad_tag_domain=i,this.pm.data.view_preroll_ad_tag_hostname=r}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var a=tt(kt(t.ad_asset_url),2),o=a[0],s=a[1];this.pm.data.view_preroll_ad_asset_domain=s,this.pm.data.view_preroll_ad_asset_hostname=o}this.pm.data.ad_type=`preroll`}this.pm.data.ad_asset_url=t?.ad_asset_url,this.pm.data.ad_tag_url=t?.ad_tag_url,this.pm.data.ad_creative_id=t?.ad_creative_id,this.pm.data.ad_id=t?.ad_id,this.pm.data.ad_universal_id=t?.ad_universal_id,t!=null&&t.ad_type&&(this.pm.data.ad_type=t?.ad_type)}}]),e}(),gn=function e(t){var n=this;C(this,e),w(this,`lastWallClockTime`,void 0);var r=function(){n.lastWallClockTime=b.now(),t.on(`before*`,i)},i=function(e){var r=b.now(),i=n.lastWallClockTime;n.lastWallClockTime=r,r-i>3e4&&(t.emit(`devicesleep`,{viewer_time:i}),Object.assign(t.data,{viewer_time:i}),t.send(`devicesleep`),t.emit(`devicewake`,{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send(`devicewake`))};t.one(`playbackheartbeat`,r),t.on(`playbackheartbeatend`,function(){t.off(`before*`,i),t.one(`playbackheartbeat`,r)})},_n=je(Me()),vn=function(e){return e()}(function(){var e=function(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t};function t(n){function r(t,i,a){var o;if(typeof document<`u`){if(arguments.length>1){if(a=e({path:`/`},r.defaults,a),typeof a.expires==`number`){var s=new Date;s.setMilliseconds(s.getMilliseconds()+a.expires*864e5),a.expires=s}try{o=JSON.stringify(i),/^[\{\[]/.test(o)&&(i=o)}catch{}return i=n.write?n.write(i,t):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape),document.cookie=[t,`=`,i,a.expires?`; expires=`+a.expires.toUTCString():``,a.path?`; path=`+a.path:``,a.domain?`; domain=`+a.domain:``,a.secure?`; secure`:``].join(``)}t||(o={});for(var c=document.cookie?document.cookie.split(`; `):[],l=/(%[0-9A-Z]{2})+/g,u=0;u<c.length;u++){var d=c[u].split(`=`),f=d.slice(1).join(`=`);f.charAt(0)===`"`&&(f=f.slice(1,-1));try{var p=d[0].replace(l,decodeURIComponent);if(f=n.read?n.read(f,p):n(f,p)||f.replace(l,decodeURIComponent),this.json)try{f=JSON.parse(f)}catch{}if(t===p){o=f;break}t||(o[p]=f)}catch{}}return o}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,``,e(n,{expires:-1}))},r.withConverter=t,r}return t(function(){})}),yn=`muxData`,bn=function(e){return Object.entries(e).map(function(e){var t=tt(e,2);return`${t[0]}=${t[1]}`}).join(`&`)},xn=function(e){return e.split(`&`).reduce(function(e,t){var n=tt(t.split(`=`),2),r=n[0],i=n[1],a=+i;return e[r]=i&&a==i?a:i,e},{})},Sn=function(){var e;try{e=xn(vn.get(yn)||``)}catch{e={}}return e},Cn=function(e){try{vn.set(yn,bn(e),{expires:365})}catch{}},wn=function(){var e=Sn();return e.mux_viewer_id=e.mux_viewer_id||at(),e.msn=e.msn||Math.random(),Cn(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},Tn=function(){var e=Sn(),t=b.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=at(),e.sst=t),e.sex=t+1500*1e3,Cn(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}};function En(e,t){var n=t.beaconCollectionDomain,r=t.beaconDomain;if(n)return(/localhost(?::\d+)?$/.test(n)?`http://`:`https://`)+n;e||=`inferred`;var i=r||`litix.io`;return e.match(/^[a-z0-9]+$/)?`https://`+e+`.`+i:`https://img.litix.io/a.gif`}var Dn=kn({a:`env`,b:`beacon`,c:`custom`,d:`ad`,e:`event`,f:`experiment`,i:`internal`,m:`mux`,n:`response`,p:`player`,q:`request`,r:`retry`,s:`session`,t:`timestamp`,u:`viewer`,v:`video`,w:`page`,x:`view`,y:`sub`}),On=kn({ad:`ad`,af:`affiliate`,ag:`aggregate`,ap:`api`,al:`application`,ao:`audio`,ar:`architecture`,as:`asset`,au:`autoplay`,av:`average`,bi:`bitrate`,bn:`brand`,br:`break`,bw:`browser`,by:`bytes`,bz:`business`,ca:`cached`,cb:`cancel`,cc:`codec`,cd:`code`,cg:`category`,ch:`changed`,ci:`client`,ck:`clicked`,cl:`canceled`,cm:`cmcd`,cn:`config`,co:`count`,ce:`counter`,cp:`complete`,cq:`creator`,cr:`creative`,cs:`captions`,ct:`content`,cu:`current`,cv:`cumulative`,cx:`connection`,cz:`context`,da:`data`,dg:`downscaling`,dm:`domain`,dn:`cdn`,do:`downscale`,dr:`drm`,dp:`dropped`,du:`duration`,dv:`device`,dy:`dynamic`,eb:`enabled`,ec:`encoding`,ed:`edge`,en:`end`,eg:`engine`,em:`embed`,er:`error`,ep:`experiments`,es:`errorcode`,et:`errortext`,ee:`event`,ev:`events`,ex:`expires`,ez:`exception`,fa:`failed`,fi:`first`,fm:`family`,ft:`format`,fp:`fps`,fq:`frequency`,fr:`frame`,fs:`fullscreen`,ha:`has`,hb:`holdback`,he:`headers`,ho:`host`,hn:`hostname`,ht:`height`,id:`id`,ii:`init`,in:`instance`,ip:`ip`,is:`is`,ke:`key`,la:`language`,lb:`labeled`,le:`level`,li:`live`,ld:`loaded`,lo:`load`,lw:`low`,ls:`lists`,lt:`latency`,ma:`max`,md:`media`,me:`message`,mf:`manifest`,mi:`mime`,ml:`midroll`,mm:`min`,mn:`manufacturer`,mo:`model`,mp:`mode`,ms:`ms`,mx:`mux`,ne:`newest`,nm:`name`,no:`number`,on:`on`,or:`origin`,os:`os`,pa:`paused`,pb:`playback`,pd:`producer`,pe:`percentage`,pf:`played`,pg:`program`,ph:`playhead`,pi:`plugin`,pl:`preroll`,pn:`playing`,po:`poster`,pp:`pip`,pr:`preload`,ps:`position`,pt:`part`,pv:`previous`,py:`property`,px:`pop`,pz:`plan`,ra:`rate`,rd:`requested`,re:`rebuffer`,rf:`rendition`,rg:`range`,rm:`remote`,ro:`ratio`,rp:`response`,rq:`request`,rs:`requests`,sa:`sample`,sd:`skipped`,se:`session`,sh:`shift`,sk:`seek`,sm:`stream`,so:`source`,sq:`sequence`,sr:`series`,ss:`status`,st:`start`,su:`startup`,sv:`server`,sw:`software`,sy:`severity`,ta:`tag`,tc:`tech`,te:`text`,tg:`target`,th:`throughput`,ti:`time`,tl:`total`,to:`to`,tt:`title`,ty:`type`,ug:`upscaling`,un:`universal`,up:`upscale`,ur:`url`,us:`user`,va:`variant`,vd:`viewed`,vi:`video`,ve:`version`,vw:`view`,vr:`viewer`,wd:`width`,wa:`watch`,wt:`waiting`});function kn(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}function An(e){var t={},n={};return Object.keys(e).forEach(function(r){var i=!1;if(e.hasOwnProperty(r)&&e[r]!==void 0){var a=r.split(`_`),o=a[0],s=Dn[o];s||=(x.info("Data key word `"+a[0]+"` not expected in "+r),o+`_`),a.splice(1).forEach(function(e){e===`url`&&(i=!0),On[e]?s+=On[e]:Number.isInteger(Number(e))?s+=e:(x.info("Data key word `"+e+"` not expected in "+r),s+=`_`+e+`_`)}),i?n[s]=e[r]:t[s]=e[r]}}),Object.assign(t,n)}var jn=je(Me()),Mn=je(Ye()),Nn={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},Pn=56*1024,Fn=[`hb`,`requestcompleted`,`requestfailed`,`requestcanceled`],In=`https://img.litix.io`,Ln=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._beaconUrl=e||In,this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},Nn,t)};Ln.prototype.queueEvent=function(e,t){var n=Object.assign({},t);return this._eventQueue.length<=this._options.maxQueueLength||e===`eventrateexceeded`?(this._eventQueue.push(n),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):!1},Ln.prototype.flushEvents=function(){if(arguments.length>0&&arguments[0]!==void 0&&arguments[0]&&this._eventQueue.length===1){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()},Ln.prototype.destroy=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),jn.default.clearTimeout(this._sendTimeout)},Ln.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],An({mux_view_message:`event queue truncated`}));var n=this._createPayload(t);zn(this._beaconUrl,n,!0,function(){})},Ln.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var n=this._createPayload(t),r=b.now();zn(this._beaconUrl,n,!1,function(n,i){i?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,x.info(`Error sending beacon: `+i)):e._failureCount=0,e._roundTripTime=b.now()-r,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},Ln.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=2**(this._failureCount-1);return e*=Math.random(),(1+e)*this._options.baseTimeBetweenBeacons},Ln.prototype._startBeaconSending=function(){var e=this;jn.default.clearTimeout(this._sendTimeout),!this.destroyed&&(this._sendTimeout=jn.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},Ln.prototype._createPayload=function(e){var t=this,n={transmission_timestamp:Math.round(b.now())};this._roundTripTime&&(n.rtt_ms=Math.round(this._roundTripTime));var r,i,a,o=function(){r=JSON.stringify({metadata:n,events:i||e}),a=r.length/1024},s=function(){return a<=t._options.maxPayloadKBSize};return o(),s()||(x.info(`Payload size is too big (`+a+` kb). Removing unnecessary events.`),i=e.filter(function(e){return Fn.indexOf(e.e)===-1}),o()),s()||(x.info(`Payload size still too big (`+a+` kb). Cropping fields..`),i.forEach(function(e){for(var t in e){var n=e[t],r=50*1024;typeof n==`string`&&n.length>r&&(e[t]=n.substring(0,r))}}),o()),r};var Rn=typeof Mn.default.exitPictureInPicture==`function`?function(e){return e.length<=Pn}:function(e){return!1},zn=function(e,t,n,r){if(n&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t)){r();return}if(jn.default.fetch){jn.default.fetch(e,{method:`POST`,body:t,headers:{"Content-Type":`text/plain`},keepalive:Rn(t)}).then(function(e){return r(null,e.ok?null:`Error`)}).catch(function(e){return r(null,e)});return}if(jn.default.XMLHttpRequest){var i=new jn.default.XMLHttpRequest;i.onreadystatechange=function(){if(i.readyState===4)return r(null,i.status===200?void 0:`error`)},i.open(`POST`,e),i.setRequestHeader(`Content-Type`,`text/plain`),i.send(t);return}r()},Bn=Ln,Vn=[`env_key`,`view_id`,`view_sequence_number`,`player_sequence_number`,`beacon_domain`,`player_playhead_time`,`viewer_time`,`mux_api_version`,`event`,`video_id`,`player_instance_id`,`player_error_code`,`player_error_message`,`player_error_context`,`player_error_severity`,`player_error_business_exception`,`view_playing_time_ms_cumulative`,`ad_playing_time_ms_cumulative`],Hn=[`adplay`,`adplaying`,`adpause`,`adfirstquartile`,`admidpoint`,`adthirdquartile`,`adended`,`adresponse`,`adrequest`],Un=[`ad_id`,`ad_creative_id`,`ad_universal_id`],Wn=[`viewstart`,`error`,`ended`,`viewend`],Gn=600*1e3,Kn=function(){function e(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};C(this,e);var i,a,o,s,c,l,u;w(this,`mux`,void 0),w(this,`envKey`,void 0),w(this,`options`,void 0),w(this,`eventQueue`,void 0),w(this,`sampleRate`,void 0),w(this,`disableCookies`,void 0),w(this,`respectDoNotTrack`,void 0),w(this,`previousBeaconData`,void 0),w(this,`lastEventTime`,void 0),w(this,`rateLimited`,void 0),w(this,`pageLevelData`,void 0),w(this,`viewerData`,void 0),this.mux=t,this.envKey=n,this.options=r,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new Bn(En(this.envKey,this.options)),this.sampleRate=this.options.sampleRate??1,this.disableCookies=this.options.disableCookies??!1,this.respectDoNotTrack=this.options.respectDoNotTrack??!1,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:this.options.platform?.name,viewer_application_version:this.options.platform?.version,viewer_application_engine:this.options.platform?.layout,viewer_device_name:this.options.platform?.product,viewer_device_category:``,viewer_device_manufacturer:this.options.platform?.manufacturer,viewer_os_family:(a=this.options.platform)==null||(i=a.os)==null?void 0:i.family,viewer_os_architecture:(s=this.options.platform)==null||(o=s.os)==null?void 0:o.architecture,viewer_os_version:(l=this.options.platform)==null||(c=l.os)==null?void 0:c.version,page_url:_n.default===null||_n.default===void 0||(u=_n.default.location)==null?void 0:u.href},this.viewerData=this.disableCookies?{}:wn()}return _t(e,[{key:`send`,value:function(e,t){if(!(!e||!(t!=null&&t.view_id))){if(this.respectDoNotTrack&&ht())return x.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||typeof t!=`object`)return x.error(`A data object was expected in send() but was not provided`);var n=this.disableCookies?{}:Tn(),r=Pt(Mt({},this.pageLevelData,t,n,this.viewerData),{event:e,env_key:this.envKey});r.user_id&&(r.viewer_user_id=r.user_id,delete r.user_id);var i=(r.mux_sample_number??0)>=this.sampleRate,a=An(this._deduplicateBeaconData(e,r));if(this.lastEventTime=this.mux.utils.now(),i)return x.info(`Not sending event due to sample rate restriction`,e,r,a);if(this.envKey||x.info(`Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL`,e,r,a),!this.rateLimited)if(x.info(`Sending event`,e,r,a),this.rateLimited=!this.eventQueue.queueEvent(e,a),this.mux.WINDOW_UNLOADING&&e===`viewend`)this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&e===`hb`)this.eventQueue.flushEvents(!0);else if(Wn.indexOf(e)>=0){if(e===`error`&&t.player_error_severity===`warning`)return;this.eventQueue.flushEvents()}if(this.rateLimited)return r.event=`eventrateexceeded`,a=An(r),this.eventQueue.queueEvent(r.event,a),x.error(`Beaconing disabled due to rate limit.`)}}}},{key:`destroy`,value:function(){this.eventQueue.destroy(!1)}},{key:`_deduplicateBeaconData`,value:function(e,t){var n=this,r={},i=t.view_id;if(i===`-1`||e===`viewstart`||e===`viewend`||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=Gn)r=Mt({},t),i&&(this.previousBeaconData=r),i&&e===`viewend`&&(this.previousBeaconData=null);else{var a=e.indexOf(`request`)===0;Object.entries(t).forEach(function(t){var i=tt(t,2),o=i[0],s=i[1];n.previousBeaconData&&(s!==n.previousBeaconData[o]||Vn.indexOf(o)>-1||n.objectHasChanged(a,o,s,n.previousBeaconData[o])||n.eventRequiresKey(e,o))&&(r[o]=s,n.previousBeaconData[o]=s)})}return r}},{key:`objectHasChanged`,value:function(e,t,n,r){return!e||t.indexOf(`request_`)!==0?!1:t===`request_response_headers`||typeof n!=`object`||typeof r!=`object`?!0:Object.keys(n||{}).length!==Object.keys(r||{}).length}},{key:`eventRequiresKey`,value:function(e,t){return!!(e===`renditionchange`&&t.indexOf(`video_source_`)===0||Un.includes(t)&&Hn.includes(e)||e===`playbackmodechange`&&t.indexOf(`player_playback_mode`)===0)}}]),e}(),qn=function e(t){C(this,e);var n=0,r=0,i=0,a=0,o=0,s=0,c=0;t.on(`requestcompleted`,function(e,s){var c=s.request_start,l=s.request_response_start,u=s.request_response_end,d=s.request_bytes_loaded;a++;var f,p;if(l?(f=l-(c??0),p=(u??0)-l):p=(u??0)-(c??0),p>0&&d&&d>0){var m=d/p*8e3;o++,r+=d,i+=p,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,m),t.data.view_average_request_throughput=r/i*8e3,t.data.view_request_count=a,f>0&&(n+=f,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,f),t.data.view_average_request_latency=n/o)}}),t.on(`requestfailed`,function(e,n){a++,s++,t.data.view_request_count=a,t.data.view_request_failed_count=s}),t.on(`requestcanceled`,function(e,n){a++,c++,t.data.view_request_count=a,t.data.view_request_canceled_count=c})},Jn=3600*1e3,Yn=function e(t){var n=this;C(this,e),w(this,`_lastEventTime`,void 0),t.on(`before*`,function(e,r){var i=r.viewer_time,a=b.now(),o=n._lastEventTime;if(n._lastEventTime=a,o&&a-o>Jn){var s=Object.keys(t.data).reduce(function(e,n){return n.indexOf(`video_`)===0?Object.assign(e,w({},n,t.data[n])):e},{});t.mux.log.info(`Received event after at least an hour inactivity, creating a new view`);var c=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:i},s)),t.playbackHeartbeat._playheadShouldBeProgressing=c,t.playbackHeartbeat._playheadShouldBeProgressing&&e.type!==`play`&&e.type!==`adbreakstart`&&(t.emit(`play`,{viewer_time:i}),e.type!==`playing`&&t.emit(`playing`,{viewer_time:i}))}})},Xn=function e(t){C(this,e);var n=function(e){var n=Qn(e),r=$n(e);if(n!=null&&!Zn(n,a)&&o<=r){a=n,o=r;var i={video_cdn:n};t.emit(`cdnchange`,i)}},r=null,i=null,a=null,o=0;t.on(`viewinit`,function(){r=null,i=null,a=null,o=0}),t.on(`beforecdnchange`,function(e,t){var n=t?.video_cdn;n&&(t.video_previous_cdn===void 0||t.video_previous_cdn===null)&&(Zn(n,i)?t.video_previous_cdn=r??void 0:(t.video_previous_cdn=i??void 0,r=i,i=n))}),t.on(`requestcompleted`,function(e,t){n(t)})};function Zn(e,t){return e?.toLowerCase()===t?.toLowerCase()}function Qn(e){var t;return e!=null&&e.request_type&&(e.request_type===`media`||e.request_type===`video`)&&(t=e.request_response_headers)!=null&&t[`x-cdn`]?e.request_response_headers[`x-cdn`]:e!=null&&e.video_cdn?e.video_cdn:null}function $n(e){return e!=null&&e.request_start?e.request_start:e!=null&&e.viewer_time?e.viewer_time:Date.now()}var er=Xn,tr=function(e){try{return JSON.parse(e),!0}catch{return!1}},nr=function e(t){var n=this;C(this,e),w(this,`_emittingAutomaticEvent`,!1),w(this,`_hasInitialized`,!1),w(this,`_currentMode`,`standard`),t.on(`viewstart`,function(){n._hasInitialized||(n._hasInitialized=!0,n._currentMode=t.data.player_playback_mode||`standard`,n._emittingAutomaticEvent=!0,t.emit(`playbackmodechange`,{player_playback_mode:n._currentMode,player_playback_mode_data:`{}`}),n._emittingAutomaticEvent=!1)}),t.on(`viewend`,function(){n._hasInitialized=!1}),t.on(`playbackmodechange`,function(e,r){n._emittingAutomaticEvent||(r.player_playback_mode_data?tr(r.player_playback_mode_data)||(t.mux.log.warn(`Invalid JSON string for player_playback_mode_data`),r.player_playback_mode_data=`{}`):r.player_playback_mode_data=`{}`,t.data.player_playback_mode_data=r.player_playback_mode_data,t.data.player_playback_mode=r.player_playback_mode,n._currentMode=r.player_playback_mode)})},rr=function(){function e(t){C(this,e),w(this,`pm`,void 0),w(this,`_currentRangeStart`,void 0),w(this,`_lastPlayheadTime`,void 0),this.pm=t,this._currentRangeStart=null,this._lastPlayheadTime=null,t.on(`playbackheartbeat`,this._updatePlaybackRange.bind(this)),t.on(`playbackheartbeatend`,this._endPlaybackRange.bind(this))}return _t(e,[{key:`_updateLastRangeEnd`,value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var t=this.pm.data.player_playhead_time||0;e[e.length-1][1]=t}}},{key:`_updatePlaybackRange`,value:function(){var e,t=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&(e=this.pm.adTracker)!=null&&e.isAdBreak&&this._lastPlayheadTime!==null&&t<this._lastPlayheadTime)){if(this._lastPlayheadTime!==null&&this._currentRangeStart!==null&&Math.abs(t-this._lastPlayheadTime)>1e3){var n=this.pm.data.video_playback_ranges;n&&n.length>0&&(n[n.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}if(this._currentRangeStart===null){var r=this.pm.data.video_playback_ranges||[];r.length>0&&r[r.length-1][1]===t?this._currentRangeStart=r[r.length-1][0]:(this._currentRangeStart=t,r.push([t,t])),this.pm.data.video_playback_ranges=r}else this._updateLastRangeEnd();this._lastPlayheadTime=t}}},{key:`_endPlaybackRange`,value:function(){this._currentRangeStart!==null&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),e}(),ir=Object.freeze({CELLULAR:`cellular`,WIFI:`wifi`,WIRED:`wired`,OTHER:`other`,NO_CONNECTION:`no_connection`,UNKNOWN:`unknown`}),ar=function(e){if(!e)return ir.UNKNOWN;switch(e){case`cellular`:case`wimax`:return ir.CELLULAR;case`wifi`:return ir.WIFI;case`ethernet`:return ir.WIRED;case`none`:return ir.NO_CONNECTION;case`bluetooth`:case`other`:return ir.OTHER;case`unknown`:return ir.UNKNOWN;default:return ir.OTHER}},or=function(e){return typeof e==`object`&&`connection`in e&&typeof e.connection==`object`},sr=je(Me()),cr=function(){function e(t){var n=this;C(this,e),w(this,`pm`,void 0),w(this,`lastType`,void 0),w(this,`lastLowDataMode`,void 0),this.pm=t,this.pm.one(`viewinit`,function(){var t,r=n.emit.bind(n);r(),sr.default.addEventListener(`online`,r),sr.default.addEventListener(`offline`,r),(t=e.connection)==null||t.addEventListener(`change`,r),n.pm.on(`destroy`,function(){var t;(t=e.connection)==null||t.removeEventListener(`change`,r),sr.default.removeEventListener(`online`,r),sr.default.removeEventListener(`offline`,r)})})}return _t(e,[{key:`type`,get:function(){var t;return sr.default.navigator?.onLine===!1?ir.NO_CONNECTION:(t=e.connection)!=null&&t.type?ar(e.connection.type):ir.UNKNOWN}},{key:`lowDataMode`,get:function(){return e.connection?.saveData}},{key:`emit`,value:function(){var e=this.type,t=this.lowDataMode;e===this.lastType&&t===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=t,this.pm.emit(`networkchange`,Mt({viewer_connection_type:e},t!==void 0&&{viewer_connection_low_data_mode:t})))}}],[{key:`connection`,get:function(){return or(sr.default.navigator)?sr.default.navigator.connection:null}}]),e}(),lr=`viewstart.ended.loadstart.pause.play.playing.ratechange.waiting.adplay.adpause.adended.aderror.adplaying.adrequest.adresponse.adbreakstart.adbreakend.adfirstquartile.admidpoint.adthirdquartile.rebufferstart.rebufferend.seeked.error.hb.requestcompleted.requestfailed.requestcanceled.renditionchange.networkchange.cdnchange.playbackmodechange`.split(`.`),ur=new Set([`requestcompleted`,`requestfailed`,`requestcanceled`]),dr=function(e){St(n,e);var t=Dt(n);function n(e,r,i){C(this,n);var a=t.call(this);w(S(a),`pageLoadEndTime`,void 0),w(S(a),`pageLoadInitTime`,void 0),w(S(a),`_destroyed`,void 0),w(S(a),`_heartBeatTimeout`,void 0),w(S(a),`adTracker`,void 0),w(S(a),`dashjs`,void 0),w(S(a),`data`,void 0),w(S(a),`disablePlayheadRebufferTracking`,void 0),w(S(a),`disableRebufferTracking`,void 0),w(S(a),`disableAdPlaybackRangeFiltering`,void 0),w(S(a),`errorTracker`,void 0),w(S(a),`errorTranslator`,void 0),w(S(a),`emitTranslator`,void 0),w(S(a),`getAdData`,void 0),w(S(a),`getPlayheadTime`,void 0),w(S(a),`getStateData`,void 0),w(S(a),`stateDataTranslator`,void 0),w(S(a),`hlsjs`,void 0),w(S(a),`id`,void 0),w(S(a),`longResumeTracker`,void 0),w(S(a),`minimumRebufferDuration`,void 0),w(S(a),`mux`,void 0),w(S(a),`playbackEventDispatcher`,void 0),w(S(a),`playbackHeartbeat`,void 0),w(S(a),`playbackHeartbeatTime`,void 0),w(S(a),`playheadTime`,void 0),w(S(a),`seekingTracker`,void 0),w(S(a),`sustainedRebufferThreshold`,void 0),w(S(a),`watchTimeTracker`,void 0),w(S(a),`currentFragmentPDT`,void 0),w(S(a),`currentFragmentStart`,void 0),a.pageLoadInitTime=jt.navigationStart(),a.pageLoadEndTime=jt.domContentLoadedEventEnd(),a.mux=e,a.id=r,i!=null&&i.beaconDomain&&a.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),i=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:`litix.io`,sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(e){return e},emitTranslator:function(){return[...arguments]},stateDataTranslator:function(e){return e}},i),i.data=i.data||{},i.data.property_key&&(i.data.env_key=i.data.property_key,delete i.data.property_key),x.level=i.debug?pt.DEBUG:pt.WARN,a.getPlayheadTime=i.getPlayheadTime,a.getStateData=i.getStateData||function(){return{}},a.getAdData=i.getAdData||function(){},a.minimumRebufferDuration=i.minimumRebufferDuration,a.sustainedRebufferThreshold=i.sustainedRebufferThreshold,a.playbackHeartbeatTime=i.playbackHeartbeatTime,a.disableRebufferTracking=i.disableRebufferTracking,a.disableRebufferTracking&&a.mux.log.warn(`Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.`),a.disablePlayheadRebufferTracking=i.disablePlayheadRebufferTracking,a.disableAdPlaybackRangeFiltering=i.disableAdPlaybackRangeFiltering,a.errorTranslator=i.errorTranslator,a.emitTranslator=i.emitTranslator,a.stateDataTranslator=i.stateDataTranslator,a.playbackEventDispatcher=new Kn(e,i.data.env_key,i),a.data={player_instance_id:at(),mux_sample_rate:i.sampleRate,beacon_domain:i.beaconCollectionDomain||i.beaconDomain},a.data.view_sequence_number=1,a.data.player_sequence_number=1;var o=function(){this.data.view_start===void 0&&(this.data.view_start=this.mux.utils.now(),this.emit(`viewstart`),this.emit(`renditionchange`))}.bind(S(a));if(a.on(`viewinit`,function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one(`play`,o),this.one(`adbreakstart`,o)}),a.on(`videochange`,function(e,t){this._resetView(t)}),a.on(`programchange`,function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),o(),this.emit(`play`),this.emit(`playing`)}),a.on(`fragmentchange`,function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),a.on(`destroy`,a.destroy),typeof window<`u`&&typeof window.addEventListener==`function`&&typeof window.removeEventListener==`function`){var s=function(){var e=a.data.view_start!==void 0;a.mux.WINDOW_HIDDEN=document.visibilityState===`hidden`,e&&a.mux.WINDOW_HIDDEN&&(a.data.player_is_paused||a.emit(`hb`))};window.addEventListener(`visibilitychange`,s,!1);var c=function(e){e.persisted||a.destroy()};window.addEventListener(`pagehide`,c,!1),a.on(`destroy`,function(){window.removeEventListener(`visibilitychange`,s),window.removeEventListener(`pagehide`,c)})}return a.on(`playerready`,function(e,t){Object.assign(this.data,t)}),lr.forEach(function(e){a.on(e,function(t,n){e.indexOf(`ad`)!==0&&this._updateStateData(),Object.assign(this.data,n),this._sanitizeData()}),a.on(`after`+e,function(){(e!==`error`||this.errorTracker.viewErrored)&&this.send(e)})}),a.on(`viewend`,function(e,t){Object.assign(a.data,t)}),a.one(`playerready`,function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send(`playerready`),delete this.data.player_startup_time,delete this.data.page_load_time}),a.longResumeTracker=new Yn(S(a)),a.errorTracker=new tn(S(a)),new gn(S(a)),a.seekingTracker=new fn(S(a)),a.playheadTime=new an(S(a)),a.playbackHeartbeat=new en(S(a)),new un(S(a)),a.watchTimeTracker=new nn(S(a)),new rn(S(a)),new rr(S(a)),a.adTracker=new hn(S(a)),new cn(S(a)),new sn(S(a)),new ln(S(a)),new qn(S(a)),new er(S(a)),new nr(S(a)),new cr(S(a)),i.hlsjs&&a.addHLSJS(i),i.dashjs&&a.addDashJS(i),a.emit(`viewinit`,i.data),a}return _t(n,[{key:`emit`,value:function(e,t){var r,i=Object.assign({viewer_time:this.mux.utils.now()},t),a=[e,i];if(this.emitTranslator)try{a=this.emitTranslator(e,i)}catch(e){this.mux.log.warn(`Exception in emit translator callback.`,e)}a!=null&&a.length&&(r=bt(vt(n.prototype),`emit`,this)).call.apply(r,[this].concat(ft(a)))}},{key:`destroy`,value:function(){this._destroyed||(this._destroyed=!0,this.data.view_start!==void 0&&(this.emit(`viewend`),this.send(`viewend`)),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:`send`,value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(t.video_source_is_live===void 0&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||[`player_program_time`,`player_manifest_newest_program_time`,`player_live_edge_program_time`,`player_program_time`,`video_holdback`,`video_part_holdback`,`video_target_duration`,`video_part_target_duration`].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var n=tt(kt(t.video_source_url),2),r=n[0];t.video_source_domain=n[1],t.video_source_hostname=r}delete t.ad_request_id,t.video_playback_ranges&&(t.video_playback_range=JSON.stringify(t.video_playback_ranges.filter(function(e){return e[0]!==e[1]}).map(function(e){return`${e[0]}:${e[1]}`})),delete t.video_playback_ranges),this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,ur.has(e)||this._restartHeartBeat(),e===`viewend`&&delete this.data.view_id}}},{key:`_resetView`,value:function(e){this.emit(`viewend`),this.send(`viewend`),this.emit(`viewinit`,e)}},{key:`_updateStateData`,value:function(){var e,t=this.getStateData();if(typeof this.stateDataTranslator==`function`)try{t=this.stateDataTranslator(t)}catch(e){this.mux.log.warn(`Exception in stateDataTranslator translator callback.`,e)}(e=this.data)!=null&&e.video_cdn&&t!=null&&t.video_cdn&&(t.video_cdn,t=wt(t,[`video_cdn`])),Object.assign(this.data,t),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:`_sanitizeData`,value:function(){var e=this;[`player_width`,`player_height`,`video_source_width`,`video_source_height`,`player_playhead_time`,`video_source_bitrate`].forEach(function(t){var n=parseInt(e.data[t],10);e.data[t]=isNaN(n)?void 0:n}),[`player_source_url`,`video_source_url`].forEach(function(t){if(e.data[t]){var n=e.data[t].toLowerCase();(n.indexOf(`data:`)===0||n.indexOf(`blob:`)===0)&&(e.data[t]=`MSE style URL`)}})}},{key:`_resetVideoData`,value:function(){var e=this;Object.keys(this.data).forEach(function(t){t.indexOf(`video_`)===0&&delete e.data[t]})}},{key:`_resetViewData`,value:function(){var e=this;Object.keys(this.data).forEach(function(t){t.indexOf(`view_`)===0&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:`_resetErrorData`,value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:`_initializeViewData`,value:function(){var e=this,t=this.data.view_id=at(),n=function(){t===e.data.view_id&&T(e.data,`player_view_count`,1)};this.data.player_is_paused?this.one(`play`,n):n()}},{key:`_restartHeartBeat`,value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit(`hb`)},1e4)}},{key:`addHLSJS`,value:function(e){if(!e.hlsjs){this.mux.log.warn(`You must pass a valid hlsjs instance in order to track it.`);return}if(this.hlsjs){this.mux.log.warn(`An instance of HLS.js is already being monitored for this player.`);return}this.hlsjs=e.hlsjs,Ut(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)}},{key:`removeHLSJS`,value:function(){this.hlsjs&&=(Wt(this.hlsjs),void 0)}},{key:`addDashJS`,value:function(e){if(!e.dashjs){this.mux.log.warn(`You must pass a valid dashjs instance in order to track it.`);return}if(this.dashjs){this.mux.log.warn(`An instance of Dash.js is already being monitored for this player.`);return}this.dashjs=e.dashjs,Yt(this.mux,this.id,e.dashjs)}},{key:`removeDashJS`,value:function(){this.dashjs&&=(Xt(this.dashjs),void 0)}}]),n}(Qt),fr=je(Ye());function pr(){return fr.default&&!!(fr.default.fullscreenElement||fr.default.webkitFullscreenElement||fr.default.mozFullScreenElement||fr.default.msFullscreenElement)}var mr=[`loadstart`,`pause`,`play`,`playing`,`seeking`,`seeked`,`timeupdate`,`ratechange`,`stalled`,`waiting`,`error`,`ended`],hr={1:`MEDIA_ERR_ABORTED`,2:`MEDIA_ERR_NETWORK`,3:`MEDIA_ERR_DECODE`,4:`MEDIA_ERR_SRC_NOT_SUPPORTED`};function gr(e,t,n){var r=tt(ct(t),3),i=r[0],a=r[1],o=r[2],s=e.log,c=e.utils.getComputedStyle,l=e.utils.secondsToMs,u={automaticErrorTracking:!0};if(i){if(o!==`video`&&o!==`audio`)return s.error("The element of `"+a+"` was not a media element.")}else return s.error("No element was found with the `"+a+"` query selector.");i.mux&&(i.mux.destroy(),delete i.mux,s.warn(`Already monitoring this video element, replacing existing event listeners`)),n=Object.assign(u,n,{getPlayheadTime:function(){return l(i.currentTime)},getStateData:function(){var e,t,n=(e=this).getPlayheadTime?.call(e)||l(i.currentTime),r=this.hlsjs&&this.hlsjs.url,a=this.dashjs&&typeof this.dashjs.getSource==`function`&&this.dashjs.getSource(),o={player_is_paused:i.paused,player_width:parseInt(c(i,`width`)),player_height:parseInt(c(i,`height`)),player_autoplay_on:i.autoplay,player_preload_on:i.preload,player_language_code:i.lang,player_is_fullscreen:pr(),video_poster_url:i.poster,video_source_url:r||a||i.currentSrc,video_source_duration:l(i.duration),video_source_height:i.videoHeight,video_source_width:i.videoWidth,view_dropped_frame_count:i==null||(t=i.getVideoPlaybackQuality)==null?void 0:t.call(i).droppedVideoFrames};if(i.getStartDate&&n>0){var s=i.getStartDate();if(s&&typeof s.getTime==`function`&&s.getTime()){var u=s.getTime();o.player_program_time=u+n,i.seekable.length>0&&(o.player_live_edge_program_time=u+i.seekable.end(i.seekable.length-1))}}return o}}),n.data=Object.assign({player_software:`HTML5 Video Element`,player_mux_plugin_name:`VideoElementMonitor`,player_mux_plugin_version:e.VERSION},n.data),i.mux=i.mux||{},i.mux.deleted=!1,i.mux.emit=function(t,n){e.emit(a,t,n)},i.mux.updateData=function(e){i.mux.emit(`hb`,e)};var d=function(){s.error(`The monitor for this video element has already been destroyed.`)};i.mux.destroy=function(){Object.keys(i.mux.listeners).forEach(function(e){i.removeEventListener(e,i.mux.listeners[e],!1)}),delete i.mux.listeners,i.mux.fullscreenChangeListener&&(document.removeEventListener(`fullscreenchange`,i.mux.fullscreenChangeListener,!1),delete i.mux.fullscreenChangeListener),i.mux.destroy=d,i.mux.swapElement=d,i.mux.emit=d,i.mux.addHLSJS=d,i.mux.addDashJS=d,i.mux.removeHLSJS=d,i.mux.removeDashJS=d,i.mux.updateData=d,i.mux.setEmitTranslator=d,i.mux.setStateDataTranslator=d,i.mux.setGetPlayheadTime=d,i.mux.deleted=!0,e.emit(a,`destroy`)},i.mux.swapElement=function(t){var n=tt(ct(t),3),r=n[0],a=n[1],o=n[2];if(r){if(o!==`video`&&o!==`audio`)return e.log.error("The element of `"+a+"` was not a media element.")}else return e.log.error("No element was found with the `"+a+"` query selector.");r.muxId=i.muxId,delete i.muxId,r.mux=r.mux||{},r.mux.listeners=Object.assign({},i.mux.listeners),delete i.mux.listeners,Object.keys(r.mux.listeners).forEach(function(e){i.removeEventListener(e,r.mux.listeners[e],!1),r.addEventListener(e,r.mux.listeners[e],!1)}),r.mux.fullscreenChangeListener=i.mux.fullscreenChangeListener,delete i.mux.fullscreenChangeListener,r.mux.swapElement=i.mux.swapElement,r.mux.destroy=i.mux.destroy,delete i.mux,i=r},i.mux.addHLSJS=function(t){e.addHLSJS(a,t)},i.mux.addDashJS=function(t){e.addDashJS(a,t)},i.mux.removeHLSJS=function(){e.removeHLSJS(a)},i.mux.removeDashJS=function(){e.removeDashJS(a)},i.mux.setEmitTranslator=function(t){e.setEmitTranslator(a,t)},i.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(a,t)},i.mux.setGetPlayheadTime=function(t){t||=n.getPlayheadTime,e.setGetPlayheadTime(a,t)},e.init(a,n),e.emit(a,`playerready`),i.paused||(e.emit(a,`play`),i.readyState>2&&e.emit(a,`playing`)),i.mux.listeners={},mr.forEach(function(t){t===`error`&&!n.automaticErrorTracking||(i.mux.listeners[t]=function(){var n={};if(t===`error`){if(!i.error||i.error.code===1)return;n.player_error_code=i.error.code,n.player_error_message=hr[i.error.code]||i.error.message}e.emit(a,t,n)},i.addEventListener(t,i.mux.listeners[t],!1))}),i.mux.listeners.enterpictureinpicture=function(){e.emit(a,`playbackmodechange`,{player_playback_mode:`pip`,player_playback_mode_data:`{}`})},i.mux.listeners.leavepictureinpicture=function(){var t=pr()?`fullscreen`:`standard`;e.emit(a,`playbackmodechange`,{player_playback_mode:t,player_playback_mode_data:`{}`})},i.addEventListener(`enterpictureinpicture`,i.mux.listeners.enterpictureinpicture,!1),i.addEventListener(`leavepictureinpicture`,i.mux.listeners.leavepictureinpicture,!1),i.mux.fullscreenChangeListener=function(){var t=pr(),n=document.fullscreenElement;if(t&&(n===i||n!=null&&n.contains(i)))e.emit(a,`playbackmodechange`,{player_playback_mode:`fullscreen`,player_playback_mode_data:`{}`});else if(!t){var r=document.pictureInPictureElement===i?`pip`:`standard`;e.emit(a,`playbackmodechange`,{player_playback_mode:r,player_playback_mode_data:`{}`})}},document.addEventListener(`fullscreenchange`,i.mux.fullscreenChangeListener,!1)}function _r(e,t,n,r){var i=r;if(e&&typeof e[t]==`function`)try{i=e[t].apply(e,n)}catch(e){x.info(`safeCall error`,e)}return i}var vr=je(Me()),yr;vr.default&&vr.default.WeakMap&&(yr=new WeakMap);function br(e,t){if(!e||!t||!vr.default||typeof vr.default.getComputedStyle!=`function`)return``;var n;return yr&&yr.has(e)&&(n=yr.get(e)),n||(n=vr.default.getComputedStyle(e,null),yr&&yr.set(e,n)),n.getPropertyValue(t)}function xr(e){return Math.floor(e*1e3)}var Sr={TARGET_DURATION:`#EXT-X-TARGETDURATION`,PART_INF:`#EXT-X-PART-INF`,SERVER_CONTROL:`#EXT-X-SERVER-CONTROL`,INF:`#EXTINF`,PROGRAM_DATE_TIME:`#EXT-X-PROGRAM-DATE-TIME`,VERSION:`#EXT-X-VERSION`,SESSION_DATA:`#EXT-X-SESSION-DATA`},Cr=function(e){return this.buffer=``,this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};Cr.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf(`
`);t>-1;t=this.buffer.indexOf(`
`))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},Cr.prototype.processLine=function(e){var t=Ar(e,e.indexOf(`:`)),n=t[0],r=t.length===2?Er(t[1]):void 0;if(n[0]!==`#`)this.currentUri.uri=n,this.manifest.segments.push(this.currentUri),this.manifest.targetDuration&&!(`duration`in this.currentUri)&&(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(n){case Sr.TARGET_DURATION:if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case Sr.PART_INF:wr(this.manifest,t),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case Sr.SERVER_CONTROL:wr(this.manifest,t),this.setHoldBack();break;case Sr.INF:r===0?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case Sr.PROGRAM_DATE_TIME:var i=r,a=new Date(i);this.manifest.dateTimeString||(this.manifest.dateTimeString=i,this.manifest.dateTimeObject=a),this.currentUri.dateTimeString=i,this.currentUri.dateTimeObject=a;break;case Sr.VERSION:wr(this.manifest,t);break;case Sr.SESSION_DATA:var o=Bt(jr(t[1]));Object.assign(this.manifest.sessionData,o)}},Cr.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,n=e.targetDuration,r=e.partTargetDuration;if(t){var i=`holdBack`,a=`partHoldBack`,o=n&&n*3,s=r&&r*2;n&&!t.hasOwnProperty(i)&&(t[i]=o),o&&t[i]<o&&(t[i]=o),r&&!t.hasOwnProperty(a)&&(t[a]=r*3),r&&t[a]<s&&(t[a]=s)}};var wr=function(e,t){var n=Tr(t[0].replace(`#EXT-X-`,``)),r;kr(t[1])?(r={},r=Object.assign(Or(t[1]),r)):r=Er(t[1]),e[n]=r},Tr=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},Er=function(e){if(e.toLowerCase()===`yes`||e.toLowerCase()===`no`)return e.toLowerCase()===`yes`;var t=e.indexOf(`:`)===-1?parseFloat(e):e;return isNaN(t)?e:t},Dr=function(e){var t={},n=e.split(`=`);if(n.length>1){var r=Tr(n[0]);t[r]=Er(n[1])}return t},Or=function(e){for(var t=e.split(`,`),n={},r=0;t.length>r;r++){var i=t[r],a=Dr(i);n=Object.assign(a,n)}return n},kr=function(e){return e.indexOf(`=`)>-1},Ar=function(e,t){return t===-1?[e]:[e.substring(0,t),e.substring(t+1)]},jr=function(e){var t={};if(e){var n=e.search(`,`);return[e.slice(0,n),e.slice(n+1)].forEach(function(e,n){for(var r=e.replace(/['"]+/g,``).split(`=`),i=0;i<r.length;i++)r[i]===`DATA-ID`&&(t[`DATA-ID`]=r[1-i]),r[i]===`VALUE`&&(t.VALUE=r[1-i])}),{data:t}}},Mr={safeCall:_r,safeIncrement:T,getComputedStyle:br,secondsToMs:xr,assign:Object.assign,headersStringToObject:Rt,cdnHeadersToRequestId:zt,extractHostnameAndDomain:kt,extractHostname:Ot,manifestParser:Cr,generateShortID:ot,generateUUID:at,now:b.now,findMediaElement:ct},Nr={PLAYER_READY:`playerready`,VIEW_INIT:`viewinit`,VIDEO_CHANGE:`videochange`,PLAY:`play`,PAUSE:`pause`,PLAYING:`playing`,TIME_UPDATE:`timeupdate`,SEEKING:`seeking`,SEEKED:`seeked`,REBUFFER_START:`rebufferstart`,REBUFFER_END:`rebufferend`,ERROR:`error`,ENDED:`ended`,RENDITION_CHANGE:`renditionchange`,ORIENTATION_CHANGE:`orientationchange`,PLAYBACK_MODE_CHANGE:`playbackmodechange`,NETWORK_CHANGE:`networkchange`,AD_REQUEST:`adrequest`,AD_RESPONSE:`adresponse`,AD_BREAK_START:`adbreakstart`,AD_PLAY:`adplay`,AD_PLAYING:`adplaying`,AD_PAUSE:`adpause`,AD_FIRST_QUARTILE:`adfirstquartile`,AD_MID_POINT:`admidpoint`,AD_THIRD_QUARTILE:`adthirdquartile`,AD_ENDED:`adended`,AD_BREAK_END:`adbreakend`,AD_ERROR:`aderror`,REQUEST_COMPLETED:`requestcompleted`,REQUEST_FAILED:`requestfailed`,REQUEST_CANCELLED:`requestcanceled`,HEARTBEAT:`hb`,DESTROY:`destroy`},Pr=`mux-embed`,Fr=`5.18.1`,Ir=`2.1`,E={},Lr=function(e){var t=arguments;typeof e==`string`?Lr.hasOwnProperty(e)?nt.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),Lr[e].apply(null,t)},0):x.warn("`"+e+"` is an unknown task"):typeof e==`function`?nt.default.setTimeout(function(){e(Lr)},0):x.warn("`"+e+"` is invalid.")},Rr={loaded:b.now(),NAME:Pr,VERSION:Fr,API_VERSION:Ir,PLAYER_TRACKED:!1,monitor:function(e,t){return gr(Lr,e,t)},destroyMonitor:function(e){var t=tt(ct(e),1)[0];t&&t.mux&&typeof t.mux.destroy==`function`?t.mux.destroy():x.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var n=st(e);E[n]?E[n].addHLSJS(t):x.error("A monitor for `"+n+"` has not been initialized.")},addDashJS:function(e,t){var n=st(e);E[n]?E[n].addDashJS(t):x.error("A monitor for `"+n+"` has not been initialized.")},removeHLSJS:function(e){var t=st(e);E[t]?E[t].removeHLSJS():x.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=st(e);E[t]?E[t].removeDashJS():x.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){ht()&&t&&t.respectDoNotTrack&&x.info(`The browser's Do Not Track flag is enabled - Mux beaconing is disabled.`);var n=st(e);E[n]=new dr(Lr,n,t)},emit:function(e,t,n){var r=st(e);E[r]?(E[r].emit(t,n),t===`destroy`&&delete E[r]):x.error("A monitor for `"+r+"` has not been initialized.")},updateData:function(e,t){var n=st(e);E[n]?E[n].emit(`hb`,t):x.error("A monitor for `"+n+"` has not been initialized.")},setEmitTranslator:function(e,t){var n=st(e);E[n]?E[n].emitTranslator=t:x.error("A monitor for `"+n+"` has not been initialized.")},setStateDataTranslator:function(e,t){var n=st(e);E[n]?E[n].stateDataTranslator=t:x.error("A monitor for `"+n+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var n=st(e);E[n]?E[n].getPlayheadTime=t:x.error("A monitor for `"+n+"` has not been initialized.")},checkDoNotTrack:ht,log:x,utils:Mr,events:Nr,WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(Lr,Rr),nt.default!==void 0&&typeof nt.default.addEventListener==`function`&&nt.default.addEventListener(`pagehide`,function(e){e.persisted||(Lr.WINDOW_UNLOADING=!0)},!1);var zr=Lr,D=ve,O={VIDEO:`video`,THUMBNAIL:`thumbnail`,STORYBOARD:`storyboard`,DRM:`drm`},k={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},Br=e=>e===O.VIDEO?`playback`:e,Vr=class e extends Error{constructor(t,n=e.MEDIA_ERR_CUSTOM,r,i){super(t),this.name=`MediaError`,this.code=n,this.context=i,this.fatal=r??(n>=e.MEDIA_ERR_NETWORK&&n<=e.MEDIA_ERR_ENCRYPTED),this.message||=e.defaultMessages[this.code]??``}};Vr.MEDIA_ERR_ABORTED=1,Vr.MEDIA_ERR_NETWORK=2,Vr.MEDIA_ERR_DECODE=3,Vr.MEDIA_ERR_SRC_NOT_SUPPORTED=4,Vr.MEDIA_ERR_ENCRYPTED=5,Vr.MEDIA_ERR_CUSTOM=100,Vr.defaultMessages={1:`You aborted the media playback`,2:`A network error caused the media download to fail.`,3:`A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.`,4:`An unsupported error occurred. The server or network failed, or your browser does not support this format.`,5:`The media is encrypted and there are no keys to decrypt it.`};var A=Vr,Hr=e=>e==null,Ur=(e,t)=>Hr(t)?!1:e in t,Wr={ANY:`any`,MUTED:`muted`},j={ON_DEMAND:`on-demand`,LIVE:`live`,UNKNOWN:`unknown`},Gr={MSE:`mse`,NATIVE:`native`},Kr={HEADER:`header`,QUERY:`query`,NONE:`none`},qr=Object.values(Kr),Jr={M3U8:`application/vnd.apple.mpegurl`,MP4:`video/mp4`},Yr={HLS:Jr.M3U8};[...Object.values(Jr)];var Xr={upTo720p:`720p`,upTo1080p:`1080p`,upTo1440p:`1440p`,upTo2160p:`2160p`},Zr={noLessThan480p:`480p`,noLessThan540p:`540p`,noLessThan720p:`720p`,noLessThan1080p:`1080p`,noLessThan1440p:`1440p`,noLessThan2160p:`2160p`},Qr={DESCENDING:`desc`},$r={code:`en`},M=(e,t,n,r,i=e)=>{i.addEventListener(t,n,r),e.addEventListener(`teardown`,()=>{i.removeEventListener(t,n)},{once:!0})};function ei(e,t,n){t&&n>t&&(n=t);for(let t=0;t<e.length;t++)if(e.start(t)<=n&&e.end(t)>=n)return!0;return!1}var ti=e=>{let t=e.indexOf(`?`);return t<0?[e]:[e.slice(0,t),e.slice(t)]},ni=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return Ur(e,Yr)?Yr[e]:t}return ai(e)},ri=e=>e===`VOD`?j.ON_DEMAND:j.LIVE,ii=e=>e===`EVENT`?1/0:e===`VOD`?NaN:0,ai=e=>{let{src:t}=e;if(!t)return``;let n=``;try{n=ci(t).pathname}catch{console.error(`Invalid url when trying to infer mime type`,t)}let r=n.lastIndexOf(`.`);if(r<0)return ui(e)?Jr.M3U8:``;let i=n.slice(r+1).toUpperCase();return Ur(i,Jr)?Jr[i]:``},oi=e=>{try{return new URL(e),!1}catch{return!0}},si=e=>e.split(`
`).find((e,t,n)=>t>0&&n[t-1].startsWith(`#EXT-X-STREAM-INF`)),ci=(e,t)=>{if(!oi(e))return new URL(e);let n=(window==null?void 0:window.location)?.href,r=t??n;return t&&oi(t.toString())&&(r=new URL(t,n)),new URL(e,r)},li=`mux.com`,ui=({src:e,customDomain:t=li})=>{let n;try{n=new URL(`${e}`)}catch{return!1}let r=n.protocol===`https:`,i=n.hostname===`stream.${t}`.toLowerCase(),a=n.pathname.split(`/`),o=a.length===2,s=!(a!=null&&a[1].includes(`.`));return r&&i&&o&&s},di=e=>{let t=(e??``).split(`.`)[1];if(t)try{let e=t.replace(/-/g,`+`).replace(/_/g,`/`),n=decodeURIComponent(atob(e).split(``).map(function(e){return`%`+(`00`+e.charCodeAt(0).toString(16)).slice(-2)}).join(``));return JSON.parse(n)}catch{return}},fi=({exp:e},t=Date.now())=>!e||e*1e3<t,pi=({sub:e},t)=>e!==t,mi=({aud:e},t)=>!e,hi=({aud:e},t)=>e!==t,gi=`en`;function N(e,t=!0){var n;return new _i(t&&(n=$r?.[e])!=null?n:e,t?$r.code:gi)}var _i=class{constructor(e,t=(e=>(e=$r)??gi)()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,n)=>e[n]??``)}toString(){return this.message}},vi=Object.values(Wr),yi=e=>typeof e==`boolean`||typeof e==`string`&&vi.includes(e),bi=(e,t,n)=>{let{autoplay:r}=e,i=!1,a=!1,o=yi(r)?r:!!r,s=()=>{i||M(t,`playing`,()=>{i=!0},{once:!0})};if(s(),M(t,`loadstart`,()=>{i=!1,s(),xi(t,o)},{once:!0}),M(t,`loadstart`,()=>{n||(a=e.streamType&&e.streamType!==j.UNKNOWN?e.streamType===j.LIVE:!Number.isFinite(t.duration)),xi(t,o)},{once:!0}),n&&n.once(D.Events.LEVEL_LOADED,(t,n)=>{a=e.streamType&&e.streamType!==j.UNKNOWN?e.streamType===j.LIVE:n.details.live??!1}),!o){let r=()=>{!a||Number.isFinite(e.startTime)||(n!=null&&n.liveSyncPosition?t.currentTime=n.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};n&&M(t,`play`,()=>{t.preload===`metadata`?n.once(D.Events.LEVEL_UPDATED,r):r()},{once:!0})}return e=>{i||(o=yi(e)?e:!!e,xi(t,o))}},xi=(e,t)=>{if(!t)return;let n=e.muted,r=()=>e.muted=n;switch(t){case Wr.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(r)});break;case Wr.MUTED:e.muted=!0,e.play().catch(r);break;default:e.play().catch(()=>{});break}},Si=({preload:e,src:t},n,r)=>{let i=e=>{e!=null&&[``,`none`,`metadata`,`auto`].includes(e)?n.setAttribute(`preload`,e):n.removeAttribute(`preload`)};if(!r)return i(e),i;let a=!1,o=!1,s=r.config.maxBufferLength,c=r.config.maxBufferSize,l=e=>{i(e);let t=e??n.preload;o||t===`none`||(t===`metadata`?(r.config.maxBufferLength=1,r.config.maxBufferSize=1):(r.config.maxBufferLength=s,r.config.maxBufferSize=c),u())},u=()=>{!a&&t&&(a=!0,r.loadSource(t))};return M(n,`play`,()=>{o=!0,r.config.maxBufferLength=s,r.config.maxBufferSize=c,u()},{once:!0}),l(e),l},Ci=(e,t,n)=>{let{minPreloadSegments:r}=e;if(r==null||r<=0||!n)return;let i=0,a=!1,o=t.playbackRate||1,s=()=>{t.playbackRate!==0&&(o=t.playbackRate,t.playbackRate=0)};t.playbackRate=0,M(t,`ratechange`,s);let c=(e,{frag:n})=>{a||n.type!==`main`||(i++,i>=r&&(a=!0,t.removeEventListener(`ratechange`,s),t.playbackRate=o))};n.on(D.Events.FRAG_BUFFERED,c),t.addEventListener(`teardown`,()=>{a||(a=!0,n.off(D.Events.FRAG_BUFFERED,c),t.playbackRate=o)},{once:!0})},wi=(e,t,n)=>{let{initialEstimateSegments:r}=e;if(r==null||r<=0||!n)return;let i=0;n.on(D.Events.FRAG_BUFFERED,(e,{frag:t})=>{t.type===`main`&&(i++,i<r&&n.abrController.resetEstimator(n.config.abrEwmaDefaultEstimate))})};function Ti(e,t){var n;if(!(`videoTracks`in e))return;let r=new WeakMap;t.on(D.Events.MANIFEST_PARSED,function(t,n){c();let i=e.addVideoTrack(`main`);i.selected=!0;for(let[e,t]of n.levels.entries()){let n=i.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);r.set(t,`${e}`),n.id=`${e}`}}),t.on(D.Events.AUDIO_TRACKS_UPDATED,function(t,n){s();for(let t of n.audioTracks){let n=t.default?`main`:`alternative`,r=e.addAudioTrack(n,t.name,t.lang);r.id=`${t.id}`,t.default&&(r.enabled=!0)}});let i=()=>{let n=+[...e.audioTracks].find(e=>e.enabled)?.id,r=t.audioTracks.map(e=>e.id);n!=t.audioTrack&&r.includes(n)&&(t.audioTrack=n)};e.audioTracks.addEventListener(`change`,i),t.on(D.Events.LEVELS_UPDATED,function(t,n){let i=e.videoTracks[e.videoTracks.selectedIndex??0];if(!i)return;let a=n.levels.map(e=>r.get(e));for(let t of e.videoRenditions)t.id&&!a.includes(t.id)&&i.removeRendition(t)});let a=e=>{let n=e.target.selectedIndex;n!=t.nextLevel&&(t.nextLevel=n)};(n=e.videoRenditions)==null||n.addEventListener(`change`,a);let o=()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)},s=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},c=()=>{o(),s()};t.once(D.Events.DESTROYING,()=>{var t,n;c(),(t=e.audioTracks)==null||t.removeEventListener(`change`,i),(n=e.videoRenditions)==null||n.removeEventListener(`change`,a)})}var Ei=e=>`time`in e?e.time:e.startTime;function Di(e,t){t.on(D.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(n,{tracks:r})=>{r.forEach(n=>{let r=n.subtitleTrack??n.closedCaptions,i=t.subtitleTracks.findIndex(({lang:e,name:t,type:i})=>e==r?.lang&&t===n.label&&i.toLowerCase()===n.kind),a=n._id??n.default?`default`:`${n.kind}${i}`;Oi(e,n.kind,n.label,r?.lang,a,n.default)})});let n=()=>{if(!t.subtitleTracks.length)return;let n=Array.from(e.textTracks).find(e=>e.id&&e.mode===`showing`&&[`subtitles`,`captions`].includes(e.kind));if(!n)return;let r=t.subtitleTracks[t.subtitleTrack],i=r?r.default?`default`:`${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`:void 0;(t.subtitleTrack<0||n?.id!==i)&&(t.subtitleTrack=t.subtitleTracks.findIndex(({lang:e,name:t,type:r,default:i})=>n.id===`default`&&i||e==n.language&&t===n.label&&r.toLowerCase()===n.kind)),n?.id===i&&n.cues&&Array.from(n.cues).forEach(e=>{n.addCue(e)})};e.textTracks.addEventListener(`change`,n),t.on(D.Events.CUES_PARSED,(t,{track:n,cues:r})=>{let i=e.textTracks.getTrackById(n);if(!i)return;let a=i.mode===`disabled`;a&&(i.mode=`hidden`),r.forEach(e=>{var t;(t=i.cues)!=null&&t.getCueById(e.id)||i.addCue(e)}),a&&(i.mode=`disabled`)}),t.once(D.Events.DESTROYING,()=>{e.textTracks.removeEventListener(`change`,n),e.querySelectorAll(`track[data-removeondestroy]`).forEach(e=>{e.remove()})});let r=()=>{Array.from(e.textTracks).forEach(t=>{var n;if(![`subtitles`,`caption`].includes(t.kind)&&(t.label===`thumbnails`||t.kind===`chapters`)){if(!((n=t.cues)!=null&&n.length)){let n=`track`;t.kind&&(n+=`[kind="${t.kind}"]`),t.label&&(n+=`[label="${t.label}"]`);let r=e.querySelector(n),i=r?.getAttribute(`src`)??``;r?.removeAttribute(`src`),setTimeout(()=>{r?.setAttribute(`src`,i)},0)}t.mode!==`hidden`&&(t.mode=`hidden`)}})};t.once(D.Events.MANIFEST_LOADED,r),t.once(D.Events.MEDIA_ATTACHED,r)}function Oi(e,t,n,r,i,a){let o=document.createElement(`track`);return o.kind=t,o.label=n,r&&(o.srclang=r),i&&(o.id=i),a&&(o.default=!0),o.track.mode=[`subtitles`,`captions`].includes(t)?`disabled`:`hidden`,o.setAttribute(`data-removeondestroy`,``),e.append(o),o.track}function ki(e,t){Array.prototype.find.call(e.querySelectorAll(`track`),e=>e.track===t)?.remove()}function Ai(e,t,n){return Array.from(e.querySelectorAll(`track`)).find(e=>e.track.label===t&&e.track.kind===n)?.track}async function ji(e,t,n,r){let i=Ai(e,n,r);return i||(i=Oi(e,r,n),i.mode=`hidden`,await new Promise(e=>setTimeout(()=>e(void 0),0))),i.mode!==`hidden`&&(i.mode=`hidden`),[...t].sort((e,t)=>Ei(t)-Ei(e)).forEach(t=>{let n=t.value,a=Ei(t);if(`endTime`in t&&t.endTime!=null)i?.addCue(new VTTCue(a,t.endTime,r===`chapters`?n:JSON.stringify(n??null)));else{let t=Array.prototype.findIndex.call(i?.cues,e=>e.startTime>=a),o=i?.cues?.[t],s=o?o.startTime:Number.isFinite(e.duration)?e.duration:2**53-1,c=i?.cues?.[t-1];c&&(c.endTime=a),i?.addCue(new VTTCue(a,s,r===`chapters`?n:JSON.stringify(n??null)))}}),e.textTracks.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),i}var Mi=`cuepoints`,Ni=Object.freeze({label:Mi});async function Pi(e,t,n=Ni){return ji(e,t,n.label,`metadata`)}var Fi=e=>({time:e.startTime,value:JSON.parse(e.text)});function Ii(e,t={label:Mi}){let n=Ai(e,t.label,`metadata`);return n!=null&&n.cues?Array.from(n.cues,e=>Fi(e)):[]}function Li(e,t={label:Mi}){var n;let r=Ai(e,t.label,`metadata`);if(!((n=r?.activeCues)!=null&&n.length))return;if(r.activeCues.length===1)return Fi(r.activeCues[0]);let{currentTime:i}=e;return Fi(Array.prototype.find.call(r.activeCues??[],({startTime:e,endTime:t})=>e<=i&&t>i)||r.activeCues[0])}async function Ri(e,t=Ni){return new Promise(n=>{M(e,`loadstart`,async()=>{let r=await Pi(e,[],t);M(e,`cuechange`,()=>{let t=Li(e);if(t){let n=new CustomEvent(`cuepointchange`,{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(n)}},{},r),n(r)})})}var zi=`chapters`,Bi=Object.freeze({label:zi}),Vi=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function Hi(e,t,n=Bi){return ji(e,t,n.label,`chapters`)}function Ui(e,t={label:zi}){var n;let r=Ai(e,t.label,`chapters`);return(n=r?.cues)!=null&&n.length?Array.from(r.cues,e=>Vi(e)):[]}function Wi(e,t={label:zi}){var n;let r=Ai(e,t.label,`chapters`);if(!((n=r?.activeCues)!=null&&n.length))return;if(r.activeCues.length===1)return Vi(r.activeCues[0]);let{currentTime:i}=e;return Vi(Array.prototype.find.call(r.activeCues??[],({startTime:e,endTime:t})=>e<=i&&t>i)||r.activeCues[0])}async function Gi(e,t=Bi){return new Promise(n=>{M(e,`loadstart`,async()=>{let r=await Hi(e,[],t);M(e,`cuechange`,()=>{let t=Wi(e);if(t){let n=new CustomEvent(`chapterchange`,{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(n)}},{},r),n(r)})})}function Ki(e,t){if(t){let n=t.playingDate;if(n!=null)return new Date(n.getTime()-e.currentTime*1e3)}return typeof e.getStartDate==`function`?e.getStartDate():new Date(NaN)}function qi(e,t){if(t&&t.playingDate)return t.playingDate;if(typeof e.getStartDate==`function`){let t=e.getStartDate();return new Date(t.getTime()+e.currentTime*1e3)}return new Date(NaN)}var Ji={VIDEO:`v`,THUMBNAIL:`t`,STORYBOARD:`s`,DRM:`d`},Yi=e=>{if(e===O.VIDEO)return Ji.VIDEO;if(e===O.DRM)return Ji.DRM},Xi=(e,t)=>{var n;let r=Br(e),i=`${r}Token`;return(n=t.tokens)!=null&&n[r]?t.tokens?.[r]:Ur(i,t)?t[i]:void 0},Zi=(e,t,n,r,i=!1,a=!(e=>(e=globalThis.navigator)?.onLine)())=>{if(a){let n=N(`Your device appears to be offline`,i),r=A.MEDIA_ERR_NETWORK,a=new A(n,r,!1,void 0);return a.errorCategory=t,a.muxCode=k.NETWORK_OFFLINE,a.data=e,a}let o=`status`in e?e.status:e.code,s=Date.now(),c=A.MEDIA_ERR_NETWORK;if(o===200)return;let l=Br(t),u=Xi(t,n),d=Yi(t),[f]=ti(n.playbackId??``);if(!o||!f)return;let p=di(u);if(u&&!p){let n=new A(N(`The {tokenNamePrefix}-token provided is invalid or malformed.`,i).format({tokenNamePrefix:l}),c,!0,N(`Compact JWT string: {token}`,i).format({token:u}));return n.errorCategory=t,n.muxCode=k.NETWORK_TOKEN_MALFORMED,n.data=e,n}if(o>=500){let e=new A(``,c,r??!0);return e.errorCategory=t,e.muxCode=k.NETWORK_UNKNOWN_ERROR,e}if(o===403)if(p){if(fi(p,s)){let n={timeStyle:`medium`,dateStyle:`medium`},r=new A(N(`The video’s secured {tokenNamePrefix}-token has expired.`,i).format({tokenNamePrefix:l}),c,!0,N(`Expired at: {expiredDate}. Current time: {currentDate}.`,i).format({expiredDate:new Intl.DateTimeFormat(`en`,n).format(p.exp??0),currentDate:new Intl.DateTimeFormat(`en`,n).format(s)}));return r.errorCategory=t,r.muxCode=k.NETWORK_TOKEN_EXPIRED,r.data=e,r}if(pi(p,f)){let n=new A(N(`The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.`,i).format({tokenNamePrefix:l}),c,!0,N(`Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}`,i).format({tokenNamePrefix:l,playbackId:f,tokenPlaybackId:p.sub}));return n.errorCategory=t,n.muxCode=k.NETWORK_TOKEN_SUB_MISMATCH,n.data=e,n}if(mi(p,d)){let n=new A(N(`The {tokenNamePrefix}-token is formatted with incorrect information.`,i).format({tokenNamePrefix:l}),c,!0,N(`The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.`,i).format({tokenNamePrefix:l,expectedAud:d}));return n.errorCategory=t,n.muxCode=k.NETWORK_TOKEN_AUD_MISSING,n.data=e,n}if(hi(p,d)){let n=new A(N(`The {tokenNamePrefix}-token is formatted with incorrect information.`,i).format({tokenNamePrefix:l}),c,!0,N(`The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.`,i).format({tokenNamePrefix:l,expectedAud:d,aud:p.aud}));return n.errorCategory=t,n.muxCode=k.NETWORK_TOKEN_AUD_MISMATCH,n.data=e,n}}else{let n=N(`Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.`,i).format({tokenNamePrefix:l,category:t}),a=N(`Specified playback ID: {playbackId}`,i).format({playbackId:f}),o=new A(n,c,r??!0,a);return o.errorCategory=t,o.muxCode=k.NETWORK_TOKEN_MISSING,o.data=e,o}if(o===412){let a=N(`This playback-id may belong to a live stream that is not currently active or an asset that is not ready.`,i),o=N(`Specified playback ID: {playbackId}`,i).format({playbackId:f}),s=new A(a,c,r??!0,o);return s.errorCategory=t,s.muxCode=k.NETWORK_NOT_READY,s.streamType=n.streamType===j.LIVE?`live`:n.streamType===j.ON_DEMAND?`on-demand`:`unknown`,s.data=e,s}if(o===404){let n=N(`This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.`,i),a=N(`Specified playback ID: {playbackId}`,i).format({playbackId:f}),o=new A(n,c,r??!0,a);return o.errorCategory=t,o.muxCode=k.NETWORK_NOT_FOUND,o.data=e,o}if(o===400){let n=N(`The URL or playback-id was invalid. You may have used an invalid value as a playback-id.`),a=N(`Specified playback ID: {playbackId}`,i).format({playbackId:f}),o=new A(n,c,r??!0,a);return o.errorCategory=t,o.muxCode=k.NETWORK_INVALID_URL,o.data=e,o}let m=new A(``,c,r??!0);return m.errorCategory=t,m.muxCode=k.NETWORK_UNKNOWN_ERROR,m.data=e,m},Qi=D.DefaultConfig.capLevelController,$i={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400};function ea(e){return $i[e.toLowerCase().trim()]}var ta=class e extends Qi{constructor(e){super(e)}static setMaxAutoResolution(t,n){n?e.maxAutoResolution.set(t,n):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){let t=this.hls;return e.maxAutoResolution.get(t)??void 0}get levels(){return this.hls.levels??[]}getValidLevels(e){return this.levels.filter((t,n)=>this.isLevelAllowed(t)&&n<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),n=this.getMaxAutoResolution();if(!n)return super.getMaxLevel(e);let r=ea(n);if(!r)return super.getMaxLevel(e);let i=t.filter(e=>e.width*e.height<=r),a=i.findIndex(e=>e.width*e.height===r);if(a!==-1){let e=i[a];return t.findIndex(t=>t===e)}if(i.length===0)return 0;let o=i[i.length-1];return t.findIndex(e=>e===o)}getMaxLevel(t){if(this.getMaxAutoResolution()!==void 0)return this.getMaxLevelCapped(t);let n=super.getMaxLevel(t),r=this.getValidLevels(t);if(!r[n])return n;let i=Math.min(r[n].width,r[n].height),a=e.minMaxResolution;return i>=a?n:Qi.getMaxLevelByMediaSize(r,16/9*a,a)}};ta.minMaxResolution=720,ta.maxAutoResolution=new WeakMap;var na=ta,ra=`com.apple.fps.1_0`,ia=`application/vnd.apple.mpegurl`,aa=({mediaEl:e,getAppCertificate:t,getLicenseKey:n,saveAndDispatchError:r,drmTypeCb:i})=>{if(!window.WebKitMediaKeys||!(`onwebkitneedkey`in e)){console.error(`No WebKitMediaKeys. FairPlay may not be supported`);let t=new A(N(`Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.`),A.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=O.DRM,t.muxCode=k.ENCRYPTED_CDM_ERROR,r(e,t),()=>{}}let a=e,o=t(),s=null,c=e=>{(async()=>{try{a.webkitKeys||l();let t=await o;if(e.initData===null||t==null)return;u(oa(e.initData,t))}catch(e){console.error(`Could not start encrypted playback due to exception`,e),r(a,e)}})()},l=()=>{try{let e=new WebKitMediaKeys(ra);a.webkitSetMediaKeys(e),i()}catch{let e=new A(`Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.`,A.MEDIA_ERR_ENCRYPTED,!0);throw e.errorCategory=O.DRM,e.muxCode=k.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,e}},u=t=>{let i=a.webkitKeys.createSession(ia,t),o=async t=>{try{let e=t.message,r=await n(e);i.update(r)}catch(t){console.error(`Error on FairPlay session message`,t),r(e,t)}},c=t=>{let n=t.target.error;if(!n)return;console.error(`Internal Webkit Key Session Error - sysCode: ${n.systemCode} code: ${n.code}`);let i=new A(N(`The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.`),A.MEDIA_ERR_ENCRYPTED,!0);i.errorCategory=O.DRM,i.muxCode=k.ENCRYPTED_CDM_ERROR,r(e,i)},l=()=>{i.removeEventListener(`webkitkeymessage`,o),i.removeEventListener(`webkitkeyerror`,c),e.removeEventListener(`teardown`,l),`webkitCurrentPlaybackTargetIsWireless`in e&&e.removeEventListener(`webkitcurrentplaybacktargetiswirelesschanged`,l),s=null;try{i.close()}catch{}};`webkitCurrentPlaybackTargetIsWireless`in e&&e.addEventListener(`webkitcurrentplaybacktargetiswirelesschanged`,l,{once:!0}),i.addEventListener(`webkitkeymessage`,o),i.addEventListener(`webkitkeyerror`,c),e.addEventListener(`teardown`,l),s=l},d=()=>{e.removeEventListener(`webkitneedkey`,c),e.removeEventListener(`teardown`,d),s?.();try{a.webkitSetMediaKeys(null)}catch{}};return e.addEventListener(`webkitneedkey`,c),e.addEventListener(`teardown`,d,{once:!0}),d},oa=(e,t)=>{let n=ca(sa(e)),r=new Uint8Array(e),i=new Uint8Array(n),a=new Uint8Array(t),o=r.byteLength+4+a.byteLength+4+i.byteLength,s=new Uint8Array(o),c=0,l=e=>{s.set(e,c),c+=e.byteLength},u=e=>{let t=new DataView(s.buffer),n=e.byteLength;t.setUint32(c,n,!0),c+=4,l(e)};return l(r),u(i),u(a),s},sa=e=>new TextDecoder(`utf-16le`).decode(e).replace(`skd://`,``).slice(1);function ca(e){let t=new ArrayBuffer(e.length*2),n=new DataView(t);for(let t=0;t<e.length;t++)n.setUint16(t*2,e.charCodeAt(t),!0);return t}var la=({mediaEl:e,getAppCertificate:t,getLicenseKey:n,saveAndDispatchError:r,drmTypeCb:i,fallbackToWebkitFairplay:a})=>{let o=null,s=async t=>{try{let n=t.initDataType;if(n!==`skd`){console.error(`Received unexpected initialization data type "${n}"`);return}e.mediaKeys||await c(n);let r=t.initData;if(r==null){console.error(`Could not start encrypted playback due to missing initData in ${t.type} event`);return}await l(n,r)}catch(t){r(e,t);return}},c=async n=>{let a=await navigator.requestMediaKeySystemAccess(`com.apple.fps`,[{initDataTypes:[n],videoCapabilities:[{contentType:`application/vnd.apple.mpegurl`,robustness:``}],distinctiveIdentifier:`not-allowed`,persistentState:`not-allowed`,sessionTypes:[`temporary`]}]).then(e=>(i(),e)).catch(()=>{let t=new A(N(`Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.`),A.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory=O.DRM,t.muxCode=k.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,r(e,t)});if(!a)return;let o=await a.createMediaKeys();try{let e=await t();await o.setServerCertificate(e).catch(()=>{let e=new A(N(`Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.`),A.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory=O.DRM,e.muxCode=k.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(e)})}catch(t){r(e,t);return}await e.setMediaKeys(o)},l=async(t,i)=>{let s=e.mediaKeys.createSession(),c=async t=>{let i=t.message,a=await n(i);try{await s.update(a)}catch{let t=new A(N(`Failed to update DRM license. This may be an issue with the player or your protected content.`),A.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory=O.DRM,t.muxCode=k.ENCRYPTED_UPDATE_LICENSE_FAILED,r(e,t)}},l=()=>{let t=t=>{let n;t===`internal-error`?(n=new A(N(`The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.`),A.MEDIA_ERR_ENCRYPTED,!0),n.errorCategory=O.DRM,n.muxCode=k.ENCRYPTED_CDM_ERROR):(t===`output-restricted`||t===`output-downscaled`)&&(n=new A(N(`DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.`),A.MEDIA_ERR_ENCRYPTED,!1),n.errorCategory=O.DRM,n.muxCode=k.ENCRYPTED_OUTPUT_RESTRICTED),n&&r(e,n)};s.keyStatuses.forEach(e=>t(e))};s.addEventListener(`keystatuseschange`,l),s.addEventListener(`message`,c);let u=async()=>{s.removeEventListener(`keystatuseschange`,l),s.removeEventListener(`message`,c),`webkitCurrentPlaybackTargetIsWireless`in e&&e.removeEventListener(`webkitcurrentplaybacktargetiswirelesschanged`,u),e.removeEventListener(`teardown`,u),await s.close().catch(e=>{console.warn(`There was an error when closing EME session`,e)}),o=null};`webkitCurrentPlaybackTargetIsWireless`in e&&e.addEventListener(`webkitcurrentplaybacktargetiswirelesschanged`,u,{once:!0}),e.addEventListener(`teardown`,u,{once:!0}),o=u,await s.generateRequest(t,i).catch(async t=>{if(t.name===`NotSupportedError`&&`webkitCurrentPlaybackTargetIsWireless`in e&&e.webkitCurrentPlaybackTargetIsWireless)console.warn(`Failed to generate a DRM license request. Attempting to fallback to Webkit DRM`),a?.();else{let e=new A(N(`Failed to generate a DRM license request. This may be an issue with the player or your protected content.`),A.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory=O.DRM,e.muxCode=k.ENCRYPTED_GENERATE_REQUEST_FAILED,console.error(`Failed to generate license request`,t),Promise.reject(e)}})},u=async()=>{e.removeEventListener(`encrypted`,s),e.removeEventListener(`teardown`,u),o&&await o(),await e.setMediaKeys(null).catch(()=>{})};return e.addEventListener(`encrypted`,s),e.addEventListener(`teardown`,u,{once:!0}),u},ua={FAIRPLAY:`fairplay`,PLAYREADY:`playready`,WIDEVINE:`widevine`},da=e=>{if(e.includes(`fps`))return ua.FAIRPLAY;if(e.includes(`playready`))return ua.PLAYREADY;if(e.includes(`widevine`))return ua.WIDEVINE},fa=(e,t)=>{let n=si(e);if(!n)return Promise.reject(Error(`No media playlist URL found in multivariant playlist`));if(oi(n)&&!t)return Promise.reject(Error(`masterPlaylistUrl is required to resolve relative media playlist URL`));let r;try{r=ci(n,t)}catch(e){return Promise.reject(e)}return fetch(r).then(e=>e.status===200?e.text():Promise.reject(e))},pa=e=>{let t=e.split(`
`).filter(e=>e.startsWith(`#EXT-X-SESSION-DATA`));if(!t.length)return{};let n={};for(let e of t){let t=ha(e),r=t[`DATA-ID`];r&&(n[r]={...t})}return{sessionData:n}},ma=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;function ha(e){let t=[...e.matchAll(ma)];return Object.fromEntries(t.map(([,e,t])=>[e,t]))}var ga=e=>{let t=e.split(`
`),n=(t.find(e=>e.startsWith(`#EXT-X-PLAYLIST-TYPE`))??``).split(`:`)[1]?.trim(),r=ri(n),i=ii(n),a;if(r===j.LIVE){let e=t.find(e=>e.startsWith(`#EXT-X-PART-INF`));a=e?e.split(`:`)[1].split(`=`)[1]*2:(t.find(e=>e.startsWith(`#EXT-X-TARGETDURATION`))?.split(`:`)?.[1]??6)*3}return{streamType:r,targetLiveWindow:i,liveEdgeStartOffset:a}},_a=async(e,t)=>{if(t===Jr.MP4)return{streamType:j.ON_DEMAND,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===Jr.M3U8){let t=await fetch(e);if(!t.ok)return Promise.reject(t);let n=await t.text(),r=await fa(n,t.url);return{...pa(n),...ga(r)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},va=async(e,t,n=ni({src:e}))=>{let{streamType:r,targetLiveWindow:i,liveEdgeStartOffset:a,sessionData:o}=await _a(e,n),s=o?.[`com.apple.hls.chapters`];(s!=null&&s.URI||s!=null&&s.VALUE.toLocaleLowerCase().startsWith(`http`))&&ya(s.URI??s.VALUE,t),(P.get(t)??{}).liveEdgeStartOffset=a,(P.get(t)??{}).targetLiveWindow=i,t.dispatchEvent(new CustomEvent(`targetlivewindowchange`,{composed:!0,bubbles:!0})),(P.get(t)??{}).streamType=r,t.dispatchEvent(new CustomEvent(`streamtypechange`,{composed:!0,bubbles:!0}))},ya=async(e,t)=>{var n;try{let r=await fetch(e);if(!r.ok)throw Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let i=await r.json(),a={};if(!((n=i?.[0])!=null&&n.metadata))return;for(let e of i[0].metadata)e.key&&e.value&&(a[e.key]=e.value);(P.get(t)??{}).metadata=a;let o=new CustomEvent(`muxmetadata`);t.dispatchEvent(o)}catch(e){console.error(e)}},ba=e=>{var t;let n=e.type,r=ri(n),i=ii(n),a,o=!!((t=e.partList)!=null&&t.length);return r===j.LIVE&&(a=o?e.partTarget*2:e.targetduration*3),{streamType:r,targetLiveWindow:i,liveEdgeStartOffset:a,lowLatency:o}},xa=(e,t,n)=>{let{streamType:r,targetLiveWindow:i,liveEdgeStartOffset:a,lowLatency:o}=ba(e);if(r===j.LIVE){o?(n.config.backBufferLength=n.userConfig.backBufferLength??4,n.config.maxFragLookUpTolerance=n.userConfig.maxFragLookUpTolerance??.001,n.config.abrBandWidthUpFactor=n.userConfig.abrBandWidthUpFactor??n.config.abrBandWidthFactor):n.config.backBufferLength=n.userConfig.backBufferLength??8;let e=Object.freeze({get length(){return t.seekable.length},start(e){return t.seekable.start(e)},end(e){return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):n.liveSyncPosition??t.seekable.end(e)}});(P.get(t)??{}).seekable=e}(P.get(t)??{}).liveEdgeStartOffset=a,(P.get(t)??{}).targetLiveWindow=i,t.dispatchEvent(new CustomEvent(`targetlivewindowchange`,{composed:!0,bubbles:!0})),(P.get(t)??{}).streamType=r,t.dispatchEvent(new CustomEvent(`streamtypechange`,{composed:!0,bubbles:!0}))},Sa=(globalThis==null?void 0:globalThis.navigator)?.userAgent??``,Ca=(globalThis==null?void 0:globalThis.navigator)?.userAgentData?.platform??``,wa=Sa.toLowerCase().includes(`android`)||[`x11`,`android`].some(e=>Ca.toLowerCase().includes(e)),Ta=e=>/^((?!chrome|android).)*safari/i.test(Sa)&&!!e.canPlayType(`application/vnd.apple.mpegurl`),P=new WeakMap,Ea=`mux.com`,Da,Oa=(Da=D).isSupported?.call(Da),ka=e=>wa||!Ta(e),Aa=()=>{if(typeof window<`u`)return zr.utils.now()},ja=zr.utils.generateUUID,Ma=({playbackId:e,customDomain:t=Ea,maxResolution:n,minResolution:r,renditionOrder:i,programStartTime:a,programEndTime:o,assetStartTime:s,assetEndTime:c,playbackToken:l,tokens:{playback:u=l}={},extraSourceParams:d={}}={})=>{if(!e)return;let[f,p=``]=ti(e),m=new URL(`https://stream.${t}/${f}.m3u8${p}`);return u||m.searchParams.has(`token`)?(m.searchParams.forEach((e,t)=>{t!=`token`&&m.searchParams.delete(t)}),u&&m.searchParams.set(`token`,u)):(n&&m.searchParams.set(`max_resolution`,n),r&&(m.searchParams.set(`min_resolution`,r),n&&+n.slice(0,-1)<+r.slice(0,-1)&&console.error(`minResolution must be <= maxResolution`,`minResolution`,r,`maxResolution`,n)),i&&m.searchParams.set(`rendition_order`,i),a&&m.searchParams.set(`program_start_time`,`${a}`),o&&m.searchParams.set(`program_end_time`,`${o}`),s&&m.searchParams.set(`asset_start_time`,`${s}`),c&&m.searchParams.set(`asset_end_time`,`${c}`),Object.entries(d).forEach(([e,t])=>{t!=null&&m.searchParams.set(e,t)})),m.toString()},Na=e=>{if(!e)return;let[t]=e.split(`?`);return t||void 0},Pa=e=>{if(!e||!e.startsWith(`https://stream.`))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},Fa=e=>{var t,n;return(t=e?.metadata)!=null&&t.video_id?e.metadata.video_id:oo(e)&&(n=Na(e.playbackId)??Pa(e.src))!=null?n:e.src},Ia=e=>P.get(e)?.error,La=e=>P.get(e)?.metadata,Ra=e=>P.get(e)?.streamType??j.UNKNOWN,za=e=>P.get(e)?.targetLiveWindow??NaN,Ba=e=>P.get(e)?.seekable??e.seekable,Va=e=>{let t=P.get(e)?.liveEdgeStartOffset;if(typeof t!=`number`)return NaN;let n=Ba(e);return n.length?n.end(n.length-1)-t:NaN},Ha=e=>P.get(e)?.coreReference,Ua=.034,Wa=(e,t,n=Ua)=>Math.abs(e-t)<=n,Ga=(e,t,n=Ua)=>e>t||Wa(e,t,n),Ka=(e,t=Ua)=>e.paused&&Ga(e.currentTime,e.duration,t),qa=(e,t)=>{if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?t.levels?.[t.currentLevel]?.details:t.levels.find(e=>!!e.details)?.details;if(!n||n.live)return;let{fragments:r}=n;if(!(r!=null&&r.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let i=r[r.length-1];if(e.currentTime<=i.start)return!1;let a=i.start+i.duration/2,o=e.buffered.start(e.buffered.length-1),s=e.buffered.end(e.buffered.length-1);return a>o&&a<s},Ja=(e,t)=>e.ended||e.loop?e.ended:t&&qa(e,t)?!0:Ka(e),Ya=(e,t,n)=>{Xa(t,n,e);let{metadata:r={}}=e,{view_session_id:i=ja()}=r,a=Fa(e);r.view_session_id=i,r.video_id=a,e.metadata=r,e.drmTypeCb=e=>{var n;(n=t.mux)==null||n.emit(`hb`,{view_drm_type:e})},e.fallbackToWebkitFairplay=async()=>{let n=!t.paused,r=t.currentTime;e.useWebkitFairplay=!0;let i=e.muxDataKeepSession;e.muxDataKeepSession=!0,Ya(e,t,P.get(t)?.coreReference),e.muxDataKeepSession=i,e.useWebkitFairplay=!1,n&&await t.play().then(()=>{t.currentTime=r}).catch(()=>{}),t.currentTime=r},P.set(t,{retryCount:0});let o=Qa(e,t),s=Si(e,t,o);e!=null&&e.muxDataKeepSession&&t!=null&&t.mux&&!t.mux.deleted?o&&t.mux.addHLSJS({hlsjs:o,Hls:o?D:void 0}):co(e,t,o),lo(e,t,o),Ri(t),Gi(t);let c=bi(e,t,o);Ci(e,t,o),wi(e,t,o);let l={engine:o,setAutoplay:c,setPreload:s},u=P.get(t);return u&&(u.coreReference=l),l},Xa=(e,t,n)=>{let r=t?.engine;e!=null&&e.mux&&!e.mux.deleted&&(n!=null&&n.muxDataKeepSession?r&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),r&&(r.detachMedia(),r.destroy()),e&&(e.hasAttribute(`src`)&&(e.removeAttribute(`src`),e.load()),e.removeEventListener(`error`,fo),e.removeEventListener(`error`,mo),e.removeEventListener(`durationchange`,uo),P.delete(e),e.dispatchEvent(new Event(`teardown`)))};function Za(e,t){let n=ni(e);if(n!==Jr.M3U8)return!0;let r=!n||(t.canPlayType(n)??!0),{preferPlayback:i}=e,a=i===Gr.MSE,o=i===Gr.NATIVE,s=Oa&&(a||ka(t));return r&&(o||!s)}var Qa=(e,t)=>{let{debug:n,streamType:r,startTime:i=-1,metadata:a,preferCmcd:o,_hlsConfig:s={},maxAutoResolution:c,initialBandwidthEstimateKbps:l}=e,u=ni(e)===Jr.M3U8,d=Za(e,t);if(u&&!d&&Oa){let u={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...l==null?{}:{abrEwmaDefaultEstimate:l*1e3}},d=$a(r),f=eo(e),p=[Kr.QUERY,Kr.HEADER].includes(o)?{useHeaders:o===Kr.HEADER,sessionId:a?.view_session_id,contentId:a?.video_id}:void 0,m=so(e,s),h=new D({debug:n,startPosition:i,cmcd:p,xhrSetup:(e,t)=>{if(o&&o!==Kr.QUERY)return;let n=ci(t);if(!n.searchParams.has(`CMCD`))return;let r=(n.searchParams.get(`CMCD`)?.split(`,`)??[]).filter(e=>e.startsWith(`sid`)||e.startsWith(`cid`)).join(`,`);n.searchParams.set(`CMCD`,r),e.open(`GET`,n)},...u,...m,...d,...f,...s});return m.capLevelController===na&&c!==void 0&&na.setMaxAutoResolution(h,c),h.on(D.Events.MANIFEST_PARSED,async function(e,n){let r=n.sessionData?.[`com.apple.hls.chapters`];(r!=null&&r.URI||r!=null&&r.VALUE.toLocaleLowerCase().startsWith(`http`))&&ya(r?.URI??r?.VALUE,t)}),h}},$a=e=>e===j.LIVE?{backBufferLength:8}:{},eo=e=>{let{tokens:{drm:t}={},playbackId:n,drmTypeCb:r}=e,i=Na(n);return!t||!i?{}:{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:io(e,`fairplay`),serverCertificateUrl:ao(e,`fairplay`)},"com.widevine.alpha":{licenseUrl:io(e,`widevine`)},"com.microsoft.playready":{licenseUrl:io(e,`playready`)}},requestMediaKeySystemAccessFunc:(e,t)=>(e===`com.widevine.alpha`&&(t=[...t.map(e=>{let t=e.videoCapabilities?.map(e=>({...e,robustness:`HW_SECURE_ALL`}));return{...e,videoCapabilities:t}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let n=da(e);return r?.(n),t}))}},to=async e=>{let t=await fetch(e);return t.status===200?await t.arrayBuffer():Promise.reject(t)},no=async(e,t)=>{let n=await fetch(t,{method:`POST`,headers:{"Content-type":`application/octet-stream`},body:e});if(n.status!==200)return Promise.reject(n);let r=await n.arrayBuffer();return new Uint8Array(r)},ro=(e,t)=>{let n={mediaEl:t,getAppCertificate:()=>to(ao(e,`fairplay`)).catch(t=>{if(t instanceof Response){let n=Zi(t,O.DRM,e);return console.error(`mediaError`,n?.message,n?.context),n?Promise.reject(n):Promise.reject(Error(`Unexpected error in app cert request`))}return Promise.reject(t)}),getLicenseKey:t=>no(t,io(e,`fairplay`)).catch(t=>{if(t instanceof Response){let n=Zi(t,O.DRM,e);return console.error(`mediaError`,n?.message,n?.context),n?Promise.reject(n):Promise.reject(Error(`Unexpected error in license key request`))}return Promise.reject(t)}),saveAndDispatchError:po,drmTypeCb:()=>{var t;(t=e.drmTypeCb)==null||t.call(e,ua.FAIRPLAY)}};if(e.useWebkitFairplay)aa(n);else{let t=la({fallbackToWebkitFairplay:async()=>{var n;await t(),(n=e.fallbackToWebkitFairplay)==null||n.call(e)},...n})}},io=({playbackId:e,tokens:{drm:t}={},customDomain:n=Ea},r)=>{let i=Na(e);return`https://license.${n.toLocaleLowerCase().endsWith(Ea)?n:Ea}/license/${r}/${i}?token=${t}`},ao=({playbackId:e,tokens:{drm:t}={},customDomain:n=Ea},r)=>{let i=Na(e);return`https://license.${n.toLocaleLowerCase().endsWith(Ea)?n:Ea}/appcert/${r}/${i}?token=${t}`},oo=({playbackId:e,src:t,customDomain:n})=>{if(e)return!0;if(typeof t!=`string`)return!1;let r=window==null?void 0:window.location.href,i=new URL(t,r).hostname.toLocaleLowerCase();return i.includes(Ea)||!!n&&i.includes(n.toLocaleLowerCase())},so=(e,t)=>{let n={};return n.capLevelToPlayerSize=e.capRenditionToPlayerSize,n.capLevelToPlayerSize==null?(n.capLevelController=na,n.capLevelToPlayerSize=!0):n.capLevelController=ye,n},co=(e,t,n)=>{let{envKey:r,disableTracking:i,muxDataSDK:a=zr,muxDataSDKOptions:o={}}=e,s=oo(e);if(!i&&(r||s)){let{playerInitTime:i,playerSoftwareName:s,playerSoftwareVersion:c,beaconCollectionDomain:l,debug:u,disableCookies:d}=e,f={...e.metadata,video_title:e?.metadata?.video_title||void 0};a.monitor(t,{debug:u,beaconCollectionDomain:l,hlsjs:n,Hls:n?D:void 0,automaticErrorTracking:!1,errorTranslator:t=>typeof t.player_error_code==`string`?!1:typeof e.errorTranslator==`function`?e.errorTranslator(t):t,disableCookies:d,...o,data:{...r?{env_key:r}:{},player_software_name:s,player_software:s,player_software_version:c,player_init_time:i,...f}})}},lo=(e,t,n)=>{var r;let i=Za(e,t),{src:a,customDomain:o=Ea}=e,s=()=>{t.ended||e.disablePseudoEnded||!Ja(t,n)||(qa(t,n)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event(`ended`)))},c,l,u=()=>{let e=Ba(t),n,r;e.length>0&&(n=e.start(0),r=e.end(0)),(l!==r||c!==n)&&t.dispatchEvent(new CustomEvent(`seekablechange`,{composed:!0})),c=n,l=r};if(M(t,`durationchange`,u),t&&i){let n=ni(e);if(typeof a==`string`){if(a.endsWith(`.mp4`)&&a.includes(o)){let e=Pa(a);ya(new URL(`https://stream.${o}/${e}/metadata.json`).toString(),t)}let i=()=>{if(Ra(t)!==j.LIVE||Number.isFinite(t.duration))return;let e=setInterval(u,1e3);t.addEventListener(`teardown`,()=>{clearInterval(e)},{once:!0}),M(t,`durationchange`,()=>{Number.isFinite(t.duration)&&clearInterval(e)})},s=async()=>va(a,t,n).then(i).catch(n=>{if(n instanceof Response){let r=Zi(n,O.VIDEO,e);if(r){po(t,r);return}}else n instanceof Error});if(t.preload===`none`){let e=()=>{s(),t.removeEventListener(`loadedmetadata`,n)},n=()=>{s(),t.removeEventListener(`play`,e)};M(t,`play`,e,{once:!0}),M(t,`loadedmetadata`,n,{once:!0})}else s();(r=e.tokens)!=null&&r.drm?ro(e,t):M(t,`encrypted`,()=>{let e=new A(N(`Attempting to play DRM-protected content without providing a DRM token.`),A.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory=O.DRM,e.muxCode=k.ENCRYPTED_MISSING_TOKEN,po(t,e)},{once:!0}),t.setAttribute(`src`,a),e.startTime&&((P.get(t)??{}).startTime=e.startTime,t.addEventListener(`durationchange`,uo,{once:!0}))}else t.removeAttribute(`src`);t.addEventListener(`error`,fo),t.addEventListener(`error`,mo),t.addEventListener(`emptied`,()=>{t.querySelectorAll(`track[data-removeondestroy]`).forEach(e=>{e.remove()})},{once:!0}),M(t,`pause`,s),M(t,`seeked`,s),M(t,`play`,()=>{t.ended||Ga(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else n&&a?(n.once(D.Events.LEVEL_LOADED,(e,r)=>{xa(r.details,t,n),u(),Ra(t)===j.LIVE&&!Number.isFinite(t.duration)&&(n.on(D.Events.LEVEL_UPDATED,u),M(t,`durationchange`,()=>{Number.isFinite(t.duration)&&n.off(D.Events.LEVELS_UPDATED,u)}))}),n.on(D.Events.ERROR,(r,i)=>{let a=ho(i,e);if(a.muxCode===k.NETWORK_NOT_READY){let e=P.get(t)??{},r=e.retryCount??0;if(r<6){let o=r===0?5e3:6e4,s=new A(`Retrying in ${o/1e3} seconds...`,a.code,a.fatal);Object.assign(s,a),po(t,s);let c=setTimeout(()=>{e.retryCount=r+1,i.details===`manifestLoadError`&&i.url&&n.loadSource(i.url)},o);t.addEventListener(`teardown`,()=>clearTimeout(c),{once:!0});return}else{e.retryCount=0;let n=new A(`Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>`,a.code,a.fatal);Object.assign(n,a),po(t,n);return}}po(t,a)}),n.on(D.Events.MANIFEST_LOADED,()=>{let e=P.get(t);e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event(`emptied`)),t.dispatchEvent(new Event(`loadstart`)))}),t.addEventListener(`error`,mo),M(t,`waiting`,s),Ti(e,n),Di(t,n),n.attachMedia(t)):console.error(`It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.`)};function uo(e){let t=e.target,n=P.get(t)?.startTime;if(n&&ei(t.seekable,t.duration,n)){let e=t.preload===`auto`;e&&(t.preload=`none`),t.currentTime=n,e&&(t.preload=`auto`)}}async function fo(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(t!=null&&t.error))return;let{message:n,code:r}=t.error,i=new A(n,r);if(t.src&&r===A.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{(Ia(t)??t.error)?.code===A.MEDIA_ERR_SRC_NOT_SUPPORTED&&po(t,i)},500);return}if(t.src&&(r!==A.MEDIA_ERR_DECODE||r!==void 0))try{let{status:e}=await fetch(t.src);i.data={response:{code:e}}}catch{}po(t,i)}function po(e,t){t.fatal&&((P.get(e)??{}).error=t,e.dispatchEvent(new CustomEvent(`error`,{detail:t})))}function mo(e){var t;if(!(e instanceof CustomEvent)||!(e.detail instanceof A))return;let n=e.target,r=e.detail;!r||!r.fatal||((P.get(n)??{}).error=r,(t=n.mux)==null||t.emit(`error`,{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var ho=(e,t)=>{e.fatal?console.error(`getErrorFromHlsErrorData()`,e):t.debug&&console.warn(`getErrorFromHlsErrorData() (non-fatal)`,e);let n={[D.ErrorTypes.NETWORK_ERROR]:A.MEDIA_ERR_NETWORK,[D.ErrorTypes.MEDIA_ERROR]:A.MEDIA_ERR_DECODE,[D.ErrorTypes.KEY_SYSTEM_ERROR]:A.MEDIA_ERR_ENCRYPTED},r=e=>[D.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,D.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?A.MEDIA_ERR_NETWORK:n[e.type],i=e=>{if(e.type===D.ErrorTypes.KEY_SYSTEM_ERROR)return O.DRM;if(e.type===D.ErrorTypes.NETWORK_ERROR)return O.VIDEO},a,o=r(e);if(o===A.MEDIA_ERR_NETWORK&&e.response){let n=i(e)??O.VIDEO;a=Zi(e.response,n,t,e.fatal)??new A(``,o,e.fatal)}else o===A.MEDIA_ERR_ENCRYPTED?e.details===D.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?(a=new A(N(`Attempting to play DRM-protected content without providing a DRM token.`),A.MEDIA_ERR_ENCRYPTED,e.fatal),a.errorCategory=O.DRM,a.muxCode=k.ENCRYPTED_MISSING_TOKEN):e.details===D.ErrorDetails.KEY_SYSTEM_NO_ACCESS?(a=new A(N(`Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.`),A.MEDIA_ERR_ENCRYPTED,e.fatal),a.errorCategory=O.DRM,a.muxCode=k.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM):e.details===D.ErrorDetails.KEY_SYSTEM_NO_SESSION?(a=new A(N(`Failed to generate a DRM license request. This may be an issue with the player or your protected content.`),A.MEDIA_ERR_ENCRYPTED,!0),a.errorCategory=O.DRM,a.muxCode=k.ENCRYPTED_GENERATE_REQUEST_FAILED):e.details===D.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?(a=new A(N(`Failed to update DRM license. This may be an issue with the player or your protected content.`),A.MEDIA_ERR_ENCRYPTED,e.fatal),a.errorCategory=O.DRM,a.muxCode=k.ENCRYPTED_UPDATE_LICENSE_FAILED):e.details===D.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?(a=new A(N(`Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.`),A.MEDIA_ERR_ENCRYPTED,e.fatal),a.errorCategory=O.DRM,a.muxCode=k.ENCRYPTED_UPDATE_SERVER_CERT_FAILED):e.details===D.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?(a=new A(N(`The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.`),A.MEDIA_ERR_ENCRYPTED,e.fatal),a.errorCategory=O.DRM,a.muxCode=k.ENCRYPTED_CDM_ERROR):e.details===D.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?(a=new A(N(`DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.`),A.MEDIA_ERR_ENCRYPTED,!1),a.errorCategory=O.DRM,a.muxCode=k.ENCRYPTED_OUTPUT_RESTRICTED):(a=new A(e.error.message,A.MEDIA_ERR_ENCRYPTED,e.fatal),a.errorCategory=O.DRM,a.muxCode=k.ENCRYPTED_ERROR):a=new A(``,o,e.fatal);return a.context||=`${e.url?`url: ${e.url}
`:``}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:``}${e.reason?`failure reason: ${e.reason}
`:``}${e.level?`level: ${e.level}
`:``}${e.parent?`parent stream controller: ${e.parent}
`:``}${e.buffer?`buffer length: ${e.buffer}
`:``}${e.error?`error: ${e.error}
`:``}${e.event?`event: ${e.event}
`:``}${e.err?`error message: ${e.err?.message}
`:``}`,a.data=e,a},go=e=>{throw TypeError(e)},_o=(e,t,n)=>t.has(e)||go(`Cannot `+n),F=(e,t,n)=>(_o(e,t,`read from private field`),n?n.call(e):t.get(e)),vo=(e,t,n)=>t.has(e)?go(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),yo=(e,t,n,r)=>(_o(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),bo=(e,t,n)=>(_o(e,t,`access private method`),n),xo=(()=>{try{return`0.31.0`}catch{}return`UNKNOWN`})(),So=()=>xo,Co=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,I={BEACON_COLLECTION_DOMAIN:`beacon-collection-domain`,CUSTOM_DOMAIN:`custom-domain`,DEBUG:`debug`,DISABLE_TRACKING:`disable-tracking`,DISABLE_COOKIES:`disable-cookies`,DISABLE_PSEUDO_ENDED:`disable-pseudo-ended`,DRM_TOKEN:`drm-token`,PLAYBACK_TOKEN:`playback-token`,ENV_KEY:`env-key`,MAX_RESOLUTION:`max-resolution`,MIN_RESOLUTION:`min-resolution`,MAX_AUTO_RESOLUTION:`max-auto-resolution`,RENDITION_ORDER:`rendition-order`,PROGRAM_START_TIME:`program-start-time`,PROGRAM_END_TIME:`program-end-time`,ASSET_START_TIME:`asset-start-time`,ASSET_END_TIME:`asset-end-time`,METADATA_URL:`metadata-url`,PLAYBACK_ID:`playback-id`,PLAYER_SOFTWARE_NAME:`player-software-name`,PLAYER_SOFTWARE_VERSION:`player-software-version`,PLAYER_INIT_TIME:`player-init-time`,PREFER_CMCD:`prefer-cmcd`,PREFER_PLAYBACK:`prefer-playback`,START_TIME:`start-time`,STREAM_TYPE:`stream-type`,TARGET_LIVE_WINDOW:`target-live-window`,LIVE_EDGE_OFFSET:`live-edge-offset`,TYPE:`type`,LOGO:`logo`,CAP_RENDITION_TO_PLAYER_SIZE:`cap-rendition-to-player-size`,INITIAL_BANDWIDTH_ESTIMATE_KBPS:`initial-bandwidth-estimate-kbps`,INITIAL_ESTIMATE_SEGMENTS:`initial-estimate-segments`,MIN_PRELOAD_SEGMENTS:`min-preload-segments`},wo=Object.values(I),To=So(),Eo=`mux-video`,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo=class extends be{constructor(){super(),vo(this,Lo),vo(this,Do),vo(this,Oo),vo(this,ko,{}),vo(this,Ao,{}),vo(this,jo),vo(this,Mo),vo(this,No),vo(this,Po),vo(this,Fo,``),vo(this,Io,e=>{let t=La(this.nativeEl),n=this.metadata??{};this.metadata={...t,...n},t?.[`com.mux.video.branding`]===`mux-free-plan`&&(yo(this,Fo,`default`),this.updateLogo())}),vo(this,zo),yo(this,Oo,Aa())}static get NAME(){return Eo}static get VERSION(){return To}static get observedAttributes(){return[...wo,...be.observedAttributes??[]]}static getLogoHTML(e){return!e||e===`false`?``:e===`default`?Co:`<img part="logo" src="${e}" />`}static getTemplateHTML(e={}){return`
      ${be.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(e[I.LOGO]??``)}
      </slot>
    `}get preferCmcd(){return this.getAttribute(I.PREFER_CMCD)??void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?qr.includes(e)?this.setAttribute(I.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${qr.join()}`):this.removeAttribute(I.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(I.PLAYER_INIT_TIME)?+this.getAttribute(I.PLAYER_INIT_TIME):F(this,Oo)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(I.PLAYER_INIT_TIME):this.setAttribute(I.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){return F(this,No)??Eo}set playerSoftwareName(e){yo(this,No,e)}get playerSoftwareVersion(){return F(this,Mo)??To}set playerSoftwareVersion(e){yo(this,Mo,e)}get _hls(){return F(this,Lo,Ro)?.engine}get mux(){return this.nativeEl?.mux}get error(){return Ia(this.nativeEl)??null}get errorTranslator(){return F(this,Po)}set errorTranslator(e){yo(this,Po,e)}get src(){return this.getAttribute(`src`)}set src(e){e!==this.src&&(e==null?this.removeAttribute(`src`):this.setAttribute(`src`,e))}get type(){return this.getAttribute(I.TYPE)??void 0}set type(e){e!==this.type&&(e?this.setAttribute(I.TYPE,e):this.removeAttribute(I.TYPE))}get preload(){let e=this.getAttribute(`preload`);return e===``?`auto`:[`none`,`metadata`,`auto`].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute(`preload`)&&([``,`none`,`metadata`,`auto`].includes(e)?this.setAttribute(`preload`,e):this.removeAttribute(`preload`))}get debug(){return this.getAttribute(I.DEBUG)!=null}set debug(e){e!==this.debug&&(e?this.setAttribute(I.DEBUG,``):this.removeAttribute(I.DEBUG))}get disableTracking(){return this.hasAttribute(I.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(I.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(I.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(I.DISABLE_COOKIES,``):this.removeAttribute(I.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(I.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(I.DISABLE_PSEUDO_ENDED,``):this.removeAttribute(I.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(I.START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(e==null?this.removeAttribute(I.START_TIME):this.setAttribute(I.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(I.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(e==null?this.removeAttribute(I.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(I.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(I.INITIAL_ESTIMATE_SEGMENTS);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(e==null?this.removeAttribute(I.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(I.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(I.MIN_PRELOAD_SEGMENTS);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set minPreloadSegments(e){e!==this.minPreloadSegments&&(e==null?this.removeAttribute(I.MIN_PRELOAD_SEGMENTS):this.setAttribute(I.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){return this.hasAttribute(I.PLAYBACK_ID)?this.getAttribute(I.PLAYBACK_ID):Pa(this.src)??void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(I.PLAYBACK_ID,e):this.removeAttribute(I.PLAYBACK_ID))}get maxResolution(){return this.getAttribute(I.MAX_RESOLUTION)??void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(I.MAX_RESOLUTION,e):this.removeAttribute(I.MAX_RESOLUTION))}get minResolution(){return this.getAttribute(I.MIN_RESOLUTION)??void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(I.MIN_RESOLUTION,e):this.removeAttribute(I.MIN_RESOLUTION))}get maxAutoResolution(){return this.getAttribute(I.MAX_AUTO_RESOLUTION)??void 0}set maxAutoResolution(e){e==null?this.removeAttribute(I.MAX_AUTO_RESOLUTION):this.setAttribute(I.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){return this.getAttribute(I.RENDITION_ORDER)??void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(I.RENDITION_ORDER,e):this.removeAttribute(I.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(I.PROGRAM_START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){e==null?this.removeAttribute(I.PROGRAM_START_TIME):this.setAttribute(I.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(I.PROGRAM_END_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){e==null?this.removeAttribute(I.PROGRAM_END_TIME):this.setAttribute(I.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(I.ASSET_START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){e==null?this.removeAttribute(I.ASSET_START_TIME):this.setAttribute(I.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(I.ASSET_END_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){e==null?this.removeAttribute(I.ASSET_END_TIME):this.setAttribute(I.ASSET_END_TIME,`${e}`)}get customDomain(){return this.getAttribute(I.CUSTOM_DOMAIN)??void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(I.CUSTOM_DOMAIN,e):this.removeAttribute(I.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){return this._hlsConfig?.capLevelToPlayerSize==null?F(this,zo):this._hlsConfig.capLevelToPlayerSize}set capRenditionToPlayerSize(e){yo(this,zo,e)}get drmToken(){return this.getAttribute(I.DRM_TOKEN)??void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(I.DRM_TOKEN,e):this.removeAttribute(I.DRM_TOKEN))}get playbackToken(){if(this.hasAttribute(I.PLAYBACK_TOKEN))return this.getAttribute(I.PLAYBACK_TOKEN)??void 0;if(this.hasAttribute(I.PLAYBACK_ID)){let[,e]=ti(this.playbackId??``);return new URLSearchParams(e).get(`token`)??void 0}if(this.src)return new URLSearchParams(this.src).get(`token`)??void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(I.PLAYBACK_TOKEN,e):this.removeAttribute(I.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(I.PLAYBACK_TOKEN),t=this.getAttribute(I.DRM_TOKEN);return{...F(this,Ao),...e==null?{}:{playback:e},...t==null?{}:{drm:t}}}set tokens(e){yo(this,Ao,e??{})}get ended(){return Ja(this.nativeEl,this._hls)}get envKey(){return this.getAttribute(I.ENV_KEY)??void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(I.ENV_KEY,e):this.removeAttribute(I.ENV_KEY))}get beaconCollectionDomain(){return this.getAttribute(I.BEACON_COLLECTION_DOMAIN)??void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(I.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(I.BEACON_COLLECTION_DOMAIN))}get streamType(){return this.getAttribute(I.STREAM_TYPE)??Ra(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(I.STREAM_TYPE,e):this.removeAttribute(I.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(I.TARGET_LIVE_WINDOW)?+this.getAttribute(I.TARGET_LIVE_WINDOW):za(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(e==null?this.removeAttribute(I.TARGET_LIVE_WINDOW):this.setAttribute(I.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){if(this.hasAttribute(I.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:e}=this,t=this.nativeEl.seekable.end(0)??0,n=this.nativeEl.seekable.start(0)??0;return Math.max(n,t-e)}return Va(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(I.LIVE_EDGE_OFFSET))return+this.getAttribute(I.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(e==null?this.removeAttribute(I.LIVE_EDGE_OFFSET):this.setAttribute(I.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return Ba(this.nativeEl)}async addCuePoints(e){return Pi(this.nativeEl,e)}get activeCuePoint(){return Li(this.nativeEl)}get cuePoints(){return Ii(this.nativeEl)}async addChapters(e){return Hi(this.nativeEl,e)}get activeChapter(){return Wi(this.nativeEl)}get chapters(){return Ui(this.nativeEl)}getStartDate(){return Ki(this.nativeEl,this._hls)}get currentPdt(){return qi(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(I.PREFER_PLAYBACK);if(e===Gr.MSE||e===Gr.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===Gr.MSE||e===Gr.NATIVE?this.setAttribute(I.PREFER_PLAYBACK,e):this.removeAttribute(I.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith(`metadata-`)&&![I.METADATA_URL].includes(e)).reduce((e,t)=>{let n=this.getAttribute(t);return n!=null&&(e[t.replace(/^metadata-/,``).replace(/-/g,`_`)]=n),e},{}),...F(this,ko)}}set metadata(e){yo(this,ko,e??{}),this.mux&&this.mux.emit(`hb`,F(this,ko))}get _hlsConfig(){return F(this,jo)}set _hlsConfig(e){yo(this,jo,e)}get logo(){return this.getAttribute(I.LOGO)??F(this,Fo)}set logo(e){e?this.setAttribute(I.LOGO,e):this.removeAttribute(I.LOGO)}load(){Ya(this,this.nativeEl,F(this,Lo,Ro))}unload(){Xa(this.nativeEl,F(this,Lo,Ro),this)}attributeChangedCallback(e,t,n){var r,i;switch(be.observedAttributes.includes(e)&&![`src`,`autoplay`,`preload`].includes(e)&&super.attributeChangedCallback(e,t,n),e){case I.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=n??void 0;break;case I.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=n??void 0;break;case`src`:{let e=!!t,r=!!n;!e&&r?bo(this,Lo,Bo).call(this):e&&!r?this.unload():e&&r&&(this.unload(),bo(this,Lo,Bo).call(this));break}case`autoplay`:if(n===t)break;(r=F(this,Lo,Ro))==null||r.setAutoplay(this.autoplay);break;case`preload`:if(n===t)break;(i=F(this,Lo,Ro))==null||i.setPreload(n);break;case I.PLAYBACK_ID:case I.CUSTOM_DOMAIN:case I.MAX_RESOLUTION:case I.MIN_RESOLUTION:case I.RENDITION_ORDER:case I.PROGRAM_START_TIME:case I.PROGRAM_END_TIME:case I.ASSET_START_TIME:case I.ASSET_END_TIME:case I.PLAYBACK_TOKEN:this.src=Ma(this);break;case I.DEBUG:{let e=this.debug;this.mux&&console.info(`Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src.`),this._hls&&(this._hls.config.debug=e);break}case I.METADATA_URL:n&&fetch(n).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${n}!`));break;case I.STREAM_TYPE:(n==null||n!==t)&&this.dispatchEvent(new CustomEvent(`streamtypechange`,{composed:!0,bubbles:!0}));break;case I.TARGET_LIVE_WINDOW:(n==null||n!==t)&&this.dispatchEvent(new CustomEvent(`targetlivewindowchange`,{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case I.LOGO:(n==null||n!==t)&&this.updateLogo();break;case I.DISABLE_TRACKING:if(n==null||n!==t){let e=this.currentTime,t=this.paused;this.unload(),bo(this,Lo,Bo).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case I.DISABLE_COOKIES:(n==null||n!==t)&&this.disableCookies&&document.cookie.split(`;`).forEach(e=>{e.trim().startsWith(`muxData`)&&(document.cookie=e.replace(/^ +/,``).replace(/=.*/,`=;expires=`+new Date().toUTCString()+`;path=/`))});break;case I.CAP_RENDITION_TO_PLAYER_SIZE:(n==null||n!==t)&&(this.capRenditionToPlayerSize=n==null?void 0:!0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector(`slot[name="logo"]`);e&&(e.innerHTML=this.constructor.getLogoHTML(F(this,Fo)||this.logo))}connectedCallback(){var e,t;(e=super.connectedCallback)==null||e.call(this),(t=this.nativeEl)==null||t.addEventListener(`muxmetadata`,F(this,Io)),this.nativeEl&&this.src&&!F(this,Lo,Ro)&&bo(this,Lo,Bo).call(this)}disconnectedCallback(){var e,t;(e=this.nativeEl)==null||e.removeEventListener(`muxmetadata`,F(this,Io)),this.unload(),(t=super.disconnectedCallback)==null||t.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};Do=new WeakMap,Oo=new WeakMap,ko=new WeakMap,Ao=new WeakMap,jo=new WeakMap,Mo=new WeakMap,No=new WeakMap,Po=new WeakMap,Fo=new WeakMap,Io=new WeakMap,Lo=new WeakSet,Ro=function(){return Ha(this.nativeEl)},zo=new WeakMap,Bo=async function(){F(this,Do)||(await yo(this,Do,Promise.resolve()),yo(this,Do,null),this.load())};var Ho=new WeakMap,Uo=class extends Error{},Wo=class extends Error{},Go=[`application/x-mpegURL`,`application/vnd.apple.mpegurl`,`audio/mpegurl`],Ko=globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let n=t.deref();n&&e(n)})}}:Set;function qo(e){globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?e():customElements.whenDefined(`google-cast-button`).then(e):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined(`google-cast-button`).then(e)}}function Jo(){return globalThis.chrome}function Yo(){let e=`https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1`;if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement(`script`);t.src=e,document.head.append(t)}function Xo(){return globalThis.cast?.framework?.CastContext.getInstance()}function Zo(){return Xo()?.getCurrentSession()}function Qo(){return Zo()?.getSessionObj().media[0]}function $o(e){return new Promise((t,n)=>{Qo().editTracksInfo(e,t,n)})}function es(e){return new Promise((t,n)=>{Qo().getStatus(e,t,n)})}function ts(e){return Xo().setOptions({...ns(),...e})}function ns(){return{receiverApplicationId:`CC1AD845`,autoJoinPolicy:`origin_scoped`,androidReceiverCompatible:!1,language:`en-US`,resumeSavedSession:!0}}function rs(e){if(!e)return;let t=e.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return t?t[1]:null}function is(e){let t=e.split(`
`),n=[];for(let e=0;e<t.length;e++)if(t[e].trim().startsWith(`#EXT-X-STREAM-INF`)){let r=t[e+1]?t[e+1].trim():``;r&&!r.startsWith(`#`)&&n.push(r)}return n}function as(e){return e.split(`
`).find(e=>!e.trim().startsWith(`#`)&&e.trim()!==``)}async function os(e){if(!e)return!1;if(/\.m3u8?(\?.*)?$/i.test(e))return!0;if(e.startsWith(`blob:`))return!1;try{let t=(await fetch(e,{method:`HEAD`})).headers.get(`Content-Type`);return Go.some(e=>t===e)}catch(e){return console.error(`Error while trying to get the Content-Type of the manifest`,e),!1}}async function ss(e){if(!(!e||e.startsWith(`blob:`)))try{let t=await(await fetch(e)).text(),n=t,r=is(t);if(r.length>0){let t=new URL(r[0],e).toString();n=await(await fetch(t)).text()}return rs(as(n))}catch(e){console.error(`Error while trying to parse the manifest playlist`,e);return}}var cs=new Ko,ls=new WeakSet,L;qo(()=>{if(!globalThis.chrome?.cast?.isAvailable){console.debug(`chrome.cast.isAvailable`,globalThis.chrome?.cast?.isAvailable);return}L||(L=cast.framework,Xo().addEventListener(L.CastContextEventType.CAST_STATE_CHANGED,e=>{cs.forEach(t=>Ho.get(t).onCastStateChanged?.(e))}),Xo().addEventListener(L.CastContextEventType.SESSION_STATE_CHANGED,e=>{cs.forEach(t=>Ho.get(t).onSessionStateChanged?.(e))}),cs.forEach(e=>Ho.get(e).init?.()))});var us=0,ds=class extends EventTarget{#e;#t;#n;#r;#i=`disconnected`;#a=!1;#o=new Set;#s=new WeakMap;#c=()=>this.#g();constructor(e){super(),this.#e=e,cs.add(this),Ho.set(this,{init:()=>this.#m(),onCastStateChanged:()=>this.#f(),onSessionStateChanged:()=>this.#p(),getCastPlayer:()=>this.#l}),this.#m()}destroy(){this.#e?.textTracks?.removeEventListener(`change`,this.#c),this.#r&&this.#n?.controller&&Object.entries(this.#r).forEach(([e,t])=>{this.#n.controller.removeEventListener(e,t)}),this.#e&&ls.delete(this.#e),this.#t=!1}get#l(){if(ls.has(this.#e))return this.#n}get state(){return this.#i}async watchAvailability(e){if(this.#e.disableRemotePlayback)throw new Uo(`disableRemotePlayback attribute is present.`);return this.#s.set(e,++us),this.#o.add(e),queueMicrotask(()=>e(this.#d())),us}async cancelWatchAvailability(e){if(this.#e.disableRemotePlayback)throw new Uo(`disableRemotePlayback attribute is present.`);e?this.#o.delete(e):this.#o.clear()}async prompt(){if(this.#e.disableRemotePlayback)throw new Uo(`disableRemotePlayback attribute is present.`);if(!globalThis.chrome?.cast?.isAvailable)throw new Wo(`The RemotePlayback API is disabled on this platform.`);let e=ls.has(this.#e);ls.add(this.#e),ts(this.#e.castOptions),Object.entries(this.#r).forEach(([e,t])=>{this.#n.controller.addEventListener(e,t)});try{await Xo().requestSession()}catch(t){if(e||ls.delete(this.#e),t===`cancel`)return;throw Error(t)}Ho.get(this.#e)?.loadOnPrompt?.()}#u(){ls.has(this.#e)&&(Object.entries(this.#r).forEach(([e,t])=>{this.#n.controller.removeEventListener(e,t)}),ls.delete(this.#e),this.#e.muted=this.#n.isMuted,this.#e.currentTime=this.#n.savedPlayerState.currentTime,this.#n.savedPlayerState.isPaused===!1&&this.#e.play())}#d(){let e=Xo()?.getCastState();return e&&e!==`NO_DEVICES_AVAILABLE`}#f(){let e=Xo().getCastState();if(ls.has(this.#e)&&e===`CONNECTING`&&(this.#i=`connecting`,this.dispatchEvent(new Event(`connecting`))),!this.#a&&e?.includes(`CONNECT`)){this.#a=!0;for(let e of this.#o)e(!0)}else if(this.#a&&(!e||e===`NO_DEVICES_AVAILABLE`)){this.#a=!1;for(let e of this.#o)e(!1)}}async#p(){let{SESSION_RESUMED:e}=L.SessionState;if(Xo().getSessionState()===e&&this.#e.castSrc===Qo()?.media.contentId){ls.add(this.#e),Object.entries(this.#r).forEach(([e,t])=>{this.#n.controller.addEventListener(e,t)});try{await es(new chrome.cast.media.GetStatusRequest)}catch(e){console.error(e)}this.#r[L.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#r[L.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#m(){!L||this.#t||(this.#t=!0,ts(this.#e.castOptions),this.#e.textTracks.addEventListener(`change`,this.#c),this.#f(),this.#n=new L.RemotePlayer,new L.RemotePlayerController(this.#n),this.#r={[L.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{e===!0?(this.#i=`connected`,this.dispatchEvent(new Event(`connect`))):(this.#u(),this.#i=`disconnected`,this.dispatchEvent(new Event(`disconnect`)))},[L.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#e.dispatchEvent(new Event(`durationchange`))},[L.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#e.dispatchEvent(new Event(`volumechange`))},[L.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#e.dispatchEvent(new Event(`volumechange`))},[L.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#l?.isMediaLoaded&&this.#e.dispatchEvent(new Event(`timeupdate`))},[L.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#e.dispatchEvent(new Event(`resize`))},[L.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#e.dispatchEvent(new Event(this.paused?`pause`:`play`))},[L.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#l?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#e.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:`playing`,[chrome.cast.media.PlayerState.BUFFERING]:`waiting`,[chrome.cast.media.PlayerState.IDLE]:`emptied`}[this.#l?.playerState]))},[L.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#l?.isMediaLoaded&&(await Promise.resolve(),this.#h())}})}#h(){this.#g()}async#g(){if(!this.#l)return;let e=(this.#n.mediaInfo?.tracks??[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),t=[...this.#e.textTracks].filter(({kind:e})=>e===`subtitles`||e===`captions`),n=e.map(({language:e,name:n,trackId:r})=>{let{mode:i}=t.find(t=>t.language===e&&t.label===n)??{};return i?{mode:i,trackId:r}:!1}).filter(Boolean),r=n.filter(({mode:e})=>e!==`showing`).map(({trackId:e})=>e),i=n.find(({mode:e})=>e===`showing`),a=Zo()?.getSessionObj().media[0]?.activeTrackIds??[],o=a;if(a.length&&(o=o.filter(e=>!r.includes(e))),i?.trackId&&(o=[...o,i.trackId]),o=[...new Set(o)],!((e,t)=>e.length===t.length&&e.every(e=>t.includes(e)))(a,o))try{await $o(new chrome.cast.media.EditTracksInfoRequest(o))}catch(e){console.error(e)}}},fs=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],`cast-src`,`cast-content-type`,`cast-stream-type`,`cast-receiver`];#e={paused:!1};#t=ns();#n;#r;get remote(){return this.#r?this.#r:Jo()?this.isConnected?(this.disableRemotePlayback||Yo(),Ho.set(this,{loadOnPrompt:()=>this.#a()}),this.#r=new ds(this)):void 0:super.remote}get#i(){return Ho.get(this.remote)?.getCastPlayer?.()}disconnectedCallback(){this.#r?.destroy(),this.#r=null,Ho.delete(this),super.disconnectedCallback?.()}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),e===`cast-receiver`&&n){this.#t.receiverApplicationId=n;return}if(this.#i)switch(e){case`cast-stream-type`:case`cast-src`:this.load();break}}async#a(){this.#e.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){if(!this.#i)return super.load();let e=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);e.customData=this.castCustomData;let t=[...this.querySelectorAll(`track`)].filter(({kind:e,src:t})=>t&&(e===`subtitles`||e===`captions`)),n=[],r=0;if(t.length&&(e.tracks=t.map(e=>{let t=++r;n.length===0&&e.track.mode===`showing`&&n.push(t);let i=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return i.trackContentId=e.src,i.trackContentType=`text/vtt`,i.subtype=e.kind===`captions`?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,i.name=e.label,i.language=e.srclang,i})),this.castStreamType===`live`?e.streamType=chrome.cast.media.StreamType.LIVE:e.streamType=chrome.cast.media.StreamType.BUFFERED,e.metadata=new chrome.cast.media.GenericMediaMetadata,e.metadata.title=this.title,e.metadata.images=[{url:this.poster}],await os(this.castSrc)){e.contentType||=`application/x-mpegURL`;let t=await ss(this.castSrc);t?.includes(`m4s`)||t?.includes(`mp4`)?(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):t?.includes(`ts`)&&(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.TS)}let i=new chrome.cast.media.LoadRequest(e);i.currentTime=super.currentTime??0,i.autoplay=!this.#e.paused,i.activeTrackIds=n,await Zo()?.loadMedia(i),this.dispatchEvent(new Event(`volumechange`))}play(){if(this.#i){this.#i.isPaused&&this.#i.controller?.playOrPause();return}return super.play()}pause(){if(this.#i){this.#i.isPaused||this.#i.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#t}get castReceiver(){return this.getAttribute(`cast-receiver`)??void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute(`cast-receiver`,`${e}`)}get castSrc(){let e=this.currentSrc,t=e?.startsWith(`blob:`)?void 0:e;return this.getAttribute(`cast-src`)??this.querySelector(`source`)?.src??t??this.getAttribute(`src`)??void 0}set castSrc(e){this.castSrc!=e&&this.setAttribute(`cast-src`,`${e}`)}get castContentType(){return this.getAttribute(`cast-content-type`)??void 0}set castContentType(e){this.setAttribute(`cast-content-type`,`${e}`)}get castStreamType(){return this.getAttribute(`cast-stream-type`)??this.streamType??void 0}set castStreamType(e){this.setAttribute(`cast-stream-type`,`${e}`)}get castCustomData(){return this.#n}set castCustomData(e){let t=typeof e;if(![`object`,`undefined`].includes(t)){console.error(`castCustomData must be nullish or an object but value was of type ${t}`);return}this.#n=e}get readyState(){if(this.#i)switch(this.#i.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#i?this.#i.isPaused:super.paused}get muted(){return this.#i?this.#i?.isMuted:super.muted}set muted(e){if(this.#i){(e&&!this.#i.isMuted||!e&&this.#i.isMuted)&&this.#i.controller?.muteOrUnmute();return}super.muted=e}get volume(){return this.#i?this.#i?.volumeLevel??1:super.volume}set volume(e){if(this.#i){this.#i.volumeLevel=+e,this.#i.controller?.setVolumeLevel();return}super.volume=e}get duration(){return this.#i&&this.#i?.isMediaLoaded?this.#i?.duration??NaN:super.duration}get currentTime(){return this.#i&&this.#i?.isMediaLoaded?this.#i?.currentTime??0:super.currentTime}set currentTime(e){if(this.#i){this.#i.currentTime=e,this.#i.controller?.seek();return}super.currentTime=e}},ps=e=>{throw TypeError(e)},ms=(e,t,n)=>t.has(e)||ps(`Cannot `+n),hs=(e,t,n)=>(ms(e,t,`read from private field`),n?n.call(e):t.get(e)),gs=(e,t,n)=>t.has(e)?ps(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),_s=(e,t,n,r)=>(ms(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),vs=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>`u`){class e extends vs{}globalThis.DocumentFragment=e}var ys=class extends vs{},bs=class extends vs{},xs={get(e){},define(e,t,n){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(ys)}},Ss,Cs=class{constructor(e,t={}){gs(this,Ss),_s(this,Ss,t?.detail)}get detail(){return hs(this,Ss)}initCustomEvent(){}};Ss=new WeakMap;function ws(e,t){return new ys}var Ts={document:{createElement:ws},DocumentFragment,customElements:xs,CustomEvent:Cs,EventTarget:vs,HTMLElement:ys,HTMLVideoElement:bs},Es=typeof window>`u`||globalThis.customElements===void 0,Ds=Es?Ts:globalThis;Es?Ts.document:globalThis.document;var Os,ks=class extends fs(xe(Vo)){constructor(){super(...arguments),gs(this,Os)}get autoplay(){let e=this.getAttribute(`autoplay`);return e===null?!1:e===``?!0:e}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute(`autoplay`,typeof e==`string`?e:``):this.removeAttribute(`autoplay`))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){return hs(this,Os)??this.muxCastCustomData}set castCustomData(e){_s(this,Os,e)}};Os=new WeakMap,Ds.customElements.get(`mux-video`)||(Ds.customElements.define(`mux-video`,ks),Ds.MuxVideoElement=ks);var As=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},R=(e,t,n)=>(As(e,t,`read from private field`),n?n.call(e):t.get(e)),js=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Ms=(e,t,n,r)=>(As(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws=1,Gs=0,Ks=1,qs={processCallback(e,t,n){if(n){for(let[e,r]of t)if(e in n){let t=n[e];typeof t==`boolean`&&r instanceof nc&&typeof r.element[r.attributeName]==`boolean`?r.booleanValue=t:typeof t==`function`&&r instanceof nc?r.element[r.attributeName]=t:r.value=t}}}},Js=class extends g.DocumentFragment{constructor(e,t,n=qs){var r;super(),js(this,Ns,void 0),js(this,Ps,void 0),this.append(e.content.cloneNode(!0)),Ms(this,Ns,Ys(this)),Ms(this,Ps,n),(r=n.createCallback)==null||r.call(n,this,R(this,Ns),t),n.processCallback(this,R(this,Ns),t)}update(e){R(this,Ps).processCallback(this,R(this,Ns),e)}};Ns=new WeakMap,Ps=new WeakMap;var Ys=(e,t=[])=>{let n,r;for(let i of e.attributes||[])if(i.value.includes(`{{`)){let a=new tc;for([n,r]of Zs(i.value))if(!n)a.append(r);else{let n=new nc(e,i.name,i.namespaceURI);a.append(n),t.push([r,n])}i.value=a.toString()}for(let i of e.childNodes)if(i.nodeType===Ws&&!(i instanceof HTMLTemplateElement))Ys(i,t);else{let a=i.data;if(i.nodeType===Ws||a.includes(`{{`)){let o=[];if(a)for([n,r]of Zs(a))if(!n)o.push(new Text(r));else{let n=new rc(e);o.push(n),t.push([r,n])}else if(i instanceof HTMLTemplateElement){let n=new ic(e,i);o.push(n),t.push([n.expression,n])}i.replaceWith(...o.flatMap(e=>e.replacementNodes||[e]))}}return t},Xs={},Zs=e=>{let t=``,n=0,r=Xs[e],i=0,a;if(r)return r;for(r=[];a=e[i];i++)a===`{`&&e[i+1]===`{`&&e[i-1]!==`\\`&&e[i+2]&&++n==1?(t&&r.push([Gs,t]),t=``,i++):a===`}`&&e[i+1]===`}`&&e[i-1]!==`\\`&&!--n?(r.push([Ks,t.trim()]),t=``,i++):t+=a||``;return t&&r.push([Gs,(n>0?`{{`:``)+t]),Xs[e]=r},Qs=11,$s=class{get value(){return``}set value(e){}toString(){return this.value}},ec=new WeakMap,tc=class{constructor(){js(this,Fs,[])}[Symbol.iterator](){return R(this,Fs).values()}get length(){return R(this,Fs).length}item(e){return R(this,Fs)[e]}append(...e){for(let t of e)t instanceof nc&&ec.set(t,this),R(this,Fs).push(t)}toString(){return R(this,Fs).join(``)}};Fs=new WeakMap;var nc=class extends $s{constructor(e,t,n){super(),js(this,Bs),js(this,Is,``),js(this,Ls,void 0),js(this,Rs,void 0),js(this,zs,void 0),Ms(this,Ls,e),Ms(this,Rs,t),Ms(this,zs,n)}get attributeName(){return R(this,Rs)}get attributeNamespace(){return R(this,zs)}get element(){return R(this,Ls)}get value(){return R(this,Is)}set value(e){R(this,Is)!==e&&(Ms(this,Is,e),!R(this,Bs,Vs)||R(this,Bs,Vs).length===1?e==null?R(this,Ls).removeAttributeNS(R(this,zs),R(this,Rs)):R(this,Ls).setAttributeNS(R(this,zs),R(this,Rs),e):R(this,Ls).setAttributeNS(R(this,zs),R(this,Rs),R(this,Bs,Vs).toString()))}get booleanValue(){return R(this,Ls).hasAttributeNS(R(this,zs),R(this,Rs))}set booleanValue(e){if(!R(this,Bs,Vs)||R(this,Bs,Vs).length===1)this.value=e?``:null;else throw new DOMException(`Value is not fully templatized`)}};Is=new WeakMap,Ls=new WeakMap,Rs=new WeakMap,zs=new WeakMap,Bs=new WeakSet,Vs=function(){return ec.get(this)};var rc=class extends $s{constructor(e,t){super(),js(this,Hs,void 0),js(this,Us,void 0),Ms(this,Hs,e),Ms(this,Us,t?[...t]:[new Text])}get replacementNodes(){return R(this,Us)}get parentNode(){return R(this,Hs)}get nextSibling(){return R(this,Us)[R(this,Us).length-1].nextSibling}get previousSibling(){return R(this,Us)[0].previousSibling}get value(){return R(this,Us).map(e=>e.textContent).join(``)}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>e==null?[new Text]:e.forEach?[...e]:e.nodeType===Qs?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),Ms(this,Us,ac(R(this,Us)[0].parentNode,R(this,Us),t,this.nextSibling))}};Hs=new WeakMap,Us=new WeakMap;var ic=class extends rc{constructor(e,t){let n=t.getAttribute(`directive`)||t.getAttribute(`type`),r=t.getAttribute(`expression`)||t.getAttribute(n)||``;r.startsWith(`{{`)&&(r=r.trim().slice(2,-2).trim()),super(e),this.expression=r,this.template=t,this.directive=n}};function ac(e,t,n,r=null){let i=0,a,o,s,c=n.length,l=t.length;for(;i<c&&i<l&&t[i]==n[i];)i++;for(;i<c&&i<l&&n[c-1]==t[l-1];)r=n[--l,--c];if(i==l)for(;i<c;)e.insertBefore(n[i++],r);if(i==c)for(;i<l;)e.removeChild(t[i++]);else{for(a=t[i];i<c;)s=n[i++],o=a?a.nextSibling:r,a==s?a=o:i<c&&n[i]==o?(e.replaceChild(s,a),a=o):e.insertBefore(s,a);for(;a!=r;)o=a.nextSibling,e.removeChild(a),a=o}return n}var oc={string:e=>String(e)},sc=class{constructor(e){this.template=e,this.state=void 0}},cc=new WeakMap,lc=new WeakMap,uc={partial:(e,t)=>{t[e.expression]=new sc(e.template)},if:(e,t)=>{var n;if(hc(e.expression,t))if(cc.get(e)!==e.template){cc.set(e,e.template);let n=new Js(e.template,t,fc);e.replace(n),lc.set(e,n)}else (n=lc.get(e))==null||n.update(t);else e.replace(``),cc.delete(e),lc.delete(e)}},dc=Object.keys(uc),fc={processCallback(e,t,n){var r,i;if(n)for(let[e,a]of t){if(a instanceof ic){if(!a.directive){let e=dc.find(e=>a.template.hasAttribute(e));e&&(a.directive=e,a.expression=a.template.getAttribute(e))}(r=uc[a.directive])==null||r.call(uc,a,n);continue}let t=hc(e,n);if(t instanceof sc){cc.get(a)===t.template?(i=lc.get(a))==null||i.update(t.state):(cc.set(a,t.template),t=new Js(t.template,t.state,fc),a.value=t,lc.set(a,t));continue}t?(a instanceof nc&&a.attributeName.startsWith(`aria-`)&&(t=String(t)),a instanceof nc?typeof t==`boolean`?a.booleanValue=t:typeof t==`function`?a.element[a.attributeName]=t:a.value=t:(a.value=t,cc.delete(a),lc.delete(a))):a instanceof nc?a.value=void 0:(a.value=void 0,cc.delete(a),lc.delete(a))}}},pc={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>e??t,"|":(e,t)=>oc[t]?.call(oc,e)};function mc(e){return yc(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>e!==`ws`)}function hc(e,t={}){let n=mc(e);if(n.length===0||n.some(({type:e})=>!e))return gc(e);if(n[0]?.token===`>`){let r=t[n[1]?.token];if(!r)return gc(e);let i={...t};r.state=i;let a=n.slice(2);for(let e=0;e<a.length;e+=3){let n=a[e]?.token,r=a[e+1]?.token,o=a[e+2]?.token;n&&r===`=`&&(i[n]=vc(o,t))}return r}if(n.length===1)return _c(n[0])?vc(n[0].token,t):gc(e);if(n.length===2){let r=pc[n[0]?.token];return!r||!_c(n[1])?gc(e):r(vc(n[1].token,t))}if(n.length===3){let r=n[1]?.token,i=pc[r];if(!i||!_c(n[0])||!_c(n[2]))return gc(e);let a=vc(n[0].token,t);return r===`|`?i(a,n[2].token):i(a,vc(n[2].token,t))}}function gc(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function _c({type:e}){return[`number`,`boolean`,`string`,`param`].includes(e)}function vc(e,t){let n=e[0],r=e.slice(-1);return e===`true`||e===`false`?e===`true`:n===r&&[`'`,`"`].includes(n)?e.slice(1,-1):ae(e)?parseFloat(e):t[e]}function yc(e,t){let n,r,i,a=[];for(;e;){i=null,n=e.length;for(let a in t)r=t[a].exec(e),r&&r.index<n&&(i={token:r[0],type:a,matches:r.slice(1)},n=r.index);n&&a.push({token:e.substr(0,n),type:void 0}),i&&a.push(i),e=e.substr(n+(i?i.token.length:0))}return a}var bc=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},xc=(e,t,n)=>(bc(e,t,`read from private field`),n?n.call(e):t.get(e)),Sc=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Cc=(e,t,n,r)=>(bc(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),wc=(e,t,n)=>(bc(e,t,`access private method`),n),Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc={mediatargetlivewindow:`targetlivewindow`,mediastreamtype:`streamtype`},Fc=_e.createElement(`template`);Fc.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;var Ic=class extends g.HTMLElement{constructor(){super(),Sc(this,kc),Sc(this,jc),Sc(this,Tc,void 0),Sc(this,Ec,void 0),Sc(this,Dc,void 0),Sc(this,Oc,void 0),Sc(this,Nc,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:`open`}),this.createRenderer()),Cc(this,Oc,new MutationObserver(e=>{this.mediaController&&!this.mediaController?.breakpointsComputed||e.some(e=>{let t=e.target;return t===this?!0:t.localName===`media-controller`?!!(Pc[e.attributeName]||e.attributeName.startsWith(`breakpoint`)):!1})&&this.render()})),Cc(this,Nc,this.render.bind(this)),wc(this,kc,Ac).call(this,`template`)}get mediaController(){return this.renderRoot.querySelector(`media-controller`)}get template(){return xc(this,Tc)??this.constructor.template}set template(e){if(e===null){this.removeAttribute(`template`);return}typeof e==`string`?this.setAttribute(`template`,e):e instanceof HTMLTemplateElement&&(Cc(this,Tc,e),Cc(this,Dc,null),this.createRenderer())}get props(){let e=[...Array.from(this.mediaController?.attributes??[]).filter(({name:e})=>Pc[e]||e.startsWith(`breakpoint`)),...Array.from(this.attributes)],t={};for(let n of e){let e=Pc[n.name]??de(n.name),{value:r}=n;r==null?t[e]=!1:(ae(r)&&(r=parseFloat(r)),t[e]=r===``?!0:r)}return t}attributeChangedCallback(e,t,n){e===`template`&&t!=n&&wc(this,jc,Mc).call(this)}connectedCallback(){this.addEventListener(se.BREAKPOINTS_COMPUTED,xc(this,Nc)),xc(this,Oc).observe(this,{attributes:!0}),xc(this,Oc).observe(this.renderRoot,{attributes:!0,subtree:!0}),wc(this,jc,Mc).call(this)}disconnectedCallback(){this.removeEventListener(se.BREAKPOINTS_COMPUTED,xc(this,Nc)),xc(this,Oc).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==xc(this,Ec)&&(Cc(this,Ec,this.template),this.renderer=new Js(this.template,this.props,this.constructor.processor),this.renderRoot.textContent=``,this.renderRoot.append(Fc.content.cloneNode(!0),this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}};Tc=new WeakMap,Ec=new WeakMap,Dc=new WeakMap,Oc=new WeakMap,kc=new WeakSet,Ac=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},jc=new WeakSet,Mc=function(){let e=this.getAttribute(`template`);if(!e||e===xc(this,Dc))return;let t=this.getRootNode(),n=(t?.getElementById)?.call(t,e);if(n){Cc(this,Dc,e),Cc(this,Tc,n),this.createRenderer();return}Lc(e)&&(Cc(this,Dc,e),Rc(e).then(e=>{let t=_e.createElement(`template`);t.innerHTML=e,Cc(this,Tc,t),this.createRenderer()}).catch(console.error))},Nc=new WeakMap,Ic.observedAttributes=[`template`],Ic.processor=fc;function Lc(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch{return!1}return!0}async function Rc(e){let t=await fetch(e);if(t.status!==200)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}g.customElements.get(`media-theme`)||g.customElements.define(`media-theme`,Ic);function zc({anchor:e,floating:t,placement:n}){let{x:r,y:i}=Hc(Bc({anchor:e,floating:t}),n);return{x:r,y:i}}function Bc({anchor:e,floating:t}){return{anchor:Vc(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}function Vc(e,t){let n=e.getBoundingClientRect(),r=t?.getBoundingClientRect()??{x:0,y:0};return{x:n.x-r.x,y:n.y-r.y,width:n.width,height:n.height}}function Hc({anchor:e,floating:t},n){let r=Wc(n)===`x`?`y`:`x`,i=r===`y`?`height`:`width`,a=Uc(n),o=e.x+e.width/2-t.width/2,s=e.y+e.height/2-t.height/2,c=e[i]/2-t[i]/2,l;switch(a){case`top`:l={x:o,y:e.y-t.height};break;case`bottom`:l={x:o,y:e.y+e.height};break;case`right`:l={x:e.x+e.width,y:s};break;case`left`:l={x:e.x-t.width,y:s};break;default:l={x:e.x,y:e.y}}switch(n.split(`-`)[1]){case`start`:l[r]-=c;break;case`end`:l[r]+=c;break}return l}function Uc(e){return e.split(`-`)[0]}function Wc(e){return[`top`,`bottom`].includes(Uc(e))?`y`:`x`}var Gc=class extends Event{constructor({action:e=`auto`,relatedTarget:t,...n}){super(`invoke`,n),this.action=e,this.relatedTarget=t}},Kc=class extends Event{constructor({newState:e,oldState:t,...n}){super(`toggle`,n),this.newState=e,this.oldState=t}},qc=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},z=(e,t,n)=>(qc(e,t,`read from private field`),n?n.call(e):t.get(e)),B=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Jc=(e,t,n,r)=>(qc(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),V=(e,t,n)=>(qc(e,t,`access private method`),n),Yc,Xc,Zc,Qc,$c,el,tl,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl;function Vl({type:e,text:t,value:n,checked:r}){let i=_e.createElement(`media-chrome-menu-item`);i.type=e??``,i.part.add(`menu-item`),e&&i.part.add(e),i.value=n,i.checked=r;let a=_e.createElement(`span`);return a.textContent=t,i.append(a),i}function Hl(e,t){let n=e.querySelector(`:scope > [slot="${t}"]`);if(n?.nodeName==`SLOT`&&(n=n.assignedElements({flatten:!0})[0]),n)return n=n.cloneNode(!0),n;let r=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return r?r.cloneNode(!0):``}function Ul(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `}var Wl={STYLE:`style`,HIDDEN:`hidden`,DISABLED:`disabled`,ANCHOR:`anchor`},Gl=class extends g.HTMLElement{constructor(){if(super(),B(this,nl),B(this,il),B(this,sl),B(this,ll),B(this,dl),B(this,pl),B(this,_l),B(this,yl),B(this,xl),B(this,Cl),B(this,Tl),B(this,Dl),B(this,kl),B(this,jl),B(this,Nl),B(this,Fl),B(this,Ll),B(this,zl),B(this,Yc,null),B(this,Xc,null),B(this,Zc,null),B(this,Qc,new Set),B(this,$c,void 0),B(this,el,!1),B(this,tl,null),B(this,ol,()=>{let e=z(this,Qc),t=new Set(this.items);for(let n of e)t.has(n)||this.dispatchEvent(new CustomEvent(`removemenuitem`,{detail:n}));for(let n of t)e.has(n)||this.dispatchEvent(new CustomEvent(`addmenuitem`,{detail:n}));Jc(this,Qc,t)}),B(this,hl,()=>{V(this,_l,vl).call(this),V(this,yl,bl).call(this,!1)}),B(this,gl,()=>{V(this,_l,vl).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector(`#container`),this.defaultSlot=this.shadowRoot.querySelector(`slot:not([name])`),Jc(this,$c,new MutationObserver(z(this,ol)))}static get observedAttributes(){return[Wl.DISABLED,Wl.HIDDEN,Wl.STYLE,Wl.ANCHOR,pe.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener(`click`,this),this.addEventListener(`focusout`,this),this.addEventListener(`keydown`,this),this.addEventListener(`invoke`,this),this.addEventListener(`toggle`,this)}disable(){this.removeEventListener(`click`,this),this.removeEventListener(`focusout`,this),this.removeEventListener(`keyup`,this),this.removeEventListener(`invoke`,this),this.removeEventListener(`toggle`,this)}handleEvent(e){switch(e.type){case`slotchange`:V(this,nl,rl).call(this,e);break;case`invoke`:V(this,ll,ul).call(this,e);break;case`click`:V(this,xl,Sl).call(this,e);break;case`toggle`:V(this,Tl,El).call(this,e);break;case`focusout`:V(this,kl,Al).call(this,e);break;case`keydown`:V(this,jl,Ml).call(this,e);break}}connectedCallback(){var e,t;z(this,$c).observe(this.defaultSlot,{childList:!0}),Jc(this,tl,re(this.shadowRoot,`:host`)),V(this,sl,cl).call(this),this.hasAttribute(`disabled`)||this.enable(),this.role||=`menu`,Jc(this,Yc,te(this)),(t=(e=z(this,Yc))?.associateElement)==null||t.call(e,this),this.hidden||(n(ql(this),z(this,hl)),n(this,z(this,gl))),V(this,il,al).call(this),this.shadowRoot.addEventListener(`slotchange`,this)}disconnectedCallback(){var e,t;z(this,$c).disconnect(),le(ql(this),z(this,hl)),le(this,z(this,gl)),this.disable(),(t=(e=z(this,Yc))?.unassociateElement)==null||t.call(e,this),Jc(this,Yc,null),Jc(this,Xc,null),Jc(this,Zc,null),this.shadowRoot.removeEventListener(`slotchange`,this)}attributeChangedCallback(e,t,n){var r,i,a,o;e===Wl.HIDDEN&&n!==t?(z(this,el)||Jc(this,el,!0),this.hidden?V(this,pl,ml).call(this):V(this,dl,fl).call(this),this.dispatchEvent(new Kc({oldState:this.hidden?`open`:`closed`,newState:this.hidden?`closed`:`open`,bubbles:!0}))):e===pe.MEDIA_CONTROLLER?(t&&((i=(r=z(this,Yc))?.unassociateElement)==null||i.call(r,this),Jc(this,Yc,null)),n&&this.isConnected&&(Jc(this,Yc,te(this)),(o=(a=z(this,Yc))?.associateElement)==null||o.call(a,this))):e===Wl.DISABLED&&n!==t?n==null?this.enable():this.disable():e===Wl.STYLE&&n!==t&&V(this,sl,cl).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute(`anchor`)}set anchor(e){this.setAttribute(`anchor`,`${e}`)}get anchorElement(){return this.anchor?i(this)?.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(Kl)}get radioGroupItems(){return this.items.filter(e=>e.role===`menuitemradio`)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){return this.checkedItems[0]?.value??``}set value(e){let t=this.items.find(t=>t.value===e);t&&V(this,zl,Bl).call(this,t)}focus(){if(Jc(this,Xc,h()),this.items.length){V(this,Ll,Rl).call(this,this.items[0]),this.items[0].focus();return}this.querySelector(`[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]`)?.focus()}handleSelect(e){var t;let n=V(this,Nl,Pl).call(this,e);n&&(V(this,zl,Bl).call(this,n,n.type===`checkbox`),z(this,Zc)&&!this.hidden&&((t=z(this,Xc))==null||t.focus(),this.hidden=!0))}get keysUsed(){return[`Enter`,`Escape`,`Tab`,` `,`ArrowDown`,`ArrowUp`,`Home`,`End`]}handleMove(e){let{key:t}=e,n=this.items,r=V(this,Nl,Pl).call(this,e)??V(this,Fl,Il).call(this)??n[0],i=n.indexOf(r),a=Math.max(0,i);t===`ArrowDown`?a++:t===`ArrowUp`?a--:e.key===`Home`?a=0:e.key===`End`&&(a=n.length-1),a<0&&(a=n.length-1),a>n.length-1&&(a=0),V(this,Ll,Rl).call(this,n[a]),n[a].focus()}};Yc=new WeakMap,Xc=new WeakMap,Zc=new WeakMap,Qc=new WeakMap,$c=new WeakMap,el=new WeakMap,tl=new WeakMap,nl=new WeakSet,rl=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))e.nodeType===3&&e.textContent.trim()===``&&e.remove();[`header`,`title`].includes(t.name)&&V(this,il,al).call(this),t.name||z(this,ol).call(this)},il=new WeakSet,al=function(){let e=this.shadowRoot.querySelector(`slot[name="header"]`);e.hidden=this.shadowRoot.querySelector(`slot[name="title"]`).assignedNodes().length===0&&e.assignedNodes().length===0},ol=new WeakMap,sl=new WeakSet,cl=function(){let e=this.shadowRoot.querySelector(`#layout-row`),t=getComputedStyle(this).getPropertyValue(`--media-menu-layout`)?.trim();e.setAttribute(`media`,t===`row`?``:`width:0`)},ll=new WeakSet,ul=function(e){Jc(this,Zc,e.relatedTarget),a(this,e.relatedTarget)||(this.hidden=!this.hidden)},dl=new WeakSet,fl=function(){var e;(e=z(this,Zc))==null||e.setAttribute(`aria-expanded`,`true`),this.addEventListener(`transitionend`,()=>this.focus(),{once:!0}),n(ql(this),z(this,hl)),n(this,z(this,gl))},pl=new WeakSet,ml=function(){var e;(e=z(this,Zc))==null||e.setAttribute(`aria-expanded`,`false`),le(ql(this),z(this,hl)),le(this,z(this,gl))},hl=new WeakMap,gl=new WeakMap,_l=new WeakSet,vl=function(e){if(this.hasAttribute(`mediacontroller`)&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:n}=zc({anchor:this.anchorElement,floating:this,placement:`top-start`});e??=this.offsetWidth;let r=ql(this).getBoundingClientRect(),i=r.width-t-e,a=r.height-n-this.offsetHeight,{style:o}=z(this,tl);o.setProperty(`position`,`absolute`),o.setProperty(`right`,`${Math.max(0,i)}px`),o.setProperty(`--_menu-bottom`,`${a}px`);let s=getComputedStyle(this),c=o.getPropertyValue(`--_menu-bottom`)===s.bottom?a:parseFloat(s.bottom),l=r.height-c-parseFloat(s.marginBottom);this.style.setProperty(`--_menu-max-height`,`${l}px`)},yl=new WeakSet,bl=function(e){let t=this.querySelector(`[role="menuitem"][aria-haspopup][aria-expanded="true"]`),n=t?.querySelector(`[role="menu"]`),{style:r}=z(this,tl);if(e||r.setProperty(`--media-menu-transition-in`,`none`),n){let e=n.offsetHeight,r=Math.max(n.offsetWidth,t.offsetWidth);this.style.setProperty(`min-width`,`${r}px`),this.style.setProperty(`min-height`,`${e}px`),V(this,_l,vl).call(this,r)}else this.style.removeProperty(`min-width`),this.style.removeProperty(`min-height`),V(this,_l,vl).call(this);r.removeProperty(`--media-menu-transition-in`)},xl=new WeakSet,Sl=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(z(this,Cl,wl))){(t=z(this,Xc))==null||t.focus(),this.hidden=!0;return}let n=V(this,Nl,Pl).call(this,e);!n||n.hasAttribute(`disabled`)||(V(this,Ll,Rl).call(this,n),this.handleSelect(e))},Cl=new WeakSet,wl=function(){return this.shadowRoot.querySelector(`slot[name="header"]`).assignedElements({flatten:!0})?.find(e=>e.matches(`button[part~="back"]`))},Tl=new WeakSet,El=function(e){if(e.target===this)return;V(this,Dl,Ol).call(this);let t=Array.from(this.querySelectorAll(`[role="menuitem"][aria-haspopup]`));for(let n of t)n.invokeTargetElement!=e.target&&e.newState==`open`&&n.getAttribute(`aria-expanded`)==`true`&&!n.invokeTargetElement.hidden&&n.invokeTargetElement.dispatchEvent(new Gc({relatedTarget:n}));for(let e of t)e.setAttribute(`aria-expanded`,`${!e.submenuElement.hidden}`);V(this,yl,bl).call(this,!0)},Dl=new WeakSet,Ol=function(){let e=this.querySelector(`[role="menuitem"] > [role="menu"]:not([hidden])`);this.container.classList.toggle(`has-expanded`,!!e)},kl=new WeakSet,Al=function(e){var t;a(this,e.relatedTarget)||(z(this,el)&&((t=z(this,Xc))==null||t.focus()),z(this,Zc)&&z(this,Zc)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},jl=new WeakSet,Ml=function(e){var t,n,r,i,a;let{key:o,ctrlKey:s,altKey:c,metaKey:l}=e;if(!(s||c||l)&&this.keysUsed.includes(o))if(e.preventDefault(),e.stopPropagation(),o===`Tab`){if(z(this,el)){this.hidden=!0;return}e.shiftKey?(n=(t=this.previousElementSibling)?.focus)==null||n.call(t):(i=(r=this.nextElementSibling)?.focus)==null||i.call(r),this.blur()}else o===`Escape`?((a=z(this,Xc))==null||a.focus(),z(this,el)&&(this.hidden=!0)):o===`Enter`||o===` `?this.handleSelect(e):this.handleMove(e)},Nl=new WeakSet,Pl=function(e){return e.composedPath().find(e=>[`menuitemradio`,`menuitemcheckbox`].includes(e.role))},Fl=new WeakSet,Il=function(){return this.items.find(e=>e.tabIndex===0)},Ll=new WeakSet,Rl=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},zl=new WeakSet,Bl=function(e,t){let n=[...this.checkedItems];e.type===`radio`&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=n[t])&&this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))},Gl.shadowRootOptions={mode:`open`},Gl.getTemplateHTML=Ul;function Kl(e){return[`menuitem`,`menuitemradio`,`menuitemcheckbox`].includes(e?.role)}function ql(e){return(e.getAttribute(`bounds`)?ee(e,`#${e.getAttribute(`bounds`)}`):c(e)||e.parentElement)??e}g.customElements.get(`media-chrome-menu`)||g.customElements.define(`media-chrome-menu`,Gl);var Jl=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},H=(e,t,n)=>(Jl(e,t,`read from private field`),n?n.call(e):t.get(e)),Yl=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Xl=(e,t,n,r)=>(Jl(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Zl=(e,t,n)=>(Jl(e,t,`access private method`),n),Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu;function du(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `}function fu(e){return``}var pu={TYPE:`type`,VALUE:`value`,CHECKED:`checked`,DISABLED:`disabled`},mu=class extends g.HTMLElement{constructor(){if(super(),Yl(this,eu),Yl(this,nu),Yl(this,iu),Yl(this,lu),Yl(this,Ql,!1),Yl(this,$l,void 0),Yl(this,ou,()=>{this.submenuElement.items&&this.setAttribute(`submenusize`,`${this.submenuElement.items.length}`);let e=this.shadowRoot.querySelector(`slot[name="description"]`),t=this.submenuElement.checkedItems?.[0],n=t?.dataset.description??t?.text,r=_e.createElement(`span`);r.textContent=n??``,e.replaceChildren(r)}),Yl(this,su,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener(`keyup`,H(this,su));return}this.handleClick(e)}),Yl(this,cu,e=>{let{metaKey:t,altKey:n,key:r}=e;if(t||n||!this.keysUsed.includes(r)){this.removeEventListener(`keyup`,H(this,su));return}this.addEventListener(`keyup`,H(this,su),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[pu.TYPE,pu.DISABLED,pu.CHECKED,pu.VALUE]}enable(){this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`-1`),hu(this)&&!this.hasAttribute(`aria-checked`)&&this.setAttribute(`aria-checked`,`false`),this.addEventListener(`click`,this),this.addEventListener(`keydown`,this)}disable(){this.removeAttribute(`tabindex`),this.removeEventListener(`click`,this),this.removeEventListener(`keydown`,this),this.removeEventListener(`keyup`,this)}handleEvent(e){switch(e.type){case`slotchange`:Zl(this,eu,tu).call(this,e);break;case`click`:this.handleClick(e);break;case`keydown`:H(this,cu).call(this,e);break;case`keyup`:H(this,su).call(this,e);break}}attributeChangedCallback(e,t,n){e===pu.CHECKED&&hu(this)&&!H(this,Ql)?this.setAttribute(`aria-checked`,n==null?`false`:`true`):e===pu.TYPE&&n!==t?this.role=`menuitem`+n:e===pu.DISABLED&&n!==t&&(n==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(pu.DISABLED)||this.enable(),this.role=`menuitem`+this.type,Xl(this,$l,gu(this,this.parentNode)),Zl(this,lu,uu).call(this),this.submenuElement&&Zl(this,nu,ru).call(this),this.shadowRoot.addEventListener(`slotchange`,this)}disconnectedCallback(){this.disable(),Zl(this,lu,uu).call(this),Xl(this,$l,null),this.shadowRoot.removeEventListener(`slotchange`,this)}get invokeTarget(){return this.getAttribute(`invoketarget`)}set invokeTarget(e){this.setAttribute(`invoketarget`,`${e}`)}get invokeTargetElement(){return this.invokeTarget?i(this)?.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector(`slot[name="submenu"]`).assignedElements({flatten:!0})[0]}get type(){return this.getAttribute(pu.TYPE)??``}set type(e){this.setAttribute(pu.TYPE,`${e}`)}get value(){return this.getAttribute(pu.VALUE)??this.text}set value(e){this.setAttribute(pu.VALUE,e)}get text(){return(this.textContent??``).trim()}get checked(){if(hu(this))return this.getAttribute(`aria-checked`)===`true`}set checked(e){hu(this)&&(Xl(this,Ql,!0),this.setAttribute(`aria-checked`,e?`true`:`false`),e?this.part.add(`checked`):this.part.remove(`checked`))}handleClick(e){hu(this)||this.invokeTargetElement&&a(this,e.target)&&this.invokeTargetElement.dispatchEvent(new Gc({relatedTarget:this}))}get keysUsed(){return[`Enter`,` `]}};Ql=new WeakMap,$l=new WeakMap,eu=new WeakSet,tu=function(e){let t=e.target;if(!t?.name)for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&e.textContent.trim()===``&&e.remove();t.name===`submenu`&&(this.submenuElement?Zl(this,nu,ru).call(this):Zl(this,iu,au).call(this))},nu=new WeakSet,ru=async function(){this.setAttribute(`aria-haspopup`,`menu`),this.setAttribute(`aria-expanded`,`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener(`change`,H(this,ou)),this.submenuElement.addEventListener(`addmenuitem`,H(this,ou)),this.submenuElement.addEventListener(`removemenuitem`,H(this,ou)),H(this,ou).call(this)},iu=new WeakSet,au=function(){this.removeAttribute(`aria-haspopup`),this.removeAttribute(`aria-expanded`),this.submenuElement.removeEventListener(`change`,H(this,ou)),this.submenuElement.removeEventListener(`addmenuitem`,H(this,ou)),this.submenuElement.removeEventListener(`removemenuitem`,H(this,ou)),H(this,ou).call(this)},ou=new WeakMap,su=new WeakMap,cu=new WeakMap,lu=new WeakSet,uu=function(){let e=H(this,$l)?.radioGroupItems;if(!e)return;let t=e.filter(e=>e.getAttribute(`aria-checked`)===`true`).pop();t||=e[0];for(let t of e)t.setAttribute(`aria-checked`,`false`);t?.setAttribute(`aria-checked`,`true`)},mu.shadowRootOptions={mode:`open`},mu.getTemplateHTML=du,mu.getSuffixSlotInnerHTML=fu;function hu(e){return e.type===`radio`||e.type===`checkbox`}function gu(e,t){if(!e)return null;let{host:n}=e.getRootNode();return!t&&n?gu(e,n):t?.items?t:gu(t,t?.parentNode)}g.customElements.get(`media-chrome-menu-item`)||g.customElements.define(`media-chrome-menu-item`,mu);function _u(e){return`
    ${Gl.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `}var vu=class extends Gl{get anchorElement(){return this.anchor===`auto`?c(this).querySelector(`media-settings-menu-button`):super.anchorElement}};vu.getTemplateHTML=_u,g.customElements.get(`media-settings-menu`)||g.customElements.define(`media-settings-menu`,vu);function yu(e){return`
    ${mu.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function bu(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}var xu=class extends mu{};xu.shadowRootOptions={mode:`open`},xu.getTemplateHTML=yu,xu.getSuffixSlotInnerHTML=bu,g.customElements.get(`media-settings-menu-item`)||g.customElements.define(`media-settings-menu-item`,xu);var Su=class extends fe{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute(`aria-haspopup`,`menu`)}get invokeTarget(){return this.getAttribute(`invoketarget`)}set invokeTarget(e){this.setAttribute(`invoketarget`,`${e}`)}get invokeTargetElement(){return this.invokeTarget?i(this)?.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;(e=this.invokeTargetElement)==null||e.dispatchEvent(new Gc({relatedTarget:this}))}};g.customElements.get(`media-chrome-menu-button`)||g.customElements.define(`media-chrome-menu-button`,Su);function Cu(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `}function wu(){return _(`Settings`)}var Tu=class extends Su{static get observedAttributes(){return[...super.observedAttributes,`target`]}connectedCallback(){super.connectedCallback(),this.setAttribute(`aria-label`,_(`settings`))}get invokeTargetElement(){return this.invokeTarget==null?c(this).querySelector(`media-settings-menu`):super.invokeTargetElement}};Tu.getSlotTemplateHTML=Cu,Tu.getTooltipContentHTML=wu,g.customElements.get(`media-settings-menu-button`)||g.customElements.define(`media-settings-menu-button`,Tu);var Eu=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Du=(e,t,n)=>(Eu(e,t,`read from private field`),n?n.call(e):t.get(e)),Ou=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},ku=(e,t,n,r)=>(Eu(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Au=(e,t,n)=>(Eu(e,t,`access private method`),n),ju,Mu,Nu,Pu,Fu,Iu,Lu=class extends Gl{constructor(){super(...arguments),Ou(this,Nu),Ou(this,Fu),Ou(this,ju,[]),Ou(this,Mu,void 0)}static get observedAttributes(){return[...super.observedAttributes,v.MEDIA_AUDIO_TRACK_LIST,v.MEDIA_AUDIO_TRACK_ENABLED,v.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===v.MEDIA_AUDIO_TRACK_ENABLED&&t!==n?this.value=n:e===v.MEDIA_AUDIO_TRACK_LIST&&t!==n&&(ku(this,ju,me(n??``)),Au(this,Nu,Pu).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener(`change`,Au(this,Fu,Iu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`change`,Au(this,Fu,Iu))}get anchorElement(){return this.anchor===`auto`?c(this)?.querySelector(`media-audio-track-menu-button`):super.anchorElement}get mediaAudioTrackList(){return Du(this,ju)}set mediaAudioTrackList(e){ku(this,ju,e),Au(this,Nu,Pu).call(this)}get mediaAudioTrackEnabled(){return s(this,v.MEDIA_AUDIO_TRACK_ENABLED)??``}set mediaAudioTrackEnabled(e){p(this,v.MEDIA_AUDIO_TRACK_ENABLED,e)}};ju=new WeakMap,Mu=new WeakMap,Nu=new WeakSet,Pu=function(){if(Du(this,Mu)===JSON.stringify(this.mediaAudioTrackList))return;ku(this,Mu,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;this.defaultSlot.textContent=``,e.sort((e,t)=>e.id.localeCompare(t.id,void 0,{numeric:!0}));for(let t of e){let e=Vl({type:`radio`,text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(Hl(this,`checked-indicator`)),this.defaultSlot.append(e)}},Fu=new WeakSet,Iu=function(){if(this.value==null)return;let e=new g.CustomEvent(ce.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},g.customElements.get(`media-audio-track-menu`)||g.customElements.define(`media-audio-track-menu`,Lu);var Ru=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function zu(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${Ru}</slot>
  `}function Bu(){return _(`Audio`)}var Vu=e=>{let t=_(`Audio`);e.setAttribute(`aria-label`,t)},Hu=class extends Su{static get observedAttributes(){return[...super.observedAttributes,v.MEDIA_AUDIO_TRACK_ENABLED,v.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Vu(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===v.MEDIA_LANG&&Vu(this)}get invokeTargetElement(){return this.invokeTarget==null?c(this)?.querySelector(`media-audio-track-menu`):super.invokeTargetElement}get mediaAudioTrackEnabled(){return s(this,v.MEDIA_AUDIO_TRACK_ENABLED)??``}set mediaAudioTrackEnabled(e){p(this,v.MEDIA_AUDIO_TRACK_ENABLED,e)}};Hu.getSlotTemplateHTML=zu,Hu.getTooltipContentHTML=Bu,g.customElements.get(`media-audio-track-menu-button`)||g.customElements.define(`media-audio-track-menu-button`,Hu);var Uu=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Wu=(e,t,n)=>(Uu(e,t,`read from private field`),n?n.call(e):t.get(e)),Gu=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Ku=(e,t,n,r)=>(Uu(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),qu=(e,t,n)=>(Uu(e,t,`access private method`),n),Ju,Yu,Xu,Zu,Qu,$u=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function ed(e){return`
    ${Gl.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${$u}</slot>
  `}var td=class extends Gl{constructor(){super(...arguments),Gu(this,Yu),Gu(this,Zu),Gu(this,Ju,void 0)}static get observedAttributes(){return[...super.observedAttributes,v.MEDIA_SUBTITLES_LIST,v.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===v.MEDIA_SUBTITLES_LIST&&t!==n?qu(this,Yu,Xu).call(this):e===v.MEDIA_SUBTITLES_SHOWING&&t!==n&&(this.value=n||``,qu(this,Yu,Xu).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener(`change`,qu(this,Zu,Qu))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`change`,qu(this,Zu,Qu))}get anchorElement(){return this.anchor===`auto`?c(this).querySelector(`media-captions-menu-button`):super.anchorElement}get mediaSubtitlesList(){return nd(this,v.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){rd(this,v.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return nd(this,v.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){rd(this,v.MEDIA_SUBTITLES_SHOWING,e)}};Ju=new WeakMap,Yu=new WeakSet,Xu=function(){let e=Wu(this,Ju)!==JSON.stringify(this.mediaSubtitlesList),t=this.value!==this.getAttribute(v.MEDIA_SUBTITLES_SHOWING);if(!e&&!t)return;Ku(this,Ju,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent=``;let n=!this.value,r=Vl({type:`radio`,text:this.formatMenuItemText(_(`Off`)),value:`off`,checked:n});r.prepend(Hl(this,`checked-indicator`)),this.defaultSlot.append(r);let i=this.mediaSubtitlesList;for(let e of i){let t=Vl({type:`radio`,text:this.formatMenuItemText(e.label,e),value:f(e),checked:this.value==f(e)});t.prepend(Hl(this,`checked-indicator`)),(e.kind??`subs`)===`captions`&&t.append(Hl(this,`captions-indicator`)),this.defaultSlot.append(t)}},Zu=new WeakSet,Qu=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(v.MEDIA_SUBTITLES_SHOWING),n=this.value!==t;if(e?.length&&n&&this.dispatchEvent(new g.CustomEvent(ce.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!n)return;let r=new g.CustomEvent(ce.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(r)},td.getTemplateHTML=ed;var nd=(e,t)=>{let n=e.getAttribute(t);return n?r(n):[]},rd=(e,t,n)=>{if(!n?.length){e.removeAttribute(t);return}let r=o(n);e.getAttribute(t)!==r&&e.setAttribute(t,r)};g.customElements.get(`media-captions-menu`)||g.customElements.define(`media-captions-menu`,td);var id=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,ad=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function od(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${id}</slot>
      <slot name="off">${ad}</slot>
    </slot>
  `}function sd(){return _(`Captions`)}var cd=e=>{e.setAttribute(`data-captions-enabled`,d(e).toString())},ld=e=>{e.setAttribute(`aria-label`,_(`closed captions`))},ud=class extends Su{static get observedAttributes(){return[...super.observedAttributes,v.MEDIA_SUBTITLES_LIST,v.MEDIA_SUBTITLES_SHOWING,v.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),ld(this),cd(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===v.MEDIA_SUBTITLES_SHOWING?cd(this):e===v.MEDIA_LANG&&ld(this)}get invokeTargetElement(){return this.invokeTarget==null?c(this)?.querySelector(`media-captions-menu`):super.invokeTargetElement}get mediaSubtitlesList(){return dd(this,v.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){fd(this,v.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return dd(this,v.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){fd(this,v.MEDIA_SUBTITLES_SHOWING,e)}};ud.getSlotTemplateHTML=od,ud.getTooltipContentHTML=sd;var dd=(e,t)=>{let n=e.getAttribute(t);return n?r(n):[]},fd=(e,t,n)=>{if(!n?.length){e.removeAttribute(t);return}let r=o(n);e.getAttribute(t)!==r&&e.setAttribute(t,r)};g.customElements.get(`media-captions-menu-button`)||g.customElements.define(`media-captions-menu-button`,ud);var pd=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},md=(e,t,n)=>(pd(e,t,`read from private field`),n?n.call(e):t.get(e)),hd=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},gd=(e,t,n)=>(pd(e,t,`access private method`),n),_d,vd,yd,bd,xd,Sd={RATES:`rates`},Cd=class extends Gl{constructor(){super(),hd(this,vd),hd(this,bd),hd(this,_d,new l(this,Sd.RATES,{defaultValue:ue})),gd(this,vd,yd).call(this)}static get observedAttributes(){return[...super.observedAttributes,v.MEDIA_PLAYBACK_RATE,Sd.RATES]}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===v.MEDIA_PLAYBACK_RATE&&t!=n?(this.value=n,gd(this,vd,yd).call(this)):e===Sd.RATES&&t!=n&&(md(this,_d).value=n,gd(this,vd,yd).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener(`change`,gd(this,bd,xd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`change`,gd(this,bd,xd))}get anchorElement(){return this.anchor===`auto`?c(this).querySelector(`media-playback-rate-menu-button`):super.anchorElement}get rates(){return md(this,_d)}set rates(e){e?Array.isArray(e)?md(this,_d).value=e.join(` `):typeof e==`string`&&(md(this,_d).value=e):md(this,_d).value=``,gd(this,vd,yd).call(this)}get mediaPlaybackRate(){return he(this,v.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ie(this,v.MEDIA_PLAYBACK_RATE,e)}};_d=new WeakMap,vd=new WeakSet,yd=function(){this.defaultSlot.textContent=``;let e=this.mediaPlaybackRate,t=new Set(Array.from(md(this,_d)).map(e=>Number(e)));e>0&&!t.has(e)&&t.add(e);let n=Array.from(t).sort((e,t)=>e-t);for(let t of n){let n=Vl({type:`radio`,text:this.formatMenuItemText(`${t}x`,t),value:t.toString(),checked:e===t});n.prepend(Hl(this,`checked-indicator`)),this.defaultSlot.append(n)}},bd=new WeakSet,xd=function(){if(!this.value)return;let e=new g.CustomEvent(ce.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},g.customElements.get(`media-playback-rate-menu`)||g.customElements.define(`media-playback-rate-menu`,Cd);function wd(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `}function Td(){return _(`Playback rate`)}var Ed=class extends Su{static get observedAttributes(){return[...super.observedAttributes,v.MEDIA_PLAYBACK_RATE]}constructor(){super(),this.container=this.shadowRoot.querySelector(`slot[name="icon"]`),this.container.innerHTML=`${this.mediaPlaybackRate??1}x`}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),e===v.MEDIA_PLAYBACK_RATE){let e=n?+n:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute(`aria-label`,_(`Playback rate {playbackRate}`,{playbackRate:t}))}}get invokeTargetElement(){return this.invokeTarget==null?c(this).querySelector(`media-playback-rate-menu`):super.invokeTargetElement}get mediaPlaybackRate(){return he(this,v.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){ie(this,v.MEDIA_PLAYBACK_RATE,e)}};Ed.getSlotTemplateHTML=wd,Ed.getTooltipContentHTML=Td,g.customElements.get(`media-playback-rate-menu-button`)||g.customElements.define(`media-playback-rate-menu-button`,Ed);var Dd=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Od=(e,t,n)=>(Dd(e,t,`read from private field`),n?n.call(e):t.get(e)),kd=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Ad=(e,t,n,r)=>(Dd(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),jd=(e,t,n)=>(Dd(e,t,`access private method`),n),Md,Nd,Pd,Fd,Id,Ld,Rd=class extends Gl{constructor(){super(...arguments),kd(this,Pd),kd(this,Id),kd(this,Md,[]),kd(this,Nd,{})}static get observedAttributes(){return[...super.observedAttributes,v.MEDIA_RENDITION_LIST,v.MEDIA_RENDITION_SELECTED,v.MEDIA_RENDITION_UNAVAILABLE,v.MEDIA_HEIGHT,v.MEDIA_WIDTH]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let n=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6;return`${n} (${`${t.toFixed(+(t<1))} Mbps`})`}return this.formatMenuItemText(n,e)}static compareRendition(e,t){return t.height===e.height?(t.bitrate??0)-(e.bitrate??0):t.height-e.height}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),t!==n)switch(e){case v.MEDIA_RENDITION_SELECTED:this.value=n??`auto`,jd(this,Pd,Fd).call(this);break;case v.MEDIA_RENDITION_LIST:Ad(this,Md,ge(n)),jd(this,Pd,Fd).call(this);break;case v.MEDIA_HEIGHT:case v.MEDIA_WIDTH:jd(this,Pd,Fd).call(this);break}}connectedCallback(){super.connectedCallback(),this.addEventListener(`change`,jd(this,Id,Ld))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`change`,jd(this,Id,Ld))}get anchorElement(){return this.anchor===`auto`?c(this).querySelector(`media-rendition-menu-button`):super.anchorElement}get mediaRenditionList(){return Od(this,Md)}set mediaRenditionList(e){Ad(this,Md,e),jd(this,Pd,Fd).call(this)}get mediaRenditionSelected(){return s(this,v.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){p(this,v.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return he(this,v.MEDIA_HEIGHT)}set mediaHeight(e){ie(this,v.MEDIA_HEIGHT,e)}get mediaWidth(){return he(this,v.MEDIA_WIDTH)}set mediaWidth(e){ie(this,v.MEDIA_WIDTH,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}};Md=new WeakMap,Nd=new WeakMap,Pd=new WeakSet,Fd=function(){let e=!this.mediaRenditionSelected;if(Od(this,Nd).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&Od(this,Nd).mediaHeight===this.mediaHeight&&Od(this,Nd).mediaWidth===this.mediaWidth&&Od(this,Nd).isAuto===e)return;Od(this,Nd).mediaRenditionList=JSON.stringify(this.mediaRenditionList),Od(this,Nd).mediaHeight=this.mediaHeight,Od(this,Nd).mediaWidth=this.mediaWidth,Od(this,Nd).isAuto=e;let t=this.mediaRenditionList.sort(this.compareRendition.bind(this)),n=t.find(e=>e.id===this.mediaRenditionSelected);for(let e of t)e.selected=e===n;this.defaultSlot.textContent=``;for(let n of t){let t=Vl({type:`radio`,text:this.formatRendition(n,{showBitrate:this.showRenditionBitrate(n)}),value:`${n.id}`,checked:n.selected&&!e});t.prepend(Hl(this,`checked-indicator`)),this.defaultSlot.append(t)}let r=n&&this.showRenditionBitrate(n),i;e&&(n?i=this.formatMenuItemText(`${_(`Auto`)} \u2022 ${this.formatRendition(n,{showBitrate:r})}`,n):this.mediaHeight>0&&this.mediaWidth>0&&(i=this.formatMenuItemText(`${_(`Auto`)} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),i||=this.formatMenuItemText(_(`Auto`));let a=Vl({type:`radio`,text:i,value:`auto`,checked:e});a.dataset.description=i,a.prepend(Hl(this,`checked-indicator`)),this.defaultSlot.append(a)},Id=new WeakSet,Ld=function(){if(this.value==null)return;let e=new g.CustomEvent(ce.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},g.customElements.get(`media-rendition-menu`)||g.customElements.define(`media-rendition-menu`,Rd);var zd=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function Bd(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${zd}</slot>
  `}function Vd(){return _(`Quality`)}var Hd=class extends Su{static get observedAttributes(){return[...super.observedAttributes,v.MEDIA_RENDITION_SELECTED,v.MEDIA_RENDITION_UNAVAILABLE,v.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute(`aria-label`,_(`quality`))}get invokeTargetElement(){return this.invokeTarget==null?c(this).querySelector(`media-rendition-menu`):super.invokeTargetElement}get mediaRenditionSelected(){return s(this,v.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){p(this,v.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return he(this,v.MEDIA_HEIGHT)}set mediaHeight(e){ie(this,v.MEDIA_HEIGHT,e)}};Hd.getSlotTemplateHTML=Bd,Hd.getTooltipContentHTML=Vd,g.customElements.get(`media-rendition-menu-button`)||g.customElements.define(`media-rendition-menu-button`,Hd);var Ud=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Wd=(e,t,n)=>(Ud(e,t,`read from private field`),n?n.call(e):t.get(e)),Gd=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Kd=(e,t,n,r)=>(Ud(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),qd=(e,t,n)=>(Ud(e,t,`access private method`),n),Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf,af,of,sf,cf,lf;function uf(e){return`
      ${Gl.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `}var df=class extends Gl{constructor(){super(),Gd(this,Yd),Gd(this,Zd),Gd(this,$d),Gd(this,tf),Gd(this,af),Gd(this,Jd,!1),Gd(this,rf,e=>{let t=e.target,n=t?.nodeName===`VIDEO`,r=qd(this,tf,nf).call(this,t);(n||r)&&(Wd(this,Jd)?qd(this,Zd,Qd).call(this):qd(this,af,of).call(this,e))}),Gd(this,sf,e=>{let t=e.target,n=this.contains(t),r=e.button===2,i=t?.nodeName===`VIDEO`,a=qd(this,tf,nf).call(this,t);n||r&&(i||a)||qd(this,Zd,Qd).call(this)}),Gd(this,cf,e=>{e.key===`Escape`&&qd(this,Zd,Qd).call(this)}),Gd(this,lf,e=>{let t=e.target;if(t.matches?.call(t,`button[invoke="copy"]`)){let e=t.closest(`media-context-menu-item`)?.querySelector(`input[slot="copy"]`);e&&navigator.clipboard.writeText(e.value)}qd(this,Zd,Qd).call(this)}),this.setAttribute(`noautohide`,``),qd(this,Yd,Xd).call(this)}connectedCallback(){super.connectedCallback(),c(this).addEventListener(`contextmenu`,Wd(this,rf)),this.addEventListener(`click`,Wd(this,lf))}disconnectedCallback(){super.disconnectedCallback(),c(this).removeEventListener(`contextmenu`,Wd(this,rf)),this.removeEventListener(`click`,Wd(this,lf)),document.removeEventListener(`mousedown`,Wd(this,sf)),document.removeEventListener(`keydown`,Wd(this,cf))}};Jd=new WeakMap,Yd=new WeakSet,Xd=function(){this.hidden=!Wd(this,Jd)},Zd=new WeakSet,Qd=function(){Kd(this,Jd,!1),qd(this,Yd,Xd).call(this)},$d=new WeakSet,ef=function(){document.querySelectorAll(`media-context-menu`).forEach(e=>{var t;e!==this&&qd(t=e,Zd,Qd).call(t)})},tf=new WeakSet,nf=function(e){return e?e.hasAttribute(`slot`)&&e.getAttribute(`slot`)===`media`?!0:e.nodeName.includes(`-`)&&e.tagName.includes(`-`)?e.hasAttribute(`src`)||e.hasAttribute(`poster`)||e.hasAttribute(`preload`)||e.hasAttribute(`playsinline`):!1:!1},rf=new WeakMap,af=new WeakSet,of=function(e){e.preventDefault(),qd(this,$d,ef).call(this),Kd(this,Jd,!0),this.style.position=`fixed`,this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,qd(this,Yd,Xd).call(this),document.addEventListener(`mousedown`,Wd(this,sf),{once:!0}),document.addEventListener(`keydown`,Wd(this,cf),{once:!0})},sf=new WeakMap,cf=new WeakMap,lf=new WeakMap,df.getTemplateHTML=uf,g.customElements.get(`media-context-menu`)||g.customElements.define(`media-context-menu`,df);function ff(e){return`
    ${mu.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `}var pf=class extends mu{};pf.shadowRootOptions={mode:`open`},pf.getTemplateHTML=ff,g.customElements.get(`media-context-menu-item`)||g.customElements.define(`media-context-menu-item`,pf);var mf=e=>{throw TypeError(e)},hf=(e,t,n)=>t.has(e)||mf(`Cannot `+n),U=(e,t,n)=>(hf(e,t,`read from private field`),n?n.call(e):t.get(e)),W=(e,t,n)=>t.has(e)?mf(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),G=(e,t,n,r)=>(hf(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),K=(e,t,n)=>(hf(e,t,`access private method`),n),gf=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>`u`){class e extends gf{}globalThis.DocumentFragment=e}var _f=class extends gf{},vf=class extends gf{},yf={get(e){},define(e,t,n){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(_f)}},bf,xf=class{constructor(e,t={}){W(this,bf),G(this,bf,t?.detail)}get detail(){return U(this,bf)}initCustomEvent(){}};bf=new WeakMap;function Sf(e,t){return new _f}var Cf={document:{createElement:Sf},DocumentFragment,customElements:yf,CustomEvent:xf,EventTarget:gf,HTMLElement:_f,HTMLVideoElement:vf},wf=typeof window>`u`||globalThis.customElements===void 0,Tf=wf?Cf:globalThis,Ef=wf?Cf.document:globalThis.document;function Df(e){let t=``;return Object.entries(e).forEach(([e,n])=>{n!=null&&(t+=`${Of(e)}: ${n}; `)}),t?t.trim():void 0}function Of(e){return e.replace(/([a-z])([A-Z])/g,`$1-$2`).toLowerCase()}function kf(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function q(e){if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}function Af(e){let t=jf(e).toString();return t?`?`+t:``}function jf(e){let t={};for(let n in e)e[n]!=null&&(t[n]=e[n]);return new URLSearchParams(t)}var Mf=(e,t)=>!e||!t?!1:e.contains(t)?!0:Mf(e,t.getRootNode().host),Nf=`mux.com`,Pf=(()=>{try{return`3.13.0`}catch{}return`UNKNOWN`})(),Ff=()=>Pf,If=(e,{token:t,customDomain:n=Nf,thumbnailTime:r,programTime:i}={})=>{let a=t==null?r:void 0,{aud:o}=di(t)??{};if(!(t&&o!==`t`))return`https://image.${n}/${e}/thumbnail.webp${Af({token:t,time:a,program_time:i})}`},Lf=(e,{token:t,customDomain:n=Nf,programStartTime:r,programEndTime:i}={})=>{let{aud:a}=di(t)??{};if(!(t&&a!==`s`))return`https://image.${n}/${e}/storyboard.vtt${Af({token:t,format:`webp`,program_start_time:r,program_end_time:i})}`},Rf=e=>{if(e){if([j.LIVE,j.ON_DEMAND].includes(e))return e;if(e!=null&&e.includes(`live`))return j.LIVE}},zf={crossorigin:`crossOrigin`,playsinline:`playsInline`};function Bf(e){return zf[e]??kf(e)}var Vf,Hf,J,Uf=class{constructor(e,t){W(this,Vf),W(this,Hf),W(this,J,[]),G(this,Vf,e),G(this,Hf,t)}[Symbol.iterator](){return U(this,J).values()}get length(){return U(this,J).length}get value(){return U(this,J).join(` `)??``}set value(e){e!==this.value&&(G(this,J,[]),this.add(...e?.split(` `)??[]))}toString(){return this.value}item(e){return U(this,J)[e]}values(){return U(this,J).values()}keys(){return U(this,J).keys()}forEach(e){U(this,J).forEach(e)}add(...e){var t,n;e.forEach(e=>{this.contains(e)||U(this,J).push(e)}),!(this.value===``&&!((t=U(this,Vf))!=null&&t.hasAttribute(`${U(this,Hf)}`)))&&((n=U(this,Vf))==null||n.setAttribute(`${U(this,Hf)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>{U(this,J).splice(U(this,J).indexOf(e),1)}),(t=U(this,Vf))==null||t.setAttribute(`${U(this,Hf)}`,`${this.value}`)}contains(e){return U(this,J).includes(e)}toggle(e,t){return t===void 0?this.contains(e)?(this.remove(e),!1):(this.add(e),!0):t?(this.add(e),!0):(this.remove(e),!1)}replace(e,t){this.remove(e),this.add(t)}};Vf=new WeakMap,Hf=new WeakMap,J=new WeakMap;var Wf=`[mux-player ${Ff()}]`;function Gf(...e){console.warn(Wf,...e)}function Y(...e){console.error(Wf,...e)}function Kf(e){let t=e.message??``;e.context&&(t+=` ${e.context}`),e.file&&(t+=` ${N(`Read more: `)}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),Gf(t)}var X={AUTOPLAY:`autoplay`,CROSSORIGIN:`crossorigin`,LOOP:`loop`,MUTED:`muted`,PLAYSINLINE:`playsinline`,PRELOAD:`preload`},qf={VOLUME:`volume`,PLAYBACKRATE:`playbackrate`,MUTED:`muted`};({...X,...qf});var Jf=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),Yf=Object.values(X).filter(e=>X.PLAYSINLINE!==e),Xf=Object.values(qf),Zf=[...Yf,...Xf],Qf=class extends Tf.HTMLElement{static get observedAttributes(){return Zf}constructor(){super()}attributeChangedCallback(e,t,n){switch(e){case qf.MUTED:this.media&&(this.media.muted=n!=null,this.media.defaultMuted=n!=null);return;case qf.VOLUME:{let e=q(n)??1;this.media&&(this.media.volume=e);return}case qf.PLAYBACKRATE:{let e=q(n)??1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){return this.media?.play()??Promise.reject()}pause(){var e;(e=this.media)==null||e.pause()}load(){var e;(e=this.media)==null||e.load()}get media(){return this.shadowRoot?.querySelector(`mux-video`)}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){return this.media?.paused??!0}get duration(){return this.media?.duration??NaN}get ended(){return this.media?.ended??!1}get buffered(){return this.media?.buffered??Jf}get seekable(){return this.media?.seekable??Jf}get readyState(){return this.media?.readyState??0}get videoWidth(){return this.media?.videoWidth??0}get videoHeight(){return this.media?.videoHeight??0}get currentSrc(){return this.media?.currentSrc??``}get currentTime(){return this.media?.currentTime??0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){return this.media?.volume??1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){return this.media?.playbackRate??1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){return q(this.getAttribute(qf.PLAYBACKRATE))??1}set defaultPlaybackRate(e){e==null?this.removeAttribute(qf.PLAYBACKRATE):this.setAttribute(qf.PLAYBACKRATE,`${e}`)}get crossOrigin(){return $f(this,X.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(X.CROSSORIGIN,`${e}`)}get autoplay(){return $f(this,X.AUTOPLAY)!=null}set autoplay(e){e?this.setAttribute(X.AUTOPLAY,typeof e==`string`?e:``):this.removeAttribute(X.AUTOPLAY)}get loop(){return $f(this,X.LOOP)!=null}set loop(e){e?this.setAttribute(X.LOOP,``):this.removeAttribute(X.LOOP)}get muted(){return this.media?.muted??!1}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return $f(this,X.MUTED)!=null}set defaultMuted(e){e?this.setAttribute(X.MUTED,``):this.removeAttribute(X.MUTED)}get playsInline(){return $f(this,X.PLAYSINLINE)!=null}set playsInline(e){Y(`playsInline is set to true by default and is not currently supported as a setter.`)}get preload(){return this.media?this.media.preload:this.getAttribute(`preload`)}set preload(e){[``,`none`,`metadata`,`auto`].includes(e)?this.setAttribute(X.PRELOAD,e):this.removeAttribute(X.PRELOAD)}};function $f(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var ep=Qf,tp=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,np=new WeakMap,rp=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let n=np.get(this.element);n&&n.set(this.type,this)}set(e){if(typeof e==`function`)this.handleEvent=e.bind(this.element);else if(typeof e==`object`&&typeof e.handleEvent==`function`)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=np.get(this.element);e&&e.delete(this.type)}}static for(t){np.has(t.element)||np.set(t.element,new Map);let n=t.attributeName.slice(2),r=np.get(t.element);return r&&r.has(n)?r.get(n):new e(t.element,n)}};function ip(e,t){return e instanceof nc&&e.attributeName.startsWith(`on`)?(rp.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),!0):!1}function ap(e,t){return t instanceof hp&&e instanceof rc?(t.renderInto(e),!0):!1}function op(e,t){return t instanceof DocumentFragment&&e instanceof rc?(t.childNodes.length&&e.replace(...t.childNodes),!0):!1}function sp(e,t){if(e instanceof nc){let n=e.attributeNamespace,r=e.element.getAttributeNS(n,e.attributeName);return String(t)!==r&&(e.value=String(t)),!0}return e.value=String(t),!0}function cp(e,t){if(e instanceof nc&&t instanceof Element){let n=e.element;return n[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),n[e.attributeName]=t),!0}return!1}function lp(e,t){if(typeof t==`boolean`&&e instanceof nc){let n=e.attributeNamespace;return t!==e.element.hasAttributeNS(n,e.attributeName)&&(e.booleanValue=t),!0}return!1}function up(e,t){return t===!1&&e instanceof rc?(e.replace(``),!0):!1}function dp(e,t){cp(e,t)||lp(e,t)||ip(e,t)||up(e,t)||ap(e,t)||op(e,t)||sp(e,t)}var fp=new Map,pp=new WeakMap,mp=new WeakMap,hp=class{constructor(e,t,n){this.strings=e,this.values=t,this.processor=n,this.stringsKey=this.strings.join(``)}get template(){if(fp.has(this.stringsKey))return fp.get(this.stringsKey);{let e=Ef.createElement(`template`),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,n,r)=>e+n+(r<t?`{{ ${r} }}`:``),``),fp.set(this.stringsKey,e),e}}renderInto(e){var t;let n=this.template;if(pp.get(e)!==n){pp.set(e,n);let t=new Js(n,this.values,this.processor);mp.set(e,t),e instanceof rc?e.replace(...t.children):e.appendChild(t);return}let r=mp.get(e);(t=r?.update)==null||t.call(r,this.values)}},gp={processCallback(e,t,n){if(n)for(let[e,r]of t)e in n&&dp(r,n[e]??``)}};function _p(e,...t){return new hp(e,t,gp)}function vp(e,t){e.renderInto(t)}var yp=e=>{let{tokens:t}=e;return t.drm?`:host(:not([cast-receiver])) { --_cast-button-drm-display: none; }`:``},bp=e=>_p`
  <style>
    ${yp(e)}
    ${tp}
  </style>
  ${Cp(e)}
`,xp=e=>{let t=e.hotKeys?`${e.hotKeys}`:``;return Rf(e.streamType)===`live`&&(t+=` noarrowleft noarrowright`),t},Sp=Object.values({TOP:`top`,CENTER:`center`,BOTTOM:`bottom`,LAYER:`layer`,MEDIA_LAYER:`media-layer`,POSTER_LAYER:`poster-layer`,VERTICAL_LAYER:`vertical-layer`,CENTERED_LAYER:`centered-layer`,GESTURE_LAYER:`gesture-layer`,CONTROLLER_LAYER:`controller`,BUTTON:`button`,RANGE:`range`,THUMB:`thumb`,DISPLAY:`display`,CONTROL_BAR:`control-bar`,MENU_BUTTON:`menu-button`,MENU:`menu`,MENU_ITEM:`menu-item`,OPTION:`option`,POSTER:`poster`,LIVE:`live`,PLAY:`play`,PRE_PLAY:`pre-play`,SEEK_BACKWARD:`seek-backward`,SEEK_FORWARD:`seek-forward`,MUTE:`mute`,CAPTIONS:`captions`,AIRPLAY:`airplay`,PIP:`pip`,FULLSCREEN:`fullscreen`,CAST:`cast`,PLAYBACK_RATE:`playback-rate`,VOLUME:`volume`,TIME:`time`,TITLE:`title`,AUDIO_TRACK:`audio-track`,RENDITION:`rendition`}).join(`, `),Cp=e=>{var t;return _p`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${e.defaultStreamType??!1}"
    hotkeys="${xp(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||!1}"
    noautoseektolive="${!!((t=e.streamType)!=null&&t.includes(j.LIVE))&&e.targetLiveWindow!==0}"
    novolumepref="${e.novolumepref||!1}"
    nomutedpref="${e.nomutedpref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${e.audio??!1}"
    style="${Df({"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor})??!1}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${e.forwardSeekOffset??!1}"
    backwardseekoffset="${e.backwardSeekOffset??!1}"
    playbackrates="${e.playbackRates??!1}"
    defaultshowremainingtime="${e.defaultShowRemainingTime??!1}"
    defaultduration="${e.defaultDuration??!1}"
    hideduration="${e.hideDuration??!1}"
    title="${e.title??!1}"
    videotitle="${e.videoTitle??!1}"
    proudlydisplaymuxbadge="${e.proudlyDisplayMuxBadge??!1}"
    exportparts="${Sp}"
    onclose="${e.onCloseErrorDialog}"
    onfocusin="${e.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${e.noHotKeys??!1}"
      target-live-window="${e.targetLiveWindow??!1}"
      stream-type="${Rf(e.streamType)??!1}"
      crossorigin="${e.crossOrigin??``}"
      playsinline
      autoplay="${e.autoplay??!1}"
      muted="${e.muted??!1}"
      loop="${e.loop??!1}"
      preload="${e.preload??!1}"
      debug="${e.debug??!1}"
      prefer-cmcd="${e.preferCmcd??!1}"
      disable-tracking="${e.disableTracking??!1}"
      disable-cookies="${e.disableCookies??!1}"
      prefer-playback="${e.preferPlayback??!1}"
      start-time="${e.startTime==null?!1:e.startTime}"
      initial-bandwidth-estimate-kbps="${e.initialBandwidthEstimateKbps==null?!1:e.initialBandwidthEstimateKbps}"
      initial-estimate-segments="${e.initialEstimateSegments==null?!1:e.initialEstimateSegments}"
      min-preload-segments="${e.minPreloadSegments==null?!1:e.minPreloadSegments}"
      beacon-collection-domain="${e.beaconCollectionDomain??!1}"
      player-init-time="${e.playerInitTime??!1}"
      player-software-name="${e.playerSoftwareName??!1}"
      player-software-version="${e.playerSoftwareVersion??!1}"
      env-key="${e.envKey??!1}"
      custom-domain="${e.customDomain??!1}"
      src="${e.src?e.src:e.playbackId?Ma(e):!1}"
      cast-src="${e.src?e.src:e.playbackId?Ma(e):!1}"
      cast-receiver="${e.castReceiver??!1}"
      drm-token="${e.tokens?.drm??!1}"
      playback-token="${e.tokens?.playback??!1}"
      exportparts="video"
      disable-pseudo-ended="${e.disablePseudoEnded??!1}"
      max-auto-resolution="${e.maxAutoResolution??!1}"
      cap-rendition-to-player-size="${e.capRenditionToPlayerSize??!1}"
    >
      ${e.storyboard?_p`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:_p``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${e.poster?e.poster:!1}"
        placeholdersrc="${e.placeholder??!1}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},wp=e=>e.charAt(0).toUpperCase()+e.slice(1),Tp=(e,t=!1)=>{if(e.muxCode){let n=wp(e.errorCategory??`video`),r=Br(e.errorCategory??O.VIDEO);if(e.muxCode===k.NETWORK_OFFLINE)return N(`Your device appears to be offline`,t);if(e.muxCode===k.NETWORK_TOKEN_EXPIRED)return N(`{category} URL has expired`,t).format({category:n});if([k.NETWORK_TOKEN_SUB_MISMATCH,k.NETWORK_TOKEN_AUD_MISMATCH,k.NETWORK_TOKEN_AUD_MISSING,k.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return N(`{category} URL is formatted incorrectly`,t).format({category:n});if(e.muxCode===k.NETWORK_TOKEN_MISSING)return N(`Invalid {categoryName} URL`,t).format({categoryName:r});if(e.muxCode===k.NETWORK_NOT_FOUND)return N(`{category} does not exist`,t).format({category:n});if(e.muxCode===k.NETWORK_NOT_READY){let n=e.streamType===`live`?`Live stream`:`Video`;return N(`{mediaType} is not currently available`,t).format({mediaType:n})}}if(e.code){if(e.code===A.MEDIA_ERR_NETWORK)return N(`Network Error`,t);if(e.code===A.MEDIA_ERR_DECODE)return N(`Media Error`,t);if(e.code===A.MEDIA_ERR_SRC_NOT_SUPPORTED)return N(`Source Not Supported`,t)}return N(`Error`,t)},Ep=(e,t=!1)=>{if(e.muxCode){let n=wp(e.errorCategory??`video`),r=Br(e.errorCategory??O.VIDEO);return e.muxCode===k.NETWORK_OFFLINE?N(`Check your internet connection and try reloading this video.`,t):e.muxCode===k.NETWORK_TOKEN_EXPIRED?N(`The video’s secured {tokenNamePrefix}-token has expired.`,t).format({tokenNamePrefix:r}):e.muxCode===k.NETWORK_TOKEN_SUB_MISMATCH?N(`The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.`,t).format({tokenNamePrefix:r}):e.muxCode===k.NETWORK_TOKEN_MALFORMED?N(`{category} URL is formatted incorrectly`,t).format({category:n}):[k.NETWORK_TOKEN_AUD_MISMATCH,k.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?N(`The {tokenNamePrefix}-token is formatted with incorrect information.`,t).format({tokenNamePrefix:r}):[k.NETWORK_TOKEN_MISSING,k.NETWORK_INVALID_URL].includes(e.muxCode)?N(`The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.`,t).format({tokenNamePrefix:r}):e.muxCode===k.NETWORK_NOT_FOUND?``:e.message}return e.code&&(e.code===A.MEDIA_ERR_NETWORK||e.code===A.MEDIA_ERR_DECODE||(e.code,A.MEDIA_ERR_SRC_NOT_SUPPORTED)),e.message},Dp=(e,t=!1)=>({title:Tp(e,t).toString(),message:Ep(e,t).toString()}),Op=e=>{if(e.muxCode){if(e.muxCode===k.NETWORK_TOKEN_EXPIRED)return`403-expired-token.md`;if(e.muxCode===k.NETWORK_TOKEN_MALFORMED)return`403-malformatted-token.md`;if([k.NETWORK_TOKEN_AUD_MISMATCH,k.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return`403-incorrect-aud-value.md`;if(e.muxCode===k.NETWORK_TOKEN_SUB_MISMATCH)return`403-playback-id-mismatch.md`;if(e.muxCode===k.NETWORK_TOKEN_MISSING)return`missing-signed-tokens.md`;if(e.muxCode===k.NETWORK_NOT_FOUND)return`404-not-found.md`;if(e.muxCode===k.NETWORK_NOT_READY)return`412-not-playable.md`}if(e.code){if(e.code===A.MEDIA_ERR_NETWORK)return``;if(e.code===A.MEDIA_ERR_DECODE)return`media-decode-error.md`;if(e.code===A.MEDIA_ERR_SRC_NOT_SUPPORTED)return`media-src-not-supported.md`}return``},kp=(e,t)=>{let n=Op(e);return{message:e.message,context:e.context,file:n}},Ap=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,jp=Ef.createElement(`template`);`innerHTML`in jp&&(jp.innerHTML=Ap);var Mp=class extends Ic{};Mp.template=jp.content?.children?.[0],Tf.customElements.get(`media-theme-gerwig`)||Tf.customElements.define(`media-theme-gerwig`,Mp);var Np=`gerwig`,Pp={SRC:`src`,POSTER:`poster`},Z={STYLE:`style`,DEFAULT_HIDDEN_CAPTIONS:`default-hidden-captions`,PRIMARY_COLOR:`primary-color`,SECONDARY_COLOR:`secondary-color`,ACCENT_COLOR:`accent-color`,FORWARD_SEEK_OFFSET:`forward-seek-offset`,BACKWARD_SEEK_OFFSET:`backward-seek-offset`,PLAYBACK_TOKEN:`playback-token`,THUMBNAIL_TOKEN:`thumbnail-token`,STORYBOARD_TOKEN:`storyboard-token`,FULLSCREEN_ELEMENT:`fullscreen-element`,DRM_TOKEN:`drm-token`,STORYBOARD_SRC:`storyboard-src`,THUMBNAIL_TIME:`thumbnail-time`,AUDIO:`audio`,NOHOTKEYS:`nohotkeys`,HOTKEYS:`hotkeys`,PLAYBACK_RATES:`playbackrates`,DEFAULT_SHOW_REMAINING_TIME:`default-show-remaining-time`,DEFAULT_DURATION:`default-duration`,TITLE:`title`,VIDEO_TITLE:`video-title`,PLACEHOLDER:`placeholder`,THEME:`theme`,DEFAULT_STREAM_TYPE:`default-stream-type`,TARGET_LIVE_WINDOW:`target-live-window`,EXTRA_SOURCE_PARAMS:`extra-source-params`,NO_VOLUME_PREF:`no-volume-pref`,NO_MUTED_PREF:`no-muted-pref`,CAST_RECEIVER:`cast-receiver`,NO_TOOLTIPS:`no-tooltips`,PROUDLY_DISPLAY_MUX_BADGE:`proudly-display-mux-badge`,DISABLE_PSEUDO_ENDED:`disable-pseudo-ended`},Fp=[`audio`,`backwardseekoffset`,`defaultduration`,`defaultshowremainingtime`,`defaultsubtitles`,`noautoseektolive`,`disabled`,`exportparts`,`forwardseekoffset`,`hideduration`,`hotkeys`,`nohotkeys`,`playbackrates`,`defaultstreamtype`,`streamtype`,`style`,`targetlivewindow`,`template`,`title`,`videotitle`,`novolumepref`,`nomutedpref`,`proudlydisplaymuxbadge`];function Ip(e,t){return{src:!e.playbackId&&e.src,playbackId:e.playbackId,hasSrc:!!e.playbackId||!!e.src||!!e.currentSrc,poster:e.poster,storyboard:e.media?.currentSrc&&e.storyboard,storyboardSrc:e.getAttribute(Z.STORYBOARD_SRC),fullscreenElement:e.getAttribute(Z.FULLSCREEN_ELEMENT),placeholder:e.getAttribute(`placeholder`),themeTemplate:Rp(e),thumbnailTime:!e.tokens.thumbnail&&e.thumbnailTime,autoplay:e.autoplay,crossOrigin:e.crossOrigin,loop:e.loop,noHotKeys:e.hasAttribute(Z.NOHOTKEYS),hotKeys:e.getAttribute(Z.HOTKEYS),muted:e.muted,paused:e.paused,preload:e.preload,envKey:e.envKey,preferCmcd:e.preferCmcd,debug:e.debug,disableTracking:e.disableTracking,disableCookies:e.disableCookies,tokens:e.tokens,beaconCollectionDomain:e.beaconCollectionDomain,maxResolution:e.maxResolution,minResolution:e.minResolution,maxAutoResolution:e.maxAutoResolution,programStartTime:e.programStartTime,programEndTime:e.programEndTime,assetStartTime:e.assetStartTime,assetEndTime:e.assetEndTime,renditionOrder:e.renditionOrder,metadata:e.metadata,playerInitTime:e.playerInitTime,playerSoftwareName:e.playerSoftwareName,playerSoftwareVersion:e.playerSoftwareVersion,startTime:e.startTime,initialBandwidthEstimateKbps:e.initialBandwidthEstimateKbps,initialEstimateSegments:e.initialEstimateSegments,minPreloadSegments:e.minPreloadSegments,preferPlayback:e.preferPlayback,audio:e.audio,defaultStreamType:e.defaultStreamType,targetLiveWindow:e.getAttribute(I.TARGET_LIVE_WINDOW),streamType:Rf(e.getAttribute(I.STREAM_TYPE)),primaryColor:e.getAttribute(Z.PRIMARY_COLOR),secondaryColor:e.getAttribute(Z.SECONDARY_COLOR),accentColor:e.getAttribute(Z.ACCENT_COLOR),forwardSeekOffset:e.forwardSeekOffset,backwardSeekOffset:e.backwardSeekOffset,defaultHiddenCaptions:e.defaultHiddenCaptions,defaultDuration:e.defaultDuration,defaultShowRemainingTime:e.defaultShowRemainingTime,hideDuration:zp(e),playbackRates:e.getAttribute(Z.PLAYBACK_RATES),customDomain:e.getAttribute(I.CUSTOM_DOMAIN)??void 0,title:e.getAttribute(Z.TITLE),videoTitle:e.getAttribute(Z.VIDEO_TITLE)??e.getAttribute(Z.TITLE),novolumepref:e.hasAttribute(Z.NO_VOLUME_PREF),nomutedpref:e.hasAttribute(Z.NO_MUTED_PREF),proudlyDisplayMuxBadge:e.hasAttribute(Z.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:e.castReceiver,disablePseudoEnded:e.hasAttribute(Z.DISABLE_PSEUDO_ENDED),capRenditionToPlayerSize:e.capRenditionToPlayerSize,...t,extraSourceParams:e.extraSourceParams}}var Lp=oe.formatErrorMessage;oe.formatErrorMessage=e=>{if(e instanceof A){let t=Dp(e,!1);return`
      ${t!=null&&t.title?`<h3>${t.title}</h3>`:``}
      ${t!=null&&t.message||t!=null&&t.linkUrl?`<p>
        ${t?.message}
        ${t!=null&&t.linkUrl?`<a
              href="${t.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${t.linkText??``} ${N(`(opens in a new window)`)}"
              >${t.linkText??t.linkUrl}</a
            >`:``}
      </p>`:``}
    `}return Lp(e)};function Rp(e){var t;let n=e.theme;if(n){let r=((t=e.getRootNode())?.getElementById)?.call(t,n);if(r&&r instanceof HTMLTemplateElement)return r;n.startsWith(`media-theme-`)||(n=`media-theme-${n}`);let i=Tf.customElements.get(n);if(i!=null&&i.template)return i.template}}function zp(e){let t=e.mediaController?.querySelector(`media-time-display`);return t&&getComputedStyle(t).getPropertyValue(`--media-duration-display-display`).trim()===`none`}function Bp(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith(`metadata-`)).reduce((t,n)=>{let r=e.getAttribute(n);return r!==null&&(t[n.replace(/^metadata-/,``).replace(/-/g,`_`)]=r),t},t)}var Vp=Object.values(I),Hp=Object.values(Pp),Up=Object.values(Z),Wp=Ff(),Gp=`mux-player`,Kp={isDialogOpen:!1},qp={redundant_streams:!0},Jp,Yp,Xp,Zp,Qp,$p,em,tm,nm,rm,im,am,Q,om,sm,cm,lm,um,dm,fm,pm,mm=class extends ep{constructor(){super(),W(this,Q),W(this,Jp),W(this,Yp,!1),W(this,Xp,{}),W(this,Zp,!0),W(this,Qp,new Uf(this,`hotkeys`)),W(this,$p),W(this,em,()=>K(this,Q,lm).call(this)),W(this,tm,()=>K(this,Q,lm).call(this)),W(this,nm,()=>K(this,Q,lm).call(this)),W(this,rm),W(this,im,{...Kp,onCloseErrorDialog:e=>{e.composedPath()[0]?.localName===`media-error-dialog`&&K(this,Q,cm).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{e.composedPath()[0]?.localName===`media-error-dialog`&&(Mf(this,Ef.activeElement)||e.preventDefault())}}),W(this,am,e=>{let t=this.media?.error;if(!(t instanceof A)){let{message:e,code:n}=t??{};t=new A(e,n)}if(!(t!=null&&t.fatal)){Gf(t),t.data&&Gf(`${t.name} data:`,t.data);return}let n=kp(t,!1);n.message&&Kf(n),Y(t),t.data&&Y(`${t.name} data:`,t.data),K(this,Q,cm).call(this,{isDialogOpen:!0})}),G(this,Jp,Aa()),this.attachShadow({mode:`open`}),K(this,Q,sm).call(this),this.isConnected&&K(this,Q,om).call(this)}static get NAME(){return Gp}static get VERSION(){return Wp}static get observedAttributes(){return[...ep.observedAttributes??[],...Hp,...Vp,...Up]}get mediaTheme(){return this.shadowRoot?.querySelector(`media-theme`)}get mediaController(){return(this.mediaTheme?.shadowRoot)?.querySelector(`media-controller`)}connectedCallback(){K(this,Q,om).call(this);let e=this.media;e&&(e.metadata=Bp(this))}disconnectedCallback(){var e,t,n,r,i,a;(e=U(this,$p))==null||e.disconnect(),(t=this.media)==null||t.removeEventListener(`streamtypechange`,U(this,em)),(n=this.media)==null||n.removeEventListener(`loadstart`,U(this,tm)),this.removeEventListener(`error`,U(this,am)),this.media&&(this.media.errorTranslator=void 0),(r=this.media?.textTracks)==null||r.removeEventListener(`addtrack`,U(this,nm)),(i=this.media?.textTracks)==null||i.removeEventListener(`removetrack`,U(this,nm)),(a=U(this,rm))==null||a.call(this),G(this,rm,void 0),G(this,Yp,!1)}attributeChangedCallback(e,t,n){switch(K(this,Q,om).call(this),super.attributeChangedCallback(e,t,n),e){case Z.HOTKEYS:U(this,Qp).value=n;break;case Z.THUMBNAIL_TIME:n!=null&&this.tokens.thumbnail&&Gf(N(`Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.`).toString());break;case Z.THUMBNAIL_TOKEN:if(n){let e=di(n);if(e){let{aud:t}=e,n=Ji.THUMBNAIL;t!==n&&Gf(N(`The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.`).format({aud:t,expectedAud:n,tokenNamePrefix:`thumbnail`}))}}break;case Z.STORYBOARD_TOKEN:if(n){let e=di(n);if(e){let{aud:t}=e,n=Ji.STORYBOARD;t!==n&&Gf(N(`The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.`).format({aud:t,expectedAud:n,tokenNamePrefix:`storyboard`}))}}break;case Z.DRM_TOKEN:if(n){let e=di(n);if(e){let{aud:t}=e,n=Ji.DRM;t!==n&&Gf(N(`The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.`).format({aud:t,expectedAud:n,tokenNamePrefix:`drm`}))}}break;case I.PLAYBACK_ID:n!=null&&n.includes(`?token`)&&Y(N(`The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.`).format({playbackId:n}));break;case I.STREAM_TYPE:n&&![j.LIVE,j.ON_DEMAND,j.UNKNOWN].includes(n)?[`ll-live`,`live:dvr`,`ll-live:dvr`].includes(this.streamType)?this.targetLiveWindow=n.includes(`dvr`)?1/0:0:Kf({file:`invalid-stream-type.md`,message:N("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):n===j.LIVE?this.getAttribute(Z.TARGET_LIVE_WINDOW)??(this.targetLiveWindow=0):this.targetLiveWindow=NaN;break;case Z.FULLSCREEN_ELEMENT:if(n!=null||n!==t){let e=Ef.getElementById(n),t=e?.querySelector(`mux-player`);this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}break;case I.CAP_RENDITION_TO_PLAYER_SIZE:(n==null||n!==t)&&(this.capRenditionToPlayerSize=n==null?void 0:!0);break}[I.PLAYBACK_ID,Pp.SRC,Z.PLAYBACK_TOKEN].includes(e)&&t!==n&&G(this,im,{...U(this,im),...Kp}),K(this,Q,lm).call(this,{[Bf(e)]:n})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(v.MEDIA_IS_FULLSCREEN)))return(t=this.mediaController)==null||t.dispatchEvent(new Tf.CustomEvent(ce.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var n;(n=this.mediaController)==null||n.addEventListener(se.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(v.MEDIA_IS_FULLSCREEN)))return(e=this.mediaController)==null||e.dispatchEvent(new Tf.CustomEvent(ce.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var n;(n=this.mediaController)==null||n.addEventListener(se.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){return this.getAttribute(I.PREFER_CMCD)??void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?qr.includes(e)?this.setAttribute(I.PREFER_CMCD,e):Gf(`Invalid value for preferCmcd. Must be one of ${qr.join()}`):this.removeAttribute(I.PREFER_CMCD))}get hasPlayed(){return this.mediaController?.hasAttribute(v.MEDIA_HAS_PLAYED)??!1}get inLiveWindow(){return this.mediaController?.hasAttribute(v.MEDIA_TIME_IS_LIVE)}get _hls(){return this.media?._hls}get mux(){return this.media?.mux}get theme(){return this.getAttribute(Z.THEME)??Np}set theme(e){this.setAttribute(Z.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let n of e.getAttributeNames()){if(Fp.includes(n))continue;let r=e.getAttribute(n);t[kf(n)]=r===``?!0:r}return t}set themeProps(e){var t,n;K(this,Q,om).call(this);let r={...this.themeProps,...e};for(let i in r){if(Fp.includes(i))continue;let r=e?.[i];typeof r==`boolean`||r==null?(t=this.mediaTheme)==null||t.toggleAttribute(Of(i),!!r):(n=this.mediaTheme)==null||n.setAttribute(Of(i),r)}}get playbackId(){return this.getAttribute(I.PLAYBACK_ID)??void 0}set playbackId(e){e?this.setAttribute(I.PLAYBACK_ID,e):this.removeAttribute(I.PLAYBACK_ID)}get src(){return this.playbackId?hm(this,Pp.SRC)??void 0:this.getAttribute(Pp.SRC)??void 0}set src(e){e?this.setAttribute(Pp.SRC,e):this.removeAttribute(Pp.SRC)}get poster(){let e=this.getAttribute(Pp.POSTER);if(e!=null)return e;let{tokens:t}=this;if(t.playback&&!t.thumbnail){Gf(`Missing expected thumbnail token. No poster image will be shown`);return}if(this.playbackId&&!this.audio)return If(this.playbackId,{customDomain:this.customDomain,thumbnailTime:this.thumbnailTime??this.startTime,programTime:this.programStartTime,token:t.thumbnail})}set poster(e){e||e===``?this.setAttribute(Pp.POSTER,e):this.removeAttribute(Pp.POSTER)}get storyboardSrc(){return this.getAttribute(Z.STORYBOARD_SRC)??void 0}set storyboardSrc(e){e?this.setAttribute(Z.STORYBOARD_SRC,e):this.removeAttribute(Z.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;if(this.storyboardSrc&&!e.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[j.LIVE,j.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard))return Lf(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(Z.AUDIO)}set audio(e){if(!e){this.removeAttribute(Z.AUDIO);return}this.setAttribute(Z.AUDIO,``)}get hotkeys(){return U(this,Qp)}get nohotkeys(){return this.hasAttribute(Z.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(Z.NOHOTKEYS);return}this.setAttribute(Z.NOHOTKEYS,``)}get thumbnailTime(){return q(this.getAttribute(Z.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(Z.THUMBNAIL_TIME,`${e}`)}get videoTitle(){return this.getAttribute(Z.VIDEO_TITLE)??this.getAttribute(Z.TITLE)??``}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(Z.VIDEO_TITLE,e):this.removeAttribute(Z.VIDEO_TITLE))}get placeholder(){return hm(this,Z.PLACEHOLDER)??``}set placeholder(e){this.setAttribute(Z.PLACEHOLDER,`${e}`)}get primaryColor(){let e=this.getAttribute(Z.PRIMARY_COLOR);if(e!=null||this.mediaTheme&&(e=(Tf.getComputedStyle(this.mediaTheme)?.getPropertyValue(`--_primary-color`))?.trim(),e))return e}set primaryColor(e){this.setAttribute(Z.PRIMARY_COLOR,`${e}`)}get secondaryColor(){let e=this.getAttribute(Z.SECONDARY_COLOR);if(e!=null||this.mediaTheme&&(e=(Tf.getComputedStyle(this.mediaTheme)?.getPropertyValue(`--_secondary-color`))?.trim(),e))return e}set secondaryColor(e){this.setAttribute(Z.SECONDARY_COLOR,`${e}`)}get accentColor(){let e=this.getAttribute(Z.ACCENT_COLOR);if(e!=null||this.mediaTheme&&(e=(Tf.getComputedStyle(this.mediaTheme)?.getPropertyValue(`--_accent-color`))?.trim(),e))return e}set accentColor(e){this.setAttribute(Z.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(Z.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(Z.DEFAULT_SHOW_REMAINING_TIME,``):this.removeAttribute(Z.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(Z.PLAYBACK_RATES))return this.getAttribute(Z.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(Z.PLAYBACK_RATES);return}this.setAttribute(Z.PLAYBACK_RATES,e.join(` `))}get forwardSeekOffset(){return q(this.getAttribute(Z.FORWARD_SEEK_OFFSET))??10}set forwardSeekOffset(e){this.setAttribute(Z.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){return q(this.getAttribute(Z.BACKWARD_SEEK_OFFSET))??10}set backwardSeekOffset(e){this.setAttribute(Z.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(Z.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(Z.DEFAULT_HIDDEN_CAPTIONS,``):this.removeAttribute(Z.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return q(this.getAttribute(Z.DEFAULT_DURATION))}set defaultDuration(e){e==null?this.removeAttribute(Z.DEFAULT_DURATION):this.setAttribute(Z.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(I.PLAYER_INIT_TIME)?q(this.getAttribute(I.PLAYER_INIT_TIME)):U(this,Jp)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(I.PLAYER_INIT_TIME):this.setAttribute(I.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){return this.getAttribute(I.PLAYER_SOFTWARE_NAME)??Gp}get playerSoftwareVersion(){return this.getAttribute(I.PLAYER_SOFTWARE_VERSION)??Wp}get beaconCollectionDomain(){return this.getAttribute(I.BEACON_COLLECTION_DOMAIN)??void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(I.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(I.BEACON_COLLECTION_DOMAIN))}get maxResolution(){return this.getAttribute(I.MAX_RESOLUTION)??void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(I.MAX_RESOLUTION,e):this.removeAttribute(I.MAX_RESOLUTION))}get minResolution(){return this.getAttribute(I.MIN_RESOLUTION)??void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(I.MIN_RESOLUTION,e):this.removeAttribute(I.MIN_RESOLUTION))}get maxAutoResolution(){return this.getAttribute(I.MAX_AUTO_RESOLUTION)??void 0}set maxAutoResolution(e){e==null?this.removeAttribute(I.MAX_AUTO_RESOLUTION):this.setAttribute(I.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){return this.getAttribute(I.RENDITION_ORDER)??void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(I.RENDITION_ORDER,e):this.removeAttribute(I.RENDITION_ORDER))}get programStartTime(){return q(this.getAttribute(I.PROGRAM_START_TIME))}set programStartTime(e){e==null?this.removeAttribute(I.PROGRAM_START_TIME):this.setAttribute(I.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return q(this.getAttribute(I.PROGRAM_END_TIME))}set programEndTime(e){e==null?this.removeAttribute(I.PROGRAM_END_TIME):this.setAttribute(I.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return q(this.getAttribute(I.ASSET_START_TIME))}set assetStartTime(e){e==null?this.removeAttribute(I.ASSET_START_TIME):this.setAttribute(I.ASSET_START_TIME,`${e}`)}get assetEndTime(){return q(this.getAttribute(I.ASSET_END_TIME))}set assetEndTime(e){e==null?this.removeAttribute(I.ASSET_END_TIME):this.setAttribute(I.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(Z.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(Z.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,n])=>(e[t]=n,e),{}):qp}set extraSourceParams(e){e==null?this.removeAttribute(Z.EXTRA_SOURCE_PARAMS):this.setAttribute(Z.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){return this.getAttribute(I.CUSTOM_DOMAIN)??void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(I.CUSTOM_DOMAIN,e):this.removeAttribute(I.CUSTOM_DOMAIN))}get envKey(){return hm(this,I.ENV_KEY)??void 0}set envKey(e){this.setAttribute(I.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(Z.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(Z.NO_VOLUME_PREF,``):this.removeAttribute(Z.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(Z.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(Z.NO_MUTED_PREF,``):this.removeAttribute(Z.NO_MUTED_PREF)}get debug(){return hm(this,I.DEBUG)!=null}set debug(e){e?this.setAttribute(I.DEBUG,``):this.removeAttribute(I.DEBUG)}get disableTracking(){return hm(this,I.DISABLE_TRACKING)!=null}set disableTracking(e){this.toggleAttribute(I.DISABLE_TRACKING,!!e)}get disableCookies(){return hm(this,I.DISABLE_COOKIES)!=null}set disableCookies(e){e?this.setAttribute(I.DISABLE_COOKIES,``):this.removeAttribute(I.DISABLE_COOKIES)}get streamType(){return this.getAttribute(I.STREAM_TYPE)??this.media?.streamType??j.UNKNOWN}set streamType(e){this.setAttribute(I.STREAM_TYPE,`${e}`)}get defaultStreamType(){return this.getAttribute(Z.DEFAULT_STREAM_TYPE)??this.mediaController?.getAttribute(Z.DEFAULT_STREAM_TYPE)??j.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(Z.DEFAULT_STREAM_TYPE,e):this.removeAttribute(Z.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){return this.hasAttribute(Z.TARGET_LIVE_WINDOW)?+this.getAttribute(Z.TARGET_LIVE_WINDOW):this.media?.targetLiveWindow??NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(e==null?this.removeAttribute(Z.TARGET_LIVE_WINDOW):this.setAttribute(Z.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){return this.media?.liveEdgeStart}get startTime(){return q(hm(this,I.START_TIME))}set startTime(e){this.setAttribute(I.START_TIME,`${e}`)}get initialBandwidthEstimateKbps(){return q(hm(this,I.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(e){e==null?this.removeAttribute(I.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(I.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`)}get initialEstimateSegments(){return q(hm(this,I.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(e){e==null?this.removeAttribute(I.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(I.INITIAL_ESTIMATE_SEGMENTS,`${e}`)}get minPreloadSegments(){return q(hm(this,I.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(e){e==null?this.removeAttribute(I.MIN_PRELOAD_SEGMENTS):this.setAttribute(I.MIN_PRELOAD_SEGMENTS,`${e}`)}get preferPlayback(){let e=this.getAttribute(I.PREFER_PLAYBACK);if(e===Gr.MSE||e===Gr.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===Gr.MSE||e===Gr.NATIVE?this.setAttribute(I.PREFER_PLAYBACK,e):this.removeAttribute(I.PREFER_PLAYBACK))}get metadata(){return this.media?.metadata}set metadata(e){if(K(this,Q,om).call(this),!this.media){Y(`underlying media element missing when trying to set metadata. metadata will not be set.`);return}this.media.metadata={...Bp(this),...e}}get _hlsConfig(){return this.media?._hlsConfig}set _hlsConfig(e){if(K(this,Q,om).call(this),!this.media){Y(`underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.`);return}this.media._hlsConfig=e}async addCuePoints(e){if(K(this,Q,om).call(this),!this.media){Y(`underlying media element missing when trying to addCuePoints. cuePoints will not be added.`);return}return this.media?.addCuePoints(e)}get activeCuePoint(){return this.media?.activeCuePoint}get cuePoints(){return this.media?.cuePoints??[]}addChapters(e){if(K(this,Q,om).call(this),!this.media){Y(`underlying media element missing when trying to addChapters. chapters will not be added.`);return}return this.media?.addChapters(e)}get activeChapter(){return this.media?.activeChapter}get chapters(){return this.media?.chapters??[]}getStartDate(){return this.media?.getStartDate()}get currentPdt(){return this.media?.currentPdt}get tokens(){let e=this.getAttribute(Z.PLAYBACK_TOKEN),t=this.getAttribute(Z.DRM_TOKEN),n=this.getAttribute(Z.THUMBNAIL_TOKEN),r=this.getAttribute(Z.STORYBOARD_TOKEN);return{...U(this,Xp),...e==null?{}:{playback:e},...t==null?{}:{drm:t},...n==null?{}:{thumbnail:n},...r==null?{}:{storyboard:r}}}set tokens(e){G(this,Xp,e??{})}get playbackToken(){return this.getAttribute(Z.PLAYBACK_TOKEN)??void 0}set playbackToken(e){this.setAttribute(Z.PLAYBACK_TOKEN,`${e}`)}get drmToken(){return this.getAttribute(Z.DRM_TOKEN)??void 0}set drmToken(e){this.setAttribute(Z.DRM_TOKEN,`${e}`)}get thumbnailToken(){return this.getAttribute(Z.THUMBNAIL_TOKEN)??void 0}set thumbnailToken(e){this.setAttribute(Z.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){return this.getAttribute(Z.STORYBOARD_TOKEN)??void 0}set storyboardToken(e){this.setAttribute(Z.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,n,r){let i=this.media?.nativeEl;if(i)return Oi(i,e,t,n,r)}removeTextTrack(e){let t=this.media?.nativeEl;if(t)return ki(t,e)}get textTracks(){return this.media?.textTracks}get castReceiver(){return this.getAttribute(Z.CAST_RECEIVER)??void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(Z.CAST_RECEIVER,e):this.removeAttribute(Z.CAST_RECEIVER))}get castCustomData(){return this.media?.castCustomData}set castCustomData(e){if(!this.media){Y(`underlying media element missing when trying to set castCustomData. castCustomData will not be set.`);return}this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(Z.NO_TOOLTIPS)}set noTooltips(e){if(!e){this.removeAttribute(Z.NO_TOOLTIPS);return}this.setAttribute(Z.NO_TOOLTIPS,``)}get proudlyDisplayMuxBadge(){return this.hasAttribute(Z.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(Z.PROUDLY_DISPLAY_MUX_BADGE,``):this.removeAttribute(Z.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){return this.media?.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){if(!this.media){Y(`underlying media element missing when trying to set capRenditionToPlayerSize`);return}this.media.capRenditionToPlayerSize=e}};Jp=new WeakMap,Yp=new WeakMap,Xp=new WeakMap,Zp=new WeakMap,Qp=new WeakMap,$p=new WeakMap,em=new WeakMap,tm=new WeakMap,nm=new WeakMap,rm=new WeakMap,im=new WeakMap,am=new WeakMap,Q=new WeakSet,om=function(){var e,t;if(!U(this,Yp)){G(this,Yp,!0),K(this,Q,lm).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof Tf.HTMLElement))throw``}catch{Y(`<media-theme> failed to upgrade!`)}try{customElements.upgrade(this.media)}catch{Y(`underlying media element failed to upgrade!`)}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof u))throw``}catch{Y(`<media-controller> failed to upgrade!`)}K(this,Q,um).call(this),K(this,Q,dm).call(this),K(this,Q,fm).call(this),G(this,Zp,this.mediaController?.hasAttribute(m.USER_INACTIVE)??!0),K(this,Q,pm).call(this),(e=this.media)==null||e.addEventListener(`streamtypechange`,U(this,em)),(t=this.media)==null||t.addEventListener(`loadstart`,U(this,tm))}},sm=function(){var e,t;try{(e=window==null?void 0:window.CSS)==null||e.registerProperty({name:`--media-primary-color`,syntax:`<color>`,inherits:!0}),(t=window==null?void 0:window.CSS)==null||t.registerProperty({name:`--media-secondary-color`,syntax:`<color>`,inherits:!0})}catch{}},cm=function(e){Object.assign(U(this,im),e),K(this,Q,lm).call(this)},lm=function(e={}){vp(bp(Ip(this,{...U(this,im),...e})),this.shadowRoot)},um=function(){let e=e=>{var t,n;if(!(e!=null&&e.startsWith(`theme-`)))return;let r=e.replace(/^theme-/,``);if(Fp.includes(r))return;let i=this.getAttribute(e);i==null?(n=this.mediaTheme)==null||n.removeAttribute(r):(t=this.mediaTheme)==null||t.setAttribute(r,i)};G(this,$p,new MutationObserver(t=>{for(let{attributeName:n}of t)e(n)})),U(this,$p).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},dm=function(){this.addEventListener(`error`,U(this,am)),this.media&&(this.media.errorTranslator=(e={})=>{if(!(this.media?.error instanceof A))return e;let t=kp(this.media?.error,!1);return{player_error_code:this.media?.error.code,player_error_message:t.message?String(t.message):e.player_error_message,player_error_context:t.context?String(t.context):e.player_error_context}})},fm=function(){var e,t;(e=this.media?.textTracks)==null||e.addEventListener(`addtrack`,U(this,nm)),(t=this.media?.textTracks)==null||t.addEventListener(`removetrack`,U(this,nm))},pm=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let n,r=new WeakMap,i=()=>this.streamType===j.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,a=(e,t,n=!1)=>{i()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10))if(!t||this.paused){let t=e.text.split(`
`).length,i=-3;this.streamType===j.LIVE&&(i=-2);let a=i-t;if(e.line===a&&!n)return;r.has(e)||r.set(e,e.line),e.line=a}else setTimeout(()=>{e.line=r.get(e)||`auto`},500)})},o=()=>{a(n,this.mediaController?.hasAttribute(m.USER_INACTIVE)??!1)},s=()=>{let e=Array.from(this.mediaController?.media?.textTracks||[]).filter(e=>[`subtitles`,`captions`].includes(e.kind)&&e.mode===`showing`)[0];e!==n&&n?.removeEventListener(`cuechange`,o),n=e,n?.addEventListener(`cuechange`,o),a(n,U(this,Zp))};s(),(e=this.textTracks)==null||e.addEventListener(`change`,s),(t=this.textTracks)==null||t.addEventListener(`addtrack`,s);let c=()=>{let e=this.mediaController?.hasAttribute(m.USER_INACTIVE)??!0;U(this,Zp)!==e&&(G(this,Zp,e),a(n,U(this,Zp)))};this.addEventListener(`userinactivechange`,c),G(this,rm,()=>{var e,t;n?.removeEventListener(`cuechange`,o),(e=this.textTracks)==null||e.removeEventListener(`change`,s),(t=this.textTracks)==null||t.removeEventListener(`addtrack`,s),this.removeEventListener(`userinactivechange`,c)})};function hm(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var gm=mm,_m=e=>{throw TypeError(e)},vm=(e,t,n)=>t.has(e)||_m(`Cannot `+n),ym=(e,t,n)=>(vm(e,t,`read from private field`),n?n.call(e):t.get(e)),bm=(e,t,n)=>t.has(e)?_m(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),xm=(e,t,n,r)=>(vm(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Sm=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>`u`){class e extends Sm{}globalThis.DocumentFragment=e}var Cm=class extends Sm{},wm=class extends Sm{},Tm={get(e){},define(e,t,n){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Cm)}},Em,Dm=class{constructor(e,t={}){bm(this,Em),xm(this,Em,t?.detail)}get detail(){return ym(this,Em)}initCustomEvent(){}};Em=new WeakMap;function Om(e,t){return new Cm}var km={document:{createElement:Om},DocumentFragment,customElements:Tm,CustomEvent:Dm,EventTarget:Sm,HTMLElement:Cm,HTMLVideoElement:wm},Am=typeof window>`u`||globalThis.customElements===void 0,jm=Am?km:globalThis;Am?km.document:globalThis.document,jm.customElements.get(`mux-player`)||(jm.customElements.define(`mux-player`,gm),jm.MuxPlayerElement=gm);var Mm=!0,Nm={className:`class`,classname:`class`,htmlFor:`for`,crossOrigin:`crossorigin`,viewBox:`viewBox`,playsInline:`playsinline`,autoPlay:`autoplay`,playbackRate:`playbackrate`},Pm=e=>e==null,Fm=(e,t)=>Pm(t)?!1:e in t,Im=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),Lm=(e,t)=>{if(!(!Mm&&typeof t==`boolean`&&!t)){if(Fm(e,Nm))return Nm[e];if(t!==void 0)return/[A-Z]/.test(e)?Im(e):e}},Rm=(e,t)=>!Mm&&typeof e==`boolean`?``:e,zm=(e={})=>{let{ref:t,...n}=e;return Object.entries(n).reduce((e,[t,n])=>{let r=Lm(t,n);return r&&(e[r]=Rm(n,t)),e},{})};function Bm(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Vm(...e){return t=>{let n=!1,r=e.map(e=>{let r=Bm(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Bm(e[t],null)}}}}function Hm(...e){return Se.useCallback(Vm(...e),e)}var Um=Object.prototype.hasOwnProperty,Wm=(e,t)=>{if(Object.is(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;if(Array.isArray(e))return!Array.isArray(t)||e.length!==t.length?!1:e.some((e,n)=>t[n]===e);let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++)if(!Um.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0},Gm=(e,t,n)=>!Wm(t,e[n]),Km=(e,t,n)=>{e[n]=t},qm=(e,t,n,r=Km,i=Gm)=>(0,Se.useEffect)(()=>{let a=n?.current;a&&i(a,t,e)&&r(a,t,e)},[n?.current,t]),Jm=(()=>{try{return`3.13.0`}catch{}return`UNKNOWN`})(),Ym=()=>Jm,$=(e,t,n)=>(0,Se.useEffect)(()=>{let r=t?.current;if(!r||!n)return;let i=e,a=n;return r.addEventListener(i,a),()=>{r.removeEventListener(i,a)}},[t?.current,n,e]),Xm=Se.forwardRef(({children:e,...t},n)=>Se.createElement(`mux-player`,{suppressHydrationWarning:!0,...zm(t),ref:n},e)),Zm=(e,t)=>{let{onAbort:n,onCanPlay:r,onCanPlayThrough:i,onEmptied:a,onLoadStart:o,onLoadedData:s,onLoadedMetadata:c,onProgress:l,onDurationChange:u,onVolumeChange:d,onRateChange:f,onResize:p,onWaiting:m,onPlay:h,onPlaying:ee,onTimeUpdate:te,onPause:ne,onSeeking:re,onSeeked:ie,onStalled:ae,onSuspend:oe,onEnded:se,onError:ce,onCuePointChange:le,onChapterChange:ue,metadata:de,tokens:fe,paused:pe,playbackId:g,playbackRates:me,currentTime:he,themeProps:_,extraSourceParams:ge,castCustomData:_e,_hlsConfig:v,...ve}=t;return qm(`tokens`,fe,e),qm(`playbackId`,g,e),qm(`playbackRates`,me,e),qm(`metadata`,de,e),qm(`extraSourceParams`,ge,e),qm(`_hlsConfig`,v,e),qm(`themeProps`,_,e),qm(`castCustomData`,_e,e),qm(`paused`,pe,e,(e,t)=>{t!=null&&(t?e.pause():e.play())},(e,t,n)=>e.hasAttribute(`autoplay`)&&!e.hasPlayed?!1:Gm(e,t,n)),qm(`currentTime`,he,e,(e,t)=>{t!=null&&(e.currentTime=t)}),$(`abort`,e,n),$(`canplay`,e,r),$(`canplaythrough`,e,i),$(`emptied`,e,a),$(`loadstart`,e,o),$(`loadeddata`,e,s),$(`loadedmetadata`,e,c),$(`progress`,e,l),$(`durationchange`,e,u),$(`volumechange`,e,d),$(`ratechange`,e,f),$(`resize`,e,p),$(`waiting`,e,m),$(`play`,e,h),$(`playing`,e,ee),$(`timeupdate`,e,te),$(`pause`,e,ne),$(`seeking`,e,re),$(`seeked`,e,ie),$(`stalled`,e,ae),$(`suspend`,e,oe),$(`ended`,e,se),$(`error`,e,ce),$(`cuepointchange`,e,le),$(`chapterchange`,e,ue),[ve]},Qm=Ym(),$m=`mux-player-react`,eh=Se.forwardRef((e,t)=>{let n=(0,Se.useRef)(null),r=Hm(n,t),[i]=Zm(n,e),[a]=(0,Se.useState)(e.playerInitTime??Aa());return Se.createElement(Xm,{ref:r,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:$m,playerSoftwareVersion:Qm,playerInitTime:a,...i})});export{Xr as MaxResolution,A as MediaError,Zr as MinResolution,Qr as RenditionOrder,eh as default,Aa as generatePlayerInitTime,$m as playerSoftwareName,Qm as playerSoftwareVersion};
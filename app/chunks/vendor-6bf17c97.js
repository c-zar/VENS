function O(){}function he(e,t){for(const n in t)e[n]=t[n];return e}function z(e){return e()}function Z(){return Object.create(null)}function k(e){e.forEach(z)}function ve(e){return typeof e=="function"}function ge(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let L;function zt(e,t){return L||(L=document.createElement("a")),L.href=t,e===L.href}function we(e){return Object.keys(e).length===0}function Zt(e,t,n,r){if(e){const a=ee(e,t,n,r);return e[0](a)}}function ee(e,t,n,r){return e[1]&&r?he(n.ctx.slice(),e[1](r(t))):n.ctx}function en(e,t,n,r){if(e[2]&&r){const a=e[2](r(n));if(t.dirty===void 0)return a;if(typeof a=="object"){const i=[],o=Math.max(t.dirty.length,a.length);for(let s=0;s<o;s+=1)i[s]=t.dirty[s]|a[s];return i}return t.dirty|a}return t.dirty}function tn(e,t,n,r,a,i){if(a){const o=ee(t,n,r,i);e.p(o,a)}}function nn(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}function rn(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function an(e,t){const n={};t=new Set(t);for(const r in e)!t.has(r)&&r[0]!=="$"&&(n[r]=e[r]);return n}let Y=!1;function ye(){Y=!0}function be(){Y=!1}function pe(e,t,n,r){for(;e<t;){const a=e+(t-e>>1);n(a)<=r?e=a+1:t=a}return e}function _e(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const u=[];for(let c=0;c<t.length;c++){const m=t[c];m.claim_order!==void 0&&u.push(m)}t=u}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let a=0;for(let u=0;u<t.length;u++){const c=t[u].claim_order,m=(a>0&&t[n[a]].claim_order<=c?a+1:pe(1,a,w=>t[n[w]].claim_order,c))-1;r[u]=n[m]+1;const l=m+1;n[l]=u,a=Math.max(l,a)}const i=[],o=[];let s=t.length-1;for(let u=n[a]+1;u!=0;u=r[u-1]){for(i.push(t[u-1]);s>=u;s--)o.push(t[s]);s--}for(;s>=0;s--)o.push(t[s]);i.reverse(),o.sort((u,c)=>u.claim_order-c.claim_order);for(let u=0,c=0;u<o.length;u++){for(;c<i.length&&o[u].claim_order>=i[c].claim_order;)c++;const m=c<i.length?i[c]:null;e.insertBefore(o[u],m)}}function Te(e,t){if(Y){for(_e(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function on(e,t,n){Y&&!n?Te(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function Ce(e){e.parentNode.removeChild(e)}function un(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function xe(e){return document.createElement(e)}function Ee(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function I(e){return document.createTextNode(e)}function sn(){return I(" ")}function cn(){return I("")}function Me(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function dn(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)t[r]==null?e.removeAttribute(r):r==="style"?e.style.cssText=t[r]:r==="__value"?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:Me(e,r,t[r])}function De(e){return Array.from(e.childNodes)}function Pe(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function te(e,t,n,r,a=!1){Pe(e);const i=(()=>{for(let o=e.claim_info.last_index;o<e.length;o++){const s=e[o];if(t(s)){const u=n(s);return u===void 0?e.splice(o,1):e[o]=u,a||(e.claim_info.last_index=o),s}}for(let o=e.claim_info.last_index-1;o>=0;o--){const s=e[o];if(t(s)){const u=n(s);return u===void 0?e.splice(o,1):e[o]=u,a?u===void 0&&e.claim_info.last_index--:e.claim_info.last_index=o,s}}return r()})();return i.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,i}function ne(e,t,n,r){return te(e,a=>a.nodeName===t,a=>{const i=[];for(let o=0;o<a.attributes.length;o++){const s=a.attributes[o];n[s.name]||i.push(s.name)}i.forEach(o=>a.removeAttribute(o))},()=>r(t))}function fn(e,t,n){return ne(e,t,n,xe)}function ln(e,t,n){return ne(e,t,n,Ee)}function Oe(e,t){return te(e,n=>n.nodeType===3,n=>{const r=""+t;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>I(t),!0)}function mn(e){return Oe(e," ")}function hn(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function vn(e,t,n,r){e.style.setProperty(t,n,r?"important":"")}function gn(e,t=document.body){return Array.from(t.querySelectorAll(e))}let F;function q(e){F=e}function Q(){if(!F)throw new Error("Function called outside component initialization");return F}function wn(e){Q().$$.on_mount.push(e)}function yn(e){Q().$$.after_update.push(e)}function bn(e,t){Q().$$.context.set(e,t)}const S=[],re=[],A=[],ae=[],ke=Promise.resolve();let B=!1;function Se(){B||(B=!0,ke.then(ie))}function X(e){A.push(e)}let V=!1;const G=new Set;function ie(){if(!V){V=!0;do{for(let e=0;e<S.length;e+=1){const t=S[e];q(t),We(t.$$)}for(q(null),S.length=0;re.length;)re.pop()();for(let e=0;e<A.length;e+=1){const t=A[e];G.has(t)||(G.add(t),t())}A.length=0}while(S.length);for(;ae.length;)ae.pop()();B=!1,V=!1,G.clear()}}function We(e){if(e.fragment!==null){e.update(),k(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(X)}}const j=new Set;let C;function pn(){C={r:0,c:[],p:C}}function _n(){C.r||k(C.c),C=C.p}function Ue(e,t){e&&e.i&&(j.delete(e),e.i(t))}function Tn(e,t,n,r){if(e&&e.o){if(j.has(e))return;j.add(e),C.c.push(()=>{j.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function Cn(e,t){const n={},r={},a={$$scope:1};let i=e.length;for(;i--;){const o=e[i],s=t[i];if(s){for(const u in o)u in s||(r[u]=1);for(const u in s)a[u]||(n[u]=s[u],a[u]=1);e[i]=s}else for(const u in o)a[u]=1}for(const o in r)o in n||(n[o]=void 0);return n}function xn(e){return typeof e=="object"&&e!==null?e:{}}function En(e){e&&e.c()}function Mn(e,t){e&&e.l(t)}function Ne(e,t,n,r){const{fragment:a,on_mount:i,on_destroy:o,after_update:s}=e.$$;a&&a.m(t,n),r||X(()=>{const u=i.map(z).filter(ve);o?o.push(...u):k(u),e.$$.on_mount=[]}),s.forEach(X)}function Le(e,t){const n=e.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ye(e,t){e.$$.dirty[0]===-1&&(S.push(e),Se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Dn(e,t,n,r,a,i,o,s=[-1]){const u=F;q(e);const c=e.$$={fragment:null,ctx:null,props:i,update:O,not_equal:a,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:Z(),dirty:s,skip_bound:!1,root:t.target||u.$$.root};o&&o(c.root);let m=!1;if(c.ctx=n?n(e,t.props||{},(l,w,...E)=>{const _=E.length?E[0]:w;return c.ctx&&a(c.ctx[l],c.ctx[l]=_)&&(!c.skip_bound&&c.bound[l]&&c.bound[l](_),m&&Ye(e,l)),w}):[],c.update(),m=!0,k(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){ye();const l=De(t.target);c.fragment&&c.fragment.l(l),l.forEach(Ce)}else c.fragment&&c.fragment.c();t.intro&&Ue(e.$$.fragment),Ne(e,t.target,t.anchor,t.customElement),be(),ie()}q(u)}class Pn{$destroy(){Le(this,1),this.$destroy=O}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}$set(t){this.$$set&&!we(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const D=[];function On(e,t=O){let n;const r=new Set;function a(s){if(ge(e,s)&&(e=s,n)){const u=!D.length;for(const c of r)c[1](),D.push(c,e);if(u){for(let c=0;c<D.length;c+=2)D[c][0](D[c+1]);D.length=0}}}function i(s){a(s(e))}function o(s,u=O){const c=[s,u];return r.add(c),r.size===1&&(n=t(a)||O),s(e),()=>{r.delete(c),r.size===0&&(n(),n=null)}}return{set:a,update:i,subscribe:o}}var Fe=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};(function(e,t){(function(n,r){r()})(Fe,function(){function n(a){var i=!0,o=!1,s=null,u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(d){return!!(d&&d!==document&&d.nodeName!=="HTML"&&d.nodeName!=="BODY"&&"classList"in d&&"contains"in d.classList)}function m(d){var me=d.type,K=d.tagName;return!!(K==="INPUT"&&u[me]&&!d.readOnly||K==="TEXTAREA"&&!d.readOnly||d.isContentEditable)}function l(d){d.classList.contains("focus-visible")||(d.classList.add("focus-visible"),d.setAttribute("data-focus-visible-added",""))}function w(d){!d.hasAttribute("data-focus-visible-added")||(d.classList.remove("focus-visible"),d.removeAttribute("data-focus-visible-added"))}function E(d){d.metaKey||d.altKey||d.ctrlKey||(c(a.activeElement)&&l(a.activeElement),i=!0)}function _(d){i=!1}function N(d){!c(d.target)||(i||m(d.target))&&l(d.target)}function H(d){!c(d.target)||(d.target.classList.contains("focus-visible")||d.target.hasAttribute("data-focus-visible-added"))&&(o=!0,window.clearTimeout(s),s=window.setTimeout(function(){o=!1},100),w(d.target))}function v(d){document.visibilityState==="hidden"&&(o&&(i=!0),b())}function b(){document.addEventListener("mousemove",h),document.addEventListener("mousedown",h),document.addEventListener("mouseup",h),document.addEventListener("pointermove",h),document.addEventListener("pointerdown",h),document.addEventListener("pointerup",h),document.addEventListener("touchmove",h),document.addEventListener("touchstart",h),document.addEventListener("touchend",h)}function M(){document.removeEventListener("mousemove",h),document.removeEventListener("mousedown",h),document.removeEventListener("mouseup",h),document.removeEventListener("pointermove",h),document.removeEventListener("pointerdown",h),document.removeEventListener("pointerup",h),document.removeEventListener("touchmove",h),document.removeEventListener("touchstart",h),document.removeEventListener("touchend",h)}function h(d){d.target.nodeName&&d.target.nodeName.toLowerCase()==="html"||(i=!1,M())}document.addEventListener("keydown",E,!0),document.addEventListener("mousedown",_,!0),document.addEventListener("pointerdown",_,!0),document.addEventListener("touchstart",_,!0),document.addEventListener("visibilitychange",v,!0),b(),a.addEventListener("focus",N,!0),a.addEventListener("blur",H,!0),a.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&a.host?a.host.setAttribute("data-js-focus-visible",""):a.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if(typeof window!="undefined"&&typeof document!="undefined"){window.applyFocusVisiblePolyfill=n;var r;try{r=new CustomEvent("focus-visible-polyfill-ready")}catch{r=document.createEvent("CustomEvent"),r.initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(r)}typeof document!="undefined"&&n(document)})})();function y(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function g(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function p(e){g(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function qe(e,t){g(2,arguments);var n=p(e).getTime(),r=y(t);return new Date(n+r)}function Ae(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function je(e){return g(1,arguments),e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function $e(e){if(g(1,arguments),!je(e)&&typeof e!="number")return!1;var t=p(e);return!isNaN(Number(t))}var Re={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},He=function(e,t,n){var r,a=Re[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},Ie=He;function J(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var Qe={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Be={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Xe={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ve={date:J({formats:Qe,defaultWidth:"full"}),time:J({formats:Be,defaultWidth:"full"}),dateTime:J({formats:Xe,defaultWidth:"full"})},Ge=Ve,Je={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ke=function(e,t,n,r){return Je[e]},ze=Ke;function W(e){return function(t,n){var r=n||{},a=r.context?String(r.context):"standalone",i;if(a==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,s=r.width?String(r.width):o;i=e.formattingValues[s]||e.formattingValues[o]}else{var u=e.defaultWidth,c=r.width?String(r.width):e.defaultWidth;i=e.values[c]||e.values[u]}var m=e.argumentCallback?e.argumentCallback(t):t;return i[m]}}var Ze={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},et={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},tt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},nt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},rt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},at={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},it=function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ot={ordinalNumber:it,era:W({values:Ze,defaultWidth:"wide"}),quarter:W({values:et,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:W({values:tt,defaultWidth:"wide"}),day:W({values:nt,defaultWidth:"wide"}),dayPeriod:W({values:rt,defaultWidth:"wide",formattingValues:at,defaultFormattingWidth:"wide"})},ut=ot;function U(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;var o=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(s)?ct(s,function(l){return l.test(o)}):st(s,function(l){return l.test(o)}),c;c=e.valueCallback?e.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c;var m=t.slice(o.length);return{value:c,rest:m}}}function st(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function ct(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}function dt(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var a=r[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;var s=t.slice(a.length);return{value:o,rest:s}}}var ft=/^(\d+)(th|st|nd|rd)?/i,lt=/\d+/i,mt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ht={any:[/^b/i,/^(a|c)/i]},vt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},gt={any:[/1/i,/2/i,/3/i,/4/i]},wt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},yt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},bt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},pt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},_t={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Tt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ct={ordinalNumber:dt({matchPattern:ft,parsePattern:lt,valueCallback:function(e){return parseInt(e,10)}}),era:U({matchPatterns:mt,defaultMatchWidth:"wide",parsePatterns:ht,defaultParseWidth:"any"}),quarter:U({matchPatterns:vt,defaultMatchWidth:"wide",parsePatterns:gt,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:U({matchPatterns:wt,defaultMatchWidth:"wide",parsePatterns:yt,defaultParseWidth:"any"}),day:U({matchPatterns:bt,defaultMatchWidth:"wide",parsePatterns:pt,defaultParseWidth:"any"}),dayPeriod:U({matchPatterns:_t,defaultMatchWidth:"any",parsePatterns:Tt,defaultParseWidth:"any"})},xt=Ct,Et={code:"en-US",formatDistance:Ie,formatLong:Ge,formatRelative:ze,localize:ut,match:xt,options:{weekStartsOn:0,firstWeekContainsDate:1}},Mt=Et;function Dt(e,t){g(2,arguments);var n=y(t);return qe(e,-n)}function f(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var Pt={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return f(t==="yy"?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return t==="M"?String(n+1):f(n+1,2)},d:function(e,t){return f(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(e,t){return f(e.getUTCHours()%12||12,t.length)},H:function(e,t){return f(e.getUTCHours(),t.length)},m:function(e,t){return f(e.getUTCMinutes(),t.length)},s:function(e,t){return f(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds(),a=Math.floor(r*Math.pow(10,n-3));return f(a,t.length)}},T=Pt,Ot=864e5;function kt(e){g(1,arguments);var t=p(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/Ot)+1}function $(e){g(1,arguments);var t=1,n=p(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function oe(e){g(1,arguments);var t=p(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=$(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=$(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function St(e){g(1,arguments);var t=oe(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=$(n);return r}var Wt=6048e5;function Ut(e){g(1,arguments);var t=p(e),n=$(t).getTime()-St(t).getTime();return Math.round(n/Wt)+1}function R(e,t){g(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=a==null?0:y(a),o=n.weekStartsOn==null?i:y(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=p(e),u=s.getUTCDay(),c=(u<o?7:0)+u-o;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s}function ue(e,t){g(1,arguments);var n=p(e,t),r=n.getUTCFullYear(),a=t||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,s=o==null?1:y(o),u=a.firstWeekContainsDate==null?s:y(a.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,u),c.setUTCHours(0,0,0,0);var m=R(c,t),l=new Date(0);l.setUTCFullYear(r,0,u),l.setUTCHours(0,0,0,0);var w=R(l,t);return n.getTime()>=m.getTime()?r+1:n.getTime()>=w.getTime()?r:r-1}function Nt(e,t){g(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=a==null?1:y(a),o=n.firstWeekContainsDate==null?i:y(n.firstWeekContainsDate),s=ue(e,t),u=new Date(0);u.setUTCFullYear(s,0,o),u.setUTCHours(0,0,0,0);var c=R(u,t);return c}var Lt=6048e5;function Yt(e,t){g(1,arguments);var n=p(e),r=R(n,t).getTime()-Nt(n,t).getTime();return Math.round(r/Lt)+1}var P={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ft={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return T.y(e,t)},Y:function(e,t,n,r){var a=ue(e,r),i=a>0?a:1-a;if(t==="YY"){var o=i%100;return f(o,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):f(i,t.length)},R:function(e,t){var n=oe(e);return f(n,t.length)},u:function(e,t){var n=e.getUTCFullYear();return f(n,t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return f(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return f(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return T.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return f(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=Yt(e,r);return t==="wo"?n.ordinalNumber(a,{unit:"week"}):f(a,t.length)},I:function(e,t,n){var r=Ut(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):f(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):T.d(e,t)},D:function(e,t,n){var r=kt(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):f(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return f(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return f(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return f(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours(),a=r/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r=e.getUTCHours(),a;switch(r===12?a=P.noon:r===0?a=P.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r=e.getUTCHours(),a;switch(r>=17?a=P.evening:r>=12?a=P.afternoon:r>=4?a=P.morning:a=P.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){var r=e.getUTCHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return T.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):T.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):f(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):f(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):T.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):T.s(e,t)},S:function(e,t){return T.S(e,t)},X:function(e,t,n,r){var a=r._originalDate||e,i=a.getTimezoneOffset();if(i===0)return"Z";switch(t){case"X":return ce(i);case"XXXX":case"XX":return x(i);case"XXXXX":case"XXX":default:return x(i,":")}},x:function(e,t,n,r){var a=r._originalDate||e,i=a.getTimezoneOffset();switch(t){case"x":return ce(i);case"xxxx":case"xx":return x(i);case"xxxxx":case"xxx":default:return x(i,":")}},O:function(e,t,n,r){var a=r._originalDate||e,i=a.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+se(i,":");case"OOOO":default:return"GMT"+x(i,":")}},z:function(e,t,n,r){var a=r._originalDate||e,i=a.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+se(i,":");case"zzzz":default:return"GMT"+x(i,":")}},t:function(e,t,n,r){var a=r._originalDate||e,i=Math.floor(a.getTime()/1e3);return f(i,t.length)},T:function(e,t,n,r){var a=r._originalDate||e,i=a.getTime();return f(i,t.length)}};function se(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(i===0)return n+String(a);var o=t||"";return n+String(a)+o+f(i,2)}function ce(e,t){if(e%60==0){var n=e>0?"-":"+";return n+f(Math.abs(e)/60,2)}return x(e,t)}function x(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e),i=f(Math.floor(a/60),2),o=f(a%60,2);return r+i+n+o}var qt=Ft;function de(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function fe(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}function At(e,t){var n=e.match(/(P+)(p+)?/),r=n[1],a=n[2];if(!a)return de(e,t);var i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",de(r,t)).replace("{{time}}",fe(a,t))}var jt={p:fe,P:At},$t=jt,Rt=["D","DD"],Ht=["YY","YYYY"];function It(e){return Rt.indexOf(e)!==-1}function Qt(e){return Ht.indexOf(e)!==-1}function le(e,t,n){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var Bt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Xt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Vt=/^'([^]*?)'?$/,Gt=/''/g,Jt=/[a-zA-Z]/;function kn(e,t,n){g(2,arguments);var r=String(t),a=n||{},i=a.locale||Mt,o=i.options&&i.options.firstWeekContainsDate,s=o==null?1:y(o),u=a.firstWeekContainsDate==null?s:y(a.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,m=c==null?0:y(c),l=a.weekStartsOn==null?m:y(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var w=p(e);if(!$e(w))throw new RangeError("Invalid time value");var E=Ae(w),_=Dt(w,E),N={firstWeekContainsDate:u,weekStartsOn:l,locale:i,_originalDate:w},H=r.match(Xt).map(function(v){var b=v[0];if(b==="p"||b==="P"){var M=$t[b];return M(v,i.formatLong,N)}return v}).join("").match(Bt).map(function(v){if(v==="''")return"'";var b=v[0];if(b==="'")return Kt(v);var M=qt[b];if(M)return!a.useAdditionalWeekYearTokens&&Qt(v)&&le(v,t,e),!a.useAdditionalDayOfYearTokens&&It(v)&&le(v,t,e),M(_,v,i.localize,N);if(b.match(Jt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return v}).join("");return H}function Kt(e){return e.match(Vt)[1].replace(Gt,"'")}export{wn as A,he as B,On as C,Te as D,O as E,un as F,Zt as G,gn as H,tn as I,nn as J,en as K,kn as L,Ee as M,ln as N,dn as O,an as P,rn as Q,zt as R,Pn as S,vn as T,De as a,Me as b,fn as c,Ce as d,xe as e,on as f,Oe as g,hn as h,Dn as i,En as j,sn as k,cn as l,Mn as m,mn as n,Ne as o,Cn as p,xn as q,pn as r,ge as s,I as t,Tn as u,Le as v,_n as w,Ue as x,bn as y,yn as z};

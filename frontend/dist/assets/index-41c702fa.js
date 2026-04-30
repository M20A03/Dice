(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var kf={exports:{}},xo={},Cf={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),Mv=Symbol.for("react.portal"),Uv=Symbol.for("react.fragment"),jv=Symbol.for("react.strict_mode"),Fv=Symbol.for("react.profiler"),zv=Symbol.for("react.provider"),$v=Symbol.for("react.context"),Bv=Symbol.for("react.forward_ref"),Vv=Symbol.for("react.suspense"),bv=Symbol.for("react.memo"),Hv=Symbol.for("react.lazy"),Ch=Symbol.iterator;function Wv(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var Af={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pf=Object.assign,Rf={};function jr(t,e,n){this.props=t,this.context=e,this.refs=Rf,this.updater=n||Af}jr.prototype.isReactComponent={};jr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};jr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Nf(){}Nf.prototype=jr.prototype;function du(t,e,n){this.props=t,this.context=e,this.refs=Rf,this.updater=n||Af}var fu=du.prototype=new Nf;fu.constructor=du;Pf(fu,jr.prototype);fu.isPureReactComponent=!0;var Ah=Array.isArray,Of=Object.prototype.hasOwnProperty,pu={current:null},Df={key:!0,ref:!0,__self:!0,__source:!0};function Lf(t,e,n){var r,i={},o=null,l=null;if(e!=null)for(r in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)Of.call(e,r)&&!Df.hasOwnProperty(r)&&(i[r]=e[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var h=Array(u),f=0;f<u;f++)h[f]=arguments[f+2];i.children=h}if(t&&t.defaultProps)for(r in u=t.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Gi,type:t,key:o,ref:l,props:i,_owner:pu.current}}function Kv(t,e){return{$$typeof:Gi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Gi}function Gv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ph=/\/+/g;function Al(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Gv(""+t.key):e.toString(36)}function js(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Gi:case Mv:l=!0}}if(l)return l=t,i=i(l),t=r===""?"."+Al(l,0):r,Ah(i)?(n="",t!=null&&(n=t.replace(Ph,"$&/")+"/"),js(i,e,n,"",function(f){return f})):i!=null&&(gu(i)&&(i=Kv(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ph,"$&/")+"/")+t)),e.push(i)),1;if(l=0,r=r===""?".":r+":",Ah(t))for(var u=0;u<t.length;u++){o=t[u];var h=r+Al(o,u);l+=js(o,e,n,h,i)}else if(h=Wv(t),typeof h=="function")for(t=h.call(t),u=0;!(o=t.next()).done;)o=o.value,h=r+Al(o,u++),l+=js(o,e,n,h,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function ys(t,e,n){if(t==null)return t;var r=[],i=0;return js(t,r,"","",function(o){return e.call(n,o,i++)}),r}function qv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Le={current:null},Fs={transition:null},Xv={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Fs,ReactCurrentOwner:pu};function xf(){throw Error("act(...) is not supported in production builds of React.")}b.Children={map:ys,forEach:function(t,e,n){ys(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ys(t,function(){e++}),e},toArray:function(t){return ys(t,function(e){return e})||[]},only:function(t){if(!gu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};b.Component=jr;b.Fragment=Uv;b.Profiler=Fv;b.PureComponent=du;b.StrictMode=jv;b.Suspense=Vv;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xv;b.act=xf;b.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Pf({},t.props),i=t.key,o=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=pu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(h in e)Of.call(e,h)&&!Df.hasOwnProperty(h)&&(r[h]=e[h]===void 0&&u!==void 0?u[h]:e[h])}var h=arguments.length-2;if(h===1)r.children=n;else if(1<h){u=Array(h);for(var f=0;f<h;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:Gi,type:t.type,key:i,ref:o,props:r,_owner:l}};b.createContext=function(t){return t={$$typeof:$v,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zv,_context:t},t.Consumer=t};b.createElement=Lf;b.createFactory=function(t){var e=Lf.bind(null,t);return e.type=t,e};b.createRef=function(){return{current:null}};b.forwardRef=function(t){return{$$typeof:Bv,render:t}};b.isValidElement=gu;b.lazy=function(t){return{$$typeof:Hv,_payload:{_status:-1,_result:t},_init:qv}};b.memo=function(t,e){return{$$typeof:bv,type:t,compare:e===void 0?null:e}};b.startTransition=function(t){var e=Fs.transition;Fs.transition={};try{t()}finally{Fs.transition=e}};b.unstable_act=xf;b.useCallback=function(t,e){return Le.current.useCallback(t,e)};b.useContext=function(t){return Le.current.useContext(t)};b.useDebugValue=function(){};b.useDeferredValue=function(t){return Le.current.useDeferredValue(t)};b.useEffect=function(t,e){return Le.current.useEffect(t,e)};b.useId=function(){return Le.current.useId()};b.useImperativeHandle=function(t,e,n){return Le.current.useImperativeHandle(t,e,n)};b.useInsertionEffect=function(t,e){return Le.current.useInsertionEffect(t,e)};b.useLayoutEffect=function(t,e){return Le.current.useLayoutEffect(t,e)};b.useMemo=function(t,e){return Le.current.useMemo(t,e)};b.useReducer=function(t,e,n){return Le.current.useReducer(t,e,n)};b.useRef=function(t){return Le.current.useRef(t)};b.useState=function(t){return Le.current.useState(t)};b.useSyncExternalStore=function(t,e,n){return Le.current.useSyncExternalStore(t,e,n)};b.useTransition=function(){return Le.current.useTransition()};b.version="18.3.1";Cf.exports=b;var Ue=Cf.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv=Ue,Yv=Symbol.for("react.element"),Jv=Symbol.for("react.fragment"),Zv=Object.prototype.hasOwnProperty,ey=Qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ty={key:!0,ref:!0,__self:!0,__source:!0};function Mf(t,e,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)Zv.call(e,r)&&!ty.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Yv,type:t,key:o,ref:l,props:i,_owner:ey.current}}xo.Fragment=Jv;xo.jsx=Mf;xo.jsxs=Mf;kf.exports=xo;var G=kf.exports,Uf={exports:{}},Xe={},jf={exports:{}},Ff={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,B){var V=j.length;j.push(B);e:for(;0<V;){var re=V-1>>>1,Q=j[re];if(0<i(Q,B))j[re]=B,j[V]=Q,V=re;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var B=j[0],V=j.pop();if(V!==B){j[0]=V;e:for(var re=0,Q=j.length,ae=Q>>>1;re<ae;){var At=2*(re+1)-1,Pt=j[At],Rt=At+1,vt=j[Rt];if(0>i(Pt,V))Rt<Q&&0>i(vt,Pt)?(j[re]=vt,j[Rt]=V,re=Rt):(j[re]=Pt,j[At]=V,re=At);else if(Rt<Q&&0>i(vt,V))j[re]=vt,j[Rt]=V,re=Rt;else break e}}return B}function i(j,B){var V=j.sortIndex-B.sortIndex;return V!==0?V:j.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var h=[],f=[],C=1,A=null,I=3,O=!1,R=!1,L=!1,z=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(j){for(var B=n(f);B!==null;){if(B.callback===null)r(f);else if(B.startTime<=j)r(f),B.sortIndex=B.expirationTime,e(h,B);else break;B=n(f)}}function N(j){if(L=!1,S(j),!R)if(n(h)!==null)R=!0,Vr(M);else{var B=n(f);B!==null&&Ct(N,B.startTime-j)}}function M(j,B){R=!1,L&&(L=!1,E(p),p=-1),O=!0;var V=I;try{for(S(B),A=n(h);A!==null&&(!(A.expirationTime>B)||j&&!_());){var re=A.callback;if(typeof re=="function"){A.callback=null,I=A.priorityLevel;var Q=re(A.expirationTime<=B);B=t.unstable_now(),typeof Q=="function"?A.callback=Q:A===n(h)&&r(h),S(B)}else r(h);A=n(h)}if(A!==null)var ae=!0;else{var At=n(f);At!==null&&Ct(N,At.startTime-B),ae=!1}return ae}finally{A=null,I=V,O=!1}}var U=!1,m=null,p=-1,g=5,y=-1;function _(){return!(t.unstable_now()-y<g)}function k(){if(m!==null){var j=t.unstable_now();y=j;var B=!0;try{B=m(!0,j)}finally{B?v():(U=!1,m=null)}}else U=!1}var v;if(typeof w=="function")v=function(){w(k)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,An=Ye.port2;Ye.port1.onmessage=k,v=function(){An.postMessage(null)}}else v=function(){z(k,0)};function Vr(j){m=j,U||(U=!0,v())}function Ct(j,B){p=z(function(){j(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){R||O||(R=!0,Vr(M))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return I},t.unstable_getFirstCallbackNode=function(){return n(h)},t.unstable_next=function(j){switch(I){case 1:case 2:case 3:var B=3;break;default:B=I}var V=I;I=B;try{return j()}finally{I=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,B){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var V=I;I=j;try{return B()}finally{I=V}},t.unstable_scheduleCallback=function(j,B,V){var re=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?re+V:re):V=re,j){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=V+Q,j={id:C++,callback:B,priorityLevel:j,startTime:V,expirationTime:Q,sortIndex:-1},V>re?(j.sortIndex=V,e(f,j),n(h)===null&&j===n(f)&&(L?(E(p),p=-1):L=!0,Ct(N,V-re))):(j.sortIndex=Q,e(h,j),R||O||(R=!0,Vr(M))),j},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(j){var B=I;return function(){var V=I;I=B;try{return j.apply(this,arguments)}finally{I=V}}}})(Ff);jf.exports=Ff;var ny=jf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry=Ue,qe=ny;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zf=new Set,Ai={};function Qn(t,e){Pr(t,e),Pr(t+"Capture",e)}function Pr(t,e){for(Ai[t]=e,t=0;t<e.length;t++)zf.add(e[t])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ca=Object.prototype.hasOwnProperty,iy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rh={},Nh={};function sy(t){return ca.call(Nh,t)?!0:ca.call(Rh,t)?!1:iy.test(t)?Nh[t]=!0:(Rh[t]=!0,!1)}function oy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ly(t,e,n,r){if(e===null||typeof e>"u"||oy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xe(t,e,n,r,i,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){we[t]=new xe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];we[e]=new xe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){we[t]=new xe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){we[t]=new xe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){we[t]=new xe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){we[t]=new xe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){we[t]=new xe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){we[t]=new xe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){we[t]=new xe(t,5,!1,t.toLowerCase(),null,!1,!1)});var mu=/[\-:]([a-z])/g;function vu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mu,vu);we[e]=new xe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mu,vu);we[e]=new xe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mu,vu);we[e]=new xe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){we[t]=new xe(t,1,!1,t.toLowerCase(),null,!1,!1)});we.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){we[t]=new xe(t,1,!1,t.toLowerCase(),null,!0,!0)});function yu(t,e,n,r){var i=we.hasOwnProperty(e)?we[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ly(e,n,i,r)&&(n=null),r||i===null?sy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gt=ry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ws=Symbol.for("react.element"),or=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),wu=Symbol.for("react.strict_mode"),ha=Symbol.for("react.profiler"),$f=Symbol.for("react.provider"),Bf=Symbol.for("react.context"),_u=Symbol.for("react.forward_ref"),da=Symbol.for("react.suspense"),fa=Symbol.for("react.suspense_list"),Eu=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),Vf=Symbol.for("react.offscreen"),Oh=Symbol.iterator;function ni(t){return t===null||typeof t!="object"?null:(t=Oh&&t[Oh]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,Pl;function ci(t){if(Pl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pl=e&&e[1]||""}return`
`+Pl+t}var Rl=!1;function Nl(t,e){if(!t||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(f){var r=f}Reflect.construct(t,[],e)}else{try{e.call()}catch(f){r=f}t.call(e.prototype)}else{try{throw Error()}catch(f){r=f}t()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var h=`
`+i[l].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=l&&0<=u);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ci(t):""}function ay(t){switch(t.tag){case 5:return ci(t.type);case 16:return ci("Lazy");case 13:return ci("Suspense");case 19:return ci("SuspenseList");case 0:case 2:case 15:return t=Nl(t.type,!1),t;case 11:return t=Nl(t.type.render,!1),t;case 1:return t=Nl(t.type,!0),t;default:return""}}function pa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case lr:return"Fragment";case or:return"Portal";case ha:return"Profiler";case wu:return"StrictMode";case da:return"Suspense";case fa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Bf:return(t.displayName||"Context")+".Consumer";case $f:return(t._context.displayName||"Context")+".Provider";case _u:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Eu:return e=t.displayName||null,e!==null?e:pa(t.type)||"Memo";case Zt:e=t._payload,t=t._init;try{return pa(t(e))}catch{}}return null}function uy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pa(e);case 8:return e===wu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function En(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cy(t){var e=bf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _s(t){t._valueTracker||(t._valueTracker=cy(t))}function Hf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=bf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Zs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ga(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=En(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wf(t,e){e=e.checked,e!=null&&yu(t,"checked",e,!1)}function ma(t,e){Wf(t,e);var n=En(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?va(t,e.type,n):e.hasOwnProperty("defaultValue")&&va(t,e.type,En(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function va(t,e,n){(e!=="number"||Zs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var hi=Array.isArray;function wr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+En(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ya(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(hi(n)){if(1<n.length)throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:En(n)}}function Kf(t,e){var n=En(e.value),r=En(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Mh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Es,qf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Es=Es||document.createElement("div"),Es.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Es.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Pi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hy=["Webkit","ms","Moz","O"];Object.keys(pi).forEach(function(t){hy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),pi[e]=pi[t]})});function Xf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||pi.hasOwnProperty(t)&&pi[t]?(""+e).trim():e+"px"}function Qf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var dy=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _a(t,e){if(e){if(dy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function Ea(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sa=null;function Su(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ia=null,_r=null,Er=null;function Uh(t){if(t=Qi(t)){if(typeof Ia!="function")throw Error(D(280));var e=t.stateNode;e&&(e=zo(e),Ia(t.stateNode,t.type,e))}}function Yf(t){_r?Er?Er.push(t):Er=[t]:_r=t}function Jf(){if(_r){var t=_r,e=Er;if(Er=_r=null,Uh(t),e)for(t=0;t<e.length;t++)Uh(e[t])}}function Zf(t,e){return t(e)}function ep(){}var Ol=!1;function tp(t,e,n){if(Ol)return t(e,n);Ol=!0;try{return Zf(t,e,n)}finally{Ol=!1,(_r!==null||Er!==null)&&(ep(),Jf())}}function Ri(t,e){var n=t.stateNode;if(n===null)return null;var r=zo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var Ta=!1;if($t)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){Ta=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{Ta=!1}function fy(t,e,n,r,i,o,l,u,h){var f=Array.prototype.slice.call(arguments,3);try{e.apply(n,f)}catch(C){this.onError(C)}}var gi=!1,eo=null,to=!1,ka=null,py={onError:function(t){gi=!0,eo=t}};function gy(t,e,n,r,i,o,l,u,h){gi=!1,eo=null,fy.apply(py,arguments)}function my(t,e,n,r,i,o,l,u,h){if(gy.apply(this,arguments),gi){if(gi){var f=eo;gi=!1,eo=null}else throw Error(D(198));to||(to=!0,ka=f)}}function Yn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function np(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jh(t){if(Yn(t)!==t)throw Error(D(188))}function vy(t){var e=t.alternate;if(!e){if(e=Yn(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return jh(i),t;if(o===r)return jh(i),e;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function rp(t){return t=vy(t),t!==null?ip(t):null}function ip(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ip(t);if(e!==null)return e;t=t.sibling}return null}var sp=qe.unstable_scheduleCallback,Fh=qe.unstable_cancelCallback,yy=qe.unstable_shouldYield,wy=qe.unstable_requestPaint,ce=qe.unstable_now,_y=qe.unstable_getCurrentPriorityLevel,Iu=qe.unstable_ImmediatePriority,op=qe.unstable_UserBlockingPriority,no=qe.unstable_NormalPriority,Ey=qe.unstable_LowPriority,lp=qe.unstable_IdlePriority,Mo=null,Et=null;function Sy(t){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Mo,t,void 0,(t.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:ky,Iy=Math.log,Ty=Math.LN2;function ky(t){return t>>>=0,t===0?32:31-(Iy(t)/Ty|0)|0}var Ss=64,Is=4194304;function di(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ro(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=di(u):(o&=l,o!==0&&(r=di(o)))}else l=n&~i,l!==0?r=di(l):o!==0&&(r=di(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dt(e),i=1<<n,r|=t[n],e&=~i;return r}function Cy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ay(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-dt(o),u=1<<l,h=i[l];h===-1?(!(u&n)||u&r)&&(i[l]=Cy(u,e)):h<=e&&(t.expiredLanes|=u),o&=~u}}function Ca(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ap(){var t=Ss;return Ss<<=1,!(Ss&4194240)&&(Ss=64),t}function Dl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dt(e),t[e]=n}function Py(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dt(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Tu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var X=0;function up(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cp,ku,hp,dp,fp,Aa=!1,Ts=[],hn=null,dn=null,fn=null,Ni=new Map,Oi=new Map,tn=[],Ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zh(t,e){switch(t){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":Ni.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oi.delete(e.pointerId)}}function ii(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Qi(e),e!==null&&ku(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ny(t,e,n,r,i){switch(e){case"focusin":return hn=ii(hn,t,e,n,r,i),!0;case"dragenter":return dn=ii(dn,t,e,n,r,i),!0;case"mouseover":return fn=ii(fn,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ni.set(o,ii(Ni.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Oi.set(o,ii(Oi.get(o)||null,t,e,n,r,i)),!0}return!1}function pp(t){var e=Mn(t.target);if(e!==null){var n=Yn(e);if(n!==null){if(e=n.tag,e===13){if(e=np(n),e!==null){t.blockedOn=e,fp(t.priority,function(){hp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sa=r,n.target.dispatchEvent(r),Sa=null}else return e=Qi(n),e!==null&&ku(e),t.blockedOn=n,!1;e.shift()}return!0}function $h(t,e,n){zs(t)&&n.delete(e)}function Oy(){Aa=!1,hn!==null&&zs(hn)&&(hn=null),dn!==null&&zs(dn)&&(dn=null),fn!==null&&zs(fn)&&(fn=null),Ni.forEach($h),Oi.forEach($h)}function si(t,e){t.blockedOn===e&&(t.blockedOn=null,Aa||(Aa=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,Oy)))}function Di(t){function e(i){return si(i,t)}if(0<Ts.length){si(Ts[0],t);for(var n=1;n<Ts.length;n++){var r=Ts[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hn!==null&&si(hn,t),dn!==null&&si(dn,t),fn!==null&&si(fn,t),Ni.forEach(e),Oi.forEach(e),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)pp(n),n.blockedOn===null&&tn.shift()}var Sr=Gt.ReactCurrentBatchConfig,io=!0;function Dy(t,e,n,r){var i=X,o=Sr.transition;Sr.transition=null;try{X=1,Cu(t,e,n,r)}finally{X=i,Sr.transition=o}}function Ly(t,e,n,r){var i=X,o=Sr.transition;Sr.transition=null;try{X=4,Cu(t,e,n,r)}finally{X=i,Sr.transition=o}}function Cu(t,e,n,r){if(io){var i=Pa(t,e,n,r);if(i===null)Vl(t,e,r,so,n),zh(t,r);else if(Ny(i,t,e,n,r))r.stopPropagation();else if(zh(t,r),e&4&&-1<Ry.indexOf(t)){for(;i!==null;){var o=Qi(i);if(o!==null&&cp(o),o=Pa(t,e,n,r),o===null&&Vl(t,e,r,so,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Vl(t,e,r,null,n)}}var so=null;function Pa(t,e,n,r){if(so=null,t=Su(r),t=Mn(t),t!==null)if(e=Yn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=np(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return so=t,null}function gp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_y()){case Iu:return 1;case op:return 4;case no:case Ey:return 16;case lp:return 536870912;default:return 16}default:return 16}}var an=null,Au=null,$s=null;function mp(){if($s)return $s;var t,e=Au,n=e.length,r,i="value"in an?an.value:an.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var l=n-t;for(r=1;r<=l&&e[n-r]===i[o-r];r++);return $s=i.slice(t,1<r?1-r:void 0)}function Bs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ks(){return!0}function Bh(){return!1}function Qe(t){function e(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ks:Bh,this.isPropagationStopped=Bh,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ks)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ks)},persist:function(){},isPersistent:ks}),e}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pu=Qe(Fr),Xi=oe({},Fr,{view:0,detail:0}),xy=Qe(Xi),Ll,xl,oi,Uo=oe({},Xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oi&&(oi&&t.type==="mousemove"?(Ll=t.screenX-oi.screenX,xl=t.screenY-oi.screenY):xl=Ll=0,oi=t),Ll)},movementY:function(t){return"movementY"in t?t.movementY:xl}}),Vh=Qe(Uo),My=oe({},Uo,{dataTransfer:0}),Uy=Qe(My),jy=oe({},Xi,{relatedTarget:0}),Ml=Qe(jy),Fy=oe({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),zy=Qe(Fy),$y=oe({},Fr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),By=Qe($y),Vy=oe({},Fr,{data:0}),bh=Qe(Vy),by={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ky(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Wy[t])?!!e[t]:!1}function Ru(){return Ky}var Gy=oe({},Xi,{key:function(t){if(t.key){var e=by[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(t){return t.type==="keypress"?Bs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qy=Qe(Gy),Xy=oe({},Uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hh=Qe(Xy),Qy=oe({},Xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),Yy=Qe(Qy),Jy=oe({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zy=Qe(Jy),e0=oe({},Uo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),t0=Qe(e0),n0=[9,13,27,32],Nu=$t&&"CompositionEvent"in window,mi=null;$t&&"documentMode"in document&&(mi=document.documentMode);var r0=$t&&"TextEvent"in window&&!mi,vp=$t&&(!Nu||mi&&8<mi&&11>=mi),Wh=String.fromCharCode(32),Kh=!1;function yp(t,e){switch(t){case"keyup":return n0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function i0(t,e){switch(t){case"compositionend":return wp(e);case"keypress":return e.which!==32?null:(Kh=!0,Wh);case"textInput":return t=e.data,t===Wh&&Kh?null:t;default:return null}}function s0(t,e){if(ar)return t==="compositionend"||!Nu&&yp(t,e)?(t=mp(),$s=Au=an=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vp&&e.locale!=="ko"?null:e.data;default:return null}}var o0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!o0[t.type]:e==="textarea"}function _p(t,e,n,r){Yf(r),e=oo(e,"onChange"),0<e.length&&(n=new Pu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var vi=null,Li=null;function l0(t){Op(t,0)}function jo(t){var e=hr(t);if(Hf(e))return t}function a0(t,e){if(t==="change")return e}var Ep=!1;if($t){var Ul;if($t){var jl="oninput"in document;if(!jl){var qh=document.createElement("div");qh.setAttribute("oninput","return;"),jl=typeof qh.oninput=="function"}Ul=jl}else Ul=!1;Ep=Ul&&(!document.documentMode||9<document.documentMode)}function Xh(){vi&&(vi.detachEvent("onpropertychange",Sp),Li=vi=null)}function Sp(t){if(t.propertyName==="value"&&jo(Li)){var e=[];_p(e,Li,t,Su(t)),tp(l0,e)}}function u0(t,e,n){t==="focusin"?(Xh(),vi=e,Li=n,vi.attachEvent("onpropertychange",Sp)):t==="focusout"&&Xh()}function c0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jo(Li)}function h0(t,e){if(t==="click")return jo(e)}function d0(t,e){if(t==="input"||t==="change")return jo(e)}function f0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pt=typeof Object.is=="function"?Object.is:f0;function xi(t,e){if(pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ca.call(e,i)||!pt(t[i],e[i]))return!1}return!0}function Qh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yh(t,e){var n=Qh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qh(n)}}function Ip(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ip(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tp(){for(var t=window,e=Zs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zs(t.document)}return e}function Ou(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function p0(t){var e=Tp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ip(n.ownerDocument.documentElement,n)){if(r!==null&&Ou(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Yh(n,o);var l=Yh(n,r);i&&l&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var g0=$t&&"documentMode"in document&&11>=document.documentMode,ur=null,Ra=null,yi=null,Na=!1;function Jh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Na||ur==null||ur!==Zs(r)||(r=ur,"selectionStart"in r&&Ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yi&&xi(yi,r)||(yi=r,r=oo(Ra,"onSelect"),0<r.length&&(e=new Pu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ur)))}function Cs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cr={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionend:Cs("Transition","TransitionEnd")},Fl={},kp={};$t&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Fo(t){if(Fl[t])return Fl[t];if(!cr[t])return t;var e=cr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kp)return Fl[t]=e[n];return t}var Cp=Fo("animationend"),Ap=Fo("animationiteration"),Pp=Fo("animationstart"),Rp=Fo("transitionend"),Np=new Map,Zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(t,e){Np.set(t,e),Qn(e,[t])}for(var zl=0;zl<Zh.length;zl++){var $l=Zh[zl],m0=$l.toLowerCase(),v0=$l[0].toUpperCase()+$l.slice(1);In(m0,"on"+v0)}In(Cp,"onAnimationEnd");In(Ap,"onAnimationIteration");In(Pp,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(Rp,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(fi));function ed(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,my(r,e,void 0,t),t.currentTarget=null}function Op(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var l=r.length-1;0<=l;l--){var u=r[l],h=u.instance,f=u.currentTarget;if(u=u.listener,h!==o&&i.isPropagationStopped())break e;ed(i,u,f),o=h}else for(l=0;l<r.length;l++){if(u=r[l],h=u.instance,f=u.currentTarget,u=u.listener,h!==o&&i.isPropagationStopped())break e;ed(i,u,f),o=h}}}if(to)throw t=ka,to=!1,ka=null,t}function ee(t,e){var n=e[Ma];n===void 0&&(n=e[Ma]=new Set);var r=t+"__bubble";n.has(r)||(Dp(e,t,2,!1),n.add(r))}function Bl(t,e,n){var r=0;e&&(r|=4),Dp(n,t,r,e)}var As="_reactListening"+Math.random().toString(36).slice(2);function Mi(t){if(!t[As]){t[As]=!0,zf.forEach(function(n){n!=="selectionchange"&&(y0.has(n)||Bl(n,!1,t),Bl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[As]||(e[As]=!0,Bl("selectionchange",!1,e))}}function Dp(t,e,n,r){switch(gp(e)){case 1:var i=Dy;break;case 4:i=Ly;break;default:i=Cu}n=i.bind(null,e,n,t),i=void 0,!Ta||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vl(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var h=l.tag;if((h===3||h===4)&&(h=l.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;l=l.return}for(;u!==null;){if(l=Mn(u),l===null)return;if(h=l.tag,h===5||h===6){r=o=l;continue e}u=u.parentNode}}r=r.return}tp(function(){var f=o,C=Su(n),A=[];e:{var I=Np.get(t);if(I!==void 0){var O=Pu,R=t;switch(t){case"keypress":if(Bs(n)===0)break e;case"keydown":case"keyup":O=qy;break;case"focusin":R="focus",O=Ml;break;case"focusout":R="blur",O=Ml;break;case"beforeblur":case"afterblur":O=Ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Uy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Yy;break;case Cp:case Ap:case Pp:O=zy;break;case Rp:O=Zy;break;case"scroll":O=xy;break;case"wheel":O=t0;break;case"copy":case"cut":case"paste":O=By;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Hh}var L=(e&4)!==0,z=!L&&t==="scroll",E=L?I!==null?I+"Capture":null:I;L=[];for(var w=f,S;w!==null;){S=w;var N=S.stateNode;if(S.tag===5&&N!==null&&(S=N,E!==null&&(N=Ri(w,E),N!=null&&L.push(Ui(w,N,S)))),z)break;w=w.return}0<L.length&&(I=new O(I,R,null,n,C),A.push({event:I,listeners:L}))}}if(!(e&7)){e:{if(I=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",I&&n!==Sa&&(R=n.relatedTarget||n.fromElement)&&(Mn(R)||R[Bt]))break e;if((O||I)&&(I=C.window===C?C:(I=C.ownerDocument)?I.defaultView||I.parentWindow:window,O?(R=n.relatedTarget||n.toElement,O=f,R=R?Mn(R):null,R!==null&&(z=Yn(R),R!==z||R.tag!==5&&R.tag!==6)&&(R=null)):(O=null,R=f),O!==R)){if(L=Vh,N="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(L=Hh,N="onPointerLeave",E="onPointerEnter",w="pointer"),z=O==null?I:hr(O),S=R==null?I:hr(R),I=new L(N,w+"leave",O,n,C),I.target=z,I.relatedTarget=S,N=null,Mn(C)===f&&(L=new L(E,w+"enter",R,n,C),L.target=S,L.relatedTarget=z,N=L),z=N,O&&R)t:{for(L=O,E=R,w=0,S=L;S;S=sr(S))w++;for(S=0,N=E;N;N=sr(N))S++;for(;0<w-S;)L=sr(L),w--;for(;0<S-w;)E=sr(E),S--;for(;w--;){if(L===E||E!==null&&L===E.alternate)break t;L=sr(L),E=sr(E)}L=null}else L=null;O!==null&&td(A,I,O,L,!1),R!==null&&z!==null&&td(A,z,R,L,!0)}}e:{if(I=f?hr(f):window,O=I.nodeName&&I.nodeName.toLowerCase(),O==="select"||O==="input"&&I.type==="file")var M=a0;else if(Gh(I))if(Ep)M=d0;else{M=c0;var U=u0}else(O=I.nodeName)&&O.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&(M=h0);if(M&&(M=M(t,f))){_p(A,M,n,C);break e}U&&U(t,I,f),t==="focusout"&&(U=I._wrapperState)&&U.controlled&&I.type==="number"&&va(I,"number",I.value)}switch(U=f?hr(f):window,t){case"focusin":(Gh(U)||U.contentEditable==="true")&&(ur=U,Ra=f,yi=null);break;case"focusout":yi=Ra=ur=null;break;case"mousedown":Na=!0;break;case"contextmenu":case"mouseup":case"dragend":Na=!1,Jh(A,n,C);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":Jh(A,n,C)}var m;if(Nu)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else ar?yp(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(vp&&n.locale!=="ko"&&(ar||p!=="onCompositionStart"?p==="onCompositionEnd"&&ar&&(m=mp()):(an=C,Au="value"in an?an.value:an.textContent,ar=!0)),U=oo(f,p),0<U.length&&(p=new bh(p,t,null,n,C),A.push({event:p,listeners:U}),m?p.data=m:(m=wp(n),m!==null&&(p.data=m)))),(m=r0?i0(t,n):s0(t,n))&&(f=oo(f,"onBeforeInput"),0<f.length&&(C=new bh("onBeforeInput","beforeinput",null,n,C),A.push({event:C,listeners:f}),C.data=m))}Op(A,e)})}function Ui(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ri(t,n),o!=null&&r.unshift(Ui(t,o,i)),o=Ri(t,e),o!=null&&r.push(Ui(t,o,i))),t=t.return}return r}function sr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function td(t,e,n,r,i){for(var o=e._reactName,l=[];n!==null&&n!==r;){var u=n,h=u.alternate,f=u.stateNode;if(h!==null&&h===r)break;u.tag===5&&f!==null&&(u=f,i?(h=Ri(n,o),h!=null&&l.unshift(Ui(n,h,u))):i||(h=Ri(n,o),h!=null&&l.push(Ui(n,h,u)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var w0=/\r\n?/g,_0=/\u0000|\uFFFD/g;function nd(t){return(typeof t=="string"?t:""+t).replace(w0,`
`).replace(_0,"")}function Ps(t,e,n){if(e=nd(e),nd(t)!==e&&n)throw Error(D(425))}function lo(){}var Oa=null,Da=null;function La(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xa=typeof setTimeout=="function"?setTimeout:void 0,E0=typeof clearTimeout=="function"?clearTimeout:void 0,rd=typeof Promise=="function"?Promise:void 0,S0=typeof queueMicrotask=="function"?queueMicrotask:typeof rd<"u"?function(t){return rd.resolve(null).then(t).catch(I0)}:xa;function I0(t){setTimeout(function(){throw t})}function bl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Di(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Di(e)}function pn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function id(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zr=Math.random().toString(36).slice(2),_t="__reactFiber$"+zr,ji="__reactProps$"+zr,Bt="__reactContainer$"+zr,Ma="__reactEvents$"+zr,T0="__reactListeners$"+zr,k0="__reactHandles$"+zr;function Mn(t){var e=t[_t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bt]||n[_t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=id(t);t!==null;){if(n=t[_t])return n;t=id(t)}return e}t=n,n=t.parentNode}return null}function Qi(t){return t=t[_t]||t[Bt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function zo(t){return t[ji]||null}var Ua=[],dr=-1;function Tn(t){return{current:t}}function te(t){0>dr||(t.current=Ua[dr],Ua[dr]=null,dr--)}function J(t,e){dr++,Ua[dr]=t.current,t.current=e}var Sn={},Ce=Tn(Sn),$e=Tn(!1),Vn=Sn;function Rr(t,e){var n=t.type.contextTypes;if(!n)return Sn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Be(t){return t=t.childContextTypes,t!=null}function ao(){te($e),te(Ce)}function sd(t,e,n){if(Ce.current!==Sn)throw Error(D(168));J(Ce,e),J($e,n)}function Lp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(D(108,uy(t)||"Unknown",i));return oe({},n,r)}function uo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sn,Vn=Ce.current,J(Ce,t),J($e,$e.current),!0}function od(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=Lp(t,e,Vn),r.__reactInternalMemoizedMergedChildContext=t,te($e),te(Ce),J(Ce,t)):te($e),J($e,n)}var Lt=null,$o=!1,Hl=!1;function xp(t){Lt===null?Lt=[t]:Lt.push(t)}function C0(t){$o=!0,xp(t)}function kn(){if(!Hl&&Lt!==null){Hl=!0;var t=0,e=X;try{var n=Lt;for(X=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Lt=null,$o=!1}catch(i){throw Lt!==null&&(Lt=Lt.slice(t+1)),sp(Iu,kn),i}finally{X=e,Hl=!1}}return null}var fr=[],pr=0,co=null,ho=0,Ze=[],et=0,bn=null,xt=1,Mt="";function On(t,e){fr[pr++]=ho,fr[pr++]=co,co=t,ho=e}function Mp(t,e,n){Ze[et++]=xt,Ze[et++]=Mt,Ze[et++]=bn,bn=t;var r=xt;t=Mt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var o=32-dt(e)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,xt=1<<32-dt(e)+i|n<<i|r,Mt=o+t}else xt=1<<o|n<<i|r,Mt=t}function Du(t){t.return!==null&&(On(t,1),Mp(t,1,0))}function Lu(t){for(;t===co;)co=fr[--pr],fr[pr]=null,ho=fr[--pr],fr[pr]=null;for(;t===bn;)bn=Ze[--et],Ze[et]=null,Mt=Ze[--et],Ze[et]=null,xt=Ze[--et],Ze[et]=null}var Ke=null,We=null,ne=!1,ct=null;function Up(t,e){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ld(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ke=t,We=pn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ke=t,We=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=bn!==null?{id:xt,overflow:Mt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ke=t,We=null,!0):!1;default:return!1}}function ja(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fa(t){if(ne){var e=We;if(e){var n=e;if(!ld(t,e)){if(ja(t))throw Error(D(418));e=pn(n.nextSibling);var r=Ke;e&&ld(t,e)?Up(r,n):(t.flags=t.flags&-4097|2,ne=!1,Ke=t)}}else{if(ja(t))throw Error(D(418));t.flags=t.flags&-4097|2,ne=!1,Ke=t}}}function ad(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ke=t}function Rs(t){if(t!==Ke)return!1;if(!ne)return ad(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!La(t.type,t.memoizedProps)),e&&(e=We)){if(ja(t))throw jp(),Error(D(418));for(;e;)Up(t,e),e=pn(e.nextSibling)}if(ad(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){We=pn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}We=null}}else We=Ke?pn(t.stateNode.nextSibling):null;return!0}function jp(){for(var t=We;t;)t=pn(t.nextSibling)}function Nr(){We=Ke=null,ne=!1}function xu(t){ct===null?ct=[t]:ct.push(t)}var A0=Gt.ReactCurrentBatchConfig;function li(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var u=i.refs;l===null?delete u[o]:u[o]=l},e._stringRef=o,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function Ns(t,e){throw t=Object.prototype.toString.call(e),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ud(t){var e=t._init;return e(t._payload)}function Fp(t){function e(E,w){if(t){var S=E.deletions;S===null?(E.deletions=[w],E.flags|=16):S.push(w)}}function n(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function i(E,w){return E=yn(E,w),E.index=0,E.sibling=null,E}function o(E,w,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<w?(E.flags|=2,w):S):(E.flags|=2,w)):(E.flags|=1048576,w)}function l(E){return t&&E.alternate===null&&(E.flags|=2),E}function u(E,w,S,N){return w===null||w.tag!==6?(w=Yl(S,E.mode,N),w.return=E,w):(w=i(w,S),w.return=E,w)}function h(E,w,S,N){var M=S.type;return M===lr?C(E,w,S.props.children,N,S.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Zt&&ud(M)===w.type)?(N=i(w,S.props),N.ref=li(E,w,S),N.return=E,N):(N=qs(S.type,S.key,S.props,null,E.mode,N),N.ref=li(E,w,S),N.return=E,N)}function f(E,w,S,N){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=Jl(S,E.mode,N),w.return=E,w):(w=i(w,S.children||[]),w.return=E,w)}function C(E,w,S,N,M){return w===null||w.tag!==7?(w=$n(S,E.mode,N,M),w.return=E,w):(w=i(w,S),w.return=E,w)}function A(E,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Yl(""+w,E.mode,S),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ws:return S=qs(w.type,w.key,w.props,null,E.mode,S),S.ref=li(E,null,w),S.return=E,S;case or:return w=Jl(w,E.mode,S),w.return=E,w;case Zt:var N=w._init;return A(E,N(w._payload),S)}if(hi(w)||ni(w))return w=$n(w,E.mode,S,null),w.return=E,w;Ns(E,w)}return null}function I(E,w,S,N){var M=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:u(E,w,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ws:return S.key===M?h(E,w,S,N):null;case or:return S.key===M?f(E,w,S,N):null;case Zt:return M=S._init,I(E,w,M(S._payload),N)}if(hi(S)||ni(S))return M!==null?null:C(E,w,S,N,null);Ns(E,S)}return null}function O(E,w,S,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return E=E.get(S)||null,u(w,E,""+N,M);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ws:return E=E.get(N.key===null?S:N.key)||null,h(w,E,N,M);case or:return E=E.get(N.key===null?S:N.key)||null,f(w,E,N,M);case Zt:var U=N._init;return O(E,w,S,U(N._payload),M)}if(hi(N)||ni(N))return E=E.get(S)||null,C(w,E,N,M,null);Ns(w,N)}return null}function R(E,w,S,N){for(var M=null,U=null,m=w,p=w=0,g=null;m!==null&&p<S.length;p++){m.index>p?(g=m,m=null):g=m.sibling;var y=I(E,m,S[p],N);if(y===null){m===null&&(m=g);break}t&&m&&y.alternate===null&&e(E,m),w=o(y,w,p),U===null?M=y:U.sibling=y,U=y,m=g}if(p===S.length)return n(E,m),ne&&On(E,p),M;if(m===null){for(;p<S.length;p++)m=A(E,S[p],N),m!==null&&(w=o(m,w,p),U===null?M=m:U.sibling=m,U=m);return ne&&On(E,p),M}for(m=r(E,m);p<S.length;p++)g=O(m,E,p,S[p],N),g!==null&&(t&&g.alternate!==null&&m.delete(g.key===null?p:g.key),w=o(g,w,p),U===null?M=g:U.sibling=g,U=g);return t&&m.forEach(function(_){return e(E,_)}),ne&&On(E,p),M}function L(E,w,S,N){var M=ni(S);if(typeof M!="function")throw Error(D(150));if(S=M.call(S),S==null)throw Error(D(151));for(var U=M=null,m=w,p=w=0,g=null,y=S.next();m!==null&&!y.done;p++,y=S.next()){m.index>p?(g=m,m=null):g=m.sibling;var _=I(E,m,y.value,N);if(_===null){m===null&&(m=g);break}t&&m&&_.alternate===null&&e(E,m),w=o(_,w,p),U===null?M=_:U.sibling=_,U=_,m=g}if(y.done)return n(E,m),ne&&On(E,p),M;if(m===null){for(;!y.done;p++,y=S.next())y=A(E,y.value,N),y!==null&&(w=o(y,w,p),U===null?M=y:U.sibling=y,U=y);return ne&&On(E,p),M}for(m=r(E,m);!y.done;p++,y=S.next())y=O(m,E,p,y.value,N),y!==null&&(t&&y.alternate!==null&&m.delete(y.key===null?p:y.key),w=o(y,w,p),U===null?M=y:U.sibling=y,U=y);return t&&m.forEach(function(k){return e(E,k)}),ne&&On(E,p),M}function z(E,w,S,N){if(typeof S=="object"&&S!==null&&S.type===lr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ws:e:{for(var M=S.key,U=w;U!==null;){if(U.key===M){if(M=S.type,M===lr){if(U.tag===7){n(E,U.sibling),w=i(U,S.props.children),w.return=E,E=w;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Zt&&ud(M)===U.type){n(E,U.sibling),w=i(U,S.props),w.ref=li(E,U,S),w.return=E,E=w;break e}n(E,U);break}else e(E,U);U=U.sibling}S.type===lr?(w=$n(S.props.children,E.mode,N,S.key),w.return=E,E=w):(N=qs(S.type,S.key,S.props,null,E.mode,N),N.ref=li(E,w,S),N.return=E,E=N)}return l(E);case or:e:{for(U=S.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){n(E,w.sibling),w=i(w,S.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else e(E,w);w=w.sibling}w=Jl(S,E.mode,N),w.return=E,E=w}return l(E);case Zt:return U=S._init,z(E,w,U(S._payload),N)}if(hi(S))return R(E,w,S,N);if(ni(S))return L(E,w,S,N);Ns(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,w!==null&&w.tag===6?(n(E,w.sibling),w=i(w,S),w.return=E,E=w):(n(E,w),w=Yl(S,E.mode,N),w.return=E,E=w),l(E)):n(E,w)}return z}var Or=Fp(!0),zp=Fp(!1),fo=Tn(null),po=null,gr=null,Mu=null;function Uu(){Mu=gr=po=null}function ju(t){var e=fo.current;te(fo),t._currentValue=e}function za(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ir(t,e){po=t,Mu=gr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ze=!0),t.firstContext=null)}function it(t){var e=t._currentValue;if(Mu!==t)if(t={context:t,memoizedValue:e,next:null},gr===null){if(po===null)throw Error(D(308));gr=t,po.dependencies={lanes:0,firstContext:t}}else gr=gr.next=t;return e}var Un=null;function Fu(t){Un===null?Un=[t]:Un.push(t)}function $p(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Fu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Vt(t,r)}function Vt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var en=!1;function zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Vt(t,n)}return i=r.interleaved,i===null?(e.next=e,Fu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Vt(t,n)}function Vs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tu(t,n)}}function cd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function go(t,e,n,r){var i=t.updateQueue;en=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var h=u,f=h.next;h.next=null,l===null?o=f:l.next=f,l=h;var C=t.alternate;C!==null&&(C=C.updateQueue,u=C.lastBaseUpdate,u!==l&&(u===null?C.firstBaseUpdate=f:u.next=f,C.lastBaseUpdate=h))}if(o!==null){var A=i.baseState;l=0,C=f=h=null,u=o;do{var I=u.lane,O=u.eventTime;if((r&I)===I){C!==null&&(C=C.next={eventTime:O,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var R=t,L=u;switch(I=e,O=n,L.tag){case 1:if(R=L.payload,typeof R=="function"){A=R.call(O,A,I);break e}A=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=L.payload,I=typeof R=="function"?R.call(O,A,I):R,I==null)break e;A=oe({},A,I);break e;case 2:en=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,I=i.effects,I===null?i.effects=[u]:I.push(u))}else O={eventTime:O,lane:I,tag:u.tag,payload:u.payload,callback:u.callback,next:null},C===null?(f=C=O,h=A):C=C.next=O,l|=I;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;I=u,u=I.next,I.next=null,i.lastBaseUpdate=I,i.shared.pending=null}}while(1);if(C===null&&(h=A),i.baseState=h,i.firstBaseUpdate=f,i.lastBaseUpdate=C,e=i.shared.interleaved,e!==null){i=e;do l|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Wn|=l,t.lanes=l,t.memoizedState=A}}function hd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var Yi={},St=Tn(Yi),Fi=Tn(Yi),zi=Tn(Yi);function jn(t){if(t===Yi)throw Error(D(174));return t}function $u(t,e){switch(J(zi,e),J(Fi,t),J(St,Yi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wa(e,t)}te(St),J(St,e)}function Dr(){te(St),te(Fi),te(zi)}function Vp(t){jn(zi.current);var e=jn(St.current),n=wa(e,t.type);e!==n&&(J(Fi,t),J(St,n))}function Bu(t){Fi.current===t&&(te(St),te(Fi))}var ie=Tn(0);function mo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wl=[];function Vu(){for(var t=0;t<Wl.length;t++)Wl[t]._workInProgressVersionPrimary=null;Wl.length=0}var bs=Gt.ReactCurrentDispatcher,Kl=Gt.ReactCurrentBatchConfig,Hn=0,se=null,de=null,pe=null,vo=!1,wi=!1,$i=0,P0=0;function Ie(){throw Error(D(321))}function bu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pt(t[n],e[n]))return!1;return!0}function Hu(t,e,n,r,i,o){if(Hn=o,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bs.current=t===null||t.memoizedState===null?D0:L0,t=n(r,i),wi){o=0;do{if(wi=!1,$i=0,25<=o)throw Error(D(301));o+=1,pe=de=null,e.updateQueue=null,bs.current=x0,t=n(r,i)}while(wi)}if(bs.current=yo,e=de!==null&&de.next!==null,Hn=0,pe=de=se=null,vo=!1,e)throw Error(D(300));return t}function Wu(){var t=$i!==0;return $i=0,t}function wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?se.memoizedState=pe=t:pe=pe.next=t,pe}function st(){if(de===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=de.next;var e=pe===null?se.memoizedState:pe.next;if(e!==null)pe=e,de=t;else{if(t===null)throw Error(D(310));de=t,t={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},pe===null?se.memoizedState=pe=t:pe=pe.next=t}return pe}function Bi(t,e){return typeof e=="function"?e(t):e}function Gl(t){var e=st(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=de,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,h=null,f=o;do{var C=f.lane;if((Hn&C)===C)h!==null&&(h=h.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:t(r,f.action);else{var A={lane:C,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};h===null?(u=h=A,l=r):h=h.next=A,se.lanes|=C,Wn|=C}f=f.next}while(f!==null&&f!==o);h===null?l=r:h.next=u,pt(r,e.memoizedState)||(ze=!0),e.memoizedState=r,e.baseState=l,e.baseQueue=h,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,se.lanes|=o,Wn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ql(t){var e=st(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=t(o,l.action),l=l.next;while(l!==i);pt(o,e.memoizedState)||(ze=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function bp(){}function Hp(t,e){var n=se,r=st(),i=e(),o=!pt(r.memoizedState,i);if(o&&(r.memoizedState=i,ze=!0),r=r.queue,Ku(Gp.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Vi(9,Kp.bind(null,n,r,i,e),void 0,null),ge===null)throw Error(D(349));Hn&30||Wp(n,e,i)}return i}function Wp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kp(t,e,n,r){e.value=n,e.getSnapshot=r,qp(e)&&Xp(t)}function Gp(t,e,n){return n(function(){qp(e)&&Xp(t)})}function qp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pt(t,n)}catch{return!0}}function Xp(t){var e=Vt(t,1);e!==null&&ft(e,t,1,-1)}function dd(t){var e=wt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:t},e.queue=t,t=t.dispatch=O0.bind(null,se,t),[e.memoizedState,t]}function Vi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Qp(){return st().memoizedState}function Hs(t,e,n,r){var i=wt();se.flags|=t,i.memoizedState=Vi(1|e,n,void 0,r===void 0?null:r)}function Bo(t,e,n,r){var i=st();r=r===void 0?null:r;var o=void 0;if(de!==null){var l=de.memoizedState;if(o=l.destroy,r!==null&&bu(r,l.deps)){i.memoizedState=Vi(e,n,o,r);return}}se.flags|=t,i.memoizedState=Vi(1|e,n,o,r)}function fd(t,e){return Hs(8390656,8,t,e)}function Ku(t,e){return Bo(2048,8,t,e)}function Yp(t,e){return Bo(4,2,t,e)}function Jp(t,e){return Bo(4,4,t,e)}function Zp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function eg(t,e,n){return n=n!=null?n.concat([t]):null,Bo(4,4,Zp.bind(null,e,t),n)}function Gu(){}function tg(t,e){var n=st();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ng(t,e){var n=st();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function rg(t,e,n){return Hn&21?(pt(n,e)||(n=ap(),se.lanes|=n,Wn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ze=!0),t.memoizedState=n)}function R0(t,e){var n=X;X=n!==0&&4>n?n:4,t(!0);var r=Kl.transition;Kl.transition={};try{t(!1),e()}finally{X=n,Kl.transition=r}}function ig(){return st().memoizedState}function N0(t,e,n){var r=vn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sg(t))og(e,n);else if(n=$p(t,e,n,r),n!==null){var i=Oe();ft(n,t,r,i),lg(n,e,r)}}function O0(t,e,n){var r=vn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sg(t))og(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,u=o(l,n);if(i.hasEagerState=!0,i.eagerState=u,pt(u,l)){var h=e.interleaved;h===null?(i.next=i,Fu(e)):(i.next=h.next,h.next=i),e.interleaved=i;return}}catch{}finally{}n=$p(t,e,i,r),n!==null&&(i=Oe(),ft(n,t,r,i),lg(n,e,r))}}function sg(t){var e=t.alternate;return t===se||e!==null&&e===se}function og(t,e){wi=vo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tu(t,n)}}var yo={readContext:it,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},D0={readContext:it,useCallback:function(t,e){return wt().memoizedState=[t,e===void 0?null:e],t},useContext:it,useEffect:fd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Hs(4194308,4,Zp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Hs(4,2,t,e)},useMemo:function(t,e){var n=wt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=wt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=N0.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var e=wt();return t={current:t},e.memoizedState=t},useState:dd,useDebugValue:Gu,useDeferredValue:function(t){return wt().memoizedState=t},useTransition:function(){var t=dd(!1),e=t[0];return t=R0.bind(null,t[1]),wt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=se,i=wt();if(ne){if(n===void 0)throw Error(D(407));n=n()}else{if(n=e(),ge===null)throw Error(D(349));Hn&30||Wp(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,fd(Gp.bind(null,r,o,t),[t]),r.flags|=2048,Vi(9,Kp.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=wt(),e=ge.identifierPrefix;if(ne){var n=Mt,r=xt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$i++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=P0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},L0={readContext:it,useCallback:tg,useContext:it,useEffect:Ku,useImperativeHandle:eg,useInsertionEffect:Yp,useLayoutEffect:Jp,useMemo:ng,useReducer:Gl,useRef:Qp,useState:function(){return Gl(Bi)},useDebugValue:Gu,useDeferredValue:function(t){var e=st();return rg(e,de.memoizedState,t)},useTransition:function(){var t=Gl(Bi)[0],e=st().memoizedState;return[t,e]},useMutableSource:bp,useSyncExternalStore:Hp,useId:ig,unstable_isNewReconciler:!1},x0={readContext:it,useCallback:tg,useContext:it,useEffect:Ku,useImperativeHandle:eg,useInsertionEffect:Yp,useLayoutEffect:Jp,useMemo:ng,useReducer:ql,useRef:Qp,useState:function(){return ql(Bi)},useDebugValue:Gu,useDeferredValue:function(t){var e=st();return de===null?e.memoizedState=t:rg(e,de.memoizedState,t)},useTransition:function(){var t=ql(Bi)[0],e=st().memoizedState;return[t,e]},useMutableSource:bp,useSyncExternalStore:Hp,useId:ig,unstable_isNewReconciler:!1};function at(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $a(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vo={isMounted:function(t){return(t=t._reactInternals)?Yn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Oe(),i=vn(t),o=zt(r,i);o.payload=e,n!=null&&(o.callback=n),e=gn(t,o,i),e!==null&&(ft(e,t,i,r),Vs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Oe(),i=vn(t),o=zt(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=gn(t,o,i),e!==null&&(ft(e,t,i,r),Vs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Oe(),r=vn(t),i=zt(n,r);i.tag=2,e!=null&&(i.callback=e),e=gn(t,i,r),e!==null&&(ft(e,t,r,n),Vs(e,t,r))}};function pd(t,e,n,r,i,o,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,l):e.prototype&&e.prototype.isPureReactComponent?!xi(n,r)||!xi(i,o):!0}function ag(t,e,n){var r=!1,i=Sn,o=e.contextType;return typeof o=="object"&&o!==null?o=it(o):(i=Be(e)?Vn:Ce.current,r=e.contextTypes,o=(r=r!=null)?Rr(t,i):Sn),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function gd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vo.enqueueReplaceState(e,e.state,null)}function Ba(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},zu(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=it(o):(o=Be(e)?Vn:Ce.current,i.context=Rr(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&($a(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Vo.enqueueReplaceState(i,i.state,null),go(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Lr(t,e){try{var n="",r=e;do n+=ay(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Xl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Va(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var M0=typeof WeakMap=="function"?WeakMap:Map;function ug(t,e,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_o||(_o=!0,Ja=r),Va(t,e)},n}function cg(t,e,n){n=zt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Va(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Va(t,e),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function md(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new M0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=X0.bind(null,t,e,n),e.then(t,t))}function vd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zt(-1,1),e.tag=2,gn(n,e,1))),n.lanes|=1),t)}var U0=Gt.ReactCurrentOwner,ze=!1;function Re(t,e,n,r){e.child=t===null?zp(e,null,n,r):Or(e,t.child,n,r)}function wd(t,e,n,r,i){n=n.render;var o=e.ref;return Ir(e,i),r=Hu(t,e,n,r,o,i),n=Wu(),t!==null&&!ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bt(t,e,i)):(ne&&n&&Du(e),e.flags|=1,Re(t,e,r,i),e.child)}function _d(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!tc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,hg(t,e,o,r,i)):(t=qs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:xi,n(l,r)&&t.ref===e.ref)return bt(t,e,i)}return e.flags|=1,t=yn(o,r),t.ref=e.ref,t.return=e,e.child=t}function hg(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(xi(o,r)&&t.ref===e.ref)if(ze=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(ze=!0);else return e.lanes=t.lanes,bt(t,e,i)}return ba(t,e,n,r,i)}function dg(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(vr,He),He|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(vr,He),He|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,J(vr,He),He|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,J(vr,He),He|=r;return Re(t,e,i,n),e.child}function fg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ba(t,e,n,r,i){var o=Be(n)?Vn:Ce.current;return o=Rr(e,o),Ir(e,i),n=Hu(t,e,n,r,o,i),r=Wu(),t!==null&&!ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bt(t,e,i)):(ne&&r&&Du(e),e.flags|=1,Re(t,e,n,i),e.child)}function Ed(t,e,n,r,i){if(Be(n)){var o=!0;uo(e)}else o=!1;if(Ir(e,i),e.stateNode===null)Ws(t,e),ag(e,n,r),Ba(e,n,r,i),r=!0;else if(t===null){var l=e.stateNode,u=e.memoizedProps;l.props=u;var h=l.context,f=n.contextType;typeof f=="object"&&f!==null?f=it(f):(f=Be(n)?Vn:Ce.current,f=Rr(e,f));var C=n.getDerivedStateFromProps,A=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function";A||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||h!==f)&&gd(e,l,r,f),en=!1;var I=e.memoizedState;l.state=I,go(e,r,l,i),h=e.memoizedState,u!==r||I!==h||$e.current||en?(typeof C=="function"&&($a(e,n,C,r),h=e.memoizedState),(u=en||pd(e,n,u,r,I,h,f))?(A||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=h),l.props=r,l.state=h,l.context=f,r=u):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{l=e.stateNode,Bp(t,e),u=e.memoizedProps,f=e.type===e.elementType?u:at(e.type,u),l.props=f,A=e.pendingProps,I=l.context,h=n.contextType,typeof h=="object"&&h!==null?h=it(h):(h=Be(n)?Vn:Ce.current,h=Rr(e,h));var O=n.getDerivedStateFromProps;(C=typeof O=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==A||I!==h)&&gd(e,l,r,h),en=!1,I=e.memoizedState,l.state=I,go(e,r,l,i);var R=e.memoizedState;u!==A||I!==R||$e.current||en?(typeof O=="function"&&($a(e,n,O,r),R=e.memoizedState),(f=en||pd(e,n,f,r,I,R,h)||!1)?(C||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,R,h),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,R,h)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&I===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&I===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),l.props=r,l.state=R,l.context=h,r=f):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&I===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&I===t.memoizedState||(e.flags|=1024),r=!1)}return Ha(t,e,n,r,o,i)}function Ha(t,e,n,r,i,o){fg(t,e);var l=(e.flags&128)!==0;if(!r&&!l)return i&&od(e,n,!1),bt(t,e,o);r=e.stateNode,U0.current=e;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&l?(e.child=Or(e,t.child,null,o),e.child=Or(e,null,u,o)):Re(t,e,u,o),e.memoizedState=r.state,i&&od(e,n,!0),e.child}function pg(t){var e=t.stateNode;e.pendingContext?sd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sd(t,e.context,!1),$u(t,e.containerInfo)}function Sd(t,e,n,r,i){return Nr(),xu(i),e.flags|=256,Re(t,e,n,r),e.child}var Wa={dehydrated:null,treeContext:null,retryLane:0};function Ka(t){return{baseLanes:t,cachePool:null,transitions:null}}function gg(t,e,n){var r=e.pendingProps,i=ie.current,o=!1,l=(e.flags&128)!==0,u;if((u=l)||(u=t!==null&&t.memoizedState===null?!1:(i&2)!==0),u?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(ie,i&1),t===null)return Fa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=r.children,t=r.fallback,o?(r=e.mode,o=e.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Wo(l,r,0,null),t=$n(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Ka(n),e.memoizedState=Wa,t):qu(e,l));if(i=t.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return j0(t,e,l,r,u,i,n);if(o){o=r.fallback,l=e.mode,i=t.child,u=i.sibling;var h={mode:"hidden",children:r.children};return!(l&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=h,e.deletions=null):(r=yn(i,h),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=yn(u,o):(o=$n(o,l,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,l=t.child.memoizedState,l=l===null?Ka(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=t.childLanes&~n,e.memoizedState=Wa,r}return o=t.child,t=o.sibling,r=yn(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function qu(t,e){return e=Wo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Os(t,e,n,r){return r!==null&&xu(r),Or(e,t.child,null,n),t=qu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function j0(t,e,n,r,i,o,l){if(n)return e.flags&256?(e.flags&=-257,r=Xl(Error(D(422))),Os(t,e,l,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Wo({mode:"visible",children:r.children},i,0,null),o=$n(o,i,l,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Or(e,t.child,null,l),e.child.memoizedState=Ka(l),e.memoizedState=Wa,o);if(!(e.mode&1))return Os(t,e,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(D(419)),r=Xl(o,r,void 0),Os(t,e,l,r)}if(u=(l&t.childLanes)!==0,ze||u){if(r=ge,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Vt(t,i),ft(r,t,i,-1))}return ec(),r=Xl(Error(D(421))),Os(t,e,l,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Q0.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,We=pn(i.nextSibling),Ke=e,ne=!0,ct=null,t!==null&&(Ze[et++]=xt,Ze[et++]=Mt,Ze[et++]=bn,xt=t.id,Mt=t.overflow,bn=e),e=qu(e,r.children),e.flags|=4096,e)}function Id(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),za(t.return,e,n)}function Ql(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function mg(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Re(t,e,r.children,n),r=ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Id(t,n,e);else if(t.tag===19)Id(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&mo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ql(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&mo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ql(e,!0,n,null,o);break;case"together":Ql(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ws(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=yn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function F0(t,e,n){switch(e.tag){case 3:pg(e),Nr();break;case 5:Vp(e);break;case 1:Be(e.type)&&uo(e);break;case 4:$u(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(fo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?gg(t,e,n):(J(ie,ie.current&1),t=bt(t,e,n),t!==null?t.sibling:null);J(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return mg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,dg(t,e,n)}return bt(t,e,n)}var vg,Ga,yg,wg;vg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ga=function(){};yg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,jn(St.current);var o=null;switch(n){case"input":i=ga(t,i),r=ga(t,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=ya(t,i),r=ya(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=lo)}_a(n,r);var l;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var u=i[f];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Ai.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var h=r[f];if(u=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&h!==u&&(h!=null||u!=null))if(f==="style")if(u){for(l in u)!u.hasOwnProperty(l)||h&&h.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in h)h.hasOwnProperty(l)&&u[l]!==h[l]&&(n||(n={}),n[l]=h[l])}else n||(o||(o=[]),o.push(f,n)),n=h;else f==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(o=o||[]).push(f,h)):f==="children"?typeof h!="string"&&typeof h!="number"||(o=o||[]).push(f,""+h):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Ai.hasOwnProperty(f)?(h!=null&&f==="onScroll"&&ee("scroll",t),o||u===h||(o=[])):(o=o||[]).push(f,h))}n&&(o=o||[]).push("style",n);var f=o;(e.updateQueue=f)&&(e.flags|=4)}};wg=function(t,e,n,r){n!==r&&(e.flags|=4)};function ai(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Te(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function z0(t,e,n){var r=e.pendingProps;switch(Lu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(e),null;case 1:return Be(e.type)&&ao(),Te(e),null;case 3:return r=e.stateNode,Dr(),te($e),te(Ce),Vu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Rs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ct!==null&&(tu(ct),ct=null))),Ga(t,e),Te(e),null;case 5:Bu(e);var i=jn(zi.current);if(n=e.type,t!==null&&e.stateNode!=null)yg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(D(166));return Te(e),null}if(t=jn(St.current),Rs(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[_t]=e,r[ji]=o,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<fi.length;i++)ee(fi[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Dh(r,o),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ee("invalid",r);break;case"textarea":xh(r,o),ee("invalid",r)}_a(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Ps(r.textContent,u,t),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Ps(r.textContent,u,t),i=["children",""+u]):Ai.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&ee("scroll",r)}switch(n){case"input":_s(r),Lh(r,o,!0);break;case"textarea":_s(r),Mh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=lo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=l.createElement(n,{is:r.is}):(t=l.createElement(n),n==="select"&&(l=t,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):t=l.createElementNS(t,n),t[_t]=e,t[ji]=r,vg(t,e,!1,!1),e.stateNode=t;e:{switch(l=Ea(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<fi.length;i++)ee(fi[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":Dh(t,r),i=ga(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),ee("invalid",t);break;case"textarea":xh(t,r),i=ya(t,r),ee("invalid",t);break;default:i=r}_a(n,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var h=u[o];o==="style"?Qf(t,h):o==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&qf(t,h)):o==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&Pi(t,h):typeof h=="number"&&Pi(t,""+h):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ai.hasOwnProperty(o)?h!=null&&o==="onScroll"&&ee("scroll",t):h!=null&&yu(t,o,h,l))}switch(n){case"input":_s(t),Lh(t,r,!1);break;case"textarea":_s(t),Mh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+En(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?wr(t,!!r.multiple,o,!1):r.defaultValue!=null&&wr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Te(e),null;case 6:if(t&&e.stateNode!=null)wg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));if(n=jn(zi.current),jn(St.current),Rs(e)){if(r=e.stateNode,n=e.memoizedProps,r[_t]=e,(o=r.nodeValue!==n)&&(t=Ke,t!==null))switch(t.tag){case 3:Ps(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ps(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=e,e.stateNode=r}return Te(e),null;case 13:if(te(ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&We!==null&&e.mode&1&&!(e.flags&128))jp(),Nr(),e.flags|=98560,o=!1;else if(o=Rs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(D(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[_t]=e}else Nr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Te(e),o=!1}else ct!==null&&(tu(ct),ct=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?fe===0&&(fe=3):ec())),e.updateQueue!==null&&(e.flags|=4),Te(e),null);case 4:return Dr(),Ga(t,e),t===null&&Mi(e.stateNode.containerInfo),Te(e),null;case 10:return ju(e.type._context),Te(e),null;case 17:return Be(e.type)&&ao(),Te(e),null;case 19:if(te(ie),o=e.memoizedState,o===null)return Te(e),null;if(r=(e.flags&128)!==0,l=o.rendering,l===null)if(r)ai(o,!1);else{if(fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=mo(t),l!==null){for(e.flags|=128,ai(o,!1),r=l.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(ie,ie.current&1|2),e.child}t=t.sibling}o.tail!==null&&ce()>xr&&(e.flags|=128,r=!0,ai(o,!1),e.lanes=4194304)}else{if(!r)if(t=mo(l),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ai(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ne)return Te(e),null}else 2*ce()-o.renderingStartTime>xr&&n!==1073741824&&(e.flags|=128,r=!0,ai(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(n=o.last,n!==null?n.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ce(),e.sibling=null,n=ie.current,J(ie,r?n&1|2:n&1),e):(Te(e),null);case 22:case 23:return Zu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?He&1073741824&&(Te(e),e.subtreeFlags&6&&(e.flags|=8192)):Te(e),null;case 24:return null;case 25:return null}throw Error(D(156,e.tag))}function $0(t,e){switch(Lu(e),e.tag){case 1:return Be(e.type)&&ao(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Dr(),te($e),te(Ce),Vu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bu(e),null;case 13:if(te(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(D(340));Nr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(ie),null;case 4:return Dr(),null;case 10:return ju(e.type._context),null;case 22:case 23:return Zu(),null;case 24:return null;default:return null}}var Ds=!1,ke=!1,B0=typeof WeakSet=="function"?WeakSet:Set,F=null;function mr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(t,e,r)}else n.current=null}function qa(t,e,n){try{n()}catch(r){le(t,e,r)}}var Td=!1;function V0(t,e){if(Oa=io,t=Tp(),Ou(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,h=-1,f=0,C=0,A=t,I=null;t:for(;;){for(var O;A!==n||i!==0&&A.nodeType!==3||(u=l+i),A!==o||r!==0&&A.nodeType!==3||(h=l+r),A.nodeType===3&&(l+=A.nodeValue.length),(O=A.firstChild)!==null;)I=A,A=O;for(;;){if(A===t)break t;if(I===n&&++f===i&&(u=l),I===o&&++C===r&&(h=l),(O=A.nextSibling)!==null)break;A=I,I=A.parentNode}A=O}n=u===-1||h===-1?null:{start:u,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Da={focusedElem:t,selectionRange:n},io=!1,F=e;F!==null;)if(e=F,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,F=t;else for(;F!==null;){e=F;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var L=R.memoizedProps,z=R.memoizedState,E=e.stateNode,w=E.getSnapshotBeforeUpdate(e.elementType===e.type?L:at(e.type,L),z);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(N){le(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,F=t;break}F=e.return}return R=Td,Td=!1,R}function _i(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&qa(e,n,o)}i=i.next}while(i!==r)}}function bo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xa(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _g(t){var e=t.alternate;e!==null&&(t.alternate=null,_g(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_t],delete e[ji],delete e[Ma],delete e[T0],delete e[k0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Eg(t){return t.tag===5||t.tag===3||t.tag===4}function kd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Eg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=lo));else if(r!==4&&(t=t.child,t!==null))for(Qa(t,e,n),t=t.sibling;t!==null;)Qa(t,e,n),t=t.sibling}function Ya(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ya(t,e,n),t=t.sibling;t!==null;)Ya(t,e,n),t=t.sibling}var ve=null,ut=!1;function Yt(t,e,n){for(n=n.child;n!==null;)Sg(t,e,n),n=n.sibling}function Sg(t,e,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Mo,n)}catch{}switch(n.tag){case 5:ke||mr(n,e);case 6:var r=ve,i=ut;ve=null,Yt(t,e,n),ve=r,ut=i,ve!==null&&(ut?(t=ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(ut?(t=ve,n=n.stateNode,t.nodeType===8?bl(t.parentNode,n):t.nodeType===1&&bl(t,n),Di(t)):bl(ve,n.stateNode));break;case 4:r=ve,i=ut,ve=n.stateNode.containerInfo,ut=!0,Yt(t,e,n),ve=r,ut=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&qa(n,e,l),i=i.next}while(i!==r)}Yt(t,e,n);break;case 1:if(!ke&&(mr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){le(n,e,u)}Yt(t,e,n);break;case 21:Yt(t,e,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,Yt(t,e,n),ke=r):Yt(t,e,n);break;default:Yt(t,e,n)}}function Cd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new B0),e.forEach(function(r){var i=Y0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,l=e,u=l;e:for(;u!==null;){switch(u.tag){case 5:ve=u.stateNode,ut=!1;break e;case 3:ve=u.stateNode.containerInfo,ut=!0;break e;case 4:ve=u.stateNode.containerInfo,ut=!0;break e}u=u.return}if(ve===null)throw Error(D(160));Sg(o,l,i),ve=null,ut=!1;var h=i.alternate;h!==null&&(h.return=null),i.return=null}catch(f){le(i,e,f)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ig(e,t),e=e.sibling}function Ig(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(lt(e,t),yt(t),r&4){try{_i(3,t,t.return),bo(3,t)}catch(L){le(t,t.return,L)}try{_i(5,t,t.return)}catch(L){le(t,t.return,L)}}break;case 1:lt(e,t),yt(t),r&512&&n!==null&&mr(n,n.return);break;case 5:if(lt(e,t),yt(t),r&512&&n!==null&&mr(n,n.return),t.flags&32){var i=t.stateNode;try{Pi(i,"")}catch(L){le(t,t.return,L)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,l=n!==null?n.memoizedProps:o,u=t.type,h=t.updateQueue;if(t.updateQueue=null,h!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Wf(i,o),Ea(u,l);var f=Ea(u,o);for(l=0;l<h.length;l+=2){var C=h[l],A=h[l+1];C==="style"?Qf(i,A):C==="dangerouslySetInnerHTML"?qf(i,A):C==="children"?Pi(i,A):yu(i,C,A,f)}switch(u){case"input":ma(i,o);break;case"textarea":Kf(i,o);break;case"select":var I=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var O=o.value;O!=null?wr(i,!!o.multiple,O,!1):I!==!!o.multiple&&(o.defaultValue!=null?wr(i,!!o.multiple,o.defaultValue,!0):wr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ji]=o}catch(L){le(t,t.return,L)}}break;case 6:if(lt(e,t),yt(t),r&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(L){le(t,t.return,L)}}break;case 3:if(lt(e,t),yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Di(e.containerInfo)}catch(L){le(t,t.return,L)}break;case 4:lt(e,t),yt(t);break;case 13:lt(e,t),yt(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Yu=ce())),r&4&&Cd(t);break;case 22:if(C=n!==null&&n.memoizedState!==null,t.mode&1?(ke=(f=ke)||C,lt(e,t),ke=f):lt(e,t),yt(t),r&8192){if(f=t.memoizedState!==null,(t.stateNode.isHidden=f)&&!C&&t.mode&1)for(F=t,C=t.child;C!==null;){for(A=F=C;F!==null;){switch(I=F,O=I.child,I.tag){case 0:case 11:case 14:case 15:_i(4,I,I.return);break;case 1:mr(I,I.return);var R=I.stateNode;if(typeof R.componentWillUnmount=="function"){r=I,n=I.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(L){le(r,n,L)}}break;case 5:mr(I,I.return);break;case 22:if(I.memoizedState!==null){Pd(A);continue}}O!==null?(O.return=I,F=O):Pd(A)}C=C.sibling}e:for(C=null,A=t;;){if(A.tag===5){if(C===null){C=A;try{i=A.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=A.stateNode,h=A.memoizedProps.style,l=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=Xf("display",l))}catch(L){le(t,t.return,L)}}}else if(A.tag===6){if(C===null)try{A.stateNode.nodeValue=f?"":A.memoizedProps}catch(L){le(t,t.return,L)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===t)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===t)break e;for(;A.sibling===null;){if(A.return===null||A.return===t)break e;C===A&&(C=null),A=A.return}C===A&&(C=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:lt(e,t),yt(t),r&4&&Cd(t);break;case 21:break;default:lt(e,t),yt(t)}}function yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Eg(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pi(i,""),r.flags&=-33);var o=kd(t);Ya(t,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=kd(t);Qa(t,u,l);break;default:throw Error(D(161))}}catch(h){le(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function b0(t,e,n){F=t,Tg(t)}function Tg(t,e,n){for(var r=(t.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ds;if(!l){var u=i.alternate,h=u!==null&&u.memoizedState!==null||ke;u=Ds;var f=ke;if(Ds=l,(ke=h)&&!f)for(F=i;F!==null;)l=F,h=l.child,l.tag===22&&l.memoizedState!==null?Rd(i):h!==null?(h.return=l,F=h):Rd(i);for(;o!==null;)F=o,Tg(o),o=o.sibling;F=i,Ds=u,ke=f}Ad(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,F=o):Ad(t)}}function Ad(t){for(;F!==null;){var e=F;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ke||bo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:at(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&hd(e,o,r);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hd(e,l,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var h=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var f=e.alternate;if(f!==null){var C=f.memoizedState;if(C!==null){var A=C.dehydrated;A!==null&&Di(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}ke||e.flags&512&&Xa(e)}catch(I){le(e,e.return,I)}}if(e===t){F=null;break}if(n=e.sibling,n!==null){n.return=e.return,F=n;break}F=e.return}}function Pd(t){for(;F!==null;){var e=F;if(e===t){F=null;break}var n=e.sibling;if(n!==null){n.return=e.return,F=n;break}F=e.return}}function Rd(t){for(;F!==null;){var e=F;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bo(4,e)}catch(h){le(e,n,h)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(h){le(e,i,h)}}var o=e.return;try{Xa(e)}catch(h){le(e,o,h)}break;case 5:var l=e.return;try{Xa(e)}catch(h){le(e,l,h)}}}catch(h){le(e,e.return,h)}if(e===t){F=null;break}var u=e.sibling;if(u!==null){u.return=e.return,F=u;break}F=e.return}}var H0=Math.ceil,wo=Gt.ReactCurrentDispatcher,Xu=Gt.ReactCurrentOwner,nt=Gt.ReactCurrentBatchConfig,W=0,ge=null,he=null,ye=0,He=0,vr=Tn(0),fe=0,bi=null,Wn=0,Ho=0,Qu=0,Ei=null,Me=null,Yu=0,xr=1/0,Dt=null,_o=!1,Ja=null,mn=null,Ls=!1,un=null,Eo=0,Si=0,Za=null,Ks=-1,Gs=0;function Oe(){return W&6?ce():Ks!==-1?Ks:Ks=ce()}function vn(t){return t.mode&1?W&2&&ye!==0?ye&-ye:A0.transition!==null?(Gs===0&&(Gs=ap()),Gs):(t=X,t!==0||(t=window.event,t=t===void 0?16:gp(t.type)),t):1}function ft(t,e,n,r){if(50<Si)throw Si=0,Za=null,Error(D(185));qi(t,n,r),(!(W&2)||t!==ge)&&(t===ge&&(!(W&2)&&(Ho|=n),fe===4&&nn(t,ye)),Ve(t,r),n===1&&W===0&&!(e.mode&1)&&(xr=ce()+500,$o&&kn()))}function Ve(t,e){var n=t.callbackNode;Ay(t,e);var r=ro(t,t===ge?ye:0);if(r===0)n!==null&&Fh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Fh(n),e===1)t.tag===0?C0(Nd.bind(null,t)):xp(Nd.bind(null,t)),S0(function(){!(W&6)&&kn()}),n=null;else{switch(up(r)){case 1:n=Iu;break;case 4:n=op;break;case 16:n=no;break;case 536870912:n=lp;break;default:n=no}n=Dg(n,kg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kg(t,e){if(Ks=-1,Gs=0,W&6)throw Error(D(327));var n=t.callbackNode;if(Tr()&&t.callbackNode!==n)return null;var r=ro(t,t===ge?ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=So(t,r);else{e=r;var i=W;W|=2;var o=Ag();(ge!==t||ye!==e)&&(Dt=null,xr=ce()+500,zn(t,e));do try{G0();break}catch(u){Cg(t,u)}while(1);Uu(),wo.current=o,W=i,he!==null?e=0:(ge=null,ye=0,e=fe)}if(e!==0){if(e===2&&(i=Ca(t),i!==0&&(r=i,e=eu(t,i))),e===1)throw n=bi,zn(t,0),nn(t,r),Ve(t,ce()),n;if(e===6)nn(t,r);else{if(i=t.current.alternate,!(r&30)&&!W0(i)&&(e=So(t,r),e===2&&(o=Ca(t),o!==0&&(r=o,e=eu(t,o))),e===1))throw n=bi,zn(t,0),nn(t,r),Ve(t,ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(D(345));case 2:Dn(t,Me,Dt);break;case 3:if(nn(t,r),(r&130023424)===r&&(e=Yu+500-ce(),10<e)){if(ro(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Oe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xa(Dn.bind(null,t,Me,Dt),e);break}Dn(t,Me,Dt);break;case 4:if(nn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var l=31-dt(r);o=1<<l,l=e[l],l>i&&(i=l),r&=~o}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*H0(r/1960))-r,10<r){t.timeoutHandle=xa(Dn.bind(null,t,Me,Dt),r);break}Dn(t,Me,Dt);break;case 5:Dn(t,Me,Dt);break;default:throw Error(D(329))}}}return Ve(t,ce()),t.callbackNode===n?kg.bind(null,t):null}function eu(t,e){var n=Ei;return t.current.memoizedState.isDehydrated&&(zn(t,e).flags|=256),t=So(t,e),t!==2&&(e=Me,Me=n,e!==null&&tu(e)),t}function tu(t){Me===null?Me=t:Me.push.apply(Me,t)}function W0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!pt(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nn(t,e){for(e&=~Qu,e&=~Ho,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dt(e),r=1<<n;t[n]=-1,e&=~r}}function Nd(t){if(W&6)throw Error(D(327));Tr();var e=ro(t,0);if(!(e&1))return Ve(t,ce()),null;var n=So(t,e);if(t.tag!==0&&n===2){var r=Ca(t);r!==0&&(e=r,n=eu(t,r))}if(n===1)throw n=bi,zn(t,0),nn(t,e),Ve(t,ce()),n;if(n===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dn(t,Me,Dt),Ve(t,ce()),null}function Ju(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(xr=ce()+500,$o&&kn())}}function Kn(t){un!==null&&un.tag===0&&!(W&6)&&Tr();var e=W;W|=1;var n=nt.transition,r=X;try{if(nt.transition=null,X=1,t)return t()}finally{X=r,nt.transition=n,W=e,!(W&6)&&kn()}}function Zu(){He=vr.current,te(vr)}function zn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,E0(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(Lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ao();break;case 3:Dr(),te($e),te(Ce),Vu();break;case 5:Bu(r);break;case 4:Dr();break;case 13:te(ie);break;case 19:te(ie);break;case 10:ju(r.type._context);break;case 22:case 23:Zu()}n=n.return}if(ge=t,he=t=yn(t.current,null),ye=He=e,fe=0,bi=null,Qu=Ho=Wn=0,Me=Ei=null,Un!==null){for(e=0;e<Un.length;e++)if(n=Un[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Un=null}return t}function Cg(t,e){do{var n=he;try{if(Uu(),bs.current=yo,vo){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vo=!1}if(Hn=0,pe=de=se=null,wi=!1,$i=0,Xu.current=null,n===null||n.return===null){fe=1,bi=e,he=null;break}e:{var o=t,l=n.return,u=n,h=e;if(e=ye,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var f=h,C=u,A=C.tag;if(!(C.mode&1)&&(A===0||A===11||A===15)){var I=C.alternate;I?(C.updateQueue=I.updateQueue,C.memoizedState=I.memoizedState,C.lanes=I.lanes):(C.updateQueue=null,C.memoizedState=null)}var O=vd(l);if(O!==null){O.flags&=-257,yd(O,l,u,o,e),O.mode&1&&md(o,f,e),e=O,h=f;var R=e.updateQueue;if(R===null){var L=new Set;L.add(h),e.updateQueue=L}else R.add(h);break e}else{if(!(e&1)){md(o,f,e),ec();break e}h=Error(D(426))}}else if(ne&&u.mode&1){var z=vd(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),yd(z,l,u,o,e),xu(Lr(h,u));break e}}o=h=Lr(h,u),fe!==4&&(fe=2),Ei===null?Ei=[o]:Ei.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var E=ug(o,h,e);cd(o,E);break e;case 1:u=h;var w=o.type,S=o.stateNode;if(!(o.flags&128)&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(mn===null||!mn.has(S)))){o.flags|=65536,e&=-e,o.lanes|=e;var N=cg(o,u,e);cd(o,N);break e}}o=o.return}while(o!==null)}Rg(n)}catch(M){e=M,he===n&&n!==null&&(he=n=n.return);continue}break}while(1)}function Ag(){var t=wo.current;return wo.current=yo,t===null?yo:t}function ec(){(fe===0||fe===3||fe===2)&&(fe=4),ge===null||!(Wn&268435455)&&!(Ho&268435455)||nn(ge,ye)}function So(t,e){var n=W;W|=2;var r=Ag();(ge!==t||ye!==e)&&(Dt=null,zn(t,e));do try{K0();break}catch(i){Cg(t,i)}while(1);if(Uu(),W=n,wo.current=r,he!==null)throw Error(D(261));return ge=null,ye=0,fe}function K0(){for(;he!==null;)Pg(he)}function G0(){for(;he!==null&&!yy();)Pg(he)}function Pg(t){var e=Og(t.alternate,t,He);t.memoizedProps=t.pendingProps,e===null?Rg(t):he=e,Xu.current=null}function Rg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$0(n,e),n!==null){n.flags&=32767,he=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{fe=6,he=null;return}}else if(n=z0(n,e,He),n!==null){he=n;return}if(e=e.sibling,e!==null){he=e;return}he=e=t}while(e!==null);fe===0&&(fe=5)}function Dn(t,e,n){var r=X,i=nt.transition;try{nt.transition=null,X=1,q0(t,e,n,r)}finally{nt.transition=i,X=r}return null}function q0(t,e,n,r){do Tr();while(un!==null);if(W&6)throw Error(D(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Py(t,o),t===ge&&(he=ge=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ls||(Ls=!0,Dg(no,function(){return Tr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=nt.transition,nt.transition=null;var l=X;X=1;var u=W;W|=4,Xu.current=null,V0(t,n),Ig(n,t),p0(Da),io=!!Oa,Da=Oa=null,t.current=n,b0(n),wy(),W=u,X=l,nt.transition=o}else t.current=n;if(Ls&&(Ls=!1,un=t,Eo=i),o=t.pendingLanes,o===0&&(mn=null),Sy(n.stateNode),Ve(t,ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_o)throw _o=!1,t=Ja,Ja=null,t;return Eo&1&&t.tag!==0&&Tr(),o=t.pendingLanes,o&1?t===Za?Si++:(Si=0,Za=t):Si=0,kn(),null}function Tr(){if(un!==null){var t=up(Eo),e=nt.transition,n=X;try{if(nt.transition=null,X=16>t?16:t,un===null)var r=!1;else{if(t=un,un=null,Eo=0,W&6)throw Error(D(331));var i=W;for(W|=4,F=t.current;F!==null;){var o=F,l=o.child;if(F.flags&16){var u=o.deletions;if(u!==null){for(var h=0;h<u.length;h++){var f=u[h];for(F=f;F!==null;){var C=F;switch(C.tag){case 0:case 11:case 15:_i(8,C,o)}var A=C.child;if(A!==null)A.return=C,F=A;else for(;F!==null;){C=F;var I=C.sibling,O=C.return;if(_g(C),C===f){F=null;break}if(I!==null){I.return=O,F=I;break}F=O}}}var R=o.alternate;if(R!==null){var L=R.child;if(L!==null){R.child=null;do{var z=L.sibling;L.sibling=null,L=z}while(L!==null)}}F=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,F=l;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_i(9,o,o.return)}var E=o.sibling;if(E!==null){E.return=o.return,F=E;break e}F=o.return}}var w=t.current;for(F=w;F!==null;){l=F;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,F=S;else e:for(l=w;F!==null;){if(u=F,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:bo(9,u)}}catch(M){le(u,u.return,M)}if(u===l){F=null;break e}var N=u.sibling;if(N!==null){N.return=u.return,F=N;break e}F=u.return}}if(W=i,kn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Mo,t)}catch{}r=!0}return r}finally{X=n,nt.transition=e}}return!1}function Od(t,e,n){e=Lr(n,e),e=ug(t,e,1),t=gn(t,e,1),e=Oe(),t!==null&&(qi(t,1,e),Ve(t,e))}function le(t,e,n){if(t.tag===3)Od(t,t,n);else for(;e!==null;){if(e.tag===3){Od(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){t=Lr(n,t),t=cg(e,t,1),e=gn(e,t,1),t=Oe(),e!==null&&(qi(e,1,t),Ve(e,t));break}}e=e.return}}function X0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Oe(),t.pingedLanes|=t.suspendedLanes&n,ge===t&&(ye&n)===n&&(fe===4||fe===3&&(ye&130023424)===ye&&500>ce()-Yu?zn(t,0):Qu|=n),Ve(t,e)}function Ng(t,e){e===0&&(t.mode&1?(e=Is,Is<<=1,!(Is&130023424)&&(Is=4194304)):e=1);var n=Oe();t=Vt(t,e),t!==null&&(qi(t,e,n),Ve(t,n))}function Q0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ng(t,n)}function Y0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(e),Ng(t,n)}var Og;Og=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$e.current)ze=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ze=!1,F0(t,e,n);ze=!!(t.flags&131072)}else ze=!1,ne&&e.flags&1048576&&Mp(e,ho,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ws(t,e),t=e.pendingProps;var i=Rr(e,Ce.current);Ir(e,n),i=Hu(null,e,r,t,i,n);var o=Wu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Be(r)?(o=!0,uo(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zu(e),i.updater=Vo,e.stateNode=i,i._reactInternals=e,Ba(e,r,t,n),e=Ha(null,e,r,!0,o,n)):(e.tag=0,ne&&o&&Du(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ws(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Z0(r),t=at(r,t),i){case 0:e=ba(null,e,r,t,n);break e;case 1:e=Ed(null,e,r,t,n);break e;case 11:e=wd(null,e,r,t,n);break e;case 14:e=_d(null,e,r,at(r.type,t),n);break e}throw Error(D(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),ba(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Ed(t,e,r,i,n);case 3:e:{if(pg(e),t===null)throw Error(D(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Bp(t,e),go(e,r,null,n);var l=e.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Lr(Error(D(423)),e),e=Sd(t,e,r,n,i);break e}else if(r!==i){i=Lr(Error(D(424)),e),e=Sd(t,e,r,n,i);break e}else for(We=pn(e.stateNode.containerInfo.firstChild),Ke=e,ne=!0,ct=null,n=zp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nr(),r===i){e=bt(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return Vp(e),t===null&&Fa(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,l=i.children,La(r,i)?l=null:o!==null&&La(r,o)&&(e.flags|=32),fg(t,e),Re(t,e,l,n),e.child;case 6:return t===null&&Fa(e),null;case 13:return gg(t,e,n);case 4:return $u(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Or(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),wd(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,l=i.value,J(fo,r._currentValue),r._currentValue=l,o!==null)if(pt(o.value,l)){if(o.children===i.children&&!$e.current){e=bt(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var h=u.firstContext;h!==null;){if(h.context===r){if(o.tag===1){h=zt(-1,n&-n),h.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var C=f.pending;C===null?h.next=h:(h.next=C.next,C.next=h),f.pending=h}}o.lanes|=n,h=o.alternate,h!==null&&(h.lanes|=n),za(o.return,n,e),u.lanes|=n;break}h=h.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(D(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),za(l,n,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ir(e,n),i=it(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=at(r,e.pendingProps),i=at(r.type,i),_d(t,e,r,i,n);case 15:return hg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Ws(t,e),e.tag=1,Be(r)?(t=!0,uo(e)):t=!1,Ir(e,n),ag(e,r,i),Ba(e,r,i,n),Ha(null,e,r,!0,t,n);case 19:return mg(t,e,n);case 22:return dg(t,e,n)}throw Error(D(156,e.tag))};function Dg(t,e){return sp(t,e)}function J0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(t,e,n,r){return new J0(t,e,n,r)}function tc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Z0(t){if(typeof t=="function")return tc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_u)return 11;if(t===Eu)return 14}return 2}function yn(t,e){var n=t.alternate;return n===null?(n=tt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qs(t,e,n,r,i,o){var l=2;if(r=t,typeof t=="function")tc(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case lr:return $n(n.children,i,o,e);case wu:l=8,i|=8;break;case ha:return t=tt(12,n,e,i|2),t.elementType=ha,t.lanes=o,t;case da:return t=tt(13,n,e,i),t.elementType=da,t.lanes=o,t;case fa:return t=tt(19,n,e,i),t.elementType=fa,t.lanes=o,t;case Vf:return Wo(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $f:l=10;break e;case Bf:l=9;break e;case _u:l=11;break e;case Eu:l=14;break e;case Zt:l=16,r=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=tt(l,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function $n(t,e,n,r){return t=tt(7,t,r,e),t.lanes=n,t}function Wo(t,e,n,r){return t=tt(22,t,r,e),t.elementType=Vf,t.lanes=n,t.stateNode={isHidden:!1},t}function Yl(t,e,n){return t=tt(6,t,null,e),t.lanes=n,t}function Jl(t,e,n){return e=tt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ew(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nc(t,e,n,r,i,o,l,u,h){return t=new ew(t,e,n,u,h),e===1?(e=1,o===!0&&(e|=8)):e=0,o=tt(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zu(o),t}function tw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Lg(t){if(!t)return Sn;t=t._reactInternals;e:{if(Yn(t)!==t||t.tag!==1)throw Error(D(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(D(171))}if(t.tag===1){var n=t.type;if(Be(n))return Lp(t,n,e)}return e}function xg(t,e,n,r,i,o,l,u,h){return t=nc(n,r,!0,t,i,o,l,u,h),t.context=Lg(null),n=t.current,r=Oe(),i=vn(n),o=zt(r,i),o.callback=e??null,gn(n,o,i),t.current.lanes=i,qi(t,i,r),Ve(t,r),t}function Ko(t,e,n,r){var i=e.current,o=Oe(),l=vn(i);return n=Lg(n),e.context===null?e.context=n:e.pendingContext=n,e=zt(o,l),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gn(i,e,l),t!==null&&(ft(t,i,l,o),Vs(t,i,l)),l}function Io(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function rc(t,e){Dd(t,e),(t=t.alternate)&&Dd(t,e)}function nw(){return null}var Mg=typeof reportError=="function"?reportError:function(t){console.error(t)};function ic(t){this._internalRoot=t}Go.prototype.render=ic.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(D(409));Ko(t,e,null,null)};Go.prototype.unmount=ic.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kn(function(){Ko(null,t,null,null)}),e[Bt]=null}};function Go(t){this._internalRoot=t}Go.prototype.unstable_scheduleHydration=function(t){if(t){var e=dp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tn.length&&e!==0&&e<tn[n].priority;n++);tn.splice(n,0,t),n===0&&pp(t)}};function sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ld(){}function rw(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=Io(l);o.call(f)}}var l=xg(e,r,t,0,null,!1,!1,"",Ld);return t._reactRootContainer=l,t[Bt]=l.current,Mi(t.nodeType===8?t.parentNode:t),Kn(),l}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var f=Io(h);u.call(f)}}var h=nc(t,0,!1,null,null,!1,!1,"",Ld);return t._reactRootContainer=h,t[Bt]=h.current,Mi(t.nodeType===8?t.parentNode:t),Kn(function(){Ko(e,h,n,r)}),h}function Xo(t,e,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var h=Io(l);u.call(h)}}Ko(e,l,t,i)}else l=rw(n,e,t,i,r);return Io(l)}cp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=di(e.pendingLanes);n!==0&&(Tu(e,n|1),Ve(e,ce()),!(W&6)&&(xr=ce()+500,kn()))}break;case 13:Kn(function(){var r=Vt(t,1);if(r!==null){var i=Oe();ft(r,t,1,i)}}),rc(t,1)}};ku=function(t){if(t.tag===13){var e=Vt(t,134217728);if(e!==null){var n=Oe();ft(e,t,134217728,n)}rc(t,134217728)}};hp=function(t){if(t.tag===13){var e=vn(t),n=Vt(t,e);if(n!==null){var r=Oe();ft(n,t,e,r)}rc(t,e)}};dp=function(){return X};fp=function(t,e){var n=X;try{return X=t,e()}finally{X=n}};Ia=function(t,e,n){switch(e){case"input":if(ma(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=zo(r);if(!i)throw Error(D(90));Hf(r),ma(r,i)}}}break;case"textarea":Kf(t,n);break;case"select":e=n.value,e!=null&&wr(t,!!n.multiple,e,!1)}};Zf=Ju;ep=Kn;var iw={usingClientEntryPoint:!1,Events:[Qi,hr,zo,Yf,Jf,Ju]},ui={findFiberByHostInstance:Mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sw={bundleType:ui.bundleType,version:ui.version,rendererPackageName:ui.rendererPackageName,rendererConfig:ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rp(t),t===null?null:t.stateNode},findFiberByHostInstance:ui.findFiberByHostInstance||nw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xs.isDisabled&&xs.supportsFiber)try{Mo=xs.inject(sw),Et=xs}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iw;Xe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sc(e))throw Error(D(200));return tw(t,e,null,n)};Xe.createRoot=function(t,e){if(!sc(t))throw Error(D(299));var n=!1,r="",i=Mg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=nc(t,1,!1,null,null,n,!1,r,i),t[Bt]=e.current,Mi(t.nodeType===8?t.parentNode:t),new ic(e)};Xe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=rp(e),t=t===null?null:t.stateNode,t};Xe.flushSync=function(t){return Kn(t)};Xe.hydrate=function(t,e,n){if(!qo(e))throw Error(D(200));return Xo(null,t,e,!0,n)};Xe.hydrateRoot=function(t,e,n){if(!sc(t))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Mg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=xg(e,null,t,1,n??null,i,!1,o,l),t[Bt]=e.current,Mi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Go(e)};Xe.render=function(t,e,n){if(!qo(e))throw Error(D(200));return Xo(null,t,e,!1,n)};Xe.unmountComponentAtNode=function(t){if(!qo(t))throw Error(D(40));return t._reactRootContainer?(Kn(function(){Xo(null,null,t,!1,function(){t._reactRootContainer=null,t[Bt]=null})}),!0):!1};Xe.unstable_batchedUpdates=Ju;Xe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!qo(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return Xo(t,e,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function Ug(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ug)}catch(t){console.error(t)}}Ug(),Uf.exports=Xe;var ow=Uf.exports,jg,xd=ow;jg=xd.createRoot,xd.hydrateRoot;const lw="https://your-render-app.onrender.com";async function xn(t,e={}){const n=await fetch(`${lw}${t}`,e);let r=null;try{r=await n.json()}catch{r=null}if(!n.ok){const i=(r==null?void 0:r.error)||`Request failed (${n.status})`;throw new Error(i)}return r}function aw({onLogin:t}){const[e,n]=Ue.useState(""),[r,i]=Ue.useState(""),[o,l]=Ue.useState(""),[u,h]=Ue.useState(""),[f,C]=Ue.useState(null);async function A(I){I.preventDefault(),C(null);try{await xn("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({api_id:e,api_hash:r,phone:o,group_link:u})}),t()}catch(O){C(O.message||"Login failed")}}return G.jsxs("div",{className:"container",children:[G.jsx("h2",{children:"Login / Connect"}),G.jsxs("form",{onSubmit:A,style:{display:"grid",gap:8},children:[G.jsx("input",{placeholder:"API ID",value:e,onChange:I=>n(I.target.value)}),G.jsx("input",{placeholder:"API Hash",value:r,onChange:I=>i(I.target.value)}),G.jsx("input",{placeholder:"Phone (+...)",value:o,onChange:I=>l(I.target.value)}),G.jsx("input",{placeholder:"Group invite link",value:u,onChange:I=>h(I.target.value)}),G.jsx("div",{className:"row",children:G.jsx("button",{type:"submit",children:"Save credentials"})}),f&&G.jsx("div",{style:{color:"crimson"},children:f})]})]})}function uw({initialStatus:t}){var C;const[e,n]=Ue.useState(t),[r,i]=Ue.useState(3),o=Ue.useRef(null);Ue.useEffect(()=>{const A=setInterval(()=>{xn("/api/status").then(I=>n(I)).catch(()=>{})},1500);return()=>clearInterval(A)},[]),Ue.useEffect(()=>{o.current&&(o.current.scrollTop=o.current.scrollHeight)},[e]);async function l(){await xn("/api/start",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({desired_number:Number(r)})})}async function u(){await xn("/api/stop",{method:"POST"})}async function h(){await xn("/api/logout",{method:"POST"}),window.location.reload()}async function f(){await xn("/api/clear-logs",{method:"POST"})}return G.jsxs("div",{className:"container",children:[G.jsx("h2",{children:"Dashboard"}),G.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[G.jsxs("div",{children:["Status: ",G.jsx("strong",{children:(e==null?void 0:e.status)||"Idle"})]}),G.jsxs("div",{children:["Attempts: ",G.jsx("strong",{children:(e==null?void 0:e.attempts)||0})]})]}),G.jsxs("div",{style:{marginTop:12},children:[G.jsx("label",{children:"Target number: "}),G.jsx("input",{type:"number",min:"1",max:"6",value:r,onChange:A=>i(A.target.value)}),G.jsx("button",{onClick:l,children:"Start"}),G.jsx("button",{onClick:u,children:"Stop"}),G.jsx("button",{onClick:f,children:"Clear logs"}),G.jsx("button",{onClick:h,children:"Logout"})]}),G.jsx("h3",{style:{marginTop:18},children:"Logs"}),G.jsx("div",{className:"logs",ref:o,children:(C=e==null?void 0:e.logs)!=null&&C.length?e.logs.map((A,I)=>G.jsx("div",{children:A},I)):G.jsx("div",{children:"No logs yet"})})]})}function cw(){const[t,e]=Ue.useState(null);return Ue.useEffect(()=>{xn("/api/status").then(n=>{!n||n.error?e(null):e(n)}).catch(()=>e(null))},[]),t===null?G.jsx(aw,{onLogin:()=>window.location.reload()}):G.jsx(uw,{initialStatus:t})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],l=t[n++],u=t[n++],h=((i&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],l=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return e.join("")},zg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],l=i+1<t.length,u=l?t[i+1]:0,h=i+2<t.length,f=h?t[i+2]:0,C=o>>2,A=(o&3)<<4|u>>4;let I=(u&15)<<2|f>>6,O=f&63;h||(O=64,l||(I=64)),r.push(n[C],n[A],n[I],n[O])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],u=i<t.length?n[t.charAt(i)]:0;++i;const f=i<t.length?n[t.charAt(i)]:64;++i;const A=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||u==null||f==null||A==null)throw new dw;const I=o<<2|u>>4;if(r.push(I),f!==64){const O=u<<4&240|f>>2;if(r.push(O),A!==64){const R=f<<6&192|A;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fw=function(t){const e=Fg(t);return zg.encodeByteArray(e,!0)},To=function(t){return fw(t).replace(/\./g,"")},$g=function(t){try{return zg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=()=>pw().__FIREBASE_DEFAULTS__,mw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$g(t[1]);return e&&JSON.parse(e)},oc=()=>{try{return gw()||mw()||vw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bg=t=>{var e,n;return(n=(e=oc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yw=t=>{const e=Bg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Vg=()=>{var t;return(t=oc())===null||t===void 0?void 0:t.config},bg=t=>{var e;return(e=oc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),u="";return[To(JSON.stringify(n)),To(JSON.stringify(l)),u].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ew(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Sw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Iw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tw(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wg(){try{return typeof indexedDB=="object"}catch{return!1}}function Kg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function kw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="FirebaseError";class mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Cw,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jn.prototype.create)}}class Jn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],l=o?Aw(o,r):"Error",u=`${this.serviceName}: ${l} (${i}).`;return new mt(i,u,r)}}function Aw(t,e){return t.replace(Pw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Pw=/\{\$([^}]+)}/g;function Rw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],l=e[i];if(Md(o)&&Md(l)){if(!Hi(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Md(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Nw(t,e){const n=new Ow(t,e);return n.subscribe.bind(n)}class Ow{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Dw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zl),i.error===void 0&&(i.error=Zl),i.complete===void 0&&(i.complete=Zl);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=1e3,xw=2,Mw=4*60*60*1e3,Uw=.5;function Ud(t,e=Lw,n=xw){const r=e*Math.pow(n,t),i=Math.round(Uw*r*(Math.random()-.5)*2);return Math.min(Mw,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t){return t&&t._delegate?t._delegate:t}class gt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ww;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zw(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&l.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fw(t){return t===Ln?void 0:t}function zw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const Bw={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Vw=q.INFO,bw={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},Hw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qo{constructor(e){this.name=e,this._logLevel=Vw,this._logHandler=Hw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const Ww=(t,e)=>e.some(n=>t instanceof n);let jd,Fd;function Kw(){return jd||(jd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gw(){return Fd||(Fd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gg=new WeakMap,nu=new WeakMap,qg=new WeakMap,ea=new WeakMap,lc=new WeakMap;function qw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",l)},o=()=>{n(wn(t.result)),i()},l=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&Gg.set(n,t)}).catch(()=>{}),lc.set(e,t),e}function Xw(t){if(nu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",l),t.removeEventListener("abort",l)},o=()=>{n(),i()},l=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",l),t.addEventListener("abort",l)});nu.set(t,e)}let ru={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qw(t){ru=t(ru)}function Yw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ta(this),e,...n);return qg.set(r,e.sort?e.sort():[e]),wn(r)}:Gw().includes(t)?function(...e){return t.apply(ta(this),e),wn(Gg.get(this))}:function(...e){return wn(t.apply(ta(this),e))}}function Jw(t){return typeof t=="function"?Yw(t):(t instanceof IDBTransaction&&Xw(t),Ww(t,Kw())?new Proxy(t,ru):t)}function wn(t){if(t instanceof IDBRequest)return qw(t);if(ea.has(t))return ea.get(t);const e=Jw(t);return e!==t&&(ea.set(t,e),lc.set(e,t)),e}const ta=t=>lc.get(t);function Xg(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(t,e),u=wn(l);return r&&l.addEventListener("upgradeneeded",h=>{r(wn(l.result),h.oldVersion,h.newVersion,wn(l.transaction),h)}),n&&l.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const Zw=["get","getKey","getAll","getAllKeys","count"],e1=["put","add","delete","clear"],na=new Map;function zd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(na.get(e))return na.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=e1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Zw.includes(n)))return;const o=async function(l,...u){const h=this.transaction(l,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[n](...u),i&&h.done]))[0]};return na.set(e,o),o}Qw(t=>({...t,get:(e,n,r)=>zd(e,n)||t.get(e,n,r),has:(e,n)=>!!zd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(n1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function n1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const iu="@firebase/app",$d="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new Qo("@firebase/app"),r1="@firebase/app-compat",i1="@firebase/analytics-compat",s1="@firebase/analytics",o1="@firebase/app-check-compat",l1="@firebase/app-check",a1="@firebase/auth",u1="@firebase/auth-compat",c1="@firebase/database",h1="@firebase/data-connect",d1="@firebase/database-compat",f1="@firebase/functions",p1="@firebase/functions-compat",g1="@firebase/installations",m1="@firebase/installations-compat",v1="@firebase/messaging",y1="@firebase/messaging-compat",w1="@firebase/performance",_1="@firebase/performance-compat",E1="@firebase/remote-config",S1="@firebase/remote-config-compat",I1="@firebase/storage",T1="@firebase/storage-compat",k1="@firebase/firestore",C1="@firebase/vertexai-preview",A1="@firebase/firestore-compat",P1="firebase",R1="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="[DEFAULT]",N1={[iu]:"fire-core",[r1]:"fire-core-compat",[s1]:"fire-analytics",[i1]:"fire-analytics-compat",[l1]:"fire-app-check",[o1]:"fire-app-check-compat",[a1]:"fire-auth",[u1]:"fire-auth-compat",[c1]:"fire-rtdb",[h1]:"fire-data-connect",[d1]:"fire-rtdb-compat",[f1]:"fire-fn",[p1]:"fire-fn-compat",[g1]:"fire-iid",[m1]:"fire-iid-compat",[v1]:"fire-fcm",[y1]:"fire-fcm-compat",[w1]:"fire-perf",[_1]:"fire-perf-compat",[E1]:"fire-rc",[S1]:"fire-rc-compat",[I1]:"fire-gcs",[T1]:"fire-gcs-compat",[k1]:"fire-fst",[A1]:"fire-fst-compat",[C1]:"fire-vertex","fire-js":"fire-js",[P1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new Map,O1=new Map,ou=new Map;function Bd(t,e){try{t.container.addComponent(e)}catch(n){Ht.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kt(t){const e=t.name;if(ou.has(e))return Ht.debug(`There were multiple attempts to register component ${e}.`),!1;ou.set(e,t);for(const n of ko.values())Bd(n,t);for(const n of O1.values())Bd(n,t);return!0}function Zn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_n=new Jn("app","Firebase",D1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=R1;function Qg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:su,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _n.create("bad-app-name",{appName:String(i)});if(n||(n=Vg()),!n)throw _n.create("no-options");const o=ko.get(i);if(o){if(Hi(n,o.options)&&Hi(r,o.config))return o;throw _n.create("duplicate-app",{appName:i})}const l=new $w(i);for(const h of ou.values())l.addComponent(h);const u=new L1(n,r,l);return ko.set(i,u),u}function ac(t=su){const e=ko.get(t);if(!e&&t===su&&Vg())return Qg();if(!e)throw _n.create("no-app",{appName:t});return e}function rt(t,e,n){var r;let i=(r=N1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ht.warn(u.join(" "));return}kt(new gt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1="firebase-heartbeat-database",M1=1,Wi="firebase-heartbeat-store";let ra=null;function Yg(){return ra||(ra=Xg(x1,M1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wi)}catch(n){console.warn(n)}}}}).catch(t=>{throw _n.create("idb-open",{originalErrorMessage:t.message})})),ra}async function U1(t){try{const n=(await Yg()).transaction(Wi),r=await n.objectStore(Wi).get(Jg(t));return await n.done,r}catch(e){if(e instanceof mt)Ht.warn(e.message);else{const n=_n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ht.warn(n.message)}}}async function Vd(t,e){try{const r=(await Yg()).transaction(Wi,"readwrite");await r.objectStore(Wi).put(e,Jg(t)),await r.done}catch(n){if(n instanceof mt)Ht.warn(n.message);else{const r=_n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ht.warn(r.message)}}}function Jg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=1024,F1=30*24*60*60*1e3;class z1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new B1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=bd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=F1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ht.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bd(),{heartbeatsToSend:r,unsentEntries:i}=$1(this._heartbeatsCache.heartbeats),o=To(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Ht.warn(n),""}}}function bd(){return new Date().toISOString().substring(0,10)}function $1(t,e=j1){const n=[];let r=t.slice();for(const i of t){const o=n.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),Hd(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class B1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wg()?Kg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await U1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Hd(t){return To(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t){kt(new gt("platform-logger",e=>new t1(e),"PRIVATE")),kt(new gt("heartbeat",e=>new z1(e),"PRIVATE")),rt(iu,$d,t),rt(iu,$d,"esm2017"),rt("fire-js","")}V1("");var b1="firebase",H1="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt(b1,H1,"app");function uc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Zg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const W1=Zg,em=new Jn("auth","Firebase",Zg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Qo("@firebase/auth");function K1(t,...e){Co.logLevel<=q.WARN&&Co.warn(`Auth (${$r}): ${t}`,...e)}function Xs(t,...e){Co.logLevel<=q.ERROR&&Co.error(`Auth (${$r}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,...e){throw cc(t,...e)}function It(t,...e){return cc(t,...e)}function tm(t,e,n){const r=Object.assign(Object.assign({},W1()),{[e]:n});return new Jn("auth","Firebase",r).create(e,{appName:t.name})}function Bn(t){return tm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return em.create(t,...e)}function $(t,e,...n){if(!t)throw cc(e,...n)}function Ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xs(e),new Error(e)}function Kt(t,e){t||Ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function G1(){return Wd()==="http:"||Wd()==="https:"}function Wd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(G1()||Hg()||"connection"in navigator)?navigator.onLine:!0}function X1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ew()||Iw()}get(){return q1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(t,e){Kt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=new Zi(3e4,6e4);function dc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Br(t,e,n,r,i={}){return rm(t,i,async()=>{let o={},l={};r&&(e==="GET"?l=r:o={body:JSON.stringify(r)});const u=Ji(Object.assign({key:t.config.apiKey},l)).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:h},o);return Sw()||(f.referrerPolicy="no-referrer"),nm.fetch()(im(t,t.config.apiHost,n,u),f)})}async function rm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Q1),e);try{const i=new Z1(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw Ms(t,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const u=o.ok?l.errorMessage:l.error.message,[h,f]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ms(t,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw Ms(t,"email-already-in-use",l);if(h==="USER_DISABLED")throw Ms(t,"user-disabled",l);const C=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw tm(t,C,f);Wt(t,C)}}catch(i){if(i instanceof mt)throw i;Wt(t,"network-request-failed",{message:String(i)})}}async function J1(t,e,n,r,i={}){const o=await Br(t,e,n,r,i);return"mfaPendingCredential"in o&&Wt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function im(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?hc(t.config,i):`${t.config.apiScheme}://${i}`}class Z1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),Y1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ms(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=It(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e_(t,e){return Br(t,"POST","/v1/accounts:delete",e)}async function sm(t,e){return Br(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function t_(t,e=!1){const n=Cn(t),r=await n.getIdToken(e),i=fc(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ii(ia(i.auth_time)),issuedAtTime:Ii(ia(i.iat)),expirationTime:Ii(ia(i.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ia(t){return Number(t)*1e3}function fc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xs("JWT malformed, contained fewer than 3 sections"),null;try{const i=$g(n);return i?JSON.parse(i):(Xs("Failed to decode base64 JWT payload"),null)}catch(i){return Xs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Kd(t){const e=fc(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mt&&n_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function n_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ii(this.lastLoginAt),this.creationTime=Ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ki(t,sm(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const l=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?om(o.providerUserInfo):[],u=s_(t.providerData,l),h=t.isAnonymous,f=!(t.email&&o.passwordHash)&&!(u!=null&&u.length),C=h?f:!1,A={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new au(o.createdAt,o.lastLoginAt),isAnonymous:C};Object.assign(t,A)}async function i_(t){const e=Cn(t);await Ao(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function s_(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function om(t){return t.map(e=>{var{providerId:n}=e,r=uc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(t,e){const n=await rm(t,{},async()=>{const r=Ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,l=im(t,i,"/v1/token",`key=${o}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",nm.fetch()(l,{method:"POST",headers:u,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function l_(t,e){return Br(t,"POST","/v2/accounts:revokeToken",dc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=Kd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await o_(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,l=new kr;return r&&($(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),o&&($(typeof o=="number","internal-error",{appName:e}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kr,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=uc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new r_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new au(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Ki(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return t_(this,e)}reload(){return i_(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ao(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(Bn(this.auth));const e=await this.getIdToken();return await Ki(this,e_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,l,u,h,f,C;const A=(r=n.displayName)!==null&&r!==void 0?r:void 0,I=(i=n.email)!==null&&i!==void 0?i:void 0,O=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,R=(l=n.photoURL)!==null&&l!==void 0?l:void 0,L=(u=n.tenantId)!==null&&u!==void 0?u:void 0,z=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,E=(f=n.createdAt)!==null&&f!==void 0?f:void 0,w=(C=n.lastLoginAt)!==null&&C!==void 0?C:void 0,{uid:S,emailVerified:N,isAnonymous:M,providerData:U,stsTokenManager:m}=n;$(S&&m,e,"internal-error");const p=kr.fromJSON(this.name,m);$(typeof S=="string",e,"internal-error"),Jt(A,e.name),Jt(I,e.name),$(typeof N=="boolean",e,"internal-error"),$(typeof M=="boolean",e,"internal-error"),Jt(O,e.name),Jt(R,e.name),Jt(L,e.name),Jt(z,e.name),Jt(E,e.name),Jt(w,e.name);const g=new jt({uid:S,auth:e,email:I,emailVerified:N,displayName:A,isAnonymous:M,photoURL:R,phoneNumber:O,tenantId:L,stsTokenManager:p,createdAt:E,lastLoginAt:w});return U&&Array.isArray(U)&&(g.providerData=U.map(y=>Object.assign({},y))),z&&(g._redirectEventId=z),g}static async _fromIdTokenResponse(e,n,r=!1){const i=new kr;i.updateFromServerResponse(n);const o=new jt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ao(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?om(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new kr;u.updateFromIdToken(r);const h=new jt({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:l}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new au(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,f),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=new Map;function Ft(t){Kt(t instanceof Function,"Expected a class definition");let e=Gd.get(t);return e?(Kt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lm.type="NONE";const qd=lm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t,e,n){return`firebase:${t}:${e}:${n}`}class Cr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Qs(this.userKey,i.apiKey,o),this.fullPersistenceKey=Qs("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cr(Ft(qd),e,r);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||Ft(qd);const l=Qs(r,e.config.apiKey,e.name);let u=null;for(const f of n)try{const C=await f._get(l);if(C){const A=jt._fromJSON(e,C);f!==o&&(u=A),o=f;break}}catch{}const h=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Cr(o,e,r):(o=h[0],u&&await o._set(l,u.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(l)}catch{}})),new Cr(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(am(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fm(e))return"Blackberry";if(pm(e))return"Webos";if(um(e))return"Safari";if((e.includes("chrome/")||cm(e))&&!e.includes("edge/"))return"Chrome";if(dm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function am(t=De()){return/firefox\//i.test(t)}function um(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cm(t=De()){return/crios\//i.test(t)}function hm(t=De()){return/iemobile/i.test(t)}function dm(t=De()){return/android/i.test(t)}function fm(t=De()){return/blackberry/i.test(t)}function pm(t=De()){return/webos/i.test(t)}function pc(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function a_(t=De()){var e;return pc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function u_(){return Tw()&&document.documentMode===10}function gm(t=De()){return pc(t)||dm(t)||pm(t)||fm(t)||/windows phone/i.test(t)||hm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(t,e=[]){let n;switch(t){case"Browser":n=Xd(De());break;case"Worker":n=`${Xd(De())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((l,u)=>{try{const h=e(o);l(h)}catch(h){u(h)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(t,e={}){return Br(t,"GET","/v2/passwordPolicy",dc(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=6;class f_{constructor(e){var n,r,i,o;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:d_,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,l,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(l=h.containsNumericCharacter)!==null&&l!==void 0?l:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qd(this),this.idTokenSubscription=new Qd(this),this.beforeStateQueue=new c_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=em,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Cr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sm(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!l||l===u)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ao(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=X1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(Bn(this));const n=e?Cn(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(Bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(Bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await h_(this),n=new f_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await l_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ft(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Cr.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if($(u,this,"internal-error"),u.then(()=>{l||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,r,i);return()=>{l=!0,h()}}else{const h=e.addObserver(n);return()=>{l=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&K1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gc(t){return Cn(t)}class Qd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Nw(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function g_(t){mc=t}function m_(t){return mc.loadJS(t)}function v_(){return mc.gapiScript}function y_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t,e){const n=Zn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Hi(o,e??{}))return i;Wt(i,"already-initialized")}return n.initialize({options:e})}function __(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function E_(t,e,n){const r=gc(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=vm(e),{host:l,port:u}=S_(e),h=u===null?"":`:${u}`;r.config.emulator={url:`${o}//${l}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||I_()}function vm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function S_(t){const e=vm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Yd(r.substr(o.length+1))}}else{const[o,l]=r.split(":");return{host:o,port:Yd(l)}}}function Yd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function I_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,n){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(t,e){return J1(t,"POST","/v1/accounts:signInWithIdp",dc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="http://localhost";class Gn extends ym{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=uc(n,["providerId","signInMethod"]);if(!r||!i)return null;const l=new Gn(r,i);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return Ar(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ar(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ar(e,n)}buildRequest(){const e={requestUri:T_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ji(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends wm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends es{constructor(){super("facebook.com")}static credential(e){return Gn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends es{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends es{constructor(){super("github.com")}static credential(e){return Gn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends es{constructor(){super("twitter.com")}static credential(e,n){return Gn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.TWITTER_SIGN_IN_METHOD="twitter.com";ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await jt._fromIdTokenResponse(e,r,i),l=Jd(r);return new Mr({user:o,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Jd(r);return new Mr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Jd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends mt{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Po.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Po(e,n,r,i)}}function _m(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Po._fromErrorAndOperation(t,o,e,r):o})}async function k_(t,e,n=!1){const r=await Ki(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject(Bn(r));const i="reauthenticate";try{const o=await Ki(t,_m(r,i,e,t),n);$(o.idToken,r,"internal-error");const l=fc(o.idToken);$(l,r,"internal-error");const{sub:u}=l;return $(t.uid===u,r,"user-mismatch"),Mr._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(t,e,n=!1){if(cn(t.app))return Promise.reject(Bn(t));const r="signIn",i=await _m(t,r,e),o=await Mr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}function P_(t,e,n,r){return Cn(t).onIdTokenChanged(e,n,r)}function R_(t,e,n){return Cn(t).beforeAuthStateChanged(e,n)}const Ro="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ro,"1"),this.storage.removeItem(Ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=1e3,O_=10;class Sm extends Em{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,u,h)=>{this.notifyListeners(l,h)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},o=this.storage.getItem(r);u_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,O_):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},N_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sm.type="LOCAL";const D_=Sm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im extends Em{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Im.type="SESSION";const Tm=Im;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Yo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(l).map(async f=>f(n.origin,o)),h=await L_(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,l;return new Promise((u,h)=>{const f=vc("",20);i.port1.start();const C=setTimeout(()=>{h(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(A){const I=A;if(I.data.eventId===f)switch(I.data.status){case"ack":clearTimeout(C),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(I.data.response);break;default:clearTimeout(C),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return window}function M_(t){Tt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function U_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function j_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function F_(){return km()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="firebaseLocalStorageDb",z_=1,No="firebaseLocalStorage",Am="fbase_key";class ts{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jo(t,e){return t.transaction([No],e?"readwrite":"readonly").objectStore(No)}function $_(){const t=indexedDB.deleteDatabase(Cm);return new ts(t).toPromise()}function uu(){const t=indexedDB.open(Cm,z_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(No,{keyPath:Am})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(No)?e(r):(r.close(),await $_(),e(await uu()))})})}async function Zd(t,e,n){const r=Jo(t,!0).put({[Am]:e,value:n});return new ts(r).toPromise()}async function B_(t,e){const n=Jo(t,!1).get(e),r=await new ts(n).toPromise();return r===void 0?null:r.value}function ef(t,e){const n=Jo(t,!0).delete(e);return new ts(n).toPromise()}const V_=800,b_=3;class Pm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>b_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return km()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yo._getInstance(F_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await U_(),!this.activeServiceWorker)return;this.sender=new x_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||j_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uu();return await Zd(e,Ro,"1"),await ef(e,Ro),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>B_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ef(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Jo(i,!1).getAll();return new ts(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),V_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pm.type="LOCAL";const H_=Pm;new Zi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t,e){return e?Ft(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc extends ym{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ar(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ar(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function K_(t){return A_(t.auth,new yc(t),t.bypassAuthState)}function G_(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),C_(n,new yc(t),t.bypassAuthState)}async function q_(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),k_(n,new yc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:l,type:u}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return K_;case"linkViaPopup":case"linkViaRedirect":return q_;case"reauthViaPopup":case"reauthViaRedirect":return G_;default:Wt(this.auth,"internal-error")}}resolve(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=new Zi(2e3,1e4);class yr extends Rm{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,yr.currentPopupAction&&yr.currentPopupAction.cancel(),yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Kt(this.filter.length===1,"Popup operations only handle one event");const e=vc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,X_.get())};e()}}yr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_="pendingRedirect",Ys=new Map;class Y_ extends Rm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ys.get(this.auth._key());if(!e){try{const r=await J_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ys.set(this.auth._key(),e)}return this.bypassAuthState||Ys.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function J_(t,e){const n=tE(e),r=eE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Z_(t,e){Ys.set(t._key(),e)}function eE(t){return Ft(t._redirectPersistence)}function tE(t){return Qs(Q_,t.config.apiKey,t.name)}async function nE(t,e,n=!1){if(cn(t.app))return Promise.reject(Bn(t));const r=gc(t),i=W_(r,e),l=await new Y_(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=10*60*1e3;class iE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Nm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rE&&this.cachedEventUids.clear(),this.cachedEventUids.has(tf(e))}saveEventToCache(e){this.cachedEventUids.add(tf(e)),this.lastProcessedEventTime=Date.now()}}function tf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oE(t,e={}){return Br(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aE=/^https?/;async function uE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oE(t);for(const n of e)try{if(cE(n))return}catch{}Wt(t,"unauthorized-domain")}function cE(t){const e=lu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!aE.test(n))return!1;if(lE.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=new Zi(3e4,6e4);function nf(){const t=Tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dE(t){return new Promise((e,n)=>{var r,i,o;function l(){nf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nf(),n(It(t,"network-request-failed"))},timeout:hE.get()})}if(!((i=(r=Tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Tt().gapi)===null||o===void 0)&&o.load)l();else{const u=y_("iframefcb");return Tt()[u]=()=>{gapi.load?l():n(It(t,"network-request-failed"))},m_(`${v_()}?onload=${u}`).catch(h=>n(h))}}).catch(e=>{throw Js=null,e})}let Js=null;function fE(t){return Js=Js||dE(t),Js}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=new Zi(5e3,15e3),gE="__/auth/iframe",mE="emulator/auth/iframe",vE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wE(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hc(e,mE):`https://${t.config.authDomain}/${gE}`,r={apiKey:e.apiKey,appName:t.name,v:$r},i=yE.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ji(r).slice(1)}`}async function _E(t){const e=await fE(t),n=Tt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:wE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vE,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const l=It(t,"network-request-failed"),u=Tt().setTimeout(()=>{o(l)},pE.get());function h(){Tt().clearTimeout(u),i(r)}r.ping(h).then(h,()=>{o(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SE=500,IE=600,TE="_blank",kE="http://localhost";class rf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CE(t,e,n,r=SE,i=IE){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h=Object.assign(Object.assign({},EE),{width:r.toString(),height:i.toString(),top:o,left:l}),f=De().toLowerCase();n&&(u=cm(f)?TE:n),am(f)&&(e=e||kE,h.scrollbars="yes");const C=Object.entries(h).reduce((I,[O,R])=>`${I}${O}=${R},`,"");if(a_(f)&&u!=="_self")return AE(e||"",u),new rf(null);const A=window.open(e||"",u,C);$(A,t,"popup-blocked");try{A.focus()}catch{}return new rf(A)}function AE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="__/auth/handler",RE="emulator/auth/handler",NE=encodeURIComponent("fac");async function sf(t,e,n,r,i,o){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$r,eventId:i};if(e instanceof wm){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",Rw(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[C,A]of Object.entries(o||{}))l[C]=A}if(e instanceof es){const C=e.getScopes().filter(A=>A!=="");C.length>0&&(l.scopes=C.join(","))}t.tenantId&&(l.tid=t.tenantId);const u=l;for(const C of Object.keys(u))u[C]===void 0&&delete u[C];const h=await t._getAppCheckToken(),f=h?`#${NE}=${encodeURIComponent(h)}`:"";return`${OE(t)}?${Ji(u).slice(1)}${f}`}function OE({config:t}){return t.emulator?hc(t,RE):`https://${t.authDomain}/${PE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="webStorageSupport";class DE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tm,this._completeRedirectFn=nE,this._overrideRedirectResult=Z_}async _openPopup(e,n,r,i){var o;Kt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await sf(e,n,r,lu(),i);return CE(e,l,vc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await sf(e,n,r,lu(),i);return M_(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Kt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _E(e),r=new iE(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sa,{type:sa},i=>{var o;const l=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[sa];l!==void 0&&n(!!l),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gm()||um()||pc()}}const LE=DE;var of="@firebase/auth",lf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UE(t){kt(new gt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=r.options;$(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:l,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mm(t)},f=new p_(r,i,o,h);return __(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),kt(new gt("auth-internal",e=>{const n=gc(e.getProvider("auth").getImmediate());return(r=>new xE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rt(of,lf,ME(t)),rt(of,lf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=5*60,FE=bg("authIdTokenMaxAge")||jE;let af=null;const zE=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>FE)return;const i=n==null?void 0:n.token;af!==i&&(af=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $E(t=ac()){const e=Zn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=w_(t,{popupRedirectResolver:LE,persistence:[H_,D_,Tm]}),r=bg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const l=zE(o.toString());R_(n,l,()=>l(n.currentUser)),P_(n,u=>l(u))}}const i=Bg("auth");return i&&E_(n,`http://${i}`),n}function BE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}g_({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=It("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",BE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UE("Browser");var uf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Om;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,p){function g(){}g.prototype=p.prototype,m.D=p.prototype,m.prototype=new g,m.prototype.constructor=m,m.C=function(y,_,k){for(var v=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)v[Ye-2]=arguments[Ye];return p.prototype[_].apply(y,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(m,p,g){g||(g=0);var y=Array(16);if(typeof p=="string")for(var _=0;16>_;++_)y[_]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(_=0;16>_;++_)y[_]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=m.g[0],g=m.g[1],_=m.g[2];var k=m.g[3],v=p+(k^g&(_^k))+y[0]+3614090360&4294967295;p=g+(v<<7&4294967295|v>>>25),v=k+(_^p&(g^_))+y[1]+3905402710&4294967295,k=p+(v<<12&4294967295|v>>>20),v=_+(g^k&(p^g))+y[2]+606105819&4294967295,_=k+(v<<17&4294967295|v>>>15),v=g+(p^_&(k^p))+y[3]+3250441966&4294967295,g=_+(v<<22&4294967295|v>>>10),v=p+(k^g&(_^k))+y[4]+4118548399&4294967295,p=g+(v<<7&4294967295|v>>>25),v=k+(_^p&(g^_))+y[5]+1200080426&4294967295,k=p+(v<<12&4294967295|v>>>20),v=_+(g^k&(p^g))+y[6]+2821735955&4294967295,_=k+(v<<17&4294967295|v>>>15),v=g+(p^_&(k^p))+y[7]+4249261313&4294967295,g=_+(v<<22&4294967295|v>>>10),v=p+(k^g&(_^k))+y[8]+1770035416&4294967295,p=g+(v<<7&4294967295|v>>>25),v=k+(_^p&(g^_))+y[9]+2336552879&4294967295,k=p+(v<<12&4294967295|v>>>20),v=_+(g^k&(p^g))+y[10]+4294925233&4294967295,_=k+(v<<17&4294967295|v>>>15),v=g+(p^_&(k^p))+y[11]+2304563134&4294967295,g=_+(v<<22&4294967295|v>>>10),v=p+(k^g&(_^k))+y[12]+1804603682&4294967295,p=g+(v<<7&4294967295|v>>>25),v=k+(_^p&(g^_))+y[13]+4254626195&4294967295,k=p+(v<<12&4294967295|v>>>20),v=_+(g^k&(p^g))+y[14]+2792965006&4294967295,_=k+(v<<17&4294967295|v>>>15),v=g+(p^_&(k^p))+y[15]+1236535329&4294967295,g=_+(v<<22&4294967295|v>>>10),v=p+(_^k&(g^_))+y[1]+4129170786&4294967295,p=g+(v<<5&4294967295|v>>>27),v=k+(g^_&(p^g))+y[6]+3225465664&4294967295,k=p+(v<<9&4294967295|v>>>23),v=_+(p^g&(k^p))+y[11]+643717713&4294967295,_=k+(v<<14&4294967295|v>>>18),v=g+(k^p&(_^k))+y[0]+3921069994&4294967295,g=_+(v<<20&4294967295|v>>>12),v=p+(_^k&(g^_))+y[5]+3593408605&4294967295,p=g+(v<<5&4294967295|v>>>27),v=k+(g^_&(p^g))+y[10]+38016083&4294967295,k=p+(v<<9&4294967295|v>>>23),v=_+(p^g&(k^p))+y[15]+3634488961&4294967295,_=k+(v<<14&4294967295|v>>>18),v=g+(k^p&(_^k))+y[4]+3889429448&4294967295,g=_+(v<<20&4294967295|v>>>12),v=p+(_^k&(g^_))+y[9]+568446438&4294967295,p=g+(v<<5&4294967295|v>>>27),v=k+(g^_&(p^g))+y[14]+3275163606&4294967295,k=p+(v<<9&4294967295|v>>>23),v=_+(p^g&(k^p))+y[3]+4107603335&4294967295,_=k+(v<<14&4294967295|v>>>18),v=g+(k^p&(_^k))+y[8]+1163531501&4294967295,g=_+(v<<20&4294967295|v>>>12),v=p+(_^k&(g^_))+y[13]+2850285829&4294967295,p=g+(v<<5&4294967295|v>>>27),v=k+(g^_&(p^g))+y[2]+4243563512&4294967295,k=p+(v<<9&4294967295|v>>>23),v=_+(p^g&(k^p))+y[7]+1735328473&4294967295,_=k+(v<<14&4294967295|v>>>18),v=g+(k^p&(_^k))+y[12]+2368359562&4294967295,g=_+(v<<20&4294967295|v>>>12),v=p+(g^_^k)+y[5]+4294588738&4294967295,p=g+(v<<4&4294967295|v>>>28),v=k+(p^g^_)+y[8]+2272392833&4294967295,k=p+(v<<11&4294967295|v>>>21),v=_+(k^p^g)+y[11]+1839030562&4294967295,_=k+(v<<16&4294967295|v>>>16),v=g+(_^k^p)+y[14]+4259657740&4294967295,g=_+(v<<23&4294967295|v>>>9),v=p+(g^_^k)+y[1]+2763975236&4294967295,p=g+(v<<4&4294967295|v>>>28),v=k+(p^g^_)+y[4]+1272893353&4294967295,k=p+(v<<11&4294967295|v>>>21),v=_+(k^p^g)+y[7]+4139469664&4294967295,_=k+(v<<16&4294967295|v>>>16),v=g+(_^k^p)+y[10]+3200236656&4294967295,g=_+(v<<23&4294967295|v>>>9),v=p+(g^_^k)+y[13]+681279174&4294967295,p=g+(v<<4&4294967295|v>>>28),v=k+(p^g^_)+y[0]+3936430074&4294967295,k=p+(v<<11&4294967295|v>>>21),v=_+(k^p^g)+y[3]+3572445317&4294967295,_=k+(v<<16&4294967295|v>>>16),v=g+(_^k^p)+y[6]+76029189&4294967295,g=_+(v<<23&4294967295|v>>>9),v=p+(g^_^k)+y[9]+3654602809&4294967295,p=g+(v<<4&4294967295|v>>>28),v=k+(p^g^_)+y[12]+3873151461&4294967295,k=p+(v<<11&4294967295|v>>>21),v=_+(k^p^g)+y[15]+530742520&4294967295,_=k+(v<<16&4294967295|v>>>16),v=g+(_^k^p)+y[2]+3299628645&4294967295,g=_+(v<<23&4294967295|v>>>9),v=p+(_^(g|~k))+y[0]+4096336452&4294967295,p=g+(v<<6&4294967295|v>>>26),v=k+(g^(p|~_))+y[7]+1126891415&4294967295,k=p+(v<<10&4294967295|v>>>22),v=_+(p^(k|~g))+y[14]+2878612391&4294967295,_=k+(v<<15&4294967295|v>>>17),v=g+(k^(_|~p))+y[5]+4237533241&4294967295,g=_+(v<<21&4294967295|v>>>11),v=p+(_^(g|~k))+y[12]+1700485571&4294967295,p=g+(v<<6&4294967295|v>>>26),v=k+(g^(p|~_))+y[3]+2399980690&4294967295,k=p+(v<<10&4294967295|v>>>22),v=_+(p^(k|~g))+y[10]+4293915773&4294967295,_=k+(v<<15&4294967295|v>>>17),v=g+(k^(_|~p))+y[1]+2240044497&4294967295,g=_+(v<<21&4294967295|v>>>11),v=p+(_^(g|~k))+y[8]+1873313359&4294967295,p=g+(v<<6&4294967295|v>>>26),v=k+(g^(p|~_))+y[15]+4264355552&4294967295,k=p+(v<<10&4294967295|v>>>22),v=_+(p^(k|~g))+y[6]+2734768916&4294967295,_=k+(v<<15&4294967295|v>>>17),v=g+(k^(_|~p))+y[13]+1309151649&4294967295,g=_+(v<<21&4294967295|v>>>11),v=p+(_^(g|~k))+y[4]+4149444226&4294967295,p=g+(v<<6&4294967295|v>>>26),v=k+(g^(p|~_))+y[11]+3174756917&4294967295,k=p+(v<<10&4294967295|v>>>22),v=_+(p^(k|~g))+y[2]+718787259&4294967295,_=k+(v<<15&4294967295|v>>>17),v=g+(k^(_|~p))+y[9]+3951481745&4294967295,m.g[0]=m.g[0]+p&4294967295,m.g[1]=m.g[1]+(_+(v<<21&4294967295|v>>>11))&4294967295,m.g[2]=m.g[2]+_&4294967295,m.g[3]=m.g[3]+k&4294967295}r.prototype.u=function(m,p){p===void 0&&(p=m.length);for(var g=p-this.blockSize,y=this.B,_=this.h,k=0;k<p;){if(_==0)for(;k<=g;)i(this,m,k),k+=this.blockSize;if(typeof m=="string"){for(;k<p;)if(y[_++]=m.charCodeAt(k++),_==this.blockSize){i(this,y),_=0;break}}else for(;k<p;)if(y[_++]=m[k++],_==this.blockSize){i(this,y),_=0;break}}this.h=_,this.o+=p},r.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var p=1;p<m.length-8;++p)m[p]=0;var g=8*this.o;for(p=m.length-8;p<m.length;++p)m[p]=g&255,g/=256;for(this.u(m),m=Array(16),p=g=0;4>p;++p)for(var y=0;32>y;y+=8)m[g++]=this.g[p]>>>y&255;return m};function o(m,p){var g=u;return Object.prototype.hasOwnProperty.call(g,m)?g[m]:g[m]=p(m)}function l(m,p){this.h=p;for(var g=[],y=!0,_=m.length-1;0<=_;_--){var k=m[_]|0;y&&k==p||(g[_]=k,y=!1)}this.g=g}var u={};function h(m){return-128<=m&&128>m?o(m,function(p){return new l([p|0],0>p?-1:0)}):new l([m|0],0>m?-1:0)}function f(m){if(isNaN(m)||!isFinite(m))return A;if(0>m)return z(f(-m));for(var p=[],g=1,y=0;m>=g;y++)p[y]=m/g|0,g*=4294967296;return new l(p,0)}function C(m,p){if(m.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(m.charAt(0)=="-")return z(C(m.substring(1),p));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),y=A,_=0;_<m.length;_+=8){var k=Math.min(8,m.length-_),v=parseInt(m.substring(_,_+k),p);8>k?(k=f(Math.pow(p,k)),y=y.j(k).add(f(v))):(y=y.j(g),y=y.add(f(v)))}return y}var A=h(0),I=h(1),O=h(16777216);t=l.prototype,t.m=function(){if(L(this))return-z(this).m();for(var m=0,p=1,g=0;g<this.g.length;g++){var y=this.i(g);m+=(0<=y?y:4294967296+y)*p,p*=4294967296}return m},t.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(R(this))return"0";if(L(this))return"-"+z(this).toString(m);for(var p=f(Math.pow(m,6)),g=this,y="";;){var _=N(g,p).g;g=E(g,_.j(p));var k=((0<g.g.length?g.g[0]:g.h)>>>0).toString(m);if(g=_,R(g))return k+y;for(;6>k.length;)k="0"+k;y=k+y}},t.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function R(m){if(m.h!=0)return!1;for(var p=0;p<m.g.length;p++)if(m.g[p]!=0)return!1;return!0}function L(m){return m.h==-1}t.l=function(m){return m=E(this,m),L(m)?-1:R(m)?0:1};function z(m){for(var p=m.g.length,g=[],y=0;y<p;y++)g[y]=~m.g[y];return new l(g,~m.h).add(I)}t.abs=function(){return L(this)?z(this):this},t.add=function(m){for(var p=Math.max(this.g.length,m.g.length),g=[],y=0,_=0;_<=p;_++){var k=y+(this.i(_)&65535)+(m.i(_)&65535),v=(k>>>16)+(this.i(_)>>>16)+(m.i(_)>>>16);y=v>>>16,k&=65535,v&=65535,g[_]=v<<16|k}return new l(g,g[g.length-1]&-2147483648?-1:0)};function E(m,p){return m.add(z(p))}t.j=function(m){if(R(this)||R(m))return A;if(L(this))return L(m)?z(this).j(z(m)):z(z(this).j(m));if(L(m))return z(this.j(z(m)));if(0>this.l(O)&&0>m.l(O))return f(this.m()*m.m());for(var p=this.g.length+m.g.length,g=[],y=0;y<2*p;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var _=0;_<m.g.length;_++){var k=this.i(y)>>>16,v=this.i(y)&65535,Ye=m.i(_)>>>16,An=m.i(_)&65535;g[2*y+2*_]+=v*An,w(g,2*y+2*_),g[2*y+2*_+1]+=k*An,w(g,2*y+2*_+1),g[2*y+2*_+1]+=v*Ye,w(g,2*y+2*_+1),g[2*y+2*_+2]+=k*Ye,w(g,2*y+2*_+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new l(g,0)};function w(m,p){for(;(m[p]&65535)!=m[p];)m[p+1]+=m[p]>>>16,m[p]&=65535,p++}function S(m,p){this.g=m,this.h=p}function N(m,p){if(R(p))throw Error("division by zero");if(R(m))return new S(A,A);if(L(m))return p=N(z(m),p),new S(z(p.g),z(p.h));if(L(p))return p=N(m,z(p)),new S(z(p.g),p.h);if(30<m.g.length){if(L(m)||L(p))throw Error("slowDivide_ only works with positive integers.");for(var g=I,y=p;0>=y.l(m);)g=M(g),y=M(y);var _=U(g,1),k=U(y,1);for(y=U(y,2),g=U(g,2);!R(y);){var v=k.add(y);0>=v.l(m)&&(_=_.add(g),k=v),y=U(y,1),g=U(g,1)}return p=E(m,_.j(p)),new S(_,p)}for(_=A;0<=m.l(p);){for(g=Math.max(1,Math.floor(m.m()/p.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),k=f(g),v=k.j(p);L(v)||0<v.l(m);)g-=y,k=f(g),v=k.j(p);R(k)&&(k=I),_=_.add(k),m=E(m,v)}return new S(_,m)}t.A=function(m){return N(this,m).h},t.and=function(m){for(var p=Math.max(this.g.length,m.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)&m.i(y);return new l(g,this.h&m.h)},t.or=function(m){for(var p=Math.max(this.g.length,m.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)|m.i(y);return new l(g,this.h|m.h)},t.xor=function(m){for(var p=Math.max(this.g.length,m.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)^m.i(y);return new l(g,this.h^m.h)};function M(m){for(var p=m.g.length+1,g=[],y=0;y<p;y++)g[y]=m.i(y)<<1|m.i(y-1)>>>31;return new l(g,m.h)}function U(m,p){var g=p>>5;p%=32;for(var y=m.g.length-g,_=[],k=0;k<y;k++)_[k]=0<p?m.i(k+g)>>>p|m.i(k+g+1)<<32-p:m.i(k+g);return new l(_,m.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=f,l.fromString=C,Om=l}).apply(typeof uf<"u"?uf:typeof self<"u"?self:typeof window<"u"?window:{});var Us=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Us=="object"&&Us];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=n(this);function i(s,a){if(a)e:{var c=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var T=s[d];if(!(T in c))break e;c=c[T]}s=s[s.length-1],d=c[s],a=a(d),a!=d&&a!=null&&e(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,d=!1,T={next:function(){if(!d&&c<s.length){var P=c++;return{value:a(P,s[P]),done:!1}}return d=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function C(s,a,c){return s.call.apply(s.bind,arguments)}function A(s,a,c){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,d),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function I(s,a,c){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?C:A,I.apply(null,arguments)}function O(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function R(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(d,T,P){for(var x=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)x[Y-2]=arguments[Y];return a.prototype[T].apply(d,x)}}function L(s){const a=s.length;if(0<a){const c=Array(a);for(let d=0;d<a;d++)c[d]=s[d];return c}return[]}function z(s,a){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const T=s.length||0,P=d.length||0;s.length=T+P;for(let x=0;x<P;x++)s[T+x]=d[x]}else s.push(d)}}class E{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function w(s){return/^[\s\xa0]*$/.test(s)}function S(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function N(s){return N[" "](s),s}N[" "]=function(){};var M=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function U(s,a,c){for(const d in s)a.call(c,s[d],d,s)}function m(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function p(s){const a={};for(const c in s)a[c]=s[c];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let c,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(c in d)s[c]=d[c];for(let P=0;P<g.length;P++)c=g[P],Object.prototype.hasOwnProperty.call(d,c)&&(s[c]=d[c])}}function _(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function k(s){u.setTimeout(()=>{throw s},0)}function v(){var s=B;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Ye{constructor(){this.h=this.g=null}add(a,c){const d=An.get();d.set(a,c),this.h?this.h.next=d:this.g=d,this.h=d}}var An=new E(()=>new Vr,s=>s.reset());class Vr{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Ct,j=!1,B=new Ye,V=()=>{const s=u.Promise.resolve(void 0);Ct=()=>{s.then(re)}};var re=()=>{for(var s;s=v();){try{s.h.call(s.g)}catch(c){k(c)}var a=An;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}j=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var At=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,a),u.removeEventListener("test",c,a)}catch{}return s}();function Pt(s,a){if(ae.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(M){e:{try{N(a.nodeName);var T=!0;break e}catch{}T=!1}T||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Rt[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Pt.aa.h.call(this)}}R(Pt,ae);var Rt={2:"touch",3:"pen",4:"mouse"};Pt.prototype.h=function(){Pt.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var vt="closure_listenable_"+(1e6*Math.random()|0),rv=0;function iv(s,a,c,d,T){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!d,this.ha=T,this.key=++rv,this.da=this.fa=!1}function rs(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function is(s){this.src=s,this.g={},this.h=0}is.prototype.add=function(s,a,c,d,T){var P=s.toString();s=this.g[P],s||(s=this.g[P]=[],this.h++);var x=nl(s,a,d,T);return-1<x?(a=s[x],c||(a.fa=!1)):(a=new iv(a,this.src,P,!!d,T),a.fa=c,s.push(a)),a};function tl(s,a){var c=a.type;if(c in s.g){var d=s.g[c],T=Array.prototype.indexOf.call(d,a,void 0),P;(P=0<=T)&&Array.prototype.splice.call(d,T,1),P&&(rs(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function nl(s,a,c,d){for(var T=0;T<s.length;++T){var P=s[T];if(!P.da&&P.listener==a&&P.capture==!!c&&P.ha==d)return T}return-1}var rl="closure_lm_"+(1e6*Math.random()|0),il={};function Pc(s,a,c,d,T){if(d&&d.once)return Nc(s,a,c,d,T);if(Array.isArray(a)){for(var P=0;P<a.length;P++)Pc(s,a[P],c,d,T);return null}return c=al(c),s&&s[vt]?s.K(a,c,f(d)?!!d.capture:!!d,T):Rc(s,a,c,!1,d,T)}function Rc(s,a,c,d,T,P){if(!a)throw Error("Invalid event type");var x=f(T)?!!T.capture:!!T,Y=ol(s);if(Y||(s[rl]=Y=new is(s)),c=Y.add(a,c,d,x,P),c.proxy)return c;if(d=sv(),c.proxy=d,d.src=s,d.listener=c,s.addEventListener)At||(T=x),T===void 0&&(T=!1),s.addEventListener(a.toString(),d,T);else if(s.attachEvent)s.attachEvent(Dc(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function sv(){function s(c){return a.call(s.src,s.listener,c)}const a=ov;return s}function Nc(s,a,c,d,T){if(Array.isArray(a)){for(var P=0;P<a.length;P++)Nc(s,a[P],c,d,T);return null}return c=al(c),s&&s[vt]?s.L(a,c,f(d)?!!d.capture:!!d,T):Rc(s,a,c,!0,d,T)}function Oc(s,a,c,d,T){if(Array.isArray(a))for(var P=0;P<a.length;P++)Oc(s,a[P],c,d,T);else d=f(d)?!!d.capture:!!d,c=al(c),s&&s[vt]?(s=s.i,a=String(a).toString(),a in s.g&&(P=s.g[a],c=nl(P,c,d,T),-1<c&&(rs(P[c]),Array.prototype.splice.call(P,c,1),P.length==0&&(delete s.g[a],s.h--)))):s&&(s=ol(s))&&(a=s.g[a.toString()],s=-1,a&&(s=nl(a,c,d,T)),(c=-1<s?a[s]:null)&&sl(c))}function sl(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[vt])tl(a.i,s);else{var c=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(c,d,s.capture):a.detachEvent?a.detachEvent(Dc(c),d):a.addListener&&a.removeListener&&a.removeListener(d),(c=ol(a))?(tl(c,s),c.h==0&&(c.src=null,a[rl]=null)):rs(s)}}}function Dc(s){return s in il?il[s]:il[s]="on"+s}function ov(s,a){if(s.da)s=!0;else{a=new Pt(a,this);var c=s.listener,d=s.ha||s.src;s.fa&&sl(s),s=c.call(d,a)}return s}function ol(s){return s=s[rl],s instanceof is?s:null}var ll="__closure_events_fn_"+(1e9*Math.random()>>>0);function al(s){return typeof s=="function"?s:(s[ll]||(s[ll]=function(a){return s.handleEvent(a)}),s[ll])}function _e(){Q.call(this),this.i=new is(this),this.M=this,this.F=null}R(_e,Q),_e.prototype[vt]=!0,_e.prototype.removeEventListener=function(s,a,c,d){Oc(this,s,a,c,d)};function Ae(s,a){var c,d=s.F;if(d)for(c=[];d;d=d.F)c.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new ae(a,s);else if(a instanceof ae)a.target=a.target||s;else{var T=a;a=new ae(d,s),y(a,T)}if(T=!0,c)for(var P=c.length-1;0<=P;P--){var x=a.g=c[P];T=ss(x,d,!0,a)&&T}if(x=a.g=s,T=ss(x,d,!0,a)&&T,T=ss(x,d,!1,a)&&T,c)for(P=0;P<c.length;P++)x=a.g=c[P],T=ss(x,d,!1,a)&&T}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],d=0;d<c.length;d++)rs(c[d]);delete s.g[a],s.h--}}this.F=null},_e.prototype.K=function(s,a,c,d){return this.i.add(String(s),a,!1,c,d)},_e.prototype.L=function(s,a,c,d){return this.i.add(String(s),a,!0,c,d)};function ss(s,a,c,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,P=0;P<a.length;++P){var x=a[P];if(x&&!x.da&&x.capture==c){var Y=x.listener,me=x.ha||x.src;x.fa&&tl(s.i,x),T=Y.call(me,d)!==!1&&T}}return T&&!d.defaultPrevented}function Lc(s,a,c){if(typeof s=="function")c&&(s=I(s,c));else if(s&&typeof s.handleEvent=="function")s=I(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(s,a||0)}function xc(s){s.g=Lc(()=>{s.g=null,s.i&&(s.i=!1,xc(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class lv extends Q{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:xc(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function br(s){Q.call(this),this.h=s,this.g={}}R(br,Q);var Mc=[];function Uc(s){U(s.g,function(a,c){this.g.hasOwnProperty(c)&&sl(a)},s),s.g={}}br.prototype.N=function(){br.aa.N.call(this),Uc(this)},br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ul=u.JSON.stringify,av=u.JSON.parse,uv=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function cl(){}cl.prototype.h=null;function jc(s){return s.h||(s.h=s.i())}function cv(){}var Hr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hl(){ae.call(this,"d")}R(hl,ae);function dl(){ae.call(this,"c")}R(dl,ae);var er={},Fc=null;function fl(){return Fc=Fc||new _e}er.La="serverreachability";function zc(s){ae.call(this,er.La,s)}R(zc,ae);function Wr(s){const a=fl();Ae(a,new zc(a))}er.STAT_EVENT="statevent";function $c(s,a){ae.call(this,er.STAT_EVENT,s),this.stat=a}R($c,ae);function Pe(s){const a=fl();Ae(a,new $c(a,s))}er.Ma="timingevent";function Bc(s,a){ae.call(this,er.Ma,s),this.size=a}R(Bc,ae);function Kr(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},a)}function Gr(){this.g=!0}Gr.prototype.xa=function(){this.g=!1};function hv(s,a,c,d,T,P){s.info(function(){if(s.g)if(P)for(var x="",Y=P.split("&"),me=0;me<Y.length;me++){var K=Y[me].split("=");if(1<K.length){var Ee=K[0];K=K[1];var Se=Ee.split("_");x=2<=Se.length&&Se[1]=="type"?x+(Ee+"="+K+"&"):x+(Ee+"=redacted&")}}else x=null;else x=P;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+a+`
`+c+`
`+x})}function dv(s,a,c,d,T,P,x){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+a+`
`+c+`
`+P+" "+x})}function tr(s,a,c,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+pv(s,c)+(d?" "+d:"")})}function fv(s,a){s.info(function(){return"TIMEOUT: "+a})}Gr.prototype.info=function(){};function pv(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var d=c[s];if(!(2>d.length)){var T=d[1];if(Array.isArray(T)&&!(1>T.length)){var P=T[0];if(P!="noop"&&P!="stop"&&P!="close")for(var x=1;x<T.length;x++)T[x]=""}}}}return ul(c)}catch{return a}}var pl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gl;function os(){}R(os,cl),os.prototype.g=function(){return new XMLHttpRequest},os.prototype.i=function(){return{}},gl=new os;function qt(s,a,c,d){this.j=s,this.i=a,this.l=c,this.R=d||1,this.U=new br(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vc}function Vc(){this.i=null,this.g="",this.h=!1}var bc={},ml={};function vl(s,a,c){s.L=1,s.v=cs(Nt(a)),s.m=c,s.P=!0,Hc(s,null)}function Hc(s,a){s.F=Date.now(),ls(s),s.A=Nt(s.v);var c=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),ih(c.i,"t",d),s.C=0,c=s.j.J,s.h=new Vc,s.g=Sh(s.j,c?a:null,!s.m),0<s.O&&(s.M=new lv(I(s.Y,s,s.g),s.O)),a=s.U,c=s.g,d=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(Mc[0]=T.toString()),T=Mc);for(var P=0;P<T.length;P++){var x=Pc(c,T[P],d||a.handleEvent,!1,a.h||a);if(!x)break;a.g[x.key]=x}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Wr(),hv(s.i,s.u,s.A,s.l,s.R,s.m)}qt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Ot(s)==3?a.j():this.Y(s)},qt.prototype.Y=function(s){try{if(s==this.g)e:{const Se=Ot(this.g);var a=this.g.Ba();const ir=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||hh(this.g)))){this.J||Se!=4||a==7||(a==8||0>=ir?Wr(3):Wr(2)),yl(this);var c=this.g.Z();this.X=c;t:if(Wc(this)){var d=hh(this.g);s="";var T=d.length,P=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pn(this),qr(this);var x="";break t}this.h.i=new u.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(P&&a==T-1)});d.length=0,this.h.g+=s,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=c==200,dv(this.i,this.u,this.A,this.l,this.R,Se,c),this.o){if(this.T&&!this.K){t:{if(this.g){var Y,me=this.g;if((Y=me.g?me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Y)){var K=Y;break t}}K=null}if(c=K)tr(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wl(this,c);else{this.o=!1,this.s=3,Pe(12),Pn(this),qr(this);break e}}if(this.P){c=!0;let ot;for(;!this.J&&this.C<x.length;)if(ot=mv(this,x),ot==ml){Se==4&&(this.s=4,Pe(14),c=!1),tr(this.i,this.l,null,"[Incomplete Response]");break}else if(ot==bc){this.s=4,Pe(15),tr(this.i,this.l,x,"[Invalid Chunk]"),c=!1;break}else tr(this.i,this.l,ot,null),wl(this,ot);if(Wc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||x.length!=0||this.h.h||(this.s=1,Pe(16),c=!1),this.o=this.o&&c,!c)tr(this.i,this.l,x,"[Invalid Chunked Response]"),Pn(this),qr(this);else if(0<x.length&&!this.W){this.W=!0;var Ee=this.j;Ee.g==this&&Ee.ba&&!Ee.M&&(Ee.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),kl(Ee),Ee.M=!0,Pe(11))}}else tr(this.i,this.l,x,null),wl(this,x);Se==4&&Pn(this),this.o&&!this.J&&(Se==4?yh(this.j,this):(this.o=!1,ls(this)))}else Lv(this.g),c==400&&0<x.indexOf("Unknown SID")?(this.s=3,Pe(12)):(this.s=0,Pe(13)),Pn(this),qr(this)}}}catch{}finally{}};function Wc(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function mv(s,a){var c=s.C,d=a.indexOf(`
`,c);return d==-1?ml:(c=Number(a.substring(c,d)),isNaN(c)?bc:(d+=1,d+c>a.length?ml:(a=a.slice(d,d+c),s.C=d+c,a)))}qt.prototype.cancel=function(){this.J=!0,Pn(this)};function ls(s){s.S=Date.now()+s.I,Kc(s,s.I)}function Kc(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Kr(I(s.ba,s),a)}function yl(s){s.B&&(u.clearTimeout(s.B),s.B=null)}qt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(fv(this.i,this.A),this.L!=2&&(Wr(),Pe(17)),Pn(this),this.s=2,qr(this)):Kc(this,this.S-s)};function qr(s){s.j.G==0||s.J||yh(s.j,s)}function Pn(s){yl(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Uc(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function wl(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||_l(c.h,s))){if(!s.K&&_l(c.h,s)&&c.G==3){try{var d=c.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)ms(c),ps(c);else break e;Tl(c),Pe(18)}}else c.za=T[1],0<c.za-c.T&&37500>T[2]&&c.F&&c.v==0&&!c.C&&(c.C=Kr(I(c.Za,c),6e3));if(1>=Xc(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Nn(c,11)}else if((s.K||c.g==s)&&ms(c),!w(a))for(T=c.Da.g.parse(a),a=0;a<T.length;a++){let K=T[a];if(c.T=K[0],K=K[1],c.G==2)if(K[0]=="c"){c.K=K[1],c.ia=K[2];const Ee=K[3];Ee!=null&&(c.la=Ee,c.j.info("VER="+c.la));const Se=K[4];Se!=null&&(c.Aa=Se,c.j.info("SVER="+c.Aa));const ir=K[5];ir!=null&&typeof ir=="number"&&0<ir&&(d=1.5*ir,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const ot=s.g;if(ot){const vs=ot.g?ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vs){var P=d.h;P.g||vs.indexOf("spdy")==-1&&vs.indexOf("quic")==-1&&vs.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(El(P,P.h),P.h=null))}if(d.D){const Cl=ot.g?ot.g.getResponseHeader("X-HTTP-Session-Id"):null;Cl&&(d.ya=Cl,Z(d.I,d.D,Cl))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var x=s;if(d.qa=Eh(d,d.J?d.ia:null,d.W),x.K){Qc(d.h,x);var Y=x,me=d.L;me&&(Y.I=me),Y.B&&(yl(Y),ls(Y)),d.g=x}else mh(d);0<c.i.length&&gs(c)}else K[0]!="stop"&&K[0]!="close"||Nn(c,7);else c.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?Nn(c,7):Il(c):K[0]!="noop"&&c.l&&c.l.ta(K),c.v=0)}}Wr(4)}catch{}}var vv=class{constructor(s,a){this.g=s,this.map=a}};function Gc(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qc(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Xc(s){return s.h?1:s.g?s.g.size:0}function _l(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function El(s,a){s.g?s.g.add(a):s.h=a}function Qc(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Gc.prototype.cancel=function(){if(this.i=Yc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Yc(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return L(s.i)}function yv(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],c=s.length,d=0;d<c;d++)a.push(s[d]);return a}a=[],c=0;for(d in s)a[c++]=s[d];return a}function wv(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const d in s)a[c++]=d;return a}}}function Jc(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=wv(s),d=yv(s),T=d.length,P=0;P<T;P++)a.call(void 0,d[P],c&&c[P],s)}var Zc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _v(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var d=s[c].indexOf("="),T=null;if(0<=d){var P=s[c].substring(0,d);T=s[c].substring(d+1)}else P=s[c];a(P,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Rn(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Rn){this.h=s.h,as(this,s.j),this.o=s.o,this.g=s.g,us(this,s.s),this.l=s.l;var a=s.i,c=new Yr;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),eh(this,c),this.m=s.m}else s&&(a=String(s).match(Zc))?(this.h=!1,as(this,a[1]||"",!0),this.o=Xr(a[2]||""),this.g=Xr(a[3]||"",!0),us(this,a[4]),this.l=Xr(a[5]||"",!0),eh(this,a[6]||"",!0),this.m=Xr(a[7]||"")):(this.h=!1,this.i=new Yr(null,this.h))}Rn.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Qr(a,th,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Qr(a,th,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Qr(c,c.charAt(0)=="/"?Iv:Sv,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Qr(c,kv)),s.join("")};function Nt(s){return new Rn(s)}function as(s,a,c){s.j=c?Xr(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function us(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function eh(s,a,c){a instanceof Yr?(s.i=a,Cv(s.i,s.h)):(c||(a=Qr(a,Tv)),s.i=new Yr(a,s.h))}function Z(s,a,c){s.i.set(a,c)}function cs(s){return Z(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Xr(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Qr(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,Ev),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Ev(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var th=/[#\/\?@]/g,Sv=/[#\?:]/g,Iv=/[#\?]/g,Tv=/[#\?@]/g,kv=/#/g;function Yr(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Xt(s){s.g||(s.g=new Map,s.h=0,s.i&&_v(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}t=Yr.prototype,t.add=function(s,a){Xt(this),this.i=null,s=nr(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function nh(s,a){Xt(s),a=nr(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function rh(s,a){return Xt(s),a=nr(s,a),s.g.has(a)}t.forEach=function(s,a){Xt(this),this.g.forEach(function(c,d){c.forEach(function(T){s.call(a,T,d,this)},this)},this)},t.na=function(){Xt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let d=0;d<a.length;d++){const T=s[d];for(let P=0;P<T.length;P++)c.push(a[d])}return c},t.V=function(s){Xt(this);let a=[];if(typeof s=="string")rh(this,s)&&(a=a.concat(this.g.get(nr(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},t.set=function(s,a){return Xt(this),this.i=null,s=nr(this,s),rh(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},t.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function ih(s,a,c){nh(s,a),0<c.length&&(s.i=null,s.g.set(nr(s,a),L(c)),s.h+=c.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var d=a[c];const P=encodeURIComponent(String(d)),x=this.V(d);for(d=0;d<x.length;d++){var T=P;x[d]!==""&&(T+="="+encodeURIComponent(String(x[d]))),s.push(T)}}return this.i=s.join("&")};function nr(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Cv(s,a){a&&!s.j&&(Xt(s),s.i=null,s.g.forEach(function(c,d){var T=d.toLowerCase();d!=T&&(nh(this,d),ih(this,T,c))},s)),s.j=a}function Av(s,a){const c=new Gr;if(u.Image){const d=new Image;d.onload=O(Qt,c,"TestLoadImage: loaded",!0,a,d),d.onerror=O(Qt,c,"TestLoadImage: error",!1,a,d),d.onabort=O(Qt,c,"TestLoadImage: abort",!1,a,d),d.ontimeout=O(Qt,c,"TestLoadImage: timeout",!1,a,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function Pv(s,a){const c=new Gr,d=new AbortController,T=setTimeout(()=>{d.abort(),Qt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(P=>{clearTimeout(T),P.ok?Qt(c,"TestPingServer: ok",!0,a):Qt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Qt(c,"TestPingServer: error",!1,a)})}function Qt(s,a,c,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(c)}catch{}}function Rv(){this.g=new uv}function Nv(s,a,c){const d=c||"";try{Jc(s,function(T,P){let x=T;f(T)&&(x=ul(T)),a.push(d+P+"="+encodeURIComponent(x))})}catch(T){throw a.push(d+"type="+encodeURIComponent("_badmap")),T}}function hs(s){this.l=s.Ub||null,this.j=s.eb||!1}R(hs,cl),hs.prototype.g=function(){return new ds(this.l,this.j)},hs.prototype.i=function(s){return function(){return s}}({});function ds(s,a){_e.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ds,_e),t=ds.prototype,t.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Zr(this)},t.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=0},t.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Zr(this)),this.g&&(this.readyState=3,Zr(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sh(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function sh(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}t.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Jr(this):Zr(this),this.readyState==3&&sh(this)}},t.Ra=function(s){this.g&&(this.response=this.responseText=s,Jr(this))},t.Qa=function(s){this.g&&(this.response=s,Jr(this))},t.ga=function(){this.g&&Jr(this)};function Jr(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Zr(s)}t.setRequestHeader=function(s,a){this.u.append(s,a)},t.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function Zr(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function oh(s){let a="";return U(s,function(c,d){a+=d,a+=":",a+=c,a+=`\r
`}),a}function Sl(s,a,c){e:{for(d in c){var d=!1;break e}d=!0}d||(c=oh(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):Z(s,a,c))}function ue(s){_e.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(ue,_e);var Ov=/^https?$/i,Dv=["POST","PUT"];t=ue.prototype,t.Ha=function(s){this.J=s},t.ea=function(s,a,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gl.g(),this.v=this.o?jc(this.o):jc(gl),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(P){lh(this,P);return}if(s=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)c.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const P of d.keys())c.set(P,d.get(P));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(P=>P.toLowerCase()=="content-type"),T=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Dv,a,void 0))||d||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,x]of c)this.g.setRequestHeader(P,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ch(this),this.u=!0,this.g.send(s),this.u=!1}catch(P){lh(this,P)}};function lh(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,ah(s),fs(s)}function ah(s){s.A||(s.A=!0,Ae(s,"complete"),Ae(s,"error"))}t.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Ae(this,"complete"),Ae(this,"abort"),fs(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fs(this,!0)),ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?uh(this):this.bb())},t.bb=function(){uh(this)};function uh(s){if(s.h&&typeof l<"u"&&(!s.v[1]||Ot(s)!=4||s.Z()!=2)){if(s.u&&Ot(s)==4)Lc(s.Ea,0,s);else if(Ae(s,"readystatechange"),Ot(s)==4){s.h=!1;try{const x=s.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var c;if(!(c=a)){var d;if(d=x===0){var T=String(s.D).match(Zc)[1]||null;!T&&u.self&&u.self.location&&(T=u.self.location.protocol.slice(0,-1)),d=!Ov.test(T?T.toLowerCase():"")}c=d}if(c)Ae(s,"complete"),Ae(s,"success");else{s.m=6;try{var P=2<Ot(s)?s.g.statusText:""}catch{P=""}s.l=P+" ["+s.Z()+"]",ah(s)}}finally{fs(s)}}}}function fs(s,a){if(s.g){ch(s);const c=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||Ae(s,"ready");try{c.onreadystatechange=d}catch{}}}function ch(s){s.I&&(u.clearTimeout(s.I),s.I=null)}t.isActive=function(){return!!this.g};function Ot(s){return s.g?s.g.readyState:0}t.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),av(a)}};function hh(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Lv(s){const a={};s=(s.g&&2<=Ot(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(w(s[d]))continue;var c=_(s[d]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const P=a[T]||[];a[T]=P,P.push(c)}m(a,function(d){return d.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ei(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function dh(s){this.Aa=0,this.i=[],this.j=new Gr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ei("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ei("baseRetryDelayMs",5e3,s),this.cb=ei("retryDelaySeedMs",1e4,s),this.Wa=ei("forwardChannelMaxRetries",2,s),this.wa=ei("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Gc(s&&s.concurrentRequestLimit),this.Da=new Rv,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=dh.prototype,t.la=8,t.G=1,t.connect=function(s,a,c,d){Pe(0),this.W=s,this.H=a||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=Eh(this,null,this.W),gs(this)};function Il(s){if(fh(s),s.G==3){var a=s.U++,c=Nt(s.I);if(Z(c,"SID",s.K),Z(c,"RID",a),Z(c,"TYPE","terminate"),ti(s,c),a=new qt(s,s.j,a),a.L=2,a.v=cs(Nt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=a.v,c=!0),c||(a.g=Sh(a.j,null),a.g.ea(a.v)),a.F=Date.now(),ls(a)}_h(s)}function ps(s){s.g&&(kl(s),s.g.cancel(),s.g=null)}function fh(s){ps(s),s.u&&(u.clearTimeout(s.u),s.u=null),ms(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function gs(s){if(!qc(s.h)&&!s.s){s.s=!0;var a=s.Ga;Ct||V(),j||(Ct(),j=!0),B.add(a,s),s.B=0}}function xv(s,a){return Xc(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Kr(I(s.Ga,s,a),wh(s,s.B)),s.B++,!0)}t.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new qt(this,this.j,s);let P=this.o;if(this.S&&(P?(P=p(P),y(P,this.S)):P=this.S),this.m!==null||this.O||(T.H=P,P=null),this.P)e:{for(var a=0,c=0;c<this.i.length;c++){t:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=c;break e}if(a===4096||c===this.i.length-1){a=c+1;break e}}a=1e3}else a=1e3;a=gh(this,T,a),c=Nt(this.I),Z(c,"RID",s),Z(c,"CVER",22),this.D&&Z(c,"X-HTTP-Session-Id",this.D),ti(this,c),P&&(this.O?a="headers="+encodeURIComponent(String(oh(P)))+"&"+a:this.m&&Sl(c,this.m,P)),El(this.h,T),this.Ua&&Z(c,"TYPE","init"),this.P?(Z(c,"$req",a),Z(c,"SID","null"),T.T=!0,vl(T,c,null)):vl(T,c,a),this.G=2}}else this.G==3&&(s?ph(this,s):this.i.length==0||qc(this.h)||ph(this))};function ph(s,a){var c;a?c=a.l:c=s.U++;const d=Nt(s.I);Z(d,"SID",s.K),Z(d,"RID",c),Z(d,"AID",s.T),ti(s,d),s.m&&s.o&&Sl(d,s.m,s.o),c=new qt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=gh(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),El(s.h,c),vl(c,d,a)}function ti(s,a){s.H&&U(s.H,function(c,d){Z(a,d,c)}),s.l&&Jc({},function(c,d){Z(a,d,c)})}function gh(s,a,c){c=Math.min(s.i.length,c);var d=s.l?I(s.l.Na,s.l,s):null;e:{var T=s.i;let P=-1;for(;;){const x=["count="+c];P==-1?0<c?(P=T[0].g,x.push("ofs="+P)):P=0:x.push("ofs="+P);let Y=!0;for(let me=0;me<c;me++){let K=T[me].g;const Ee=T[me].map;if(K-=P,0>K)P=Math.max(0,T[me].g-100),Y=!1;else try{Nv(Ee,x,"req"+K+"_")}catch{d&&d(Ee)}}if(Y){d=x.join("&");break e}}}return s=s.i.splice(0,c),a.D=s,d}function mh(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Ct||V(),j||(Ct(),j=!0),B.add(a,s),s.v=0}}function Tl(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Kr(I(s.Fa,s),wh(s,s.v)),s.v++,!0)}t.Fa=function(){if(this.u=null,vh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Kr(I(this.ab,this),s)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pe(10),ps(this),vh(this))};function kl(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function vh(s){s.g=new qt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Nt(s.qa);Z(a,"RID","rpc"),Z(a,"SID",s.K),Z(a,"AID",s.T),Z(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&Z(a,"TO",s.ja),Z(a,"TYPE","xmlhttp"),ti(s,a),s.m&&s.o&&Sl(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=cs(Nt(a)),c.m=null,c.P=!0,Hc(c,s)}t.Za=function(){this.C!=null&&(this.C=null,ps(this),Tl(this),Pe(19))};function ms(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function yh(s,a){var c=null;if(s.g==a){ms(s),kl(s),s.g=null;var d=2}else if(_l(s.h,a))c=a.D,Qc(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;d=fl(),Ae(d,new Bc(d,c)),gs(s)}else mh(s);else if(T=a.s,T==3||T==0&&0<a.X||!(d==1&&xv(s,a)||d==2&&Tl(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),T){case 1:Nn(s,5);break;case 4:Nn(s,10);break;case 3:Nn(s,6);break;default:Nn(s,2)}}}function wh(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function Nn(s,a){if(s.j.info("Error code "+a),a==2){var c=I(s.fb,s),d=s.Xa;const T=!d;d=new Rn(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||as(d,"https"),cs(d),T?Av(d.toString(),c):Pv(d.toString(),c)}else Pe(2);s.G=0,s.l&&s.l.sa(a),_h(s),fh(s)}t.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Pe(2)):(this.j.info("Failed to ping google.com"),Pe(1))};function _h(s){if(s.G=0,s.ka=[],s.l){const a=Yc(s.h);(a.length!=0||s.i.length!=0)&&(z(s.ka,a),z(s.ka,s.i),s.h.i.length=0,L(s.i),s.i.length=0),s.l.ra()}}function Eh(s,a,c){var d=c instanceof Rn?Nt(c):new Rn(c);if(d.g!="")a&&(d.g=a+"."+d.g),us(d,d.s);else{var T=u.location;d=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var P=new Rn(null);d&&as(P,d),a&&(P.g=a),T&&us(P,T),c&&(P.l=c),d=P}return c=s.D,a=s.ya,c&&a&&Z(d,c,a),Z(d,"VER",s.la),ti(s,d),d}function Sh(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new ue(new hs({eb:c})):new ue(s.pa),a.Ha(s.J),a}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ih(){}t=Ih.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Je(s,a){_e.call(this),this.g=new dh(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!w(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!w(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new rr(this)}R(Je,_e),Je.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Je.prototype.close=function(){Il(this.g)},Je.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=ul(s),s=c);a.i.push(new vv(a.Ya++,s)),a.G==3&&gs(a)},Je.prototype.N=function(){this.g.l=null,delete this.j,Il(this.g),delete this.g,Je.aa.N.call(this)};function Th(s){hl.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){e:{for(const c in a){s=c;break e}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}R(Th,hl);function kh(){dl.call(this),this.status=1}R(kh,dl);function rr(s){this.g=s}R(rr,Ih),rr.prototype.ua=function(){Ae(this.g,"a")},rr.prototype.ta=function(s){Ae(this.g,new Th(s))},rr.prototype.sa=function(s){Ae(this.g,new kh)},rr.prototype.ra=function(){Ae(this.g,"b")},Je.prototype.send=Je.prototype.o,Je.prototype.open=Je.prototype.m,Je.prototype.close=Je.prototype.close,pl.NO_ERROR=0,pl.TIMEOUT=8,pl.HTTP_ERROR=6,gv.COMPLETE="complete",cv.EventType=Hr,Hr.OPEN="a",Hr.CLOSE="b",Hr.ERROR="c",Hr.MESSAGE="d",_e.prototype.listen=_e.prototype.K,ue.prototype.listenOnce=ue.prototype.L,ue.prototype.getLastError=ue.prototype.Ka,ue.prototype.getLastErrorCode=ue.prototype.Ba,ue.prototype.getStatus=ue.prototype.Z,ue.prototype.getResponseJson=ue.prototype.Oa,ue.prototype.getResponseText=ue.prototype.oa,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Ha}).apply(typeof Us<"u"?Us:typeof self<"u"?self:typeof window<"u"?window:{});const cf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Qo("@firebase/firestore");function ht(t,...e){if(Ur.logLevel<=q.DEBUG){const n=e.map(wc);Ur.debug(`Firestore (${ns}): ${t}`,...n)}}function Dm(t,...e){if(Ur.logLevel<=q.ERROR){const n=e.map(wc);Ur.error(`Firestore (${ns}): ${t}`,...n)}}function VE(t,...e){if(Ur.logLevel<=q.WARN){const n=e.map(wc);Ur.warn(`Firestore (${ns}): ${t}`,...n)}}function wc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t="Unexpected state"){const e=`FIRESTORE (${ns}) INTERNAL ASSERTION FAILED: `+t;throw Dm(e),new Error(e)}function Ti(t,e){t||_c()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Fe extends mt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ne.UNAUTHENTICATED))}shutdown(){}}class HE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class WE{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ti(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,n(h)):Promise.resolve();let o=new ki;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ki,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{ht("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(ht("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ki)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ht("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ti(typeof r.accessToken=="string"),new Lm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ti(e===null||typeof e=="string"),new Ne(e)}}class KE{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class GE{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new KE(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ti(this.o===void 0);const r=o=>{o.error!=null&&ht("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,ht("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{ht("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):ht("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ti(typeof n.token=="string"),this.R=n.token,new qE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function QE(t){return t.name==="IndexedDbTransactionError"}class Oo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Oo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Oo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hf,H;(H=hf||(hf={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Om([4294967295,4294967295],0);function oa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&ht("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ki,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const l=Date.now()+r,u=new Ec(e,n,l,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Fe(je.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var df,ff;(ff=df||(df={})).ea="default",ff.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=new Map;function ZE(t,e,n,r){if(e===!0&&r===!0)throw new Fe(je.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function eS(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_c()}function tS(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Fe(je.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=eS(t);throw new Fe(je.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Fe(je.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Fe(je.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=JE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Fe(je.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Fe(je.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Fe(je.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Fe(je.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Fe(je.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bE;switch(r.type){case"firstParty":return new GE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Fe(je.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=pf.get(n);r&&(ht("ComponentProvider","Removing Datastore"),pf.delete(n),r.terminate())}(this),Promise.resolve()}}function nS(t,e,n,r={}){var i;const o=(t=tS(t,xm))._getSettings(),l=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&VE("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=Ne.MOCK_USER;else{u=_w(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new Fe(je.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Ne(f)}t._authCredentials=new HE(new Lm(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new YE(this,"async_queue_retry"),this.Vu=()=>{const r=oa();r&&ht("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=oa();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=oa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ki;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!QE(e))throw e;ht("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(r);throw Dm("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Ec.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&_c()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class rS extends xm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new mf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mf(e),this._firestoreClient=void 0,await e}}}function iS(t,e){const n=typeof t=="object"?t:ac(),r=typeof t=="string"?t:e||"(default)",i=Zn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=yw("firestore");o&&nS(i,...o)}return i}(function(e,n=!0){(function(i){ns=i})($r),kt(new gt("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),u=new rS(new WE(r.getProvider("auth-internal")),new XE(r.getProvider("app-check-internal")),function(f,C){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new Fe(je.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oo(f.options.projectId,C)}(l,i),l);return o=Object.assign({useFetchStreams:n},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),rt(cf,"4.7.3",e),rt(cf,"4.7.3","esm2017")})();const Mm="@firebase/installations",Sc="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=1e4,jm=`w:${Sc}`,Fm="FIS_v2",sS="https://firebaseinstallations.googleapis.com/v1",oS=60*60*1e3,lS="installations",aS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qn=new Jn(lS,aS,uS);function zm(t){return t instanceof mt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m({projectId:t}){return`${sS}/projects/${t}/installations`}function Bm(t){return{token:t.token,requestStatus:2,expiresIn:hS(t.expiresIn),creationTime:Date.now()}}async function Vm(t,e){const r=(await e.json()).error;return qn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function bm({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function cS(t,{refreshToken:e}){const n=bm(t);return n.append("Authorization",dS(e)),n}async function Hm(t){const e=await t();return e.status>=500&&e.status<600?t():e}function hS(t){return Number(t.replace("s","000"))}function dS(t){return`${Fm} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fS({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=$m(t),i=bm(t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const l={fid:n,authVersion:Fm,appId:t.appId,sdkVersion:jm},u={method:"POST",headers:i,body:JSON.stringify(l)},h=await Hm(()=>fetch(r,u));if(h.ok){const f=await h.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:Bm(f.authToken)}}else throw await Vm("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=/^[cdef][\w-]{21}$/,cu="";function mS(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=vS(t);return gS.test(n)?n:cu}catch{return cu}}function vS(t){return pS(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=new Map;function Gm(t,e){const n=Zo(t);qm(n,e),yS(n,e)}function qm(t,e){const n=Km.get(t);if(n)for(const r of n)r(e)}function yS(t,e){const n=wS();n&&n.postMessage({key:t,fid:e}),_S()}let Fn=null;function wS(){return!Fn&&"BroadcastChannel"in self&&(Fn=new BroadcastChannel("[Firebase] FID Change"),Fn.onmessage=t=>{qm(t.data.key,t.data.fid)}),Fn}function _S(){Km.size===0&&Fn&&(Fn.close(),Fn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES="firebase-installations-database",SS=1,Xn="firebase-installations-store";let la=null;function Ic(){return la||(la=Xg(ES,SS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xn)}}})),la}async function Do(t,e){const n=Zo(t),i=(await Ic()).transaction(Xn,"readwrite"),o=i.objectStore(Xn),l=await o.get(n);return await o.put(e,n),await i.done,(!l||l.fid!==e.fid)&&Gm(t,e.fid),e}async function Xm(t){const e=Zo(t),r=(await Ic()).transaction(Xn,"readwrite");await r.objectStore(Xn).delete(e),await r.done}async function el(t,e){const n=Zo(t),i=(await Ic()).transaction(Xn,"readwrite"),o=i.objectStore(Xn),l=await o.get(n),u=e(l);return u===void 0?await o.delete(n):await o.put(u,n),await i.done,u&&(!l||l.fid!==u.fid)&&Gm(t,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tc(t){let e;const n=await el(t.appConfig,r=>{const i=IS(r),o=TS(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===cu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function IS(t){const e=t||{fid:mS(),registrationStatus:0};return Qm(e)}function TS(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(qn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=kS(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:CS(t)}:{installationEntry:e}}async function kS(t,e){try{const n=await fS(t,e);return Do(t.appConfig,n)}catch(n){throw zm(n)&&n.customData.serverCode===409?await Xm(t.appConfig):await Do(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function CS(t){let e=await vf(t.appConfig);for(;e.registrationStatus===1;)await Wm(100),e=await vf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Tc(t);return r||n}return e}function vf(t){return el(t,e=>{if(!e)throw qn.create("installation-not-found");return Qm(e)})}function Qm(t){return AS(t)?{fid:t.fid,registrationStatus:0}:t}function AS(t){return t.registrationStatus===1&&t.registrationTime+Um<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS({appConfig:t,heartbeatServiceProvider:e},n){const r=RS(t,n),i=cS(t,n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const l={installation:{sdkVersion:jm,appId:t.appId}},u={method:"POST",headers:i,body:JSON.stringify(l)},h=await Hm(()=>fetch(r,u));if(h.ok){const f=await h.json();return Bm(f)}else throw await Vm("Generate Auth Token",h)}function RS(t,{fid:e}){return`${$m(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kc(t,e=!1){let n;const r=await el(t.appConfig,o=>{if(!Ym(o))throw qn.create("not-registered");const l=o.authToken;if(!e&&DS(l))return o;if(l.requestStatus===1)return n=NS(t,e),o;{if(!navigator.onLine)throw qn.create("app-offline");const u=xS(o);return n=OS(t,u),u}});return n?await n:r.authToken}async function NS(t,e){let n=await yf(t.appConfig);for(;n.authToken.requestStatus===1;)await Wm(100),n=await yf(t.appConfig);const r=n.authToken;return r.requestStatus===0?kc(t,e):r}function yf(t){return el(t,e=>{if(!Ym(e))throw qn.create("not-registered");const n=e.authToken;return MS(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function OS(t,e){try{const n=await PS(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Do(t.appConfig,r),n}catch(n){if(zm(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Xm(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Do(t.appConfig,r)}throw n}}function Ym(t){return t!==void 0&&t.registrationStatus===2}function DS(t){return t.requestStatus===2&&!LS(t)}function LS(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+oS}function xS(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function MS(t){return t.requestStatus===1&&t.requestTime+Um<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function US(t){const e=t,{installationEntry:n,registrationPromise:r}=await Tc(e);return r?r.catch(console.error):kc(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(t,e=!1){const n=t;return await FS(n),(await kc(n,e)).token}async function FS(t){const{registrationPromise:e}=await Tc(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(t){if(!t||!t.options)throw aa("App Configuration");if(!t.name)throw aa("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw aa(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function aa(t){return qn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="installations",$S="installations-internal",BS=t=>{const e=t.getProvider("app").getImmediate(),n=zS(e),r=Zn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},VS=t=>{const e=t.getProvider("app").getImmediate(),n=Zn(e,Jm).getImmediate();return{getId:()=>US(n),getToken:i=>jS(n,i)}};function bS(){kt(new gt(Jm,BS,"PUBLIC")),kt(new gt($S,VS,"PRIVATE"))}bS();rt(Mm,Sc);rt(Mm,Sc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="analytics",HS="firebase_id",WS="origin",KS=60*1e3,GS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Cc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=new Qo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ge=new Jn("analytics","Analytics",qS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t){if(!t.startsWith(Cc)){const e=Ge.create("invalid-gtag-resource",{gtagURL:t});return be.warn(e.message),""}return t}function Zm(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function QS(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function YS(t,e){const n=QS("firebase-js-sdk-policy",{createScriptURL:XS}),r=document.createElement("script"),i=`${Cc}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function JS(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ZS(t,e,n,r,i,o){const l=r[i];try{if(l)await e[l];else{const h=(await Zm(n)).find(f=>f.measurementId===i);h&&await e[h.appId]}}catch(u){be.error(u)}t("config",i,o)}async function eI(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let l=i.send_to;Array.isArray(l)||(l=[l]);const u=await Zm(n);for(const h of l){const f=u.find(A=>A.measurementId===h),C=f&&e[f.appId];if(C)o.push(C);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){be.error(o)}}function tI(t,e,n,r){async function i(o,...l){try{if(o==="event"){const[u,h]=l;await eI(t,e,n,u,h)}else if(o==="config"){const[u,h]=l;await ZS(t,e,n,r,u,h)}else if(o==="consent"){const[u,h]=l;t("consent",u,h)}else if(o==="get"){const[u,h,f]=l;t("get",u,h,f)}else if(o==="set"){const[u]=l;t("set",u)}else t(o,...l)}catch(u){be.error(u)}}return i}function nI(t,e,n,r,i){let o=function(...l){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=tI(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function rI(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Cc)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=30,sI=1e3;class oI{constructor(e={},n=sI){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ev=new oI;function lI(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function aI(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:lI(r)},o=GS.replace("{app-id}",n),l=await fetch(o,i);if(l.status!==200&&l.status!==304){let u="";try{const h=await l.json();!((e=h.error)===null||e===void 0)&&e.message&&(u=h.error.message)}catch{}throw Ge.create("config-fetch-failed",{httpStatus:l.status,responseMessage:u})}return l.json()}async function uI(t,e=ev,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw Ge.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Ge.create("no-api-key")}const l=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new dI;return setTimeout(async()=>{u.abort()},n!==void 0?n:KS),tv({appId:r,apiKey:i,measurementId:o},l,u,e)}async function tv(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=ev){var o;const{appId:l,measurementId:u}=t;try{await cI(r,e)}catch(h){if(u)return be.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:l,measurementId:u};throw h}try{const h=await aI(t);return i.deleteThrottleMetadata(l),h}catch(h){const f=h;if(!hI(f)){if(i.deleteThrottleMetadata(l),u)return be.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:u};throw h}const C=Number((o=f==null?void 0:f.customData)===null||o===void 0?void 0:o.httpStatus)===503?Ud(n,i.intervalMillis,iI):Ud(n,i.intervalMillis),A={throttleEndTimeMillis:Date.now()+C,backoffCount:n+1};return i.setThrottleMetadata(l,A),be.debug(`Calling attemptFetch again in ${C} millis`),tv(t,A,r,i)}}function cI(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(Ge.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function hI(t){if(!(t instanceof mt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class dI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function fI(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,l=Object.assign(Object.assign({},r),{send_to:o});t("event",n,l)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(){if(Wg())try{await Kg()}catch(t){return be.warn(Ge.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return be.warn(Ge.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function gI(t,e,n,r,i,o,l){var u;const h=uI(t);h.then(O=>{n[O.measurementId]=O.appId,t.options.measurementId&&O.measurementId!==t.options.measurementId&&be.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${O.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(O=>be.error(O)),e.push(h);const f=pI().then(O=>{if(O)return r.getId()}),[C,A]=await Promise.all([h,f]);rI(o)||YS(o,C.measurementId),i("js",new Date);const I=(u=l==null?void 0:l.config)!==null&&u!==void 0?u:{};return I[WS]="firebase",I.update=!0,A!=null&&(I[HS]=A),i("config",C.measurementId,I),C.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.app=e}_delete(){return delete Ci[this.app.options.appId],Promise.resolve()}}let Ci={},wf=[];const _f={};let ua="dataLayer",vI="gtag",Ef,nv,Sf=!1;function yI(){const t=[];if(Hg()&&t.push("This is a browser extension environment."),kw()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ge.create("invalid-analytics-context",{errorInfo:e});be.warn(n.message)}}function wI(t,e,n){yI();const r=t.options.appId;if(!r)throw Ge.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)be.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ge.create("no-api-key");if(Ci[r]!=null)throw Ge.create("already-exists",{id:r});if(!Sf){JS(ua);const{wrappedGtag:o,gtagCore:l}=nI(Ci,wf,_f,ua,vI);nv=o,Ef=l,Sf=!0}return Ci[r]=gI(t,wf,_f,e,Ef,ua,n),new mI(t)}function _I(t=ac()){t=Cn(t);const e=Zn(t,Lo);return e.isInitialized()?e.getImmediate():EI(t)}function EI(t,e={}){const n=Zn(t,Lo);if(n.isInitialized()){const i=n.getImmediate();if(Hi(e,n.getOptions()))return i;throw Ge.create("already-initialized")}return n.initialize({options:e})}function SI(t,e,n,r){t=Cn(t),fI(nv,Ci[t.app.options.appId],e,n,r).catch(i=>be.error(i))}const If="@firebase/analytics",Tf="0.10.8";function II(){kt(new gt(Lo,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return wI(r,i,n)},"PUBLIC")),kt(new gt("analytics-internal",t,"PRIVATE")),rt(If,Tf),rt(If,Tf,"esm2017");function t(e){try{const n=e.getProvider(Lo).getImmediate();return{logEvent:(r,i,o)=>SI(n,r,i,o)}}catch(n){throw Ge.create("interop-component-reg-failed",{reason:n})}}}II();const hu={apiKey:"your_api_key_here",authDomain:"your-project.firebaseapp.com",projectId:"your-project-id",storageBucket:"your-project.appspot.com",messagingSenderId:"your_sender_id_here",appId:"your_app_id_here",measurementId:"your_measurement_id_here"};(!hu.apiKey||!hu.projectId)&&console.warn("Firebase config incomplete. Check your .env file.");const Ac=Qg(hu);$E(Ac);iS(Ac);_I(Ac);const TI=jg(document.getElementById("root"));TI.render(G.jsx(cw,{}));

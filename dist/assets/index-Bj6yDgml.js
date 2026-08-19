(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Ym(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var wc={exports:{}},Do={},Tc={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function c_(){if(Dp)return mt;Dp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(U,$,we){this.props=U,this.context=$,this.refs=T,this.updater=we||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function I(U,$,we){this.props=U,this.context=$,this.refs=T,this.updater=we||S}var L=I.prototype=new _;L.constructor=I,E(L,y.prototype),L.isPureReactComponent=!0;var C=Array.isArray,W=Object.prototype.hasOwnProperty,O={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function X(U,$,we){var q,fe={},ge=null,_e=null;if($!=null)for(q in $.ref!==void 0&&(_e=$.ref),$.key!==void 0&&(ge=""+$.key),$)W.call($,q)&&!N.hasOwnProperty(q)&&(fe[q]=$[q]);var be=arguments.length-2;if(be===1)fe.children=we;else if(1<be){for(var He=Array(be),Xe=0;Xe<be;Xe++)He[Xe]=arguments[Xe+2];fe.children=He}if(U&&U.defaultProps)for(q in be=U.defaultProps,be)fe[q]===void 0&&(fe[q]=be[q]);return{$$typeof:s,type:U,key:ge,ref:_e,props:fe,_owner:O.current}}function b(U,$){return{$$typeof:s,type:U.type,key:$,ref:U.ref,props:U.props,_owner:U._owner}}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function k(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(we){return $[we]})}var ne=/\/+/g;function Q(U,$){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):$.toString(36)}function ue(U,$,we,q,fe){var ge=typeof U;(ge==="undefined"||ge==="boolean")&&(U=null);var _e=!1;if(U===null)_e=!0;else switch(ge){case"string":case"number":_e=!0;break;case"object":switch(U.$$typeof){case s:case e:_e=!0}}if(_e)return _e=U,fe=fe(_e),U=q===""?"."+Q(_e,0):q,C(fe)?(we="",U!=null&&(we=U.replace(ne,"$&/")+"/"),ue(fe,$,we,"",function(Xe){return Xe})):fe!=null&&(R(fe)&&(fe=b(fe,we+(!fe.key||_e&&_e.key===fe.key?"":(""+fe.key).replace(ne,"$&/")+"/")+U)),$.push(fe)),1;if(_e=0,q=q===""?".":q+":",C(U))for(var be=0;be<U.length;be++){ge=U[be];var He=q+Q(ge,be);_e+=ue(ge,$,we,He,fe)}else if(He=x(U),typeof He=="function")for(U=He.call(U),be=0;!(ge=U.next()).done;)ge=ge.value,He=q+Q(ge,be++),_e+=ue(ge,$,we,He,fe);else if(ge==="object")throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return _e}function le(U,$,we){if(U==null)return U;var q=[],fe=0;return ue(U,q,"","",function(ge){return $.call(we,ge,fe++)}),q}function se(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(we){(U._status===0||U._status===-1)&&(U._status=1,U._result=we)},function(we){(U._status===0||U._status===-1)&&(U._status=2,U._result=we)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var de={current:null},z={transition:null},ce={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:z,ReactCurrentOwner:O};function oe(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:le,forEach:function(U,$,we){le(U,function(){$.apply(this,arguments)},we)},count:function(U){var $=0;return le(U,function(){$++}),$},toArray:function(U){return le(U,function($){return $})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},mt.Component=y,mt.Fragment=n,mt.Profiler=a,mt.PureComponent=I,mt.StrictMode=r,mt.Suspense=h,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,mt.act=oe,mt.cloneElement=function(U,$,we){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var q=E({},U.props),fe=U.key,ge=U.ref,_e=U._owner;if($!=null){if($.ref!==void 0&&(ge=$.ref,_e=O.current),$.key!==void 0&&(fe=""+$.key),U.type&&U.type.defaultProps)var be=U.type.defaultProps;for(He in $)W.call($,He)&&!N.hasOwnProperty(He)&&(q[He]=$[He]===void 0&&be!==void 0?be[He]:$[He])}var He=arguments.length-2;if(He===1)q.children=we;else if(1<He){be=Array(He);for(var Xe=0;Xe<He;Xe++)be[Xe]=arguments[Xe+2];q.children=be}return{$$typeof:s,type:U.type,key:fe,ref:ge,props:q,_owner:_e}},mt.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},mt.createElement=X,mt.createFactory=function(U){var $=X.bind(null,U);return $.type=U,$},mt.createRef=function(){return{current:null}},mt.forwardRef=function(U){return{$$typeof:d,render:U}},mt.isValidElement=R,mt.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:se}},mt.memo=function(U,$){return{$$typeof:m,type:U,compare:$===void 0?null:$}},mt.startTransition=function(U){var $=z.transition;z.transition={};try{U()}finally{z.transition=$}},mt.unstable_act=oe,mt.useCallback=function(U,$){return de.current.useCallback(U,$)},mt.useContext=function(U){return de.current.useContext(U)},mt.useDebugValue=function(){},mt.useDeferredValue=function(U){return de.current.useDeferredValue(U)},mt.useEffect=function(U,$){return de.current.useEffect(U,$)},mt.useId=function(){return de.current.useId()},mt.useImperativeHandle=function(U,$,we){return de.current.useImperativeHandle(U,$,we)},mt.useInsertionEffect=function(U,$){return de.current.useInsertionEffect(U,$)},mt.useLayoutEffect=function(U,$){return de.current.useLayoutEffect(U,$)},mt.useMemo=function(U,$){return de.current.useMemo(U,$)},mt.useReducer=function(U,$,we){return de.current.useReducer(U,$,we)},mt.useRef=function(U){return de.current.useRef(U)},mt.useState=function(U){return de.current.useState(U)},mt.useSyncExternalStore=function(U,$,we){return de.current.useSyncExternalStore(U,$,we)},mt.useTransition=function(){return de.current.useTransition()},mt.version="18.3.1",mt}var Ip;function Kf(){return Ip||(Ip=1,Tc.exports=c_()),Tc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function f_(){if(Up)return Do;Up=1;var s=Kf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,h,m){var v,g={},x=null,S=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(v in h)r.call(h,v)&&!u.hasOwnProperty(v)&&(g[v]=h[v]);if(d&&d.defaultProps)for(v in h=d.defaultProps,h)g[v]===void 0&&(g[v]=h[v]);return{$$typeof:e,type:d,key:x,ref:S,props:g,_owner:a.current}}return Do.Fragment=n,Do.jsx=f,Do.jsxs=f,Do}var Np;function d_(){return Np||(Np=1,wc.exports=f_()),wc.exports}var ae=d_(),Ut=Kf();const h_=Ym(Ut);var nl={},Ac={exports:{}},In={},Rc={exports:{}},Cc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function p_(){return Fp||(Fp=1,(function(s){function e(z,ce){var oe=z.length;z.push(ce);e:for(;0<oe;){var U=oe-1>>>1,$=z[U];if(0<a($,ce))z[U]=ce,z[oe]=$,oe=U;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var ce=z[0],oe=z.pop();if(oe!==ce){z[0]=oe;e:for(var U=0,$=z.length,we=$>>>1;U<we;){var q=2*(U+1)-1,fe=z[q],ge=q+1,_e=z[ge];if(0>a(fe,oe))ge<$&&0>a(_e,fe)?(z[U]=_e,z[ge]=oe,U=ge):(z[U]=fe,z[q]=oe,U=q);else if(ge<$&&0>a(_e,oe))z[U]=_e,z[ge]=oe,U=ge;else break e}}return ce}function a(z,ce){var oe=z.sortIndex-ce.sortIndex;return oe!==0?oe:z.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var h=[],m=[],v=1,g=null,x=3,S=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(z){for(var ce=n(m);ce!==null;){if(ce.callback===null)r(m);else if(ce.startTime<=z)r(m),ce.sortIndex=ce.expirationTime,e(h,ce);else break;ce=n(m)}}function C(z){if(T=!1,L(z),!E)if(n(h)!==null)E=!0,se(W);else{var ce=n(m);ce!==null&&de(C,ce.startTime-z)}}function W(z,ce){E=!1,T&&(T=!1,_(X),X=-1),S=!0;var oe=x;try{for(L(ce),g=n(h);g!==null&&(!(g.expirationTime>ce)||z&&!k());){var U=g.callback;if(typeof U=="function"){g.callback=null,x=g.priorityLevel;var $=U(g.expirationTime<=ce);ce=s.unstable_now(),typeof $=="function"?g.callback=$:g===n(h)&&r(h),L(ce)}else r(h);g=n(h)}if(g!==null)var we=!0;else{var q=n(m);q!==null&&de(C,q.startTime-ce),we=!1}return we}finally{g=null,x=oe,S=!1}}var O=!1,N=null,X=-1,b=5,R=-1;function k(){return!(s.unstable_now()-R<b)}function ne(){if(N!==null){var z=s.unstable_now();R=z;var ce=!0;try{ce=N(!0,z)}finally{ce?Q():(O=!1,N=null)}}else O=!1}var Q;if(typeof I=="function")Q=function(){I(ne)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,le=ue.port2;ue.port1.onmessage=ne,Q=function(){le.postMessage(null)}}else Q=function(){y(ne,0)};function se(z){N=z,O||(O=!0,Q())}function de(z,ce){X=y(function(){z(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,se(W))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(z){switch(x){case 1:case 2:case 3:var ce=3;break;default:ce=x}var oe=x;x=ce;try{return z()}finally{x=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,ce){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var oe=x;x=z;try{return ce()}finally{x=oe}},s.unstable_scheduleCallback=function(z,ce,oe){var U=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?U+oe:U):oe=U,z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=oe+$,z={id:v++,callback:ce,priorityLevel:z,startTime:oe,expirationTime:$,sortIndex:-1},oe>U?(z.sortIndex=oe,e(m,z),n(h)===null&&z===n(m)&&(T?(_(X),X=-1):T=!0,de(C,oe-U))):(z.sortIndex=$,e(h,z),E||S||(E=!0,se(W))),z},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(z){var ce=x;return function(){var oe=x;x=ce;try{return z.apply(this,arguments)}finally{x=oe}}}})(Cc)),Cc}var Op;function m_(){return Op||(Op=1,Rc.exports=p_()),Rc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function g_(){if(kp)return In;kp=1;var s=Kf(),e=m_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},g={};function x(t){return h.call(g,t)?!0:h.call(v,t)?!1:m.test(t)?g[t]=!0:(v[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,l,c,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,I);y[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,I);y[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,I);y[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,l){var c=y.hasOwnProperty(i)?y[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),O=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),k=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),z=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,U;function $(t){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var we=!1;function q(t,i){if(!t||we)return"";we=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var l=re}Reflect.construct(t,[],i)}else{try{i.call()}catch(re){l=re}t.call(i.prototype)}else{try{throw Error()}catch(re){l=re}t()}}catch(re){if(re&&l&&typeof re.stack=="string"){for(var c=re.stack.split(`
`),p=l.stack.split(`
`),M=c.length-1,D=p.length-1;1<=M&&0<=D&&c[M]!==p[D];)D--;for(;1<=M&&0<=D;M--,D--)if(c[M]!==p[D]){if(M!==1||D!==1)do if(M--,D--,0>D||c[M]!==p[D]){var B=`
`+c[M].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=M&&0<=D);break}}}finally{we=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?$(t):""}function fe(t){switch(t.tag){case 5:return $(t.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return t=q(t.type,!1),t;case 11:return t=q(t.type.render,!1),t;case 1:return t=q(t.type,!0),t;default:return""}}function ge(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case O:return"Portal";case b:return"Profiler";case X:return"StrictMode";case Q:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case ne:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case le:return i=t.displayName||null,i!==null?i:ge(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return ge(t(i))}catch{}}return null}function _e(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function He(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Xe(t){var i=He(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ct(t){t._valueTracker||(t._valueTracker=Xe(t))}function Rt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=He(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function F(t,i){var o=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Xt(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=be(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function ut(t,i){ct(t,i);var o=be(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?wt(t,i.type,o):i.hasOwnProperty("defaultValue")&&wt(t,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Je(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function wt(t,i,o){(i!=="number"||lt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ye=Array.isArray;function P(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+be(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function w(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function J(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ye(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:be(o)}}function xe(t,i){var o=be(i.value),l=be(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ve(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function me(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?me(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ne,Ee=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ne=Ne||document.createElement("div"),Ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ne.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ve(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(he).forEach(function(t){Pe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),he[i]=he[t]})});function Ie(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||he.hasOwnProperty(t)&&he[t]?(""+i).trim():i+"px"}function Fe(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Ie(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var Re=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ze(t,i){if(i){if(Re[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ue(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ot=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ye=null,te=null,pe=null;function Le(t){if(t=_o(t)){if(typeof ye!="function")throw Error(n(280));var i=t.stateNode;i&&(i=_a(i),ye(t.stateNode,t.type,i))}}function De(t){te?pe?pe.push(t):pe=[t]:te=t}function tt(){if(te){var t=te,i=pe;if(pe=te=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function bt(t,i){return t(i)}function jt(){}var gt=!1;function Rn(t,i,o){if(gt)return t(i,o);gt=!0;try{return bt(t,i,o)}finally{gt=!1,(te!==null||pe!==null)&&(jt(),tt())}}function Sn(t,i){var o=t.stateNode;if(o===null)return null;var l=_a(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var es=!1;if(d)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){es=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{es=!1}function Si(t,i,o,l,c,p,M,D,B){var re=Array.prototype.slice.call(arguments,3);try{i.apply(o,re)}catch(Me){this.onError(Me)}}var Mi=!1,wr=null,Tr=!1,Wi=null,$o={onError:function(t){Mi=!0,wr=t}};function ts(t,i,o,l,c,p,M,D,B){Mi=!1,wr=null,Si.apply($o,arguments)}function Ko(t,i,o,l,c,p,M,D,B){if(ts.apply(this,arguments),Mi){if(Mi){var re=wr;Mi=!1,wr=null}else throw Error(n(198));Tr||(Tr=!0,Wi=re)}}function hi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Zo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Qo(t){if(hi(t)!==t)throw Error(n(188))}function Yl(t){var i=t.alternate;if(!i){if(i=hi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var p=c.alternate;if(p===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===p.child){for(p=c.child;p;){if(p===o)return Qo(c),t;if(p===l)return Qo(c),i;p=p.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=p;else{for(var M=!1,D=c.child;D;){if(D===o){M=!0,o=c,l=p;break}if(D===l){M=!0,l=c,o=p;break}D=D.sibling}if(!M){for(D=p.child;D;){if(D===o){M=!0,o=p,l=c;break}if(D===l){M=!0,l=p,o=c;break}D=D.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Jo(t){return t=Yl(t),t!==null?ea(t):null}function ea(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ea(t);if(i!==null)return i;t=t.sibling}return null}var ta=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,j=e.unstable_shouldYield,ie=e.unstable_requestPaint,Z=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Ae=e.unstable_ImmediatePriority,Oe=e.unstable_UserBlockingPriority,ze=e.unstable_NormalPriority,We=e.unstable_LowPriority,st=e.unstable_IdlePriority,rt=null,$e=null;function xt(t){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(rt,t,void 0,(t.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:yt,Vt=Math.log,Ot=Math.LN2;function yt(t){return t>>>=0,t===0?32:31-(Vt(t)/Ot|0)|0}var et=64,Gt=4194304;function _t(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hn(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,p=t.pingedLanes,M=o&268435455;if(M!==0){var D=M&~c;D!==0?l=_t(D):(p&=M,p!==0&&(l=_t(p)))}else M=o&~c,M!==0?l=_t(M):p!==0&&(l=_t(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,p=i&-i,c>=p||c===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-ft(i),c=1<<o,l|=t[o],i&=~c;return l}function Xi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-ft(p),D=1<<M,B=c[M];B===-1?((D&o)===0||(D&l)!==0)&&(c[M]=Xi(D,i)):B<=i&&(t.expiredLanes|=D),p&=~D}}function Ei(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Dt(){var t=et;return et<<=1,(et&4194240)===0&&(et=64),t}function pn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function en(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ft(i),t[i]=o}function un(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-ft(o),p=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~p}}function tn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-ft(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var St=0;function pi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var fd,ql,dd,hd,pd,$l=!1,na=[],ji=null,Yi=null,qi=null,eo=new Map,to=new Map,$i=[],Dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(t,i){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":eo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(i.pointerId)}}function no(t,i,o,l,c,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[c]},i!==null&&(i=_o(i),i!==null&&ql(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function Ig(t,i,o,l,c){switch(i){case"focusin":return ji=no(ji,t,i,o,l,c),!0;case"dragenter":return Yi=no(Yi,t,i,o,l,c),!0;case"mouseover":return qi=no(qi,t,i,o,l,c),!0;case"pointerover":var p=c.pointerId;return eo.set(p,no(eo.get(p)||null,t,i,o,l,c)),!0;case"gotpointercapture":return p=c.pointerId,to.set(p,no(to.get(p)||null,t,i,o,l,c)),!0}return!1}function gd(t){var i=Ar(t.target);if(i!==null){var o=hi(i);if(o!==null){if(i=o.tag,i===13){if(i=Zo(o),i!==null){t.blockedOn=i,pd(t.priority,function(){dd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ia(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Zl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);ot=l,o.target.dispatchEvent(l),ot=null}else return i=_o(o),i!==null&&ql(i),t.blockedOn=o,!1;i.shift()}return!0}function _d(t,i,o){ia(t)&&o.delete(i)}function Ug(){$l=!1,ji!==null&&ia(ji)&&(ji=null),Yi!==null&&ia(Yi)&&(Yi=null),qi!==null&&ia(qi)&&(qi=null),eo.forEach(_d),to.forEach(_d)}function io(t,i){t.blockedOn===i&&(t.blockedOn=null,$l||($l=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ug)))}function ro(t){function i(c){return io(c,t)}if(0<na.length){io(na[0],t);for(var o=1;o<na.length;o++){var l=na[o];l.blockedOn===t&&(l.blockedOn=null)}}for(ji!==null&&io(ji,t),Yi!==null&&io(Yi,t),qi!==null&&io(qi,t),eo.forEach(i),to.forEach(i),o=0;o<$i.length;o++)l=$i[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<$i.length&&(o=$i[0],o.blockedOn===null);)gd(o),o.blockedOn===null&&$i.shift()}var ns=C.ReactCurrentBatchConfig,ra=!0;function Ng(t,i,o,l){var c=St,p=ns.transition;ns.transition=null;try{St=1,Kl(t,i,o,l)}finally{St=c,ns.transition=p}}function Fg(t,i,o,l){var c=St,p=ns.transition;ns.transition=null;try{St=4,Kl(t,i,o,l)}finally{St=c,ns.transition=p}}function Kl(t,i,o,l){if(ra){var c=Zl(t,i,o,l);if(c===null)pu(t,i,l,sa,o),md(t,l);else if(Ig(c,t,i,o,l))l.stopPropagation();else if(md(t,l),i&4&&-1<Dg.indexOf(t)){for(;c!==null;){var p=_o(c);if(p!==null&&fd(p),p=Zl(t,i,o,l),p===null&&pu(t,i,l,sa,o),p===c)break;c=p}c!==null&&l.stopPropagation()}else pu(t,i,l,null,o)}}var sa=null;function Zl(t,i,o,l){if(sa=null,t=V(l),t=Ar(t),t!==null)if(i=hi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Zo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return sa=t,null}function vd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Ae:return 1;case Oe:return 4;case ze:case We:return 16;case st:return 536870912;default:return 16}default:return 16}}var Ki=null,Ql=null,oa=null;function xd(){if(oa)return oa;var t,i=Ql,o=i.length,l,c="value"in Ki?Ki.value:Ki.textContent,p=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[p-l];l++);return oa=c.slice(t,1<l?1-l:void 0)}function aa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function la(){return!0}function yd(){return!1}function zn(t){function i(o,l,c,p,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?la:yd,this.isPropagationStopped=yd,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=zn(is),so=oe({},is,{view:0,detail:0}),Og=zn(so),eu,tu,oo,ua=oe({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(eu=t.screenX-oo.screenX,tu=t.screenY-oo.screenY):tu=eu=0,oo=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),Sd=zn(ua),kg=oe({},ua,{dataTransfer:0}),zg=zn(kg),Bg=oe({},so,{relatedTarget:0}),nu=zn(Bg),Hg=oe({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Vg=zn(Hg),Gg=oe({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wg=zn(Gg),Xg=oe({},is,{data:0}),Md=zn(Xg),jg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $g(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=qg[t])?!!i[t]:!1}function iu(){return $g}var Kg=oe({},so,{key:function(t){if(t.key){var i=jg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=aa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(t){return t.type==="keypress"?aa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?aa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zg=zn(Kg),Qg=oe({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ed=zn(Qg),Jg=oe({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),e0=zn(Jg),t0=oe({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),n0=zn(t0),i0=oe({},ua,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),r0=zn(i0),s0=[9,13,27,32],ru=d&&"CompositionEvent"in window,ao=null;d&&"documentMode"in document&&(ao=document.documentMode);var o0=d&&"TextEvent"in window&&!ao,wd=d&&(!ru||ao&&8<ao&&11>=ao),Td=" ",Ad=!1;function Rd(t,i){switch(t){case"keyup":return s0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function a0(t,i){switch(t){case"compositionend":return Cd(i);case"keypress":return i.which!==32?null:(Ad=!0,Td);case"textInput":return t=i.data,t===Td&&Ad?null:t;default:return null}}function l0(t,i){if(rs)return t==="compositionend"||!ru&&Rd(t,i)?(t=xd(),oa=Ql=Ki=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return wd&&i.locale!=="ko"?null:i.data;default:return null}}var u0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!u0[t.type]:i==="textarea"}function Pd(t,i,o,l){De(l),i=pa(i,"onChange"),0<i.length&&(o=new Jl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var lo=null,uo=null;function c0(t){qd(t,0)}function ca(t){var i=us(t);if(Rt(i))return t}function f0(t,i){if(t==="change")return i}var Ld=!1;if(d){var su;if(d){var ou="oninput"in document;if(!ou){var Dd=document.createElement("div");Dd.setAttribute("oninput","return;"),ou=typeof Dd.oninput=="function"}su=ou}else su=!1;Ld=su&&(!document.documentMode||9<document.documentMode)}function Id(){lo&&(lo.detachEvent("onpropertychange",Ud),uo=lo=null)}function Ud(t){if(t.propertyName==="value"&&ca(uo)){var i=[];Pd(i,uo,t,V(t)),Rn(c0,i)}}function d0(t,i,o){t==="focusin"?(Id(),lo=i,uo=o,lo.attachEvent("onpropertychange",Ud)):t==="focusout"&&Id()}function h0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ca(uo)}function p0(t,i){if(t==="click")return ca(i)}function m0(t,i){if(t==="input"||t==="change")return ca(i)}function g0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Jn=typeof Object.is=="function"?Object.is:g0;function co(t,i){if(Jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!h.call(i,c)||!Jn(t[c],i[c]))return!1}return!0}function Nd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fd(t,i){var o=Nd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Nd(o)}}function Od(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Od(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function kd(){for(var t=window,i=lt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=lt(t.document)}return i}function au(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function _0(t){var i=kd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Od(o.ownerDocument.documentElement,o)){if(l!==null&&au(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,p=Math.min(l.start,c);l=l.end===void 0?p:Math.min(l.end,c),!t.extend&&p>l&&(c=l,l=p,p=c),c=Fd(o,p);var M=Fd(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var v0=d&&"documentMode"in document&&11>=document.documentMode,ss=null,lu=null,fo=null,uu=!1;function zd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;uu||ss==null||ss!==lt(l)||(l=ss,"selectionStart"in l&&au(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fo&&co(fo,l)||(fo=l,l=pa(lu,"onSelect"),0<l.length&&(i=new Jl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=ss)))}function fa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var os={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},cu={},Bd={};d&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function da(t){if(cu[t])return cu[t];if(!os[t])return t;var i=os[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Bd)return cu[t]=i[o];return t}var Hd=da("animationend"),Vd=da("animationiteration"),Gd=da("animationstart"),Wd=da("transitionend"),Xd=new Map,jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,i){Xd.set(t,i),u(i,[t])}for(var fu=0;fu<jd.length;fu++){var du=jd[fu],x0=du.toLowerCase(),y0=du[0].toUpperCase()+du.slice(1);Zi(x0,"on"+y0)}Zi(Hd,"onAnimationEnd"),Zi(Vd,"onAnimationIteration"),Zi(Gd,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(Wd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function Yd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Ko(l,i,void 0,t),t.currentTarget=null}function qd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],B=D.instance,re=D.currentTarget;if(D=D.listener,B!==p&&c.isPropagationStopped())break e;Yd(c,D,re),p=B}else for(M=0;M<l.length;M++){if(D=l[M],B=D.instance,re=D.currentTarget,D=D.listener,B!==p&&c.isPropagationStopped())break e;Yd(c,D,re),p=B}}}if(Tr)throw t=Wi,Tr=!1,Wi=null,t}function Nt(t,i){var o=i[yu];o===void 0&&(o=i[yu]=new Set);var l=t+"__bubble";o.has(l)||($d(i,t,2,!1),o.add(l))}function hu(t,i,o){var l=0;i&&(l|=4),$d(o,t,l,i)}var ha="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[ha]){t[ha]=!0,r.forEach(function(o){o!=="selectionchange"&&(S0.has(o)||hu(o,!1,t),hu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ha]||(i[ha]=!0,hu("selectionchange",!1,i))}}function $d(t,i,o,l){switch(vd(i)){case 1:var c=Ng;break;case 4:c=Fg;break;default:c=Kl}o=c.bind(null,i,o,t),c=void 0,!es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function pu(t,i,o,l,c){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===c||B.nodeType===8&&B.parentNode===c))return;M=M.return}for(;D!==null;){if(M=Ar(D),M===null)return;if(B=M.tag,B===5||B===6){l=p=M;continue e}D=D.parentNode}}l=l.return}Rn(function(){var re=p,Me=V(o),Te=[];e:{var Se=Xd.get(t);if(Se!==void 0){var Be=Jl,je=t;switch(t){case"keypress":if(aa(o)===0)break e;case"keydown":case"keyup":Be=Zg;break;case"focusin":je="focus",Be=nu;break;case"focusout":je="blur",Be=nu;break;case"beforeblur":case"afterblur":Be=nu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=zg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=e0;break;case Hd:case Vd:case Gd:Be=Vg;break;case Wd:Be=n0;break;case"scroll":Be=Og;break;case"wheel":Be=r0;break;case"copy":case"cut":case"paste":Be=Wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Ed}var Ke=(i&4)!==0,Yt=!Ke&&t==="scroll",K=Ke?Se!==null?Se+"Capture":null:Se;Ke=[];for(var G=re,ee;G!==null;){ee=G;var Ce=ee.stateNode;if(ee.tag===5&&Ce!==null&&(ee=Ce,K!==null&&(Ce=Sn(G,K),Ce!=null&&Ke.push(mo(G,Ce,ee)))),Yt)break;G=G.return}0<Ke.length&&(Se=new Be(Se,je,null,o,Me),Te.push({event:Se,listeners:Ke}))}}if((i&7)===0){e:{if(Se=t==="mouseover"||t==="pointerover",Be=t==="mouseout"||t==="pointerout",Se&&o!==ot&&(je=o.relatedTarget||o.fromElement)&&(Ar(je)||je[wi]))break e;if((Be||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,Be?(je=o.relatedTarget||o.toElement,Be=re,je=je?Ar(je):null,je!==null&&(Yt=hi(je),je!==Yt||je.tag!==5&&je.tag!==6)&&(je=null)):(Be=null,je=re),Be!==je)){if(Ke=Sd,Ce="onMouseLeave",K="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Ke=Ed,Ce="onPointerLeave",K="onPointerEnter",G="pointer"),Yt=Be==null?Se:us(Be),ee=je==null?Se:us(je),Se=new Ke(Ce,G+"leave",Be,o,Me),Se.target=Yt,Se.relatedTarget=ee,Ce=null,Ar(Me)===re&&(Ke=new Ke(K,G+"enter",je,o,Me),Ke.target=ee,Ke.relatedTarget=Yt,Ce=Ke),Yt=Ce,Be&&je)t:{for(Ke=Be,K=je,G=0,ee=Ke;ee;ee=as(ee))G++;for(ee=0,Ce=K;Ce;Ce=as(Ce))ee++;for(;0<G-ee;)Ke=as(Ke),G--;for(;0<ee-G;)K=as(K),ee--;for(;G--;){if(Ke===K||K!==null&&Ke===K.alternate)break t;Ke=as(Ke),K=as(K)}Ke=null}else Ke=null;Be!==null&&Kd(Te,Se,Be,Ke,!1),je!==null&&Yt!==null&&Kd(Te,Yt,je,Ke,!0)}}e:{if(Se=re?us(re):window,Be=Se.nodeName&&Se.nodeName.toLowerCase(),Be==="select"||Be==="input"&&Se.type==="file")var Qe=f0;else if(bd(Se))if(Ld)Qe=m0;else{Qe=h0;var nt=d0}else(Be=Se.nodeName)&&Be.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Qe=p0);if(Qe&&(Qe=Qe(t,re))){Pd(Te,Qe,o,Me);break e}nt&&nt(t,Se,re),t==="focusout"&&(nt=Se._wrapperState)&&nt.controlled&&Se.type==="number"&&wt(Se,"number",Se.value)}switch(nt=re?us(re):window,t){case"focusin":(bd(nt)||nt.contentEditable==="true")&&(ss=nt,lu=re,fo=null);break;case"focusout":fo=lu=ss=null;break;case"mousedown":uu=!0;break;case"contextmenu":case"mouseup":case"dragend":uu=!1,zd(Te,o,Me);break;case"selectionchange":if(v0)break;case"keydown":case"keyup":zd(Te,o,Me)}var it;if(ru)e:{switch(t){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else rs?Rd(t,o)&&(at="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(at="onCompositionStart");at&&(wd&&o.locale!=="ko"&&(rs||at!=="onCompositionStart"?at==="onCompositionEnd"&&rs&&(it=xd()):(Ki=Me,Ql="value"in Ki?Ki.value:Ki.textContent,rs=!0)),nt=pa(re,at),0<nt.length&&(at=new Md(at,t,null,o,Me),Te.push({event:at,listeners:nt}),it?at.data=it:(it=Cd(o),it!==null&&(at.data=it)))),(it=o0?a0(t,o):l0(t,o))&&(re=pa(re,"onBeforeInput"),0<re.length&&(Me=new Md("onBeforeInput","beforeinput",null,o,Me),Te.push({event:Me,listeners:re}),Me.data=it))}qd(Te,i)})}function mo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function pa(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,p=c.stateNode;c.tag===5&&p!==null&&(c=p,p=Sn(t,o),p!=null&&l.unshift(mo(t,p,c)),p=Sn(t,i),p!=null&&l.push(mo(t,p,c))),t=t.return}return l}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kd(t,i,o,l,c){for(var p=i._reactName,M=[];o!==null&&o!==l;){var D=o,B=D.alternate,re=D.stateNode;if(B!==null&&B===l)break;D.tag===5&&re!==null&&(D=re,c?(B=Sn(o,p),B!=null&&M.unshift(mo(o,B,D))):c||(B=Sn(o,p),B!=null&&M.push(mo(o,B,D)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var M0=/\r\n?/g,E0=/\u0000|\uFFFD/g;function Zd(t){return(typeof t=="string"?t:""+t).replace(M0,`
`).replace(E0,"")}function ma(t,i,o){if(i=Zd(i),Zd(t)!==i&&o)throw Error(n(425))}function ga(){}var mu=null,gu=null;function _u(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var vu=typeof setTimeout=="function"?setTimeout:void 0,w0=typeof clearTimeout=="function"?clearTimeout:void 0,Qd=typeof Promise=="function"?Promise:void 0,T0=typeof queueMicrotask=="function"?queueMicrotask:typeof Qd<"u"?function(t){return Qd.resolve(null).then(t).catch(A0)}:vu;function A0(t){setTimeout(function(){throw t})}function xu(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),ro(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);ro(i)}function Qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Jd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),mi="__reactFiber$"+ls,go="__reactProps$"+ls,wi="__reactContainer$"+ls,yu="__reactEvents$"+ls,R0="__reactListeners$"+ls,C0="__reactHandles$"+ls;function Ar(t){var i=t[mi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[wi]||o[mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Jd(t);t!==null;){if(o=t[mi])return o;t=Jd(t)}return i}t=o,o=t.parentNode}return null}function _o(t){return t=t[mi]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function _a(t){return t[go]||null}var Su=[],cs=-1;function Ji(t){return{current:t}}function Ft(t){0>cs||(t.current=Su[cs],Su[cs]=null,cs--)}function It(t,i){cs++,Su[cs]=t.current,t.current=i}var er={},mn=Ji(er),Cn=Ji(!1),Rr=er;function fs(t,i){var o=t.type.contextTypes;if(!o)return er;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},p;for(p in o)c[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function bn(t){return t=t.childContextTypes,t!=null}function va(){Ft(Cn),Ft(mn)}function eh(t,i,o){if(mn.current!==er)throw Error(n(168));It(mn,i),It(Cn,o)}function th(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,_e(t)||"Unknown",c));return oe({},o,l)}function xa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Rr=mn.current,It(mn,t),It(Cn,Cn.current),!0}function nh(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=th(t,i,Rr),l.__reactInternalMemoizedMergedChildContext=t,Ft(Cn),Ft(mn),It(mn,t)):Ft(Cn),It(Cn,o)}var Ti=null,ya=!1,Mu=!1;function ih(t){Ti===null?Ti=[t]:Ti.push(t)}function b0(t){ya=!0,ih(t)}function tr(){if(!Mu&&Ti!==null){Mu=!0;var t=0,i=St;try{var o=Ti;for(St=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ti=null,ya=!1}catch(c){throw Ti!==null&&(Ti=Ti.slice(t+1)),ta(Ae,tr),c}finally{St=i,Mu=!1}}return null}var ds=[],hs=0,Sa=null,Ma=0,Xn=[],jn=0,Cr=null,Ai=1,Ri="";function br(t,i){ds[hs++]=Ma,ds[hs++]=Sa,Sa=t,Ma=i}function rh(t,i,o){Xn[jn++]=Ai,Xn[jn++]=Ri,Xn[jn++]=Cr,Cr=t;var l=Ai;t=Ri;var c=32-ft(l)-1;l&=~(1<<c),o+=1;var p=32-ft(i)+c;if(30<p){var M=c-c%5;p=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Ai=1<<32-ft(i)+c|o<<c|l,Ri=p+t}else Ai=1<<p|o<<c|l,Ri=t}function Eu(t){t.return!==null&&(br(t,1),rh(t,1,0))}function wu(t){for(;t===Sa;)Sa=ds[--hs],ds[hs]=null,Ma=ds[--hs],ds[hs]=null;for(;t===Cr;)Cr=Xn[--jn],Xn[jn]=null,Ri=Xn[--jn],Xn[jn]=null,Ai=Xn[--jn],Xn[jn]=null}var Bn=null,Hn=null,kt=!1,ei=null;function sh(t,i){var o=Kn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function oh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Bn=t,Hn=Qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Bn=t,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Cr!==null?{id:Ai,overflow:Ri}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Kn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Bn=t,Hn=null,!0):!1;default:return!1}}function Tu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Au(t){if(kt){var i=Hn;if(i){var o=i;if(!oh(t,i)){if(Tu(t))throw Error(n(418));i=Qi(o.nextSibling);var l=Bn;i&&oh(t,i)?sh(l,o):(t.flags=t.flags&-4097|2,kt=!1,Bn=t)}}else{if(Tu(t))throw Error(n(418));t.flags=t.flags&-4097|2,kt=!1,Bn=t}}}function ah(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bn=t}function Ea(t){if(t!==Bn)return!1;if(!kt)return ah(t),kt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!_u(t.type,t.memoizedProps)),i&&(i=Hn)){if(Tu(t))throw lh(),Error(n(418));for(;i;)sh(t,i),i=Qi(i.nextSibling)}if(ah(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Hn=Qi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Hn=null}}else Hn=Bn?Qi(t.stateNode.nextSibling):null;return!0}function lh(){for(var t=Hn;t;)t=Qi(t.nextSibling)}function ps(){Hn=Bn=null,kt=!1}function Ru(t){ei===null?ei=[t]:ei.push(t)}var P0=C.ReactCurrentBatchConfig;function vo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var D=c.refs;M===null?delete D[p]:D[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function wa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function uh(t){var i=t._init;return i(t._payload)}function ch(t){function i(K,G){if(t){var ee=K.deletions;ee===null?(K.deletions=[G],K.flags|=16):ee.push(G)}}function o(K,G){if(!t)return null;for(;G!==null;)i(K,G),G=G.sibling;return null}function l(K,G){for(K=new Map;G!==null;)G.key!==null?K.set(G.key,G):K.set(G.index,G),G=G.sibling;return K}function c(K,G){return K=ur(K,G),K.index=0,K.sibling=null,K}function p(K,G,ee){return K.index=ee,t?(ee=K.alternate,ee!==null?(ee=ee.index,ee<G?(K.flags|=2,G):ee):(K.flags|=2,G)):(K.flags|=1048576,G)}function M(K){return t&&K.alternate===null&&(K.flags|=2),K}function D(K,G,ee,Ce){return G===null||G.tag!==6?(G=vc(ee,K.mode,Ce),G.return=K,G):(G=c(G,ee),G.return=K,G)}function B(K,G,ee,Ce){var Qe=ee.type;return Qe===N?Me(K,G,ee.props.children,Ce,ee.key):G!==null&&(G.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===se&&uh(Qe)===G.type)?(Ce=c(G,ee.props),Ce.ref=vo(K,G,ee),Ce.return=K,Ce):(Ce=qa(ee.type,ee.key,ee.props,null,K.mode,Ce),Ce.ref=vo(K,G,ee),Ce.return=K,Ce)}function re(K,G,ee,Ce){return G===null||G.tag!==4||G.stateNode.containerInfo!==ee.containerInfo||G.stateNode.implementation!==ee.implementation?(G=xc(ee,K.mode,Ce),G.return=K,G):(G=c(G,ee.children||[]),G.return=K,G)}function Me(K,G,ee,Ce,Qe){return G===null||G.tag!==7?(G=Or(ee,K.mode,Ce,Qe),G.return=K,G):(G=c(G,ee),G.return=K,G)}function Te(K,G,ee){if(typeof G=="string"&&G!==""||typeof G=="number")return G=vc(""+G,K.mode,ee),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case W:return ee=qa(G.type,G.key,G.props,null,K.mode,ee),ee.ref=vo(K,null,G),ee.return=K,ee;case O:return G=xc(G,K.mode,ee),G.return=K,G;case se:var Ce=G._init;return Te(K,Ce(G._payload),ee)}if(Ye(G)||ce(G))return G=Or(G,K.mode,ee,null),G.return=K,G;wa(K,G)}return null}function Se(K,G,ee,Ce){var Qe=G!==null?G.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Qe!==null?null:D(K,G,""+ee,Ce);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case W:return ee.key===Qe?B(K,G,ee,Ce):null;case O:return ee.key===Qe?re(K,G,ee,Ce):null;case se:return Qe=ee._init,Se(K,G,Qe(ee._payload),Ce)}if(Ye(ee)||ce(ee))return Qe!==null?null:Me(K,G,ee,Ce,null);wa(K,ee)}return null}function Be(K,G,ee,Ce,Qe){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return K=K.get(ee)||null,D(G,K,""+Ce,Qe);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case W:return K=K.get(Ce.key===null?ee:Ce.key)||null,B(G,K,Ce,Qe);case O:return K=K.get(Ce.key===null?ee:Ce.key)||null,re(G,K,Ce,Qe);case se:var nt=Ce._init;return Be(K,G,ee,nt(Ce._payload),Qe)}if(Ye(Ce)||ce(Ce))return K=K.get(ee)||null,Me(G,K,Ce,Qe,null);wa(G,Ce)}return null}function je(K,G,ee,Ce){for(var Qe=null,nt=null,it=G,at=G=0,sn=null;it!==null&&at<ee.length;at++){it.index>at?(sn=it,it=null):sn=it.sibling;var Tt=Se(K,it,ee[at],Ce);if(Tt===null){it===null&&(it=sn);break}t&&it&&Tt.alternate===null&&i(K,it),G=p(Tt,G,at),nt===null?Qe=Tt:nt.sibling=Tt,nt=Tt,it=sn}if(at===ee.length)return o(K,it),kt&&br(K,at),Qe;if(it===null){for(;at<ee.length;at++)it=Te(K,ee[at],Ce),it!==null&&(G=p(it,G,at),nt===null?Qe=it:nt.sibling=it,nt=it);return kt&&br(K,at),Qe}for(it=l(K,it);at<ee.length;at++)sn=Be(it,K,at,ee[at],Ce),sn!==null&&(t&&sn.alternate!==null&&it.delete(sn.key===null?at:sn.key),G=p(sn,G,at),nt===null?Qe=sn:nt.sibling=sn,nt=sn);return t&&it.forEach(function(cr){return i(K,cr)}),kt&&br(K,at),Qe}function Ke(K,G,ee,Ce){var Qe=ce(ee);if(typeof Qe!="function")throw Error(n(150));if(ee=Qe.call(ee),ee==null)throw Error(n(151));for(var nt=Qe=null,it=G,at=G=0,sn=null,Tt=ee.next();it!==null&&!Tt.done;at++,Tt=ee.next()){it.index>at?(sn=it,it=null):sn=it.sibling;var cr=Se(K,it,Tt.value,Ce);if(cr===null){it===null&&(it=sn);break}t&&it&&cr.alternate===null&&i(K,it),G=p(cr,G,at),nt===null?Qe=cr:nt.sibling=cr,nt=cr,it=sn}if(Tt.done)return o(K,it),kt&&br(K,at),Qe;if(it===null){for(;!Tt.done;at++,Tt=ee.next())Tt=Te(K,Tt.value,Ce),Tt!==null&&(G=p(Tt,G,at),nt===null?Qe=Tt:nt.sibling=Tt,nt=Tt);return kt&&br(K,at),Qe}for(it=l(K,it);!Tt.done;at++,Tt=ee.next())Tt=Be(it,K,at,Tt.value,Ce),Tt!==null&&(t&&Tt.alternate!==null&&it.delete(Tt.key===null?at:Tt.key),G=p(Tt,G,at),nt===null?Qe=Tt:nt.sibling=Tt,nt=Tt);return t&&it.forEach(function(u_){return i(K,u_)}),kt&&br(K,at),Qe}function Yt(K,G,ee,Ce){if(typeof ee=="object"&&ee!==null&&ee.type===N&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case W:e:{for(var Qe=ee.key,nt=G;nt!==null;){if(nt.key===Qe){if(Qe=ee.type,Qe===N){if(nt.tag===7){o(K,nt.sibling),G=c(nt,ee.props.children),G.return=K,K=G;break e}}else if(nt.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===se&&uh(Qe)===nt.type){o(K,nt.sibling),G=c(nt,ee.props),G.ref=vo(K,nt,ee),G.return=K,K=G;break e}o(K,nt);break}else i(K,nt);nt=nt.sibling}ee.type===N?(G=Or(ee.props.children,K.mode,Ce,ee.key),G.return=K,K=G):(Ce=qa(ee.type,ee.key,ee.props,null,K.mode,Ce),Ce.ref=vo(K,G,ee),Ce.return=K,K=Ce)}return M(K);case O:e:{for(nt=ee.key;G!==null;){if(G.key===nt)if(G.tag===4&&G.stateNode.containerInfo===ee.containerInfo&&G.stateNode.implementation===ee.implementation){o(K,G.sibling),G=c(G,ee.children||[]),G.return=K,K=G;break e}else{o(K,G);break}else i(K,G);G=G.sibling}G=xc(ee,K.mode,Ce),G.return=K,K=G}return M(K);case se:return nt=ee._init,Yt(K,G,nt(ee._payload),Ce)}if(Ye(ee))return je(K,G,ee,Ce);if(ce(ee))return Ke(K,G,ee,Ce);wa(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,G!==null&&G.tag===6?(o(K,G.sibling),G=c(G,ee),G.return=K,K=G):(o(K,G),G=vc(ee,K.mode,Ce),G.return=K,K=G),M(K)):o(K,G)}return Yt}var ms=ch(!0),fh=ch(!1),Ta=Ji(null),Aa=null,gs=null,Cu=null;function bu(){Cu=gs=Aa=null}function Pu(t){var i=Ta.current;Ft(Ta),t._currentValue=i}function Lu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function _s(t,i){Aa=t,Cu=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Pn=!0),t.firstContext=null)}function Yn(t){var i=t._currentValue;if(Cu!==t)if(t={context:t,memoizedValue:i,next:null},gs===null){if(Aa===null)throw Error(n(308));gs=t,Aa.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return i}var Pr=null;function Du(t){Pr===null?Pr=[t]:Pr.push(t)}function dh(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,Du(i)):(o.next=c.next,c.next=o),i.interleaved=o,Ci(t,l)}function Ci(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var nr=!1;function Iu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ir(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Mt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ci(t,o)}return c=l.interleaved,c===null?(i.next=i,Du(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ci(t,o)}function Ra(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,tn(t,o)}}function ph(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?c=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?c=p=i:p=p.next=i}else c=p=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ca(t,i,o,l){var c=t.updateQueue;nr=!1;var p=c.firstBaseUpdate,M=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var B=D,re=B.next;B.next=null,M===null?p=re:M.next=re,M=B;var Me=t.alternate;Me!==null&&(Me=Me.updateQueue,D=Me.lastBaseUpdate,D!==M&&(D===null?Me.firstBaseUpdate=re:D.next=re,Me.lastBaseUpdate=B))}if(p!==null){var Te=c.baseState;M=0,Me=re=B=null,D=p;do{var Se=D.lane,Be=D.eventTime;if((l&Se)===Se){Me!==null&&(Me=Me.next={eventTime:Be,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var je=t,Ke=D;switch(Se=i,Be=o,Ke.tag){case 1:if(je=Ke.payload,typeof je=="function"){Te=je.call(Be,Te,Se);break e}Te=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ke.payload,Se=typeof je=="function"?je.call(Be,Te,Se):je,Se==null)break e;Te=oe({},Te,Se);break e;case 2:nr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,Se=c.effects,Se===null?c.effects=[D]:Se.push(D))}else Be={eventTime:Be,lane:Se,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Me===null?(re=Me=Be,B=Te):Me=Me.next=Be,M|=Se;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;Se=D,D=Se.next,Se.next=null,c.lastBaseUpdate=Se,c.shared.pending=null}}while(!0);if(Me===null&&(B=Te),c.baseState=B,c.firstBaseUpdate=re,c.lastBaseUpdate=Me,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else p===null&&(c.shared.lanes=0);Ir|=M,t.lanes=M,t.memoizedState=Te}}function mh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var xo={},gi=Ji(xo),yo=Ji(xo),So=Ji(xo);function Lr(t){if(t===xo)throw Error(n(174));return t}function Uu(t,i){switch(It(So,i),It(yo,t),It(gi,xo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:qe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=qe(i,t)}Ft(gi),It(gi,i)}function vs(){Ft(gi),Ft(yo),Ft(So)}function gh(t){Lr(So.current);var i=Lr(gi.current),o=qe(i,t.type);i!==o&&(It(yo,t),It(gi,o))}function Nu(t){yo.current===t&&(Ft(gi),Ft(yo))}var Bt=Ji(0);function ba(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Fu=[];function Ou(){for(var t=0;t<Fu.length;t++)Fu[t]._workInProgressVersionPrimary=null;Fu.length=0}var Pa=C.ReactCurrentDispatcher,ku=C.ReactCurrentBatchConfig,Dr=0,Ht=null,Kt=null,nn=null,La=!1,Mo=!1,Eo=0,L0=0;function gn(){throw Error(n(321))}function zu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Jn(t[o],i[o]))return!1;return!0}function Bu(t,i,o,l,c,p){if(Dr=p,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Pa.current=t===null||t.memoizedState===null?N0:F0,t=o(l,c),Mo){p=0;do{if(Mo=!1,Eo=0,25<=p)throw Error(n(301));p+=1,nn=Kt=null,i.updateQueue=null,Pa.current=O0,t=o(l,c)}while(Mo)}if(Pa.current=Ua,i=Kt!==null&&Kt.next!==null,Dr=0,nn=Kt=Ht=null,La=!1,i)throw Error(n(300));return t}function Hu(){var t=Eo!==0;return Eo=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Ht.memoizedState=nn=t:nn=nn.next=t,nn}function qn(){if(Kt===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=nn===null?Ht.memoizedState:nn.next;if(i!==null)nn=i,Kt=t;else{if(t===null)throw Error(n(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},nn===null?Ht.memoizedState=nn=t:nn=nn.next=t}return nn}function wo(t,i){return typeof i=="function"?i(t):i}function Vu(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Kt,c=l.baseQueue,p=o.pending;if(p!==null){if(c!==null){var M=c.next;c.next=p.next,p.next=M}l.baseQueue=c=p,o.pending=null}if(c!==null){p=c.next,l=l.baseState;var D=M=null,B=null,re=p;do{var Me=re.lane;if((Dr&Me)===Me)B!==null&&(B=B.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),l=re.hasEagerState?re.eagerState:t(l,re.action);else{var Te={lane:Me,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};B===null?(D=B=Te,M=l):B=B.next=Te,Ht.lanes|=Me,Ir|=Me}re=re.next}while(re!==null&&re!==p);B===null?M=l:B.next=D,Jn(l,i.memoizedState)||(Pn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=B,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do p=c.lane,Ht.lanes|=p,Ir|=p,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Gu(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,p=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do p=t(p,M.action),M=M.next;while(M!==c);Jn(p,i.memoizedState)||(Pn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,l]}function _h(){}function vh(t,i){var o=Ht,l=qn(),c=i(),p=!Jn(l.memoizedState,c);if(p&&(l.memoizedState=c,Pn=!0),l=l.queue,Wu(Sh.bind(null,o,l,t),[t]),l.getSnapshot!==i||p||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,To(9,yh.bind(null,o,l,c,i),void 0,null),rn===null)throw Error(n(349));(Dr&30)!==0||xh(o,i,c)}return c}function xh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function yh(t,i,o,l){i.value=o,i.getSnapshot=l,Mh(i)&&Eh(t)}function Sh(t,i,o){return o(function(){Mh(i)&&Eh(t)})}function Mh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Jn(t,o)}catch{return!0}}function Eh(t){var i=Ci(t,1);i!==null&&ri(i,t,1,-1)}function wh(t){var i=_i();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},i.queue=t,t=t.dispatch=U0.bind(null,Ht,t),[i.memoizedState,t]}function To(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Th(){return qn().memoizedState}function Da(t,i,o,l){var c=_i();Ht.flags|=t,c.memoizedState=To(1|i,o,void 0,l===void 0?null:l)}function Ia(t,i,o,l){var c=qn();l=l===void 0?null:l;var p=void 0;if(Kt!==null){var M=Kt.memoizedState;if(p=M.destroy,l!==null&&zu(l,M.deps)){c.memoizedState=To(i,o,p,l);return}}Ht.flags|=t,c.memoizedState=To(1|i,o,p,l)}function Ah(t,i){return Da(8390656,8,t,i)}function Wu(t,i){return Ia(2048,8,t,i)}function Rh(t,i){return Ia(4,2,t,i)}function Ch(t,i){return Ia(4,4,t,i)}function bh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ph(t,i,o){return o=o!=null?o.concat([t]):null,Ia(4,4,bh.bind(null,i,t),o)}function Xu(){}function Lh(t,i){var o=qn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&zu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Dh(t,i){var o=qn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&zu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Ih(t,i,o){return(Dr&21)===0?(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=o):(Jn(o,i)||(o=Dt(),Ht.lanes|=o,Ir|=o,t.baseState=!0),i)}function D0(t,i){var o=St;St=o!==0&&4>o?o:4,t(!0);var l=ku.transition;ku.transition={};try{t(!1),i()}finally{St=o,ku.transition=l}}function Uh(){return qn().memoizedState}function I0(t,i,o){var l=ar(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Nh(t))Fh(i,o);else if(o=dh(t,i,o,l),o!==null){var c=wn();ri(o,t,l,c),Oh(o,i,l)}}function U0(t,i,o){var l=ar(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Nh(t))Fh(i,c);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,D=p(M,o);if(c.hasEagerState=!0,c.eagerState=D,Jn(D,M)){var B=i.interleaved;B===null?(c.next=c,Du(i)):(c.next=B.next,B.next=c),i.interleaved=c;return}}catch{}finally{}o=dh(t,i,c,l),o!==null&&(c=wn(),ri(o,t,l,c),Oh(o,i,l))}}function Nh(t){var i=t.alternate;return t===Ht||i!==null&&i===Ht}function Fh(t,i){Mo=La=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Oh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,tn(t,o)}}var Ua={readContext:Yn,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},N0={readContext:Yn,useCallback:function(t,i){return _i().memoizedState=[t,i===void 0?null:i],t},useContext:Yn,useEffect:Ah,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Da(4194308,4,bh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Da(4194308,4,t,i)},useInsertionEffect:function(t,i){return Da(4,2,t,i)},useMemo:function(t,i){var o=_i();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=_i();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=I0.bind(null,Ht,t),[l.memoizedState,t]},useRef:function(t){var i=_i();return t={current:t},i.memoizedState=t},useState:wh,useDebugValue:Xu,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=wh(!1),i=t[0];return t=D0.bind(null,t[1]),_i().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Ht,c=_i();if(kt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),rn===null)throw Error(n(349));(Dr&30)!==0||xh(l,i,o)}c.memoizedState=o;var p={value:o,getSnapshot:i};return c.queue=p,Ah(Sh.bind(null,l,p,t),[t]),l.flags|=2048,To(9,yh.bind(null,l,p,o,i),void 0,null),o},useId:function(){var t=_i(),i=rn.identifierPrefix;if(kt){var o=Ri,l=Ai;o=(l&~(1<<32-ft(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Eo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=L0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},F0={readContext:Yn,useCallback:Lh,useContext:Yn,useEffect:Wu,useImperativeHandle:Ph,useInsertionEffect:Rh,useLayoutEffect:Ch,useMemo:Dh,useReducer:Vu,useRef:Th,useState:function(){return Vu(wo)},useDebugValue:Xu,useDeferredValue:function(t){var i=qn();return Ih(i,Kt.memoizedState,t)},useTransition:function(){var t=Vu(wo)[0],i=qn().memoizedState;return[t,i]},useMutableSource:_h,useSyncExternalStore:vh,useId:Uh,unstable_isNewReconciler:!1},O0={readContext:Yn,useCallback:Lh,useContext:Yn,useEffect:Wu,useImperativeHandle:Ph,useInsertionEffect:Rh,useLayoutEffect:Ch,useMemo:Dh,useReducer:Gu,useRef:Th,useState:function(){return Gu(wo)},useDebugValue:Xu,useDeferredValue:function(t){var i=qn();return Kt===null?i.memoizedState=t:Ih(i,Kt.memoizedState,t)},useTransition:function(){var t=Gu(wo)[0],i=qn().memoizedState;return[t,i]},useMutableSource:_h,useSyncExternalStore:vh,useId:Uh,unstable_isNewReconciler:!1};function ti(t,i){if(t&&t.defaultProps){i=oe({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function ju(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:oe({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Na={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=wn(),c=ar(t),p=bi(l,c);p.payload=i,o!=null&&(p.callback=o),i=ir(t,p,c),i!==null&&(ri(i,t,c,l),Ra(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=wn(),c=ar(t),p=bi(l,c);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=ir(t,p,c),i!==null&&(ri(i,t,c,l),Ra(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=wn(),l=ar(t),c=bi(o,l);c.tag=2,i!=null&&(c.callback=i),i=ir(t,c,l),i!==null&&(ri(i,t,l,o),Ra(i,t,l))}};function kh(t,i,o,l,c,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!co(o,l)||!co(c,p):!0}function zh(t,i,o){var l=!1,c=er,p=i.contextType;return typeof p=="object"&&p!==null?p=Yn(p):(c=bn(i)?Rr:mn.current,l=i.contextTypes,p=(l=l!=null)?fs(t,c):er),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Na,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=p),i}function Bh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Na.enqueueReplaceState(i,i.state,null)}function Yu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Iu(t);var p=i.contextType;typeof p=="object"&&p!==null?c.context=Yn(p):(p=bn(i)?Rr:mn.current,c.context=fs(t,p)),c.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(ju(t,i,p,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Na.enqueueReplaceState(c,c.state,null),Ca(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,i){try{var o="",l=i;do o+=fe(l),l=l.return;while(l);var c=o}catch(p){c=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:c,digest:null}}function qu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function $u(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var k0=typeof WeakMap=="function"?WeakMap:Map;function Hh(t,i,o){o=bi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Va||(Va=!0,cc=l),$u(t,i)},o}function Vh(t,i,o){o=bi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){$u(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){$u(t,i),typeof l!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Gh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new k0;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=Q0.bind(null,t,i,o),i.then(t,t))}function Wh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Xh(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=bi(-1,1),i.tag=2,ir(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var z0=C.ReactCurrentOwner,Pn=!1;function En(t,i,o,l){i.child=t===null?fh(i,null,o,l):ms(i,t.child,o,l)}function jh(t,i,o,l,c){o=o.render;var p=i.ref;return _s(i,c),l=Bu(t,i,o,l,p,c),o=Hu(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Pi(t,i,c)):(kt&&o&&Eu(i),i.flags|=1,En(t,i,l,c),i.child)}function Yh(t,i,o,l,c){if(t===null){var p=o.type;return typeof p=="function"&&!_c(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,qh(t,i,p,l,c)):(t=qa(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&c)===0){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:co,o(M,l)&&t.ref===i.ref)return Pi(t,i,c)}return i.flags|=1,t=ur(p,l),t.ref=i.ref,t.return=i,i.child=t}function qh(t,i,o,l,c){if(t!==null){var p=t.memoizedProps;if(co(p,l)&&t.ref===i.ref)if(Pn=!1,i.pendingProps=l=p,(t.lanes&c)!==0)(t.flags&131072)!==0&&(Pn=!0);else return i.lanes=t.lanes,Pi(t,i,c)}return Ku(t,i,o,l,c)}function $h(t,i,o){var l=i.pendingProps,c=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Ss,Vn),Vn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,It(Ss,Vn),Vn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,It(Ss,Vn),Vn|=l}else p!==null?(l=p.baseLanes|o,i.memoizedState=null):l=o,It(Ss,Vn),Vn|=l;return En(t,i,c,o),i.child}function Kh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Ku(t,i,o,l,c){var p=bn(o)?Rr:mn.current;return p=fs(i,p),_s(i,c),o=Bu(t,i,o,l,p,c),l=Hu(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Pi(t,i,c)):(kt&&l&&Eu(i),i.flags|=1,En(t,i,o,c),i.child)}function Zh(t,i,o,l,c){if(bn(o)){var p=!0;xa(i)}else p=!1;if(_s(i,c),i.stateNode===null)Oa(t,i),zh(i,o,l),Yu(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var B=M.context,re=o.contextType;typeof re=="object"&&re!==null?re=Yn(re):(re=bn(o)?Rr:mn.current,re=fs(i,re));var Me=o.getDerivedStateFromProps,Te=typeof Me=="function"||typeof M.getSnapshotBeforeUpdate=="function";Te||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||B!==re)&&Bh(i,M,l,re),nr=!1;var Se=i.memoizedState;M.state=Se,Ca(i,l,M,c),B=i.memoizedState,D!==l||Se!==B||Cn.current||nr?(typeof Me=="function"&&(ju(i,o,Me,l),B=i.memoizedState),(D=nr||kh(i,o,D,l,Se,B,re))?(Te||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),M.props=l,M.state=B,M.context=re,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,hh(t,i),D=i.memoizedProps,re=i.type===i.elementType?D:ti(i.type,D),M.props=re,Te=i.pendingProps,Se=M.context,B=o.contextType,typeof B=="object"&&B!==null?B=Yn(B):(B=bn(o)?Rr:mn.current,B=fs(i,B));var Be=o.getDerivedStateFromProps;(Me=typeof Be=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==Te||Se!==B)&&Bh(i,M,l,B),nr=!1,Se=i.memoizedState,M.state=Se,Ca(i,l,M,c);var je=i.memoizedState;D!==Te||Se!==je||Cn.current||nr?(typeof Be=="function"&&(ju(i,o,Be,l),je=i.memoizedState),(re=nr||kh(i,o,re,l,Se,je,B)||!1)?(Me||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,je,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,je,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&Se===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&Se===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=je),M.props=l,M.state=je,M.context=B,l=re):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&Se===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&Se===t.memoizedState||(i.flags|=1024),l=!1)}return Zu(t,i,o,l,p,c)}function Zu(t,i,o,l,c,p){Kh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&nh(i,o,!1),Pi(t,i,p);l=i.stateNode,z0.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=ms(i,t.child,null,p),i.child=ms(i,null,D,p)):En(t,i,D,p),i.memoizedState=l.state,c&&nh(i,o,!0),i.child}function Qh(t){var i=t.stateNode;i.pendingContext?eh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&eh(t,i.context,!1),Uu(t,i.containerInfo)}function Jh(t,i,o,l,c){return ps(),Ru(c),i.flags|=256,En(t,i,o,l),i.child}var Qu={dehydrated:null,treeContext:null,retryLane:0};function Ju(t){return{baseLanes:t,cachePool:null,transitions:null}}function ep(t,i,o){var l=i.pendingProps,c=Bt.current,p=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(c&2)!==0),D?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),It(Bt,c&1),t===null)return Au(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=i.mode,p=i.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=$a(M,l,0,null),t=Or(t,l,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Ju(o),i.memoizedState=Qu,t):ec(i,M));if(c=t.memoizedState,c!==null&&(D=c.dehydrated,D!==null))return B0(t,i,M,l,D,c,o);if(p){p=l.fallback,M=i.mode,c=t.child,D=c.sibling;var B={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=ur(c,B),l.subtreeFlags=c.subtreeFlags&14680064),D!==null?p=ur(D,p):(p=Or(p,M,o,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,M=t.child.memoizedState,M=M===null?Ju(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~o,i.memoizedState=Qu,l}return p=t.child,t=p.sibling,l=ur(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function ec(t,i){return i=$a({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Fa(t,i,o,l){return l!==null&&Ru(l),ms(i,t.child,null,o),t=ec(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function B0(t,i,o,l,c,p,M){if(o)return i.flags&256?(i.flags&=-257,l=qu(Error(n(422))),Fa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,c=i.mode,l=$a({mode:"visible",children:l.children},c,0,null),p=Or(p,c,M,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&ms(i,t.child,null,M),i.child.memoizedState=Ju(M),i.memoizedState=Qu,p);if((i.mode&1)===0)return Fa(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var D=l.dgst;return l=D,p=Error(n(419)),l=qu(p,l,void 0),Fa(t,i,M,l)}if(D=(M&t.childLanes)!==0,Pn||D){if(l=rn,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==p.retryLane&&(p.retryLane=c,Ci(t,c),ri(l,t,c,-1))}return gc(),l=qu(Error(n(421))),Fa(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=J0.bind(null,t),c._reactRetry=i,null):(t=p.treeContext,Hn=Qi(c.nextSibling),Bn=i,kt=!0,ei=null,t!==null&&(Xn[jn++]=Ai,Xn[jn++]=Ri,Xn[jn++]=Cr,Ai=t.id,Ri=t.overflow,Cr=i),i=ec(i,l.children),i.flags|=4096,i)}function tp(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Lu(t.return,i,o)}function tc(t,i,o,l,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=c)}function np(t,i,o){var l=i.pendingProps,c=l.revealOrder,p=l.tail;if(En(t,i,l.children,o),l=Bt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tp(t,o,i);else if(t.tag===19)tp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(It(Bt,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&ba(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),tc(i,!1,c,o,p);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&ba(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}tc(i,!0,o,null,p);break;case"together":tc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Oa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Pi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Ir|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ur(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ur(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function H0(t,i,o){switch(i.tag){case 3:Qh(i),ps();break;case 5:gh(i);break;case 1:bn(i.type)&&xa(i);break;case 4:Uu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;It(Ta,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(It(Bt,Bt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?ep(t,i,o):(It(Bt,Bt.current&1),t=Pi(t,i,o),t!==null?t.sibling:null);It(Bt,Bt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return np(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),It(Bt,Bt.current),l)break;return null;case 22:case 23:return i.lanes=0,$h(t,i,o)}return Pi(t,i,o)}var ip,nc,rp,sp;ip=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},nc=function(){},rp=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Lr(gi.current);var p=null;switch(o){case"input":c=F(t,c),l=F(t,l),p=[];break;case"select":c=oe({},c,{value:void 0}),l=oe({},l,{value:void 0}),p=[];break;case"textarea":c=w(t,c),l=w(t,l),p=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ga)}Ze(o,l);var M;o=null;for(re in c)if(!l.hasOwnProperty(re)&&c.hasOwnProperty(re)&&c[re]!=null)if(re==="style"){var D=c[re];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(a.hasOwnProperty(re)?p||(p=[]):(p=p||[]).push(re,null));for(re in l){var B=l[re];if(D=c!=null?c[re]:void 0,l.hasOwnProperty(re)&&B!==D&&(B!=null||D!=null))if(re==="style")if(D){for(M in D)!D.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in B)B.hasOwnProperty(M)&&D[M]!==B[M]&&(o||(o={}),o[M]=B[M])}else o||(p||(p=[]),p.push(re,o)),o=B;else re==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,D=D?D.__html:void 0,B!=null&&D!==B&&(p=p||[]).push(re,B)):re==="children"?typeof B!="string"&&typeof B!="number"||(p=p||[]).push(re,""+B):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(a.hasOwnProperty(re)?(B!=null&&re==="onScroll"&&Nt("scroll",t),p||D===B||(p=[])):(p=p||[]).push(re,B))}o&&(p=p||[]).push("style",o);var re=p;(i.updateQueue=re)&&(i.flags|=4)}},sp=function(t,i,o,l){o!==l&&(i.flags|=4)};function Ao(t,i){if(!kt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function _n(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function V0(t,i,o){var l=i.pendingProps;switch(wu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(i),null;case 1:return bn(i.type)&&va(),_n(i),null;case 3:return l=i.stateNode,vs(),Ft(Cn),Ft(mn),Ou(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ea(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(hc(ei),ei=null))),nc(t,i),_n(i),null;case 5:Nu(i);var c=Lr(So.current);if(o=i.type,t!==null&&i.stateNode!=null)rp(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return _n(i),null}if(t=Lr(gi.current),Ea(i)){l=i.stateNode,o=i.type;var p=i.memoizedProps;switch(l[mi]=i,l[go]=p,t=(i.mode&1)!==0,o){case"dialog":Nt("cancel",l),Nt("close",l);break;case"iframe":case"object":case"embed":Nt("load",l);break;case"video":case"audio":for(c=0;c<ho.length;c++)Nt(ho[c],l);break;case"source":Nt("error",l);break;case"img":case"image":case"link":Nt("error",l),Nt("load",l);break;case"details":Nt("toggle",l);break;case"input":Xt(l,p),Nt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Nt("invalid",l);break;case"textarea":J(l,p),Nt("invalid",l)}Ze(o,p),c=null;for(var M in p)if(p.hasOwnProperty(M)){var D=p[M];M==="children"?typeof D=="string"?l.textContent!==D&&(p.suppressHydrationWarning!==!0&&ma(l.textContent,D,t),c=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&ma(l.textContent,D,t),c=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Nt("scroll",l)}switch(o){case"input":Ct(l),Je(l,p,!0);break;case"textarea":Ct(l),ve(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=ga)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=me(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[mi]=i,t[go]=l,ip(t,i,!1,!1),i.stateNode=t;e:{switch(M=Ue(o,l),o){case"dialog":Nt("cancel",t),Nt("close",t),c=l;break;case"iframe":case"object":case"embed":Nt("load",t),c=l;break;case"video":case"audio":for(c=0;c<ho.length;c++)Nt(ho[c],t);c=l;break;case"source":Nt("error",t),c=l;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),c=l;break;case"details":Nt("toggle",t),c=l;break;case"input":Xt(t,l),c=F(t,l),Nt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=oe({},l,{value:void 0}),Nt("invalid",t);break;case"textarea":J(t,l),c=w(t,l),Nt("invalid",t);break;default:c=l}Ze(o,c),D=c;for(p in D)if(D.hasOwnProperty(p)){var B=D[p];p==="style"?Fe(t,B):p==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ee(t,B)):p==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&Ve(t,B):typeof B=="number"&&Ve(t,""+B):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?B!=null&&p==="onScroll"&&Nt("scroll",t):B!=null&&L(t,p,B,M))}switch(o){case"input":Ct(t),Je(t,l,!1);break;case"textarea":Ct(t),ve(t);break;case"option":l.value!=null&&t.setAttribute("value",""+be(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?P(t,!!l.multiple,p,!1):l.defaultValue!=null&&P(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=ga)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return _n(i),null;case 6:if(t&&i.stateNode!=null)sp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Lr(So.current),Lr(gi.current),Ea(i)){if(l=i.stateNode,o=i.memoizedProps,l[mi]=i,(p=l.nodeValue!==o)&&(t=Bn,t!==null))switch(t.tag){case 3:ma(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ma(l.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[mi]=i,i.stateNode=l}return _n(i),null;case 13:if(Ft(Bt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&Hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)lh(),ps(),i.flags|=98560,p=!1;else if(p=Ea(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[mi]=i}else ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;_n(i),p=!1}else ei!==null&&(hc(ei),ei=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Bt.current&1)!==0?Zt===0&&(Zt=3):gc())),i.updateQueue!==null&&(i.flags|=4),_n(i),null);case 4:return vs(),nc(t,i),t===null&&po(i.stateNode.containerInfo),_n(i),null;case 10:return Pu(i.type._context),_n(i),null;case 17:return bn(i.type)&&va(),_n(i),null;case 19:if(Ft(Bt),p=i.memoizedState,p===null)return _n(i),null;if(l=(i.flags&128)!==0,M=p.rendering,M===null)if(l)Ao(p,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=ba(t),M!==null){for(i.flags|=128,Ao(p,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)p=o,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return It(Bt,Bt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Z()>Ms&&(i.flags|=128,l=!0,Ao(p,!1),i.lanes=4194304)}else{if(!l)if(t=ba(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ao(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!kt)return _n(i),null}else 2*Z()-p.renderingStartTime>Ms&&o!==1073741824&&(i.flags|=128,l=!0,Ao(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Z(),i.sibling=null,o=Bt.current,It(Bt,l?o&1|2:o&1),i):(_n(i),null);case 22:case 23:return mc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Vn&1073741824)!==0&&(_n(i),i.subtreeFlags&6&&(i.flags|=8192)):_n(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function G0(t,i){switch(wu(i),i.tag){case 1:return bn(i.type)&&va(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return vs(),Ft(Cn),Ft(mn),Ou(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Nu(i),null;case 13:if(Ft(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ps()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ft(Bt),null;case 4:return vs(),null;case 10:return Pu(i.type._context),null;case 22:case 23:return mc(),null;case 24:return null;default:return null}}var ka=!1,vn=!1,W0=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function ys(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Wt(t,i,l)}else o.current=null}function ic(t,i,o){try{o()}catch(l){Wt(t,i,l)}}var op=!1;function X0(t,i){if(mu=ra,t=kd(),au(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,D=-1,B=-1,re=0,Me=0,Te=t,Se=null;t:for(;;){for(var Be;Te!==o||c!==0&&Te.nodeType!==3||(D=M+c),Te!==p||l!==0&&Te.nodeType!==3||(B=M+l),Te.nodeType===3&&(M+=Te.nodeValue.length),(Be=Te.firstChild)!==null;)Se=Te,Te=Be;for(;;){if(Te===t)break t;if(Se===o&&++re===c&&(D=M),Se===p&&++Me===l&&(B=M),(Be=Te.nextSibling)!==null)break;Te=Se,Se=Te.parentNode}Te=Be}o=D===-1||B===-1?null:{start:D,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(gu={focusedElem:t,selectionRange:o},ra=!1,Ge=i;Ge!==null;)if(i=Ge,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ge=t;else for(;Ge!==null;){i=Ge;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ke=je.memoizedProps,Yt=je.memoizedState,K=i.stateNode,G=K.getSnapshotBeforeUpdate(i.elementType===i.type?Ke:ti(i.type,Ke),Yt);K.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ce){Wt(i,i.return,Ce)}if(t=i.sibling,t!==null){t.return=i.return,Ge=t;break}Ge=i.return}return je=op,op=!1,je}function Ro(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var p=c.destroy;c.destroy=void 0,p!==void 0&&ic(i,o,p)}c=c.next}while(c!==l)}}function za(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function rc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function ap(t){var i=t.alternate;i!==null&&(t.alternate=null,ap(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[mi],delete i[go],delete i[yu],delete i[R0],delete i[C0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lp(t){return t.tag===5||t.tag===3||t.tag===4}function up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ga));else if(l!==4&&(t=t.child,t!==null))for(sc(t,i,o),t=t.sibling;t!==null;)sc(t,i,o),t=t.sibling}function oc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(oc(t,i,o),t=t.sibling;t!==null;)oc(t,i,o),t=t.sibling}var cn=null,ni=!1;function rr(t,i,o){for(o=o.child;o!==null;)cp(t,i,o),o=o.sibling}function cp(t,i,o){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(rt,o)}catch{}switch(o.tag){case 5:vn||ys(o,i);case 6:var l=cn,c=ni;cn=null,rr(t,i,o),cn=l,ni=c,cn!==null&&(ni?(t=cn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(ni?(t=cn,o=o.stateNode,t.nodeType===8?xu(t.parentNode,o):t.nodeType===1&&xu(t,o),ro(t)):xu(cn,o.stateNode));break;case 4:l=cn,c=ni,cn=o.stateNode.containerInfo,ni=!0,rr(t,i,o),cn=l,ni=c;break;case 0:case 11:case 14:case 15:if(!vn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var p=c,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&ic(o,i,M),c=c.next}while(c!==l)}rr(t,i,o);break;case 1:if(!vn&&(ys(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(D){Wt(o,i,D)}rr(t,i,o);break;case 21:rr(t,i,o);break;case 22:o.mode&1?(vn=(l=vn)||o.memoizedState!==null,rr(t,i,o),vn=l):rr(t,i,o);break;default:rr(t,i,o)}}function fp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new W0),i.forEach(function(l){var c=e_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function ii(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var p=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:cn=D.stateNode,ni=!1;break e;case 3:cn=D.stateNode.containerInfo,ni=!0;break e;case 4:cn=D.stateNode.containerInfo,ni=!0;break e}D=D.return}if(cn===null)throw Error(n(160));cp(p,M,c),cn=null,ni=!1;var B=c.alternate;B!==null&&(B.return=null),c.return=null}catch(re){Wt(c,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)dp(i,t),i=i.sibling}function dp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(i,t),vi(t),l&4){try{Ro(3,t,t.return),za(3,t)}catch(Ke){Wt(t,t.return,Ke)}try{Ro(5,t,t.return)}catch(Ke){Wt(t,t.return,Ke)}}break;case 1:ii(i,t),vi(t),l&512&&o!==null&&ys(o,o.return);break;case 5:if(ii(i,t),vi(t),l&512&&o!==null&&ys(o,o.return),t.flags&32){var c=t.stateNode;try{Ve(c,"")}catch(Ke){Wt(t,t.return,Ke)}}if(l&4&&(c=t.stateNode,c!=null)){var p=t.memoizedProps,M=o!==null?o.memoizedProps:p,D=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&ct(c,p),Ue(D,M);var re=Ue(D,p);for(M=0;M<B.length;M+=2){var Me=B[M],Te=B[M+1];Me==="style"?Fe(c,Te):Me==="dangerouslySetInnerHTML"?Ee(c,Te):Me==="children"?Ve(c,Te):L(c,Me,Te,re)}switch(D){case"input":ut(c,p);break;case"textarea":xe(c,p);break;case"select":var Se=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!p.multiple;var Be=p.value;Be!=null?P(c,!!p.multiple,Be,!1):Se!==!!p.multiple&&(p.defaultValue!=null?P(c,!!p.multiple,p.defaultValue,!0):P(c,!!p.multiple,p.multiple?[]:"",!1))}c[go]=p}catch(Ke){Wt(t,t.return,Ke)}}break;case 6:if(ii(i,t),vi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,p=t.memoizedProps;try{c.nodeValue=p}catch(Ke){Wt(t,t.return,Ke)}}break;case 3:if(ii(i,t),vi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{ro(i.containerInfo)}catch(Ke){Wt(t,t.return,Ke)}break;case 4:ii(i,t),vi(t);break;case 13:ii(i,t),vi(t),c=t.child,c.flags&8192&&(p=c.memoizedState!==null,c.stateNode.isHidden=p,!p||c.alternate!==null&&c.alternate.memoizedState!==null||(uc=Z())),l&4&&fp(t);break;case 22:if(Me=o!==null&&o.memoizedState!==null,t.mode&1?(vn=(re=vn)||Me,ii(i,t),vn=re):ii(i,t),vi(t),l&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!Me&&(t.mode&1)!==0)for(Ge=t,Me=t.child;Me!==null;){for(Te=Ge=Me;Ge!==null;){switch(Se=Ge,Be=Se.child,Se.tag){case 0:case 11:case 14:case 15:Ro(4,Se,Se.return);break;case 1:ys(Se,Se.return);var je=Se.stateNode;if(typeof je.componentWillUnmount=="function"){l=Se,o=Se.return;try{i=l,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(Ke){Wt(l,o,Ke)}}break;case 5:ys(Se,Se.return);break;case 22:if(Se.memoizedState!==null){mp(Te);continue}}Be!==null?(Be.return=Se,Ge=Be):mp(Te)}Me=Me.sibling}e:for(Me=null,Te=t;;){if(Te.tag===5){if(Me===null){Me=Te;try{c=Te.stateNode,re?(p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=Te.stateNode,B=Te.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,D.style.display=Ie("display",M))}catch(Ke){Wt(t,t.return,Ke)}}}else if(Te.tag===6){if(Me===null)try{Te.stateNode.nodeValue=re?"":Te.memoizedProps}catch(Ke){Wt(t,t.return,Ke)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===t)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===t)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===t)break e;Me===Te&&(Me=null),Te=Te.return}Me===Te&&(Me=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:ii(i,t),vi(t),l&4&&fp(t);break;case 21:break;default:ii(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(lp(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Ve(c,""),l.flags&=-33);var p=up(t);oc(t,p,c);break;case 3:case 4:var M=l.stateNode.containerInfo,D=up(t);sc(t,D,M);break;default:throw Error(n(161))}}catch(B){Wt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function j0(t,i,o){Ge=t,hp(t)}function hp(t,i,o){for(var l=(t.mode&1)!==0;Ge!==null;){var c=Ge,p=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||ka;if(!M){var D=c.alternate,B=D!==null&&D.memoizedState!==null||vn;D=ka;var re=vn;if(ka=M,(vn=B)&&!re)for(Ge=c;Ge!==null;)M=Ge,B=M.child,M.tag===22&&M.memoizedState!==null?gp(c):B!==null?(B.return=M,Ge=B):gp(c);for(;p!==null;)Ge=p,hp(p),p=p.sibling;Ge=c,ka=D,vn=re}pp(t)}else(c.subtreeFlags&8772)!==0&&p!==null?(p.return=c,Ge=p):pp(t)}}function pp(t){for(;Ge!==null;){var i=Ge;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:vn||za(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!vn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:ti(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&mh(i,p,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}mh(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var Me=re.memoizedState;if(Me!==null){var Te=Me.dehydrated;Te!==null&&ro(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}vn||i.flags&512&&rc(i)}catch(Se){Wt(i,i.return,Se)}}if(i===t){Ge=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ge=o;break}Ge=i.return}}function mp(t){for(;Ge!==null;){var i=Ge;if(i===t){Ge=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ge=o;break}Ge=i.return}}function gp(t){for(;Ge!==null;){var i=Ge;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{za(4,i)}catch(B){Wt(i,o,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(B){Wt(i,c,B)}}var p=i.return;try{rc(i)}catch(B){Wt(i,p,B)}break;case 5:var M=i.return;try{rc(i)}catch(B){Wt(i,M,B)}}}catch(B){Wt(i,i.return,B)}if(i===t){Ge=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Ge=D;break}Ge=i.return}}var Y0=Math.ceil,Ba=C.ReactCurrentDispatcher,ac=C.ReactCurrentOwner,$n=C.ReactCurrentBatchConfig,Mt=0,rn=null,qt=null,fn=0,Vn=0,Ss=Ji(0),Zt=0,Co=null,Ir=0,Ha=0,lc=0,bo=null,Ln=null,uc=0,Ms=1/0,Li=null,Va=!1,cc=null,sr=null,Ga=!1,or=null,Wa=0,Po=0,fc=null,Xa=-1,ja=0;function wn(){return(Mt&6)!==0?Z():Xa!==-1?Xa:Xa=Z()}function ar(t){return(t.mode&1)===0?1:(Mt&2)!==0&&fn!==0?fn&-fn:P0.transition!==null?(ja===0&&(ja=Dt()),ja):(t=St,t!==0||(t=window.event,t=t===void 0?16:vd(t.type)),t)}function ri(t,i,o,l){if(50<Po)throw Po=0,fc=null,Error(n(185));en(t,o,l),((Mt&2)===0||t!==rn)&&(t===rn&&((Mt&2)===0&&(Ha|=o),Zt===4&&lr(t,fn)),Dn(t,l),o===1&&Mt===0&&(i.mode&1)===0&&(Ms=Z()+500,ya&&tr()))}function Dn(t,i){var o=t.callbackNode;Mn(t,i);var l=hn(t,t===rn?fn:0);if(l===0)o!==null&&A(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&A(o),i===1)t.tag===0?b0(vp.bind(null,t)):ih(vp.bind(null,t)),T0(function(){(Mt&6)===0&&tr()}),o=null;else{switch(pi(l)){case 1:o=Ae;break;case 4:o=Oe;break;case 16:o=ze;break;case 536870912:o=st;break;default:o=ze}o=Ap(o,_p.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function _p(t,i){if(Xa=-1,ja=0,(Mt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Es()&&t.callbackNode!==o)return null;var l=hn(t,t===rn?fn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ya(t,l);else{i=l;var c=Mt;Mt|=2;var p=yp();(rn!==t||fn!==i)&&(Li=null,Ms=Z()+500,Nr(t,i));do try{K0();break}catch(D){xp(t,D)}while(!0);bu(),Ba.current=p,Mt=c,qt!==null?i=0:(rn=null,fn=0,i=Zt)}if(i!==0){if(i===2&&(c=Ei(t),c!==0&&(l=c,i=dc(t,c))),i===1)throw o=Co,Nr(t,0),lr(t,l),Dn(t,Z()),o;if(i===6)lr(t,l);else{if(c=t.current.alternate,(l&30)===0&&!q0(c)&&(i=Ya(t,l),i===2&&(p=Ei(t),p!==0&&(l=p,i=dc(t,p))),i===1))throw o=Co,Nr(t,0),lr(t,l),Dn(t,Z()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Fr(t,Ln,Li);break;case 3:if(lr(t,l),(l&130023424)===l&&(i=uc+500-Z(),10<i)){if(hn(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){wn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=vu(Fr.bind(null,t,Ln,Li),i);break}Fr(t,Ln,Li);break;case 4:if(lr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-ft(l);p=1<<M,M=i[M],M>c&&(c=M),l&=~p}if(l=c,l=Z()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Y0(l/1960))-l,10<l){t.timeoutHandle=vu(Fr.bind(null,t,Ln,Li),l);break}Fr(t,Ln,Li);break;case 5:Fr(t,Ln,Li);break;default:throw Error(n(329))}}}return Dn(t,Z()),t.callbackNode===o?_p.bind(null,t):null}function dc(t,i){var o=bo;return t.current.memoizedState.isDehydrated&&(Nr(t,i).flags|=256),t=Ya(t,i),t!==2&&(i=Ln,Ln=o,i!==null&&hc(i)),t}function hc(t){Ln===null?Ln=t:Ln.push.apply(Ln,t)}function q0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],p=c.getSnapshot;c=c.value;try{if(!Jn(p(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function lr(t,i){for(i&=~lc,i&=~Ha,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ft(i),l=1<<o;t[o]=-1,i&=~l}}function vp(t){if((Mt&6)!==0)throw Error(n(327));Es();var i=hn(t,0);if((i&1)===0)return Dn(t,Z()),null;var o=Ya(t,i);if(t.tag!==0&&o===2){var l=Ei(t);l!==0&&(i=l,o=dc(t,l))}if(o===1)throw o=Co,Nr(t,0),lr(t,i),Dn(t,Z()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Fr(t,Ln,Li),Dn(t,Z()),null}function pc(t,i){var o=Mt;Mt|=1;try{return t(i)}finally{Mt=o,Mt===0&&(Ms=Z()+500,ya&&tr())}}function Ur(t){or!==null&&or.tag===0&&(Mt&6)===0&&Es();var i=Mt;Mt|=1;var o=$n.transition,l=St;try{if($n.transition=null,St=1,t)return t()}finally{St=l,$n.transition=o,Mt=i,(Mt&6)===0&&tr()}}function mc(){Vn=Ss.current,Ft(Ss)}function Nr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,w0(o)),qt!==null)for(o=qt.return;o!==null;){var l=o;switch(wu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&va();break;case 3:vs(),Ft(Cn),Ft(mn),Ou();break;case 5:Nu(l);break;case 4:vs();break;case 13:Ft(Bt);break;case 19:Ft(Bt);break;case 10:Pu(l.type._context);break;case 22:case 23:mc()}o=o.return}if(rn=t,qt=t=ur(t.current,null),fn=Vn=i,Zt=0,Co=null,lc=Ha=Ir=0,Ln=bo=null,Pr!==null){for(i=0;i<Pr.length;i++)if(o=Pr[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,p=o.pending;if(p!==null){var M=p.next;p.next=c,l.next=M}o.pending=l}Pr=null}return t}function xp(t,i){do{var o=qt;try{if(bu(),Pa.current=Ua,La){for(var l=Ht.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}La=!1}if(Dr=0,nn=Kt=Ht=null,Mo=!1,Eo=0,ac.current=null,o===null||o.return===null){Zt=1,Co=i,qt=null;break}e:{var p=t,M=o.return,D=o,B=i;if(i=fn,D.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var re=B,Me=D,Te=Me.tag;if((Me.mode&1)===0&&(Te===0||Te===11||Te===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Be=Wh(M);if(Be!==null){Be.flags&=-257,Xh(Be,M,D,p,i),Be.mode&1&&Gh(p,re,i),i=Be,B=re;var je=i.updateQueue;if(je===null){var Ke=new Set;Ke.add(B),i.updateQueue=Ke}else je.add(B);break e}else{if((i&1)===0){Gh(p,re,i),gc();break e}B=Error(n(426))}}else if(kt&&D.mode&1){var Yt=Wh(M);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Xh(Yt,M,D,p,i),Ru(xs(B,D));break e}}p=B=xs(B,D),Zt!==4&&(Zt=2),bo===null?bo=[p]:bo.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var K=Hh(p,B,i);ph(p,K);break e;case 1:D=B;var G=p.type,ee=p.stateNode;if((p.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(sr===null||!sr.has(ee)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ce=Vh(p,D,i);ph(p,Ce);break e}}p=p.return}while(p!==null)}Mp(o)}catch(Qe){i=Qe,qt===o&&o!==null&&(qt=o=o.return);continue}break}while(!0)}function yp(){var t=Ba.current;return Ba.current=Ua,t===null?Ua:t}function gc(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),rn===null||(Ir&268435455)===0&&(Ha&268435455)===0||lr(rn,fn)}function Ya(t,i){var o=Mt;Mt|=2;var l=yp();(rn!==t||fn!==i)&&(Li=null,Nr(t,i));do try{$0();break}catch(c){xp(t,c)}while(!0);if(bu(),Mt=o,Ba.current=l,qt!==null)throw Error(n(261));return rn=null,fn=0,Zt}function $0(){for(;qt!==null;)Sp(qt)}function K0(){for(;qt!==null&&!j();)Sp(qt)}function Sp(t){var i=Tp(t.alternate,t,Vn);t.memoizedProps=t.pendingProps,i===null?Mp(t):qt=i,ac.current=null}function Mp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=V0(o,i,Vn),o!==null){qt=o;return}}else{if(o=G0(o,i),o!==null){o.flags&=32767,qt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Zt=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=t}while(i!==null);Zt===0&&(Zt=5)}function Fr(t,i,o){var l=St,c=$n.transition;try{$n.transition=null,St=1,Z0(t,i,o,l)}finally{$n.transition=c,St=l}return null}function Z0(t,i,o,l){do Es();while(or!==null);if((Mt&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(un(t,p),t===rn&&(qt=rn=null,fn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ga||(Ga=!0,Ap(ze,function(){return Es(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=$n.transition,$n.transition=null;var M=St;St=1;var D=Mt;Mt|=4,ac.current=null,X0(t,o),dp(o,t),_0(gu),ra=!!mu,gu=mu=null,t.current=o,j0(o),ie(),Mt=D,St=M,$n.transition=p}else t.current=o;if(Ga&&(Ga=!1,or=t,Wa=c),p=t.pendingLanes,p===0&&(sr=null),xt(o.stateNode),Dn(t,Z()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Va)throw Va=!1,t=cc,cc=null,t;return(Wa&1)!==0&&t.tag!==0&&Es(),p=t.pendingLanes,(p&1)!==0?t===fc?Po++:(Po=0,fc=t):Po=0,tr(),null}function Es(){if(or!==null){var t=pi(Wa),i=$n.transition,o=St;try{if($n.transition=null,St=16>t?16:t,or===null)var l=!1;else{if(t=or,or=null,Wa=0,(Mt&6)!==0)throw Error(n(331));var c=Mt;for(Mt|=4,Ge=t.current;Ge!==null;){var p=Ge,M=p.child;if((Ge.flags&16)!==0){var D=p.deletions;if(D!==null){for(var B=0;B<D.length;B++){var re=D[B];for(Ge=re;Ge!==null;){var Me=Ge;switch(Me.tag){case 0:case 11:case 15:Ro(8,Me,p)}var Te=Me.child;if(Te!==null)Te.return=Me,Ge=Te;else for(;Ge!==null;){Me=Ge;var Se=Me.sibling,Be=Me.return;if(ap(Me),Me===re){Ge=null;break}if(Se!==null){Se.return=Be,Ge=Se;break}Ge=Be}}}var je=p.alternate;if(je!==null){var Ke=je.child;if(Ke!==null){je.child=null;do{var Yt=Ke.sibling;Ke.sibling=null,Ke=Yt}while(Ke!==null)}}Ge=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Ge=M;else e:for(;Ge!==null;){if(p=Ge,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ro(9,p,p.return)}var K=p.sibling;if(K!==null){K.return=p.return,Ge=K;break e}Ge=p.return}}var G=t.current;for(Ge=G;Ge!==null;){M=Ge;var ee=M.child;if((M.subtreeFlags&2064)!==0&&ee!==null)ee.return=M,Ge=ee;else e:for(M=G;Ge!==null;){if(D=Ge,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:za(9,D)}}catch(Qe){Wt(D,D.return,Qe)}if(D===M){Ge=null;break e}var Ce=D.sibling;if(Ce!==null){Ce.return=D.return,Ge=Ce;break e}Ge=D.return}}if(Mt=c,tr(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(rt,t)}catch{}l=!0}return l}finally{St=o,$n.transition=i}}return!1}function Ep(t,i,o){i=xs(o,i),i=Hh(t,i,1),t=ir(t,i,1),i=wn(),t!==null&&(en(t,1,i),Dn(t,i))}function Wt(t,i,o){if(t.tag===3)Ep(t,t,o);else for(;i!==null;){if(i.tag===3){Ep(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(sr===null||!sr.has(l))){t=xs(o,t),t=Vh(i,t,1),i=ir(i,t,1),t=wn(),i!==null&&(en(i,1,t),Dn(i,t));break}}i=i.return}}function Q0(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=wn(),t.pingedLanes|=t.suspendedLanes&o,rn===t&&(fn&o)===o&&(Zt===4||Zt===3&&(fn&130023424)===fn&&500>Z()-uc?Nr(t,0):lc|=o),Dn(t,i)}function wp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Gt,Gt<<=1,(Gt&130023424)===0&&(Gt=4194304)));var o=wn();t=Ci(t,i),t!==null&&(en(t,i,o),Dn(t,o))}function J0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),wp(t,o)}function e_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),wp(t,o)}var Tp;Tp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Cn.current)Pn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Pn=!1,H0(t,i,o);Pn=(t.flags&131072)!==0}else Pn=!1,kt&&(i.flags&1048576)!==0&&rh(i,Ma,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Oa(t,i),t=i.pendingProps;var c=fs(i,mn.current);_s(i,o),c=Bu(null,i,l,t,c,o);var p=Hu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,bn(l)?(p=!0,xa(i)):p=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Iu(i),c.updater=Na,i.stateNode=c,c._reactInternals=i,Yu(i,l,t,o),i=Zu(null,i,l,!0,p,o)):(i.tag=0,kt&&p&&Eu(i),En(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Oa(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=n_(l),t=ti(l,t),c){case 0:i=Ku(null,i,l,t,o);break e;case 1:i=Zh(null,i,l,t,o);break e;case 11:i=jh(null,i,l,t,o);break e;case 14:i=Yh(null,i,l,ti(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ti(l,c),Ku(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ti(l,c),Zh(t,i,l,c,o);case 3:e:{if(Qh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,c=p.element,hh(t,i),Ca(i,l,null,o);var M=i.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){c=xs(Error(n(423)),i),i=Jh(t,i,l,o,c);break e}else if(l!==c){c=xs(Error(n(424)),i),i=Jh(t,i,l,o,c);break e}else for(Hn=Qi(i.stateNode.containerInfo.firstChild),Bn=i,kt=!0,ei=null,o=fh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ps(),l===c){i=Pi(t,i,o);break e}En(t,i,l,o)}i=i.child}return i;case 5:return gh(i),t===null&&Au(i),l=i.type,c=i.pendingProps,p=t!==null?t.memoizedProps:null,M=c.children,_u(l,c)?M=null:p!==null&&_u(l,p)&&(i.flags|=32),Kh(t,i),En(t,i,M,o),i.child;case 6:return t===null&&Au(i),null;case 13:return ep(t,i,o);case 4:return Uu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ms(i,null,l,o):En(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ti(l,c),jh(t,i,l,c,o);case 7:return En(t,i,i.pendingProps,o),i.child;case 8:return En(t,i,i.pendingProps.children,o),i.child;case 12:return En(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,p=i.memoizedProps,M=c.value,It(Ta,l._currentValue),l._currentValue=M,p!==null)if(Jn(p.value,M)){if(p.children===c.children&&!Cn.current){i=Pi(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){M=p.child;for(var B=D.firstContext;B!==null;){if(B.context===l){if(p.tag===1){B=bi(-1,o&-o),B.tag=2;var re=p.updateQueue;if(re!==null){re=re.shared;var Me=re.pending;Me===null?B.next=B:(B.next=Me.next,Me.next=B),re.pending=B}}p.lanes|=o,B=p.alternate,B!==null&&(B.lanes|=o),Lu(p.return,o,i),D.lanes|=o;break}B=B.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),Lu(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}En(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,_s(i,o),c=Yn(c),l=l(c),i.flags|=1,En(t,i,l,o),i.child;case 14:return l=i.type,c=ti(l,i.pendingProps),c=ti(l.type,c),Yh(t,i,l,c,o);case 15:return qh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ti(l,c),Oa(t,i),i.tag=1,bn(l)?(t=!0,xa(i)):t=!1,_s(i,o),zh(i,l,c),Yu(i,l,c,o),Zu(null,i,l,!0,t,o);case 19:return np(t,i,o);case 22:return $h(t,i,o)}throw Error(n(156,i.tag))};function Ap(t,i){return ta(t,i)}function t_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,o,l){return new t_(t,i,o,l)}function _c(t){return t=t.prototype,!(!t||!t.isReactComponent)}function n_(t){if(typeof t=="function")return _c(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ne)return 11;if(t===le)return 14}return 2}function ur(t,i){var o=t.alternate;return o===null?(o=Kn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function qa(t,i,o,l,c,p){var M=2;if(l=t,typeof t=="function")_c(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case N:return Or(o.children,c,p,i);case X:M=8,c|=8;break;case b:return t=Kn(12,o,i,c|2),t.elementType=b,t.lanes=p,t;case Q:return t=Kn(13,o,i,c),t.elementType=Q,t.lanes=p,t;case ue:return t=Kn(19,o,i,c),t.elementType=ue,t.lanes=p,t;case de:return $a(o,c,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:M=10;break e;case k:M=9;break e;case ne:M=11;break e;case le:M=14;break e;case se:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=p,i}function Or(t,i,o,l){return t=Kn(7,t,l,i),t.lanes=o,t}function $a(t,i,o,l){return t=Kn(22,t,l,i),t.elementType=de,t.lanes=o,t.stateNode={isHidden:!1},t}function vc(t,i,o){return t=Kn(6,t,null,i),t.lanes=o,t}function xc(t,i,o){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function i_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function yc(t,i,o,l,c,p,M,D,B){return t=new i_(t,i,o,D,B),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Kn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Iu(p),t}function r_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Rp(t){if(!t)return er;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(bn(o))return th(t,o,i)}return i}function Cp(t,i,o,l,c,p,M,D,B){return t=yc(o,l,!0,t,c,p,M,D,B),t.context=Rp(null),o=t.current,l=wn(),c=ar(o),p=bi(l,c),p.callback=i??null,ir(o,p,c),t.current.lanes=c,en(t,c,l),Dn(t,l),t}function Ka(t,i,o,l){var c=i.current,p=wn(),M=ar(c);return o=Rp(o),i.context===null?i.context=o:i.pendingContext=o,i=bi(p,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=ir(c,i,M),t!==null&&(ri(t,c,M,p),Ra(t,c,M)),M}function Za(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Sc(t,i){bp(t,i),(t=t.alternate)&&bp(t,i)}function s_(){return null}var Pp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mc(t){this._internalRoot=t}Qa.prototype.render=Mc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ka(t,i,null,null)},Qa.prototype.unmount=Mc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ur(function(){Ka(null,t,null,null)}),i[wi]=null}};function Qa(t){this._internalRoot=t}Qa.prototype.unstable_scheduleHydration=function(t){if(t){var i=hd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<$i.length&&i!==0&&i<$i[o].priority;o++);$i.splice(o,0,t),o===0&&gd(t)}};function Ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ja(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lp(){}function o_(t,i,o,l,c){if(c){if(typeof l=="function"){var p=l;l=function(){var re=Za(M);p.call(re)}}var M=Cp(i,l,t,0,null,!1,!1,"",Lp);return t._reactRootContainer=M,t[wi]=M.current,po(t.nodeType===8?t.parentNode:t),Ur(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var D=l;l=function(){var re=Za(B);D.call(re)}}var B=yc(t,0,!1,null,null,!1,!1,"",Lp);return t._reactRootContainer=B,t[wi]=B.current,po(t.nodeType===8?t.parentNode:t),Ur(function(){Ka(i,B,o,l)}),B}function el(t,i,o,l,c){var p=o._reactRootContainer;if(p){var M=p;if(typeof c=="function"){var D=c;c=function(){var B=Za(M);D.call(B)}}Ka(i,M,t,c)}else M=o_(o,i,t,c,l);return Za(M)}fd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=_t(i.pendingLanes);o!==0&&(tn(i,o|1),Dn(i,Z()),(Mt&6)===0&&(Ms=Z()+500,tr()))}break;case 13:Ur(function(){var l=Ci(t,1);if(l!==null){var c=wn();ri(l,t,1,c)}}),Sc(t,1)}},ql=function(t){if(t.tag===13){var i=Ci(t,134217728);if(i!==null){var o=wn();ri(i,t,134217728,o)}Sc(t,134217728)}},dd=function(t){if(t.tag===13){var i=ar(t),o=Ci(t,i);if(o!==null){var l=wn();ri(o,t,i,l)}Sc(t,i)}},hd=function(){return St},pd=function(t,i){var o=St;try{return St=t,i()}finally{St=o}},ye=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=_a(l);if(!c)throw Error(n(90));Rt(l),ut(l,c)}}}break;case"textarea":xe(t,o);break;case"select":i=o.value,i!=null&&P(t,!!o.multiple,i,!1)}},bt=pc,jt=Ur;var a_={usingClientEntryPoint:!1,Events:[_o,us,_a,De,tt,pc]},Lo={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},l_={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jo(t),t===null?null:t.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||s_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{rt=tl.inject(l_),$e=tl}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a_,In.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ec(i))throw Error(n(200));return r_(t,i,null,o)},In.createRoot=function(t,i){if(!Ec(t))throw Error(n(299));var o=!1,l="",c=Pp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=yc(t,1,!1,null,null,o,!1,l,c),t[wi]=i.current,po(t.nodeType===8?t.parentNode:t),new Mc(i)},In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Jo(i),t=t===null?null:t.stateNode,t},In.flushSync=function(t){return Ur(t)},In.hydrate=function(t,i,o){if(!Ja(i))throw Error(n(200));return el(null,t,i,!0,o)},In.hydrateRoot=function(t,i,o){if(!Ec(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,p="",M=Pp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Cp(i,null,t,1,o??null,c,!1,p,M),t[wi]=i.current,po(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Qa(i)},In.render=function(t,i,o){if(!Ja(i))throw Error(n(200));return el(null,t,i,!1,o)},In.unmountComponentAtNode=function(t){if(!Ja(t))throw Error(n(40));return t._reactRootContainer?(Ur(function(){el(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1},In.unstable_batchedUpdates=pc,In.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Ja(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return el(t,i,o,!1,l)},In.version="18.3.1-next-f1338f8080-20240426",In}var zp;function __(){if(zp)return Ac.exports;zp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ac.exports=g_(),Ac.exports}var Bp;function v_(){if(Bp)return nl;Bp=1;var s=__();return nl.createRoot=s.createRoot,nl.hydrateRoot=s.hydrateRoot,nl}var x_=v_();const y_=Ym(x_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qm=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var M_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=Ut.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:u,iconNode:f,...d},h)=>Ut.createElement("svg",{ref:h,...M_,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:qm("lucide",a),...d},[...f.map(([m,v])=>Ut.createElement(m,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=(s,e)=>{const n=Ut.forwardRef(({className:r,...a},u)=>Ut.createElement(E_,{ref:u,iconNode:e,className:qm(`lucide-${S_(s)}`,r),...a}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],$m=kn("Atom",w_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],A_=kn("BookOpen",T_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]],C_=kn("CirclePlay",R_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],P_=kn("Cpu",b_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],D_=kn("Eye",L_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],U_=kn("Flame",I_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],F_=kn("Image",N_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],k_=kn("Layers",O_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],B_=kn("Pause",z_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],V_=kn("Play",H_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],W_=kn("RotateCcw",G_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],j_=kn("Sparkles",X_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Hp=kn("X",Y_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],$_=kn("Zap",q_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zf="174",K_=0,Vp=1,Z_=2,Km=1,Zm=2,Oi=3,Mr=0,Nn=1,ki=2,yr=0,Hs=1,lf=2,Gp=3,Wp=4,Q_=5,Yr=100,J_=101,ev=102,tv=103,nv=104,iv=200,rv=201,sv=202,ov=203,uf=204,cf=205,av=206,lv=207,uv=208,cv=209,fv=210,dv=211,hv=212,pv=213,mv=214,ff=0,df=1,hf=2,Ws=3,pf=4,mf=5,gf=6,_f=7,Qf=0,gv=1,_v=2,Sr=0,vv=1,xv=2,yv=3,Sv=4,Mv=5,Ev=6,wv=7,Qm=300,Xs=301,js=302,vf=303,xf=304,Bl=306,yf=1e3,$r=1001,Sf=1002,ci=1003,Tv=1004,il=1005,yi=1006,bc=1007,Kr=1008,Vi=1009,Jm=1010,eg=1011,Vo=1012,Jf=1013,Zr=1014,zi=1015,Xo=1016,ed=1017,td=1018,Ys=1020,tg=35902,ng=1021,ig=1022,ui=1023,rg=1024,sg=1025,Vs=1026,qs=1027,og=1028,nd=1029,ag=1030,id=1031,rd=1033,Rl=33776,Cl=33777,bl=33778,Pl=33779,Mf=35840,Ef=35841,wf=35842,Tf=35843,Af=36196,Rf=37492,Cf=37496,bf=37808,Pf=37809,Lf=37810,Df=37811,If=37812,Uf=37813,Nf=37814,Ff=37815,Of=37816,kf=37817,zf=37818,Bf=37819,Hf=37820,Vf=37821,Ll=36492,Gf=36494,Wf=36495,lg=36283,Xf=36284,jf=36285,Yf=36286,Av=3200,Rv=3201,sd=0,Cv=1,_r="",Qn="srgb",$s="srgb-linear",Ul="linear",Pt="srgb",ws=7680,Xp=519,bv=512,Pv=513,Lv=514,ug=515,Dv=516,Iv=517,Uv=518,Nv=519,jp=35044,Yp="300 es",Bi=2e3,Nl=2001;class Zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qp=1234567;const Bo=Math.PI/180,Go=180/Math.PI;function Qs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function vt(s,e,n){return Math.max(e,Math.min(n,s))}function od(s,e){return(s%e+e)%e}function Fv(s,e,n,r,a){return r+(s-e)*(a-r)/(n-e)}function Ov(s,e,n){return s!==e?(n-s)/(e-s):0}function Ho(s,e,n){return(1-n)*s+n*e}function kv(s,e,n,r){return Ho(s,e,1-Math.exp(-n*r))}function zv(s,e=1){return e-Math.abs(od(s,e*2)-e)}function Bv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function Hv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function Vv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Gv(s,e){return s+Math.random()*(e-s)}function Wv(s){return s*(.5-Math.random())}function Xv(s){s!==void 0&&(qp=s);let e=qp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jv(s){return s*Bo}function Yv(s){return s*Go}function qv(s){return(s&s-1)===0&&s!==0}function $v(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Kv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zv(s,e,n,r,a){const u=Math.cos,f=Math.sin,d=u(n/2),h=f(n/2),m=u((e+r)/2),v=f((e+r)/2),g=u((e-r)/2),x=f((e-r)/2),S=u((r-e)/2),E=f((r-e)/2);switch(a){case"XYX":s.set(d*v,h*g,h*x,d*m);break;case"YZY":s.set(h*x,d*v,h*g,d*m);break;case"ZXZ":s.set(h*g,h*x,d*v,d*m);break;case"XZX":s.set(d*v,h*E,h*S,d*m);break;case"YXY":s.set(h*S,d*v,h*E,d*m);break;case"ZYZ":s.set(h*E,h*S,d*v,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ks(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Tn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const qf={DEG2RAD:Bo,RAD2DEG:Go,generateUUID:Qs,clamp:vt,euclideanModulo:od,mapLinear:Fv,inverseLerp:Ov,lerp:Ho,damp:kv,pingpong:zv,smoothstep:Bv,smootherstep:Hv,randInt:Vv,randFloat:Gv,randFloatSpread:Wv,seededRandom:Xv,degToRad:jv,radToDeg:Yv,isPowerOfTwo:qv,ceilPowerOfTwo:$v,floorPowerOfTwo:Kv,setQuaternionFromProperEuler:Zv,normalize:Tn,denormalize:ks};class Et{constructor(e=0,n=0){Et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,n,r,a,u,f,d,h,m){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,h,m)}set(e,n,r,a,u,f,d,h,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=u,v[5]=h,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],h=r[6],m=r[1],v=r[4],g=r[7],x=r[2],S=r[5],E=r[8],T=a[0],y=a[3],_=a[6],I=a[1],L=a[4],C=a[7],W=a[2],O=a[5],N=a[8];return u[0]=f*T+d*I+h*W,u[3]=f*y+d*L+h*O,u[6]=f*_+d*C+h*N,u[1]=m*T+v*I+g*W,u[4]=m*y+v*L+g*O,u[7]=m*_+v*C+g*N,u[2]=x*T+S*I+E*W,u[5]=x*y+S*L+E*O,u[8]=x*_+S*C+E*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],h=e[6],m=e[7],v=e[8];return n*f*v-n*d*m-r*u*v+r*d*h+a*u*m-a*f*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],h=e[6],m=e[7],v=e[8],g=v*f-d*m,x=d*h-v*u,S=m*u-f*h,E=n*g+r*x+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(a*m-v*r)*T,e[2]=(d*r-a*f)*T,e[3]=x*T,e[4]=(v*n-a*h)*T,e[5]=(a*u-d*n)*T,e[6]=S*T,e[7]=(r*h-m*n)*T,e[8]=(f*n-r*u)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const h=Math.cos(u),m=Math.sin(u);return this.set(r*h,r*m,-r*(h*f+m*d)+f+e,-a*m,a*h,-a*(-m*f+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Pc.makeScale(e,n)),this}rotate(e){return this.premultiply(Pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Pc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pc=new dt;function cg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qv(){const s=Fl("canvas");return s.style.display="block",s}const $p={};function Wr(s){s in $p||($p[s]=!0,console.warn(s))}function Jv(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function ex(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tx(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Kp=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zp=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nx(){const s={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Pt&&(a.r=Hi(a.r),a.g=Hi(a.g),a.b=Hi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Pt&&(a.r=Gs(a.r),a.g=Gs(a.g),a.b=Gs(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===_r?Ul:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[$s]:{primaries:e,whitePoint:r,transfer:Ul,toXYZ:Kp,fromXYZ:Zp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:r,transfer:Pt,toXYZ:Kp,fromXYZ:Zp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),s}const At=nx();function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ts;class ix{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=Fl("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ts}return n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Hi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Hi(n[r]/255)*255):n[r]=Hi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rx=0;class ad{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Qs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Lc(a[f].image)):u.push(Lc(a[f]))}else u=Lc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Lc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ix.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sx=0;class Fn extends Zs{constructor(e=Fn.DEFAULT_IMAGE,n=Fn.DEFAULT_MAPPING,r=$r,a=$r,u=yi,f=Kr,d=ui,h=Vi,m=Fn.DEFAULT_ANISOTROPY,v=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Qs(),this.name="",this.source=new ad(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yf:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case Sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yf:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case Sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Qm;Fn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,r=0,a=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const h=e.elements,m=h[0],v=h[4],g=h[8],x=h[1],S=h[5],E=h[9],T=h[2],y=h[6],_=h[10];if(Math.abs(v-x)<.01&&Math.abs(g-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+T)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,C=(S+1)/2,W=(_+1)/2,O=(v+x)/4,N=(g+T)/4,X=(E+y)/4;return L>C&&L>W?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=O/r,u=N/r):C>W?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=O/a,u=X/a):W<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(W),r=N/u,a=X/u),this.set(r,a,u,n),this}let I=Math.sqrt((y-E)*(y-E)+(g-T)*(g-T)+(x-v)*(x-v));return Math.abs(I)<.001&&(I=1),this.x=(y-E)/I,this.y=(g-T)/I,this.z=(x-v)/I,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this.w=vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this.w=vt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ox extends Zs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Fn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new ad(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends ox{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class fg extends Fn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ax extends Fn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let h=r[a+0],m=r[a+1],v=r[a+2],g=r[a+3];const x=u[f+0],S=u[f+1],E=u[f+2],T=u[f+3];if(d===0){e[n+0]=h,e[n+1]=m,e[n+2]=v,e[n+3]=g;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=E,e[n+3]=T;return}if(g!==T||h!==x||m!==S||v!==E){let y=1-d;const _=h*x+m*S+v*E+g*T,I=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const W=Math.sqrt(L),O=Math.atan2(W,_*I);y=Math.sin(y*O)/W,d=Math.sin(d*O)/W}const C=d*I;if(h=h*y+x*C,m=m*y+S*C,v=v*y+E*C,g=g*y+T*C,y===1-d){const W=1/Math.sqrt(h*h+m*m+v*v+g*g);h*=W,m*=W,v*=W,g*=W}}e[n]=h,e[n+1]=m,e[n+2]=v,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],h=r[a+1],m=r[a+2],v=r[a+3],g=u[f],x=u[f+1],S=u[f+2],E=u[f+3];return e[n]=d*E+v*g+h*S-m*x,e[n+1]=h*E+v*x+m*g-d*S,e[n+2]=m*E+v*S+d*x-h*g,e[n+3]=v*E-d*g-h*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,h=Math.sin,m=d(r/2),v=d(a/2),g=d(u/2),x=h(r/2),S=h(a/2),E=h(u/2);switch(f){case"XYZ":this._x=x*v*g+m*S*E,this._y=m*S*g-x*v*E,this._z=m*v*E+x*S*g,this._w=m*v*g-x*S*E;break;case"YXZ":this._x=x*v*g+m*S*E,this._y=m*S*g-x*v*E,this._z=m*v*E-x*S*g,this._w=m*v*g+x*S*E;break;case"ZXY":this._x=x*v*g-m*S*E,this._y=m*S*g+x*v*E,this._z=m*v*E+x*S*g,this._w=m*v*g-x*S*E;break;case"ZYX":this._x=x*v*g-m*S*E,this._y=m*S*g+x*v*E,this._z=m*v*E-x*S*g,this._w=m*v*g+x*S*E;break;case"YZX":this._x=x*v*g+m*S*E,this._y=m*S*g+x*v*E,this._z=m*v*E-x*S*g,this._w=m*v*g-x*S*E;break;case"XZY":this._x=x*v*g-m*S*E,this._y=m*S*g-x*v*E,this._z=m*v*E+x*S*g,this._w=m*v*g+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],h=n[9],m=n[2],v=n[6],g=n[10],x=r+d+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-h)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(v-h)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(h+v)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(h+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,h=n._y,m=n._z,v=n._w;return this._x=r*v+f*d+a*m-u*h,this._y=a*v+f*h+u*d-r*m,this._z=u*v+f*m+r*h-a*d,this._w=f*v-r*d-a*h-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const h=1-d*d;if(h<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(h),v=Math.atan2(m,d),g=Math.sin((1-n)*v)/m,x=Math.sin(n*v)/m;return this._w=f*g+this._w*x,this._x=r*g+this._x*x,this._y=a*g+this._y*x,this._z=u*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,r=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,h=e.w,m=2*(f*a-d*r),v=2*(d*n-u*a),g=2*(u*r-f*n);return this.x=n+h*m+f*g-d*v,this.y=r+h*v+d*m-u*g,this.z=a+h*g+u*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,h=n.z;return this.x=a*h-u*d,this.y=u*f-r*h,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new H,Qp=new jo;class Yo{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,si):si.fromBufferAttribute(u,f),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rl.copy(r.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),sl.subVectors(this.max,Io),As.subVectors(e.a,Io),Rs.subVectors(e.b,Io),Cs.subVectors(e.c,Io),fr.subVectors(Rs,As),dr.subVectors(Cs,Rs),kr.subVectors(As,Cs);let n=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-kr.z,kr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,kr.z,0,-kr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-kr.y,kr.x,0];return!Ic(n,As,Rs,Cs,sl)||(n=[1,0,0,0,1,0,0,0,1],!Ic(n,As,Rs,Cs,sl))?!1:(ol.crossVectors(fr,dr),n=[ol.x,ol.y,ol.z],Ic(n,As,Rs,Cs,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new H,new H,new H,new H,new H,new H,new H,new H],si=new H,rl=new Yo,As=new H,Rs=new H,Cs=new H,fr=new H,dr=new H,kr=new H,Io=new H,sl=new H,ol=new H,zr=new H;function Ic(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){zr.fromArray(s,u);const d=a.x*Math.abs(zr.x)+a.y*Math.abs(zr.y)+a.z*Math.abs(zr.z),h=e.dot(zr),m=n.dot(zr),v=r.dot(zr);if(Math.max(-Math.max(h,m,v),Math.min(h,m,v))>d)return!1}return!0}const lx=new Yo,Uo=new H,Uc=new H;class Hl{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):lx.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Uo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Uc)),this.expandByPoint(Uo.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new H,Nc=new H,al=new H,hr=new H,Fc=new H,ll=new H,Oc=new H;class dg{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Nc.copy(e).add(n).multiplyScalar(.5),al.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(Nc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(al),d=hr.dot(this.direction),h=-hr.dot(al),m=hr.lengthSq(),v=Math.abs(1-f*f);let g,x,S,E;if(v>0)if(g=f*h-d,x=f*d-h,E=u*v,g>=0)if(x>=-E)if(x<=E){const T=1/v;g*=T,x*=T,S=g*(g+f*x+2*d)+x*(f*g+x+2*h)+m}else x=u,g=Math.max(0,-(f*x+d)),S=-g*g+x*(x+2*h)+m;else x=-u,g=Math.max(0,-(f*x+d)),S=-g*g+x*(x+2*h)+m;else x<=-E?(g=Math.max(0,-(-f*u+d)),x=g>0?-u:Math.min(Math.max(-u,-h),u),S=-g*g+x*(x+2*h)+m):x<=E?(g=0,x=Math.min(Math.max(-u,-h),u),S=x*(x+2*h)+m):(g=Math.max(0,-(f*u+d)),x=g>0?u:Math.min(Math.max(-u,-h),u),S=-g*g+x*(x+2*h)+m);else x=f>0?-u:u,g=Math.max(0,-(f*x+d)),S=-g*g+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Nc).addScaledVector(al,x),S}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),a=Ii.dot(Ii)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,h=r+f;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,h;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),v>=0?(u=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(u=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),g>=0?(d=(e.min.z-x.z)*g,h=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,h=(e.min.z-x.z)*g),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,a,u){Fc.subVectors(n,e),ll.subVectors(r,e),Oc.crossVectors(Fc,ll);let f=this.direction.dot(Oc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;hr.subVectors(this.origin,e);const h=d*this.direction.dot(ll.crossVectors(hr,ll));if(h<0)return null;const m=d*this.direction.dot(Fc.cross(hr));if(m<0||h+m>f)return null;const v=-d*hr.dot(Oc);return v<0?null:this.at(v/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,n,r,a,u,f,d,h,m,v,g,x,S,E,T,y){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,h,m,v,g,x,S,E,T,y)}set(e,n,r,a,u,f,d,h,m,v,g,x,S,E,T,y){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=u,_[5]=f,_[9]=d,_[13]=h,_[2]=m,_[6]=v,_[10]=g,_[14]=x,_[3]=S,_[7]=E,_[11]=T,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/bs.setFromMatrixColumn(e,0).length(),u=1/bs.setFromMatrixColumn(e,1).length(),f=1/bs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),h=Math.cos(a),m=Math.sin(a),v=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const x=f*v,S=f*g,E=d*v,T=d*g;n[0]=h*v,n[4]=-h*g,n[8]=m,n[1]=S+E*m,n[5]=x-T*m,n[9]=-d*h,n[2]=T-x*m,n[6]=E+S*m,n[10]=f*h}else if(e.order==="YXZ"){const x=h*v,S=h*g,E=m*v,T=m*g;n[0]=x+T*d,n[4]=E*d-S,n[8]=f*m,n[1]=f*g,n[5]=f*v,n[9]=-d,n[2]=S*d-E,n[6]=T+x*d,n[10]=f*h}else if(e.order==="ZXY"){const x=h*v,S=h*g,E=m*v,T=m*g;n[0]=x-T*d,n[4]=-f*g,n[8]=E+S*d,n[1]=S+E*d,n[5]=f*v,n[9]=T-x*d,n[2]=-f*m,n[6]=d,n[10]=f*h}else if(e.order==="ZYX"){const x=f*v,S=f*g,E=d*v,T=d*g;n[0]=h*v,n[4]=E*m-S,n[8]=x*m+T,n[1]=h*g,n[5]=T*m+x,n[9]=S*m-E,n[2]=-m,n[6]=d*h,n[10]=f*h}else if(e.order==="YZX"){const x=f*h,S=f*m,E=d*h,T=d*m;n[0]=h*v,n[4]=T-x*g,n[8]=E*g+S,n[1]=g,n[5]=f*v,n[9]=-d*v,n[2]=-m*v,n[6]=S*g+E,n[10]=x-T*g}else if(e.order==="XZY"){const x=f*h,S=f*m,E=d*h,T=d*m;n[0]=h*v,n[4]=-g,n[8]=m*v,n[1]=x*g+T,n[5]=f*v,n[9]=S*g-E,n[2]=E*g-S,n[6]=d*v,n[10]=T*g+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ux,e,cx)}lookAt(e,n,r){const a=this.elements;return Gn.subVectors(e,n),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),pr.crossVectors(r,Gn),pr.lengthSq()===0&&(Math.abs(r.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),pr.crossVectors(r,Gn)),pr.normalize(),ul.crossVectors(Gn,pr),a[0]=pr.x,a[4]=ul.x,a[8]=Gn.x,a[1]=pr.y,a[5]=ul.y,a[9]=Gn.y,a[2]=pr.z,a[6]=ul.z,a[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],h=r[8],m=r[12],v=r[1],g=r[5],x=r[9],S=r[13],E=r[2],T=r[6],y=r[10],_=r[14],I=r[3],L=r[7],C=r[11],W=r[15],O=a[0],N=a[4],X=a[8],b=a[12],R=a[1],k=a[5],ne=a[9],Q=a[13],ue=a[2],le=a[6],se=a[10],de=a[14],z=a[3],ce=a[7],oe=a[11],U=a[15];return u[0]=f*O+d*R+h*ue+m*z,u[4]=f*N+d*k+h*le+m*ce,u[8]=f*X+d*ne+h*se+m*oe,u[12]=f*b+d*Q+h*de+m*U,u[1]=v*O+g*R+x*ue+S*z,u[5]=v*N+g*k+x*le+S*ce,u[9]=v*X+g*ne+x*se+S*oe,u[13]=v*b+g*Q+x*de+S*U,u[2]=E*O+T*R+y*ue+_*z,u[6]=E*N+T*k+y*le+_*ce,u[10]=E*X+T*ne+y*se+_*oe,u[14]=E*b+T*Q+y*de+_*U,u[3]=I*O+L*R+C*ue+W*z,u[7]=I*N+L*k+C*le+W*ce,u[11]=I*X+L*ne+C*se+W*oe,u[15]=I*b+L*Q+C*de+W*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],h=e[9],m=e[13],v=e[2],g=e[6],x=e[10],S=e[14],E=e[3],T=e[7],y=e[11],_=e[15];return E*(+u*h*g-a*m*g-u*d*x+r*m*x+a*d*S-r*h*S)+T*(+n*h*S-n*m*x+u*f*x-a*f*S+a*m*v-u*h*v)+y*(+n*m*g-n*d*S-u*f*g+r*f*S+u*d*v-r*m*v)+_*(-a*d*v-n*h*g+n*d*x+a*f*g-r*f*x+r*h*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],h=e[6],m=e[7],v=e[8],g=e[9],x=e[10],S=e[11],E=e[12],T=e[13],y=e[14],_=e[15],I=g*y*m-T*x*m+T*h*S-d*y*S-g*h*_+d*x*_,L=E*x*m-v*y*m-E*h*S+f*y*S+v*h*_-f*x*_,C=v*T*m-E*g*m+E*d*S-f*T*S-v*d*_+f*g*_,W=E*g*h-v*T*h-E*d*x+f*T*x+v*d*y-f*g*y,O=n*I+r*L+a*C+u*W;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/O;return e[0]=I*N,e[1]=(T*x*u-g*y*u-T*a*S+r*y*S+g*a*_-r*x*_)*N,e[2]=(d*y*u-T*h*u+T*a*m-r*y*m-d*a*_+r*h*_)*N,e[3]=(g*h*u-d*x*u-g*a*m+r*x*m+d*a*S-r*h*S)*N,e[4]=L*N,e[5]=(v*y*u-E*x*u+E*a*S-n*y*S-v*a*_+n*x*_)*N,e[6]=(E*h*u-f*y*u-E*a*m+n*y*m+f*a*_-n*h*_)*N,e[7]=(f*x*u-v*h*u+v*a*m-n*x*m-f*a*S+n*h*S)*N,e[8]=C*N,e[9]=(E*g*u-v*T*u-E*r*S+n*T*S+v*r*_-n*g*_)*N,e[10]=(f*T*u-E*d*u+E*r*m-n*T*m-f*r*_+n*d*_)*N,e[11]=(v*d*u-f*g*u-v*r*m+n*g*m+f*r*S-n*d*S)*N,e[12]=W*N,e[13]=(v*T*a-E*g*a+E*r*x-n*T*x-v*r*y+n*g*y)*N,e[14]=(E*d*a-f*T*a-E*r*h+n*T*h+f*r*y-n*d*y)*N,e[15]=(f*g*a-v*d*a+v*r*h-n*g*h-f*r*x+n*d*x)*N,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,h=e.z,m=u*f,v=u*d;return this.set(m*f+r,m*d-a*h,m*h+a*d,0,m*d+a*h,v*d+r,v*h-a*f,0,m*h-a*d,v*h+a*f,u*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,h=n._w,m=u+u,v=f+f,g=d+d,x=u*m,S=u*v,E=u*g,T=f*v,y=f*g,_=d*g,I=h*m,L=h*v,C=h*g,W=r.x,O=r.y,N=r.z;return a[0]=(1-(T+_))*W,a[1]=(S+C)*W,a[2]=(E-L)*W,a[3]=0,a[4]=(S-C)*O,a[5]=(1-(x+_))*O,a[6]=(y+I)*O,a[7]=0,a[8]=(E+L)*N,a[9]=(y-I)*N,a[10]=(1-(x+T))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=bs.set(a[0],a[1],a[2]).length();const f=bs.set(a[4],a[5],a[6]).length(),d=bs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const m=1/u,v=1/f,g=1/d;return oi.elements[0]*=m,oi.elements[1]*=m,oi.elements[2]*=m,oi.elements[4]*=v,oi.elements[5]*=v,oi.elements[6]*=v,oi.elements[8]*=g,oi.elements[9]*=g,oi.elements[10]*=g,n.setFromRotationMatrix(oi),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Bi){const h=this.elements,m=2*u/(n-e),v=2*u/(r-a),g=(n+e)/(n-e),x=(r+a)/(r-a);let S,E;if(d===Bi)S=-(f+u)/(f-u),E=-2*f*u/(f-u);else if(d===Nl)S=-f/(f-u),E=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Bi){const h=this.elements,m=1/(n-e),v=1/(r-a),g=1/(f-u),x=(n+e)*m,S=(r+a)*v;let E,T;if(d===Bi)E=(f+u)*g,T=-2*g;else if(d===Nl)E=u*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*v,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=T,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const bs=new H,oi=new zt,ux=new H(0,0,0),cx=new H(1,1,1),pr=new H,ul=new H,Gn=new H,Jp=new zt,em=new jo;class di{constructor(e=0,n=0,r=0,a=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],h=a[1],m=a[5],v=a[9],g=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(vt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(h,u));break;case"ZYX":this._y=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return em.setFromEuler(this),this.setFromQuaternion(em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class hg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fx=0;const tm=new H,Ps=new jo,Ui=new zt,cl=new H,No=new H,dx=new H,hx=new jo,nm=new H(1,0,0),im=new H(0,1,0),rm=new H(0,0,1),sm={type:"added"},px={type:"removed"},Ls={type:"childadded",child:null},kc={type:"childremoved",child:null};class an extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new H,n=new di,r=new jo,a=new H(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new zt},normalMatrix:{value:new dt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(nm,e)}rotateY(e){return this.rotateOnAxis(im,e)}rotateZ(e){return this.rotateOnAxis(rm,e)}translateOnAxis(e,n){return tm.copy(e).applyQuaternion(this.quaternion),this.position.add(tm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(nm,e)}translateY(e){return this.translateOnAxis(im,e)}translateZ(e){return this.translateOnAxis(rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?cl.copy(e):cl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(No,cl,this.up):Ui.lookAt(cl,No,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Ps.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sm),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(px),kc.child=e,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sm),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,dx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,v=h.length;m<v;m++){const g=h[m];u(e.shapes,g)}else u(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(u(e.materials,this.material[h]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(u(e.animations,h))}}if(n){const d=f(e.geometries),h=f(e.materials),m=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),S=f(e.animations),E=f(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function f(d){const h=[];for(const m in d){const v=d[m];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}an.DEFAULT_UP=new H(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new H,Ni=new H,zc=new H,Fi=new H,Ds=new H,Is=new H,om=new H,Bc=new H,Hc=new H,Vc=new H,Gc=new Lt,Wc=new Lt,Xc=new Lt;class li{constructor(e=new H,n=new H,r=new H){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ai.subVectors(e,n),a.cross(ai);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ai.subVectors(a,n),Ni.subVectors(r,n),zc.subVectors(e,n);const f=ai.dot(ai),d=ai.dot(Ni),h=ai.dot(zc),m=Ni.dot(Ni),v=Ni.dot(zc),g=f*m-d*d;if(g===0)return u.set(0,0,0),null;const x=1/g,S=(m*h-d*v)*x,E=(f*v-d*h)*x;return u.set(1-S-E,E,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,r,a,u,f,d,h){return this.getBarycoord(e,n,r,a,Fi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(u,Fi.x),h.addScaledVector(f,Fi.y),h.addScaledVector(d,Fi.z),h)}static getInterpolatedAttribute(e,n,r,a,u,f){return Gc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Gc.fromBufferAttribute(e,n),Wc.fromBufferAttribute(e,r),Xc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Gc,u.x),f.addScaledVector(Wc,u.y),f.addScaledVector(Xc,u.z),f}static isFrontFacing(e,n,r,a){return ai.subVectors(r,n),Ni.subVectors(e,n),ai.cross(Ni).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ai.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return li.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Ds.subVectors(a,r),Is.subVectors(u,r),Bc.subVectors(e,r);const h=Ds.dot(Bc),m=Is.dot(Bc);if(h<=0&&m<=0)return n.copy(r);Hc.subVectors(e,a);const v=Ds.dot(Hc),g=Is.dot(Hc);if(v>=0&&g<=v)return n.copy(a);const x=h*g-v*m;if(x<=0&&h>=0&&v<=0)return f=h/(h-v),n.copy(r).addScaledVector(Ds,f);Vc.subVectors(e,u);const S=Ds.dot(Vc),E=Is.dot(Vc);if(E>=0&&S<=E)return n.copy(u);const T=S*m-h*E;if(T<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(r).addScaledVector(Is,d);const y=v*E-S*g;if(y<=0&&g-v>=0&&S-E>=0)return om.subVectors(u,a),d=(g-v)/(g-v+(S-E)),n.copy(a).addScaledVector(om,d);const _=1/(y+T+x);return f=T*_,d=x*_,n.copy(r).addScaledVector(Ds,f).addScaledVector(Is,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},fl={h:0,s:0,l:0};function jc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class pt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=At.workingColorSpace){return this.r=e,this.g=n,this.b=r,At.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=At.workingColorSpace){if(e=od(e,1),n=vt(n,0,1),r=vt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=jc(f,u,e+1/3),this.g=jc(f,u,e),this.b=jc(f,u,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,n=Qn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const r=pg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return At.fromWorkingColorSpace(yn.copy(this),e),Math.round(vt(yn.r*255,0,255))*65536+Math.round(vt(yn.g*255,0,255))*256+Math.round(vt(yn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.fromWorkingColorSpace(yn.copy(this),n);const r=yn.r,a=yn.g,u=yn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let h,m;const v=(d+f)/2;if(d===f)h=0,m=0;else{const g=f-d;switch(m=v<=.5?g/(f+d):g/(2-f-d),f){case r:h=(a-u)/g+(a<u?6:0);break;case a:h=(u-r)/g+2;break;case u:h=(r-a)/g+4;break}h/=6}return e.h=h,e.s=m,e.l=v,e}getRGB(e,n=At.workingColorSpace){return At.fromWorkingColorSpace(yn.copy(this),n),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Qn){At.fromWorkingColorSpace(yn.copy(this),e);const n=yn.r,r=yn.g,a=yn.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(fl);const r=Ho(mr.h,fl.h,n),a=Ho(mr.s,fl.s,n),u=Ho(mr.l,fl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new pt;pt.NAMES=pg;let mx=0;class Jr extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=Hs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uf,this.blendDst=cf,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==uf&&(r.blendSrc=this.blendSrc),this.blendDst!==cf&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const h=u[d];delete h.metadata,f.push(h)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vl extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new H,dl=new Et;let gx=0;class fi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gx++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=jp,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)dl.fromBufferAttribute(this,n),dl.applyMatrix3(e),this.setXY(n,dl.x,dl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ks(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Tn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ks(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ks(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ks(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ks(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),a=Tn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),a=Tn(a,this.array),u=Tn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jp&&(e.usage=this.usage),e}}class mg extends fi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class gg extends fi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ln extends fi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let _x=0;const Zn=new zt,Yc=new an,Us=new H,Wn=new Yo,Fo=new Yo,on=new H;class On extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cg(e)?gg:mg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new dt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,r){return Zn.makeTranslation(e,n,r),this.applyMatrix4(Zn),this}scale(e,n,r){return Zn.makeScale(e,n,r),this.applyMatrix4(Zn),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ln(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Wn.setFromBufferAttribute(u),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Fo.setFromBufferAttribute(d),this.morphTargetsRelative?(on.addVectors(Wn.min,Fo.min),Wn.expandByPoint(on),on.addVectors(Wn.max,Fo.max),Wn.expandByPoint(on)):(Wn.expandByPoint(Fo.min),Wn.expandByPoint(Fo.max))}Wn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)on.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(on));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],h=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)on.fromBufferAttribute(d,m),h&&(Us.fromBufferAttribute(e,m),on.add(Us)),a=Math.max(a,r.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],h=[];for(let X=0;X<r.count;X++)d[X]=new H,h[X]=new H;const m=new H,v=new H,g=new H,x=new Et,S=new Et,E=new Et,T=new H,y=new H;function _(X,b,R){m.fromBufferAttribute(r,X),v.fromBufferAttribute(r,b),g.fromBufferAttribute(r,R),x.fromBufferAttribute(u,X),S.fromBufferAttribute(u,b),E.fromBufferAttribute(u,R),v.sub(m),g.sub(m),S.sub(x),E.sub(x);const k=1/(S.x*E.y-E.x*S.y);isFinite(k)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(k),y.copy(g).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(k),d[X].add(T),d[b].add(T),d[R].add(T),h[X].add(y),h[b].add(y),h[R].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let X=0,b=I.length;X<b;++X){const R=I[X],k=R.start,ne=R.count;for(let Q=k,ue=k+ne;Q<ue;Q+=3)_(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const L=new H,C=new H,W=new H,O=new H;function N(X){W.fromBufferAttribute(a,X),O.copy(W);const b=d[X];L.copy(b),L.sub(W.multiplyScalar(W.dot(b))).normalize(),C.crossVectors(O,b);const k=C.dot(h[X])<0?-1:1;f.setXYZW(X,L.x,L.y,L.z,k)}for(let X=0,b=I.length;X<b;++X){const R=I[X],k=R.start,ne=R.count;for(let Q=k,ue=k+ne;Q<ue;Q+=3)N(e.getX(Q+0)),N(e.getX(Q+1)),N(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new H,u=new H,f=new H,d=new H,h=new H,m=new H,v=new H,g=new H;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,E),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,y),v.subVectors(f,u),g.subVectors(a,u),v.cross(g),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),d.add(v),h.add(v),m.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,u),g.subVectors(a,u),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)on.fromBufferAttribute(e,n),on.normalize(),e.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function e(d,h){const m=d.array,v=d.itemSize,g=d.normalized,x=new m.constructor(h.length*v);let S=0,E=0;for(let T=0,y=h.length;T<y;T++){d.isInterleavedBufferAttribute?S=h[T]*d.data.stride+d.offset:S=h[T]*v;for(let _=0;_<v;_++)x[E++]=m[S++]}return new fi(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new On,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const h=[],m=u[d];for(let v=0,g=m.length;v<g;v++){const x=m[v],S=e(x,r);h.push(S)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,h=f.length;d<h;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let u=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],v=[];for(let g=0,x=m.length;g<x;g++){const S=m[g];v.push(S.toJSON(e.data))}v.length>0&&(a[h]=v,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const u=e.morphAttributes;for(const m in u){const v=[],g=u[m];for(let x=0,S=g.length;x<S;x++)v.push(g[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const g=f[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const am=new zt,Br=new dg,hl=new Hl,lm=new H,pl=new H,ml=new H,gl=new H,qc=new H,_l=new H,um=new H,vl=new H;class dn extends an{constructor(e=new On,n=new Vl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){_l.set(0,0,0);for(let h=0,m=u.length;h<m;h++){const v=d[h],g=u[h];v!==0&&(qc.fromBufferAttribute(g,e),f?_l.addScaledVector(qc,v):_l.addScaledVector(qc.sub(n),v))}n.add(_l)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hl.copy(r.boundingSphere),hl.applyMatrix4(u),Br.copy(e.ray).recast(e.near),!(hl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(hl,lm)===null||Br.origin.distanceToSquared(lm)>(e.far-e.near)**2))&&(am.copy(u).invert(),Br.copy(e.ray).applyMatrix4(am),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,h=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const y=x[E],_=f[y.materialIndex],I=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=I,W=L;C<W;C+=3){const O=d.getX(C),N=d.getX(C+1),X=d.getX(C+2);a=xl(this,_,e,r,m,v,g,O,N,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let y=E,_=T;y<_;y+=3){const I=d.getX(y),L=d.getX(y+1),C=d.getX(y+2);a=xl(this,f,e,r,m,v,g,I,L,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const y=x[E],_=f[y.materialIndex],I=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=I,W=L;C<W;C+=3){const O=C,N=C+1,X=C+2;a=xl(this,_,e,r,m,v,g,O,N,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let y=E,_=T;y<_;y+=3){const I=y,L=y+1,C=y+2;a=xl(this,f,e,r,m,v,g,I,L,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function vx(s,e,n,r,a,u,f,d){let h;if(e.side===Nn?h=r.intersectTriangle(f,u,a,!0,d):h=r.intersectTriangle(a,u,f,e.side===Mr,d),h===null)return null;vl.copy(d),vl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(vl);return m<n.near||m>n.far?null:{distance:m,point:vl.clone(),object:s}}function xl(s,e,n,r,a,u,f,d,h,m){s.getVertexPosition(d,pl),s.getVertexPosition(h,ml),s.getVertexPosition(m,gl);const v=vx(s,e,n,r,pl,ml,gl,um);if(v){const g=new H;li.getBarycoord(um,pl,ml,gl,g),a&&(v.uv=li.getInterpolatedAttribute(a,d,h,m,g,new Et)),u&&(v.uv1=li.getInterpolatedAttribute(u,d,h,m,g,new Et)),f&&(v.normal=li.getInterpolatedAttribute(f,d,h,m,g,new H),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:h,c:m,normal:new H,materialIndex:0};li.getNormal(pl,ml,gl,x.normal),v.face=x,v.barycoord=g}return v}class qo extends On{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const h=[],m=[],v=[],g=[];let x=0,S=0;E("z","y","x",-1,-1,r,n,e,f,u,0),E("z","y","x",1,-1,r,n,-e,f,u,1),E("x","z","y",1,1,e,r,n,a,f,2),E("x","z","y",1,-1,e,r,-n,a,f,3),E("x","y","z",1,-1,e,n,r,a,u,4),E("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(h),this.setAttribute("position",new ln(m,3)),this.setAttribute("normal",new ln(v,3)),this.setAttribute("uv",new ln(g,2));function E(T,y,_,I,L,C,W,O,N,X,b){const R=C/N,k=W/X,ne=C/2,Q=W/2,ue=O/2,le=N+1,se=X+1;let de=0,z=0;const ce=new H;for(let oe=0;oe<se;oe++){const U=oe*k-Q;for(let $=0;$<le;$++){const we=$*R-ne;ce[T]=we*I,ce[y]=U*L,ce[_]=ue,m.push(ce.x,ce.y,ce.z),ce[T]=0,ce[y]=0,ce[_]=O>0?1:-1,v.push(ce.x,ce.y,ce.z),g.push($/N),g.push(1-oe/X),de+=1}}for(let oe=0;oe<X;oe++)for(let U=0;U<N;U++){const $=x+U+le*oe,we=x+U+le*(oe+1),q=x+(U+1)+le*(oe+1),fe=x+(U+1)+le*oe;h.push($,we,fe),h.push(we,q,fe),z+=6}d.addGroup(S,z,b),S+=z,x+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function An(s){const e={};for(let n=0;n<s.length;n++){const r=Ks(s[n]);for(const a in r)e[a]=r[a]}return e}function xx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function _g(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const yx={clone:Ks,merge:An};var Sx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sx,this.fragmentShader=Mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=xx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class vg extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new H,cm=new Et,fm=new Et;class Un extends vg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Go*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,n){return this.getViewBounds(e,cm,fm),n.subVectors(fm,cm)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bo*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/h,n-=f.offsetY*r/m,a*=f.width/h,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Fs=1;class Ex extends an{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Un(Ns,Fs,e,n);a.layers=this.layers,this.add(a);const u=new Un(Ns,Fs,e,n);u.layers=this.layers,this.add(u);const f=new Un(Ns,Fs,e,n);f.layers=this.layers,this.add(f);const d=new Un(Ns,Fs,e,n);d.layers=this.layers,this.add(d);const h=new Un(Ns,Fs,e,n);h.layers=this.layers,this.add(h);const m=new Un(Ns,Fs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,h]=n;for(const m of n)this.remove(m);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Nl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,h,m,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(g,x,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class xg extends Fn{constructor(e,n,r,a,u,f,d,h,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,r,a,u,f,d,h,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wx extends Qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new xg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new qo(5,5,5),u=new Er({name:"CubemapFromEquirect",uniforms:Ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Nn,blending:yr});u.uniforms.tEquirect.value=n;const f=new dn(a,u),d=n.minFilter;return n.minFilter===Kr&&(n.minFilter=yi),new Ex(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class vr extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tx={type:"move"};class $c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,r),_=this._getHandJoint(m,T);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],x=v.position.distanceTo(g.position),S=.02,E=.005;m.inputState.pinching&&x>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Tx)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new vr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Gl{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(e),this.density=n}clone(){return new Gl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yg extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Kc=new H,Ax=new H,Rx=new dt;class Xr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Kc.subVectors(r,n).cross(Ax.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Kc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Rx.getNormalMatrix(e),a=this.coplanarPoint(Kc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Hl,yl=new H;class ld{constructor(e=new Xr,n=new Xr,r=new Xr,a=new Xr,u=new Xr,f=new Xr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Bi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],h=a[3],m=a[4],v=a[5],g=a[6],x=a[7],S=a[8],E=a[9],T=a[10],y=a[11],_=a[12],I=a[13],L=a[14],C=a[15];if(r[0].setComponents(h-u,x-m,y-S,C-_).normalize(),r[1].setComponents(h+u,x+m,y+S,C+_).normalize(),r[2].setComponents(h+f,x+v,y+E,C+I).normalize(),r[3].setComponents(h-f,x-v,y-E,C-I).normalize(),r[4].setComponents(h-d,x-g,y-T,C-L).normalize(),n===Bi)r[5].setComponents(h+d,x+g,y+T,C+L).normalize();else if(n===Nl)r[5].setComponents(d,g,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(yl.x=a.normal.x>0?e.max.x:e.min.x,yl.y=a.normal.y>0?e.max.y:e.min.y,yl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wo extends Jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ol=new H,kl=new H,dm=new zt,Oo=new dg,Sl=new Hl,Zc=new H,hm=new H;class zl extends an{constructor(e=new On,n=new Wo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Ol.fromBufferAttribute(n,a-1),kl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Ol.distanceTo(kl);e.setAttribute("lineDistance",new ln(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(a),Sl.radius+=u,e.ray.intersectsSphere(Sl)===!1)return;dm.copy(a).invert(),Oo.copy(e.ray).applyMatrix4(dm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const S=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let T=S,y=E-1;T<y;T+=m){const _=v.getX(T),I=v.getX(T+1),L=Ml(this,e,Oo,h,_,I,T);L&&n.push(L)}if(this.isLineLoop){const T=v.getX(E-1),y=v.getX(S),_=Ml(this,e,Oo,h,T,y,E-1);_&&n.push(_)}}else{const S=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let T=S,y=E-1;T<y;T+=m){const _=Ml(this,e,Oo,h,T,T+1,T);_&&n.push(_)}if(this.isLineLoop){const T=Ml(this,e,Oo,h,E-1,S,E-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Ml(s,e,n,r,a,u,f){const d=s.geometry.attributes.position;if(Ol.fromBufferAttribute(d,a),kl.fromBufferAttribute(d,u),n.distanceSqToSegment(Ol,kl,Zc,hm)>r)return;Zc.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(Zc);if(!(m<e.near||m>e.far))return{distance:m,point:hm.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const pm=new H,mm=new H;class Cx extends zl{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)pm.fromBufferAttribute(n,a),mm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+pm.distanceTo(mm);e.setAttribute("lineDistance",new ln(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sg extends Fn{constructor(e,n,r,a,u,f,d,h,m,v=Vs){if(v!==Vs&&v!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Vs&&(r=Zr),r===void 0&&v===qs&&(r=Ys),super(null,a,u,f,d,h,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:ci,this.minFilter=h!==void 0?h:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ad(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Wl extends On{constructor(e=1,n=1,r=1,a=32,u=1,f=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:u,openEnded:f,thetaStart:d,thetaLength:h};const m=this;a=Math.floor(a),u=Math.floor(u);const v=[],g=[],x=[],S=[];let E=0;const T=[],y=r/2;let _=0;I(),f===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(x,3)),this.setAttribute("uv",new ln(S,2));function I(){const C=new H,W=new H;let O=0;const N=(n-e)/r;for(let X=0;X<=u;X++){const b=[],R=X/u,k=R*(n-e)+e;for(let ne=0;ne<=a;ne++){const Q=ne/a,ue=Q*h+d,le=Math.sin(ue),se=Math.cos(ue);W.x=k*le,W.y=-R*r+y,W.z=k*se,g.push(W.x,W.y,W.z),C.set(le,N,se).normalize(),x.push(C.x,C.y,C.z),S.push(Q,1-R),b.push(E++)}T.push(b)}for(let X=0;X<a;X++)for(let b=0;b<u;b++){const R=T[b][X],k=T[b+1][X],ne=T[b+1][X+1],Q=T[b][X+1];(e>0||b!==0)&&(v.push(R,k,Q),O+=3),(n>0||b!==u-1)&&(v.push(k,ne,Q),O+=3)}m.addGroup(_,O,0),_+=O}function L(C){const W=E,O=new Et,N=new H;let X=0;const b=C===!0?e:n,R=C===!0?1:-1;for(let ne=1;ne<=a;ne++)g.push(0,y*R,0),x.push(0,R,0),S.push(.5,.5),E++;const k=E;for(let ne=0;ne<=a;ne++){const ue=ne/a*h+d,le=Math.cos(ue),se=Math.sin(ue);N.x=b*se,N.y=y*R,N.z=b*le,g.push(N.x,N.y,N.z),x.push(0,R,0),O.x=le*.5+.5,O.y=se*.5*R+.5,S.push(O.x,O.y),E++}for(let ne=0;ne<a;ne++){const Q=W+ne,ue=k+ne;C===!0?v.push(ue,ue+1,Q):v.push(ue+1,ue,Q),X+=3}m.addGroup(_,X,C===!0?1:2),_+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xl extends On{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),h=Math.floor(a),m=d+1,v=h+1,g=e/d,x=n/h,S=[],E=[],T=[],y=[];for(let _=0;_<v;_++){const I=_*x-f;for(let L=0;L<m;L++){const C=L*g-u;E.push(C,-I,0),T.push(0,0,1),y.push(L/d),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let I=0;I<d;I++){const L=I+m*_,C=I+m*(_+1),W=I+1+m*(_+1),O=I+1+m*_;S.push(L,C,O),S.push(C,W,O)}this.setIndex(S),this.setAttribute("position",new ln(E,3)),this.setAttribute("normal",new ln(T,3)),this.setAttribute("uv",new ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.width,e.height,e.widthSegments,e.heightSegments)}}class xr extends On{constructor(e=1,n=32,r=16,a=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:u,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(f+d,Math.PI);let m=0;const v=[],g=new H,x=new H,S=[],E=[],T=[],y=[];for(let _=0;_<=r;_++){const I=[],L=_/r;let C=0;_===0&&f===0?C=.5/n:_===r&&h===Math.PI&&(C=-.5/n);for(let W=0;W<=n;W++){const O=W/n;g.x=-e*Math.cos(a+O*u)*Math.sin(f+L*d),g.y=e*Math.cos(f+L*d),g.z=e*Math.sin(a+O*u)*Math.sin(f+L*d),E.push(g.x,g.y,g.z),x.copy(g).normalize(),T.push(x.x,x.y,x.z),y.push(O+C,1-L),I.push(m++)}v.push(I)}for(let _=0;_<r;_++)for(let I=0;I<n;I++){const L=v[_][I+1],C=v[_][I],W=v[_+1][I],O=v[_+1][I+1];(_!==0||f>0)&&S.push(L,C,O),(_!==r-1||h<Math.PI)&&S.push(C,W,O)}this.setIndex(S),this.setAttribute("position",new ln(E,3)),this.setAttribute("normal",new ln(T,3)),this.setAttribute("uv",new ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zs extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sd,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bx extends Jr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pt(16777215),this.specular=new pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sd,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Px extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Av,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lx extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ud extends an{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Qc=new zt,gm=new H,_m=new H;class Mg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ld,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;gm.setFromMatrixPosition(e.matrixWorld),n.position.copy(gm),_m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(_m),n.updateMatrixWorld(),Qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vm=new zt,ko=new H,Jc=new H;class Dx extends Mg{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),ko.setFromMatrixPosition(e.matrixWorld),r.position.copy(ko),Jc.copy(r.position),Jc.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(Jc),r.updateMatrixWorld(),a.makeTranslation(-ko.x,-ko.y,-ko.z),vm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vm)}}class Dl extends ud{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new Dx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Eg extends vg{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=v*this.view.offsetY,h=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ix extends Mg{constructor(){super(new Eg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ux extends ud{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new Ix}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wg extends ud{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nx extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Tg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=xm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function xm(){return performance.now()}class Fx extends Cx{constructor(e=10,n=10,r=4473924,a=8947848){r=new pt(r),a=new pt(a);const u=n/2,f=e/n,d=e/2,h=[],m=[];for(let x=0,S=0,E=-d;x<=n;x++,E+=f){h.push(-d,0,E,d,0,E),h.push(E,0,-d,E,0,d);const T=x===u?r:a;T.toArray(m,S),S+=3,T.toArray(m,S),S+=3,T.toArray(m,S),S+=3,T.toArray(m,S),S+=3}const v=new On;v.setAttribute("position",new ln(h,3)),v.setAttribute("color",new ln(m,3));const g=new Wo({vertexColors:!0,toneMapped:!1});super(v,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const ym=new H;let El,ef;class Sm extends an{constructor(e=new H(0,0,1),n=new H(0,0,0),r=1,a=16776960,u=r*.2,f=u*.2){super(),this.type="ArrowHelper",El===void 0&&(El=new On,El.setAttribute("position",new ln([0,0,0,0,1,0],3)),ef=new Wl(0,.5,1,5,1),ef.translate(0,-.5,0)),this.position.copy(n),this.line=new zl(El,new Wo({color:a,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new dn(ef,new Vl({color:a,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(r,u,f)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{ym.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(ym,n)}}setLength(e,n=e*.2,r=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(r,n,r),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}function Mm(s,e,n,r){const a=Ox(r);switch(n){case ng:return s*e;case rg:return s*e;case sg:return s*e*2;case og:return s*e/a.components*a.byteLength;case nd:return s*e/a.components*a.byteLength;case ag:return s*e*2/a.components*a.byteLength;case id:return s*e*2/a.components*a.byteLength;case ig:return s*e*3/a.components*a.byteLength;case ui:return s*e*4/a.components*a.byteLength;case rd:return s*e*4/a.components*a.byteLength;case Rl:case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bl:case Pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ef:case Tf:return Math.max(s,16)*Math.max(e,8)/4;case Mf:case wf:return Math.max(s,8)*Math.max(e,8)/2;case Af:case Rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Df:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case If:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Bf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Hf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Vf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ll:case Gf:case Wf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case lg:case Xf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case jf:case Yf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ox(s){switch(s){case Vi:case Jm:return{byteLength:1,components:1};case Vo:case eg:case Xo:return{byteLength:2,components:1};case ed:case td:return{byteLength:2,components:4};case Zr:case Jf:case zi:return{byteLength:4,components:1};case tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ag(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function kx(s){const e=new WeakMap;function n(d,h){const m=d.array,v=d.usage,g=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,v),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,h,m){const v=h.array,g=h.updateRanges;if(s.bindBuffer(m,d),g.length===0)s.bufferSubData(m,0,v);else{g.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<g.length;S++){const E=g[x],T=g[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,g[x]=T)}g.length=x+1;for(let S=0,E=g.length;S<E;S++){const T=g[S];s.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function f(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:a,remove:u,update:f}}var zx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$x=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ly=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,py=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,my="gl_FragColor = linearToOutputTexel( gl_FragColor );",gy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_y=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,My=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ey=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ty=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ay=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ry=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,by=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Py=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ly=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ny=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Oy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ky=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,By=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$y=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ky=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_S=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,SS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,MS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ES=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,CS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$S=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:zx,alphahash_pars_fragment:Bx,alphamap_fragment:Hx,alphamap_pars_fragment:Vx,alphatest_fragment:Gx,alphatest_pars_fragment:Wx,aomap_fragment:Xx,aomap_pars_fragment:jx,batching_pars_vertex:Yx,batching_vertex:qx,begin_vertex:$x,beginnormal_vertex:Kx,bsdfs:Zx,iridescence_fragment:Qx,bumpmap_pars_fragment:Jx,clipping_planes_fragment:ey,clipping_planes_pars_fragment:ty,clipping_planes_pars_vertex:ny,clipping_planes_vertex:iy,color_fragment:ry,color_pars_fragment:sy,color_pars_vertex:oy,color_vertex:ay,common:ly,cube_uv_reflection_fragment:uy,defaultnormal_vertex:cy,displacementmap_pars_vertex:fy,displacementmap_vertex:dy,emissivemap_fragment:hy,emissivemap_pars_fragment:py,colorspace_fragment:my,colorspace_pars_fragment:gy,envmap_fragment:_y,envmap_common_pars_fragment:vy,envmap_pars_fragment:xy,envmap_pars_vertex:yy,envmap_physical_pars_fragment:Ly,envmap_vertex:Sy,fog_vertex:My,fog_pars_vertex:Ey,fog_fragment:wy,fog_pars_fragment:Ty,gradientmap_pars_fragment:Ay,lightmap_pars_fragment:Ry,lights_lambert_fragment:Cy,lights_lambert_pars_fragment:by,lights_pars_begin:Py,lights_toon_fragment:Dy,lights_toon_pars_fragment:Iy,lights_phong_fragment:Uy,lights_phong_pars_fragment:Ny,lights_physical_fragment:Fy,lights_physical_pars_fragment:Oy,lights_fragment_begin:ky,lights_fragment_maps:zy,lights_fragment_end:By,logdepthbuf_fragment:Hy,logdepthbuf_pars_fragment:Vy,logdepthbuf_pars_vertex:Gy,logdepthbuf_vertex:Wy,map_fragment:Xy,map_pars_fragment:jy,map_particle_fragment:Yy,map_particle_pars_fragment:qy,metalnessmap_fragment:$y,metalnessmap_pars_fragment:Ky,morphinstance_vertex:Zy,morphcolor_vertex:Qy,morphnormal_vertex:Jy,morphtarget_pars_vertex:eS,morphtarget_vertex:tS,normal_fragment_begin:nS,normal_fragment_maps:iS,normal_pars_fragment:rS,normal_pars_vertex:sS,normal_vertex:oS,normalmap_pars_fragment:aS,clearcoat_normal_fragment_begin:lS,clearcoat_normal_fragment_maps:uS,clearcoat_pars_fragment:cS,iridescence_pars_fragment:fS,opaque_fragment:dS,packing:hS,premultiplied_alpha_fragment:pS,project_vertex:mS,dithering_fragment:gS,dithering_pars_fragment:_S,roughnessmap_fragment:vS,roughnessmap_pars_fragment:xS,shadowmap_pars_fragment:yS,shadowmap_pars_vertex:SS,shadowmap_vertex:MS,shadowmask_pars_fragment:ES,skinbase_vertex:wS,skinning_pars_vertex:TS,skinning_vertex:AS,skinnormal_vertex:RS,specularmap_fragment:CS,specularmap_pars_fragment:bS,tonemapping_fragment:PS,tonemapping_pars_fragment:LS,transmission_fragment:DS,transmission_pars_fragment:IS,uv_pars_fragment:US,uv_pars_vertex:NS,uv_vertex:FS,worldpos_vertex:OS,background_vert:kS,background_frag:zS,backgroundCube_vert:BS,backgroundCube_frag:HS,cube_vert:VS,cube_frag:GS,depth_vert:WS,depth_frag:XS,distanceRGBA_vert:jS,distanceRGBA_frag:YS,equirect_vert:qS,equirect_frag:$S,linedashed_vert:KS,linedashed_frag:ZS,meshbasic_vert:QS,meshbasic_frag:JS,meshlambert_vert:eM,meshlambert_frag:tM,meshmatcap_vert:nM,meshmatcap_frag:iM,meshnormal_vert:rM,meshnormal_frag:sM,meshphong_vert:oM,meshphong_frag:aM,meshphysical_vert:lM,meshphysical_frag:uM,meshtoon_vert:cM,meshtoon_frag:fM,points_vert:dM,points_frag:hM,shadow_vert:pM,shadow_frag:mM,sprite_vert:gM,sprite_frag:_M},ke={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},xi={basic:{uniforms:An([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:An([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new pt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:An([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:An([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:An([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new pt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:An([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:An([ke.points,ke.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:An([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:An([ke.common,ke.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:An([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:An([ke.sprite,ke.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:An([ke.common,ke.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:An([ke.lights,ke.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};xi.physical={uniforms:An([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const wl={r:0,b:0,g:0},Vr=new di,vM=new zt;function xM(s,e,n,r,a,u,f){const d=new pt(0);let h=u===!0?0:1,m,v,g=null,x=0,S=null;function E(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?n:e).get(C)),C}function T(L){let C=!1;const W=E(L);W===null?_(d,h):W&&W.isColor&&(_(W,1),C=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,C){const W=E(C);W&&(W.isCubeTexture||W.mapping===Bl)?(v===void 0&&(v=new dn(new qo(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:Ks(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(O,N,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Vr.copy(C.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),v.material.uniforms.envMap.value=W,v.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(vM.makeRotationFromEuler(Vr)),v.material.toneMapped=At.getTransfer(W.colorSpace)!==Pt,(g!==W||x!==W.version||S!==s.toneMapping)&&(v.material.needsUpdate=!0,g=W,x=W.version,S=s.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):W&&W.isTexture&&(m===void 0&&(m=new dn(new Xl(2,2),new Er({name:"BackgroundMaterial",uniforms:Ks(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=W,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=At.getTransfer(W.colorSpace)!==Pt,W.matrixAutoUpdate===!0&&W.updateMatrix(),m.material.uniforms.uvTransform.value.copy(W.matrix),(g!==W||x!==W.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,g=W,x=W.version,S=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,C){L.getRGB(wl,_g(s)),r.buffers.color.setClear(wl.r,wl.g,wl.b,C,f)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,C=1){d.set(L),h=C,_(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,_(d,h)},render:T,addToRenderList:y,dispose:I}}function yM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(R,k,ne,Q,ue){let le=!1;const se=g(Q,ne,k);u!==se&&(u=se,m(u.object)),le=S(R,Q,ne,ue),le&&E(R,Q,ne,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(le||f)&&(f=!1,C(R,k,ne,Q),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function h(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function v(R){return s.deleteVertexArray(R)}function g(R,k,ne){const Q=ne.wireframe===!0;let ue=r[R.id];ue===void 0&&(ue={},r[R.id]=ue);let le=ue[k.id];le===void 0&&(le={},ue[k.id]=le);let se=le[Q];return se===void 0&&(se=x(h()),le[Q]=se),se}function x(R){const k=[],ne=[],Q=[];for(let ue=0;ue<n;ue++)k[ue]=0,ne[ue]=0,Q[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ne,attributeDivisors:Q,object:R,attributes:{},index:null}}function S(R,k,ne,Q){const ue=u.attributes,le=k.attributes;let se=0;const de=ne.getAttributes();for(const z in de)if(de[z].location>=0){const oe=ue[z];let U=le[z];if(U===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),oe===void 0||oe.attribute!==U||U&&oe.data!==U.data)return!0;se++}return u.attributesNum!==se||u.index!==Q}function E(R,k,ne,Q){const ue={},le=k.attributes;let se=0;const de=ne.getAttributes();for(const z in de)if(de[z].location>=0){let oe=le[z];oe===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const U={};U.attribute=oe,oe&&oe.data&&(U.data=oe.data),ue[z]=U,se++}u.attributes=ue,u.attributesNum=se,u.index=Q}function T(){const R=u.newAttributes;for(let k=0,ne=R.length;k<ne;k++)R[k]=0}function y(R){_(R,0)}function _(R,k){const ne=u.newAttributes,Q=u.enabledAttributes,ue=u.attributeDivisors;ne[R]=1,Q[R]===0&&(s.enableVertexAttribArray(R),Q[R]=1),ue[R]!==k&&(s.vertexAttribDivisor(R,k),ue[R]=k)}function I(){const R=u.newAttributes,k=u.enabledAttributes;for(let ne=0,Q=k.length;ne<Q;ne++)k[ne]!==R[ne]&&(s.disableVertexAttribArray(ne),k[ne]=0)}function L(R,k,ne,Q,ue,le,se){se===!0?s.vertexAttribIPointer(R,k,ne,ue,le):s.vertexAttribPointer(R,k,ne,Q,ue,le)}function C(R,k,ne,Q){T();const ue=Q.attributes,le=ne.getAttributes(),se=k.defaultAttributeValues;for(const de in le){const z=le[de];if(z.location>=0){let ce=ue[de];if(ce===void 0&&(de==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),de==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ce!==void 0){const oe=ce.normalized,U=ce.itemSize,$=e.get(ce);if($===void 0)continue;const we=$.buffer,q=$.type,fe=$.bytesPerElement,ge=q===s.INT||q===s.UNSIGNED_INT||ce.gpuType===Jf;if(ce.isInterleavedBufferAttribute){const _e=ce.data,be=_e.stride,He=ce.offset;if(_e.isInstancedInterleavedBuffer){for(let Xe=0;Xe<z.locationSize;Xe++)_(z.location+Xe,_e.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Xe=0;Xe<z.locationSize;Xe++)y(z.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,we);for(let Xe=0;Xe<z.locationSize;Xe++)L(z.location+Xe,U/z.locationSize,q,oe,be*fe,(He+U/z.locationSize*Xe)*fe,ge)}else{if(ce.isInstancedBufferAttribute){for(let _e=0;_e<z.locationSize;_e++)_(z.location+_e,ce.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let _e=0;_e<z.locationSize;_e++)y(z.location+_e);s.bindBuffer(s.ARRAY_BUFFER,we);for(let _e=0;_e<z.locationSize;_e++)L(z.location+_e,U/z.locationSize,q,oe,U*fe,U/z.locationSize*_e*fe,ge)}}else if(se!==void 0){const oe=se[de];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(z.location,oe);break;case 3:s.vertexAttrib3fv(z.location,oe);break;case 4:s.vertexAttrib4fv(z.location,oe);break;default:s.vertexAttrib1fv(z.location,oe)}}}}I()}function W(){X();for(const R in r){const k=r[R];for(const ne in k){const Q=k[ne];for(const ue in Q)v(Q[ue].object),delete Q[ue];delete k[ne]}delete r[R]}}function O(R){if(r[R.id]===void 0)return;const k=r[R.id];for(const ne in k){const Q=k[ne];for(const ue in Q)v(Q[ue].object),delete Q[ue];delete k[ne]}delete r[R.id]}function N(R){for(const k in r){const ne=r[k];if(ne[R.id]===void 0)continue;const Q=ne[R.id];for(const ue in Q)v(Q[ue].object),delete Q[ue];delete ne[R.id]}}function X(){b(),f=!0,u!==a&&(u=a,m(u.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:X,resetDefaultState:b,dispose:W,releaseStatesOfGeometry:O,releaseStatesOfProgram:N,initAttributes:T,enableAttribute:y,disableUnusedAttributes:I}}function SM(s,e,n){let r;function a(m){r=m}function u(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function f(m,v,g){g!==0&&(s.drawArraysInstanced(r,m,v,g),n.update(v,r,g))}function d(m,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,g);let S=0;for(let E=0;E<g;E++)S+=v[E];n.update(S,r,1)}function h(m,v,g,x){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],v[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,g);let E=0;for(let T=0;T<g;T++)E+=v[T]*x[T];n.update(E,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function MM(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(N){return!(N!==ui&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const X=N===Xo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Vi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==zi&&!X)}function h(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=h(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),W=E>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:h,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:W,maxSamples:O}}function EM(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Xr,d=new dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||r!==0||a;return a=x,r=g.length,S},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,x){n=v(g,x,0)},this.setState=function(g,x,S){const E=g.clippingPlanes,T=g.clipIntersection,y=g.clipShadows,_=s.get(g);if(!a||E===null||E.length===0||u&&!y)u?v(null):m();else{const I=u?0:r,L=I*4;let C=_.clippingState||null;h.value=C,C=v(E,x,L,S);for(let W=0;W!==L;++W)C[W]=n[W];_.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=I}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,x,S,E){const T=g!==null?g.length:0;let y=null;if(T!==0){if(y=h.value,E!==!0||y===null){const _=S+T*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,C=S;L!==T;++L,C+=4)f.copy(g[L]).applyMatrix4(I,d),f.normal.toArray(y,C),y[C+3]=f.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function wM(s){let e=new WeakMap;function n(f,d){return d===vf?f.mapping=Xs:d===xf&&(f.mapping=js),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===vf||d===xf)if(e.has(f)){const h=e.get(f).texture;return n(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const m=new wx(h.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Bs=4,Em=[.125,.215,.35,.446,.526,.582],qr=20,tf=new Eg,wm=new pt;let nf=null,rf=0,sf=0,of=!1;const jr=(1+Math.sqrt(5))/2,Os=1/jr,Tm=[new H(-jr,Os,0),new H(jr,Os,0),new H(-Os,0,jr),new H(Os,0,jr),new H(0,jr,-Os),new H(0,jr,Os),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],TM=new H;class Am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,u={}){const{size:f=256,position:d=TM}=u;nf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),sf=this._renderer.getActiveMipmapLevel(),of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,d),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nf,rf,sf),this._renderer.xr.enabled=of,e.scissorTest=!1,Tl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),sf=this._renderer.getActiveMipmapLevel(),of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Xo,format:ui,colorSpace:$s,depthBuffer:!1},a=Rm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AM(u)),this._blurMaterial=RM(u,e,n)}return a}_compileMaterial(e){const n=new dn(this._lodPlanes[0],e);this._renderer.compile(n,tf)}_sceneToCubeUV(e,n,r,a,u){const h=new Un(90,1,n,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(wm),g.toneMapping=Sr,g.autoClear=!1;const E=new Vl({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),T=new dn(new qo,E);let y=!1;const _=e.background;_?_.isColor&&(E.color.copy(_),e.background=null,y=!0):(E.color.copy(wm),y=!0);for(let I=0;I<6;I++){const L=I%3;L===0?(h.up.set(0,m[I],0),h.position.set(u.x,u.y,u.z),h.lookAt(u.x+v[I],u.y,u.z)):L===1?(h.up.set(0,0,m[I]),h.position.set(u.x,u.y,u.z),h.lookAt(u.x,u.y+v[I],u.z)):(h.up.set(0,m[I],0),h.position.set(u.x,u.y,u.z),h.lookAt(u.x,u.y,u.z+v[I]));const C=this._cubeSize;Tl(a,L*C,I>2?C:0,C,C),g.setRenderTarget(a),y&&g.render(T,h),g.render(e,h)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=S,g.autoClear=x,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Xs||e.mapping===js;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cm());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new dn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const h=this._cubeSize;Tl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(f,tf)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Tm[(a-u-1)%Tm.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const h=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new dn(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*qr-1),T=u/E,y=isFinite(u)?1+Math.floor(v*T):qr;y>qr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${qr}`);const _=[];let I=0;for(let N=0;N<qr;++N){const X=N/T,b=Math.exp(-X*X/2);_.push(b),N===0?I+=b:N<y&&(I+=2*b)}for(let N=0;N<_.length;N++)_[N]=_[N]/I;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-r;const C=this._sizeLods[a],W=3*C*(a>L-Bs?a-L+Bs:0),O=4*(this._cubeSize-C);Tl(n,W,O,3*C,2*C),h.setRenderTarget(n),h.render(g,tf)}}function AM(s){const e=[],n=[],r=[];let a=s;const u=s-Bs+1+Em.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let h=1/d;f>s-Bs?h=Em[f-s+Bs-1]:f===0&&(h=0),r.push(h);const m=1/(d-2),v=-m,g=1+m,x=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,E=6,T=3,y=2,_=1,I=new Float32Array(T*E*S),L=new Float32Array(y*E*S),C=new Float32Array(_*E*S);for(let O=0;O<S;O++){const N=O%3*2/3-1,X=O>2?0:-1,b=[N,X,0,N+2/3,X,0,N+2/3,X+1,0,N,X,0,N+2/3,X+1,0,N,X+1,0];I.set(b,T*E*O),L.set(x,y*E*O);const R=[O,O,O,O,O,O];C.set(R,_*E*O)}const W=new On;W.setAttribute("position",new fi(I,T)),W.setAttribute("uv",new fi(L,y)),W.setAttribute("faceIndex",new fi(C,_)),e.push(W),a>Bs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Rm(s,e,n){const r=new Qr(s,e,n);return r.texture.mapping=Bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Tl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function RM(s,e,n){const r=new Float32Array(qr),a=new H(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Cm(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function bm(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function cd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function CM(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===vf||h===xf,v=h===Xs||h===js;if(m||v){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Am(s)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return m&&S&&S.height>0||v&&S&&a(S)?(n===null&&(n=new Am(s)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d){let h=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&h++;return h===m}function u(d){const h=d.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function bM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Wr("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function PM(s,e,n,r){const a={},u=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(g,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function h(g){const x=g.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function m(g){const x=[],S=g.index,E=g.attributes.position;let T=0;if(S!==null){const I=S.array;T=S.version;for(let L=0,C=I.length;L<C;L+=3){const W=I[L+0],O=I[L+1],N=I[L+2];x.push(W,O,O,N,N,W)}}else if(E!==void 0){const I=E.array;T=E.version;for(let L=0,C=I.length/3-1;L<C;L+=3){const W=L+0,O=L+1,N=L+2;x.push(W,O,O,N,N,W)}}else return;const y=new(cg(x)?gg:mg)(x,1);y.version=T;const _=u.get(g);_&&e.remove(_),u.set(g,y)}function v(g){const x=u.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&m(g)}else m(g);return u.get(g)}return{get:d,update:h,getWireframeAttribute:v}}function LM(s,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function h(x,S){s.drawElements(r,S,u,x*f),n.update(S,r,1)}function m(x,S,E){E!==0&&(s.drawElementsInstanced(r,S,u,x*f,E),n.update(S,r,E))}function v(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,E);let y=0;for(let _=0;_<E;_++)y+=S[_];n.update(y,r,1)}function g(x,S,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)m(x[_]/f,S[_],T[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,T,0,E);let _=0;for(let I=0;I<E;I++)_+=S[I]*T[I];n.update(_,r,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function DM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function IM(s,e,n){const r=new WeakMap,a=new Lt;function u(f,d,h){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let R=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var S=R;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),T===!0&&(C=2),y===!0&&(C=3);let W=d.attributes.position.count*C,O=1;W>e.maxTextureSize&&(O=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const N=new Float32Array(W*O*4*g),X=new fg(N,W,O,g);X.type=zi,X.needsUpdate=!0;const b=C*4;for(let k=0;k<g;k++){const ne=_[k],Q=I[k],ue=L[k],le=W*O*4*k;for(let se=0;se<ne.count;se++){const de=se*b;E===!0&&(a.fromBufferAttribute(ne,se),N[le+de+0]=a.x,N[le+de+1]=a.y,N[le+de+2]=a.z,N[le+de+3]=0),T===!0&&(a.fromBufferAttribute(Q,se),N[le+de+4]=a.x,N[le+de+5]=a.y,N[le+de+6]=a.z,N[le+de+7]=0),y===!0&&(a.fromBufferAttribute(ue,se),N[le+de+8]=a.x,N[le+de+9]=a.y,N[le+de+10]=a.z,N[le+de+11]=ue.itemSize===4?a.w:1)}}x={count:g,texture:X,size:new Et(W,O)},r.set(d,x),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const T=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function UM(s,e,n,r){let a=new WeakMap;function u(h){const m=r.render.frame,v=h.geometry,g=e.get(h,v);if(a.get(g)!==m&&(e.update(g),a.set(g,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return g}function f(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const Rg=new Fn,Pm=new Sg(1,1),Cg=new fg,bg=new ax,Pg=new xg,Lm=[],Dm=[],Im=new Float32Array(16),Um=new Float32Array(9),Nm=new Float32Array(4);function Js(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=Lm[a];if(u===void 0&&(u=new Float32Array(a),Lm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function Qt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Jt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function jl(s,e){let n=Dm[e];n===void 0&&(n=new Int32Array(e),Dm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function NM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function FM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;s.uniform2fv(this.addr,e),Jt(n,e)}}function OM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Qt(n,e))return;s.uniform3fv(this.addr,e),Jt(n,e)}}function kM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;s.uniform4fv(this.addr,e),Jt(n,e)}}function zM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Qt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,r))return;Nm.set(r),s.uniformMatrix2fv(this.addr,!1,Nm),Jt(n,r)}}function BM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Qt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,r))return;Um.set(r),s.uniformMatrix3fv(this.addr,!1,Um),Jt(n,r)}}function HM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Qt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,r))return;Im.set(r),s.uniformMatrix4fv(this.addr,!1,Im),Jt(n,r)}}function VM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function GM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;s.uniform2iv(this.addr,e),Jt(n,e)}}function WM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;s.uniform3iv(this.addr,e),Jt(n,e)}}function XM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;s.uniform4iv(this.addr,e),Jt(n,e)}}function jM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function YM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;s.uniform2uiv(this.addr,e),Jt(n,e)}}function qM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;s.uniform3uiv(this.addr,e),Jt(n,e)}}function $M(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;s.uniform4uiv(this.addr,e),Jt(n,e)}}function KM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(Pm.compareFunction=ug,u=Pm):u=Rg,n.setTexture2D(e||u,a)}function ZM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||bg,a)}function QM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Pg,a)}function JM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Cg,a)}function eE(s){switch(s){case 5126:return NM;case 35664:return FM;case 35665:return OM;case 35666:return kM;case 35674:return zM;case 35675:return BM;case 35676:return HM;case 5124:case 35670:return VM;case 35667:case 35671:return GM;case 35668:case 35672:return WM;case 35669:case 35673:return XM;case 5125:return jM;case 36294:return YM;case 36295:return qM;case 36296:return $M;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return ZM;case 35680:case 36300:case 36308:case 36293:return QM;case 36289:case 36303:case 36311:case 36292:return JM}}function tE(s,e){s.uniform1fv(this.addr,e)}function nE(s,e){const n=Js(e,this.size,2);s.uniform2fv(this.addr,n)}function iE(s,e){const n=Js(e,this.size,3);s.uniform3fv(this.addr,n)}function rE(s,e){const n=Js(e,this.size,4);s.uniform4fv(this.addr,n)}function sE(s,e){const n=Js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function oE(s,e){const n=Js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function aE(s,e){const n=Js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function lE(s,e){s.uniform1iv(this.addr,e)}function uE(s,e){s.uniform2iv(this.addr,e)}function cE(s,e){s.uniform3iv(this.addr,e)}function fE(s,e){s.uniform4iv(this.addr,e)}function dE(s,e){s.uniform1uiv(this.addr,e)}function hE(s,e){s.uniform2uiv(this.addr,e)}function pE(s,e){s.uniform3uiv(this.addr,e)}function mE(s,e){s.uniform4uiv(this.addr,e)}function gE(s,e,n){const r=this.cache,a=e.length,u=jl(n,a);Qt(r,u)||(s.uniform1iv(this.addr,u),Jt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||Rg,u[f])}function _E(s,e,n){const r=this.cache,a=e.length,u=jl(n,a);Qt(r,u)||(s.uniform1iv(this.addr,u),Jt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||bg,u[f])}function vE(s,e,n){const r=this.cache,a=e.length,u=jl(n,a);Qt(r,u)||(s.uniform1iv(this.addr,u),Jt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||Pg,u[f])}function xE(s,e,n){const r=this.cache,a=e.length,u=jl(n,a);Qt(r,u)||(s.uniform1iv(this.addr,u),Jt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||Cg,u[f])}function yE(s){switch(s){case 5126:return tE;case 35664:return nE;case 35665:return iE;case 35666:return rE;case 35674:return sE;case 35675:return oE;case 35676:return aE;case 5124:case 35670:return lE;case 35667:case 35671:return uE;case 35668:case 35672:return cE;case 35669:case 35673:return fE;case 5125:return dE;case 36294:return hE;case 36295:return pE;case 36296:return mE;case 35678:case 36198:case 36298:case 36306:case 35682:return gE;case 35679:case 36299:case 36307:return _E;case 35680:case 36300:case 36308:case 36293:return vE;case 36289:case 36303:case 36311:case 36292:return xE}}class SE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=eE(n.type)}}class ME{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yE(n.type)}}class EE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const af=/(\w+)(\])?(\[|\.)?/g;function Fm(s,e){s.seq.push(e),s.map[e.id]=e}function wE(s,e,n){const r=s.name,a=r.length;for(af.lastIndex=0;;){const u=af.exec(r),f=af.lastIndex;let d=u[1];const h=u[2]==="]",m=u[3];if(h&&(d=d|0),m===void 0||m==="["&&f+2===a){Fm(n,m===void 0?new SE(d,s,e):new ME(d,s,e));break}else{let g=n.map[d];g===void 0&&(g=new EE(d),Fm(n,g)),n=g}}}class Il{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);wE(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function Om(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const TE=37297;let AE=0;function RE(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const km=new dt;function CE(s){At._getMatrix(km,At.workingColorSpace,s);const e=`mat3( ${km.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(s)){case Ul:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function zm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+RE(s.getShaderSource(e),f)}else return a}function bE(s,e){const n=CE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function PE(s,e){let n;switch(e){case vv:n="Linear";break;case xv:n="Reinhard";break;case yv:n="Cineon";break;case Sv:n="ACESFilmic";break;case Ev:n="AgX";break;case wv:n="Neutral";break;case Mv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Al=new H;function LE(){At.getLuminanceCoefficients(Al);const s=Al.x.toFixed(4),e=Al.y.toFixed(4),n=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function IE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function UE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function zo(s){return s!==""}function Bm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NE=/^[ \t]*#include +<([\w\d./]+)>/gm;function $f(s){return s.replace(NE,OE)}const FE=new Map;function OE(s,e){let n=ht[e];if(n===void 0){const r=FE.get(e);if(r!==void 0)n=ht[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return $f(n)}const kE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(s){return s.replace(kE,zE)}function zE(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Gm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function BE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Km?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Zm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function HE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xs:case js:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function GE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Qf:e="ENVMAP_BLENDING_MULTIPLY";break;case gv:e="ENVMAP_BLENDING_MIX";break;case _v:e="ENVMAP_BLENDING_ADD";break}return e}function WE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function XE(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const h=BE(n),m=HE(n),v=VE(n),g=GE(n),x=WE(n),S=DE(n),E=IE(u),T=a.createProgram();let y,_,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(zo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(zo).join(`
`),_.length>0&&(_+=`
`)):(y=[Gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),_=[Gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Sr?"#define TONE_MAPPING":"",n.toneMapping!==Sr?ht.tonemapping_pars_fragment:"",n.toneMapping!==Sr?PE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,bE("linearToOutputTexel",n.outputColorSpace),LE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zo).join(`
`)),f=$f(f),f=Bm(f,n),f=Hm(f,n),d=$f(d),d=Bm(d,n),d=Hm(d,n),f=Vm(f),d=Vm(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",n.glslVersion===Yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=I+y+f,C=I+_+d,W=Om(a,a.VERTEX_SHADER,L),O=Om(a,a.FRAGMENT_SHADER,C);a.attachShader(T,W),a.attachShader(T,O),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function N(k){if(s.debug.checkShaderErrors){const ne=a.getProgramInfoLog(T).trim(),Q=a.getShaderInfoLog(W).trim(),ue=a.getShaderInfoLog(O).trim();let le=!0,se=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(le=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,W,O);else{const de=zm(a,W,"vertex"),z=zm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ne+`
`+de+`
`+z)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(Q===""||ue==="")&&(se=!1);se&&(k.diagnostics={runnable:le,programLog:ne,vertexShader:{log:Q,prefix:y},fragmentShader:{log:ue,prefix:_}})}a.deleteShader(W),a.deleteShader(O),X=new Il(a,T),b=UE(a,T)}let X;this.getUniforms=function(){return X===void 0&&N(this),X};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(T,TE)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=AE++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=W,this.fragmentShader=O,this}let jE=0;class YE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new qE(e),n.set(e,r)),r}}class qE{constructor(e){this.id=jE++,this.code=e,this.usedTimes=0}}function $E(s,e,n,r,a,u,f){const d=new hg,h=new YE,m=new Set,v=[],g=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function y(b,R,k,ne,Q){const ue=ne.fog,le=Q.geometry,se=b.isMeshStandardMaterial?ne.environment:null,de=(b.isMeshStandardMaterial?n:e).get(b.envMap||se),z=de&&de.mapping===Bl?de.image.height:null,ce=E[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const oe=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,U=oe!==void 0?oe.length:0;let $=0;le.morphAttributes.position!==void 0&&($=1),le.morphAttributes.normal!==void 0&&($=2),le.morphAttributes.color!==void 0&&($=3);let we,q,fe,ge;if(ce){const gt=xi[ce];we=gt.vertexShader,q=gt.fragmentShader}else we=b.vertexShader,q=b.fragmentShader,h.update(b),fe=h.getVertexShaderID(b),ge=h.getFragmentShaderID(b);const _e=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),He=Q.isInstancedMesh===!0,Xe=Q.isBatchedMesh===!0,Ct=!!b.map,Rt=!!b.matcap,lt=!!de,F=!!b.aoMap,Xt=!!b.lightMap,ct=!!b.bumpMap,ut=!!b.normalMap,Je=!!b.displacementMap,wt=!!b.emissiveMap,Ye=!!b.metalnessMap,P=!!b.roughnessMap,w=b.anisotropy>0,J=b.clearcoat>0,xe=b.dispersion>0,ve=b.iridescence>0,me=b.sheen>0,qe=b.transmission>0,Ne=w&&!!b.anisotropyMap,Ee=J&&!!b.clearcoatMap,Ve=J&&!!b.clearcoatNormalMap,he=J&&!!b.clearcoatRoughnessMap,Pe=ve&&!!b.iridescenceMap,Ie=ve&&!!b.iridescenceThicknessMap,Fe=me&&!!b.sheenColorMap,Re=me&&!!b.sheenRoughnessMap,Ze=!!b.specularMap,Ue=!!b.specularColorMap,ot=!!b.specularIntensityMap,V=qe&&!!b.transmissionMap,ye=qe&&!!b.thicknessMap,te=!!b.gradientMap,pe=!!b.alphaMap,Le=b.alphaTest>0,De=!!b.alphaHash,tt=!!b.extensions;let bt=Sr;b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(bt=s.toneMapping);const jt={shaderID:ce,shaderType:b.type,shaderName:b.name,vertexShader:we,fragmentShader:q,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:ge,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Xe,batchingColor:Xe&&Q._colorsTexture!==null,instancing:He,instancingColor:He&&Q.instanceColor!==null,instancingMorph:He&&Q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:$s,alphaToCoverage:!!b.alphaToCoverage,map:Ct,matcap:Rt,envMap:lt,envMapMode:lt&&de.mapping,envMapCubeUVHeight:z,aoMap:F,lightMap:Xt,bumpMap:ct,normalMap:ut,displacementMap:x&&Je,emissiveMap:wt,normalMapObjectSpace:ut&&b.normalMapType===Cv,normalMapTangentSpace:ut&&b.normalMapType===sd,metalnessMap:Ye,roughnessMap:P,anisotropy:w,anisotropyMap:Ne,clearcoat:J,clearcoatMap:Ee,clearcoatNormalMap:Ve,clearcoatRoughnessMap:he,dispersion:xe,iridescence:ve,iridescenceMap:Pe,iridescenceThicknessMap:Ie,sheen:me,sheenColorMap:Fe,sheenRoughnessMap:Re,specularMap:Ze,specularColorMap:Ue,specularIntensityMap:ot,transmission:qe,transmissionMap:V,thicknessMap:ye,gradientMap:te,opaque:b.transparent===!1&&b.blending===Hs&&b.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:De,combine:b.combine,mapUv:Ct&&T(b.map.channel),aoMapUv:F&&T(b.aoMap.channel),lightMapUv:Xt&&T(b.lightMap.channel),bumpMapUv:ct&&T(b.bumpMap.channel),normalMapUv:ut&&T(b.normalMap.channel),displacementMapUv:Je&&T(b.displacementMap.channel),emissiveMapUv:wt&&T(b.emissiveMap.channel),metalnessMapUv:Ye&&T(b.metalnessMap.channel),roughnessMapUv:P&&T(b.roughnessMap.channel),anisotropyMapUv:Ne&&T(b.anisotropyMap.channel),clearcoatMapUv:Ee&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Re&&T(b.sheenRoughnessMap.channel),specularMapUv:Ze&&T(b.specularMap.channel),specularColorMapUv:Ue&&T(b.specularColorMap.channel),specularIntensityMapUv:ot&&T(b.specularIntensityMap.channel),transmissionMapUv:V&&T(b.transmissionMap.channel),thicknessMapUv:ye&&T(b.thicknessMap.channel),alphaMapUv:pe&&T(b.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(ut||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!le.attributes.uv&&(Ct||pe),fog:!!ue,useFog:b.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:be,skinning:Q.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:$,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:bt,decodeVideoTexture:Ct&&b.map.isVideoTexture===!0&&At.getTransfer(b.map.colorSpace)===Pt,decodeVideoTextureEmissive:wt&&b.emissiveMap.isVideoTexture===!0&&At.getTransfer(b.emissiveMap.colorSpace)===Pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ki,flipSided:b.side===Nn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:tt&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&b.extensions.multiDraw===!0||Xe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return jt.vertexUv1s=m.has(1),jt.vertexUv2s=m.has(2),jt.vertexUv3s=m.has(3),m.clear(),jt}function _(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)R.push(k),R.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(I(R,b),L(R,b),R.push(s.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function I(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function L(b,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),b.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),b.push(d.mask)}function C(b){const R=E[b.type];let k;if(R){const ne=xi[R];k=yx.clone(ne.uniforms)}else k=b.uniforms;return k}function W(b,R){let k;for(let ne=0,Q=v.length;ne<Q;ne++){const ue=v[ne];if(ue.cacheKey===R){k=ue,++k.usedTimes;break}}return k===void 0&&(k=new XE(s,R,b,u),v.push(k)),k}function O(b){if(--b.usedTimes===0){const R=v.indexOf(b);v[R]=v[v.length-1],v.pop(),b.destroy()}}function N(b){h.remove(b)}function X(){h.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:C,acquireProgram:W,releaseProgram:O,releaseShaderCache:N,programs:v,dispose:X}}function KE(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,h){s.get(f)[d]=h}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function ZE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Wm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Xm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(g,x,S,E,T,y){let _=s[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:S,groupOrder:E,renderOrder:g.renderOrder,z:T,group:y},s[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=S,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=T,_.group=y),e++,_}function d(g,x,S,E,T,y){const _=f(g,x,S,E,T,y);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):n.push(_)}function h(g,x,S,E,T,y){const _=f(g,x,S,E,T,y);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):n.unshift(_)}function m(g,x){n.length>1&&n.sort(g||ZE),r.length>1&&r.sort(x||Wm),a.length>1&&a.sort(x||Wm)}function v(){for(let g=e,x=s.length;g<x;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:h,finish:v,sort:m}}function QE(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new Xm,s.set(r,[f])):a>=u.length?(f=new Xm,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function JE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new pt};break;case"SpotLight":n={position:new H,direction:new H,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":n={color:new pt,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=n,n}}}function e1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let t1=0;function n1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function i1(s){const e=new JE,n=e1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new H);const a=new H,u=new zt,f=new zt;function d(m){let v=0,g=0,x=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,E=0,T=0,y=0,_=0,I=0,L=0,C=0,W=0,O=0,N=0;m.sort(n1);for(let b=0,R=m.length;b<R;b++){const k=m[b],ne=k.color,Q=k.intensity,ue=k.distance,le=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)v+=ne.r*Q,g+=ne.g*Q,x+=ne.b*Q;else if(k.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(k.sh.coefficients[se],Q);N++}else if(k.isDirectionalLight){const se=e.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const de=k.shadow,z=n.get(k);z.shadowIntensity=de.intensity,z.shadowBias=de.bias,z.shadowNormalBias=de.normalBias,z.shadowRadius=de.radius,z.shadowMapSize=de.mapSize,r.directionalShadow[S]=z,r.directionalShadowMap[S]=le,r.directionalShadowMatrix[S]=k.shadow.matrix,I++}r.directional[S]=se,S++}else if(k.isSpotLight){const se=e.get(k);se.position.setFromMatrixPosition(k.matrixWorld),se.color.copy(ne).multiplyScalar(Q),se.distance=ue,se.coneCos=Math.cos(k.angle),se.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),se.decay=k.decay,r.spot[T]=se;const de=k.shadow;if(k.map&&(r.spotLightMap[W]=k.map,W++,de.updateMatrices(k),k.castShadow&&O++),r.spotLightMatrix[T]=de.matrix,k.castShadow){const z=n.get(k);z.shadowIntensity=de.intensity,z.shadowBias=de.bias,z.shadowNormalBias=de.normalBias,z.shadowRadius=de.radius,z.shadowMapSize=de.mapSize,r.spotShadow[T]=z,r.spotShadowMap[T]=le,C++}T++}else if(k.isRectAreaLight){const se=e.get(k);se.color.copy(ne).multiplyScalar(Q),se.halfWidth.set(k.width*.5,0,0),se.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=se,y++}else if(k.isPointLight){const se=e.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity),se.distance=k.distance,se.decay=k.decay,k.castShadow){const de=k.shadow,z=n.get(k);z.shadowIntensity=de.intensity,z.shadowBias=de.bias,z.shadowNormalBias=de.normalBias,z.shadowRadius=de.radius,z.shadowMapSize=de.mapSize,z.shadowCameraNear=de.camera.near,z.shadowCameraFar=de.camera.far,r.pointShadow[E]=z,r.pointShadowMap[E]=le,r.pointShadowMatrix[E]=k.shadow.matrix,L++}r.point[E]=se,E++}else if(k.isHemisphereLight){const se=e.get(k);se.skyColor.copy(k.color).multiplyScalar(Q),se.groundColor.copy(k.groundColor).multiplyScalar(Q),r.hemi[_]=se,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ke.LTC_FLOAT_1,r.rectAreaLTC2=ke.LTC_FLOAT_2):(r.rectAreaLTC1=ke.LTC_HALF_1,r.rectAreaLTC2=ke.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==T||X.rectAreaLength!==y||X.hemiLength!==_||X.numDirectionalShadows!==I||X.numPointShadows!==L||X.numSpotShadows!==C||X.numSpotMaps!==W||X.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=y,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+W-O,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=N,X.directionalLength=S,X.pointLength=E,X.spotLength=T,X.rectAreaLength=y,X.hemiLength=_,X.numDirectionalShadows=I,X.numPointShadows=L,X.numSpotShadows=C,X.numSpotMaps=W,X.numLightProbes=N,r.version=t1++)}function h(m,v){let g=0,x=0,S=0,E=0,T=0;const y=v.matrixWorldInverse;for(let _=0,I=m.length;_<I;_++){const L=m[_];if(L.isDirectionalLight){const C=r.directional[g];C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),g++}else if(L.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),f.identity(),u.copy(L.matrixWorld),u.premultiply(y),f.extractRotation(u),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const C=r.hemi[T];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(y),T++}}}return{setup:d,setupView:h,state:r}}function jm(s){const e=new i1(s),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function u(v){n.push(v)}function f(v){r.push(v)}function d(){e.setup(n)}function h(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:h,pushLight:u,pushShadow:f}}function r1(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new jm(s),e.set(a,[d])):u>=f.length?(d=new jm(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const s1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function a1(s,e,n){let r=new ld;const a=new Et,u=new Et,f=new Lt,d=new Px({depthPacking:Rv}),h=new Lx,m={},v=n.maxTextureSize,g={[Mr]:Nn,[Nn]:Mr,[ki]:ki},x=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:s1,fragmentShader:o1}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new On;E.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new dn(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Km;let _=this.type;this.render=function(O,N,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const b=s.getRenderTarget(),R=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(yr),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const Q=_!==Oi&&this.type===Oi,ue=_===Oi&&this.type!==Oi;for(let le=0,se=O.length;le<se;le++){const de=O[le],z=de.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const ce=z.getFrameExtents();if(a.multiply(ce),u.copy(z.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(u.x=Math.floor(v/ce.x),a.x=u.x*ce.x,z.mapSize.x=u.x),a.y>v&&(u.y=Math.floor(v/ce.y),a.y=u.y*ce.y,z.mapSize.y=u.y)),z.map===null||Q===!0||ue===!0){const U=this.type!==Oi?{minFilter:ci,magFilter:ci}:{};z.map!==null&&z.map.dispose(),z.map=new Qr(a.x,a.y,U),z.map.texture.name=de.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const oe=z.getViewportCount();for(let U=0;U<oe;U++){const $=z.getViewport(U);f.set(u.x*$.x,u.y*$.y,u.x*$.z,u.y*$.w),ne.viewport(f),z.updateMatrices(de,U),r=z.getFrustum(),C(N,X,z.camera,de,this.type)}z.isPointLightShadow!==!0&&this.type===Oi&&I(z,X),z.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(b,R,k)};function I(O,N){const X=e.update(T);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Qr(a.x,a.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(N,null,X,x,T,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(N,null,X,S,T,null)}function L(O,N,X,b){let R=null;const k=X.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)R=k;else if(R=X.isPointLight===!0?h:d,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const ne=R.uuid,Q=N.uuid;let ue=m[ne];ue===void 0&&(ue={},m[ne]=ue);let le=ue[Q];le===void 0&&(le=R.clone(),ue[Q]=le,N.addEventListener("dispose",W)),R=le}if(R.visible=N.visible,R.wireframe=N.wireframe,b===Oi?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:g[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ne=s.properties.get(R);ne.light=X}return R}function C(O,N,X,b,R){if(O.visible===!1)return;if(O.layers.test(N.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===Oi)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,O.matrixWorld);const Q=e.update(O),ue=O.material;if(Array.isArray(ue)){const le=Q.groups;for(let se=0,de=le.length;se<de;se++){const z=le[se],ce=ue[z.materialIndex];if(ce&&ce.visible){const oe=L(O,ce,b,R);O.onBeforeShadow(s,O,N,X,Q,oe,z),s.renderBufferDirect(X,null,Q,oe,O,z),O.onAfterShadow(s,O,N,X,Q,oe,z)}}}else if(ue.visible){const le=L(O,ue,b,R);O.onBeforeShadow(s,O,N,X,Q,le,null),s.renderBufferDirect(X,null,Q,le,O,null),O.onAfterShadow(s,O,N,X,Q,le,null)}}const ne=O.children;for(let Q=0,ue=ne.length;Q<ue;Q++)C(ne[Q],N,X,b,R)}function W(O){O.target.removeEventListener("dispose",W);for(const X in m){const b=m[X],R=O.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const l1={[ff]:df,[hf]:gf,[pf]:_f,[Ws]:mf,[df]:ff,[gf]:hf,[_f]:pf,[mf]:Ws};function u1(s,e){function n(){let V=!1;const ye=new Lt;let te=null;const pe=new Lt(0,0,0,0);return{setMask:function(Le){te!==Le&&!V&&(s.colorMask(Le,Le,Le,Le),te=Le)},setLocked:function(Le){V=Le},setClear:function(Le,De,tt,bt,jt){jt===!0&&(Le*=bt,De*=bt,tt*=bt),ye.set(Le,De,tt,bt),pe.equals(ye)===!1&&(s.clearColor(Le,De,tt,bt),pe.copy(ye))},reset:function(){V=!1,te=null,pe.set(-1,0,0,0)}}}function r(){let V=!1,ye=!1,te=null,pe=null,Le=null;return{setReversed:function(De){if(ye!==De){const tt=e.get("EXT_clip_control");ye?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT);const bt=Le;Le=null,this.setClear(bt)}ye=De},getReversed:function(){return ye},setTest:function(De){De?_e(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(De){te!==De&&!V&&(s.depthMask(De),te=De)},setFunc:function(De){if(ye&&(De=l1[De]),pe!==De){switch(De){case ff:s.depthFunc(s.NEVER);break;case df:s.depthFunc(s.ALWAYS);break;case hf:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case pf:s.depthFunc(s.EQUAL);break;case mf:s.depthFunc(s.GEQUAL);break;case gf:s.depthFunc(s.GREATER);break;case _f:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=De}},setLocked:function(De){V=De},setClear:function(De){Le!==De&&(ye&&(De=1-De),s.clearDepth(De),Le=De)},reset:function(){V=!1,te=null,pe=null,Le=null,ye=!1}}}function a(){let V=!1,ye=null,te=null,pe=null,Le=null,De=null,tt=null,bt=null,jt=null;return{setTest:function(gt){V||(gt?_e(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(gt){ye!==gt&&!V&&(s.stencilMask(gt),ye=gt)},setFunc:function(gt,Rn,Sn){(te!==gt||pe!==Rn||Le!==Sn)&&(s.stencilFunc(gt,Rn,Sn),te=gt,pe=Rn,Le=Sn)},setOp:function(gt,Rn,Sn){(De!==gt||tt!==Rn||bt!==Sn)&&(s.stencilOp(gt,Rn,Sn),De=gt,tt=Rn,bt=Sn)},setLocked:function(gt){V=gt},setClear:function(gt){jt!==gt&&(s.clearStencil(gt),jt=gt)},reset:function(){V=!1,ye=null,te=null,pe=null,Le=null,De=null,tt=null,bt=null,jt=null}}}const u=new n,f=new r,d=new a,h=new WeakMap,m=new WeakMap;let v={},g={},x=new WeakMap,S=[],E=null,T=!1,y=null,_=null,I=null,L=null,C=null,W=null,O=null,N=new pt(0,0,0),X=0,b=!1,R=null,k=null,ne=null,Q=null,ue=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,de=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(z)[1]),se=de>=1):z.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),se=de>=2);let ce=null,oe={};const U=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),we=new Lt().fromArray(U),q=new Lt().fromArray($);function fe(V,ye,te,pe){const Le=new Uint8Array(4),De=s.createTexture();s.bindTexture(V,De),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let tt=0;tt<te;tt++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(ye,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(ye+tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return De}const ge={};ge[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),_e(s.DEPTH_TEST),f.setFunc(Ws),ct(!1),ut(Vp),_e(s.CULL_FACE),F(yr);function _e(V){v[V]!==!0&&(s.enable(V),v[V]=!0)}function be(V){v[V]!==!1&&(s.disable(V),v[V]=!1)}function He(V,ye){return g[V]!==ye?(s.bindFramebuffer(V,ye),g[V]=ye,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=ye),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=ye),!0):!1}function Xe(V,ye){let te=S,pe=!1;if(V){te=x.get(ye),te===void 0&&(te=[],x.set(ye,te));const Le=V.textures;if(te.length!==Le.length||te[0]!==s.COLOR_ATTACHMENT0){for(let De=0,tt=Le.length;De<tt;De++)te[De]=s.COLOR_ATTACHMENT0+De;te.length=Le.length,pe=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,pe=!0);pe&&s.drawBuffers(te)}function Ct(V){return E!==V?(s.useProgram(V),E=V,!0):!1}const Rt={[Yr]:s.FUNC_ADD,[J_]:s.FUNC_SUBTRACT,[ev]:s.FUNC_REVERSE_SUBTRACT};Rt[tv]=s.MIN,Rt[nv]=s.MAX;const lt={[iv]:s.ZERO,[rv]:s.ONE,[sv]:s.SRC_COLOR,[uf]:s.SRC_ALPHA,[fv]:s.SRC_ALPHA_SATURATE,[uv]:s.DST_COLOR,[av]:s.DST_ALPHA,[ov]:s.ONE_MINUS_SRC_COLOR,[cf]:s.ONE_MINUS_SRC_ALPHA,[cv]:s.ONE_MINUS_DST_COLOR,[lv]:s.ONE_MINUS_DST_ALPHA,[dv]:s.CONSTANT_COLOR,[hv]:s.ONE_MINUS_CONSTANT_COLOR,[pv]:s.CONSTANT_ALPHA,[mv]:s.ONE_MINUS_CONSTANT_ALPHA};function F(V,ye,te,pe,Le,De,tt,bt,jt,gt){if(V===yr){T===!0&&(be(s.BLEND),T=!1);return}if(T===!1&&(_e(s.BLEND),T=!0),V!==Q_){if(V!==y||gt!==b){if((_!==Yr||C!==Yr)&&(s.blendEquation(s.FUNC_ADD),_=Yr,C=Yr),gt)switch(V){case Hs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lf:s.blendFunc(s.ONE,s.ONE);break;case Gp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Gp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}I=null,L=null,W=null,O=null,N.set(0,0,0),X=0,y=V,b=gt}return}Le=Le||ye,De=De||te,tt=tt||pe,(ye!==_||Le!==C)&&(s.blendEquationSeparate(Rt[ye],Rt[Le]),_=ye,C=Le),(te!==I||pe!==L||De!==W||tt!==O)&&(s.blendFuncSeparate(lt[te],lt[pe],lt[De],lt[tt]),I=te,L=pe,W=De,O=tt),(bt.equals(N)===!1||jt!==X)&&(s.blendColor(bt.r,bt.g,bt.b,jt),N.copy(bt),X=jt),y=V,b=!1}function Xt(V,ye){V.side===ki?be(s.CULL_FACE):_e(s.CULL_FACE);let te=V.side===Nn;ye&&(te=!te),ct(te),V.blending===Hs&&V.transparent===!1?F(yr):F(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),u.setMask(V.colorWrite);const pe=V.stencilWrite;d.setTest(pe),pe&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),wt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(V){R!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),R=V)}function ut(V){V!==K_?(_e(s.CULL_FACE),V!==k&&(V===Vp?s.cullFace(s.BACK):V===Z_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),k=V}function Je(V){V!==ne&&(se&&s.lineWidth(V),ne=V)}function wt(V,ye,te){V?(_e(s.POLYGON_OFFSET_FILL),(Q!==ye||ue!==te)&&(s.polygonOffset(ye,te),Q=ye,ue=te)):be(s.POLYGON_OFFSET_FILL)}function Ye(V){V?_e(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function P(V){V===void 0&&(V=s.TEXTURE0+le-1),ce!==V&&(s.activeTexture(V),ce=V)}function w(V,ye,te){te===void 0&&(ce===null?te=s.TEXTURE0+le-1:te=ce);let pe=oe[te];pe===void 0&&(pe={type:void 0,texture:void 0},oe[te]=pe),(pe.type!==V||pe.texture!==ye)&&(ce!==te&&(s.activeTexture(te),ce=te),s.bindTexture(V,ye||ge[V]),pe.type=V,pe.texture=ye)}function J(){const V=oe[ce];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function xe(){try{s.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{s.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{s.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(){try{s.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{s.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{s.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{s.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{s.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{s.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ie(){try{s.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(V){we.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),we.copy(V))}function Re(V){q.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),q.copy(V))}function Ze(V,ye){let te=m.get(ye);te===void 0&&(te=new WeakMap,m.set(ye,te));let pe=te.get(V);pe===void 0&&(pe=s.getUniformBlockIndex(ye,V.name),te.set(V,pe))}function Ue(V,ye){const pe=m.get(ye).get(V);h.get(ye)!==pe&&(s.uniformBlockBinding(ye,pe,V.__bindingPointIndex),h.set(ye,pe))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ce=null,oe={},g={},x=new WeakMap,S=[],E=null,T=!1,y=null,_=null,I=null,L=null,C=null,W=null,O=null,N=new pt(0,0,0),X=0,b=!1,R=null,k=null,ne=null,Q=null,ue=null,we.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:_e,disable:be,bindFramebuffer:He,drawBuffers:Xe,useProgram:Ct,setBlending:F,setMaterial:Xt,setFlipSided:ct,setCullFace:ut,setLineWidth:Je,setPolygonOffset:wt,setScissorTest:Ye,activeTexture:P,bindTexture:w,unbindTexture:J,compressedTexImage2D:xe,compressedTexImage3D:ve,texImage2D:Pe,texImage3D:Ie,updateUBOMapping:Ze,uniformBlockBinding:Ue,texStorage2D:Ve,texStorage3D:he,texSubImage2D:me,texSubImage3D:qe,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Ee,scissor:Fe,viewport:Re,reset:ot}}function c1(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Et,v=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,w){return S?new OffscreenCanvas(P,w):Fl("canvas")}function T(P,w,J){let xe=1;const ve=Ye(P);if((ve.width>J||ve.height>J)&&(xe=J/Math.max(ve.width,ve.height)),xe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const me=Math.floor(xe*ve.width),qe=Math.floor(xe*ve.height);g===void 0&&(g=E(me,qe));const Ne=w?E(me,qe):g;return Ne.width=me,Ne.height=qe,Ne.getContext("2d").drawImage(P,0,0,me,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+me+"x"+qe+")."),Ne}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),P;return P}function y(P){return P.generateMipmaps}function _(P){s.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(P,w,J,xe,ve=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let me=w;if(w===s.RED&&(J===s.FLOAT&&(me=s.R32F),J===s.HALF_FLOAT&&(me=s.R16F),J===s.UNSIGNED_BYTE&&(me=s.R8)),w===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(me=s.R8UI),J===s.UNSIGNED_SHORT&&(me=s.R16UI),J===s.UNSIGNED_INT&&(me=s.R32UI),J===s.BYTE&&(me=s.R8I),J===s.SHORT&&(me=s.R16I),J===s.INT&&(me=s.R32I)),w===s.RG&&(J===s.FLOAT&&(me=s.RG32F),J===s.HALF_FLOAT&&(me=s.RG16F),J===s.UNSIGNED_BYTE&&(me=s.RG8)),w===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(me=s.RG8UI),J===s.UNSIGNED_SHORT&&(me=s.RG16UI),J===s.UNSIGNED_INT&&(me=s.RG32UI),J===s.BYTE&&(me=s.RG8I),J===s.SHORT&&(me=s.RG16I),J===s.INT&&(me=s.RG32I)),w===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(me=s.RGB8UI),J===s.UNSIGNED_SHORT&&(me=s.RGB16UI),J===s.UNSIGNED_INT&&(me=s.RGB32UI),J===s.BYTE&&(me=s.RGB8I),J===s.SHORT&&(me=s.RGB16I),J===s.INT&&(me=s.RGB32I)),w===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),J===s.UNSIGNED_INT&&(me=s.RGBA32UI),J===s.BYTE&&(me=s.RGBA8I),J===s.SHORT&&(me=s.RGBA16I),J===s.INT&&(me=s.RGBA32I)),w===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),w===s.RGBA){const qe=ve?Ul:At.getTransfer(xe);J===s.FLOAT&&(me=s.RGBA32F),J===s.HALF_FLOAT&&(me=s.RGBA16F),J===s.UNSIGNED_BYTE&&(me=qe===Pt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function C(P,w){let J;return P?w===null||w===Zr||w===Ys?J=s.DEPTH24_STENCIL8:w===zi?J=s.DEPTH32F_STENCIL8:w===Vo&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Zr||w===Ys?J=s.DEPTH_COMPONENT24:w===zi?J=s.DEPTH_COMPONENT32F:w===Vo&&(J=s.DEPTH_COMPONENT16),J}function W(P,w){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==ci&&P.minFilter!==yi?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function O(P){const w=P.target;w.removeEventListener("dispose",O),X(w),w.isVideoTexture&&v.delete(w)}function N(P){const w=P.target;w.removeEventListener("dispose",N),R(w)}function X(P){const w=r.get(P);if(w.__webglInit===void 0)return;const J=P.source,xe=x.get(J);if(xe){const ve=xe[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&b(P),Object.keys(xe).length===0&&x.delete(J)}r.remove(P)}function b(P){const w=r.get(P);s.deleteTexture(w.__webglTexture);const J=P.source,xe=x.get(J);delete xe[w.__cacheKey],f.memory.textures--}function R(P){const w=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(w.__webglFramebuffer[xe]))for(let ve=0;ve<w.__webglFramebuffer[xe].length;ve++)s.deleteFramebuffer(w.__webglFramebuffer[xe][ve]);else s.deleteFramebuffer(w.__webglFramebuffer[xe]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[xe])}else{if(Array.isArray(w.__webglFramebuffer))for(let xe=0;xe<w.__webglFramebuffer.length;xe++)s.deleteFramebuffer(w.__webglFramebuffer[xe]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let xe=0;xe<w.__webglColorRenderbuffer.length;xe++)w.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[xe]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=P.textures;for(let xe=0,ve=J.length;xe<ve;xe++){const me=r.get(J[xe]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),f.memory.textures--),r.remove(J[xe])}r.remove(P)}let k=0;function ne(){k=0}function Q(){const P=k;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),k+=1,P}function ue(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function le(P,w){const J=r.get(P);if(P.isVideoTexture&&Je(P),P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){const xe=P.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(J,P,w);return}}n.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+w)}function se(P,w){const J=r.get(P);if(P.version>0&&J.__version!==P.version){q(J,P,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+w)}function de(P,w){const J=r.get(P);if(P.version>0&&J.__version!==P.version){q(J,P,w);return}n.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+w)}function z(P,w){const J=r.get(P);if(P.version>0&&J.__version!==P.version){fe(J,P,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+w)}const ce={[yf]:s.REPEAT,[$r]:s.CLAMP_TO_EDGE,[Sf]:s.MIRRORED_REPEAT},oe={[ci]:s.NEAREST,[Tv]:s.NEAREST_MIPMAP_NEAREST,[il]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[bc]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},U={[bv]:s.NEVER,[Nv]:s.ALWAYS,[Pv]:s.LESS,[ug]:s.LEQUAL,[Lv]:s.EQUAL,[Uv]:s.GEQUAL,[Dv]:s.GREATER,[Iv]:s.NOTEQUAL};function $(P,w){if(w.type===zi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===yi||w.magFilter===bc||w.magFilter===il||w.magFilter===Kr||w.minFilter===yi||w.minFilter===bc||w.minFilter===il||w.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ce[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ce[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ce[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,oe[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,oe[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,U[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ci||w.minFilter!==il&&w.minFilter!==Kr||w.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function we(P,w){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",O));const xe=w.source;let ve=x.get(xe);ve===void 0&&(ve={},x.set(xe,ve));const me=ue(w);if(me!==P.__cacheKey){ve[me]===void 0&&(ve[me]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,J=!0),ve[me].usedTimes++;const qe=ve[P.__cacheKey];qe!==void 0&&(ve[P.__cacheKey].usedTimes--,qe.usedTimes===0&&b(w)),P.__cacheKey=me,P.__webglTexture=ve[me].texture}return J}function q(P,w,J){let xe=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(xe=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(xe=s.TEXTURE_3D);const ve=we(P,w),me=w.source;n.bindTexture(xe,P.__webglTexture,s.TEXTURE0+J);const qe=r.get(me);if(me.version!==qe.__version||ve===!0){n.activeTexture(s.TEXTURE0+J);const Ne=At.getPrimaries(At.workingColorSpace),Ee=w.colorSpace===_r?null:At.getPrimaries(w.colorSpace),Ve=w.colorSpace===_r||Ne===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let he=T(w.image,!1,a.maxTextureSize);he=wt(w,he);const Pe=u.convert(w.format,w.colorSpace),Ie=u.convert(w.type);let Fe=L(w.internalFormat,Pe,Ie,w.colorSpace,w.isVideoTexture);$(xe,w);let Re;const Ze=w.mipmaps,Ue=w.isVideoTexture!==!0,ot=qe.__version===void 0||ve===!0,V=me.dataReady,ye=W(w,he);if(w.isDepthTexture)Fe=C(w.format===qs,w.type),ot&&(Ue?n.texStorage2D(s.TEXTURE_2D,1,Fe,he.width,he.height):n.texImage2D(s.TEXTURE_2D,0,Fe,he.width,he.height,0,Pe,Ie,null));else if(w.isDataTexture)if(Ze.length>0){Ue&&ot&&n.texStorage2D(s.TEXTURE_2D,ye,Fe,Ze[0].width,Ze[0].height);for(let te=0,pe=Ze.length;te<pe;te++)Re=Ze[te],Ue?V&&n.texSubImage2D(s.TEXTURE_2D,te,0,0,Re.width,Re.height,Pe,Ie,Re.data):n.texImage2D(s.TEXTURE_2D,te,Fe,Re.width,Re.height,0,Pe,Ie,Re.data);w.generateMipmaps=!1}else Ue?(ot&&n.texStorage2D(s.TEXTURE_2D,ye,Fe,he.width,he.height),V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,he.width,he.height,Pe,Ie,he.data)):n.texImage2D(s.TEXTURE_2D,0,Fe,he.width,he.height,0,Pe,Ie,he.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ue&&ot&&n.texStorage3D(s.TEXTURE_2D_ARRAY,ye,Fe,Ze[0].width,Ze[0].height,he.depth);for(let te=0,pe=Ze.length;te<pe;te++)if(Re=Ze[te],w.format!==ui)if(Pe!==null)if(Ue){if(V)if(w.layerUpdates.size>0){const Le=Mm(Re.width,Re.height,w.format,w.type);for(const De of w.layerUpdates){const tt=Re.data.subarray(De*Le/Re.data.BYTES_PER_ELEMENT,(De+1)*Le/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,De,Re.width,Re.height,1,Pe,tt)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,Re.width,Re.height,he.depth,Pe,Re.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,Fe,Re.width,Re.height,he.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?V&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,Re.width,Re.height,he.depth,Pe,Ie,Re.data):n.texImage3D(s.TEXTURE_2D_ARRAY,te,Fe,Re.width,Re.height,he.depth,0,Pe,Ie,Re.data)}else{Ue&&ot&&n.texStorage2D(s.TEXTURE_2D,ye,Fe,Ze[0].width,Ze[0].height);for(let te=0,pe=Ze.length;te<pe;te++)Re=Ze[te],w.format!==ui?Pe!==null?Ue?V&&n.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,Re.width,Re.height,Pe,Re.data):n.compressedTexImage2D(s.TEXTURE_2D,te,Fe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?V&&n.texSubImage2D(s.TEXTURE_2D,te,0,0,Re.width,Re.height,Pe,Ie,Re.data):n.texImage2D(s.TEXTURE_2D,te,Fe,Re.width,Re.height,0,Pe,Ie,Re.data)}else if(w.isDataArrayTexture)if(Ue){if(ot&&n.texStorage3D(s.TEXTURE_2D_ARRAY,ye,Fe,he.width,he.height,he.depth),V)if(w.layerUpdates.size>0){const te=Mm(he.width,he.height,w.format,w.type);for(const pe of w.layerUpdates){const Le=he.data.subarray(pe*te/he.data.BYTES_PER_ELEMENT,(pe+1)*te/he.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,he.width,he.height,1,Pe,Ie,Le)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Pe,Ie,he.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,he.width,he.height,he.depth,0,Pe,Ie,he.data);else if(w.isData3DTexture)Ue?(ot&&n.texStorage3D(s.TEXTURE_3D,ye,Fe,he.width,he.height,he.depth),V&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Pe,Ie,he.data)):n.texImage3D(s.TEXTURE_3D,0,Fe,he.width,he.height,he.depth,0,Pe,Ie,he.data);else if(w.isFramebufferTexture){if(ot)if(Ue)n.texStorage2D(s.TEXTURE_2D,ye,Fe,he.width,he.height);else{let te=he.width,pe=he.height;for(let Le=0;Le<ye;Le++)n.texImage2D(s.TEXTURE_2D,Le,Fe,te,pe,0,Pe,Ie,null),te>>=1,pe>>=1}}else if(Ze.length>0){if(Ue&&ot){const te=Ye(Ze[0]);n.texStorage2D(s.TEXTURE_2D,ye,Fe,te.width,te.height)}for(let te=0,pe=Ze.length;te<pe;te++)Re=Ze[te],Ue?V&&n.texSubImage2D(s.TEXTURE_2D,te,0,0,Pe,Ie,Re):n.texImage2D(s.TEXTURE_2D,te,Fe,Pe,Ie,Re);w.generateMipmaps=!1}else if(Ue){if(ot){const te=Ye(he);n.texStorage2D(s.TEXTURE_2D,ye,Fe,te.width,te.height)}V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,Ie,he)}else n.texImage2D(s.TEXTURE_2D,0,Fe,Pe,Ie,he);y(w)&&_(xe),qe.__version=me.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function fe(P,w,J){if(w.image.length!==6)return;const xe=we(P,w),ve=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+J);const me=r.get(ve);if(ve.version!==me.__version||xe===!0){n.activeTexture(s.TEXTURE0+J);const qe=At.getPrimaries(At.workingColorSpace),Ne=w.colorSpace===_r?null:At.getPrimaries(w.colorSpace),Ee=w.colorSpace===_r||qe===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ve=w.isCompressedTexture||w.image[0].isCompressedTexture,he=w.image[0]&&w.image[0].isDataTexture,Pe=[];for(let pe=0;pe<6;pe++)!Ve&&!he?Pe[pe]=T(w.image[pe],!0,a.maxCubemapSize):Pe[pe]=he?w.image[pe].image:w.image[pe],Pe[pe]=wt(w,Pe[pe]);const Ie=Pe[0],Fe=u.convert(w.format,w.colorSpace),Re=u.convert(w.type),Ze=L(w.internalFormat,Fe,Re,w.colorSpace),Ue=w.isVideoTexture!==!0,ot=me.__version===void 0||xe===!0,V=ve.dataReady;let ye=W(w,Ie);$(s.TEXTURE_CUBE_MAP,w);let te;if(Ve){Ue&&ot&&n.texStorage2D(s.TEXTURE_CUBE_MAP,ye,Ze,Ie.width,Ie.height);for(let pe=0;pe<6;pe++){te=Pe[pe].mipmaps;for(let Le=0;Le<te.length;Le++){const De=te[Le];w.format!==ui?Fe!==null?Ue?V&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,De.width,De.height,Fe,De.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,Ze,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,De.width,De.height,Fe,Re,De.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,Ze,De.width,De.height,0,Fe,Re,De.data)}}}else{if(te=w.mipmaps,Ue&&ot){te.length>0&&ye++;const pe=Ye(Pe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,ye,Ze,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(he){Ue?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Pe[pe].width,Pe[pe].height,Fe,Re,Pe[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ze,Pe[pe].width,Pe[pe].height,0,Fe,Re,Pe[pe].data);for(let Le=0;Le<te.length;Le++){const tt=te[Le].image[pe].image;Ue?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,tt.width,tt.height,Fe,Re,tt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,Ze,tt.width,tt.height,0,Fe,Re,tt.data)}}else{Ue?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Fe,Re,Pe[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ze,Fe,Re,Pe[pe]);for(let Le=0;Le<te.length;Le++){const De=te[Le];Ue?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,Fe,Re,De.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,Ze,Fe,Re,De.image[pe])}}}y(w)&&_(s.TEXTURE_CUBE_MAP),me.__version=ve.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ge(P,w,J,xe,ve,me){const qe=u.convert(J.format,J.colorSpace),Ne=u.convert(J.type),Ee=L(J.internalFormat,qe,Ne,J.colorSpace),Ve=r.get(w),he=r.get(J);if(he.__renderTarget=w,!Ve.__hasExternalTextures){const Pe=Math.max(1,w.width>>me),Ie=Math.max(1,w.height>>me);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?n.texImage3D(ve,me,Ee,Pe,Ie,w.depth,0,qe,Ne,null):n.texImage2D(ve,me,Ee,Pe,Ie,0,qe,Ne,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),ut(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,ve,he.__webglTexture,0,ct(w)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,xe,ve,he.__webglTexture,me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(P,w,J){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){const xe=w.depthTexture,ve=xe&&xe.isDepthTexture?xe.type:null,me=C(w.stencilBuffer,ve),qe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=ct(w);ut(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ne,me,w.width,w.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,me,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,me,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,P)}else{const xe=w.textures;for(let ve=0;ve<xe.length;ve++){const me=xe[ve],qe=u.convert(me.format,me.colorSpace),Ne=u.convert(me.type),Ee=L(me.internalFormat,qe,Ne,me.colorSpace),Ve=ct(w);J&&ut(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,Ee,w.width,w.height):ut(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ve,Ee,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=r.get(w.depthTexture);xe.__renderTarget=w,(!xe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),le(w.depthTexture,0);const ve=xe.__webglTexture,me=ct(w);if(w.depthTexture.format===Vs)ut(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(w.depthTexture.format===qs)ut(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function He(P){const w=r.get(P),J=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const xe=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),xe){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,xe.removeEventListener("dispose",ve)};xe.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=xe}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");be(w.__webglFramebuffer,P)}else if(J){w.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[xe]),w.__webglDepthbuffer[xe]===void 0)w.__webglDepthbuffer[xe]=s.createRenderbuffer(),_e(w.__webglDepthbuffer[xe],P,!1);else{const ve=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=w.__webglDepthbuffer[xe];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,me)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),_e(w.__webglDepthbuffer,P,!1);else{const xe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,ve)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(P,w,J){const xe=r.get(P);w!==void 0&&ge(xe.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&He(P)}function Ct(P){const w=P.texture,J=r.get(P),xe=r.get(w);P.addEventListener("dispose",N);const ve=P.textures,me=P.isWebGLCubeRenderTarget===!0,qe=ve.length>1;if(qe||(xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture()),xe.__version=w.version,f.memory.textures++),me){J.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[Ne]=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)J.__webglFramebuffer[Ne][Ee]=s.createFramebuffer()}else J.__webglFramebuffer[Ne]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ne=0;Ne<w.mipmaps.length;Ne++)J.__webglFramebuffer[Ne]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Ne=0,Ee=ve.length;Ne<Ee;Ne++){const Ve=r.get(ve[Ne]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=s.createTexture(),f.memory.textures++)}if(P.samples>0&&ut(P)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ne=0;Ne<ve.length;Ne++){const Ee=ve[Ne];J.__webglColorRenderbuffer[Ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Ne]);const Ve=u.convert(Ee.format,Ee.colorSpace),he=u.convert(Ee.type),Pe=L(Ee.internalFormat,Ve,he,Ee.colorSpace,P.isXRRenderTarget===!0),Ie=ct(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,Pe,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,J.__webglColorRenderbuffer[Ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(J.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){n.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),$(s.TEXTURE_CUBE_MAP,w);for(let Ne=0;Ne<6;Ne++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)ge(J.__webglFramebuffer[Ne][Ee],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ee);else ge(J.__webglFramebuffer[Ne],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);y(w)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qe){for(let Ne=0,Ee=ve.length;Ne<Ee;Ne++){const Ve=ve[Ne],he=r.get(Ve);n.bindTexture(s.TEXTURE_2D,he.__webglTexture),$(s.TEXTURE_2D,Ve),ge(J.__webglFramebuffer,P,Ve,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,0),y(Ve)&&_(s.TEXTURE_2D)}n.unbindTexture()}else{let Ne=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ne=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ne,xe.__webglTexture),$(Ne,w),w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)ge(J.__webglFramebuffer[Ee],P,w,s.COLOR_ATTACHMENT0,Ne,Ee);else ge(J.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,Ne,0);y(w)&&_(Ne),n.unbindTexture()}P.depthBuffer&&He(P)}function Rt(P){const w=P.textures;for(let J=0,xe=w.length;J<xe;J++){const ve=w[J];if(y(ve)){const me=I(P),qe=r.get(ve).__webglTexture;n.bindTexture(me,qe),_(me),n.unbindTexture()}}}const lt=[],F=[];function Xt(P){if(P.samples>0){if(ut(P)===!1){const w=P.textures,J=P.width,xe=P.height;let ve=s.COLOR_BUFFER_BIT;const me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(P),Ne=w.length>1;if(Ne)for(let Ee=0;Ee<w.length;Ee++)n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Ee=0;Ee<w.length;Ee++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Ee]);const Ve=r.get(w[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ve,0)}s.blitFramebuffer(0,0,J,xe,0,0,J,xe,ve,s.NEAREST),h===!0&&(lt.length=0,F.length=0,lt.push(s.COLOR_ATTACHMENT0+Ee),P.depthBuffer&&P.resolveDepthBuffer===!1&&(lt.push(me),F.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ne)for(let Ee=0;Ee<w.length;Ee++){n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Ee]);const Ve=r.get(w[Ee]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,Ve,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function ct(P){return Math.min(a.maxSamples,P.samples)}function ut(P){const w=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Je(P){const w=f.render.frame;v.get(P)!==w&&(v.set(P,w),P.update())}function wt(P,w){const J=P.colorSpace,xe=P.format,ve=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==$s&&J!==_r&&(At.getTransfer(J)===Pt?(xe!==ui||ve!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),w}function Ye(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=Q,this.resetTextureUnits=ne,this.setTexture2D=le,this.setTexture2DArray=se,this.setTexture3D=de,this.setTextureCube=z,this.rebindTextures=Xe,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ut}function f1(s,e){function n(r,a=_r){let u;const f=At.getTransfer(a);if(r===Vi)return s.UNSIGNED_BYTE;if(r===ed)return s.UNSIGNED_SHORT_4_4_4_4;if(r===td)return s.UNSIGNED_SHORT_5_5_5_1;if(r===tg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Jm)return s.BYTE;if(r===eg)return s.SHORT;if(r===Vo)return s.UNSIGNED_SHORT;if(r===Jf)return s.INT;if(r===Zr)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===Xo)return s.HALF_FLOAT;if(r===ng)return s.ALPHA;if(r===ig)return s.RGB;if(r===ui)return s.RGBA;if(r===rg)return s.LUMINANCE;if(r===sg)return s.LUMINANCE_ALPHA;if(r===Vs)return s.DEPTH_COMPONENT;if(r===qs)return s.DEPTH_STENCIL;if(r===og)return s.RED;if(r===nd)return s.RED_INTEGER;if(r===ag)return s.RG;if(r===id)return s.RG_INTEGER;if(r===rd)return s.RGBA_INTEGER;if(r===Rl||r===Cl||r===bl||r===Pl)if(f===Pt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Rl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Rl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mf||r===Ef||r===wf||r===Tf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Mf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ef)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Tf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Af||r===Rf||r===Cf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Af||r===Rf)return f===Pt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Cf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bf||r===Pf||r===Lf||r===Df||r===If||r===Uf||r===Nf||r===Ff||r===Of||r===kf||r===zf||r===Bf||r===Hf||r===Vf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===bf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Df)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===If)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ff)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Of)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ll||r===Gf||r===Wf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Ll)return f===Pt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Wf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lg||r===Xf||r===jf||r===Yf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Ll)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Xf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ys?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const d1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class p1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Fn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Er({vertexShader:d1,fragmentShader:h1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new dn(new Xl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m1 extends Zs{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",h=1,m=null,v=null,g=null,x=null,S=null,E=null;const T=new p1,y=n.getContextAttributes();let _=null,I=null;const L=[],C=[],W=new Et;let O=null;const N=new Un;N.viewport=new Lt;const X=new Un;X.viewport=new Lt;const b=[N,X],R=new Nx;let k=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let fe=L[q];return fe===void 0&&(fe=new $c,L[q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(q){let fe=L[q];return fe===void 0&&(fe=new $c,L[q]=fe),fe.getGripSpace()},this.getHand=function(q){let fe=L[q];return fe===void 0&&(fe=new $c,L[q]=fe),fe.getHandSpace()};function Q(q){const fe=C.indexOf(q.inputSource);if(fe===-1)return;const ge=L[fe];ge!==void 0&&(ge.update(q.inputSource,q.frame,m||f),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function ue(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",le);for(let q=0;q<L.length;q++){const fe=C[q];fe!==null&&(C[q]=null,L[q].disconnect(fe))}k=null,ne=null,T.reset(),e.setRenderTarget(_),S=null,x=null,g=null,a=null,I=null,we.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",le),y.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,_e=null,be=null;y.depth&&(be=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=y.stencil?qs:Vs,_e=y.stencil?Ys:Zr);const He={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:u};g=new XRWebGLBinding(a,n),x=g.createProjectionLayer(He),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new Qr(x.textureWidth,x.textureHeight,{format:ui,type:Vi,depthTexture:new Sg(x.textureWidth,x.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ge={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,ge),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new Qr(S.framebufferWidth,S.framebufferHeight,{format:ui,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),m=null,f=await a.requestReferenceSpace(d),we.setContext(a),we.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function le(q){for(let fe=0;fe<q.removed.length;fe++){const ge=q.removed[fe],_e=C.indexOf(ge);_e>=0&&(C[_e]=null,L[_e].disconnect(ge))}for(let fe=0;fe<q.added.length;fe++){const ge=q.added[fe];let _e=C.indexOf(ge);if(_e===-1){for(let He=0;He<L.length;He++)if(He>=C.length){C.push(ge),_e=He;break}else if(C[He]===null){C[He]=ge,_e=He;break}if(_e===-1)break}const be=L[_e];be&&be.connect(ge)}}const se=new H,de=new H;function z(q,fe,ge){se.setFromMatrixPosition(fe.matrixWorld),de.setFromMatrixPosition(ge.matrixWorld);const _e=se.distanceTo(de),be=fe.projectionMatrix.elements,He=ge.projectionMatrix.elements,Xe=be[14]/(be[10]-1),Ct=be[14]/(be[10]+1),Rt=(be[9]+1)/be[5],lt=(be[9]-1)/be[5],F=(be[8]-1)/be[0],Xt=(He[8]+1)/He[0],ct=Xe*F,ut=Xe*Xt,Je=_e/(-F+Xt),wt=Je*-F;if(fe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(wt),q.translateZ(Je),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(fe.projectionMatrix),q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ye=Xe+Je,P=Ct+Je,w=ct-wt,J=ut+(_e-wt),xe=Rt*Ct/P*Ye,ve=lt*Ct/P*Ye;q.projectionMatrix.makePerspective(w,J,xe,ve,Ye,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ce(q,fe){fe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(fe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;let fe=q.near,ge=q.far;T.texture!==null&&(T.depthNear>0&&(fe=T.depthNear),T.depthFar>0&&(ge=T.depthFar)),R.near=X.near=N.near=fe,R.far=X.far=N.far=ge,(k!==R.near||ne!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,ne=R.far),N.layers.mask=q.layers.mask|2,X.layers.mask=q.layers.mask|4,R.layers.mask=N.layers.mask|X.layers.mask;const _e=q.parent,be=R.cameras;ce(R,_e);for(let He=0;He<be.length;He++)ce(be[He],_e);be.length===2?z(R,N,X):R.projectionMatrix.copy(N.projectionMatrix),oe(q,R,_e)};function oe(q,fe,ge){ge===null?q.matrix.copy(fe.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(fe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(fe.projectionMatrix),q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Go*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(q){h=q,x!==null&&(x.fixedFoveation=q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let U=null;function $(q,fe){if(v=fe.getViewerPose(m||f),E=fe,v!==null){const ge=v.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let _e=!1;ge.length!==R.cameras.length&&(R.cameras.length=0,_e=!0);for(let Xe=0;Xe<ge.length;Xe++){const Ct=ge[Xe];let Rt=null;if(S!==null)Rt=S.getViewport(Ct);else{const F=g.getViewSubImage(x,Ct);Rt=F.viewport,Xe===0&&(e.setRenderTargetTextures(I,F.colorTexture,x.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(I))}let lt=b[Xe];lt===void 0&&(lt=new Un,lt.layers.enable(Xe),lt.viewport=new Lt,b[Xe]=lt),lt.matrix.fromArray(Ct.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Ct.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Xe===0&&(R.matrix.copy(lt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),_e===!0&&R.cameras.push(lt)}const be=a.enabledFeatures;if(be&&be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&g){const Xe=g.getDepthInformation(ge[0]);Xe&&Xe.isValid&&Xe.texture&&T.init(e,Xe,a.renderState)}}for(let ge=0;ge<L.length;ge++){const _e=C[ge],be=L[ge];_e!==null&&be!==void 0&&be.update(_e,fe,m||f)}U&&U(q,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),E=null}const we=new Ag;we.setAnimationLoop($),this.setAnimationLoop=function(q){U=q},this.dispose=function(){}}}const Gr=new di,g1=new zt;function _1(s,e){function n(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,_g(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,I,L,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),g(y,_)):_.isMeshPhongMaterial?(u(y,_),v(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,C)):_.isMeshMatcapMaterial?(u(y,_),E(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),T(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?h(y,_,I,L):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,n(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Nn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,n(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Nn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,n(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,n(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const I=e.get(_),L=I.envMap,C=I.envMapRotation;L&&(y.envMap.value=L,Gr.copy(C),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),y.envMapRotation.value.setFromMatrix4(g1.makeRotationFromEuler(Gr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,I,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*I,y.scale.value=L*.5,_.map&&(y.map.value=_.map,n(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,I){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Nn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function T(y,_){const I=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function v1(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,L){const C=L.program;r.uniformBlockBinding(I,C)}function m(I,L){let C=a[I.id];C===void 0&&(E(I),C=v(I),a[I.id]=C,I.addEventListener("dispose",y));const W=L.program;r.updateUBOMapping(I,W);const O=e.render.frame;u[I.id]!==O&&(x(I),u[I.id]=O)}function v(I){const L=g();I.__bindingPointIndex=L;const C=s.createBuffer(),W=I.__size,O=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,W,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,C),C}function g(){for(let I=0;I<d;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const L=a[I.id],C=I.uniforms,W=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let O=0,N=C.length;O<N;O++){const X=Array.isArray(C[O])?C[O]:[C[O]];for(let b=0,R=X.length;b<R;b++){const k=X[b];if(S(k,O,b,W)===!0){const ne=k.__offset,Q=Array.isArray(k.value)?k.value:[k.value];let ue=0;for(let le=0;le<Q.length;le++){const se=Q[le],de=T(se);typeof se=="number"||typeof se=="boolean"?(k.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,ne+ue,k.__data)):se.isMatrix3?(k.__data[0]=se.elements[0],k.__data[1]=se.elements[1],k.__data[2]=se.elements[2],k.__data[3]=0,k.__data[4]=se.elements[3],k.__data[5]=se.elements[4],k.__data[6]=se.elements[5],k.__data[7]=0,k.__data[8]=se.elements[6],k.__data[9]=se.elements[7],k.__data[10]=se.elements[8],k.__data[11]=0):(se.toArray(k.__data,ue),ue+=de.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,L,C,W){const O=I.value,N=L+"_"+C;if(W[N]===void 0)return typeof O=="number"||typeof O=="boolean"?W[N]=O:W[N]=O.clone(),!0;{const X=W[N];if(typeof O=="number"||typeof O=="boolean"){if(X!==O)return W[N]=O,!0}else if(X.equals(O)===!1)return X.copy(O),!0}return!1}function E(I){const L=I.uniforms;let C=0;const W=16;for(let N=0,X=L.length;N<X;N++){const b=Array.isArray(L[N])?L[N]:[L[N]];for(let R=0,k=b.length;R<k;R++){const ne=b[R],Q=Array.isArray(ne.value)?ne.value:[ne.value];for(let ue=0,le=Q.length;ue<le;ue++){const se=Q[ue],de=T(se),z=C%W,ce=z%de.boundary,oe=z+ce;C+=ce,oe!==0&&W-oe<de.storage&&(C+=W-oe),ne.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=C,C+=de.storage}}}const O=C%W;return O>0&&(C+=W-O),I.__size=C,I.__cache={},this}function T(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function y(I){const L=I.target;L.removeEventListener("dispose",y);const C=f.indexOf(L.__bindingPointIndex);f.splice(C,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function _(){for(const I in a)s.deleteBuffer(a[I]);f=[],a={},u={}}return{bind:h,update:m,dispose:_}}class Lg{constructor(e={}){const{canvas:n=Qv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,_=null;const I=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=Sr,this.toneMappingExposure=1;const C=this;let W=!1,O=0,N=0,X=null,b=-1,R=null;const k=new Lt,ne=new Lt;let Q=null;const ue=new pt(0);let le=0,se=n.width,de=n.height,z=1,ce=null,oe=null;const U=new Lt(0,0,se,de),$=new Lt(0,0,se,de);let we=!1;const q=new ld;let fe=!1,ge=!1;this.transmissionResolutionScale=1;const _e=new zt,be=new zt,He=new H,Xe=new Lt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function lt(){return X===null?z:1}let F=r;function Xt(A,j){return n.getContext(A,j)}try{const A={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zf}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",De,!1),F===null){const j="webgl2";if(F=Xt(j,A),F===null)throw Xt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ct,ut,Je,wt,Ye,P,w,J,xe,ve,me,qe,Ne,Ee,Ve,he,Pe,Ie,Fe,Re,Ze,Ue,ot,V;function ye(){ct=new bM(F),ct.init(),Ue=new f1(F,ct),ut=new MM(F,ct,e,Ue),Je=new u1(F,ct),ut.reverseDepthBuffer&&x&&Je.buffers.depth.setReversed(!0),wt=new DM(F),Ye=new KE,P=new c1(F,ct,Je,Ye,ut,Ue,wt),w=new wM(C),J=new CM(C),xe=new kx(F),ot=new yM(F,xe),ve=new PM(F,xe,wt,ot),me=new UM(F,ve,xe,wt),Fe=new IM(F,ut,P),he=new EM(Ye),qe=new $E(C,w,J,ct,ut,ot,he),Ne=new _1(C,Ye),Ee=new QE,Ve=new r1(ct),Ie=new xM(C,w,J,Je,me,S,h),Pe=new a1(C,me,ut),V=new v1(F,wt,ut,Je),Re=new SM(F,ct,wt),Ze=new LM(F,ct,wt),wt.programs=qe.programs,C.capabilities=ut,C.extensions=ct,C.properties=Ye,C.renderLists=Ee,C.shadowMap=Pe,C.state=Je,C.info=wt}ye();const te=new m1(C,F);this.xr=te,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(se,de,!1))},this.getSize=function(A){return A.set(se,de)},this.setSize=function(A,j,ie=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,de=j,n.width=Math.floor(A*z),n.height=Math.floor(j*z),ie===!0&&(n.style.width=A+"px",n.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(se*z,de*z).floor()},this.setDrawingBufferSize=function(A,j,ie){se=A,de=j,z=ie,n.width=Math.floor(A*ie),n.height=Math.floor(j*ie),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,j,ie,Z){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,j,ie,Z),Je.viewport(k.copy(U).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy($)},this.setScissor=function(A,j,ie,Z){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,j,ie,Z),Je.scissor(ne.copy($).multiplyScalar(z).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(A){Je.setScissorTest(we=A)},this.setOpaqueSort=function(A){ce=A},this.setTransparentSort=function(A){oe=A},this.getClearColor=function(A){return A.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,ie=!0){let Z=0;if(A){let Y=!1;if(X!==null){const Ae=X.texture.format;Y=Ae===rd||Ae===id||Ae===nd}if(Y){const Ae=X.texture.type,Oe=Ae===Vi||Ae===Zr||Ae===Vo||Ae===Ys||Ae===ed||Ae===td,ze=Ie.getClearColor(),We=Ie.getClearAlpha(),st=ze.r,rt=ze.g,$e=ze.b;Oe?(E[0]=st,E[1]=rt,E[2]=$e,E[3]=We,F.clearBufferuiv(F.COLOR,0,E)):(T[0]=st,T[1]=rt,T[2]=$e,T[3]=We,F.clearBufferiv(F.COLOR,0,T))}else Z|=F.COLOR_BUFFER_BIT}j&&(Z|=F.DEPTH_BUFFER_BIT),ie&&(Z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",De,!1),Ie.dispose(),Ee.dispose(),Ve.dispose(),Ye.dispose(),w.dispose(),J.dispose(),me.dispose(),ot.dispose(),V.dispose(),qe.dispose(),te.dispose(),te.removeEventListener("sessionstart",es),te.removeEventListener("sessionend",Gi),Si.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const A=wt.autoReset,j=Pe.enabled,ie=Pe.autoUpdate,Z=Pe.needsUpdate,Y=Pe.type;ye(),wt.autoReset=A,Pe.enabled=j,Pe.autoUpdate=ie,Pe.needsUpdate=Z,Pe.type=Y}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tt(A){const j=A.target;j.removeEventListener("dispose",tt),bt(j)}function bt(A){jt(A),Ye.remove(A)}function jt(A){const j=Ye.get(A).programs;j!==void 0&&(j.forEach(function(ie){qe.releaseProgram(ie)}),A.isShaderMaterial&&qe.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ie,Z,Y,Ae){j===null&&(j=Ct);const Oe=Y.isMesh&&Y.matrixWorld.determinant()<0,ze=Zo(A,j,ie,Z,Y);Je.setMaterial(Z,Oe);let We=ie.index,st=1;if(Z.wireframe===!0){if(We=ve.getWireframeAttribute(ie),We===void 0)return;st=2}const rt=ie.drawRange,$e=ie.attributes.position;let xt=rt.start*st,ft=(rt.start+rt.count)*st;Ae!==null&&(xt=Math.max(xt,Ae.start*st),ft=Math.min(ft,(Ae.start+Ae.count)*st)),We!==null?(xt=Math.max(xt,0),ft=Math.min(ft,We.count)):$e!=null&&(xt=Math.max(xt,0),ft=Math.min(ft,$e.count));const Vt=ft-xt;if(Vt<0||Vt===1/0)return;ot.setup(Y,Z,ze,ie,We);let Ot,yt=Re;if(We!==null&&(Ot=xe.get(We),yt=Ze,yt.setIndex(Ot)),Y.isMesh)Z.wireframe===!0?(Je.setLineWidth(Z.wireframeLinewidth*lt()),yt.setMode(F.LINES)):yt.setMode(F.TRIANGLES);else if(Y.isLine){let et=Z.linewidth;et===void 0&&(et=1),Je.setLineWidth(et*lt()),Y.isLineSegments?yt.setMode(F.LINES):Y.isLineLoop?yt.setMode(F.LINE_LOOP):yt.setMode(F.LINE_STRIP)}else Y.isPoints?yt.setMode(F.POINTS):Y.isSprite&&yt.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Wr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))yt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const et=Y._multiDrawStarts,Gt=Y._multiDrawCounts,_t=Y._multiDrawCount,hn=We?xe.get(We).bytesPerElement:1,Xi=Ye.get(Z).currentProgram.getUniforms();for(let Mn=0;Mn<_t;Mn++)Xi.setValue(F,"_gl_DrawID",Mn),yt.render(et[Mn]/hn,Gt[Mn])}else if(Y.isInstancedMesh)yt.renderInstances(xt,Vt,Y.count);else if(ie.isInstancedBufferGeometry){const et=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Gt=Math.min(ie.instanceCount,et);yt.renderInstances(xt,Vt,Gt)}else yt.render(xt,Vt)};function gt(A,j,ie){A.transparent===!0&&A.side===ki&&A.forceSinglePass===!1?(A.side=Nn,A.needsUpdate=!0,ts(A,j,ie),A.side=Mr,A.needsUpdate=!0,ts(A,j,ie),A.side=ki):ts(A,j,ie)}this.compile=function(A,j,ie=null){ie===null&&(ie=A),_=Ve.get(ie),_.init(j),L.push(_),ie.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),A!==ie&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const Z=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ae=Y.material;if(Ae)if(Array.isArray(Ae))for(let Oe=0;Oe<Ae.length;Oe++){const ze=Ae[Oe];gt(ze,ie,Y),Z.add(ze)}else gt(Ae,ie,Y),Z.add(Ae)}),_=L.pop(),Z},this.compileAsync=function(A,j,ie=null){const Z=this.compile(A,j,ie);return new Promise(Y=>{function Ae(){if(Z.forEach(function(Oe){Ye.get(Oe).currentProgram.isReady()&&Z.delete(Oe)}),Z.size===0){Y(A);return}setTimeout(Ae,10)}ct.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Rn=null;function Sn(A){Rn&&Rn(A)}function es(){Si.stop()}function Gi(){Si.start()}const Si=new Ag;Si.setAnimationLoop(Sn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(A){Rn=A,te.setAnimationLoop(A),A===null?Si.stop():Si.start()},te.addEventListener("sessionstart",es),te.addEventListener("sessionend",Gi),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(j),j=te.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,j,X),_=Ve.get(A,L.length),_.init(j),L.push(_),be.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),q.setFromProjectionMatrix(be),ge=this.localClippingEnabled,fe=he.init(this.clippingPlanes,ge),y=Ee.get(A,I.length),y.init(),I.push(y),te.enabled===!0&&te.isPresenting===!0){const Ae=C.xr.getDepthSensingMesh();Ae!==null&&Mi(Ae,j,-1/0,C.sortObjects)}Mi(A,j,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ce,oe),Rt=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Rt&&Ie.addToRenderList(y,A),this.info.render.frame++,fe===!0&&he.beginShadows();const ie=_.state.shadowsArray;Pe.render(ie,A,j),fe===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=y.opaque,Y=y.transmissive;if(_.setupLights(),j.isArrayCamera){const Ae=j.cameras;if(Y.length>0)for(let Oe=0,ze=Ae.length;Oe<ze;Oe++){const We=Ae[Oe];Tr(Z,Y,A,We)}Rt&&Ie.render(A);for(let Oe=0,ze=Ae.length;Oe<ze;Oe++){const We=Ae[Oe];wr(y,A,We,We.viewport)}}else Y.length>0&&Tr(Z,Y,A,j),Rt&&Ie.render(A),wr(y,A,j);X!==null&&N===0&&(P.updateMultisampleRenderTarget(X),P.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(C,A,j),ot.resetDefaultState(),b=-1,R=null,L.pop(),L.length>0?(_=L[L.length-1],fe===!0&&he.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Mi(A,j,ie,Z){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){Z&&Xe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(be);const Oe=me.update(A),ze=A.material;ze.visible&&y.push(A,Oe,ze,ie,Xe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const Oe=me.update(A),ze=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Xe.copy(A.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Xe.copy(Oe.boundingSphere.center)),Xe.applyMatrix4(A.matrixWorld).applyMatrix4(be)),Array.isArray(ze)){const We=Oe.groups;for(let st=0,rt=We.length;st<rt;st++){const $e=We[st],xt=ze[$e.materialIndex];xt&&xt.visible&&y.push(A,Oe,xt,ie,Xe.z,$e)}}else ze.visible&&y.push(A,Oe,ze,ie,Xe.z,null)}}const Ae=A.children;for(let Oe=0,ze=Ae.length;Oe<ze;Oe++)Mi(Ae[Oe],j,ie,Z)}function wr(A,j,ie,Z){const Y=A.opaque,Ae=A.transmissive,Oe=A.transparent;_.setupLightsView(ie),fe===!0&&he.setGlobalState(C.clippingPlanes,ie),Z&&Je.viewport(k.copy(Z)),Y.length>0&&Wi(Y,j,ie),Ae.length>0&&Wi(Ae,j,ie),Oe.length>0&&Wi(Oe,j,ie),Je.buffers.depth.setTest(!0),Je.buffers.depth.setMask(!0),Je.buffers.color.setMask(!0),Je.setPolygonOffset(!1)}function Tr(A,j,ie,Z){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Z.id]===void 0&&(_.state.transmissionRenderTarget[Z.id]=new Qr(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Xo:Vi,minFilter:Kr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Ae=_.state.transmissionRenderTarget[Z.id],Oe=Z.viewport||k;Ae.setSize(Oe.z*C.transmissionResolutionScale,Oe.w*C.transmissionResolutionScale);const ze=C.getRenderTarget();C.setRenderTarget(Ae),C.getClearColor(ue),le=C.getClearAlpha(),le<1&&C.setClearColor(16777215,.5),C.clear(),Rt&&Ie.render(ie);const We=C.toneMapping;C.toneMapping=Sr;const st=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),_.setupLightsView(Z),fe===!0&&he.setGlobalState(C.clippingPlanes,Z),Wi(A,ie,Z),P.updateMultisampleRenderTarget(Ae),P.updateRenderTargetMipmap(Ae),ct.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let $e=0,xt=j.length;$e<xt;$e++){const ft=j[$e],Vt=ft.object,Ot=ft.geometry,yt=ft.material,et=ft.group;if(yt.side===ki&&Vt.layers.test(Z.layers)){const Gt=yt.side;yt.side=Nn,yt.needsUpdate=!0,$o(Vt,ie,Z,Ot,yt,et),yt.side=Gt,yt.needsUpdate=!0,rt=!0}}rt===!0&&(P.updateMultisampleRenderTarget(Ae),P.updateRenderTargetMipmap(Ae))}C.setRenderTarget(ze),C.setClearColor(ue,le),st!==void 0&&(Z.viewport=st),C.toneMapping=We}function Wi(A,j,ie){const Z=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,Ae=A.length;Y<Ae;Y++){const Oe=A[Y],ze=Oe.object,We=Oe.geometry,st=Z===null?Oe.material:Z,rt=Oe.group;ze.layers.test(ie.layers)&&$o(ze,j,ie,We,st,rt)}}function $o(A,j,ie,Z,Y,Ae){A.onBeforeRender(C,j,ie,Z,Y,Ae),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(C,j,ie,Z,A,Ae),Y.transparent===!0&&Y.side===ki&&Y.forceSinglePass===!1?(Y.side=Nn,Y.needsUpdate=!0,C.renderBufferDirect(ie,j,Z,Y,A,Ae),Y.side=Mr,Y.needsUpdate=!0,C.renderBufferDirect(ie,j,Z,Y,A,Ae),Y.side=ki):C.renderBufferDirect(ie,j,Z,Y,A,Ae),A.onAfterRender(C,j,ie,Z,Y,Ae)}function ts(A,j,ie){j.isScene!==!0&&(j=Ct);const Z=Ye.get(A),Y=_.state.lights,Ae=_.state.shadowsArray,Oe=Y.state.version,ze=qe.getParameters(A,Y.state,Ae,j,ie),We=qe.getProgramCacheKey(ze);let st=Z.programs;Z.environment=A.isMeshStandardMaterial?j.environment:null,Z.fog=j.fog,Z.envMap=(A.isMeshStandardMaterial?J:w).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,st===void 0&&(A.addEventListener("dispose",tt),st=new Map,Z.programs=st);let rt=st.get(We);if(rt!==void 0){if(Z.currentProgram===rt&&Z.lightsStateVersion===Oe)return hi(A,ze),rt}else ze.uniforms=qe.getUniforms(A),A.onBeforeCompile(ze,C),rt=qe.acquireProgram(ze,We),st.set(We,rt),Z.uniforms=ze.uniforms;const $e=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=he.uniform),hi(A,ze),Z.needsLights=Yl(A),Z.lightsStateVersion=Oe,Z.needsLights&&($e.ambientLightColor.value=Y.state.ambient,$e.lightProbe.value=Y.state.probe,$e.directionalLights.value=Y.state.directional,$e.directionalLightShadows.value=Y.state.directionalShadow,$e.spotLights.value=Y.state.spot,$e.spotLightShadows.value=Y.state.spotShadow,$e.rectAreaLights.value=Y.state.rectArea,$e.ltc_1.value=Y.state.rectAreaLTC1,$e.ltc_2.value=Y.state.rectAreaLTC2,$e.pointLights.value=Y.state.point,$e.pointLightShadows.value=Y.state.pointShadow,$e.hemisphereLights.value=Y.state.hemi,$e.directionalShadowMap.value=Y.state.directionalShadowMap,$e.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,$e.spotShadowMap.value=Y.state.spotShadowMap,$e.spotLightMatrix.value=Y.state.spotLightMatrix,$e.spotLightMap.value=Y.state.spotLightMap,$e.pointShadowMap.value=Y.state.pointShadowMap,$e.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=rt,Z.uniformsList=null,rt}function Ko(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Il.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function hi(A,j){const ie=Ye.get(A);ie.outputColorSpace=j.outputColorSpace,ie.batching=j.batching,ie.batchingColor=j.batchingColor,ie.instancing=j.instancing,ie.instancingColor=j.instancingColor,ie.instancingMorph=j.instancingMorph,ie.skinning=j.skinning,ie.morphTargets=j.morphTargets,ie.morphNormals=j.morphNormals,ie.morphColors=j.morphColors,ie.morphTargetsCount=j.morphTargetsCount,ie.numClippingPlanes=j.numClippingPlanes,ie.numIntersection=j.numClipIntersection,ie.vertexAlphas=j.vertexAlphas,ie.vertexTangents=j.vertexTangents,ie.toneMapping=j.toneMapping}function Zo(A,j,ie,Z,Y){j.isScene!==!0&&(j=Ct),P.resetTextureUnits();const Ae=j.fog,Oe=Z.isMeshStandardMaterial?j.environment:null,ze=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:$s,We=(Z.isMeshStandardMaterial?J:w).get(Z.envMap||Oe),st=Z.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,rt=!!ie.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),$e=!!ie.morphAttributes.position,xt=!!ie.morphAttributes.normal,ft=!!ie.morphAttributes.color;let Vt=Sr;Z.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Vt=C.toneMapping);const Ot=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,yt=Ot!==void 0?Ot.length:0,et=Ye.get(Z),Gt=_.state.lights;if(fe===!0&&(ge===!0||A!==R)){const un=A===R&&Z.id===b;he.setState(Z,A,un)}let _t=!1;Z.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Gt.state.version||et.outputColorSpace!==ze||Y.isBatchedMesh&&et.batching===!1||!Y.isBatchedMesh&&et.batching===!0||Y.isBatchedMesh&&et.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&et.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&et.instancing===!1||!Y.isInstancedMesh&&et.instancing===!0||Y.isSkinnedMesh&&et.skinning===!1||!Y.isSkinnedMesh&&et.skinning===!0||Y.isInstancedMesh&&et.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&et.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&et.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&et.instancingMorph===!1&&Y.morphTexture!==null||et.envMap!==We||Z.fog===!0&&et.fog!==Ae||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==he.numPlanes||et.numIntersection!==he.numIntersection)||et.vertexAlphas!==st||et.vertexTangents!==rt||et.morphTargets!==$e||et.morphNormals!==xt||et.morphColors!==ft||et.toneMapping!==Vt||et.morphTargetsCount!==yt)&&(_t=!0):(_t=!0,et.__version=Z.version);let hn=et.currentProgram;_t===!0&&(hn=ts(Z,j,Y));let Xi=!1,Mn=!1,Ei=!1;const Dt=hn.getUniforms(),pn=et.uniforms;if(Je.useProgram(hn.program)&&(Xi=!0,Mn=!0,Ei=!0),Z.id!==b&&(b=Z.id,Mn=!0),Xi||R!==A){Je.buffers.depth.getReversed()?(_e.copy(A.projectionMatrix),ex(_e),tx(_e),Dt.setValue(F,"projectionMatrix",_e)):Dt.setValue(F,"projectionMatrix",A.projectionMatrix),Dt.setValue(F,"viewMatrix",A.matrixWorldInverse);const tn=Dt.map.cameraPosition;tn!==void 0&&tn.setValue(F,He.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&Dt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Dt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Mn=!0,Ei=!0)}if(Y.isSkinnedMesh){Dt.setOptional(F,Y,"bindMatrix"),Dt.setOptional(F,Y,"bindMatrixInverse");const un=Y.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Dt.setValue(F,"boneTexture",un.boneTexture,P))}Y.isBatchedMesh&&(Dt.setOptional(F,Y,"batchingTexture"),Dt.setValue(F,"batchingTexture",Y._matricesTexture,P),Dt.setOptional(F,Y,"batchingIdTexture"),Dt.setValue(F,"batchingIdTexture",Y._indirectTexture,P),Dt.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Dt.setValue(F,"batchingColorTexture",Y._colorsTexture,P));const en=ie.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Fe.update(Y,ie,hn),(Mn||et.receiveShadow!==Y.receiveShadow)&&(et.receiveShadow=Y.receiveShadow,Dt.setValue(F,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(pn.envMap.value=We,pn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&j.environment!==null&&(pn.envMapIntensity.value=j.environmentIntensity),Mn&&(Dt.setValue(F,"toneMappingExposure",C.toneMappingExposure),et.needsLights&&Qo(pn,Ei),Ae&&Z.fog===!0&&Ne.refreshFogUniforms(pn,Ae),Ne.refreshMaterialUniforms(pn,Z,z,de,_.state.transmissionRenderTarget[A.id]),Il.upload(F,Ko(et),pn,P)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Il.upload(F,Ko(et),pn,P),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Dt.setValue(F,"center",Y.center),Dt.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Dt.setValue(F,"normalMatrix",Y.normalMatrix),Dt.setValue(F,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const un=Z.uniformsGroups;for(let tn=0,St=un.length;tn<St;tn++){const pi=un[tn];V.update(pi,hn),V.bind(pi,hn)}}return hn}function Qo(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Yl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,j,ie){Ye.get(A.texture).__webglTexture=j,Ye.get(A.depthTexture).__webglTexture=ie;const Z=Ye.get(A);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=ie===void 0,Z.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const ie=Ye.get(A);ie.__webglFramebuffer=j,ie.__useDefaultFramebuffer=j===void 0};const Jo=F.createFramebuffer();this.setRenderTarget=function(A,j=0,ie=0){X=A,O=j,N=ie;let Z=!0,Y=null,Ae=!1,Oe=!1;if(A){const We=Ye.get(A);if(We.__useDefaultFramebuffer!==void 0)Je.bindFramebuffer(F.FRAMEBUFFER,null),Z=!1;else if(We.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(We.__hasExternalTextures)P.rebindTextures(A,Ye.get(A.texture).__webglTexture,Ye.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(We.__boundDepthTexture!==$e){if($e!==null&&Ye.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const st=A.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Oe=!0);const rt=Ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[j])?Y=rt[j][ie]:Y=rt[j],Ae=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?Y=Ye.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?Y=rt[ie]:Y=rt,k.copy(A.viewport),ne.copy(A.scissor),Q=A.scissorTest}else k.copy(U).multiplyScalar(z).floor(),ne.copy($).multiplyScalar(z).floor(),Q=we;if(ie!==0&&(Y=Jo),Je.bindFramebuffer(F.FRAMEBUFFER,Y)&&Z&&Je.drawBuffers(A,Y),Je.viewport(k),Je.scissor(ne),Je.setScissorTest(Q),Ae){const We=Ye.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,We.__webglTexture,ie)}else if(Oe){const We=Ye.get(A.texture),st=j;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,We.__webglTexture,ie,st)}else if(A!==null&&ie!==0){const We=Ye.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,We.__webglTexture,ie)}b=-1},this.readRenderTargetPixels=function(A,j,ie,Z,Y,Ae,Oe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){Je.bindFramebuffer(F.FRAMEBUFFER,ze);try{const We=A.texture,st=We.format,rt=We.type;if(!ut.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-Z&&ie>=0&&ie<=A.height-Y&&F.readPixels(j,ie,Z,Y,Ue.convert(st),Ue.convert(rt),Ae)}finally{const We=X!==null?Ye.get(X).__webglFramebuffer:null;Je.bindFramebuffer(F.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,j,ie,Z,Y,Ae,Oe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){const We=A.texture,st=We.format,rt=We.type;if(!ut.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-Z&&ie>=0&&ie<=A.height-Y){Je.bindFramebuffer(F.FRAMEBUFFER,ze);const $e=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,$e),F.bufferData(F.PIXEL_PACK_BUFFER,Ae.byteLength,F.STREAM_READ),F.readPixels(j,ie,Z,Y,Ue.convert(st),Ue.convert(rt),0);const xt=X!==null?Ye.get(X).__webglFramebuffer:null;Je.bindFramebuffer(F.FRAMEBUFFER,xt);const ft=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Jv(F,ft,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,$e),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ae),F.deleteBuffer($e),F.deleteSync(ft),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,ie=0){A.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const Z=Math.pow(2,-ie),Y=Math.floor(A.image.width*Z),Ae=Math.floor(A.image.height*Z),Oe=j!==null?j.x:0,ze=j!==null?j.y:0;P.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,ie,0,0,Oe,ze,Y,Ae),Je.unbindTexture()};const ea=F.createFramebuffer(),ta=F.createFramebuffer();this.copyTextureToTexture=function(A,j,ie=null,Z=null,Y=0,Ae=null){A.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,A=arguments[1],j=arguments[2],Ae=arguments[3]||0,ie=null),Ae===null&&(Y!==0?(Wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Y,Y=0):Ae=0);let Oe,ze,We,st,rt,$e,xt,ft,Vt;const Ot=A.isCompressedTexture?A.mipmaps[Ae]:A.image;if(ie!==null)Oe=ie.max.x-ie.min.x,ze=ie.max.y-ie.min.y,We=ie.isBox3?ie.max.z-ie.min.z:1,st=ie.min.x,rt=ie.min.y,$e=ie.isBox3?ie.min.z:0;else{const en=Math.pow(2,-Y);Oe=Math.floor(Ot.width*en),ze=Math.floor(Ot.height*en),A.isDataArrayTexture?We=Ot.depth:A.isData3DTexture?We=Math.floor(Ot.depth*en):We=1,st=0,rt=0,$e=0}Z!==null?(xt=Z.x,ft=Z.y,Vt=Z.z):(xt=0,ft=0,Vt=0);const yt=Ue.convert(j.format),et=Ue.convert(j.type);let Gt;j.isData3DTexture?(P.setTexture3D(j,0),Gt=F.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(P.setTexture2DArray(j,0),Gt=F.TEXTURE_2D_ARRAY):(P.setTexture2D(j,0),Gt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const _t=F.getParameter(F.UNPACK_ROW_LENGTH),hn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Xi=F.getParameter(F.UNPACK_SKIP_PIXELS),Mn=F.getParameter(F.UNPACK_SKIP_ROWS),Ei=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ot.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ot.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,st),F.pixelStorei(F.UNPACK_SKIP_ROWS,rt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$e);const Dt=A.isDataArrayTexture||A.isData3DTexture,pn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const en=Ye.get(A),un=Ye.get(j),tn=Ye.get(en.__renderTarget),St=Ye.get(un.__renderTarget);Je.bindFramebuffer(F.READ_FRAMEBUFFER,tn.__webglFramebuffer),Je.bindFramebuffer(F.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let pi=0;pi<We;pi++)Dt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ye.get(A).__webglTexture,Y,$e+pi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ye.get(j).__webglTexture,Ae,Vt+pi)),F.blitFramebuffer(st,rt,Oe,ze,xt,ft,Oe,ze,F.DEPTH_BUFFER_BIT,F.NEAREST);Je.bindFramebuffer(F.READ_FRAMEBUFFER,null),Je.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||Ye.has(A)){const en=Ye.get(A),un=Ye.get(j);Je.bindFramebuffer(F.READ_FRAMEBUFFER,ea),Je.bindFramebuffer(F.DRAW_FRAMEBUFFER,ta);for(let tn=0;tn<We;tn++)Dt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,en.__webglTexture,Y,$e+tn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,en.__webglTexture,Y),pn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,un.__webglTexture,Ae,Vt+tn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,un.__webglTexture,Ae),Y!==0?F.blitFramebuffer(st,rt,Oe,ze,xt,ft,Oe,ze,F.COLOR_BUFFER_BIT,F.NEAREST):pn?F.copyTexSubImage3D(Gt,Ae,xt,ft,Vt+tn,st,rt,Oe,ze):F.copyTexSubImage2D(Gt,Ae,xt,ft,st,rt,Oe,ze);Je.bindFramebuffer(F.READ_FRAMEBUFFER,null),Je.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else pn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Gt,Ae,xt,ft,Vt,Oe,ze,We,yt,et,Ot.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D(Gt,Ae,xt,ft,Vt,Oe,ze,We,yt,Ot.data):F.texSubImage3D(Gt,Ae,xt,ft,Vt,Oe,ze,We,yt,et,Ot):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ae,xt,ft,Oe,ze,yt,et,Ot.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ae,xt,ft,Ot.width,Ot.height,yt,Ot.data):F.texSubImage2D(F.TEXTURE_2D,Ae,xt,ft,Oe,ze,yt,et,Ot);F.pixelStorei(F.UNPACK_ROW_LENGTH,_t),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,hn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Xi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Mn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ei),Ae===0&&j.generateMipmaps&&F.generateMipmap(Gt),Je.unbindTexture()},this.copyTextureToTexture3D=function(A,j,ie=null,Z=null,Y=0){return A.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,Z=arguments[1]||null,A=arguments[2],j=arguments[3],Y=arguments[4]||0),Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,ie,Z,Y)},this.initRenderTarget=function(A){Ye.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Je.unbindTexture()},this.resetState=function(){O=0,N=0,X=null,Je.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}}function x1({phase:s,speed:e,showForces:n,isPlaying:r,onPhaseComplete:a}){const u=Ut.useRef(null),f=Ut.useRef(null),d=Ut.useRef(null),[h,m]=Ut.useState([]),v=Ut.useRef({time:0,nucleons:[],incidentNeutron:null,promptNeutrons:[],radiationWaves:[],gluonField:null,forceGroup:null});return Ut.useEffect(()=>{const g=u.current;if(!g)return;const x=g.clientWidth,S=g.clientHeight,E=new yg;E.fog=new Gl(461075,.015),f.current=E;const T=new Un(50,x/S,.1,1e3);T.position.set(0,5,25),T.lookAt(0,0,0);const y=new Lg({antialias:!0,alpha:!0});y.setSize(x,S),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.shadowMap.enabled=!0,y.shadowMap.type=Zm,g.appendChild(y.domElement);const _=new wg(16777215,.8);E.add(_);const I=new Ux(16777215,1.5);I.position.set(10,20,15),I.castShadow=!0,E.add(I);const L=new Dl(54015,2,50);L.position.set(0,0,0),E.add(L);const C=new Dl(16726876,2,50);C.position.set(0,0,0),E.add(C);const W=new xr(.35,16,16),O=new zs({color:16726876,roughness:.2,metalness:.5,emissive:8912923,emissiveIntensity:.5}),N=new zs({color:54015,roughness:.2,metalness:.4,emissive:24435,emissiveIntensity:.5}),X=235,b=92,R=new vr;E.add(R);const k=[],ne=2.8;for(let Ee=0;Ee<X;Ee++){const Ve=Ee<b,he=new dn(W,Ve?O:N),Pe=Math.acos(1-2*(Ee+.5)/X),Ie=Math.PI*(1+Math.sqrt(5))*(Ee+.5),Fe=ne*Math.pow(Math.random(),.3),Re=Fe*Math.sin(Pe)*Math.cos(Ie),Ze=Fe*Math.sin(Pe)*Math.sin(Ie),Ue=Fe*Math.cos(Pe);he.position.set(Re,Ze,Ue),he.castShadow=!0,he.receiveShadow=!0,k.push({mesh:he,basePos:new H(Re,Ze,Ue),isProton:Ve,cluster:Ee%2===0?"left":"right",offsetSpeed:Math.random()*2+1,seed:Math.random()*100}),R.add(he)}v.current.nucleons=k;const Q=new xr(ne*1.25,32,32),ue=new bx({color:3718648,transparent:!0,opacity:.18,wireframe:!0,blending:lf}),le=new dn(Q,ue);E.add(le),v.current.gluonField=le;const se=new xr(.4,16,16),de=new zs({color:16777215,emissive:54015,emissiveIntensity:1.2}),z=new dn(se,de);z.position.set(-25,0,0),E.add(z),v.current.incidentNeutron=z;const ce=new vr;E.add(ce);const oe=new xr(.5,20,20),U=new zs({color:16760331,emissive:16755200,emissiveIntensity:2.5,roughness:.1,metalness:.3}),we=[new H(.4,1.2,.5).normalize(),new H(-.5,-1,.6).normalize(),new H(.1,.4,-1.3).normalize()].map((Ee,Ve)=>{const he=new dn(oe,U),Pe=new Dl(16760331,2,8);he.add(Pe);const Ie=new On().setFromPoints([new H(0,0,0),Ee.clone().multiplyScalar(-3.5)]),Fe=new Wo({color:16760331,transparent:!0,opacity:.85}),Re=new zl(Ie,Fe);return he.add(Re),ce.add(he),{mesh:he,dir:Ee,id:Ve}});v.current.promptNeutrons=we;const q=new vr;E.add(q);const fe=[new H(1,.5,.3).normalize(),new H(-1,.6,-.4).normalize(),new H(.2,1,.6).normalize(),new H(-.3,-1,-.5).normalize(),new H(.7,-.5,1).normalize(),new H(-.6,.4,-1).normalize(),new H(.8,-.8,-.3).normalize(),new H(-.7,.7,.8).normalize()],ge=45,_e=fe.map(Ee=>{const Ve=new Float32Array(ge*3),he=new On;he.setAttribute("position",new fi(Ve,3));const Pe=new Wo({color:12616956,transparent:!0,opacity:.9,linewidth:2}),Ie=new zl(he,Pe);q.add(Ie);const Fe=new H(0,1,0),Re=new H().crossVectors(Ee,Fe).normalize();Re.lengthSq()<.001&&Re.set(1,0,0);const Ze=new H().crossVectors(Ee,Re).normalize();return{line:Ie,dir:Ee,perp1:Re,perp2:Ze,geo:he,positions:Ve}});v.current.radiationWaves=_e;const be=new vr;E.add(be),v.current.forceGroup=be;const He=new H(0,1,0),Xe=new H(0,-1,0),Ct=new Sm(Xe,new H(0,4,0),2.5,65416,.6,.4),Rt=new Sm(He,new H(0,1.5,0),3,16726876,.6,.4);be.add(Ct),be.add(Rt);let lt=!1,F={x:0,y:0},Xt=0,ct=.2,ut=25;const Je=()=>{T.position.x=ut*Math.sin(Xt)*Math.cos(ct),T.position.y=ut*Math.sin(ct),T.position.z=ut*Math.cos(Xt)*Math.cos(ct),T.lookAt(0,0,0)},wt=Ee=>{lt=!0,F={x:Ee.clientX,y:Ee.clientY}},Ye=Ee=>{if(!lt)return;const Ve=Ee.clientX-F.x,he=Ee.clientY-F.y;Xt-=Ve*.008,ct=Math.max(-Math.PI/3,Math.min(Math.PI/3,ct+he*.008)),Je(),F={x:Ee.clientX,y:Ee.clientY}},P=()=>{lt=!1},w=Ee=>{ut=Math.max(10,Math.min(60,ut+Ee.deltaY*.03)),Je()},J=y.domElement;J.addEventListener("mousedown",wt),window.addEventListener("mousemove",Ye),window.addEventListener("mouseup",P),J.addEventListener("wheel",w);const xe=()=>{const Ee=g.clientWidth,Ve=g.clientHeight;T.aspect=Ee/Ve,T.updateProjectionMatrix(),y.setSize(Ee,Ve)};window.addEventListener("resize",xe);const ve=Ee=>{const Ve=Ee.clone().project(T),he=g.clientWidth,Pe=g.clientHeight;return{x:(Ve.x*.5+.5)*he,y:(-(Ve.y*.5)+.5)*Pe,visible:Ve.z<1}};let me=new Tg,qe=0;const Ne=()=>{d.current=requestAnimationFrame(Ne);const Ee=me.getDelta(),Ve=v.current;r&&(Ve.time+=Ee*e);const he=Ve.time;be.visible=n&&(s===1||s===3),ce.visible=!1,q.visible=!1;let Pe=[];if(s===1){z.position.set(-25,0,0),Ve.nucleons.forEach(Fe=>{const Re=Math.sin(he*4+Fe.seed)*.12,Ze=Math.cos(he*3+Fe.seed)*.12,Ue=Math.sin(he*5+Fe.seed)*.12;Fe.mesh.position.set(Fe.basePos.x+Re,Fe.basePos.y+Ze,Fe.basePos.z+Ue)}),R.position.set(0,0,0),le.position.set(0,0,0),le.scale.set(1,1,1),le.visible=!0;const Ie=ve(new H(0,4.2,0));Ie.visible&&Pe.push({id:"u235",title:"Атом Урану-235 (²³⁵U)",details:"92 протони (p⁺) | 143 нейтрони (n⁰)",badge:"92p⁺ + 143n⁰",color:"#00d2ff",x:Ie.x,y:Ie.y})}else if(s===2){const Ie=Math.min(1,he%4/4),Fe=qf.lerp(-25,-2.5,Ie);z.position.set(Fe,0,0),Ve.nucleons.forEach(Ue=>{const ot=Math.sin(he*8+Ue.seed)*.15,V=Math.cos(he*7+Ue.seed)*.15;Ue.mesh.position.set(Ue.basePos.x+ot,Ue.basePos.y+V,Ue.basePos.z)});const Re=ve(new H(Fe,1.2,0));Re.visible&&Pe.push({id:"n_inc",title:"Тепловий Нейтрон (n⁰)",details:"Енергія E ≈ 0.025 еВ",badge:"1n⁰ (влучання)",color:"#5ce1e6",x:Re.x,y:Re.y});const Ze=ve(new H(0,4.2,0));Ze.visible&&Pe.push({id:"u236",title:"Збуджене ядро Урану-236 (*)",details:"92 протони | 144 нейтрони (E_ex ≈ 6.5 МеВ)",badge:"92p⁺ + 144n⁰",color:"#ff3b5c",x:Ze.x,y:Ze.y})}else if(s===3){z.position.set(-25,0,0);const Ie=1+Math.sin(he*3)*.75+.5,Fe=1/Math.sqrt(Math.max(.2,Ie));Ve.nucleons.forEach(Ue=>{const ot=Ue.cluster==="left"?-1:1,V=Ue.basePos.x*Ie+ot*(Ie-1)*1.8,ye=Ue.basePos.y*Fe,te=Ue.basePos.z*Fe;Ue.mesh.position.set(V,ye,te)}),le.scale.set(Ie*1.2,Fe*.9,Fe*.9);const Re=ve(new H(-Ie*2.5,3.8,0));Re.visible&&Pe.push({id:"ba_lobe",title:"Майбутній осколок Барію",details:"56 протонів | 86 нейтронів",badge:"Ba lobe (56p)",color:"#a855f7",x:Re.x,y:Re.y});const Ze=ve(new H(Ie*2.5,3.8,0));Ze.visible&&Pe.push({id:"kr_lobe",title:"Майбутній осколок Криптону",details:"36 протонів | 55 нейтронів",badge:"Kr lobe (36p)",color:"#38bdf8",x:Ze.x,y:Ze.y})}else if(s===4){z.position.set(-25,0,0),le.visible=!1;const Ie=he%5,Fe=Math.min(15,Ie*3.5);Ve.nucleons.forEach(ye=>{const te=ye.cluster==="left"?-1:1,pe=ye.basePos.x+te*(Fe+1.5);ye.mesh.position.set(pe,ye.basePos.y,ye.basePos.z)}),ce.visible=!0,Ve.promptNeutrons.forEach((ye,te)=>{const pe=Ie*7.5,Le=ye.dir.clone().multiplyScalar(pe);if(ye.mesh.position.copy(Le),te===0){const De=ve(Le.clone().add(new H(0,.8,0)));De.visible&&Pe.push({id:`free_n_${te}`,title:"3 Вільні Нейтрони (n⁰)",details:"Жовті кульки після розпаду",badge:"3 × 1n⁰ (E = 2 МеВ)",color:"#ffbe0b",x:De.x,y:De.y})}}),q.visible=!0;const Re=16,Ze=2.5,Ue=Math.min(30,Ie*Re);Ve.radiationWaves.forEach(ye=>{const te=ye.positions,pe=ge;for(let Le=0;Le<pe;Le++){const De=Le/(pe-1),tt=De*Ue,bt=Math.sin(De*Math.PI)*.7,jt=Math.sin(tt*Ze-he*18),gt=ye.dir.clone().multiplyScalar(tt).add(ye.perp1.clone().multiplyScalar(jt*bt)).add(ye.perp2.clone().multiplyScalar(Math.cos(tt*Ze-he*18)*bt*.5));te[Le*3]=gt.x,te[Le*3+1]=gt.y,te[Le*3+2]=gt.z}ye.geo.attributes.position.needsUpdate=!0,ye.line.material.opacity=Math.max(0,1-Ie/5)});const ot=ve(new H(-(Fe+3),3.5,0));ot.visible&&Pe.push({id:"ba142",title:"Атом Барію-142 (¹⁴²Ba)",details:"56 протонів | 86 нейтронів",badge:"56p⁺ + 86n⁰",color:"#a855f7",x:ot.x,y:ot.y});const V=ve(new H(Fe+3,3.5,0));V.visible&&Pe.push({id:"kr91",title:"Атом Криптону-91 (⁹¹Kr)",details:"36 протонів | 55 нейтронів",badge:"36p⁺ + 55n⁰",color:"#38bdf8",x:V.x,y:V.y}),L.intensity=Math.max(0,5-Ie),C.intensity=Math.max(0,5-Ie)}else if(s===5){z.position.set(-25,0,0),le.visible=!1;const Ie=16;Ve.nucleons.forEach(Ue=>{const ot=Ue.cluster==="left"?-1:1,V=Ue.basePos.x+ot*Ie;Ue.mesh.position.set(V,Ue.basePos.y,Ue.basePos.z)}),ce.visible=!0,Ve.promptNeutrons.forEach((Ue,ot)=>{const V=22+Math.sin(he*2+Ue.id)*3,ye=Ue.dir.clone().multiplyScalar(V);if(Ue.mesh.position.copy(ye),ot===0){const te=ve(ye.clone().add(new H(0,.8,0)));te.visible&&Pe.push({id:`free_n_${ot}`,title:"3 Вільні Нейтрони (n⁰)",details:"Жовті кульки (розлітаються у просторі)",badge:"3 × 1n⁰",color:"#ffbe0b",x:te.x,y:te.y})}}),q.visible=!0;const Fe=32;Ve.radiationWaves.forEach(Ue=>{const ot=Ue.positions,V=ge;for(let ye=0;ye<V;ye++){const te=ye/(V-1),pe=te*Fe,Le=Math.sin(te*Math.PI)*.6,De=Math.sin(pe*2.2-he*16),tt=Ue.dir.clone().multiplyScalar(pe).add(Ue.perp1.clone().multiplyScalar(De*Le));ot[ye*3]=tt.x,ot[ye*3+1]=tt.y,ot[ye*3+2]=tt.z}Ue.geo.attributes.position.needsUpdate=!0,Ue.line.material.opacity=.8});const Re=ve(new H(-18,3.8,0));Re.visible&&Pe.push({id:"ba142_final",title:"Ядро Барію-142 (¹⁴²Ba)",details:"56 протонів | 86 нейтронів",badge:"56p⁺ + 86n⁰",color:"#a855f7",x:Re.x,y:Re.y});const Ze=ve(new H(18,3.8,0));Ze.visible&&Pe.push({id:"kr91_final",title:"Ядро Криптону-91 (⁹¹Kr)",details:"36 протонів | 55 нейтронів",badge:"36p⁺ + 55n⁰",color:"#38bdf8",x:Ze.x,y:Ze.y})}R.rotation.y+=.003,qe++,qe%2===0&&m(Pe),y.render(E,T)};return Ne(),()=>{cancelAnimationFrame(d.current),J.removeEventListener("mousedown",wt),window.removeEventListener("mousemove",Ye),window.removeEventListener("mouseup",P),J.removeEventListener("wheel",w),window.removeEventListener("resize",xe),y.domElement&&g.contains(y.domElement)&&g.removeChild(y.domElement),y.dispose()}},[s,e,n,r]),ae.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[ae.jsx("div",{ref:u,style:{width:"100%",height:"100%",position:"relative",cursor:"grab"}}),h.map(g=>ae.jsxs("div",{className:"glass-panel",style:{position:"absolute",left:`${g.x}px`,top:`${g.y}px`,transform:"translate(-50%, -100%)",pointerEvents:"none",zIndex:25,padding:"0.4rem 0.75rem",border:`1px solid ${g.color}`,borderRadius:"8px",boxShadow:`0 0 15px ${g.color}40`,backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",whiteSpace:"nowrap"},children:[ae.jsx("div",{style:{fontSize:"0.82rem",fontWeight:700,color:"#ffffff",fontFamily:"var(--font-heading)"},children:g.title}),ae.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",fontFamily:"var(--font-body)",margin:"2px 0"},children:g.details}),ae.jsx("span",{className:"badge",style:{background:`${g.color}25`,color:g.color,border:`1px solid ${g.color}50`,padding:"1px 6px",fontSize:"0.7rem"},children:g.badge})]},g.id))]})}function y1({controlRodLevel:s,isRunning:e,onStatsUpdate:n}){const r=Ut.useRef(null),a=Ut.useRef(null),u=Ut.useRef({fuelGrid:[],controlRods:[],freeNeutrons:[],reactionCount:0,temperature:300,kFactor:1});return Ut.useEffect(()=>{const f=r.current;if(!f)return;const d=f.clientWidth,h=f.clientHeight,m=new yg;m.fog=new Gl(461075,.02);const v=new Un(50,d/h,.1,1e3);v.position.set(0,18,22),v.lookAt(0,0,0);const g=new Lg({antialias:!0,alpha:!0});g.setSize(d,h),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.appendChild(g.domElement);const x=new wg(16777215,.9);m.add(x);const S=new Dl(54015,3,40);S.position.set(0,10,0),m.add(S);const E=new Fx(30,15,54015,1976635);E.position.y=-2,m.add(E);const T=new xr(.8,20,20),y=new zs({color:16726876,metalness:.6,roughness:.2,emissive:5570577,emissiveIntensity:.4}),_=[],I=5,L=4,C=(I-1)*L/2;for(let $=0;$<I;$++)for(let we=0;we<I;we++){const q=new dn(T,y),fe=$*L-C,ge=we*L-C;q.position.set(fe,0,ge),m.add(q),_.push({mesh:q,pos:new H(fe,0,ge),cooldown:0})}u.current.fuelGrid=_;const W=new Wl(.35,.35,12,16),O=new zs({color:4674921,metalness:.9,roughness:.1,emissive:988970}),N=[];for(let $=0;$<I-1;$++)for(let we=0;we<I-1;we++){const q=new dn(W,O),fe=$*L-C+L/2,ge=we*L-C+L/2;q.position.set(fe,5,ge),m.add(q),N.push({mesh:q,basePos:new H(fe,0,ge)})}u.current.controlRods=N;const X=new xr(.2,12,12),b=new Vl({color:65535}),R=[],k=($,we)=>{const q=new dn(X,b);q.position.copy($),m.add(q),R.push({mesh:q,velocity:we,life:0})};for(let $=0;$<4;$++){const we=new H((Math.random()-.5)*20,0,(Math.random()-.5)*20),q=new H((Math.random()-.5)*.4,0,(Math.random()-.5)*.4);k(we,q)}u.current.freeNeutrons=R;let ne=!1,Q={x:0,y:0},ue=0,le=.5;const se=$=>{ne=!0,Q={x:$.clientX,y:$.clientY}},de=$=>{if(!ne)return;const we=$.clientX-Q.x,q=$.clientY-Q.y;ue+=we*.006,le=Math.max(.1,Math.min(1.2,le+q*.006)),Q={x:$.clientX,y:$.clientY};const fe=30;v.position.x=fe*Math.sin(ue)*Math.cos(le),v.position.y=fe*Math.sin(le),v.position.z=fe*Math.cos(ue)*Math.cos(le),v.lookAt(0,0,0)},z=()=>{ne=!1},ce=g.domElement;ce.addEventListener("mousedown",se),window.addEventListener("mousemove",de),window.addEventListener("mouseup",z);let oe=new Tg;const U=()=>{a.current=requestAnimationFrame(U);const $=oe.getDelta(),we=u.current,q=6-s/100*6;if(N.forEach(fe=>{fe.mesh.position.y=qf.lerp(fe.mesh.position.y,q,.1)}),e){for(let ge=we.freeNeutrons.length-1;ge>=0;ge--){const _e=we.freeNeutrons[ge];if(_e.mesh.position.add(_e.velocity),_e.life+=$,_e.mesh.position.length()>22||_e.life>6){m.remove(_e.mesh),_e.mesh.geometry.dispose(),we.freeNeutrons.splice(ge,1);continue}let be=!1;if(N.forEach(He=>{if(be)return;_e.mesh.position.distanceTo(He.mesh.position)<1.2&&He.mesh.position.y<=4&&(be=!0)}),be){m.remove(_e.mesh),_e.mesh.geometry.dispose(),we.freeNeutrons.splice(ge,1);continue}_.forEach(He=>{if(_e.mesh.position.distanceTo(He.pos)<1.2&&He.cooldown<=0){He.cooldown=1,we.reactionCount++,we.temperature+=2.5,He.mesh.material.emissive.setHex(16760331),He.mesh.material.emissiveIntensity=2;const Ct=Math.floor(Math.random()*2)+2;for(let Rt=0;Rt<Ct;Rt++){const lt=Math.random()*Math.PI*2,F=.3+Math.random()*.2,Xt=new H(Math.cos(lt)*F,0,Math.sin(lt)*F);k(He.pos.clone(),Xt)}}})}if(_.forEach(ge=>{ge.cooldown>0&&(ge.cooldown-=$,ge.mesh.material.emissive.lerp(new pt(5570577),.05),ge.mesh.material.emissiveIntensity=qf.lerp(ge.mesh.material.emissiveIntensity,.4,.05))}),we.temperature=Math.max(300,we.temperature-$*1.2),we.freeNeutrons.length<2&&Math.random()<.05){const ge=new H((Math.random()-.5)*15,0,(Math.random()-.5)*15),_e=new H((Math.random()-.5)*.3,0,(Math.random()-.5)*.3);k(ge,_e)}const fe=Number((1.65-s/100*1.1).toFixed(2));we.kFactor=fe,n&&n({neutronCount:we.freeNeutrons.length,reactionTotal:we.reactionCount,temperature:Math.round(we.temperature),keff:fe})}g.render(m,v)};return U(),()=>{cancelAnimationFrame(a.current),ce.removeEventListener("mousedown",se),window.removeEventListener("mousemove",de),window.removeEventListener("mouseup",z),g.domElement&&f.contains(g.domElement)&&f.removeChild(g.domElement),g.dispose()}},[s,e]),ae.jsx("div",{ref:r,style:{width:"100%",height:"100%",position:"relative",cursor:"grab"}})}function S1({phase:s,onOpenGallery:e}){const n={1:{title:"Етап 1: Рівновага Ядра U-235",subtitle:"Баланс ядерних та електростатичних сил",desc:"Всередині стабільного ядра Урану-235 (92 протони, 143 нейтрони) діють дві протилежні сили: Сильна ядерна взаємодія утримує нуклони разом, а Електростатична сила розпихає позитивно заряджені протони.",diagramImg:"/screenshots/strong-force.webp",strongVal:95,coulombVal:85},2:{title:"Етап 2: Захоплення Теплового Нейтрона",subtitle:"Формування збудженого ядра U-236",desc:"Повільний (тепловий) нейтрон наближається та поглинається ядром Урану-235. Ядро отримує енергію зв’язку ~6.5 МеВ і переходить у збуджений стан.",diagramImg:"/screenshots/nutron-comming.webp",strongVal:90,coulombVal:88},3:{title:"Етап 3: Деформація та Коливання",subtitle:"Капельна модель ядра (Liquid Drop Model)",desc:"Енергія збудження спричиняє поверхневі коливання. Ядро розтягується в еліпсоїд, а потім у форму гантелі з вузьким перешийком. Протони на протилежних кінцях віддаляються.",diagramImg:"/screenshots/Uranium destruction.webp",strongVal:60,coulombVal:92},4:{title:"Етап 4: Розщеплення & E=mc²",subtitle:"Кулонівський вибух та дефект маси",desc:"Коли відстань між згустками перевищує радіус дії ядерних сил, Кулонівське відштовхування розриває ядро! Сумарна маса осколків менша за вихідну на delta_m = 0.2154 а.о.м. Цей дефект маси вивільняє E = mc² = 200 МеВ.",diagramImg:"/screenshots/mass is converted into energy.webp",strongVal:10,coulombVal:100},5:{title:"Етап 5: Продукти Розпаду та Нейтрони",subtitle:"Формування Ba-142, Kr-91 та 3n",desc:"Утворюються два осколки розпаду (Ba-142 + Kr-91) з великою кінетичною енергією, а також випромінюється 2-3 швидких нейтрони та гамма-кванти.",diagramImg:"/screenshots/the result of the decay of uranium atoms.webp",strongVal:0,coulombVal:0}},r=n[s]||n[1];return ae.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem",display:"flex",flexDirection:"column",gap:"1rem",maxHeight:"calc(100vh - 120px)",overflowY:"auto"},children:[ae.jsxs("div",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.1)",paddingBottom:"0.75rem"},children:[ae.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"#00d2ff",fontSize:"0.85rem",fontFamily:"var(--font-mono)"},children:[ae.jsx($m,{size:16})," ФІЗИЧНИЙ МЕХАНІЗМ"]}),ae.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.1rem",color:"#fff",marginTop:"0.25rem"},children:r.title}),ae.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem"},children:r.subtitle})]}),ae.jsxs("div",{onClick:e,style:{position:"relative",borderRadius:"10px",overflow:"hidden",border:"1px solid rgba(56, 189, 248, 0.3)",cursor:"pointer",boxShadow:"0 4px 15px rgba(0,0,0,0.4)"},children:[ae.jsx("img",{src:r.diagramImg,alt:r.title,style:{width:"100%",height:"140px",objectFit:"cover",display:"block"}}),ae.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"0.4rem 0.6rem",background:"rgba(7, 9, 19, 0.85)",WebkitBackdropFilter:"blur(4px)",backdropFilter:"blur(4px)",fontSize:"0.75rem",color:"#00d2ff",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[ae.jsx("span",{children:"Схема з /screenshots"}),ae.jsx("span",{style:{textDecoration:"underline"},children:"Відкрити галактику схем"})]})]}),ae.jsx("p",{style:{color:"#cbd5e1",fontSize:"0.9rem",lineHeight:1.55},children:r.desc}),ae.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.6)",padding:"0.85rem",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.05)"},children:[ae.jsxs("div",{style:{fontSize:"0.8rem",fontWeight:600,color:"var(--text-muted)",marginBottom:"0.6rem",display:"flex",justifyContent:"space-between"},children:[ae.jsx("span",{children:"Баланс Ядерних Сил"}),ae.jsx("span",{children:"F_net = F_coulomb - F_strong"})]}),ae.jsxs("div",{style:{marginBottom:"0.5rem"},children:[ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.75rem",color:"#5ce1e6",marginBottom:"0.2rem"},children:[ae.jsx("span",{children:"Сильна Ядерна Взаємодія (Притягання)"}),ae.jsxs("span",{children:[r.strongVal,"%"]})]}),ae.jsx("div",{style:{height:"6px",background:"rgba(255,255,255,0.1)",borderRadius:"3px",overflow:"hidden"},children:ae.jsx("div",{style:{width:`${r.strongVal}%`,height:"100%",background:"linear-gradient(90deg, #00d2ff, #0077b6)",transition:"width 0.4s ease"}})})]}),ae.jsxs("div",{children:[ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.75rem",color:"#ff6b84",marginBottom:"0.2rem"},children:[ae.jsx("span",{children:"Кулонівське Відштовхування (Протони)"}),ae.jsxs("span",{children:[r.coulombVal,"%"]})]}),ae.jsx("div",{style:{height:"6px",background:"rgba(255,255,255,0.1)",borderRadius:"3px",overflow:"hidden"},children:ae.jsx("div",{style:{width:`${r.coulombVal}%`,height:"100%",background:"linear-gradient(90deg, #ff3b5c, #ffbe0b)",transition:"width 0.4s ease"}})})]})]}),ae.jsxs("div",{style:{background:"rgba(10, 15, 29, 0.9)",padding:"0.85rem",borderRadius:"10px",border:"1px solid rgba(255, 190, 11, 0.3)"},children:[ae.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",color:"#ffbe0b",fontSize:"0.8rem",fontWeight:700,fontFamily:"var(--font-mono)",marginBottom:"0.4rem"},children:[ae.jsx($_,{size:14})," ФОРМУЛА ЕНЕРГІЇ ЕЙНШТЕЙНА"]}),ae.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"1rem",color:"#fff",textAlign:"center",margin:"0.3rem 0",letterSpacing:"1px"},children:"E = Δm · c²"}),ae.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",lineHeight:1.4},children:["Дефект маси: ",ae.jsx("span",{style:{color:"#00d2ff"},children:"Δm = 0.2154 а.о.м."}),ae.jsx("br",{}),"Енергія на 1 розпад: ",ae.jsx("span",{style:{color:"#ffbe0b"},children:"E ≈ 200 МеВ = 3.2 × 10⁻¹¹ Дж"})]})]})]})}function M1({mode:s,phase:e,setPhase:n,isPlaying:r,setIsPlaying:a,speed:u,setSpeed:f,showForces:d,setShowForces:h,controlRodLevel:m,setControlRodLevel:v,reactorStats:g,onResetReactor:x}){return s==="single"?ae.jsxs("div",{className:"glass-panel",style:{position:"absolute",bottom:"1.5rem",left:"50%",transform:"translateX(-50%)",zIndex:40,padding:"0.85rem 1.5rem",display:"flex",alignItems:"center",gap:"1.5rem",maxWidth:"90vw",flexWrap:"wrap",justifyContent:"center"},children:[ae.jsx("button",{className:"btn-action primary",onClick:()=>a(!r),style:{width:"42px",height:"42px",padding:0,borderRadius:"50%"},children:r?ae.jsx(B_,{size:20}):ae.jsx(V_,{size:20,style:{marginLeft:"2px"}})}),ae.jsx("div",{style:{display:"flex",gap:"0.4rem",background:"rgba(10, 15, 29, 0.8)",padding:"4px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.08)"},children:[{id:1,label:"1. Рівновага"},{id:2,label:"2. Влучання n"},{id:3,label:"3. Деформація"},{id:4,label:"4. Розщеплення"},{id:5,label:"5. Продукти"}].map(S=>ae.jsx("button",{onClick:()=>n(S.id),style:{background:e===S.id?"linear-gradient(135deg, #00d2ff, #0077b6)":"transparent",color:e===S.id?"#ffffff":"var(--text-muted)",border:"none",padding:"0.45rem 0.85rem",borderRadius:"6px",fontFamily:"var(--font-body)",fontSize:"0.82rem",fontWeight:600,cursor:"pointer",transition:"all 0.2s ease"},children:S.label},S.id))}),ae.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontSize:"0.8rem",color:"var(--text-muted)"},children:[ae.jsx("span",{children:"Швидкість:"}),[.25,.5,1,2].map(S=>ae.jsxs("button",{onClick:()=>f(S),style:{background:u===S?"rgba(56, 189, 248, 0.25)":"transparent",color:u===S?"#00d2ff":"var(--text-muted)",border:u===S?"1px solid #00d2ff":"1px solid transparent",borderRadius:"4px",padding:"2px 6px",fontSize:"0.75rem",fontFamily:"var(--font-mono)",cursor:"pointer"},children:[S,"x"]},S))]}),ae.jsxs("button",{onClick:()=>h(!d),className:"btn-action",style:{background:d?"rgba(0, 210, 255, 0.2)":"rgba(20, 28, 48, 0.8)",borderColor:d?"#00d2ff":"var(--border-color)",color:d?"#00d2ff":"var(--text-muted)"},children:[ae.jsx(D_,{size:16})," Сили ",d?"ON":"OFF"]})]}):ae.jsxs("div",{className:"glass-panel",style:{position:"absolute",bottom:"1.5rem",left:"50%",transform:"translateX(-50%)",zIndex:40,padding:"1rem 1.5rem",display:"flex",flexDirection:"column",gap:"0.85rem",width:"900px",maxWidth:"90vw"},children:[ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[ae.jsxs("div",{style:{flex:1,minWidth:"260px"},children:[ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.85rem",fontWeight:600,color:"#fff",marginBottom:"0.4rem"},children:[ae.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[ae.jsx(P_,{size:16,color:"#00d2ff"})," Понурення Керуючих Стержнів (Кадмій/Бор):"]}),ae.jsxs("span",{style:{color:"#00d2ff",fontFamily:"var(--font-mono)"},children:[m,"%"]})]}),ae.jsx("input",{type:"range",min:"0",max:"100",value:m,onChange:S=>v(Number(S.target.value)),className:"custom-slider"}),ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"0.25rem"},children:[ae.jsx("span",{children:"0% (Розгін k > 1)"}),ae.jsx("span",{children:"50% (Критичний k = 1.0)"}),ae.jsx("span",{children:"100% (Поглинання k < 1)"})]})]}),ae.jsxs("button",{className:"btn-action",onClick:x,children:[ae.jsx(W_,{size:16})," Скинути Реактор"]})]}),ae.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"0.75rem",borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:"0.75rem"},children:[ae.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.7)",padding:"0.5rem 0.8rem",borderRadius:"8px",border:"1px solid rgba(0, 210, 255, 0.2)"},children:[ae.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Коефіцієнт k_eff"}),ae.jsxs("div",{style:{fontSize:"1.2rem",fontFamily:"var(--font-mono)",fontWeight:700,color:g.keff>1.1?"#ff3b5c":g.keff>=.95?"#00d2ff":"#ffbe0b"},children:[g.keff,ae.jsx("span",{style:{fontSize:"0.75rem",marginLeft:"0.4rem",fontWeight:400},children:g.keff>1.1?"(Надкритичний)":g.keff>=.95?"(Критичний)":"(Підкритичний)"})]})]}),ae.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.7)",padding:"0.5rem 0.8rem",borderRadius:"8px",border:"1px solid rgba(0, 210, 255, 0.2)"},children:[ae.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Вільні Нейтрони в Ядрі"}),ae.jsx("div",{style:{fontSize:"1.2rem",fontFamily:"var(--font-mono)",fontWeight:700,color:"#5ce1e6"},children:g.neutronCount})]}),ae.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.7)",padding:"0.5rem 0.8rem",borderRadius:"8px",border:"1px solid rgba(0, 210, 255, 0.2)"},children:[ae.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Всього Розпадів"}),ae.jsx("div",{style:{fontSize:"1.2rem",fontFamily:"var(--font-mono)",fontWeight:700,color:"#ffbe0b"},children:g.reactionTotal})]}),ae.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.7)",padding:"0.5rem 0.8rem",borderRadius:"8px",border:"1px solid rgba(0, 210, 255, 0.2)"},children:[ae.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",display:"flex",alignItems:"center",gap:"0.2rem"},children:[ae.jsx(U_,{size:12,color:"#ff3b5c"})," Температура АЗ"]}),ae.jsxs("div",{style:{fontSize:"1.2rem",fontFamily:"var(--font-mono)",fontWeight:700,color:g.temperature>600?"#ff3b5c":"#fff"},children:[g.temperature," °C"]})]})]})]})}const E1=[{id:1,title:"1. Ядерні Сили та Стабільність (Strong Nuclear Force)",filename:"/screenshots/strong-force.webp",phaseId:1,desc:"Усередині ядра діють протилежні сили: Сильна ядерна взаємодія утримує нуклони разом, а електростатичне кулонівське відштовхування розпихає позитивні протони."},{id:2,title:"2. Поглинання Нейтрона (Neutron Capture)",filename:"/screenshots/nutron-comming.webp",phaseId:2,desc:"Високошвидкісний тепловий нейтрон влучає в ядро Урану-235, утворюючи збуджене ядро Урану-236 (*)."},{id:3,title:"3. Деформація Ядра (Liquid Drop Deformation)",filename:"/screenshots/Uranium destruction.webp",phaseId:3,desc:"Отримавши лишок енергії, ядро починає коливатися та витягуватись у форму гантелі. Відстань між протонами зростає."},{id:4,title:"4. Перетворення Маси в Енергію (E=mc²)",filename:"/screenshots/mass is converted into energy.webp",phaseId:4,desc:"Коли кулонівське відштовхування переважає ядерне притягання, перешийок розривається! Дефект маси перетворюється на колосальну кінетичну та випромінювану енергію E=mc²."},{id:5,title:"5. Продукти Розпаду (Fission Products)",filename:"/screenshots/the result of the decay of uranium atoms.webp",phaseId:5,desc:"Утворюються два осколки розпаду (наприклад, Барій-142 та Криптон-91) і вивільняється 2-3 вільні нейтрони."},{id:6,title:"Загальна Схема Ядерного Розпаду (Decay Overview)",filename:"/screenshots/The-Decay-of-Uranium.webp",phaseId:1,desc:"Огляд повного циклу розпаду атомів Урану від бомбардування нейтроном до вивільнення фрагментів та гамма-випромінювання."},{id:7,title:"Ланцюгова Ядерна Реакція (Chain Reaction)",filename:"/screenshots/Chain reaction.webp",phaseId:6,desc:"Вивільнені нейтрони влучають у сусідні ядра Урану-235, спричиняючи лавиноподібну самопідтримувану ланцюгову реакцію."}];function w1({isOpen:s,onClose:e,onSelectPhase:n}){const[r,a]=Ut.useState(null);return s?ae.jsxs("div",{style:{position:"fixed",inset:0,zIndex:100,background:"rgba(5, 8, 18, 0.85)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},children:[ae.jsxs("div",{className:"glass-panel",style:{width:"100%",maxWidth:"1000px",maxHeight:"90vh",display:"flex",flexDirection:"column",overflow:"hidden",border:"1px solid rgba(0, 210, 255, 0.4)",boxShadow:"0 0 40px rgba(0, 210, 255, 0.25)"},children:[ae.jsxs("div",{style:{padding:"1.25rem 1.5rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[ae.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[ae.jsx(A_,{color:"#00d2ff",size:24}),ae.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.2rem",color:"#fff"},children:"Галерея Фізичних Схем та Ілюстрацій"})]}),ae.jsx("button",{onClick:e,style:{background:"transparent",border:"none",color:"var(--text-muted)",cursor:"pointer",padding:"4px"},children:ae.jsx(Hp,{size:24})})]}),ae.jsxs("div",{style:{padding:"1.5rem",overflowY:"auto",flex:1},children:[ae.jsxs("p",{style:{color:"var(--text-muted)",marginBottom:"1.5rem",fontSize:"0.95rem"},children:["Натисніть на схему з папки ",ae.jsx("code",{style:{color:"#00d2ff",background:"rgba(0,210,255,0.1)",padding:"2px 6px",borderRadius:"4px"},children:"/screenshots"}),", щоб переглянути пояснення та перейти до відповідного етапу 3D-моделювання:"]}),ae.jsx("div",{className:"gallery-grid",children:E1.map(u=>ae.jsxs("div",{className:"gallery-card",onClick:()=>a(u),children:[ae.jsx("img",{src:u.filename,alt:u.title}),ae.jsx("div",{className:"gallery-card-title",children:u.title})]},u.id))})]})]}),r&&ae.jsx("div",{style:{position:"fixed",inset:0,zIndex:110,background:"rgba(0, 0, 0, 0.9)",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},children:ae.jsxs("div",{className:"glass-panel",style:{maxWidth:"850px",width:"100%",padding:"1.5rem",position:"relative"},children:[ae.jsx("button",{onClick:()=>a(null),style:{position:"absolute",top:"1rem",right:"1rem",background:"rgba(255,255,255,0.1)",border:"none",color:"#fff",borderRadius:"50%",width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:ae.jsx(Hp,{size:20})}),ae.jsx("h3",{style:{fontFamily:"var(--font-heading)",color:"#00d2ff",marginBottom:"1rem",paddingRight:"2rem"},children:r.title}),ae.jsx("img",{src:r.filename,alt:r.title,style:{width:"100%",maxHeight:"400px",objectFit:"contain",borderRadius:"8px",border:"1px solid rgba(56, 189, 248, 0.3)",marginBottom:"1rem"}}),ae.jsx("p",{style:{color:"#e2e8f0",lineHeight:1.6,marginBottom:"1.5rem",fontSize:"1rem"},children:r.desc}),ae.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"1rem"},children:ae.jsxs("button",{className:"btn-action primary",onClick:()=>{n&&n(r.phaseId),a(null),e()},children:[ae.jsx(C_,{size:18})," Перейти в 3D Симуляцію"]})})]})})]}):null}function T1(){const[s,e]=Ut.useState("single"),[n,r]=Ut.useState(1),[a,u]=Ut.useState(!0),[f,d]=Ut.useState(1),[h,m]=Ut.useState(!0),[v,g]=Ut.useState(50),[x,S]=Ut.useState(!0),[E,T]=Ut.useState({neutronCount:4,reactionTotal:0,temperature:300,keff:1}),[y,_]=Ut.useState(!1),I=C=>{C===6?e("chain"):(e("single"),r(C))},L=()=>{g(50),T({neutronCount:4,reactionTotal:0,temperature:300,keff:1})};return ae.jsxs("div",{style:{width:"100vw",height:"100vh",position:"relative",overflow:"hidden",backgroundColor:"var(--bg-dark)"},children:[ae.jsxs("header",{className:"app-header glass-panel",children:[ae.jsxs("div",{className:"brand-title",children:[ae.jsx($m,{size:28,className:"pulse-glow",color:"#00d2ff"}),ae.jsxs("div",{children:[ae.jsx("div",{children:"NUCLEAR FISSION 3D"}),ae.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",fontWeight:400},children:"Візуалізація Ядерного Розпаду на Three.js"})]})]}),ae.jsxs("div",{className:"mode-tabs",children:[ae.jsxs("button",{className:`tab-btn ${s==="single"?"active":""}`,onClick:()=>e("single"),children:[ae.jsx(j_,{size:16})," 1. Подетальний Розпад ²³⁵U"]}),ae.jsxs("button",{className:`tab-btn ${s==="chain"?"active":""}`,onClick:()=>e("chain"),children:[ae.jsx(k_,{size:16})," 2. Ланцюгова Реакція"]})]}),ae.jsxs("button",{className:"btn-action",onClick:()=>_(!0),style:{background:"linear-gradient(135deg, rgba(0,210,255,0.15), rgba(255,59,92,0.15))"},children:[ae.jsx(F_,{size:18,color:"#00d2ff"}),ae.jsx("span",{children:"Схеми з /screenshots"})]})]}),ae.jsx("main",{style:{width:"100%",height:"100%",position:"absolute",inset:0},children:s==="single"?ae.jsx(x1,{phase:n,speed:f,showForces:h,isPlaying:a}):ae.jsx(y1,{controlRodLevel:v,isRunning:x,onStatsUpdate:T})}),s==="single"&&ae.jsx("aside",{style:{position:"absolute",top:"5.5rem",left:"1.5rem",width:"360px",maxWidth:"calc(100vw - 3rem)",zIndex:30},children:ae.jsx(S1,{phase:n,onOpenGallery:()=>_(!0)})}),ae.jsx(M1,{mode:s,phase:n,setPhase:r,isPlaying:a,setIsPlaying:u,speed:f,setSpeed:d,showForces:h,setShowForces:m,controlRodLevel:v,setControlRodLevel:g,reactorStats:E,onResetReactor:L}),ae.jsx(w1,{isOpen:y,onClose:()=>_(!1),onSelectPhase:I})]})}y_.createRoot(document.getElementById("root")).render(ae.jsx(h_.StrictMode,{children:ae.jsx(T1,{})}));

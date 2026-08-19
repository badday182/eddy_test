(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Xm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Tc={exports:{}},Do={},Ac={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function c_(){if(bp)return pt;bp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(U,K,Me){this.props=U,this.context=K,this.refs=T,this.updater=Me||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,K){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,K,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function I(U,K,Me){this.props=U,this.context=K,this.refs=T,this.updater=Me||S}var L=I.prototype=new _;L.constructor=I,E(L,y.prototype),L.isPureReactComponent=!0;var C=Array.isArray,X=Object.prototype.hasOwnProperty,F={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function G(U,K,Me){var $,ce={},me=null,_e=null;if(K!=null)for($ in K.ref!==void 0&&(_e=K.ref),K.key!==void 0&&(me=""+K.key),K)X.call(K,$)&&!N.hasOwnProperty($)&&(ce[$]=K[$]);var Pe=arguments.length-2;if(Pe===1)ce.children=Me;else if(1<Pe){for(var Ge=Array(Pe),We=0;We<Pe;We++)Ge[We]=arguments[We+2];ce.children=Ge}if(U&&U.defaultProps)for($ in Pe=U.defaultProps,Pe)ce[$]===void 0&&(ce[$]=Pe[$]);return{$$typeof:s,type:U,key:me,ref:_e,props:ce,_owner:F.current}}function b(U,K){return{$$typeof:s,type:U.type,key:K,ref:U.ref,props:U.props,_owner:U._owner}}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function k(U){var K={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Me){return K[Me]})}var ie=/\/+/g;function q(U,K){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):K.toString(36)}function ue(U,K,Me,$,ce){var me=typeof U;(me==="undefined"||me==="boolean")&&(U=null);var _e=!1;if(U===null)_e=!0;else switch(me){case"string":case"number":_e=!0;break;case"object":switch(U.$$typeof){case s:case e:_e=!0}}if(_e)return _e=U,ce=ce(_e),U=$===""?"."+q(_e,0):$,C(ce)?(Me="",U!=null&&(Me=U.replace(ie,"$&/")+"/"),ue(ce,K,Me,"",function(We){return We})):ce!=null&&(R(ce)&&(ce=b(ce,Me+(!ce.key||_e&&_e.key===ce.key?"":(""+ce.key).replace(ie,"$&/")+"/")+U)),K.push(ce)),1;if(_e=0,$=$===""?".":$+":",C(U))for(var Pe=0;Pe<U.length;Pe++){me=U[Pe];var Ge=$+q(me,Pe);_e+=ue(me,K,Me,Ge,ce)}else if(Ge=x(U),typeof Ge=="function")for(U=Ge.call(U),Pe=0;!(me=U.next()).done;)me=me.value,Ge=$+q(me,Pe++),_e+=ue(me,K,Me,Ge,ce);else if(me==="object")throw K=String(U),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return _e}function he(U,K,Me){if(U==null)return U;var $=[],ce=0;return ue(U,$,"","",function(me){return K.call(Me,me,ce++)}),$}function oe(U){if(U._status===-1){var K=U._result;K=K(),K.then(function(Me){(U._status===0||U._status===-1)&&(U._status=1,U._result=Me)},function(Me){(U._status===0||U._status===-1)&&(U._status=2,U._result=Me)}),U._status===-1&&(U._status=0,U._result=K)}if(U._status===1)return U._result.default;throw U._result}var pe={current:null},V={transition:null},de={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:V,ReactCurrentOwner:F};function se(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:he,forEach:function(U,K,Me){he(U,function(){K.apply(this,arguments)},Me)},count:function(U){var K=0;return he(U,function(){K++}),K},toArray:function(U){return he(U,function(K){return K})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},pt.Component=y,pt.Fragment=n,pt.Profiler=a,pt.PureComponent=I,pt.StrictMode=r,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,pt.act=se,pt.cloneElement=function(U,K,Me){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var $=E({},U.props),ce=U.key,me=U.ref,_e=U._owner;if(K!=null){if(K.ref!==void 0&&(me=K.ref,_e=F.current),K.key!==void 0&&(ce=""+K.key),U.type&&U.type.defaultProps)var Pe=U.type.defaultProps;for(Ge in K)X.call(K,Ge)&&!N.hasOwnProperty(Ge)&&($[Ge]=K[Ge]===void 0&&Pe!==void 0?Pe[Ge]:K[Ge])}var Ge=arguments.length-2;if(Ge===1)$.children=Me;else if(1<Ge){Pe=Array(Ge);for(var We=0;We<Ge;We++)Pe[We]=arguments[We+2];$.children=Pe}return{$$typeof:s,type:U.type,key:ce,ref:me,props:$,_owner:_e}},pt.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},pt.createElement=G,pt.createFactory=function(U){var K=G.bind(null,U);return K.type=U,K},pt.createRef=function(){return{current:null}},pt.forwardRef=function(U){return{$$typeof:d,render:U}},pt.isValidElement=R,pt.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:oe}},pt.memo=function(U,K){return{$$typeof:m,type:U,compare:K===void 0?null:K}},pt.startTransition=function(U){var K=V.transition;V.transition={};try{U()}finally{V.transition=K}},pt.unstable_act=se,pt.useCallback=function(U,K){return pe.current.useCallback(U,K)},pt.useContext=function(U){return pe.current.useContext(U)},pt.useDebugValue=function(){},pt.useDeferredValue=function(U){return pe.current.useDeferredValue(U)},pt.useEffect=function(U,K){return pe.current.useEffect(U,K)},pt.useId=function(){return pe.current.useId()},pt.useImperativeHandle=function(U,K,Me){return pe.current.useImperativeHandle(U,K,Me)},pt.useInsertionEffect=function(U,K){return pe.current.useInsertionEffect(U,K)},pt.useLayoutEffect=function(U,K){return pe.current.useLayoutEffect(U,K)},pt.useMemo=function(U,K){return pe.current.useMemo(U,K)},pt.useReducer=function(U,K,Me){return pe.current.useReducer(U,K,Me)},pt.useRef=function(U){return pe.current.useRef(U)},pt.useState=function(U){return pe.current.useState(U)},pt.useSyncExternalStore=function(U,K,Me){return pe.current.useSyncExternalStore(U,K,Me)},pt.useTransition=function(){return pe.current.useTransition()},pt.version="18.3.1",pt}var Pp;function $f(){return Pp||(Pp=1,Ac.exports=c_()),Ac.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function f_(){if(Lp)return Do;Lp=1;var s=$f(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,h,m){var v,g={},x=null,S=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(v in h)r.call(h,v)&&!u.hasOwnProperty(v)&&(g[v]=h[v]);if(d&&d.defaultProps)for(v in h=d.defaultProps,h)g[v]===void 0&&(g[v]=h[v]);return{$$typeof:e,type:d,key:x,ref:S,props:g,_owner:a.current}}return Do.Fragment=n,Do.jsx=f,Do.jsxs=f,Do}var Dp;function d_(){return Dp||(Dp=1,Tc.exports=f_()),Tc.exports}var le=d_(),Ut=$f();const h_=Xm(Ut);var il={},Rc={exports:{}},In={},Cc={exports:{}},bc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function p_(){return Ip||(Ip=1,(function(s){function e(V,de){var se=V.length;V.push(de);e:for(;0<se;){var U=se-1>>>1,K=V[U];if(0<a(K,de))V[U]=de,V[se]=K,se=U;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var de=V[0],se=V.pop();if(se!==de){V[0]=se;e:for(var U=0,K=V.length,Me=K>>>1;U<Me;){var $=2*(U+1)-1,ce=V[$],me=$+1,_e=V[me];if(0>a(ce,se))me<K&&0>a(_e,ce)?(V[U]=_e,V[me]=se,U=me):(V[U]=ce,V[$]=se,U=$);else if(me<K&&0>a(_e,se))V[U]=_e,V[me]=se,U=me;else break e}}return de}function a(V,de){var se=V.sortIndex-de.sortIndex;return se!==0?se:V.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var h=[],m=[],v=1,g=null,x=3,S=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(V){for(var de=n(m);de!==null;){if(de.callback===null)r(m);else if(de.startTime<=V)r(m),de.sortIndex=de.expirationTime,e(h,de);else break;de=n(m)}}function C(V){if(T=!1,L(V),!E)if(n(h)!==null)E=!0,oe(X);else{var de=n(m);de!==null&&pe(C,de.startTime-V)}}function X(V,de){E=!1,T&&(T=!1,_(G),G=-1),S=!0;var se=x;try{for(L(de),g=n(h);g!==null&&(!(g.expirationTime>de)||V&&!k());){var U=g.callback;if(typeof U=="function"){g.callback=null,x=g.priorityLevel;var K=U(g.expirationTime<=de);de=s.unstable_now(),typeof K=="function"?g.callback=K:g===n(h)&&r(h),L(de)}else r(h);g=n(h)}if(g!==null)var Me=!0;else{var $=n(m);$!==null&&pe(C,$.startTime-de),Me=!1}return Me}finally{g=null,x=se,S=!1}}var F=!1,N=null,G=-1,b=5,R=-1;function k(){return!(s.unstable_now()-R<b)}function ie(){if(N!==null){var V=s.unstable_now();R=V;var de=!0;try{de=N(!0,V)}finally{de?q():(F=!1,N=null)}}else F=!1}var q;if(typeof I=="function")q=function(){I(ie)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,he=ue.port2;ue.port1.onmessage=ie,q=function(){he.postMessage(null)}}else q=function(){y(ie,0)};function oe(V){N=V,F||(F=!0,q())}function pe(V,de){G=y(function(){V(s.unstable_now())},de)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,oe(X))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(V){switch(x){case 1:case 2:case 3:var de=3;break;default:de=x}var se=x;x=de;try{return V()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,de){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var se=x;x=V;try{return de()}finally{x=se}},s.unstable_scheduleCallback=function(V,de,se){var U=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?U+se:U):se=U,V){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=se+K,V={id:v++,callback:de,priorityLevel:V,startTime:se,expirationTime:K,sortIndex:-1},se>U?(V.sortIndex=se,e(m,V),n(h)===null&&V===n(m)&&(T?(_(G),G=-1):T=!0,pe(C,se-U))):(V.sortIndex=K,e(h,V),E||S||(E=!0,oe(X))),V},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(V){var de=x;return function(){var se=x;x=de;try{return V.apply(this,arguments)}finally{x=se}}}})(bc)),bc}var Up;function m_(){return Up||(Up=1,Cc.exports=p_()),Cc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function g_(){if(Np)return In;Np=1;var s=$f(),e=m_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},g={};function x(t){return h.call(g,t)?!0:h.call(v,t)?!1:m.test(t)?g[t]=!0:(v[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,l,c,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,I);y[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,I);y[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,I);y[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,l){var c=y.hasOwnProperty(i)?y[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),F=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),k=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),V=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,U;function K(t){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Me=!1;function $(t,i){if(!t||Me)return"";Me=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var l=re}Reflect.construct(t,[],i)}else{try{i.call()}catch(re){l=re}t.call(i.prototype)}else{try{throw Error()}catch(re){l=re}t()}}catch(re){if(re&&l&&typeof re.stack=="string"){for(var c=re.stack.split(`
`),p=l.stack.split(`
`),M=c.length-1,D=p.length-1;1<=M&&0<=D&&c[M]!==p[D];)D--;for(;1<=M&&0<=D;M--,D--)if(c[M]!==p[D]){if(M!==1||D!==1)do if(M--,D--,0>D||c[M]!==p[D]){var B=`
`+c[M].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=M&&0<=D);break}}}finally{Me=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?K(t):""}function ce(t){switch(t.tag){case 5:return K(t.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return t=$(t.type,!1),t;case 11:return t=$(t.type.render,!1),t;case 1:return t=$(t.type,!0),t;default:return""}}function me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case F:return"Portal";case b:return"Profiler";case G:return"StrictMode";case q:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case ie:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:me(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return me(t(i))}catch{}}return null}function _e(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ge(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function We(t){var i=Ge(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function bt(t){t._valueTracker||(t._valueTracker=We(t))}function Ct(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ge(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function at(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function O(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function jt(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Pe(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function lt(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function ut(t,i){lt(t,i);var o=Pe(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?yt(t,i.type,o):i.hasOwnProperty("defaultValue")&&yt(t,i.type,Pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ze(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function yt(t,i,o){(i!=="number"||at(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var $e=Array.isArray;function P(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Pe(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function w(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function te(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if($e(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Pe(o)}}function ve(t,i){var o=Pe(i.value),l=Pe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function xe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ge(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ke(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ge(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ie,Be=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ie.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ct(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Te=["Webkit","ms","Moz","O"];Object.keys(fe).forEach(function(t){Te.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),fe[i]=fe[t]})});function Re(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||fe.hasOwnProperty(t)&&fe[t]?(""+i).trim():i+"px"}function Ne(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Re(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var Ce=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ze(t,i){if(i){if(Ce[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ue(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var je=null;function z(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,J=null,ae=null;function Le(t){if(t=_o(t)){if(typeof Ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=va(i),Ae(t.stateNode,t.type,i))}}function De(t){J?ae?ae.push(t):ae=[t]:J=t}function et(){if(J){var t=J,i=ae;if(ae=J=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function mt(t,i){return t(i)}function Bt(){}var gt=!1;function pn(t,i,o){if(gt)return t(i,o);gt=!0;try{return mt(t,i,o)}finally{gt=!1,(J!==null||ae!==null)&&(Bt(),et())}}function Kt(t,i){var o=t.stateNode;if(o===null)return null;var l=va(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Jr=!1;if(d)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Jr=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Jr=!1}function Si(t,i,o,l,c,p,M,D,B){var re=Array.prototype.slice.call(arguments,3);try{i.apply(o,re)}catch(Se){this.onError(Se)}}var Mi=!1,Er=null,wr=!1,Xi=null,Ko={onError:function(t){Mi=!0,Er=t}};function es(t,i,o,l,c,p,M,D,B){Mi=!1,Er=null,Si.apply(Ko,arguments)}function Zo(t,i,o,l,c,p,M,D,B){if(es.apply(this,arguments),Mi){if(Mi){var re=Er;Mi=!1,Er=null}else throw Error(n(198));wr||(wr=!0,Xi=re)}}function di(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Qo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Jo(t){if(di(t)!==t)throw Error(n(188))}function ql(t){var i=t.alternate;if(!i){if(i=di(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var p=c.alternate;if(p===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===p.child){for(p=c.child;p;){if(p===o)return Jo(c),t;if(p===l)return Jo(c),i;p=p.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=p;else{for(var M=!1,D=c.child;D;){if(D===o){M=!0,o=c,l=p;break}if(D===l){M=!0,l=c,o=p;break}D=D.sibling}if(!M){for(D=p.child;D;){if(D===o){M=!0,o=p,l=c;break}if(D===l){M=!0,l=p,o=c;break}D=D.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function ea(t){return t=ql(t),t!==null?ta(t):null}function ta(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ta(t);if(i!==null)return i;t=t.sibling}return null}var na=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,j=e.unstable_shouldYield,ne=e.unstable_requestPaint,Q=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,we=e.unstable_ImmediatePriority,Fe=e.unstable_UserBlockingPriority,He=e.unstable_NormalPriority,Ye=e.unstable_LowPriority,st=e.unstable_IdlePriority,rt=null,Ke=null;function St(t){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(rt,t,void 0,(t.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Mt,Gt=Math.log,Ot=Math.LN2;function Mt(t){return t>>>=0,t===0?32:31-(Gt(t)/Ot|0)|0}var tt=64,Wt=4194304;function _t(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mn(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,p=t.pingedLanes,M=o&268435455;if(M!==0){var D=M&~c;D!==0?l=_t(D):(p&=M,p!==0&&(l=_t(p)))}else M=o&~c,M!==0?l=_t(M):p!==0&&(l=_t(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,p=i&-i,c>=p||c===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-ft(i),c=1<<o,l|=t[o],i&=~c;return l}function ji(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-ft(p),D=1<<M,B=c[M];B===-1?((D&o)===0||(D&l)!==0)&&(c[M]=ji(D,i)):B<=i&&(t.expiredLanes|=D),p&=~D}}function Ei(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Dt(){var t=tt;return tt<<=1,(tt&4194240)===0&&(tt=64),t}function gn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function tn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ft(i),t[i]=o}function cn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-ft(o),p=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~p}}function nn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-ft(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var Et=0;function hi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ld,$l,ud,cd,fd,Kl=!1,ia=[],Yi=null,qi=null,$i=null,eo=new Map,to=new Map,Ki=[],Dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dd(t,i){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":eo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(i.pointerId)}}function no(t,i,o,l,c,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[c]},i!==null&&(i=_o(i),i!==null&&$l(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function Ig(t,i,o,l,c){switch(i){case"focusin":return Yi=no(Yi,t,i,o,l,c),!0;case"dragenter":return qi=no(qi,t,i,o,l,c),!0;case"mouseover":return $i=no($i,t,i,o,l,c),!0;case"pointerover":var p=c.pointerId;return eo.set(p,no(eo.get(p)||null,t,i,o,l,c)),!0;case"gotpointercapture":return p=c.pointerId,to.set(p,no(to.get(p)||null,t,i,o,l,c)),!0}return!1}function hd(t){var i=Tr(t.target);if(i!==null){var o=di(i);if(o!==null){if(i=o.tag,i===13){if(i=Qo(o),i!==null){t.blockedOn=i,fd(t.priority,function(){ud(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ra(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Ql(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);je=l,o.target.dispatchEvent(l),je=null}else return i=_o(o),i!==null&&$l(i),t.blockedOn=o,!1;i.shift()}return!0}function pd(t,i,o){ra(t)&&o.delete(i)}function Ug(){Kl=!1,Yi!==null&&ra(Yi)&&(Yi=null),qi!==null&&ra(qi)&&(qi=null),$i!==null&&ra($i)&&($i=null),eo.forEach(pd),to.forEach(pd)}function io(t,i){t.blockedOn===i&&(t.blockedOn=null,Kl||(Kl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ug)))}function ro(t){function i(c){return io(c,t)}if(0<ia.length){io(ia[0],t);for(var o=1;o<ia.length;o++){var l=ia[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Yi!==null&&io(Yi,t),qi!==null&&io(qi,t),$i!==null&&io($i,t),eo.forEach(i),to.forEach(i),o=0;o<Ki.length;o++)l=Ki[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Ki.length&&(o=Ki[0],o.blockedOn===null);)hd(o),o.blockedOn===null&&Ki.shift()}var ts=C.ReactCurrentBatchConfig,sa=!0;function Ng(t,i,o,l){var c=Et,p=ts.transition;ts.transition=null;try{Et=1,Zl(t,i,o,l)}finally{Et=c,ts.transition=p}}function Fg(t,i,o,l){var c=Et,p=ts.transition;ts.transition=null;try{Et=4,Zl(t,i,o,l)}finally{Et=c,ts.transition=p}}function Zl(t,i,o,l){if(sa){var c=Ql(t,i,o,l);if(c===null)mu(t,i,l,oa,o),dd(t,l);else if(Ig(c,t,i,o,l))l.stopPropagation();else if(dd(t,l),i&4&&-1<Dg.indexOf(t)){for(;c!==null;){var p=_o(c);if(p!==null&&ld(p),p=Ql(t,i,o,l),p===null&&mu(t,i,l,oa,o),p===c)break;c=p}c!==null&&l.stopPropagation()}else mu(t,i,l,null,o)}}var oa=null;function Ql(t,i,o,l){if(oa=null,t=z(l),t=Tr(t),t!==null)if(i=di(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Qo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return oa=t,null}function md(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case we:return 1;case Fe:return 4;case He:case Ye:return 16;case st:return 536870912;default:return 16}default:return 16}}var Zi=null,Jl=null,aa=null;function gd(){if(aa)return aa;var t,i=Jl,o=i.length,l,c="value"in Zi?Zi.value:Zi.textContent,p=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[p-l];l++);return aa=c.slice(t,1<l?1-l:void 0)}function la(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ua(){return!0}function _d(){return!1}function zn(t){function i(o,l,c,p,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ua:_d,this.isPropagationStopped=_d,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),i}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=zn(ns),so=se({},ns,{view:0,detail:0}),Og=zn(so),tu,nu,oo,ca=se({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(tu=t.screenX-oo.screenX,nu=t.screenY-oo.screenY):nu=tu=0,oo=t),tu)},movementY:function(t){return"movementY"in t?t.movementY:nu}}),vd=zn(ca),kg=se({},ca,{dataTransfer:0}),zg=zn(kg),Bg=se({},so,{relatedTarget:0}),iu=zn(Bg),Hg=se({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Vg=zn(Hg),Gg=se({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wg=zn(Gg),Xg=se({},ns,{data:0}),xd=zn(Xg),jg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $g(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=qg[t])?!!i[t]:!1}function ru(){return $g}var Kg=se({},so,{key:function(t){if(t.key){var i=jg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=la(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(t){return t.type==="keypress"?la(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?la(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zg=zn(Kg),Qg=se({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=zn(Qg),Jg=se({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),e0=zn(Jg),t0=se({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),n0=zn(t0),i0=se({},ca,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),r0=zn(i0),s0=[9,13,27,32],su=d&&"CompositionEvent"in window,ao=null;d&&"documentMode"in document&&(ao=document.documentMode);var o0=d&&"TextEvent"in window&&!ao,Sd=d&&(!su||ao&&8<ao&&11>=ao),Md=" ",Ed=!1;function wd(t,i){switch(t){case"keyup":return s0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Td(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function a0(t,i){switch(t){case"compositionend":return Td(i);case"keypress":return i.which!==32?null:(Ed=!0,Md);case"textInput":return t=i.data,t===Md&&Ed?null:t;default:return null}}function l0(t,i){if(is)return t==="compositionend"||!su&&wd(t,i)?(t=gd(),aa=Jl=Zi=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Sd&&i.locale!=="ko"?null:i.data;default:return null}}var u0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!u0[t.type]:i==="textarea"}function Rd(t,i,o,l){De(l),i=ma(i,"onChange"),0<i.length&&(o=new eu("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var lo=null,uo=null;function c0(t){Xd(t,0)}function fa(t){var i=ls(t);if(Ct(i))return t}function f0(t,i){if(t==="change")return i}var Cd=!1;if(d){var ou;if(d){var au="oninput"in document;if(!au){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),au=typeof bd.oninput=="function"}ou=au}else ou=!1;Cd=ou&&(!document.documentMode||9<document.documentMode)}function Pd(){lo&&(lo.detachEvent("onpropertychange",Ld),uo=lo=null)}function Ld(t){if(t.propertyName==="value"&&fa(uo)){var i=[];Rd(i,uo,t,z(t)),pn(c0,i)}}function d0(t,i,o){t==="focusin"?(Pd(),lo=i,uo=o,lo.attachEvent("onpropertychange",Ld)):t==="focusout"&&Pd()}function h0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fa(uo)}function p0(t,i){if(t==="click")return fa(i)}function m0(t,i){if(t==="input"||t==="change")return fa(i)}function g0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Jn=typeof Object.is=="function"?Object.is:g0;function co(t,i){if(Jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!h.call(i,c)||!Jn(t[c],i[c]))return!1}return!0}function Dd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Id(t,i){var o=Dd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Dd(o)}}function Ud(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ud(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Nd(){for(var t=window,i=at();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=at(t.document)}return i}function lu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function _0(t){var i=Nd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ud(o.ownerDocument.documentElement,o)){if(l!==null&&lu(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,p=Math.min(l.start,c);l=l.end===void 0?p:Math.min(l.end,c),!t.extend&&p>l&&(c=l,l=p,p=c),c=Id(o,p);var M=Id(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var v0=d&&"documentMode"in document&&11>=document.documentMode,rs=null,uu=null,fo=null,cu=!1;function Fd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;cu||rs==null||rs!==at(l)||(l=rs,"selectionStart"in l&&lu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fo&&co(fo,l)||(fo=l,l=ma(uu,"onSelect"),0<l.length&&(i=new eu("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=rs)))}function da(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ss={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},fu={},Od={};d&&(Od=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function ha(t){if(fu[t])return fu[t];if(!ss[t])return t;var i=ss[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Od)return fu[t]=i[o];return t}var kd=ha("animationend"),zd=ha("animationiteration"),Bd=ha("animationstart"),Hd=ha("transitionend"),Vd=new Map,Gd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){Vd.set(t,i),u(i,[t])}for(var du=0;du<Gd.length;du++){var hu=Gd[du],x0=hu.toLowerCase(),y0=hu[0].toUpperCase()+hu.slice(1);Qi(x0,"on"+y0)}Qi(kd,"onAnimationEnd"),Qi(zd,"onAnimationIteration"),Qi(Bd,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(Hd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function Wd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Zo(l,i,void 0,t),t.currentTarget=null}function Xd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],B=D.instance,re=D.currentTarget;if(D=D.listener,B!==p&&c.isPropagationStopped())break e;Wd(c,D,re),p=B}else for(M=0;M<l.length;M++){if(D=l[M],B=D.instance,re=D.currentTarget,D=D.listener,B!==p&&c.isPropagationStopped())break e;Wd(c,D,re),p=B}}}if(wr)throw t=Xi,wr=!1,Xi=null,t}function Nt(t,i){var o=i[Su];o===void 0&&(o=i[Su]=new Set);var l=t+"__bubble";o.has(l)||(jd(i,t,2,!1),o.add(l))}function pu(t,i,o){var l=0;i&&(l|=4),jd(o,t,l,i)}var pa="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[pa]){t[pa]=!0,r.forEach(function(o){o!=="selectionchange"&&(S0.has(o)||pu(o,!1,t),pu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[pa]||(i[pa]=!0,pu("selectionchange",!1,i))}}function jd(t,i,o,l){switch(md(i)){case 1:var c=Ng;break;case 4:c=Fg;break;default:c=Zl}o=c.bind(null,i,o,t),c=void 0,!Jr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function mu(t,i,o,l,c){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===c||B.nodeType===8&&B.parentNode===c))return;M=M.return}for(;D!==null;){if(M=Tr(D),M===null)return;if(B=M.tag,B===5||B===6){l=p=M;continue e}D=D.parentNode}}l=l.return}pn(function(){var re=p,Se=z(o),Ee=[];e:{var ye=Vd.get(t);if(ye!==void 0){var Ve=eu,qe=t;switch(t){case"keypress":if(la(o)===0)break e;case"keydown":case"keyup":Ve=Zg;break;case"focusin":qe="focus",Ve=iu;break;case"focusout":qe="blur",Ve=iu;break;case"beforeblur":case"afterblur":Ve=iu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=zg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=e0;break;case kd:case zd:case Bd:Ve=Vg;break;case Hd:Ve=n0;break;case"scroll":Ve=Og;break;case"wheel":Ve=r0;break;case"copy":case"cut":case"paste":Ve=Wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=yd}var Qe=(i&4)!==0,Yt=!Qe&&t==="scroll",Z=Qe?ye!==null?ye+"Capture":null:ye;Qe=[];for(var W=re,ee;W!==null;){ee=W;var be=ee.stateNode;if(ee.tag===5&&be!==null&&(ee=be,Z!==null&&(be=Kt(W,Z),be!=null&&Qe.push(mo(W,be,ee)))),Yt)break;W=W.return}0<Qe.length&&(ye=new Ve(ye,qe,null,o,Se),Ee.push({event:ye,listeners:Qe}))}}if((i&7)===0){e:{if(ye=t==="mouseover"||t==="pointerover",Ve=t==="mouseout"||t==="pointerout",ye&&o!==je&&(qe=o.relatedTarget||o.fromElement)&&(Tr(qe)||qe[wi]))break e;if((Ve||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,Ve?(qe=o.relatedTarget||o.toElement,Ve=re,qe=qe?Tr(qe):null,qe!==null&&(Yt=di(qe),qe!==Yt||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(Ve=null,qe=re),Ve!==qe)){if(Qe=vd,be="onMouseLeave",Z="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(Qe=yd,be="onPointerLeave",Z="onPointerEnter",W="pointer"),Yt=Ve==null?ye:ls(Ve),ee=qe==null?ye:ls(qe),ye=new Qe(be,W+"leave",Ve,o,Se),ye.target=Yt,ye.relatedTarget=ee,be=null,Tr(Se)===re&&(Qe=new Qe(Z,W+"enter",qe,o,Se),Qe.target=ee,Qe.relatedTarget=Yt,be=Qe),Yt=be,Ve&&qe)t:{for(Qe=Ve,Z=qe,W=0,ee=Qe;ee;ee=os(ee))W++;for(ee=0,be=Z;be;be=os(be))ee++;for(;0<W-ee;)Qe=os(Qe),W--;for(;0<ee-W;)Z=os(Z),ee--;for(;W--;){if(Qe===Z||Z!==null&&Qe===Z.alternate)break t;Qe=os(Qe),Z=os(Z)}Qe=null}else Qe=null;Ve!==null&&Yd(Ee,ye,Ve,Qe,!1),qe!==null&&Yt!==null&&Yd(Ee,Yt,qe,Qe,!0)}}e:{if(ye=re?ls(re):window,Ve=ye.nodeName&&ye.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&ye.type==="file")var Je=f0;else if(Ad(ye))if(Cd)Je=m0;else{Je=h0;var nt=d0}else(Ve=ye.nodeName)&&Ve.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Je=p0);if(Je&&(Je=Je(t,re))){Rd(Ee,Je,o,Se);break e}nt&&nt(t,ye,re),t==="focusout"&&(nt=ye._wrapperState)&&nt.controlled&&ye.type==="number"&&yt(ye,"number",ye.value)}switch(nt=re?ls(re):window,t){case"focusin":(Ad(nt)||nt.contentEditable==="true")&&(rs=nt,uu=re,fo=null);break;case"focusout":fo=uu=rs=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,Fd(Ee,o,Se);break;case"selectionchange":if(v0)break;case"keydown":case"keyup":Fd(Ee,o,Se)}var it;if(su)e:{switch(t){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else is?wd(t,o)&&(ot="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ot="onCompositionStart");ot&&(Sd&&o.locale!=="ko"&&(is||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&is&&(it=gd()):(Zi=Se,Jl="value"in Zi?Zi.value:Zi.textContent,is=!0)),nt=ma(re,ot),0<nt.length&&(ot=new xd(ot,t,null,o,Se),Ee.push({event:ot,listeners:nt}),it?ot.data=it:(it=Td(o),it!==null&&(ot.data=it)))),(it=o0?a0(t,o):l0(t,o))&&(re=ma(re,"onBeforeInput"),0<re.length&&(Se=new xd("onBeforeInput","beforeinput",null,o,Se),Ee.push({event:Se,listeners:re}),Se.data=it))}Xd(Ee,i)})}function mo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ma(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,p=c.stateNode;c.tag===5&&p!==null&&(c=p,p=Kt(t,o),p!=null&&l.unshift(mo(t,p,c)),p=Kt(t,i),p!=null&&l.push(mo(t,p,c))),t=t.return}return l}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yd(t,i,o,l,c){for(var p=i._reactName,M=[];o!==null&&o!==l;){var D=o,B=D.alternate,re=D.stateNode;if(B!==null&&B===l)break;D.tag===5&&re!==null&&(D=re,c?(B=Kt(o,p),B!=null&&M.unshift(mo(o,B,D))):c||(B=Kt(o,p),B!=null&&M.push(mo(o,B,D)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var M0=/\r\n?/g,E0=/\u0000|\uFFFD/g;function qd(t){return(typeof t=="string"?t:""+t).replace(M0,`
`).replace(E0,"")}function ga(t,i,o){if(i=qd(i),qd(t)!==i&&o)throw Error(n(425))}function _a(){}var gu=null,_u=null;function vu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xu=typeof setTimeout=="function"?setTimeout:void 0,w0=typeof clearTimeout=="function"?clearTimeout:void 0,$d=typeof Promise=="function"?Promise:void 0,T0=typeof queueMicrotask=="function"?queueMicrotask:typeof $d<"u"?function(t){return $d.resolve(null).then(t).catch(A0)}:xu;function A0(t){setTimeout(function(){throw t})}function yu(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),ro(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);ro(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Kd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var as=Math.random().toString(36).slice(2),pi="__reactFiber$"+as,go="__reactProps$"+as,wi="__reactContainer$"+as,Su="__reactEvents$"+as,R0="__reactListeners$"+as,C0="__reactHandles$"+as;function Tr(t){var i=t[pi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[wi]||o[pi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Kd(t);t!==null;){if(o=t[pi])return o;t=Kd(t)}return i}t=o,o=t.parentNode}return null}function _o(t){return t=t[pi]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function va(t){return t[go]||null}var Mu=[],us=-1;function er(t){return{current:t}}function Ft(t){0>us||(t.current=Mu[us],Mu[us]=null,us--)}function It(t,i){us++,Mu[us]=t.current,t.current=i}var tr={},_n=er(tr),Cn=er(!1),Ar=tr;function cs(t,i){var o=t.type.contextTypes;if(!o)return tr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},p;for(p in o)c[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function bn(t){return t=t.childContextTypes,t!=null}function xa(){Ft(Cn),Ft(_n)}function Zd(t,i,o){if(_n.current!==tr)throw Error(n(168));It(_n,i),It(Cn,o)}function Qd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,_e(t)||"Unknown",c));return se({},o,l)}function ya(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Ar=_n.current,It(_n,t),It(Cn,Cn.current),!0}function Jd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Qd(t,i,Ar),l.__reactInternalMemoizedMergedChildContext=t,Ft(Cn),Ft(_n),It(_n,t)):Ft(Cn),It(Cn,o)}var Ti=null,Sa=!1,Eu=!1;function eh(t){Ti===null?Ti=[t]:Ti.push(t)}function b0(t){Sa=!0,eh(t)}function nr(){if(!Eu&&Ti!==null){Eu=!0;var t=0,i=Et;try{var o=Ti;for(Et=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ti=null,Sa=!1}catch(c){throw Ti!==null&&(Ti=Ti.slice(t+1)),na(we,nr),c}finally{Et=i,Eu=!1}}return null}var fs=[],ds=0,Ma=null,Ea=0,Xn=[],jn=0,Rr=null,Ai=1,Ri="";function Cr(t,i){fs[ds++]=Ea,fs[ds++]=Ma,Ma=t,Ea=i}function th(t,i,o){Xn[jn++]=Ai,Xn[jn++]=Ri,Xn[jn++]=Rr,Rr=t;var l=Ai;t=Ri;var c=32-ft(l)-1;l&=~(1<<c),o+=1;var p=32-ft(i)+c;if(30<p){var M=c-c%5;p=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Ai=1<<32-ft(i)+c|o<<c|l,Ri=p+t}else Ai=1<<p|o<<c|l,Ri=t}function wu(t){t.return!==null&&(Cr(t,1),th(t,1,0))}function Tu(t){for(;t===Ma;)Ma=fs[--ds],fs[ds]=null,Ea=fs[--ds],fs[ds]=null;for(;t===Rr;)Rr=Xn[--jn],Xn[jn]=null,Ri=Xn[--jn],Xn[jn]=null,Ai=Xn[--jn],Xn[jn]=null}var Bn=null,Hn=null,kt=!1,ei=null;function nh(t,i){var o=Kn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function ih(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Bn=t,Hn=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Bn=t,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Rr!==null?{id:Ai,overflow:Ri}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Kn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Bn=t,Hn=null,!0):!1;default:return!1}}function Au(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ru(t){if(kt){var i=Hn;if(i){var o=i;if(!ih(t,i)){if(Au(t))throw Error(n(418));i=Ji(o.nextSibling);var l=Bn;i&&ih(t,i)?nh(l,o):(t.flags=t.flags&-4097|2,kt=!1,Bn=t)}}else{if(Au(t))throw Error(n(418));t.flags=t.flags&-4097|2,kt=!1,Bn=t}}}function rh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bn=t}function wa(t){if(t!==Bn)return!1;if(!kt)return rh(t),kt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!vu(t.type,t.memoizedProps)),i&&(i=Hn)){if(Au(t))throw sh(),Error(n(418));for(;i;)nh(t,i),i=Ji(i.nextSibling)}if(rh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Hn=Ji(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Hn=null}}else Hn=Bn?Ji(t.stateNode.nextSibling):null;return!0}function sh(){for(var t=Hn;t;)t=Ji(t.nextSibling)}function hs(){Hn=Bn=null,kt=!1}function Cu(t){ei===null?ei=[t]:ei.push(t)}var P0=C.ReactCurrentBatchConfig;function vo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var D=c.refs;M===null?delete D[p]:D[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ta(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function oh(t){var i=t._init;return i(t._payload)}function ah(t){function i(Z,W){if(t){var ee=Z.deletions;ee===null?(Z.deletions=[W],Z.flags|=16):ee.push(W)}}function o(Z,W){if(!t)return null;for(;W!==null;)i(Z,W),W=W.sibling;return null}function l(Z,W){for(Z=new Map;W!==null;)W.key!==null?Z.set(W.key,W):Z.set(W.index,W),W=W.sibling;return Z}function c(Z,W){return Z=cr(Z,W),Z.index=0,Z.sibling=null,Z}function p(Z,W,ee){return Z.index=ee,t?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<W?(Z.flags|=2,W):ee):(Z.flags|=2,W)):(Z.flags|=1048576,W)}function M(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function D(Z,W,ee,be){return W===null||W.tag!==6?(W=xc(ee,Z.mode,be),W.return=Z,W):(W=c(W,ee),W.return=Z,W)}function B(Z,W,ee,be){var Je=ee.type;return Je===N?Se(Z,W,ee.props.children,be,ee.key):W!==null&&(W.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===oe&&oh(Je)===W.type)?(be=c(W,ee.props),be.ref=vo(Z,W,ee),be.return=Z,be):(be=$a(ee.type,ee.key,ee.props,null,Z.mode,be),be.ref=vo(Z,W,ee),be.return=Z,be)}function re(Z,W,ee,be){return W===null||W.tag!==4||W.stateNode.containerInfo!==ee.containerInfo||W.stateNode.implementation!==ee.implementation?(W=yc(ee,Z.mode,be),W.return=Z,W):(W=c(W,ee.children||[]),W.return=Z,W)}function Se(Z,W,ee,be,Je){return W===null||W.tag!==7?(W=Fr(ee,Z.mode,be,Je),W.return=Z,W):(W=c(W,ee),W.return=Z,W)}function Ee(Z,W,ee){if(typeof W=="string"&&W!==""||typeof W=="number")return W=xc(""+W,Z.mode,ee),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case X:return ee=$a(W.type,W.key,W.props,null,Z.mode,ee),ee.ref=vo(Z,null,W),ee.return=Z,ee;case F:return W=yc(W,Z.mode,ee),W.return=Z,W;case oe:var be=W._init;return Ee(Z,be(W._payload),ee)}if($e(W)||de(W))return W=Fr(W,Z.mode,ee,null),W.return=Z,W;Ta(Z,W)}return null}function ye(Z,W,ee,be){var Je=W!==null?W.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Je!==null?null:D(Z,W,""+ee,be);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case X:return ee.key===Je?B(Z,W,ee,be):null;case F:return ee.key===Je?re(Z,W,ee,be):null;case oe:return Je=ee._init,ye(Z,W,Je(ee._payload),be)}if($e(ee)||de(ee))return Je!==null?null:Se(Z,W,ee,be,null);Ta(Z,ee)}return null}function Ve(Z,W,ee,be,Je){if(typeof be=="string"&&be!==""||typeof be=="number")return Z=Z.get(ee)||null,D(W,Z,""+be,Je);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case X:return Z=Z.get(be.key===null?ee:be.key)||null,B(W,Z,be,Je);case F:return Z=Z.get(be.key===null?ee:be.key)||null,re(W,Z,be,Je);case oe:var nt=be._init;return Ve(Z,W,ee,nt(be._payload),Je)}if($e(be)||de(be))return Z=Z.get(ee)||null,Se(W,Z,be,Je,null);Ta(W,be)}return null}function qe(Z,W,ee,be){for(var Je=null,nt=null,it=W,ot=W=0,on=null;it!==null&&ot<ee.length;ot++){it.index>ot?(on=it,it=null):on=it.sibling;var Tt=ye(Z,it,ee[ot],be);if(Tt===null){it===null&&(it=on);break}t&&it&&Tt.alternate===null&&i(Z,it),W=p(Tt,W,ot),nt===null?Je=Tt:nt.sibling=Tt,nt=Tt,it=on}if(ot===ee.length)return o(Z,it),kt&&Cr(Z,ot),Je;if(it===null){for(;ot<ee.length;ot++)it=Ee(Z,ee[ot],be),it!==null&&(W=p(it,W,ot),nt===null?Je=it:nt.sibling=it,nt=it);return kt&&Cr(Z,ot),Je}for(it=l(Z,it);ot<ee.length;ot++)on=Ve(it,Z,ot,ee[ot],be),on!==null&&(t&&on.alternate!==null&&it.delete(on.key===null?ot:on.key),W=p(on,W,ot),nt===null?Je=on:nt.sibling=on,nt=on);return t&&it.forEach(function(fr){return i(Z,fr)}),kt&&Cr(Z,ot),Je}function Qe(Z,W,ee,be){var Je=de(ee);if(typeof Je!="function")throw Error(n(150));if(ee=Je.call(ee),ee==null)throw Error(n(151));for(var nt=Je=null,it=W,ot=W=0,on=null,Tt=ee.next();it!==null&&!Tt.done;ot++,Tt=ee.next()){it.index>ot?(on=it,it=null):on=it.sibling;var fr=ye(Z,it,Tt.value,be);if(fr===null){it===null&&(it=on);break}t&&it&&fr.alternate===null&&i(Z,it),W=p(fr,W,ot),nt===null?Je=fr:nt.sibling=fr,nt=fr,it=on}if(Tt.done)return o(Z,it),kt&&Cr(Z,ot),Je;if(it===null){for(;!Tt.done;ot++,Tt=ee.next())Tt=Ee(Z,Tt.value,be),Tt!==null&&(W=p(Tt,W,ot),nt===null?Je=Tt:nt.sibling=Tt,nt=Tt);return kt&&Cr(Z,ot),Je}for(it=l(Z,it);!Tt.done;ot++,Tt=ee.next())Tt=Ve(it,Z,ot,Tt.value,be),Tt!==null&&(t&&Tt.alternate!==null&&it.delete(Tt.key===null?ot:Tt.key),W=p(Tt,W,ot),nt===null?Je=Tt:nt.sibling=Tt,nt=Tt);return t&&it.forEach(function(u_){return i(Z,u_)}),kt&&Cr(Z,ot),Je}function Yt(Z,W,ee,be){if(typeof ee=="object"&&ee!==null&&ee.type===N&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case X:e:{for(var Je=ee.key,nt=W;nt!==null;){if(nt.key===Je){if(Je=ee.type,Je===N){if(nt.tag===7){o(Z,nt.sibling),W=c(nt,ee.props.children),W.return=Z,Z=W;break e}}else if(nt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===oe&&oh(Je)===nt.type){o(Z,nt.sibling),W=c(nt,ee.props),W.ref=vo(Z,nt,ee),W.return=Z,Z=W;break e}o(Z,nt);break}else i(Z,nt);nt=nt.sibling}ee.type===N?(W=Fr(ee.props.children,Z.mode,be,ee.key),W.return=Z,Z=W):(be=$a(ee.type,ee.key,ee.props,null,Z.mode,be),be.ref=vo(Z,W,ee),be.return=Z,Z=be)}return M(Z);case F:e:{for(nt=ee.key;W!==null;){if(W.key===nt)if(W.tag===4&&W.stateNode.containerInfo===ee.containerInfo&&W.stateNode.implementation===ee.implementation){o(Z,W.sibling),W=c(W,ee.children||[]),W.return=Z,Z=W;break e}else{o(Z,W);break}else i(Z,W);W=W.sibling}W=yc(ee,Z.mode,be),W.return=Z,Z=W}return M(Z);case oe:return nt=ee._init,Yt(Z,W,nt(ee._payload),be)}if($e(ee))return qe(Z,W,ee,be);if(de(ee))return Qe(Z,W,ee,be);Ta(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,W!==null&&W.tag===6?(o(Z,W.sibling),W=c(W,ee),W.return=Z,Z=W):(o(Z,W),W=xc(ee,Z.mode,be),W.return=Z,Z=W),M(Z)):o(Z,W)}return Yt}var ps=ah(!0),lh=ah(!1),Aa=er(null),Ra=null,ms=null,bu=null;function Pu(){bu=ms=Ra=null}function Lu(t){var i=Aa.current;Ft(Aa),t._currentValue=i}function Du(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function gs(t,i){Ra=t,bu=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Pn=!0),t.firstContext=null)}function Yn(t){var i=t._currentValue;if(bu!==t)if(t={context:t,memoizedValue:i,next:null},ms===null){if(Ra===null)throw Error(n(308));ms=t,Ra.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return i}var br=null;function Iu(t){br===null?br=[t]:br.push(t)}function uh(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,Iu(i)):(o.next=c.next,c.next=o),i.interleaved=o,Ci(t,l)}function Ci(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var ir=!1;function Uu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ch(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(wt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ci(t,o)}return c=l.interleaved,c===null?(i.next=i,Iu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ci(t,o)}function Ca(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,nn(t,o)}}function fh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?c=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?c=p=i:p=p.next=i}else c=p=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ba(t,i,o,l){var c=t.updateQueue;ir=!1;var p=c.firstBaseUpdate,M=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var B=D,re=B.next;B.next=null,M===null?p=re:M.next=re,M=B;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,D=Se.lastBaseUpdate,D!==M&&(D===null?Se.firstBaseUpdate=re:D.next=re,Se.lastBaseUpdate=B))}if(p!==null){var Ee=c.baseState;M=0,Se=re=B=null,D=p;do{var ye=D.lane,Ve=D.eventTime;if((l&ye)===ye){Se!==null&&(Se=Se.next={eventTime:Ve,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var qe=t,Qe=D;switch(ye=i,Ve=o,Qe.tag){case 1:if(qe=Qe.payload,typeof qe=="function"){Ee=qe.call(Ve,Ee,ye);break e}Ee=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=Qe.payload,ye=typeof qe=="function"?qe.call(Ve,Ee,ye):qe,ye==null)break e;Ee=se({},Ee,ye);break e;case 2:ir=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,ye=c.effects,ye===null?c.effects=[D]:ye.push(D))}else Ve={eventTime:Ve,lane:ye,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Se===null?(re=Se=Ve,B=Ee):Se=Se.next=Ve,M|=ye;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;ye=D,D=ye.next,ye.next=null,c.lastBaseUpdate=ye,c.shared.pending=null}}while(!0);if(Se===null&&(B=Ee),c.baseState=B,c.firstBaseUpdate=re,c.lastBaseUpdate=Se,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else p===null&&(c.shared.lanes=0);Dr|=M,t.lanes=M,t.memoizedState=Ee}}function dh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var xo={},mi=er(xo),yo=er(xo),So=er(xo);function Pr(t){if(t===xo)throw Error(n(174));return t}function Nu(t,i){switch(It(So,i),It(yo,t),It(mi,xo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ke(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ke(i,t)}Ft(mi),It(mi,i)}function _s(){Ft(mi),Ft(yo),Ft(So)}function hh(t){Pr(So.current);var i=Pr(mi.current),o=ke(i,t.type);i!==o&&(It(yo,t),It(mi,o))}function Fu(t){yo.current===t&&(Ft(mi),Ft(yo))}var Ht=er(0);function Pa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ou=[];function ku(){for(var t=0;t<Ou.length;t++)Ou[t]._workInProgressVersionPrimary=null;Ou.length=0}var La=C.ReactCurrentDispatcher,zu=C.ReactCurrentBatchConfig,Lr=0,Vt=null,Zt=null,rn=null,Da=!1,Mo=!1,Eo=0,L0=0;function vn(){throw Error(n(321))}function Bu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Jn(t[o],i[o]))return!1;return!0}function Hu(t,i,o,l,c,p){if(Lr=p,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,La.current=t===null||t.memoizedState===null?N0:F0,t=o(l,c),Mo){p=0;do{if(Mo=!1,Eo=0,25<=p)throw Error(n(301));p+=1,rn=Zt=null,i.updateQueue=null,La.current=O0,t=o(l,c)}while(Mo)}if(La.current=Na,i=Zt!==null&&Zt.next!==null,Lr=0,rn=Zt=Vt=null,Da=!1,i)throw Error(n(300));return t}function Vu(){var t=Eo!==0;return Eo=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Vt.memoizedState=rn=t:rn=rn.next=t,rn}function qn(){if(Zt===null){var t=Vt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var i=rn===null?Vt.memoizedState:rn.next;if(i!==null)rn=i,Zt=t;else{if(t===null)throw Error(n(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},rn===null?Vt.memoizedState=rn=t:rn=rn.next=t}return rn}function wo(t,i){return typeof i=="function"?i(t):i}function Gu(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Zt,c=l.baseQueue,p=o.pending;if(p!==null){if(c!==null){var M=c.next;c.next=p.next,p.next=M}l.baseQueue=c=p,o.pending=null}if(c!==null){p=c.next,l=l.baseState;var D=M=null,B=null,re=p;do{var Se=re.lane;if((Lr&Se)===Se)B!==null&&(B=B.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),l=re.hasEagerState?re.eagerState:t(l,re.action);else{var Ee={lane:Se,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};B===null?(D=B=Ee,M=l):B=B.next=Ee,Vt.lanes|=Se,Dr|=Se}re=re.next}while(re!==null&&re!==p);B===null?M=l:B.next=D,Jn(l,i.memoizedState)||(Pn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=B,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do p=c.lane,Vt.lanes|=p,Dr|=p,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Wu(t){var i=qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,p=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do p=t(p,M.action),M=M.next;while(M!==c);Jn(p,i.memoizedState)||(Pn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,l]}function ph(){}function mh(t,i){var o=Vt,l=qn(),c=i(),p=!Jn(l.memoizedState,c);if(p&&(l.memoizedState=c,Pn=!0),l=l.queue,Xu(vh.bind(null,o,l,t),[t]),l.getSnapshot!==i||p||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,To(9,_h.bind(null,o,l,c,i),void 0,null),sn===null)throw Error(n(349));(Lr&30)!==0||gh(o,i,c)}return c}function gh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function _h(t,i,o,l){i.value=o,i.getSnapshot=l,xh(i)&&yh(t)}function vh(t,i,o){return o(function(){xh(i)&&yh(t)})}function xh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Jn(t,o)}catch{return!0}}function yh(t){var i=Ci(t,1);i!==null&&ri(i,t,1,-1)}function Sh(t){var i=gi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},i.queue=t,t=t.dispatch=U0.bind(null,Vt,t),[i.memoizedState,t]}function To(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Mh(){return qn().memoizedState}function Ia(t,i,o,l){var c=gi();Vt.flags|=t,c.memoizedState=To(1|i,o,void 0,l===void 0?null:l)}function Ua(t,i,o,l){var c=qn();l=l===void 0?null:l;var p=void 0;if(Zt!==null){var M=Zt.memoizedState;if(p=M.destroy,l!==null&&Bu(l,M.deps)){c.memoizedState=To(i,o,p,l);return}}Vt.flags|=t,c.memoizedState=To(1|i,o,p,l)}function Eh(t,i){return Ia(8390656,8,t,i)}function Xu(t,i){return Ua(2048,8,t,i)}function wh(t,i){return Ua(4,2,t,i)}function Th(t,i){return Ua(4,4,t,i)}function Ah(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Rh(t,i,o){return o=o!=null?o.concat([t]):null,Ua(4,4,Ah.bind(null,i,t),o)}function ju(){}function Ch(t,i){var o=qn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Bu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function bh(t,i){var o=qn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Bu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Ph(t,i,o){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=o):(Jn(o,i)||(o=Dt(),Vt.lanes|=o,Dr|=o,t.baseState=!0),i)}function D0(t,i){var o=Et;Et=o!==0&&4>o?o:4,t(!0);var l=zu.transition;zu.transition={};try{t(!1),i()}finally{Et=o,zu.transition=l}}function Lh(){return qn().memoizedState}function I0(t,i,o){var l=lr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Dh(t))Ih(i,o);else if(o=uh(t,i,o,l),o!==null){var c=Tn();ri(o,t,l,c),Uh(o,i,l)}}function U0(t,i,o){var l=lr(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Dh(t))Ih(i,c);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,D=p(M,o);if(c.hasEagerState=!0,c.eagerState=D,Jn(D,M)){var B=i.interleaved;B===null?(c.next=c,Iu(i)):(c.next=B.next,B.next=c),i.interleaved=c;return}}catch{}finally{}o=uh(t,i,c,l),o!==null&&(c=Tn(),ri(o,t,l,c),Uh(o,i,l))}}function Dh(t){var i=t.alternate;return t===Vt||i!==null&&i===Vt}function Ih(t,i){Mo=Da=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Uh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,nn(t,o)}}var Na={readContext:Yn,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},N0={readContext:Yn,useCallback:function(t,i){return gi().memoizedState=[t,i===void 0?null:i],t},useContext:Yn,useEffect:Eh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ia(4194308,4,Ah.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ia(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ia(4,2,t,i)},useMemo:function(t,i){var o=gi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=gi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=I0.bind(null,Vt,t),[l.memoizedState,t]},useRef:function(t){var i=gi();return t={current:t},i.memoizedState=t},useState:Sh,useDebugValue:ju,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=Sh(!1),i=t[0];return t=D0.bind(null,t[1]),gi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Vt,c=gi();if(kt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),sn===null)throw Error(n(349));(Lr&30)!==0||gh(l,i,o)}c.memoizedState=o;var p={value:o,getSnapshot:i};return c.queue=p,Eh(vh.bind(null,l,p,t),[t]),l.flags|=2048,To(9,_h.bind(null,l,p,o,i),void 0,null),o},useId:function(){var t=gi(),i=sn.identifierPrefix;if(kt){var o=Ri,l=Ai;o=(l&~(1<<32-ft(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Eo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=L0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},F0={readContext:Yn,useCallback:Ch,useContext:Yn,useEffect:Xu,useImperativeHandle:Rh,useInsertionEffect:wh,useLayoutEffect:Th,useMemo:bh,useReducer:Gu,useRef:Mh,useState:function(){return Gu(wo)},useDebugValue:ju,useDeferredValue:function(t){var i=qn();return Ph(i,Zt.memoizedState,t)},useTransition:function(){var t=Gu(wo)[0],i=qn().memoizedState;return[t,i]},useMutableSource:ph,useSyncExternalStore:mh,useId:Lh,unstable_isNewReconciler:!1},O0={readContext:Yn,useCallback:Ch,useContext:Yn,useEffect:Xu,useImperativeHandle:Rh,useInsertionEffect:wh,useLayoutEffect:Th,useMemo:bh,useReducer:Wu,useRef:Mh,useState:function(){return Wu(wo)},useDebugValue:ju,useDeferredValue:function(t){var i=qn();return Zt===null?i.memoizedState=t:Ph(i,Zt.memoizedState,t)},useTransition:function(){var t=Wu(wo)[0],i=qn().memoizedState;return[t,i]},useMutableSource:ph,useSyncExternalStore:mh,useId:Lh,unstable_isNewReconciler:!1};function ti(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Yu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Fa={isMounted:function(t){return(t=t._reactInternals)?di(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=Tn(),c=lr(t),p=bi(l,c);p.payload=i,o!=null&&(p.callback=o),i=rr(t,p,c),i!==null&&(ri(i,t,c,l),Ca(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=Tn(),c=lr(t),p=bi(l,c);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=rr(t,p,c),i!==null&&(ri(i,t,c,l),Ca(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Tn(),l=lr(t),c=bi(o,l);c.tag=2,i!=null&&(c.callback=i),i=rr(t,c,l),i!==null&&(ri(i,t,l,o),Ca(i,t,l))}};function Nh(t,i,o,l,c,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!co(o,l)||!co(c,p):!0}function Fh(t,i,o){var l=!1,c=tr,p=i.contextType;return typeof p=="object"&&p!==null?p=Yn(p):(c=bn(i)?Ar:_n.current,l=i.contextTypes,p=(l=l!=null)?cs(t,c):tr),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=p),i}function Oh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Fa.enqueueReplaceState(i,i.state,null)}function qu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Uu(t);var p=i.contextType;typeof p=="object"&&p!==null?c.context=Yn(p):(p=bn(i)?Ar:_n.current,c.context=cs(t,p)),c.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Yu(t,i,p,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Fa.enqueueReplaceState(c,c.state,null),ba(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,i){try{var o="",l=i;do o+=ce(l),l=l.return;while(l);var c=o}catch(p){c=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:c,digest:null}}function $u(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Ku(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var k0=typeof WeakMap=="function"?WeakMap:Map;function kh(t,i,o){o=bi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ga||(Ga=!0,fc=l),Ku(t,i)},o}function zh(t,i,o){o=bi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Ku(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Ku(t,i),typeof l!="function"&&(or===null?or=new Set([this]):or.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Bh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new k0;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=Q0.bind(null,t,i,o),i.then(t,t))}function Hh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Vh(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=bi(-1,1),i.tag=2,rr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var z0=C.ReactCurrentOwner,Pn=!1;function wn(t,i,o,l){i.child=t===null?lh(i,null,o,l):ps(i,t.child,o,l)}function Gh(t,i,o,l,c){o=o.render;var p=i.ref;return gs(i,c),l=Hu(t,i,o,l,p,c),o=Vu(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Pi(t,i,c)):(kt&&o&&wu(i),i.flags|=1,wn(t,i,l,c),i.child)}function Wh(t,i,o,l,c){if(t===null){var p=o.type;return typeof p=="function"&&!vc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Xh(t,i,p,l,c)):(t=$a(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&c)===0){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:co,o(M,l)&&t.ref===i.ref)return Pi(t,i,c)}return i.flags|=1,t=cr(p,l),t.ref=i.ref,t.return=i,i.child=t}function Xh(t,i,o,l,c){if(t!==null){var p=t.memoizedProps;if(co(p,l)&&t.ref===i.ref)if(Pn=!1,i.pendingProps=l=p,(t.lanes&c)!==0)(t.flags&131072)!==0&&(Pn=!0);else return i.lanes=t.lanes,Pi(t,i,c)}return Zu(t,i,o,l,c)}function jh(t,i,o){var l=i.pendingProps,c=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(ys,Vn),Vn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,It(ys,Vn),Vn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,It(ys,Vn),Vn|=l}else p!==null?(l=p.baseLanes|o,i.memoizedState=null):l=o,It(ys,Vn),Vn|=l;return wn(t,i,c,o),i.child}function Yh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Zu(t,i,o,l,c){var p=bn(o)?Ar:_n.current;return p=cs(i,p),gs(i,c),o=Hu(t,i,o,l,p,c),l=Vu(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Pi(t,i,c)):(kt&&l&&wu(i),i.flags|=1,wn(t,i,o,c),i.child)}function qh(t,i,o,l,c){if(bn(o)){var p=!0;ya(i)}else p=!1;if(gs(i,c),i.stateNode===null)ka(t,i),Fh(i,o,l),qu(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var B=M.context,re=o.contextType;typeof re=="object"&&re!==null?re=Yn(re):(re=bn(o)?Ar:_n.current,re=cs(i,re));var Se=o.getDerivedStateFromProps,Ee=typeof Se=="function"||typeof M.getSnapshotBeforeUpdate=="function";Ee||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||B!==re)&&Oh(i,M,l,re),ir=!1;var ye=i.memoizedState;M.state=ye,ba(i,l,M,c),B=i.memoizedState,D!==l||ye!==B||Cn.current||ir?(typeof Se=="function"&&(Yu(i,o,Se,l),B=i.memoizedState),(D=ir||Nh(i,o,D,l,ye,B,re))?(Ee||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),M.props=l,M.state=B,M.context=re,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,ch(t,i),D=i.memoizedProps,re=i.type===i.elementType?D:ti(i.type,D),M.props=re,Ee=i.pendingProps,ye=M.context,B=o.contextType,typeof B=="object"&&B!==null?B=Yn(B):(B=bn(o)?Ar:_n.current,B=cs(i,B));var Ve=o.getDerivedStateFromProps;(Se=typeof Ve=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==Ee||ye!==B)&&Oh(i,M,l,B),ir=!1,ye=i.memoizedState,M.state=ye,ba(i,l,M,c);var qe=i.memoizedState;D!==Ee||ye!==qe||Cn.current||ir?(typeof Ve=="function"&&(Yu(i,o,Ve,l),qe=i.memoizedState),(re=ir||Nh(i,o,re,l,ye,qe,B)||!1)?(Se||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,qe,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,qe,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&ye===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ye===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=qe),M.props=l,M.state=qe,M.context=B,l=re):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&ye===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ye===t.memoizedState||(i.flags|=1024),l=!1)}return Qu(t,i,o,l,p,c)}function Qu(t,i,o,l,c,p){Yh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Jd(i,o,!1),Pi(t,i,p);l=i.stateNode,z0.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=ps(i,t.child,null,p),i.child=ps(i,null,D,p)):wn(t,i,D,p),i.memoizedState=l.state,c&&Jd(i,o,!0),i.child}function $h(t){var i=t.stateNode;i.pendingContext?Zd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Zd(t,i.context,!1),Nu(t,i.containerInfo)}function Kh(t,i,o,l,c){return hs(),Cu(c),i.flags|=256,wn(t,i,o,l),i.child}var Ju={dehydrated:null,treeContext:null,retryLane:0};function ec(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zh(t,i,o){var l=i.pendingProps,c=Ht.current,p=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(c&2)!==0),D?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),It(Ht,c&1),t===null)return Ru(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=i.mode,p=i.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Ka(M,l,0,null),t=Fr(t,l,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=ec(o),i.memoizedState=Ju,t):tc(i,M));if(c=t.memoizedState,c!==null&&(D=c.dehydrated,D!==null))return B0(t,i,M,l,D,c,o);if(p){p=l.fallback,M=i.mode,c=t.child,D=c.sibling;var B={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=cr(c,B),l.subtreeFlags=c.subtreeFlags&14680064),D!==null?p=cr(D,p):(p=Fr(p,M,o,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,M=t.child.memoizedState,M=M===null?ec(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~o,i.memoizedState=Ju,l}return p=t.child,t=p.sibling,l=cr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function tc(t,i){return i=Ka({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Oa(t,i,o,l){return l!==null&&Cu(l),ps(i,t.child,null,o),t=tc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function B0(t,i,o,l,c,p,M){if(o)return i.flags&256?(i.flags&=-257,l=$u(Error(n(422))),Oa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,c=i.mode,l=Ka({mode:"visible",children:l.children},c,0,null),p=Fr(p,c,M,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&ps(i,t.child,null,M),i.child.memoizedState=ec(M),i.memoizedState=Ju,p);if((i.mode&1)===0)return Oa(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var D=l.dgst;return l=D,p=Error(n(419)),l=$u(p,l,void 0),Oa(t,i,M,l)}if(D=(M&t.childLanes)!==0,Pn||D){if(l=sn,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==p.retryLane&&(p.retryLane=c,Ci(t,c),ri(l,t,c,-1))}return _c(),l=$u(Error(n(421))),Oa(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=J0.bind(null,t),c._reactRetry=i,null):(t=p.treeContext,Hn=Ji(c.nextSibling),Bn=i,kt=!0,ei=null,t!==null&&(Xn[jn++]=Ai,Xn[jn++]=Ri,Xn[jn++]=Rr,Ai=t.id,Ri=t.overflow,Rr=i),i=tc(i,l.children),i.flags|=4096,i)}function Qh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Du(t.return,i,o)}function nc(t,i,o,l,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=c)}function Jh(t,i,o){var l=i.pendingProps,c=l.revealOrder,p=l.tail;if(wn(t,i,l.children,o),l=Ht.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qh(t,o,i);else if(t.tag===19)Qh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(It(Ht,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Pa(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),nc(i,!1,c,o,p);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Pa(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}nc(i,!0,o,null,p);break;case"together":nc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ka(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Pi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Dr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=cr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=cr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function H0(t,i,o){switch(i.tag){case 3:$h(i),hs();break;case 5:hh(i);break;case 1:bn(i.type)&&ya(i);break;case 4:Nu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;It(Aa,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(It(Ht,Ht.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Zh(t,i,o):(It(Ht,Ht.current&1),t=Pi(t,i,o),t!==null?t.sibling:null);It(Ht,Ht.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Jh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),It(Ht,Ht.current),l)break;return null;case 22:case 23:return i.lanes=0,jh(t,i,o)}return Pi(t,i,o)}var ep,ic,tp,np;ep=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ic=function(){},tp=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Pr(mi.current);var p=null;switch(o){case"input":c=O(t,c),l=O(t,l),p=[];break;case"select":c=se({},c,{value:void 0}),l=se({},l,{value:void 0}),p=[];break;case"textarea":c=w(t,c),l=w(t,l),p=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=_a)}ze(o,l);var M;o=null;for(re in c)if(!l.hasOwnProperty(re)&&c.hasOwnProperty(re)&&c[re]!=null)if(re==="style"){var D=c[re];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(a.hasOwnProperty(re)?p||(p=[]):(p=p||[]).push(re,null));for(re in l){var B=l[re];if(D=c!=null?c[re]:void 0,l.hasOwnProperty(re)&&B!==D&&(B!=null||D!=null))if(re==="style")if(D){for(M in D)!D.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in B)B.hasOwnProperty(M)&&D[M]!==B[M]&&(o||(o={}),o[M]=B[M])}else o||(p||(p=[]),p.push(re,o)),o=B;else re==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,D=D?D.__html:void 0,B!=null&&D!==B&&(p=p||[]).push(re,B)):re==="children"?typeof B!="string"&&typeof B!="number"||(p=p||[]).push(re,""+B):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(a.hasOwnProperty(re)?(B!=null&&re==="onScroll"&&Nt("scroll",t),p||D===B||(p=[])):(p=p||[]).push(re,B))}o&&(p=p||[]).push("style",o);var re=p;(i.updateQueue=re)&&(i.flags|=4)}},np=function(t,i,o,l){o!==l&&(i.flags|=4)};function Ao(t,i){if(!kt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function xn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function V0(t,i,o){var l=i.pendingProps;switch(Tu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return bn(i.type)&&xa(),xn(i),null;case 3:return l=i.stateNode,_s(),Ft(Cn),Ft(_n),ku(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(wa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(pc(ei),ei=null))),ic(t,i),xn(i),null;case 5:Fu(i);var c=Pr(So.current);if(o=i.type,t!==null&&i.stateNode!=null)tp(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return xn(i),null}if(t=Pr(mi.current),wa(i)){l=i.stateNode,o=i.type;var p=i.memoizedProps;switch(l[pi]=i,l[go]=p,t=(i.mode&1)!==0,o){case"dialog":Nt("cancel",l),Nt("close",l);break;case"iframe":case"object":case"embed":Nt("load",l);break;case"video":case"audio":for(c=0;c<ho.length;c++)Nt(ho[c],l);break;case"source":Nt("error",l);break;case"img":case"image":case"link":Nt("error",l),Nt("load",l);break;case"details":Nt("toggle",l);break;case"input":jt(l,p),Nt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Nt("invalid",l);break;case"textarea":te(l,p),Nt("invalid",l)}ze(o,p),c=null;for(var M in p)if(p.hasOwnProperty(M)){var D=p[M];M==="children"?typeof D=="string"?l.textContent!==D&&(p.suppressHydrationWarning!==!0&&ga(l.textContent,D,t),c=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&ga(l.textContent,D,t),c=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Nt("scroll",l)}switch(o){case"input":bt(l),Ze(l,p,!0);break;case"textarea":bt(l),xe(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=_a)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ge(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[pi]=i,t[go]=l,ep(t,i,!1,!1),i.stateNode=t;e:{switch(M=Ue(o,l),o){case"dialog":Nt("cancel",t),Nt("close",t),c=l;break;case"iframe":case"object":case"embed":Nt("load",t),c=l;break;case"video":case"audio":for(c=0;c<ho.length;c++)Nt(ho[c],t);c=l;break;case"source":Nt("error",t),c=l;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),c=l;break;case"details":Nt("toggle",t),c=l;break;case"input":jt(t,l),c=O(t,l),Nt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=se({},l,{value:void 0}),Nt("invalid",t);break;case"textarea":te(t,l),c=w(t,l),Nt("invalid",t);break;default:c=l}ze(o,c),D=c;for(p in D)if(D.hasOwnProperty(p)){var B=D[p];p==="style"?Ne(t,B):p==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Be(t,B)):p==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&ct(t,B):typeof B=="number"&&ct(t,""+B):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?B!=null&&p==="onScroll"&&Nt("scroll",t):B!=null&&L(t,p,B,M))}switch(o){case"input":bt(t),Ze(t,l,!1);break;case"textarea":bt(t),xe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Pe(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?P(t,!!l.multiple,p,!1):l.defaultValue!=null&&P(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=_a)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(t&&i.stateNode!=null)np(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Pr(So.current),Pr(mi.current),wa(i)){if(l=i.stateNode,o=i.memoizedProps,l[pi]=i,(p=l.nodeValue!==o)&&(t=Bn,t!==null))switch(t.tag){case 3:ga(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ga(l.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[pi]=i,i.stateNode=l}return xn(i),null;case 13:if(Ft(Ht),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&Hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)sh(),hs(),i.flags|=98560,p=!1;else if(p=wa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[pi]=i}else hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xn(i),p=!1}else ei!==null&&(pc(ei),ei=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ht.current&1)!==0?Qt===0&&(Qt=3):_c())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return _s(),ic(t,i),t===null&&po(i.stateNode.containerInfo),xn(i),null;case 10:return Lu(i.type._context),xn(i),null;case 17:return bn(i.type)&&xa(),xn(i),null;case 19:if(Ft(Ht),p=i.memoizedState,p===null)return xn(i),null;if(l=(i.flags&128)!==0,M=p.rendering,M===null)if(l)Ao(p,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Pa(t),M!==null){for(i.flags|=128,Ao(p,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)p=o,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return It(Ht,Ht.current&1|2),i.child}t=t.sibling}p.tail!==null&&Q()>Ss&&(i.flags|=128,l=!0,Ao(p,!1),i.lanes=4194304)}else{if(!l)if(t=Pa(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ao(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!kt)return xn(i),null}else 2*Q()-p.renderingStartTime>Ss&&o!==1073741824&&(i.flags|=128,l=!0,Ao(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Q(),i.sibling=null,o=Ht.current,It(Ht,l?o&1|2:o&1),i):(xn(i),null);case 22:case 23:return gc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Vn&1073741824)!==0&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function G0(t,i){switch(Tu(i),i.tag){case 1:return bn(i.type)&&xa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return _s(),Ft(Cn),Ft(_n),ku(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Fu(i),null;case 13:if(Ft(Ht),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));hs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ft(Ht),null;case 4:return _s(),null;case 10:return Lu(i.type._context),null;case 22:case 23:return gc(),null;case 24:return null;default:return null}}var za=!1,yn=!1,W0=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function xs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Xt(t,i,l)}else o.current=null}function rc(t,i,o){try{o()}catch(l){Xt(t,i,l)}}var ip=!1;function X0(t,i){if(gu=sa,t=Nd(),lu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,D=-1,B=-1,re=0,Se=0,Ee=t,ye=null;t:for(;;){for(var Ve;Ee!==o||c!==0&&Ee.nodeType!==3||(D=M+c),Ee!==p||l!==0&&Ee.nodeType!==3||(B=M+l),Ee.nodeType===3&&(M+=Ee.nodeValue.length),(Ve=Ee.firstChild)!==null;)ye=Ee,Ee=Ve;for(;;){if(Ee===t)break t;if(ye===o&&++re===c&&(D=M),ye===p&&++Se===l&&(B=M),(Ve=Ee.nextSibling)!==null)break;Ee=ye,ye=Ee.parentNode}Ee=Ve}o=D===-1||B===-1?null:{start:D,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(_u={focusedElem:t,selectionRange:o},sa=!1,Xe=i;Xe!==null;)if(i=Xe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Xe=t;else for(;Xe!==null;){i=Xe;try{var qe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var Qe=qe.memoizedProps,Yt=qe.memoizedState,Z=i.stateNode,W=Z.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:ti(i.type,Qe),Yt);Z.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(be){Xt(i,i.return,be)}if(t=i.sibling,t!==null){t.return=i.return,Xe=t;break}Xe=i.return}return qe=ip,ip=!1,qe}function Ro(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var p=c.destroy;c.destroy=void 0,p!==void 0&&rc(i,o,p)}c=c.next}while(c!==l)}}function Ba(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function sc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function rp(t){var i=t.alternate;i!==null&&(t.alternate=null,rp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[pi],delete i[go],delete i[Su],delete i[R0],delete i[C0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sp(t){return t.tag===5||t.tag===3||t.tag===4}function op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=_a));else if(l!==4&&(t=t.child,t!==null))for(oc(t,i,o),t=t.sibling;t!==null;)oc(t,i,o),t=t.sibling}function ac(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(ac(t,i,o),t=t.sibling;t!==null;)ac(t,i,o),t=t.sibling}var fn=null,ni=!1;function sr(t,i,o){for(o=o.child;o!==null;)ap(t,i,o),o=o.sibling}function ap(t,i,o){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(rt,o)}catch{}switch(o.tag){case 5:yn||xs(o,i);case 6:var l=fn,c=ni;fn=null,sr(t,i,o),fn=l,ni=c,fn!==null&&(ni?(t=fn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):fn.removeChild(o.stateNode));break;case 18:fn!==null&&(ni?(t=fn,o=o.stateNode,t.nodeType===8?yu(t.parentNode,o):t.nodeType===1&&yu(t,o),ro(t)):yu(fn,o.stateNode));break;case 4:l=fn,c=ni,fn=o.stateNode.containerInfo,ni=!0,sr(t,i,o),fn=l,ni=c;break;case 0:case 11:case 14:case 15:if(!yn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var p=c,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&rc(o,i,M),c=c.next}while(c!==l)}sr(t,i,o);break;case 1:if(!yn&&(xs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(D){Xt(o,i,D)}sr(t,i,o);break;case 21:sr(t,i,o);break;case 22:o.mode&1?(yn=(l=yn)||o.memoizedState!==null,sr(t,i,o),yn=l):sr(t,i,o);break;default:sr(t,i,o)}}function lp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new W0),i.forEach(function(l){var c=e_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function ii(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var p=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:fn=D.stateNode,ni=!1;break e;case 3:fn=D.stateNode.containerInfo,ni=!0;break e;case 4:fn=D.stateNode.containerInfo,ni=!0;break e}D=D.return}if(fn===null)throw Error(n(160));ap(p,M,c),fn=null,ni=!1;var B=c.alternate;B!==null&&(B.return=null),c.return=null}catch(re){Xt(c,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)up(i,t),i=i.sibling}function up(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(i,t),_i(t),l&4){try{Ro(3,t,t.return),Ba(3,t)}catch(Qe){Xt(t,t.return,Qe)}try{Ro(5,t,t.return)}catch(Qe){Xt(t,t.return,Qe)}}break;case 1:ii(i,t),_i(t),l&512&&o!==null&&xs(o,o.return);break;case 5:if(ii(i,t),_i(t),l&512&&o!==null&&xs(o,o.return),t.flags&32){var c=t.stateNode;try{ct(c,"")}catch(Qe){Xt(t,t.return,Qe)}}if(l&4&&(c=t.stateNode,c!=null)){var p=t.memoizedProps,M=o!==null?o.memoizedProps:p,D=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&lt(c,p),Ue(D,M);var re=Ue(D,p);for(M=0;M<B.length;M+=2){var Se=B[M],Ee=B[M+1];Se==="style"?Ne(c,Ee):Se==="dangerouslySetInnerHTML"?Be(c,Ee):Se==="children"?ct(c,Ee):L(c,Se,Ee,re)}switch(D){case"input":ut(c,p);break;case"textarea":ve(c,p);break;case"select":var ye=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!p.multiple;var Ve=p.value;Ve!=null?P(c,!!p.multiple,Ve,!1):ye!==!!p.multiple&&(p.defaultValue!=null?P(c,!!p.multiple,p.defaultValue,!0):P(c,!!p.multiple,p.multiple?[]:"",!1))}c[go]=p}catch(Qe){Xt(t,t.return,Qe)}}break;case 6:if(ii(i,t),_i(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,p=t.memoizedProps;try{c.nodeValue=p}catch(Qe){Xt(t,t.return,Qe)}}break;case 3:if(ii(i,t),_i(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{ro(i.containerInfo)}catch(Qe){Xt(t,t.return,Qe)}break;case 4:ii(i,t),_i(t);break;case 13:ii(i,t),_i(t),c=t.child,c.flags&8192&&(p=c.memoizedState!==null,c.stateNode.isHidden=p,!p||c.alternate!==null&&c.alternate.memoizedState!==null||(cc=Q())),l&4&&lp(t);break;case 22:if(Se=o!==null&&o.memoizedState!==null,t.mode&1?(yn=(re=yn)||Se,ii(i,t),yn=re):ii(i,t),_i(t),l&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!Se&&(t.mode&1)!==0)for(Xe=t,Se=t.child;Se!==null;){for(Ee=Xe=Se;Xe!==null;){switch(ye=Xe,Ve=ye.child,ye.tag){case 0:case 11:case 14:case 15:Ro(4,ye,ye.return);break;case 1:xs(ye,ye.return);var qe=ye.stateNode;if(typeof qe.componentWillUnmount=="function"){l=ye,o=ye.return;try{i=l,qe.props=i.memoizedProps,qe.state=i.memoizedState,qe.componentWillUnmount()}catch(Qe){Xt(l,o,Qe)}}break;case 5:xs(ye,ye.return);break;case 22:if(ye.memoizedState!==null){dp(Ee);continue}}Ve!==null?(Ve.return=ye,Xe=Ve):dp(Ee)}Se=Se.sibling}e:for(Se=null,Ee=t;;){if(Ee.tag===5){if(Se===null){Se=Ee;try{c=Ee.stateNode,re?(p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=Ee.stateNode,B=Ee.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,D.style.display=Re("display",M))}catch(Qe){Xt(t,t.return,Qe)}}}else if(Ee.tag===6){if(Se===null)try{Ee.stateNode.nodeValue=re?"":Ee.memoizedProps}catch(Qe){Xt(t,t.return,Qe)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===t)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===t)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===t)break e;Se===Ee&&(Se=null),Ee=Ee.return}Se===Ee&&(Se=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:ii(i,t),_i(t),l&4&&lp(t);break;case 21:break;default:ii(i,t),_i(t)}}function _i(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(sp(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(ct(c,""),l.flags&=-33);var p=op(t);ac(t,p,c);break;case 3:case 4:var M=l.stateNode.containerInfo,D=op(t);oc(t,D,M);break;default:throw Error(n(161))}}catch(B){Xt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function j0(t,i,o){Xe=t,cp(t)}function cp(t,i,o){for(var l=(t.mode&1)!==0;Xe!==null;){var c=Xe,p=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||za;if(!M){var D=c.alternate,B=D!==null&&D.memoizedState!==null||yn;D=za;var re=yn;if(za=M,(yn=B)&&!re)for(Xe=c;Xe!==null;)M=Xe,B=M.child,M.tag===22&&M.memoizedState!==null?hp(c):B!==null?(B.return=M,Xe=B):hp(c);for(;p!==null;)Xe=p,cp(p),p=p.sibling;Xe=c,za=D,yn=re}fp(t)}else(c.subtreeFlags&8772)!==0&&p!==null?(p.return=c,Xe=p):fp(t)}}function fp(t){for(;Xe!==null;){var i=Xe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:yn||Ba(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!yn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:ti(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&dh(i,p,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}dh(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var Se=re.memoizedState;if(Se!==null){var Ee=Se.dehydrated;Ee!==null&&ro(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}yn||i.flags&512&&sc(i)}catch(ye){Xt(i,i.return,ye)}}if(i===t){Xe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Xe=o;break}Xe=i.return}}function dp(t){for(;Xe!==null;){var i=Xe;if(i===t){Xe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Xe=o;break}Xe=i.return}}function hp(t){for(;Xe!==null;){var i=Xe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ba(4,i)}catch(B){Xt(i,o,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(B){Xt(i,c,B)}}var p=i.return;try{sc(i)}catch(B){Xt(i,p,B)}break;case 5:var M=i.return;try{sc(i)}catch(B){Xt(i,M,B)}}}catch(B){Xt(i,i.return,B)}if(i===t){Xe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Xe=D;break}Xe=i.return}}var Y0=Math.ceil,Ha=C.ReactCurrentDispatcher,lc=C.ReactCurrentOwner,$n=C.ReactCurrentBatchConfig,wt=0,sn=null,qt=null,dn=0,Vn=0,ys=er(0),Qt=0,Co=null,Dr=0,Va=0,uc=0,bo=null,Ln=null,cc=0,Ss=1/0,Li=null,Ga=!1,fc=null,or=null,Wa=!1,ar=null,Xa=0,Po=0,dc=null,ja=-1,Ya=0;function Tn(){return(wt&6)!==0?Q():ja!==-1?ja:ja=Q()}function lr(t){return(t.mode&1)===0?1:(wt&2)!==0&&dn!==0?dn&-dn:P0.transition!==null?(Ya===0&&(Ya=Dt()),Ya):(t=Et,t!==0||(t=window.event,t=t===void 0?16:md(t.type)),t)}function ri(t,i,o,l){if(50<Po)throw Po=0,dc=null,Error(n(185));tn(t,o,l),((wt&2)===0||t!==sn)&&(t===sn&&((wt&2)===0&&(Va|=o),Qt===4&&ur(t,dn)),Dn(t,l),o===1&&wt===0&&(i.mode&1)===0&&(Ss=Q()+500,Sa&&nr()))}function Dn(t,i){var o=t.callbackNode;En(t,i);var l=mn(t,t===sn?dn:0);if(l===0)o!==null&&A(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&A(o),i===1)t.tag===0?b0(mp.bind(null,t)):eh(mp.bind(null,t)),T0(function(){(wt&6)===0&&nr()}),o=null;else{switch(hi(l)){case 1:o=we;break;case 4:o=Fe;break;case 16:o=He;break;case 536870912:o=st;break;default:o=He}o=Ep(o,pp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function pp(t,i){if(ja=-1,Ya=0,(wt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ms()&&t.callbackNode!==o)return null;var l=mn(t,t===sn?dn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=qa(t,l);else{i=l;var c=wt;wt|=2;var p=_p();(sn!==t||dn!==i)&&(Li=null,Ss=Q()+500,Ur(t,i));do try{K0();break}catch(D){gp(t,D)}while(!0);Pu(),Ha.current=p,wt=c,qt!==null?i=0:(sn=null,dn=0,i=Qt)}if(i!==0){if(i===2&&(c=Ei(t),c!==0&&(l=c,i=hc(t,c))),i===1)throw o=Co,Ur(t,0),ur(t,l),Dn(t,Q()),o;if(i===6)ur(t,l);else{if(c=t.current.alternate,(l&30)===0&&!q0(c)&&(i=qa(t,l),i===2&&(p=Ei(t),p!==0&&(l=p,i=hc(t,p))),i===1))throw o=Co,Ur(t,0),ur(t,l),Dn(t,Q()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Nr(t,Ln,Li);break;case 3:if(ur(t,l),(l&130023424)===l&&(i=cc+500-Q(),10<i)){if(mn(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){Tn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=xu(Nr.bind(null,t,Ln,Li),i);break}Nr(t,Ln,Li);break;case 4:if(ur(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-ft(l);p=1<<M,M=i[M],M>c&&(c=M),l&=~p}if(l=c,l=Q()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Y0(l/1960))-l,10<l){t.timeoutHandle=xu(Nr.bind(null,t,Ln,Li),l);break}Nr(t,Ln,Li);break;case 5:Nr(t,Ln,Li);break;default:throw Error(n(329))}}}return Dn(t,Q()),t.callbackNode===o?pp.bind(null,t):null}function hc(t,i){var o=bo;return t.current.memoizedState.isDehydrated&&(Ur(t,i).flags|=256),t=qa(t,i),t!==2&&(i=Ln,Ln=o,i!==null&&pc(i)),t}function pc(t){Ln===null?Ln=t:Ln.push.apply(Ln,t)}function q0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],p=c.getSnapshot;c=c.value;try{if(!Jn(p(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(t,i){for(i&=~uc,i&=~Va,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ft(i),l=1<<o;t[o]=-1,i&=~l}}function mp(t){if((wt&6)!==0)throw Error(n(327));Ms();var i=mn(t,0);if((i&1)===0)return Dn(t,Q()),null;var o=qa(t,i);if(t.tag!==0&&o===2){var l=Ei(t);l!==0&&(i=l,o=hc(t,l))}if(o===1)throw o=Co,Ur(t,0),ur(t,i),Dn(t,Q()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Nr(t,Ln,Li),Dn(t,Q()),null}function mc(t,i){var o=wt;wt|=1;try{return t(i)}finally{wt=o,wt===0&&(Ss=Q()+500,Sa&&nr())}}function Ir(t){ar!==null&&ar.tag===0&&(wt&6)===0&&Ms();var i=wt;wt|=1;var o=$n.transition,l=Et;try{if($n.transition=null,Et=1,t)return t()}finally{Et=l,$n.transition=o,wt=i,(wt&6)===0&&nr()}}function gc(){Vn=ys.current,Ft(ys)}function Ur(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,w0(o)),qt!==null)for(o=qt.return;o!==null;){var l=o;switch(Tu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&xa();break;case 3:_s(),Ft(Cn),Ft(_n),ku();break;case 5:Fu(l);break;case 4:_s();break;case 13:Ft(Ht);break;case 19:Ft(Ht);break;case 10:Lu(l.type._context);break;case 22:case 23:gc()}o=o.return}if(sn=t,qt=t=cr(t.current,null),dn=Vn=i,Qt=0,Co=null,uc=Va=Dr=0,Ln=bo=null,br!==null){for(i=0;i<br.length;i++)if(o=br[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,p=o.pending;if(p!==null){var M=p.next;p.next=c,l.next=M}o.pending=l}br=null}return t}function gp(t,i){do{var o=qt;try{if(Pu(),La.current=Na,Da){for(var l=Vt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Da=!1}if(Lr=0,rn=Zt=Vt=null,Mo=!1,Eo=0,lc.current=null,o===null||o.return===null){Qt=1,Co=i,qt=null;break}e:{var p=t,M=o.return,D=o,B=i;if(i=dn,D.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var re=B,Se=D,Ee=Se.tag;if((Se.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ve=Hh(M);if(Ve!==null){Ve.flags&=-257,Vh(Ve,M,D,p,i),Ve.mode&1&&Bh(p,re,i),i=Ve,B=re;var qe=i.updateQueue;if(qe===null){var Qe=new Set;Qe.add(B),i.updateQueue=Qe}else qe.add(B);break e}else{if((i&1)===0){Bh(p,re,i),_c();break e}B=Error(n(426))}}else if(kt&&D.mode&1){var Yt=Hh(M);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Vh(Yt,M,D,p,i),Cu(vs(B,D));break e}}p=B=vs(B,D),Qt!==4&&(Qt=2),bo===null?bo=[p]:bo.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Z=kh(p,B,i);fh(p,Z);break e;case 1:D=B;var W=p.type,ee=p.stateNode;if((p.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(or===null||!or.has(ee)))){p.flags|=65536,i&=-i,p.lanes|=i;var be=zh(p,D,i);fh(p,be);break e}}p=p.return}while(p!==null)}xp(o)}catch(Je){i=Je,qt===o&&o!==null&&(qt=o=o.return);continue}break}while(!0)}function _p(){var t=Ha.current;return Ha.current=Na,t===null?Na:t}function _c(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),sn===null||(Dr&268435455)===0&&(Va&268435455)===0||ur(sn,dn)}function qa(t,i){var o=wt;wt|=2;var l=_p();(sn!==t||dn!==i)&&(Li=null,Ur(t,i));do try{$0();break}catch(c){gp(t,c)}while(!0);if(Pu(),wt=o,Ha.current=l,qt!==null)throw Error(n(261));return sn=null,dn=0,Qt}function $0(){for(;qt!==null;)vp(qt)}function K0(){for(;qt!==null&&!j();)vp(qt)}function vp(t){var i=Mp(t.alternate,t,Vn);t.memoizedProps=t.pendingProps,i===null?xp(t):qt=i,lc.current=null}function xp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=V0(o,i,Vn),o!==null){qt=o;return}}else{if(o=G0(o,i),o!==null){o.flags&=32767,qt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=t}while(i!==null);Qt===0&&(Qt=5)}function Nr(t,i,o){var l=Et,c=$n.transition;try{$n.transition=null,Et=1,Z0(t,i,o,l)}finally{$n.transition=c,Et=l}return null}function Z0(t,i,o,l){do Ms();while(ar!==null);if((wt&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(cn(t,p),t===sn&&(qt=sn=null,dn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Wa||(Wa=!0,Ep(He,function(){return Ms(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=$n.transition,$n.transition=null;var M=Et;Et=1;var D=wt;wt|=4,lc.current=null,X0(t,o),up(o,t),_0(_u),sa=!!gu,_u=gu=null,t.current=o,j0(o),ne(),wt=D,Et=M,$n.transition=p}else t.current=o;if(Wa&&(Wa=!1,ar=t,Xa=c),p=t.pendingLanes,p===0&&(or=null),St(o.stateNode),Dn(t,Q()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ga)throw Ga=!1,t=fc,fc=null,t;return(Xa&1)!==0&&t.tag!==0&&Ms(),p=t.pendingLanes,(p&1)!==0?t===dc?Po++:(Po=0,dc=t):Po=0,nr(),null}function Ms(){if(ar!==null){var t=hi(Xa),i=$n.transition,o=Et;try{if($n.transition=null,Et=16>t?16:t,ar===null)var l=!1;else{if(t=ar,ar=null,Xa=0,(wt&6)!==0)throw Error(n(331));var c=wt;for(wt|=4,Xe=t.current;Xe!==null;){var p=Xe,M=p.child;if((Xe.flags&16)!==0){var D=p.deletions;if(D!==null){for(var B=0;B<D.length;B++){var re=D[B];for(Xe=re;Xe!==null;){var Se=Xe;switch(Se.tag){case 0:case 11:case 15:Ro(8,Se,p)}var Ee=Se.child;if(Ee!==null)Ee.return=Se,Xe=Ee;else for(;Xe!==null;){Se=Xe;var ye=Se.sibling,Ve=Se.return;if(rp(Se),Se===re){Xe=null;break}if(ye!==null){ye.return=Ve,Xe=ye;break}Xe=Ve}}}var qe=p.alternate;if(qe!==null){var Qe=qe.child;if(Qe!==null){qe.child=null;do{var Yt=Qe.sibling;Qe.sibling=null,Qe=Yt}while(Qe!==null)}}Xe=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Xe=M;else e:for(;Xe!==null;){if(p=Xe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ro(9,p,p.return)}var Z=p.sibling;if(Z!==null){Z.return=p.return,Xe=Z;break e}Xe=p.return}}var W=t.current;for(Xe=W;Xe!==null;){M=Xe;var ee=M.child;if((M.subtreeFlags&2064)!==0&&ee!==null)ee.return=M,Xe=ee;else e:for(M=W;Xe!==null;){if(D=Xe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Ba(9,D)}}catch(Je){Xt(D,D.return,Je)}if(D===M){Xe=null;break e}var be=D.sibling;if(be!==null){be.return=D.return,Xe=be;break e}Xe=D.return}}if(wt=c,nr(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(rt,t)}catch{}l=!0}return l}finally{Et=o,$n.transition=i}}return!1}function yp(t,i,o){i=vs(o,i),i=kh(t,i,1),t=rr(t,i,1),i=Tn(),t!==null&&(tn(t,1,i),Dn(t,i))}function Xt(t,i,o){if(t.tag===3)yp(t,t,o);else for(;i!==null;){if(i.tag===3){yp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(or===null||!or.has(l))){t=vs(o,t),t=zh(i,t,1),i=rr(i,t,1),t=Tn(),i!==null&&(tn(i,1,t),Dn(i,t));break}}i=i.return}}function Q0(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=Tn(),t.pingedLanes|=t.suspendedLanes&o,sn===t&&(dn&o)===o&&(Qt===4||Qt===3&&(dn&130023424)===dn&&500>Q()-cc?Ur(t,0):uc|=o),Dn(t,i)}function Sp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Wt,Wt<<=1,(Wt&130023424)===0&&(Wt=4194304)));var o=Tn();t=Ci(t,i),t!==null&&(tn(t,i,o),Dn(t,o))}function J0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Sp(t,o)}function e_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Sp(t,o)}var Mp;Mp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Cn.current)Pn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Pn=!1,H0(t,i,o);Pn=(t.flags&131072)!==0}else Pn=!1,kt&&(i.flags&1048576)!==0&&th(i,Ea,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;ka(t,i),t=i.pendingProps;var c=cs(i,_n.current);gs(i,o),c=Hu(null,i,l,t,c,o);var p=Vu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,bn(l)?(p=!0,ya(i)):p=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Uu(i),c.updater=Fa,i.stateNode=c,c._reactInternals=i,qu(i,l,t,o),i=Qu(null,i,l,!0,p,o)):(i.tag=0,kt&&p&&wu(i),wn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(ka(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=n_(l),t=ti(l,t),c){case 0:i=Zu(null,i,l,t,o);break e;case 1:i=qh(null,i,l,t,o);break e;case 11:i=Gh(null,i,l,t,o);break e;case 14:i=Wh(null,i,l,ti(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ti(l,c),Zu(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ti(l,c),qh(t,i,l,c,o);case 3:e:{if($h(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,c=p.element,ch(t,i),ba(i,l,null,o);var M=i.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){c=vs(Error(n(423)),i),i=Kh(t,i,l,o,c);break e}else if(l!==c){c=vs(Error(n(424)),i),i=Kh(t,i,l,o,c);break e}else for(Hn=Ji(i.stateNode.containerInfo.firstChild),Bn=i,kt=!0,ei=null,o=lh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(hs(),l===c){i=Pi(t,i,o);break e}wn(t,i,l,o)}i=i.child}return i;case 5:return hh(i),t===null&&Ru(i),l=i.type,c=i.pendingProps,p=t!==null?t.memoizedProps:null,M=c.children,vu(l,c)?M=null:p!==null&&vu(l,p)&&(i.flags|=32),Yh(t,i),wn(t,i,M,o),i.child;case 6:return t===null&&Ru(i),null;case 13:return Zh(t,i,o);case 4:return Nu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ps(i,null,l,o):wn(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ti(l,c),Gh(t,i,l,c,o);case 7:return wn(t,i,i.pendingProps,o),i.child;case 8:return wn(t,i,i.pendingProps.children,o),i.child;case 12:return wn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,p=i.memoizedProps,M=c.value,It(Aa,l._currentValue),l._currentValue=M,p!==null)if(Jn(p.value,M)){if(p.children===c.children&&!Cn.current){i=Pi(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){M=p.child;for(var B=D.firstContext;B!==null;){if(B.context===l){if(p.tag===1){B=bi(-1,o&-o),B.tag=2;var re=p.updateQueue;if(re!==null){re=re.shared;var Se=re.pending;Se===null?B.next=B:(B.next=Se.next,Se.next=B),re.pending=B}}p.lanes|=o,B=p.alternate,B!==null&&(B.lanes|=o),Du(p.return,o,i),D.lanes|=o;break}B=B.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),Du(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}wn(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,gs(i,o),c=Yn(c),l=l(c),i.flags|=1,wn(t,i,l,o),i.child;case 14:return l=i.type,c=ti(l,i.pendingProps),c=ti(l.type,c),Wh(t,i,l,c,o);case 15:return Xh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ti(l,c),ka(t,i),i.tag=1,bn(l)?(t=!0,ya(i)):t=!1,gs(i,o),Fh(i,l,c),qu(i,l,c,o),Qu(null,i,l,!0,t,o);case 19:return Jh(t,i,o);case 22:return jh(t,i,o)}throw Error(n(156,i.tag))};function Ep(t,i){return na(t,i)}function t_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,o,l){return new t_(t,i,o,l)}function vc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function n_(t){if(typeof t=="function")return vc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ie)return 11;if(t===he)return 14}return 2}function cr(t,i){var o=t.alternate;return o===null?(o=Kn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function $a(t,i,o,l,c,p){var M=2;if(l=t,typeof t=="function")vc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case N:return Fr(o.children,c,p,i);case G:M=8,c|=8;break;case b:return t=Kn(12,o,i,c|2),t.elementType=b,t.lanes=p,t;case q:return t=Kn(13,o,i,c),t.elementType=q,t.lanes=p,t;case ue:return t=Kn(19,o,i,c),t.elementType=ue,t.lanes=p,t;case pe:return Ka(o,c,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:M=10;break e;case k:M=9;break e;case ie:M=11;break e;case he:M=14;break e;case oe:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=p,i}function Fr(t,i,o,l){return t=Kn(7,t,l,i),t.lanes=o,t}function Ka(t,i,o,l){return t=Kn(22,t,l,i),t.elementType=pe,t.lanes=o,t.stateNode={isHidden:!1},t}function xc(t,i,o){return t=Kn(6,t,null,i),t.lanes=o,t}function yc(t,i,o){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function i_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gn(0),this.expirationTimes=gn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Sc(t,i,o,l,c,p,M,D,B){return t=new i_(t,i,o,D,B),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Kn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uu(p),t}function r_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function wp(t){if(!t)return tr;t=t._reactInternals;e:{if(di(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(bn(o))return Qd(t,o,i)}return i}function Tp(t,i,o,l,c,p,M,D,B){return t=Sc(o,l,!0,t,c,p,M,D,B),t.context=wp(null),o=t.current,l=Tn(),c=lr(o),p=bi(l,c),p.callback=i??null,rr(o,p,c),t.current.lanes=c,tn(t,c,l),Dn(t,l),t}function Za(t,i,o,l){var c=i.current,p=Tn(),M=lr(c);return o=wp(o),i.context===null?i.context=o:i.pendingContext=o,i=bi(p,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=rr(c,i,M),t!==null&&(ri(t,c,M,p),Ca(t,c,M)),M}function Qa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ap(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Mc(t,i){Ap(t,i),(t=t.alternate)&&Ap(t,i)}function s_(){return null}var Rp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ec(t){this._internalRoot=t}Ja.prototype.render=Ec.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Za(t,i,null,null)},Ja.prototype.unmount=Ec.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ir(function(){Za(null,t,null,null)}),i[wi]=null}};function Ja(t){this._internalRoot=t}Ja.prototype.unstable_scheduleHydration=function(t){if(t){var i=cd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Ki.length&&i!==0&&i<Ki[o].priority;o++);Ki.splice(o,0,t),o===0&&hd(t)}};function wc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cp(){}function o_(t,i,o,l,c){if(c){if(typeof l=="function"){var p=l;l=function(){var re=Qa(M);p.call(re)}}var M=Tp(i,l,t,0,null,!1,!1,"",Cp);return t._reactRootContainer=M,t[wi]=M.current,po(t.nodeType===8?t.parentNode:t),Ir(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var D=l;l=function(){var re=Qa(B);D.call(re)}}var B=Sc(t,0,!1,null,null,!1,!1,"",Cp);return t._reactRootContainer=B,t[wi]=B.current,po(t.nodeType===8?t.parentNode:t),Ir(function(){Za(i,B,o,l)}),B}function tl(t,i,o,l,c){var p=o._reactRootContainer;if(p){var M=p;if(typeof c=="function"){var D=c;c=function(){var B=Qa(M);D.call(B)}}Za(i,M,t,c)}else M=o_(o,i,t,c,l);return Qa(M)}ld=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=_t(i.pendingLanes);o!==0&&(nn(i,o|1),Dn(i,Q()),(wt&6)===0&&(Ss=Q()+500,nr()))}break;case 13:Ir(function(){var l=Ci(t,1);if(l!==null){var c=Tn();ri(l,t,1,c)}}),Mc(t,1)}},$l=function(t){if(t.tag===13){var i=Ci(t,134217728);if(i!==null){var o=Tn();ri(i,t,134217728,o)}Mc(t,134217728)}},ud=function(t){if(t.tag===13){var i=lr(t),o=Ci(t,i);if(o!==null){var l=Tn();ri(o,t,i,l)}Mc(t,i)}},cd=function(){return Et},fd=function(t,i){var o=Et;try{return Et=t,i()}finally{Et=o}},Ae=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=va(l);if(!c)throw Error(n(90));Ct(l),ut(l,c)}}}break;case"textarea":ve(t,o);break;case"select":i=o.value,i!=null&&P(t,!!o.multiple,i,!1)}},mt=mc,Bt=Ir;var a_={usingClientEntryPoint:!1,Events:[_o,ls,va,De,et,mc]},Lo={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},l_={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ea(t),t===null?null:t.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||s_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{rt=nl.inject(l_),Ke=nl}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a_,In.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wc(i))throw Error(n(200));return r_(t,i,null,o)},In.createRoot=function(t,i){if(!wc(t))throw Error(n(299));var o=!1,l="",c=Rp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=Sc(t,1,!1,null,null,o,!1,l,c),t[wi]=i.current,po(t.nodeType===8?t.parentNode:t),new Ec(i)},In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ea(i),t=t===null?null:t.stateNode,t},In.flushSync=function(t){return Ir(t)},In.hydrate=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!0,o)},In.hydrateRoot=function(t,i,o){if(!wc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,p="",M=Rp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Tp(i,null,t,1,o??null,c,!1,p,M),t[wi]=i.current,po(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Ja(i)},In.render=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!1,o)},In.unmountComponentAtNode=function(t){if(!el(t))throw Error(n(40));return t._reactRootContainer?(Ir(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1},In.unstable_batchedUpdates=mc,In.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!el(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return tl(t,i,o,!1,l)},In.version="18.3.1-next-f1338f8080-20240426",In}var Fp;function __(){if(Fp)return Rc.exports;Fp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Rc.exports=g_(),Rc.exports}var Op;function v_(){if(Op)return il;Op=1;var s=__();return il.createRoot=s.createRoot,il.hydrateRoot=s.hydrateRoot,il}var x_=v_();const y_=Xm(x_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jm=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var M_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=Ut.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:u,iconNode:f,...d},h)=>Ut.createElement("svg",{ref:h,...M_,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:jm("lucide",a),...d},[...f.map(([m,v])=>Ut.createElement(m,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=(s,e)=>{const n=Ut.forwardRef(({className:r,...a},u)=>Ut.createElement(E_,{ref:u,iconNode:e,className:jm(`lucide-${S_(s)}`,r),...a}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],Ym=kn("Atom",w_);/**
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
 */const Y_=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],kp=kn("X",Y_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],$_=kn("Zap",q_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kf="174",K_=0,zp=1,Z_=2,qm=1,$m=2,Oi=3,Sr=0,Nn=1,ki=2,xr=0,Bs=1,Bp=2,Hp=3,Vp=4,Q_=5,jr=100,J_=101,ev=102,tv=103,nv=104,iv=200,rv=201,sv=202,ov=203,uf=204,cf=205,av=206,lv=207,uv=208,cv=209,fv=210,dv=211,hv=212,pv=213,mv=214,ff=0,df=1,hf=2,Gs=3,pf=4,mf=5,gf=6,_f=7,Km=0,gv=1,_v=2,yr=0,vv=1,xv=2,yv=3,Sv=4,Mv=5,Ev=6,wv=7,Zm=300,Ws=301,Xs=302,vf=303,xf=304,Hl=306,yf=1e3,qr=1001,Sf=1002,ci=1003,Tv=1004,rl=1005,xi=1006,Pc=1007,$r=1008,Gi=1009,Qm=1010,Jm=1011,Go=1012,Zf=1013,Zr=1014,Bi=1015,jo=1016,Qf=1017,Jf=1018,js=1020,eg=35902,tg=1021,ng=1022,ui=1023,ig=1024,rg=1025,Hs=1026,Ys=1027,sg=1028,ed=1029,og=1030,td=1031,nd=1033,Cl=33776,bl=33777,Pl=33778,Ll=33779,Mf=35840,Ef=35841,wf=35842,Tf=35843,Af=36196,Rf=37492,Cf=37496,bf=37808,Pf=37809,Lf=37810,Df=37811,If=37812,Uf=37813,Nf=37814,Ff=37815,Of=37816,kf=37817,zf=37818,Bf=37819,Hf=37820,Vf=37821,Dl=36492,Gf=36494,Wf=36495,ag=36283,Xf=36284,jf=36285,Yf=36286,Av=3200,Rv=3201,lg=0,Cv=1,vr="",Qn="srgb",qs="srgb-linear",Nl="linear",Pt="srgb",Es=7680,Gp=519,bv=512,Pv=513,Lv=514,ug=515,Dv=516,Iv=517,Uv=518,Nv=519,Wp=35044,Xp="300 es",Hi=2e3,Fl=2001;class Ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jp=1234567;const Bo=Math.PI/180,Wo=180/Math.PI;function Zs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[n&63|128]+Sn[n>>8&255]+"-"+Sn[n>>16&255]+Sn[n>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function vt(s,e,n){return Math.max(e,Math.min(n,s))}function id(s,e){return(s%e+e)%e}function Fv(s,e,n,r,a){return r+(s-e)*(a-r)/(n-e)}function Ov(s,e,n){return s!==e?(n-s)/(e-s):0}function Ho(s,e,n){return(1-n)*s+n*e}function kv(s,e,n,r){return Ho(s,e,1-Math.exp(-n*r))}function zv(s,e=1){return e-Math.abs(id(s,e*2)-e)}function Bv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function Hv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function Vv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Gv(s,e){return s+Math.random()*(e-s)}function Wv(s){return s*(.5-Math.random())}function Xv(s){s!==void 0&&(jp=s);let e=jp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jv(s){return s*Bo}function Yv(s){return s*Wo}function qv(s){return(s&s-1)===0&&s!==0}function $v(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Kv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zv(s,e,n,r,a){const u=Math.cos,f=Math.sin,d=u(n/2),h=f(n/2),m=u((e+r)/2),v=f((e+r)/2),g=u((e-r)/2),x=f((e-r)/2),S=u((r-e)/2),E=f((r-e)/2);switch(a){case"XYX":s.set(d*v,h*g,h*x,d*m);break;case"YZY":s.set(h*x,d*v,h*g,d*m);break;case"ZXZ":s.set(h*g,h*x,d*v,d*m);break;case"XZX":s.set(d*v,h*E,h*S,d*m);break;case"YXY":s.set(h*S,d*v,h*E,d*m);break;case"ZYZ":s.set(h*E,h*S,d*v,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Os(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Vo={DEG2RAD:Bo,RAD2DEG:Wo,generateUUID:Zs,clamp:vt,euclideanModulo:id,mapLinear:Fv,inverseLerp:Ov,lerp:Ho,damp:kv,pingpong:zv,smoothstep:Bv,smootherstep:Hv,randInt:Vv,randFloat:Gv,randFloatSpread:Wv,seededRandom:Xv,degToRad:jv,radToDeg:Yv,isPowerOfTwo:qv,ceilPowerOfTwo:$v,floorPowerOfTwo:Kv,setQuaternionFromProperEuler:Zv,normalize:An,denormalize:Os};class Rt{constructor(e=0,n=0){Rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,n,r,a,u,f,d,h,m){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,h,m)}set(e,n,r,a,u,f,d,h,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=u,v[5]=h,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],h=r[6],m=r[1],v=r[4],g=r[7],x=r[2],S=r[5],E=r[8],T=a[0],y=a[3],_=a[6],I=a[1],L=a[4],C=a[7],X=a[2],F=a[5],N=a[8];return u[0]=f*T+d*I+h*X,u[3]=f*y+d*L+h*F,u[6]=f*_+d*C+h*N,u[1]=m*T+v*I+g*X,u[4]=m*y+v*L+g*F,u[7]=m*_+v*C+g*N,u[2]=x*T+S*I+E*X,u[5]=x*y+S*L+E*F,u[8]=x*_+S*C+E*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],h=e[6],m=e[7],v=e[8];return n*f*v-n*d*m-r*u*v+r*d*h+a*u*m-a*f*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],h=e[6],m=e[7],v=e[8],g=v*f-d*m,x=d*h-v*u,S=m*u-f*h,E=n*g+r*x+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(a*m-v*r)*T,e[2]=(d*r-a*f)*T,e[3]=x*T,e[4]=(v*n-a*h)*T,e[5]=(a*u-d*n)*T,e[6]=S*T,e[7]=(r*h-m*n)*T,e[8]=(f*n-r*u)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const h=Math.cos(u),m=Math.sin(u);return this.set(r*h,r*m,-r*(h*f+m*d)+f+e,-a*m,a*h,-a*(-m*f+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Lc.makeScale(e,n)),this}rotate(e){return this.premultiply(Lc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Lc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lc=new dt;function cg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qv(){const s=Ol("canvas");return s.style.display="block",s}const Yp={};function Gr(s){s in Yp||(Yp[s]=!0,console.warn(s))}function Jv(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function ex(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tx(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qp=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$p=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nx(){const s={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Pt&&(a.r=Vi(a.r),a.g=Vi(a.g),a.b=Vi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Pt&&(a.r=Vs(a.r),a.g=Vs(a.g),a.b=Vs(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===vr?Nl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[qs]:{primaries:e,whitePoint:r,transfer:Nl,toXYZ:qp,fromXYZ:$p,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:r,transfer:Pt,toXYZ:qp,fromXYZ:$p,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),s}const At=nx();function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ws;class ix{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ws===void 0&&(ws=Ol("canvas")),ws.width=e.width,ws.height=e.height;const r=ws.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ws}return n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ol("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Vi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Vi(n[r]/255)*255):n[r]=Vi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rx=0;class rd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Zs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Dc(a[f].image)):u.push(Dc(a[f]))}else u=Dc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Dc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ix.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sx=0;class Fn extends Ks{constructor(e=Fn.DEFAULT_IMAGE,n=Fn.DEFAULT_MAPPING,r=qr,a=qr,u=xi,f=$r,d=ui,h=Gi,m=Fn.DEFAULT_ANISOTROPY,v=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Zs(),this.name="",this.source=new rd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yf:e.x=e.x-Math.floor(e.x);break;case qr:e.x=e.x<0?0:1;break;case Sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yf:e.y=e.y-Math.floor(e.y);break;case qr:e.y=e.y<0?0:1;break;case Sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Zm;Fn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,r=0,a=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const h=e.elements,m=h[0],v=h[4],g=h[8],x=h[1],S=h[5],E=h[9],T=h[2],y=h[6],_=h[10];if(Math.abs(v-x)<.01&&Math.abs(g-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+T)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,C=(S+1)/2,X=(_+1)/2,F=(v+x)/4,N=(g+T)/4,G=(E+y)/4;return L>C&&L>X?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=F/r,u=N/r):C>X?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=F/a,u=G/a):X<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(X),r=N/u,a=G/u),this.set(r,a,u,n),this}let I=Math.sqrt((y-E)*(y-E)+(g-T)*(g-T)+(x-v)*(x-v));return Math.abs(I)<.001&&(I=1),this.x=(y-E)/I,this.y=(g-T)/I,this.z=(x-v)/I,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this.w=vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this.w=vt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ox extends Ks{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Fn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new rd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends ox{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class fg extends Fn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ax extends Fn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let h=r[a+0],m=r[a+1],v=r[a+2],g=r[a+3];const x=u[f+0],S=u[f+1],E=u[f+2],T=u[f+3];if(d===0){e[n+0]=h,e[n+1]=m,e[n+2]=v,e[n+3]=g;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=E,e[n+3]=T;return}if(g!==T||h!==x||m!==S||v!==E){let y=1-d;const _=h*x+m*S+v*E+g*T,I=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const X=Math.sqrt(L),F=Math.atan2(X,_*I);y=Math.sin(y*F)/X,d=Math.sin(d*F)/X}const C=d*I;if(h=h*y+x*C,m=m*y+S*C,v=v*y+E*C,g=g*y+T*C,y===1-d){const X=1/Math.sqrt(h*h+m*m+v*v+g*g);h*=X,m*=X,v*=X,g*=X}}e[n]=h,e[n+1]=m,e[n+2]=v,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],h=r[a+1],m=r[a+2],v=r[a+3],g=u[f],x=u[f+1],S=u[f+2],E=u[f+3];return e[n]=d*E+v*g+h*S-m*x,e[n+1]=h*E+v*x+m*g-d*S,e[n+2]=m*E+v*S+d*x-h*g,e[n+3]=v*E-d*g-h*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,h=Math.sin,m=d(r/2),v=d(a/2),g=d(u/2),x=h(r/2),S=h(a/2),E=h(u/2);switch(f){case"XYZ":this._x=x*v*g+m*S*E,this._y=m*S*g-x*v*E,this._z=m*v*E+x*S*g,this._w=m*v*g-x*S*E;break;case"YXZ":this._x=x*v*g+m*S*E,this._y=m*S*g-x*v*E,this._z=m*v*E-x*S*g,this._w=m*v*g+x*S*E;break;case"ZXY":this._x=x*v*g-m*S*E,this._y=m*S*g+x*v*E,this._z=m*v*E+x*S*g,this._w=m*v*g-x*S*E;break;case"ZYX":this._x=x*v*g-m*S*E,this._y=m*S*g+x*v*E,this._z=m*v*E-x*S*g,this._w=m*v*g+x*S*E;break;case"YZX":this._x=x*v*g+m*S*E,this._y=m*S*g+x*v*E,this._z=m*v*E-x*S*g,this._w=m*v*g-x*S*E;break;case"XZY":this._x=x*v*g-m*S*E,this._y=m*S*g-x*v*E,this._z=m*v*E+x*S*g,this._w=m*v*g+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],h=n[9],m=n[2],v=n[6],g=n[10],x=r+d+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-h)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(v-h)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(h+v)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(h+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,h=n._y,m=n._z,v=n._w;return this._x=r*v+f*d+a*m-u*h,this._y=a*v+f*h+u*d-r*m,this._z=u*v+f*m+r*h-a*d,this._w=f*v-r*d-a*h-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const h=1-d*d;if(h<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(h),v=Math.atan2(m,d),g=Math.sin((1-n)*v)/m,x=Math.sin(n*v)/m;return this._w=f*g+this._w*x,this._x=r*g+this._x*x,this._y=a*g+this._y*x,this._z=u*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,r=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,h=e.w,m=2*(f*a-d*r),v=2*(d*n-u*a),g=2*(u*r-f*n);return this.x=n+h*m+f*g-d*v,this.y=r+h*v+d*m-u*g,this.z=a+h*g+u*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,h=n.z;return this.x=a*h-u*d,this.y=u*f-r*h,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ic.copy(this).projectOnVector(e),this.sub(Ic)}reflect(e){return this.sub(Ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ic=new H,Kp=new Yo;class qo{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,si):si.fromBufferAttribute(u,f),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sl.copy(r.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),ol.subVectors(this.max,Io),Ts.subVectors(e.a,Io),As.subVectors(e.b,Io),Rs.subVectors(e.c,Io),dr.subVectors(As,Ts),hr.subVectors(Rs,As),Or.subVectors(Ts,Rs);let n=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Or.z,Or.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Or.z,0,-Or.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Or.y,Or.x,0];return!Uc(n,Ts,As,Rs,ol)||(n=[1,0,0,0,1,0,0,0,1],!Uc(n,Ts,As,Rs,ol))?!1:(al.crossVectors(dr,hr),n=[al.x,al.y,al.z],Uc(n,Ts,As,Rs,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new H,new H,new H,new H,new H,new H,new H,new H],si=new H,sl=new qo,Ts=new H,As=new H,Rs=new H,dr=new H,hr=new H,Or=new H,Io=new H,ol=new H,al=new H,kr=new H;function Uc(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){kr.fromArray(s,u);const d=a.x*Math.abs(kr.x)+a.y*Math.abs(kr.y)+a.z*Math.abs(kr.z),h=e.dot(kr),m=n.dot(kr),v=r.dot(kr);if(Math.max(-Math.max(h,m,v),Math.min(h,m,v))>d)return!1}return!0}const lx=new qo,Uo=new H,Nc=new H;class Vl{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):lx.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Uo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Nc)),this.expandByPoint(Uo.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new H,Fc=new H,ll=new H,pr=new H,Oc=new H,ul=new H,kc=new H;class dg{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Fc.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(Fc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(ll),d=pr.dot(this.direction),h=-pr.dot(ll),m=pr.lengthSq(),v=Math.abs(1-f*f);let g,x,S,E;if(v>0)if(g=f*h-d,x=f*d-h,E=u*v,g>=0)if(x>=-E)if(x<=E){const T=1/v;g*=T,x*=T,S=g*(g+f*x+2*d)+x*(f*g+x+2*h)+m}else x=u,g=Math.max(0,-(f*x+d)),S=-g*g+x*(x+2*h)+m;else x=-u,g=Math.max(0,-(f*x+d)),S=-g*g+x*(x+2*h)+m;else x<=-E?(g=Math.max(0,-(-f*u+d)),x=g>0?-u:Math.min(Math.max(-u,-h),u),S=-g*g+x*(x+2*h)+m):x<=E?(g=0,x=Math.min(Math.max(-u,-h),u),S=x*(x+2*h)+m):(g=Math.max(0,-(f*u+d)),x=g>0?u:Math.min(Math.max(-u,-h),u),S=-g*g+x*(x+2*h)+m);else x=f>0?-u:u,g=Math.max(0,-(f*x+d)),S=-g*g+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Fc).addScaledVector(ll,x),S}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),a=Ii.dot(Ii)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,h=r+f;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,h;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),v>=0?(u=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(u=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),g>=0?(d=(e.min.z-x.z)*g,h=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,h=(e.min.z-x.z)*g),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,a,u){Oc.subVectors(n,e),ul.subVectors(r,e),kc.crossVectors(Oc,ul);let f=this.direction.dot(kc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;pr.subVectors(this.origin,e);const h=d*this.direction.dot(ul.crossVectors(pr,ul));if(h<0)return null;const m=d*this.direction.dot(Oc.cross(pr));if(m<0||h+m>f)return null;const v=-d*pr.dot(kc);return v<0?null:this.at(v/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,n,r,a,u,f,d,h,m,v,g,x,S,E,T,y){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,h,m,v,g,x,S,E,T,y)}set(e,n,r,a,u,f,d,h,m,v,g,x,S,E,T,y){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=u,_[5]=f,_[9]=d,_[13]=h,_[2]=m,_[6]=v,_[10]=g,_[14]=x,_[3]=S,_[7]=E,_[11]=T,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Cs.setFromMatrixColumn(e,0).length(),u=1/Cs.setFromMatrixColumn(e,1).length(),f=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),h=Math.cos(a),m=Math.sin(a),v=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const x=f*v,S=f*g,E=d*v,T=d*g;n[0]=h*v,n[4]=-h*g,n[8]=m,n[1]=S+E*m,n[5]=x-T*m,n[9]=-d*h,n[2]=T-x*m,n[6]=E+S*m,n[10]=f*h}else if(e.order==="YXZ"){const x=h*v,S=h*g,E=m*v,T=m*g;n[0]=x+T*d,n[4]=E*d-S,n[8]=f*m,n[1]=f*g,n[5]=f*v,n[9]=-d,n[2]=S*d-E,n[6]=T+x*d,n[10]=f*h}else if(e.order==="ZXY"){const x=h*v,S=h*g,E=m*v,T=m*g;n[0]=x-T*d,n[4]=-f*g,n[8]=E+S*d,n[1]=S+E*d,n[5]=f*v,n[9]=T-x*d,n[2]=-f*m,n[6]=d,n[10]=f*h}else if(e.order==="ZYX"){const x=f*v,S=f*g,E=d*v,T=d*g;n[0]=h*v,n[4]=E*m-S,n[8]=x*m+T,n[1]=h*g,n[5]=T*m+x,n[9]=S*m-E,n[2]=-m,n[6]=d*h,n[10]=f*h}else if(e.order==="YZX"){const x=f*h,S=f*m,E=d*h,T=d*m;n[0]=h*v,n[4]=T-x*g,n[8]=E*g+S,n[1]=g,n[5]=f*v,n[9]=-d*v,n[2]=-m*v,n[6]=S*g+E,n[10]=x-T*g}else if(e.order==="XZY"){const x=f*h,S=f*m,E=d*h,T=d*m;n[0]=h*v,n[4]=-g,n[8]=m*v,n[1]=x*g+T,n[5]=f*v,n[9]=S*g-E,n[2]=E*g-S,n[6]=d*v,n[10]=T*g+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ux,e,cx)}lookAt(e,n,r){const a=this.elements;return Gn.subVectors(e,n),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),mr.crossVectors(r,Gn),mr.lengthSq()===0&&(Math.abs(r.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),mr.crossVectors(r,Gn)),mr.normalize(),cl.crossVectors(Gn,mr),a[0]=mr.x,a[4]=cl.x,a[8]=Gn.x,a[1]=mr.y,a[5]=cl.y,a[9]=Gn.y,a[2]=mr.z,a[6]=cl.z,a[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],h=r[8],m=r[12],v=r[1],g=r[5],x=r[9],S=r[13],E=r[2],T=r[6],y=r[10],_=r[14],I=r[3],L=r[7],C=r[11],X=r[15],F=a[0],N=a[4],G=a[8],b=a[12],R=a[1],k=a[5],ie=a[9],q=a[13],ue=a[2],he=a[6],oe=a[10],pe=a[14],V=a[3],de=a[7],se=a[11],U=a[15];return u[0]=f*F+d*R+h*ue+m*V,u[4]=f*N+d*k+h*he+m*de,u[8]=f*G+d*ie+h*oe+m*se,u[12]=f*b+d*q+h*pe+m*U,u[1]=v*F+g*R+x*ue+S*V,u[5]=v*N+g*k+x*he+S*de,u[9]=v*G+g*ie+x*oe+S*se,u[13]=v*b+g*q+x*pe+S*U,u[2]=E*F+T*R+y*ue+_*V,u[6]=E*N+T*k+y*he+_*de,u[10]=E*G+T*ie+y*oe+_*se,u[14]=E*b+T*q+y*pe+_*U,u[3]=I*F+L*R+C*ue+X*V,u[7]=I*N+L*k+C*he+X*de,u[11]=I*G+L*ie+C*oe+X*se,u[15]=I*b+L*q+C*pe+X*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],h=e[9],m=e[13],v=e[2],g=e[6],x=e[10],S=e[14],E=e[3],T=e[7],y=e[11],_=e[15];return E*(+u*h*g-a*m*g-u*d*x+r*m*x+a*d*S-r*h*S)+T*(+n*h*S-n*m*x+u*f*x-a*f*S+a*m*v-u*h*v)+y*(+n*m*g-n*d*S-u*f*g+r*f*S+u*d*v-r*m*v)+_*(-a*d*v-n*h*g+n*d*x+a*f*g-r*f*x+r*h*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],h=e[6],m=e[7],v=e[8],g=e[9],x=e[10],S=e[11],E=e[12],T=e[13],y=e[14],_=e[15],I=g*y*m-T*x*m+T*h*S-d*y*S-g*h*_+d*x*_,L=E*x*m-v*y*m-E*h*S+f*y*S+v*h*_-f*x*_,C=v*T*m-E*g*m+E*d*S-f*T*S-v*d*_+f*g*_,X=E*g*h-v*T*h-E*d*x+f*T*x+v*d*y-f*g*y,F=n*I+r*L+a*C+u*X;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return e[0]=I*N,e[1]=(T*x*u-g*y*u-T*a*S+r*y*S+g*a*_-r*x*_)*N,e[2]=(d*y*u-T*h*u+T*a*m-r*y*m-d*a*_+r*h*_)*N,e[3]=(g*h*u-d*x*u-g*a*m+r*x*m+d*a*S-r*h*S)*N,e[4]=L*N,e[5]=(v*y*u-E*x*u+E*a*S-n*y*S-v*a*_+n*x*_)*N,e[6]=(E*h*u-f*y*u-E*a*m+n*y*m+f*a*_-n*h*_)*N,e[7]=(f*x*u-v*h*u+v*a*m-n*x*m-f*a*S+n*h*S)*N,e[8]=C*N,e[9]=(E*g*u-v*T*u-E*r*S+n*T*S+v*r*_-n*g*_)*N,e[10]=(f*T*u-E*d*u+E*r*m-n*T*m-f*r*_+n*d*_)*N,e[11]=(v*d*u-f*g*u-v*r*m+n*g*m+f*r*S-n*d*S)*N,e[12]=X*N,e[13]=(v*T*a-E*g*a+E*r*x-n*T*x-v*r*y+n*g*y)*N,e[14]=(E*d*a-f*T*a-E*r*h+n*T*h+f*r*y-n*d*y)*N,e[15]=(f*g*a-v*d*a+v*r*h-n*g*h-f*r*x+n*d*x)*N,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,h=e.z,m=u*f,v=u*d;return this.set(m*f+r,m*d-a*h,m*h+a*d,0,m*d+a*h,v*d+r,v*h-a*f,0,m*h-a*d,v*h+a*f,u*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,h=n._w,m=u+u,v=f+f,g=d+d,x=u*m,S=u*v,E=u*g,T=f*v,y=f*g,_=d*g,I=h*m,L=h*v,C=h*g,X=r.x,F=r.y,N=r.z;return a[0]=(1-(T+_))*X,a[1]=(S+C)*X,a[2]=(E-L)*X,a[3]=0,a[4]=(S-C)*F,a[5]=(1-(x+_))*F,a[6]=(y+I)*F,a[7]=0,a[8]=(E+L)*N,a[9]=(y-I)*N,a[10]=(1-(x+T))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Cs.set(a[0],a[1],a[2]).length();const f=Cs.set(a[4],a[5],a[6]).length(),d=Cs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const m=1/u,v=1/f,g=1/d;return oi.elements[0]*=m,oi.elements[1]*=m,oi.elements[2]*=m,oi.elements[4]*=v,oi.elements[5]*=v,oi.elements[6]*=v,oi.elements[8]*=g,oi.elements[9]*=g,oi.elements[10]*=g,n.setFromRotationMatrix(oi),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Hi){const h=this.elements,m=2*u/(n-e),v=2*u/(r-a),g=(n+e)/(n-e),x=(r+a)/(r-a);let S,E;if(d===Hi)S=-(f+u)/(f-u),E=-2*f*u/(f-u);else if(d===Fl)S=-f/(f-u),E=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Hi){const h=this.elements,m=1/(n-e),v=1/(r-a),g=1/(f-u),x=(n+e)*m,S=(r+a)*v;let E,T;if(d===Hi)E=(f+u)*g,T=-2*g;else if(d===Fl)E=u*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*v,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=T,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Cs=new H,oi=new zt,ux=new H(0,0,0),cx=new H(1,1,1),mr=new H,cl=new H,Gn=new H,Zp=new zt,Qp=new Yo;class yi{constructor(e=0,n=0,r=0,a=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],h=a[1],m=a[5],v=a[9],g=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(vt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(h,u));break;case"ZYX":this._y=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qp.setFromEuler(this),this.setFromQuaternion(Qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class hg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fx=0;const Jp=new H,bs=new Yo,Ui=new zt,fl=new H,No=new H,dx=new H,hx=new Yo,em=new H(1,0,0),tm=new H(0,1,0),nm=new H(0,0,1),im={type:"added"},px={type:"removed"},Ps={type:"childadded",child:null},zc={type:"childremoved",child:null};class ln extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new H,n=new yi,r=new Yo,a=new H(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new zt},normalMatrix:{value:new dt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(em,e)}rotateY(e){return this.rotateOnAxis(tm,e)}rotateZ(e){return this.rotateOnAxis(nm,e)}translateOnAxis(e,n){return Jp.copy(e).applyQuaternion(this.quaternion),this.position.add(Jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(em,e)}translateY(e){return this.translateOnAxis(tm,e)}translateZ(e){return this.translateOnAxis(nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?fl.copy(e):fl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(No,fl,this.up):Ui.lookAt(fl,No,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),bs.setFromRotationMatrix(Ui),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(im),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(px),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(im),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,dx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,v=h.length;m<v;m++){const g=h[m];u(e.shapes,g)}else u(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(u(e.materials,this.material[h]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(u(e.animations,h))}}if(n){const d=f(e.geometries),h=f(e.materials),m=f(e.textures),v=f(e.images),g=f(e.shapes),x=f(e.skeletons),S=f(e.animations),E=f(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function f(d){const h=[];for(const m in d){const v=d[m];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}ln.DEFAULT_UP=new H(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new H,Ni=new H,Bc=new H,Fi=new H,Ls=new H,Ds=new H,rm=new H,Hc=new H,Vc=new H,Gc=new H,Wc=new Lt,Xc=new Lt,jc=new Lt;class li{constructor(e=new H,n=new H,r=new H){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ai.subVectors(e,n),a.cross(ai);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ai.subVectors(a,n),Ni.subVectors(r,n),Bc.subVectors(e,n);const f=ai.dot(ai),d=ai.dot(Ni),h=ai.dot(Bc),m=Ni.dot(Ni),v=Ni.dot(Bc),g=f*m-d*d;if(g===0)return u.set(0,0,0),null;const x=1/g,S=(m*h-d*v)*x,E=(f*v-d*h)*x;return u.set(1-S-E,E,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,r,a,u,f,d,h){return this.getBarycoord(e,n,r,a,Fi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(u,Fi.x),h.addScaledVector(f,Fi.y),h.addScaledVector(d,Fi.z),h)}static getInterpolatedAttribute(e,n,r,a,u,f){return Wc.setScalar(0),Xc.setScalar(0),jc.setScalar(0),Wc.fromBufferAttribute(e,n),Xc.fromBufferAttribute(e,r),jc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Wc,u.x),f.addScaledVector(Xc,u.y),f.addScaledVector(jc,u.z),f}static isFrontFacing(e,n,r,a){return ai.subVectors(r,n),Ni.subVectors(e,n),ai.cross(Ni).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ai.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return li.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Ls.subVectors(a,r),Ds.subVectors(u,r),Hc.subVectors(e,r);const h=Ls.dot(Hc),m=Ds.dot(Hc);if(h<=0&&m<=0)return n.copy(r);Vc.subVectors(e,a);const v=Ls.dot(Vc),g=Ds.dot(Vc);if(v>=0&&g<=v)return n.copy(a);const x=h*g-v*m;if(x<=0&&h>=0&&v<=0)return f=h/(h-v),n.copy(r).addScaledVector(Ls,f);Gc.subVectors(e,u);const S=Ls.dot(Gc),E=Ds.dot(Gc);if(E>=0&&S<=E)return n.copy(u);const T=S*m-h*E;if(T<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(r).addScaledVector(Ds,d);const y=v*E-S*g;if(y<=0&&g-v>=0&&S-E>=0)return rm.subVectors(u,a),d=(g-v)/(g-v+(S-E)),n.copy(a).addScaledVector(rm,d);const _=1/(y+T+x);return f=T*_,d=x*_,n.copy(r).addScaledVector(Ls,f).addScaledVector(Ds,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Yc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class xt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=At.workingColorSpace){return this.r=e,this.g=n,this.b=r,At.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=At.workingColorSpace){if(e=id(e,1),n=vt(n,0,1),r=vt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Yc(f,u,e+1/3),this.g=Yc(f,u,e),this.b=Yc(f,u,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,n=Qn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const r=pg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return At.fromWorkingColorSpace(Mn.copy(this),e),Math.round(vt(Mn.r*255,0,255))*65536+Math.round(vt(Mn.g*255,0,255))*256+Math.round(vt(Mn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.fromWorkingColorSpace(Mn.copy(this),n);const r=Mn.r,a=Mn.g,u=Mn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let h,m;const v=(d+f)/2;if(d===f)h=0,m=0;else{const g=f-d;switch(m=v<=.5?g/(f+d):g/(2-f-d),f){case r:h=(a-u)/g+(a<u?6:0);break;case a:h=(u-r)/g+2;break;case u:h=(r-a)/g+4;break}h/=6}return e.h=h,e.s=m,e.l=v,e}getRGB(e,n=At.workingColorSpace){return At.fromWorkingColorSpace(Mn.copy(this),n),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Qn){At.fromWorkingColorSpace(Mn.copy(this),e);const n=Mn.r,r=Mn.g,a=Mn.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(dl);const r=Ho(gr.h,dl.h,n),a=Ho(gr.s,dl.s,n),u=Ho(gr.l,dl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new xt;xt.NAMES=pg;let mx=0;class Qs extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Bs,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uf,this.blendDst=cf,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==Sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==uf&&(r.blendSrc=this.blendSrc),this.blendDst!==cf&&(r.blendDst=this.blendDst),this.blendEquation!==jr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const h=u[d];delete h.metadata,f.push(h)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gl extends Qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Km,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new H,hl=new Rt;let gx=0;class fi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gx++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Wp,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Os(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=An(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Os(n,this.array)),n}setX(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Os(n,this.array)),n}setY(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Os(n,this.array)),n}setZ(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Os(n,this.array)),n}setW(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),a=An(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),a=An(a,this.array),u=An(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wp&&(e.usage=this.usage),e}}class mg extends fi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class gg extends fi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class un extends fi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let _x=0;const Zn=new zt,qc=new ln,Is=new H,Wn=new qo,Fo=new qo,an=new H;class On extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cg(e)?gg:mg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new dt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,r){return Zn.makeTranslation(e,n,r),this.applyMatrix4(Zn),this}scale(e,n,r){return Zn.makeScale(e,n,r),this.applyMatrix4(Zn),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new un(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Wn.setFromBufferAttribute(u),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Fo.setFromBufferAttribute(d),this.morphTargetsRelative?(an.addVectors(Wn.min,Fo.min),Wn.expandByPoint(an),an.addVectors(Wn.max,Fo.max),Wn.expandByPoint(an)):(Wn.expandByPoint(Fo.min),Wn.expandByPoint(Fo.max))}Wn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)an.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(an));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],h=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)an.fromBufferAttribute(d,m),h&&(Is.fromBufferAttribute(e,m),an.add(Is)),a=Math.max(a,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],h=[];for(let G=0;G<r.count;G++)d[G]=new H,h[G]=new H;const m=new H,v=new H,g=new H,x=new Rt,S=new Rt,E=new Rt,T=new H,y=new H;function _(G,b,R){m.fromBufferAttribute(r,G),v.fromBufferAttribute(r,b),g.fromBufferAttribute(r,R),x.fromBufferAttribute(u,G),S.fromBufferAttribute(u,b),E.fromBufferAttribute(u,R),v.sub(m),g.sub(m),S.sub(x),E.sub(x);const k=1/(S.x*E.y-E.x*S.y);isFinite(k)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(k),y.copy(g).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(k),d[G].add(T),d[b].add(T),d[R].add(T),h[G].add(y),h[b].add(y),h[R].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let G=0,b=I.length;G<b;++G){const R=I[G],k=R.start,ie=R.count;for(let q=k,ue=k+ie;q<ue;q+=3)_(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const L=new H,C=new H,X=new H,F=new H;function N(G){X.fromBufferAttribute(a,G),F.copy(X);const b=d[G];L.copy(b),L.sub(X.multiplyScalar(X.dot(b))).normalize(),C.crossVectors(F,b);const k=C.dot(h[G])<0?-1:1;f.setXYZW(G,L.x,L.y,L.z,k)}for(let G=0,b=I.length;G<b;++G){const R=I[G],k=R.start,ie=R.count;for(let q=k,ue=k+ie;q<ue;q+=3)N(e.getX(q+0)),N(e.getX(q+1)),N(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new H,u=new H,f=new H,d=new H,h=new H,m=new H,v=new H,g=new H;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,E),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,y),v.subVectors(f,u),g.subVectors(a,u),v.cross(g),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),d.add(v),h.add(v),m.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,u),g.subVectors(a,u),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)an.fromBufferAttribute(e,n),an.normalize(),e.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function e(d,h){const m=d.array,v=d.itemSize,g=d.normalized,x=new m.constructor(h.length*v);let S=0,E=0;for(let T=0,y=h.length;T<y;T++){d.isInterleavedBufferAttribute?S=h[T]*d.data.stride+d.offset:S=h[T]*v;for(let _=0;_<v;_++)x[E++]=m[S++]}return new fi(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new On,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const h=[],m=u[d];for(let v=0,g=m.length;v<g;v++){const x=m[v],S=e(x,r);h.push(S)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,h=f.length;d<h;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let u=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],v=[];for(let g=0,x=m.length;g<x;g++){const S=m[g];v.push(S.toJSON(e.data))}v.length>0&&(a[h]=v,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const u=e.morphAttributes;for(const m in u){const v=[],g=u[m];for(let x=0,S=g.length;x<S;x++)v.push(g[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const g=f[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sm=new zt,zr=new dg,pl=new Vl,om=new H,ml=new H,gl=new H,_l=new H,$c=new H,vl=new H,am=new H,xl=new H;class hn extends ln{constructor(e=new On,n=new Gl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){vl.set(0,0,0);for(let h=0,m=u.length;h<m;h++){const v=d[h],g=u[h];v!==0&&($c.fromBufferAttribute(g,e),f?vl.addScaledVector($c,v):vl.addScaledVector($c.sub(n),v))}n.add(vl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(u),zr.copy(e.ray).recast(e.near),!(pl.containsPoint(zr.origin)===!1&&(zr.intersectSphere(pl,om)===null||zr.origin.distanceToSquared(om)>(e.far-e.near)**2))&&(sm.copy(u).invert(),zr.copy(e.ray).applyMatrix4(sm),!(r.boundingBox!==null&&zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,h=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const y=x[E],_=f[y.materialIndex],I=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=I,X=L;C<X;C+=3){const F=d.getX(C),N=d.getX(C+1),G=d.getX(C+2);a=yl(this,_,e,r,m,v,g,F,N,G),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let y=E,_=T;y<_;y+=3){const I=d.getX(y),L=d.getX(y+1),C=d.getX(y+2);a=yl(this,f,e,r,m,v,g,I,L,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const y=x[E],_=f[y.materialIndex],I=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=I,X=L;C<X;C+=3){const F=C,N=C+1,G=C+2;a=yl(this,_,e,r,m,v,g,F,N,G),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let y=E,_=T;y<_;y+=3){const I=y,L=y+1,C=y+2;a=yl(this,f,e,r,m,v,g,I,L,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function vx(s,e,n,r,a,u,f,d){let h;if(e.side===Nn?h=r.intersectTriangle(f,u,a,!0,d):h=r.intersectTriangle(a,u,f,e.side===Sr,d),h===null)return null;xl.copy(d),xl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(xl);return m<n.near||m>n.far?null:{distance:m,point:xl.clone(),object:s}}function yl(s,e,n,r,a,u,f,d,h,m){s.getVertexPosition(d,ml),s.getVertexPosition(h,gl),s.getVertexPosition(m,_l);const v=vx(s,e,n,r,ml,gl,_l,am);if(v){const g=new H;li.getBarycoord(am,ml,gl,_l,g),a&&(v.uv=li.getInterpolatedAttribute(a,d,h,m,g,new Rt)),u&&(v.uv1=li.getInterpolatedAttribute(u,d,h,m,g,new Rt)),f&&(v.normal=li.getInterpolatedAttribute(f,d,h,m,g,new H),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:h,c:m,normal:new H,materialIndex:0};li.getNormal(ml,gl,_l,x.normal),v.face=x,v.barycoord=g}return v}class $o extends On{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const h=[],m=[],v=[],g=[];let x=0,S=0;E("z","y","x",-1,-1,r,n,e,f,u,0),E("z","y","x",1,-1,r,n,-e,f,u,1),E("x","z","y",1,1,e,r,n,a,f,2),E("x","z","y",1,-1,e,r,-n,a,f,3),E("x","y","z",1,-1,e,n,r,a,u,4),E("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(h),this.setAttribute("position",new un(m,3)),this.setAttribute("normal",new un(v,3)),this.setAttribute("uv",new un(g,2));function E(T,y,_,I,L,C,X,F,N,G,b){const R=C/N,k=X/G,ie=C/2,q=X/2,ue=F/2,he=N+1,oe=G+1;let pe=0,V=0;const de=new H;for(let se=0;se<oe;se++){const U=se*k-q;for(let K=0;K<he;K++){const Me=K*R-ie;de[T]=Me*I,de[y]=U*L,de[_]=ue,m.push(de.x,de.y,de.z),de[T]=0,de[y]=0,de[_]=F>0?1:-1,v.push(de.x,de.y,de.z),g.push(K/N),g.push(1-se/G),pe+=1}}for(let se=0;se<G;se++)for(let U=0;U<N;U++){const K=x+U+he*se,Me=x+U+he*(se+1),$=x+(U+1)+he*(se+1),ce=x+(U+1)+he*se;h.push(K,Me,ce),h.push(Me,$,ce),V+=6}d.addGroup(S,V,b),S+=V,x+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Rn(s){const e={};for(let n=0;n<s.length;n++){const r=$s(s[n]);for(const a in r)e[a]=r[a]}return e}function xx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function _g(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const yx={clone:$s,merge:Rn};var Sx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends Qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sx,this.fragmentShader=Mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=xx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class vg extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new H,lm=new Rt,um=new Rt;class Un extends vg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,lm,um),n.subVectors(um,lm)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bo*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/h,n-=f.offsetY*r/m,a*=f.width/h,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,Ns=1;class Ex extends ln{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Un(Us,Ns,e,n);a.layers=this.layers,this.add(a);const u=new Un(Us,Ns,e,n);u.layers=this.layers,this.add(u);const f=new Un(Us,Ns,e,n);f.layers=this.layers,this.add(f);const d=new Un(Us,Ns,e,n);d.layers=this.layers,this.add(d);const h=new Un(Us,Ns,e,n);h.layers=this.layers,this.add(h);const m=new Un(Us,Ns,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,h]=n;for(const m of n)this.remove(m);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Fl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,h,m,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(g,x,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class xg extends Fn{constructor(e,n,r,a,u,f,d,h,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Ws,super(e,n,r,a,u,f,d,h,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wx extends Qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new xg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new $o(5,5,5),u=new Mr({name:"CubemapFromEquirect",uniforms:$s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Nn,blending:xr});u.uniforms.tEquirect.value=n;const f=new hn(a,u),d=n.minFilter;return n.minFilter===$r&&(n.minFilter=xi),new Ex(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class zi extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tx={type:"move"};class Kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,r),_=this._getHandJoint(m,T);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],x=v.position.distanceTo(g.position),S=.02,E=.005;m.inputState.pinching&&x>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Tx)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new zi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Wl{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new xt(e),this.density=n}clone(){return new Wl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yg extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zc=new H,Ax=new H,Rx=new dt;class Wr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Zc.subVectors(r,n).cross(Ax.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Zc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Rx.getNormalMatrix(e),a=this.coplanarPoint(Zc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Vl,Sl=new H;class sd{constructor(e=new Wr,n=new Wr,r=new Wr,a=new Wr,u=new Wr,f=new Wr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Hi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],h=a[3],m=a[4],v=a[5],g=a[6],x=a[7],S=a[8],E=a[9],T=a[10],y=a[11],_=a[12],I=a[13],L=a[14],C=a[15];if(r[0].setComponents(h-u,x-m,y-S,C-_).normalize(),r[1].setComponents(h+u,x+m,y+S,C+_).normalize(),r[2].setComponents(h+f,x+v,y+E,C+I).normalize(),r[3].setComponents(h-f,x-v,y-E,C-I).normalize(),r[4].setComponents(h-d,x-g,y-T,C-L).normalize(),n===Hi)r[5].setComponents(h+d,x+g,y+T,C+L).normalize();else if(n===Fl)r[5].setComponents(d,g,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Sl.x=a.normal.x>0?e.max.x:e.min.x,Sl.y=a.normal.y>0?e.max.y:e.min.y,Sl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xo extends Qs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kl=new H,zl=new H,cm=new zt,Oo=new dg,Ml=new Vl,Qc=new H,fm=new H;class Bl extends ln{constructor(e=new On,n=new Xo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)kl.fromBufferAttribute(n,a-1),zl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=kl.distanceTo(zl);e.setAttribute("lineDistance",new un(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ml.copy(r.boundingSphere),Ml.applyMatrix4(a),Ml.radius+=u,e.ray.intersectsSphere(Ml)===!1)return;cm.copy(a).invert(),Oo.copy(e.ray).applyMatrix4(cm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const S=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let T=S,y=E-1;T<y;T+=m){const _=v.getX(T),I=v.getX(T+1),L=El(this,e,Oo,h,_,I,T);L&&n.push(L)}if(this.isLineLoop){const T=v.getX(E-1),y=v.getX(S),_=El(this,e,Oo,h,T,y,E-1);_&&n.push(_)}}else{const S=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let T=S,y=E-1;T<y;T+=m){const _=El(this,e,Oo,h,T,T+1,T);_&&n.push(_)}if(this.isLineLoop){const T=El(this,e,Oo,h,E-1,S,E-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function El(s,e,n,r,a,u,f){const d=s.geometry.attributes.position;if(kl.fromBufferAttribute(d,a),zl.fromBufferAttribute(d,u),n.distanceSqToSegment(kl,zl,Qc,fm)>r)return;Qc.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(Qc);if(!(m<e.near||m>e.far))return{distance:m,point:fm.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const dm=new H,hm=new H;class Cx extends Bl{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)dm.fromBufferAttribute(n,a),hm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+dm.distanceTo(hm);e.setAttribute("lineDistance",new un(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sg extends Fn{constructor(e,n,r,a,u,f,d,h,m,v=Hs){if(v!==Hs&&v!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Hs&&(r=Zr),r===void 0&&v===Ys&&(r=js),super(null,a,u,f,d,h,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:ci,this.minFilter=h!==void 0?h:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Xl extends On{constructor(e=1,n=1,r=1,a=32,u=1,f=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:u,openEnded:f,thetaStart:d,thetaLength:h};const m=this;a=Math.floor(a),u=Math.floor(u);const v=[],g=[],x=[],S=[];let E=0;const T=[],y=r/2;let _=0;I(),f===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(x,3)),this.setAttribute("uv",new un(S,2));function I(){const C=new H,X=new H;let F=0;const N=(n-e)/r;for(let G=0;G<=u;G++){const b=[],R=G/u,k=R*(n-e)+e;for(let ie=0;ie<=a;ie++){const q=ie/a,ue=q*h+d,he=Math.sin(ue),oe=Math.cos(ue);X.x=k*he,X.y=-R*r+y,X.z=k*oe,g.push(X.x,X.y,X.z),C.set(he,N,oe).normalize(),x.push(C.x,C.y,C.z),S.push(q,1-R),b.push(E++)}T.push(b)}for(let G=0;G<a;G++)for(let b=0;b<u;b++){const R=T[b][G],k=T[b+1][G],ie=T[b+1][G+1],q=T[b][G+1];(e>0||b!==0)&&(v.push(R,k,q),F+=3),(n>0||b!==u-1)&&(v.push(k,ie,q),F+=3)}m.addGroup(_,F,0),_+=F}function L(C){const X=E,F=new Rt,N=new H;let G=0;const b=C===!0?e:n,R=C===!0?1:-1;for(let ie=1;ie<=a;ie++)g.push(0,y*R,0),x.push(0,R,0),S.push(.5,.5),E++;const k=E;for(let ie=0;ie<=a;ie++){const ue=ie/a*h+d,he=Math.cos(ue),oe=Math.sin(ue);N.x=b*oe,N.y=y*R,N.z=b*he,g.push(N.x,N.y,N.z),x.push(0,R,0),F.x=he*.5+.5,F.y=oe*.5*R+.5,S.push(F.x,F.y),E++}for(let ie=0;ie<a;ie++){const q=X+ie,ue=k+ie;C===!0?v.push(ue,ue+1,q):v.push(ue+1,ue,q),G+=3}m.addGroup(_,G,C===!0?1:2),_+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jl extends On{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),h=Math.floor(a),m=d+1,v=h+1,g=e/d,x=n/h,S=[],E=[],T=[],y=[];for(let _=0;_<v;_++){const I=_*x-f;for(let L=0;L<m;L++){const C=L*g-u;E.push(C,-I,0),T.push(0,0,1),y.push(L/d),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let I=0;I<d;I++){const L=I+m*_,C=I+m*(_+1),X=I+1+m*(_+1),F=I+1+m*_;S.push(L,C,F),S.push(C,X,F)}this.setIndex(S),this.setAttribute("position",new un(E,3)),this.setAttribute("normal",new un(T,3)),this.setAttribute("uv",new un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kr extends On{constructor(e=1,n=32,r=16,a=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:u,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(f+d,Math.PI);let m=0;const v=[],g=new H,x=new H,S=[],E=[],T=[],y=[];for(let _=0;_<=r;_++){const I=[],L=_/r;let C=0;_===0&&f===0?C=.5/n:_===r&&h===Math.PI&&(C=-.5/n);for(let X=0;X<=n;X++){const F=X/n;g.x=-e*Math.cos(a+F*u)*Math.sin(f+L*d),g.y=e*Math.cos(f+L*d),g.z=e*Math.sin(a+F*u)*Math.sin(f+L*d),E.push(g.x,g.y,g.z),x.copy(g).normalize(),T.push(x.x,x.y,x.z),y.push(F+C,1-L),I.push(m++)}v.push(I)}for(let _=0;_<r;_++)for(let I=0;I<n;I++){const L=v[_][I+1],C=v[_][I],X=v[_+1][I],F=v[_+1][I+1];(_!==0||f>0)&&S.push(L,C,F),(_!==r-1||h<Math.PI)&&S.push(C,X,F)}this.setIndex(S),this.setAttribute("position",new un(E,3)),this.setAttribute("normal",new un(T,3)),this.setAttribute("uv",new un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ks extends Qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lg,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bx extends Qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Av,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Px extends Qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class od extends ln{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Jc=new zt,pm=new H,mm=new H;class Mg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sd,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;pm.setFromMatrixPosition(e.matrixWorld),n.position.copy(pm),mm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(mm),n.updateMatrixWorld(),Jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const gm=new zt,ko=new H,ef=new H;class Lx extends Mg{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),ko.setFromMatrixPosition(e.matrixWorld),r.position.copy(ko),ef.copy(r.position),ef.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(ef),r.updateMatrixWorld(),a.makeTranslation(-ko.x,-ko.y,-ko.z),gm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gm)}}class Il extends od{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new Lx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Eg extends vg{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=v*this.view.offsetY,h=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Dx extends Mg{constructor(){super(new Eg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ix extends od{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new Dx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wg extends od{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ux extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Tg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_m(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=_m();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function _m(){return performance.now()}class Nx extends Cx{constructor(e=10,n=10,r=4473924,a=8947848){r=new xt(r),a=new xt(a);const u=n/2,f=e/n,d=e/2,h=[],m=[];for(let x=0,S=0,E=-d;x<=n;x++,E+=f){h.push(-d,0,E,d,0,E),h.push(E,0,-d,E,0,d);const T=x===u?r:a;T.toArray(m,S),S+=3,T.toArray(m,S),S+=3,T.toArray(m,S),S+=3,T.toArray(m,S),S+=3}const v=new On;v.setAttribute("position",new un(h,3)),v.setAttribute("color",new un(m,3));const g=new Xo({vertexColors:!0,toneMapped:!1});super(v,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const vm=new H;let wl,tf;class xm extends ln{constructor(e=new H(0,0,1),n=new H(0,0,0),r=1,a=16776960,u=r*.2,f=u*.2){super(),this.type="ArrowHelper",wl===void 0&&(wl=new On,wl.setAttribute("position",new un([0,0,0,0,1,0],3)),tf=new Xl(0,.5,1,5,1),tf.translate(0,-.5,0)),this.position.copy(n),this.line=new Bl(wl,new Xo({color:a,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new hn(tf,new Gl({color:a,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(r,u,f)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{vm.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(vm,n)}}setLength(e,n=e*.2,r=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(r,n,r),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}function ym(s,e,n,r){const a=Fx(r);switch(n){case tg:return s*e;case ig:return s*e;case rg:return s*e*2;case sg:return s*e/a.components*a.byteLength;case ed:return s*e/a.components*a.byteLength;case og:return s*e*2/a.components*a.byteLength;case td:return s*e*2/a.components*a.byteLength;case ng:return s*e*3/a.components*a.byteLength;case ui:return s*e*4/a.components*a.byteLength;case nd:return s*e*4/a.components*a.byteLength;case Cl:case bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ef:case Tf:return Math.max(s,16)*Math.max(e,8)/4;case Mf:case wf:return Math.max(s,8)*Math.max(e,8)/2;case Af:case Rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Df:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case If:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Bf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Hf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Vf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Dl:case Gf:case Wf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ag:case Xf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case jf:case Yf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Fx(s){switch(s){case Gi:case Qm:return{byteLength:1,components:1};case Go:case Jm:case jo:return{byteLength:2,components:1};case Qf:case Jf:return{byteLength:2,components:4};case Zr:case Zf:case Bi:return{byteLength:4,components:1};case eg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ag(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function Ox(s){const e=new WeakMap;function n(d,h){const m=d.array,v=d.usage,g=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,v),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,h,m){const v=h.array,g=h.updateRanges;if(s.bindBuffer(m,d),g.length===0)s.bufferSubData(m,0,v);else{g.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<g.length;S++){const E=g[x],T=g[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,g[x]=T)}g.length=x+1;for(let S=0,E=g.length;S<E;S++){const T=g[S];s.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function f(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:a,remove:u,update:f}}var kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zx=`#ifdef USE_ALPHAHASH
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
#endif`,Bx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wx=`#ifdef USE_AOMAP
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
#endif`,Xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jx=`#ifdef USE_BATCHING
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
#endif`,Yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zx=`#ifdef USE_IRIDESCENCE
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
#endif`,Qx=`#ifdef USE_BUMPMAP
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
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ay=`#define PI 3.141592653589793
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
} // validated`,ly=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uy=`vec3 transformedNormal = objectNormal;
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
#endif`,cy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,py="gl_FragColor = linearToOutputTexel( gl_FragColor );",my=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gy=`#ifdef USE_ENVMAP
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
#endif`,_y=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vy=`#ifdef USE_ENVMAP
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
#endif`,xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yy=`#ifdef USE_ENVMAP
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
#endif`,Sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,My=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ey=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ty=`#ifdef USE_GRADIENTMAP
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
}`,Ay=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ry=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,by=`uniform bool receiveShadow;
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
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Ly=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ny=`PhysicalMaterial material;
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
#endif`,Fy=`struct PhysicalMaterial {
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
}`,Oy=`
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
#endif`,ky=`#if defined( RE_IndirectDiffuse )
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
#endif`,zy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,By=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yy=`#if defined( USE_POINTS_UV )
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
#endif`,qy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$y=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ky=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jy=`#ifdef USE_MORPHTARGETS
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
#endif`,eS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oS=`#ifdef USE_NORMALMAP
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
#endif`,aS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_S=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,MS=`float getShadowMask() {
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
}`,ES=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wS=`#ifdef USE_SKINNING
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
#endif`,TS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AS=`#ifdef USE_SKINNING
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
#endif`,RS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LS=`#ifdef USE_TRANSMISSION
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
#endif`,DS=`#ifdef USE_TRANSMISSION
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
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kS=`uniform sampler2D t2D;
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
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`#include <common>
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
}`,WS=`#if DEPTH_PACKING == 3200
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
}`,XS=`#define DISTANCE
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
}`,jS=`#define DISTANCE
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
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`uniform float scale;
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
}`,KS=`uniform vec3 diffuse;
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
}`,ZS=`#include <common>
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
}`,QS=`uniform vec3 diffuse;
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
}`,JS=`#define LAMBERT
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
}`,eM=`#define LAMBERT
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
}`,tM=`#define MATCAP
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
}`,nM=`#define MATCAP
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
}`,iM=`#define NORMAL
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
}`,rM=`#define NORMAL
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
}`,sM=`#define PHONG
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
}`,oM=`#define PHONG
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
}`,aM=`#define STANDARD
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
}`,lM=`#define STANDARD
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
}`,uM=`#define TOON
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
}`,cM=`#define TOON
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
}`,fM=`uniform float size;
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
}`,dM=`uniform vec3 diffuse;
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
}`,hM=`#include <common>
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
}`,pM=`uniform vec3 color;
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
}`,mM=`uniform float rotation;
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
}`,gM=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:kx,alphahash_pars_fragment:zx,alphamap_fragment:Bx,alphamap_pars_fragment:Hx,alphatest_fragment:Vx,alphatest_pars_fragment:Gx,aomap_fragment:Wx,aomap_pars_fragment:Xx,batching_pars_vertex:jx,batching_vertex:Yx,begin_vertex:qx,beginnormal_vertex:$x,bsdfs:Kx,iridescence_fragment:Zx,bumpmap_pars_fragment:Qx,clipping_planes_fragment:Jx,clipping_planes_pars_fragment:ey,clipping_planes_pars_vertex:ty,clipping_planes_vertex:ny,color_fragment:iy,color_pars_fragment:ry,color_pars_vertex:sy,color_vertex:oy,common:ay,cube_uv_reflection_fragment:ly,defaultnormal_vertex:uy,displacementmap_pars_vertex:cy,displacementmap_vertex:fy,emissivemap_fragment:dy,emissivemap_pars_fragment:hy,colorspace_fragment:py,colorspace_pars_fragment:my,envmap_fragment:gy,envmap_common_pars_fragment:_y,envmap_pars_fragment:vy,envmap_pars_vertex:xy,envmap_physical_pars_fragment:Py,envmap_vertex:yy,fog_vertex:Sy,fog_pars_vertex:My,fog_fragment:Ey,fog_pars_fragment:wy,gradientmap_pars_fragment:Ty,lightmap_pars_fragment:Ay,lights_lambert_fragment:Ry,lights_lambert_pars_fragment:Cy,lights_pars_begin:by,lights_toon_fragment:Ly,lights_toon_pars_fragment:Dy,lights_phong_fragment:Iy,lights_phong_pars_fragment:Uy,lights_physical_fragment:Ny,lights_physical_pars_fragment:Fy,lights_fragment_begin:Oy,lights_fragment_maps:ky,lights_fragment_end:zy,logdepthbuf_fragment:By,logdepthbuf_pars_fragment:Hy,logdepthbuf_pars_vertex:Vy,logdepthbuf_vertex:Gy,map_fragment:Wy,map_pars_fragment:Xy,map_particle_fragment:jy,map_particle_pars_fragment:Yy,metalnessmap_fragment:qy,metalnessmap_pars_fragment:$y,morphinstance_vertex:Ky,morphcolor_vertex:Zy,morphnormal_vertex:Qy,morphtarget_pars_vertex:Jy,morphtarget_vertex:eS,normal_fragment_begin:tS,normal_fragment_maps:nS,normal_pars_fragment:iS,normal_pars_vertex:rS,normal_vertex:sS,normalmap_pars_fragment:oS,clearcoat_normal_fragment_begin:aS,clearcoat_normal_fragment_maps:lS,clearcoat_pars_fragment:uS,iridescence_pars_fragment:cS,opaque_fragment:fS,packing:dS,premultiplied_alpha_fragment:hS,project_vertex:pS,dithering_fragment:mS,dithering_pars_fragment:gS,roughnessmap_fragment:_S,roughnessmap_pars_fragment:vS,shadowmap_pars_fragment:xS,shadowmap_pars_vertex:yS,shadowmap_vertex:SS,shadowmask_pars_fragment:MS,skinbase_vertex:ES,skinning_pars_vertex:wS,skinning_vertex:TS,skinnormal_vertex:AS,specularmap_fragment:RS,specularmap_pars_fragment:CS,tonemapping_fragment:bS,tonemapping_pars_fragment:PS,transmission_fragment:LS,transmission_pars_fragment:DS,uv_pars_fragment:IS,uv_pars_vertex:US,uv_vertex:NS,worldpos_vertex:FS,background_vert:OS,background_frag:kS,backgroundCube_vert:zS,backgroundCube_frag:BS,cube_vert:HS,cube_frag:VS,depth_vert:GS,depth_frag:WS,distanceRGBA_vert:XS,distanceRGBA_frag:jS,equirect_vert:YS,equirect_frag:qS,linedashed_vert:$S,linedashed_frag:KS,meshbasic_vert:ZS,meshbasic_frag:QS,meshlambert_vert:JS,meshlambert_frag:eM,meshmatcap_vert:tM,meshmatcap_frag:nM,meshnormal_vert:iM,meshnormal_frag:rM,meshphong_vert:sM,meshphong_frag:oM,meshphysical_vert:aM,meshphysical_frag:lM,meshtoon_vert:uM,meshtoon_frag:cM,points_vert:fM,points_frag:dM,shadow_vert:hM,shadow_frag:pM,sprite_vert:mM,sprite_frag:gM},Oe={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},vi={basic:{uniforms:Rn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Rn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Rn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Rn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Rn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Rn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Rn([Oe.points,Oe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Rn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Rn([Oe.common,Oe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Rn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Rn([Oe.sprite,Oe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Rn([Oe.common,Oe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Rn([Oe.lights,Oe.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};vi.physical={uniforms:Rn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Tl={r:0,b:0,g:0},Hr=new yi,_M=new zt;function vM(s,e,n,r,a,u,f){const d=new xt(0);let h=u===!0?0:1,m,v,g=null,x=0,S=null;function E(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?n:e).get(C)),C}function T(L){let C=!1;const X=E(L);X===null?_(d,h):X&&X.isColor&&(_(X,1),C=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,C){const X=E(C);X&&(X.isCubeTexture||X.mapping===Hl)?(v===void 0&&(v=new hn(new $o(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:$s(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,N,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Hr.copy(C.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),v.material.uniforms.envMap.value=X,v.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(_M.makeRotationFromEuler(Hr)),v.material.toneMapped=At.getTransfer(X.colorSpace)!==Pt,(g!==X||x!==X.version||S!==s.toneMapping)&&(v.material.needsUpdate=!0,g=X,x=X.version,S=s.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):X&&X.isTexture&&(m===void 0&&(m=new hn(new jl(2,2),new Mr({name:"BackgroundMaterial",uniforms:$s(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=X,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=At.getTransfer(X.colorSpace)!==Pt,X.matrixAutoUpdate===!0&&X.updateMatrix(),m.material.uniforms.uvTransform.value.copy(X.matrix),(g!==X||x!==X.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,g=X,x=X.version,S=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,C){L.getRGB(Tl,_g(s)),r.buffers.color.setClear(Tl.r,Tl.g,Tl.b,C,f)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,C=1){d.set(L),h=C,_(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,_(d,h)},render:T,addToRenderList:y,dispose:I}}function xM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(R,k,ie,q,ue){let he=!1;const oe=g(q,ie,k);u!==oe&&(u=oe,m(u.object)),he=S(R,q,ie,ue),he&&E(R,q,ie,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(he||f)&&(f=!1,C(R,k,ie,q),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function h(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function v(R){return s.deleteVertexArray(R)}function g(R,k,ie){const q=ie.wireframe===!0;let ue=r[R.id];ue===void 0&&(ue={},r[R.id]=ue);let he=ue[k.id];he===void 0&&(he={},ue[k.id]=he);let oe=he[q];return oe===void 0&&(oe=x(h()),he[q]=oe),oe}function x(R){const k=[],ie=[],q=[];for(let ue=0;ue<n;ue++)k[ue]=0,ie[ue]=0,q[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ie,attributeDivisors:q,object:R,attributes:{},index:null}}function S(R,k,ie,q){const ue=u.attributes,he=k.attributes;let oe=0;const pe=ie.getAttributes();for(const V in pe)if(pe[V].location>=0){const se=ue[V];let U=he[V];if(U===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),se===void 0||se.attribute!==U||U&&se.data!==U.data)return!0;oe++}return u.attributesNum!==oe||u.index!==q}function E(R,k,ie,q){const ue={},he=k.attributes;let oe=0;const pe=ie.getAttributes();for(const V in pe)if(pe[V].location>=0){let se=he[V];se===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));const U={};U.attribute=se,se&&se.data&&(U.data=se.data),ue[V]=U,oe++}u.attributes=ue,u.attributesNum=oe,u.index=q}function T(){const R=u.newAttributes;for(let k=0,ie=R.length;k<ie;k++)R[k]=0}function y(R){_(R,0)}function _(R,k){const ie=u.newAttributes,q=u.enabledAttributes,ue=u.attributeDivisors;ie[R]=1,q[R]===0&&(s.enableVertexAttribArray(R),q[R]=1),ue[R]!==k&&(s.vertexAttribDivisor(R,k),ue[R]=k)}function I(){const R=u.newAttributes,k=u.enabledAttributes;for(let ie=0,q=k.length;ie<q;ie++)k[ie]!==R[ie]&&(s.disableVertexAttribArray(ie),k[ie]=0)}function L(R,k,ie,q,ue,he,oe){oe===!0?s.vertexAttribIPointer(R,k,ie,ue,he):s.vertexAttribPointer(R,k,ie,q,ue,he)}function C(R,k,ie,q){T();const ue=q.attributes,he=ie.getAttributes(),oe=k.defaultAttributeValues;for(const pe in he){const V=he[pe];if(V.location>=0){let de=ue[pe];if(de===void 0&&(pe==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),pe==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){const se=de.normalized,U=de.itemSize,K=e.get(de);if(K===void 0)continue;const Me=K.buffer,$=K.type,ce=K.bytesPerElement,me=$===s.INT||$===s.UNSIGNED_INT||de.gpuType===Zf;if(de.isInterleavedBufferAttribute){const _e=de.data,Pe=_e.stride,Ge=de.offset;if(_e.isInstancedInterleavedBuffer){for(let We=0;We<V.locationSize;We++)_(V.location+We,_e.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let We=0;We<V.locationSize;We++)y(V.location+We);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let We=0;We<V.locationSize;We++)L(V.location+We,U/V.locationSize,$,se,Pe*ce,(Ge+U/V.locationSize*We)*ce,me)}else{if(de.isInstancedBufferAttribute){for(let _e=0;_e<V.locationSize;_e++)_(V.location+_e,de.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let _e=0;_e<V.locationSize;_e++)y(V.location+_e);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let _e=0;_e<V.locationSize;_e++)L(V.location+_e,U/V.locationSize,$,se,U*ce,U/V.locationSize*_e*ce,me)}}else if(oe!==void 0){const se=oe[pe];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(V.location,se);break;case 3:s.vertexAttrib3fv(V.location,se);break;case 4:s.vertexAttrib4fv(V.location,se);break;default:s.vertexAttrib1fv(V.location,se)}}}}I()}function X(){G();for(const R in r){const k=r[R];for(const ie in k){const q=k[ie];for(const ue in q)v(q[ue].object),delete q[ue];delete k[ie]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const k=r[R.id];for(const ie in k){const q=k[ie];for(const ue in q)v(q[ue].object),delete q[ue];delete k[ie]}delete r[R.id]}function N(R){for(const k in r){const ie=r[k];if(ie[R.id]===void 0)continue;const q=ie[R.id];for(const ue in q)v(q[ue].object),delete q[ue];delete ie[R.id]}}function G(){b(),f=!0,u!==a&&(u=a,m(u.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:G,resetDefaultState:b,dispose:X,releaseStatesOfGeometry:F,releaseStatesOfProgram:N,initAttributes:T,enableAttribute:y,disableUnusedAttributes:I}}function yM(s,e,n){let r;function a(m){r=m}function u(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function f(m,v,g){g!==0&&(s.drawArraysInstanced(r,m,v,g),n.update(v,r,g))}function d(m,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,g);let S=0;for(let E=0;E<g;E++)S+=v[E];n.update(S,r,1)}function h(m,v,g,x){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],v[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,g);let E=0;for(let T=0;T<g;T++)E+=v[T]*x[T];n.update(E,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function SM(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(N){return!(N!==ui&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const G=N===jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Gi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Bi&&!G)}function h(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=h(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),X=E>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:h,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:X,maxSamples:F}}function MM(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Wr,d=new dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||r!==0||a;return a=x,r=g.length,S},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,x){n=v(g,x,0)},this.setState=function(g,x,S){const E=g.clippingPlanes,T=g.clipIntersection,y=g.clipShadows,_=s.get(g);if(!a||E===null||E.length===0||u&&!y)u?v(null):m();else{const I=u?0:r,L=I*4;let C=_.clippingState||null;h.value=C,C=v(E,x,L,S);for(let X=0;X!==L;++X)C[X]=n[X];_.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=I}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,x,S,E){const T=g!==null?g.length:0;let y=null;if(T!==0){if(y=h.value,E!==!0||y===null){const _=S+T*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,C=S;L!==T;++L,C+=4)f.copy(g[L]).applyMatrix4(I,d),f.normal.toArray(y,C),y[C+3]=f.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function EM(s){let e=new WeakMap;function n(f,d){return d===vf?f.mapping=Ws:d===xf&&(f.mapping=Xs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===vf||d===xf)if(e.has(f)){const h=e.get(f).texture;return n(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const m=new wx(h.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const zs=4,Sm=[.125,.215,.35,.446,.526,.582],Yr=20,nf=new Eg,Mm=new xt;let rf=null,sf=0,of=0,af=!1;const Xr=(1+Math.sqrt(5))/2,Fs=1/Xr,Em=[new H(-Xr,Fs,0),new H(Xr,Fs,0),new H(-Fs,0,Xr),new H(Fs,0,Xr),new H(0,Xr,-Fs),new H(0,Xr,Fs),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],wM=new H;class wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,u={}){const{size:f=256,position:d=wM}=u;rf=this._renderer.getRenderTarget(),sf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,d),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rf,sf,of),this._renderer.xr.enabled=af,e.scissorTest=!1,Al(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rf=this._renderer.getRenderTarget(),sf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:jo,format:ui,colorSpace:qs,depthBuffer:!1},a=Tm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TM(u)),this._blurMaterial=AM(u,e,n)}return a}_compileMaterial(e){const n=new hn(this._lodPlanes[0],e);this._renderer.compile(n,nf)}_sceneToCubeUV(e,n,r,a,u){const h=new Un(90,1,n,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(Mm),g.toneMapping=yr,g.autoClear=!1;const E=new Gl({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),T=new hn(new $o,E);let y=!1;const _=e.background;_?_.isColor&&(E.color.copy(_),e.background=null,y=!0):(E.color.copy(Mm),y=!0);for(let I=0;I<6;I++){const L=I%3;L===0?(h.up.set(0,m[I],0),h.position.set(u.x,u.y,u.z),h.lookAt(u.x+v[I],u.y,u.z)):L===1?(h.up.set(0,0,m[I]),h.position.set(u.x,u.y,u.z),h.lookAt(u.x,u.y+v[I],u.z)):(h.up.set(0,m[I],0),h.position.set(u.x,u.y,u.z),h.lookAt(u.x,u.y,u.z+v[I]));const C=this._cubeSize;Al(a,L*C,I>2?C:0,C,C),g.setRenderTarget(a),y&&g.render(T,h),g.render(e,h)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=S,g.autoClear=x,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Ws||e.mapping===Xs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new hn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const h=this._cubeSize;Al(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(f,nf)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Em[(a-u-1)%Em.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const h=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new hn(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Yr-1),T=u/E,y=isFinite(u)?1+Math.floor(v*T):Yr;y>Yr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Yr}`);const _=[];let I=0;for(let N=0;N<Yr;++N){const G=N/T,b=Math.exp(-G*G/2);_.push(b),N===0?I+=b:N<y&&(I+=2*b)}for(let N=0;N<_.length;N++)_[N]=_[N]/I;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-r;const C=this._sizeLods[a],X=3*C*(a>L-zs?a-L+zs:0),F=4*(this._cubeSize-C);Al(n,X,F,3*C,2*C),h.setRenderTarget(n),h.render(g,nf)}}function TM(s){const e=[],n=[],r=[];let a=s;const u=s-zs+1+Sm.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let h=1/d;f>s-zs?h=Sm[f-s+zs-1]:f===0&&(h=0),r.push(h);const m=1/(d-2),v=-m,g=1+m,x=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,E=6,T=3,y=2,_=1,I=new Float32Array(T*E*S),L=new Float32Array(y*E*S),C=new Float32Array(_*E*S);for(let F=0;F<S;F++){const N=F%3*2/3-1,G=F>2?0:-1,b=[N,G,0,N+2/3,G,0,N+2/3,G+1,0,N,G,0,N+2/3,G+1,0,N,G+1,0];I.set(b,T*E*F),L.set(x,y*E*F);const R=[F,F,F,F,F,F];C.set(R,_*E*F)}const X=new On;X.setAttribute("position",new fi(I,T)),X.setAttribute("uv",new fi(L,y)),X.setAttribute("faceIndex",new fi(C,_)),e.push(X),a>zs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Tm(s,e,n){const r=new Qr(s,e,n);return r.texture.mapping=Hl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Al(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function AM(s,e,n){const r=new Float32Array(Yr),a=new H(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ad(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Am(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ad(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Rm(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function ad(){return`

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
	`}function RM(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===vf||h===xf,v=h===Ws||h===Xs;if(m||v){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new wm(s)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return m&&S&&S.height>0||v&&S&&a(S)?(n===null&&(n=new wm(s)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d){let h=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&h++;return h===m}function u(d){const h=d.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function CM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Gr("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function bM(s,e,n,r){const a={},u=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(g,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function h(g){const x=g.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function m(g){const x=[],S=g.index,E=g.attributes.position;let T=0;if(S!==null){const I=S.array;T=S.version;for(let L=0,C=I.length;L<C;L+=3){const X=I[L+0],F=I[L+1],N=I[L+2];x.push(X,F,F,N,N,X)}}else if(E!==void 0){const I=E.array;T=E.version;for(let L=0,C=I.length/3-1;L<C;L+=3){const X=L+0,F=L+1,N=L+2;x.push(X,F,F,N,N,X)}}else return;const y=new(cg(x)?gg:mg)(x,1);y.version=T;const _=u.get(g);_&&e.remove(_),u.set(g,y)}function v(g){const x=u.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&m(g)}else m(g);return u.get(g)}return{get:d,update:h,getWireframeAttribute:v}}function PM(s,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function h(x,S){s.drawElements(r,S,u,x*f),n.update(S,r,1)}function m(x,S,E){E!==0&&(s.drawElementsInstanced(r,S,u,x*f,E),n.update(S,r,E))}function v(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,E);let y=0;for(let _=0;_<E;_++)y+=S[_];n.update(y,r,1)}function g(x,S,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)m(x[_]/f,S[_],T[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,T,0,E);let _=0;for(let I=0;I<E;I++)_+=S[I]*T[I];n.update(_,r,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function LM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function DM(s,e,n){const r=new WeakMap,a=new Lt;function u(f,d,h){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let R=function(){G.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var S=R;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),T===!0&&(C=2),y===!0&&(C=3);let X=d.attributes.position.count*C,F=1;X>e.maxTextureSize&&(F=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const N=new Float32Array(X*F*4*g),G=new fg(N,X,F,g);G.type=Bi,G.needsUpdate=!0;const b=C*4;for(let k=0;k<g;k++){const ie=_[k],q=I[k],ue=L[k],he=X*F*4*k;for(let oe=0;oe<ie.count;oe++){const pe=oe*b;E===!0&&(a.fromBufferAttribute(ie,oe),N[he+pe+0]=a.x,N[he+pe+1]=a.y,N[he+pe+2]=a.z,N[he+pe+3]=0),T===!0&&(a.fromBufferAttribute(q,oe),N[he+pe+4]=a.x,N[he+pe+5]=a.y,N[he+pe+6]=a.z,N[he+pe+7]=0),y===!0&&(a.fromBufferAttribute(ue,oe),N[he+pe+8]=a.x,N[he+pe+9]=a.y,N[he+pe+10]=a.z,N[he+pe+11]=ue.itemSize===4?a.w:1)}}x={count:g,texture:G,size:new Rt(X,F)},r.set(d,x),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const T=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function IM(s,e,n,r){let a=new WeakMap;function u(h){const m=r.render.frame,v=h.geometry,g=e.get(h,v);if(a.get(g)!==m&&(e.update(g),a.set(g,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return g}function f(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const Rg=new Fn,Cm=new Sg(1,1),Cg=new fg,bg=new ax,Pg=new xg,bm=[],Pm=[],Lm=new Float32Array(16),Dm=new Float32Array(9),Im=new Float32Array(4);function Js(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=bm[a];if(u===void 0&&(u=new Float32Array(a),bm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function Jt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function en(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Yl(s,e){let n=Pm[e];n===void 0&&(n=new Int32Array(e),Pm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function UM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function NM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2fv(this.addr,e),en(n,e)}}function FM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;s.uniform3fv(this.addr,e),en(n,e)}}function OM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4fv(this.addr,e),en(n,e)}}function kM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Im.set(r),s.uniformMatrix2fv(this.addr,!1,Im),en(n,r)}}function zM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Dm.set(r),s.uniformMatrix3fv(this.addr,!1,Dm),en(n,r)}}function BM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Lm.set(r),s.uniformMatrix4fv(this.addr,!1,Lm),en(n,r)}}function HM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function VM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2iv(this.addr,e),en(n,e)}}function GM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3iv(this.addr,e),en(n,e)}}function WM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4iv(this.addr,e),en(n,e)}}function XM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function jM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2uiv(this.addr,e),en(n,e)}}function YM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3uiv(this.addr,e),en(n,e)}}function qM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4uiv(this.addr,e),en(n,e)}}function $M(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(Cm.compareFunction=ug,u=Cm):u=Rg,n.setTexture2D(e||u,a)}function KM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||bg,a)}function ZM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Pg,a)}function QM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Cg,a)}function JM(s){switch(s){case 5126:return UM;case 35664:return NM;case 35665:return FM;case 35666:return OM;case 35674:return kM;case 35675:return zM;case 35676:return BM;case 5124:case 35670:return HM;case 35667:case 35671:return VM;case 35668:case 35672:return GM;case 35669:case 35673:return WM;case 5125:return XM;case 36294:return jM;case 36295:return YM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return QM}}function eE(s,e){s.uniform1fv(this.addr,e)}function tE(s,e){const n=Js(e,this.size,2);s.uniform2fv(this.addr,n)}function nE(s,e){const n=Js(e,this.size,3);s.uniform3fv(this.addr,n)}function iE(s,e){const n=Js(e,this.size,4);s.uniform4fv(this.addr,n)}function rE(s,e){const n=Js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function sE(s,e){const n=Js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function oE(s,e){const n=Js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function aE(s,e){s.uniform1iv(this.addr,e)}function lE(s,e){s.uniform2iv(this.addr,e)}function uE(s,e){s.uniform3iv(this.addr,e)}function cE(s,e){s.uniform4iv(this.addr,e)}function fE(s,e){s.uniform1uiv(this.addr,e)}function dE(s,e){s.uniform2uiv(this.addr,e)}function hE(s,e){s.uniform3uiv(this.addr,e)}function pE(s,e){s.uniform4uiv(this.addr,e)}function mE(s,e,n){const r=this.cache,a=e.length,u=Yl(n,a);Jt(r,u)||(s.uniform1iv(this.addr,u),en(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||Rg,u[f])}function gE(s,e,n){const r=this.cache,a=e.length,u=Yl(n,a);Jt(r,u)||(s.uniform1iv(this.addr,u),en(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||bg,u[f])}function _E(s,e,n){const r=this.cache,a=e.length,u=Yl(n,a);Jt(r,u)||(s.uniform1iv(this.addr,u),en(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||Pg,u[f])}function vE(s,e,n){const r=this.cache,a=e.length,u=Yl(n,a);Jt(r,u)||(s.uniform1iv(this.addr,u),en(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||Cg,u[f])}function xE(s){switch(s){case 5126:return eE;case 35664:return tE;case 35665:return nE;case 35666:return iE;case 35674:return rE;case 35675:return sE;case 35676:return oE;case 5124:case 35670:return aE;case 35667:case 35671:return lE;case 35668:case 35672:return uE;case 35669:case 35673:return cE;case 5125:return fE;case 36294:return dE;case 36295:return hE;case 36296:return pE;case 35678:case 36198:case 36298:case 36306:case 35682:return mE;case 35679:case 36299:case 36307:return gE;case 35680:case 36300:case 36308:case 36293:return _E;case 36289:case 36303:case 36311:case 36292:return vE}}class yE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=JM(n.type)}}class SE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=xE(n.type)}}class ME{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const lf=/(\w+)(\])?(\[|\.)?/g;function Um(s,e){s.seq.push(e),s.map[e.id]=e}function EE(s,e,n){const r=s.name,a=r.length;for(lf.lastIndex=0;;){const u=lf.exec(r),f=lf.lastIndex;let d=u[1];const h=u[2]==="]",m=u[3];if(h&&(d=d|0),m===void 0||m==="["&&f+2===a){Um(n,m===void 0?new yE(d,s,e):new SE(d,s,e));break}else{let g=n.map[d];g===void 0&&(g=new ME(d),Um(n,g)),n=g}}}class Ul{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);EE(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function Nm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const wE=37297;let TE=0;function AE(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const Fm=new dt;function RE(s){At._getMatrix(Fm,At.workingColorSpace,s);const e=`mat3( ${Fm.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(s)){case Nl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Om(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+AE(s.getShaderSource(e),f)}else return a}function CE(s,e){const n=RE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function bE(s,e){let n;switch(e){case vv:n="Linear";break;case xv:n="Reinhard";break;case yv:n="Cineon";break;case Sv:n="ACESFilmic";break;case Ev:n="AgX";break;case wv:n="Neutral";break;case Mv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Rl=new H;function PE(){At.getLuminanceCoefficients(Rl);const s=Rl.x.toFixed(4),e=Rl.y.toFixed(4),n=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function DE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function IE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function zo(s){return s!==""}function km(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UE=/^[ \t]*#include +<([\w\d./]+)>/gm;function qf(s){return s.replace(UE,FE)}const NE=new Map;function FE(s,e){let n=ht[e];if(n===void 0){const r=NE.get(e);if(r!==void 0)n=ht[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return qf(n)}const OE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bm(s){return s.replace(OE,kE)}function kE(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Hm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function zE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===$m?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function BE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case Hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function HE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function VE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Km:e="ENVMAP_BLENDING_MULTIPLY";break;case gv:e="ENVMAP_BLENDING_MIX";break;case _v:e="ENVMAP_BLENDING_ADD";break}return e}function GE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function WE(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const h=zE(n),m=BE(n),v=HE(n),g=VE(n),x=GE(n),S=LE(n),E=DE(u),T=a.createProgram();let y,_,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(zo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(zo).join(`
`),_.length>0&&(_+=`
`)):(y=[Hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),_=[Hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yr?"#define TONE_MAPPING":"",n.toneMapping!==yr?ht.tonemapping_pars_fragment:"",n.toneMapping!==yr?bE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,CE("linearToOutputTexel",n.outputColorSpace),PE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zo).join(`
`)),f=qf(f),f=km(f,n),f=zm(f,n),d=qf(d),d=km(d,n),d=zm(d,n),f=Bm(f),d=Bm(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",n.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=I+y+f,C=I+_+d,X=Nm(a,a.VERTEX_SHADER,L),F=Nm(a,a.FRAGMENT_SHADER,C);a.attachShader(T,X),a.attachShader(T,F),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function N(k){if(s.debug.checkShaderErrors){const ie=a.getProgramInfoLog(T).trim(),q=a.getShaderInfoLog(X).trim(),ue=a.getShaderInfoLog(F).trim();let he=!0,oe=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,X,F);else{const pe=Om(a,X,"vertex"),V=Om(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ie+`
`+pe+`
`+V)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(q===""||ue==="")&&(oe=!1);oe&&(k.diagnostics={runnable:he,programLog:ie,vertexShader:{log:q,prefix:y},fragmentShader:{log:ue,prefix:_}})}a.deleteShader(X),a.deleteShader(F),G=new Ul(a,T),b=IE(a,T)}let G;this.getUniforms=function(){return G===void 0&&N(this),G};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(T,wE)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=TE++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=X,this.fragmentShader=F,this}let XE=0;class jE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new YE(e),n.set(e,r)),r}}class YE{constructor(e){this.id=XE++,this.code=e,this.usedTimes=0}}function qE(s,e,n,r,a,u,f){const d=new hg,h=new jE,m=new Set,v=[],g=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function y(b,R,k,ie,q){const ue=ie.fog,he=q.geometry,oe=b.isMeshStandardMaterial?ie.environment:null,pe=(b.isMeshStandardMaterial?n:e).get(b.envMap||oe),V=pe&&pe.mapping===Hl?pe.image.height:null,de=E[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const se=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,U=se!==void 0?se.length:0;let K=0;he.morphAttributes.position!==void 0&&(K=1),he.morphAttributes.normal!==void 0&&(K=2),he.morphAttributes.color!==void 0&&(K=3);let Me,$,ce,me;if(de){const gt=vi[de];Me=gt.vertexShader,$=gt.fragmentShader}else Me=b.vertexShader,$=b.fragmentShader,h.update(b),ce=h.getVertexShaderID(b),me=h.getFragmentShaderID(b);const _e=s.getRenderTarget(),Pe=s.state.buffers.depth.getReversed(),Ge=q.isInstancedMesh===!0,We=q.isBatchedMesh===!0,bt=!!b.map,Ct=!!b.matcap,at=!!pe,O=!!b.aoMap,jt=!!b.lightMap,lt=!!b.bumpMap,ut=!!b.normalMap,Ze=!!b.displacementMap,yt=!!b.emissiveMap,$e=!!b.metalnessMap,P=!!b.roughnessMap,w=b.anisotropy>0,te=b.clearcoat>0,ve=b.dispersion>0,xe=b.iridescence>0,ge=b.sheen>0,ke=b.transmission>0,Ie=w&&!!b.anisotropyMap,Be=te&&!!b.clearcoatMap,ct=te&&!!b.clearcoatNormalMap,fe=te&&!!b.clearcoatRoughnessMap,Te=xe&&!!b.iridescenceMap,Re=xe&&!!b.iridescenceThicknessMap,Ne=ge&&!!b.sheenColorMap,Ce=ge&&!!b.sheenRoughnessMap,ze=!!b.specularMap,Ue=!!b.specularColorMap,je=!!b.specularIntensityMap,z=ke&&!!b.transmissionMap,Ae=ke&&!!b.thicknessMap,J=!!b.gradientMap,ae=!!b.alphaMap,Le=b.alphaTest>0,De=!!b.alphaHash,et=!!b.extensions;let mt=yr;b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(mt=s.toneMapping);const Bt={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:Me,fragmentShader:$,defines:b.defines,customVertexShaderID:ce,customFragmentShaderID:me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:We,batchingColor:We&&q._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&q.instanceColor!==null,instancingMorph:Ge&&q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:qs,alphaToCoverage:!!b.alphaToCoverage,map:bt,matcap:Ct,envMap:at,envMapMode:at&&pe.mapping,envMapCubeUVHeight:V,aoMap:O,lightMap:jt,bumpMap:lt,normalMap:ut,displacementMap:x&&Ze,emissiveMap:yt,normalMapObjectSpace:ut&&b.normalMapType===Cv,normalMapTangentSpace:ut&&b.normalMapType===lg,metalnessMap:$e,roughnessMap:P,anisotropy:w,anisotropyMap:Ie,clearcoat:te,clearcoatMap:Be,clearcoatNormalMap:ct,clearcoatRoughnessMap:fe,dispersion:ve,iridescence:xe,iridescenceMap:Te,iridescenceThicknessMap:Re,sheen:ge,sheenColorMap:Ne,sheenRoughnessMap:Ce,specularMap:ze,specularColorMap:Ue,specularIntensityMap:je,transmission:ke,transmissionMap:z,thicknessMap:Ae,gradientMap:J,opaque:b.transparent===!1&&b.blending===Bs&&b.alphaToCoverage===!1,alphaMap:ae,alphaTest:Le,alphaHash:De,combine:b.combine,mapUv:bt&&T(b.map.channel),aoMapUv:O&&T(b.aoMap.channel),lightMapUv:jt&&T(b.lightMap.channel),bumpMapUv:lt&&T(b.bumpMap.channel),normalMapUv:ut&&T(b.normalMap.channel),displacementMapUv:Ze&&T(b.displacementMap.channel),emissiveMapUv:yt&&T(b.emissiveMap.channel),metalnessMapUv:$e&&T(b.metalnessMap.channel),roughnessMapUv:P&&T(b.roughnessMap.channel),anisotropyMapUv:Ie&&T(b.anisotropyMap.channel),clearcoatMapUv:Be&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:ct&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&T(b.sheenRoughnessMap.channel),specularMapUv:ze&&T(b.specularMap.channel),specularColorMapUv:Ue&&T(b.specularColorMap.channel),specularIntensityMapUv:je&&T(b.specularIntensityMap.channel),transmissionMapUv:z&&T(b.transmissionMap.channel),thicknessMapUv:Ae&&T(b.thicknessMap.channel),alphaMapUv:ae&&T(b.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ut||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!he.attributes.uv&&(bt||ae),fog:!!ue,useFog:b.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Pe,skinning:q.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:K,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:mt,decodeVideoTexture:bt&&b.map.isVideoTexture===!0&&At.getTransfer(b.map.colorSpace)===Pt,decodeVideoTextureEmissive:yt&&b.emissiveMap.isVideoTexture===!0&&At.getTransfer(b.emissiveMap.colorSpace)===Pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ki,flipSided:b.side===Nn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:et&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&b.extensions.multiDraw===!0||We)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Bt.vertexUv1s=m.has(1),Bt.vertexUv2s=m.has(2),Bt.vertexUv3s=m.has(3),m.clear(),Bt}function _(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)R.push(k),R.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(I(R,b),L(R,b),R.push(s.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function I(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function L(b,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),b.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),b.push(d.mask)}function C(b){const R=E[b.type];let k;if(R){const ie=vi[R];k=yx.clone(ie.uniforms)}else k=b.uniforms;return k}function X(b,R){let k;for(let ie=0,q=v.length;ie<q;ie++){const ue=v[ie];if(ue.cacheKey===R){k=ue,++k.usedTimes;break}}return k===void 0&&(k=new WE(s,R,b,u),v.push(k)),k}function F(b){if(--b.usedTimes===0){const R=v.indexOf(b);v[R]=v[v.length-1],v.pop(),b.destroy()}}function N(b){h.remove(b)}function G(){h.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:C,acquireProgram:X,releaseProgram:F,releaseShaderCache:N,programs:v,dispose:G}}function $E(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,h){s.get(f)[d]=h}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function KE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Vm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Gm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(g,x,S,E,T,y){let _=s[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:S,groupOrder:E,renderOrder:g.renderOrder,z:T,group:y},s[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=S,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=T,_.group=y),e++,_}function d(g,x,S,E,T,y){const _=f(g,x,S,E,T,y);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):n.push(_)}function h(g,x,S,E,T,y){const _=f(g,x,S,E,T,y);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):n.unshift(_)}function m(g,x){n.length>1&&n.sort(g||KE),r.length>1&&r.sort(x||Vm),a.length>1&&a.sort(x||Vm)}function v(){for(let g=e,x=s.length;g<x;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:h,finish:v,sort:m}}function ZE(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new Gm,s.set(r,[f])):a>=u.length?(f=new Gm,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function QE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new xt};break;case"SpotLight":n={position:new H,direction:new H,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=n,n}}}function JE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let e1=0;function t1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function n1(s){const e=new QE,n=JE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new H);const a=new H,u=new zt,f=new zt;function d(m){let v=0,g=0,x=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,E=0,T=0,y=0,_=0,I=0,L=0,C=0,X=0,F=0,N=0;m.sort(t1);for(let b=0,R=m.length;b<R;b++){const k=m[b],ie=k.color,q=k.intensity,ue=k.distance,he=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)v+=ie.r*q,g+=ie.g*q,x+=ie.b*q;else if(k.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(k.sh.coefficients[oe],q);N++}else if(k.isDirectionalLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const pe=k.shadow,V=n.get(k);V.shadowIntensity=pe.intensity,V.shadowBias=pe.bias,V.shadowNormalBias=pe.normalBias,V.shadowRadius=pe.radius,V.shadowMapSize=pe.mapSize,r.directionalShadow[S]=V,r.directionalShadowMap[S]=he,r.directionalShadowMatrix[S]=k.shadow.matrix,I++}r.directional[S]=oe,S++}else if(k.isSpotLight){const oe=e.get(k);oe.position.setFromMatrixPosition(k.matrixWorld),oe.color.copy(ie).multiplyScalar(q),oe.distance=ue,oe.coneCos=Math.cos(k.angle),oe.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),oe.decay=k.decay,r.spot[T]=oe;const pe=k.shadow;if(k.map&&(r.spotLightMap[X]=k.map,X++,pe.updateMatrices(k),k.castShadow&&F++),r.spotLightMatrix[T]=pe.matrix,k.castShadow){const V=n.get(k);V.shadowIntensity=pe.intensity,V.shadowBias=pe.bias,V.shadowNormalBias=pe.normalBias,V.shadowRadius=pe.radius,V.shadowMapSize=pe.mapSize,r.spotShadow[T]=V,r.spotShadowMap[T]=he,C++}T++}else if(k.isRectAreaLight){const oe=e.get(k);oe.color.copy(ie).multiplyScalar(q),oe.halfWidth.set(k.width*.5,0,0),oe.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=oe,y++}else if(k.isPointLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),oe.distance=k.distance,oe.decay=k.decay,k.castShadow){const pe=k.shadow,V=n.get(k);V.shadowIntensity=pe.intensity,V.shadowBias=pe.bias,V.shadowNormalBias=pe.normalBias,V.shadowRadius=pe.radius,V.shadowMapSize=pe.mapSize,V.shadowCameraNear=pe.camera.near,V.shadowCameraFar=pe.camera.far,r.pointShadow[E]=V,r.pointShadowMap[E]=he,r.pointShadowMatrix[E]=k.shadow.matrix,L++}r.point[E]=oe,E++}else if(k.isHemisphereLight){const oe=e.get(k);oe.skyColor.copy(k.color).multiplyScalar(q),oe.groundColor.copy(k.groundColor).multiplyScalar(q),r.hemi[_]=oe,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const G=r.hash;(G.directionalLength!==S||G.pointLength!==E||G.spotLength!==T||G.rectAreaLength!==y||G.hemiLength!==_||G.numDirectionalShadows!==I||G.numPointShadows!==L||G.numSpotShadows!==C||G.numSpotMaps!==X||G.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=y,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+X-F,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=N,G.directionalLength=S,G.pointLength=E,G.spotLength=T,G.rectAreaLength=y,G.hemiLength=_,G.numDirectionalShadows=I,G.numPointShadows=L,G.numSpotShadows=C,G.numSpotMaps=X,G.numLightProbes=N,r.version=e1++)}function h(m,v){let g=0,x=0,S=0,E=0,T=0;const y=v.matrixWorldInverse;for(let _=0,I=m.length;_<I;_++){const L=m[_];if(L.isDirectionalLight){const C=r.directional[g];C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),g++}else if(L.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),f.identity(),u.copy(L.matrixWorld),u.premultiply(y),f.extractRotation(u),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const C=r.hemi[T];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(y),T++}}}return{setup:d,setupView:h,state:r}}function Wm(s){const e=new n1(s),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function u(v){n.push(v)}function f(v){r.push(v)}function d(){e.setup(n)}function h(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:h,pushLight:u,pushShadow:f}}function i1(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Wm(s),e.set(a,[d])):u>=f.length?(d=new Wm(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const r1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s1=`uniform sampler2D shadow_pass;
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
}`;function o1(s,e,n){let r=new sd;const a=new Rt,u=new Rt,f=new Lt,d=new bx({depthPacking:Rv}),h=new Px,m={},v=n.maxTextureSize,g={[Sr]:Nn,[Nn]:Sr,[ki]:ki},x=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:r1,fragmentShader:s1}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new On;E.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new hn(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qm;let _=this.type;this.render=function(F,N,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const b=s.getRenderTarget(),R=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(xr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const q=_!==Oi&&this.type===Oi,ue=_===Oi&&this.type!==Oi;for(let he=0,oe=F.length;he<oe;he++){const pe=F[he],V=pe.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const de=V.getFrameExtents();if(a.multiply(de),u.copy(V.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(u.x=Math.floor(v/de.x),a.x=u.x*de.x,V.mapSize.x=u.x),a.y>v&&(u.y=Math.floor(v/de.y),a.y=u.y*de.y,V.mapSize.y=u.y)),V.map===null||q===!0||ue===!0){const U=this.type!==Oi?{minFilter:ci,magFilter:ci}:{};V.map!==null&&V.map.dispose(),V.map=new Qr(a.x,a.y,U),V.map.texture.name=pe.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const se=V.getViewportCount();for(let U=0;U<se;U++){const K=V.getViewport(U);f.set(u.x*K.x,u.y*K.y,u.x*K.z,u.y*K.w),ie.viewport(f),V.updateMatrices(pe,U),r=V.getFrustum(),C(N,G,V.camera,pe,this.type)}V.isPointLightShadow!==!0&&this.type===Oi&&I(V,G),V.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(b,R,k)};function I(F,N){const G=e.update(T);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Qr(a.x,a.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(N,null,G,x,T,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(N,null,G,S,T,null)}function L(F,N,G,b){let R=null;const k=G.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)R=k;else if(R=G.isPointLight===!0?h:d,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const ie=R.uuid,q=N.uuid;let ue=m[ie];ue===void 0&&(ue={},m[ie]=ue);let he=ue[q];he===void 0&&(he=R.clone(),ue[q]=he,N.addEventListener("dispose",X)),R=he}if(R.visible=N.visible,R.wireframe=N.wireframe,b===Oi?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:g[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,G.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ie=s.properties.get(R);ie.light=G}return R}function C(F,N,G,b,R){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Oi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,F.matrixWorld);const q=e.update(F),ue=F.material;if(Array.isArray(ue)){const he=q.groups;for(let oe=0,pe=he.length;oe<pe;oe++){const V=he[oe],de=ue[V.materialIndex];if(de&&de.visible){const se=L(F,de,b,R);F.onBeforeShadow(s,F,N,G,q,se,V),s.renderBufferDirect(G,null,q,se,F,V),F.onAfterShadow(s,F,N,G,q,se,V)}}}else if(ue.visible){const he=L(F,ue,b,R);F.onBeforeShadow(s,F,N,G,q,he,null),s.renderBufferDirect(G,null,q,he,F,null),F.onAfterShadow(s,F,N,G,q,he,null)}}const ie=F.children;for(let q=0,ue=ie.length;q<ue;q++)C(ie[q],N,G,b,R)}function X(F){F.target.removeEventListener("dispose",X);for(const G in m){const b=m[G],R=F.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const a1={[ff]:df,[hf]:gf,[pf]:_f,[Gs]:mf,[df]:ff,[gf]:hf,[_f]:pf,[mf]:Gs};function l1(s,e){function n(){let z=!1;const Ae=new Lt;let J=null;const ae=new Lt(0,0,0,0);return{setMask:function(Le){J!==Le&&!z&&(s.colorMask(Le,Le,Le,Le),J=Le)},setLocked:function(Le){z=Le},setClear:function(Le,De,et,mt,Bt){Bt===!0&&(Le*=mt,De*=mt,et*=mt),Ae.set(Le,De,et,mt),ae.equals(Ae)===!1&&(s.clearColor(Le,De,et,mt),ae.copy(Ae))},reset:function(){z=!1,J=null,ae.set(-1,0,0,0)}}}function r(){let z=!1,Ae=!1,J=null,ae=null,Le=null;return{setReversed:function(De){if(Ae!==De){const et=e.get("EXT_clip_control");Ae?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);const mt=Le;Le=null,this.setClear(mt)}Ae=De},getReversed:function(){return Ae},setTest:function(De){De?_e(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(De){J!==De&&!z&&(s.depthMask(De),J=De)},setFunc:function(De){if(Ae&&(De=a1[De]),ae!==De){switch(De){case ff:s.depthFunc(s.NEVER);break;case df:s.depthFunc(s.ALWAYS);break;case hf:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case pf:s.depthFunc(s.EQUAL);break;case mf:s.depthFunc(s.GEQUAL);break;case gf:s.depthFunc(s.GREATER);break;case _f:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ae=De}},setLocked:function(De){z=De},setClear:function(De){Le!==De&&(Ae&&(De=1-De),s.clearDepth(De),Le=De)},reset:function(){z=!1,J=null,ae=null,Le=null,Ae=!1}}}function a(){let z=!1,Ae=null,J=null,ae=null,Le=null,De=null,et=null,mt=null,Bt=null;return{setTest:function(gt){z||(gt?_e(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(gt){Ae!==gt&&!z&&(s.stencilMask(gt),Ae=gt)},setFunc:function(gt,pn,Kt){(J!==gt||ae!==pn||Le!==Kt)&&(s.stencilFunc(gt,pn,Kt),J=gt,ae=pn,Le=Kt)},setOp:function(gt,pn,Kt){(De!==gt||et!==pn||mt!==Kt)&&(s.stencilOp(gt,pn,Kt),De=gt,et=pn,mt=Kt)},setLocked:function(gt){z=gt},setClear:function(gt){Bt!==gt&&(s.clearStencil(gt),Bt=gt)},reset:function(){z=!1,Ae=null,J=null,ae=null,Le=null,De=null,et=null,mt=null,Bt=null}}}const u=new n,f=new r,d=new a,h=new WeakMap,m=new WeakMap;let v={},g={},x=new WeakMap,S=[],E=null,T=!1,y=null,_=null,I=null,L=null,C=null,X=null,F=null,N=new xt(0,0,0),G=0,b=!1,R=null,k=null,ie=null,q=null,ue=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,pe=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(V)[1]),oe=pe>=1):V.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),oe=pe>=2);let de=null,se={};const U=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),Me=new Lt().fromArray(U),$=new Lt().fromArray(K);function ce(z,Ae,J,ae){const Le=new Uint8Array(4),De=s.createTexture();s.bindTexture(z,De),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<J;et++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,ae,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Ae+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return De}const me={};me[s.TEXTURE_2D]=ce(s.TEXTURE_2D,s.TEXTURE_2D,1),me[s.TEXTURE_CUBE_MAP]=ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[s.TEXTURE_2D_ARRAY]=ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),me[s.TEXTURE_3D]=ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),_e(s.DEPTH_TEST),f.setFunc(Gs),lt(!1),ut(zp),_e(s.CULL_FACE),O(xr);function _e(z){v[z]!==!0&&(s.enable(z),v[z]=!0)}function Pe(z){v[z]!==!1&&(s.disable(z),v[z]=!1)}function Ge(z,Ae){return g[z]!==Ae?(s.bindFramebuffer(z,Ae),g[z]=Ae,z===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ae),z===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function We(z,Ae){let J=S,ae=!1;if(z){J=x.get(Ae),J===void 0&&(J=[],x.set(Ae,J));const Le=z.textures;if(J.length!==Le.length||J[0]!==s.COLOR_ATTACHMENT0){for(let De=0,et=Le.length;De<et;De++)J[De]=s.COLOR_ATTACHMENT0+De;J.length=Le.length,ae=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,ae=!0);ae&&s.drawBuffers(J)}function bt(z){return E!==z?(s.useProgram(z),E=z,!0):!1}const Ct={[jr]:s.FUNC_ADD,[J_]:s.FUNC_SUBTRACT,[ev]:s.FUNC_REVERSE_SUBTRACT};Ct[tv]=s.MIN,Ct[nv]=s.MAX;const at={[iv]:s.ZERO,[rv]:s.ONE,[sv]:s.SRC_COLOR,[uf]:s.SRC_ALPHA,[fv]:s.SRC_ALPHA_SATURATE,[uv]:s.DST_COLOR,[av]:s.DST_ALPHA,[ov]:s.ONE_MINUS_SRC_COLOR,[cf]:s.ONE_MINUS_SRC_ALPHA,[cv]:s.ONE_MINUS_DST_COLOR,[lv]:s.ONE_MINUS_DST_ALPHA,[dv]:s.CONSTANT_COLOR,[hv]:s.ONE_MINUS_CONSTANT_COLOR,[pv]:s.CONSTANT_ALPHA,[mv]:s.ONE_MINUS_CONSTANT_ALPHA};function O(z,Ae,J,ae,Le,De,et,mt,Bt,gt){if(z===xr){T===!0&&(Pe(s.BLEND),T=!1);return}if(T===!1&&(_e(s.BLEND),T=!0),z!==Q_){if(z!==y||gt!==b){if((_!==jr||C!==jr)&&(s.blendEquation(s.FUNC_ADD),_=jr,C=jr),gt)switch(z){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bp:s.blendFunc(s.ONE,s.ONE);break;case Hp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Hp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}I=null,L=null,X=null,F=null,N.set(0,0,0),G=0,y=z,b=gt}return}Le=Le||Ae,De=De||J,et=et||ae,(Ae!==_||Le!==C)&&(s.blendEquationSeparate(Ct[Ae],Ct[Le]),_=Ae,C=Le),(J!==I||ae!==L||De!==X||et!==F)&&(s.blendFuncSeparate(at[J],at[ae],at[De],at[et]),I=J,L=ae,X=De,F=et),(mt.equals(N)===!1||Bt!==G)&&(s.blendColor(mt.r,mt.g,mt.b,Bt),N.copy(mt),G=Bt),y=z,b=!1}function jt(z,Ae){z.side===ki?Pe(s.CULL_FACE):_e(s.CULL_FACE);let J=z.side===Nn;Ae&&(J=!J),lt(J),z.blending===Bs&&z.transparent===!1?O(xr):O(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),f.setFunc(z.depthFunc),f.setTest(z.depthTest),f.setMask(z.depthWrite),u.setMask(z.colorWrite);const ae=z.stencilWrite;d.setTest(ae),ae&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),yt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(z){R!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),R=z)}function ut(z){z!==K_?(_e(s.CULL_FACE),z!==k&&(z===zp?s.cullFace(s.BACK):z===Z_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),k=z}function Ze(z){z!==ie&&(oe&&s.lineWidth(z),ie=z)}function yt(z,Ae,J){z?(_e(s.POLYGON_OFFSET_FILL),(q!==Ae||ue!==J)&&(s.polygonOffset(Ae,J),q=Ae,ue=J)):Pe(s.POLYGON_OFFSET_FILL)}function $e(z){z?_e(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function P(z){z===void 0&&(z=s.TEXTURE0+he-1),de!==z&&(s.activeTexture(z),de=z)}function w(z,Ae,J){J===void 0&&(de===null?J=s.TEXTURE0+he-1:J=de);let ae=se[J];ae===void 0&&(ae={type:void 0,texture:void 0},se[J]=ae),(ae.type!==z||ae.texture!==Ae)&&(de!==J&&(s.activeTexture(J),de=J),s.bindTexture(z,Ae||me[z]),ae.type=z,ae.texture=Ae)}function te(){const z=se[de];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ve(){try{s.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{s.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{s.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ke(){try{s.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{s.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Be(){try{s.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{s.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{s.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{s.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{s.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(z){Me.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Me.copy(z))}function Ce(z){$.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),$.copy(z))}function ze(z,Ae){let J=m.get(Ae);J===void 0&&(J=new WeakMap,m.set(Ae,J));let ae=J.get(z);ae===void 0&&(ae=s.getUniformBlockIndex(Ae,z.name),J.set(z,ae))}function Ue(z,Ae){const ae=m.get(Ae).get(z);h.get(Ae)!==ae&&(s.uniformBlockBinding(Ae,ae,z.__bindingPointIndex),h.set(Ae,ae))}function je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},de=null,se={},g={},x=new WeakMap,S=[],E=null,T=!1,y=null,_=null,I=null,L=null,C=null,X=null,F=null,N=new xt(0,0,0),G=0,b=!1,R=null,k=null,ie=null,q=null,ue=null,Me.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:_e,disable:Pe,bindFramebuffer:Ge,drawBuffers:We,useProgram:bt,setBlending:O,setMaterial:jt,setFlipSided:lt,setCullFace:ut,setLineWidth:Ze,setPolygonOffset:yt,setScissorTest:$e,activeTexture:P,bindTexture:w,unbindTexture:te,compressedTexImage2D:ve,compressedTexImage3D:xe,texImage2D:Te,texImage3D:Re,updateUBOMapping:ze,uniformBlockBinding:Ue,texStorage2D:ct,texStorage3D:fe,texSubImage2D:ge,texSubImage3D:ke,compressedTexSubImage2D:Ie,compressedTexSubImage3D:Be,scissor:Ne,viewport:Ce,reset:je}}function u1(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Rt,v=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,w){return S?new OffscreenCanvas(P,w):Ol("canvas")}function T(P,w,te){let ve=1;const xe=$e(P);if((xe.width>te||xe.height>te)&&(ve=te/Math.max(xe.width,xe.height)),ve<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ge=Math.floor(ve*xe.width),ke=Math.floor(ve*xe.height);g===void 0&&(g=E(ge,ke));const Ie=w?E(ge,ke):g;return Ie.width=ge,Ie.height=ke,Ie.getContext("2d").drawImage(P,0,0,ge,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ge+"x"+ke+")."),Ie}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),P;return P}function y(P){return P.generateMipmaps}function _(P){s.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(P,w,te,ve,xe=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ge=w;if(w===s.RED&&(te===s.FLOAT&&(ge=s.R32F),te===s.HALF_FLOAT&&(ge=s.R16F),te===s.UNSIGNED_BYTE&&(ge=s.R8)),w===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(ge=s.R8UI),te===s.UNSIGNED_SHORT&&(ge=s.R16UI),te===s.UNSIGNED_INT&&(ge=s.R32UI),te===s.BYTE&&(ge=s.R8I),te===s.SHORT&&(ge=s.R16I),te===s.INT&&(ge=s.R32I)),w===s.RG&&(te===s.FLOAT&&(ge=s.RG32F),te===s.HALF_FLOAT&&(ge=s.RG16F),te===s.UNSIGNED_BYTE&&(ge=s.RG8)),w===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(ge=s.RG8UI),te===s.UNSIGNED_SHORT&&(ge=s.RG16UI),te===s.UNSIGNED_INT&&(ge=s.RG32UI),te===s.BYTE&&(ge=s.RG8I),te===s.SHORT&&(ge=s.RG16I),te===s.INT&&(ge=s.RG32I)),w===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(ge=s.RGB8UI),te===s.UNSIGNED_SHORT&&(ge=s.RGB16UI),te===s.UNSIGNED_INT&&(ge=s.RGB32UI),te===s.BYTE&&(ge=s.RGB8I),te===s.SHORT&&(ge=s.RGB16I),te===s.INT&&(ge=s.RGB32I)),w===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(ge=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(ge=s.RGBA16UI),te===s.UNSIGNED_INT&&(ge=s.RGBA32UI),te===s.BYTE&&(ge=s.RGBA8I),te===s.SHORT&&(ge=s.RGBA16I),te===s.INT&&(ge=s.RGBA32I)),w===s.RGB&&te===s.UNSIGNED_INT_5_9_9_9_REV&&(ge=s.RGB9_E5),w===s.RGBA){const ke=xe?Nl:At.getTransfer(ve);te===s.FLOAT&&(ge=s.RGBA32F),te===s.HALF_FLOAT&&(ge=s.RGBA16F),te===s.UNSIGNED_BYTE&&(ge=ke===Pt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function C(P,w){let te;return P?w===null||w===Zr||w===js?te=s.DEPTH24_STENCIL8:w===Bi?te=s.DEPTH32F_STENCIL8:w===Go&&(te=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Zr||w===js?te=s.DEPTH_COMPONENT24:w===Bi?te=s.DEPTH_COMPONENT32F:w===Go&&(te=s.DEPTH_COMPONENT16),te}function X(P,w){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==ci&&P.minFilter!==xi?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function F(P){const w=P.target;w.removeEventListener("dispose",F),G(w),w.isVideoTexture&&v.delete(w)}function N(P){const w=P.target;w.removeEventListener("dispose",N),R(w)}function G(P){const w=r.get(P);if(w.__webglInit===void 0)return;const te=P.source,ve=x.get(te);if(ve){const xe=ve[w.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&b(P),Object.keys(ve).length===0&&x.delete(te)}r.remove(P)}function b(P){const w=r.get(P);s.deleteTexture(w.__webglTexture);const te=P.source,ve=x.get(te);delete ve[w.__cacheKey],f.memory.textures--}function R(P){const w=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(w.__webglFramebuffer[ve]))for(let xe=0;xe<w.__webglFramebuffer[ve].length;xe++)s.deleteFramebuffer(w.__webglFramebuffer[ve][xe]);else s.deleteFramebuffer(w.__webglFramebuffer[ve]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ve])}else{if(Array.isArray(w.__webglFramebuffer))for(let ve=0;ve<w.__webglFramebuffer.length;ve++)s.deleteFramebuffer(w.__webglFramebuffer[ve]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ve=0;ve<w.__webglColorRenderbuffer.length;ve++)w.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ve]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const te=P.textures;for(let ve=0,xe=te.length;ve<xe;ve++){const ge=r.get(te[ve]);ge.__webglTexture&&(s.deleteTexture(ge.__webglTexture),f.memory.textures--),r.remove(te[ve])}r.remove(P)}let k=0;function ie(){k=0}function q(){const P=k;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),k+=1,P}function ue(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function he(P,w){const te=r.get(P);if(P.isVideoTexture&&Ze(P),P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){const ve=P.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(te,P,w);return}}n.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+w)}function oe(P,w){const te=r.get(P);if(P.version>0&&te.__version!==P.version){$(te,P,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+w)}function pe(P,w){const te=r.get(P);if(P.version>0&&te.__version!==P.version){$(te,P,w);return}n.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+w)}function V(P,w){const te=r.get(P);if(P.version>0&&te.__version!==P.version){ce(te,P,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+w)}const de={[yf]:s.REPEAT,[qr]:s.CLAMP_TO_EDGE,[Sf]:s.MIRRORED_REPEAT},se={[ci]:s.NEAREST,[Tv]:s.NEAREST_MIPMAP_NEAREST,[rl]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[Pc]:s.LINEAR_MIPMAP_NEAREST,[$r]:s.LINEAR_MIPMAP_LINEAR},U={[bv]:s.NEVER,[Nv]:s.ALWAYS,[Pv]:s.LESS,[ug]:s.LEQUAL,[Lv]:s.EQUAL,[Uv]:s.GEQUAL,[Dv]:s.GREATER,[Iv]:s.NOTEQUAL};function K(P,w){if(w.type===Bi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===xi||w.magFilter===Pc||w.magFilter===rl||w.magFilter===$r||w.minFilter===xi||w.minFilter===Pc||w.minFilter===rl||w.minFilter===$r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,de[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,de[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,de[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,se[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,U[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ci||w.minFilter!==rl&&w.minFilter!==$r||w.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Me(P,w){let te=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",F));const ve=w.source;let xe=x.get(ve);xe===void 0&&(xe={},x.set(ve,xe));const ge=ue(w);if(ge!==P.__cacheKey){xe[ge]===void 0&&(xe[ge]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,te=!0),xe[ge].usedTimes++;const ke=xe[P.__cacheKey];ke!==void 0&&(xe[P.__cacheKey].usedTimes--,ke.usedTimes===0&&b(w)),P.__cacheKey=ge,P.__webglTexture=xe[ge].texture}return te}function $(P,w,te){let ve=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ve=s.TEXTURE_3D);const xe=Me(P,w),ge=w.source;n.bindTexture(ve,P.__webglTexture,s.TEXTURE0+te);const ke=r.get(ge);if(ge.version!==ke.__version||xe===!0){n.activeTexture(s.TEXTURE0+te);const Ie=At.getPrimaries(At.workingColorSpace),Be=w.colorSpace===vr?null:At.getPrimaries(w.colorSpace),ct=w.colorSpace===vr||Ie===Be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let fe=T(w.image,!1,a.maxTextureSize);fe=yt(w,fe);const Te=u.convert(w.format,w.colorSpace),Re=u.convert(w.type);let Ne=L(w.internalFormat,Te,Re,w.colorSpace,w.isVideoTexture);K(ve,w);let Ce;const ze=w.mipmaps,Ue=w.isVideoTexture!==!0,je=ke.__version===void 0||xe===!0,z=ge.dataReady,Ae=X(w,fe);if(w.isDepthTexture)Ne=C(w.format===Ys,w.type),je&&(Ue?n.texStorage2D(s.TEXTURE_2D,1,Ne,fe.width,fe.height):n.texImage2D(s.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Te,Re,null));else if(w.isDataTexture)if(ze.length>0){Ue&&je&&n.texStorage2D(s.TEXTURE_2D,Ae,Ne,ze[0].width,ze[0].height);for(let J=0,ae=ze.length;J<ae;J++)Ce=ze[J],Ue?z&&n.texSubImage2D(s.TEXTURE_2D,J,0,0,Ce.width,Ce.height,Te,Re,Ce.data):n.texImage2D(s.TEXTURE_2D,J,Ne,Ce.width,Ce.height,0,Te,Re,Ce.data);w.generateMipmaps=!1}else Ue?(je&&n.texStorage2D(s.TEXTURE_2D,Ae,Ne,fe.width,fe.height),z&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,fe.width,fe.height,Te,Re,fe.data)):n.texImage2D(s.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Te,Re,fe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ue&&je&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Ne,ze[0].width,ze[0].height,fe.depth);for(let J=0,ae=ze.length;J<ae;J++)if(Ce=ze[J],w.format!==ui)if(Te!==null)if(Ue){if(z)if(w.layerUpdates.size>0){const Le=ym(Ce.width,Ce.height,w.format,w.type);for(const De of w.layerUpdates){const et=Ce.data.subarray(De*Le/Ce.data.BYTES_PER_ELEMENT,(De+1)*Le/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,De,Ce.width,Ce.height,1,Te,et)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,Ce.width,Ce.height,fe.depth,Te,Ce.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,Ne,Ce.width,Ce.height,fe.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?z&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,Ce.width,Ce.height,fe.depth,Te,Re,Ce.data):n.texImage3D(s.TEXTURE_2D_ARRAY,J,Ne,Ce.width,Ce.height,fe.depth,0,Te,Re,Ce.data)}else{Ue&&je&&n.texStorage2D(s.TEXTURE_2D,Ae,Ne,ze[0].width,ze[0].height);for(let J=0,ae=ze.length;J<ae;J++)Ce=ze[J],w.format!==ui?Te!==null?Ue?z&&n.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,Ce.width,Ce.height,Te,Ce.data):n.compressedTexImage2D(s.TEXTURE_2D,J,Ne,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?z&&n.texSubImage2D(s.TEXTURE_2D,J,0,0,Ce.width,Ce.height,Te,Re,Ce.data):n.texImage2D(s.TEXTURE_2D,J,Ne,Ce.width,Ce.height,0,Te,Re,Ce.data)}else if(w.isDataArrayTexture)if(Ue){if(je&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Ne,fe.width,fe.height,fe.depth),z)if(w.layerUpdates.size>0){const J=ym(fe.width,fe.height,w.format,w.type);for(const ae of w.layerUpdates){const Le=fe.data.subarray(ae*J/fe.data.BYTES_PER_ELEMENT,(ae+1)*J/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ae,fe.width,fe.height,1,Te,Re,Le)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Te,Re,fe.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,fe.width,fe.height,fe.depth,0,Te,Re,fe.data);else if(w.isData3DTexture)Ue?(je&&n.texStorage3D(s.TEXTURE_3D,Ae,Ne,fe.width,fe.height,fe.depth),z&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Te,Re,fe.data)):n.texImage3D(s.TEXTURE_3D,0,Ne,fe.width,fe.height,fe.depth,0,Te,Re,fe.data);else if(w.isFramebufferTexture){if(je)if(Ue)n.texStorage2D(s.TEXTURE_2D,Ae,Ne,fe.width,fe.height);else{let J=fe.width,ae=fe.height;for(let Le=0;Le<Ae;Le++)n.texImage2D(s.TEXTURE_2D,Le,Ne,J,ae,0,Te,Re,null),J>>=1,ae>>=1}}else if(ze.length>0){if(Ue&&je){const J=$e(ze[0]);n.texStorage2D(s.TEXTURE_2D,Ae,Ne,J.width,J.height)}for(let J=0,ae=ze.length;J<ae;J++)Ce=ze[J],Ue?z&&n.texSubImage2D(s.TEXTURE_2D,J,0,0,Te,Re,Ce):n.texImage2D(s.TEXTURE_2D,J,Ne,Te,Re,Ce);w.generateMipmaps=!1}else if(Ue){if(je){const J=$e(fe);n.texStorage2D(s.TEXTURE_2D,Ae,Ne,J.width,J.height)}z&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,Re,fe)}else n.texImage2D(s.TEXTURE_2D,0,Ne,Te,Re,fe);y(w)&&_(ve),ke.__version=ge.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ce(P,w,te){if(w.image.length!==6)return;const ve=Me(P,w),xe=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+te);const ge=r.get(xe);if(xe.version!==ge.__version||ve===!0){n.activeTexture(s.TEXTURE0+te);const ke=At.getPrimaries(At.workingColorSpace),Ie=w.colorSpace===vr?null:At.getPrimaries(w.colorSpace),Be=w.colorSpace===vr||ke===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const ct=w.isCompressedTexture||w.image[0].isCompressedTexture,fe=w.image[0]&&w.image[0].isDataTexture,Te=[];for(let ae=0;ae<6;ae++)!ct&&!fe?Te[ae]=T(w.image[ae],!0,a.maxCubemapSize):Te[ae]=fe?w.image[ae].image:w.image[ae],Te[ae]=yt(w,Te[ae]);const Re=Te[0],Ne=u.convert(w.format,w.colorSpace),Ce=u.convert(w.type),ze=L(w.internalFormat,Ne,Ce,w.colorSpace),Ue=w.isVideoTexture!==!0,je=ge.__version===void 0||ve===!0,z=xe.dataReady;let Ae=X(w,Re);K(s.TEXTURE_CUBE_MAP,w);let J;if(ct){Ue&&je&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,ze,Re.width,Re.height);for(let ae=0;ae<6;ae++){J=Te[ae].mipmaps;for(let Le=0;Le<J.length;Le++){const De=J[Le];w.format!==ui?Ne!==null?Ue?z&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,0,0,De.width,De.height,Ne,De.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,ze,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?z&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,0,0,De.width,De.height,Ne,Ce,De.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,ze,De.width,De.height,0,Ne,Ce,De.data)}}}else{if(J=w.mipmaps,Ue&&je){J.length>0&&Ae++;const ae=$e(Te[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,ze,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(fe){Ue?z&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Te[ae].width,Te[ae].height,Ne,Ce,Te[ae].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ze,Te[ae].width,Te[ae].height,0,Ne,Ce,Te[ae].data);for(let Le=0;Le<J.length;Le++){const et=J[Le].image[ae].image;Ue?z&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,0,0,et.width,et.height,Ne,Ce,et.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,ze,et.width,et.height,0,Ne,Ce,et.data)}}else{Ue?z&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ne,Ce,Te[ae]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ze,Ne,Ce,Te[ae]);for(let Le=0;Le<J.length;Le++){const De=J[Le];Ue?z&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,0,0,Ne,Ce,De.image[ae]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,ze,Ne,Ce,De.image[ae])}}}y(w)&&_(s.TEXTURE_CUBE_MAP),ge.__version=xe.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function me(P,w,te,ve,xe,ge){const ke=u.convert(te.format,te.colorSpace),Ie=u.convert(te.type),Be=L(te.internalFormat,ke,Ie,te.colorSpace),ct=r.get(w),fe=r.get(te);if(fe.__renderTarget=w,!ct.__hasExternalTextures){const Te=Math.max(1,w.width>>ge),Re=Math.max(1,w.height>>ge);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?n.texImage3D(xe,ge,Be,Te,Re,w.depth,0,ke,Ie,null):n.texImage2D(xe,ge,Be,Te,Re,0,ke,Ie,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),ut(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,xe,fe.__webglTexture,0,lt(w)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,xe,fe.__webglTexture,ge),n.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(P,w,te){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){const ve=w.depthTexture,xe=ve&&ve.isDepthTexture?ve.type:null,ge=C(w.stencilBuffer,xe),ke=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=lt(w);ut(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie,ge,w.width,w.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,ge,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ge,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ke,s.RENDERBUFFER,P)}else{const ve=w.textures;for(let xe=0;xe<ve.length;xe++){const ge=ve[xe],ke=u.convert(ge.format,ge.colorSpace),Ie=u.convert(ge.type),Be=L(ge.internalFormat,ke,Ie,ge.colorSpace),ct=lt(w);te&&ut(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Be,w.width,w.height):ut(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Be,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Be,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(w.depthTexture);ve.__renderTarget=w,(!ve.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const xe=ve.__webglTexture,ge=lt(w);if(w.depthTexture.format===Hs)ut(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(w.depthTexture.format===Ys)ut(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Ge(P){const w=r.get(P),te=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const ve=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ve){const xe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ve.removeEventListener("dispose",xe)};ve.addEventListener("dispose",xe),w.__depthDisposeCallback=xe}w.__boundDepthTexture=ve}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Pe(w.__webglFramebuffer,P)}else if(te){w.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ve]),w.__webglDepthbuffer[ve]===void 0)w.__webglDepthbuffer[ve]=s.createRenderbuffer(),_e(w.__webglDepthbuffer[ve],P,!1);else{const xe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer[ve];s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,ge)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),_e(w.__webglDepthbuffer,P,!1);else{const ve=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,xe)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function We(P,w,te){const ve=r.get(P);w!==void 0&&me(ve.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&Ge(P)}function bt(P){const w=P.texture,te=r.get(P),ve=r.get(w);P.addEventListener("dispose",N);const xe=P.textures,ge=P.isWebGLCubeRenderTarget===!0,ke=xe.length>1;if(ke||(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=w.version,f.memory.textures++),ge){te.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer[Ie]=[];for(let Be=0;Be<w.mipmaps.length;Be++)te.__webglFramebuffer[Ie][Be]=s.createFramebuffer()}else te.__webglFramebuffer[Ie]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ie=0;Ie<w.mipmaps.length;Ie++)te.__webglFramebuffer[Ie]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(ke)for(let Ie=0,Be=xe.length;Ie<Be;Ie++){const ct=r.get(xe[Ie]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),f.memory.textures++)}if(P.samples>0&&ut(P)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ie=0;Ie<xe.length;Ie++){const Be=xe[Ie];te.__webglColorRenderbuffer[Ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[Ie]);const ct=u.convert(Be.format,Be.colorSpace),fe=u.convert(Be.type),Te=L(Be.internalFormat,ct,fe,Be.colorSpace,P.isXRRenderTarget===!0),Re=lt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,Te,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,te.__webglColorRenderbuffer[Ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(te.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ge){n.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),K(s.TEXTURE_CUBE_MAP,w);for(let Ie=0;Ie<6;Ie++)if(w.mipmaps&&w.mipmaps.length>0)for(let Be=0;Be<w.mipmaps.length;Be++)me(te.__webglFramebuffer[Ie][Be],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Be);else me(te.__webglFramebuffer[Ie],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);y(w)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ke){for(let Ie=0,Be=xe.length;Ie<Be;Ie++){const ct=xe[Ie],fe=r.get(ct);n.bindTexture(s.TEXTURE_2D,fe.__webglTexture),K(s.TEXTURE_2D,ct),me(te.__webglFramebuffer,P,ct,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,0),y(ct)&&_(s.TEXTURE_2D)}n.unbindTexture()}else{let Ie=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ie=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ie,ve.__webglTexture),K(Ie,w),w.mipmaps&&w.mipmaps.length>0)for(let Be=0;Be<w.mipmaps.length;Be++)me(te.__webglFramebuffer[Be],P,w,s.COLOR_ATTACHMENT0,Ie,Be);else me(te.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,Ie,0);y(w)&&_(Ie),n.unbindTexture()}P.depthBuffer&&Ge(P)}function Ct(P){const w=P.textures;for(let te=0,ve=w.length;te<ve;te++){const xe=w[te];if(y(xe)){const ge=I(P),ke=r.get(xe).__webglTexture;n.bindTexture(ge,ke),_(ge),n.unbindTexture()}}}const at=[],O=[];function jt(P){if(P.samples>0){if(ut(P)===!1){const w=P.textures,te=P.width,ve=P.height;let xe=s.COLOR_BUFFER_BIT;const ge=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=r.get(P),Ie=w.length>1;if(Ie)for(let Be=0;Be<w.length;Be++)n.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Be=0;Be<w.length;Be++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ke.__webglColorRenderbuffer[Be]);const ct=r.get(w[Be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,te,ve,0,0,te,ve,xe,s.NEAREST),h===!0&&(at.length=0,O.length=0,at.push(s.COLOR_ATTACHMENT0+Be),P.depthBuffer&&P.resolveDepthBuffer===!1&&(at.push(ge),O.push(ge),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ie)for(let Be=0;Be<w.length;Be++){n.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,ke.__webglColorRenderbuffer[Be]);const ct=r.get(w[Be]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,ct,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function lt(P){return Math.min(a.maxSamples,P.samples)}function ut(P){const w=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ze(P){const w=f.render.frame;v.get(P)!==w&&(v.set(P,w),P.update())}function yt(P,w){const te=P.colorSpace,ve=P.format,xe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||te!==qs&&te!==vr&&(At.getTransfer(te)===Pt?(ve!==ui||xe!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),w}function $e(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=q,this.resetTextureUnits=ie,this.setTexture2D=he,this.setTexture2DArray=oe,this.setTexture3D=pe,this.setTextureCube=V,this.rebindTextures=We,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ut}function c1(s,e){function n(r,a=vr){let u;const f=At.getTransfer(a);if(r===Gi)return s.UNSIGNED_BYTE;if(r===Qf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Jf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===eg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Qm)return s.BYTE;if(r===Jm)return s.SHORT;if(r===Go)return s.UNSIGNED_SHORT;if(r===Zf)return s.INT;if(r===Zr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===jo)return s.HALF_FLOAT;if(r===tg)return s.ALPHA;if(r===ng)return s.RGB;if(r===ui)return s.RGBA;if(r===ig)return s.LUMINANCE;if(r===rg)return s.LUMINANCE_ALPHA;if(r===Hs)return s.DEPTH_COMPONENT;if(r===Ys)return s.DEPTH_STENCIL;if(r===sg)return s.RED;if(r===ed)return s.RED_INTEGER;if(r===og)return s.RG;if(r===td)return s.RG_INTEGER;if(r===nd)return s.RGBA_INTEGER;if(r===Cl||r===bl||r===Pl||r===Ll)if(f===Pt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Cl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ll)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Cl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ll)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mf||r===Ef||r===wf||r===Tf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Mf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ef)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Tf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Af||r===Rf||r===Cf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Af||r===Rf)return f===Pt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Cf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bf||r===Pf||r===Lf||r===Df||r===If||r===Uf||r===Nf||r===Ff||r===Of||r===kf||r===zf||r===Bf||r===Hf||r===Vf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===bf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Df)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===If)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ff)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Of)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vf)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dl||r===Gf||r===Wf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Dl)return f===Pt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Wf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ag||r===Xf||r===jf||r===Yf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Dl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Xf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===js?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const f1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d1=`
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

}`;class h1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Fn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Mr({vertexShader:f1,fragmentShader:d1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hn(new jl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p1 extends Ks{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",h=1,m=null,v=null,g=null,x=null,S=null,E=null;const T=new h1,y=n.getContextAttributes();let _=null,I=null;const L=[],C=[],X=new Rt;let F=null;const N=new Un;N.viewport=new Lt;const G=new Un;G.viewport=new Lt;const b=[N,G],R=new Ux;let k=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ce=L[$];return ce===void 0&&(ce=new Kc,L[$]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function($){let ce=L[$];return ce===void 0&&(ce=new Kc,L[$]=ce),ce.getGripSpace()},this.getHand=function($){let ce=L[$];return ce===void 0&&(ce=new Kc,L[$]=ce),ce.getHandSpace()};function q($){const ce=C.indexOf($.inputSource);if(ce===-1)return;const me=L[ce];me!==void 0&&(me.update($.inputSource,$.frame,m||f),me.dispatchEvent({type:$.type,data:$.inputSource}))}function ue(){a.removeEventListener("select",q),a.removeEventListener("selectstart",q),a.removeEventListener("selectend",q),a.removeEventListener("squeeze",q),a.removeEventListener("squeezestart",q),a.removeEventListener("squeezeend",q),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",he);for(let $=0;$<L.length;$++){const ce=C[$];ce!==null&&(C[$]=null,L[$].disconnect(ce))}k=null,ie=null,T.reset(),e.setRenderTarget(_),S=null,x=null,g=null,a=null,I=null,Me.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){u=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function($){m=$},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function($){if(a=$,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",q),a.addEventListener("selectstart",q),a.addEventListener("selectend",q),a.addEventListener("squeeze",q),a.addEventListener("squeezestart",q),a.addEventListener("squeezeend",q),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",he),y.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(X),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,_e=null,Pe=null;y.depth&&(Pe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=y.stencil?Ys:Hs,_e=y.stencil?js:Zr);const Ge={colorFormat:n.RGBA8,depthFormat:Pe,scaleFactor:u};g=new XRWebGLBinding(a,n),x=g.createProjectionLayer(Ge),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new Qr(x.textureWidth,x.textureHeight,{format:ui,type:Gi,depthTexture:new Sg(x.textureWidth,x.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,me),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new Qr(S.framebufferWidth,S.framebufferHeight,{format:ui,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),m=null,f=await a.requestReferenceSpace(d),Me.setContext(a),Me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function he($){for(let ce=0;ce<$.removed.length;ce++){const me=$.removed[ce],_e=C.indexOf(me);_e>=0&&(C[_e]=null,L[_e].disconnect(me))}for(let ce=0;ce<$.added.length;ce++){const me=$.added[ce];let _e=C.indexOf(me);if(_e===-1){for(let Ge=0;Ge<L.length;Ge++)if(Ge>=C.length){C.push(me),_e=Ge;break}else if(C[Ge]===null){C[Ge]=me,_e=Ge;break}if(_e===-1)break}const Pe=L[_e];Pe&&Pe.connect(me)}}const oe=new H,pe=new H;function V($,ce,me){oe.setFromMatrixPosition(ce.matrixWorld),pe.setFromMatrixPosition(me.matrixWorld);const _e=oe.distanceTo(pe),Pe=ce.projectionMatrix.elements,Ge=me.projectionMatrix.elements,We=Pe[14]/(Pe[10]-1),bt=Pe[14]/(Pe[10]+1),Ct=(Pe[9]+1)/Pe[5],at=(Pe[9]-1)/Pe[5],O=(Pe[8]-1)/Pe[0],jt=(Ge[8]+1)/Ge[0],lt=We*O,ut=We*jt,Ze=_e/(-O+jt),yt=Ze*-O;if(ce.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(yt),$.translateZ(Ze),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Pe[10]===-1)$.projectionMatrix.copy(ce.projectionMatrix),$.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const $e=We+Ze,P=bt+Ze,w=lt-yt,te=ut+(_e-yt),ve=Ct*bt/P*$e,xe=at*bt/P*$e;$.projectionMatrix.makePerspective(w,te,ve,xe,$e,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function de($,ce){ce===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ce.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(a===null)return;let ce=$.near,me=$.far;T.texture!==null&&(T.depthNear>0&&(ce=T.depthNear),T.depthFar>0&&(me=T.depthFar)),R.near=G.near=N.near=ce,R.far=G.far=N.far=me,(k!==R.near||ie!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,ie=R.far),N.layers.mask=$.layers.mask|2,G.layers.mask=$.layers.mask|4,R.layers.mask=N.layers.mask|G.layers.mask;const _e=$.parent,Pe=R.cameras;de(R,_e);for(let Ge=0;Ge<Pe.length;Ge++)de(Pe[Ge],_e);Pe.length===2?V(R,N,G):R.projectionMatrix.copy(N.projectionMatrix),se($,R,_e)};function se($,ce,me){me===null?$.matrix.copy(ce.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(ce.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ce.projectionMatrix),$.projectionMatrixInverse.copy(ce.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Wo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function($){h=$,x!==null&&(x.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let U=null;function K($,ce){if(v=ce.getViewerPose(m||f),E=ce,v!==null){const me=v.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let _e=!1;me.length!==R.cameras.length&&(R.cameras.length=0,_e=!0);for(let We=0;We<me.length;We++){const bt=me[We];let Ct=null;if(S!==null)Ct=S.getViewport(bt);else{const O=g.getViewSubImage(x,bt);Ct=O.viewport,We===0&&(e.setRenderTargetTextures(I,O.colorTexture,x.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(I))}let at=b[We];at===void 0&&(at=new Un,at.layers.enable(We),at.viewport=new Lt,b[We]=at),at.matrix.fromArray(bt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(bt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),We===0&&(R.matrix.copy(at.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),_e===!0&&R.cameras.push(at)}const Pe=a.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&g){const We=g.getDepthInformation(me[0]);We&&We.isValid&&We.texture&&T.init(e,We,a.renderState)}}for(let me=0;me<L.length;me++){const _e=C[me],Pe=L[me];_e!==null&&Pe!==void 0&&Pe.update(_e,ce,m||f)}U&&U($,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),E=null}const Me=new Ag;Me.setAnimationLoop(K),this.setAnimationLoop=function($){U=$},this.dispose=function(){}}}const Vr=new yi,m1=new zt;function g1(s,e){function n(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,_g(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,I,L,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),g(y,_)):_.isMeshPhongMaterial?(u(y,_),v(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,C)):_.isMeshMatcapMaterial?(u(y,_),E(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),T(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?h(y,_,I,L):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,n(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Nn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,n(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Nn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,n(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,n(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const I=e.get(_),L=I.envMap,C=I.envMapRotation;L&&(y.envMap.value=L,Vr.copy(C),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),y.envMapRotation.value.setFromMatrix4(m1.makeRotationFromEuler(Vr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,I,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*I,y.scale.value=L*.5,_.map&&(y.map.value=_.map,n(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,I){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Nn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function T(y,_){const I=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function _1(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,L){const C=L.program;r.uniformBlockBinding(I,C)}function m(I,L){let C=a[I.id];C===void 0&&(E(I),C=v(I),a[I.id]=C,I.addEventListener("dispose",y));const X=L.program;r.updateUBOMapping(I,X);const F=e.render.frame;u[I.id]!==F&&(x(I),u[I.id]=F)}function v(I){const L=g();I.__bindingPointIndex=L;const C=s.createBuffer(),X=I.__size,F=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,X,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,C),C}function g(){for(let I=0;I<d;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const L=a[I.id],C=I.uniforms,X=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let F=0,N=C.length;F<N;F++){const G=Array.isArray(C[F])?C[F]:[C[F]];for(let b=0,R=G.length;b<R;b++){const k=G[b];if(S(k,F,b,X)===!0){const ie=k.__offset,q=Array.isArray(k.value)?k.value:[k.value];let ue=0;for(let he=0;he<q.length;he++){const oe=q[he],pe=T(oe);typeof oe=="number"||typeof oe=="boolean"?(k.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,ie+ue,k.__data)):oe.isMatrix3?(k.__data[0]=oe.elements[0],k.__data[1]=oe.elements[1],k.__data[2]=oe.elements[2],k.__data[3]=0,k.__data[4]=oe.elements[3],k.__data[5]=oe.elements[4],k.__data[6]=oe.elements[5],k.__data[7]=0,k.__data[8]=oe.elements[6],k.__data[9]=oe.elements[7],k.__data[10]=oe.elements[8],k.__data[11]=0):(oe.toArray(k.__data,ue),ue+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ie,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,L,C,X){const F=I.value,N=L+"_"+C;if(X[N]===void 0)return typeof F=="number"||typeof F=="boolean"?X[N]=F:X[N]=F.clone(),!0;{const G=X[N];if(typeof F=="number"||typeof F=="boolean"){if(G!==F)return X[N]=F,!0}else if(G.equals(F)===!1)return G.copy(F),!0}return!1}function E(I){const L=I.uniforms;let C=0;const X=16;for(let N=0,G=L.length;N<G;N++){const b=Array.isArray(L[N])?L[N]:[L[N]];for(let R=0,k=b.length;R<k;R++){const ie=b[R],q=Array.isArray(ie.value)?ie.value:[ie.value];for(let ue=0,he=q.length;ue<he;ue++){const oe=q[ue],pe=T(oe),V=C%X,de=V%pe.boundary,se=V+de;C+=de,se!==0&&X-se<pe.storage&&(C+=X-se),ie.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=C,C+=pe.storage}}}const F=C%X;return F>0&&(C+=X-F),I.__size=C,I.__cache={},this}function T(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function y(I){const L=I.target;L.removeEventListener("dispose",y);const C=f.indexOf(L.__bindingPointIndex);f.splice(C,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function _(){for(const I in a)s.deleteBuffer(a[I]);f=[],a={},u={}}return{bind:h,update:m,dispose:_}}class Lg{constructor(e={}){const{canvas:n=Qv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,_=null;const I=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=yr,this.toneMappingExposure=1;const C=this;let X=!1,F=0,N=0,G=null,b=-1,R=null;const k=new Lt,ie=new Lt;let q=null;const ue=new xt(0);let he=0,oe=n.width,pe=n.height,V=1,de=null,se=null;const U=new Lt(0,0,oe,pe),K=new Lt(0,0,oe,pe);let Me=!1;const $=new sd;let ce=!1,me=!1;this.transmissionResolutionScale=1;const _e=new zt,Pe=new zt,Ge=new H,We=new Lt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function at(){return G===null?V:1}let O=r;function jt(A,j){return n.getContext(A,j)}try{const A={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Kf}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",De,!1),O===null){const j="webgl2";if(O=jt(j,A),O===null)throw jt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let lt,ut,Ze,yt,$e,P,w,te,ve,xe,ge,ke,Ie,Be,ct,fe,Te,Re,Ne,Ce,ze,Ue,je,z;function Ae(){lt=new CM(O),lt.init(),Ue=new c1(O,lt),ut=new SM(O,lt,e,Ue),Ze=new l1(O,lt),ut.reverseDepthBuffer&&x&&Ze.buffers.depth.setReversed(!0),yt=new LM(O),$e=new $E,P=new u1(O,lt,Ze,$e,ut,Ue,yt),w=new EM(C),te=new RM(C),ve=new Ox(O),je=new xM(O,ve),xe=new bM(O,ve,yt,je),ge=new IM(O,xe,ve,yt),Ne=new DM(O,ut,P),fe=new MM($e),ke=new qE(C,w,te,lt,ut,je,fe),Ie=new g1(C,$e),Be=new ZE,ct=new i1(lt),Re=new vM(C,w,te,Ze,ge,S,h),Te=new o1(C,ge,ut),z=new _1(O,yt,ut,Ze),Ce=new yM(O,lt,yt),ze=new PM(O,lt,yt),yt.programs=ke.programs,C.capabilities=ut,C.extensions=lt,C.properties=$e,C.renderLists=Be,C.shadowMap=Te,C.state=Ze,C.info=yt}Ae();const J=new p1(C,O);this.xr=J,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=lt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=lt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(oe,pe,!1))},this.getSize=function(A){return A.set(oe,pe)},this.setSize=function(A,j,ne=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,pe=j,n.width=Math.floor(A*V),n.height=Math.floor(j*V),ne===!0&&(n.style.width=A+"px",n.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(oe*V,pe*V).floor()},this.setDrawingBufferSize=function(A,j,ne){oe=A,pe=j,V=ne,n.width=Math.floor(A*ne),n.height=Math.floor(j*ne),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,j,ne,Q){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,j,ne,Q),Ze.viewport(k.copy(U).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,j,ne,Q){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,j,ne,Q),Ze.scissor(ie.copy(K).multiplyScalar(V).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(A){Ze.setScissorTest(Me=A)},this.setOpaqueSort=function(A){de=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,ne=!0){let Q=0;if(A){let Y=!1;if(G!==null){const we=G.texture.format;Y=we===nd||we===td||we===ed}if(Y){const we=G.texture.type,Fe=we===Gi||we===Zr||we===Go||we===js||we===Qf||we===Jf,He=Re.getClearColor(),Ye=Re.getClearAlpha(),st=He.r,rt=He.g,Ke=He.b;Fe?(E[0]=st,E[1]=rt,E[2]=Ke,E[3]=Ye,O.clearBufferuiv(O.COLOR,0,E)):(T[0]=st,T[1]=rt,T[2]=Ke,T[3]=Ye,O.clearBufferiv(O.COLOR,0,T))}else Q|=O.COLOR_BUFFER_BIT}j&&(Q|=O.DEPTH_BUFFER_BIT),ne&&(Q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",De,!1),Re.dispose(),Be.dispose(),ct.dispose(),$e.dispose(),w.dispose(),te.dispose(),ge.dispose(),je.dispose(),z.dispose(),ke.dispose(),J.dispose(),J.removeEventListener("sessionstart",Jr),J.removeEventListener("sessionend",Wi),Si.stop()};function ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const A=yt.autoReset,j=Te.enabled,ne=Te.autoUpdate,Q=Te.needsUpdate,Y=Te.type;Ae(),yt.autoReset=A,Te.enabled=j,Te.autoUpdate=ne,Te.needsUpdate=Q,Te.type=Y}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function et(A){const j=A.target;j.removeEventListener("dispose",et),mt(j)}function mt(A){Bt(A),$e.remove(A)}function Bt(A){const j=$e.get(A).programs;j!==void 0&&(j.forEach(function(ne){ke.releaseProgram(ne)}),A.isShaderMaterial&&ke.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ne,Q,Y,we){j===null&&(j=bt);const Fe=Y.isMesh&&Y.matrixWorld.determinant()<0,He=Qo(A,j,ne,Q,Y);Ze.setMaterial(Q,Fe);let Ye=ne.index,st=1;if(Q.wireframe===!0){if(Ye=xe.getWireframeAttribute(ne),Ye===void 0)return;st=2}const rt=ne.drawRange,Ke=ne.attributes.position;let St=rt.start*st,ft=(rt.start+rt.count)*st;we!==null&&(St=Math.max(St,we.start*st),ft=Math.min(ft,(we.start+we.count)*st)),Ye!==null?(St=Math.max(St,0),ft=Math.min(ft,Ye.count)):Ke!=null&&(St=Math.max(St,0),ft=Math.min(ft,Ke.count));const Gt=ft-St;if(Gt<0||Gt===1/0)return;je.setup(Y,Q,He,ne,Ye);let Ot,Mt=Ce;if(Ye!==null&&(Ot=ve.get(Ye),Mt=ze,Mt.setIndex(Ot)),Y.isMesh)Q.wireframe===!0?(Ze.setLineWidth(Q.wireframeLinewidth*at()),Mt.setMode(O.LINES)):Mt.setMode(O.TRIANGLES);else if(Y.isLine){let tt=Q.linewidth;tt===void 0&&(tt=1),Ze.setLineWidth(tt*at()),Y.isLineSegments?Mt.setMode(O.LINES):Y.isLineLoop?Mt.setMode(O.LINE_LOOP):Mt.setMode(O.LINE_STRIP)}else Y.isPoints?Mt.setMode(O.POINTS):Y.isSprite&&Mt.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const tt=Y._multiDrawStarts,Wt=Y._multiDrawCounts,_t=Y._multiDrawCount,mn=Ye?ve.get(Ye).bytesPerElement:1,ji=$e.get(Q).currentProgram.getUniforms();for(let En=0;En<_t;En++)ji.setValue(O,"_gl_DrawID",En),Mt.render(tt[En]/mn,Wt[En])}else if(Y.isInstancedMesh)Mt.renderInstances(St,Gt,Y.count);else if(ne.isInstancedBufferGeometry){const tt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Wt=Math.min(ne.instanceCount,tt);Mt.renderInstances(St,Gt,Wt)}else Mt.render(St,Gt)};function gt(A,j,ne){A.transparent===!0&&A.side===ki&&A.forceSinglePass===!1?(A.side=Nn,A.needsUpdate=!0,es(A,j,ne),A.side=Sr,A.needsUpdate=!0,es(A,j,ne),A.side=ki):es(A,j,ne)}this.compile=function(A,j,ne=null){ne===null&&(ne=A),_=ct.get(ne),_.init(j),L.push(_),ne.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),A!==ne&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const Q=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const we=Y.material;if(we)if(Array.isArray(we))for(let Fe=0;Fe<we.length;Fe++){const He=we[Fe];gt(He,ne,Y),Q.add(He)}else gt(we,ne,Y),Q.add(we)}),_=L.pop(),Q},this.compileAsync=function(A,j,ne=null){const Q=this.compile(A,j,ne);return new Promise(Y=>{function we(){if(Q.forEach(function(Fe){$e.get(Fe).currentProgram.isReady()&&Q.delete(Fe)}),Q.size===0){Y(A);return}setTimeout(we,10)}lt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let pn=null;function Kt(A){pn&&pn(A)}function Jr(){Si.stop()}function Wi(){Si.start()}const Si=new Ag;Si.setAnimationLoop(Kt),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(A){pn=A,J.setAnimationLoop(A),A===null?Si.stop():Si.start()},J.addEventListener("sessionstart",Jr),J.addEventListener("sessionend",Wi),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(j),j=J.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,j,G),_=ct.get(A,L.length),_.init(j),L.push(_),Pe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),$.setFromProjectionMatrix(Pe),me=this.localClippingEnabled,ce=fe.init(this.clippingPlanes,me),y=Be.get(A,I.length),y.init(),I.push(y),J.enabled===!0&&J.isPresenting===!0){const we=C.xr.getDepthSensingMesh();we!==null&&Mi(we,j,-1/0,C.sortObjects)}Mi(A,j,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(de,se),Ct=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Ct&&Re.addToRenderList(y,A),this.info.render.frame++,ce===!0&&fe.beginShadows();const ne=_.state.shadowsArray;Te.render(ne,A,j),ce===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=y.opaque,Y=y.transmissive;if(_.setupLights(),j.isArrayCamera){const we=j.cameras;if(Y.length>0)for(let Fe=0,He=we.length;Fe<He;Fe++){const Ye=we[Fe];wr(Q,Y,A,Ye)}Ct&&Re.render(A);for(let Fe=0,He=we.length;Fe<He;Fe++){const Ye=we[Fe];Er(y,A,Ye,Ye.viewport)}}else Y.length>0&&wr(Q,Y,A,j),Ct&&Re.render(A),Er(y,A,j);G!==null&&N===0&&(P.updateMultisampleRenderTarget(G),P.updateRenderTargetMipmap(G)),A.isScene===!0&&A.onAfterRender(C,A,j),je.resetDefaultState(),b=-1,R=null,L.pop(),L.length>0?(_=L[L.length-1],ce===!0&&fe.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Mi(A,j,ne,Q){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){Q&&We.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pe);const Fe=ge.update(A),He=A.material;He.visible&&y.push(A,Fe,He,ne,We.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$.intersectsObject(A))){const Fe=ge.update(A),He=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),We.copy(A.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),We.copy(Fe.boundingSphere.center)),We.applyMatrix4(A.matrixWorld).applyMatrix4(Pe)),Array.isArray(He)){const Ye=Fe.groups;for(let st=0,rt=Ye.length;st<rt;st++){const Ke=Ye[st],St=He[Ke.materialIndex];St&&St.visible&&y.push(A,Fe,St,ne,We.z,Ke)}}else He.visible&&y.push(A,Fe,He,ne,We.z,null)}}const we=A.children;for(let Fe=0,He=we.length;Fe<He;Fe++)Mi(we[Fe],j,ne,Q)}function Er(A,j,ne,Q){const Y=A.opaque,we=A.transmissive,Fe=A.transparent;_.setupLightsView(ne),ce===!0&&fe.setGlobalState(C.clippingPlanes,ne),Q&&Ze.viewport(k.copy(Q)),Y.length>0&&Xi(Y,j,ne),we.length>0&&Xi(we,j,ne),Fe.length>0&&Xi(Fe,j,ne),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function wr(A,j,ne,Q){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Q.id]===void 0&&(_.state.transmissionRenderTarget[Q.id]=new Qr(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?jo:Gi,minFilter:$r,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const we=_.state.transmissionRenderTarget[Q.id],Fe=Q.viewport||k;we.setSize(Fe.z*C.transmissionResolutionScale,Fe.w*C.transmissionResolutionScale);const He=C.getRenderTarget();C.setRenderTarget(we),C.getClearColor(ue),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),Ct&&Re.render(ne);const Ye=C.toneMapping;C.toneMapping=yr;const st=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),_.setupLightsView(Q),ce===!0&&fe.setGlobalState(C.clippingPlanes,Q),Xi(A,ne,Q),P.updateMultisampleRenderTarget(we),P.updateRenderTargetMipmap(we),lt.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Ke=0,St=j.length;Ke<St;Ke++){const ft=j[Ke],Gt=ft.object,Ot=ft.geometry,Mt=ft.material,tt=ft.group;if(Mt.side===ki&&Gt.layers.test(Q.layers)){const Wt=Mt.side;Mt.side=Nn,Mt.needsUpdate=!0,Ko(Gt,ne,Q,Ot,Mt,tt),Mt.side=Wt,Mt.needsUpdate=!0,rt=!0}}rt===!0&&(P.updateMultisampleRenderTarget(we),P.updateRenderTargetMipmap(we))}C.setRenderTarget(He),C.setClearColor(ue,he),st!==void 0&&(Q.viewport=st),C.toneMapping=Ye}function Xi(A,j,ne){const Q=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,we=A.length;Y<we;Y++){const Fe=A[Y],He=Fe.object,Ye=Fe.geometry,st=Q===null?Fe.material:Q,rt=Fe.group;He.layers.test(ne.layers)&&Ko(He,j,ne,Ye,st,rt)}}function Ko(A,j,ne,Q,Y,we){A.onBeforeRender(C,j,ne,Q,Y,we),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(C,j,ne,Q,A,we),Y.transparent===!0&&Y.side===ki&&Y.forceSinglePass===!1?(Y.side=Nn,Y.needsUpdate=!0,C.renderBufferDirect(ne,j,Q,Y,A,we),Y.side=Sr,Y.needsUpdate=!0,C.renderBufferDirect(ne,j,Q,Y,A,we),Y.side=ki):C.renderBufferDirect(ne,j,Q,Y,A,we),A.onAfterRender(C,j,ne,Q,Y,we)}function es(A,j,ne){j.isScene!==!0&&(j=bt);const Q=$e.get(A),Y=_.state.lights,we=_.state.shadowsArray,Fe=Y.state.version,He=ke.getParameters(A,Y.state,we,j,ne),Ye=ke.getProgramCacheKey(He);let st=Q.programs;Q.environment=A.isMeshStandardMaterial?j.environment:null,Q.fog=j.fog,Q.envMap=(A.isMeshStandardMaterial?te:w).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,st===void 0&&(A.addEventListener("dispose",et),st=new Map,Q.programs=st);let rt=st.get(Ye);if(rt!==void 0){if(Q.currentProgram===rt&&Q.lightsStateVersion===Fe)return di(A,He),rt}else He.uniforms=ke.getUniforms(A),A.onBeforeCompile(He,C),rt=ke.acquireProgram(He,Ye),st.set(Ye,rt),Q.uniforms=He.uniforms;const Ke=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=fe.uniform),di(A,He),Q.needsLights=ql(A),Q.lightsStateVersion=Fe,Q.needsLights&&(Ke.ambientLightColor.value=Y.state.ambient,Ke.lightProbe.value=Y.state.probe,Ke.directionalLights.value=Y.state.directional,Ke.directionalLightShadows.value=Y.state.directionalShadow,Ke.spotLights.value=Y.state.spot,Ke.spotLightShadows.value=Y.state.spotShadow,Ke.rectAreaLights.value=Y.state.rectArea,Ke.ltc_1.value=Y.state.rectAreaLTC1,Ke.ltc_2.value=Y.state.rectAreaLTC2,Ke.pointLights.value=Y.state.point,Ke.pointLightShadows.value=Y.state.pointShadow,Ke.hemisphereLights.value=Y.state.hemi,Ke.directionalShadowMap.value=Y.state.directionalShadowMap,Ke.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ke.spotShadowMap.value=Y.state.spotShadowMap,Ke.spotLightMatrix.value=Y.state.spotLightMatrix,Ke.spotLightMap.value=Y.state.spotLightMap,Ke.pointShadowMap.value=Y.state.pointShadowMap,Ke.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=rt,Q.uniformsList=null,rt}function Zo(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Ul.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function di(A,j){const ne=$e.get(A);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.batchingColor=j.batchingColor,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.instancingMorph=j.instancingMorph,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function Qo(A,j,ne,Q,Y){j.isScene!==!0&&(j=bt),P.resetTextureUnits();const we=j.fog,Fe=Q.isMeshStandardMaterial?j.environment:null,He=G===null?C.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:qs,Ye=(Q.isMeshStandardMaterial?te:w).get(Q.envMap||Fe),st=Q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,rt=!!ne.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ke=!!ne.morphAttributes.position,St=!!ne.morphAttributes.normal,ft=!!ne.morphAttributes.color;let Gt=yr;Q.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Gt=C.toneMapping);const Ot=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Mt=Ot!==void 0?Ot.length:0,tt=$e.get(Q),Wt=_.state.lights;if(ce===!0&&(me===!0||A!==R)){const cn=A===R&&Q.id===b;fe.setState(Q,A,cn)}let _t=!1;Q.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Wt.state.version||tt.outputColorSpace!==He||Y.isBatchedMesh&&tt.batching===!1||!Y.isBatchedMesh&&tt.batching===!0||Y.isBatchedMesh&&tt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&tt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&tt.instancing===!1||!Y.isInstancedMesh&&tt.instancing===!0||Y.isSkinnedMesh&&tt.skinning===!1||!Y.isSkinnedMesh&&tt.skinning===!0||Y.isInstancedMesh&&tt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&tt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&tt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&tt.instancingMorph===!1&&Y.morphTexture!==null||tt.envMap!==Ye||Q.fog===!0&&tt.fog!==we||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==fe.numPlanes||tt.numIntersection!==fe.numIntersection)||tt.vertexAlphas!==st||tt.vertexTangents!==rt||tt.morphTargets!==Ke||tt.morphNormals!==St||tt.morphColors!==ft||tt.toneMapping!==Gt||tt.morphTargetsCount!==Mt)&&(_t=!0):(_t=!0,tt.__version=Q.version);let mn=tt.currentProgram;_t===!0&&(mn=es(Q,j,Y));let ji=!1,En=!1,Ei=!1;const Dt=mn.getUniforms(),gn=tt.uniforms;if(Ze.useProgram(mn.program)&&(ji=!0,En=!0,Ei=!0),Q.id!==b&&(b=Q.id,En=!0),ji||R!==A){Ze.buffers.depth.getReversed()?(_e.copy(A.projectionMatrix),ex(_e),tx(_e),Dt.setValue(O,"projectionMatrix",_e)):Dt.setValue(O,"projectionMatrix",A.projectionMatrix),Dt.setValue(O,"viewMatrix",A.matrixWorldInverse);const nn=Dt.map.cameraPosition;nn!==void 0&&nn.setValue(O,Ge.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&Dt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Dt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,En=!0,Ei=!0)}if(Y.isSkinnedMesh){Dt.setOptional(O,Y,"bindMatrix"),Dt.setOptional(O,Y,"bindMatrixInverse");const cn=Y.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Dt.setValue(O,"boneTexture",cn.boneTexture,P))}Y.isBatchedMesh&&(Dt.setOptional(O,Y,"batchingTexture"),Dt.setValue(O,"batchingTexture",Y._matricesTexture,P),Dt.setOptional(O,Y,"batchingIdTexture"),Dt.setValue(O,"batchingIdTexture",Y._indirectTexture,P),Dt.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Dt.setValue(O,"batchingColorTexture",Y._colorsTexture,P));const tn=ne.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Ne.update(Y,ne,mn),(En||tt.receiveShadow!==Y.receiveShadow)&&(tt.receiveShadow=Y.receiveShadow,Dt.setValue(O,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(gn.envMap.value=Ye,gn.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&j.environment!==null&&(gn.envMapIntensity.value=j.environmentIntensity),En&&(Dt.setValue(O,"toneMappingExposure",C.toneMappingExposure),tt.needsLights&&Jo(gn,Ei),we&&Q.fog===!0&&Ie.refreshFogUniforms(gn,we),Ie.refreshMaterialUniforms(gn,Q,V,pe,_.state.transmissionRenderTarget[A.id]),Ul.upload(O,Zo(tt),gn,P)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ul.upload(O,Zo(tt),gn,P),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Dt.setValue(O,"center",Y.center),Dt.setValue(O,"modelViewMatrix",Y.modelViewMatrix),Dt.setValue(O,"normalMatrix",Y.normalMatrix),Dt.setValue(O,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const cn=Q.uniformsGroups;for(let nn=0,Et=cn.length;nn<Et;nn++){const hi=cn[nn];z.update(hi,mn),z.bind(hi,mn)}}return mn}function Jo(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function ql(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,j,ne){$e.get(A.texture).__webglTexture=j,$e.get(A.depthTexture).__webglTexture=ne;const Q=$e.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=ne===void 0,Q.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const ne=$e.get(A);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0};const ea=O.createFramebuffer();this.setRenderTarget=function(A,j=0,ne=0){G=A,F=j,N=ne;let Q=!0,Y=null,we=!1,Fe=!1;if(A){const Ye=$e.get(A);if(Ye.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(O.FRAMEBUFFER,null),Q=!1;else if(Ye.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Ye.__hasExternalTextures)P.rebindTextures(A,$e.get(A.texture).__webglTexture,$e.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ke=A.depthTexture;if(Ye.__boundDepthTexture!==Ke){if(Ke!==null&&$e.has(Ke)&&(A.width!==Ke.image.width||A.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const st=A.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Fe=!0);const rt=$e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[j])?Y=rt[j][ne]:Y=rt[j],we=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?Y=$e.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?Y=rt[ne]:Y=rt,k.copy(A.viewport),ie.copy(A.scissor),q=A.scissorTest}else k.copy(U).multiplyScalar(V).floor(),ie.copy(K).multiplyScalar(V).floor(),q=Me;if(ne!==0&&(Y=ea),Ze.bindFramebuffer(O.FRAMEBUFFER,Y)&&Q&&Ze.drawBuffers(A,Y),Ze.viewport(k),Ze.scissor(ie),Ze.setScissorTest(q),we){const Ye=$e.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ye.__webglTexture,ne)}else if(Fe){const Ye=$e.get(A.texture),st=j;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ye.__webglTexture,ne,st)}else if(A!==null&&ne!==0){const Ye=$e.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ye.__webglTexture,ne)}b=-1},this.readRenderTargetPixels=function(A,j,ne,Q,Y,we,Fe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He){Ze.bindFramebuffer(O.FRAMEBUFFER,He);try{const Ye=A.texture,st=Ye.format,rt=Ye.type;if(!ut.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-Q&&ne>=0&&ne<=A.height-Y&&O.readPixels(j,ne,Q,Y,Ue.convert(st),Ue.convert(rt),we)}finally{const Ye=G!==null?$e.get(G).__webglFramebuffer:null;Ze.bindFramebuffer(O.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(A,j,ne,Q,Y,we,Fe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He){const Ye=A.texture,st=Ye.format,rt=Ye.type;if(!ut.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-Q&&ne>=0&&ne<=A.height-Y){Ze.bindFramebuffer(O.FRAMEBUFFER,He);const Ke=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ke),O.bufferData(O.PIXEL_PACK_BUFFER,we.byteLength,O.STREAM_READ),O.readPixels(j,ne,Q,Y,Ue.convert(st),Ue.convert(rt),0);const St=G!==null?$e.get(G).__webglFramebuffer:null;Ze.bindFramebuffer(O.FRAMEBUFFER,St);const ft=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Jv(O,ft,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ke),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,we),O.deleteBuffer(Ke),O.deleteSync(ft),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,ne=0){A.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const Q=Math.pow(2,-ne),Y=Math.floor(A.image.width*Q),we=Math.floor(A.image.height*Q),Fe=j!==null?j.x:0,He=j!==null?j.y:0;P.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,ne,0,0,Fe,He,Y,we),Ze.unbindTexture()};const ta=O.createFramebuffer(),na=O.createFramebuffer();this.copyTextureToTexture=function(A,j,ne=null,Q=null,Y=0,we=null){A.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],j=arguments[2],we=arguments[3]||0,ne=null),we===null&&(Y!==0?(Gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=Y,Y=0):we=0);let Fe,He,Ye,st,rt,Ke,St,ft,Gt;const Ot=A.isCompressedTexture?A.mipmaps[we]:A.image;if(ne!==null)Fe=ne.max.x-ne.min.x,He=ne.max.y-ne.min.y,Ye=ne.isBox3?ne.max.z-ne.min.z:1,st=ne.min.x,rt=ne.min.y,Ke=ne.isBox3?ne.min.z:0;else{const tn=Math.pow(2,-Y);Fe=Math.floor(Ot.width*tn),He=Math.floor(Ot.height*tn),A.isDataArrayTexture?Ye=Ot.depth:A.isData3DTexture?Ye=Math.floor(Ot.depth*tn):Ye=1,st=0,rt=0,Ke=0}Q!==null?(St=Q.x,ft=Q.y,Gt=Q.z):(St=0,ft=0,Gt=0);const Mt=Ue.convert(j.format),tt=Ue.convert(j.type);let Wt;j.isData3DTexture?(P.setTexture3D(j,0),Wt=O.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(P.setTexture2DArray(j,0),Wt=O.TEXTURE_2D_ARRAY):(P.setTexture2D(j,0),Wt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment);const _t=O.getParameter(O.UNPACK_ROW_LENGTH),mn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ji=O.getParameter(O.UNPACK_SKIP_PIXELS),En=O.getParameter(O.UNPACK_SKIP_ROWS),Ei=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ot.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ot.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,st),O.pixelStorei(O.UNPACK_SKIP_ROWS,rt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ke);const Dt=A.isDataArrayTexture||A.isData3DTexture,gn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const tn=$e.get(A),cn=$e.get(j),nn=$e.get(tn.__renderTarget),Et=$e.get(cn.__renderTarget);Ze.bindFramebuffer(O.READ_FRAMEBUFFER,nn.__webglFramebuffer),Ze.bindFramebuffer(O.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let hi=0;hi<Ye;hi++)Dt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$e.get(A).__webglTexture,Y,Ke+hi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$e.get(j).__webglTexture,we,Gt+hi)),O.blitFramebuffer(st,rt,Fe,He,St,ft,Fe,He,O.DEPTH_BUFFER_BIT,O.NEAREST);Ze.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||$e.has(A)){const tn=$e.get(A),cn=$e.get(j);Ze.bindFramebuffer(O.READ_FRAMEBUFFER,ta),Ze.bindFramebuffer(O.DRAW_FRAMEBUFFER,na);for(let nn=0;nn<Ye;nn++)Dt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,tn.__webglTexture,Y,Ke+nn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,tn.__webglTexture,Y),gn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,cn.__webglTexture,we,Gt+nn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,cn.__webglTexture,we),Y!==0?O.blitFramebuffer(st,rt,Fe,He,St,ft,Fe,He,O.COLOR_BUFFER_BIT,O.NEAREST):gn?O.copyTexSubImage3D(Wt,we,St,ft,Gt+nn,st,rt,Fe,He):O.copyTexSubImage2D(Wt,we,St,ft,st,rt,Fe,He);Ze.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else gn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Wt,we,St,ft,Gt,Fe,He,Ye,Mt,tt,Ot.data):j.isCompressedArrayTexture?O.compressedTexSubImage3D(Wt,we,St,ft,Gt,Fe,He,Ye,Mt,Ot.data):O.texSubImage3D(Wt,we,St,ft,Gt,Fe,He,Ye,Mt,tt,Ot):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,we,St,ft,Fe,He,Mt,tt,Ot.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,we,St,ft,Ot.width,Ot.height,Mt,Ot.data):O.texSubImage2D(O.TEXTURE_2D,we,St,ft,Fe,He,Mt,tt,Ot);O.pixelStorei(O.UNPACK_ROW_LENGTH,_t),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ji),O.pixelStorei(O.UNPACK_SKIP_ROWS,En),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ei),we===0&&j.generateMipmaps&&O.generateMipmap(Wt),Ze.unbindTexture()},this.copyTextureToTexture3D=function(A,j,ne=null,Q=null,Y=0){return A.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],j=arguments[3],Y=arguments[4]||0),Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,ne,Q,Y)},this.initRenderTarget=function(A){$e.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Ze.unbindTexture()},this.resetState=function(){F=0,N=0,G=null,Ze.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}}function v1({phase:s,speed:e,showForces:n,isPlaying:r,onPhaseComplete:a}){const u=Ut.useRef(null),f=Ut.useRef(null),d=Ut.useRef(null),[h,m]=Ut.useState([]),v=Ut.useRef({time:0,baNucleons:[],krNucleons:[],incidentNeutron:null,promptNeutrons:[],radiationWaves:[],forceGroup:null});return Ut.useEffect(()=>{const g=u.current;if(!g)return;const x=g.clientWidth,S=g.clientHeight,E=new yg;E.fog=new Wl(461075,.015),f.current=E;const T=new Un(50,x/S,.1,1e3);T.position.set(0,5,25),T.lookAt(0,0,0);const y=new Lg({antialias:!0,alpha:!0});y.setSize(x,S),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.shadowMap.enabled=!0,y.shadowMap.type=$m,g.appendChild(y.domElement);const _=new wg(16777215,.8);E.add(_);const I=new Ix(16777215,1.5);I.position.set(10,20,15),I.castShadow=!0,E.add(I);const L=new Il(54015,2,50);L.position.set(0,0,0),E.add(L);const C=new Il(16726876,2,50);C.position.set(0,0,0),E.add(C);const X=new Kr(.35,16,16),F=new ks({color:16726876,roughness:.2,metalness:.5,emissive:8912923,emissiveIntensity:.5}),N=new ks({color:54015,roughness:.2,metalness:.4,emissive:24435,emissiveIntensity:.5}),G=new zi;E.add(G);const b=142,R=56,k=[],ie=2.3;for(let fe=0;fe<b;fe++){const Te=fe<R,Re=new hn(X,Te?F:N),Ne=Math.acos(1-2*(fe+.5)/b),Ce=Math.PI*(1+Math.sqrt(5))*(fe+.5),ze=ie*Math.pow(Math.random(),.35),Ue=ze*Math.sin(Ne)*Math.cos(Ce),je=ze*Math.sin(Ne)*Math.sin(Ce),z=ze*Math.cos(Ne);Re.position.set(Ue,je,z),Re.castShadow=!0,Re.receiveShadow=!0,k.push({mesh:Re,basePos:new H(Ue,je,z),seed:Math.random()*100}),G.add(Re)}v.current.baNucleons=k,v.current.baGroup=G;const q=new zi;E.add(q);const ue=91,he=36,oe=[],pe=1.9;for(let fe=0;fe<ue;fe++){const Te=fe<he,Re=new hn(X,Te?F:N),Ne=Math.acos(1-2*(fe+.5)/ue),Ce=Math.PI*(1+Math.sqrt(5))*(fe+.5),ze=pe*Math.pow(Math.random(),.35),Ue=ze*Math.sin(Ne)*Math.cos(Ce),je=ze*Math.sin(Ne)*Math.sin(Ce),z=ze*Math.cos(Ne);Re.position.set(Ue,je,z),Re.castShadow=!0,Re.receiveShadow=!0,oe.push({mesh:Re,basePos:new H(Ue,je,z),seed:Math.random()*100}),q.add(Re)}v.current.krNucleons=oe,v.current.krGroup=q;const V=new Kr(.4,16,16),de=new ks({color:16777215,emissive:54015,emissiveIntensity:1.2}),se=new hn(V,de);se.position.set(-25,0,0),E.add(se),v.current.incidentNeutron=se;const U=new zi;E.add(U);const K=new Kr(.5,20,20),Me=new ks({color:16760331,emissive:16755200,emissiveIntensity:2.5,roughness:.1,metalness:.3}),ce=[new H(.4,1.2,.5).normalize(),new H(-.5,-1,.6).normalize(),new H(.1,.4,-1.3).normalize()].map((fe,Te)=>{const Re=new hn(K,Me),Ne=new Il(16760331,2,8);Re.add(Ne);const Ce=new On().setFromPoints([new H(0,0,0),fe.clone().multiplyScalar(-3.5)]),ze=new Xo({color:16760331,transparent:!0,opacity:.85}),Ue=new Bl(Ce,ze);return Re.add(Ue),U.add(Re),{mesh:Re,dir:fe,id:Te}});v.current.promptNeutrons=ce;const me=new zi;E.add(me);const _e=[new H(1,.5,.3).normalize(),new H(-1,.6,-.4).normalize(),new H(.2,1,.6).normalize(),new H(-.3,-1,-.5).normalize(),new H(.7,-.5,1).normalize(),new H(-.6,.4,-1).normalize(),new H(.8,-.8,-.3).normalize(),new H(-.7,.7,.8).normalize()],Pe=45,Ge=_e.map(fe=>{const Te=new Float32Array(Pe*3),Re=new On;Re.setAttribute("position",new fi(Te,3));const Ne=new Xo({color:12616956,transparent:!0,opacity:.9,linewidth:2}),Ce=new Bl(Re,Ne);me.add(Ce);const ze=new H(0,1,0),Ue=new H().crossVectors(fe,ze).normalize();Ue.lengthSq()<.001&&Ue.set(1,0,0);const je=new H().crossVectors(fe,Ue).normalize();return{line:Ce,dir:fe,perp1:Ue,perp2:je,geo:Re,positions:Te}});v.current.radiationWaves=Ge;const We=new zi;E.add(We),v.current.forceGroup=We;const bt=new H(0,1,0),Ct=new H(0,-1,0),at=new xm(Ct,new H(0,4,0),2.5,65416,.6,.4),O=new xm(bt,new H(0,1.5,0),3,16726876,.6,.4);We.add(at),We.add(O);let jt=!1,lt={x:0,y:0},ut=0,Ze=.2,yt=25;const $e=()=>{T.position.x=yt*Math.sin(ut)*Math.cos(Ze),T.position.y=yt*Math.sin(Ze),T.position.z=yt*Math.cos(ut)*Math.cos(Ze),T.lookAt(0,0,0)},P=fe=>{jt=!0,lt={x:fe.clientX,y:fe.clientY}},w=fe=>{if(!jt)return;const Te=fe.clientX-lt.x,Re=fe.clientY-lt.y;ut-=Te*.008,Ze=Math.max(-Math.PI/3,Math.min(Math.PI/3,Ze+Re*.008)),$e(),lt={x:fe.clientX,y:fe.clientY}},te=()=>{jt=!1},ve=fe=>{yt=Math.max(10,Math.min(60,yt+fe.deltaY*.03)),$e()},xe=y.domElement;xe.addEventListener("mousedown",P),window.addEventListener("mousemove",w),window.addEventListener("mouseup",te),xe.addEventListener("wheel",ve);const ge=()=>{const fe=g.clientWidth,Te=g.clientHeight;T.aspect=fe/Te,T.updateProjectionMatrix(),y.setSize(fe,Te)};window.addEventListener("resize",ge);const ke=fe=>{const Te=fe.clone().project(T),Re=g.clientWidth,Ne=g.clientHeight;return{x:(Te.x*.5+.5)*Re,y:(-(Te.y*.5)+.5)*Ne,visible:Te.z<1}};let Ie=new Tg,Be=0;const ct=()=>{d.current=requestAnimationFrame(ct);const fe=Ie.getDelta(),Te=v.current;r&&(Te.time+=fe*e);const Re=Te.time;We.visible=n&&(s===1||s===3),U.visible=!1,me.visible=!1;let Ne=[];if(s===1){se.position.set(-25,0,0),G.position.set(-.8,0,0),q.position.set(.8,0,0),Te.baNucleons.forEach(ze=>{const Ue=Math.sin(Re*4+ze.seed)*.1,je=Math.cos(Re*3+ze.seed)*.1;ze.mesh.position.set(ze.basePos.x+Ue,ze.basePos.y+je,ze.basePos.z)}),Te.krNucleons.forEach(ze=>{const Ue=Math.sin(Re*4.5+ze.seed)*.1,je=Math.cos(Re*3.5+ze.seed)*.1;ze.mesh.position.set(ze.basePos.x+Ue,ze.basePos.y+je,ze.basePos.z)});const Ce=ke(new H(0,4.2,0));Ce.visible&&Ne.push({id:"u235",title:"Атом Урану-235 (²³⁵U)",details:"Суміщені ядра Барію (56p) та Криптону (36p)",badge:"92p⁺ + 143n⁰ (235 нуклонів)",color:"#00d2ff",x:Ce.x,y:Ce.y})}else if(s===2){const Ue=Re%3.5/3.5,je=Vo.lerp(-25,-2,Ue);se.position.set(je,0,0),G.position.set(-.8,0,0),q.position.set(.8,0,0),Te.baNucleons.forEach(J=>{const ae=Math.sin(Re*7+J.seed)*.12;J.mesh.position.set(J.basePos.x+ae,J.basePos.y,J.basePos.z)}),Te.krNucleons.forEach(J=>{const ae=Math.sin(Re*7.5+J.seed)*.12;J.mesh.position.set(J.basePos.x+ae,J.basePos.y,J.basePos.z)});const z=ke(new H(je,1.2,0));z.visible&&Ne.push({id:"n_inc",title:"Тепловий Нейтрон (n⁰)",details:"Влучання в суміщені ядра",badge:"1n⁰ (E = 0.025 еВ)",color:"#5ce1e6",x:z.x,y:z.y});const Ae=ke(new H(0,4.2,0));Ae.visible&&Ne.push({id:"u236",title:"Збуджене ядро Урану-236 (*)",details:"92 протони | 144 нейтрони (E_ex = 6.5 МеВ)",badge:"92p⁺ + 144n⁰",color:"#ff3b5c",x:Ae.x,y:Ae.y})}else if(s===3){se.position.set(-25,0,0);const Ce=4,Ue=Re%Ce/Ce,je=Vo.lerp(.8,3.5,Ue);G.position.set(-je,0,0),q.position.set(je,0,0);const z=ke(new H(-je-1,3.8,0));z.visible&&Ne.push({id:"ba_lobe",title:"Ядро Барію-142 (¹⁴²Ba)",details:"Початок зсуву від початкового стан",badge:"56p⁺ + 86n⁰",color:"#a855f7",x:z.x,y:z.y});const Ae=ke(new H(je+1,3.8,0));Ae.visible&&Ne.push({id:"kr_lobe",title:"Ядро Криптону-91 (⁹¹Kr)",details:"Початок кулонівського відштовхування",badge:"36p⁺ + 55n⁰",color:"#38bdf8",x:Ae.x,y:Ae.y})}else if(s===4){se.position.set(-25,0,0);const Ce=4.5,Ue=Re%Ce/Ce,je=Vo.lerp(2,16,Ue);G.position.set(-je,0,0),q.position.set(je,0,0),U.visible=!0,Te.promptNeutrons.forEach((ae,Le)=>{const De=Ue*28,et=ae.dir.clone().multiplyScalar(De);if(ae.mesh.position.copy(et),Le===0){const mt=ke(et.clone().add(new H(0,.8,0)));mt.visible&&Ne.push({id:`free_n_${Le}`,title:"3 Вільні Нейтрони (n⁰)",details:"Жовті кульки розлітаються у просторі",badge:"3 × 1n⁰ (E = 2 МеВ)",color:"#ffbe0b",x:mt.x,y:mt.y})}}),me.visible=!0;const z=Math.min(32,Ue*32);Te.radiationWaves.forEach(ae=>{const Le=ae.positions,De=Pe;for(let et=0;et<De;et++){const mt=et/(De-1),Bt=mt*z,gt=Math.sin(mt*Math.PI)*.7,pn=Math.sin(Bt*2.5-Re*18),Kt=ae.dir.clone().multiplyScalar(Bt).add(ae.perp1.clone().multiplyScalar(pn*gt)).add(ae.perp2.clone().multiplyScalar(Math.cos(Bt*2.5-Re*18)*gt*.5));Le[et*3]=Kt.x,Le[et*3+1]=Kt.y,Le[et*3+2]=Kt.z}ae.geo.attributes.position.needsUpdate=!0,ae.line.material.opacity=Math.max(0,1-Ue)});const Ae=ke(new H(-je,3.5,0));Ae.visible&&Ne.push({id:"ba142",title:"Атом Барію-142 (¹⁴²Ba)",details:"56 протонів | 86 нейтронів",badge:"56p⁺ + 86n⁰",color:"#a855f7",x:Ae.x,y:Ae.y});const J=ke(new H(je,3.5,0));J.visible&&Ne.push({id:"kr91",title:"Атом Криптону-91 (⁹¹Kr)",details:"36 протонів | 55 нейтронів",badge:"36p⁺ + 55n⁰",color:"#38bdf8",x:J.x,y:J.y}),L.intensity=Math.max(0,5*(1-Ue)),C.intensity=Math.max(0,5*(1-Ue))}else if(s===5){se.position.set(-25,0,0),G.position.set(-17,0,0),q.position.set(17,0,0),U.visible=!0,Te.promptNeutrons.forEach((je,z)=>{const Ae=22+Math.sin(Re*2+je.id)*3,J=je.dir.clone().multiplyScalar(Ae);if(je.mesh.position.copy(J),z===0){const ae=ke(J.clone().add(new H(0,.8,0)));ae.visible&&Ne.push({id:`free_n_${z}`,title:"3 Вільні Нейтрони (n⁰)",details:"Жовті кульки у просторі",badge:"3 × 1n⁰",color:"#ffbe0b",x:ae.x,y:ae.y})}}),me.visible=!0;const Ce=32;Te.radiationWaves.forEach(je=>{const z=je.positions,Ae=Pe;for(let J=0;J<Ae;J++){const ae=J/(Ae-1),Le=ae*Ce,De=Math.sin(ae*Math.PI)*.6,et=Math.sin(Le*2.2-Re*16),mt=je.dir.clone().multiplyScalar(Le).add(je.perp1.clone().multiplyScalar(et*De));z[J*3]=mt.x,z[J*3+1]=mt.y,z[J*3+2]=mt.z}je.geo.attributes.position.needsUpdate=!0,je.line.material.opacity=.8});const ze=ke(new H(-17,3.8,0));ze.visible&&Ne.push({id:"ba142_final",title:"Атом Барію-142 (¹⁴²Ba)",details:"56 протонів | 86 нейтронів",badge:"56p⁺ + 86n⁰",color:"#a855f7",x:ze.x,y:ze.y});const Ue=ke(new H(17,3.8,0));Ue.visible&&Ne.push({id:"kr91_final",title:"Атом Криптону-91 (⁹¹Kr)",details:"36 протонів | 55 нейтронів",badge:"36p⁺ + 55n⁰",color:"#38bdf8",x:Ue.x,y:Ue.y})}G.rotation.y+=.003,q.rotation.y+=.003,Be++,Be%2===0&&m(Ne),y.render(E,T)};return ct(),()=>{cancelAnimationFrame(d.current),xe.removeEventListener("mousedown",P),window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",te),xe.removeEventListener("wheel",ve),window.removeEventListener("resize",ge),y.domElement&&g.contains(y.domElement)&&g.removeChild(y.domElement),y.dispose()}},[s,e,n,r]),le.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[le.jsx("div",{ref:u,style:{width:"100%",height:"100%",position:"relative",cursor:"grab"}}),h.map(g=>le.jsxs("div",{className:"glass-panel",style:{position:"absolute",left:`${g.x}px`,top:`${g.y}px`,transform:"translate(-50%, -100%)",pointerEvents:"none",zIndex:25,padding:"0.4rem 0.75rem",border:`1px solid ${g.color}`,borderRadius:"8px",boxShadow:`0 0 15px ${g.color}40`,backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",whiteSpace:"nowrap"},children:[le.jsx("div",{style:{fontSize:"0.82rem",fontWeight:700,color:"#ffffff",fontFamily:"var(--font-heading)"},children:g.title}),le.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",fontFamily:"var(--font-body)",margin:"2px 0"},children:g.details}),le.jsx("span",{className:"badge",style:{background:`${g.color}25`,color:g.color,border:`1px solid ${g.color}50`,padding:"1px 6px",fontSize:"0.7rem"},children:g.badge})]},g.id))]})}function x1({controlRodLevel:s,isRunning:e,onStatsUpdate:n}){const r=Ut.useRef(null),a=Ut.useRef(null),u=Ut.useRef({fuelGrid:[],controlRods:[],freeNeutrons:[],reactionCount:0,temperature:300,kFactor:1});return Ut.useEffect(()=>{const f=r.current;if(!f)return;const d=f.clientWidth,h=f.clientHeight,m=new yg;m.fog=new Wl(461075,.02);const v=new Un(50,d/h,.1,1e3);v.position.set(0,18,22),v.lookAt(0,0,0);const g=new Lg({antialias:!0,alpha:!0});g.setSize(d,h),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.appendChild(g.domElement);const x=new wg(16777215,.9);m.add(x);const S=new Il(54015,3,40);S.position.set(0,10,0),m.add(S);const E=new Nx(30,15,54015,1976635);E.position.y=-2,m.add(E);const T=new Kr(.8,20,20),y=new ks({color:16726876,metalness:.6,roughness:.2,emissive:5570577,emissiveIntensity:.4}),_=[],I=5,L=4,C=(I-1)*L/2;for(let K=0;K<I;K++)for(let Me=0;Me<I;Me++){const $=new hn(T,y),ce=K*L-C,me=Me*L-C;$.position.set(ce,0,me),m.add($),_.push({mesh:$,pos:new H(ce,0,me),cooldown:0})}u.current.fuelGrid=_;const X=new Xl(.35,.35,12,16),F=new ks({color:4674921,metalness:.9,roughness:.1,emissive:988970}),N=[];for(let K=0;K<I-1;K++)for(let Me=0;Me<I-1;Me++){const $=new hn(X,F),ce=K*L-C+L/2,me=Me*L-C+L/2;$.position.set(ce,5,me),m.add($),N.push({mesh:$,basePos:new H(ce,0,me)})}u.current.controlRods=N;const G=new Kr(.2,12,12),b=new Gl({color:65535}),R=[],k=(K,Me)=>{const $=new hn(G,b);$.position.copy(K),m.add($),R.push({mesh:$,velocity:Me,life:0})};for(let K=0;K<4;K++){const Me=new H((Math.random()-.5)*20,0,(Math.random()-.5)*20),$=new H((Math.random()-.5)*.4,0,(Math.random()-.5)*.4);k(Me,$)}u.current.freeNeutrons=R;let ie=!1,q={x:0,y:0},ue=0,he=.5;const oe=K=>{ie=!0,q={x:K.clientX,y:K.clientY}},pe=K=>{if(!ie)return;const Me=K.clientX-q.x,$=K.clientY-q.y;ue+=Me*.006,he=Math.max(.1,Math.min(1.2,he+$*.006)),q={x:K.clientX,y:K.clientY};const ce=30;v.position.x=ce*Math.sin(ue)*Math.cos(he),v.position.y=ce*Math.sin(he),v.position.z=ce*Math.cos(ue)*Math.cos(he),v.lookAt(0,0,0)},V=()=>{ie=!1},de=g.domElement;de.addEventListener("mousedown",oe),window.addEventListener("mousemove",pe),window.addEventListener("mouseup",V);let se=new Tg;const U=()=>{a.current=requestAnimationFrame(U);const K=se.getDelta(),Me=u.current,$=6-s/100*6;if(N.forEach(ce=>{ce.mesh.position.y=Vo.lerp(ce.mesh.position.y,$,.1)}),e){for(let me=Me.freeNeutrons.length-1;me>=0;me--){const _e=Me.freeNeutrons[me];if(_e.mesh.position.add(_e.velocity),_e.life+=K,_e.mesh.position.length()>22||_e.life>6){m.remove(_e.mesh),_e.mesh.geometry.dispose(),Me.freeNeutrons.splice(me,1);continue}let Pe=!1;if(N.forEach(Ge=>{if(Pe)return;_e.mesh.position.distanceTo(Ge.mesh.position)<1.2&&Ge.mesh.position.y<=4&&(Pe=!0)}),Pe){m.remove(_e.mesh),_e.mesh.geometry.dispose(),Me.freeNeutrons.splice(me,1);continue}_.forEach(Ge=>{if(_e.mesh.position.distanceTo(Ge.pos)<1.2&&Ge.cooldown<=0){Ge.cooldown=1,Me.reactionCount++,Me.temperature+=2.5,Ge.mesh.material.emissive.setHex(16760331),Ge.mesh.material.emissiveIntensity=2;const bt=Math.floor(Math.random()*2)+2;for(let Ct=0;Ct<bt;Ct++){const at=Math.random()*Math.PI*2,O=.3+Math.random()*.2,jt=new H(Math.cos(at)*O,0,Math.sin(at)*O);k(Ge.pos.clone(),jt)}}})}if(_.forEach(me=>{me.cooldown>0&&(me.cooldown-=K,me.mesh.material.emissive.lerp(new xt(5570577),.05),me.mesh.material.emissiveIntensity=Vo.lerp(me.mesh.material.emissiveIntensity,.4,.05))}),Me.temperature=Math.max(300,Me.temperature-K*1.2),Me.freeNeutrons.length<2&&Math.random()<.05){const me=new H((Math.random()-.5)*15,0,(Math.random()-.5)*15),_e=new H((Math.random()-.5)*.3,0,(Math.random()-.5)*.3);k(me,_e)}const ce=Number((1.65-s/100*1.1).toFixed(2));Me.kFactor=ce,n&&n({neutronCount:Me.freeNeutrons.length,reactionTotal:Me.reactionCount,temperature:Math.round(Me.temperature),keff:ce})}g.render(m,v)};return U(),()=>{cancelAnimationFrame(a.current),de.removeEventListener("mousedown",oe),window.removeEventListener("mousemove",pe),window.removeEventListener("mouseup",V),g.domElement&&f.contains(g.domElement)&&f.removeChild(g.domElement),g.dispose()}},[s,e]),le.jsx("div",{ref:r,style:{width:"100%",height:"100%",position:"relative",cursor:"grab"}})}function y1({phase:s,onOpenGallery:e}){const n={1:{title:"Етап 1: Рівновага Ядра U-235",subtitle:"Баланс ядерних та електростатичних сил",desc:"Всередині стабільного ядра Урану-235 (92 протони, 143 нейтрони) діють дві протилежні сили: Сильна ядерна взаємодія утримує нуклони разом, а Електростатична сила розпихає позитивно заряджені протони.",diagramImg:"/screenshots/strong-force.webp",strongVal:95,coulombVal:85},2:{title:"Етап 2: Захоплення Теплового Нейтрона",subtitle:"Формування збудженого ядра U-236",desc:"Повільний (тепловий) нейтрон наближається та поглинається ядром Урану-235. Ядро отримує енергію зв’язку ~6.5 МеВ і переходить у збуджений стан.",diagramImg:"/screenshots/nutron-comming.webp",strongVal:90,coulombVal:88},3:{title:"Етап 3: Накладання та Початок Відштовхування",subtitle:"Суміщений стан ядер Барію-142 та Криптону-91",desc:"Ядро Урану-235 складається із суміщених структур ядер Барію-142 та Криптону-91. Після влучання нейтрона ці два ядра починають зсуватися від початкового накладеного стану, а електростатичне відштовхування розпихає їх у різні боки.",diagramImg:"/screenshots/Uranium destruction.webp",strongVal:60,coulombVal:92},4:{title:"Етап 4: Повний Розліт & E=mc²",subtitle:"Розліт атомів Барію і Криптону та 3 жовті кульки",desc:"Атоми Барію-142 та Криптону-91 повністю відокремлюються та розлітаються у протилежні боки! Одночасно випромінюються 3 вільні нейтрони (жовті кульки) та синусоїдальні хвилі гамма-випромінювання. E = mc² = 200 МеВ.",diagramImg:"/screenshots/mass is converted into energy.webp",strongVal:10,coulombVal:100},5:{title:"Етап 5: Продукти Розпаду та Нейтрони",subtitle:"Формування Ba-142, Kr-91 та 3n",desc:"Утворюються два осколки розпаду (Ba-142 + Kr-91) з великою кінетичною енергією, а також випромінюється 2-3 швидких нейтрони та гамма-кванти.",diagramImg:"/screenshots/the result of the decay of uranium atoms.webp",strongVal:0,coulombVal:0}},r=n[s]||n[1];return le.jsxs("div",{className:"glass-panel",style:{padding:"1.25rem",display:"flex",flexDirection:"column",gap:"1rem",maxHeight:"calc(100vh - 120px)",overflowY:"auto"},children:[le.jsxs("div",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.1)",paddingBottom:"0.75rem"},children:[le.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"#00d2ff",fontSize:"0.85rem",fontFamily:"var(--font-mono)"},children:[le.jsx(Ym,{size:16})," ФІЗИЧНИЙ МЕХАНІЗМ"]}),le.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.1rem",color:"#fff",marginTop:"0.25rem"},children:r.title}),le.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem"},children:r.subtitle})]}),le.jsxs("div",{onClick:e,style:{position:"relative",borderRadius:"10px",overflow:"hidden",border:"1px solid rgba(56, 189, 248, 0.3)",cursor:"pointer",boxShadow:"0 4px 15px rgba(0,0,0,0.4)"},children:[le.jsx("img",{src:r.diagramImg,alt:r.title,style:{width:"100%",height:"140px",objectFit:"cover",display:"block"}}),le.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"0.4rem 0.6rem",background:"rgba(7, 9, 19, 0.85)",WebkitBackdropFilter:"blur(4px)",backdropFilter:"blur(4px)",fontSize:"0.75rem",color:"#00d2ff",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[le.jsx("span",{children:"Схема з /screenshots"}),le.jsx("span",{style:{textDecoration:"underline"},children:"Відкрити галактику схем"})]})]}),le.jsx("p",{style:{color:"#cbd5e1",fontSize:"0.9rem",lineHeight:1.55},children:r.desc}),le.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.6)",padding:"0.85rem",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.05)"},children:[le.jsxs("div",{style:{fontSize:"0.8rem",fontWeight:600,color:"var(--text-muted)",marginBottom:"0.6rem",display:"flex",justifyContent:"space-between"},children:[le.jsx("span",{children:"Баланс Ядерних Сил"}),le.jsx("span",{children:"F_net = F_coulomb - F_strong"})]}),le.jsxs("div",{style:{marginBottom:"0.5rem"},children:[le.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.75rem",color:"#5ce1e6",marginBottom:"0.2rem"},children:[le.jsx("span",{children:"Сильна Ядерна Взаємодія (Притягання)"}),le.jsxs("span",{children:[r.strongVal,"%"]})]}),le.jsx("div",{style:{height:"6px",background:"rgba(255,255,255,0.1)",borderRadius:"3px",overflow:"hidden"},children:le.jsx("div",{style:{width:`${r.strongVal}%`,height:"100%",background:"linear-gradient(90deg, #00d2ff, #0077b6)",transition:"width 0.4s ease"}})})]}),le.jsxs("div",{children:[le.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.75rem",color:"#ff6b84",marginBottom:"0.2rem"},children:[le.jsx("span",{children:"Кулонівське Відштовхування (Протони)"}),le.jsxs("span",{children:[r.coulombVal,"%"]})]}),le.jsx("div",{style:{height:"6px",background:"rgba(255,255,255,0.1)",borderRadius:"3px",overflow:"hidden"},children:le.jsx("div",{style:{width:`${r.coulombVal}%`,height:"100%",background:"linear-gradient(90deg, #ff3b5c, #ffbe0b)",transition:"width 0.4s ease"}})})]})]}),le.jsxs("div",{style:{background:"rgba(10, 15, 29, 0.9)",padding:"0.85rem",borderRadius:"10px",border:"1px solid rgba(255, 190, 11, 0.3)"},children:[le.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",color:"#ffbe0b",fontSize:"0.8rem",fontWeight:700,fontFamily:"var(--font-mono)",marginBottom:"0.4rem"},children:[le.jsx($_,{size:14})," ФОРМУЛА ЕНЕРГІЇ ЕЙНШТЕЙНА"]}),le.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"1rem",color:"#fff",textAlign:"center",margin:"0.3rem 0",letterSpacing:"1px"},children:"E = Δm · c²"}),le.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",lineHeight:1.4},children:["Дефект маси: ",le.jsx("span",{style:{color:"#00d2ff"},children:"Δm = 0.2154 а.о.м."}),le.jsx("br",{}),"Енергія на 1 розпад: ",le.jsx("span",{style:{color:"#ffbe0b"},children:"E ≈ 200 МеВ = 3.2 × 10⁻¹¹ Дж"})]})]})]})}function S1({mode:s,phase:e,setPhase:n,isPlaying:r,setIsPlaying:a,speed:u,setSpeed:f,showForces:d,setShowForces:h,controlRodLevel:m,setControlRodLevel:v,reactorStats:g,onResetReactor:x}){return s==="single"?le.jsxs("div",{className:"glass-panel",style:{position:"absolute",bottom:"1.5rem",left:"50%",transform:"translateX(-50%)",zIndex:40,padding:"0.85rem 1.5rem",display:"flex",alignItems:"center",gap:"1.5rem",maxWidth:"90vw",flexWrap:"wrap",justifyContent:"center"},children:[le.jsx("button",{className:"btn-action primary",onClick:()=>a(!r),style:{width:"42px",height:"42px",padding:0,borderRadius:"50%"},children:r?le.jsx(B_,{size:20}):le.jsx(V_,{size:20,style:{marginLeft:"2px"}})}),le.jsx("div",{style:{display:"flex",gap:"0.4rem",background:"rgba(10, 15, 29, 0.8)",padding:"4px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.08)"},children:[{id:1,label:"1. Рівновага"},{id:2,label:"2. Влучання n"},{id:3,label:"3. Деформація"},{id:4,label:"4. Розщеплення"},{id:5,label:"5. Продукти"}].map(S=>le.jsx("button",{onClick:()=>n(S.id),style:{background:e===S.id?"linear-gradient(135deg, #00d2ff, #0077b6)":"transparent",color:e===S.id?"#ffffff":"var(--text-muted)",border:"none",padding:"0.45rem 0.85rem",borderRadius:"6px",fontFamily:"var(--font-body)",fontSize:"0.82rem",fontWeight:600,cursor:"pointer",transition:"all 0.2s ease"},children:S.label},S.id))}),le.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontSize:"0.8rem",color:"var(--text-muted)"},children:[le.jsx("span",{children:"Швидкість:"}),[.25,.5,1,2].map(S=>le.jsxs("button",{onClick:()=>f(S),style:{background:u===S?"rgba(56, 189, 248, 0.25)":"transparent",color:u===S?"#00d2ff":"var(--text-muted)",border:u===S?"1px solid #00d2ff":"1px solid transparent",borderRadius:"4px",padding:"2px 6px",fontSize:"0.75rem",fontFamily:"var(--font-mono)",cursor:"pointer"},children:[S,"x"]},S))]}),le.jsxs("button",{onClick:()=>h(!d),className:"btn-action",style:{background:d?"rgba(0, 210, 255, 0.2)":"rgba(20, 28, 48, 0.8)",borderColor:d?"#00d2ff":"var(--border-color)",color:d?"#00d2ff":"var(--text-muted)"},children:[le.jsx(D_,{size:16})," Сили ",d?"ON":"OFF"]})]}):le.jsxs("div",{className:"glass-panel",style:{position:"absolute",bottom:"1.5rem",left:"50%",transform:"translateX(-50%)",zIndex:40,padding:"1rem 1.5rem",display:"flex",flexDirection:"column",gap:"0.85rem",width:"900px",maxWidth:"90vw"},children:[le.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[le.jsxs("div",{style:{flex:1,minWidth:"260px"},children:[le.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.85rem",fontWeight:600,color:"#fff",marginBottom:"0.4rem"},children:[le.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[le.jsx(P_,{size:16,color:"#00d2ff"})," Понурення Керуючих Стержнів (Кадмій/Бор):"]}),le.jsxs("span",{style:{color:"#00d2ff",fontFamily:"var(--font-mono)"},children:[m,"%"]})]}),le.jsx("input",{type:"range",min:"0",max:"100",value:m,onChange:S=>v(Number(S.target.value)),className:"custom-slider"}),le.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"0.25rem"},children:[le.jsx("span",{children:"0% (Розгін k > 1)"}),le.jsx("span",{children:"50% (Критичний k = 1.0)"}),le.jsx("span",{children:"100% (Поглинання k < 1)"})]})]}),le.jsxs("button",{className:"btn-action",onClick:x,children:[le.jsx(W_,{size:16})," Скинути Реактор"]})]}),le.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"0.75rem",borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:"0.75rem"},children:[le.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.7)",padding:"0.5rem 0.8rem",borderRadius:"8px",border:"1px solid rgba(0, 210, 255, 0.2)"},children:[le.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Коефіцієнт k_eff"}),le.jsxs("div",{style:{fontSize:"1.2rem",fontFamily:"var(--font-mono)",fontWeight:700,color:g.keff>1.1?"#ff3b5c":g.keff>=.95?"#00d2ff":"#ffbe0b"},children:[g.keff,le.jsx("span",{style:{fontSize:"0.75rem",marginLeft:"0.4rem",fontWeight:400},children:g.keff>1.1?"(Надкритичний)":g.keff>=.95?"(Критичний)":"(Підкритичний)"})]})]}),le.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.7)",padding:"0.5rem 0.8rem",borderRadius:"8px",border:"1px solid rgba(0, 210, 255, 0.2)"},children:[le.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Вільні Нейтрони в Ядрі"}),le.jsx("div",{style:{fontSize:"1.2rem",fontFamily:"var(--font-mono)",fontWeight:700,color:"#5ce1e6"},children:g.neutronCount})]}),le.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.7)",padding:"0.5rem 0.8rem",borderRadius:"8px",border:"1px solid rgba(0, 210, 255, 0.2)"},children:[le.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Всього Розпадів"}),le.jsx("div",{style:{fontSize:"1.2rem",fontFamily:"var(--font-mono)",fontWeight:700,color:"#ffbe0b"},children:g.reactionTotal})]}),le.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.7)",padding:"0.5rem 0.8rem",borderRadius:"8px",border:"1px solid rgba(0, 210, 255, 0.2)"},children:[le.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",display:"flex",alignItems:"center",gap:"0.2rem"},children:[le.jsx(U_,{size:12,color:"#ff3b5c"})," Температура АЗ"]}),le.jsxs("div",{style:{fontSize:"1.2rem",fontFamily:"var(--font-mono)",fontWeight:700,color:g.temperature>600?"#ff3b5c":"#fff"},children:[g.temperature," °C"]})]})]})]})}const M1=[{id:1,title:"1. Ядерні Сили та Стабільність (Strong Nuclear Force)",filename:"/screenshots/strong-force.webp",phaseId:1,desc:"Усередині ядра діють протилежні сили: Сильна ядерна взаємодія утримує нуклони разом, а електростатичне кулонівське відштовхування розпихає позитивні протони."},{id:2,title:"2. Поглинання Нейтрона (Neutron Capture)",filename:"/screenshots/nutron-comming.webp",phaseId:2,desc:"Високошвидкісний тепловий нейтрон влучає в ядро Урану-235, утворюючи збуджене ядро Урану-236 (*)."},{id:3,title:"3. Деформація Ядра (Liquid Drop Deformation)",filename:"/screenshots/Uranium destruction.webp",phaseId:3,desc:"Отримавши лишок енергії, ядро починає коливатися та витягуватись у форму гантелі. Відстань між протонами зростає."},{id:4,title:"4. Перетворення Маси в Енергію (E=mc²)",filename:"/screenshots/mass is converted into energy.webp",phaseId:4,desc:"Коли кулонівське відштовхування переважає ядерне притягання, перешийок розривається! Дефект маси перетворюється на колосальну кінетичну та випромінювану енергію E=mc²."},{id:5,title:"5. Продукти Розпаду (Fission Products)",filename:"/screenshots/the result of the decay of uranium atoms.webp",phaseId:5,desc:"Утворюються два осколки розпаду (наприклад, Барій-142 та Криптон-91) і вивільняється 2-3 вільні нейтрони."},{id:6,title:"Загальна Схема Ядерного Розпаду (Decay Overview)",filename:"/screenshots/The-Decay-of-Uranium.webp",phaseId:1,desc:"Огляд повного циклу розпаду атомів Урану від бомбардування нейтроном до вивільнення фрагментів та гамма-випромінювання."},{id:7,title:"Ланцюгова Ядерна Реакція (Chain Reaction)",filename:"/screenshots/Chain reaction.webp",phaseId:6,desc:"Вивільнені нейтрони влучають у сусідні ядра Урану-235, спричиняючи лавиноподібну самопідтримувану ланцюгову реакцію."}];function E1({isOpen:s,onClose:e,onSelectPhase:n}){const[r,a]=Ut.useState(null);return s?le.jsxs("div",{style:{position:"fixed",inset:0,zIndex:100,background:"rgba(5, 8, 18, 0.85)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},children:[le.jsxs("div",{className:"glass-panel",style:{width:"100%",maxWidth:"1000px",maxHeight:"90vh",display:"flex",flexDirection:"column",overflow:"hidden",border:"1px solid rgba(0, 210, 255, 0.4)",boxShadow:"0 0 40px rgba(0, 210, 255, 0.25)"},children:[le.jsxs("div",{style:{padding:"1.25rem 1.5rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[le.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[le.jsx(A_,{color:"#00d2ff",size:24}),le.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.2rem",color:"#fff"},children:"Галерея Фізичних Схем та Ілюстрацій"})]}),le.jsx("button",{onClick:e,style:{background:"transparent",border:"none",color:"var(--text-muted)",cursor:"pointer",padding:"4px"},children:le.jsx(kp,{size:24})})]}),le.jsxs("div",{style:{padding:"1.5rem",overflowY:"auto",flex:1},children:[le.jsxs("p",{style:{color:"var(--text-muted)",marginBottom:"1.5rem",fontSize:"0.95rem"},children:["Натисніть на схему з папки ",le.jsx("code",{style:{color:"#00d2ff",background:"rgba(0,210,255,0.1)",padding:"2px 6px",borderRadius:"4px"},children:"/screenshots"}),", щоб переглянути пояснення та перейти до відповідного етапу 3D-моделювання:"]}),le.jsx("div",{className:"gallery-grid",children:M1.map(u=>le.jsxs("div",{className:"gallery-card",onClick:()=>a(u),children:[le.jsx("img",{src:u.filename,alt:u.title}),le.jsx("div",{className:"gallery-card-title",children:u.title})]},u.id))})]})]}),r&&le.jsx("div",{style:{position:"fixed",inset:0,zIndex:110,background:"rgba(0, 0, 0, 0.9)",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},children:le.jsxs("div",{className:"glass-panel",style:{maxWidth:"850px",width:"100%",padding:"1.5rem",position:"relative"},children:[le.jsx("button",{onClick:()=>a(null),style:{position:"absolute",top:"1rem",right:"1rem",background:"rgba(255,255,255,0.1)",border:"none",color:"#fff",borderRadius:"50%",width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:le.jsx(kp,{size:20})}),le.jsx("h3",{style:{fontFamily:"var(--font-heading)",color:"#00d2ff",marginBottom:"1rem",paddingRight:"2rem"},children:r.title}),le.jsx("img",{src:r.filename,alt:r.title,style:{width:"100%",maxHeight:"400px",objectFit:"contain",borderRadius:"8px",border:"1px solid rgba(56, 189, 248, 0.3)",marginBottom:"1rem"}}),le.jsx("p",{style:{color:"#e2e8f0",lineHeight:1.6,marginBottom:"1.5rem",fontSize:"1rem"},children:r.desc}),le.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"1rem"},children:le.jsxs("button",{className:"btn-action primary",onClick:()=>{n&&n(r.phaseId),a(null),e()},children:[le.jsx(C_,{size:18})," Перейти в 3D Симуляцію"]})})]})})]}):null}function w1(){const[s,e]=Ut.useState("single"),[n,r]=Ut.useState(1),[a,u]=Ut.useState(!0),[f,d]=Ut.useState(1),[h,m]=Ut.useState(!0),[v,g]=Ut.useState(50),[x,S]=Ut.useState(!0),[E,T]=Ut.useState({neutronCount:4,reactionTotal:0,temperature:300,keff:1}),[y,_]=Ut.useState(!1),I=C=>{C===6?e("chain"):(e("single"),r(C))},L=()=>{g(50),T({neutronCount:4,reactionTotal:0,temperature:300,keff:1})};return le.jsxs("div",{style:{width:"100vw",height:"100vh",position:"relative",overflow:"hidden",backgroundColor:"var(--bg-dark)"},children:[le.jsxs("header",{className:"app-header glass-panel",children:[le.jsxs("div",{className:"brand-title",children:[le.jsx(Ym,{size:28,className:"pulse-glow",color:"#00d2ff"}),le.jsxs("div",{children:[le.jsx("div",{children:"NUCLEAR FISSION 3D"}),le.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",fontWeight:400},children:"Візуалізація Ядерного Розпаду на Three.js"})]})]}),le.jsxs("div",{className:"mode-tabs",children:[le.jsxs("button",{className:`tab-btn ${s==="single"?"active":""}`,onClick:()=>e("single"),children:[le.jsx(j_,{size:16})," 1. Подетальний Розпад ²³⁵U"]}),le.jsxs("button",{className:`tab-btn ${s==="chain"?"active":""}`,onClick:()=>e("chain"),children:[le.jsx(k_,{size:16})," 2. Ланцюгова Реакція"]})]}),le.jsxs("button",{className:"btn-action",onClick:()=>_(!0),style:{background:"linear-gradient(135deg, rgba(0,210,255,0.15), rgba(255,59,92,0.15))"},children:[le.jsx(F_,{size:18,color:"#00d2ff"}),le.jsx("span",{children:"Схеми з /screenshots"})]})]}),le.jsx("main",{style:{width:"100%",height:"100%",position:"absolute",inset:0},children:s==="single"?le.jsx(v1,{phase:n,speed:f,showForces:h,isPlaying:a}):le.jsx(x1,{controlRodLevel:v,isRunning:x,onStatsUpdate:T})}),s==="single"&&le.jsx("aside",{style:{position:"absolute",top:"5.5rem",left:"1.5rem",width:"360px",maxWidth:"calc(100vw - 3rem)",zIndex:30},children:le.jsx(y1,{phase:n,onOpenGallery:()=>_(!0)})}),le.jsx(S1,{mode:s,phase:n,setPhase:r,isPlaying:a,setIsPlaying:u,speed:f,setSpeed:d,showForces:h,setShowForces:m,controlRodLevel:v,setControlRodLevel:g,reactorStats:E,onResetReactor:L}),le.jsx(E1,{isOpen:y,onClose:()=>_(!1),onSelectPhase:I})]})}y_.createRoot(document.getElementById("root")).render(le.jsx(h_.StrictMode,{children:le.jsx(w1,{})}));

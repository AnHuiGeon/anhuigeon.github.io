(self.webpackChunkanhuigeon_github_io=self.webpackChunkanhuigeon_github_io||[]).push([[678,49],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(!a(e[c],i[c]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!a(c.value[1],i.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!a(e[s[c]],i[s[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),d.canUseDOM?t(c):r&&(c=r(c))}var d=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(d,"canUseDOM",l),d}}},1863:function(e,t,r){"use strict";r.r(t);var n=r(7294);t.default=function(){return n.createElement(n.Fragment,null,n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"))}},5306:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Ke}});var n,o,a,i,l=r(7294),c=r(9),s=l.createContext(null),u=(0,c.createGlobalStyle)([":root{font-size:100%;--width:980px;--min-width:320px;--nav-height:50px;--footer-height:60px;--device-xs-max-width:450px;--device-sm-max-width:768px;--device-md-max-width:1024px;--device-lg-max-width:1441px;}.light{--color-text:#1d1d1d;--color-text-2:#1d1d1d;--color-text-3:#696969;--color-white:#ffffff;--color-nav-bar:rgba(255,255,255,0.7);--color-nav-border:rgba(200,200,200,0.7);--color-category-button:#f2f2f2;--color-background:#f2f2f2;--color-post-background:#ffffff;--color-card:#ffffff;--color-code:#f2f2f2;--color-code-block:#fafafa;--color-code-highlight:rgba(0,0,0,0.05);--color-code-highlight-border:rgba(0,0,0,0.2);--color-gray-1:#f2f2f2;--color-gray-2:#e0e0e0;--color-gray-3:#d1d1d1;--color-gray-4:#868686;--color-gray-5:#6e6e6e;--color-gray-6:#696969;}.dark{--color-text:#e6e6e6;--color-text-2:#d1d1d1;--color-text-3:#8c8c8c;--color-white:#e6e6e6;--color-nav-bar:rgba(29,29,29,0.7);--color-nav-border:rgba(255,255,255,0.2);--color-category-button:#484848;--color-background:#1c1c1c;--color-post-background:#1c1c1c;--color-card:#2c2c2c;--color-code:#3a3a3a;--color-code-block:#242424;--color-code-highlight:rgba(255,255,255,0.05);--color-code-highlight-border:rgba(255,255,255,0.2);--color-gray-1:#f2f2f2;--color-gray-2:#e0e0e0;--color-gray-3:#d1d1d1;--color-gray-4:#868686;--color-gray-5:#6e6e6e;--color-gray-6:#696969;}html,body,#___gatsby,#gatsby-focus-wrapper{margin:0 auto;padding:0;min-height:100%;background-color:var(--color-post-background);}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';background-color:var(--color-post-background);-webkit-font-smoothing:antialiased;*{color:var(--color-text);}}:lang(ko){word-break:keep-all;}ul,ol,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,hgroup,p,blockquote,figure,form,fieldset,input,legend,pre,abbr,button{margin:0;padding:0;}h1 a,li a{text-decoration:none;}a{text-decoration:none;}"]),d={deviceSizes:{xs:"450px",sm:"768px",md:"1024px",lg:"1441px"}},f=function(){var e=(0,l.useState)(null),t=e[0],r=e[1];return(0,l.useEffect)((function(){"undefined"!=typeof window&&r(window.__theme),window.__onThemeChange=function(e){r(e)}}),[]),[t]},p=r(5444),m=r.p+"static/huigeon-bb65a2196ab06c159f0c256bfdc62660.jpg",h=c.default.div.withConfig({displayName:"sideBar__About",componentId:"sc-145b0gf-0"})(["text-align:center;max-width:480px;margin:10px auto auto;"]),g=c.default.div.withConfig({displayName:"sideBar__CoverAuthorImage",componentId:"sc-145b0gf-1"})(["max-width:150px;max-height:150px;margin:0 auto 10px;border-radius:100%;overflow:hidden;background-color:var(--color-post-background);"]),b=c.default.img.withConfig({displayName:"sideBar__Img",componentId:"sc-145b0gf-2"})(["max-width:150px;max-height:150px;width:100%;height:100%;border-radius:50%;transition:transform 0.35s;&:hover{transform:scale3d(0.90,0.90,1);}"]),y=c.default.header.withConfig({displayName:"sideBar__SideHeader",componentId:"sc-145b0gf-3"})(["width:100%;height:50px;line-height:50px;position:sticky;top:0;z-index:5;opacity:0.85;transition:.5s ease-out;text-align:center;font-weight:900;font-size:24px;backdrop-filter:blur(10px);background-color:var(--color-post-background);}&.scrolled{box-shadow:0 4px 4px rgba(31,35,46,.15);transition:box-shadow .5s ease-in;}"]),v=c.default.aside.withConfig({displayName:"sideBar__SideMenu",componentId:"sc-145b0gf-4"})(["transform:translateX(-125%);top:0;position:fixed;display:flex;flex-direction:column;justify-content:space-between;width:100%;height:100%;padding:10px;padding-top:50px;background-color:var(--color-post-background);box-shadow:0 1px 1px 0 rgba(31,35,46,.15);z-index:1;transition:all .35s;"]),w=c.default.span.withConfig({displayName:"sideBar__HamburgerSpan",componentId:"sc-145b0gf-5"})(["display:block;position:absolute;width:100%;height:5px;border-radius:10px;background:#000;transition:all .35s;&:nth-child(1){top:0;}&:nth-child(2){top:50%;transform:translateY(-50%);}&:nth-child(3){bottom:0;}"]),E=c.default.label.attrs({htmlFor:"menuicon"}).withConfig({displayName:"sideBar__HamburgerLabel",componentId:"sc-145b0gf-6"})(["display:block;width:30px;height:30px;position:fixed;top:10px;left:10px;z-index:5;cursor:pointer;"]),C=c.default.input.attrs({type:"checkbox",id:"menuicon"}).withConfig({displayName:"sideBar__HamburgerInput",componentId:"sc-145b0gf-7"})(["display:none;&:checked{z-index:2;+","{","{&:nth-child(1){top:50%;transform:translateY(-50%) rotate(225deg);}&:nth-child(2){opacity:0;}&:nth-child(3){bottom:50%;transform:translateY(50%) rotate(-225deg);}}+","{transform:translateX(0);}}}"],E,w,v),x=function(){var e=(0,l.useState)(!1),t=e[0],r=e[1],n=function(){r(window.pageYOffset>0)};(0,l.useEffect)((function(){return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[t]);var o=(0,l.useState)(!1),a=o[0],i=o[1];return(0,l.useEffect)((function(){var e=document.getElementsByTagName("body")[0];e.style.overflow=a?"hidden":"visible"}),[a]),l.createElement(l.Fragment,null,l.createElement(y,{className:t?"scrolled":void 0,"aria-label":"Global Navigation"},l.createElement("div",null,"sidebar.js : SideHeader")),l.createElement(C,{onChange:function(e){return t=e.target,console.log("hamburger.target.checked:",t.checked),void i(t.checked);var t}}),l.createElement(E,null,l.createElement(w,null),l.createElement(w,null),l.createElement(w,null)),l.createElement(v,null,l.createElement("div",null,"sidebar.js : Aside"),l.createElement(h,null,l.createElement(g,null,l.createElement(p.rU,{to:"/"},l.createElement(b,{src:m,alt:"undefined"}))))))},T=c.default.span.withConfig({displayName:"toggle__ChildSpan",componentId:"sc-1njluen-0"})(['position:fixed;cursor:pointer;width:50px;height:20px;background-color:#aaa;-webkit-transition:.4s;transition:.4s;border-radius:25px;&:before{position:fixed;content:"";margin-top:1px;margin-left:3px;height:18px;width:18px;background-color:#fff;-webkit-transition:.4s;transition:.4s;border-radius:50%;}']),j=c.default.label.withConfig({displayName:"toggle__Switch",componentId:"sc-1njluen-1"})(["position:fixed;z-index:10;top:15px;right:20px;display:block;width:50px;height:25px;"]),k=c.default.input.attrs({type:"checkbox"}).withConfig({displayName:"toggle__ChildInput",componentId:"sc-1njluen-2"})(["opacity:0;width:0;height:0;&:checked + ","{background-color:#2196F3;}&:focus + ","{box-shadow:0 0 1px #2196F3;}&:checked + ","{&:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px);}}"],T,T,T),A=function(){var e=(0,l.useContext)(s);return l.createElement(j,null,l.createElement(k,{checked:"dark"===e,onChange:function(e){return window.__setPreferredTheme(e.target.checked?"dark":"light")}}),l.createElement(T,null))},S=function(){return l.createElement(O,{role:"contentinfo"},l.createElement(_,{"aria-label":"Copyright"},l.createElement("div",null,"footer.js")))},O=c.default.footer.withConfig({displayName:"footer__FooterBox",componentId:"sc-r8dgsb-0"})(["display:flex;text-align:center;justify-content:center;align-items:center;height:var(--footer-height);background-color:var(--color-post-background);"]),_=c.default.span.withConfig({displayName:"footer__Copyright",componentId:"sc-r8dgsb-1"})(["color:var(--color-gray-6);"]),I=c.default.div.withConfig({displayName:"layout__Container",componentId:"sc-bp6rz7-0"})(["margin:0 auto;max-width:1680px;height:100%;min-height:calc(100vh - var(--footer-height));background-color:var(--color-post-background);"]),P=function(e){var t=e.children,r=f()[0];return l.createElement(c.ThemeProvider,{theme:d},l.createElement(s.Provider,{value:r},l.createElement(u,null),l.createElement(I,null,l.createElement(A,null),l.createElement(x,null),t),l.createElement(S,null)))},N=r(5697),L=r.n(N),M=r(4839),B=r.n(M),R=r(2993),H=r.n(R),F=r(6494),z=r.n(F),Y="bodyAttributes",U="htmlAttributes",q="titleAttributes",D={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},K=(Object.keys(D).map((function(e){return D[e]})),"charset"),X="cssText",V="href",W="http-equiv",G="innerHTML",$="itemprop",J="name",Q="property",Z="rel",ee="src",te="target",re={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ne="defaultTitle",oe="defer",ae="encodeSpecialCharacters",ie="onChangeClientState",le="titleTemplate",ce=Object.keys(re).reduce((function(e,t){return e[re[t]]=t,e}),{}),se=[D.NOSCRIPT,D.SCRIPT,D.STYLE],ue="data-react-helmet",de="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fe=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},pe=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},he=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},ge=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},be=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ye=function(e){var t=xe(e,D.TITLE),r=xe(e,le);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=xe(e,ne);return t||n||void 0},ve=function(e){return xe(e,ie)||function(){}},we=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return me({},e,t)}),{})},Ee=function(e,t){return t.filter((function(e){return void 0!==e[D.BASE]})).map((function(e){return e[D.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},Ce=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Se("Helmet: "+e+' should be of type "Array". Instead found type "'+de(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var l=a[i],c=l.toLowerCase();-1===t.indexOf(c)||r===Z&&"canonical"===e[r].toLowerCase()||c===Z&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(l)||l!==G&&l!==X&&l!==$||(r=l)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var l=a[i],c=z()({},n[l],o[l]);n[l]=c}return e}),[]).reverse()},xe=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Te=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Te(e)}),0)}),je=function(e){return clearTimeout(e)},ke="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Te:r.g.requestAnimationFrame||Te,Ae="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||je:r.g.cancelAnimationFrame||je,Se=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Oe=null,_e=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;Ne(D.BODY,n),Ne(D.HTML,o),Pe(d,f);var p={baseTag:Le(D.BASE,r),linkTags:Le(D.LINK,a),metaTags:Le(D.META,i),noscriptTags:Le(D.NOSCRIPT,l),scriptTags:Le(D.SCRIPT,s),styleTags:Le(D.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,m,h)},Ie=function(e){return Array.isArray(e)?e.join(""):e},Pe=function(e,t){void 0!==e&&document.title!==e&&(document.title=Ie(e)),Ne(D.TITLE,t)},Ne=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(ue),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),l=0;l<i.length;l++){var c=i[l],s=t[c]||"";r.getAttribute(c)!==s&&r.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var u=a.indexOf(c);-1!==u&&a.splice(u,1)}for(var d=a.length-1;d>=0;d--)r.removeAttribute(a[d]);o.length===a.length?r.removeAttribute(ue):r.getAttribute(ue)!==i.join(",")&&r.setAttribute(ue,i.join(","))}},Le=function(e,t){var r=document.head||document.querySelector(D.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===G)r.innerHTML=t.innerHTML;else if(n===X)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute(ue,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},Me=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Be=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[re[r]||r]=e[r],t}),t)},Re=function(e,t,r){switch(e){case D.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[ue]=!0,o=Be(r,n),[l.createElement(D.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=Me(r),a=Ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+be(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+be(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case Y:case U:return{toComponent:function(){return Be(t)},toString:function(){return Me(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[ue]=!0,n);return Object.keys(t).forEach((function(e){var r=re[e]||e;if(r===G||r===X){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),l.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===G||e===X)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+be(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===se.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},He=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:Re(D.BASE,t,n),bodyAttributes:Re(Y,r,n),htmlAttributes:Re(U,o,n),link:Re(D.LINK,a,n),meta:Re(D.META,i,n),noscript:Re(D.NOSCRIPT,l,n),script:Re(D.SCRIPT,c,n),style:Re(D.STYLE,s,n),title:Re(D.TITLE,{title:d,titleAttributes:f},n)}},Fe=B()((function(e){return{baseTag:Ee([V,te],e),bodyAttributes:we(Y,e),defer:xe(e,oe),encode:xe(e,ae),htmlAttributes:we(U,e),linkTags:Ce(D.LINK,[Z,V],e),metaTags:Ce(D.META,[J,K,W,Q,$],e),noscriptTags:Ce(D.NOSCRIPT,[G],e),onChangeClientState:ve(e),scriptTags:Ce(D.SCRIPT,[ee,G],e),styleTags:Ce(D.STYLE,[X],e),title:ye(e),titleAttributes:we(q,e)}}),(function(e){Oe&&Ae(Oe),e.defer?Oe=ke((function(){_e(e,(function(){Oe=null}))})):(_e(e),Oe=null)}),He)((function(){return null})),ze=(o=Fe,i=a=function(e){function t(){return fe(this,t),ge(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!H()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case D.SCRIPT:case D.NOSCRIPT:return{innerHTML:t};case D.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return me({},n,((t={})[r.type]=[].concat(n[r.type]||[],[me({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case D.TITLE:return me({},o,((t={})[n.type]=i,t.titleAttributes=me({},a),t));case D.BODY:return me({},o,{bodyAttributes:me({},a)});case D.HTML:return me({},o,{htmlAttributes:me({},a)})}return me({},o,((r={})[n.type]=me({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=me({},t);return Object.keys(e).forEach((function(t){var n;r=me({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return l.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[ce[r]||r]=e[r],t}),t)}(he(o,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case D.LINK:case D.META:case D.NOSCRIPT:case D.SCRIPT:case D.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=he(e,["children"]),n=me({},r);return t&&(n=this.mapChildrenToProps(t,n)),l.createElement(o,n)},pe(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(l.Component),a.propTypes={base:L().object,bodyAttributes:L().object,children:L().oneOfType([L().arrayOf(L().node),L().node]),defaultTitle:L().string,defer:L().bool,encodeSpecialCharacters:L().bool,htmlAttributes:L().object,link:L().arrayOf(L().object),meta:L().arrayOf(L().object),noscript:L().arrayOf(L().object),onChangeClientState:L().func,script:L().arrayOf(L().object),style:L().arrayOf(L().object),title:L().string,titleAttributes:L().object,titleTemplate:L().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=He({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ze.renderStatic=ze.rewind;function Ye(e){var t=e.meta,r=e.description,n=e.lang,o=e.title,a=(0,p.K2)("764694655").site,i=r||a.siteMetadata.description;return l.createElement(ze,{htmlAttributes:{lang:n},title:o,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(t)})}Ye.defaultProps={lang:"ko",meta:[],description:""};var Ue=Ye,qe=r(1863),De=function(e){e.data;return l.createElement(qe.default,null)},Ke=function(e){var t=e.data;return console.log("data:",t),l.createElement(P,null,l.createElement(Ue,{title:t.site.siteMetadata.title}),l.createElement(De,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-d5460ea149c5508ea7c1.js.map
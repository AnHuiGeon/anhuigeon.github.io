(self.webpackChunkanhuigeon_github_io=self.webpackChunkanhuigeon_github_io||[]).push([[678,49],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(!a(e[c],i[c]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!a(c.value[1],i.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!a(e[s[c]],i[s[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),d.canUseDOM?t(c):r&&(c=r(c))}var d=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(d,"canUseDOM",l),d}}},1863:function(e,t,r){"use strict";r.r(t);var n=r(7294);t.default=function(){return n.createElement(n.Fragment,null,n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"),n.createElement("div",null,"postCard.js"))}},3674:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Ye}});var n,o,a,i,l=r(7294),c=r(9),s=l.createContext(null),u=(0,c.createGlobalStyle)([":root{font-size:100%;--width:980px;--min-width:320px;--nav-height:50px;--footer-height:60px;--device-xs-max-width:450px;--device-sm-max-width:768px;--device-md-max-width:1024px;--device-lg-max-width:1441px;}.light{--color-text:#1d1d1d;--color-text-2:#1d1d1d;--color-text-3:#696969;--color-white:#ffffff;--color-nav-bar:rgba(255,255,255,0.7);--color-nav-border:rgba(200,200,200,0.7);--color-category-button:#f2f2f2;--color-background:#f2f2f2;--color-post-background:#ffffff;--color-card:#ffffff;--color-code:#f2f2f2;--color-code-block:#fafafa;--color-code-highlight:rgba(0,0,0,0.05);--color-code-highlight-border:rgba(0,0,0,0.2);--color-gray-1:#f2f2f2;--color-gray-2:#e0e0e0;--color-gray-3:#d1d1d1;--color-gray-4:#868686;--color-gray-5:#6e6e6e;--color-gray-6:#696969;}.dark{--color-text:#e6e6e6;--color-text-2:#d1d1d1;--color-text-3:#8c8c8c;--color-white:#e6e6e6;--color-nav-bar:rgba(29,29,29,0.7);--color-nav-border:rgba(255,255,255,0.2);--color-category-button:#484848;--color-background:#1c1c1c;--color-post-background:#1c1c1c;--color-card:#2c2c2c;--color-code:#3a3a3a;--color-code-block:#242424;--color-code-highlight:rgba(255,255,255,0.05);--color-code-highlight-border:rgba(255,255,255,0.2);--color-gray-1:#f2f2f2;--color-gray-2:#e0e0e0;--color-gray-3:#d1d1d1;--color-gray-4:#868686;--color-gray-5:#6e6e6e;--color-gray-6:#696969;}html,body,#___gatsby,#gatsby-focus-wrapper{margin:0 auto;padding:0;min-height:100%;background-color:var(--color-post-background);}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';background-color:var(--color-post-background);-webkit-font-smoothing:antialiased;*{color:var(--color-text);}}:lang(ko){word-break:keep-all;}ul,ol,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,hgroup,p,blockquote,figure,form,fieldset,input,legend,pre,abbr,button{margin:0;padding:0;}h1 a,li a{text-decoration:none;}a{text-decoration:none;}"]),d={deviceSizes:{xs:"450px",sm:"768px",md:"1024px",lg:"1441px"}},f=function(){var e=(0,l.useState)(null),t=e[0],r=e[1],n=(0,l.useCallback)((function(){var e="dark"===t?"light":"dark";r(e),window.__setPreferredTheme(e)}),[t]);return(0,l.useEffect)((function(){"undefined"!=typeof window&&r(window.__theme),window.__onThemeChange=function(e){r(e)}}),[]),[t,n]},p=c.default.header.withConfig({displayName:"sideBar__SideHeader",componentId:"sc-145b0gf-0"})(["width:100%;height:50px;line-height:50px;position:sticky;top:0;z-index:1;opacity:0.85;transition:.5s ease-out;text-align:center;font-weight:900;font-size:24px;backdrop-filter:blur(10px);background-color:var(--color-post-background);}&.scrolled{box-shadow:0 4px 4px rgba(31,35,46,.15);transition:box-shadow .5s ease-in;}}"]),h=c.default.aside.withConfig({displayName:"sideBar__SideMenu",componentId:"sc-145b0gf-1"})(["left:-125%;position:fixed;display:flex;flex-direction:column;justify-content:space-between;width:100%;height:100%;padding:10px;background-color:var(--color-post-background);box-shadow:0 1px 1px 0 rgba(31,35,46,.15);z-index:1;transition:all .35s;"]),m=c.default.span.withConfig({displayName:"sideBar__HamburgerSpan",componentId:"sc-145b0gf-2"})(["display:block;position:absolute;width:100%;height:5px;border-radius:10px;background:#000;transition:all .35s;&:nth-child(1){top:0;}&:nth-child(2){top:50%;transform:translateY(-50%);}&:nth-child(3){bottom:0;}"]),g=c.default.label.attrs({htmlFor:"menuicon"}).withConfig({displayName:"sideBar__HamburgerLabel",componentId:"sc-145b0gf-3"})(["display:block;width:30px;height:30px;position:fixed;top:10px;left:10px;z-index:3;cursor:pointer;"]),b=c.default.input.attrs({type:"checkbox",id:"menuicon"}).withConfig({displayName:"sideBar__HamburgerInput",componentId:"sc-145b0gf-4"})(["display:none;&:checked{z-index:2;+","{","{&:nth-child(1){top:50%;transform:translateY(-50%) rotate(225deg);}&:nth-child(2){opacity:0;}&:nth-child(3){bottom:50%;transform:translateY(50%) rotate(-225deg);}}+","{left:0;}}}"],g,m,h),y=function(){var e=(0,l.useState)(!1),t=e[0],r=e[1],n=function(){r(window.pageYOffset>0)};(0,l.useEffect)((function(){return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[t]);var o=(0,l.useState)(!1),a=o[0],i=o[1];return(0,l.useEffect)((function(){var e=document.getElementsByTagName("body")[0];e.style.overflow=a?"hidden":"visible"}),[a]),l.createElement(l.Fragment,null,l.createElement(p,{className:t?"scrolled":void 0,"aria-label":"Global Navigation"},l.createElement("div",null,"sidebar.js : SideHeader")),l.createElement(b,{onChange:function(e){return t=e.target,console.log("hamburger.target.checked:",t.checked),void i(t.checked);var t}}),l.createElement(g,null,l.createElement(m,null),l.createElement(m,null),l.createElement(m,null)),l.createElement(h,null,l.createElement("div",null,"sidebar.js : Aside")))},v=c.default.span.withConfig({displayName:"toggle__ChildSpan",componentId:"sc-1njluen-0"})(['position:fixed;cursor:pointer;width:50px;height:20px;background-color:#aaa;-webkit-transition:.4s;transition:.4s;border-radius:25px;&:before{position:fixed;content:"";margin-top:1px;margin-left:3px;height:18px;width:18px;background-color:#fff;-webkit-transition:.4s;transition:.4s;border-radius:50%;}']),w=c.default.label.withConfig({displayName:"toggle__Switch",componentId:"sc-1njluen-1"})(["position:fixed;z-index:2;top:15px;right:20px;display:block;width:50px;height:25px;"]),C=c.default.input.attrs({type:"checkbox"}).withConfig({displayName:"toggle__ChildInput",componentId:"sc-1njluen-2"})(["opacity:0;width:0;height:0;&:checked + ","{background-color:#2196F3;}&:focus + ","{box-shadow:0 0 1px #2196F3;}&:checked + ","{&:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px);}}"],v,v,v),E=function(e){e.themeHookCallback;var t=(0,l.useContext)(s);return l.createElement(w,null,l.createElement(C,{checked:"dark"===t,onChange:function(e){return window.__setPreferredTheme(e.target.checked?"dark":"light")}}),l.createElement(v,null))},T=function(){return l.createElement(x,{role:"contentinfo"},l.createElement(j,{"aria-label":"Copyright"},l.createElement("div",null,"footer.js")))},x=c.default.footer.withConfig({displayName:"footer__FooterBox",componentId:"sc-r8dgsb-0"})(["display:flex;text-align:center;justify-content:center;align-items:center;height:var(--footer-height);background-color:var(--color-post-background);"]),j=c.default.span.withConfig({displayName:"footer__Copyright",componentId:"sc-r8dgsb-1"})(["color:var(--color-gray-6);"]),k=c.default.div.withConfig({displayName:"layout__Container",componentId:"sc-bp6rz7-0"})(["margin:0 auto;max-width:1680px;height:100%;min-height:calc(100vh - var(--footer-height));background-color:var(--color-post-background);"]),S=function(e){var t=e.children,r=f(),n=r[0],o=r[1];return l.createElement(c.ThemeProvider,{theme:d},l.createElement(s.Provider,{value:n},l.createElement(u,null),l.createElement(k,null,l.createElement(E,{themeHookCallback:o}),l.createElement(y,null),t),l.createElement(T,null)))},A=r(5697),O=r.n(A),_=r(4839),I=r.n(_),P=r(2993),N=r.n(P),L=r(6494),M=r.n(L),B="bodyAttributes",H="htmlAttributes",R="titleAttributes",F={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},z=(Object.keys(F).map((function(e){return F[e]})),"charset"),Y="cssText",q="href",D="http-equiv",U="innerHTML",K="itemprop",V="name",W="property",X="rel",G="src",$="target",J={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Q="defaultTitle",Z="defer",ee="encodeSpecialCharacters",te="onChangeClientState",re="titleTemplate",ne=Object.keys(J).reduce((function(e,t){return e[J[t]]=t,e}),{}),oe=[F.NOSCRIPT,F.SCRIPT,F.STYLE],ae="data-react-helmet",ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ce=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ue=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},de=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},fe=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},pe=function(e){var t=ye(e,F.TITLE),r=ye(e,re);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=ye(e,Q);return t||n||void 0},he=function(e){return ye(e,te)||function(){}},me=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return se({},e,t)}),{})},ge=function(e,t){return t.filter((function(e){return void 0!==e[F.BASE]})).map((function(e){return e[F.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},be=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Te("Helmet: "+e+' should be of type "Array". Instead found type "'+ie(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var l=a[i],c=l.toLowerCase();-1===t.indexOf(c)||r===X&&"canonical"===e[r].toLowerCase()||c===X&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(l)||l!==U&&l!==Y&&l!==K||(r=l)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var l=a[i],c=M()({},n[l],o[l]);n[l]=c}return e}),[]).reverse()},ye=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ve=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){ve(e)}),0)}),we=function(e){return clearTimeout(e)},Ce="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ve:r.g.requestAnimationFrame||ve,Ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||we:r.g.cancelAnimationFrame||we,Te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},xe=null,je=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;Ae(F.BODY,n),Ae(F.HTML,o),Se(d,f);var p={baseTag:Oe(F.BASE,r),linkTags:Oe(F.LINK,a),metaTags:Oe(F.META,i),noscriptTags:Oe(F.NOSCRIPT,l),scriptTags:Oe(F.SCRIPT,s),styleTags:Oe(F.STYLE,u)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(m[e]=p[e].oldTags)})),t&&t(),c(e,h,m)},ke=function(e){return Array.isArray(e)?e.join(""):e},Se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ke(e)),Ae(F.TITLE,t)},Ae=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(ae),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),l=0;l<i.length;l++){var c=i[l],s=t[c]||"";r.getAttribute(c)!==s&&r.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var u=a.indexOf(c);-1!==u&&a.splice(u,1)}for(var d=a.length-1;d>=0;d--)r.removeAttribute(a[d]);o.length===a.length?r.removeAttribute(ae):r.getAttribute(ae)!==i.join(",")&&r.setAttribute(ae,i.join(","))}},Oe=function(e,t){var r=document.head||document.querySelector(F.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===U)r.innerHTML=t.innerHTML;else if(n===Y)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute(ae,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},_e=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Ie=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[J[r]||r]=e[r],t}),t)},Pe=function(e,t,r){switch(e){case F.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[ae]=!0,o=Ie(r,n),[l.createElement(F.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=_e(r),a=ke(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+fe(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+fe(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case B:case H:return{toComponent:function(){return Ie(t)},toString:function(){return _e(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[ae]=!0,n);return Object.keys(t).forEach((function(e){var r=J[e]||e;if(r===U||r===Y){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),l.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===U||e===Y)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+fe(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===oe.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},Ne=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:Pe(F.BASE,t,n),bodyAttributes:Pe(B,r,n),htmlAttributes:Pe(H,o,n),link:Pe(F.LINK,a,n),meta:Pe(F.META,i,n),noscript:Pe(F.NOSCRIPT,l,n),script:Pe(F.SCRIPT,c,n),style:Pe(F.STYLE,s,n),title:Pe(F.TITLE,{title:d,titleAttributes:f},n)}},Le=I()((function(e){return{baseTag:ge([q,$],e),bodyAttributes:me(B,e),defer:ye(e,Z),encode:ye(e,ee),htmlAttributes:me(H,e),linkTags:be(F.LINK,[X,q],e),metaTags:be(F.META,[V,z,D,W,K],e),noscriptTags:be(F.NOSCRIPT,[U],e),onChangeClientState:he(e),scriptTags:be(F.SCRIPT,[G,U],e),styleTags:be(F.STYLE,[Y],e),title:pe(e),titleAttributes:me(R,e)}}),(function(e){xe&&Ee(xe),e.defer?xe=Ce((function(){je(e,(function(){xe=null}))})):(je(e),xe=null)}),Ne)((function(){return null})),Me=(o=Le,i=a=function(e){function t(){return le(this,t),de(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!N()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case F.SCRIPT:case F.NOSCRIPT:return{innerHTML:t};case F.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return se({},n,((t={})[r.type]=[].concat(n[r.type]||[],[se({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case F.TITLE:return se({},o,((t={})[n.type]=i,t.titleAttributes=se({},a),t));case F.BODY:return se({},o,{bodyAttributes:se({},a)});case F.HTML:return se({},o,{htmlAttributes:se({},a)})}return se({},o,((r={})[n.type]=se({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=se({},t);return Object.keys(e).forEach((function(t){var n;r=se({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return l.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[ne[r]||r]=e[r],t}),t)}(ue(o,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case F.LINK:case F.META:case F.NOSCRIPT:case F.SCRIPT:case F.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=ue(e,["children"]),n=se({},r);return t&&(n=this.mapChildrenToProps(t,n)),l.createElement(o,n)},ce(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(l.Component),a.propTypes={base:O().object,bodyAttributes:O().object,children:O().oneOfType([O().arrayOf(O().node),O().node]),defaultTitle:O().string,defer:O().bool,encodeSpecialCharacters:O().bool,htmlAttributes:O().object,link:O().arrayOf(O().object),meta:O().arrayOf(O().object),noscript:O().arrayOf(O().object),onChangeClientState:O().func,script:O().arrayOf(O().object),style:O().arrayOf(O().object),title:O().string,titleAttributes:O().object,titleTemplate:O().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=Ne({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);Me.renderStatic=Me.rewind;var Be=r(5444);function He(e){var t=e.meta,r=e.description,n=e.lang,o=e.title,a=(0,Be.K2)("764694655").site,i=r||a.siteMetadata.description;return l.createElement(Me,{htmlAttributes:{lang:n},title:o,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(t)})}He.defaultProps={lang:"ko",meta:[],description:""};var Re=He,Fe=r(1863),ze=function(e){e.data;return l.createElement(Fe.default,null)},Ye=function(e){var t=e.data;return console.log("data:",t),l.createElement(S,null,l.createElement(Re,{title:t.site.siteMetadata.title}),l.createElement(ze,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-288c9053e196738a7281.js.map
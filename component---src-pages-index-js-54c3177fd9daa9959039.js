(self.webpackChunkanhuigeon_github_io=self.webpackChunkanhuigeon_github_io||[]).push([[678,49],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},1863:function(e,t,r){"use strict";r.r(t);var n=r(7294);t.default=function(){return n.createElement("div",null,"postCard.js")}},3674:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Be}});var n,o,i,a,c=r(7294),l=r(9),u=c.createContext(null),s=(0,l.createGlobalStyle)([":root{font-size:100%;--width:980px;--min-width:320px;--nav-height:50px;--footer-height:60px;--device-xs-max-width:450px;--device-sm-max-width:768px;--device-md-max-width:1024px;--device-lg-max-width:1441px;}.light{--color-text:#1d1d1d;--color-text-2:#1d1d1d;--color-text-3:#696969;--color-white:#ffffff;--color-nav-bar:rgba(255,255,255,0.7);--color-nav-border:rgba(200,200,200,0.7);--color-category-button:#f2f2f2;--color-background:#f2f2f2;--color-post-background:#ffffff;--color-card:#ffffff;--color-code:#f2f2f2;--color-code-block:#fafafa;--color-code-highlight:rgba(0,0,0,0.05);--color-code-highlight-border:rgba(0,0,0,0.2);--color-gray-1:#f2f2f2;--color-gray-2:#e0e0e0;--color-gray-3:#d1d1d1;--color-gray-4:#868686;--color-gray-5:#6e6e6e;--color-gray-6:#696969;}.dark{--color-text:#e6e6e6;--color-text-2:#d1d1d1;--color-text-3:#8c8c8c;--color-white:#e6e6e6;--color-nav-bar:rgba(29,29,29,0.7);--color-nav-border:rgba(255,255,255,0.2);--color-category-button:#484848;--color-background:#1c1c1c;--color-post-background:#1c1c1c;--color-card:#2c2c2c;--color-code:#3a3a3a;--color-code-block:#242424;--color-code-highlight:rgba(255,255,255,0.05);--color-code-highlight-border:rgba(255,255,255,0.2);--color-gray-1:#f2f2f2;--color-gray-2:#e0e0e0;--color-gray-3:#d1d1d1;--color-gray-4:#868686;--color-gray-5:#6e6e6e;--color-gray-6:#696969;}html,body,#___gatsby,#gatsby-focus-wrapper{margin:0 auto;padding:0;min-height:100%;background-color:var(--color-post-background);}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';background-color:var(--color-post-background);-webkit-font-smoothing:antialiased;*{color:var(--color-text);}}:lang(ko){word-break:keep-all;}ul,ol,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,hgroup,p,blockquote,figure,form,fieldset,input,legend,pre,abbr,button{margin:0;padding:0;}h1 a,li a{text-decoration:none;}a{text-decoration:none;}"]),f={deviceSizes:{xs:"450px",sm:"768px",md:"1024px",lg:"1441px"}},d=function(){var e=(0,c.useState)(null),t=e[0],r=e[1],n=(0,c.useCallback)((function(){var e="dark"===t?"light":"dark";r(e),window.__setPreferredTheme(e)}),[t]);return(0,c.useEffect)((function(){"undefined"!=typeof window&&r(window.__theme),window.__onThemeChange=function(e){r(e)}}),[]),[t,n]},p=l.default.nav.withConfig({displayName:"sideBar__Side",componentId:"sc-145b0gf-0"})(["width:100%;height:50px;line-height:50px;position:sticky;top:0;z-index:1;opacity:0.85;transition:.5s ease-out;text-align:center;font-weight:900;font-size:24px;backdrop-filter:blur(10px);background-color:var(--color-post-background);}&.scrolled{box-shadow:0 4px 4px rgba(31,35,46,.15);transition:box-shadow .5s ease-in;}}"]),h=function(){var e=(0,c.useState)(!1),t=e[0],r=e[1],n=function(){r(window.pageYOffset>0)};return(0,c.useEffect)((function(){return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[t]),c.createElement(p,{className:t?"scrolled":void 0,"aria-label":"Global Navigation"},c.createElement("div",null,"sidebar.js"))},g=l.default.span.withConfig({displayName:"toggle__ChildSpan",componentId:"sc-1njluen-0"})(['position:fixed;cursor:pointer;width:50px;height:20px;background-color:#aaa;-webkit-transition:.4s;transition:.4s;border-radius:25px;&:before{position:fixed;content:"";margin-top:1px;margin-left:3px;height:18px;width:18px;background-color:#fff;-webkit-transition:.4s;transition:.4s;border-radius:50%;}']),m=l.default.label.withConfig({displayName:"toggle__Switch",componentId:"sc-1njluen-1"})(["position:fixed;z-index:2;top:15px;right:20px;display:block;width:50px;height:25px;"]),y=l.default.input.attrs({type:"checkbox"}).withConfig({displayName:"toggle__ChildInput",componentId:"sc-1njluen-2"})(["opacity:0;width:0;height:0;&:checked + ","{background-color:#2196F3;}&:focus + ","{box-shadow:0 0 1px #2196F3;}&:checked + ","{&:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px);}}"],g,g,g),b=function(e){e.themeHookCallback;var t=(0,c.useContext)(u);return c.createElement(m,null,c.createElement(y,{checked:"dark"===t,onChange:function(e){return window.__setPreferredTheme(e.target.checked?"dark":"light")}}),c.createElement(g,null))},v=function(){return c.createElement(w,{role:"contentinfo"},c.createElement(T,{"aria-label":"Copyright"},c.createElement("div",null,"footer.js")))},w=l.default.footer.withConfig({displayName:"footer__FooterBox",componentId:"sc-r8dgsb-0"})(["display:flex;text-align:center;justify-content:center;align-items:center;height:var(--footer-height);background-color:var(--color-post-background);"]),T=l.default.span.withConfig({displayName:"footer__Copyright",componentId:"sc-r8dgsb-1"})(["color:var(--color-gray-6);"]),x=l.default.div.withConfig({displayName:"layout__Container",componentId:"sc-bp6rz7-0"})(["margin:0 auto;max-width:1680px;height:100%;min-height:calc(100vh - var(--footer-height));background-color:var(--color-post-background);"]),C=function(e){var t=e.children,r=d(),n=r[0],o=r[1];return c.createElement(l.ThemeProvider,{theme:f},c.createElement(u.Provider,{value:n},c.createElement(s,null),c.createElement(x,null,c.createElement(b,{themeHookCallback:o}),c.createElement(h,null),t),c.createElement(v,null)))},E=r(5697),k=r.n(E),A=r(4839),S=r.n(A),O=r(2993),j=r.n(O),P=r(6494),_=r.n(P),I="bodyAttributes",L="htmlAttributes",N="titleAttributes",M={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},R=(Object.keys(M).map((function(e){return M[e]})),"charset"),B="cssText",H="href",F="http-equiv",q="innerHTML",D="itemprop",U="name",z="property",Y="rel",K="src",V="target",W={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},X="defaultTitle",G="defer",$="encodeSpecialCharacters",J="onChangeClientState",Q="titleTemplate",Z=Object.keys(W).reduce((function(e,t){return e[W[t]]=t,e}),{}),ee=[M.NOSCRIPT,M.SCRIPT,M.STYLE],te="data-react-helmet",re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ne=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},oe=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ae=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},ce=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},le=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ue=function(e){var t=he(e,M.TITLE),r=he(e,Q);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=he(e,X);return t||n||void 0},se=function(e){return he(e,J)||function(){}},fe=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ie({},e,t)}),{})},de=function(e,t){return t.filter((function(e){return void 0!==e[M.BASE]})).map((function(e){return e[M.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},pe=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ve("Helmet: "+e+' should be of type "Array". Instead found type "'+re(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||r===Y&&"canonical"===e[r].toLowerCase()||l===Y&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==q&&c!==B&&c!==D||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=_()({},n[c],o[c]);n[c]=l}return e}),[]).reverse()},he=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ge=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){ge(e)}),0)}),me=function(e){return clearTimeout(e)},ye="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ge:r.g.requestAnimationFrame||ge,be="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||me:r.g.cancelAnimationFrame||me,ve=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},we=null,Te=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;Ee(M.BODY,n),Ee(M.HTML,o),Ce(f,d);var p={baseTag:ke(M.BASE,r),linkTags:ke(M.LINK,i),metaTags:ke(M.META,a),noscriptTags:ke(M.NOSCRIPT,c),scriptTags:ke(M.SCRIPT,u),styleTags:ke(M.STYLE,s)},h={},g={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(g[e]=p[e].oldTags)})),t&&t(),l(e,h,g)},xe=function(e){return Array.isArray(e)?e.join(""):e},Ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=xe(e)),Ee(M.TITLE,t)},Ee=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(te),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";r.getAttribute(l)!==u&&r.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(te):r.getAttribute(te)!==a.join(",")&&r.setAttribute(te,a.join(","))}},ke=function(e,t){var r=document.head||document.querySelector(M.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===q)r.innerHTML=t.innerHTML;else if(n===B)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(te,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},Ae=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[W[r]||r]=e[r],t}),t)},Oe=function(e,t,r){switch(e){case M.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[te]=!0,o=Se(r,n),[c.createElement(M.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=Ae(r),i=xe(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+le(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+le(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case I:case L:return{toComponent:function(){return Se(t)},toString:function(){return Ae(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[te]=!0,n);return Object.keys(t).forEach((function(e){var r=W[e]||e;if(r===q||r===B){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===q||e===B)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+le(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===ee.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},je=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:Oe(M.BASE,t,n),bodyAttributes:Oe(I,r,n),htmlAttributes:Oe(L,o,n),link:Oe(M.LINK,i,n),meta:Oe(M.META,a,n),noscript:Oe(M.NOSCRIPT,c,n),script:Oe(M.SCRIPT,l,n),style:Oe(M.STYLE,u,n),title:Oe(M.TITLE,{title:f,titleAttributes:d},n)}},Pe=S()((function(e){return{baseTag:de([H,V],e),bodyAttributes:fe(I,e),defer:he(e,G),encode:he(e,$),htmlAttributes:fe(L,e),linkTags:pe(M.LINK,[Y,H],e),metaTags:pe(M.META,[U,R,F,z,D],e),noscriptTags:pe(M.NOSCRIPT,[q],e),onChangeClientState:se(e),scriptTags:pe(M.SCRIPT,[K,q],e),styleTags:pe(M.STYLE,[B],e),title:ue(e),titleAttributes:fe(N,e)}}),(function(e){we&&be(we),e.defer?we=ye((function(){Te(e,(function(){we=null}))})):(Te(e),we=null)}),je)((function(){return null})),_e=(o=Pe,a=i=function(e){function t(){return ne(this,t),ce(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!j()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case M.SCRIPT:case M.NOSCRIPT:return{innerHTML:t};case M.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return ie({},n,((t={})[r.type]=[].concat(n[r.type]||[],[ie({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case M.TITLE:return ie({},o,((t={})[n.type]=a,t.titleAttributes=ie({},i),t));case M.BODY:return ie({},o,{bodyAttributes:ie({},i)});case M.HTML:return ie({},o,{htmlAttributes:ie({},i)})}return ie({},o,((r={})[n.type]=ie({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=ie({},t);return Object.keys(e).forEach((function(t){var n;r=ie({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[Z[r]||r]=e[r],t}),t)}(ae(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case M.LINK:case M.META:case M.NOSCRIPT:case M.SCRIPT:case M.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=ae(e,["children"]),n=ie({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},oe(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:k().object,bodyAttributes:k().object,children:k().oneOfType([k().arrayOf(k().node),k().node]),defaultTitle:k().string,defer:k().bool,encodeSpecialCharacters:k().bool,htmlAttributes:k().object,link:k().arrayOf(k().object),meta:k().arrayOf(k().object),noscript:k().arrayOf(k().object),onChangeClientState:k().func,script:k().arrayOf(k().object),style:k().arrayOf(k().object),title:k().string,titleAttributes:k().object,titleTemplate:k().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=je({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);_e.renderStatic=_e.rewind;var Ie=r(5444);function Le(e){var t=e.meta,r=e.description,n=e.lang,o=e.title,i=(0,Ie.K2)("764694655").site,a=r||i.siteMetadata.description;return c.createElement(_e,{htmlAttributes:{lang:n},title:o,meta:[{name:"description",content:a},{property:"og:title",content:o},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:a}].concat(t)})}Le.defaultProps={lang:"ko",meta:[],description:""};var Ne=Le,Me=r(1863),Re=function(){return c.createElement(Me.default,null)},Be=function(e){var t=e.data;return console.log("data:",t),c.createElement(C,null,c.createElement(Ne,{title:t.site.siteMetadata.title}),c.createElement(Re,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-54c3177fd9daa9959039.js.map
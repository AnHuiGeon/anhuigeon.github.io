(self.webpackChunkanhuigeon_github_io=self.webpackChunkanhuigeon_github_io||[]).push([[577],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.d(t,{q:function(){return me}});var r,o,i,a,c=n(5697),u=n.n(c),l=n(4839),s=n.n(l),f=n(2993),d=n.n(f),p=n(7294),h=n(6494),m=n.n(h),g="bodyAttributes",b="htmlAttributes",y="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},x=(Object.keys(v).map((function(e){return v[e]})),"charset"),w="cssText",E="href",T="http-equiv",C="innerHTML",k="itemprop",A="name",S="property",O="rel",j="src",_="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",L="defer",P="encodeSpecialCharacters",U="onChangeClientState",M="titleTemplate",R=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),z=[v.NOSCRIPT,v.SCRIPT,v.STYLE],H="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=J(e,v.TITLE),n=J(e,M);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,N);return t||r||void 0},K=function(e){return J(e,U)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},W=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===O&&"canonical"===e[n].toLowerCase()||u===O&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==C&&c!==w&&c!==k||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=m()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;ue(v.BODY,r),ue(v.HTML,o),ce(f,d);var p={baseTag:le(v.BASE,n),linkTags:le(v.LINK,i),metaTags:le(v.META,a),noscriptTags:le(v.NOSCRIPT,c),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,s)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),u(e,h,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(v.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(H):n.getAttribute(H)!==a.join(",")&&n.setAttribute(H,a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(H,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,o=fe(n,r),[p.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+G(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case b:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===C||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),p.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+G(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(v.BASE,t,r),bodyAttributes:de(g,n,r),htmlAttributes:de(b,o,r),link:de(v.LINK,i,r),meta:de(v.META,a,r),noscript:de(v.NOSCRIPT,c,r),script:de(v.SCRIPT,u,r),style:de(v.STYLE,l,r),title:de(v.TITLE,{title:f,titleAttributes:d},r)}},he=s()((function(e){return{baseTag:W([E,_],e),bodyAttributes:X(g,e),defer:J(e,L),encode:J(e,P),htmlAttributes:X(b,e),linkTags:$(v.LINK,[O,E],e),metaTags:$(v.META,[A,x,T,S,k],e),noscriptTags:$(v.NOSCRIPT,[C],e),onChangeClientState:K(e),scriptTags:$(v.SCRIPT,[j,C],e),styleTags:$(v.STYLE,[w],e),title:V(e),titleAttributes:X(y,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),me=(o=he,a=i=function(e){function t(){return F(this,t),Z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return q({},r,((t={})[n.type]=[].concat(r[n.type]||[],[q({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return q({},o,((t={})[r.type]=a,t.titleAttributes=q({},i),t));case v.BODY:return q({},o,{bodyAttributes:q({},i)});case v.HTML:return q({},o,{htmlAttributes:q({},i)})}return q({},o,((n={})[r.type]=q({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=q({},t);return Object.keys(e).forEach((function(t){var r;n=q({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=q({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.createElement(o,r)},B(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(p.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},6179:function(e,t,n){"use strict";var r=n(7294),o=n(5414),i=n(5444);function a(e){var t=e.meta,n=e.description,a=e.lang,c=e.title,u=(0,i.K2)("764694655").site,l=n||u.siteMetadata.description;return r.createElement(o.q,{htmlAttributes:{lang:a},title:c,meta:[{name:"google-site-verification",content:"RBsnA3kwXL1PTJPs6iLB0KGStO6PkVNtuieCZxThwe8"},{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(t)})}a.defaultProps={lang:"ko",meta:[],description:""},t.Z=a},3093:function(e,t,n){"use strict";n.d(t,{U:function(){return r}});var r={mobile:"(max-width: "+"480px"+")",tablet:"(max-width: "+"768px"+")",laptop:"(max-width: "+"1024px"+")",desktop:"(max-width: "+"1680px"+")"}},6230:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var r=n(7294),o=n(9),i=(0,o.createGlobalStyle)([":root{font-size:100%;--width:980px;--min-width:320px;--nav-height:50px;--footer-height:60px;}.light{--color-text:#1d1d1d;--color-text-2:#1d1d1d;--color-text-3:#696969;--color-white:#ffffff;--color-nav-bar:rgba(255,255,255,0.7);--color-nav-border:rgba(200,200,200,0.7);--color-category-button:#f2f2f2;--color-background-1:#ffffff;--color-background-2:#f2f2f2;--color-card:#ffffff;--color-code:#f2f2f2;--color-code-block:#fafafa;--color-code-highlight:rgba(0,0,0,0.05);--color-code-highlight-border:rgba(0,0,0,0.2);}.dark{--color-text:#e6e6e6;--color-text-2:#d1d1d1;--color-text-3:#8c8c8c;--color-white:#e6e6e6;--color-nav-bar:rgba(29,29,29,0.7);--color-nav-border:rgba(255,255,255,0.2);--color-category-button:#484848;--color-background-1:#1c1c1c;--color-background-2:#292A2D;--color-card:#2c2c2c;--color-code:#3a3a3a;--color-code-block:#242424;--color-code-highlight:rgba(255,255,255,0.05);--color-code-highlight-border:rgba(255,255,255,0.2);}html,body,#___gatsby,#gatsby-focus-wrapper{margin:0 auto;padding:0;min-height:100%;background-color:var(--color-post-background);}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';background-color:var(--color-background-1);-webkit-font-smoothing:antialiased;*{color:var(--color-text);}}:lang(ko){word-break:keep-all;}ul,ol,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,hgroup,p,blockquote,figure,form,fieldset,input,legend,pre,abbr,button{margin:0;padding:0;}h1 a,li a{text-decoration:none;}a{text-decoration:none;}"]),a=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return(0,r.useEffect)((function(){var e=document.getElementsByTagName("body")[0],n=document.getElementsByTagName("aside")[0];t?(e.style.overflow="hidden",n.className+=" hamburgerClicked"):(e.style.overflow="visible",n.classList.remove("hamburgerClicked"))}),[t]),[n]},c=o.default.span.withConfig({displayName:"hamburgerToggle__HamburgerSpan",componentId:"sc-qalmy4-0"})(["display:block;position:absolute;width:100%;height:5px;border-radius:10px;background:var(--color-text);transition:all .35s;&:nth-child(1){top:0;}&:nth-child(2){top:50%;transform:translateY(-50%);}&:nth-child(3){bottom:0;}"]),u=o.default.label.attrs({htmlFor:"menuicon"}).withConfig({displayName:"hamburgerToggle__HamburgerLabel",componentId:"sc-qalmy4-1"})(["display:block;width:30px;height:30px;position:fixed;top:10px;left:10px;z-index:15;cursor:pointer;"]),l=o.default.input.attrs({type:"checkbox",id:"menuicon"}).withConfig({displayName:"hamburgerToggle__HamburgerInput",componentId:"sc-qalmy4-2"})(["display:none;&:checked{+","{","{&:nth-child(1){top:50%;transform:translateY(-50%) rotate(225deg);}&:nth-child(2){opacity:0;}&:nth-child(3){bottom:50%;transform:translateY(50%) rotate(-225deg);}}}}"],u,c),s=function(){var e=a()[0];return r.createElement(r.Fragment,null,r.createElement(l,{onChange:function(t){return n=t.target,void e(n.checked);var n}}),r.createElement(u,null,r.createElement(c,null),r.createElement(c,null),r.createElement(c,null)))},f=n(3093),d=o.default.div.withConfig({displayName:"scrollNavigation__ScrollPosition",componentId:"sc-o0vt7g-0"})(["height:4px;background-color:var(--color-text);width:",";"],(function(e){return e.width+"%"})),p=o.default.div.withConfig({displayName:"scrollNavigation__ProgressBar",componentId:"sc-o0vt7g-1"})(["width:100%;height:4px;position:fixed;z-index:10;"]),h=function(e){var t=e.data,n=(0,r.useState)(0),o=n[0],i=n[1],a=function(){i(document.body.offsetHeight-window.innerHeight)};return(0,r.useEffect)((function(){i(document.body.offsetHeight-window.innerHeight)}),[]),(0,r.useEffect)((function(){return window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}}),[t]),r.createElement(r.Fragment,null,r.createElement(p,null,r.createElement(d,{width:isNaN(t/o)?0:t/o*100})))},m=n(5444),g=o.default.header.withConfig({displayName:"header__HeadBar",componentId:"sc-1xyri43-0"})(["display:none;width:100%;height:50px;line-height:50px;position:sticky;top:0;z-index:5;opacity:0.85;transition:.5s ease-out;text-align:center;font-weight:900;font-size:24px;backdrop-filter:blur(10px);background-color:var(--color-background-1);}&.scrolled{box-shadow:0 4px 4px rgba(31,35,46,.15);transition:box-shadow .5s ease-in;}@media ","{display:none;}@media ","{}@media ","{display:block;}@media ","{}"],f.U.desktop,f.U.laptop,f.U.tablet,f.U.mobile),b=function(){var e=(0,r.useState)(0),t=e[0],n=e[1],o=function(){n(window.pageYOffset)};return(0,r.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[t]),r.createElement(r.Fragment,null,r.createElement(h,{data:t}),r.createElement(g,{className:t>0?"scrolled":void 0,"aria-label":"Global Navigation"},r.createElement(s,null),r.createElement(m.rU,{to:"/"},"header.js : HeadBar")))},y=n(1804),v=n.n(y),x=o.default.li.withConfig({displayName:"category__List",componentId:"sc-tq9ffx-0"})(["list-style:none;"]),w=function(e){var t=e.data,n=t.categoriesGroup.group,o=t.tagsGroup.group,i=("undefined"!=typeof window?window.location.pathname:"").split("/")[1];return r.createElement("article",null,r.createElement("section",null,r.createElement("ul",null,n.map((function(e){return r.createElement(x,{key:e.fieldValue},i===e.fieldValue?r.createElement(m.rU,{style:{fontWeight:"900",textDecoration:"none"},to:"/"+v()(e.fieldValue),className:"category"},e.fieldValue," (",e.totalCount,")"):r.createElement(m.rU,{style:{textDecoration:"none"},to:"/"+v()(e.fieldValue),className:"category"},e.fieldValue," (",e.totalCount,")"))})),r.createElement(x,null,"tags"===i?r.createElement(m.rU,{style:{fontWeight:"900",textDecoration:"none"},to:"/tags"},"AllTags (",o.length,")"):r.createElement(m.rU,{to:"/tags",style:{textDecoration:"none"}},"AllTags (",o.length,")")))))},E=n.p+"static/huigeon-bb65a2196ab06c159f0c256bfdc62660.jpg",T=o.default.p.withConfig({displayName:"side__Description",componentId:"sc-1afsaal-0"})(["font-size:16px;margin:0 0 10px;"]),C=o.default.div.withConfig({displayName:"side__AuthorName",componentId:"sc-1afsaal-1"})(["font-family:'PT Serif',serif;margin:0 0 10px;position:relative;padding-bottom:15px;font-size:16px;text-transform:uppercase;color:$dark;font-weight:700;"]),k=o.default.div.withConfig({displayName:"side__About",componentId:"sc-1afsaal-2"})(["text-align:center;max-width:480px;margin:10px auto auto;"]),A=o.default.div.withConfig({displayName:"side__CoverAuthorImage",componentId:"sc-1afsaal-3"})(["max-width:150px;max-height:150px;margin:0 auto 10px;border-radius:100%;overflow:hidden;background-color:var(--color-background-1);"]),S=o.default.img.withConfig({displayName:"side__Img",componentId:"sc-1afsaal-4"})(["max-width:150px;max-height:150px;width:100%;height:100%;border-radius:50%;transition:transform 0.35s;&:hover{transform:scale3d(0.90,0.90,1);}"]),O=o.default.aside.withConfig({displayName:"side__SideMenu",componentId:"sc-1afsaal-5"})(["height:100vh;width:250px;top:0;position:sticky;display:flex;flex-direction:column;justify-content:space-between;padding:10px;padding-top:50px;background-color:var(--color-background-2);z-index:1;transition:all .85s;@media ","{transform:translateX(0);transition:transform .0s;transition:background-color 0.85s;}@media ","{}@media ","{transform:translateX(-125%);width:100%;position:fixed;transition:all .85s;&.hamburgerClicked{transform:translateX(0);}}@media ","{}"],f.U.desktop,f.U.laptop,f.U.tablet,f.U.mobile),j=function(e){var t=e.data,n=t.site.siteMetadata;return r.createElement(r.Fragment,null,r.createElement(O,null,r.createElement(k,null,r.createElement(A,null,r.createElement(m.rU,{to:"/"},r.createElement(S,{src:E,alt:n.author}))),r.createElement(C,null,n.author),r.createElement(T,null,n.description),r.createElement(w,{data:t}))))},_=function(){return r.createElement(I,{role:"contentinfo"},r.createElement(N,{"aria-label":"Copyright"},r.createElement("div",null,"Github Repo:",r.createElement("a",{href:"https://github.com/AnHuiGeon/anhuigeon.github.io"},"anhuigeon.github.io"))))},I=o.default.footer.withConfig({displayName:"footer__FooterBox",componentId:"sc-r8dgsb-0"})(["display:flex;text-align:center;justify-content:center;align-items:center;height:var(--footer-height);background-color:var(--color-background-1);"]),N=o.default.span.withConfig({displayName:"footer__Copyright",componentId:"sc-r8dgsb-1"})(["color:var(--color-gray-6);"]),L=o.default.span.withConfig({displayName:"toggle__ChildSpan",componentId:"sc-9el7o6-0"})(['position:fixed;cursor:pointer;width:50px;height:20px;background-color:#aaa;-webkit-transition:.4s;transition:.4s;border-radius:25px;&:before{position:fixed;content:"";margin-top:1px;margin-left:3px;height:18px;width:18px;background-color:#fff;-webkit-transition:.4s;transition:.4s;border-radius:50%;}']),P=o.default.input.attrs({type:"checkbox",id:"toggleTag"}).withConfig({displayName:"toggle__ChildInput",componentId:"sc-9el7o6-1"})(["opacity:0;width:0;height:0;&:checked + ","{background-color:#2196F3;}&:focus + ","{box-shadow:0 0 1px #2196F3;}&:checked + ","{&:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px);}}"],L,L,L),U=o.default.label.attrs({htmlFor:"toggleTag"}).withConfig({displayName:"toggle__Switch",componentId:"sc-9el7o6-2"})(["position:fixed;z-index:15;top:15px;right:20px;display:block;width:50px;height:25px;"]),M=function(e){return r.createElement(r.Fragment,null,r.createElement(U,null,r.createElement(P,{checked:"dark"===e.data,onChange:function(e){return window.__setPreferredTheme(e.target.checked?"dark":"light")}}),r.createElement(L,null)))},R=o.default.div.withConfig({displayName:"layout__Container",componentId:"sc-bp6rz7-0"})(["margin:0 auto;display:flex;max-width:1024px;height:100%;min-height:calc(100vh - var(--footer-height));background-color:var(--color-background-1);transition:background-color .85s;@media ","{}@media ","{}@media ","{}@media ","{}"],f.U.desktop,f.U.laptop,f.U.tablet,f.U.mobile),z=function(e){var t=e.children,n=e.data,o=(0,r.useState)(null),a=o[0],c=o[1];return(0,r.useEffect)((function(){c(window.__theme),window.__onThemeChange=function(){c(window.__theme)}}),[]),r.createElement(r.Fragment,null,r.createElement(i,null),r.createElement(b,null),null!==a?r.createElement(M,{data:a}):r.createElement("div",{style:{width:"24px"}}),r.createElement(R,null,r.createElement(j,{data:n}),t),r.createElement(_,null))},H=n(5414),D=function(e){var t=e.children;return r.createElement(m.i1,{query:"2397019667",render:function(e){return r.createElement(z,{data:e},r.createElement(H.q,{title:e.site.siteMetadata.title}),t)}})}},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},9932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},2663:function(e){e.exports=function(e,t,n,r){var o=-1,i=null==e?0:e.length;for(r&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},4239:function(e,t,n){var r=n(2705),o=n(9607),i=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},531:function(e,t,n){var r=n(2705),o=n(9932),i=n(1469),a=n(3448),c=r?r.prototype:void 0,u=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return o(t,e)+"";if(a(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},5393:function(e,t,n){var r=n(2663),o=n(3816),i=n(8748),a=RegExp("['’]","g");e.exports=function(e){return function(t){return r(i(o(t).replace(a,"")),e,"")}}},9389:function(e,t,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(u){}var o=a.call(e);return r&&(t?e[c]=n:delete e[c]),o}},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},2757:function(e){var t="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+o+"]",a="\\d+",c="[\\u2700-\\u27bf]",u="["+n+"]",l="[^\\ud800-\\udfff"+o+a+t+n+r+"]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+r+"]",p="(?:"+u+"|"+l+")",h="(?:"+d+"|"+l+")",m="(?:['’](?:d|ll|m|re|s|t|ve))?",g="(?:['’](?:D|LL|M|RE|S|T|VE))?",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?",v=y+b+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",s,f].join("|")+")"+y+b+")*"),x="(?:"+[c,s,f].join("|")+")"+v,w=RegExp([d+"?"+u+"+"+m+"(?="+[i,d,"$"].join("|")+")",h+"+"+g+"(?="+[i,d+p,"$"].join("|")+")",d+"?"+p+"+"+m,d+"+"+g,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,x].join("|"),"g");e.exports=function(e){return e.match(w)||[]}},3816:function(e,t,n){var r=n(9389),o=n(9833),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(i,r).replace(a,"")}},1469:function(e){var t=Array.isArray;e.exports=t},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},1804:function(e,t,n){var r=n(5393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},9833:function(e,t,n){var r=n(531);e.exports=function(e){return null==e?"":r(e)}},8748:function(e,t,n){var r=n(9029),o=n(3157),i=n(9833),a=n(2757);e.exports=function(e,t,n){return e=i(e),void 0===(t=n?void 0:t)?o(e)?a(e):r(e):e.match(t)||[]}}}]);
//# sourceMappingURL=50d9b1caf35c5de467a2d524fd252eb4beb45ee8-963d03b30b88b447208f.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{144:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a}));var o={sm:768,md:1024,lg:1280,xl:1400},i=function(){return window.getComputedStyle(document.querySelector("body"),":before").getPropertyValue("content").replace(/"/g,"")};function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;if(!Object.prototype.hasOwnProperty.call(t,e))throw new Error("size must be one of: ".concat(Object.keys(t).join(", ")));return window.innerWidth<t[e]}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;if(!Object.prototype.hasOwnProperty.call(t,e))throw new Error("size must be one of: ".concat(Object.keys(t).join(", ")));return window.innerWidth>=t[e]}},203:function(e,t){var n,o,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var s,u=[],l=!1,d=-1;function f(){l&&s&&(l=!1,s.length?u=s.concat(u):d=-1,u.length&&v())}function v(){if(!l){var e=c(f);l=!0;for(var t=u.length;t;){for(s=u,u=[];++d<t;)s&&s[d].run();d=-1,t=u.length}s=null,l=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||c(v)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},834:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var o=n(863),i=n.n(o),r=n(841),a=n(146),c=function(e){return"//saxobank.23video.com/13846859.ihtml/player.html?source=embed&photo%5fid=".concat(e)},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"/mediagenerator/getqrcodeforsaxouri?saxoUri=".concat(e,"&size=").concat(t)},u=n(849),l=n(840),d=n(847),f=n(864),v=n(144);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,r=void 0,r=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==p(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===p(r)?r:String(r)),o)}var i,r}function b(e,t){return(b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=g(e);if(t){var i=g(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return h(this,n)}}function h(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w="v2-lightbox--open",O="v2-lightbox--video",E="v2-lightbox--image",j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(h,e);var t,n,o,r=y(h);function h(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(t=r.call(this,e)).initDomCache(),t.initData(),t.addEventListeners(),t.addSubscriptions(),t}return t=h,(n=[{key:"initData",value:function(){this.title="",this.cssClass="",this.videoObject=null}},{key:"addEventListeners",value:function(){var e=this;this.addEventListener(this.dom.close,"click.close",(function(t){t.preventDefault(),e.close()})),this.addEventListener(this.dom.overlay,"click.overlay",(function(t){t.preventDefault(),e.close()})),this.addEventListener(document.body,"load.img",(function(t){if("IMG"===t.target.tagName&&e.dom.content.contains(t.target)){var n=e.dom.content.querySelector(".v2-lightbox__loading-indicator");n&&n.classList.add("v2-lightbox__loading-indicator--hidden")}}),!0)}},{key:"removeEventListeners",value:function(){this.removeEventListener(this.dom.close,"click.close"),this.removeEventListener(this.dom.overlay,"click.overlay"),this.removeEventListener(document.body,"load.img")}},{key:"addSubscriptions",value:function(){var e=this;this.subscribe("/lightbox/open",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.cssClass,o=t.target,i=t.title,r=void 0===i?"":i,a=t.type,s=t.rte,u=t.option;switch(n&&(e.cssClass=n,e.element.classList.add(e.cssClass)),a){case"html":e.removeVideoClass(),e.removeImageClass(),e.updateContentFromHtml(o);break;case"video":e.removeImageClass(),e.updateContentWithVideo(c(o));break;case"videoUrl":e.removeImageClass(),e.updateContentWithVideo(o);break;case"qrcode":e.removeImageClass(),e.updateContentWithQrCode(o,s);break;case"image":e.removeVideoClass(),e.updateContentWithImage(u);break;default:case"id":e.removeVideoClass(),e.removeImageClass(),e.updateContentFromId(o)}e.open(),e.updateTitle(r)})),this.subscribe("/lightbox/close",this.close.bind(this))}},{key:"removeSubscriptions",value:function(){this.unsubscribe("/lightbox/close"),this.unsubscribe("/lightbox/open")}},{key:"addKeyListeners",value:function(){var e=this;this.addEventListener(document,"keyup",(function(t){27===t.keyCode&&e.close()}))}},{key:"removeKeyListeners",value:function(){this.removeEventListener(document,"keyup")}},{key:"updateContentFromId",value:function(e){var t=document.getElementById(e);t&&(this.dom.content.innerHTML=t["SCRIPT"===t.nodeName?"innerHTML":"outerHTML"])}},{key:"updateContentFromHtml",value:function(e){this.dom.content.innerHTML="",this.dom.content.appendChild(e)}},{key:"updateContentWithQrCode",value:function(e,t){var n=e||window.location.href,o=t?'<div class="rte--output">'.concat(unescape(t),"</div>"):"",i=s(encodeURIComponent(n));this.element.classList.add(E),this.dom.content.innerHTML=o+'<img src="'.concat(i,'" alt="" />')}},{key:"updateContentWithVideo",value:function(e){var t=this;this.element.classList.add(O),this.dom.content.innerHTML='<div style="margin:0 auto"><div class="v2-lightbox-video">\n\t\t\t\t<iframe src="'.concat(e,'"\n\t\t\t\t\tborder="0"\n\t\t\t\t\tallowfullscreen="1"\n\t\t\t\t\tmozallowfullscreen="1"\n\t\t\t\t\twebkitallowfullscreen="1"\n\t\t\t\t\tallow="autoplay"\n\t\t\t\t\ttitle="Video"></iframe>\n\t\t\t</div></div>');var n=this.dom.content.querySelector("iframe");Object(v.c)("sm")&&n&&this.addEventListener(n,"click",(function(e){e.preventDefault(),t.enlargeIframe(n)})),n.onload=function(){t.videoObject=new i.a(t.dom.content.querySelector("iframe"),"Player"),Object(f.a)()(t.videoObject),window._gluePlayers=window._gluePlayers||[],window._gluePlayers.push(t.videoObject),t.videoObject.set("playing",!0),n.setAttribute("data-twentythree-adobe","yes")},this.adjustVideoSize(),this.addEventListener(window,"resize",Object(l.a)((function(){return t.adjustVideoSize()}),250)),n&&n.click()}},{key:"isFullScreen",value:function(){return Boolean(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}},{key:"enlargeIframe",value:function(e){if(!this.isFullScreen())return e.requestFullscreen?e.requestFullscreen().catch((function(e){alert("Error attempting to enable fullscreen mode: ".concat(e.message," (").concat(e.name,")"))})):e.mozRequestFullScreen?e.mozRequestFullScreen().catch((function(e){alert("Error attempting to enable fullscreen mode: ".concat(e.message," (").concat(e.name,")"))})):e.webkitRequestFullscreen?e.webkitRequestFullscreen().catch((function(e){alert("Error attempting to enable fullscreen mode: ".concat(e.message," (").concat(e.name,")"))})):void 0}},{key:"updateContentWithImage",value:function(e){this.element.classList.add(E);var t='<div class="popup__content v2-maa0">\n\t\t\t\t<div class="v2-lightbox-image">';e.image&&(t+='<img class="v2-picture v2-picture--background v2-picture--fit-cover v2-picture--pos-cc medium medium--col2 small small-desktop--col4" \n\t\t\t\t\tsrc="'.concat(e.image,"\" alt='").concat(e.title,"' />")),t+='</div>\n\t\t\t\t<div class="v2-flexbox v2-align--start collection-popup-desc">\n\t\t\t\t\t<h4 class="v2-maa0">'.concat(e.title," &nbsp;&nbsp;").concat(e.label," </h4>\n\t\t\t\t</div>\n\t\t\t</div>"),this.dom.content.innerHTML=t}},{key:"adjustVideoSize",value:function(){var e=this.dom.content,t=e.firstElementChild,n=t.firstElementChild.firstElementChild;t.style.width="auto",n.offsetHeight>e.offsetHeight&&(t.style.width=e.offsetHeight*n.offsetWidth/n.offsetHeight+"px")}},{key:"removeVideoClass",value:function(){this.element.classList.remove(O)}},{key:"removeImageClass",value:function(){this.element.classList.remove(E)}},{key:"updateTitle",value:function(e){"object"===p(e)?this.dom.title.appendChild(e):this.dom.title.innerText=e}},{key:"open",value:function(){document.body.classList.add(w),Object(u.c)(u.b.mobile)&&Object(u.a)(u.b.mobile),this.addKeyListeners(),Object(a.c)({context:this.dom.content}),Object(a.b)({context:this.dom.content}),window.picturefill&&window.picturefill({elements:this.dom.content.querySelectorAll("picture img")})}},{key:"close",value:function(){var e=this;this.publish("/lighbox/after-close"),document.body.classList.remove(w),Object(u.d)(u.b.mobile),this.removeKeyListeners(),this.removeEventListener(window,"resize"),Object(a.a)({context:this.dom.content}),Object(d.a)(this.element,(function(){e.dom.content.innerHTML="",e.dom.title.innerHTML="",e.cssClass&&e.element.classList.remove(e.cssClass)}))}},{key:"cleanup",value:function(){this.removeEventListeners(),this.removeSubscriptions(),this.removeKeyListeners()}}])&&m(t.prototype,n),o&&m(t,o),Object.defineProperty(t,"prototype",{writable:!1}),h}(r.a)},840:function(e,t,n){"use strict";function o(e,t,n){var o;return function(){for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];var c=function(){o=null,n||e(r)},s=n&&!o;clearTimeout(o),o=setTimeout(c,t),s&&e(r)}}n.d(t,"a",(function(){return o}))},841:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return p}));var o=n(842),i=n(844),r=n(843),a=n(144),c=n(840);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,v(o.key),o)}}function v(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.state=void 0,this.events={},this.subscriptions={},this.behaviorName=Object(r.a)(t.getAttribute("data-behavior")),this.instanceId=Object(i.a)(),this.attachInstanceId()}var t,n,s;return t=e,(n=[{key:"setState",value:function(e){var t=this;Object.keys(e).forEach((function(e){if(!{}.hasOwnProperty.call(t.state,e))throw new Error("".concat(t.behaviorName," does not have ").concat(e," on the state object,\n\t\t\t\t\tmake sure to define all state properties in the constructor."))})),this.state=l(l({},this.state||{}),e)}},{key:"attachInstanceId",value:function(){this.element.setAttribute("data-instance","".concat(this.behaviorName,"__").concat(this.instanceId)),this.element.removeAttribute("data-instance-init")}},{key:"initDomCache",value:function(){var e=this;this.dom={},Array.from(this.element.querySelectorAll("[data-ref^=".concat(this.behaviorName,"]"))).filter((function(t){return t.closest('[data-behavior*="'.concat(e.behaviorName,'"]'))===e.element})).forEach((function(t){var n=t.getAttribute("data-ref"),o=Object(r.b)(n).split("__")[1];o?e.dom[o]=t:console.error('Element cannot be cached. Reference "'.concat(n,'" should have the format "behavior-name__element-name"'))}))}},{key:"publishBreakpointOnResize",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:250;if(!this.breakpoint){this.breakpoint=Object(a.a)(),this.publish("SITE.BREAKPOINT",this.breakpoint);var n=Object(c.a)((function(){var t=Object(a.a)();e.breakpoint!==t&&(e.publish("SITE.BREAKPOINT",t),e.breakpoint=t)}),t);window.addEventListener("resize",n)}}},{key:"addEventListener",value:function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e&&(this.events[t]=n,e.addEventListener(t.split(".")[0],this.events[t],o))}},{key:"removeEventListener",value:function(e,t){e.removeEventListener(t.split(".")[0],this.events[t]),this.events[t]=null,delete this.events[t]}},{key:"publish",value:function(e,t){o.a.publish(e,t)}},{key:"subscribe",value:function(e,t){this.subscriptions[e]=t,o.a.subscribe(e,t)}},{key:"unsubscribe",value:function(e){o.a.unsubscribe(e,this.subscriptions[e]),this.subscriptions[e]=null,delete this.subscriptions[e]}}])&&f(t.prototype,n),s&&f(t,s),Object.defineProperty(t,"prototype",{writable:!1}),e}();window.addEventListener("load",(function(){setTimeout((function(){var e=document.querySelector("#navigation");e&&e.getBoundingClientRect().bottom===scrollY&&window.scroll(0,0)}),0)})),e.on("unhandledRejection",(function(e,t){console.log("Reason for this failure is : ",e),console.log("promise is",t)}))}).call(this,n(203))},842:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw a}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(r=i.key,a=void 0,a=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===o(a)?a:String(a)),i)}var r,a}var c=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.subscriptions={}}var t,n,o;return t=e,(n=[{key:"publish",value:function(e){if(this.subscriptions[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r,a=i(this.subscriptions[e]);try{for(a.s();!(r=a.n()).done;){var c=r.value;c.apply(void 0,n)}}catch(e){a.e(e)}finally{a.f()}}}},{key:"subscribe",value:function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)}},{key:"unsubscribe",value:function(e,t){var n=this;this.subscriptions[e]&&this.subscriptions[e].forEach((function(o,i){o===t&&n.subscriptions[e].splice(i,1)}))}}])&&a(t.prototype,n),o&&a(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}());t.a=c},843:function(e,t,n){"use strict";function o(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function i(e){return e.replace(/\W+(.)/g,(function(e,t){return t.toUpperCase()}))}n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}))},844:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o="23456789ABDEGJKMNPQRVWXYZ";function i(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t="",n=0;n<e;n++)t+=o.charAt(Math.floor(Math.random()*o.length));return t}},846:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function(e,t,n){e.addEventListener(t,(function o(i){e.removeEventListener(t,o),n(i)}))}},847:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(846),i={transition:{endEvent:null,endEventsList:{transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"}},animation:{endEvent:null,endEventsList:{animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"}}},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transition";if(null!==i[e].endEvent)return i[e].endEvent;var t=document.createElement("fakeelement");return i[e].endEvent=Object.keys(i[e].endEventsList).reduce((function(n,o){return n||(void 0!==t.style[o]?i[e].endEventsList[o]:n)}),!1),i[e].endEvent},a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"transition",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:300,a=r(n);a?Object(o.a)(e,a,t):setTimeout(t,i)}},849:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u}));var o={ios:new RegExp("iPad|iPhone|iPod"),mobile:new RegExp("Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini")},i={},r={ios:"v2-ios-device",mobile:"v2-mobile-device"},a={ios:"ios",mobile:"mobile"};function c(e){document.documentElement.classList.add(r[e])}function s(e){document.documentElement.classList.remove(r[e])}function u(e){return e in i?i[e]:(i[e]=!!navigator.platform&&o[e]&&(o[e].test(navigator.platform)||o[e].test(navigator.userAgent)),!!navigator.platform&&o[e]&&(o[e].test(navigator.platform)||o[e].test(navigator.userAgent)))}},863:function(e,t,n){e.exports&&(e.exports=function(e,t){var n=this;n.glueframe="1.1.2";var o=(""+e.src).split("/").slice(0,3).join("/"),i=o==(""+window.location).split("/").slice(0,3).join("/")?"object":void 0!==window.postMessage?"post":"none";n.ready=!1;var r=window.setInterval((function(){this.ready||"object"!==i?this.ready||"post"!==i||n.get("bootstrapped",(function(e){e&&(n.ready=!0,window.clearInterval(r),d())}),!0):e.contentWindow[t]&&e.contentWindow[t].bootstrapped&&(n.ready=!0,window.clearInterval(r),d())}),100);n.glueFrameId=(new Date).getTime();var a=0,c={},s=function(e,t){var o=n.glueFrameId+"_"+ ++a;if("function"==typeof e)c[o]=e;else if(t)throw"GlueFrame: Callback not registered correctly.";return o},u=[],l=function(e,t){u.push({method:e,args:t})},d=function(){for(var e=0;e<u.length;e+=1){var t=u[e];t.method.apply(null,t.args)}u=[],n.set("queuedEventsProcessed",!0)};n.get=function(r,a,u){if(n.ready||u){var d=s(a,!0);if("object"===i){var f=e.contentWindow[t].get.apply(null,[r]);void 0!==c[d]&&c[d].apply(null,[f])}else if("post"===i){var v={f:"get",args:[r],cbId:d};e.contentWindow.postMessage(JSON.stringify(v),u?"*":o)}}else l(n.get,[r,a])},n.set=function(r,a,u){if(n.ready){var d=s(u,!1);if("object"===i){var f=e.contentWindow[t].set.apply(null,[r,a]);void 0!==c[d]&&c[d].apply(null,[f])}else if("post"===i){var v={f:"set",args:[r,a],cbId:d};e.contentWindow.postMessage(JSON.stringify(v),o)}}else l(n.set,[r,a,u])},n.bind=function(r,a,c){c=c||!1;if(n.ready){var u=s(a,!0);if("object"===i)e.contentWindow[t].bind.apply(null,[r,a,c]);else if("post"===i){var d={f:"bind",args:[r],cbId:u,triggerQueue:c};e.contentWindow.postMessage(JSON.stringify(d),o)}}else l(n.bind,[r,a,!0])},n.fire=function(r,a){if(n.ready){if("object"===i)return e.contentWindow[t].fire.apply(null,[r,a]);if("post"===i){var c={f:"fire",args:[r,a]};e.contentWindow.postMessage(JSON.stringify(c),o)}}else l(n.fire,[r,a])},n.destroy=function(){window.addEventListener?window.removeEventListener("message",f,!1):window.detachEvent("onmessage",f),window.clearInterval(r),c={}};var f=function(e){if(e.origin===o){var t;try{t=JSON.parse(e.data)}catch(e){}void 0!==t&&void 0!==t.cbId&&"function"==typeof c[t.cbId]&&c[t.cbId].apply(null,[t.a,t.b])}};window.addEventListener?window.addEventListener("message",f,!1):window.attachEvent("onmessage",f)})},864:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){var e=window.mediaanalytics,t=e?e.Media:null,n=t?t.getInstance():null,o=window.adobeDataLayer,i={25:!1,50:!1,75:!1},a=function(e){var a;switch(console.log("fireEvent",e),e.event){case"loadeddata":var c=e.video,s=c.title,u=c.id,l=parseInt(c.duration,10),d=null==t?void 0:t.createMediaObject(s,u,l,t.StreamType.VOD,t.MediaType.Video);n&&n.trackSessionStart(d);break;case"play":null==n||n.trackPlay(),null==o||o.push({event:"videoPlayed",videoInfo:r({videoPlayer:"23Video"},e.videoProps)});break;case"pause":null==n||n.trackPause(),null==o||o.push({event:"videoPaused",videoInfo:r({videoPlayer:"23Video"},e.videoProps)});break;case"ended":null==n||n.trackComplete(),null==n||n.trackSessionEnd(),null==o||o.push({event:"videoCompleted",videoInfo:r({videoPlayer:"23Video"},e.videoProps)});break;case"timeupdate":var f=Math.round(+e.currentTime/+(null==e||null===(a=e.videoProps)||void 0===a?void 0:a.duration)*100).toString(),v=Object.keys(i);f&&v.includes(f.toString())&&!i[f]&&(i[f]=!0,null==o||o.push({event:"videoUpdated",videoInfo:r({videoPlayer:"23Video",percentCovered:f},e.videoProps)})),null==n||n.updatePlayhead(e.currentTime)}};return function(e){var t,n=e;n.bind("player:video:loaded",(function(){!function(e,t){var n={},o={photo_id:"video_photo_id",live_id:"video_live_id",full_video:"video",title:"video_title",content:"video_content",type:"video_type",currentTime:"currentTime",duration:"duration",link:"url",domain:"domain",player_id:"player_id",quality:"quality",playing:"playing",currentVideoEngagement:"currentVideoEngagement",totalEngagement:"totalEngagement",timeStart:"timeStart",timeEnd:"timeEnd",video_length:"videoLenght"};Object.keys(o).forEach((function(i){var r;r=i,e.get(o[r],(function(e){n[r]=e,delete o[r],0===Object.keys(o).length&&(n.id=n.live_id||n.photo_id,console.log("video properties fetched",n),t(n))}))}))}(n,(function(e){a({event:"loadeddata",video:e,videoProps:t=e})}))})),n.bind("player:video:timeupdate",(function(){n.get("currentTime",(function(e){a({event:"timeupdate",currentTime:e,videoProps:t})}))})),n.bind("player:video:ended",(function(){a({event:"ended",videoProps:t})})),n.bind("player:video:play player:video:pause",(function(e){a({event:"player:video:pause"===e?"pause":"play",videoProps:t})}))}}n.d(t,"a",(function(){return c}))}}]);
//# sourceMappingURL=194-5fd11882.js.map
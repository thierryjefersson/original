(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(a=o.key,r=void 0,r=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a),"symbol"===t(r)?r:String(r)),o)}var a,r}new(function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tabMenu=document.querySelectorAll(e),this.tabContent=document.querySelectorAll(n),this.activeClass="active"}var n,i;return n=t,(i=[{key:"activeTab",value:function(t){var e=this;this.tabContent.forEach((function(t){t.classList.remove(e.activeClass)})),this.tabMenu.forEach((function(t){t.classList.remove(e.activeClass)})),this.tabContent[t].classList.add(this.activeClass),this.tabMenu[t].classList.add(this.activeClass)}},{key:"rotationImgsSection01",value:function(){var t=this,e=0;this.rouletImgs=setInterval((function(){(e+=1)>=t.tabContent.length&&(e=0),t.activeTab(e)}),1e4)}},{key:"addTabMenuEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){t.activeTab(n),t.rouletImgs&&(clearInterval(t.rouletImgs),t.rotationImgsSection01())}))}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.rotationImgsSection01(),this.addTabMenuEvent()),this}}])&&e(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),t}())(".item-circle",".main-banner").init()})();
!function(){var e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=document.querySelectorAll(".modal-menu__link"),c=document.querySelector(".buy-now-button--tablet-none"),d=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};o.forEach((function(e){return e.addEventListener("click",d)})),c.addEventListener("click",d),t.addEventListener("click",d),n.addEventListener("click",d),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.9a7cc786.js.map

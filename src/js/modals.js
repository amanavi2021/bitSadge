!(function (e) {
  "function" != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    "function" != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener("DOMContentLoaded", function () {
  var modalButtons = document.querySelectorAll(".js-open-modal"),
    backdrop = document.querySelector(".js-backdrop-modal"),
    closeButtons = document.querySelectorAll(".js-modal-close");
  modalButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      var modalId = this.getAttribute("data-modal"),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );
      modalElem.classList.add("active");
      backdrop.classList.add("active");
    }); 
  }); 
  closeButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var parentModal = this.closest(".modal");

      parentModal.classList.remove("active");
      backdrop.classList.remove("active");
    });
  }); 
  document.body.addEventListener(
    "keyup",
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector(".modal.active").classList.remove("active");
        document.querySelector(".backdrop").classList.remove("active");
      }
    },
    false
  );
  backdrop.addEventListener("click", function () {
    document.querySelector(".modal.active").classList.remove("active");
    this.classList.remove("active");
  });
});


// Для бекдропа потрібно задати class="backdrop js-backdrop-modal"
// Для кнопок відкривання модальних вікон треба задати додатковий клас js-open-modal і атрибут data-modal="назва-модалки"
// Для модалки має бути універсальний клас modal і атрибут data-modal="назва-модалки"
// Для кнопок закриття модальних вікон треба задати додатковий клас js-modal-close


// Для стилів у прикладі "веб студії" ми використовували клас is-hidden відразу. Тут працює в зворотньому напрямку скрипт додає клас active, де треба зробити
// modal.active, backdrop.active { opacity: 1; visibility: visible; }  звичайні стани модалки і бекдропа будуть opacity: 0; visibility: hidden;

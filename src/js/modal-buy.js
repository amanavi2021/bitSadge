// Основная кнопка
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-buy]"),
      closeModalBtn: document.querySelector("[data-modal-close-buy]"),
      modal: document.querySelector("[data-modal-buy]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();
// Мобильная кнопка
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-mob-buy]"),
    closeModalBtn: document.querySelector("[data-modal-close-mob-buy]"),
    modal: document.querySelector("[data-modal-mob-buy]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
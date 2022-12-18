(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal__open--ingredients-green]"),
      closeModalBtn: document.querySelector("[data-modal__close--ingredients-green]"),
      modal: document.querySelector("[data-modal__ingredients-green]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();
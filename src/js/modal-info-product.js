// Modal green
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

// Modal yellow
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal__open--ingredients-yellow]"),
      closeModalBtn: document.querySelector("[data-modal__close--ingredients-yellow]"),
      modal: document.querySelector("[data-modal__ingredients-yellow]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();

// Modal brown
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal__open--ingredients-brown]"),
      closeModalBtn: document.querySelector("[data-modal__close--ingredients-brown]"),
      modal: document.querySelector("[data-modal__ingredients-brown]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();
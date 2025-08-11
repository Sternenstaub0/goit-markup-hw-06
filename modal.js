document.addEventListener('DOMContentLoaded', () => {
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const openModalBtn = document.querySelector('.open-modal-btn');
  const closeModalBtn = document.querySelector('.modal-close-btn');

  openModalBtn.addEventListener('click', () => {
    modalBackdrop.classList.add('is-open');
  });

  closeModalBtn.addEventListener('click', () => {
    modalBackdrop.classList.remove('is-open');
  });
});
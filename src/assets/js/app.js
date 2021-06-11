document.addEventListener('DOMContentLoaded', () => {


  const allModal = document.querySelectorAll('[data-modal]');
  const closeBtns = document.querySelectorAll('[data-close]');

  const openCabinetBtn = document.querySelector('.header__account');
  const modalCabinet = document.querySelector('.modalCabinet');



  const closeAllModal = () => {
    allModal.forEach(modal => modal.classList.remove('open'));
    document.documentElement.style.overflow = "";
  }



  openCabinetBtn.addEventListener('click', () => {
    modalCabinet.classList.add('open');
    document.documentElement.style.overflow = "hidden";
  })



  closeBtns.forEach(btn => btn.addEventListener('click', closeAllModal));

  allModal.forEach(wrapper => wrapper.addEventListener('click', (e) => {
    if (e.target === modalCabinet) closeAllModal();
  }));

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') closeAllModal();
  });
})
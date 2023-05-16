const expandDetails = document.getElementById('expand-details');
const extraDetails = document.getElementById('extra-details');
const mainDetails = document.querySelector('.main-wrapper');

expandDetails.addEventListener('click', () => {
  expandDetails.classList.toggle('flip');
  extraDetails.classList.toggle('open-details');
  mainDetails.classList.toggle('translate-timezone');
});

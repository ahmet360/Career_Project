const burgerMenu = document.querySelector('#burger-menu');
const burgerButton = burgerMenu.querySelector('button');
  
  burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
  });
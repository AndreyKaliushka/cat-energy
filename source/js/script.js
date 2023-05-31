const mainNav = document.querySelector('.main-nav');
const button = document.querySelector('.main-nav__toggle');

const modal = () => {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove('main-nav--closed')
    mainNav.classList.add('main-nav--opened');
  } else if ((mainNav.classList.contains("main-nav--opened"))) {
    mainNav.classList.remove('main-nav--opened')
    mainNav.classList.add('main-nav--closed');
  }
};


button.addEventListener('click', modal);

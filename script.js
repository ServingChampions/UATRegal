// script.js

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const primaryNav = document.querySelector('.primary-nav');
  const footerHamburger = document.querySelector('.footer-hamburger');
  const footerNav = document.querySelector('.footer-nav');

  hamburger.addEventListener('click', function () {
    primaryNav.classList.toggle('active');
  });

  footerHamburger.addEventListener('click', function () {
    footerNav.classList.toggle('active');
  });
});

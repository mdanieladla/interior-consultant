'use strict';

const hambMenu = document.querySelectorAll('.js-icon');

const navBar = document.querySelector('.js-navbar');

function handleClick() {
  if (navBar.classList.contains('hidden')) {
    navBar.classList.toggle('hidden');
  } else {
    navBar.classList.toggle('hidden');
  }
}

hambMenu.forEach((n) => n.addEventListener('click', handleClick));

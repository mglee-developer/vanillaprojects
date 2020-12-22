const toggleBtn = document.querySelector('.toggle_btn');
const navbar = document.querySelector('.navbar');
const body = document.querySelector('body');

function navbarToggle() {
    toggleBtn.classList.toggle('open');
    navbar.classList.toggle('open');
}

function init() {
    toggleBtn.addEventListener('click', navbarToggle);
}

init();
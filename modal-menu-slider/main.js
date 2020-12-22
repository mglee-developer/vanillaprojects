const toggleBtn = document.querySelector('.toggle_btn');
const signBtn = document.querySelector('.sign_btn');
const closeBtn = document.querySelector('.close_btn');

const navbar = document.querySelector('.navbar');
const body = document.querySelector('body');
const modalContainer = document.querySelector('.modal-container.hidden');

function navbarToggle() {
    toggleBtn.classList.toggle('open');
    navbar.classList.toggle('open');
}

function openModal() {
    modalContainer.classList.remove('hidden');
}

function closeModal() {
    modalContainer.classList.add('hidden');
}

function init() {
    toggleBtn.addEventListener('click', navbarToggle);

    signBtn.addEventListener('click', openModal);

    closeBtn.addEventListener('click', closeModal);
}

init();
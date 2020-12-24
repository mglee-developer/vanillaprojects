const popupContainer = document.querySelector('.popup-container');
const finalMessage = document.querySelector('.final-message');

function gameResult(message) {
    finalMessage.innerHTML = message;
    popupContainer.classList.add('active');
}
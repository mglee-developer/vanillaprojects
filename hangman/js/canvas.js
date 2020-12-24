const hangmanPart = document.querySelectorAll('.hangman-part');

function canvasHangman() {
    hangmanPart.forEach((part, index) => {
        if(index < wrongWordCount) {
            part.classList.add('show');
        }
    });
}
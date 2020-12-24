const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
'u', 'v', 'x', 'y', 'z'];

const letters = document.querySelector('.letters');

function paintAlphabetButton() {
    alphabets.forEach((alphabet) => {
        const element = document.createElement('li');
        element.setAttribute('class', 'alphabet');
        element.innerText = alphabet;
        letters.appendChild(element);
    })
}
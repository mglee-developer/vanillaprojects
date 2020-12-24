const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
'u', 'v', 'x', 'y', 'z'];

const letters = document.querySelector('.letters');

function paintAlphabetButton() {
    for(let i = 0; i < alphabets.length; i++) {
        const element = document.createElement('li');
        element.setAttribute('class', 'alphabet');
        element.innerText = alphabets[i];
        // 알파벳이랑 단어 매칭
        matchAlphabetsAndWord();
        letters.appendChild(element);
    }
}
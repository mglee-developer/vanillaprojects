const alphabetList = document.querySelector('.letters');
const wordList = document.querySelector('.words');

function wordMatch(target) {
    const word = target.childNodes[0].data;
    storedWord.forEach((match) => {
        if(word === match) {
            console.log(match);
        }else {
            console.log('wrong');
        }
    })
}

function letterClickActive(e) {
    const target = e.target;
    target.classList.add('active');

    wordMatch(target);
}

function init() {
    alphabetList.addEventListener('click', letterClickActive);
}

init()
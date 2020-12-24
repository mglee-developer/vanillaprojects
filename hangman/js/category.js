const category = ['FRUIT', 'ANIMAL', 'CITY'];
const quiz = [['apple', 'banana', 'grape'],
                ['dog', 'monky', 'rabbit'],
                ['seoul', 'busan', 'jeju']];

let storedWord = [];                

const categoryName = document.querySelector('.category-name');
const words = document.querySelector('.words');

function randomCategory() {
    const index = Math.floor(Math.random()*category.length);
    categoryName.innerHTML = `Category - ${category[index]}`;

    return index;
}

function randomWord() {
    const returnIndex = randomCategory();
    const quizIndex = Math.floor(Math.random() * quiz.length);
    const word = quiz[returnIndex][quizIndex]; 
    
    for(let i = 0; i < word.length; i++) {
        const element = document.createElement('li');
        element.setAttribute('class', 'word');
        words.appendChild(element);

        storedWord.push(word[i]);
    }
}

function init() {
    randomWord();
}

init();
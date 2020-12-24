// 카테고리
const categories = [['apple', 'banana', 'strawberry'],
                    ['dog', 'monky', 'rabbit'],
                    ['washington', 'jeju', 'paris']];
let randomCategory;
let word;

function init() {
    randomCategory = categories[Math.floor(Math.random() * categories.length)];
    word = randomCategory[Math.floor(Math.random() * randomCategory.length)];

    paintAlphabetButton();
}

init();
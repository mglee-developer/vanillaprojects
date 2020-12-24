// 카테고리
const categories = [['apple', 'banana', 'strawberry'],
                    ['dog', 'monky', 'rabbit'],
                    ['washington', 'jeju', 'paris']];
let randomCategory;
let word;
let storedWord = [];

function init() {
    randomCategory = categories[Math.floor(Math.random() * categories.length)];
    word = randomCategory[Math.floor(Math.random() * randomCategory.length)];

    // 알파벳 버튼 그리기
    paintAlphabetButton();

    // 카테고리 생성
    paintCategory();

    // 단어 생성
    paintWord();
}

init();
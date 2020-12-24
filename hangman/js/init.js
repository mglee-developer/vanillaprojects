// 카테고리
const categories = [['apple', 'banana', 'strawberry'],
                    ['dog', 'monky', 'rabbit'],
                    ['washington', 'jeju', 'paris']];

const words = document.querySelector('.words');
const againBtn = document.querySelector('.again_btn');
                    
let randomCategory;
let word;
let storedWord = []; // 퀴즈 단어 쪼개서 저장
let correctWordCount = 0; // 맞은 단어 수
let wrongWordCount = 0; // 틀린 단어 수
let life = 10; // 생명

function init() {
    randomCategory = categories[Math.floor(Math.random() * categories.length)];
    word = randomCategory[Math.floor(Math.random() * randomCategory.length)];

    // 알파벳 버튼 그리기
    paintAlphabetButton();

    // 카테고리 생성
    paintCategory();

    // 단어 생성
    paintWord();

    // 게임 재시작
    againBtn.addEventListener('click', gameRestart);
}

init();
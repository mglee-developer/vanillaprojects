function matchAlphabetsAndWord(element) {
    element.addEventListener('click', (e) => {
        const selectedAlphabet = e.target.innerHTML;
        if(selectedAlphabet === undefined) {
            return;
        }else {
            e.target.classList.add('active');
        }

        for(let i = 0; i < word.length; i++) {
            // 맞는 경우
            if(word[i] === selectedAlphabet) {
                storedWord[i].innerHTML = selectedAlphabet;
                correctWordCount += 1;
            }
        }

        const index = (word.indexOf(selectedAlphabet));
        if(index === -1) {
            life -= 1;
            wrongWordCount += 1;

            // 행맨 그리기
            canvasHangman();

            // 결과 보여주기
            if(life < 1) {
                gameResult('Game Over😭');
            }
        }else {
            // 결과 보여주기
            for(let i = 0; i < storedWord.length; i++) {
                if(correctWordCount === storedWord.length) {
                    gameResult('You Win🎉');
                }
            }
        }
    });
}
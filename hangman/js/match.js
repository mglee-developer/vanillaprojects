function matchAlphabetsAndWord(element) {
    element.addEventListener('click', (e) => {
        const selectedAlphabet = e.target.innerHTML;
        if(selectedAlphabet === undefined) {
            return;
        }else {
            e.target.classList.add('active');
        }

        for(let i = 0; i < word.length; i++) {
            if(word[i] === selectedAlphabet) {
                storedWord[i].innerHTML = selectedAlphabet;
                count += 1;
            }
        }

        console.log(count);

        var index = (word.indexOf(selectedAlphabet));
        if(index === -1) {
            life -= 1;
            // 결과 보여주기
            if(life < 1) {
                gameResult('Game Over😭');
            }

            // 행맨 그리기
            canvasHangman();
        }else {
            // 결과 보여주기
            for(let i = 0; i < storedWord.length; i++) {
                if(count === storedWord.length) {
                    gameResult('You Win🎉');
                }
            }
        }
    });
}
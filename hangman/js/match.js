function matchAlphabetsAndWord() {
    letters.addEventListener('click', (e) => {
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

        var index = (word.indexOf(selectedAlphabet));
        console.log(index);
        if(index === -1) {
            life -= 1;
            // 결과 보여주기
            gameResult();

            // 행맨 그리기
            canvasHangman();
        }else {
            // 결과 보여주기
            gameResult();
        }
    });
}
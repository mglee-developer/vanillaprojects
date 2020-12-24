const clue = [['The snow princess ate this!', 'Monky likes this', 'This has milk, jam, etc'],
            ['People bring it up as pet', 'This likes banans', 'This has long ear and red eyes'],
            ['American capital', 'Korean island', 'Franch capital']];

const clueText = document.querySelector('.clue');

function getClue() {
    const categoryIndex = categories.indexOf(randomCategory);
    const clueIndex = randomCategory.indexOf(word);
    clueText.innerHTML = `Clue - ${clue[categoryIndex][clueIndex]}`;
}
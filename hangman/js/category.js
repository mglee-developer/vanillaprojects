const categoryName = document.querySelector('.category-name');

function paintCategory() {
    if(randomCategory === categories[0]) {
        categoryName.innerHTML = 'Category - FRUIT';
    }else if(randomCategory === categories[1]) {
        categoryName.innerHTML = 'Category - ANIMAL';
    }else {
        categoryName.innerHTML = 'Category - CITY';
    }
}

const words = document.querySelector('.words');

function paintWord() {
    for(let i = 0; i < word.length; i++) {
        const li = document.createElement('li');
        li.setAttribute('class', 'word');
        words.appendChild(li);

        storedWord.push(li);
    }
}
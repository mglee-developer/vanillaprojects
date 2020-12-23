const category = ['FRUIT', 'ANIMAL', 'CITY'];

const categoryName = document.querySelector('.category-name');

function randomCategory() {
    const index = Math.floor(Math.random()*category.length);
    categoryName.innerHTML = `Category - ${category[index]}`;
}

function init() {
    randomCategory();
}

init();
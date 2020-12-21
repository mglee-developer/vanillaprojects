const main = document.querySelector('main');
const addBtn = document.querySelector('.add_btn');
const doubleBtn = document.querySelector('.double_btn');
const showMillionairesBtn = document.querySelector('.show-millionaires_btn');
const sortBtn = document.querySelector('.sort_btn');
const calculateBtn = document.querySelector('.calculate_btn');

let user = [];

function addUser(newUser) {
    user.push(newUser);

    randeringDom();
}

function getUser() {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => {
            const user = data.results[0];
            const newUser = {
                name: `${user.name.first} ${user.name.last}`,
                wealth: Math.floor(Math.random() * 1000000)
            }

            addUser(newUser);
        });
}

function randeringDom(users = user) {
    // main clear
    main.innerHTML = '<h2 class="main__title"><span class="person">Person</span><span class="wealth">Wealth</span></h2>';

    users.forEach(user => {
        const element = document.createElement('div');
        element.setAttribute('class', 'person');
        element.innerHTML = `<p class="person__name">${user.name}</p> <p class="person__wealth">${foramtMoney(user.wealth)}</p>`;
        main.appendChild(element);
    });
}

function doubleMoney() {
    user = user.map(data => {
        return {...data, wealth: data.wealth * 2};
    });

    randeringDom();
}

function showMillionaires() {
    user = user.filter(data => data.wealth > 1000000);

    randeringDom();
}

function sortByRichest() {
    user.sort((a, b) => b.wealth - a.wealth);

    randeringDom();
}

function calculateEntireWealth() {
    const total = user.reduce((acc, user) => (acc += user.wealth), 0);

    const element = document.createElement('p');
    element.setAttribute('class', 'total');
    element.innerHTML = `<span class="total__title">Total Wealth:</span><span class="total__price">${foramtMoney(total)}</span>`

    main.appendChild(element);
}

function foramtMoney(money) {
    return '$' + money.toLocaleString(undefined, {minimumFractionDigits:2});
}

function init() {
    getUser();

    addBtn.addEventListener('click', getUser);
    doubleBtn.addEventListener('click', doubleMoney);
    showMillionairesBtn.addEventListener('click', showMillionaires);
    sortBtn.addEventListener('click', sortByRichest);
    calculateBtn.addEventListener('click', calculateEntireWealth);

    randeringDom();
}

init();
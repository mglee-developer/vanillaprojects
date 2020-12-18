'use strict'

const swapBtn = document.querySelector('.swap_btn');
const standard = document.querySelector('.standard');

function calculateExchangeRate() {
    let currency_one = currencyOne.value;
    let currency_two = currencyTwo.value;
    if(currency_one === '' || currency_one === 'undefined') {
        currency_one = 'USD';
    }
    if(currency_two === '' || currency_two === 'undefined') {
        currency_two = 'KRW';
    }

    fetch('/send', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({currency_one})
    })
        .then(res => res.json())
        .then(data => {
            const rate = data.conversion_rates[currency_two];
            currencyInputTwo.value = (currencyInputOne.value * rate);
            standard.innerHTML = `1${currency_one} = ${rate}${currency_two}`;
        });
}

function swapExchangeRate() {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculateExchangeRate();
}

function init() {
    calculateExchangeRate();

    // 환율 계산
    currencyOne.addEventListener('change', calculateExchangeRate);
    currencyTwo.addEventListener('change', calculateExchangeRate);
    currencyInputOne.addEventListener('input', calculateExchangeRate);
    currencyInputTwo.addEventListener('input', calculateExchangeRate);

    // currency 교환
    swapBtn.addEventListener('click', swapExchangeRate);
}

init();
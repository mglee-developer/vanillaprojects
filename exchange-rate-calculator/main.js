const currencyOne = document.querySelector('#currency-one');
const currencyInputOne = document.querySelector('#currency-input-one');
const currencyTwo = document.querySelector('#currency-two');
const currencyInputTwo = document.querySelector('#currency-input-two');

function getCurrencyCode() {
    fetch(
        `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=dSe8zC6MYwuewIkOwCHOno6KZNr1cuk1&searchdate=20201215&data=AP01`,
        {
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then(res => {return res.json()})
        .then(data => {
            data.forEach(country => {
                const option = document.createElement('option');
                option.setAttribute('value', `${country.cur_unit}`);
                option.innerText = `${country.cur_unit}(${country.cur_nm})`;
                currencyOne.appendChild(option);
                if(`${country.cur_unit}` === 'USD') {
                    option.setAttribute('selected', 'selected');
                }
            });
            data.forEach(country => {
                const option = document.createElement('option');
                option.setAttribute('value', `${country.cur_unit}`);
                option.innerText = `${country.cur_unit}(${country.cur_nm})`;
                currencyTwo.appendChild(option);
                if(`${country.cur_unit}` === 'KRW') {
                    option.setAttribute('selected', 'selected');
                }
            });
        });
}

function calculateExchangeRate() {
    const currency_one = currencyOne.value;
    const currency_two = currencyTwo.value;
    
    fetch(
        `https://api.exchangerate-api.com/v4/latest/USD`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const rate = data.rates[currency_two];
            currencyInputTwo.value = currencyInputOne * rate;
        })
}

function init() {
    // 통화 코드 리스트
    getCurrencyCode();

    // 환율 계산
    currencyOne.addEventListener('change', calculateExchangeRate);
    currencyTwo.addEventListener('change', calculateExchangeRate);
}

init();
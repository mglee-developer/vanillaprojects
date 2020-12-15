const currencyOne = document.querySelector('#currency-one');
const currencyTwo = document.querySelector('#currency-two');

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
            console.log(data);
            data.forEach(country => {
                const option = document.createElement('option');
                option.setAttribute('value', `${country.cur_unit}`);
                option.innerText = `${country.cur_unit}(${country.cur_nm})`;
                currencyOne.appendChild(option);
                if(`${country.cur_unit}` === 'USD') {
                    option.selected = true;
                }
            });
            data.forEach(country => {
                const option = document.createElement('option');
                option.setAttribute('value', `${country.cur_unit}`);
                option.innerText = `${country.cur_unit}(${country.cur_nm})`;
                currencyTwo.appendChild(option);
                if(`${country.cur_unit}` === 'KRW') {
                    option.selected = true;
                }
            });
        });
}

function init() {
    // 통화 코드 리스트
    getCurrencyCode();
}

init();
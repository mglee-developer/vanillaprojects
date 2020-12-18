'use strict'

const currencyOne = document.querySelector('#currency-one');
const currencyInputOne = document.querySelector('#currency-input-one');
const currencyTwo = document.querySelector('#currency-two');
const currencyInputTwo = document.querySelector('#currency-input-two');

function getCurrencyCode() {
    fetch('http://localhost:5500/api')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
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
        })
}

function init() {
    getCurrencyCode();
}

init();
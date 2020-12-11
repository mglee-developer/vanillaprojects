const bookingCount = document.querySelector('.count');
const bookingPrice = document.querySelector('.price');

const CLICKED_SEAT = 'clicked';

const ECONOMY_LS = 'economy';
const SWEET_LS = 'sweet';
const DISABLED_LS = 'disabled';
const REGULAR_LS = 'regular';

const DISABLED_PRICE = 'disabledPrice';//6000;
const ECONOMY_PRICE = 'economyPrice';//13000;
const REGULAR_PRICE = 'regularPrice';//14000;
const SWEET_PRICE = 'sweetPrice';//34000;

function setMovieSeat(economyIndex, sweetIndex, disabledIndex, regularIndex) {
    localStorage.setItem(ECONOMY_LS, JSON.stringify(economyIndex));
    localStorage.setItem(SWEET_LS, JSON.stringify(sweetIndex));
    localStorage.setItem(DISABLED_LS, JSON.stringify(disabledIndex));
    localStorage.setItem(REGULAR_LS, JSON.stringify(regularIndex));
}

function countAndTotalPrice(economySeats, sweetSeats, disabledSeats, regularSeats) {
    const count = economySeats.length + sweetSeats.length + disabledSeats.length + regularSeats.length;
    const price = (economySeats.length * localStorage.getItem(ECONOMY_PRICE)) + 
                    (sweetSeats.length * localStorage.getItem(SWEET_PRICE)) + 
                    (disabledSeats.length * localStorage.getItem(DISABLED_PRICE)) + 
                    (regularSeats.length * localStorage.getItem(REGULAR_PRICE));
                    
    bookingCount.innerText = count;
    bookingPrice.innerText = price;
}

function reserveSeat(seats) {
    const economySeats = document.querySelectorAll(`.economy-type.${CLICKED_SEAT}`);
    const sweetSeats = document.querySelectorAll(`.sweet-type.${CLICKED_SEAT}`);
    const disabledSeats = document.querySelectorAll(`.disabled-type.${CLICKED_SEAT}`);
    const regularSeats = document.querySelectorAll(`.seat:not(.economy-type):not(.sweet-type):not(.disabled-type).${CLICKED_SEAT}`);
    
    const economyIndex = [...economySeats].map(seat => [...seats].indexOf(seat));
    const sweetIndex = [...sweetSeats].map(seat => [...seats].indexOf(seat));
    const disabledIndex = [...disabledSeats].map(seat => [...seats].indexOf(seat));
    const regularIndex = [...regularSeats].map(seat => [...seats].indexOf(seat));
    
    //좌석 인덱스 저장
    setMovieSeat(economyIndex, sweetIndex, disabledIndex, regularIndex);
    
    //예약 수 및 총 금액 계산
    countAndTotalPrice(economySeats, sweetSeats, disabledSeats, regularSeats);
}

function setMoviePrice(selectedSeats) {
    if(selectedSeats.classList.contains('economy-type')) {
        localStorage.setItem(ECONOMY_PRICE, 13000);
    }else if(selectedSeats.classList.contains('sweet-type')) {
        localStorage.setItem(SWEET_PRICE, 17000);
    }else if(selectedSeats.classList.contains('disabled-type')) {
        localStorage.setItem(DISABLED_PRICE, 6000);
    }else {
        localStorage.setItem(REGULAR_PRICE, 14000);
    }
}

function init() {
    // 좌석 예약
    seatContainer.addEventListener('click', (e) => {
        const seats = document.querySelectorAll('.seat');
        if(e.target.classList.contains('seat')) {
            e.target.classList.toggle(CLICKED_SEAT);
            // 좌석별 금액 데이터 저장
            setMoviePrice(e.target);
            reserveSeat(seats);
        }
    });
}

init();
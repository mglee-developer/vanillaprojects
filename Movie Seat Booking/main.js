const seatContainer = document.querySelector('.seat-container');
const bookingCount = document.querySelector('.count');

let count = 0;  

const CLICKED_SEAT = 'clicked';

const ECONOMY_LS = 'economy';
const SWEET_LS = 'sweet';
const DISABLED_LS = 'disabled';
const REGULAR_LS = 'regular';

const DISABLED_PRICE = 6000;
const ECONOMY_PRICE = 13000;
const REGULAR_PRICE = 14000;
const SWEET_PRICE = 34000;

function mappingSeat(seat, i, j) {
    if(i === 0) {
        seat.innerText = `A${j}`;
        seat.classList.add('economy-type');
    }else if(i === 1) {
        seat.innerText = `B${j}`;
    }else if (i === 2) {
        seat.innerText = `C${j}`;
    }else {
        seat.innerText = `D${j}`;
        if(j>=5 && j<=8) {
            seat.classList.add('sweet-type');
        }else if(j===1 || j===12) {
            seat.classList.add('disabled-type');
        }
    }
}

function createSeat() {
    for(let i=0; i<4; i++) { 
        const seatRow = document.createElement('div');
        seatRow.setAttribute('class', 'seat__row');
        for (let j=1; j<=12; j++) {
            const seat = document.createElement('div');
            seat.setAttribute('class', 'seat');
            mappingSeat(seat, i, j); // 좌석 배치
            seatContainer.appendChild(seatRow);
            seatRow.appendChild(seat);
        }
    }
}

function selectMovie(e) {
    const target = e.target;
    const text = target.options[target.selectedIndex].text;
    const bookingTitle = document.querySelector('.booking__title');
    bookingTitle.innerText = `${text}`;
}

function countAndTotalPrice(economySeats, sweetSeats, disabledSeats, regularSeats) {
    const count = economySeats.length + sweetSeats.length + disabledSeats.length + regularSeats.length;
    bookingCount.innerText = count;
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
    
    // local storage
    localStorage.setItem(ECONOMY_LS, JSON.stringify(economyIndex));
    localStorage.setItem(SWEET_LS, JSON.stringify(sweetIndex));
    localStorage.setItem(DISABLED_LS, JSON.stringify(disabledIndex));
    localStorage.setItem(REGULAR_LS, JSON.stringify(regularIndex));
    
    // 예약 수 및 총 금액 계산
    countAndTotalPrice(economySeats, sweetSeats, disabledSeats, regularSeats);
}

function loadUI() {
    const seats = document.querySelectorAll('.seat');

    const economySeats = JSON.parse(localStorage.getItem(ECONOMY_LS));
    const sweetSeats = JSON.parse(localStorage.getItem(SWEET_LS));
    const disabledSeats = JSON.parse(localStorage.getItem(DISABLED_LS));
    const regularSeats = JSON.parse(localStorage.getItem(REGULAR_LS));

    if((economySeats !== null && economySeats.length>0) || (sweetSeats !== null && sweetSeats.length > 0) || 
        (disabledSeats !== null && disabledSeats.length > 0) || (regularSeats !== null && regularSeats.length > 0)) {
        seats.forEach((seat, index) => {
            if((economySeats.indexOf(index) > -1) || (sweetSeats.indexOf(index) > -1) ||
                (disabledSeats.indexOf(index) > -1) || (regularSeats.indexOf(index) > -1)) {
                seat.classList.add(CLICKED_SEAT);
            }

        })
    }

    // 초기 예약 좌석 수, 총 금액
    countAndTotalPrice(economySeats, sweetSeats, disabledSeats, regularSeats);
}

function init() {
    // 영화 선택
    const movie = document.querySelector('#movie-select');
    movie.addEventListener('change', selectMovie);

    // 좌석
    createSeat();

    // 좌석 예약
    seatContainer.addEventListener('click', (e) => {
        const seats = document.querySelectorAll('.seat');
        if(e.target.classList.contains('seat')) {
            e.target.classList.toggle(CLICKED_SEAT);
            reserveSeat(seats);
        }
    });

    loadUI();
}

init();
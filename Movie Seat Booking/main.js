const seatContainer = document.querySelector('.seat-container');

let count = 0;  

const CLICKED_SEAT = 'clicked';
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

function init() {
    // 영화 선택
    const movie = document.querySelector('#movie-select');
    movie.addEventListener('change', selectMovie);

    // 좌석
    createSeat();

    // 좌석 예약
    seatContainer.addEventListener('click', (e) => {
        if(e.target.classList.contains('seat')) {
            e.target.classList.toggle(CLICKED_SEAT);
        }
    });
}

init();
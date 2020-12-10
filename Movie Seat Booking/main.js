const movie = document.querySelector('#movie-select');
const seatContainer = document.querySelector('.seat-container');
const bookingTitle = document.querySelector('.booking__title');
const bookingCount = document.querySelector('.count');
const bookingPrice = document.querySelector('.price');

const CLICKED_SEAT = 'clicked';

const MOVIE_LS  = 'selectedMovie'
const ECONOMY_LS = 'economy';
const SWEET_LS = 'sweet';
const DISABLED_LS = 'disabled';
const REGULAR_LS = 'regular';

const DISABLED_PRICE = 'disabledPrice';//6000;
const ECONOMY_PRICE = 'economyPrice';//13000;
const REGULAR_PRICE = 'regularPrice';//14000;
const SWEET_PRICE = 'sweetPrice';//34000;

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

function setMovieTitle(movieIndex) {
    localStorage.setItem(MOVIE_LS, movieIndex);
}

function selectMovie(e) {
    const target = e.target;
    setMovieTitle(target.selectedIndex);
    bookingTitle.innerText = `${target.options[target.selectedIndex].text}`;
}

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

        // 초기 예약 좌석 수, 총 금액
        countAndTotalPrice(economySeats, sweetSeats, disabledSeats, regularSeats);
    }

    // 선택한 영화 제목
    const selectedMovieIndex = localStorage.getItem(MOVIE_LS);
    if(selectedMovieIndex !== null) {
        movie.selectedIndex = selectedMovieIndex;
        bookingTitle.innerText = `${movie.options[selectedMovieIndex].text}`;
    }
}

function init() {
    // 영화 선택
    movie.addEventListener('change', selectMovie);

    // 좌석
    createSeat();

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

    loadUI();
}

init();
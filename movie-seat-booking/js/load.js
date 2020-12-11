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
    // 페이지 로드
    loadUI();
}

init();
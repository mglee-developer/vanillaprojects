const seatContainer = document.querySelector('.seat-container');

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

function init() {
    // 좌석 만들기
    createSeat();
}

init();
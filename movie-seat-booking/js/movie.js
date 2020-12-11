const movie = document.querySelector('#movie-select');
const bookingTitle = document.querySelector('.booking__title');

const MOVIE_LS  = 'selectedMovie';

function setMovieTitle(movieIndex) {
    localStorage.setItem(MOVIE_LS, movieIndex);
}

function selectMovie(e) {
    const target = e.target;
    setMovieTitle(target.selectedIndex);
    bookingTitle.innerText = `${target.options[target.selectedIndex].text}`;
}

function init() {
    // 영화 선택
    movie.addEventListener('change', selectMovie);
}

init();
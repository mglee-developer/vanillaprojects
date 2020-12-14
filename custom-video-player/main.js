const video = document.querySelector('.section__video');
const playBtn = document.querySelector('.play_btn');
const stopBtn = document.querySelector('.stop_btn');
const progress = document.querySelector('#progress');
const timestamp = document.querySelector('.timestamp');

function changeProgress() {
    video.currentTime = (progress.value * video.duration) / 100;
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
    
    // min
    const min = Math.floor(video.currentTime / 60);

    //sec
    const sec = Math.floor(video.currentTime % 60);

    timestamp.innerText = `${min < 10 ? `0${min}` : min }:${sec < 10 ? `0${sec}` : sec}`;
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
    console.log(video.paused);
    updatePlayIcon(video.paused);
}

function updatePlayIcon() {
    if(video.paused) {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }else {
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
}

function toggleVideo() {
    const status = video.paused;
    console.log(status);
    if(status) {
        video.play();
    }else {
        video.pause();
    }
}

function init() {
    // 동영상 클릭 시, 영상 플레이 및 정지
    video.addEventListener('click', toggleVideo);

    // 아이콘 변경
    video.addEventListener('play', updatePlayIcon);
    video.addEventListener('pause', updatePlayIcon);
    
    // update timestamp
    video.addEventListener('timeupdate', updateProgress);

    // 버튼 클릭 시, 영상 플레이 및 정지
    playBtn.addEventListener('click', toggleVideo);
    stopBtn.addEventListener('click', stopVideo);

    // progress change
    progress.addEventListener('change', changeProgress);
}

init();
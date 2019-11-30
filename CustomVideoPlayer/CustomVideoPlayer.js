
function toggleVideo() {
    const videoPlayer = document.getElementById('video-player');
    const playIcon = document.getElementById("playIcon");
    videoPlayer.paused ? videoPlayer.play() : videoPlayer.pause(); 
    videoPlayer.paused
      ? playIcon.classList.remove("fa-pause") &&
        playIcon.classList.add("fa-play")
      : playIcon.classList.remove("fa-play") &&
        playIcon.classList.add("fa-pause");
}

function toggleVideo() {
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.paused ? videoPlayer.play() : videoPlayer.pause(); 
}
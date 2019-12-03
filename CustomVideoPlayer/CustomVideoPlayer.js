
const videoPlayer = document.getElementById('video-player');
const playIcon = document.getElementById("playIcon");
const volumeIcon = document.getElementById("volumeIcon");
const volumeSlider = document.getElementById("volumeSlider");

function toggleVideo() {
    if( videoPlayer.paused ){
      videoPlayer.play();
      playIcon.classList.add("fa-pause");
      playIcon.classList.remove("fa-play");
    }
    else{
      videoPlayer.pause();
      playIcon.classList.add("fa-play");
      playIcon.classList.remove("fa-pause");
    }
}

function toggleVolume() {
  let volumeToSet = volumeSlider.value > 0 ? parseFloat(volumeSlider.value / 100) : 0;
  if(volumeToSet > 0){
    volumeIcon.classList.add("fa-volume-up");
    volumeIcon.classList.remove("fa-volume-off");
  }
  else{
    volumeIcon.classList.add("fa-volume-off");
    volumeIcon.classList.remove("fa-volume-up");
  }
  videoPlayer.volume = volumeToSet;
}

const videoPlayer = document.getElementById('video-player');
const playIcon = document.getElementById("playIcon");
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
  let volumeToSet = volumeSlider.value > 0 ? parseFloat(volumeSlider.value / 100) : 1;
  console.log("Volume: " , volumeToSet);
  videoPlayer.volume = volumeToSet;
}
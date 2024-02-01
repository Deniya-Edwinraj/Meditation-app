const play = document.querySelector(".playbtn");
const main = document.querySelector(".container");
const song = document.querySelector(".play-container");
const back = document.querySelector(".backbtn");
const audioPlayer = document.getElementById("audioPlayer");

let isPlaying = false;

play.addEventListener("click", () => {
  togglePlayPause();
  song.classList.toggle("hide");
  main.classList.toggle("hide");
});

back.addEventListener("click", () => {
  togglePlayPause();
  song.classList.toggle("hide");
  main.classList.toggle("hide");
});

function togglePlayPause() {
  if (isPlaying) {
    audioPlayer.pause();
  } else {
    audioPlayer.play();
  }
  isPlaying = !isPlaying;
}










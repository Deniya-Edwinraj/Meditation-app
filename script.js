const play = document.querySelector(".playbtn");
const main = document.querySelector(".container");
const song = document.querySelector(".play-container");
const back = document.querySelector(".backbtn");
const audioPlayer = document.getElementById("audioPlayer");

let isPlaying = false;

play.addEventListener("click", () => {
  togglePlayPause();
});

back.addEventListener("click", () => {
  togglePlayPause();
  song.classList.toggle("hide");
  main.classList.toggle("hide");
});

function togglePlayPause() {
  if (isPlaying) {
    audioPlayer.pause();
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
  } else {
    audioPlayer.play();
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
    song.classList.toggle("hide");
    main.classList.toggle("hide");
  }
  isPlaying = !isPlaying;
}

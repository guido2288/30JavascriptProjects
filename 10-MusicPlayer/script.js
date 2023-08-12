const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrolIconPlay = document.getElementById("ctrolIconPlay");
const ctrolIconPause = document.getElementById("ctrolIconPause");
const playIcon = document.getElementById("playIcon");

playIcon.addEventListener("click", playPause)

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
}

function playPause() {
  if (ctrolIconPause.className === "hidden") {

    song.play();
    ctrolIconPause.classList.remove("hidden");
    ctrolIconPlay.classList.add("hidden")
  } else {
    song.pause();
    ctrolIconPause.classList.add("hidden");
    ctrolIconPlay.classList.remove("hidden")
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrolIconPause.classList.remove("hidden");
  ctrolIconPlay.classList.add("hidden")
};
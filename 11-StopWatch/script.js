let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

startBtn.addEventListener('click', watchStart);
stopBtn.addEventListener('click', watchStop);
resetBtn.addEventListener('click', watchReset);

function stopWatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = hours < 10 ? "0" + minutes : minutes;
  let s = hours < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = `${h}:${m}:${s}`;
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  clearInterval(timer);
  let [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}
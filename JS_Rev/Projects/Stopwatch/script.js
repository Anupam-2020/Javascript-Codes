(function () {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let display_start = true;
  let is_running = false;
  let stopWatchInterval;

  let start_button = document.querySelector(".start");
  let reset_button = document.querySelector(".reset");

  function displatStartStop(display) {
    display_start = display;
    if (display_start === true) {
      start_button.innerText = "Start";
      start_button.style.backgroundColor = "#10e549"
    }
    else {
      start_button.innerText = "Stop";
      start_button.style.backgroundColor = "#d02828"
    }
  }

  function updateScreen() {
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    document.getElementById(
      "clock"
    ).innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  function startStopWatch() {
    displatStartStop(false);
    if (!is_running) {
      is_running = true;
      stopWatchInterval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
        }
        if (minutes === 60) {
          hours++;
          minutes = 0;
        }
        updateScreen();
      }, 100);
    }
  }

  function stopStopWatch() {
    displatStartStop(true);
    clearInterval(stopWatchInterval);
    is_running = false;
    updateScreen();
  }

  function resetStopwatch() {
    clearInterval(stopWatchInterval);
    displatStartStop(true);
    hours = 0;
    minutes = 0;
    seconds = 0;
    is_running = false;
    updateScreen();
  }

  start_button.addEventListener("click", () => {
    if (display_start === true) startStopWatch();
    else stopStopWatch();
  });

  reset_button.addEventListener("click", () => {
    resetStopwatch();
  });
})();
const minute = document.querySelector(".minute"),
  second = document.querySelector(".second"),
  startBtn = document.querySelector(".start"),
  gearBtn = document.querySelector(".gear"),
  container = document.querySelector(".container");

let maxMinute = 1,
  currentMinute = 0,
  currentSecond = 0,
  timer,
  isPaused = false;

startBtn.addEventListener("click", function () {
  if (startBtn.textContent === "PAUSE") {
    isPaused = true;
    startBtn.textContent = "START";
  } else {
    isPaused = false;
    startBtn.textContent = "PAUSE";
  }
  console.log("timer ", timer);
  if (!timer) {
    timer = setInterval(() => {
      if (!isPaused) {
        currentSecond++;
        startBtn.textContent = "PAUSE";
        if (currentSecond === 60) {
          currentSecond = 0;
          currentMinute += 1;
          if (currentMinute === maxMinute) {
            currentMinute = 0;
            clearInterval(timer);
            timer = undefined;
            currentSecond = 0;
            startBtn.textContent = "START NEW";
            container.style.borderColor = "rgb(45, 181, 93)";
          }
        }
        let strSecond = "",
          strMinute = "";
        if (currentMinute <= 9) {
          strMinute = "0" + currentMinute;
        } else {
          strMinute += currentMinute;
        }
        if (currentSecond <= 9) {
          strSecond = "0" + currentSecond;
        } else {
          strSecond += currentSecond;
        }

        second.textContent = strSecond;
        minute.textContent = strMinute;
      }
    }, 1000);
  }
});

gearBtn.addEventListener("click", function () {
  clearInterval(timer);
  // resetting to inital state.
  timer = undefined;
  currentMinute = 0;
  currentSecond = 0;
  startBtn.textContent = "START";
  second.textContent = "00";
  minute.textContent = "00";
});

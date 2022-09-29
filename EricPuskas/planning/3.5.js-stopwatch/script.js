// setTimeout(() => {
//   console.log("Hello!");
//   const container = document.querySelector(".container");
//   const title = document.createElement("h1");
//   title.textContent = "Happy birthday!";

//   container.append(title);
// }, 5000); // milisecunde

// const interval = setInterval(() => {
//   console.log("Hello!");
//   const container = document.querySelector(".container");
//   const title = document.createElement("h1");
//   title.textContent = "Happy birthday!";

//   container.append(title);
// }, 5000);

let seconds = "00";
let tens = "00";

let secondsElement = document.getElementById("seconds");
let tensElement = document.getElementById("tens");

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let interval;

const startTimer = () => {
  tens++;

  if (tens <= 9) {
    // 00:00 -> 00:09
    tensElement.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    // 00:00 -> 00:010
    tensElement.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    secondsElement.innerHTML = "0" + seconds;
    tens = 0;
    tensElement.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    secondsElement.innerHTML = seconds;
  }
};

startButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
});

resetButton.addEventListener("click", () => {
  clearInterval(interval);
  tens = "00";
  seconds = "00";

  tensElement.innerHTML = tens;
  secondsElement.innerHTML = seconds;
});

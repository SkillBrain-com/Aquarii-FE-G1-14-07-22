const DEFAULT_SQUARES = 6;
let winningColor;
let colors = [];

const title = document.querySelector("#rgb-title");
const message = document.querySelector(".message");
const resetButton = document.getElementById("reset");
const squaresContainer = document.querySelector(".squares");

const getWinningColor = () => {
  if (colors.length > 0) {
    const randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];
  }
};

const createRandomColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const createSquares = (numberOfSquares) => {
  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div");
    const randomColor = createRandomColor();

    square.classList.add("square");
    colors.push(randomColor);
    square.style.backgroundColor = randomColor;

    square.addEventListener("click", () => {
      if (winningColor === square.style.backgroundColor) {
        message.textContent = "You won!";
      } else {
        square.style.backgroundColor = "#222020";
        message.textContent = "Try again!";
      }
    });

    squaresContainer.append(square);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  createSquares(DEFAULT_SQUARES);
  winningColor = getWinningColor();
  title.innerHTML = winningColor;
});

resetButton.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");

  colors = [];

  for (const square of squares) {
    const randomColor = createRandomColor();
    square.style.backgroundColor = randomColor;
    colors.push(randomColor);
  }

  winningColor = getWinningColor();
  title.innerHTML = winningColor;
  message.innerHTML = "";
});

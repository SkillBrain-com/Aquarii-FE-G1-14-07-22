const buttons = document.querySelectorAll(".actions button");
const counterElement = document.querySelector("p");
const incrementByElement = document.getElementById("increment-by");

let counter = 0;

const updateCounter = (counter) => {
  counterElement.textContent = `counter : ${counter}`;
};

updateCounter(counter);

for (const button of buttons) {
  console.log(button);
  if (button.id === "increment") {
    button.addEventListener("click", () => {
      console.log("increment");
      counter += Number(incrementByElement.value);
      updateCounter(counter);
    });
  }

  if (button.id === "reset") {
    button.addEventListener("click", () => {
      console.log("reset");
      counter = 0;
      updateCounter(counter);
      incrementByElement.value = "1";
    });
  }
}

console.log("Hello World");

window.globalVariable = "Global variables are not good!";

// console.log(globalVariable);

/**
 * getElementById
 */
const button = document.getElementById("my-button");

/**
 * Putem modifica direct continutul html (copii)
 */
button.innerHTML = "<div> Button 2 </div>";

console.log(button.innerHTML);

/**
 * Cum ascultam un eveniment de click
 */
button.addEventListener("click", () => {
  console.log("CLicked");
});

/**
 * Cum obtinem elemente dupa clasa (rezultatul e un Array!)
 */
const listItems = document.getElementsByClassName("listItem");

for (const listItem of listItems) {
  console.log({ listItem });
  listItem.addEventListener("click", () => {
    const style = listItem.getAttribute("style");

    if (style) {
      listItem.removeAttribute("style");
    } else {
      listItem.style.color = "red";
    }
  });
}

/**
 * Cum obtinem elemente dupa tag name
 * (rezultatul va fi un Array!);
 */
const titles = document.getElementsByTagName("h1");

console.log(titles[0]);

/**
 * querySelector
 * asteapta ca parametru, o sintaxa similara cu cea de css (pentru selectori)
 */
const p = document.querySelector(".paragraph1");

console.log("Paragraph:", p);

/**
 * Similar cu querySelector, dar returneaza toate rezultatele gasite intr-un array
 */
const list = document.querySelectorAll("li");

const firstLi = document.querySelector("li");

console.log("LIST:", list);
console.log("firstLi:", firstLi);

const birdsList = document.querySelectorAll(".birds li");

/**
 * Element.matches
 *  - verifica daca contine selectorul
 */
for (bird of birdsList) {
  if (bird.matches(".special-bird")) {
    console.log("I found a special bird", bird);
  }
}

console.log({ birdsList });

/**
 * Element.closest
 */
const div3 = document.getElementById("div3");

const div2 = div3.closest(".div2");

const div1 = document.getElementById("div1");

// div1.innerHTML = "<p> Am fost modificat din js </p>";

console.log("div2:", div2);
console.log("div2 next sibling:", div2.nextElementSibling);

const textNode = document.createTextNode("Am fost creat prin js");

div1.prepend(textNode);
div1.append(textNode);

const addSquareBtn = document.getElementById("add-square-btn");

const inputElem = document.getElementById("square-txt-input");

console.log("Add Square Btn ID:", addSquareBtn.id);

addSquareBtn.addEventListener("click", () => {
  const container = document.querySelector(".squares-container");

  const square = document.createElement("div");
  square.classList.add("square");

  console.log("value:", inputElem.value);

  const squareParagraph = document.createElement("p");

  const text = document.createTextNode(inputElem.value);

  squareParagraph.append(text);
  square.append(squareParagraph);
  container.append(square);

  inputElem.value = "";
  console.log("Add square");
});

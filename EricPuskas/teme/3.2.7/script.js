/**
 * 1. Scrieți o funcție care returnează pătratul unui număr
 *
 * findSquare(num)
 * Input: num = 6 --- Output: 36
 */
const squareNumber = (number) => number ** 2;
const squareNumber2 = (number) => number * number;
const squareNumber3 = (number) => Math.pow(number, 2);

console.log("squareNumber1:", squareNumber(6));
console.log("squareNumber2:", squareNumber2(6));
console.log("squareNumber3:", squareNumber3(6));

/**
 * 2. Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end . Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)
 */
const random = (minNumber, maxNumber) => {
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
};

// Math.floor(Math.random() * (max -min) + min)

console.log(random(200, 400));

/**
 * 3. Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir
 *
 * "Îmi place programarea", "a"
 * Output: 4
 */
const countletter = (str, letter) => {
  return str.split(letter).length - 1;
};

const countletter2 = (str, letter) => {
  let foundLetterCount = 0;

  for (let char of str) {
    if (char.toLowerCase() === letter.toLowerCase()) foundLetterCount++;
  }

  console.log({ foundLetterCount });

  return foundLetterCount;
};

countletter("Îmi place programarea", "a");
countletter("Îmi place programarea", "m"); // 2

countletter2("Îmi place programarea Este", "e"); // 4

/**
 * 4. Scrieți o funcție pentru a adăuga numere nelimitate
 *
 * Input: addNumber(1, 2, 3)
 * Output: 6
 */
const addNumber = (...argumente) => {
  let sum = 0;
  for (const number of argumente) {
    sum += number;
  }
  console.log("sum:", sum);
  return sum;
};

addNumber(1, 2, 3);
addNumber(4, 5, 6, 7);

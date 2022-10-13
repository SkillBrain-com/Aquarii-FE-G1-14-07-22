/* Tema 3.4.5 */
/* 1. Scrieți o funcție care returnează pătratul unui număr
 * Exemplu : Input: num = 6 ==> Output: 36 */

const squareNumber1 = (number) => number ** 2;
const squareNumber2 = (number) => number * number;
const squareNumber3 = (number) => Math.pow(number, 2);

console.log("squareNumber1: ", squareNumber1(6));
console.log("squareNumber2: ", squareNumber2(6));
console.log("squareNumber3: ", squareNumber3(6));

/* 2. Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end.
      Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end) */
// Math.floor(Math.random() * (max - min) + min)

const random = (minNumber, maxNumber) => {
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}
console.log(random(200,400));

/* 3. Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir
      Funcția letterCount() returnează numărul apariții al unei litere trimise ca parametru dintr-un șir dat.
      Exemplu 1: Input: sir = “Îmi place programarea” litera = “a” ==> Output: 4 */

const countletter = (str, letter) => {
     console.log(str, letter, str.split(letter).length - 1);
}

countletter("Imi place programarea", "a"); // 4
countletter("Imi place programarea", "m"); // 2
countletter("Imi place programarea", "e"); // 4

/* 4. Scrieți o funcție pentru a adăuga numere nelimitate
      Funcția addNumber() returnează suma tuturor numerelor transmise ca argumente funcției.
      Numărul de argumente nu este definit. Se poate transmite un număr nelimitat de numere.
      Exemplu 1: Input: addNumber(1, 2, 3) ==> Output: 6 
      Exemplu 2: Input: addNumber(1, 2, 3, 4, 5) == > Output: 15 (calculeaza suma lor) */

const addNumber = (...argumente) => {
    let sum = 0;
    for (const number of argumente) {
        sum += number;
    }
    console.log("sum: ", sum);
    return sum;
}

addNumber(1, 2, 3); // 6
addNumber(4, 5, 6, 7, 8); // 30

// Tema-JS-week4 - Functii

/**1. Scrieți o funcție care returnează pătratul unui număr
 * 
 * Funcția findSquare(num) returnează pătratul numărului primit ca date de intrare (este transmis ca argument în apelul funcției).
 * 
 * Exemplu 1:

Input: num = 6   Output: 36

Exemplu 2:

Input: num = 0   Output: 0

Exemplu 3:

Input: num = -12   Output: 144

 */

const squareNumber = (number) => number ** 2;
const squareNumber2 = (number) => number * number;
const squareNumber3 = (number) => Math.pow(number, 2);

console.log("Prima varianta:", squareNumber(6));
console.log("A doua varianta:", squareNumber2(0));
console.log("A treia varianta:", squareNumber3(-12));



console.log("\n\n")

/**+
 * 2. Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end . 
 * Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)
 * 
 * Input: start = 3, end = 5

   Output: < un număr mai ≥ 3 și < 5>
 */

const randomNumber = (minNumber, maxNumber) => {
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
};

console.log(randomNumber(3, 5));



console.log("\n\n")

/**
 * 3. Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir
 * Funcția letterCount() returnează numărul apariții al unei litere trimise ca parametru dintr-un șir dat.

Exemplu 1:

Input: sir = “Îmi place programarea” litera = “a”    Output: 4

Exemplu 2:

Input: sir = “Vreau să lucrez în IT”, litera = “r”    Output: 2

Notă: Nu se ține cont de scrierea cu majuscule sau minuscule. 
Litera A și litera a trebuie numărate la calcularea numărului de apariții pentru A sau pentru a.


 */

// Varianta cu Split

const countLetter = (str, letter) => {
  console.log("Varianta prin Split:",str.split(letter).length - 1);
};

countLetter("Îmi place programarea", "a");

// VArianta Prin Indice

const countLetter2 = (str, letter) => {
  let foundLetterCount = 0;

  for (let char of str) {
    if (char === letter) foundLetterCount++;
  }

  console.log("Varianta prin prin Indice:",foundLetterCount);

  return foundLetterCount;
};

countLetter2("Vreau să lucrez în IT", "r");


// Varianta cu toLowerCase

const countLetter3 = (str, letter) => {
    let foundLetterCount = 0;
  
    for (let char of str) {
      if (char.toLowerCase() === letter.toLowerCase()) foundLetterCount++;
    }
  
    console.log("Varianta prin prin toLowerCase:",foundLetterCount);
  
    return foundLetterCount;
  };
  
  countLetter3("VReau să lucrez în IT", "r");



  
console.log("\n\n")

  /**
   * 4. Scrieți o funcție pentru a adăuga numere nelimitate
   * 
   * Funcția addNumber() returnează suma tuturor numerelor transmise ca argumente funcției. 
   * Numărul de argumente nu este definit. Se poate transmite un număr nelimitat de numere.

Exemplu 1:

Input: addNumber(1, 2, 3)

Output: 6

Exemplu 2:

Input: addNumber(1, 2, 3, 4, 5)

Output: 15

Hint: Pentru a rezolva problema, vom folosi operatorul spread / rest (...) pentru a defini argumentele funcției:
const addNumber = (…argumente) ⇒ {}
   */

const addNumber = (...argumente) => {
    let sum = 0;
    for (const number of argumente) {
        sum += number;
    }

    console.log("Sum:", sum);

    return sum;
}

addNumber(1, 2, 3);
addNumber(1, 2, 3, 4, 5);

const users = [
    { name: 'Victor', age: 19 },
    { name: 'Gheo', age: 1 },
    { name: 'Mircea', age: 4 },
    { name: 'Matei', age: 16 },
  ];


console.log(users)

  
  // Primește elementele comparate
  const compare = (a, b) => {
    if (a.age === b.age) {
      return 0;
    }
  
    return a.age < b.age ? 1 : -1;
  };
  
  users.sort(compare);
  
  console.log(users);
  // => [
  //  { name: 'Victor', age: 19 },
  //  { name: 'Gheo', age: 1 },
  //  { name: 'Mircea', age: 4 },
  //  { name: 'Matei', age: 16 },
  // ]

  const say = (fn) => {
    const message = fn();
    console.log(message);
  };
  // sau așa:
  // const say = (fn) => console.log(fn());
  
  const myCallbackFn = () => 'hi!';
  say(myCallbackFn); // => hi!
  // sau așa:
  // say(() => 'hi!');

  users
  .filter((user) => user.age >= 16)
  .map((user) => `${user.name} is ${user.age} years old`)
  .join('\n');
// => Victor is 19 years old
//    Matei is 16 years old
users
    .filter((user) => user.age >= 16)
    .map((user) => `${user.name} is ${user.age} years old`)
    .join('\n');
  // => Victor is 19 years old
  //    Matei is 16 years old
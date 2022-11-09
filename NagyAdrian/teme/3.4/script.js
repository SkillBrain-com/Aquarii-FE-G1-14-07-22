//Scrieți o funcție care returnează pătratul unui număr
// Input: num = 6
// Output: 36

const squareNumber = (number) => number * number;
const squareNumber2 = (number) => Math.pow(number, 2);

console.log("squareNumber: ", squareNumber(6));
console.log("squareNumber2: ", squareNumber2(6));


// Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end . Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)
// Input: start = 3, end = 5
// Output: < un num**ă**r mai ≥ 3 și < 5>

const random = (minNumber, maxNumber) => {
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
  };
  
  console.log(random(3, 5));


// Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir
// Input: sir = “Îmi place programarea” litera = “a"
// Output: 4

const letterCounter = (str, letter) => {
    let foundLetterCount = 0
    for(let char of str) {
      if(char.toLowerCase() === letter.toLowerCase()) foundLetterCount++
      
    }
    console.log({foundLetterCount})
    return foundLetterCount;

   }

   letterCounter("Imi place Programarea ", "a" );


   // Scrieți o funcție pentru a adăuga numere nelimitate
   // Input: addNumber(1, 2, 3)
   // Output: 6

   const addNumber = (...argumente) =>{
    let sum = 0

    for (const number of argumente) {
      sum += number;
    }
    console.log("Result:", sum);
   };

   addNumber(1, 2, 3);
   addNumber(4, 5, 6, 7);
/**
 * Tema-JS-Functii.3.4.5
 */

/**
 * Ex: 1. Scrieți o funcție care returnează pătratul unui număr.
 * Exemplu 1:

Input: num = 6

Output: 36
 */

const findSquare = (Number) => Number ** 2
console.log("Input:", 6)
console.log("Output:", findSquare(6))
/*
const findSquare1 = (number) => number * number;
console.log("Input:", 6)
console.log("Output:", findSquare(6));

const findSquare2 = (number) => Math.pow(number, 2)
console.log("Input:", 6)
console.log("Output:", findSquare(6));
*/

/**
 * Ex: 2. Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end . 
 * Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)
 * Exemplu 1:

Input: start = 3, end = 5

Output: < un num**ă**r mai ≥ 3 și < 5>
 */

const getRandom = (start, end) => {
    return (Math.floor)(Math.random() * (end - start) + start);
  };
  
  console.log("Input:","Start:", 3 ,"end:", 5);
  console.log("Output:",(getRandom(3, 5)));

  /**
   * Ex: 3. Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir.
   * Input: sir = “Îmi place programarea” litera = “a”

     Output: 4
   */

     const letterCount = (str, letter) => {
      console.log(str, letter, str.split(letter).length - 1);
    };

     letterCount("Imi place programarea", "a");

     const letterCount2 = (str, letter) => {
      let foundLetterCount = 0
      for(let char of str) {
        if(char.toLowerCase() === letter.toLowerCase()) foundLetterCount++
        
      }
      console.log({foundLetterCount})
      return foundLetterCount;

     }

     letterCount2("Imi place Programarea ", "p" );

     /**
      * Ex: 4. Scrieți o funcție pentru a adăuga numere nelimitate
      * Exemplu 1:

       Input: addNumber(1, 2, 3)

       Output: 6
      */

       const addNumber = (...argumente) =>{
        let sum = 0

        for (const number of argumente) {
          sum += number;
        }
        console.log("Result:", sum);
       };

       addNumber(1, 2, 3);
       addNumber(4, 5, 6, 7);
    

     
     
     
     




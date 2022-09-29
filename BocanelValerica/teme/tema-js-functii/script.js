/** 1. Scrieți o funcție care returnează pătratul unui număr

Funcția findSquare(num) returnează pătratul numărului primit ca date de intrare (este transmis ca argument în apelul funcției).

Input: num = 6

Output: 36
*/

const findSquare = (number) => number ** 2; 

console.log(findSquare(6)); // 36


/** 2. Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end . Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)

Funcția getRandom(start, end) returnează un număr întreg aleator generat în intervalul definit de variabilele de început și sfârșit furnizate.

Input: start = 3, end = 5

Output: < un număr mai ≥ 3 și < 5>
*/

const getRandomNumber = (minNumber, maxNumber) =>  Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

console.log(getRandomNumber(3,5)); // random number ≥ 3 && < 5


/** 3. Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir

Funcția letterCount() returnează numărul apariții al unei litere trimise ca parametru dintr-un șir dat.

Input: sir = “Îmi place programarea” litera = “a”

Output: 4 
*/

const letterCount = (string) => {
    const counter = {};
  
    for(const letter of string){
        if(!counter[letter]) counter[letter] = 0;
        counter[letter] += 1;
    }
    
   return counter
}

console.log(letterCount('test')) // {t: 2, e: 1, s: 1}

// prima ar fi varianta pentru a vedea numarul tuturor caracterelor
// a doua varianta arata numarul de apariti al unei litere specifice dintr-un sir

const letterCount2 = (string, letter) => {
  return (string.split(letter)).length - 1;
}
 
console.log(letterCount2("Îmi place programarea", "a")); // 4.
console.log(letterCount2("Vreau să lucrez în IT", "r")); // 2.


/** 4. Scrieți o funcție pentru a adăuga numere nelimitate

Funcția addNumber() returnează suma tuturor numerelor transmise ca argumente funcției. Numărul de argumente nu este definit. Se poate transmite un număr nelimitat de numere.

Input: addNumber(1, 2, 3)

Output: 6
*/

const addNumbers = (...numbers) => {
    let sum = 0;
    
    for(const number of numbers){
        sum += number;
    }
    return sum
}

console.log(addNumbers(1,2,3)) // 6
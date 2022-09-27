//Scrieți o funcție care returnează pătratul unui număr

const findSquare = (num) => num**2;
console.log(findSquare(-12));

//Scrieți o funcție pentru a genera un număr aleatoriu 
// mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end. 
// Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)

const getRandom = (start, end) => Math.floor(Math.random() * (end-start) + start);
console.log(getRandom(1000, 1500));


//Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir

const letterCount = (string, letter) => {
  const result = [];
  for (const char of string.toLowerCase()){
    if (char === letter){
      result.push(char);
    }
  }
  return result.length;
}
console.log(letterCount('INNAIN', 'i'));

//Scrieți o funcție pentru a adăuga numere nelimitate

const addNumber = (...numbers) => [...numbers].reduce((previousValue, currentValue) => previousValue+currentValue, 0);
console.log(addNumber(3,4,5,6,100));
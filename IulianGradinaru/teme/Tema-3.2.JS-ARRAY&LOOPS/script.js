
// Solutiile lui eric la tema le gasesti mai jos:

/**
 * Tipăriți toate numerele pare de la 0 la 10
 * Input: n = 10, unde n este numărul maxim până la care se va executa bucla
 * Output: 0, 2, 4, 6, 8, 10
 */
 const printEvenNumbers = (maxNumber) => {
  const numbers = [];

  for (let i = 0; i <= maxNumber; i += 2) {
    numbers.push(i);
  }

  console.log(numbers.join(", "));

  return numbers;
};

printEvenNumbers(24); // 0, 2, 4, 6, 8, 10, 12, 14 

/**
 * Calculați suma numerelor dintr-un șir de numere
 * Input: [1, -5, 20, -34, 16, 29, 36, -4]
 * Output: 59
 */
const sumOfElements = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  console.log("Sum:", sum);
  return sum;
};

sumOfElements([1, -5, 20, -34, 16, 29, 36, -4]); // 59

/**
 * Creați o funcție care inversează un șir de numere
 * Input: [1, -5, 20, -34, 16, 29, 36, -4]
 * Output: [-4, 36, 29, 16, -34, 20, -5, 1]
 */
const reverseArray = (array) => {
  const reversedArray = [];

  for (let i = 0; i < array.length; i++) {
    reversedArray[i] = array[array.length - 1 - i];
  }

  console.log("Initial array:", array);
  console.log("Reversed array:", reversedArray);
  return reversedArray;
};

reverseArray([1, -5, 20, -34, 16, 29, 36, -4]);

/**
 * Returnează numărul de vocale dintr-un șir de caractere (string)
 * Input: “string de test”
 * Output: 3
 */
const getVowelsCount = (str) => {
  let count = 0;
  const vowels = "aeiou".split("");

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  console.log("Vowels count:", count);
  return count;
};

getVowelsCount("string de test");


// Ce am predat eu ca si tema gasesti mai jos :

// Exercitiu 1 (Tipăriți toate numerele pare de la 0 la 10)

const evenNumbers = ["0","1","2","3","4","5","6","7","8","9","10"]
for (let i = 0; i < evenNumbers.length; i +=2) {
    console.log("Numere pare:", evenNumbers[i])
}


/**Exercitiu 2 (Calculați suma numerelor dintr-un șir de numere)
 * 
 * Prima varianta:
 */

const array1 = [3.45, -2.68, 356, -75.96, 64, 19.28];
let s = 0;

for (let i = 0; i < array1.length; i += 1) 
   {
    s += array1[i];
    }
console.log("Suma:", s); 


// A doua varianta: (pe asta am gasit-o pe net si as vrea sa o vorbim la recapituare)

function sumArray(array) {
    let sum = 0; 
  
    for (const item of array) {
      sum += item;
    }
   
    console.log("Suma 2:", sum); 
    return sum;
  }
  
  sumArray([1, 4, 0, 9, -3]); 



//Exercitiu 3 (Creați o funcție care inversează un șir de numere)

const number = ["1","-5","20","-34","16","29","36","-4"]

for ( let i = 0; i < number.length; i++) {
    console.log("In ordine:", number[i])
}

/// Descrestere


const number2 = ["1","-5","20","-34","16","29","36","-4"]

for ( let i = number.length -1; i >= 0; i -=1){
    console.log("In ordine inversa:", number[i])
}

// Exercitiu 4 ( Returnează numărul de vocale dintr-un șir de caractere (string) )

// varianta 1

const countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;

console.log(countVowels('string de test'));

// Varianta 2 ( pe asta am gasit-o pe net si as vrea sa o vorbim la recapituare )

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);


    
  


      
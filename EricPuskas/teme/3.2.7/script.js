/**
 * @see https://gist.github.com/weav797/718ac3d9dcc6e506229b4fce8cd18278
 */
const movies = [
  {
    title: "Heather",
    rating: 4.5,
    hasWatched: true
  },
  {
    title: "Europa Report",
    rating: 2.5,
    hasWatched: false
  },
  {
    title: "Fellowship of the Ring",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Silver Linings Playbook",
    rating: 5,
    hasWatched: true
  }
];

const compareFn = (a, b) => {
  console.log("a:", a);
  console.log("b:", b);

  if (a.rating > b.rating) return 1;
  if (a.rating < b.rating) return -1;

  return 0;
};

console.log({
  original: movies,
  sortat: [...movies].sort(compareFn)
});

// Math.random()
// Date.now()

const sum = (a, b) => {
  // console.log({a , b})
  return a + b;
};

sum(1, 4);

const filtered = movies
  .filter((movie) => movie.rating > 3)
  .map((movie) => {
    return {
      ...movie,
      title: "Not the right title"
    };
  });

console.log(filtered);

const everyMovieIsGood = movies.every((movie) => movie.rating === 5); // &&
const someMoviesAreGood = movies.some((movie) => movie.rating === 5); // ||
// const studentDoneHomework = students.every((student) => student.hasDoneHomework);
console.log({ everyMovieIsGood, someMoviesAreGood });
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

printEvenNumbers(15); // 0, 2, 4, 6, 8, 10, 12, 14

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

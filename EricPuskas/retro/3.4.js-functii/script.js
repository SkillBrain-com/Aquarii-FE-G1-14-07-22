console.log("Hello World");

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

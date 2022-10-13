const a = 1;
const b = 2;
const c = 3;

console.log("1");

setTimeout(() => {
  console.log("2");
}, 10);

console.log("3");

const one = () => {
  const two = () => {
    console.log("4");
  };

  two();
};
const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    const data = response.data.map((fact) => {
      let { text, _id } = fact;

      return { text, id: _id };
    });
    appendData(data);
  } catch (err) {
    console.log("Am prins eroarea", err);
    const errorContainer = document.getElementById("error");
    const textNode = document.createTextNode(err.message);

    errorContainer.append(textNode);
  }
};

getData();

const appendData = (data) => {
  const div = document.getElementById("cats");
  const ul = document.createElement("ul");

  for (let bit of data) {
    const li = document.createElement("li");
    const textNode = document.createTextNode(bit.text);

    // <li id="aiiasdninaisdi"> asdinasidnoa... </li>
    li.setAttribute("id", bit.id);
    li.append(textNode);
    ul.append(li);
  }

  div.append(ul);
  console.log("Data:", data);
};

/**
 * Functie recursiva -> Stack overflow
 */
// function fn() {
//   fn();
// }

// CALL STACK

// CALLBACK QUEUE

// WEB API

// EVENT LOOP

const promise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("Totul e ok");
    }, 3000);
  } else {
    reject("Ceva nu e bine");
  }
});

console.log(promise);

promise
  .then((result) => {
    return result + "!";
  })
  .then((result2) => result2 + "?")
  .then((result3) => {
    console.log(result3);
    return result3;
  })
  .then((result4) => {
    // throw new Error("Test");
    return result4 + " weeeee";
  })
  .catch((err) => {
    console.log("HAHA! L-am prins:", err);
  })
  .finally(() => {
    console.log("FINALLLYYYY");
  });

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Promise1"); // resolve("Promise1");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Promise2");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Promise3");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log("values:", values);
});

const urls = [
  "http://jsonplaceholder.typicode.com/posts",
  "http://jsonplaceholder.typicode.com/todos",
  "http://jsonplaceholder.typicode.com/users"
];

const getMyPromises = async () => {
  const [posts, todos, users] = await Promise.all(
    urls.map((url) => fetch(url).then((res) => res.json()))
  );

  console.log({ posts, todos, users });
};

// fetch("http://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Posts:", data);
//   });

// GET, POST, PUT, DELETE, PATCH

const getPosts = async () => {
  try {
    const { data: posts } = await axios.get(
      "http://jsonplacehlder.typicode.com/posts"
    );

    const { data: todos } = await axios.get(
      "http://jsonplaceholder.typicode.com/todos"
    );

    const { data: users } = await axios.get(
      "http://jsonplaceholder.typicode.com/users"
    );

    console.log("Results:", { posts, todos, users });
  } catch (error) {
    console.log("AM prins eroarea!:", error);
  }
};

// axios.get("http://jsonplaceholder.typicode.com/posts").then((response) => {
//   const { data } = response;
//   console.log(data);
// });

// getMyPromises();
getPosts();

// https://cat-fact.herokuapp.com/facts

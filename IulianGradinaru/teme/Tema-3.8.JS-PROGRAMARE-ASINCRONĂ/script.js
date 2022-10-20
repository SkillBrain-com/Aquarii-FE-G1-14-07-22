
const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/todos",
  "https://jsonplaceholder.typicode.com/users",
];

const getMyPromises = async () => {
  const [posts, todos, users] = await Promise.all(
    urls.map((url) => fetch(url).then((res) => res.json()))
  );

  console.log({ posts, todos, users });
};

const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = response.data.map((post) => {
      let { body, title, userId } = post;

      return { user: userId, title, text: body };
    });

    console.log("data", data)
    attachmentData(data)
  } catch (error) {
    console.log("am prins eroarea;", error);

  }
};

getData();

// attachmentData
// getData

const attachmentData = (data) => {
  const div = document.getElementById("posts"); // null
  const ul = document.createElement("ul");

  /**
   *  <ul>
   *  <li>
          <ul>
            <li> {text} </li>
            <li> {title} </li>
            <li> {user} </li>
          </ul> 
  *   </li>
   *  </ul>
   */

  for (let element of data) {
    const li = document.createElement("li");
    const childUl = document.createElement("ul");

    for (let key in element) {
      const newLi = document.createElement("li");
      const content = document.createTextNode(`${key}: ${element[key]}`);

      newLi.append(content);
      childUl.append(newLi);
    }

    li.append(childUl);
    ul.append(li);
    // console.log("creat",attachmentData)
  }

  div.append(ul);
  console.log("datele mele", data);
};


getMyPromises()
let users = [
  { id: 0, name: "Mike", age: 20, isDeveloper: true },
  { id: 1, name: "John", age: 30, isDeveloper: false },
  { id: 2, name: "Sara", age: 24, isDeveloper: true },
  { id: 3, name: "Sandra", age: 19, isDeveloper: false }
];

// find
// getUserById(2)

const getUserById = (id) => {
  const result = users.find((user) => user.id === id);
  console.log(result);
  return result;
};

// filter
// getDevelopers()
const getDevelopers = () => {
  const developers = users.filter((user) => user.isDeveloper);
  console.log(developers);
};
getDevelopers();

// map
// addGreetingToUsers(users);  const someUser = getUserById(1);  someUser.greet(); // Hello, my name is Mike

const addGreetingToUsers = (_users) => {
  users = _users.map((user) => {
    const greet = () => {
      console.log(`Hello, my name is ${user.name}`);
    };

    return {
      ...user,
      greet
    };
  });
};

addGreetingToUsers(users);
const someUser = getUserById(1);

someUser.greet();

/**
 *  Destructuring / Spread operator
 *  Loops ( for, for in, for of )
 *  Functii ES6
 *  evenimentele (formulare, submit => event.preventDefault())
 */

import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

/**
 * 1. Using fetch or axios, when App mounts, set the users state with only the name of the user
 *    API endpoint: http://jsonplaceholder.typicode.com/users
 *    Expected: An array of strings (the names of the users) ["John", "Bob", ... ]
 *
 * 2. We have a controlled input, typing into it will show matches based on the user names we fetched previously
 *    Eg: type in "Ad", we should see at least one match "Adam", "Adrian" ... and so on
 *
 * 3. Clearing the input will hide all suggestions that matched.
 * 4. Clicking on a suggestion will fill the input with that suggestion.
 * 5. Convert the controlled input into an uncontrolled one.
 */

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const getUsers = async () => {
    const { data } = await axios.get(
      "http://jsonplaceholder.typicode.com/users"
    );

    setUsers(data.map((user) => user.name));
  };

  useEffect(() => {
    getUsers();
  }, []);

  /**
   *  ["Adam", "Maria", "John", "Aaron"] - users
   *  "a" <- event.target.value
   *  ["Adam", "Aaron"]
   */

  const handleNameChange = (event) => {
    /**
     * Metoda 1
     */
    setSuggestions(
      users.filter((user) => {
        const value = event.target.value;

        if (!value) return false;

        return (
          user.substring(0, value.length).toLowerCase() === value.toLowerCase()
        );
        // return user.startsWith(value)
      })
    );

    /**
     * Metoda 2
     */
    // const matchingOptions = [];

    // users.forEach((user) => {
    //   if (user.startsWith(event.target.value)) {
    //     matchingOptions.push(user);
    //   }
    // });

    // setSuggestions(matchingOptions);
    // setSuggestions([]);
    setName(event.target.value); // ""
  };

  const handleClickSuggestion = (item) => {
    setName(item);
  };

  return (
    <div className="App">
      <label>Name</label>
      <input value={name} onChange={handleNameChange} type="text" />
      <input type="text" ref={inputRef} />
      <div>
        {suggestions.map((item, index) => {
          return (
            <div key={index} onClick={() => handleClickSuggestion(item)}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

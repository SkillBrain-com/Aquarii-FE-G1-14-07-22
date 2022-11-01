import "./App.css";
import { useState } from "react";
import { data } from "./data";

function App() {
  const [counter, setCounter] = useState(0);
  const [people, setPeople] = useState(data);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const removeElement = (name) => {
    const updatedPeople = people.filter((person) => {
      return person.name !== name;
    });
    setPeople(updatedPeople);
  };

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    }

    if (event.target.name === "age") {
      setAge(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ name, age });
    setPeople((prevState) => [
      ...prevState,
      {
        name,
        age,
        gender: "male",
        profession: "Monk"
      }
    ]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nume:</label>
        <input name="name" value={name} onChange={handleChange} type="text" />

        <label>Age:</label>
        <input name="age" value={age} onChange={handleChange} type="text" />
        <input type="submit" value="Submit!" />
      </form>
      <ul>
        {people.map((item, index) => (
          <li onClick={() => removeElement(item.name)} key={index}>
            {item.name}
          </li>
        ))}
      </ul>
      <div>{counter}</div>
      <button onClick={incrementCounter}>Press me</button>
    </div>
  );
}

export default App;

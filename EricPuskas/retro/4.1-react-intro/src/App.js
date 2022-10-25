import { useState } from "react";
import logo from "./logo.svg";
// import { Fragment } from "react";
import "./App.css";
import { TaskList } from "./components/TaskList.jsx";
import { Task } from "./components/Task.jsx";

/** JSX
 *  <TaskList>
 *    <Task text="task 1" />
 *    <Task text="task 2" />
 *    <Task text="task 3" />
 *    <Task text="task 4" />
 *  </TaskList>
 *
 * Result:
 * <ul>
 *   <li> task 1 <li>
 *   <li> task 1 <li>
 *   <li> task 3 <li>
 *   <li> task 4 <li>
 * </ul>
 */

function App() {
  const [itemState, setItemState] = useState("Hello World!");

  const data = [
    {
      id: 1,
      text: "salut",
      active: true
    },
    {
      id: 2,
      text: "buna seara"
    },
    {
      id: 3,
      text: "buna ziua",
      active: true
    },
    {
      id: 4,
      text: "vacanta !!!"
    }
  ];

  const renderListItems = () => {
    return data.map((task) => {
      return <Task key={task.id} text={task.text} active={task.active} />;
    });
  };

  const handleClick = (e) => {
    setItemState("Goodbye!");
  };

  return (
    <div className="App">
      <h1>{itemState}</h1>
      <button onClick={handleClick}>Click me!</button>
      {/* <TaskList
        children={
          <>
            <Task text="task1" />
            <Task text="task2" />
            <Task text="task3" />
            <Task text="task4" />
          </>
        }
      /> */}
      <TaskList>
        {/* <Task text="task1" />
        <Task text="task2" />
        <Task text="task3" />
        <Task text="task4" /> */}
        {renderListItems()}
      </TaskList>
    </div>
  );
}

export default App;

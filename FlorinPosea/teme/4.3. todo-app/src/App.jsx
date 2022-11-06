import React, { useState } from "react";
import Card from "./components/card/Card";
import TodoItem from "./components/todo-item/TodoItem";
import Button from "./components/button/Button";
import "./App.css";
import CreateTodoForm from "./components/forms/CreateTodoForm";
import EditTodoForm from "./components/forms/EditTodoForm";
import Modal from "./components/modal/Modal";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

function App() {
  const [todosList, setTodosList] = useState(TODOS_MOCK);
  const [isOpen, setIsOpen] = useState(false);
  const [editTodos, setEditTodos] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const maxId = (arr) => {
    let max = 0;
    arr.forEach((item) =>
      parseInt(item.id) > max ? (max = parseInt(item.id)) : ""
    );
    return max;
  };

  const onAddNewTodo = (newTodo) => {
    setTodosList((prevState) => [...prevState, newTodo]);
    closeModal();
  };

  const updateTodoList = (arr, obj) => {
    arr.forEach((item) => {
      if (item.id === obj.id) {
        item.title = obj.title;
        item.description = obj.description;
        item.completed = obj.completed;
      }
    });
  };

  const onChangeCompleted = (completedTodo) => {
    updateTodoList(todosList, completedTodo);
    setTodosList([...todosList]);
  };

  const onDeleteTodo = (id) => {
    setTodosList([...todosList.filter((item) => item.id != id)]);
  };

  const onEditTodo = (editTodo) => {
    setEditTodos(editTodo);
    openModal();
  };

  const onUpdateTodoCompleted = (updateTodo) => {
    updateTodoList(todosList, updateTodo);
    setTodosList([...todosList]);
    closeModal();
    setEditTodos("");
  };


  return (
    <div className="App">
      <div className="app-container">
        <Card>
          <h1>My todos</h1>
          <Button onClick={openModal}>Add +</Button>
          <div className="list-container">
            {todosList
              .filter((item) => item.completed === false)
              .map((item) => (
                <TodoItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  completed={item.completed}
                  changeCompleted={onChangeCompleted}
                  deleteTodo={onDeleteTodo}
                  editTodo={onEditTodo}
                />
              ))}
          </div>

          <div className="separator"></div>

          <h2>Completed</h2>
          <div className="list-container">
            {todosList
              .filter((item) => item.completed === true)
              .reverse()
              .map((item) => (
                <TodoItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  completed={item.completed}
                  changeCompleted={onChangeCompleted}
                  deleteTodo={onDeleteTodo}
                  editTodo={onEditTodo}
                />
              ))}
          </div>
        </Card>

        <Modal isOpen={isOpen} onClose={closeModal}>
          return (
          {!editTodos ? (
            <CreateTodoForm addNewTodo={onAddNewTodo} id={maxId(todosList)} />
          ) : (
            <EditTodoForm
              editTodo={editTodos}
              updateTodo={onUpdateTodoCompleted}
            />
          )}
          )
        </Modal>
      </div>
    </div>
  );
}

export default App;

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
  const [editTodo, setEditTodo] = useState();

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

  const updateTodoInList = (prevState, updatedTodo) => {
    return prevState.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      } else {
        return todo;
      }
    });
  } 

  const onChangeCompleted = (completedTodo) => {
    setTodosList((prevState) => updateTodoInList(prevState, completedTodo));
  };

  const onDeleteTodo = (id) => {
    setTodosList(todosList.filter((item) => item.id !== id));
  };

  const onEditTodo = (editTodo) => {
    setEditTodo(editTodo);
    openModal();
  };

  const onUpdateTodoCompleted = (updateTodo) => {
    setTodosList((prevState) => updateTodoInList(prevState, updateTodo));
    closeModal();
    setEditTodo();
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
          
          {!editTodo ? (
            <CreateTodoForm addNewTodo={onAddNewTodo} id={maxId(todosList)} />
          ) : (
            <EditTodoForm
              editTodo={editTodo}
              updateTodo={onUpdateTodoCompleted}
            />
          )}
          
        </Modal>
      </div>
    </div>
  );
}

export default App;

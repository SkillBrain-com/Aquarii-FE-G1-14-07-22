import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./components/Modal";
import { TodoListViewer } from "./components/TodoListViewer";
import { TodoForm } from "./components/TodoForm";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { useModal } from "./hooks";

function App() {
  const [createModalOpen, handleOpenCreateModal, handleCloseCreateModal] =
    useModal();

  const [editModalOpen, handleOpenEditModal, handleCloseEditModal] = useModal();

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();

  const addTodo = (todoListItem) => {
    setTodos((prevState) => {
      return [todoListItem, ...prevState];
    });
  };

  const toggleTodoComplete = (id) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done
          };
        } else {
          return todo;
        }
      });
    });
  };

  const updateTodoInList = (updatedTodo) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return {
            ...todo,
            ...updatedTodo
          };
        } else {
          return todo;
        }
      });
    });
    setTodo(undefined);
    handleCloseEditModal();
  };

  const handleDelete = (id) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  const handleEdit = (todo) => {
    setTodo(todo);
  };

  const getTodos = async () => {
    try {
      const { data } = await axios.get(
        "http://jsonplaceholder.typicode.com/todos"
      );

      const result = data.slice(0, 5).map((todo) => {
        return {
          id: todo.id,
          title: todo.title,
          description: "-",
          done: todo.completed
        };
      });

      setTodos(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    if (todo) {
      handleOpenEditModal();
    }
  }, [todo]);

  return (
    <div className="App">
      <h1> To do App</h1>
      <button onClick={handleOpenCreateModal}> Add todo </button>

      <ErrorBoundary>
        <TodoListViewer
          todos={todos}
          toggleTodoComplete={toggleTodoComplete}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </ErrorBoundary>

      <Modal open={createModalOpen} onClose={handleCloseCreateModal}>
        <TodoForm
          formTitle="Create To-do"
          buttonText="Create"
          addTodo={addTodo}
          closeModal={handleCloseCreateModal}
        />
      </Modal>

      <Modal open={editModalOpen} onClose={handleCloseEditModal}>
        <TodoForm
          formTitle="Edit To-do"
          buttonText="Update"
          addTodo={addTodo}
          updateTodo={updateTodoInList}
          todo={todo}
          closeModal={handleCloseCreateModal}
        />
      </Modal>
    </div>
  );
}

export default App;

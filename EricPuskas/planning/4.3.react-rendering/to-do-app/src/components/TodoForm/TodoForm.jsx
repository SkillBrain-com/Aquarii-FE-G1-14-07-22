import { useState, useEffect } from "react";
import "./TodoForm.css";

export const TodoForm = (props) => {
  const { formTitle, buttonText, addTodo, updateTodo, todo, closeModal } =
    props;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const getUniqueId = () => {
    return Math.floor(Math.random() * 1000).toString();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "title") setTitle(value);
    if (name === "description") setDescription(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (todo) {
      console.log({ todo });
      updateTodo({
        ...todo,
        title,
        description
      });
    } else {
      const newTodo = {
        id: getUniqueId(),
        title,
        description,
        done: false
      };

      console.log({ newTodo });
      addTodo(newTodo);
    }

    setTitle("");
    setDescription("");
    closeModal();
  };

  useEffect(() => {
    if (todo) {
      const { title, description } = todo;

      setTitle(title);
      setDescription(description);
    }
  }, [todo]);

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <h2> {formTitle} </h2>
      <label> Title </label>
      <input name="title" type="text" onChange={handleChange} value={title} />
      <label> Description </label>
      <textarea
        name="description"
        onChange={handleChange}
        value={description}
      ></textarea>
      <button type="submit"> {buttonText} </button>
    </form>
  );
};

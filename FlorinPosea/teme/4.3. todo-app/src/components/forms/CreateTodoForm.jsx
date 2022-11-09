import React, { useState } from "react";
import "./CreateTodoForm.css";
import Card from "../card/Card";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";

const CreateTodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: (props.id + 1).toString(),
      title: title,
      description: description,
      completed: false,
    };

    props.addNewTodo(newTodo);
    resetForm();
  };

  return (
    <Card>
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
        <Input
          value={title}
          onChange={handleChangeTitle}
          placeholder="Title"
          type="text"
        />
        <TextArea
          value={description}
          onChange={handleChangeDescription}
          placeholder="Description"
        />
        <Button type="submit">Create</Button>
      </form>
    </Card>
  );
};

export default CreateTodoForm;

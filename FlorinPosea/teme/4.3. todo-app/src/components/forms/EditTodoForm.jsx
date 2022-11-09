import React, { useState } from "react";
import "./EditTodoForm.css";
import Card from "../card/Card";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";


const EditTodoForm = (props) => {
    const [title, setTitle] = useState(props.editTodo.title);
    const [description, setDescription] = useState(props.editTodo.description);

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
        const updateTodo = {
            id: props.editTodo.id,
            title: title,
            description: description,
            completed: props.editTodo.completed,
        };

        props.updateTodo(updateTodo);
        resetForm();
    };

    return (
        <Card>
        <h2>Edit Todo</h2>
        <form onSubmit={handleSubmit}>
            <Input
            value={title}
            onChange={handleChangeTitle}
            type="text"
            />
            <TextArea
            value={description}
            onChange={handleChangeDescription}
            />
            <Button type="submit">Submit edit</Button>
        </form>
        </Card>
    );
};

export default EditTodoForm;

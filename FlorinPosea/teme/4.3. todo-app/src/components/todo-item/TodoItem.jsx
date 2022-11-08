import React, { useState } from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";

const TodoItem = (props) => {

  const handleCheckboxChange = (value) => {
    if (value != props.completed) {
      const completedTodo = {
        id: props.id,
        title: props.title,
        description: props.description,
        completed: value,
      }
      props.changeCompleted(completedTodo);
    }
  };

  const handleTrashClick = (event) => {
    props.deleteTodo(props.id);
  }

  const handleEditClick = (event) => {
    const editTodo = {
      id: props.id,
      title: props.title,
      description: props.description,
      completed: props.completed,
    };
    props.editTodo(editTodo);
  }



  return (
    <div className={`todo-item ${props.completed && "todo-completed"}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox
            checked={!!props.completed}
            onChange={handleCheckboxChange}
          />
          
          <h4>{props.title}</h4>
        </div>
        <div>
          <i onClick={handleEditClick} className="fa fa-pencil" aria-hidden="true"></i>
          <i onClick={handleTrashClick} className="fa fa-trash" aria-hidden="true"></i>
        </div>
      </div>

      <div className="separator"></div>

      <p>{props.description}</p>
    </div>
  );
};

export default TodoItem;

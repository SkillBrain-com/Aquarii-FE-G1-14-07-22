import clsx from "clsx";
import "./TodoListItem.css";

export const TodoListItem = (props) => {
  const {
    id,
    title,
    description,
    done,
    toggleTodoComplete,
    handleEdit,
    handleDelete
  } = props;

  const iconClassName = clsx({
    "far fa-circle": !done,
    "far fa-check-circle": done
  });

  const handleToggle = () => {
    toggleTodoComplete(id);
  };

  const editTodo = () => {
    handleEdit({ id, title, description, done });
  };

  const deleteTodo = () => {
    handleDelete(id);
  };

  return (
    <div className="todo-list-item">
      <i onClick={handleToggle} className={iconClassName}></i>
      <h5> {title} </h5>
      <p> {description} </p>
      <button onClick={editTodo}> Edit </button>
      <button onClick={deleteTodo}> Delete </button>
    </div>
  );
};

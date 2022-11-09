import { TodoListItem } from "../TodoListItem";
import "./TodoListViewer.css";

export const TodoListViewer = (props) => {
  const { todos, toggleTodoComplete, handleDelete, handleEdit } = props;

  return (
    <div>
      <h2> To Do </h2>
      <div>
        {todos
          .filter((todo) => !todo.done)
          .map((todo) => {
            return (
              <TodoListItem
                key={todo.id}
                {...todo}
                toggleTodoComplete={toggleTodoComplete}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            );
          })}
      </div>

      <hr />
      <h2> Completed </h2>
      <div>
        {todos
          .filter((todo) => todo.done)
          .map((todo) => {
            return (
              <TodoListItem
                key={todo.id}
                {...todo}
                toggleTodoComplete={toggleTodoComplete}
              />
            );
          })}
      </div>
    </div>
  );
};

import { Task } from "./Task.jsx";

export const TaskList = (props) => {
  const { children } = props;

  console.log(props);
  return <ul>{children}</ul>;
};

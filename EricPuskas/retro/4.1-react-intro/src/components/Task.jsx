import clsx from "clsx";
import "./Task.css";

export const Task = (props) => {
  const className = clsx({
    list: true,
    active: props.active
  });
  // "list active asdinasi"

  return <li className={className}> {props.text}</li>;
};

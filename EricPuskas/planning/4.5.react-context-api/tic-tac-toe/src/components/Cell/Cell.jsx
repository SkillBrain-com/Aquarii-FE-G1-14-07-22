import "./Cell.css";
import { useTicTacToe } from "../../hooks";

export const Cell = (props) => {
  const { id } = props;

  const { cells, handleClick } = useTicTacToe();

  console.log({ cells });

  return <td onClick={() => handleClick(id)}>{cells[id]}</td>;
};

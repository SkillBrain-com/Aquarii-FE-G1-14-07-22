import "./Cell.css";

export const Cell = (props) => {
  const { id, cells, onClick } = props;

  return <td onClick={() => onClick(id)}>{cells[id]}</td>;
};

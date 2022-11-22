import "./Cell.css";
import { useTicTacToe } from "../../hooks";
import ClearIcon from "@mui/icons-material/Clear";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import Paper from "@mui/material/Paper";

export const Cell = (props) => {
  const { id } = props;

  const { cells, handleClick } = useTicTacToe();

  const renderCellValue = () => {
    if (!cells[id]) return null;
    if (cells[id] === "x") return <ClearIcon />;
    return <CircleOutlinedIcon />;
  };

  return (
    <Paper component="td" onClick={() => handleClick(id)}>
      {renderCellValue()}
    </Paper>
  );
};

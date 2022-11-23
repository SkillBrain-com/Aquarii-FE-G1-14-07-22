import "./Cell.css";
import { useTicTacToe } from "../../hooks";
import ClearIcon from "@mui/icons-material/Clear";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { StyledCell } from "./Cell.style";

export const Cell = (props) => {
  const { id } = props;

  const { cells, handleClick } = useTicTacToe();

  const renderCellValue = () => {
    if (!cells[id]) return null;
    if (cells[id] === "x") return <ClearIcon />;
    return <CircleOutlinedIcon />;
  };

  return (
    <StyledCell
      elevation={5}
      sx={{ width: 100, height: 100 }}
      onClick={() => handleClick(id)}
    >
      {renderCellValue()}
    </StyledCell>
  );
};

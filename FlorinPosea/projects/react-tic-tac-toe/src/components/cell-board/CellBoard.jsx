import React from "react";
import "./CellBoard.css";

const CellBoard = (props) => {
  
  return (
    <div
      className={`${props.cls} ${props.empty ? "" : "filled"}`}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    ></div>
  );
};

export default CellBoard;

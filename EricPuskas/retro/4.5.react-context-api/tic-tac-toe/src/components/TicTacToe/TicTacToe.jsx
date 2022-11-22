import { useState, useEffect } from "react";

import { Cell } from "../Cell";
import { ROWS } from "../../constants";
import { useTicTacToe } from "../../hooks";
import { Grid } from "@mui/material";
import { MessageModal } from "../MessageModal";

/**
 * Imports styled components
 */
import { AppTitle, BootstrapButton } from "./TicTacToe.styles";

export const TicTacToe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { turn, winner, isDraw, resetGame } = useTicTacToe();
  const [message, setMessage] = useState("");

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    resetGame();
    setIsModalOpen(false);
    setMessage("");
  };

  const renderCells = () => {
    return ROWS.map((row) => {
      const { cells: _cells, rowId } = row;

      return (
        <tr key={rowId}>
          {_cells.map((cell) => {
            return <Cell id={cell} />;
          })}
        </tr>
      );
    });
  };

  useEffect(() => {
    if (winner) {
      openModal();
      setMessage(`Winner is ${winner}!`);
    } else if (isDraw) {
      openModal();
      setMessage("It's a draw!");
    }
  }, [winner, isDraw]);

  return (
    <div className="App">
      <AppTitle variant="h1">Tic Tac Toe</AppTitle>
      <div>Turn: {turn}</div>
      {winner && <div>Winner is {winner}!</div>}
      {isDraw && <div>Draw!</div>}
      <table>
        <tbody>{renderCells()}</tbody>
      </table>
      {/* <Grid direction="row" container>
        {renderCells()}
      </Grid> */}
      <MessageModal open={isModalOpen} onClose={closeModal} message={message} />
      <BootstrapButton greenBg onClick={resetGame}>
        Reset Game
      </BootstrapButton>
    </div>
  );
};

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
        <Grid key={rowId} item container xs={12} spacing={1}>
          {_cells.map((cell) => {
            return (
              <Grid item xs={4}>
                <Cell id={cell} />
              </Grid>
            );
          })}
        </Grid>
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

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 5, mb: 5 }} // margin top and margin bottom
      >
        <Grid container sx={{ maxWidth: 300 }} spacing={0.25}>
          {renderCells()}
        </Grid>
      </Grid>
      <MessageModal open={isModalOpen} onClose={closeModal} message={message} />
      <BootstrapButton greenBg onClick={resetGame}>
        Reset Game
      </BootstrapButton>
    </div>
  );
};

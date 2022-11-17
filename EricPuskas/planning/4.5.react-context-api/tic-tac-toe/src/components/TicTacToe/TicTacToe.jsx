import { Cell } from "../Cell";
import { ROWS } from "../../constants";
import { useTicTacToe } from "../../hooks";

export const TicTacToe = () => {
  const { turn, winner, isDraw, resetGame } = useTicTacToe();

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

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div>Turn: {turn}</div>
      {winner && <div>Winner is {winner}!</div>}
      {isDraw && <div>Draw!</div>}
      <table>
        <tbody>{renderCells()}</tbody>
      </table>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

import { useState } from "react";
import { Cell } from "./components/Cell";
import "./App.css";
import { useEffect } from "react";

const WINNING_COMBINATIONS = [
  // Across
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Down
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonale
  [0, 4, 8],
  [2, 4, 6]
];

function App() {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));

  // const checkForWinner2 = (result) => {
  //   const winningConditions = [
  //     // across
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     // down
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     // diagonal
  //     [0, 4, 8],
  //     [2, 4, 6]
  //   ];

  //   winningConditions.forEach((pattern) => {
  //     if (
  //       result[pattern[0]] === "" ||
  //       result[pattern[1]] === "" ||
  //       result[pattern[2]] === ""
  //     ) {
  //       // do nothing
  //     } else if (
  //       result[pattern[0]] === result[pattern[1]] &&
  //       result[pattern[1]] === result[pattern[2]]
  //     ) {
  //       setWinner(result[pattern[0]]);
  //     }
  //   });
  // };

  const checkForWinner = (results) => {
    return WINNING_COMBINATIONS.some((combination) => {
      return combination.every((index) => results[index] === turn);
    });

    // WINNING_COMBINATIONS.forEach(combination => {
    //    if(results[WINNING_COMBINATIONS[0]] === ""  ||
    //    results[WINNING_COMBINATIONS[1]] === "" ||
    //    results[WINNING_COMBINATIONS[2]] === ""
    //     ) {
    //        // do nothing <- REFACTORING
    //     } else if (
    //       results[WINNING_COMBINATIONS[0]] === results[WINNING_COMBINATIONS[1]]

    //     ){

    //     }
    // })
  };

  const handleClick = (id) => {
    const results = [...cells];

    if (results[id] === "") {
      if (turn === "x") {
        results[id] = "x";
        setTurn("o");
      } else {
        results[id] = "o";
        setTurn("x");
      }

      setCells(results);
      const winner = checkForWinner(results);
    }
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div>Turn: {turn}</div>
      <table>
        <tbody>
          <tr>
            <Cell cells={cells} onClick={handleClick} id={0} />
            <Cell cells={cells} onClick={handleClick} id={1} />
            <Cell cells={cells} onClick={handleClick} id={2} />
          </tr>

          <tr>
            <Cell cells={cells} onClick={handleClick} id={3} />
            <Cell cells={cells} onClick={handleClick} id={4} />
            <Cell cells={cells} onClick={handleClick} id={5} />
          </tr>
          <tr>
            <Cell cells={cells} onClick={handleClick} id={6} />
            <Cell cells={cells} onClick={handleClick} id={7} />
            <Cell cells={cells} onClick={handleClick} id={8} />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;

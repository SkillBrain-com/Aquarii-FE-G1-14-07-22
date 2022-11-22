import { useState, useEffect } from "react";
import { context } from "./Context";
import { WINNING_COMBINATIONS } from "../../constants";

const getInitialCells = () => Array(9).fill("");

export const TicTacToeProvider = (props) => {
  const { children } = props;

  const { Provider } = context;

  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(getInitialCells());
  const [winner, setWinner] = useState("");
  const [isDraw, setIsDraw] = useState(false);

  const checkForWinner = (results) => {
    return WINNING_COMBINATIONS.some((combination) => {
      return combination.every((index) => results[index] === turn);
    });
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
      if (winner) {
        setWinner(turn);
      }
    }
  };

  const resetGame = () => {
    setTurn("x");
    setCells(getInitialCells());
    setWinner("");
    setIsDraw(false);
  };

  const checkIfIsDraw = () => {
    return cells.every((cell) => cell !== "") && !winner;
  };

  useEffect(() => {
    const isDraw = checkIfIsDraw();
    if (isDraw) {
      setIsDraw(true);
    }
  }, [cells]);

  const providerValue = {
    turn,
    winner,
    isDraw,
    resetGame,
    handleClick,
    cells
  };

  return <Provider value={providerValue}>{children}</Provider>;
};

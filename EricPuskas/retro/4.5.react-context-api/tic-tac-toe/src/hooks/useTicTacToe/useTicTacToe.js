import { useContext } from "react";
import { TicTacToeProvider } from "./Provider";
import { context } from "./Context";

const useTicTacToe = () => useContext(context);

export { useTicTacToe, TicTacToeProvider };

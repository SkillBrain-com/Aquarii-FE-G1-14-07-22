import { TicTacToeProvider } from "./hooks";
import { TicTacToe } from "./components/TicTacToe";
import "./App.css";

function App() {
  return (
    <TicTacToeProvider>
      <TicTacToe />
    </TicTacToeProvider>
  );
}

export default App;

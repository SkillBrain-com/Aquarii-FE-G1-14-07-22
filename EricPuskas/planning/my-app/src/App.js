import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Title } from "./components/Title";

function App() {
  const titlu = "buna";

  new Array().map();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - Yes please!
        </a>
        <Title title={titlu} greeting="Hello again!">
          <h2> Sunt un h2!</h2>
          <p> Asta e un paragraph </p>
        </Title>
        {/* <Title />
        <Title />
        <Title />
        <Title /> */}
      </header>
    </div>
  );
}

export default App;

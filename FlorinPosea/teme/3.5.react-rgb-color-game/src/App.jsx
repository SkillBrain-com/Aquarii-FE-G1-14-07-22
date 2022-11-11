import React from 'react';
import { useState, useEffect } from "react";
import ColorSquare from "./components/color-square/ColorSquare";
import './App.css';


const DEFAULT_SQUARES = 6;

function App() {
  const [colorsList, setColorsList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [winningColor, setWinningColor] = useState("");
  const [msg, setMsg] = useState("");
  
  const createRandomColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  };

  const getWinningColor = (list) => {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  };

  const createColorList = (numberOfSquares) => {
    let colors = [];
    for (let i = 0; i < numberOfSquares; i++) {
      const randomColor = createRandomColor();
      colors.push(randomColor);
    }
    return colors;
  };

  const newColors = () => {
    setIsOpen(false);
    startColorsList();
  };

  const handleColorPick = (color) => {
    setIsOpen(true);
    onColorPick(color);
  };

  const onColorPick = (color) => {
    if (color !== winningColor) {
      setColorsList((prevState) => updateColorList(prevState, color));
      setMsg("Try again!");
    } else {
      setMsg("You won!");
    }
  }

  const updateColorList = (prevState, color) => {
    return prevState.map((item) => {
      if (item === color) {
        return "rgb(34, 32, 32)";
      } else {
        return item;
      }
    });
  } 

  const startColorsList = () => {
    const startList = createColorList(DEFAULT_SQUARES);
    setColorsList(startList);
    setWinningColor(getWinningColor(startList).toString());
  }

  useEffect(() => {
    startColorsList(); 
  }, [])

  
  return (
    <div className="App">
      <div className="app-container">
        <h1>The great {winningColor} guessing game</h1>
        <button onClick={newColors}>New colors</button>
        <div className={`${isOpen ? "msg-contents" : "msg-hidden"}`}>{msg}</div>
        <div className="squares">
          {colorsList.map((item, index) => (
            <ColorSquare
              key={index}
              color={item}
              onClick={() => handleColorPick(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

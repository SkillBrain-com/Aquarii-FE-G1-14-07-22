import React from "react";
import { useState, useEffect } from "react";
import ColorSquare from "./components/color-square/ColorSquare";
import "./App.css";

const DEFAULT_SQUARES = 6;
var winningcolor = "";
var msg = "";

function App() {
  const [newList, setNewList] = useState(true);
  const [colorsList, setColorsList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState();

  const createRandomColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  };

  const getWinningColor = () => {
    const randomIndex = Math.floor(Math.random() * colorsList.length);
    return colorsList[randomIndex];
  };

  const createColorList = (numberOfSquares) => {
    let colors = [];
    for (let i = 0; i < numberOfSquares; i++) {
      const randomColor = createRandomColor();
      colors.push(randomColor);
    }
    return colors;
  };

  const handleChangeColors = () => {
    newColors();
  };

  const newColors = () => {
    setIsOpen(false);
    setColorsList(createColorList(DEFAULT_SQUARES));
    winningcolor = getWinningColor();
    setSelectedColor();
  };

  const handleColorPick = (color) => {
    console.log(color);
    setIsOpen(true);
    setSelectedColor(color);
    onColorPick(color);
  };

  const onColorPick = (color) => {
    if (color !== winningcolor) {
      setColorsList((prevState) => updateColorList(prevState, color));
      msg = "Try again!";
    } else {
      msg = "You won!";
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


  if (isOpen === false) {
    const color = getWinningColor();
    winningcolor = color;
  }


  useEffect(() => {
    const list = createColorList(DEFAULT_SQUARES);
    setColorsList(list);
    setNewList(false);
  }, [])


  return (
    <div className="App">
      <div className="app-container">
        <h1>The great {winningcolor} guessing game</h1>
        <button onClick={handleChangeColors}>New colors</button>

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

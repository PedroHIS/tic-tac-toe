//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Square from "./components/Square.js";

function App() {
  const [squares, setSquares] = React.useState(Array(9).fill(null))
  const [isX, setIsX] = React.useState(true)
  
  const squareClick = (i) => {
    squares[i] = isX ? 'X' : 'O';
    setSquares(squares);
    setIsX(!isX);
  }
  
  return (
    <div className='App'>
      <div className='board-row'>
        <Square value={squares[0]} onClick = {() => squareClick(0)}/>
        <Square value={squares[1]} onClick = {() => squareClick(1)}/>
        <Square value={squares[2]} onClick = {() => squareClick(2)}/>
      </div>
      
      <div className='board-row'>
        <Square value={squares[3]} onClick = {() => squareClick(3)}/>
        <Square value={squares[4]} onClick = {() => squareClick(4)}/>
        <Square value={squares[5]} onClick = {() => squareClick(5)}/>
      </div>
      
      <div className='board-row'>
        <Square value={squares[6]} onClick = {() => squareClick(6)}/>
        <Square value={squares[7]} onClick = {() => squareClick(7)}/>
        <Square value={squares[8]} onClick = {() => squareClick(8)}/>
      </div>

    </div>
  );
}

export default App;

//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Square from "./components/Square.js";

function calculateWinner(squares) {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const pattern of winningPatterns) {
    const [first, second, third] = pattern;

    if (squares[first] && squares[first] === squares[second] && squares[first] === squares[third]) {
      return squares[first];
    }
  }

  return null;
}

function App() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [isX, setIsX] = React.useState(true);
  
  const squareClick = (i) => {
    if ( calculateWinner(squares) || squares[i]){
      return
    }
    squares[i] = isX ? 'X' : 'O';
    setSquares(squares);
    setIsX(!isX);
  }

  const winner = calculateWinner(squares);
  let status;
  
  status = winner ? `Winner: ${winner}`: `Next Player: ${isX ? 'X' : 'O'}`;

  return (
    <div className='App'>
      <h1>Tic-Tac-Toe</h1>
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
      
      <div className='status'>{status}</div>
    </div>
  );
}

export default App;

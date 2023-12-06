//import logo from './logo.svg';
//import './App.css';
import Square from "./components/Square.js";

function App() {
  return (
    <div className='App'>
      <div className='board-row'>
        <Square value="X"/>
        <Square value="X"/>
        <Square value="X"/>
      </div>
      
      <div className='board-row'>
        <Square value="X"/>
        <Square value="X"/>
        <Square value="X"/>
      </div>
      
      <div className='board-row'>
        <Square value="X"/>
        <Square value="X"/>
        <Square value="X"/>
      </div>

    </div>
  );
}

export default App;

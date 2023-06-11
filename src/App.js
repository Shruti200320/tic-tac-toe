import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Board from "./TicTacToeGame/Board";


function App() {
  const [show,setShow]= useState(false);
  return (
    <div className="App">
    {show? <div><Board /></div> : null}
      <div 
      style={{
        width: '200px',
        display: 'flex',
        margin:'auto',
        justifyContent:'center'
      }}>
      {show?null:
      <div>
      <button className="btn" id="startGame" onClick={()=>setShow(true)}>
        Start a new Game
      </button></div>}
      </div>
      
      
    </div>
  );
}

export default App;

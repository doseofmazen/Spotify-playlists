import React from 'react';
import logo from './logo.svg';
import './App.css';

function Aggregate() {
  return (
    <div style = {{width: "40%", display: "inline-block"}}>
      <h2>Number Text</h2>
    </div>
  );
}

function Filter() {
  return (
    <div>
      <img alt = ""/>
      <input type="text" placeholder="type some text"/>
    </div>
  );
}

function Playlist() {
  return (
    <div style = {
      {
        width: "25%",
        display: "inline-block",
        fontSize: "20px"
      }
    }>
      <img  alt=""/>
      <h3>Playlist Name</h3>
      <ul style = {{"listStyle": "none"}}>
        <li>Song 1</li>
        <li>Song 2</li>
        <li>Song 3</li>
        <li>Song 4</li>
      </ul>
    </div>
  );
}

function App() {
  //let username = 'Godpspeed'
  return (
    <div className = "App">
      <h1 style = {{"font-size": "55px"}}>Title</h1>
      {Aggregate()}
      {Aggregate()}
      {Filter()}
      {Playlist()}
      {Playlist()}
      {Playlist()}
      {Playlist()}
    </div>
  );
}

export default App;















//#region -- old code
/*
< header className = "App-header" >
  <
  img src = {
    logo
  }
className = "App-logo"
alt = "logo" / >
  <
  p >
  Edit < code > src / App.js < /code> and save. <
  /p> <
  a
className = "App-link"
href = "https://reactjs.org"
target = "_blank"
rel = "noopener noreferrer" >
  Learn React <
  /a> <
  /header>
  */
  //#endregion
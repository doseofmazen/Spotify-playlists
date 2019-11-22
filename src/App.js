import React from 'react';
//import logo from './logo.svg';
import './App.css';

//fake data that will replaced by server data
let fakeData = {
  user:
  {
    name: '🔥Godspeed',
    playlist: [{
      name: 'CHH🔥',
      song: ['Watch this', 'Co$st', 'Bag', 'Thass God']
    }, {
      name: 'Car',
      song: ['PANORAMA', 'Bros', 'Swish', 'One Day(Feat. Beleaf)']
    }, {
      name: 'Workout',
      song: ['Wow', 'Going Bad(Feat. Drake)', 'Project Dreams', 'Coming In Hot']
    }, {
      name: 'Home',
      song: ['Lala', 'Nana', 'Mama', 'Jojo']
    }]
  }
};

//Playlist aggregate
function Aggregate() {
  return (
    <div style = {{width: "40%", display: "inline-block"}}>
      <h2>Number Text</h2>
    </div>
  );
}

//search box to be used for filtering songs
function Filter() {
  return (
    <div>
      <img alt = ""/>
      <input type="text" placeholder="type some text"/>
    </div>
  );
}

//the actual playlist
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
//main function so inti the app
class App extends React.Component {
  constructor() {
    super();
    this.state = {serverData: {}}
  }

  componentDidMount() {
    this.setState({serverData: fakeData})
  }

  render() {
    return (
       <div className = "App">
        <h1 style = {{"font-size": "55px"}}>
          {
            this.state.serverData.user &&
            this.state.serverData.user.name
          }'s playlist
        </h1>





        {/* Calling funtions */}
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
}

export default App;
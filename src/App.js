import React from 'react';
import './App.css';

//fake data that will replaced by server data
let fakeData = {
  user: {
    name: 'Godspeed',
    playlists: [
      {
        name: 'CHH 🔥',
        songs: [
          {name: 'Watch this', duration: 1345},
          {name: 'Superstar (Feat. Landstrip Chip)', duration: 1236},
          {name: 'Angels', duration: 70000}
        ]
      },
      {
        name: 'Workout',
        songs: [
          {name: 'Coming In Hot', duration: 1345},
          {name: "Energy (Feat. Torey D'Shaun", duration: 1236},
          {name: 'PANORAMA', duration: 70000}
        ]
      },
      {
        name: 'Worship',
        songs: [
          {name: 'So Will I (100 Billion X)', duration: 1345},
          {name: 'Here Now (Madness)', duration: 1236},
          {name: 'Glory & Wonder', duration: 70000}
        ]
      },
      {
        name: 'Car',
        songs: [
          {name: 'Thass God', duration: 1345},
          {name: 'No Time', duration: 1236},
          {name: 'Olympus', duration: 70000}
        ]
      }
    ]
  }
};

//Playlist aggregate
class PlaylistCounter extends React.Component {
  render() {
    return (
      <div style={{width: "40%", display: 'inline-block'}}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

//how long the playlist is
class HoursCounter extends React.Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, []);
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{width: "40%", display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

//search box to be used for filtering songs
class Filter extends React.Component {
  render() {
    return (
      <div>
        <img alt = ""/>
        <input type="text" placeholder="type some text"/>
      </div>
    );
  }
}

//the actual playlist
class Playlist extends React.Component {
  render() {
    return (
      <div style = {{
         width: "25%",
         display: "inline-block",
         fontSize: "20px"
        }}>

        <img  alt=""/>
        <h3>{this.props.playlist.name}</h3>
        <ul style = {{listStyle: "none", padding: "0px"}}>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
    </div>
    );
  }
}

//main function so inti the app
class App extends React.Component {
  constructor() {
    super();
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeData});
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1 style = {{"font-size": "55px"}}>
            {this.state.serverData.user.name}'s playlist
          </h1>
          {/* Calling funtions */}
          <PlaylistCounter playlists = {this.state.serverData.user.playlists}/>
          <HoursCounter playlists = {this.state.serverData.user.playlists}/>
          <Filter/>
          {
            this.state.serverData.user.playlists.map(playlists =>
              <Playlist playlist={playlists}/>
          )}
        </div> : <h1>Loding...</h1>
        }
      </div>
    );
  }
}
export default App;
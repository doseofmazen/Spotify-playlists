import React from 'react'
import './App.css'
import querystring from 'query-string';

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
    ]
  }
}

//Playlist aggregate
class PlaylistCounter extends React.Component {
  render() {
    return (
      <div style={{width: "40%", display: 'inline-block'}}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    )
  }
}

//how long the  is
class HoursCounter extends React.Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{width: "40%", display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    )
  }
}

//search box to be used for filtering songs
class Filter extends React.Component {
  render() {
    return (
      <div>
        <img alt = ""/>
        <input type="text" placeholder="typing..?" onKeyUp = {
          event => this.props.onTextChange(event.target.value)
        }/>
      </div>
    )
  }
}

//the actual p
class Playlist extends React.Component {
  render() {
    let playlist = this.props.playlists
    return (
      <div style = {{
         width: "25%",
         display: "inline-block",
         fontSize: "20px"
        }}>

        <img  alt=""/>
        <h3>{playlist.name}</h3>
        <ul style = {{listStyle: "none", padding: "0px", fontSize: ""}}>
          {playlist.songs.map(song =>
            <li>{this.props.song.name}</li>
          )}
        </ul>
    </div>
    )
  }
}

//main function so inti the app
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      serverData: {},
      filterString: '',
    }
  }

  componentDidMount() {
    let parsed = querystring.parse(window.location.search);
    let accessToken = parsed.access_Token

   fetch('https://api.spotify.com/v1/me', {
     headers: {
       'Authorization': 'Bearer ' + accessToken
     }
   }).then(response => response.json()).then(data => console.log(data))
  }

  render() {
    let playlistToRender = this.state.serverData.user ?
                           this.state.serverData.user.playlists.filter(playlist =>
                           playlist.name.includes(
                           this.setState.filterString)
                           ) : []
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1 style = {{fontSize: "55px"}}>
            {this.state.serverData.user.name}'s playlists
          </h1>
          {/* Calling funtions */}
          <PlaylistCounter playlists = {playlistToRender}/>
          <HoursCounter playlists = {playlistToRender}/>
          <Filter onTextChanged = {text => this.setState({filterString: text})}/>
          {playlistToRender.map(playlist => <Playlist playlist={playlist}/>)}
        </div> :
        < div > < button onClick = {() => window.location = 'http://localhost:8888/login'}
        style = {
          {
            margin: "auto",
            width: "50%",
            padding: "10px",
            fontSize: "20px"
          }
        }>Sign in with Spotify</button>
        </div>
        }
      </div>
    )
  }
}
export default App
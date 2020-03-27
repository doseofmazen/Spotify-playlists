import React from "react";
import "./App.css";
import queryString from "query-string";

let fakeData = {
  user: {
    name: "Godspeed",
    playlists: [
      {
        name: "CHH 🔥",
        songs: [
          { name: "Watch this", duration: 1345 },
          { name: "Superstar (Feat. Landstrip Chip)", duration: 1236 },
          { name: "Angels", duration: 70000 },
        ],
      },
    ],
  },
};

//Playlist aggregate
class PlaylistCounter extends React.Component {
  render() {
    return (
      <div style={{ width: "40%", display: "inline-block" }}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

//how long the  is
class HoursCounter extends React.Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs);
    }, []);
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration;
    }, 0);
    return (
      <div style={{ width: "40%", display: "inline-block" }}>
        <h2>{Math.round(totalDuration / 60)} hours</h2>
      </div>
    );
  }
}

//search box to be used for filtering songs
class Filter extends React.Component {
  render() {
    return (
      <div>
        <img alt="" />
        <input
          type="text"
          placeholder="typing..?"
          onKeyUp={(event) => this.props.onTextChange(event.target.value)}
        />
      </div>
    );
  }
}

//the actual playlists
class Playlist extends React.Component {
  render() {
    let playlist = this.props.playlist;
    return (
      <div
        style={{
          width: "25%",
          display: "inline-block",
          fontSize: "20px",
        }}
      >
        <img
          src={playlist.imageUrl}
          style={{
            marginTop: "100px",
            width: "300px",
          }}
        />
        <h3>{playlist.name}</h3>
        <ul style={{ listStyle: "none", padding: "0px", fontSize: "" }}>
          {playlist.songs.map((song) => (
            <li>{this.props.song.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

//main function so inti the app
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverData: {},
      filterString: "",
    };
  }
  componentDidMount() {
    let accessToken = queryString.parse(window.location.search).access_token;
    if (!accessToken) return;
    fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          user: {
            name: data.display_name,
          },
        })
      );

    fetch("https://api.spotify.com/v1/me/playlists", {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          playlists: data.items.map((item) => {
            return {
              name: item.name,
              imageUrl: item.images[0].url,
              songs: [],
            };
          }),
        })
      );
  }
  render() {
    let playlistToRender =
      this.state.user && this.state.playlists
        ? this.state.playlists.filter((playlist) =>
            playlist.name
              .toLowerCase()
              .includes(this.state.filterString.toLowerCase())
          )
        : [];
    return (
      <div className="App">
        {this.state.user ? (
          <div>
            <h1 style={{ fontSize: "55px" }}>
              {this.state.user.name}'s playlists
            </h1>
            <PlaylistCounter playlists={playlistToRender} />
            <HoursCounter playlists={playlistToRender} />
            <Filter
              onTextChange={(text) => {
                this.setState({ filterString: text });
              }}
            />
            {playlistToRender.map((playlist) => (
              <Playlist playlist={playlist} />
            ))}
          </div>
        ) : (
          <button
            onClick={() => {
              window.location = window.location.href.includes("localhost")
                ? "http://localhost:8888/login"
                : "https://better-playlists-backend.herokuapp.com/login";
            }}
            style={{
              margin: "0 auto",
              width: "50%",
              padding: "25px",
              fontSize: "20px",
              fontFamily: "Source Sans Pro",
              borderRadius: "100px",
              border: "1.4px solid #000",
              overflow: "hidden",
            }}
          >
            Sign in with Spotify
          </button>
        )}
      </div>
    );
  }
}

export default App;

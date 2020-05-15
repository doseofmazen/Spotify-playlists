import React from "react";
import "./App.css";
import queryString from "query-string";
import PlaylistCounter from "./component/PlaylistCounter";
import HoursCounter from "./component/HoursCounter";
import Filter from "./component/Filter";
import Playlist from "./component/Playlist";
import Signin from "./component/Signin";
import Footer from "./component/Footer";

//main function so inti the app
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverData: {},
      filterString: ""
    };
  }
  componentDidMount() {
    let accessToken = queryString.parse(window.location.search).access_token;
    if (!accessToken) return;
    fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: "Bearer " + accessToken }
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          user: {
            name: data.display_name
          }
        })
      )
      .catch(err => console.error(err + " data like name"));
    fetch("https://api.spotify.com/v1/me/playlists", {
      headers: { Authorization: "Bearer " + accessToken }
    })
      .then(response => response.json())
      .then(playlistData => {
        let playlists = playlistData.items;
        let trackDataPromises = playlists.map(playlist => {
          let responsePromise = fetch(playlist.tracks.href, {
            headers: { Authorization: "Bearer " + accessToken }
          });
          let trackDataPromise = responsePromise.then(response =>
            response.json()
          );
          return trackDataPromise;
        });
        let allTracksDataPromises = Promise.all(trackDataPromises);
        let playlistsPromise = allTracksDataPromises.then(trackDatas => {
          trackDatas.forEach((trackData, i) => {
            playlists[i].trackDatas = trackData.items
              .map(item => item.track)
              .map(trackData => ({
                name: trackData.name,
                duration: trackData.duration_ms / 1000
              }));
          });
          return playlists;
        });
        return playlistsPromise;
      })
      .then(playlists =>
        this.setState({
          playlists: playlists.map(item => {
            return {
              name: item.name,
              id: item.id,
              imageUrl: item.images[0].url,
              songs: item.trackDatas.slice(0, 3)
            };
          })
        })
      )
      .catch(err => console.error(err + " playlistData"));
  }
  render() {
    let playlistToRender =
      this.state.user && this.state.playlists
        ? this.state.playlists.filter(playlist => {
            let matchesPlaylist = playlist.name
              .toLowerCase()
              .includes(this.state.filterString.toLowerCase());
            let matchesSong = playlist.songs.find(song =>
              song.name
                .toLowerCase()
                .includes(this.state.filterString.toLowerCase())
            );
            return matchesPlaylist || matchesSong;
          })
        : [];
    return (
      <div className="App">
        {this.state.user ? (
          <div>
            <h1 style={{ fontSize: "calc(35px + 2vmin)" }}>
              {this.state.user.name}'s playlists
            </h1>
            <PlaylistCounter playlists={playlistToRender} />
            <HoursCounter playlists={playlistToRender} />
            <Filter
              onTextChange={text => {
                this.setState({ filterString: text });
              }}
            />
            {playlistToRender.map(playlist => (
              <Playlist playlist={playlist} key={playlist.id} />
            ))}
            <button id="themeButton"></button>
          </div>
        ) : (
          <div>
            <Signin></Signin>
          </div>
        )}
      </div>
    );
  }
}

export default App;

import React from "react";
import "../App.css";

class Playlist extends React.Component {
  render() {
    let playlist = this.props.playlist;
    return (
      <div
        className="playlist"
        style={{
          width: "30%",
          display: "inline-block",
          flexDirection: "column",
          fontSize: "20px"
        }}
      >
        <img
          alt="Cover"
          src={playlist.imageUrl}
          style={{
            marginTop: "50px",
            width: "300px"
          }}
        />
        <h3>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            href={playlist.uri}
          >
            {playlist.name}
          </a>
        </h3>
        <ul style={{ listStyle: "none", padding: "0px" }}>
          {playlist.songs.map(song => (
            <li>{song.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Playlist;

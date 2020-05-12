import React from "react";
import "../App.css";

// Playlist aggregate
class PlaylistCounter extends React.Component {
  render() {
    return (
      <div style={{ width: "40%", display: "inline-block" }}>
        {this.props.playlists.length > 1 ? (
          <h2>{this.props.playlists.length} playlists</h2>
        ) : (
          <h2>{this.props.playlists.length} playlist</h2>
        )}
      </div>
    );
  }
}

export default PlaylistCounter;

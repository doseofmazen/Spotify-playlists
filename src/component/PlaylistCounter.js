import React from "react";
import "../App.css";

function PlaylistCounter(props) {
  return (
    <div style={{ width: "40%", display: "inline-block" }}>
      {props.playlists.length > 1 ? (
        <h2>{props.playlists.length} playlists</h2>
      ) : (
        <h2>{props.playlists.length} playlist</h2>
      )}
    </div>
  );
}
export default PlaylistCounter;

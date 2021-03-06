import React from "react";
import "../App.css";

function HoursCounter(props) {
  let allSongs = props.playlists.reduce((songs, eachPlaylist) => {
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

export default HoursCounter;

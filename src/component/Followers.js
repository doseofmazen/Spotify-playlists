import React from "react";
import "../App.css";

function Followers(props) {
  return (
    <div style={{ width: "20%", display: "inline-block" }}>
      <h2>{props.user.followers} followers</h2>
    </div>
  );
}

export default Followers;

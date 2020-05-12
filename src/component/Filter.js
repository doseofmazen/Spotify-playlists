import React from "react";
import "../App.css";

function Filter(props) {
  return (
    <div>
      <img alt="" />
      <input
        type="text"
        placeholder="Search"
        onKeyUp={e => props.onTextChange(e.target.value)}
        style={{
          width: "calc(200px + 10vmin)",
          padding: "16px",
          border: "0px",
          borderRadius: "50px",
          color: "#000",
          backgroundColor: "#09d3ac"
        }}
      />
    </div>
  );
}

export default Filter;

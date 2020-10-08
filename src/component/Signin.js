import React from "react";
import "../App.css";
import styled from "styled-components";

//#region bolton style
const Signinbtn = styled.button`
  position: absolute;
  top: 200px;
  padding: 1.2em;
  outline: none;
  text-align: center;
  width: calc(300px + 2vmin);
  border-radius: 40px;
  background: #1dbb54;
  border: 2px solid #e1f0ea;
  color: #fff;
  letter-spacing: 2px;
  font-size: 13px;
  font-weight: bold;
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    color: #000;
    background: #fff;
  }
  &:active {
    letter-spacing: 3px;
    font-size: 14px;
  }
`;
//#endregion

function Signin() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ display: "block" }}>Sign in with Spotify!</h1>
      {/* <p style={{ display: "inline" }}>
        Signing in allows the app to fetch data from the users account.
      </p> */}
      <Signinbtn
        onClick={() => {
          window.location = window.location.href.includes("localhost")
            ? "http://localhost:8888/login"
            : "https://spotify-playlists-mm-backend.herokuapp.com/login";
        }}
      >
        Login with Spotify
      </Signinbtn>
    </div>
  );
}

export default Signin;

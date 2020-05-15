import React from "react";
import "../App.css";
import styled from "styled-components";

//#region botton style
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
        alignItems: "center"
      }}
    >
      <Signinbtn
        onClick={() => {
          window.location = window.location.href.includes("localhost")
            ? "http://localhost:8888/login"
            : "https://spotify-playlists-mm-backend.herokuapp.com/login";
        }}
      >
        Sign in with Spotify
      </Signinbtn>
    </div>
  );
}

export default Signin;

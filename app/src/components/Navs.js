import React from "react";
import "./style.css";

function Navs(props) {
  return (
    <div className="navbar">
      <div className="container">
        <div className="col">
          <a href="/">Clicky Game</a>
        </div>
        <div className="col">Click an image to begin!</div>
        <div className="col">
          Score:{" "}
          <span id="currentScore">
            {props.currentScore ? props.currentScore : "0"}
          </span>{" "}
          | Top Score:{" "}
          <span id="highScore">{props.highScore ? props.highScore : "0"}</span>
        </div>
      </div>
    </div>
  );
}

export default Navs;

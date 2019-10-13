import React from "react";
import "./style.css";

function Navs(props) {
  return (
    <div className="navbar">
      <div className="container">
        <div className="col">
          <a href="/">Clicky Game</a>
        </div>
        <div className="col">{props.message}</div>
        <div className="col">
          Score: {props.score ? props.score : "0"} | Top Score:{" "}
          {props.highScore ? props.highScore : "0"}
        </div>
      </div>
    </div>
  );
}

export default Navs;

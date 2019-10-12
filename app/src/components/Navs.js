import React from "react";
import "./style.css";

function Navs(props) {
  return (
    <div className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Clicky Game</a>
        </li>
        <li className="">Click an image to begin!</li>
        <li>Score: 0 | Top Score: 0</li>
      </ul>
    </div>
  );
}

export default Navs;

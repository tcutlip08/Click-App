import React from "react";
import "./style.css";

function Cards(props) {
  return (
    <div
      onClick={() => props.setClicked(props.id)}
      className="card col-sm-4"
      key={props.id}
    >
      <div className="img">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="itemName">{props.name}</div>
    </div>
  );
}

export default Cards;

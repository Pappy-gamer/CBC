import React from "react";
import courage from "./courage.jpg";
const Card = (props) => {
  return (
    <div className="card">
      <span className="card-content">
        <img className="character" src={courage} alt="coourage" />
        <span>
          <h3>{props.data.name}</h3>
          <h3>{props.data.role}</h3>
        </span>
      </span>
    </div>
  );
};

export default Card;

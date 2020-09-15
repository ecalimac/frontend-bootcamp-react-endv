import React from "react";
import "./bootcamp.css";

const Bootcamp = ({ bootcamp: { name, description } }) => {
  return (
    <div className="card-container">
      <p className="detail-description">Name: </p>
      <p>{name}</p>
      <p className="detail-description">Description: </p>
      <p>{description}</p>
    </div>
  );
};

export default Bootcamp;

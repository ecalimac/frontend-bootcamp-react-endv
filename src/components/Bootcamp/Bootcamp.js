import React from "react";
import { Link } from "react-router-dom";
import "./bootcamp.css";

const Bootcamp = (props) => {
  // console.log(props, "props");
  // const { id } = props.match.params.id;
  const {
    bootcamp: { name, description, id },
  } = props;
  return (
    <div className="card-container">
      <p className="detail-description">Name: </p>
      <p>{name}</p>
      <p className="detail-description">Description: </p>
      <p>{description}</p>
      <Link to={`/bootcamps/${id}`}>See details</Link>
    </div>
  );
};

export default Bootcamp;

import React, { useState } from "react";
import "./bootcamps-list-hooks.css";

import SearchBar from "../../SearchBar/SearchBar";
import Bootcamp from "../../Bootcamp/Bootcamp";

const BootcampListHooks = () => {
  const [componentState, setComponentState] = useState({
    searchFiled: "",
    bootcamps: [
      { id: 1, name: "Frontend Bootcamp", description: "Frontend Bootcamp" },
      {
        id: 2,
        name: "Backend Bootcamp",
        description: "Backend Bootcamp",
      },
      {
        id: 3,
        name: "ML Bootcamp",
        description: "ML Bootcamp",
      },
    ],
  });

  const updateSearchFiled = (e) => {
    setComponentState({ ...componentState, searchFiled: e.target.value });
  };

  const { bootcamps, searchFiled } = componentState;
  const filteredBootcamps = bootcamps.filter((bootcamp) =>
    bootcamp.name.toLocaleLowerCase().includes(searchFiled.toLocaleLowerCase())
  );
  return (
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <p>
          <strong>Functional component</strong>
        </p>
        <p>
          <strong>- useState (hook)-</strong>
        </p>
      </div>
      <SearchBar
        placeholder="Search bootcamps by name"
        handleChange={updateSearchFiled}
      ></SearchBar>
      <div className="card-list">
        {filteredBootcamps.map((bootcamp) => (
          <Bootcamp key={bootcamp.id} bootcamp={bootcamp}></Bootcamp>
        ))}
      </div>
    </div>
  );
};

export default BootcampListHooks;

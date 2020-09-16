import React, { Component } from "react";
import Bootcamp from "../Bootcamp/Bootcamp";
import SearchBar from "../SearchBar/SearchBar";

import "./bootcamps-list.css";

class BootcampsList extends Component {
  constructor() {
    super();

    this.state = {
      searchField: "",
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
    };
  }
  render() {
    const { bootcamps, searchField } = this.state;
    const filteredBootcamps = bootcamps.filter((bootcamp) =>
      bootcamp.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <p>
            <strong>Class component</strong>
          </p>
          <p>
            <strong>- setState -</strong>
          </p>
        </div>
        <SearchBar
          placeholder="Search bootcamps by name"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        ></SearchBar>
        <div className="card-list">
          {filteredBootcamps.map((bootcamp) => (
            <Bootcamp key={bootcamp.id} bootcamp={bootcamp}></Bootcamp>
          ))}
        </div>
      </div>
    );
  }
}

export default BootcampsList;

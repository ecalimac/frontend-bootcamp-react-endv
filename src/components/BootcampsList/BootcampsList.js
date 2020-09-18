import React, { Component } from "react";
import axios from "axios";

import "./bootcamps-list.css";

import Bootcamp from "../Bootcamp/Bootcamp";
import SearchBar from "../SearchBar/SearchBar";
import Spinner from "../Spinner/Spinner";

class BootcampsList extends Component {
  constructor() {
    super();

    this.state = {
      searchField: "",
      isLoading: false,
      bootcamps: [{ id: 1, name: "" }],
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("http://www.endava-bootcamp.com/api/v1/bootcamps/", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        console.log(response, "raspuns");
        this.setState({ bootcamps: response.data.data, isLoading: false });
      });
  }
  render() {
    const { bootcamps, searchField, isLoading } = this.state;
    const filteredBootcamps = bootcamps.filter((bootcamp) =>
      bootcamp.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return isLoading ? (
      <Spinner />
    ) : (
      // <div>loading gif</div>
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

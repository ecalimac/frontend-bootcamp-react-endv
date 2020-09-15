import React, { Component, Fragment } from "react";
import Child from "./Child";
import Sibling from "./Sibling";

class Parent extends Component {
  constructor() {
    super();

    this.state = { name: "Andra" };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName,
    });
  }

  render() {
    return (
      <Fragment>
        <h1>
          <span style={{ color: "orange" }}>Parent</span> -{" "}
          <span style={{ color: "green" }}>Child</span> -{" "}
          <span style={{ color: "yellow" }}>Sibling</span> interaction
        </h1>
        <div style={{ border: "2px solid orange", padding: 20, margin: 20 }}>
          <Child onChange={this.changeName} />
          <Sibling name={this.state.name} />
        </div>
      </Fragment>
    );
  }
}

export default Parent;

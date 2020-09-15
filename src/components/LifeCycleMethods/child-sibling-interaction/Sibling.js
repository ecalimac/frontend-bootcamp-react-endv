import React, { Component } from "react";

class Sibling extends Component {
  render() {
    const { name } = this.props;
    return (
      <div style={{ border: "2px solid yellow", padding: 20 }}>
        <h1>My name is {name}</h1>
      </div>
    );
  }
}

export default Sibling;

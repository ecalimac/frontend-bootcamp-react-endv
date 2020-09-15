import React, { Component } from "react";

export class Child extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div style={{ border: "2px solid green", padding: 20 }}>
        <select onChange={this.handleChange}>
          <option value="Andra">Andra</option>
          <option value="Liviu">Liviu</option>
          <option value="Elena">Elena</option>
          <option value="Andra">Andra</option>
          <option value="Auras">Auras</option>
          <option value="Alex">Alex</option>
        </select>
      </div>
    );
  }
}

export default Child;

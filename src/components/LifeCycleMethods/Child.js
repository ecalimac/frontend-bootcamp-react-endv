import React, { Component } from "react";

class Child extends Component {
  constructor() {
    super();
    console.log("constructor - child");
  }

  componentDidMount() {
    console.log("componentDidMount! - child");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate! - child");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount! - child");
  }

  // anytime a parent is rendered, the child is rendered too
  // if parent is re-rendered, his children are re-rendered too
  // if we want to re-render a child only when it is affected by the parent's change..
  // ..we should use 'shouldComponentUpdate'
  // this method 'decides' if the component goes further to render or componentDidUpdate lifecycle
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate! - child", nextProps);
    // return true;
    // return false;
    return nextProps.text !== this.props.text;
  }

  render() {
    console.log("render - child");
    const { text } = this.props;
    return (
      <div
        style={{
          width: 300,
          border: "1px solid green",
          margin: 10,
          padding: 10,
        }}
      >
        <p>Child component</p>
        <p>text prop from parent: {text}</p>
      </div>
    );
  }
}

export default Child;

import React, { Component, Fragment } from "react";
import "./App.css";
// import Parent from "./components/LifeCycleMethods/child-sibling-interaction/Parent";
import Child from "./components/LifeCycleMethods/Child";
// import BootcampsList from "./components/BootcampsList/BootcampsList";

// function App() {
//   return (
//     <div className="App">
//       <BootcampsList />
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "Hello",
      showChild: true,
    };
    console.log("constructor - parent (App.js)");
  }

  componentDidMount() {
    console.log("componentDidMount! - parent (App.js)");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate! - parent (App.js)");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount! - parent (App.js)");
  }
  render() {
    console.log("render - parent (App.js)");
    console.log(this.state, "parent state (App.js)");
    return (
      // <Fragment>
      //   <Parent />
      // </Fragment>
      <Fragment>
        <button
          onClick={() =>
            this.setState((state) => ({ showChild: !state.showChild }))
          }
        >
          Toggle state (showChild)
        </button>

        <button
          onClick={() =>
            this.setState((state) => ({ text: state.text + " + world" }))
          }
        >
          Update state (modify text)
        </button>
        {this.state.showChild ? <Child text={this.state.text} /> : null}
      </Fragment>
    );
  }
}

export default App;

import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
//Components
import BootcampsList from "./components/BootcampsList/BootcampsList";
// import Bootcamp from "./components/Bootcamp/Bootcamp";
import Navigation from "./components/Navigation/Navigation";
import BootcampListHooks from "./components/BootcampsList/hooks-version/BootcampsListHooks";
import BootcampDetails from "./components/BootcampDetails/BootcampDetails";
// import FormHtml from "./components/Form/FormHtml/FormHtml";
import FormParent from "./components/Form/FormParent/FormParent";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <div style={{ margin: 30 }}>
          <Navigation />
          <Switch>
            <Route exact path="/" component={BootcampsList}></Route>
            <Route
              exact
              path="/bootcamps-with-hooks/"
              component={BootcampListHooks}
            ></Route>
            {/* <Route exact path="/bootcamps/add" component={FormHtml}></Route> */}
            <Route exact path="/bootcamps/add" component={FormParent}></Route>
            <Route
              exact
              path="/bootcamps/:id"
              component={BootcampDetails}
            ></Route>
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;

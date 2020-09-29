import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import BootcampsRouteComponent from "./components/bootcamps-route/BootcampsRouteComponent";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Switch>
        <Route exact path="/" component={BootcampsRouteComponent} />
      </Switch>
    </Fragment>
  );
}

export default App;

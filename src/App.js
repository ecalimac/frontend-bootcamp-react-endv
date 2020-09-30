import React, { Fragment } from "react";
// import { Route, Switch } from "react-router-dom";
// import BootcampsRouteComponent from "./components/bootcamps-route/BootcampsRouteComponent";
// import Navigation from "./components/navigation/Navigation";
import ContextParent from "./components/context-parent/ContextParent";
import "./App.css";

function App() {
  return (
    <Fragment>
      {/* <Navigation />
      <Switch>
        <Route exact path="/" component={BootcampsRouteComponent} />
      </Switch> */}
      <div className="app-container">
        <ContextParent />
      </div>
    </Fragment>
  );
}

export default App;

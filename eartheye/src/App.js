import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import { observer } from "mobx-react";

// Components

import LandingPage from "./LandingPage";
import Measure from "./Measure";
import Compare from "./Compare";
import CompareCalc from "./CompareCalc";
import MeasureCalc from "./MeasureCalc";
import About from "./About";

class App extends Component {
  getView() {
    return (
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/compare" component={Compare} />
        <Route path="/measure" component={Measure} />
        <Route path="/comparedcalc" component={CompareCalc} />
        <Route path="/measuredcalc" component={MeasureCalc} />
      </Switch>
    );
  }
  render() {
    return (
      <div
        id="app"
        className="container-fluid text-center"
        style={{ height: "90vh" }}
      >
        {this.getView()}
      </div>
    );
  }
}

export default App;

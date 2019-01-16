import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="row h-50">
          <NavLink className="btn btn-primary m-auto" to="/compare">
            COMPARE
          </NavLink>
        </div>

        <div className="row h-50">
          <NavLink className="btn btn-primary m-auto" to="/measure">
            MEASURE
          </NavLink>
        </div>
      </>
    );
  }
}

export default LandingPage;

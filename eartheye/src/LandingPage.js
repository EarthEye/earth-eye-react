import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Logo

// import logo from "./assets/3.png";

class LandingPage extends Component {
  render() {
    return (
      <>
        {/* <div>
          <img src={logo} className="logo row h-10" alt="the index logo" />
        </div> */}
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
        <div className="row h-10">
          <NavLink className="btn btn-primary m-auto" to="/about">
            ABOUT
          </NavLink>
        </div>
      </>
    );
  }
}

export default LandingPage;

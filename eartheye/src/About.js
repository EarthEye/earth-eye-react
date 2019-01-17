import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class About extends Component {
  render() {
    return (
      <>
        <br />
        <h1>ABOUT EARTH-EYE</h1>
        <div className="row h-50">
          <NavLink className="btn btn-primary m-auto" to="/home">
            Home
          </NavLink>
        </div>
      </>
    );
  }
}

export default About;

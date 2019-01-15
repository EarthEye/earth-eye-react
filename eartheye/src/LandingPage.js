import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// Components

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h4 className="menu-item active">
          <NavLink to="/compare">COMPARE</NavLink>
        </h4>
        <h4 className="menu-item">
          <NavLink to="/measure">MEASURE</NavLink>
        </h4>
      </div>
    );
  }
}

export default LandingPage;

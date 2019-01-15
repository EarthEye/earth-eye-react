import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import { observer } from "mobx-react";

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

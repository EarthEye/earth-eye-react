import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// Components

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h4 className="menu-item active">
          <button>
            <NavLink to="/compare">COMPARE</NavLink>
          </button>
        </h4>
        <h4 className="menu-item">
          <button>
            <NavLink to="/measure">MEASURE</NavLink>
          </button>
        </h4>
      </div>
    );
  }
}

export default LandingPage;

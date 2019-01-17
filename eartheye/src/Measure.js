import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// Components
import PhotoUploadMeasure from "./PhotoUploadMeasure";

class Measure extends Component {
  render() {
    return (
      <div>
        <NavLink className="btn btn-primary m-auto" to="/home">
          HOME
        </NavLink>
        <h1>Measure Page</h1>
        <h2>Add an image to measure</h2>
        <PhotoUploadMeasure />
      </div>
    );
  }
}

export default Measure;

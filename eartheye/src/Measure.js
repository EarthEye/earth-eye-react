import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// Components
import PhotoUploadMeasure from "./PhotoUploadMeasure";

// Stores
import imageStore from "./stores/imageStore";

class Measure extends Component {
  render() {
    return (
      <div>
        <h4 className="menu-item active">
          <NavLink to="/home">HOME</NavLink>
        </h4>
        <h1>Measure Page</h1>
        <h2>Add an image to measure</h2>
        <PhotoUploadMeasure />
      </div>
    );
  }
}

export default Measure;

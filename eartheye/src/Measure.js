import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// Components
import PhotoUploadMeasure from "./PhotoUploadMeasure";

// Store
import imageStore from "./stores/imageStore";

class Measure extends Component {
  render() {
    console.log(imageStore.input1);
    console.log(imageStore.input2);
    console.log(imageStore.inputList);
    return (
      <div>
        <button>
          <NavLink to="/home">HOME</NavLink>
        </button>
        <h1>Measure Page</h1>
        <h2>Add an image to measure</h2>
        <PhotoUploadMeasure />
      </div>
    );
  }
}

export default Measure;

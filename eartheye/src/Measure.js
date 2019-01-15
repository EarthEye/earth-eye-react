import React, { Component } from "react";

// Components
import PhotoUploadMeasure from "./PhotoUploadMeasure";

// Stores
import imageStore from "./stores/imageStore";

class Measure extends Component {
  render() {
    return (
      <div>
        <h1>Measure Page</h1>
        <h2>Add an image to measure</h2>
        <PhotoUploadMeasure />
      </div>
    );
  }
}

export default Measure;

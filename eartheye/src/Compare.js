import React, { Component } from "react";

// Components
import PhotoUploadTest from "./PhotoUploadTest";

class Compare extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Compare Page</h1>
          <PhotoUploadTest />
          <PhotoUploadTest />
        </div>
        <div>
          <h1>compare button goes here</h1>
        </div>
      </div>
    );
  }
}

export default Compare;

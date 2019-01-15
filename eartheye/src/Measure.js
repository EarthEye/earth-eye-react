import React, { Component } from "react";

// Components
import PhotoUploadTest from "./PhotoUploadTest";
// import AppFooter from "../AppFooter";

class Measure extends Component {
  render() {
    return (
      <div>
        <h1>Measure Page</h1>
        <PhotoUploadTest />
        <div>
          <h1>measure button goes here</h1>
        </div>
      </div>
    );
  }
}

export default Measure;

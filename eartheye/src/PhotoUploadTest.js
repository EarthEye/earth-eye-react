import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";

// Stores

import imageStore from "./stores/imageStore";

class PhotoUploadTest extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   file: ""
    // };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    imageStore.addPhotoToList(URL.createObjectURL(event.target.files[0]));
  }

  render() {
    const availableButton1 = imageStore.image1.length === 0 && (
      <input type="file" onChange={this.handleChange} />
    );

    const availableButton2 = imageStore.image2.length === 0 && (
      <input type="file" onChange={this.handleChange} />
    );
    return (
      <div>
        <div>
          <img className="imgPreview" src={imageStore.image1[0]} alt="" />
          <div />
          {availableButton1}
        </div>
        <div>
          <img className="imgPreview" src={imageStore.image2[0]} alt="" />
          <div />
          {availableButton2}
        </div>
      </div>
    );
  }
}

export default observer(PhotoUploadTest);

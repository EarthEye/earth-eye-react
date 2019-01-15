import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";

// Stores

import imageStore from "./stores/imageStore";

class PhotoUploadTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        file: URL.createObjectURL(event.target.files[0])
      },
      () => imageStore.addPhotoToList(this.state.file)
    );
  }

  render() {
    const availableButton = !this.state.file && (
      <input type="file" onChange={this.handleChange} />
    );

    return (
      <div>
        {availableButton}
        <img className="imgPreview" src={this.state.file} alt="" />
      </div>
    );
  }
}

export default observer(PhotoUploadTest);

import React, { Component } from "react";
import { observer } from "mobx-react";
import { NavLink } from "react-router-dom";
import { DecimalField } from "react-decimal-field";
import "./App.css";

// Stores

import imageStore from "./stores/imageStore";

class PhotoUploadTest extends Component {
  constructor(props) {
    super(props);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeWidth = this.handleChangeWidth.bind(this);
    this.handleChangeHeight = this.handleChangeHeight.bind(this);
  }

  handleChangeImage(event) {
    imageStore.addPhotoToList(URL.createObjectURL(event.target.files[0]));
  }

  handleChangeWidth(event) {
    imageStore.addInputToWidth(event.target.value);
  }

  handleChangeHeight(event) {
    imageStore.addInputToHeight(event.target.value);
  }

  render() {
    const availableButton1 = imageStore.image1.length === 0 && (
      <input type="file" onChange={this.handleChangeImage} />
    );

    // const input1 = <input type="text" onSubmit={this.handleInput1} />;
    // const input2 = <input type="text" onSubmit={this.handleInput2} />;
    const width = imageStore.width;
    const height = imageStore.height;

    return (
      <div>
        <div>
          <img className="imgPreview" src={imageStore.image1[0]} alt="" />
          <div />
          {availableButton1}
        </div>
        <div>
          <form>
            <div className="form-group">
              <label>Censor Width: </label>
              <input
                type="number"
                className="form-control"
                id="width"
                value={width}
                name="width"
                placeholder="Width"
                onChange={this.handleChangeWidth}
              />
            </div>
            <div className="form-group">
              <label>Censor Height: </label>
              <input
                type="number"
                className="form-control"
                id="height"
                value={imageStore.height}
                min="0.00"
                step=" 0.01"
                max="30.00"
                name="height"
                placeholder="height"
                onChange={this.handleChangeHeight}
              />
            </div>
          </form>
        </div>
        <br />
        <div>
          <button onClick={() => imageStore.clearList()}>RESET</button>{" "}
          <button>
            <NavLink to="/measuredcalc">MEASURE</NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default observer(PhotoUploadTest);

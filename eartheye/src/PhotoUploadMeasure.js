import React, { Component } from "react";
import { observer } from "mobx-react";
import { NavLink } from "react-router-dom";
import "./App.css";

// Stores

import imageStore from "./stores/imageStore";

class PhotoUploadTest extends Component {
  constructor(props) {
    super(props);
    this.handleChangeImage = this.handleChangeImage.bind(this);
  }

  handleChangeImage(event) {
    imageStore.addPhotoToList(URL.createObjectURL(event.target.files[0]));
  }

  render() {
    const availableButton1 = imageStore.image1.length === 0 && (
      <input type="file" onChange={this.handleChangeImage} />
    );

    return (
      <div>
        <div>
          <img className="imgPreview" src={imageStore.image1[0]} alt="" />
          <div />
          {availableButton1}
        </div>
        <br />
        <div>
          <div>
            <label>Sensor Width: </label>
            <input
              type="number"
              id="width"
              name="width"
              placeholder="Width"
              onChange={e => (imageStore.width = +e.target.value)}
            />
          </div>
          <div>
            <label>Sensor Height: </label>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="Height"
              onChange={e => (imageStore.height = +e.target.value)}
            />{" "}
          </div>
        </div>
        <br />
        <div>
          <button
            className="btn btn-primary m-auto"
            onClick={() => imageStore.clearList()}
          >
            RESET
          </button>{" "}
          <NavLink className="btn btn-primary m-auto" to="/measuredcalc">
            MEASURE
          </NavLink>
        </div>
      </div>
    );
  }
}

export default observer(PhotoUploadTest);

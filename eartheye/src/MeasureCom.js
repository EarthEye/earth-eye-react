import React, { Component } from "react";
import { observer } from "mobx-react";
import EXIF from "exif-js";

// Stores

import imageStore from "./stores/imageStore";

class MeasureCom extends Component {
  constructor(props) {
    super(props);

    this.setGSD = this.setGSD.bind(this);
  }

  storeValue() {
    imageStore.points.push([imageStore.state.x, imageStore.state.y]);
    console.log(imageStore.points);
    this.measureDistances(imageStore.points);
  }

  measureDistances(points) {
    //DISTANCE CALCULATED HERE
    let j = 1;
    for (let i = 0; i < imageStore.points.length - 1; i++) {
      var x =
        Math.sqrt(
          Math.pow(imageStore.points[j][0] - imageStore.points[i][0], 2) +
            Math.pow(imageStore.points[j][1] - imageStore.points[i][1], 2)
        ) *
        (imageStore.state.gsd * 4);
      j++;
      console.log(x);
    }
  }

  _onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }

  setGSD(GSD) {
    this.setState({ gsd: GSD.toString() });
  }

  setImg_w(img_w) {
    this.setState({ img_w: img_w / 4 });
  }

  setImg_h(img_h) {
    this.setState({ img_h: img_h / 4 });
  }

  getExif(e) {
    const img = e.target;
    EXIF.getData(img, () => {
      var allMetaData = EXIF.getAllTags(img);

      console.log(allMetaData);

      // 8.8 is Sensor Height
      //var GSD1 = (.76 * 3.5) * 100 / (allMetaData.FocalLength * allMetaData.PixelYDimension)
      var GSD1 =
        (allMetaData.GPSAltitude * imageStore.height) /
        (allMetaData.FocalLength * allMetaData.PixelYDimension);
      // 13.2 is Sensor Width
      //var GSD2 = (.76 * 4.8) * 100 / (allMetaData.FocalLength * allMetaData.PixelXDimension)
      var GSD2 =
        (allMetaData.GPSAltitude * imageStore.width) /
        (allMetaData.FocalLength * allMetaData.PixelXDimension);
      //var GSD = (13.2 * allMetaData.GPSAltitude * 100) / (allMetaData.FocalLength * allMetaData.PixelXDimension);

      // console.log("GSD 1")
      // console.log(GSD1)

      // console.log("GSD 2")
      // console.log(GSD2)

      if (GSD1 >= GSD2) this.setGSD(GSD1);
      else this.setGSD(GSD2);

      this.setImg_w(allMetaData.PixelXDimension);
      this.setImg_h(allMetaData.PixelYDimension);
    });
  }

  render() {
    const { x, y } = imageStore.state;
    return (
      <div ref="elem" className="container">
        <div>
          <img
            onClick={this.storeValue.bind(this)}
            onMouseMove={this._onMouseMove.bind(this)}
            width={imageStore.state.img_w}
            height={imageStore.state.img_h}
            onLoad={this.getExif.bind(this)}
            src={imageStore.image1[0]}
            id="img1"
          />
        </div>
        {<h1>{imageStore.state.gsd}</h1>}
        <h1>
          Mouse coordinates: {x} {y}
        </h1>
      </div>
    );
  }
}

/*
 * Render the above component into the div#app
 */
export default observer(MeasureCom);

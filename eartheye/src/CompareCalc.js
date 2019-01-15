import React, { Component } from "react";
import { observer } from "mobx-react";
import resemble from "resemblejs";

// // //IMAGES in SRC file
// import image1 from "./TestImages/b.png";
// import image2 from "./TestImages/ac.png";

import imageStore from "./stores/imageStore";

class CompareCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diffImage: null
    };
  }

  componentDidMount() {
    // this.setBoundingBox(image1, image2)
    this.compare();
    this.clearStoreList();
  }

  // setBoundingBox(img1, img2) {
  //   if (img1.height * img1.width > img2.height * img2.width) {
  //     console.log("Image1 is larger... in theory");
  //   }
  // }

  compare() {
    let image1 = imageStore.list[0];
    let image2 = imageStore.list[1];
    var diff = resemble(image1)
      .compareTo(image2)
      .ignoreNothing()
      .ignoreAntialiasing()
      .onComplete(data => {
        this.setState({ diffImage: data.getImageDataUrl() });
      });
  }

  clearStoreList() {
    imageStore.clearList();
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="col-2">
          <img width="720" height="480" src={this.state.diffImage} alt="" />
        </div>
      </div>
    );
  }
}

export default observer(CompareCalc);

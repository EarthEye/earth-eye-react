import React, { Component } from "react";
import { observer } from "mobx-react";
import { NavLink } from "react-router-dom";

// Components
import PhotoUploadTest from "./PhotoUploadTest";

// Stores
import imageStore from "./stores/imageStore";

class Compare extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Compare Page</h1>
          <h2>Select two images to compare</h2>
          <PhotoUploadTest />
        </div>
        <div>
          <button onClick={() => imageStore.clearList()}>RESET</button>
          <h4 className="menu-item active">
            <NavLink to="/comparedcalc">COMPARE</NavLink>
          </h4>
        </div>
      </div>
    );
  }
}

export default observer(Compare);

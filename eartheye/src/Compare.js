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
        <br />
        <NavLink className="btn btn-primary m-auto" to="/home">
          HOME
        </NavLink>

        <div>
          <h1>Compare Page</h1>
          <h2>Select two images to compare</h2>
          <PhotoUploadTest />
        </div>
        <div>
          <br />
          <div>
            <button
              className="btn btn-primary m-auto"
              onClick={() => imageStore.clearList()}
            >
              RESET
            </button>{" "}
            <NavLink className="btn btn-primary m-auto" to="/comparedcalc">
              COMPARE
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(Compare);

import React, { Component } from "react";
import { observer } from "mobx-react";
import { NavLink } from "react-router-dom";
import "./App.css";

// stores

import imageStore from "./stores/imageStore";

// components

import MeasureCom from "./MeasureCom";

class MeasureCalc extends Component {
  render() {
    return (
      <div>
        <br />
        <NavLink className="btn btn-primary m-auto" to="/home">
          HOME
        </NavLink>
        <br />
        <h4 id="bold">Measure Page Results</h4>
        <h6>Tap on your image to add a point</h6>
        <h6>
          Sensor width: {imageStore.width}, height: {imageStore.height}
        </h6>
        <br />

        <MeasureCom />
      </div>
    );
  }
}

export default observer(MeasureCalc);

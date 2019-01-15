import React, { Component } from "react";
import { observer } from "mobx-react";

// stores

import imageStore from "./stores/imageStore";

class MeasureCalc extends Component {
  render() {
    return (
      <div>
        <h1>Measure Page Results</h1>
      </div>
    );
  }
}

export default observer(MeasureCalc);

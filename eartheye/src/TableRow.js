import React, { Component } from "react";
import { observer } from "../node_modules/mobx-react";

// stores

import imageStore from "./stores/imageStore";

class TableRow extends Component {
  render() {
    const column2 = imageStore.points.length >= 2 && (
      <div>{this.props.index + 2}</div>
    );

    const column3 = imageStore.distance[this.props.index] && (
      <div>{imageStore.distance[this.props.index]}</div>
    );

    return (
      <tr>
        <td>{this.props.index + 1}</td>
        <td> {column2}</td>
        <td> {column3}</td>
      </tr>
    );
  }
}

export default observer(TableRow);

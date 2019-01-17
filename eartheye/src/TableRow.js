import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "../node_modules/mobx-react";

// stores

import imageStore from "./stores/imageStore";

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{imageStore.points.indexOf()}</td>
        <td>empty</td>
        <td>empty</td>
      </tr>
    );
  }
}

export default observer(TableRow);

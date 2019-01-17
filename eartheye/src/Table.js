import React, { Component } from "react";

import TableRow from "./TableRow";
import imageStore from "./stores/imageStore";

class Table extends Component {
  render() {
    return (
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>First Point Index</th>
            <th>Second Point Index</th>
            <th>Calculated Distance</th>
          </tr>
        </thead>
        <tbody>
          {imageStore.points.map((_, index) => (
            <TableRow key={index} index={index} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;

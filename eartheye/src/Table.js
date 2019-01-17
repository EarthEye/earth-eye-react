import React, { Component } from "react";

import TableRow from "./TableRow";

class Table extends Component {
  render() {
    // const tableRows = this.props.books.map(book => (
    //   <BookRow key={book.id} book={book} />
    // ));
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
          <TableRow />
        </tbody>
      </table>
    );
  }
}

export default Table;

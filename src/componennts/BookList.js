import React, { Component } from "react";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>The way of Kings</li>
          <li>The name of the wind</li>
          <li>The Final empire</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
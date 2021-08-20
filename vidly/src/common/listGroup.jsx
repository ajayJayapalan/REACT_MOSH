import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { items, valueProperty, textProperty, onItemSelect, selectedItem } =
      this.props;
    return (
      <>
        <ul class="list-group">
          {items.map((item) => (
            <li
              onClick={() => onItemSelect(item)}
              key={item[valueProperty]}
              className={
                item === selectedItem
                  ? "list-group-item active"
                  : "list-group-item "
              }
            >
              {item[textProperty]}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ListGroup;

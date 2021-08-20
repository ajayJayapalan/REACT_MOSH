import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const genreListClone = [
      { _id: 1, name: "All genre" },
      ...this.props.genres,
    ];
    return (
      <>
        <ul class="list-group">
          {genreListClone.map((i) => (
            <li 
            key={i._id} 
            class="list-group-item"
            onClick={()=>this.props.onPress(i._id)}
            >
              {i.name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ListGroup;

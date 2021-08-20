import React, { Component } from "react";
import Like from "./like";

class MoviesTable extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { movies, onDelete, onLike } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort("title")} scope="col">
              Title
            </th>
            <th onClick={() => this.raiseSort("genre.name")} scope="col">
              Genre
            </th>
            <th onClick={() => this.raiseSort("numberInStock")} scope="col">
              Stock
            </th>
            <th onClick={() => this.raiseSort("dailyRentalRate")} scope="col">
              Rate
            </th>
          </tr>
        </thead>
        <tbody>
          {movies.map((i) => {
            return (
              <tr key={i._id}>
                <td>{i.title}</td>
                <td>{i.genre.name}</td>
                <td>{i.numberInStock}</td>
                <td>{i.dailyRentalRate}</td>
                <Like onPress={() => onLike(i)} liked={i.liked} id={i._id} />
                <button
                  onClick={() => {
                    onDelete(i._id);
                  }}
                  className="btn btn-danger btn-sm m-3"
                >
                  DELETE
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;

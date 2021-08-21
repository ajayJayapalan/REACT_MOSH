import React, { Component } from "react";
import Like from "./like";
import Table from "./../common/table";
import { Link } from 'react-router-dom';

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title", content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link> },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like onPress={() => this.props.onLike(movie)} liked={movie.liked} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => {
            this.props.onDelete(movie._id);
          }}
          className="btn btn-danger btn-sm "
        >
          DELETE
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return <Table
      columns={this.columns}
      data={movies}
      sortColumn={sortColumn}
      onSort={onSort}
    />;
  }
}

export default MoviesTable;

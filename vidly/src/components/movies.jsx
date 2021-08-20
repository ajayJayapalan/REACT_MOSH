import React, { Component } from "react";
import { getMovies } from "../services/movieList";
import { getGenres } from "../services/genreList";
import Pagination from "./../common/pagination";
import { paginate } from "./../utils/paginate";
import ListGroup from "../common/listGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    selectedGenre: "",
    movies: [],
    pageSize: 4,
    genres: [],
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }

  handleLike = (item) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(item);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies: [...movies] });
  };

  handleDelete = (id) => {
    const moviesClone = this.state.movies.filter((i) => i._id !== id);
    this.setState({ movies: moviesClone });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
 
    this.setState({ sortColumn });
  };

  render() {
    const {
      currentPage,
      selectedGenre,
      sortColumn,
      pageSize,
      movies: allMovies,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    if (this.state.movies.length === 0)
      return <p className="my-4">There are no movies in the database</p>;

    return (
      <>
        <div className="row">
          <div className="col-3 mt-5">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              valueProperty="_id"
              textProperty="name"
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <p className="my-4">
              Showing {filtered.length} movies in the database
            </p>
            <MoviesTable
              movies={movies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={filtered.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Movies;

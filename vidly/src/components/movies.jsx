import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import { toast } from "react-toastify";
import Pagination from "./../common/pagination";
import { paginate } from "./../utils/paginate";
import ListGroup from "../common/listGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "./../common/searchBox";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const { data } = await getGenres();
    const genres = [{ _id: "", name: "All Genres" }, ...data];

    const { data: movies } = await getMovies();
    this.setState({ movies, genres: genres });
  }

  handleLike = (item) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(item);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies: [...movies] });
  };

  handleDelete = async (id) => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter((i) => i._id !== id);
    this.setState({ movies });

    try {
      await deleteMovie(id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("This movie has already been deleted.");
      }

      this.setState({ movies: originalMovies });
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  getPageData = () => {
    const {
      currentPage,
      selectedGenre,
      searchQuery,
      sortColumn,
      pageSize,
      movies: allMovies,
    } = this.state;

    let filtered = allMovies;

    if (searchQuery) {
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { currentPage, pageSize, searchQuery } = this.state;
    const { totalCount, data } = this.getPageData();
    const { user } = this.props;

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
            {user && <Link to="/movies/new" className="btn btn-primary">
              New Movie
            </Link>}
            <p className="my-4">Showing {totalCount} movies in the database</p>
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            <MoviesTable
              sortColumn={this.state.sortColumn}
              movies={data}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
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

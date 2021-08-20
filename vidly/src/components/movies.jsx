import React, { Component } from "react";
import { getMovies } from "../services/movieList";
//import { genres, getGenres } from "../services/genreList";
import Like from "./like";
import Pagination from "./../common/pagination";
import { paginate } from "./../utils/paginate";
//import ListGroup from "../common/listGroup";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
  };

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


  getHeader = () => {
    const element =
      this.state.movies.length === 0
        ? "There are no movies in the database"
        : `Showing ${this.state.movies.length} movies in the database`;
    return element;
  };

  render() {
    const { currentPage, pageSize, movies: allMovies } = this.state;

    const movies = paginate(allMovies, currentPage, pageSize);
    return (
      <>
        <div className="row">
          <div className="col-3 mt-5">
            {/*<ListGroup />*/}
          </div>
          <div className="col">
            <p className="my-4">{this.getHeader()}</p>
            {this.state.movies.length !== 0 && (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
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
                        <Like
                          onPress={() => this.handleLike(i)}
                          liked={i.liked}
                          id={i._id}
                        />
                        <button
                          onClick={() => {
                            this.handleDelete(i._id);
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
            )}

            <Pagination
              itemsCount={allMovies.length}
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

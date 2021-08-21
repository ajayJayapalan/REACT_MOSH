import * as genresAPI from "./genreList"

const movies = [
  {
    _id: "611e75778b8b0b0f789396bc",
    title: "The Shawshank Redemption",
    genre: { _id: "611e75778b8b0b0f789396bd", name: "Action" },
    numberInStock: 8,
    dailyRentalRate: "5.0",
    publishDate: "2021-08-19T15:15:03.163Z",
    liked: true,
  },
  {
    _id: "611e75778b8b0b0f789396be",
    title: "The Godfather",
    genre: { _id: "611e75778b8b0b0f789396bd", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: "5.0",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396c0",
    title: "The Godfather: Part II",
    genre: { _id: "611e75778b8b0b0f789396c1", name: "Thriller" },
    numberInStock: 5,
    dailyRentalRate: "3.3",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396c2",
    title: "The Dark Knight",
    genre: { _id: "611e75778b8b0b0f789396c3", name: "Comedy" },
    numberInStock: 9,
    dailyRentalRate: "5.8",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396c4",
    title: "12 Angry Men",
    genre: { _id: "611e75778b8b0b0f789396bd", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: "5.8",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396c6",
    title: "Schindler's List",
    genre: { _id: "611e75778b8b0b0f789396c1", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: "3.3",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396c8",
    title: "The Lord of the Rings: The Return of the King",
    genre: { _id: "611e75778b8b0b0f789396c3", name: "Comedy" },
    numberInStock: 9,
    dailyRentalRate: "5.0",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396ca",
    title: "Pulp Fiction",
    genre: { _id: "611e75778b8b0b0f789396bd", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: "3.3",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396cc",
    title: "The Good, the Bad and the Ugly",
    genre: { _id: "611e75778b8b0b0f789396c3", name: "Comedy" },
    numberInStock: 8,
    dailyRentalRate: "7.5",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396ce",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: { _id: "611e75778b8b0b0f789396c3", name: "Comedy" },
    numberInStock: 8,
    dailyRentalRate: "5.0",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396d0",
    title: "Fight Club",
    genre: { _id: "611e75778b8b0b0f789396c1", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: "3.3",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
];

export function getMovies() {
  return movies;
}

export function getMovieById(id) {
  return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

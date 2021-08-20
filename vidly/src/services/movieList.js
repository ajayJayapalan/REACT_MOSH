

const movies = [
  {
    _id: "611e75778b8b0b0f789396bc",
    title: "The Shawshank Redemption",
    genre: { _id: "611e75778b8b0b0f789396bd", name: "Fantasy Genre" },
    numberInStock: 8,
    dailyRentalRate: "5.0",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396be",
    title: "The Godfather",
    genre: { _id: "611e75778b8b0b0f789396bf", name: "Action Genre" },
    numberInStock: 7,
    dailyRentalRate: "5.0",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396c0",
    title: "The Godfather: Part II",
    genre: { _id: "611e75778b8b0b0f789396c1", name: "Thriller Genre" },
    numberInStock: 5,
    dailyRentalRate: "3.3",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396c2",
    title: "The Dark Knight",
    genre: { _id: "611e75778b8b0b0f789396c3", name: "Comedy Genre" },
    numberInStock: 9,
    dailyRentalRate: "5.8",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396c4",
    title: "12 Angry Men",
    genre: { _id: "611e75778b8b0b0f789396c5", name: "Action Genre" },
    numberInStock: 7,
    dailyRentalRate: "5.8",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396c6",
    title: "Schindler's List",
    genre: { _id: "611e75778b8b0b0f789396c7", name: "Animation Genre" },
    numberInStock: 4,
    dailyRentalRate: "3.3",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396c8",
    title: "The Lord of the Rings: The Return of the King",
    genre: { _id: "611e75778b8b0b0f789396c9", name: "Romance Genre" },
    numberInStock: 9,
    dailyRentalRate: "5.0",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396ca",
    title: "Pulp Fiction",
    genre: { _id: "611e75778b8b0b0f789396cb", name: "Animation Genre" },
    numberInStock: 6,
    dailyRentalRate: "3.3",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396cc",
    title: "The Good, the Bad and the Ugly",
    genre: { _id: "611e75778b8b0b0f789396cd", name: "Crime Genre" },
    numberInStock: 8,
    dailyRentalRate: "7.5",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396ce",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: { _id: "611e75778b8b0b0f789396cf", name: "Romance Genre" },
    numberInStock: 8,
    dailyRentalRate: "5.0",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
  {
    _id: "611e75778b8b0b0f789396d0",
    title: "Fight Club",
    genre: { _id: "611e75778b8b0b0f789396d1", name: "Comedy Genre" },
    numberInStock: 4,
    dailyRentalRate: "3.3",
    publishDate: "2021-08-19T15:15:03.163Z",
  },
];

export function getMovies(){
    return movies;
}

export function getMovieById(id){
    return movies.find(m=> m._id === id);
}
export const genres = [
  { _id: "611e75778b8b0b0f789396bd", name: "Action" },
  { _id: "611e75778b8b0b0f789396c1", name: "Thriller" },
  { _id: "611e75778b8b0b0f789396c3", name: "Comedy" },
];

export function getGenres() {
  return genres.filter((g) => g);
}

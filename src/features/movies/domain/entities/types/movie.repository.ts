export type TMovieRepository = {
  getMovie: (movieId: string) => Promise<boolean>;
  getMovies: (title: string) => Promise<boolean>;
};

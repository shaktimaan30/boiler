import * as React from "react";
import { TMovieList } from "features/movies/domain/entities/types/movie-list";

type TMovieListComponent = {
  movie: TMovieList;
};

const MovieListComponent: React.FC<TMovieListComponent> = (
  props: TMovieListComponent
) => {
  const { movie } = props;
  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} />
      <div>{movie.Title}</div>
    </div>
  );
};

export default MovieListComponent;

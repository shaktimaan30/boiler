import { TMovie } from "./movie";
import { TMovieList } from './movie-list';

export type TMovieStore = {
    movieList: TMovieList[],
    movie: TMovie,
    totalResults: number,
    setMovieList: (movieList: TMovieList[]) => void;
    setMovie: (movie: TMovie) => void;
    setTotalResults: (totalResults: number) => void;
}
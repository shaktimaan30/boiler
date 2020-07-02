import { TMovieListResponse } from './movie-list-response';
import { TMovie } from './movie';

export type TDataSource = {
    getMovieList: (title: string) => Promise<TMovieListResponse>
    getMovie: (movieId: string) => Promise<TMovie>
}
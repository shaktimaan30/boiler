import { TMovieStore } from "../entities/types/movie.store";
import { observable, action } from "mobx"
import { TMovie } from "../entities/types/movie";
import { TMovieList } from '../entities/types/movie-list';

export default class MovieStore implements TMovieStore {
    @observable movieList: TMovieList[] = [];
    @observable movie = {} as TMovie;
    @observable totalResults: number = 0;

    @action
    setMovieList = (movieList: TMovieList[]) => {
        this.movieList = movieList
    };

    @action
    setMovie = (movie: TMovie) => {
        this.movie = movie
    };

    @action
    setTotalResults = (totalResults: number) => {
        this.totalResults = totalResults
    }

}
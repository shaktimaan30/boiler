import MovieListRepository from "../../data/repositories/movie.repositories";
import { TMovieStore } from "../../domain/entities/types/movie.store";
import GetMovieListUseCase from "../../domain/usecases/movie-list.usecase";

export default class MovieListController {
  private movieList: GetMovieListUseCase;

  constructor(store: TMovieStore) {
    this.movieList = new GetMovieListUseCase(new MovieListRepository(store));
  }

  getMovieList = (title: string) => {
    this.movieList.execute(title);
  };
}

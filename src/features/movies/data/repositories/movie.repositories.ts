import { TMovieRepository } from "../../domain/entities/types/movie.repository";
import { TMovieStore } from "features/movies/domain/entities/types/movie.store";
import { TDataSource } from "features/movies/domain/entities/types/data-source";
import { RemoteDataSource } from "../data_sources/remote-data-source";

export default class MovieRepository implements TMovieRepository {
  private store: TMovieStore;
  constructor(store: TMovieStore) {
    this.store = store;
  }
  private remoteDataSource: TDataSource = new RemoteDataSource();

  getMovies = async (title: string): Promise<boolean> => {
    const data = await this.remoteDataSource.getMovieList(title);
    if (data) {
      this.store.setMovieList(data.Search);
      this.store.setTotalResults(parseInt(data.totalResults));
    }
    return true;
  };

  getMovie!: (movieId: string) => Promise<boolean>;
}

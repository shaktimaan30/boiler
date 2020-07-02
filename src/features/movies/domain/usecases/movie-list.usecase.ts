import { TMovieRepository } from '../entities/types/movie.repository';

export default class GetMovieListUseCase {
    private movieListRepository: TMovieRepository;

    constructor(movieListRepository: TMovieRepository) {
        this.movieListRepository = movieListRepository
    }

    execute(title: string) {
        this.movieListRepository.getMovies(title);
    }
}
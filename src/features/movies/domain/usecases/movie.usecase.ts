import { TMovieRepository } from '../entities/types/movie.repository';

export default class GetMovieUseCase {
    private movieRepository: TMovieRepository;

    constructor(movieRepository: TMovieRepository) {
        this.movieRepository = movieRepository
    }

    execute(movieId: string) {
        this.movieRepository.getMovies(movieId);
    }
}
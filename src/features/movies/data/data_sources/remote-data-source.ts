import { TDataSource } from '../../domain/entities/types/data-source';
import { TMovieListResponse } from '../../domain/entities/types/movie-list-response';
import { TMovie } from '../../domain/entities/types/movie';
import axios from "axios"

export class RemoteDataSource implements TDataSource {
    getMovieList = async (title: string): Promise<TMovieListResponse> => {
        const res = await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=3556bb79`)
        return res.data
    }
    getMovie = async (movieId: string): Promise<TMovie> => {
        const res = await axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=3556bb79`)
        return res.data
    }

}
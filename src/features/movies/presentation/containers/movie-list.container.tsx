import * as React from "react";
import MovieListView from '../views/movie-list.view';
import { Observer } from "mobx-react"
import { StoreContext } from '../../../../index';
import MovieListController from '../controllers/movie-list.controller';

const MovieListContainer = () => {
    const [movie, setMovie] = React.useState("")
    const [error, setError] = React.useState("")
    const store = React.useContext(StoreContext)
    const movieListController = new MovieListController(store.movie)

    React.useEffect(() => {
        console.log("hello")
    })

    const setMovieTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMovie(e.target.value)
    }

    const getMovie = () => {
        if (movie.length > 0) {
            movieListController.getMovieList(movie)
        } else {
            setError("This field cannot remain empty")
        }
    }

    return (
        <Observer>
            {() => <div>
                <MovieListView
                    movieList={store.movie.movieList && store.movie.movieList}
                    setMovieTitle={(e) => setMovieTitle(e)}
                    onBtnClick={() => getMovie()}
                    movieTitle={movie}
                    error={error}
                />
            </div>}

        </Observer>
    )
}

export default MovieListContainer;
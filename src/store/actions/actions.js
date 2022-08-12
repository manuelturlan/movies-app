import { FETCH_MOVIES, ADD_MOVIE_FAVORITE, GET_MOVIE_DETAIL, DELETE_FAVORITE_MOVE } from "../../utils/action-types/action-types-constants";


export function fetchMovies(title) {
    return function (dispatch)  {
        return fetch("https://www.omdbapi.com/?i=tt3896198&apikey=3fed0e7f&s=" + title)
        .then((response) => response.json())
        .then((json) => {
            dispatch({ type: FETCH_MOVIES, payload: json})
        })
    }
}

export function addMovieFavorite(payload) {
    return {
        type: ADD_MOVIE_FAVORITE, payload
    }
}


export function getMovieDetail(movieId) {
    return function (dispatch) {
        return fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=3fed0e7f&r`)
        .then((response) => response.json())
        .then((json) => {
            dispatch( { type: GET_MOVIE_DETAIL, payload: json})
        })
    }
}

export function deleteFavoriteMovie(movieId) {
    return {
        type: DELETE_FAVORITE_MOVE, payload: movieId
    }
}
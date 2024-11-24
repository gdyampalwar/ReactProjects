import { FETCH_MOVIES_REQUEST, 
        FETCH_MOVIES_REQUEST_ERROR, 
        FETCH_MOVIES_REQUEST_SUCCESS, 
        FILTER_MOVIE_LIST, 
        SELECT_MOVIE, SORT_MOVIE_LIST } from "./MovieTypes";

export const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST
    }
}

export const fetchMoviesRequestSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_REQUEST_SUCCESS,
        payload: movies
    }
}

export const fetchMoviesRequestError = (error) => {
    return {
        type: FETCH_MOVIES_REQUEST_ERROR,
        payload: error
    }
}

export const selectMovie = (selectedMovie) => {
    return {
        type: SELECT_MOVIE,
        payload: selectedMovie
    }
}

export const sortMoviesList = (movies) => {
    return {
        type: SORT_MOVIE_LIST,
        payload: movies
    }
}

export const filterMoviesList = (movies) => {
    return {
        type: FILTER_MOVIE_LIST,
        payload: movies
    }
}
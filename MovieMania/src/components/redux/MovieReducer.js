import { SELECT_MOVIE, FETCH_MOVIES_REQUEST, FETCH_MOVIES_REQUEST_ERROR, FETCH_MOVIES_REQUEST_SUCCESS, SORT_MOVIE_LIST, FILTER_MOVIE_LIST } from "./MovieTypes"

const initialState = {
    loading: false,
    movies: [],
    selectedMovie: [],
    filterMovies: []
}

const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MOVIES_REQUEST:return {
            ...state,
            loading: true
        }
        case FETCH_MOVIES_REQUEST_SUCCESS:return {
            ...state,
            loading: false,
            movies: action.payload
        }
        case FETCH_MOVIES_REQUEST_ERROR:return {
            ...state,
            loading: false,
            movies: [],
            error: action.payload
        }
        case SELECT_MOVIE:return {
            ...state,
            selectedMovie: action.payload
        }
        case SORT_MOVIE_LIST:return {
            ...state,
            filterMovies: action.payload
        }
        case FILTER_MOVIE_LIST:return {
            ...state,
            filterMovies: action.payload
        }
        default: return state
    }
}

export default movieReducer
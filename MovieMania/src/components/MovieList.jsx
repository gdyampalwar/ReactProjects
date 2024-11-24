import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectMovie } from './redux'

function MovieList() {
    const filteredMovieList = useSelector((state) => state.movie.filterMovies)
    const dispatch = useDispatch()

    const handleMovieClick = (movie) => {
        dispatch(selectMovie(movie)) 
    }
    
    return (
        <div>
            <ul>
            {
                filteredMovieList.length ? 
                filteredMovieList.map( movie => {
                    return (
                        <MovieItem key={movie.episode_id} movie={movie} movieClick={handleMovieClick}/> 
                    )
                }) : 'No Movies In Inventory'
            }
            </ul>
        </div>
    )
}

export default MovieList

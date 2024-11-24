import React from 'react'
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { filterMoviesList } from './redux';

function MovieSort() {
  const movies = useSelector((state) => state.movie.movies)
  const dispatch = useDispatch()
  let sortedMovies = []

  const handleSort = (e) => {
    const sortValue = e.target.value

    if (sortValue === 'episode-asc') {
        sortedMovies = [...movies].sort((a,b) => (a.episode_id - b.episode_id))
        dispatch(filterMoviesList(sortedMovies))  
    } else if (sortValue === 'episode-dsc') {
        sortedMovies = [...movies].sort((a,b) => (b.episode_id - a.episode_id))
        dispatch(filterMoviesList(sortedMovies))  
    } else if (sortValue === 'year-asc') {
        sortedMovies = [...movies].sort((a,b) => (a.release_date - b.release_date))
        dispatch(filterMoviesList(sortedMovies)) 
    }
  }

  return (
    <div>
        <Form.Select className='form-control' aria-label="Default select example" onChange={handleSort}>
            <option>Sort By</option>
            <option value="episode-asc">Episode - Ascending</option>
            <option value="year-asc">Year - Ascending</option>
            <option value="episode-dsc">Episode - Descending</option>
        </Form.Select>
    </div>
  )
}

export default MovieSort

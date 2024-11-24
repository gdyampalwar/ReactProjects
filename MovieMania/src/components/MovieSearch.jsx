import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { filterMoviesList } from './redux';
import useDebounce from './hooks/useDebounce';

function MovieSearch() {
  const [search, setSearch] = useState('');
  const movies = useSelector((state) => state.movie.movies)
  const dispatch = useDispatch()
  let filteredMovies = []

  useDebounce(() => {
    filteredMovies = movies.filter((item) => {
        return item.title.toLowerCase().includes(search)
    })
    if (search.length > 2 ) {
        dispatch(filterMoviesList(filteredMovies)) 
    } else {
        dispatch(filterMoviesList(movies)) 
    }
  }, [filteredMovies, search], 800)
  
  const handleSearchFilter = (e) => {
    const searchTerm = (e.target.value).toLowerCase()
    setSearch(searchTerm)
  }

  return (
    <div>
      <InputGroup className="">
        <Form.Control
          placeholder="Filter Movie "
          aria-label="Filter Movie"
          onChange={handleSearchFilter}
        />
      </InputGroup>
    </div>
  )
}

export default MovieSearch

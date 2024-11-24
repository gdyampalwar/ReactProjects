import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieList from './MovieList'
import MovieDetails from './MovieDetails'
import { connect, useDispatch, useSelector } from 'react-redux'
import { fetchMoviesRequest, fetchMoviesRequestError, fetchMoviesRequestSuccess, filterMoviesList } from './redux/MovieActions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieSort from './MovieSort';
import MovieSearch from './MovieSearch';
import LoadingSpinner from './utils/LoadingSpinner'

function MovieManiaContainer() {
  const movies = useSelector((state) => state.movies)
  //const isLoading = useSelector((state) => state.loading)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const loadMovies = async () => {
    dispatch(fetchMoviesRequest())
    setIsLoading(true)
    
    const responce = await axios.get(`https://swapi.dev/api/films/?format=json`)
    .then(response => {
        const movies = response.data.results
        setIsLoading(false)
        dispatch(fetchMoviesRequestSuccess(movies))
        dispatch(filterMoviesList(movies)) 
        
    })
    .catch(error => {
      dispatch(fetchMoviesRequestError(error.message))
    })
  }

  useEffect(()=>{
    loadMovies()
  },[])

  const styles = {
    header: {
      border: '1px solid transparent', 
      borderBottomColor: 'lightgrey',
      padding: '10px 0',
      background: 'lightgrey'
    }
  }

  return (
    <div>
      <Container>
        <Row style={styles.header}>
          <Col lg={2} style={{marginBottom: '10px'}}> <MovieSort />  </Col>
          <Col lg={10} > <MovieSearch /> </Col>
        </Row>
        <Row>
          <Col lg={6} style={{border: '1px solid transparent', borderRightColor: 'lightgrey'}}> 
            
            {isLoading ? 
              <div className='centered-element' style={{minHeight: '400px'}}  >
                <h3> <LoadingSpinner /> Loading Movies... </h3>
              </div> 
              : <MovieList /> } 
          </Col>
          <Col lg={6}> <MovieDetails /> </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MovieManiaContainer
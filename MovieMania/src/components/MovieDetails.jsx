import { ClassNames } from '@emotion/react'
import React from 'react'
import { useSelector } from 'react-redux'

function MovieDetails() {
  const selectedMovie = useSelector(state => state.movie.selectedMovie)
  return(
    <div style={{padding: '20px 10px'}}>
      <div className={selectedMovie.length != 0 ? '' : 'd-none'}>
        <h3> {selectedMovie.title}</h3>
        <div> {selectedMovie.opening_crawl} </div>
        <p style={{marginTop: '15px'}}>Directed By: {selectedMovie.director}</p>
      </div>
    
      <div className={selectedMovie.length == 0 ? 'centered-element' : 'd-none'}
          style={{minHeight: '400px'}}  >
        <h3> NO Movie Selected </h3>
      </div>
    </div>
    
  )
  
}

export default MovieDetails

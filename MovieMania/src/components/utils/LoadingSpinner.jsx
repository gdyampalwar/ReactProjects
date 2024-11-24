import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden"></span>
    </Spinner>
  )
}

export default LoadingSpinner

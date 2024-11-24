import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MovieItem({movie , movieClick}) {
    const styles = {
        movieItem: {
            padding: '10px 0',
            borderBottom: '1px solid lightgrey',
            cursor: 'pointer'
        }
    }

  return (
    <li style={styles.movieItem} onClick={() => movieClick(movie)}>
        <Container>
          <Row>
            <Col lg={3}>{'Episode ' + movie.episode_id}</Col>
            <Col lg={6}>{movie.title}</Col>
            <Col lg={3} style={{textAlign: 'right'}}>{movie.release_date}</Col>
          </Row>
        </Container>
    </li>
  )
}

export default MovieItem

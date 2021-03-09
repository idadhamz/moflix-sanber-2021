import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'reactstrap'

const Home = () => {
  const [games, setGames] = useState(null)
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    if (games === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/data-game`)
        .then((res) => {
          setGames(
            res.data.map((el) => {
              return {
                id: el.id,
                genre: el.genre,
                image_url: el.image_url,
                singlePlayer: el.singlePlayer,
                multiplayer: el.multiplayer,
                name: el.name,
                platfrom: el.platfrom,
                release: el.release,
              }
            }),
          )
        })
    }

    if (movies === null) {
      axios
        .get(`https://backendexample.sanbersy.com/api/data-movie`)
        .then((res) => {
          setMovies(
            res.data.map((el) => {
              return {
                id: el.id,
                title: el.title,
                description: el.description,
                year: el.year,
                duration: el.duration,
                genre: el.genre,
                rating: el.rating,
                review: el.review,
                image_url: el.image_url,
              }
            }),
          )
        })
    }
  }, [movies])

  return (
    <>
      <div style={{ margin: '20px 0' }}>
        <h1 style={{ fontSize: '24px' }}>Hot Games</h1>
      </div>
      <Row>
        {games !== null &&
          games.slice(0, 4).map((item, index) => {
            return (
              <Col
                xs={12}
                md={3}
                lg={3}
                key={index}
                style={{ marginBottom: '30px' }}
              >
                <img
                  src={item.image_url}
                  style={{
                    width: '100%',
                    height: '350px',
                    objectFit: 'cover',
                  }}
                ></img>
                <h2
                  style={{
                    textAlign: 'center',
                    fontSize: '18px',
                    margin: '10px 0',
                  }}
                >
                  {item.name}
                </h2>
              </Col>
            )
          })}
      </Row>

      <div style={{ margin: '20px 0' }}>
        <h1 style={{ fontSize: '24px' }}>Hot Movies</h1>
      </div>
      <Row>
        {movies !== null &&
          movies.slice(0, 4).map((item, index) => {
            return (
              <Col
                xs={12}
                md={3}
                lg={3}
                key={index}
                style={{ marginBottom: '30px' }}
              >
                <img
                  src={item.image_url}
                  style={{
                    width: '100%',
                    height: '350px',
                    objectFit: 'cover',
                  }}
                ></img>
                <h2
                  style={{
                    textAlign: 'center',
                    fontSize: '18px',
                    margin: '10px 0',
                  }}
                >
                  {item.title}
                </h2>
              </Col>
            )
          })}
      </Row>
    </>
  )
}

export default Home

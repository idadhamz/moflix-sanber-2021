import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Spinner } from 'reactstrap'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import ImageNotFound from '../img/imageNotFound.png'

const Home = () => {
  const [games, setGames] = useState(null)
  const [movies, setMovies] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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

            setIsLoading(false),
          )
        })
    }

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

          setIsLoading(false)
        })
    }
  }, [movies])

  const Divider = styled.div`
    width: 100%;
    height: 1.7px;
    background-color: #26262d;
    border-radius: 3px;
  `
  return (
    <>
      <div
        style={{
          margin: '20px 0',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: '24px' }}>Hot Movies</h1>
        <Link to="/movies">
          <h1 style={{ fontSize: '14px' }}>See All</h1>
        </Link>
      </div>
      <Row>
        {isLoading ? (
          <Col xs={12} md={12} lg={12}>
            <Spinner
              color="primary"
              style={{ margin: '20px 0', width: '3rem', height: '3rem' }}
            />
          </Col>
        ) : (
          movies !== null &&
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
                  src={item.image_url === null ? ImageNotFound : item.image_url}
                  style={{
                    width: '100%',
                    height: '350px',
                    objectFit: 'cover',
                    borderRadius: '5px',
                  }}
                ></img>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '20px 0px',
                  }}
                >
                  <h2
                    style={{
                      color: 'gray',
                      fontSize: '14px',
                    }}
                  >
                    {item.year}
                  </h2>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Link
                      to={{ pathname: `/movies/${item.id}`, state: item }}
                      style={{ color: 'black' }}
                    >
                      <h2
                        style={{
                          fontSize: '16px',
                        }}
                      >
                        {item.title}
                      </h2>
                    </Link>
                    <h2
                      style={{
                        backgroundColor: '#D44B40',
                        color: '#fff',
                        padding: '5px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderRadius: '5px',
                      }}
                    >
                      {item.rating}/10
                    </h2>
                  </div>
                </div>
              </Col>
            )
          })
        )}
      </Row>

      <Divider />

      <div
        style={{
          margin: '20px 0',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: '24px' }}>Hot Games</h1>
        <Link to="/games">
          <h1 style={{ fontSize: '14px' }}>See All</h1>
        </Link>
      </div>
      <Row>
        {isLoading ? (
          <Col xs={12} md={12} lg={12}>
            <Spinner
              color="primary"
              style={{ margin: '20px 0', width: '3rem', height: '3rem' }}
            />
          </Col>
        ) : (
          games !== null &&
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
                  src={item.image_url === null ? ImageNotFound : item.image_url}
                  style={{
                    width: '100%',
                    height: '350px',
                    objectFit: 'cover',
                    borderRadius: '5px',
                  }}
                ></img>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '20px 0px',
                  }}
                >
                  <h2
                    style={{
                      color: 'gray',
                      fontSize: '14px',
                    }}
                  >
                    {item.release}
                  </h2>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Link
                      to={{ pathname: `/games/${item.id}`, state: item }}
                      style={{ color: 'black' }}
                    >
                      <h2
                        style={{
                          fontSize: '16px',
                        }}
                      >
                        {item.name}
                      </h2>
                    </Link>
                    <h2
                      style={{
                        backgroundColor: '#D44B40',
                        color: '#fff',
                        padding: '5px 10px',
                        fontSize: '16px',
                        borderRadius: '5px',
                      }}
                    >
                      {item.genre}
                    </h2>
                  </div>
                </div>
              </Col>
            )
          })
        )}
      </Row>
    </>
  )
}

export default Home

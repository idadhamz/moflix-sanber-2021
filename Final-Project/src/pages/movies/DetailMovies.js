import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { Row, Col, Spinner } from 'reactstrap'

const DetailMovies = () => {
  const [detailMovies, setDetailMovies] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  let { id } = useParams()

  useEffect(() => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie/${id}`)
      .then((res) => {
        setDetailMovies({
          id: res.data.id,
          title: res.data.title,
          description: res.data.description,
          year: res.data.year,
          duration: res.data.duration,
          genre: res.data.genre,
          rating: res.data.rating,
          review: res.data.review,
          image_url: res.data.image_url,
        })

        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <Row>
        {isLoading ? (
          <Col xs={12} md={12} lg={12}>
            <Spinner
              color="primary"
              style={{ margin: '20px 0', width: '3rem', height: '3rem' }}
            />
          </Col>
        ) : (
          detailMovies !== null && (
            <Col xs={12} md={12} lg={12} style={{ margin: '30px 0px' }}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img
                  src={detailMovies.image_url}
                  style={{
                    width: '350px',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '5px',
                  }}
                ></img>
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    padding: '5%',
                  }}
                >
                  <h2
                    style={{
                      backgroundColor: '#D44B40',
                      color: '#fff',
                      width: 'fit-content',
                      padding: '8px 13px',
                      fontSize: '14px',
                      borderRadius: '5px',
                      margin: '10px 0',
                    }}
                  >
                    {detailMovies.genre}
                  </h2>
                  <h2
                    style={{
                      color: 'black',
                      fontSize: '24px',
                      fontWeight: 'bold',
                    }}
                  >
                    {detailMovies.title}{' '}
                    <span style={{ color: 'gray', fontSize: '16px' }}>
                      ({detailMovies.year})
                    </span>
                  </h2>
                  <h2
                    style={{
                      color: 'black',
                      fontSize: '16px',
                      textAlign: 'justify',
                      lineHeight: '2rem',
                      margin: '10px 0',
                    }}
                  >
                    {detailMovies.description}
                  </h2>
                  <h2
                    style={{
                      color: 'black',
                      fontSize: '16px',
                      textAlign: 'justify',
                      lineHeight: '2rem',
                      margin: '10px 0',
                    }}
                  >
                    Duration : <b>{detailMovies.duration} Minutes</b>
                  </h2>
                  <h2
                    style={{
                      color: 'black',
                      fontSize: '16px',
                      textAlign: 'justify',
                      lineHeight: '2rem',
                      margin: '10px 0',
                    }}
                  >
                    Rating : <b>{detailMovies.rating}/10</b>
                  </h2>
                  <h2
                    style={{
                      color: 'black',
                      fontSize: '14px',
                      textAlign: 'justify',
                      lineHeight: '2rem',
                      margin: '10px 0',
                    }}
                  >
                    Review : "<i>{detailMovies.review}</i>"
                  </h2>
                </div>
              </div>
            </Col>
          )
        )}
      </Row>
    </>
  )
}

export default DetailMovies

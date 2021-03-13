import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import { Row, Col, Spinner, Badge } from 'reactstrap'

const DetailGames = () => {
  const [detailGames, setDetailGames] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  let { id } = useParams()

  useEffect(() => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game/${id}`)
      .then((res) => {
        setDetailGames({
          id: res.data.id,
          genre: res.data.genre,
          image_url: res.data.image_url,
          singlePlayer: res.data.singlePlayer,
          multiplayer: res.data.multiplayer,
          name: res.data.name,
          platform: res.data.platform,
          release: res.data.release,
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
              style={{ width: '3rem', height: '3rem' }}
            />
          </Col>
        ) : (
          detailGames !== null && (
            <Col xs={12} md={12} lg={12}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img
                  src={detailGames.image_url}
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
                    padding: '0px 5%',
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
                    {detailGames.genre}
                  </h2>
                  <h2
                    style={{
                      color: 'black',
                      fontSize: '24px',
                      fontWeight: 'bold',
                    }}
                  >
                    {detailGames.name}{' '}
                    <span style={{ color: 'gray', fontSize: '16px' }}>
                      ({detailGames.release})
                    </span>
                  </h2>
                  <p
                    style={{
                      color: 'black',
                      fontSize: '14px',
                      margin: '10px 0',
                    }}
                  >
                    <span>
                      Multi Player :{' '}
                      {detailGames.multiplayer == 1 ? (
                        <Badge color="primary">Yes</Badge>
                      ) : (
                        <Badge color="danger">No</Badge>
                      )}
                    </span>
                    <span style={{ margin: '0 10px' }}>
                      Single Player :{' '}
                      {detailGames.singlePlayer == 1 ? (
                        <Badge color="primary">Yes</Badge>
                      ) : (
                        <Badge color="danger">No</Badge>
                      )}
                    </span>
                  </p>
                  <p
                    style={{
                      color: 'black',
                      fontSize: '14px',
                      margin: '10px 0',
                    }}
                  >
                    Platform : {detailGames.platform}
                  </p>
                </div>
              </div>
            </Col>
          )
        )}
      </Row>
    </>
  )
}

export default DetailGames

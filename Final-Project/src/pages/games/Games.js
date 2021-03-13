import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col, Spinner } from 'reactstrap'

import { Link } from 'react-router-dom'

import ImageNotFound from '../../img/imageNotFound.png'

class Games extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game`)
      .then((res) => {
        let games = res.data.map((el) => {
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
        })
        this.setState({ games })
        this.setState({ isLoading: false })
      })
  }

  render() {
    return (
      <>
        <div style={{ marginBottom: '20px' }}>
          <h1 style={{ fontSize: '24px' }}>Games</h1>
        </div>
        <Row>
          {this.state.isLoading ? (
            <Col xs={12} md={12} lg={12}>
              <Spinner
                color="primary"
                style={{ margin: '20px 0', width: '3rem', height: '3rem' }}
              />
            </Col>
          ) : (
            this.state.games !== null &&
            this.state.games.map((item, index) => {
              return (
                <Col
                  xs={12}
                  md={3}
                  lg={3}
                  key={index}
                  style={{ marginBottom: '30px' }}
                >
                  <img
                    src={
                      item.image_url === null ? ImageNotFound : item.image_url
                    }
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
                          display: item.genre === null ? 'none' : 'block',
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
}

export default Games

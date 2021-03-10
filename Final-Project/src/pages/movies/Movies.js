import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col, Spinner } from 'reactstrap'

import { Link } from 'react-router-dom'

import ImageNotFound from '../../img/imageNotFound.png'

class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie`)
      .then((res) => {
        let movies = res.data.map((el) => {
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
        })
        this.setState({ movies })
        this.setState({ isLoading: false })
      })
  }

  render() {
    return (
      <>
        <div style={{ margin: '20px 0' }}>
          <h1 style={{ fontSize: '24px' }}>Movies</h1>
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
            this.state.movies !== null &&
            this.state.movies.map((item, index) => {
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
      </>
    )
  }
}

export default Movies

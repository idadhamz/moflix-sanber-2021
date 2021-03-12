import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'

import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Table,
  Button,
  Card,
  CardTitle,
  Label,
} from 'reactstrap'

import { Link } from 'react-router-dom'
import { AppContext } from '../../../context/AppContext'

import ImageNotFound from '../../../img/imageNotFound.png'

const List = () => {
  const [user] = useContext(AppContext)
  const [movies, setMovies] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState({
    year: null,
    rating: null,
    duration: null,
  })

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
          )

          setIsLoading(false)
        })
    }
  }, [movies])

  function truncateString(str, num) {
    if (str === null) {
      return ''
    } else {
      if (str.length <= num) {
        return str
      }
      return str.slice(0, num) + '...'
    }
  }

  const Action = ({ itemId }) => {
    const handleDelete = () => {
      let newMovies = movies.filter((el) => el.id !== itemId)

      axios
        .delete(
          `https://backendexample.sanbersy.com/api/data-movie/${itemId}`,
          { headers: { Authorization: 'Bearer ' + user.token } },
        )
        .then((res) => {
          console.log(res)
          alert('Delete Movies Successfully')
        })

      setMovies([...newMovies])
    }

    return (
      <>
        <Link to={{ pathname: `/editMovies/${itemId}` }}>
          <Button color="warning">Edit</Button>
        </Link>
        &nbsp;
        <Button color="danger" onClick={handleDelete}>
          Delete
        </Button>
      </>
    )
  }

  const Filter = () => {
    let year = []

    for (var i = 2021; i >= 2000; i--) {
      year.push(i)
    }

    let rating = []

    for (var i = 1; i <= 10; i++) {
      rating.push(i)
    }

    return (
      <>
        <Row>
          <Col sm="12">
            <Card body>
              <CardTitle style={{ fontWeight: 'bold' }}>
                Movies Filter
              </CardTitle>
              <Form onSubmit={submitFilter}>
                <Row>
                  <Col sm="4">
                    <FormGroup>
                      <Label for="year">Year Movies</Label>
                      <Input
                        type="select"
                        name="year"
                        id="year"
                        style={{ border: '1.5px solid gray' }}
                        onChange={handleFilter}
                        value={filter.year}
                      >
                        <option value=""></option>
                        {year.map((item) => {
                          return <option value={item}>{item}</option>
                        })}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <Label for="rating">Rating Movies</Label>
                      <Input
                        type="select"
                        name="rating"
                        id="rating"
                        style={{ border: '1.5px solid gray' }}
                        onChange={handleFilter}
                        value={filter.rating}
                      >
                        <option value=""></option>
                        {rating.map((item) => {
                          return <option value={item}>{item}</option>
                        })}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <Label for="duration">Duration</Label>
                      <Input
                        type="text"
                        name="duration"
                        id="duration"
                        placeholder="In Minutes"
                        min="0"
                        max="600"
                        style={{ border: '1.5px solid gray' }}
                        onChange={handleFilter}
                        value={filter.duration}
                        autoComplete="off"
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="4" style={{ display: 'flex', gap: '5px' }}>
                    <Button color="primary">Filter</Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </>
    )
  }

  const handleFilter = (event) => {
    let typeOfInput = event.target.name

    switch (typeOfInput) {
      case 'year': {
        setFilter({ ...filter, year: event.target.value || null })
        break
      }
      case 'rating': {
        setFilter({ ...filter, rating: event.target.value || null })
        break
      }
      case 'duration': {
        setFilter({ ...filter, duration: event.target.value })
        break
      }
      default: {
        break
      }
    }
  }

  const submitFilter = (e) => {
    e.preventDefault()

    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie`)
      .then((res) => {
        let resMovie = res.data.map((el) => {
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

        let filteredMovie = resMovie.filter(
          (x) =>
            (filter.year != null ? filter.year == x.year : x.year) &&
            (filter.rating != null ? filter.rating == x.rating : x.rating) &&
            (filter.duration != null
              ? filter.duration == x.duration
              : x.duration),
        )

        setMovies([...filteredMovie])
      })
  }

  const searchHandleChange = (event) => {
    setSearch(event.target.value)
  }

  let updateMovies =
    movies !== null
      ? movies.filter((movie) => {
          return movie.title.toLowerCase().includes(search.toLocaleLowerCase())
        }, [])
      : []

  return (
    <>
      <div style={{ margin: '20px 0px' }}>
        <div>
          <Filter />
        </div>
        <div>
          <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Col xs={12} md={4} lg={4}>
              <FormGroup className="form-group">
                <Input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Cari berdasarkan title movies..."
                  style={{ border: '1.5px solid gray' }}
                  value={search}
                  onChange={searchHandleChange}
                  autoComplete="off"
                />
              </FormGroup>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <FormGroup className="form-group" style={{ textAlign: 'right' }}>
                <Link to="/createMovies">
                  <Button color="primary">Create New Movies</Button>
                </Link>
              </FormGroup>
            </Col>
          </Row>
        </div>
        <div>
          <Table bordered hover>
            <thead style={{ backgroundColor: '#32325b', color: 'white' }}>
              <tr>
                <th>No</th>
                <th>Cover</th>
                <th>Title</th>
                <th width="250px">Description</th>
                <th>Year</th>
                <th>Duration</th>
                <th>Genre</th>
                <th>Rating</th>
                <th width="200px">Review</th>
                <th width="150px">Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="10" style={{ textAlign: 'center' }}>
                    Loading...
                  </td>
                </tr>
              ) : (
                (search === '' ? movies : updateMovies).map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={
                            item.image_url === null
                              ? ImageNotFound
                              : item.image_url
                          }
                          width="100px"
                          height="100px"
                          style={{ objectFit: 'cover' }}
                        />
                      </td>
                      <td>{item.title}</td>
                      <td title={item.description}>
                        {truncateString(item.description, 100)}
                      </td>
                      <td>{item.year}</td>
                      <td>{item.duration} Minutes</td>
                      <td>{item.genre}</td>
                      <td>{item.rating}/10</td>
                      <td>{truncateString(item.review, 50)}</td>
                      <td>
                        <Action itemId={item.id} />
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default List

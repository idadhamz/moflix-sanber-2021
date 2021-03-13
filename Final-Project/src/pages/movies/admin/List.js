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

import { BsArrowDown, BsArrowUp } from 'react-icons/bs'

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
  const [sort, setSort] = useState('asc')

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
          if (movie.title !== null) {
            return movie.title
              .toLowerCase()
              .includes(search.toLocaleLowerCase())
          }
        }, [])
      : []

  const sortTable = (event) => {
    let thSort = event.target.value

    const sorted = movies.sort((a, b) => {
      if (thSort == 'title') {
        if (sort == 'asc') {
          setSort('desc')
          if (a.title < b.title) {
            return -1
          }
          if (a.title > b.title) {
            return 1
          }
          return 0
        } else if (sort == 'desc') {
          setSort('asc')
          if (a.title < b.title) {
            return 1
          }
          if (a.title > b.title) {
            return -1
          }
          return 0
        }
      }

      if (thSort == 'description') {
        if (sort == 'asc') {
          setSort('desc')
          if (a.description < b.description) {
            return -1
          }
          if (a.description > b.description) {
            return 1
          }
          return 0
        } else if (sort == 'desc') {
          setSort('asc')
          if (a.description < b.description) {
            return 1
          }
          if (a.description > b.description) {
            return -1
          }
          return 0
        }
      }

      if (thSort == 'year') {
        if (sort == 'asc') {
          setSort('desc')
          return b.year - a.year
        } else if (sort == 'desc') {
          setSort('asc')
          return a.year - b.year
        }
      }

      if (thSort == 'duration') {
        if (sort == 'asc') {
          setSort('desc')
          return b.duration - a.duration
        } else if (sort == 'desc') {
          setSort('asc')
          return a.duration - b.duration
        }
      }

      if (thSort == 'genre') {
        if (sort == 'asc') {
          setSort('desc')
          if (a.genre < b.genre) {
            return -1
          }
          if (a.genre > b.genre) {
            return 1
          }
          return 0
        } else if (sort == 'desc') {
          setSort('asc')
          if (a.genre < b.genre) {
            return 1
          }
          if (a.genre > b.genre) {
            return -1
          }
          return 0
        }
      }

      if (thSort == 'rating') {
        if (sort == 'asc') {
          setSort('desc')
          return b.rating - a.rating
        } else if (sort == 'desc') {
          setSort('asc')
          return a.rating - b.rating
        }
      }

      if (thSort == 'review') {
        if (sort == 'asc') {
          setSort('desc')
          if (a.review < b.review) {
            return -1
          }
          if (a.review > b.review) {
            return 1
          }
          return 0
        } else if (sort == 'desc') {
          setSort('asc')
          if (a.review < b.review) {
            return 1
          }
          if (a.review > b.review) {
            return -1
          }
          return 0
        }
      }
    })
    setMovies([...sorted])

    console.log(movies)
  }

  const clearSort = (e) => {
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

        setMovies([...resMovie])
        setSort('asc')
      })
  }

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
            <Col
              xs={12}
              md={4}
              lg={4}
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '5px',
                justifyContent: 'flex-end',
              }}
            >
              <FormGroup className="form-group" style={{ textAlign: 'right' }}>
                <Button color="danger" onClick={clearSort}>
                  Clear Sort
                </Button>
              </FormGroup>
              <FormGroup className="form-group" style={{ textAlign: 'right' }}>
                <Link to="/createMovies">
                  <Button color="primary">Create New Movies</Button>
                </Link>
              </FormGroup>
            </Col>
          </Row>
        </div>
        <div>
          <Table responsive bordered hover>
            <thead style={{ backgroundColor: '#32325b', color: 'white' }}>
              <tr>
                <th>No</th>
                <th>Cover</th>
                <th>
                  <Button
                    onClick={sortTable}
                    style={{ cursor: 'pointer', border: 'none' }}
                    value="title"
                  >
                    Title {sort == 'asc' ? <BsArrowDown /> : <BsArrowUp />}
                  </Button>
                </th>
                <th width="200px">
                  <Button
                    onClick={sortTable}
                    style={{ cursor: 'pointer', border: 'none' }}
                    value="description"
                  >
                    Description{' '}
                    {sort == 'asc' ? <BsArrowDown /> : <BsArrowUp />}
                  </Button>
                </th>
                <th width="115px">
                  <Button
                    onClick={sortTable}
                    style={{ cursor: 'pointer', border: 'none' }}
                    value="year"
                  >
                    Year
                    {sort == 'asc' ? <BsArrowDown /> : <BsArrowUp />}
                  </Button>
                </th>
                <th width="125px">
                  <Button
                    onClick={sortTable}
                    style={{ cursor: 'pointer', border: 'none' }}
                    value="duration"
                  >
                    Duration
                    {sort == 'asc' ? <BsArrowDown /> : <BsArrowUp />}
                  </Button>
                </th>
                <th>
                  <Button
                    onClick={sortTable}
                    style={{ cursor: 'pointer', border: 'none' }}
                    value="genre"
                  >
                    Genre
                    {sort == 'asc' ? <BsArrowDown /> : <BsArrowUp />}
                  </Button>
                </th>
                <th width="115px">
                  <Button
                    onClick={sortTable}
                    style={{ cursor: 'pointer', border: 'none' }}
                    value="rating"
                  >
                    Rating
                    {sort == 'asc' ? <BsArrowDown /> : <BsArrowUp />}
                  </Button>
                </th>
                <th width="200px">
                  <Button
                    onClick={sortTable}
                    style={{ cursor: 'pointer', border: 'none' }}
                    value="review"
                  >
                    Review
                    {sort == 'asc' ? <BsArrowDown /> : <BsArrowUp />}
                  </Button>
                </th>
                <th width="200px">Action</th>
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
                          width="80px"
                          height="80px"
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

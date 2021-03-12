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
  Badge,
} from 'reactstrap'

import { Link } from 'react-router-dom'
import { AppContext } from '../../../context/AppContext'

import ImageNotFound from '../../../img/imageNotFound.png'

const List = () => {
  const [user] = useContext(AppContext)
  const [games, setGames] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState({
    genre: null,
    release: null,
  })
  const [multiPlayer, setMultiPlayer] = useState(null)
  const [genreGames, setGenreGames] = useState(null)
  const [sortDirection, setSortDirection] = useState('asc')
  const [selectedHeaderIndex, setSelectedHeaderIndex] = useState(0)

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
                platform: el.platform,
                release: el.release,
              }
            }),
          )

          setGenreGames(
            res.data.map((el) => {
              return {
                id: el.id,
                genre: el.genre,
              }
            }),
          )

          setIsLoading(false)
        })
    }
  }, [games])

  const Action = ({ itemId }) => {
    const handleDelete = () => {
      let newGames = games.filter((el) => el.id !== itemId)

      axios
        .delete(`https://backendexample.sanbersy.com/api/data-game/${itemId}`, {
          headers: { Authorization: 'Bearer ' + user.token },
        })
        .then((res) => {
          console.log(res)
          alert('Delete Games Successfully')
        })

      setGames([...newGames])
    }

    return (
      <>
        <Link to={{ pathname: `/editGames/${itemId}` }}>
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
    let release = []

    for (var i = 2021; i >= 2000; i--) {
      release.push(i)
    }

    const filteredGenre =
      genreGames !== null &&
      genreGames.filter(
        (v, i, a) => a.findIndex((t) => t.genre === v.genre) === i,
      )

    return (
      <>
        <Row>
          <Col sm="12">
            <Card body>
              <CardTitle style={{ fontWeight: 'bold' }}>Games Filter</CardTitle>
              <Form onSubmit={submitFilter}>
                <Row>
                  <Col sm="4">
                    <FormGroup>
                      <Label for="genre">Genre</Label>
                      <Input
                        type="select"
                        name="genre"
                        id="genre"
                        style={{ border: '1.5px solid gray' }}
                        onChange={handleFilter}
                        value={filter.genre}
                      >
                        <option value=""></option>
                        {genreGames !== null &&
                          filteredGenre.map((item) => {
                            return (
                              <option value={item.genre}>{item.genre}</option>
                            )
                          })}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <Label for="release">Release Year</Label>
                      <Input
                        type="select"
                        name="release"
                        id="release"
                        style={{ border: '1.5px solid gray' }}
                        onChange={handleFilter}
                        value={filter.release}
                      >
                        <option value=""></option>
                        {release.map((item) => {
                          return <option value={item}>{item}</option>
                        })}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <Label for="multiPlayer">Multi Player</Label>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          gap: '15px',
                        }}
                      >
                        <FormGroup check>
                          <Input
                            type="radio"
                            name="multiPlayer"
                            id="multiPlayer"
                            checked={multiPlayer === true}
                            value="true"
                            onClick={() => setMultiPlayer(true)}
                          />
                          <Label check for="multiPlayer">
                            Yes
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input
                            type="radio"
                            name="multiPlayer"
                            id="multiPlayer"
                            checked={multiPlayer === false}
                            value="false"
                            onClick={() => setMultiPlayer(false)}
                          />
                          <Label check for="multiPlayer">
                            No
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input
                            type="radio"
                            name="multiPlayer"
                            id="multiPlayer"
                            checked={multiPlayer === null}
                            value=""
                            onClick={() => setMultiPlayer(null)}
                          />
                          <Label check for="multiPlayer">
                            All
                          </Label>
                        </FormGroup>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
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
      case 'genre': {
        setFilter({ ...filter, genre: event.target.value || null })
        break
      }
      case 'release': {
        setFilter({ ...filter, release: event.target.value || null })
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
      .get(`https://backendexample.sanbersy.com/api/data-game`)
      .then((res) => {
        let resGames = res.data.map((el) => {
          return {
            id: el.id,
            genre: el.genre,
            image_url: el.image_url,
            singlePlayer: el.singlePlayer,
            multiplayer: el.multiplayer,
            name: el.name,
            platform: el.platform,
            release: el.release,
          }
        })

        let filteredGames = resGames.filter(
          (x) =>
            (filter.release != null
              ? filter.release == x.release
              : x.release) &&
            (filter.genre != null ? filter.genre == x.genre : x.genre) &&
            (multiPlayer != null
              ? multiPlayer == true
                ? 1 == x.multiplayer
                : 0 == x.multiplayer
              : 1 || 0 == x.multiplayer),
        )

        setGames([...filteredGames])
      })
  }

  const searchHandleChange = (event) => {
    setSearch(event.target.value)
  }

  let updateGames =
    games !== null
      ? games.filter((game) => {
          return game.name.toLowerCase().includes(search.toLocaleLowerCase())
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
                  placeholder="Cari berdasarkan name games..."
                  style={{ border: '1.5px solid gray' }}
                  value={search}
                  onChange={searchHandleChange}
                  autoComplete="off"
                />
              </FormGroup>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <FormGroup className="form-group" style={{ textAlign: 'right' }}>
                <Link to="/createGames">
                  <Button color="primary">Create New Games</Button>
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
                <th>Name</th>
                <th>Genre</th>
                <th width="150px">Platform</th>
                <th>Release</th>
                <th width="100px">Multi Player</th>
                <th width="100px">Single Player</th>
                <th width="150px">Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="9" style={{ textAlign: 'center' }}>
                    Loading...
                  </td>
                </tr>
              ) : (
                (search === '' ? games : updateGames).map((item, index) => {
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
                      <td>{item.name}</td>
                      <td>{item.genre}</td>
                      <td>{item.platform}</td>
                      <td>{item.release}</td>
                      <td>
                        {item.multiplayer === 1 ? (
                          <Badge color="primary">Yes</Badge>
                        ) : (
                          <Badge color="danger">No</Badge>
                        )}
                      </td>
                      <td>
                        {item.singlePlayer === 1 ? (
                          <Badge color="primary">Yes</Badge>
                        ) : (
                          <Badge color="danger">No</Badge>
                        )}
                      </td>
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

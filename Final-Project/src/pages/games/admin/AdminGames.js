import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {
  Row,
  Col,
  FormGroup,
  Input,
  Table,
  Button,
  Card,
  CardTitle,
  Label,
  Badge,
} from 'reactstrap'

import ImageNotFound from '../../../img/imageNotFound.png'

const AdminGames = () => {
  const [games, setGames] = useState(null)

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
        })
    }
  }, [games])

  const Action = () => {
    return (
      <>
        <Button color="warning">Edit</Button>
        &nbsp;
        <Button color="danger">Delete</Button>
      </>
    )
  }

  const Filter = () => {
    const year = [2021, 2020, 2019, 2018, 2017]
    const filteredGenre =
      games !== null &&
      games.filter((v, i, a) => a.findIndex((t) => t.genre === v.genre) === i)

    return (
      <>
        <Row>
          <Col sm="12">
            <Card body>
              <CardTitle style={{ fontWeight: 'bold' }}>Games Filter</CardTitle>
              <Row>
                <Col sm="4">
                  <FormGroup>
                    <Label for="year">Release Year</Label>
                    <Input
                      type="select"
                      name="year"
                      id="year"
                      style={{ border: '1.5px solid gray' }}
                    >
                      {year.map((item) => {
                        return <option value={item}>{item}</option>
                      })}
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="4">
                  <FormGroup>
                    <Label for="genre">Genre</Label>
                    <Input
                      type="select"
                      name="genre"
                      id="genre"
                      style={{ border: '1.5px solid gray' }}
                    >
                      {games !== null &&
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
                    <Label for="platform">Multi Player</Label>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '15px',
                      }}
                    >
                      <FormGroup check>
                        <Input type="radio" name="yes" id="yes" />
                        <Label check for="yes">
                          Yes
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="no" id="no" />
                        <Label check for="no">
                          No
                        </Label>
                      </FormGroup>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </>
    )
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
                  placeholder="Cari berdasarkan name games..."
                  style={{ border: '1.5px solid gray' }}
                />
              </FormGroup>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <FormGroup className="form-group" style={{ textAlign: 'right' }}>
                <Button color="primary">Create New Games</Button>
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
                <th>Platform</th>
                <th>Release</th>
                <th>Multi Player</th>
                <th>Single Player</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {games !== null &&
                games.map((item, index) => {
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
                        <Action />
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default AdminGames

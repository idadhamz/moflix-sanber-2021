import React, { useState, useContext, useEffect } from 'react'
import {
  Row,
  Col,
  FormGroup,
  Input,
  Card,
  CardTitle,
  Label,
  Button,
  Form,
} from 'reactstrap'

import { Link, useParams, Redirect } from 'react-router-dom'
import axios from 'axios'

import { AppContext } from '../../../context/AppContext'

const Edit = () => {
  const [user] = useContext(AppContext)
  const [input, setInput] = useState({
    name: '',
    genre: '',
    platform: '',
    release: 2021,
    image_url: '',
  })
  const [singlePlayer, setSinglePlayer] = useState(0)
  const [multiPlayer, setMultiPlayer] = useState(0)
  const [redirectTo, setRedirectTo] = useState(false)

  let { id } = useParams()

  useEffect(() => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game/${id}`)
      .then((res) => {
        setInput({
          id: res.data.id,
          name: res.data.name,
          genre: res.data.genre,
          platform: res.data.platform,
          release: res.data.release,
          image_url: res.data.image_url,
        })
        setSinglePlayer(res.data.singlePlayer)
        setMultiPlayer(res.data.multiplayer)
      })
  }, [])

  const handleChange = (event) => {
    let typeOfInput = event.target.name

    switch (typeOfInput) {
      case 'name': {
        setInput({ ...input, name: event.target.value })
        break
      }
      case 'genre': {
        setInput({ ...input, genre: event.target.value })
        break
      }
      case 'platform': {
        setInput({ ...input, platform: event.target.value })
        break
      }
      case 'release': {
        setInput({ ...input, release: event.target.value })
        break
      }
      case 'image_url': {
        setInput({ ...input, image_url: event.target.value })
        break
      }
      default: {
        break
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .put(
        `https://backendexample.sanbersy.com/api/data-game/${id}`,
        {
          name: input.name,
          genre: input.genre,
          platform: input.platform,
          release: parseInt(input.release),
          singlePlayer: singlePlayer,
          multiplayer: multiPlayer,
          image_url: input.image_url,
        },
        { headers: { Authorization: 'Bearer ' + user.token } },
      )
      .then((res) => {
        console.log(res.data)
        alert('Edit Games Successfully')

        setRedirectTo(true)
      })
  }

  if (redirectTo)
    return (
      <>
        <Redirect to="/listGames"></Redirect>
      </>
    )

  return (
    <>
      <div style={{ margin: '20px 0px' }}>
        <Row>
          <Col sm="12">
            <Card body>
              <CardTitle style={{ fontWeight: 'bold' }}>
                Form Edit Games
              </CardTitle>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col sm="8">
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        style={{ border: '1.5px solid gray' }}
                        placeholder="Name Games"
                        value={input.name}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label for="genre">Genre</Label>
                      <Input
                        type="text"
                        name="genre"
                        id="genre"
                        style={{ border: '1.5px solid gray' }}
                        placeholder="Genre Games"
                        value={input.genre}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label for="platform">Platform</Label>
                      <Input
                        type="text"
                        name="platform"
                        id="platform"
                        style={{ border: '1.5px solid gray' }}
                        placeholder="Platform Games"
                        value={input.platform}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <Label for="release">Release</Label>
                      <Input
                        type="number"
                        name="release"
                        id="release"
                        placeholder="Release Years"
                        min="1960"
                        max="2050"
                        style={{ border: '1.5px solid gray' }}
                        value={input.release}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label for="image_url">Image URL</Label>
                      <Input
                        type="text"
                        name="image_url"
                        id="image_url"
                        placeholder="Image URL Games"
                        style={{ border: '1.5px solid gray' }}
                        value={input.image_url}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label for="singlePlayer">Single Player</Label>
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
                            name="singlePlayer"
                            id="singlePlayer"
                            checked={singlePlayer === 1}
                            value="1"
                            onClick={() => setSinglePlayer(1)}
                          />
                          <Label check for="singlePlayer">
                            Yes
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input
                            type="radio"
                            name="singlePlayer"
                            id="singlePlayer"
                            checked={singlePlayer === 0}
                            value="0"
                            onClick={() => setSinglePlayer(0)}
                          />
                          <Label check for="singlePlayer">
                            No
                          </Label>
                        </FormGroup>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="6">
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
                            checked={multiPlayer === 1}
                            value="1"
                            onClick={() => setMultiPlayer(1)}
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
                            checked={multiPlayer === 0}
                            value="0"
                            onClick={() => setMultiPlayer(0)}
                          />
                          <Label check for="multiPlayer">
                            No
                          </Label>
                        </FormGroup>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4" style={{ display: 'flex', gap: '5px' }}>
                    <FormGroup className="form-group">
                      <Link to="/listGames">
                        <Button color="warning">Back</Button>
                      </Link>
                    </FormGroup>
                    <FormGroup className="form-group">
                      <Button color="primary">Submit</Button>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Edit

import React, { useState, useContext } from 'react'
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

import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import { AppContext } from '../../../context/AppContext'

const Create = () => {
  const [user] = useContext(AppContext)
  const [input, setInput] = useState({
    name: '',
    genre: '',
    platform: '',
    release: 2021,
    image_url: '',
  })
  const [singlePlayer, setSinglePlayer] = useState(false)
  const [multiPlayer, setMultiPlayer] = useState(false)
  const [redirectTo, setRedirectTo] = useState(false)

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
      .post(
        `https://backendexample.sanbersy.com/api/data-game`,
        {
          name: input.name,
          genre: input.genre,
          platform: input.platform,
          release: parseInt(input.release),
          singlePlayer: singlePlayer ? 1 : 0,
          multiplayer: multiPlayer ? 1 : 0,
          image_url: input.image_url,
        },
        { headers: { Authorization: 'Bearer ' + user.token } },
      )
      .then((res) => {
        console.log(res.data)
        alert('Create Games Successfully')

        setRedirectTo(true)
      })

    setInput({
      name: '',
      genre: '',
      platform: '',
      release: 2021,
      singlePlayer: false,
      multiplayer: false,
      image_url: '',
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
                Form Create Games
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
                      </div>
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
                            checked={singlePlayer === true}
                            value="true"
                            onClick={() => setSinglePlayer(true)}
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
                            checked={singlePlayer === false}
                            value="false"
                            onClick={() => setSinglePlayer(false)}
                          />
                          <Label check for="singlePlayer">
                            No
                          </Label>
                        </FormGroup>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="4" style={{ display: 'flex', gap: '5px' }}>
                    <FormGroup className="form-group">
                      <Link to="listGames">
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

export default Create

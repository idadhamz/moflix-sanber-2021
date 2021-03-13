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
    title: '',
    genre: '',
    year: 2021,
    duration: '',
    description: '',
    image_url: '',
    rating: '',
    review: '',
  })
  const [redirectTo, setRedirectTo] = useState(false)

  let { id } = useParams()

  useEffect(() => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie/${id}`)
      .then((res) => {
        setInput({
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
      })
  }, [])

  const handleChange = (event) => {
    let typeOfInput = event.target.name

    switch (typeOfInput) {
      case 'title': {
        setInput({ ...input, title: event.target.value })
        break
      }
      case 'genre': {
        setInput({ ...input, genre: event.target.value })
        break
      }
      case 'year': {
        setInput({ ...input, year: event.target.value })
        break
      }
      case 'duration': {
        setInput({ ...input, duration: event.target.value })
        break
      }
      case 'description': {
        setInput({ ...input, description: event.target.value })
        break
      }
      case 'image_url': {
        setInput({ ...input, image_url: event.target.value })
        break
      }
      case 'rating': {
        setInput({ ...input, rating: event.target.value })
        break
      }
      case 'review': {
        setInput({ ...input, review: event.target.value })
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
        `https://backendexample.sanbersy.com/api/data-movie/${id}`,
        {
          title: input.title,
          genre: input.genre,
          year: parseInt(input.year),
          duration: parseInt(input.duration),
          description: input.description,
          image_url: input.image_url,
          rating: parseInt(input.rating),
          review: input.review,
        },
        { headers: { Authorization: 'Bearer ' + user.token } },
      )
      .then((res) => {
        console.log(res.data)
        alert('Edit Movies Successfully')

        setRedirectTo(true)
      })
  }

  if (redirectTo)
    return (
      <>
        <Redirect to="/listMovies"></Redirect>
      </>
    )

  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <Row>
          <Col sm="12">
            <Card body>
              <CardTitle style={{ fontWeight: 'bold' }}>
                Form Edit Movies
              </CardTitle>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col sm="8">
                    <FormGroup>
                      <Label for="title">Title</Label>
                      <Input
                        type="text"
                        name="title"
                        id="title"
                        style={{ border: '1.5px solid gray' }}
                        placeholder="Title Movies"
                        value={input.title}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col sm="8">
                    <FormGroup>
                      <Label for="genre">Genre</Label>
                      <Input
                        type="text"
                        name="genre"
                        id="genre"
                        style={{ border: '1.5px solid gray' }}
                        placeholder="Genre Movies"
                        value={input.genre}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <Label for="year">Year</Label>
                      <Input
                        type="number"
                        name="year"
                        id="year"
                        placeholder="Year Movies"
                        min="1940"
                        max="2050"
                        style={{ border: '1.5px solid gray' }}
                        value={input.year}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <FormGroup>
                      <Label for="duration">Duration</Label>
                      <Input
                        type="number"
                        name="duration"
                        id="duration"
                        placeholder="In Minutes"
                        min="0"
                        max="600"
                        style={{ border: '1.5px solid gray' }}
                        value={input.duration}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="8">
                    <FormGroup>
                      <Label for="description">Description</Label>
                      <Input
                        type="textarea"
                        name="description"
                        id="description"
                        placeholder="Description Movies"
                        style={{ border: '1.5px solid gray' }}
                        value={input.description}
                        onChange={handleChange}
                        autoComplete="off"
                        colspan="5"
                        required
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label for="image_url">Image URL</Label>
                      <Input
                        type="text"
                        name="image_url"
                        id="image_url"
                        placeholder="Image URL Movies"
                        style={{ border: '1.5px solid gray' }}
                        value={input.image_url}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="2">
                    <FormGroup>
                      <Label for="rating">Rating</Label>
                      <Input
                        type="number"
                        name="rating"
                        id="rating"
                        placeholder="Rating Movies"
                        style={{ border: '1.5px solid gray' }}
                        value={input.rating}
                        onChange={handleChange}
                        min="0"
                        max="10"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="8">
                    <FormGroup>
                      <Label for="review">Review</Label>
                      <Input
                        type="textarea"
                        name="review"
                        id="review"
                        style={{ border: '1.5px solid gray' }}
                        placeholder="Review Movies"
                        value={input.review}
                        onChange={handleChange}
                        autoComplete="off"
                        colspan="5"
                        required
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col sm="4"></Col>
                  <Col sm="4" style={{ display: 'flex', gap: '5px' }}>
                    <FormGroup className="form-group">
                      <Link to="/listMovies">
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

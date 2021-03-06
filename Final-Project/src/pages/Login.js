import React, { useContext, useState } from 'react'
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap'
import './Login.css'
import axios from 'axios'

import vectorMovie from '../img/vectorMovie.jpg'
import { AppContext } from '../context/AppContext'

const Login = () => {
  const [, setUser] = useContext(AppContext)
  const [input, setInput] = useState({ email: '', password: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('https://backendexample.sanbersy.com/api/user-login', {
        email: input.email,
        password: input.password,
      })
      .then((res) => {
        var user = res.data.user
        var token = res.data.token
        var currentUser = { name: user.name, email: user.email, token }
        setUser(currentUser)
        localStorage.setItem('user', JSON.stringify(currentUser))

        alert('Login Berhasil')
      })
      .catch((err) => {
        alert(err)
      })
  }

  const handleChange = (event) => {
    let value = event.target.value
    let name = event.target.name
    switch (name) {
      case 'email': {
        setInput({ ...input, email: value })
        break
      }
      case 'password': {
        setInput({ ...input, password: value })
        break
      }
      default: {
        break
      }
    }
  }

  return (
    <>
      <div className="div-login">
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div>
              <p className="p-masuk-akun">Masuk Akun Anda</p>
            </div>
            <div className="div-form-login">
              <Form onSubmit={handleSubmit}>
                <FormGroup className="form-group">
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={input.email}
                    required
                  />
                  <FormText color="muted">
                    Gunakan alamat email aktif Anda
                  </FormText>
                </FormGroup>
                <FormGroup className="form-group">
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    value={input.password}
                    required
                  />
                </FormGroup>
                <FormGroup className="form-group" row>
                  <Button
                    style={{
                      backgroundColor: '#32325B',
                      color: 'white',
                      padding: '10px 15px',
                      border: 'none',
                    }}
                  >
                    Masuk
                  </Button>
                </FormGroup>
              </Form>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                verticalAlign: 'middle',

                height: '100%',
              }}
            >
              <img
                src={vectorMovie}
                style={{
                  width: '500px',
                  height: '300px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                }}
                alt="img-header"
              ></img>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Login

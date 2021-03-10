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
import './Register.css'
import axios from 'axios'

import { AppContext } from '../context/AppContext'

import vectorMovie from '../img/vectorMovie.jpg'

const Register = () => {
  const [, setUser] = useContext(AppContext)
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post(`https://backendexample.sanbersy.com/api/register`, {
        name: input.name,
        email: input.email,
        password: input.password,
      })
      .then((res) => {
        var user = res.data.user
        var token = res.data.token
        var currentUser = { name: user.name, email: user.email, token }
        setUser(currentUser)
        localStorage.setItem('user', JSON.stringify(currentUser))

        alert('Register Berhasil')
      })
      .catch((err) => {
        alert(err)
      })
  }

  const handleChange = (event) => {
    let value = event.target.value
    let name = event.target.name
    switch (name) {
      case 'name': {
        setInput({ ...input, name: value })
        break
      }
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
      <div className="div-register">
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div>
              <p className="p-masuk-akun">Daftarkan Akun Anda</p>
            </div>
            <div className="div-form-register">
              <Form onSubmit={handleSubmit}>
                <FormGroup className="form-group">
                  <Label for="name">Nama Lengkap</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={input.name}
                    required
                  />
                  <FormText color="muted">
                    Masukkan nama asli Anda, nama akan digunakan pada profile
                    sistem.
                  </FormText>
                </FormGroup>
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
                    Lanjut
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

export default Register

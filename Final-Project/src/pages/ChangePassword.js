import React, { useContext, useState } from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import './Register.css'
import axios from 'axios'

import { AppContext } from '../context/AppContext'

import changePassword from '../img/changePassword.jpg'

const ChangePassword = () => {
  const [user, setUser] = useContext(AppContext)
  const [input, setInput] = useState({
    current_password: '',
    new_password: '',
    new_confirm_password: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post(
        `https://backendexample.sanbersy.com/api/change-password`,
        {
          current_password: input.current_password,
          new_password: input.new_password,
          new_confirm_password: input.new_confirm_password,
        },
        { headers: { Authorization: 'Bearer ' + user.token } },
      )
      .then((res) => {
        var data = res.data
        setUser({ ...user, password: data.password })

        alert('Register Berhasil')

        setInput({
          current_password: '',
          new_password: '',
          new_confirm_password: '',
        })
      })
      .catch((err) => {
        alert(err)
      })
  }

  const handleChange = (event) => {
    let value = event.target.value
    let name = event.target.name
    switch (name) {
      case 'current_password': {
        setInput({ ...input, current_password: value })
        break
      }
      case 'new_password': {
        setInput({ ...input, new_password: value })
        break
      }
      case 'new_confirm_password': {
        setInput({ ...input, new_confirm_password: value })
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
              <p className="p-masuk-akun">Ubah Password Anda</p>
            </div>
            <div className="div-form-register">
              <Form onSubmit={handleSubmit}>
                <FormGroup className="form-group">
                  <Label for="current_password">Current Password</Label>
                  <Input
                    type="password"
                    name="current_password"
                    id="current_password"
                    onChange={handleChange}
                    value={input.current_password}
                    required
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Label for="new_password">New Password</Label>
                  <Input
                    type="password"
                    name="new_password"
                    id="new_password"
                    onChange={handleChange}
                    value={input.new_password}
                    required
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Label for="new_confirm_password">New Confirm Password</Label>
                  <Input
                    type="password"
                    name="new_confirm_password"
                    id="new_confirm_password"
                    onChange={handleChange}
                    value={input.new_confirm_password}
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
                    Submit
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
                src={changePassword}
                style={{
                  width: '400px',
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

export default ChangePassword

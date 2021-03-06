import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { AppContext } from '../../AppContext'

import './Login.css'

const Login = () => {
  const { isLoggedState } = useContext(AppContext)
  const [isLogged, setIsLogged] = isLoggedState

  const [redirect, setRedirect] = useState(false)

  const [account, setAccount] = useState({
    username: '',
    password: '',
  })

  const handleChange = (event) => {
    let nameInput = event.target.name

    switch (nameInput) {
      case 'username': {
        setAccount({
          ...account,
          username: event.target.value,
        })
        break
      }
      case 'password': {
        setAccount({
          ...account,
          password: event.target.value,
        })
        break
      }
      default: {
        break
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let username = account.username
    let password = account.password

    if (username === 'admin' && password === 'admin') {
      setIsLogged(true)
      setRedirect(true)
    } else {
      alert('Username dan password salah')
    }
  }

  if (redirect) return <Redirect to="/" />
  return (
    <div style={{ padding: '30px' }}>
      <section className="section_login">
        <div>
          <h1>Login</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              value={account.username}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              value={account.password}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label></label>
            <button className="buttonLogin">Login</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login

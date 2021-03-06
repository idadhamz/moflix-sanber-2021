import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../AppContext'

import './Nav.css'

import logo from '../assets/images/logo.png'

const Nav = () => {
  const { isLoggedState } = useContext(AppContext)
  const [isLogged, setIsLogged] = isLoggedState

  const handleLogout = () => {
    if (isLogged === true) {
      setIsLogged(false)
    }
  }

  return (
    <header>
      <img id="logo" src={logo} width="200px" />
      <nav>
        <ul>
          <li>
            <Link to="/home" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/booksList"
              className="link"
              style={{ display: isLogged ? 'block' : 'none' }}
            >
              Books List Editor
            </Link>
          </li>
          <li>
            {isLogged ? (
              <Link to="/login" className="link" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link to="/login" className="link">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav

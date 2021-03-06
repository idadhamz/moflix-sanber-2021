import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

import logo from '../assets/images/logo.png'

const Nav = () => {
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
            <Link to="/booksList" className="link">
              Books List Editor
            </Link>
          </li>
          <li>
            <Link to="/login" className="link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav

import React from 'react'
import './css/Header.css'

import MovflixLogo from '../img/Movflix.png'

import { Link } from 'react-router-dom'
import { Button } from 'antd'

const Header = () => {
  return (
    <>
      <header>
        <a href={'/'}>
          <img src={MovflixLogo} className="img-header" alt="img-header"></img>
        </a>
        <nav>
          <ul>
            <div>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/movies" className="link">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/games" className="link">
                  Games
                </Link>
              </li>
            </div>
            <Button className="btn-login">Login</Button>
            <Button className="btn-register">Register</Button>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header

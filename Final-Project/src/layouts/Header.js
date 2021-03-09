import React from 'react'
import './css/Header.css'

import MovflixLogo from '../img/Movflix.png'

import { Link, useLocation } from 'react-router-dom'
import { Button } from 'antd'

const Header = () => {
  let location = useLocation()

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
                <Link
                  exact
                  to="/"
                  className={location.pathname === '/' ? 'link active' : 'link'}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  className={
                    location.pathname === '/movies' ? 'link active' : 'link'
                  }
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/games"
                  className={
                    location.pathname === '/games' ? 'link active' : 'link'
                  }
                >
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

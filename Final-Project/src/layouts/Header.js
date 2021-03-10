import React, { useContext } from 'react'
import './css/Header.css'

import MovflixLogo from '../img/Movflix.png'
import { AppContext } from '../context/AppContext'

import { Link, useLocation } from 'react-router-dom'
import { Button } from 'antd'

const Header = () => {
  const [user] = useContext(AppContext)

  let location = useLocation()

  return (
    <>
      <header>
        <a href={'/'}>
          <img src={MovflixLogo} className="img-header" alt="img-header"></img>
        </a>
        <nav>
          <ul>
            <div style={{ margin: user ? '0px' : '0 10px' }}>
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
            {user ? (
              <></>
            ) : (
              <>
                <Link to="/login" className="btn-login">
                  <Button
                    style={{
                      border: '0',
                      backgroundColor: 'transparent',
                    }}
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register" className="btn-register">
                  <Button
                    style={{
                      border: '0',
                      backgroundColor: 'transparent',
                      color: 'white',
                    }}
                  >
                    Register
                  </Button>
                </Link>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header

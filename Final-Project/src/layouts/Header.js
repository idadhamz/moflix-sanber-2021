import React, { useContext } from 'react'
import './css/Header.css'

import MovflixLogo from '../img/Movflix.png'
import { AppContext } from '../context/AppContext'

import { Link, useLocation } from 'react-router-dom'
import { Button } from 'antd'

import { BsFillHouseDoorFill, BsFilm } from 'react-icons/bs'
import { CgGames } from 'react-icons/cg'
import { FiLogIn } from 'react-icons/fi'
import { IoCreate } from 'react-icons/io5'

const Header = () => {
  const [user] = useContext(AppContext)

  let location = useLocation()

  return (
    <>
      <header>
        <Link to="/">
          <img src={MovflixLogo} className="img-header" alt="img-header"></img>
        </Link>
        <nav>
          <ul>
            <div style={{ margin: user ? '0px' : '0 10px' }}>
              <li>
                <Link
                  exact
                  to="/"
                  className={location.pathname === '/' ? 'link active' : 'link'}
                >
                  <BsFillHouseDoorFill /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  className={
                    location.pathname === '/movies' ? 'link active' : 'link'
                  }
                >
                  <BsFilm /> Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/games"
                  className={
                    location.pathname === '/games' ? 'link active' : 'link'
                  }
                >
                  <CgGames /> Games
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
                    <FiLogIn style={{ marginRight: '5px' }} />
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
                    <IoCreate style={{ marginRight: '5px' }} /> Register
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

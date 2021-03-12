import React, { useContext } from 'react'
import './css/Sidebar.css'

import { Link, useLocation } from 'react-router-dom'
import { Row, Col } from 'antd'
import { AppContext } from '../context/AppContext'

const Sidebar = () => {
  const [user, setUser] = useContext(AppContext)
  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')

    alert('Logout Berhasil')
  }

  let location = useLocation()

  return (
    <>
      <div className="div-sidebar">
        <Row>
          <Col span={24} style={{ padding: '10px 25px' }}>
            <div className="div-content-sidebar">
              <nav>
                <ul>
                  <li>
                    <div
                      style={{
                        borderBottom: '1px solid #32325B',
                        padding: '10px 0',
                      }}
                    >
                      <h2
                        style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          color: 'black',
                        }}
                      >
                        Hi, {user.name}
                      </h2>
                    </div>
                  </li>
                  <li>
                    <Link
                      to="/listMovies"
                      className={
                        location.pathname === '/listMovies'
                          ? 'link active'
                          : 'link'
                      }
                    >
                      Setting Movies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/listGames"
                      className={
                        location.pathname === '/listGames'
                          ? 'link active'
                          : 'link'
                      }
                    >
                      Setting Games
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/changePassword"
                      className={
                        location.pathname === '/changePassword'
                          ? 'link active'
                          : 'link'
                      }
                    >
                      Change Password
                    </Link>
                  </li>
                  <li>
                    <a
                      style={{ cursor: 'pointer' }}
                      onClick={handleLogout}
                      className="link"
                    >
                      Logout{' '}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Sidebar

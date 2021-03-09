import React from 'react'
import './css/Sidebar.css'

import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'

const Sidebar = () => {
  return (
    <>
      <div className="div-sidebar">
        <Row>
          <Col span={24} style={{ padding: '10px 25px' }}>
            <div className="div-content-sidebar">
              <nav>
                <ul>
                  <li>
                    <Link to="/" className="link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/dataMovies" className="link">
                      Data Movies
                    </Link>
                  </li>
                  <li>
                    <Link to="/dataGames" className="link">
                      Data Games
                    </Link>
                  </li>
                  <li>
                    <a
                      style={{ cursor: 'pointer' }}
                      onClick=""
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

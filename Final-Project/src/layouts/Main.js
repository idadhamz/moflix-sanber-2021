import React, { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { AppContext } from '../context/AppContext'

import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Section from './Section'

const Main = () => {
  const [user] = useContext(AppContext)

  return (
    <>
      <Router>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Header />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
            }}
          >
            {user && <Sidebar />}
            <Section />
          </div>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default Main

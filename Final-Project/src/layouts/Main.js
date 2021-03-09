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
        <Header />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {user && <Sidebar />}
          <Section />
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default Main

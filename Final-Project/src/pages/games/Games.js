import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col } from 'reactstrap'

class Games extends Component {
  render() {
    return (
      <>
        <div style={{ margin: '20px 0' }}>
          <h1 style={{ fontSize: '24px' }}>Hot Games</h1>
        </div>
      </>
    )
  }
}

export default Games

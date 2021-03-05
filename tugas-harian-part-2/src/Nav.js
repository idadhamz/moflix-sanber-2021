import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

import { AppContext } from './AppContext'

const Nav = () => {
  const { colorThemeState } = useContext(AppContext)
  const [colorTheme, setColorTheme] = colorThemeState

  return (
    <>
      <ul style={{ backgroundColor: colorTheme }}>
        <li>
          <Link to="/tugas9" className="link">
            Tugas 9
          </Link>
        </li>
        <li>
          <Link to="/tugas10" className="link">
            Tugas 10
          </Link>
        </li>
        <li>
          <Link to="/tugas11" className="link">
            Tugas 11
          </Link>
        </li>
        <li>
          <Link to="/tugas12" className="link">
            Tugas 12
          </Link>
        </li>
        <li>
          <Link to="/tugas13" className="link">
            Tugas 13
          </Link>
        </li>
        <li>
          <Link to="/tugas14" className="link">
            Tugas 14
          </Link>
        </li>
        <li>
          <Link to="/tugas15" className="link">
            Tugas 15
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Nav

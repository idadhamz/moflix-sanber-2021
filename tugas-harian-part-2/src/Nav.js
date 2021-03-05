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
          <Link to="/tugas9" className={'link' + (colorTheme ? 'color' : '')}>
            Tugas 9
          </Link>
        </li>
        <li>
          <Link to="/tugas10" className={'link' + (colorTheme ? 'color' : '')}>
            Tugas 10
          </Link>
        </li>
        <li>
          <Link to="/tugas11" className={'link' + (colorTheme ? 'color' : '')}>
            Tugas 11
          </Link>
        </li>
        <li>
          <Link to="/tugas12" className={'link' + (colorTheme ? 'color' : '')}>
            Tugas 12
          </Link>
        </li>
        <li>
          <Link to="/tugas13" className={'link' + (colorTheme ? 'color' : '')}>
            Tugas 13
          </Link>
        </li>
        <li>
          <Link to="/tugas14" className={'link' + (colorTheme ? 'color' : '')}>
            Tugas 14
          </Link>
        </li>
        <li>
          <Link to="/tugas15" className={'link' + (colorTheme ? 'color' : '')}>
            Tugas 15
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Nav

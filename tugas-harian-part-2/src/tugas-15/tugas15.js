import React, { useContext } from 'react'
import './tugas15.css'

import { AppContext } from '../AppContext'

const Tugas15 = () => {
  const { colorThemeState } = useContext(AppContext)
  const [colorTheme, setColorTheme] = colorThemeState

  const handleChangeTheme = () => {
    if (colorTheme === null) {
      setColorTheme('#000000')
    } else {
      setColorTheme(null)
    }
  }

  return (
    <>
      <div className="div-tugas15">
        {colorTheme === null ? (
          <button className="btn-tugas15" onClick={handleChangeTheme}>
            Change Navbar to Dark Theme
          </button>
        ) : (
          <button className="btn-tugas15" onClick={handleChangeTheme}>
            Back to Blue Theme
          </button>
        )}
      </div>
    </>
  )
}

export default Tugas15

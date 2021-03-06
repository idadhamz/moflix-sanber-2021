import React, { useState, createContext } from 'react'

// import DataBuahHarga from './data/dataHargaBuah'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [colorTheme, setColorTheme] = useState(null)

  const valueState = {
    colorThemeState: [colorTheme, setColorTheme],
  }

  return (
    <AppContext.Provider value={valueState}>
      {props.children}
    </AppContext.Provider>
  )
}

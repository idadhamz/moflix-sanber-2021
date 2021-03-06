import React, { useState, createContext } from 'react'

// import DataBuahHarga from './data/dataHargaBuah'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [isLogged, setIsLogged] = useState(null)

  const valueState = {
    isLoggedState: [isLogged, setIsLogged],
  }

  return (
    <AppContext.Provider value={valueState}>
      {props.children}
    </AppContext.Provider>
  )
}

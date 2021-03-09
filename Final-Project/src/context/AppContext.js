import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [user, setUser] = useState(null)

  return (
    <AppContext.Provider value={[user, setUser]}>
      {props.children}
    </AppContext.Provider>
  )
}

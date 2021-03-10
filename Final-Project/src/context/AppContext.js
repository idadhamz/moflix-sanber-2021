import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const currentUser = JSON.parse(localStorage.getItem('user'))
  const initiateUser = currentUser ? currentUser : null
  const [user, setUser] = useState(initiateUser)

  return (
    <AppContext.Provider value={[user, setUser]}>
      {props.children}
    </AppContext.Provider>
  )
}

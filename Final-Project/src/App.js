import React from 'react'
import Main from './layouts/Main'
import './App.css'

import { AppProvider } from './context/AppContext'

function App() {
  return (
    <>
      <AppProvider>
        <Main />
      </AppProvider>
    </>
  )
}

export default App

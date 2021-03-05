import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import { AppProvider } from './AppContext'
import Nav from './Nav'
import Routes from './Routes'

function App() {
  return (
    <AppProvider>
      <Router>
        <Nav />
        <div className="App">
          <Routes />
        </div>
      </Router>
    </AppProvider>
  )
}

export default App

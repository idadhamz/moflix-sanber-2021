import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import { AppProvider } from './AppContext'

import Nav from './components/Nav'
import Routes from './components/Routes'
import Footer from './components/Footer'

function App() {
  return (
    <AppProvider>
      <Router>
        <Nav />
        <div className="App">
          <Routes />
        </div>
        <Footer />
      </Router>
    </AppProvider>
  )
}

export default App

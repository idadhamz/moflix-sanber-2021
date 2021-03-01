import './App.css'

import Tugas9 from './tugas-9/tugas9'
import Tugas10 from './tugas-10/tugas10'
import Tugas11 from './tugas-11/tugas11'

function App() {
  return (
    <div>
      <div className="App">
        <Tugas9 />
        <Tugas10 />
      </div>
      <Tugas11 start={100} />
    </div>
  )
}

export default App

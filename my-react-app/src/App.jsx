import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class = "middlegorund">
      <div class="foreground">
        <div class="file_drop_location">

            <button class="dropPoint">Choose your files..</button>
        </div>
      </div>
      <h1>Merge File:</h1>
      <button class="merge">merge</button>
    </div>
  )
}

export default App

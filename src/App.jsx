import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      Wondering if you should leave your recruiter before they ghost you?
      </h1>
    </div>
  )
}

export default App
import { useState } from 'react'
import './App.css'
import Button from './components/elements/Button'
import Header from './components/elements/Header'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'

function App() {

  return (
    <div className="App">  <Header />
      <h1 className="text-3xl">
      Wondering if you should leave your recruiter before they ghost you?
      </h1> <Button className=' w-2/3'> Take our short assessment</Button>
    </div>
  )
}

export default App

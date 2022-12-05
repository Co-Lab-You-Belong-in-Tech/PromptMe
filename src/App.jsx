import { useState } from 'react'
import './App.css'
import Button from './components/elements/Button'
import Header from './components/elements/Header'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'

function App() {

  return (
    <div className="App">  <Header />
    <div className="text-3xl flex flex-col items-center justify-center h-screen w-screen">
      <h1>
      Wondering if you should leave your recruiter before they ghost you?
      </h1> <Button className='w-1/4 py-4 m-8'> Take our short assessment</Button>
      </div>
    </div>

  )
}

export default App

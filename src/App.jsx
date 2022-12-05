import { useState } from 'react'
import './App.css'
import Button from './components/elements/Button'
import Header from './components/elements/Header'

function App() {

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        <Header />
      Wondering if you should leave your recruiter before they ghost you?
      <Button> Take our short assessment</Button>
      </h1>
    </div>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import Navbar from './components/shared-components/navbar'
import StickyFooter from "./components/shared-components/stickyFooter"

function App() {

  return (
    <div className="App">
      <Navbar />
      <StickyFooter/>
    </div>
  )
}

export default App

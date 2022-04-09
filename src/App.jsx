import { useState } from 'react'

import './App.css'
import Navbar from './components/shared-components/Navbar/navbar'
import StickyFooter from "./components/shared-components/Footer/stickyFooter"

function App() {

  return (
    <div className="App">
      <Navbar />
      <StickyFooter/>
    </div>
  )
}

export default App

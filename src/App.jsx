<<<<<<< HEAD


import './App.css'
import Page1 from './pages/Page1'

function App() {
  

  return (
    <div className="App">
     <Page1/>
=======
import { useState } from 'react'

import './App.css'
import Navbar from './components/shared-components/navbar'
import StickyFooter from "./components/shared-components/stickyFooter"

function App() {

  return (
    <div className="App">
      <Navbar />
      <StickyFooter/>
>>>>>>> main
    </div>
  )
}

export default App

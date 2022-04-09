import { useState } from 'react'
import logo from './assets/images/logo.svg'
import './App.css'
import Cards from './components/Cards'
import CardsLecture from './components/CardsLecture'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Cards />
      <CardsLecture/>
      
    </div>
  )
}

export default App

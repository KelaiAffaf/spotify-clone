
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Page1 from './pages/Page1'
import Login from './pages/login'

function App() {
  

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1/>} /> 
          <Route path='/log-in' element={<Login/>} />
          <Route path='/sign-up' />
        </Routes>
      </BrowserRouter>
  )
}

export default App;

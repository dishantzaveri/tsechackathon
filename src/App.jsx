import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { NavBar } from './components/NavBar'

const App = () => {
  return (
    <>
      <Router>
      <NavBar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

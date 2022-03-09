import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { NavBar } from './components/NavBar'
import { LoginDoctor } from './pages/LoginDoctor'
import { LoginFamily } from './pages/LoginFamily'

const App = () => {
  return (
    <>
      <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login/doctor' element={<LoginDoctor />} />
          <Route path='/login/family' element={<LoginFamily />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

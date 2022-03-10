import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DocHome } from './pages/DocHome'
import { Login } from './pages/Login'
import { LoginDoctor } from './pages/LoginDoctor'
import { LoginFamily } from './pages/LoginFamily'
import { FamHome } from './pages/FamHome'
import { Memories } from './pages/Memories'

const App = () => {
  return (
    <>
      <Router>
      {/* <NavBar /> */}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/doc/home' element={<DocHome />} />
          <Route path='/fam/home' element={<FamHome />} />
          <Route path='/fam/memories' element={<Memories />} />
          <Route path='/login/doctor' element={<LoginDoctor />} />
          <Route path='/login/family' element={<LoginFamily />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

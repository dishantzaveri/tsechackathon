import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from '../utils/icons/Group 1.png'
import { GlobalContext } from '../context/GlobalContext'

export const NavBar = () => {
  const { login, setLogin } = useContext(GlobalContext)
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('login')
    setLogin('')
    navigate('/')
  }
  return (
    <div className='flex justify-between items-center h-16 px-32'>
      <Link to='/home'>
        <img className='h-12' src={image} />
      </Link>
      <div className='flex'>
        {(login === 'family') && <Link className='mr-24 text-lg' to='/fam/memories'>Memories</Link>}
        <h1 className='text-red-500 cursor-pointer text-lg' onClick={handleLogout}>Logout</h1>
      </div>
    </div>
  )
}

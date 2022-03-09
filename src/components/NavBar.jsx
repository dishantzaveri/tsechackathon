import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
      <Link to='/home'>Home</Link>
      <Link to='/'>Login</Link>
      <Link to='/signup'>Signup</Link>
    </div>
  )
}

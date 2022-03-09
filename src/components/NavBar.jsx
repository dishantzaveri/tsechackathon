import React from 'react'
import { Link } from 'react-router-dom'
import image from '../utils/icons/Group 1.png'

export const NavBar = () => {
  return (
    <div className='flex justify-between items-center h-16 px-32'>
      <Link to='/home'>
        <img className='h-12' src={image}></img>  
      </Link>
      <div className=''>
        <Link className='mr-24' to='/fam/memories'>Memories</Link>
        <Link className='mr-24' to='/'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  )
}

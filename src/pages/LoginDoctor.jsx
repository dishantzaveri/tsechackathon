import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Logo from '../utils/icons/Group 1.png'
import { GlobalContext } from '../context/GlobalContext';

export const LoginDoctor = () => {
  const { setLogin } = useContext(GlobalContext)
  let navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const handleClick = () => {
    setLogin('doctor')
    localStorage.setItem('login', 'doctor')
    navigate('/doc/home')
    // let data = JSON.stringify({
    //   "email": email,
    //   "password": password,
    // });
  
    // let config = {
    //   method: 'post',
    //   url: 'https://findmyplug.herokuapp.com/login/',
    //   headers: { 
    //       'Content-Type': 'application/json'
    //   },
    //   data : data
    // };
    // axios(config)
    // .then((response) => {
    //   console.log(response);
    //   localStorage.setItem('token', JSON.stringify(response.data.token))
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className='w-[40vw] flex flex-col justify-center items-center gap-12'>
        <img src={Logo} />
        <h1 className='text-4xl font-semibold'>Login as a Doctor</h1>
        <input className='px-6 py-4 border-2 border-gray-900 text-lg rounded-xl w-full' placeholder='Enter Patient Name' type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <div className='w-full'>
          <input className='px-6 py-4 border-2 border-gray-900 text-lg rounded-xl w-full' placeholder='Enter Patient Code' type={showPassword ? "text" : 'password'} value={password} onChange={e => setPassword(e.target.value)} /> 
          {showPassword ? <VisibilityOffIcon onClick={e => setShowPassword(!showPassword)} className='ml-[-40px]' /> : <VisibilityIcon onClick={e => setShowPassword(!showPassword)} className='ml-[-40px]' />}
        </div>
        <button onClick={handleClick} className='px-8 py-3 bg-[#3BCBFF] shadow-xl hover:shadow-2xl rounded-xl'>Login</button>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const handleClick = () => {
    let data = JSON.stringify({
      "email": email,
      "password": password,
    });
  
    let config = {
      method: 'post',
      url: 'https://findmyplug.herokuapp.com/login/',
      headers: { 
          'Content-Type': 'application/json'
      },
      data : data
    };
    axios(config)
    .then((response) => {
      console.log(response);
      localStorage.setItem('token', JSON.stringify(response.data.token))
    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center gap-4">
      <h1 className='text-2xl font-bold'>Login</h1>
      <input placeholder='Enter Email' type="text" value={email} onChange={e => setEmail(e.target.value)} />
      <div>
        <input placeholder='Enter Password' type={showPassword ? "text" : 'password'} value={password} onChange={e => setPassword(e.target.value)} /> 
        <div onClick={e => setShowPassword(!showPassword)}>
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </div>
      </div>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

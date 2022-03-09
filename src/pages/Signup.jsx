import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

export const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  
  const handleClick = () => {
    let data = JSON.stringify({
      "email": email,
      "password": password,
      "phone": 9320423965,
      "pincode": 400703
    });
  
    let config = {
      method: 'post',
      url: 'https://findmyplug.herokuapp.com/register/',
      headers: { 
          'Content-Type': 'application/json'
      },
      data : data
    };
    axios(config)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center gap-4">
      <h1 className='text-2xl font-bold'>Sign Up</h1>
      <input placeholder='Enter Name' type="text" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder='Enter Email' type="text" value={email} onChange={e => setEmail(e.target.value)} />
      <div>
        <input placeholder='Enter Password' type={showPassword ? "text" : 'password'} value={password} onChange={e => setPassword(e.target.value)} />
        <div onClick={e => setShowPassword(!showPassword)}>
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </div>
      </div>
      <button onClick={handleClick}>Signup</button>
    </div>
  )
}

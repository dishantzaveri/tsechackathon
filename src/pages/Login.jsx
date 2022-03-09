import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Doctor from '../utils/icons/doctor.png'
import Family from '../utils/icons/family.png'
import Logo from '../utils/icons/Group 1.png'

export const Login = () => {
  const navigate = useNavigate()
  const login = localStorage.getItem('login')
  useEffect(() => {
    (login === 'family' ? navigate('/fam/home') : (login === 'doctor') && navigate('/doc/home'))
  }, [login])
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-[100vh]">
      <img className='h-24' src={Logo} />
      <h1 className='text-4xl mb-16'>Who are you?</h1>
      <div className='flex justify-center items-center gap-24'>
        <Link to='/login/doctor'>
          <div className="flex flex-col justify-between items-center bg-[#3BCBFF] px-4 py-16 h-80 w-64 text-3xl text-grey-800 rounded-xl font-semibold shadow-xl hover:shadow-2xl">
            <img className='rounded-full w-32' src={Doctor} />
            <h1>
              Doctor
            </h1>
          </div>
        </Link>
        <Link to='/login/family'>
          <div className="flex flex-col justify-between items-center bg-[#3BCBFF] px-4 py-16 h-80 w-64 text-3xl text-grey-800 rounded-xl font-semibold shadow-xl hover:shadow-2xl">
            <img className='rounded-full w-32' src={Family} />
            <h1>
              Family
            </h1>
          </div>
        </Link>
      </div>
    </div>
  )
}

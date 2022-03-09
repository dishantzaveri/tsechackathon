import { Link } from 'react-router-dom'
import { ButtonCounter } from '../components/ButtonCounter'

export const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-24 h-[100vh]">
      <h1 className='text-6xl font-bold'>Choose the way to login</h1>
      <div className='flex justify-center items-center gap-6'>
        <Link to='/login/doctor'>
          <div className="bg-[#3BCBFF] px-4 py-4 text-5xl text-grey-800 rounded-xl font-semibold shadow-xl">
            <h1>
              Doctor
            </h1>
          </div>
        </Link>
        <Link to='/login/family'>
          <div className="bg-[#3BCBFF] px-4 py-4 text-5xl text-grey-800 rounded-xl font-semibold shadow-xl">
            <h1>
              Family
            </h1>
          </div>
        </Link>
      </div>
    </div>
  )
}

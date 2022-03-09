import { Link } from 'react-router-dom'
import { ButtonCounter } from '../components/ButtonCounter'
import logo from '../utils/icons/logo.svg'

export const Home = () => {
  return (
    <div className="flex justify-center items-center gap-6 h-[100vh]">
      <Link to='/login/doctor'>
        <div className="bg-blue-200 px-4 py-4 text-5xl text-grey-800 rounded-xl font-semibold">
          <h1>
            Doctor
          </h1>
            
        </div>
      </Link>
      <Link to='/login/family'>
        <div className="bg-blue-200 px-4 py-4 text-5xl text-grey-800 rounded-xl font-semibold">
          <h1>
            Family
          </h1>
        </div>
      </Link>
    </div>
  )
}

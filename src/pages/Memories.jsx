import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { InfoCard } from '../components/InfoCard'
import { NavBar } from '../components/NavBar'

export const Memories = () => {
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-2">
        <div>
        </div>  
        <div className='w-full px-12 py-6 flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center px-12 mt-8 w-full'>
            <h1 className="text-4xl font-semibold">Blogs</h1>
            <div className='w-[80%] mt-6'>
              <Carousel className='h-[450px]'>
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

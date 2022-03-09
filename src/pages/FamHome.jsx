import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Carousel from 'react-material-ui-carousel';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { InfoCard } from '../components/InfoCard';

const data = [
  {
    name: '1',
    uv: 300,
    pv: 0,
    amt: "Jan",
  },
  {
    name: '2',
    uv: 300,
    pv: 0,
    amt: "Feb",
  },
  {
    name: '3',
    uv: 200,
    pv: 0,
    amt: "Mar",
  },
  {
    name: '4',
    uv: 278,
    pv: 200,
    amt: "Apr",
  },
  {
    name: '5',
    uv: 189,
    pv: 100,
    amt: "May",
  },
  {
    name: '6',
    uv: 239,
    pv: 200,
    amt: "June",
  },
  {
    name: '7',
    uv: 349,
    pv: 200,
    amt: "July",
  },
  {
    name: '8',
    uv: 349,
    pv: 0,
    amt: "August",
  },
  {
    name: '9',
    uv: 349,
    pv: 430,
    amt: "Sept",
  },
  {
    name: '10',
    uv: 349,
    pv: 430,
    amt: "Oct",
  },
  {
    name: '11',
    uv: 349,
    pv: 430,
    amt: "Nov",
  },
  {
    name: '12',
    uv: 349,
    pv: 430,
    amt: "Dec",
  },
]

export const FamHome = () => {
  
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-5'>
        <div className='w-full px-12 py-8 flex flex-col justify-center items-center'>
          <h1 className="text-4xl font-semibold">
            Progress
          </h1>
          <div className='w-[70%]'>
            <div className="rounded-xl px-8 py-4 bg-[#3BCBFF] w-full mt-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold">Puzzles</h1>
                <h1 className="text-xl font-semibold">3/7</h1>
              </div>
              <div className="w-full flex rounded-lg">
                <div className="flex-grow h-2 rounded-lg bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"></div>
                <div className="flex-grow h-2 rounded-lg bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"></div>
                <div className="flex-grow h-2 rounded-lg bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"></div>
                <div className="flex-grow h-2 rounded-lg bg-gray-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"></div>
                <div className="flex-grow h-2 rounded-lg bg-gray-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"></div>
                <div className="flex-grow h-2 rounded-lg bg-gray-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"></div>
                <div className="flex-grow h-2 rounded-lg bg-gray-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"></div>
              </div>
            </div>
            <div className="rounded-xl px-8 py-4 bg-[#3BCBFF] w-full mt-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold">Video Calls</h1>
                <h1 className="text-xl font-semibold">3/7</h1>
              </div>
              <div className="w-full flex rounded-lg">
                <div className="flex-grow h-2 rounded-lg bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"></div>
                <div className="flex-grow h-2 rounded-lg bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"></div>
                <div className="flex-grow h-2 rounded-lg bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"></div>
                <div className="flex-grow h-2 rounded-lg bg-gray-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"></div>
                <div className="flex-grow h-2 rounded-lg bg-gray-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"></div>
                <div className="flex-grow h-2 rounded-lg bg-gray-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"></div>
                <div className="flex-grow h-2 rounded-lg bg-gray-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none"></div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center px-12 mt-12 w-full'>
            <h1 className="text-3xl font-semibold">Blogs</h1>
            <div className='w-full mt-8'>
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
      <div className='w-full col-span-7'>
        <div className='flex flex-col justify-center items-center px-12 py-8'>
          <h1 className='text-4xl font-semibold'>Graph</h1>
          <BarChart
            width={800}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar name="healthy" dataKey="pv" fill="#FB008B" />
            <Bar name="junk" dataKey="uv" fill="#FCC13F" />
          </BarChart>
        </div>
        <div className="flex flex-col justify-center items-center px-12 gap-2">
          <h1 className="text-3xl font-semibold mb-4">Todays Prescription</h1>
          <div className='grid grid-cols-12 w-full'>
            <div className='col-span-2 flex flex-col justify-center items-center border-r-2 border-gray-400'>
              <h1 className="text-2xl font-semibold">Timing</h1>
            </div>
            <div className='col-span-4 flex flex-col justify-center items-center border-r-2 border-gray-400'>
              <h1 className="text-2xl font-semibold">Medicine</h1>
            </div>
            <div className='col-span-3 flex flex-col justify-center items-center border-r-2 border-gray-400'>
              <h1 className="text-2xl font-semibold">Dosage</h1>
            </div>
            <div className='col-span-3 flex flex-col justify-center items-center'>
              <h1 className="text-2xl font-semibold">Status</h1>
            </div>
          </div>
          <div className='grid grid-cols-12 w-full'>
            <div className='col-span-2 flex flex-col justify-center items-center border-r-2 border-gray-400'>
              <h1 className="text-xl">3.30 AM</h1>
            </div>
            <div className='col-span-4 flex flex-col justify-center items-center border-r-2 border-gray-400'>
              <h1 className="text-xl">XYZ</h1>
            </div>
            <div className='col-span-3 flex flex-col justify-center items-center border-r-2 border-gray-400'>
              <h1 className="text-xl">1 pill</h1>
            </div>
            <div className='col-span-3 flex flex-col justify-center items-center'>
              <h1 className="text-xl">Taken</h1>
            </div>
          </div>
          <div className='grid grid-cols-12 w-full'>
            <div className='col-span-2 flex flex-col justify-center items-center border-r-2 border-gray-400'>
              <h1 className="text-xl">3.30 AM</h1>
            </div>
            <div className='col-span-4 flex flex-col justify-center items-center border-r-2 border-gray-400'>
              <h1 className="text-xl">XYZ</h1>
            </div>
            <div className='col-span-3 flex flex-col justify-center items-center border-r-2 border-gray-400'>
              <h1 className="text-xl">1 pill</h1>
            </div>
            <div className='col-span-3 flex flex-col justify-center items-center'>
              <h1 className="text-xl">Taken</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

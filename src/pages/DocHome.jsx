import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import TimePicker from '@mui/lab/TimePicker';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { NavBar } from '../components/NavBar'

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

export const DocHome = () => {
  const [time, setTime] = useState(new Date())
  const [date, setDate] = useState(new Date())
  
  return (
    <div>
      <NavBar />
      <div className='grid grid-cols-12'>
        <div className='col-span-5'>
          <div className='w-full px-12 py-6 flex flex-col justify-center items-center'>
            <h1 className="text-4xl font-semibold">
              Progress
            </h1>
            <div className='w-[80%]'>
              <div className="rounded-xl px-8 py-4 bg-[#3BCBFF] w-full mt-6">
                <div className="flex justify-between mb-2">
                  <h1 className="text-xl font-semibold">Puzzles</h1>
                  <h1 className="text-xl font-semibold">3/7</h1>
                </div>
                <div className="w-full flex rounded-lg">
                  <div className="flex-grow h-3 shadow rounded-lg bg-blue-600"></div>
                  <div className="flex-grow h-3 shadow rounded-lg bg-blue-600"></div>
                  <div className="flex-grow h-3 shadow rounded-lg bg-blue-600"></div>
                  <div className="flex-grow h-3 shadow rounded-lg bg-gray-400"></div>
                  <div className="flex-grow h-3 shadow rounded-lg bg-gray-400"></div>
                  <div className="flex-grow h-3 shadow rounded-lg bg-gray-400"></div>
                  <div className="flex-grow h-3 shadow rounded-lg bg-gray-400"></div>
                </div>
              </div>
              <div className="rounded-xl px-8 py-4 bg-[#3BCBFF] w-full mt-6">
                <div className="flex justify-between mb-2">
                  <h1 className="text-xl font-semibold">Video Calls</h1>
                  <h1 className="text-xl font-semibold">3/7</h1>
                </div>
                <div className="w-full flex rounded-lg">
                  <div className="flex-grow h-3 shadow rounded-lg bg-blue-600"></div>
                  <div className="flex-grow h-3 shadow rounded-lg bg-blue-600"></div>
                  <div className="flex-grow h-3 shadow rounded-lg bg-blue-600"></div>
                  <div className="flex-grow h-3 shadow rounded-lg bg-gray-400"></div>
                  <div className="flex-grow h-3 shadow rounded-lg bg-gray-400"></div>
                  <div className="flex-grow h-3 shadow rounded-lg bg-gray-400"></div>
                  <div className="flex-grow h-3 shadow rounded-lg bg-gray-400"></div>
                </div>
              </div> 
            </div> 
          </div>
          <div className="flex justify-center items-center">
            <div className='w-[70%] flex flex-col justify-center items-center gap-4'>
              <h1 className='text-4xl font-semibold'>Prescribe</h1>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TextField fullWidth id="outlined-basic" label="Medicine Name" variant="outlined" />
                <TextField fullWidth id="outlined-basic" label="Dosage" variant="outlined" />
                <DatePicker
                  label="Date"
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
                <TimePicker
                  label="Time"
                  value={time}
                  onChange={newValue => setTime(newValue)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
              <button className='px-4 py-2 bg-blue-500 rounded-lg text-xl'>Add Prescription</button>
            </div>
          </div>
        </div>
        <div className='w-full col-span-7'>
          <div className='flex flex-col justify-center items-center px-12 py-6'>
            <h1 className='text-4xl font-semibold mb-4'>Graph</h1>
            <BarChart
              width={850}
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
        </div>
      </div>
    </div>
  )
}

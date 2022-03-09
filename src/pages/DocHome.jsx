import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import TimePicker from '@mui/lab/TimePicker';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { NavBar } from '../components/NavBar'
import { data } from '../utils/assets/data';

export const DocHome = () => {
  const [medName, setMedName] = useState('')
  const [dose, setDose] = useState('')
  const [time, setTime] = useState(new Date())
  const [date, setDate] = useState(new Date())

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Token 60a6b5ea81823c883d178b7b2ad57b618d712707");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "csrftoken=p7qGZ8yL3XmvdIt0rbPNtqGGbwmJHvuyx0TbcCJOOxVowa3DrfXaZONNShv9uWYI; sessionid=fcs5yk9xxfl86iia5jt675xwm45cnauf");

  const handleSubmit = (event) => {
    event.preventDefault()

    var raw = JSON.stringify({
      "name": medName,
      "dosage_info": dose,
      "date": date.getFullYear()+'-'+date.getUTCMonth()+'-'+date.getDate(),
      "time": time.getHours()+':'+time.getMinutes()+':00'
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8000/medicine_details/", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  
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
          <form className='flex flex-col justify-center items-center w-full' onSubmit={handleSubmit}>
            <div className='flex flex-col justify-center items-center w-[70%] gap-4'>
              <h1 className='text-4xl font-semibold'>Prescribe</h1>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TextField fullWidth id="outlined-basic" onChange={(newValue)=>setMedName(newValue.target.value)} label="Medicine Name" variant="outlined" />
                  <TextField fullWidth id="outlined-basic" onChange={(newValue)=>setDose(newValue.target.value)} label="Dosage" variant="outlined" />
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
            </form>
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
              <Bar name="healthy" dataKey="pv" fill="#FF4848" />
              <Bar name="junk" dataKey="uv" fill="#3BCBFF" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  )
}

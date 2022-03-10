import { useEffect, useState, useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { NavBar } from '../components/NavBar';
import {data} from "../utils/assets/data2";
import shrey from '../utils/icons/Shrey.jpeg';
import { GlobalContext } from '../context/GlobalContext'

export const FamHome = () => {

  const { token } = useContext(GlobalContext)
  const [pres, setPres] = useState()

  useEffect(()=> {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token " + token);
  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    fetch("http://dementech.pythonanywhere.com/medicine_details/", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setPres(result)
    })
    .catch(error => console.log('error', error));
  }, [])
  
  return (
    <div>
      <NavBar />
      <div className='grid grid-cols-12'>
        <div className='col-span-5'>
          <div className='w-full px-10 py-6 flex flex-col justify-center items-center'>
            <div className='px-16 py-4 flex flex-col justify-center items-center mb-8 rounded-xl shadow-2xl'>
              <div className='flex flex-col justify-center items-center w-full'>
                <h5 className='text-2xl mb-6'> Patient Details </h5>
              </div>
              <img className='rounded-full h-32 mb-4 border-4 border-gray-800' src={shrey} />
              <div className=' w-full text-lg flex flex-col gap-2'>
                <div className='grid grid-cols-12'>
                  <div className='col-span-4 font-semibold'>
                    Name
                  </div>
                  <div className='col-span-1 font-semibold'>
                    :
                  </div>
                  <div className='col-span-7'>
                    Shrey
                  </div>
                </div>
                <div className='grid grid-cols-12'>
                  <div className='col-span-4 font-semibold'>
                    Age
                  </div>
                  <div className='col-span-1 font-semibold'>
                    :
                  </div>
                  <div className='col-span-7'>
                    19
                  </div>
                </div>
                <div className='grid grid-cols-12'>
                  <div className='col-span-4 font-semibold'>
                    Problem
                  </div>
                  <div className='col-span-1 font-semibold'>
                    :
                  </div>
                  <div className='col-span-7'>
                    Dementia
                  </div>
                </div>
                <div className='grid grid-cols-12'>
                  <div className='col-span-4 font-semibold'>
                    Description
                  </div>
                  <div className='col-span-1 font-semibold'>
                    :
                  </div>
                  <div className='col-span-7'>
                    Mental illness
                  </div>
                </div>
              </div>
            </div>
            <h5 className="text-2xl">
              Progress
            </h5>
            <div className='w-[80%]'>
              <div className="rounded-xl px-8 py-4 bg-[#3BCBFF] w-full mt-6 shadow-xl">
                <div className="flex justify-between mb-2">
                  <h5 className="text-xl">Puzzles</h5>
                  <h5 className="text-xl">3/7</h5>
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
                  <h5 className="text-xl">Video Calls</h5>
                  <h5 className="text-xl">4/7</h5>
                </div>
                <div className="w-full flex rounded-lg">
                  <div className="flex-grow h-3 shadow rounded-lg bg-blue-600"></div>
                  <div className="flex-grow h-3 shadow rounded-lg bg-blue-600"></div>
                  <div className="flex-grow h-3 shadow rounded-lg bg-blue-600"></div>
                  <div className="flex-grow h-3 shadow rounded-lg bg-blue-600"></div>
                  <div className="flex-grow h-3 shadow rounded-lg bg-gray-400"></div>
                  <div className="flex-grow h-3 shadow rounded-lg bg-gray-400"></div>
                  <div className="flex-grow h-3 shadow rounded-lg bg-gray-400"></div>
                </div>
              </div> 
            </div>              
          </div>
        </div>
        <div className='w-full col-span-7'>
          <div className='flex flex-col justify-center items-center px-12 py-6'>
            <h5 className='text-2xl mb-4'>Graph</h5>
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
              <Bar name="cholestrol" dataKey="pv" fill="#3BCBFF" />
              <Bar name="non-cholestrol" dataKey="uv" fill="#FF4848" />
            </BarChart>
          </div>
          <div className="flex flex-col justify-center items-center px-12 gap-2 my-12">
            <h5 className="text-2xl mb-4">Today's Prescription</h5>
            <div className='grid grid-cols-12 w-full'>
              <div className='col-span-2 flex flex-col justify-center items-center border-r-2 border-gray-400'>
                <h5 className="text-2xl">Timing</h5>
              </div>
              <div className='col-span-4 flex flex-col justify-center items-center border-r-2 border-gray-400'>
                <h5 className="text-2xl">Medicine</h5>
              </div>
              <div className='col-span-3 flex flex-col justify-center items-center border-r-2 border-gray-400'>
                <h5 className="text-2xl">Dosage</h5>
              </div>
              <div className='col-span-3 flex flex-col justify-center items-center'>
                <h5 className="text-2xl">Status</h5>
              </div>
            </div>
            {pres?pres.map((item, index)=>
                <div key={index} className='grid grid-cols-12 w-full'>
                <div className='col-span-2 flex flex-col justify-center items-center border-r-2 border-gray-400'>
                  <h5 className="text-xl">{item.time}</h5>
                </div>
                <div className='col-span-4 flex flex-col justify-center items-center border-r-2 border-gray-400'>
                  <h5 className="text-xl">{item.name}</h5>
                </div>
                <div className='col-span-3 flex flex-col justify-center items-center border-r-2 border-gray-400'>
                  <h5 className="text-xl">{item.dosage_info}</h5>
                </div>
                <div className='col-span-3 flex flex-col justify-center items-center'>
                  <h5 className="text-xl">Taken</h5>
                </div>
              </div>
            ):
              null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

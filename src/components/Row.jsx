import React, { useState } from 'react'

export const Row = ({ index, item }) => {
  const [checked, setChecked] = useState(true)
  return (
    <div key={index} className='grid grid-cols-12 w-full'>
      <div className='col-span-2 flex justify-center items-center border-r-2 border-gray-400'>
        <h5 className="text-xl">{item.time}</h5>
      </div>
      <div className='col-span-4 flex justify-center items-center border-r-2 border-gray-400'>
        <h5 className="text-xl">{item.name}</h5>
      </div>
      <div className='col-span-3 flex justify-center items-center border-r-2 border-gray-400'>
        <h5 className="text-xl">{item.dosage_info}</h5>
      </div>
      <div className='col-span-3 flex justify-center items-center gap-2 text-xl'>
        <input class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" id="flowbite" aria-describedby="flowbite" type="checkbox" checked={checked} onClick={() => setChecked(!checked)}/>
        <label for="flowbite">{checked ? 'Taken' : 'Remaining'}</label>
      </div>
    </div>
  )
}

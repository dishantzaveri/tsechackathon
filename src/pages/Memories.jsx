import { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import ImageUploader from 'react-images-upload';
import { InfoCard } from '../components/InfoCard'
import { NavBar } from '../components/NavBar'
import { TextField } from '@mui/material';
import { Razorpay } from '../components/Razorpay'

export const Memories = () => {
  const [pictures, setPictures] = useState([])
  const onDrop = (pictureFiles, pictureDataURLs) => {
    setPictures(pictures.concat(pictureFiles));
  }
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-12">
        <div className='w-full px-12 py-6 flex flex-col items-center col-span-7'>
          <div className='mt-6 w-[70%] flex flex-col items-center gap-4'>
            <h1 className="text-4xl font-semibold">Upload Images</h1>
            <ImageUploader
              withIcon={true}
              withPreview={true}
              singleImage={true}
              buttonText='Choose image'
              onChange={onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
              maxFileSize={5242880}
            />
            <TextField multiline rows={4} fullWidth id="outlined-basic" label="Describe Image" variant="outlined" />
            <button className='px-6 py-2 bg-blue-500 rounded-lg text-xl'>Post</button>
          </div>
          <div className='mt-6 pt-6 w-[80%] flex flex-col justify-center items-center gap-4 border-dotted border-t-2 border-gray-400'>
            <h1 className="text-3xl font-semibold">
              Pay monthly consultant fees
            </h1>
            <Razorpay />
          </div>
        </div>  
        <div className='w-full px-12 py-6 flex flex-col justify-center items-center col-span-5'>
          <div className='flex flex-col justify-center items-center px-12 mt-6 w-full'>
            <h1 className="text-4xl font-semibold">Blogs</h1>
            <div className='w-[80%] mt-6'>
              <Carousel className='h-[420px]'>
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
              </Carousel>
            </div>
            <div className="flex flex-col justify-center items-center w-full mt-4 border border-gray-700 shadow-xl px-8 py-4 rounded-xl gap-4">
              <h1 className="text-3xl font-semibold">Call Patient</h1>
              <button className='px-6 py-2 bg-blue-500 rounded-lg text-xl mb-1'>Video Call</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

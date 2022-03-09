import { useState } from 'react'
import ImageUploader from 'react-images-upload';
import { NavBar } from '../components/NavBar'
import { TextField } from '@mui/material';
import { Razorpay } from '../components/Razorpay';
import user from "../utils/icons/1.jpg"
import Meme from '../components/Meme';

export const Memories = () => {
  const [pictures, setPictures] = useState([])
  const [rel, setRel] = useState('')
  const [desc, setDesc] = useState('')

  const onDrop = (event) => {
    setPictures(event);
  }

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Token d1ec4e38ba3181b9b0a1eb675318861644d1d78e");

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(pictures[0])
    console.log(rel)
    console.log(desc)

    console.log(new File([user],"user"))

    var formdata = new FormData();
    formdata.append("photo", pictures[0]);
    formdata.append("relation_with_patient", rel);
    formdata.append("message", desc);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://localhost:8000/scrapbook/", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }


  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-12">
        <div className='w-full px-12 py-6 flex flex-col items-center col-span-7'>
          <form onSubmit={handleSubmit} className='mt-6 w-[70%] flex flex-col items-center gap-4'>
            <h1 className="text-4xl">Upload Images</h1>
            <ImageUploader
              withIcon={true}
              withPreview={true}
              singleImage={true}
              buttonText='Choose image'
              onChange={onDrop}
              imgExtension={['.jpg', ' .gif', ' .png', ' .jpeg']}
              maxFileSize={5242880}
            />
            <TextField multiline rows={1} fullWidth id="outlined-basic" onChange={(newValue)=>setRel(newValue.target.value)} label="How do you know Shrey?" variant="outlined" />
            <TextField multiline rows={3} fullWidth id="outlined-basic" onChange={(newValue)=>setDesc(newValue.target.value)} label="Tell Shrey more about the image" variant="outlined" />
            <button type='submit' className='px-6 py-2 bg-blue-500 rounded-lg text-xl'>Post</button>
          </form>
          <div className='mt-6 pt-6 w-[80%] flex flex-col justify-center items-center gap-4 border-dotted border-t-2 border-gray-400'>
            <h1 className="text-3xl">
              Pay monthly consultant fees
            </h1>
            <Razorpay />
          </div>
        </div>  
        <div className='w-full px-12 py-6 flex flex-col justify-center items-center col-span-5'>
          <div className='flex flex-col justify-center items-center px-12 mt-2 w-full'>
            <h1 className="text-4xl">Memes</h1>
            <div className='w-[80%] mt-4'>
              <Meme/>
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

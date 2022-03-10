import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { GlobalContext } from '../context/GlobalContext'

export default function Meme() {
    const { token } = useContext(GlobalContext)
    console.log(token);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token " + token);
    myHeaders.append("Cookie", "csrftoken=PNWvCigcHKd01ul44FUpyLNwLbkVZTJNHv4NtPEwmhnedricHyK02uduZJy3Uump");
    myHeaders.append("Content-Type", "application/json");

    const [meme, saveMemes] = useState()
    const [input, setInput] = useState([])
    const [num, setNum] = useState(0)

    const clickHandle=(e,number)=>{
        const t=[...input];
        t[number]=e.target.value;
        setInput(t);
    }

    useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(result => {
            saveMemes(result.data)
            setNum(Math.floor(Math.random()*100))
        })
        .catch(error => console.log('error', error));
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        const box=Array(meme.memes[num].box_count).fill("");
        for(let i=0;i<meme.memes[num].box_count;i++){
            box[i]={'text':input[i]}
        }

        var fields=new FormData();
        fields.append('template_id',meme.memes[num].id);
        fields.append('username','ShreyParekh');
        fields.append('password','drawings24?');
        for(let i=0;i<meme.memes[num].box_count;i++){
            fields.append(`boxes[${i}][text]`,input[i]);
        }

        axios({
            method:'POST',
            url: 'https://api.imgflip.com/caption_image',
            data: fields,
            headers: {'Content-Type':'multipart/form-data'}
        })
        .then((response)=>{
            console.log(response.data.data.url);
            var formdata = JSON.stringify({
                "meme_url": response.data.data.url
            })

            console.log(response.data.data.url)

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
            };

            fetch("https://dementech.pythonanywhere.com/meme/", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }
    )
        .catch((error)=>console.log(error));
    }

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center gap-4">
                <img className='w-48' src={meme?.memes[num].url} alt="meme"/>
                {
                    Array(parseInt(meme?meme.memes[num].box_count:2)).fill(0).map((number, index)=>(
                        <div key={index} className="form">
                            <input className='px-4 py-2 border-2 border-gray-700 text-lg rounded-xl w-full' id="outlined-required" placeholder={"Box "+(index+1)} onChange={(e) => clickHandle(e, index)} />
                        </div>
                    ))
                }
                <button className='px-6 py-2 bg-blue-500 rounded-lg text-xl mb-1' type="submit"> Submit </button>
            </div>
        </form>
    )
}
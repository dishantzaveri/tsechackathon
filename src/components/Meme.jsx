import { useEffect, useState } from "react";
import axios from "axios";

export default function Meme() {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token d1ec4e38ba3181b9b0a1eb675318861644d1d78e");
    myHeaders.append("Cookie", "csrftoken=PNWvCigcHKd01ul44FUpyLNwLbkVZTJNHv4NtPEwmhnedricHyK02uduZJy3Uump");

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

            var formdata = new FormData();
            formdata.append("meme_url", response.data.data.url);

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
            };

            fetch("http://127.0.0.1:8000/meme/", requestOptions)
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
        <div className="py-5">
            <img src={meme?.memes[num].url} alt="meme"/>
            <form onSubmit={handleSubmit}>
            {
                Array(parseInt(meme?meme.memes[num].box_count:2)).fill(0).map((number, index)=>(
                    <div key={index} className="form">
                        <input id="outlined-required" placeholder={"Box "+(index+1)} onChange={(e) => clickHandle(e, index)} />
                    </div>
                ))
            }
            <button type="submit"> Submit </button>
            </form>
        </div>
    )
}
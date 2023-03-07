import React, { useState } from 'react'
import {useLocation} from 'react-router-dom';

function CreatePost(props) {
  
    const location = useLocation();
    const [list,setList] = useState(location.state.list)
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [address, setAddress] = useState("")
   
  return (
    <div>
    <div>a{JSON.stringify(list)}</div>
    <input
    onChange={(e) => setName(e.target.value)}
    ></input>    <input
    onChange={(e) => setAddress(e.target.value)}
    ></input>
    {name}
    <input type="date"
    onChange={(e) => setDate(e.target.value)}
    ></input>
    {date}
    
    <button
    onClick={()=>{
      fetch('http://127.0.0.1:8000/items/', {
      method: 'post',
      body: JSON.stringify({name:name, roster:list, date:date, address:address}),
      headers: {'Content-Type': 'application/json'}
}).then(res => console.log(res.json()));
    }}
    >Post</button>
    </div>
  )
}

export default CreatePost
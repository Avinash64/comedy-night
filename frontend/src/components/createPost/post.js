import React from 'react'
import "./post.css"
function Post(props) {

  let data = {
    name: "name2",
    roster: ['edwe', 'fe', 'w', 'ef', 'we', 'f', 'we', 'f', 'wef', 'we', 'f', 'we', 'f', 'we', 'fw', 'ef'],
    date: "02/21/2020",
    location: "68 2nd Ave, 10003, New York, NY"

  }
  console.log(props.post)
  data = props.post
  return (
    <div className='post'>
        <div>Name: {data.name}</div>
        <div>Date: {data.date}</div>
        <div>Location: {data.address}</div>
        <div>Comedians: {data.list.length}</div>
    </div>
  )
}

export default Post
import React from 'react'
import {useLocation} from 'react-router-dom';

function CreatePost(props) {
  
    const location = useLocation();
   
  return (
    <div>a{JSON.stringify(location.state.list)}</div>
  )
}

export default CreatePost
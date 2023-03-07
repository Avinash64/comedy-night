import React, {useEffect, useState} from 'react'
import Post from '../createPost/post';

function ViewPosts() {
    const [list, setList] = useState([])

    const options = {method: 'GET'};
    
    useEffect(() => {
      
      
      const fetchData = async () => {
          fetch('http://localhost:8000/items/', options)
            .then(response => response.json())
            .then(response => setList(response))
            .catch(err => console.error(err));
 
        };
    
        fetchData();
    }, []);


  return (

    

    <div>ViewPosts
      {JSON.stringify(list)}
      {Object.keys(list).map((e,index) => {
        console.log(list[e])
        // return <div key={index}>{list[e].name} 1 {list[e].list.join(' ')}</div>}
        return <Post post={list[e]}></Post>}
        )
      }
      
    </div>
  )
}

export default ViewPosts
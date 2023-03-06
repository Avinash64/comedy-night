import React from 'react'
import {useState} from "react";
import "./shuffle.css"
import { useNavigate } from "react-router-dom";

function Shuffle() {
        const [name, setName] = useState("")
        const [list, setList] = useState([])
        const [shuffled, setShuffled] = useState([])
        function shuffle(array) {
          let currentIndex = array.length,  randomIndex;
          while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
          }
        
          return array;
        }

        const navigate = useNavigate();
      
        return (
          <div className="spage">
                <div className='leftbar'>Hi</div>
                <div className="names">
                
                <textarea
                        className='textarea'
                        id = 'textArea'
                        onChange={(text)=>{
                        setName(text.target.value);
                        setList(document.getElementById("textArea").value.split('\n'))
        
                    setShuffled(shuffle(name.split('\n')))
                        }
                    }
                    ></textarea>
        
                <button
                className='shuffle'
                onClick={
                () => {
                    document.getElementById("textArea").value = shuffle(document.getElementById("textArea").value.split('\n')).join('\n');
                    setList(document.getElementById("textArea").value.split('\n'))
                }
                }
                >Shuffle</button>
                </div>
                <div className='rightbar'>

                <button href='/createpost' onClick={() => navigate("/createpost", {state:{list:list}})}>Create Post</button>
                </div>
          </div>
        );
      }
      

export default Shuffle
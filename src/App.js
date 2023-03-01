import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
  const [name, setName] = useState("")
  const [list, setList] = useState([])
  const [shuffled, setShuffled] = useState([])
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  return (
    <div className="App">
      <div className="names">
      <textarea
              className='textarea'
              id = 'textArea'
              onChange={(text)=>{
                console.log(text.target.value)
                setName(text.target.value);

          setShuffled(shuffle(name.split('\n')))
              }
            }
            ></textarea>

      <button
      onClick={
        () => {
          // setName()
          // setShuffled(shuffle(name.split('\n')))
          document.getElementById("textArea").value = shuffle(document.getElementById("textArea").value.split('\n')).join('\n')
        }
      }
      >Shuffle</button>
      </div>
      <div>
        

        {/* {name.map((element) => {
          return <h1 key={element}>{element}</h1>
        })} */}
        {/* {shuffled.map((element,num) => {
          return <div key={num}>{element}</div>
        })} */}
      </div>
      
      
   
    </div>
  );
}

export default App;

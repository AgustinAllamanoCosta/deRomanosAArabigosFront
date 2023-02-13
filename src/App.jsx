import { useRef, useState } from 'react';
import './App.css'

function App() {
  const inputNumber = useRef(0);
  const [number,setNumber] = useState(0);

  return (
    <div className="App">
      <h1>De Romanos a Arabigos y de Arabigos a Romanos</h1>
      <div className="card">
        <input ref={inputNumber}></input>
        <button onClick={async () =>{
          fetch(`http://localhost:3012/transformador/romanos/${inputNumber.current.value}`).then(response => response.json())
          .then(jsondata => {setNumber(jsondata.number)});
        }}>
          convertir 
        </button>
        <p>Numero convertido: {number}</p>

      </div>
      <p className="read-the-docs">
        Lee el readme del back que tenes los features :D
      </p>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes')
    .then((resp) => {
      setJokes(resp.data)
      console.log(resp.data);
      
    })
    .catch((err) => console.log(err)
    )
  }, [])

  return (
    <>
      <h1>Hello World</h1>
      <p>JOKES: {jokes.length}</p>
      {jokes.map((joke, index) => {
        return <div key={index}>
            <h2>{joke.setup}</h2>
            <p style={{color: 'wheat'}}>{joke.punchline}</p>
          </div>
      })}
    </>
  )
}

export default App

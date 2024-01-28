import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

// M-1 for runninng our fullstack application(not recommended)..................................
// to create the build of frontend we give the command -> npm run build...
// it will create `dist` folder which needs to be added to backend and using middleware we access the dist-flder content and acces the frontend part in backend...

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    // Method- 2 for runninng our fullstack application..................................
    // we need to apply proxy to allow the access of backend in our frontend.

    // Method - 3 for running our fullstack application..................................
    // Another method to allow our frontend to access backend is whitelisting the frontend url in backend using cors(But not recommended).
    // when we use paid servers like heroku/ netlify/ app-write etc..., the serer asks us for the frontend url and whitelists that particular url...
    axios.get('/api/jokes') // We donot need to write whole url to fetch data, only endpoints are sufficient. We put the base url in proxy...
    .then((response) => {
      console.log(response.data);
      setJokes(response.data)
    })
    .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Jokes App</h1>
      <h2>Jokes: {jokes.length}</h2>
      {
        jokes.map((joke, index) => {
          return(
            <div key={index}>
              <h2>{joke.title}</h2>
              <p>{joke.content}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App

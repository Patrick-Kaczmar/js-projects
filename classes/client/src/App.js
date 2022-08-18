import React, {useEffect, useState} from 'react'

export default function App() {

  const [stuff, setStuff] = useState(undefined)

  useEffect(() => {
    fetch('http://localhost:5000/api').then(response => response.json()).then(data => {setStuff(data)})
  }, [])


  return (
    <div>
      {(typeof stuff == 'undefined') ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{stuff.users[0]}</h1>
          <h1>{stuff.users[1]}</h1>
          <h1>{stuff.users[2]}</h1>
        </div>
      )}
    </div>
  )
}

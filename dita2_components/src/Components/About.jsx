import React,{useState} from 'react'

function About() {
  const [vlera, setVlera] = useState(0)
  return (
    <>
     <h1>Welcome to DITA2</h1>
    <p>Your getaway to afficient DITA contect management.</p>
    
    <button onClick={() => setVlera(vlera + 1)}> Increase Value </button>
    
    <p>Current value: {vlera}</p>
    <button onClick={() => setVlera(vlera - 1)}> Decrease Value </button>
    </>
  )
}

export default About
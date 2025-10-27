import React,{useState} from 'react'

function About() {
  const [name, setName] = useState("Arianit");
  const [age, setAge] = useState(11);
  const [color, setColor] = useState(true);
  const [age1, setAge1] = useState(18);
  return (
    <>
    <h1>About Page</h1>
    <p>Name: {name}</p>
    <button onClick={() => setName("Lis")}>Change Name</button>
    <button onClick={() => setName("Arianit")}>Return Name</button>
    <hr />
    <p>Age: {age}</p>
    <button onClick={() => setAge(age + 1)}>Increase Age</button>
    <button onClick={() => setAge(age - 1)}>Decrease Age</button>
    <hr />
    <p style={{ color: 'blue' , fontSize: '20px'}}>This is a styled paragraph.</p>
    <hr />
    <p style={{ color: age1 > 18 ? "Yellow" : "red" , fontSize: '20px'}}>Age: {age}</p>
    <button onClick={() => setAge(age1 + 1)}>Increase Age</button>
    <button onClick={() => setAge(age1 - 1)}>Decrease Age</button>
    <hr />
    <p style={{ color: color ? "green" : "purple" , fontSize: '20px'}}>This is a styled paragraph.</p>
    <button onClick={() => setColor(!color)}> Change color </button> 
    </>
  )
}

export default About
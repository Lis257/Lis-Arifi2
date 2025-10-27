import React,{useState} from 'react'

function Home() {

    const [vlera, setVlera] = useState(0);
    const [name, setName] = useState("Arianit");
    const [arr, setArr] = useState([1,2,3,4,5]);
    const obj = {
        name: "Arianit",
        age: 31,
        city: "Prizren"
    }
    const [allName  , setAllName] = useState([
        {id:1, name: "Arianit", age: 31, city: "Prizren"},
        {id:2, name: "Aldin", age: 30, city: "Prishtine"},
        {id:3, name: "Arber", age: 29, city: "Peje"},
        {id:4, name: "Ardian", age: 21, city: "Gjakove"},
        {id:5, name: "Arsim", age: 41, city: "Prizren"},
        {id:6, name: "Blerim", age: 33, city: "Mitrovic"}
    ])
  return (
    <>
    <h1>Home Page </h1>
    <h2>{vlera}</h2>
    <p>{ name }</p>
    <p>{ arr }</p>
    <p>{ obj.name } - { obj.age } - { obj.city } </p>
    {allName.map( (item) =>(
        <div key={item.id}>
            <h2>{ item.name }</h2>
            <p>{ item.age }</p>
            <p>{ item.city }</p>
            <hr />
        </div>
    ))}
    </>
  )
}

export default Home
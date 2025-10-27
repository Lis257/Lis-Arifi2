import React from 'react'
import Button from './Button';

function Home() {
    const x=5;
    console.log("Value of x is:", x);
    const name = "Lis";
    const arr = [1,2,3];
    const obj = {
        name: "Lis",
        age: 14,
        city: "Prizren",
        country: "Kosova",
        skills: "Html, Css, Js"
    }
  return (
    <>
    <h1>Welcome to DITA2</h1>
    <p>Your getaway to afficient DITA content management.</p>
    <p>{x}</p>
    <p>Hello, { name }</p>
    <p>Array: {arr}</p>
    <p>Object: {obj.name} , {obj.skills}</p>
    <Button/>
    </>
  )
}

export default Home
import React from 'react'

function About() {
  const fun = () => {
    console.log("Hello");
  }
  const fun2 = (name) => {
    console.log("Hello" + " " + name);
  }

  return (
    <>
      <h1>About Component</h1>
      <button onClick={fun}>Click Me</button>
      <hr />
      <button onClick={() => fun2("React")}>Click Me 2</button>
    </>
  )
}

export default About
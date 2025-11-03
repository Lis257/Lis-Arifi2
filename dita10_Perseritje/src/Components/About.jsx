import React from 'react';


function About() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <h1 >Fazlia</h1>
      <img
        src="./Img1.jpg" alt="About"
        style={{ width: '300px', marginBottom: '20px', height: '400px' }}
      />
      <p>Ky eshte Fazlia dhe kjo foto eshte nga viti i kaluar sepse kete vit u be student shume i keq dhe nuk po meson.</p>
    </div>
  );
}

export default About;
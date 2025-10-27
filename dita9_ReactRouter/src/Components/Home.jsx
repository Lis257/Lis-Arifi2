import React from 'react';
import './Home.css';

const sections = [
  {
    title: 'Home',
    img: './Img1.jpg',
    alt: 'Home section image',
    description: 'Welcome to our homepage where you’ll find the latest updates and features.',
  },
  {
    title: 'About',
    img: './Img2.jpg',
    alt: 'About section image',
    description: 'Learn more about our mission, team, and what drives us forward.',
  },
  {
    title: 'Contact',
    img: './Img3.jpg',
    alt: 'Contact section image',
    description: 'Reach out to us with questions, feedback, or partnership opportunities.',
  },
];

function Home() {
  return (
    <div className="home-container">
      {sections.map((section, index) => (
        <div key={index} className="home-section">
          <img src={section.img} alt={section.alt} />
          <h1>{section.title}</h1>
          <p>{section.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
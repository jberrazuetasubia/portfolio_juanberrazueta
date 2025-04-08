import React from 'react';
import './3DModeling.scss';
import ModelCard from './ModelCard';

const cards = [
  {
    title: 'Security Robot',
    description: 'An autonomous surveillance bot modelled for urban environments.',
    iframeUrl: 'https://www.meshmorph.com/iframe/embed/8f40b33d-f241-4364-b6dc-ae6db93ab034',
    software: ['Maya', 'Photoshop'],
    images: [
      'assets/images/screenshots/art-screenshot.png',
      'assets/images/screenshots/test.png',
    ]
  },
  {
    title: 'Sci-Fi Drone',
    description: 'Concept drone for a sci-fi film project.',
    iframeUrl: 'https://www.meshmorph.com/iframe/embed/another-drone-url',
    software: ['Blender', 'Substance Painter'],
    images: [
      'https://via.placeholder.com/800x600?text=Drone+1',
      'https://via.placeholder.com/800x600?text=Drone+2',
      'https://via.placeholder.com/800x600?text=Drone+3'
    ]
  }
];

const Modeling = () => {
  return (
    <div className="modeling">
      <div className="intro-section">
        <h1>3D Modeling</h1>
        <p>
          I specialize in creating modern, responsive, and user-friendly websites.
          From concept to deployment, I turn ideas into functional and visually appealing web solutions.
        </p>
      </div>

      {cards.map((card, i) => (
        <ModelCard key={i} {...card} />
      ))}
    </div>
  );
};

export default Modeling;

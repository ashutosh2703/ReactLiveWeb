import React from 'react';

const AnimatedSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      {/* Spaceship */}
      <g id="spaceship">
        {/* Body */}
        <path d="M200,100 Q250,50 300,100 Q350,150 300,200 Q250,250 200,200 Q150,150 200,100 Z" fill="#999" stroke="#666" strokeWidth="2" />
        {/* Windows */}
        <circle cx="240" cy="140" r="5" fill="#3af" />
        <circle cx="260" cy="140" r="5" fill="#3af" />
        <circle cx="240" cy="160" r="5" fill="#3af" />
        <circle cx="260" cy="160" r="5" fill="#3af" />
        {/* Wings */}
        <path d="M200,200 Q150,225 100,200 L50,300 Q150,350 200,400 Q250,350 350,300 L300,200 Z" fill="#777" stroke="#444" strokeWidth="2" />
        <path d="M300,200 Q350,225 400,200 L450,300 Q350,350 300,400 Q250,350 150,300 L200,200 Z" fill="#777" stroke="#444" strokeWidth="2" />
        {/* Flame */}
        <polygon points="200,400 225,425 250,400" fill="#f90">
          <animate attributeName="points" dur="0.5s" repeatCount="indefinite" values="200,400 225,425 250,400; 200,400 220,425 250,400; 200,400 225,425 250,400" />
        </polygon>
      </g>
      
      {/* Learning Person */}
      <g id="learning-person" transform="translate(300,300) scale(0.7)">
        {/* Body */}
        <path d="M200 200 L200 300 L180 350 L220 350 L200 300 L220 250 L180 250 Z" fill="#39f" stroke="#06c" strokeWidth="2" />
        {/* Head */}
        <circle cx="200" cy="180" r="20" fill="#39f" stroke="#06c" strokeWidth="2" />
        {/* Glasses */}
        <circle cx="190" cy="175" r="5" fill="none" stroke="#000" strokeWidth="2" />
        <circle cx="210" cy="175" r="5" fill="none" stroke="#000" strokeWidth="2" />
        <line x1="190" y1="175" x2="210" y2="175" stroke="#000" strokeWidth="2" />
        {/* Book */}
        <rect x="180" y="300" width="40" height="60" fill="#fff" stroke="#000" strokeWidth="2" />
        <line x1="180" y1="300" x2="220" y2="300" stroke="#000" strokeWidth="2" />
        {/* Pages */}
        <rect x="183" y="300" width="14" height="60" fill="#f90" />
        <rect x="200" y="300" width="14" height="60" fill="#f90" />
        <rect x="217" y="300" width="14" height="60" fill="#f90" />
      </g>
      
      {/* Animation */}
      <animateMotion xlinkHref="#spaceship" dur="4s" repeatCount="indefinite" path="M0 200 H500 Z" />
      <animateTransform xlinkHref="#learning-person" attributeName="transform" type="rotate" from="0 300 300" to="360 300 300" dur="4s" repeatCount="indefinite" />
    </svg>
  );
};

export default AnimatedSVG;

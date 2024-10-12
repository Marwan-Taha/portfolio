import React from 'react';
import "../assets/styles/main.css"

const LoadingScreen = ({fadeOut}) => {
  return (
    <div className={`loading-container ${fadeOut ? 'fade-out' : ''}`}>
      <span className="loading-header">Developer</span>
      <span className="loading-header">open-source contributor</span>
      <span className="loading-header">coffee enthusiast</span>
    </div>
  );
};

export default LoadingScreen;

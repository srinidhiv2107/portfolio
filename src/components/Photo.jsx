import React from 'react';
import '../styles/Photo.scss';

const Photo = ({ photoSrc, alt }) => {
  return (
    <div className="space-photo-holder">
      <div className="photo-frame">
        <img src={photoSrc} alt={alt} className="photo" />
      </div>

      <div className="orbit-container">
        <div className="orbit orbit-1">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>
        <div className="orbit orbit-2">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>
        <div className="orbit orbit-3">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Photo;

import React from 'react';
import "../styles/SpaceBackground.scss";

const SpaceBackground = () => {
  const generateStars = (count, className) => {
    return Array.from({ length: count }, (_, i) => (
      <div
        key={i}
        className={className}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 3}s`
        }}
      />
    ));
  };

  return (
    <div className="space-background">
      <div className="stars-small">
        {generateStars(80, 'star star-small')}
      </div>

      <div className="stars-medium">
        {generateStars(40, 'star star-medium')}
      </div>

      <div className="stars-large">
        {generateStars(20, 'star star-large')}
      </div>
    </div>
  );
};

export default SpaceBackground;

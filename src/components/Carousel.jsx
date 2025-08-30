import React, { useState } from "react";
import "../styles/Carousel.scss";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If no images provided, show placeholder
  if (!images || images.length === 0) {
    return (
      <div className="carousel-placeholder">
        <span>No images</span>
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const singleImage = images.length === 1;

  return (
    <div className={`carousel-wrapper ${singleImage ? 'single-image' : ''}`}>
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
            width: `${images.length * 100}%`
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide" style={{ width: `${100 / images.length}%` }}>
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </div>

        {!singleImage && (
          <>
            <button
              className="carousel-button carousel-button--prev"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <span className="material-symbols-rounded">chevron_left</span>
            </button>

            <button
              className="carousel-button carousel-button--next"
              onClick={goToNext}
              aria-label="Next image"
            >
              <span className="material-symbols-rounded">chevron_right</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carousel;

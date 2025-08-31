import React, { useState, useEffect } from "react";
import "../styles/Carousel.scss";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});

  // Reset to first image when images prop changes
  useEffect(() => {
    setCurrentIndex(0);
    setImageLoaded({});
  }, [images]);

  // If no images provided, show placeholder
  if (!images || images.length === 0) {
    return (
      <div className="carousel-placeholder">
        <span>No images available</span>
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

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle touch/swipe gestures
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && images.length > 1) {
      goToNext();
    }
    if (isRightSwipe && images.length > 1) {
      goToPrevious();
    }
  };

  const handleImageLoad = (index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  const singleImage = images.length === 1;

  return (
    <div
      className={`carousel-wrapper ${singleImage ? 'single-image' : ''}`}
      data-current={currentIndex + 1}
      data-total={images.length}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
            width: `${images.length * 100}%`
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{ width: `${100 / images.length}%` }}
            >
              <img
                src={image}
                alt={`Project screenshot ${index + 1}`}
                className={`carousel-image ${!imageLoaded[index] ? 'loading' : ''}`}
                onLoad={() => handleImageLoad(index)}
                onError={(e) => {
                  e.target.style.display = 'none';
                  console.warn(`Failed to load image: ${image}`);
                }}
              />
            </div>
          ))}
        </div>

        {!singleImage && images.length > 1 && (
          <>
            <button
              className="carousel-button carousel-button--prev"
              onClick={goToPrevious}
              aria-label="Previous image"
              type="button"
            >
              <span className="material-symbols-rounded">chevron_left</span>
            </button>

            <button
              className="carousel-button carousel-button--next"
              onClick={goToNext}
              aria-label="Next image"
              type="button"
            >
              <span className="material-symbols-rounded">chevron_right</span>
            </button>
          </>
        )}

        {/* Dot indicators for multiple images */}
        {!singleImage && images.length > 1 && images.length <= 10 && (
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
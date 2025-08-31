import React, { useState, useEffect } from 'react';
import { projectsData } from "./ProjectsData.jsx";
import Carousel from "./Carousel.jsx";
import "../styles/Projects.scss";

const Projects = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselImagesList, setCarouselImagesList] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const onViewGallery = (imagesList) => {
    if (!showCarousel) {
      // Opening carousel
      setCarouselImagesList(imagesList);
      setShowCarousel(true);
      setIsAnimating(true);
      // Add slight delay to trigger animation
      setTimeout(() => setIsAnimating(false), 100);
    } else {
      // Closing carousel
      closeCarousel();
    }
  }

  const closeCarousel = () => {
    setIsAnimating(true);
    // Wait for animation to complete before hiding
    setTimeout(() => {
      setShowCarousel(false);
      setIsAnimating(false);
      setCarouselImagesList([]);
    }, 300);
  }

  // Handle escape key to close carousel
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showCarousel) {
        closeCarousel();
      }
    };

    if (showCarousel) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when carousel is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showCarousel]);

  const renderProject = (projectData, index) => {
    return (
      <div key={index} className="project-grid-item">
        <div className="project-title">
          <p className="title">{projectData.name}</p>
        </div>
        <div className="project-data">
          <div className="wrapper" style={{justifyContent: "space-between"}}>
            <button
              className="project-cta-gallery label l2"
              onClick={() => onViewGallery(projectData.images)}
              disabled={!projectData.images || projectData.images.length === 0}
            >
              View gallery
            </button>
            <a
              href={projectData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta-link"
            >
              {projectData.linkName}
              <span className="material-symbols-rounded">call_made</span>
            </a>
          </div>
          <p className="text">{projectData.description}</p>
          <div className="wrapper">
            {projectData.techUsed.map((tech, i) => (
              <p key={i} className="l2 label">{tech}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-container">
      {showCarousel && (
        <div
          className={`project-carousel ${isAnimating ? 'closing' : 'opening'}`}
          onClick={(e) => {
            // Close when clicking on backdrop
            if (e.target === e.currentTarget) {
              closeCarousel();
            }
          }}
        >
          <div className="carousel-content">
            <Carousel images={carouselImagesList} />
            <button
              className="project-carousel-close-btn"
              onClick={closeCarousel}
              aria-label="Close gallery"
            >
              <span className="material-symbols-rounded">close</span>
            </button>
          </div>
        </div>
      )}
      <h4 className="h4">Projects</h4>
      <div className="projects-grid">
        {projectsData.map((projectData, index) => (
          renderProject(projectData, index)
        ))}
      </div>
    </div>
  );
};

export default Projects;

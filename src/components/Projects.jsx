import React, { useState, useEffect } from 'react';
import { projectsData } from "./ProjectsData.jsx";
import Carousel from "./Carousel.jsx";
import "../styles/Projects.scss";

const Projects = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselProjectIndex, setCarouselProjectIndex] = useState(0);
  const [carouselTitle, setCarouselTitle] = useState("");
  const [carouselImagesList, setCarouselImagesList] = useState([]);

  const setCarouselData = (index) => {
    setCarouselProjectIndex(index);
    setCarouselTitle(projectsData[index].name);
    setCarouselImagesList(projectsData[index].images);
  }

  const onViewGallery = (index) => {
    setCarouselData(index);
    setShowCarousel(true);
  }

  const closeCarousel = () => {
    setCarouselTitle("");
    setShowCarousel(false);
    setCarouselImagesList([]);
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if(e.key === 'Escape' && showCarousel) closeCarousel();
    };

    if(showCarousel) {
      document.addEventListener('keydown', handleEscape);
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
              onClick={() => onViewGallery(index)}
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
              {projectData.linkName === "View code"?
                <span className="material-symbols-rounded">call_made</span>:
                <span className="material-symbols-rounded">language</span>
              }
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
        <div className="project-carousel">
          <div className="project-carousel-content">
            <p className="project-carousel-title">{carouselTitle}</p>
            <Carousel images={carouselImagesList} />
            <div className="project-carousel-btns-group">
              <button
                className="project-carousel-btn"
                onClick={() => setCarouselData(carouselProjectIndex - 1)}
                disabled={carouselProjectIndex === 0}
              >
                <span className="material-symbols-rounded">chevron_left</span>
              </button>
              <button
                className="project-carousel-btn"
                onClick={() => setCarouselData(carouselProjectIndex + 1)}
                disabled={carouselProjectIndex === projectsData.length - 1}
              >
                <span className="material-symbols-rounded">chevron_right</span>
              </button>
              <button
                className="project-carousel-btn"
                onClick={closeCarousel}
                aria-label="Close gallery"
              >
                <span className="material-symbols-rounded">close</span>
              </button>
            </div>
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

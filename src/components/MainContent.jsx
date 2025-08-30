import React from 'react';
import { useActiveSectionContext } from "../contexts/ActiveSectionContextProvider.jsx";
import Home from "../components/Home.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import "../styles/MainContent.scss";

const MainContent = () => {
  const { activeSection } = useActiveSectionContext();

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <Home />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'resume':
        return <h2 className="h2">Resume Section - WIP</h2>;
      default:
        return <Home />;
    }
  };

  return (
    <div className="main-content-container">
      <div className="main-content">
        {renderSection()}
      </div>
    </div>
  );
};

export default MainContent;

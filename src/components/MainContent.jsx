import React from 'react';
import { useApplicationContext } from "../contexts/ContextProvider.jsx";
import Home from "../components/Home.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Resume from "./Resume.jsx";
import "../styles/MainContent.scss";

const MainContent = () => {
  const { activeSection } = useApplicationContext();

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <Home />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'resume':
        return <Resume />;
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

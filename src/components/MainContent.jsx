import React, { useEffect } from 'react';
import { useApplicationContext } from "../contexts/ContextProvider.jsx";
import { trackSectionView } from "../utils/analytics.js";
import Home from "../components/Home.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
// import Resume from "./Resume.jsx";
import "../styles/MainContent.scss";

const MainContent = () => {
  const { activeSection } = useApplicationContext();

  useEffect(() => {
    trackSectionView(activeSection);
  }, [activeSection]);

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <Home />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      // case 'resume':
      //   return <Resume />;
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

import React from 'react';
import { useActiveSectionContext, sections } from "../contexts/ActiveSectionContextProvider.jsx";
import "../styles/NavBar.scss";

const NavBar = () => {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <div className="nav">
      {sections.map((item, index) => (
        <div
          key={index}
          className={`nav-item ${activeSection === item ? 'active' : ''}`}
          onClick={() => setActiveSection(item)}
        >
        <h4 className="h6">
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </h4>
        </div>
      ))}
    </div>
  );
};

export default NavBar;

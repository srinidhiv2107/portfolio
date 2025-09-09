import React from 'react';
import { useApplicationContext, sections } from "../contexts/ContextProvider.jsx";
import "../styles/NavBar.scss";

const NavBar = () => {
  const { activeSection, setActiveSection } = useApplicationContext();

  return (
    <div className="nav">
      {sections.map((item, index) => (
        <div
          key={index}
          className={`nav-item ${activeSection === item ? 'active' : ''}`}
          onClick={() => setActiveSection(item)}
        >
        <p className="p2">
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </p>
        </div>
      ))}
    </div>
  );
};

export default NavBar;

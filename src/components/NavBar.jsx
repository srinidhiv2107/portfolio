import React, { useState, useEffect, useRef } from 'react';
import { useApplicationContext, sections } from "../contexts/ContextProvider.jsx";
import "../styles/NavBar.scss";

const NavBar = () => {
  const { activeSection, setActiveSection } = useApplicationContext();
  const [showOnlyActiveSection, setShowOnlyActiveSection] = useState(
    window.matchMedia("(max-width: 900px)").matches
  );
  const [menuToggle, setMenuToggle] = useState(false);
  const menuRef = useRef(null);
  const menuBtnRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const handleMediaChange = () => {
      setShowOnlyActiveSection(mediaQuery.matches);
      if(!mediaQuery.matches) setMenuToggle(false);
    }

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(event.target)
      )
        setMenuToggle(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  }

  return (
    <>
      <div className="nav">
        {showOnlyActiveSection? (
          <div className="nav-item active">
            <p className="p2">
              {activeSection}
            </p>
          </div>
          ): (sections.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${activeSection === item ? 'active' : ''}`}
              onClick={() => setActiveSection(item)}
            >
              <p className="p2">
                {item}
              </p>
            </div>
          )))
        }
        <div
          className="nav-menu-btn"
          onClick={handleMenuToggle}
          ref={menuBtnRef}
        >
          <span
            className={`material-symbols-rounded arrow-icon ${menuToggle? 'rotated': ''}`}>
            arrow_drop_down
          </span>
        </div>
      </div>
      <div className={`nav-menu-container ${menuToggle? 'open': ''}`}>
        <div className="nav-menu" ref={menuRef}>
          {sections.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${activeSection === item ? 'active' : ''}`}
              onClick={() => setActiveSection(item)}
            >
              <p className="p2">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;

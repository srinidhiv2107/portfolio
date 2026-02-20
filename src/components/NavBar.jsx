import React, {useState, useEffect} from 'react';
import { useApplicationContext, sections } from "../contexts/ContextProvider.jsx";
import "../styles/NavBar.scss";

const NavBar = () => {
  const { activeSection, setActiveSection } = useApplicationContext();
  const [showOnlyActiveSection, setShowOnlyActiveSection] = useState(
    window.matchMedia("(max-width: 1000px)").matches
  );
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)");
    const handleMediaChange = () => setShowOnlyActiveSection(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    }
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
        >
          <span
            className={`material-symbols-rounded arrow-icon ${menuToggle? 'rotated': ''}`}>
            arrow_drop_down
          </span>
        </div>
      </div>
      <div className={`nav-menu-container ${menuToggle? 'open': ''}`}>
        <div className="nav-menu">
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

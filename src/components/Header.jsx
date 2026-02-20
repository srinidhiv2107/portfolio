import React from 'react';
import NavBar from "./NavBar.jsx";
import '../styles/Header.scss';

// { isStarTrailEnabled, handleStarTrailToggle }
const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="h2">
          hello i'm <span>srinidhi</span>. welcome to my space!
        </h1>
        {/*<button*/}
        {/*  className={`header__toggle ${isStarTrailEnabled ? 'active' : ''}`}*/}
        {/*  onClick={() => handleStarTrailToggle(!isStarTrailEnabled)}*/}
        {/*  title={isStarTrailEnabled ? 'Disable star trail' : 'Enable star trail'}*/}
        {/*  data-is-stars-enabled={`${isStarTrailEnabled}`}*/}
        {/*>*/}
        {/*  <span className="header__toggle-text">*/}
        {/*    {isStarTrailEnabled ? 'Disable star trail' : 'Enable star trail'}*/}
        {/*  </span>*/}
        {/*  <span className="header__toggle-icon">✨</span>*/}
        {/*</button>*/}
      </div>
      <NavBar />
    </div>
  );
};

export default Header;

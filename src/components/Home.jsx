import React from 'react';
import myPhoto from "../assets/my-photos/my-photo.jpg";
import Photo from "./Photo.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import "../styles/Home.scss";
import SocialLinks from "./SocialLinks.jsx";

const Home = () => {
  return (
    <div className="home-container">
      <div className="photo-links-about-wrapper">
        <div className="photo-links-wrapper">
          <Photo photoSrc={myPhoto} alt={"My Photo"} />
          <SocialLinks />
        </div>
        <About />
      </div>
      <Skills />
    </div>
  );
};

export default Home;

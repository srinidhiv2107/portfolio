import React from 'react';
import myPhoto from "../assets/images/my-photo.jpeg";
import Photo from "./Photo.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="photo-about-wrapper">
        <Photo photoSrc={myPhoto} alt={"My Photo"} />
        <About />
      </div>
      <Skills />
    </div>
  );
};

export default Home;

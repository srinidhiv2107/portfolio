import React from 'react';
import "../styles/About.scss";

const About = () => {
  return (
    <div className="about">
      <h3 className="h3">About Me</h3>
      <div className="about-content">
        <p className="p2">
          I'm <strong>Srinidhi V</strong>, a recent Computer Science graduate from NIE, Mysuru.
          I love bringing ideas to life on the web—frontend development is something I truly
          enjoy, especially crafting clean and responsive UIs (though I'm into full-stack
          development too!).
        </p>
        <p className="p2">
          When I'm not playing with React or styling with CSS, you'll probably find me
          solving problems on LeetCode or HackerRank. I've been interested in engineering
          since the beginning, and to me, coding feels like a fun game—of course it's
          challenging, but that feeling when you finally crack a tough problem is totally worth it!
        </p>
        <p className="p2">
          When I'm free, you'll probably find me sketching, playing chess or badminton,
          or watching movies (a huge fan of South Indian cinema and the Marvel Cinematic Universe!).
          I also enjoy exploring new and curious things, whether it's tech-related or some
          interesting science content from YouTube channels like Veritasium, Branch Education,
          or 3Blue1Brown.
        </p>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import { useApplicationContext } from "../contexts/ContextProvider.jsx";
import "../styles/Experience.scss";

const educationData = [
  {
    school: "the national institute of engineering, mysuru",
    course: "b.e. - computer science",
    score: "cgpa: 9.32",
    duration: "2021-2025"
  },
  {
    school: "sadvidya composite pu college, mysuru",
    course: "puc - pcmb",
    score: "percentage: 98.83",
    duration: "2019-2021"
  },
  {
    school: "sadvidya high school, mysuru",
    course: "sslc",
    score: "percentage: 96.96",
    duration: "2016-2019"
  }
];

const workData = [
  {
    role: "application developer",
    company: "thoughtworks",
    duration: "june 2025 - present",
    description: "currently, i'm working at thoughtworks, where i started with training in react and spring boot, and i’m now exploring android development using kotlin while continuing to grow as a developer and learn modern software engineering practices.",
  },
  {
    role: "frontend developer intern",
    company: "elementure",
    duration: "jan 2025 - may 2025",
    description: "at elementure, i worked on developing figma-based responsive websites using react. along the way, i gained hands-on experience with scss, tailwind css, and google cloud platform (gcp). this role helped me refine my frontend development skills and adapt to real-world design-to-code workflows.",
    skills: ["react", "express", "scss", "tailwind", "gcp"]
  },
  {
    role: "web development intern",
    company: "rexsatronix",
    duration: "jun 2024 - aug 2024",
    description: "this is where my journey in web development began. i explored the fundamentals of frontend and backend development and got introduced to react. this internship gave me a solid foundation in building dynamic and interactive web applications.",
    skills: ["html", "css", "javascript", "react"]
  }
];

const Experience = () => {
  const { setActiveSection } = useApplicationContext();

  const handleAllSkillsButtonClick = () => {
    setActiveSection("home");
  };

  const renderTimeline = (type, icon, data) => {
    return (
      <div className="timeline">
        <div className="checkpoint">
          <div className="checkpoint-header">
            <span className="material-symbols-rounded h4">{icon}</span>
            <h4 className="h4">{`${type} commits`}</h4>
          </div>
        </div>
        {type === "education"? (
          data.map((edu, index) => (
            <div className="checkpoint" key={`edu-${index}`}>
              <div>
                <p className="heading">{edu.school}</p>
                <p className="sub-heading">{edu.course}</p>
                <div className="wrapper">
                  <p className="label">{edu.score}</p>
                  <p className="text">{edu.duration}</p>
                </div>
              </div>
            </div>
          ))
        ): (
          data.map((work, index) => (
            <div className="checkpoint" key={`work-${index}`}>
              <div>
                <p className="heading">{work.role}</p>
                <div className="wrapper">
                  <p className="sub-heading">{work.company}</p>
                  <p className="text">{work.duration}</p>
                </div>
                <p className="text">{work?.description}</p>
                <div className="wrapper" style={{ justifyContent: "flex-start", gap: "0.4rem" }}>
                  {work.company === "thoughtworks"?
                    <button
                      className="all-skills-button label"
                      onClick={handleAllSkillsButtonClick}
                    >
                      view my current skills
                    </button>
                    : work.skills.map((skill, i) => (
                    <p key={i} className="label">{skill}</p>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }

  return (
    <div className="experience-container">
      {renderTimeline("work", "work", workData)}
      {renderTimeline("education", "book", educationData)}
    </div>
  );
};

export default Experience;

import React from 'react';
import { useActiveSectionContext } from "../contexts/ActiveSectionContextProvider.jsx";
import "../styles/Experience.scss";

const educationData = [
  {
    school: "The National Institute of Engineering, Mysuru",
    course: "BE - Computer Science",
    score: "CGPA: 9.32",
    duration: "2021-2025"
  },
  {
    school: "Sadvidya Composite PU College, Mysuru",
    course: "PUC - PCMB",
    score: "Percentage: 98.83",
    duration: "2019-2021"
  },
  {
    school: "Sadvidya High School, Mysuru",
    course: "SSLC",
    score: "Percentage: 96.96",
    duration: "2016-2019"
  }
];

const workData = [
  {
    role: "Application Developer",
    company: "Thoughtworks",
    duration: "June 2025 – Present",
    description: "Currently, I’m working at Thoughtworks, where I started with training in React and Spring Boot, and I’m now exploring Android development using Kotlin while continuing to grow as a developer and learn modern software engineering practices.",
  },
  {
    role: "Frontend Developer Intern",
    company: "Elementure",
    duration: "Jan 2025 – May 2025",
    description: "At Elementure, I worked on developing Figma-based responsive websites using React. Along the way, I gained hands-on experience with SCSS, Tailwind CSS, and Google Cloud Platform (GCP). This role helped me refine my frontend development skills and adapt to real-world design-to-code workflows.",
    skills: ["React", "Express", "SCSS", "Tailwind", "GCP"]
  },
  {
    role: "Web Development Intern",
    company: "Rexsatronix",
    duration: "Jun 2024 – Aug 2024",
    description: "This is where my journey in web development began. I explored the fundamentals of frontend and backend development and got introduced to React. This internship gave me a solid foundation in building dynamic and interactive web applications.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Express"]
  }
];

const Experience = () => {
  const { setActiveSection } = useActiveSectionContext();

  const handleAllSkillsButtonClick = () => {
    setActiveSection("home");
  };

  const renderTimeline = (type, icon, data) => {
    return (
      <div className="timeline">
        <div className="checkpoint">
          <div className="checkpoint-header">
            <span className="material-symbols-rounded h4">{icon}</span>
            <h4 className="h4">{type}</h4>
          </div>
        </div>
        {type === "Education"? (
          data.map((edu, index) => (
            <div className="checkpoint" key={`edu-${index}`}>
              <div>
                <p className="heading">{edu.school}</p>
                <p className="sub-heading">{edu.course}</p>
                <div className="wrapper">
                  <p className="l2 label">{edu.score}</p>
                  <p className="l1">{edu.duration}</p>
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
                  {work.company === "Thoughtworks"?
                    <button
                      className="all-skills-button l2 label"
                      onClick={handleAllSkillsButtonClick}
                    >
                      View my current skills
                    </button>
                    : work.skills.map((skill, i) => (
                    <p key={i} className="l2 label">{skill}</p>
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
    <div id={"test"} className="experience-container">
      {renderTimeline("Work", "work", workData)}
      {renderTimeline("Education", "book", educationData)}
    </div>
  );
};

export default Experience;

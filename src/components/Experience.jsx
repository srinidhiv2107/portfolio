import React from 'react';
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
    description: "Worked on building responsive UIs from Figma designs using React and SCSS.",
    skills: ["React", "SCSS", "Responsive Design"]
  },
  {
    role: "Frontend Developer Intern",
    company: "Elementure",
    duration: "Jan 2025 – May 2025",
    description: "Worked on building responsive UIs from Figma designs using React and SCSS.",
    skills: ["React", "SCSS", "Responsive Design"]
  },
  {
    role: "Web Development Intern",
    company: "Rexsatronix",
    duration: "Jun 2024 – Aug 2024",
    description: "Developed dashboards and internal tools using React and Express.",
    skills: ["React", "Express", "MongoDB"]
  }
];

const styles = {
  heading: {
    fontSize: "1.3rem",
  },
  subHeading: {
    fontSize: "1.2rem",
  },
  text: {
    fontSize: "1rem",
  },
  label: {
    padding: "0.1rem 0.5rem",
    border: "0.1rem solid var(--color-primary-80)",
    borderRadius: "0.5rem",
    background: "var(--color-primary-20)",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  }
};

const Experience = () => {
  const renderTimeline = (type, icon, data) => {
    return (
      <div className="timeline">
        <div className="checkpoint">
          <div className="checkpoint-header">
            <span className="material-symbols-rounded h3">{icon}</span>
            <h3 className="h3">{type}</h3>
          </div>
        </div>
        {type === "Education"? (
          data.map((edu, index) => (
            <div className="checkpoint" key={`edu-${index}`}>
              <div>
                <p style={styles.heading}>{edu.school}</p>
                <p style={styles.subHeading}>{edu.course}</p>
                <div style={styles.wrapper}>
                  <p style={{ ...styles.text, ...styles.label }}>{edu.score}</p>
                  <p style={styles.text}>{edu.duration}</p>
                </div>
              </div>
            </div>
          ))
        ): (
          data.map((work, index) => (
            <div className="checkpoint" key={`work-${index}`}>
              <div>
                <p style={styles.heading}>{work.role}</p>
                <div style={styles.wrapper}>
                  <p style={styles.subHeading}>{work.company}</p>
                  <p style={styles.text}>{work.duration}</p>
                </div>
                <p style={{...styles.text}}>{work?.description}</p>
                <div style={{...styles.wrapper, justifyContent: "flex-start", gap: "0.4rem"}}>
                  {work?.skills.map((skill, i) => (
                    <p key={i} style={styles.label}>{skill}</p>
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
      {renderTimeline("Education", "book", educationData)}
      {renderTimeline("Work", "work", workData)}
    </div>
  );
};

export default Experience;

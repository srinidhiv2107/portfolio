import React from 'react';
import { useApplicationContext } from "../contexts/ContextProvider.jsx";
import { workData, educationData } from "./ExperienceData.jsx";
import "../styles/Experience.scss";

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

import React, { useState } from 'react';
import python from "../assets/icons/Python.svg";
import c from "../assets/icons/C.svg";
import cpp from "../assets/icons/CPP.svg";
import js from "../assets/icons/JavaScript.svg";
import java from "../assets/icons/Java.svg";
import html from "../assets/icons/HTML.svg";
import css from "../assets/icons/CSS.svg";
import sass from "../assets/icons/Sass.svg";
import tailwind from "../assets/icons/TailwindCSS.svg";
import nodejs from "../assets/icons/NodeJS.svg";
import react from "../assets/icons/React.svg";
import express from "../assets/icons/Express.svg";
import spring from "../assets/icons/Spring.svg";
import jest from "../assets/icons/Jest.svg";
import cypress from "../assets/icons/Cypress.svg";
import junit from "../assets/icons/JUnit.svg";
import mysql from "../assets/icons/MySQL.svg";
import postgres from "../assets/icons/PostgresSQL.svg";
import mongodb from "../assets/icons/MongoDB.svg";
import github from "../assets/icons/GitHub.svg";
import webstorm from "../assets/icons/WebStorm.svg";
import vscode from "../assets/icons/VSCode.svg";
import postman from "../assets/icons/Postman.svg";
import '../styles/Skills.scss';

const skills = [
  { name: "C", icon: c },
  { name: "Python", icon: python },
  { name: "C++", icon: cpp },
  { name: "JavaScript", icon: js },
  { name: "Java", icon: java },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "SCSS", icon: sass },
  { name: "Tailwind", icon: tailwind },
  { name: "NodeJS", icon: nodejs },
  { name: "React", icon: react },
  { name: "Express", icon: express },
  { name: "Spring Boot", icon: spring },
  { name: "Jest", icon: jest },
  { name: "Cypress", icon: cypress },
  { name: "JUnit", icon: junit },
  { name: "MySQL", icon: mysql },
  { name: "Postgres", icon: postgres },
  { name: "MongoDB", icon: mongodb },
  { name: "GitHub", icon: github },
  { name: "WebStorm", icon: webstorm },
  { name: "VS Code", icon: vscode },
  { name: "Postman", icon: postman },
];

const Skills = () => {
  const [isCompactView, setIsCompactView] = useState(false);

  const toggleView = () => {
    setIsCompactView(!isCompactView);
  };

  const renderSkillsSlide = (type) => {
    return (
      <div className={`skills-view__${type}`}>
        {skills.map((skill, index) => (
          <div key={index} className="skills-view__item">
            <img className="skills-view__icon" src={skill.icon} alt={skill.name}/>
            <span className="skills-view__name">{skill.name}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h3 className="h3">Skills</h3>

        <button
          className="skills-header__toggle"
          onClick={toggleView}
        >
          {isCompactView ? 'Animated View' : 'Compact View'}
        </button>
      </div>

      <div className="skills-view">
        {isCompactView ? (
          renderSkillsSlide("compact")
        ) : (
          <>
            {renderSkillsSlide("slide")}
            {renderSkillsSlide("slide")}
          </>
        )}
      </div>
    </div>
  );
};

export default Skills;

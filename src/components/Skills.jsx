import React, { useState } from 'react';
import python from "../assets/icons/Python.svg";
import c from "../assets/icons/C.svg";
import cpp from "../assets/icons/CPP.svg";
import js from "../assets/icons/JavaScript.svg";
import java from "../assets/icons/Java.svg";
import kotlin from "../assets/icons/Kotlin.svg";
import html from "../assets/icons/HTML.svg";
import css from "../assets/icons/CSS.svg";
import sass from "../assets/icons/Sass.svg";
import MUI from "../assets/icons/MUI.svg";
import tailwind from "../assets/icons/TailwindCSS.svg";
import nodejs from "../assets/icons/NodeJS.svg";
import react from "../assets/icons/React.svg";
import express from "../assets/icons/Express.svg";
import vite from "../assets/icons/Vite.svg";
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
  { name: "c", icon: c },
  { name: "python", icon: python },
  { name: "c++", icon: cpp },
  { name: "javascript", icon: js },
  { name: "java", icon: java },
  { name: "kotlin", icon: kotlin },
  { name: "html", icon: html },
  { name: "css", icon: css },
  { name: "scss", icon: sass },
  { name: "mui", icon: MUI },
  { name: "tailwind", icon: tailwind },
  { name: "nodejs", icon: nodejs },
  { name: "react", icon: react },
  { name: "express", icon: express },
  { name: "vite", icon: vite },
  { name: "spring boot", icon: spring },
  { name: "jest", icon: jest },
  { name: "cypress", icon: cypress },
  { name: "junit", icon: junit },
  { name: "mysql", icon: mysql },
  { name: "postgres", icon: postgres },
  { name: "mongodb", icon: mongodb },
  { name: "github", icon: github },
  { name: "webstorm", icon: webstorm },
  { name: "vs code", icon: vscode },
  { name: "postman", icon: postman },
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
        <h4 className="h4">skills</h4>

        <button
          className="skills-header__toggle b2"
          onClick={toggleView}
        >
          {isCompactView ? 'animate' : 'compact'}
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

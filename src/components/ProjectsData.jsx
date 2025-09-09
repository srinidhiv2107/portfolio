import fixngo1 from "../assets/project-images/fixngo-1.png";
import fixngo2 from "../assets/project-images/fixngo-2.png";

import nlqe1 from "../assets/project-images/nlqe-1.png";
import nlqe2 from "../assets/project-images/nlqe-2.png";
import nlqe3 from "../assets/project-images/nlqe-3.png";
import nlqe4 from "../assets/project-images/nlqe-4.png";
import nlqe5 from "../assets/project-images/nlqe-5.png";

import wordle1 from "../assets/project-images/wordle-1.png";
import wordle2 from "../assets/project-images/wordle-2.png";
import wordle3 from "../assets/project-images/wordle-3.png";
import wordle4 from "../assets/project-images/wordle-4.png";

import trainease1 from "../assets/project-images/trainease-1.png";
import trainease2 from "../assets/project-images/trainease-2.png";
import trainease3 from "../assets/project-images/trainease-3.png";
import trainease4 from "../assets/project-images/trainease-4.png";

import userapp1 from "../assets/project-images/users-app-1.png";
import userapp2 from "../assets/project-images/users-app-2.png";
import userapp3 from "../assets/project-images/users-app-3.png";
import userapp4 from "../assets/project-images/users-app-4.png";

import loadster1 from "../assets/project-images/loadster-1.png";
import loadster2 from "../assets/project-images/loadster-2.png";
import loadster3 from "../assets/project-images/loadster-3.png";
import loadster4 from "../assets/project-images/loadster-4.png";

import studiodumin1 from "../assets/project-images/studiodumin-1.png";
import studiodumin2 from "../assets/project-images/studiodumin-2.png";
import studiodumin3 from "../assets/project-images/studiodumin-3.png";
import studiodumin4 from "../assets/project-images/studiodumin-4.png";

import wertetek1 from "../assets/project-images/wertetek-1.png";
import wertetek2 from "../assets/project-images/wertetek-2.png";
import wertetek3 from "../assets/project-images/wertetek-3.png";
import wertetek4 from "../assets/project-images/wertetek-4.png";

export const projectsData = [
  {
    images: [fixngo1, fixngo2],
    name: "FixNGo",
    description: `
      FixNGo is a platform that connects customers with nearby service providers 
      for home needs like plumbing, electrical repairs, and hairstyling. 
      It includes features such as face verification for service providers, 
      ratings and reviews, profile management, and booking services at a preferred time. 
      With maps integration for client location and a built-in chat system 
      (with image sharing using Redis), FixNGo makes finding and booking 
      trusted local services simple and efficient.
    `,
    techUsed: ["React", "MUI", "Django", "MySQL", "Redis"],
    linkName: "View code",
    link: "https://github.com/NiranjanBhat123/major_project"
  },
  {
    images: [nlqe1, nlqe2, nlqe3, nlqe4, nlqe5],
    name: "NLQE",
    description: `
      Natural Language Query Executor (NLQE) is web tool that allows users to run SQL queries directly or 
      by using natural language. It supports converting NLQ 
      (natural language queries) to SQL with Gemini AI, 
      database visualization, and query explanation, analysis and enhancement. 
      Users can also view database tables and manage a history 
      of executed queries, making it easier to understand 
      and interact with data.
    `,
    techUsed: ["React", "Express", "MySQL", "Gemini AI"],
    linkName: "View code",
    link: "https://github.com/srinidhiv2107/NaturalLanguageQueryExecutor"
  },
  {
    images: [wordle1, wordle2, wordle3, wordle4],
    name: "Wordle Clone",
    description: `
      A clone of the popular Wordle game built using the MERN stack. 
      It includes a secure login system, a simple and interactive 
      game interface, and player statistics. Game progress and 
      results are stored in MongoDB, allowing users to track 
      their performance over time.
    `,
    techUsed: ["React", "Express", "Node.js", "MongoDB"],
    linkName: "View code",
    link: "https://github.com/srinidhiv2107/wordle"
  },
  {
    images: [loadster1, loadster2, loadster3, loadster4],
    name: "Loadster",
    description: `
    Loadster is a zero-commission delivery platform built to connect 
    businesses and individuals with drivers seamlessly. It empowers driver partners, 
    called Champions, by ensuring they keep 100% of their earnings while 
    offering transparent and reliable delivery solutions. More than a service, 
    Loadster fosters a trusted community built on openness, fairness, and shared success.
  `,
    techUsed: ["React", "CSS", "Figma", "GCP", "GitHub Actions"],
    linkName: "View live",
    link: "https://loadster.in/"
  },
  {
    images: [studiodumin1, studiodumin2, studiodumin3, studiodumin4],
    name: "Studiodumin",
    description: `
    Studiodumin is an interior design agency website that showcases creative 
    and functional design solutions for modern living spaces. It highlights 
    the agency’s expertise in blending aesthetics with practicality, 
    staying updated with trends, and delivering personalized experiences. 
    Built with React and SCSS, the site provides a clean and engaging 
    digital presence for the brand.
  `,
    techUsed: ["React", "SCSS", "Figma", "EmailJS"],
    linkName: "View live",
    link: "https://studiodumin.com/"
  },
  {
    images: [wertetek1, wertetek2, wertetek3, wertetek4],
    name: "Wertetek",
    description: `
    Wertetek is a multi-domain solutions provider offering expertise in 
    mechanical, electronics, software, construction, and design. 
    The website highlights the company’s focus on innovation, 
    quality, and client-centric services, covering everything from 
    engineering solutions to web and app development. 
    Built with React and Tailwind CSS, it delivers a modern 
    and professional digital presence.
  `,
    techUsed: ["React", "Tailwind CSS", "EmailJS"],
    linkName: "View live",
    link: "https://wertetek.com/"
  },
  {
    images: [trainease1, trainease2, trainease3, trainease4],
    name: "TrainEase",
    description: `
      A train booking system designed to make travel planning easier. 
      Built with a strong database backend, it provides features for 
      searching trains, booking tickets, and managing travel details. 
      The platform focuses on being user-friendly while offering 
      reliable performance for railway travel requirements.
    `,
    techUsed: ["React", "Express", "MySQL"],
    linkName: "View code",
    link: "https://github.com/srinidhiv2107/trainBookingSystem"
  },
  {
    images: [userapp1, userapp2, userapp3, userapp4],
    name: "UserTrack",
    description: `
    UserTrack is a user management application built to demonstrate 
    CRUD operations using a Spring Boot backend connected to a MySQL database. 
    It supports adding, updating, deleting, and searching users, 
    with database migrations for managing schema changes effectively. 
    The frontend is developed in React and styled with SCSS, 
    offering a clean and responsive interface.
  `,
    techUsed: ["React", "Spring Boot", "MySQL", "SCSS"],
    linkName: "View code",
    link: "https://github.com/srinidhiv2107/UserManagementApp"
  },
];

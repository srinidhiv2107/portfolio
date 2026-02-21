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
    name: "fixngo",
    description: `
      fixngo is a platform that connects customers with nearby service providers 
      for home needs like plumbing, electrical repairs, and hairstyling. 
      it includes features such as face verification for service providers, 
      ratings and reviews, profile management, and booking services at a preferred time. 
      with maps integration for client location and a built-in chat system 
      (with image sharing using redis), fixngo makes finding and booking 
      trusted local services simple and efficient.
    `,
    techUsed: ["react", "mui", "django", "mysql", "redis"],
    linkName: "view code",
    link: "https://github.com/niranjanbhat123/major_project"
  },
  {
    images: [nlqe1, nlqe2, nlqe3, nlqe4, nlqe5],
    name: "nlqe",
    description: `
      natural language query executor (nlqe) is web tool that allows users to run sql queries directly or 
      by using natural language. it supports converting nlq 
      (natural language queries) to sql with gemini ai, 
      database visualization, and query explanation, analysis and enhancement. 
      users can also view database tables and manage a history 
      of executed queries, making it easier to understand 
      and interact with data.
    `,
    techUsed: ["react", "express", "mysql", "gemini ai"],
    linkName: "view code",
    link: "https://github.com/srinidhiv2107/naturallanguagequeryexecutor"
  },
  {
    images: [wordle1, wordle2, wordle3, wordle4],
    name: "wordle clone",
    description: `
      a clone of the popular wordle game built using the mern stack. 
      it includes a secure login system, a simple and interactive 
      game interface, and player statistics. game progress and 
      results are stored in mongodb, allowing users to track 
      their performance over time.
    `,
    techUsed: ["react", "express", "node.js", "mongodb"],
    linkName: "view code",
    link: "https://github.com/srinidhiv2107/wordle"
  },
  {
    images: [studiodumin1, studiodumin2, studiodumin3, studiodumin4],
    name: "studiodumin",
    description: `
      studiodumin is an interior design agency website that showcases creative 
      and functional design solutions for modern living spaces. it highlights 
      the agency’s expertise in blending aesthetics with practicality, 
      staying updated with trends, and delivering personalized experiences. 
      built with react and scss, the site provides a clean and engaging 
      digital presence for the brand.
    `,
    techUsed: ["react", "scss", "figma", "emailjs"],
    linkName: "view live",
    link: "https://studiodumin.com/"
  },
  {
    images: [loadster1, loadster2, loadster3, loadster4],
    name: "loadster",
    description: `
      loadster is a zero-commission delivery platform built to connect 
      businesses and individuals with drivers seamlessly. it empowers driver partners, 
      called champions, by ensuring they keep 100% of their earnings while 
      offering transparent and reliable delivery solutions. more than a service, 
      loadster fosters a trusted community built on openness, fairness, and shared success.
    `,
    techUsed: ["react", "css", "figma", "gcp", "github actions"],
    linkName: "view live",
    link: "https://loadster.in/"
  },
  {
    images: [wertetek1, wertetek2, wertetek3, wertetek4],
    name: "wertetek",
    description: `
      wertetek is a multi-domain solutions provider offering expertise in 
      mechanical, electronics, software, construction, and design. 
      the website highlights the company’s focus on innovation, 
      quality, and client-centric services, covering everything from 
      engineering solutions to web and app development. 
      built with react and tailwind css, it delivers a modern 
      and professional digital presence.
    `,
    techUsed: ["react", "tailwind css", "emailjs"],
    linkName: "view live",
    link: "https://wertetek.com/"
  },
  {
    images: [trainease1, trainease2, trainease3, trainease4],
    name: "trainease",
    description: `
      a train booking system designed to make travel planning easier. 
      built with a strong database backend, it provides features for 
      searching trains, booking tickets, and managing travel details. 
      the platform focuses on being user-friendly while offering 
      reliable performance for railway travel requirements.
    `,
    techUsed: ["react", "express", "mysql"],
    linkName: "view code",
    link: "https://github.com/srinidhiv2107/trainbookingsystem"
  },
  {
    images: [userapp1, userapp2, userapp3, userapp4],
    name: "usertrack",
    description: `
      usertrack is a user management application built to demonstrate 
      crud operations using a spring boot backend connected to a mysql database. 
      it supports adding, updating, deleting, and searching users, 
      with database migrations for managing schema changes effectively. 
      the frontend is developed in react and styled with scss, 
      offering a clean and responsive interface.
    `,
    techUsed: ["react", "spring boot", "mysql", "scss"],
    linkName: "view code",
    link: "https://github.com/srinidhiv2107/usermanagementapp"
  },
];

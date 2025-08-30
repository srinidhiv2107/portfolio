import React from 'react';
import fixngo1 from "../assets/project-images/fixngo-1.png";
import fixngo2 from "../assets/project-images/fixngo-2.png";

import nlqe1 from "../assets/project-images/nlqe-1.png";
import nlqe2 from "../assets/project-images/nlqe-2.png";
import nlqe3 from "../assets/project-images/nlqe-3.png";
import nlqe4 from "../assets/project-images/nlqe-4.png";

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

import Carousel from "./Carousel.jsx";
import "../styles/Projects.scss";

const fixngoImages = [fixngo1, fixngo2];
const nlqeImages = [nlqe1, nlqe2, nlqe3, nlqe4];
const wordleImages = [wordle1, wordle2, wordle3, wordle4];
const traineaseImages = [trainease1, trainease2, trainease3, trainease4];
const usersAppImages = [userapp1, userapp2, userapp3, userapp4];
const loadsterImages = [loadster1, loadster2, loadster3, loadster4];
const studioduminImages = [studiodumin1, studiodumin2, studiodumin3, studiodumin4];
const wertetekImages = [wertetek1, wertetek2, wertetek3, wertetek4];

const Projects = () => {
  return (
    <div className="projects-container">
      <h4 className="h4">Projects</h4>
      <div className="projects-grid">
        <Carousel images={fixngoImages} />
        <Carousel images={nlqeImages} />
        <Carousel images={wordleImages} />
        <Carousel images={traineaseImages} />
        <Carousel images={usersAppImages} />
        <Carousel images={loadsterImages} />
        <Carousel images={studioduminImages} />
        <Carousel images={wertetekImages} />
      </div>
    </div>
  );
};

export default Projects;

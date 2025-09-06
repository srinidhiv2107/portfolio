import React, { useState } from 'react';
import PDFViewer from "./PDFViewer.jsx";
import "../styles/Resume.scss";

const Resume = () => {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <div className="resume-container">
      <button
        onClick={() => setShowPDF(true)}
        className="show-pdf-btn"
      >
        Show PDF
      </button>
      {showPDF &&
        <PDFViewer togglePDF={() => setShowPDF(!showPDF)}/>
      }
    </div>
  );
};

export default Resume;

import React, { useState } from "react";
import { GridLoader } from "react-spinners";
import "../styles/PDFViewer.scss";

const PDFViewer = ({ togglePDF }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className="pdf-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) togglePDF();
      }}
    >
      <div className="pdf-viewer-container">
        {isLoading &&
          <div className="pdf-loader">
            <GridLoader
              size={8}
              color="#FFFFFF"
            />
          </div>
        }
        <iframe
          src="https://drive.google.com/file/d/1-sZ2IrNiCJMAVxd0TzE3ec3eZnxcDArW/preview"
          allow="autoplay"
          onLoad={() => setIsLoading(false)}
          style={{ opacity: isLoading ? 0 : 1 }}
        />
      </div>
    </div>
  );
};

export default PDFViewer;

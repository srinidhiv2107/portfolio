import React from 'react';
import Quotes from "./Quotes.jsx";
import Contact from "./Contact.jsx";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Quotes />
      <Contact />
    </div>
  );
};

export default Footer;

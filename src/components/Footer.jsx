import React, { useState, useRef, useEffect } from 'react';
import "../styles/Footer.scss";
import Quotes from "./Quotes.jsx";

const Footer = () => {
  const [contactToggle, setContactToggle] = useState(false);
  const [contactFormHeight, setContactFormHeight] = useState(0);
  const contactFormRef = useRef(null);

  const handleContactToggle = () => {
    setContactToggle(!contactToggle);
  }

  useEffect(() => {
    if(contactFormRef.current) {
      setContactFormHeight(contactToggle ? contactFormRef.current.scrollHeight : 0);
    }
  }, [contactToggle]);

  return (
    <div className="footer">
      <Quotes />
      <div className="footer__contact">
        <div
          className="footer__contact-label"
          data-form-open={`${contactToggle}`}
        >
          <p className="p2">Contact</p>
          <span
            className={`material-symbols-rounded arrow-icon ${contactToggle ? 'rotated' : ''}`}
            onClick={handleContactToggle}
          >
            arrow_drop_down
          </span>
        </div>
        <div
          className={`footer__contact-form ${contactToggle ? 'open' : 'closed'}`}
          style={{ height: `${contactFormHeight}px` }}
        >
          <div ref={contactFormRef} className="footer__contact-form-content">
            <p className="p1">Get in Touch</p>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message" rows="4" cols="4"></textarea>
              <button type="submit">
                Send
                <span className="material-symbols-rounded">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

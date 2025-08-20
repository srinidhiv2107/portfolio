import React, { useState, useRef, useEffect } from 'react';
import { quotes } from "./Quotes.jsx";
import "../styles/Footer.scss";

const Footer = () => {
  const [quotesToggle, setQuotesToggle] = useState(true);
  const [contactToggle, setContactToggle] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [contactFormHeight, setContactFormHeight] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const contentRef = useRef(null);
  const contactFormRef = useRef(null);

  const handleQuotesToggle = () => {
    setQuotesToggle(!quotesToggle);
  }

  const handleContactToggle = () => {
    setContactToggle(!contactToggle);
  }

  // Handle quotes section height animation
  useEffect(() => {
    if(contentRef.current) {
      setContentHeight(quotesToggle ? contentRef.current.scrollHeight : 0);
    }
  }, [quotesToggle]);

  // Handle contact form height animation
  useEffect(() => {
    if(contactFormRef.current) {
      setContactFormHeight(contactToggle ? contactFormRef.current.scrollHeight : 0);
    }
  }, [contactToggle]);

  useEffect(() => {
    if(!quotesToggle) return;

    const currentQuote = quotes[currentQuoteIndex];
    let timeoutId;

    if(isTyping) {
      // Typing animation
      if (displayText.length < currentQuote.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentQuote.slice(0, displayText.length + 1));
        }, 50); // Typing speed
      } else {
        // Pause before erasing
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 7000);
      }
    } else {
      // Erasing animation
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30); // Erasing speed (faster than typing)
      } else {
        // Move to the next quote
        timeoutId = setTimeout(() => {
          setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, currentQuoteIndex, isTyping, quotesToggle, quotes]);

  // Reset animation when a quotes section is toggled
  useEffect(() => {
    if (quotesToggle) {
      setDisplayText('');
      // setCurrentQuoteIndex(0);
      setIsTyping(true);
    }
  }, [quotesToggle]);

  return (
    <div className="footer">
      <div className="footer__quotes">
        <div className="footer__quotes-label">
          <p className="p2">Quotes</p>
          <span
            className={`material-symbols-rounded arrow-icon ${quotesToggle ? 'rotated' : ''}`}
            onClick={handleQuotesToggle}
          >
            arrow_drop_down
          </span>
        </div>
        <div
          className={`footer__quotes-display ${quotesToggle ? 'open' : 'closed'}`}
          style={{ height: `${contentHeight}px` }}
        >
          <div ref={contentRef} className="footer__quotes-display-content">
            <div className="footer__quotes-display-line"></div>
            <p className="footer__quotes-display-text p2">
              {displayText}
            </p>
          </div>
        </div>
      </div>
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

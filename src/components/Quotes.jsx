import React, { useState, useEffect } from 'react';
import { quotes } from "./QuotesList.jsx";
import "../styles/Quotes.scss";

const Quotes = () => {
  const [quotesToggle, setQuotesToggle] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const handleQuotesToggle = () => {
    setQuotesToggle(!quotesToggle);
  }

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
        }, 5000);
      }
    } else {
      // Erasing animation
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 35); // Erasing speed (faster than typing)
      } else {
        // Move to the next quote
        timeoutId = setTimeout(() => {
          setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, currentQuoteIndex, isTyping, quotesToggle]);

  // Reset animation when a quotesList section is toggled
  useEffect(() => {
    if (quotesToggle) {
      setDisplayText('');
      setIsTyping(true);
    }
  }, [quotesToggle]);

  return (
    <div className="quotes">
      <div className="quotes-label">
        <p className="p2">Quotes</p>
        <span
          className={`material-symbols-rounded arrow-icon ${quotesToggle ? 'rotated' : ''}`}
          onClick={handleQuotesToggle}
        >
            arrow_drop_up
          </span>
      </div>
      <div className={`quotes-display ${quotesToggle ? 'open' : ''}`}>
        <div className="quotes-display-content">
          <div className="quotes-display-content-line"></div>
          <p className="quotes-display-content-text">
            <span>{displayText}</span><span></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quotes;

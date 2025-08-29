import React, { useState, useEffect, useRef } from 'react';
import { quotes } from "./QuotesList.jsx";
import "../styles/Quotes.scss";

const Quotes = () => {
  const [quotesToggle, setQuotesToggle] = useState(true);
  const [contentHeight, setContentHeight] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const contentRef = useRef(null);

  const handleQuotesToggle = () => {
    setQuotesToggle(!quotesToggle);
  }

  useEffect(() => {
    if(contentRef.current) {
      setContentHeight(quotesToggle ? contentRef.current.scrollHeight : 0);
    }
  }, [quotesToggle]);

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
            arrow_drop_down
          </span>
      </div>
      <div
        className={`quotes-display ${quotesToggle ? 'open' : 'closed'}`}
        style={{ height: `${contentHeight}px` }}
      >
        <div ref={contentRef} className="quotes-display-content">
          <div className="quotes-display-line"></div>
          <p className="quotes-display-text">
            {displayText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quotes;

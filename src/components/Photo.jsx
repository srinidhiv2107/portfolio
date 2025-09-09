import React, { useState, useEffect } from 'react';
import { useApplicationContext } from "../contexts/ContextProvider.jsx";
import '../styles/Photo.scss';

const Photo = ({ photoSrc, alt }) => {
  const [showBubble, setShowBubble] = useState(false);
  const { username, setUsername } = useApplicationContext();

  useEffect(() => {
    const handleSpeechBubble = () => {
      let seenBubble = localStorage.getItem("seenBubble");
      if(!seenBubble) setShowBubble(true);
    };

    setTimeout(handleSpeechBubble, 4000);
  }, []);

  const handleSpeechBubbleClose = () => {
    localStorage.setItem("seenBubble", "true");
    setShowBubble(false);
  }

  const handleSubmit = () => {
    const value = username.trim();
    if(value) {
      localStorage.setItem("username", value);
      setUsername(username)
      handleSpeechBubbleClose()
    }
  };

  return (
    <>
      {showBubble && <div className="photo-backdrop"></div>}
      <div
        className="space-photo-holder"
        style={{ zIndex: `${showBubble ? 1000 : 'auto'}` }}
      >
        {showBubble && (
          <div className="speech-bubble">
            <p className="speech-text">Hey can you please type in your name?</p>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="speech-input"
            />
            <div className="speech-actions">
              <button onClick={handleSpeechBubbleClose}>Skip</button>
              <button onClick={handleSubmit}>Done</button>
            </div>
          </div>
        )}

        <div className="photo-frame">
          <img src={photoSrc} alt={alt} className="photo" />
        </div>

        {/* orbits */}
        <div className="orbit-container">
          <div className="orbit orbit-1">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
          </div>
          <div className="orbit orbit-2">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
          </div>
          <div className="orbit orbit-3">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photo;

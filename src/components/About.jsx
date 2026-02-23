import React, {useEffect, useState} from 'react';
import {useApplicationContext} from "../contexts/ContextProvider.jsx";
import "../styles/About.scss";

const About = () => {
  const { username, setUsername } = useApplicationContext();
  const [tempUsername, setTempUsername] = useState("");
  const [glowing, setGlowing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const seenBubble = localStorage.getItem("seenBubble");
    const storedUsername = localStorage.getItem("username");
    if(seenBubble && storedUsername) {
      setUsername(storedUsername)
    }
  }, [setUsername]);

  useEffect(() => {
    setTempUsername(username);
  }, [username]);

  useEffect(() => {
    const trigger = setTimeout(() => {
      setGlowing(true);
    }, 10);

    const reset = setTimeout(() => {
      setGlowing(false);
    }, 1300);

    return () => {
      clearTimeout(trigger);
      clearTimeout(reset);
    };
  }, [username]);

  const handleOnBlur = () => {
    const value = tempUsername.trim();
    if(value !== "") {
      localStorage.setItem("username", value);
      setUsername(value);
    }
    else setTempUsername(username);
  };

  return (
    <div className="about">
      <h4 className="h4">about me</h4>
      <div className="about-content">
        <div className={`about-content-body ${isExpanded ? "expanded" : ""}`}>
          <p>
            hello
            {username && (
              <>
                {" "}
                <input
                  id="username"
                  type="text"
                  value={tempUsername}
                  onChange={(e) => setTempUsername(e.target.value)}
                  onBlur={handleOnBlur}
                  className={`username-field ${glowing? 'glow': ''}`}
                  autoComplete="off"
                />
              </>
            )}
            , i'm <strong>srinidhi v</strong>, a computer science graduate from nie
            mysuru '25. i'm from mysuru, karnataka, and currently working at
            thoughtworks as an application developer. there, i'm exploring ai and its ecosystem, 
            focusing on intelligent tools and agent-based systems through hands-on experimentation.
          </p>
          <p>
            although i chose biology during puc (reasons many of you might guess), i
            always had an interest in coding. and when i started to code, i actually
            started liking problem-solving through programming{" "}
            (my{" "}
            <a
              href="https://leetcode.com/u/srinidhiV2107/"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              leetcode
            </a>{" "}
            and{" "}
            <a
              href="https://www.hackerrank.com/profile/srinidhi01nov"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              hackerrank
            </a>{" "}
            profiles). for me, coding feels like a game - of course it's challenging,
            but that feeling when you finally crack a tough problem is totally worth
            it.
          </p>
          <p>
            i'm passionate about frontend design (though i'm into full stack too) and
            love bringing ideas to life on the web. with that said, there are times
            when css chaos makes me love the logic-driven work of backend even more
            :).
          </p>
          <p>
            outside of tech, I enjoy drawing, playing badminton, and watching movies.
            i'm a big fan of south indian cinema and the marvel cinematic universe
            (rdj as iron man is one of my favourites).
          </p>
          <p>
            that's a little about me. feel free to explore the rest of my site, and
            thank you for visiting my space!
          </p>
        </div>

        <button
          className="read-more-btn"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? "read less ↑" : "read more ↓"}
        </button>
      </div>
    </div>
  );
};

export default About;

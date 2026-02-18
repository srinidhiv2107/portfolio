import React, {useEffect, useState} from 'react';
import {useApplicationContext} from "../contexts/ContextProvider.jsx";
import "../styles/About.scss";

const About = () => {
  const { username, setUsername } = useApplicationContext();
  const [tempUsername, setTempUsername] = useState("");
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
  }, [username])

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
                  className="username-field"
                />
              </>
            )}
            , i'm <strong>srinidhi v</strong>, a computer science graduate from nie
            mysuru '25. i'm from mysuru, karnataka, and currently working at
            thoughtworks as an application developer, focusing on android mobile app
            development.
          </p>
          <p>
            although i chose biology during PUC (reasons many of you might guess), I
            always had an interest in coding. and when I started to code, I actually
            started liking problem-solving through programming{" "}
            (my{" "}
            <a
              href="https://leetcode.com/u/srinidhiV2107/"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              leetCode
            </a>{" "}
            and{" "}
            <a
              href="https://www.hackerrank.com/profile/srinidhi01nov"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              hackerRank
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
            i'm a big fan of south indian cinema and the marvel cinematic Universe
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

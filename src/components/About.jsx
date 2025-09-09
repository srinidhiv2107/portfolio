import React, {useEffect, useState} from 'react';
import {useApplicationContext} from "../contexts/ContextProvider.jsx";
import "../styles/About.scss";

const About = () => {
  const { username, setUsername } = useApplicationContext();
  const [tempUsername, setTempUsername] = useState("");

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
      <h4 className="h4">About Me</h4>
      <div className="about-content">
        <p>
          Hello
          {username &&
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
          }
          , I’m <strong>Srinidhi V</strong>, a Computer Science graduate from
          NIE Mysuru ’25. I’m from Mysuru, Karnataka, and currently working at Thoughtworks as an
          Application Developer, focusing on Android mobile app development.
        </p>
        <p>
          Although I chose biology during PUC (reasons many of you might guess), I always had an
          interest in coding. And when I started to code, I actually started liking problem-solving
          through programming{" "}
          (my <a
          href="https://leetcode.com/u/srinidhiV2107/"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          LeetCode
        </a>{" "}and{" "}
          <a
            href="https://www.hackerrank.com/profile/srinidhi01nov"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            HackerRank
          </a>{" "}profiles).
          For me, coding feels like a game—of course it’s challenging, but that feeling when you
          finally crack a tough problem is totally worth it.
        </p>
        <p>
          I’m passionate about frontend design (though I’m into full stack too) and love bringing
          ideas to life on the web. With that said, there are times when CSS chaos makes me love the
          logic-driven work of backend even more :).
        </p>
        <p>
          Outside of tech, I enjoy drawing, playing badminton, and watching movies. I’m a big fan
          of South Indian cinema and the Marvel Cinematic Universe (RDJ as Iron Man is one of my
          favourites).
        </p>
        <p>
          That’s a little about me. Feel free to explore the rest of my site, and thank you for
          visiting my space!
        </p>
      </div>
    </div>
  );
};

export default About;

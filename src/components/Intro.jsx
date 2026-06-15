import React, { useState, useEffect } from "react";
import "../styles/Intro.scss";

const Intro = ({ onComplete }) => {
  const fullText = "welcome to my space";
  const [displayText, setDisplayText] = useState("");
  // Animation phases: idle (cursor blinking) -> typing -> pausing (typed, cursor still blinking) -> exploding
  const [phase, setPhase] = useState("idle");

  // Phase 1: brief idle moment with just the cursor blinking before typing starts
  useEffect(() => {
    if (phase !== "idle") return;
    const timeoutId = setTimeout(() => {
      setPhase("typing");
    }, 800); // Cursor-only blink duration before typing begins
    return () => clearTimeout(timeoutId);
  }, [phase]);

  // Phase 2: type out the text one character at a time
  useEffect(() => {
    if (phase !== "typing") return;
    let timeoutId;
    if (displayText.length < fullText.length) {
      timeoutId = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100); // Typing speed (ms per character)
    } else {
      setPhase("pausing");
    }
    return () => clearTimeout(timeoutId);
  }, [displayText, phase]);

  // Phase 3: pause with the full text shown and cursor still blinking, then explode
  useEffect(() => {
    if (phase !== "pausing") return;
    const timeoutId = setTimeout(() => {
      setPhase("exploding");
    }, 1000); // Pause duration before exploding
    return () => clearTimeout(timeoutId);
  }, [phase]);

  // Phase 4: explode, then notify parent once the animation finishes
  useEffect(() => {
    if (phase !== "exploding") return;
    const timeoutId = setTimeout(onComplete, 1000); // Matches explode animation duration
    return () => clearTimeout(timeoutId);
  }, [phase, onComplete]);

  const isExploding = phase === "exploding";

  return (
    <div className={`intro ${isExploding ? "fading" : ""}`}>
      <p className={`intro-text ${isExploding ? "exploding" : ""}`}>
        <span>{displayText}</span>
        <span></span>
      </p>
    </div>
  );
};

export default Intro;

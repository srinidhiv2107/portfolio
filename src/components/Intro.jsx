import React, { useEffect, useRef, useState } from 'react';
import '../styles/Intro.scss';

// ─── animation config ───────────────────────────────────────────────────────
// Tweak these constants to adjust timing without touching animation logic.

const INTRO_TEXT       = "welcome to my space";
const SCRAMBLE_CHARS   = "@#$%^&*<>?"; // chars used during decode scramble
const SCRAMBLE_CYCLES  = 4;    // how many random chars each letter cycles through before resolving
const LETTER_DELAY     = 100;   // ms between each letter starting its scramble (left → right stagger)
const SCRAMBLE_SPEED   = 200;   // ms per scramble frame
const HOLD_DURATION    = 1800; // ms the resolved text sits still before exit begins
const EXIT_DURATION    = 2500; // ms budget for all letters to exit (stagger spread across this)
const CURTAIN_DELAY    = 0.75; // fraction of EXIT_DURATION after which the dark curtain fades in
const FADE_TO_APP      = 200;  // ms for the final curtain fade before onComplete fires

const STAR_COUNT = 180;

// ─── helpers ────────────────────────────────────────────────────────────────

/** Returns a random character from the scramble set */
function randomChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

/** Fisher-Yates shuffle over an index array — used to randomise exit order */
function shuffleIndices(length) {
  const arr = Array.from({ length }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ─── Starfield ───────────────────────────────────────────────────────────────
// Canvas-based particle field. Stars drift upward slowly by default.
// When `accelerating` is true (exit phase) they rush upward — lightspeed effect.

function Starfield({ accelerating }) {
  const canvasRef = useRef(null);
  const accelRef  = useRef(false); // ref so the rAF loop always reads the latest value

  // Sync prop → ref without re-running the canvas setup effect
  useEffect(() => {
    accelRef.current = accelerating;
  }, [accelerating]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialise stars at random positions
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x:             Math.random() * (canvas.width  || 800),
      y:             Math.random() * (canvas.height || 600),
      r:             Math.random() * 1.4 + 0.2,
      speed:         Math.random() * 0.18 + 0.04,
      opacity:       Math.random() * 0.6  + 0.2,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    let t = 0;
    let animId;

    function draw() {
      const { width: w, height: h } = canvas;
      const boost = accelRef.current ? 18 : 1;

      // Semi-transparent fill creates motion trail rather than clearing fully
      ctx.fillStyle = 'rgba(2, 3, 14, 0.35)';
      ctx.fillRect(0, 0, w, h);

      stars.forEach((s) => {
        const twinkle = 0.5 + 0.5 * Math.sin(t * 0.02 + s.twinkleOffset);
        const alpha   = s.opacity * (accelRef.current ? 1 : twinkle);

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${alpha})`;
        ctx.fill();

        s.y -= s.speed * boost;

        // Wrap star back to bottom when it exits the top
        if (s.y < -2) {
          s.y = h + 2;
          s.x = Math.random() * w;
        }
      });

      t++;
      animId = requestAnimationFrame(draw);
    }

    // Fill background before first frame to avoid flash
    ctx.fillStyle = '#02030e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="intro__starfield" />;
}

// ─── Intro ───────────────────────────────────────────────────────────────────
// Phase machine:
//   entering → holding → exiting → done
//
// Props:
//   onComplete — called after the curtain fully fades; use to unmount this component

const Intro = ({ onComplete }) => {
  const letters = INTRO_TEXT.split('');

  // Each letter tracks its own char and animation state
  const [display, setDisplay] = useState(
    letters.map(() => ({ char: ' ', state: 'pending' }))
    // states: pending | scrambling | resolved | exiting | gone
  );

  const [phase,        setPhase       ] = useState('entering');
  const [accelerating, setAccelerating] = useState(false);  // triggers starfield boost
  const [curtainFade,  setCurtainFade ] = useState(false);  // triggers final dark overlay

  // ── Phase: entering ────────────────────────────────────────────────────
  // Each letter starts scrambling after a staggered delay, cycles through
  // random chars, then snaps to the correct letter.
  useEffect(() => {
    if (phase !== 'entering') return;

    const timers = [];

    letters.forEach((targetChar, i) => {
      // Spaces resolve immediately with no scramble
      if (targetChar === ' ') {
        timers.push(setTimeout(() => {
          setDisplay((prev) => {
            const next = [...prev];
            next[i] = { char: ' ', state: 'resolved' };
            return next;
          });
        }, i * LETTER_DELAY));
        return;
      }

      let cycle = 0;

      const startT = setTimeout(() => {
        // Show first scrambled char
        setDisplay((prev) => {
          const next = [...prev];
          next[i] = { char: randomChar(), state: 'scrambling' };
          return next;
        });

        // Keep scrambling until cycle limit, then lock to correct char
        const interval = setInterval(() => {
          cycle++;
          if (cycle >= SCRAMBLE_CYCLES) {
            clearInterval(interval);
            setDisplay((prev) => {
              const next = [...prev];
              next[i] = { char: targetChar, state: 'resolved' };
              return next;
            });
          } else {
            setDisplay((prev) => {
              const next = [...prev];
              next[i] = { char: randomChar(), state: 'scrambling' };
              return next;
            });
          }
        }, SCRAMBLE_SPEED);

        timers.push(interval);
      }, i * LETTER_DELAY);

      timers.push(startT);
    });

    // Move to holding once the last letter has resolved
    const totalEntryTime = letters.length * LETTER_DELAY + SCRAMBLE_CYCLES * SCRAMBLE_SPEED + 100;
    const holdT = setTimeout(() => setPhase('holding'), totalEntryTime);
    timers.push(holdT);

    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // ── Phase: holding ─────────────────────────────────────────────────────
  // Text sits resolved; after HOLD_DURATION trigger exit.
  useEffect(() => {
    if (phase !== 'holding') return;
    const t = setTimeout(() => setPhase('exiting'), HOLD_DURATION);
    return () => clearTimeout(t);
  }, [phase]);

  // ── Phase: exiting ─────────────────────────────────────────────────────
  // Letters exit in random order. Each does a rotateX flip + blur before disappearing.
  // Starfield accelerates. Curtain fades in near the end.
  useEffect(() => {
    if (phase !== 'exiting') return;

    setAccelerating(true);

    // Collect non-space letter indices and shuffle for random exit order
    const nonSpaceIndices = letters
      .map((c, i) => (c !== ' ' ? i : null))
      .filter((i) => i !== null);

    const shuffled = shuffleIndices(nonSpaceIndices.length).map((i) => nonSpaceIndices[i]);
    const stagger  = EXIT_DURATION / shuffled.length;

    const timers = shuffled.map((letterIdx, order) => {
      // Trigger the CSS exit animation on this letter
      const t1 = setTimeout(() => {
        setDisplay((prev) => {
          const next = [...prev];
          next[letterIdx] = { ...next[letterIdx], state: 'exiting' };
          return next;
        });

        // After the animation completes, mark as gone (opacity: 0, no layout shift)
        const t2 = setTimeout(() => {
          setDisplay((prev) => {
            const next = [...prev];
            next[letterIdx] = { ...next[letterIdx], state: 'gone' };
            return next;
          });
        }, 650);

        timers.push(t2);
      }, order * stagger * 0.9);

      return t1;
    });

    // Curtain fades in before the last letter finishes
    const curtainT = setTimeout(() => setCurtainFade(true), EXIT_DURATION * CURTAIN_DELAY);

    // Fire onComplete after curtain fully covers the screen
    const doneT = setTimeout(() => {
      setPhase('done');
      if (onComplete) onComplete();
    }, EXIT_DURATION + FADE_TO_APP);

    timers.push(curtainT, doneT);
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // Unmount once done — App.jsx controls visibility via state
  if (phase === 'done') return null;

  return (
    <div className="intro">
      {/* Animated starfield background */}
      <Starfield accelerating={accelerating} />

      {/* Main decode text */}
      <div className="intro__text-row">
        {display.map((item, i) => {
          const isSpace      = letters[i] === ' ';
          const isScrambling = item.state === 'scrambling';
          const isResolved   = ['resolved', 'exiting', 'gone'].includes(item.state);
          const isExiting    = item.state === 'exiting';
          const isGone       = item.state === 'gone';

          return (
            <span
              key={i}
              className={[
                'intro__letter',
                isSpace      ? 'intro__letter--space'      : '',
                isScrambling ? 'intro__letter--scrambling'  : '',
                isResolved   ? 'intro__letter--resolved'    : '',
                isExiting    ? 'intro__letter--exiting'     : '',
                isGone       ? 'intro__letter--gone'        : '',
              ].filter(Boolean).join(' ')}
            >
              {isSpace ? '\u00A0' : item.char}
            </span>
          );
        })}
      </div>

      {/* Dark curtain that fades in to cover the exit and reveal the app */}
      <div className={`intro__curtain${curtainFade ? ' intro__curtain--visible' : ''}`} />
    </div>
  );
};

export default Intro;

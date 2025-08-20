import React, { useEffect, useRef, useCallback } from 'react';
import '../styles/TrailingStars.scss';

const TrailingStars = ({ isEnabled }) => {
  const cursorRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const isMoving = useRef(false);
  const moveTimeout = useRef(null);
  const animationFrame = useRef(null);
  const starInterval = useRef(null);

  const createTrailStar = useCallback((x, y) => {
    if (!isEnabled) return;

    const star = document.createElement('div');
    const sizes = ['small', 'medium', 'large'];
    const colors = ['white', 'gold', 'blue', 'pink'];

    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    star.className = `trail-star trail-star--${randomSize} trail-star--${randomColor}`;

    // Add small random offset for natural look
    const offsetX = (Math.random() - 0.5) * 10;
    const offsetY = (Math.random() - 0.5) * 10;

    star.style.left = (x + offsetX) + 'px';
    star.style.top = (y + offsetY) + 'px';

    document.body.appendChild(star);

    // Remove star after animation
    setTimeout(() => {
      if (star.parentNode) {
        star.parentNode.removeChild(star);
      }
    }, 2000);
  }, [isEnabled]);

  const animateCursor = useCallback(() => {
    if (!cursorRef.current || !isEnabled) {
      animationFrame.current = requestAnimationFrame(animateCursor);
      return;
    }

    cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
    cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;

    cursorRef.current.style.left = cursorPos.current.x + 'px';
    cursorRef.current.style.top = cursorPos.current.y + 'px';

    animationFrame.current = requestAnimationFrame(animateCursor);
  }, [isEnabled]);

  const handleMouseMove = useCallback((e) => {
    if (!isEnabled) return;

    const lastX = mousePos.current.x;
    const lastY = mousePos.current.y;

    mousePos.current.x = e.clientX;
    mousePos.current.y = e.clientY;

    // Check if cursor is actually moving
    const deltaX = Math.abs(e.clientX - lastX);
    const deltaY = Math.abs(e.clientY - lastY);

    if (deltaX > 1 || deltaY > 1) {
      isMoving.current = true;

      // Clear existing timeout
      clearTimeout(moveTimeout.current);

      // Set timeout to detect when movement stops
      moveTimeout.current = setTimeout(() => {
        isMoving.current = false;
      }, 100);
    }
  }, [isEnabled]);

  const handleMouseLeave = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.style.opacity = '0';
    }
    isMoving.current = false;
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (cursorRef.current && isEnabled) {
      cursorRef.current.style.opacity = '1';
    }
  }, [isEnabled]);

  useEffect(() => {
    if (!isEnabled) {
      // Clean up when disabled
      document.body.style.cursor = 'auto';
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
      if (starInterval.current) {
        clearInterval(starInterval.current);
      }
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      // Remove any existing trail stars
      const existingStars = document.querySelectorAll('.trail-star');
      existingStars.forEach(star => star.remove());
      return;
    }

    // Enable effect
    document.body.style.cursor = 'none';

    // Start animation loop
    animateCursor();

    // Start star creation loop
    starInterval.current = setInterval(() => {
      if (isMoving.current) {
        createTrailStar(cursorPos.current.x, cursorPos.current.y);
      }
    }, 50);

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      // Cleanup
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);

      if (starInterval.current) {
        clearInterval(starInterval.current);
      }
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }

      // Remove any remaining trail stars
      const existingStars = document.querySelectorAll('.trail-star');
      existingStars.forEach(star => star.remove());
    };
  }, [isEnabled, animateCursor, createTrailStar, handleMouseMove, handleMouseLeave, handleMouseEnter]);

  if (!isEnabled) return null;

  return (
    <div
      ref={cursorRef}
      className="trailing-stars__cursor"
    />
  );
};

export default TrailingStars;

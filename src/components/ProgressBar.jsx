import React, { useEffect, useState } from 'react';
import '../css/Progress.css';

function ProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [textPosition, setTextPosition] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;

      // Dampening factor to slow text movement
      const dampenedPosition = scrollTop * 0.20; 

      setScrollPercent(scrollProgress);
      setTextPosition(dampenedPosition);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div>
      {/* Progress Bar */}
      <div className="progress-container">
        <div 
          className="progress-bar absolute" 
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* Scroll Percentage Positioned with Dampened Movement */}
      <div 
        className="scroll-info" 
        style={{ top: `${textPosition}px` }}
      >
        {Math.round(scrollPercent)}%
      </div>

      {/* Simulate Scroll Area */}
      <div className="scroll-area " />
    </div>
  );
}

export default ProgressBar;

'use client'
import React from 'react';

interface ScrollDownButtonProps {
  onClick?: () => void;
  className?: string;
}

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({ onClick, className = "" }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default behavior: scroll to next section
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`scroll-down-container ${className}`} onClick={handleClick}>
      <div className="scrolldown">
        <div className="chevrons">
          <div className="chevrondown" />
          <div className="chevrondown" />
        </div>
      </div>
      
      <style jsx>{`
        .scroll-down-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .scrolldown {
          --color: rgba(56, 189, 248, 0.8); /* sky-400 with opacity */
          --sizeX: 30px;
          --sizeY: 50px;
          position: relative;
          width: var(--sizeX);
          height: var(--sizeY);
          border: calc(var(--sizeX) / 10) solid var(--color);
          border-radius: 50px;
          box-sizing: border-box;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .scrolldown:hover {
          --color: rgb(56, 189, 248); /* sky-400 */
          transform: translateY(-2px);
        }
        
        .scrolldown::before {
          content: "";
          position: absolute;
          bottom: 30px;
          left: 50%;
          width: 6px;
          height: 6px;
          margin-left: -3px;
          background-color: var(--color);
          border-radius: 100%;
          animation: scrolldown-anim 2s infinite;
          box-sizing: border-box;
          box-shadow: 0px -5px 3px 1px rgba(42, 84, 112, 0.4);
        }
        
        @keyframes scrolldown-anim {
          0% {
            opacity: 0;
            height: 6px;
          }
          40% {
            opacity: 1;
            height: 10px;
          }
          80% {
            transform: translate(0, 20px);
            height: 10px;
            opacity: 0;
          }
          100% {
            height: 3px;
            opacity: 0;
          }
        }
        
        .chevrons {
          padding: 6px 0 0 0;
          margin-left: -3px;
          margin-top: 48px;
          width: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .chevrondown {
          margin-top: -6px;
          position: relative;
          border: solid var(--color);
          border-width: 0 3px 3px 0;
          display: inline-block;
          width: 10px;
          height: 10px;
          transform: rotate(45deg);
        }
        
        .chevrondown:nth-child(odd) {
          animation: pulse54012 500ms ease infinite alternate;
        }
        
        .chevrondown:nth-child(even) {
          animation: pulse54012 500ms ease infinite alternate 250ms;
        }
        
        @keyframes pulse54012 {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollDownButton;
import React from 'react';

interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({ topColor, bottomColor, flip = false }) => {
  return (
    <div style={{ backgroundColor: bottomColor, lineHeight: 0, padding: 0, margin: 0, width: "100%", overflow: "hidden", position: "relative", zIndex: 10 }}>
      <svg 
        viewBox="0 0 1440 120" 
        xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="none" 
        style={{ 
          display: "block", 
          width: "100%", 
          height: "clamp(60px, 8vw, 150px)", 
          transform: flip ? "scaleX(-1)" : "none",
          marginTop: "-1px" // Prevent 1px gaps on some browsers
        }}
      >
        <path 
          fill={topColor} 
          fillOpacity="1" 
          d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,112C960,117,1056,107,1152,90.7C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

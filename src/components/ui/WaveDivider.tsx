import React from 'react';

interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  height?: string;
  flip?: boolean;
  blur?: boolean;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({ topColor, bottomColor, height = '120px', flip = false, blur = false }) => {
  return (
    <div 
      className="wave-divider relative z-10" 
      style={{ 
        width: '100%', 
        overflow: 'hidden', 
        lineHeight: 0,
        backgroundColor: topColor
      }}
    >
      <svg 
        viewBox="0 0 1440 200" 
        preserveAspectRatio="none" 
        style={{ 
          display: 'block', 
          width: '100%', 
          height: height,
          transform: flip ? 'scaleX(-1)' : 'none'
        }}
      >
        <path 
          fill={bottomColor} 
          d="M0,150 C400,200 800,50 1440,20 L1440,300 L0,300 Z"
          style={{ 
            filter: blur ? 'blur(15px)' : 'drop-shadow(0px -10px 15px rgba(0,0,0,0.4))',
            transform: blur ? 'scale(1.05)' : 'none',
            transformOrigin: 'bottom'
          }}
        ></path>
      </svg>
    </div>
  );
};

import React from 'react';

interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  height?: string;
  flip?: boolean;
  blur?: boolean;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({ topColor, bottomColor, height = '120px', flip = false }) => {
  return (
    <div 
      className="relative w-full -mt-[1px] mb-[-1px] pointer-events-none" 
      style={{ 
        height: height, 
        backgroundColor: topColor,
        overflow: 'hidden'
      }}
    >
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="absolute bottom-0 left-0 w-full h-full"
        style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
      >
        <path 
          fill={bottomColor} 
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
        />
      </svg>
    </div>
  );
};

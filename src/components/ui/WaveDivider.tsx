"use client";
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
        suppressHydrationWarning
      >
        <path 
          fill={bottomColor} 
          d="M0,80 C200,100 400,60 600,80 C800,100 1000,60 1200,80 L1200,120 L0,120 Z"
          suppressHydrationWarning
        />
      </svg>
    </div>
  );
};

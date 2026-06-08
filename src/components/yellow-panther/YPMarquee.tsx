"use client";
import React from 'react';

export default function YPMarquee() {
  return (
    <div className="bg-[#0B0B0B] text-white border-y border-white/10 overflow-hidden py-6 md:py-10 flex w-full">
      <div className="whitespace-nowrap animate-marquee flex items-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="text-4xl md:text-7xl lg:text-9xl font-plakatgrotesk font-normal uppercase mx-6 md:mx-12 shrink-0">
            WILD CREATIVITY X BOUNDLESS TECHNOLOGY X
          </span>
        ))}
      </div>
    </div>
  );
}

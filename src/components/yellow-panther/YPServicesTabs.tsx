"use client";
import React, { useState } from 'react';

const tabs = ["All", "Website", "Mobile App", "E-commerce", "UI/UX Design", "Gamification"];

export default function YPServicesTabs() {
  const [active, setActive] = useState("All");

  return (
    <div className="w-full bg-[#0B0B0B] border-b border-white/20 pb-4 md:pb-8 pt-10 md:pt-20">
      <div className="container mx-auto px-4 overflow-x-auto">
        <div className="flex w-max gap-2 md:gap-4 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-3 md:px-8 md:py-4 rounded-md text-xl md:text-3xl lg:text-5xl font-plakatgrotesk font-black uppercase transition-all duration-300 ${
                active === tab 
                  ? "bg-yellowx text-black border-b-[4px] border-black" 
                  : "text-white/40 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

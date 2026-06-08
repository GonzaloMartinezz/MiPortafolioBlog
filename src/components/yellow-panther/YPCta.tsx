"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function YPCta() {
  return (
    <div className="bg-[#0B0B0B] text-white py-24 md:py-40 relative z-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        
        <p className="text-xl md:text-3xl font-light text-white/70 mb-8 md:mb-12">
          On the prowl for a new platform?
        </p>

        <h2 className="font-plakatgrotesk font-black uppercase flex flex-col items-center leading-[0.85] text-[60px] md:text-[120px] lg:text-[180px] xl:text-[220px]">
          <span>GIVE US</span>
          <span className="flex items-center gap-4">
            A SCRATCH
          </span>
        </h2>

        <div className="mt-16 md:mt-24">
          <a href="#contact" className="group relative flex items-center justify-center px-10 py-5 bg-transparent border border-white/30 rounded-full hover:border-yellowx transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-yellowx translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <span className="relative z-10 text-white group-hover:text-black font-bold uppercase tracking-wider text-lg flex items-center gap-4 transition-colors duration-500">
              Contact us
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
        
      </div>
    </div>
  );
}

"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function YPHero() {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#0B0B0B] text-white overflow-hidden z-10 min-h-[90vh] flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="font-plakatgrotesk font-black uppercase tracking-tight flex flex-col items-center justify-center leading-[0.85]">
            <span className="text-[50px] md:text-[100px] lg:text-[160px] xl:text-[200px]">Digital</span>
            <span className="flex items-center justify-center flex-wrap gap-2 md:gap-6 mt-1 md:mt-4 text-[50px] md:text-[100px] lg:text-[160px] xl:text-[200px]">
              <div className="w-16 h-16 md:w-24 md:h-24 lg:w-40 lg:h-40 bg-yellowx rounded-full flex items-center justify-center -rotate-12 animate-pulse-slow shrink-0 overflow-hidden shadow-[0_0_40px_rgba(252,209,0,0.4)] hidden sm:flex">
                <span className="text-black text-[10px] md:text-sm lg:text-xl font-bold leading-tight px-2 text-center uppercase">Dev<br/>Logo</span>
              </div>
              Products
            </span>
            <span className="mt-4 md:mt-8 text-[30px] md:text-[60px] lg:text-[80px] xl:text-[100px] text-white/90">
              Built for the biggest moments
            </span>
          </h1>
          <p className="mt-8 md:mt-12 text-lg md:text-2xl lg:text-3xl font-light text-white/70 max-w-4xl mx-auto font-sans">
            Strategy, design, and technology that powers the world's most iconic sports, entertainment, and lifestyle brands.
          </p>
          
          <div className="mt-12 md:mt-16 flex justify-center">
            <a href="#contact" className="group relative flex items-center justify-center px-8 md:px-12 py-4 md:py-5 bg-transparent border border-white/30 rounded-full hover:border-yellowx transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-yellowx translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 text-white group-hover:text-black font-bold uppercase tracking-wider text-sm md:text-lg flex items-center gap-3 transition-colors duration-500">
                Speak to us
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

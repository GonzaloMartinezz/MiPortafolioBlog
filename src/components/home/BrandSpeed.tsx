"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useRef } from "react";

export default function BrandSpeed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[85vh] bg-[#0B0B0B] text-white flex flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-24 py-20 font-sans group cursor-default"
    >
      <div className="max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16 relative">
        
        {/* Left Column */}
        <div className="flex flex-col flex-1 relative z-10">
          
          {/* Top Label */}
          <div className="flex flex-col text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#a1a1aa] uppercase gap-1 mb-16 md:mb-20">
            <span className="text-[#fbbf24] flex items-center gap-2">
              <span className="text-lg leading-none mt-[-2px]">*</span> ESTUDIO CREATIVO
            </span>
            <span className="ml-5 text-gray-500">DE ARGENTINA PARA EL MUNDO</span>
          </div>

          {/* Subheading */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#fbbf24]/60"></div>
            <span className="text-[#fbbf24] text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">
              DISEÑO WEB PREMIUM & BRANDING
            </span>
          </div>

          {/* Main Big Text */}
          <h1 className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[130px] leading-[0.85] font-black tracking-tighter text-white mb-10">
            Tu marca merece <br />
            <span className="text-[#fbbf24]">ir más rápido <span className="text-white ml-2">*</span></span>
          </h1>
          
          {/* Button */}
          <div className="mt-2">
            <button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold text-sm md:text-base px-6 py-3.5 md:px-8 md:py-4 rounded-full flex items-center gap-3 transition-transform hover:scale-105 duration-300 shadow-[0_0_20px_rgba(251,191,36,0.15)] w-fit">
              Agendá una charla
              <span className="bg-black text-[#fbbf24] rounded-full p-1.5 flex items-center justify-center">
                <FiArrowRight size={18} strokeWidth={3} className="transform rotate-45" />
              </span>
            </button>
          </div>

        </div>

        {/* Right Column List */}
        <div className="hidden lg:flex flex-col items-end gap-5 text-[10px] tracking-[0.3em] font-black text-[#71717a] uppercase relative pr-6 py-8 z-10">
          {/* Vertical yellow line on the right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-12 bg-[#fbbf24]"></div>
          
          <p className="hover:text-white transition-colors cursor-pointer">GRV 2K25</p>
          <p className="hover:text-white transition-colors cursor-pointer">BRANDING</p>
          <p className="text-white cursor-pointer">DISEÑO WEB</p>
          <p className="hover:text-white transition-colors cursor-pointer">APPS & SAAS</p>
          <p className="hover:text-white transition-colors cursor-pointer">FOTOGRAFÍA</p>
          <p className="hover:text-white transition-colors cursor-pointer">REELS</p>
        </div>

      </div>
    </section>
  );
}

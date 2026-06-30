"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [0.3, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#0d0d0d] text-white flex flex-col justify-between overflow-hidden px-6 md:px-12 lg:px-20 py-12 font-sans group cursor-default"
    >


      {/* Top Content */}
      <div className="relative z-10 w-full flex justify-between items-start mt-[8vh]">
        <div className="flex flex-col text-[11px] md:text-xs font-semibold tracking-[0.15em] text-[#a1a1aa] uppercase gap-1.5">
          <span className="text-[#fbbf24] flex items-center gap-2">
            <span className="text-lg leading-none">*</span> ESTUDIO CREATIVO
          </span>
          <span className="ml-4">DE ARGENTINA PARA EL MUNDO</span>
        </div>

        <div className="hidden lg:flex flex-col text-right text-[10px] tracking-[0.2em] text-[#71717a] uppercase gap-3 font-medium">
           <p className="hover:text-white transition-colors cursor-default">GRV 2K26</p>
           <p className="hover:text-white transition-colors cursor-default">BRANDING</p>
           <p className="hover:text-white transition-colors cursor-default">DISEÑO WEB</p>
           <p className="hover:text-white transition-colors cursor-default">APPS & SAAS</p>
           <p className="hover:text-white transition-colors cursor-default">FOTOGRAFÍA</p>
           <p className="hover:text-white transition-colors cursor-default">REELS</p>
        </div>
      </div>

      {/* Main Big Text */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto mt-auto mb-16 md:mb-24 flex flex-col gap-6 md:gap-8 items-start">
        <div className="flex items-center gap-4 text-[#fbbf24] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
          <div className="w-16 h-[1px] bg-[#fbbf24]"></div>
          DISEÑO WEB PREMIUM & BRANDING
        </div>
        
        <h1 className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] leading-[0.85] font-black tracking-tighter text-white">
          Tu marca merece <br />
          <span className="text-[#fbbf24]">ir más rápido</span> <span className="text-white">*</span>
        </h1>

        <div className="mt-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold text-sm md:text-base px-8 py-5 rounded-full flex items-center justify-center sm:justify-between gap-4 transition-all duration-300 group cursor-pointer">
            Agendá una charla
            <span className="bg-black text-[#fbbf24] rounded-full p-1.5 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <FiArrowRight size={18} strokeWidth={3} />
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 w-full flex justify-between items-end gap-10">
        <div className="max-w-md text-sm md:text-base text-[#a1a1aa] leading-relaxed font-medium">
          Diseño web premium y branding estratégico.<br/>
          Resultados de clase mundial en semanas, no meses.<br/>
          Sin agencia, sin intermediarios.
        </div>

        <div className="hidden md:flex flex-col items-center text-[10px] tracking-[0.2em] text-[#71717a] uppercase font-bold">
           <span className="mb-4">VER POR QUÉ FUNCIONAMOS</span>
           <div className="w-[1px] h-16 bg-[#27272a]"></div>
        </div>
      </div>

    </section>
  );
}

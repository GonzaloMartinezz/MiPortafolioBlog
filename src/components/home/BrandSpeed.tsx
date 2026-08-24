"use client";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Sparkles, Play } from "lucide-react";

export default function BrandSpeed() {
  return (
    <section className="relative w-full min-h-0 bg-[#FDF6EC] text-black flex flex-col items-center justify-center overflow-hidden px-4 md:px-12 pt-8 pb-20 font-sans cursor-default">
      
      {/* 
        ========================================
        BACKGROUND: Red/Orange Gradient Blur (Estilo foto 2)
        ========================================
      */}
      {/* Top Left Bright Orange/Red */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#FF5E00] blur-[150px] md:blur-[250px] opacity-40 md:opacity-30 mix-blend-screen pointer-events-none rounded-full" />
      
      {/* Center Deep Crimson/Red */}
      <div className="absolute top-[20%] left-[10%] w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-[#C91A00] blur-[150px] md:blur-[250px] opacity-30 mix-blend-screen pointer-events-none rounded-full" />

      {/* Bottom Right Dark Maroon */}
      <div className="absolute bottom-[-30%] right-[-10%] w-[500px] md:w-[900px] h-[500px] md:h-[900px] bg-[#5A0000] blur-[150px] md:blur-[250px] opacity-50 pointer-events-none rounded-full" />

      {/* Radial vignette to darken edges and ensure smooth blending into the portfolio's #FDF6EC sections */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#FDF6EC_85%)] pointer-events-none" />





      {/* 
        ========================================
        CONTENT 
        ========================================
      */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto mt-2">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 px-5 py-2 rounded-full border border-black/10 bg-black/5 backdrop-blur-md mb-8 sm:mb-10"
        >
          <span className="text-[#F66C44] flex items-center justify-center">
            <Play size={12} fill="currentColor" />
          </span>
          <span className="text-xs sm:text-sm text-gray-700 font-medium tracking-wide">
            Estudio Creativo de Argentina para el mundo
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] font-black tracking-tighter leading-[1.05] text-black mb-8"
        >
          Tu marca merece <br className="hidden sm:block" />
          <span className="font-serif italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#F66C44] to-[#f83600]">
            ir más rápido
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-base md:text-xl max-w-2xl font-medium leading-relaxed mb-12"
        >
          Diseño web premium y branding estratégico. Desarrollamos plataformas de alto rendimiento que ayudan a que tu negocio crezca sin perder la esencia.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          {/* Primary CTA */}
          <button className="w-full sm:w-auto bg-gradient-to-r from-[#F66C44] to-[#e05a33] hover:brightness-110 text-white font-bold text-sm md:text-base px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_30px_rgba(246,108,68,0.4)] hover:shadow-[0_0_40px_rgba(246,108,68,0.6)] hover:scale-105">
            Agendá una charla
          </button>
          
          {/* Secondary CTA */}
          <button className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white font-bold text-sm md:text-base px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-xl">
            Ver Proyectos
          </button>
        </motion.div>
        
      </div>
    </section>
  );
}

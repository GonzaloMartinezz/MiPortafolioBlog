"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const leftFeatures = [
  { id: 1, label: "UI/UX Premium", icon: "✨" },
  { id: 2, label: "Apps Híbridas", icon: "📱" },
  { id: 3, label: "Rend. Nativo", icon: "⚡" },
  { id: 4, label: "Clean Code", icon: "🏗️" },
  { id: 5, label: "Animaciones", icon: "🎨" },
];

const rightFeatures = [
  { id: 6, label: "Diseño Único", icon: "💎" },
  { id: 7, label: "SEO Optimizado", icon: "🔍" },
  { id: 8, label: "Multi-dispositivo", icon: "📏" },
  { id: 9, label: "Dark Mode UI", icon: "🌙" },
  { id: 10, label: "Lanzamiento", icon: "🚀" },
];

export default function AppShowcase() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full overflow-hidden bg-transparent pt-4 pb-12 md:pb-24 flex flex-col items-center justify-center min-h-0">
      
      {/* Soft Top/Bottom Blends to prevent harsh blur cutoffs */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0B0B0B] to-transparent z-10 pointer-events-none" />

      {/* Massive Aesthetic Blurs (Difuminado Estético) */}
      {/* Top right massive glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] bg-[#F66C44]/20 blur-[150px] md:blur-[250px] rounded-full pointer-events-none" />
      
      {/* Center subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F66C44]/15 blur-[150px] rounded-full pointer-events-none" />

      {/* Subtle concentric circles pattern for texture */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-[-100px] -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.04] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-[-200px] -translate-y-1/2 w-[400px] h-[400px] border border-white/[0.06] rounded-full pointer-events-none" />

      {/* Title Section */}
      <div className="text-center z-10 mb-8 md:mb-16 px-4 mt-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight"
        >
          Introduce you <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F66C44] to-[#FCD100]">
            a better way to learn.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-white/50 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Transformo conceptos en aplicaciones móviles de alto rendimiento. Interfaz fluida, código escalable y una experiencia de usuario diseñada para generar impacto real.
        </motion.p>
      </div>

      {/* Showcase Area */}
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center min-h-[400px] md:min-h-[750px] px-4 mt-2 mb-10">
        
        {/* Subtle glow directly behind phone ONLY */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[250px] h-[400px] md:h-[500px] bg-[#F66C44]/15 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />

        {/* iPhone Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
          className="relative z-20 w-[180px] sm:w-[200px] md:w-[240px] lg:w-[280px] aspect-[9/19.5] bg-black rounded-[36px] md:rounded-[48px] border-[5px] md:border-[10px] border-[#1C1C1E] shadow-2xl overflow-hidden shrink-0 flex items-center justify-center"
        >
          {/* Hardware Buttons Decoration (Hidden on very small screens to avoid scaling issues, or scaled with % if needed. For now, kept simple for mobile) */}
          <div className="hidden md:block absolute top-[120px] -left-[14px] w-[4px] h-[25px] bg-[#2C2C2E] rounded-l-sm" />
          <div className="hidden md:block absolute top-[165px] -left-[14px] w-[4px] h-[45px] bg-[#2C2C2E] rounded-l-sm" />
          <div className="hidden md:block absolute top-[225px] -left-[14px] w-[4px] h-[45px] bg-[#2C2C2E] rounded-l-sm" />
          <div className="hidden md:block absolute top-[175px] -right-[14px] w-[4px] h-[65px] bg-[#2C2C2E] rounded-r-sm" />

          {/* Iframe Content inside the phone */}
          <div className="w-full h-full bg-[#111111] overflow-hidden rounded-[32px] md:rounded-[43px]">
            <iframe 
              src="https://creapp-gamma.vercel.app/"
              className="w-full h-full border-none"
              title="App Mobile View"
              sandbox="allow-scripts allow-same-origin allow-popups"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Floating Pills - Left Side (Visible only on lg+) */}
        <div className="hidden lg:flex absolute left-8 xl:left-[15%] top-1/2 -translate-y-1/2 flex-col gap-8 md:gap-10 w-max">
          {leftFeatures.map((feat, i) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, type: "spring", bounce: 0.3 }}
              className="relative flex items-center justify-end group"
            >
              <div className="flex items-center gap-3 bg-[#1C1C1E] border border-white/5 rounded-full px-5 py-3 shadow-[0_10px_20px_rgba(0,0,0,0.4)] hover:border-white/20 hover:scale-105 hover:bg-[#252528] transition-all duration-300 z-10 cursor-default">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm border border-white/5">
                  {feat.icon}
                </div>
                <span className="text-white/90 text-sm font-semibold tracking-wide pr-2">{feat.label}</span>
              </div>
              
              {/* Line pointing to phone */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-[30px] xl:w-[80px] h-[1px] bg-gradient-to-r from-white/20 to-transparent pointer-events-none group-hover:from-[#F66C44]/50 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Floating Pills - Right Side (Visible only on lg+) */}
        <div className="hidden lg:flex absolute right-8 xl:right-[15%] top-1/2 -translate-y-1/2 flex-col gap-8 md:gap-10 w-max">
          {rightFeatures.map((feat, i) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, type: "spring", bounce: 0.3 }}
              className="relative flex items-center justify-start group"
            >
              <div className="flex items-center gap-3 bg-[#1C1C1E] border border-white/5 rounded-full px-5 py-3 shadow-[0_10px_20px_rgba(0,0,0,0.4)] hover:border-white/20 hover:scale-105 hover:bg-[#252528] transition-all duration-300 z-10 cursor-default">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm border border-white/5">
                  {feat.icon}
                </div>
                <span className="text-white/90 text-sm font-semibold tracking-wide pr-2">{feat.label}</span>
              </div>
              
              {/* Line pointing to phone */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-[30px] xl:w-[80px] h-[1px] bg-gradient-to-l from-white/20 to-transparent pointer-events-none group-hover:from-[#F66C44]/50 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

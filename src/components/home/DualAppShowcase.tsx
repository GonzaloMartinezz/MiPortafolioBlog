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

export default function DualAppShowcase() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full bg-transparent py-20 md:py-32 flex flex-col items-center justify-center">

      {/* Massive Aesthetic Blurs (Difuminado Estético) */}
      {/* Top right massive glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] bg-white/40 blur-[150px] md:blur-[250px] rounded-full pointer-events-none" />

      {/* Center subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/30 blur-[150px] rounded-full pointer-events-none" />

      {/* Subtle concentric circles pattern for texture */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] border border-black/[0.03] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-[-100px] -translate-y-1/2 w-[600px] h-[600px] border border-black/[0.05] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-[-200px] -translate-y-1/2 w-[400px] h-[400px] border border-black/[0.07] rounded-full pointer-events-none" />

      {/* Title Section */}
      <div className="text-center z-10 mb-16 md:mb-24 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight"
        >
          Introduce you <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e64c22] to-[#FF5E00]">
            a better way to learn.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-slate-700 font-medium text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Transformo conceptos en aplicaciones móviles de alto rendimiento. Interfaz fluida, código escalable y una experiencia de usuario diseñada para generar impacto real.
        </motion.p>
      </div>

      {/* Showcase Area (Dual Device) */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[400px] md:min-h-[600px] px-4 mt-8">

        {/* Subtle glow directly behind devices ONLY */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/40 blur-[120px] md:blur-[180px] rounded-full pointer-events-none" />

        <div className="relative w-full flex justify-center z-20">
          {/* MacBook Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
            className="relative w-[90%] md:w-[85%] max-w-[900px] z-10"
          >
            {/* Screen */}
            <div className="relative w-full aspect-[16/10] bg-zinc-950 border-[8px] md:border-[16px] border-zinc-900 rounded-t-xl md:rounded-t-3xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden">
              <iframe
                src="https://tarjetatitanio.vercel.app/"
                className="w-full h-full border-none"
                style={{ overflow: 'hidden' }}
                scrolling="no"
                title="App Desktop View"
                sandbox="allow-scripts allow-same-origin allow-popups"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            </div>
            {/* Keyboard Base */}
            <div className="w-full h-1 md:h-1.5 bg-zinc-950 border-b border-zinc-900/60" />
            <div className="w-[114%] -ml-[7%] h-3 md:h-5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 rounded-b-xl md:rounded-b-2xl shadow-[0_15px_30px_rgba(0,0,0,0.8)] border-t border-white/10 relative">
              <div className="w-16 md:w-24 h-1.5 md:h-2 bg-zinc-950 rounded-b-md absolute top-0 left-1/2 -translate-x-1/2" />
            </div>
          </motion.div>

          {/* iPhone Mockup (Overlapping Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.2 }}
            className="absolute right-0 md:-right-8 bottom-[-5%] md:-bottom-12 z-30 w-[35%] min-w-[120px] md:min-w-[200px] max-w-[140px] md:max-w-[240px]"
          >
            <div className="relative w-full aspect-[9/19.5] bg-black rounded-[24px] md:rounded-[45px] border-[4px] md:border-[8px] border-[#1C1C1E] shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden flex items-center justify-center">

              {/* Hardware Buttons Decoration */}
              <div className="absolute top-[80px] md:top-[120px] -left-[6px] md:-left-[8px] w-[2px] md:w-[3px] h-[15px] md:h-[25px] bg-[#2C2C2E] rounded-l-sm" />
              <div className="absolute top-[110px] md:top-[165px] -left-[6px] md:-left-[8px] w-[2px] md:w-[3px] h-[25px] md:h-[45px] bg-[#2C2C2E] rounded-l-sm" />
              <div className="absolute top-[150px] md:top-[225px] -left-[6px] md:-left-[8px] w-[2px] md:w-[3px] h-[25px] md:h-[45px] bg-[#2C2C2E] rounded-l-sm" />
              <div className="absolute top-[115px] md:top-[175px] -right-[6px] md:-right-[8px] w-[2px] md:w-[3px] h-[40px] md:h-[65px] bg-[#2C2C2E] rounded-r-sm" />

              {/* Iframe Content inside the phone */}
              <div className="w-full h-full bg-[#111111] overflow-hidden rounded-[18px] md:rounded-[36px]">
                <iframe
                  src="https://tarjetatitanio.vercel.app"
                  className="w-[calc(100%+18px)] md:w-[calc(100%+20px)] h-full border-none"
                  style={{ overflow: 'hidden' }}
                  title="App Mobile View"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

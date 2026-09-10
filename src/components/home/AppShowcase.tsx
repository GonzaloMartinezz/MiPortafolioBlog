"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const leftFeatures = [
  { id: 1, label: "UI/UX Design", icon: "✨", desc: "Diseño intuitivo y premium" },
  { id: 2, label: "Frontend React", icon: "⚛️", desc: "Interfaces dinámicas" },
  { id: 3, label: "Backend Scalable", icon: "⚙️", desc: "Arquitectura robusta" },
];

const rightFeatures = [
  { id: 4, label: "Optimización SEO", icon: "🔍", desc: "Posicionamiento en Google" },
  { id: 5, label: "Performance", icon: "⚡", desc: "Carga ultra rápida" },
  { id: 6, label: "Responsive", icon: "📱", desc: "Perfecto en cada pantalla" },
];

export default function AppShowcase() {
  const [mounted, setMounted] = useState(false);
  const phoneRef = useRef<HTMLDivElement>(null);
  
  // Initialize scale smoothly based on initial screen width to prevent layout jump on mobile
  const [phoneScale, setPhoneScale] = useState(() => {
    if (typeof window !== "undefined") {
      const containerW = Math.min(window.innerWidth - 48, 280) - 16;
      return window.innerWidth < 640 ? Math.max(0.5, containerW / 430) : 0.75;
    }
    return 0.61;
  });

  const [phoneHeight, setPhoneHeight] = useState(932);

  useEffect(() => {
    setMounted(true);

    const updateScale = () => {
      if (phoneRef.current) {
        const width = phoneRef.current.clientWidth;
        const height = phoneRef.current.clientHeight;
        if (width > 0) {
          const scale = width / 430;
          setPhoneScale(scale);
          // Calculate the exact virtual height needed for the iframe to fill the container perfectly without black bars
          setPhoneHeight(height / scale);
        }
      }
    };

    updateScale();
    const observer = new ResizeObserver(() => updateScale());
    if (phoneRef.current) observer.observe(phoneRef.current);
    window.addEventListener("resize", updateScale);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[#0B0B0B] py-16 md:py-24 px-4 sm:px-6 lg:px-12 font-sans">
      
      {/* Background Glows & Texture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-[#F66C44]/15 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] border border-white/[0.03] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-12 lg:gap-16">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 justify-center mb-4"
          >
            <span className="w-8 h-[2px] bg-[#F66C44]" />
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-[#F66C44] uppercase">
              STUDIO DENTAL & SALUD
            </span>
            <span className="w-8 h-[2px] bg-[#F66C44]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight"
          >
            Ecosistemas Digitales{" "}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F66C44] to-[#FCD100]">
              para el Sector Salud.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-zinc-400 font-medium text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Plataformas de alto rendimiento diseñadas exclusivamente para odontología, clínicas médicas y centros de salud. Interfaces fluidas, máxima seguridad y código escalable.
          </motion.p>
        </div>

        {/* 3-Column Interactive Desktop Grid / Phone Showcase */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center justify-items-center relative">

          {/* LEFT FEATURES (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-10 xl:gap-14 w-full items-end z-20">
            {leftFeatures.map((feat, i) => (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex items-center gap-3 w-full justify-end group"
              >
                <div className="flex items-center gap-3 bg-zinc-900/80 backdrop-blur-xl border border-white/10 hover:border-[#F66C44]/60 transition-all p-3.5 rounded-2xl shadow-xl hover:-translate-y-1">
                  <span className="text-2xl">{feat.icon}</span>
                  <div className="flex flex-col text-left">
                    <span className="text-white font-bold text-sm leading-tight">{feat.label}</span>
                    <span className="text-zinc-400 text-xs mt-0.5">{feat.desc}</span>
                  </div>
                </div>
                {/* Connector line pointing right towards phone */}
                <div className="w-10 xl:w-16 h-[2px] bg-gradient-to-r from-[#F66C44] to-transparent shrink-0" />
              </motion.div>
            ))}
          </div>

          {/* CENTER IPHONE MOCKUP */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center w-full relative z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-[270px] sm:w-[320px] md:w-[340px] max-w-[85vw] aspect-[9/19.5] rounded-[40px] sm:rounded-[44px] md:rounded-[52px] border-[8px] md:border-[12px] border-zinc-900 shadow-[0_25px_60px_rgba(246,108,68,0.25)] bg-black overflow-hidden group mx-auto"
            >
              {/* Dynamic Island / Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 md:w-28 h-3.5 md:h-5 bg-black rounded-full z-30 flex items-center justify-end px-2 border border-white/5 shadow-md">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#1c1c1e] border border-blue-900/50" />
              </div>

              {/* Speaker Bar */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 md:w-12 h-1 bg-zinc-800 rounded-full z-30" />

              {/* Live Iframe Screen */}
              <div ref={phoneRef} className="w-full h-full bg-black overflow-hidden relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <iframe
                  src="https://app-consultorio-odontologico.vercel.app/"
                  className="absolute top-0 left-0 border-none origin-top-left pointer-events-none sm:pointer-events-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                  style={{ 
                    width: '430px', 
                    height: `${phoneHeight}px`,
                    transform: `scale(${phoneScale})` 
                  }}
                  scrolling="no"
                  title="App Mobile View"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  loading="lazy"
                />
              </div>

              {/* Glass Reflection Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-20" />
            </motion.div>

            {/* Mobile Direct Visit Button */}
            <a
              href="https://app-consultorio-odontologico.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#F66C44] bg-[#F66C44]/10 hover:bg-[#F66C44]/20 border border-[#F66C44]/30 px-4 py-2 rounded-full transition-all duration-300"
            >
              <span>Ver App interactiva en vivo</span>
              <span>↗</span>
            </a>
          </div>

          {/* RIGHT FEATURES (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-10 xl:gap-14 w-full items-start z-20">
            {rightFeatures.map((feat, i) => (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex items-center gap-3 w-full justify-start group"
              >
                {/* Connector line pointing left towards phone */}
                <div className="w-10 xl:w-16 h-[2px] bg-gradient-to-l from-[#F66C44] to-transparent shrink-0" />
                <div className="flex items-center gap-3 bg-zinc-900/80 backdrop-blur-xl border border-white/10 hover:border-[#F66C44]/60 transition-all p-3.5 rounded-2xl shadow-xl hover:-translate-y-1">
                  <span className="text-2xl">{feat.icon}</span>
                  <div className="flex flex-col text-left">
                    <span className="text-white font-bold text-sm leading-tight">{feat.label}</span>
                    <span className="text-zinc-400 text-xs mt-0.5">{feat.desc}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* MOBILE & TABLET FEATURES GRID (< lg screens) */}
        <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl pt-4">
          {[...leftFeatures, ...rightFeatures].map((feat, i) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3.5 bg-zinc-900/90 border border-white/10 p-4 rounded-2xl"
            >
              <span className="text-2xl shrink-0">{feat.icon}</span>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm">{feat.label}</span>
                <span className="text-zinc-400 text-xs">{feat.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

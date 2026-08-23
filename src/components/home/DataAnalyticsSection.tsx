"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiActivity, FiTarget } from "react-icons/fi";

const PhoneMockup = ({ 
  src, 
  className, 
  delay = 0,
  rotate = 0,
}: { 
  src: string; 
  className?: string; 
  delay?: number;
  rotate?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50, rotate: rotate - 5 }}
    whileInView={{ opacity: 1, y: 0, rotate: rotate }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`relative shrink-0 ${className || ''}`}
  >
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 5, repeat: Infinity, delay: delay, ease: "easeInOut" }}
      className="relative rounded-[2.5rem] border-[6px] border-[#27272a] bg-black shadow-[0_0_40px_rgba(251,191,36,0.15)] overflow-hidden w-[220px] h-[480px] sm:w-[260px] sm:h-[540px]"
    >
      {/* Phone Notch/Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[30%] h-[24px] bg-[#1a1a1c] rounded-full z-20 flex justify-center items-center">
        <div className="w-1.5 h-1.5 rounded-full bg-black/50" />
      </div>
      
      {/* Screen Content */}
      <div className="absolute inset-0 w-full h-full bg-[#050505]">
        <img 
          src={src} 
          alt="Analytics Interface" 
          className="w-full h-full object-cover object-top opacity-90" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fbbf24]/10 mix-blend-overlay pointer-events-none" />
      </div>
    </motion.div>
  </motion.div>
);

export default function DataAnalyticsSection() {
  const features = [
    { icon: FiTrendingUp, title: "Análisis de Tráfico", desc: "Monitorea visitantes únicos y tiempos de sesión." },
    { icon: FiTarget, title: "Mapas de Calor", desc: "Descubre exactamente dónde hacen clic tus usuarios." },
    { icon: FiActivity, title: "Embudos de Conversión", desc: "Optimiza cada paso para convertir más clientes." },
  ];

  const desktopPhones = [
    { id: 1, rotate: 15, zIndex: 10, scale: 0.75, delay: 0, yOffset: 60 },
    { id: 2, rotate: 10, zIndex: 20, scale: 0.85, delay: 0.5, yOffset: 30 },
    { id: 3, rotate: 5, zIndex: 30, scale: 0.95, delay: 1, yOffset: 10 },
    { id: 4, rotate: 0, zIndex: 40, scale: 1.05, delay: 1.5, yOffset: 0 },
    { id: 5, rotate: -5, zIndex: 30, scale: 0.95, delay: 2, yOffset: 10 },
    { id: 6, rotate: -10, zIndex: 20, scale: 0.85, delay: 2.5, yOffset: 30 },
    { id: 7, rotate: -15, zIndex: 10, scale: 0.75, delay: 3, yOffset: 60 },
  ];

  return (
    <section className="relative w-full bg-transparent text-white py-24 md:py-32 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-16 lg:gap-24">
        
        {/* Top: Text Content */}
        <div className="w-full max-w-4xl flex flex-col items-center text-center gap-8 z-10 px-6">
          <div className="flex items-center gap-4 text-[#fbbf24] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
            <div className="w-8 sm:w-12 h-[1px] bg-[#fbbf24]"></div>
            DATA & ANALYTICS
            <div className="w-8 sm:w-12 h-[1px] bg-[#fbbf24]"></div>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.9]">
            El análisis perfecto <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
              para tu web.
            </span>
          </h2>

          <p className="text-[#a1a1aa] text-base md:text-lg leading-relaxed max-w-2xl">
            Un diseño hermoso no es suficiente. Al lanzar tu sitio web, integramos 
            herramientas de análisis avanzado para entender el comportamiento real 
            de tus usuarios, medir qué funciona y maximizar tus conversiones.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-4">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="flex flex-col items-center text-center gap-4 group w-[240px]"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#18181b] border border-white/5 flex items-center justify-center text-[#fbbf24] group-hover:bg-[#fbbf24] group-hover:text-black transition-colors duration-300">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm text-[#71717a]">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom: Floating Phones Visuals */}
        <div className="w-full relative mt-8">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[800px] h-[300px] bg-[#fbbf24]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Desktop View: Arc of 7 Phones */}
          <div className="hidden lg:flex w-full justify-center items-center h-[650px]">
            {desktopPhones.map((phone) => (
              <div 
                key={phone.id}
                className="-ml-24 xl:-ml-28 first:ml-0 relative transition-transform hover:-translate-y-4 duration-500"
                style={{ 
                  zIndex: phone.zIndex, 
                  transform: `scale(${phone.scale}) translateY(${phone.yOffset}px)` 
                }}
              >
                <PhoneMockup 
                  src="/brave_screenshot_21st.dev (1).png"
                  rotate={phone.rotate}
                  delay={phone.delay}
                />
              </div>
            ))}
          </div>

          {/* Mobile View: Scrollable Row without overlap */}
          <div className="flex lg:hidden w-full overflow-x-auto snap-x snap-mandatory gap-6 px-8 pb-16 pt-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="snap-center shrink-0">
                <PhoneMockup 
                  src="/brave_screenshot_21st.dev (1).png"
                  rotate={0}
                  delay={i * 0.2}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

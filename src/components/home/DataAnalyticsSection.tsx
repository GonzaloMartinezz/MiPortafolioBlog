"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiActivity, FiTarget, FiLayers, FiPieChart, FiMousePointer } from "react-icons/fi";

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
    { icon: FiLayers, title: "A/B Testing", desc: "Prueba versiones para encontrar la que más vende." },
    { icon: FiPieChart, title: "Reportes en Tiempo Real", desc: "Visualiza el rendimiento de tu negocio en vivo." },
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
    <section className="relative w-full bg-transparent text-slate-900 py-24 md:py-32 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-16 lg:gap-24">
        
        {/* Top: Text Content */}
        <div className="w-full max-w-4xl flex flex-col items-center text-center gap-8 z-10 px-6">
          <div className="flex items-center gap-4 text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
            <div className="w-8 sm:w-12 h-[1px] bg-white/50"></div>
            DATA & ANALYTICS
            <div className="w-8 sm:w-12 h-[1px] bg-white/50"></div>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.9]">
            El análisis perfecto <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 drop-shadow-sm">
              para tu web.
            </span>
          </h2>

          <p className="text-slate-700 font-medium text-base md:text-lg leading-relaxed max-w-2xl">
            Un diseño hermoso no es suficiente. Al lanzar tu sitio web, integramos 
            herramientas de análisis avanzado para entender el comportamiento real 
            de tus usuarios, medir qué funciona y maximizar tus conversiones.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-6 w-full mt-12 max-w-7xl mx-auto px-4">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative flex flex-col items-center text-center gap-5 px-6 py-12 md:py-16 bg-white/40 backdrop-blur-md border border-white/60 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 overflow-hidden transition-all duration-500 group h-full min-h-[340px]"
              >
                {/* Efecto de relleno de color */}
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                
                {/* Ícono */}
                <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                  <feature.icon size={32} className="md:w-10 md:h-10" />
                </div>
                
                {/* Textos */}
                <div className="relative z-10 flex flex-col flex-grow justify-center mt-2">
                  <h4 className="text-lg md:text-xl font-black mb-4 leading-tight text-slate-900 group-hover:text-white transition-colors duration-500">{feature.title}</h4>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium group-hover:text-blue-100 transition-colors duration-500">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom: Floating Phones Visuals Removed */}

      </div>
    </section>
  );
}

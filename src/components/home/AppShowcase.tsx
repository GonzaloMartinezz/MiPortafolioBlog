"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

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

const FeatureBadge = ({ feature, side, index }: { feature: any; side: "left" | "right"; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
      className={`flex items-center gap-3 md:gap-4 ${side === "right" ? "flex-row-reverse" : ""}`}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-[#F66C44]/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex items-center gap-3 bg-black/40 backdrop-blur-xl border border-white/10 hover:border-[#F66C44]/50 transition-colors px-4 py-3 rounded-xl shadow-2xl">
          <span className="text-2xl md:text-3xl">{feature.icon}</span>
          <div className={`flex flex-col ${side === "right" ? "text-right" : "text-left"}`}>
            <span className="text-white font-medium text-sm md:text-base whitespace-nowrap">{feature.label}</span>
            <span className="text-white/50 text-xs hidden md:block whitespace-nowrap">{feature.desc}</span>
          </div>
        </div>
      </div>
      {/* Connecting line */}
      <div 
        className={`w-8 md:w-16 lg:w-32 h-[1px] bg-gradient-to-${side === "left" ? "r" : "l"} from-[#F66C44]/50 to-transparent`} 
      />
    </motion.div>
  );
};

export default function AppShowcase() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full overflow-hidden bg-transparent pt-4 flex flex-col items-center justify-center min-h-0">
      
      {/* Soft Top/Bottom Blends to prevent harsh blur cutoffs */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0B0B0B] to-transparent z-10 pointer-events-none" />

      {/* Massive Aesthetic Blurs (Difuminado Estético) */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] bg-[#F66C44]/20 blur-[150px] md:blur-[250px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F66C44]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-[-100px] -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.04] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-[-200px] -translate-y-1/2 w-[400px] h-[400px] border border-white/[0.06] rounded-full pointer-events-none" />

      {/* Floating Indicators Left */}
      <div className="hidden lg:flex absolute left-4 xl:left-12 top-[55%] -translate-y-1/2 flex-col gap-12 xl:gap-20 z-20">
        {leftFeatures.map((feat, i) => (
          <FeatureBadge key={feat.id} feature={feat} side="left" index={i} />
        ))}
      </div>

      {/* Floating Indicators Right */}
      <div className="hidden lg:flex absolute right-4 xl:right-12 top-[55%] -translate-y-1/2 flex-col gap-12 xl:gap-20 z-20">
        {rightFeatures.map((feat, i) => (
          <FeatureBadge key={feat.id} feature={feat} side="right" index={i} />
        ))}
      </div>

      <ContainerScroll
        titleComponent={
          <div className="text-center z-10 mb-8 md:mb-16 px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight"
            >
              Ecosistemas Digitales <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F66C44] to-[#FCD100]">
                para el Sector Salud.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-white/50 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            >
              Construyo plataformas de alto rendimiento exclusivas para odontología, clínicas médicas, centros de diagnóstico y veterinarias. Interfaces fluidas, máxima seguridad y código escalable para automatizar tu gestión y elevar la atención a tus pacientes.
            </motion.p>
          </div>
        }
      >
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <iframe
            src="https://app-consultorio-odontologico.vercel.app/"
            className="absolute top-0 left-0 h-full border-none bg-black"
            style={{ width: 'calc(100% + 24px)' }}
            title="App Mobile View"
            sandbox="allow-scripts allow-same-origin allow-popups"
            loading="lazy"
          />
        </div>
      </ContainerScroll>
    </div>
  );
}

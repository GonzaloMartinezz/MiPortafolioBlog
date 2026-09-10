"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface DualAppShowcaseProps {
  url?: string;
  title?: React.ReactNode;
  description?: string;
}

export default function DualAppShowcase({ 
  url = "https://tarjetatitanio.vercel.app/",
  title = (
    <>
      Ecosistemas Digitales <br className="hidden sm:block" />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e64c22] to-[#FF5E00]">
        para el Sector Salud.
      </span>
    </>
  ),
  description = "Construyo plataformas de alto rendimiento exclusivas para odontología, clínicas médicas, centros de diagnóstico y veterinarias. Interfaces fluidas, máxima seguridad y código escalable para automatizar tu gestión y elevar la atención a tus pacientes."
}: DualAppShowcaseProps) {
  const laptopRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  
  // Use safe default scales for SSR or initial flash
  const [laptopScale, setLaptopScale] = useState(0.5);
  const [phoneScale, setPhoneScale] = useState(0.4);

  useEffect(() => {
    const updateScales = () => {
      if (laptopRef.current) {
        setLaptopScale(laptopRef.current.clientWidth / 1920);
      }
      if (phoneRef.current) {
        setPhoneScale(phoneRef.current.clientWidth / 430);
      }
    };

    // Initial measurement
    updateScales();

    const observer = new ResizeObserver(() => {
      updateScales();
    });
    
    if (laptopRef.current) observer.observe(laptopRef.current);
    if (phoneRef.current) observer.observe(phoneRef.current);
    
    window.addEventListener("resize", updateScales);
    
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateScales);
    };
  }, []);

  return (
    <div className="relative w-full bg-transparent py-12 md:py-24 flex flex-col items-center justify-center overflow-hidden">

      {/* Massive Aesthetic Blurs (Difuminado Estético) */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] bg-white/40 blur-[150px] md:blur-[250px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/30 blur-[150px] rounded-full pointer-events-none" />

      {/* Title Section */}
      <div className="text-center z-10 mb-8 md:mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 md:mt-6 text-slate-700 font-medium text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      </div>

      {/* Showcase Area (Dual Device) */}
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[280px] md:min-h-[450px] px-4 mt-2 pb-14 sm:pb-12 md:pb-8">

        {/* Subtle glow directly behind devices ONLY */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/40 blur-[120px] md:blur-[180px] rounded-full pointer-events-none" />

        <div className="relative w-full flex justify-center z-20">
          {/* MacBook Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
            className="relative w-[92%] sm:w-[85%] max-w-[750px] z-10"
          >
            {/* Screen */}
            <div 
              ref={laptopRef}
              className="relative w-full aspect-[16/10] bg-zinc-950 border-[5px] sm:border-[8px] md:border-[12px] border-zinc-900 rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden"
            >
              <iframe
                src={url}
                className="absolute top-0 left-0 border-none w-[1920px] h-[1200px] origin-top-left pointer-events-none sm:pointer-events-auto"
                style={{ transform: `scale(${laptopScale})`, overflow: 'auto' }}
                scrolling="auto"
                title="App Desktop View"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            </div>
            {/* Keyboard Base */}
            <div className="w-full h-1 bg-zinc-950 border-b border-zinc-900/60" />
            <div className="w-[112%] -ml-[6%] h-2.5 md:h-4 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 rounded-b-lg md:rounded-b-xl shadow-[0_15px_30px_rgba(0,0,0,0.8)] border-t border-white/10 relative">
              <div className="w-12 md:w-20 h-1 md:h-1.5 bg-zinc-950 rounded-b-md absolute top-0 left-1/2 -translate-x-1/2" />
            </div>
          </motion.div>

          {/* iPhone Mockup (Overlapping Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.2 }}
            className="absolute right-0 xs:right-2 sm:right-0 md:-right-4 bottom-[-8px] sm:bottom-[-5%] md:-bottom-10 z-30 w-[110px] xs:w-[125px] sm:w-[150px] md:w-[190px]"
          >
            <div className="relative w-full aspect-[9/19.5] bg-black rounded-[18px] sm:rounded-[24px] md:rounded-[36px] border-[3px] md:border-[6px] border-[#1C1C1E] shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden flex items-center justify-center">

              {/* Hardware Buttons Decoration */}
              <div className="absolute top-[40px] sm:top-[60px] md:top-[100px] -left-[4px] md:-left-[6px] w-[2px] md:w-[3px] h-[10px] md:h-[20px] bg-[#2C2C2E] rounded-l-sm" />
              <div className="absolute top-[60px] sm:top-[85px] md:top-[140px] -left-[4px] md:-left-[6px] w-[2px] md:w-[3px] h-[15px] md:h-[35px] bg-[#2C2C2E] rounded-l-sm" />
              <div className="absolute top-[80px] sm:top-[115px] md:top-[190px] -left-[4px] md:-left-[6px] w-[2px] md:w-[3px] h-[15px] md:h-[35px] bg-[#2C2C2E] rounded-l-sm" />
              <div className="absolute top-[65px] sm:top-[90px] md:top-[150px] -right-[4px] md:-right-[6px] w-[2px] md:w-[3px] h-[20px] md:h-[50px] bg-[#2C2C2E] rounded-r-sm" />

              {/* Iframe Content inside the phone */}
              <div ref={phoneRef} className="w-full h-full bg-[#111111] overflow-hidden rounded-[14px] sm:rounded-[20px] md:rounded-[30px] relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <iframe
                  src={url}
                  className="absolute top-0 left-0 border-none w-[430px] h-[932px] origin-top-left pointer-events-none sm:pointer-events-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                  style={{ transform: `scale(${phoneScale})` }}
                  scrolling="no"
                  title="App Mobile View"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
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

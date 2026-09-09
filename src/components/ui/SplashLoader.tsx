"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Evitar scroll mientras carga
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Simulador de progreso fluido
    const duration = 1200; // 1.2s total de carga para una sensación más snappy
    const interval = 20; // Actualizar cada 20ms
    const step = 100 / (duration / interval);
    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += step;
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(timer);
        // Esperamos un poco (300ms) una vez al 100% para mostrar la barra llena
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      } else {
        setProgress(currentProgress);
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="global-loader"
          initial={{ opacity: 1 }}
          // Efecto "Toaster" - se desliza hacia arriba
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Fondo Radial sutil */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050505] to-[#050505] pointer-events-none" />

          {/* Contenedor del Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-40 h-40 sm:w-52 sm:h-52 mb-12 z-10 rounded-full overflow-hidden border-4 border-white/5 shadow-[0_0_50px_rgba(246,108,68,0.2)] bg-black"
          >
            {/* Efecto de resplandor (Glow) detrás del logo */}
            <div className="absolute inset-0 bg-[#F66C44]/30 blur-3xl rounded-full" />
            
            <Image
              src="/LOGOia.png"
              alt="Gonzalo Martínez Logo"
              fill
              className="object-cover relative z-10"
              priority
            />
          </motion.div>

          {/* Contenedor de la barra de progreso */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-56 sm:w-80 h-[6px] bg-[#111111] border border-white/10 rounded-full overflow-hidden relative z-10 shadow-inner"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#e64c22] via-[#F66C44] to-[#FFB098] rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.05 }} 
            >
              {/* Brillo en la punta de la barra */}
              <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/40 blur-[2px] translate-x-1/2" />
            </motion.div>
          </motion.div>
          
          {/* Porcentaje numérico */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-xs sm:text-sm font-mono font-bold tracking-[0.3em] text-white/50 z-10"
          >
            {Math.round(progress)}%
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

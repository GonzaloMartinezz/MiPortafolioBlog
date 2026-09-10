"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const duration = 1200; 
    const interval = 20; 
    const step = 100 / (duration / interval);
    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += step;
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(timer);
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
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#070709] overflow-hidden select-none"
        >
          {/* Subtle Ambient Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-[#070709] to-[#070709] pointer-events-none" />
          <div className="absolute w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

          {/* Main Content Box */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-sm w-full">
            
            {/* Logo Wrapper - Clean, NO orange circular border */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-28 h-28 sm:w-36 sm:h-36 mb-6 flex items-center justify-center"
            >
              <Image
                src="/LOGOia.png"
                alt="Gonzalo Martínez"
                width={144}
                height={144}
                className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                priority
              />
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-8 space-y-1.5"
            >
              <h1 className="text-xl sm:text-2xl font-black tracking-wider uppercase bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Gonzalo Martínez
              </h1>
              <p className="text-[10px] sm:text-xs font-mono text-slate-400 tracking-[0.25em] uppercase">
                Software & Data Portfolio
              </p>
            </motion.div>

            {/* High-Tech Sleek Progress Bar */}
            <motion.div
              initial={{ opacity: 0, width: "60%" }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="w-full space-y-3"
            >
              <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-400 to-white rounded-full relative"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.04 }}
                >
                  <div className="absolute top-0 right-0 bottom-0 w-6 bg-white/80 blur-[2px] translate-x-1/2" />
                </motion.div>
              </div>

              {/* Progress Percentage Counter */}
              <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-400">
                <span>CARGANDO EXPERIENCIA</span>
                <span className="font-bold text-white">
                  {Math.round(progress).toString().padStart(3, "0")}%
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

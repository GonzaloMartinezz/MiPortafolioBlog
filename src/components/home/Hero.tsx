"use client";
import { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiArrowDownRight } from "react-icons/fi";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "gH62-RxyEh8";

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center w-full py-10 md:py-16 lg:py-20 gap-10 md:gap-14 lg:gap-24">

      {/* LEFT SIDE — Profile + Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:max-w-md"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 tracking-wider uppercase">
            Disponible para proyectos
          </span>
        </motion.div>

        {/* Profile Image */}
        <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/25 to-indigo-400/25 rounded-full blur-[60px]"></div>

          <div className="relative w-full h-full rounded-full border-[3px] border-slate-900 dark:border-white p-1.5 overflow-hidden bg-white dark:bg-slate-900 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image
                src="/LogoPerfil.jpg"
                alt="Gonzalo Martínez — Full Stack Developer"
                fill
                sizes="(max-width: 768px) 256px, (max-width: 1200px) 288px, 320px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Floating Badge (Bouncing Basketball) */}
          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: ["easeOut", "easeIn"],
              times: [0, 0.5, 1]
            }}
            className="absolute top-[60%] -right-4 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-xl flex items-center justify-center border border-slate-100 dark:border-slate-700"
          >
            <span className="text-[28px]" aria-label="Basketball">🏀</span>
          </motion.div>
        </div>

        {/* Name & Title */}
        <div className="space-y-2">
          <h1 className="font-[var(--font-display)] text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
            Gonzalo Martínez
          </h1>
          <p className="text-sm md:text-base font-semibold text-slate-500 dark:text-slate-400 tracking-wide">
            Full Stack Developer · Data Analyst
          </p>
        </div>

        {/* CTA Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="hidden lg:flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 mt-2"
        >
          <FiArrowDownRight className="text-blue-500" size={18} />
          <span className="font-medium tracking-wide">Conocé mi trabajo</span>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE — Video Card */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl lg:max-w-3xl aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] group hover:shadow-[0_25px_60px_rgba(8,_112,_184,_0.3)] transition-shadow duration-500"
      >
        <AnimatePresence mode="wait">
          {!isPlaying ? (
            <motion.div
              key="thumbnail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full h-full cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              {/* Header Overlay */}
              <div className="absolute top-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20 ring-2 ring-white/10">
                  <Image src="/LogoPerfil.jpg" alt="Gonzalo Martínez" width={36} height={36} className="object-cover" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-white text-sm font-bold truncate">
                    Showreel de Proyectos — Gonzalo Martínez
                  </span>
                  <span className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-semibold">
                    Reproducir demo
                  </span>
                </div>
              </div>

              {/* Thumbnail */}
              <Image
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt="Video presentación de proyectos"
                fill
                className="object-cover opacity-70 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-14 bg-[#FF0000] rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-red-500/30 transition-all group-hover:shadow-red-500/50"
                >
                  <FaPlay className="ml-1" size={22} />
                </motion.div>
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.15em]">
                    Ver en YouTube
                  </span>
                </div>
                <FiExternalLink className="text-white/50" size={16} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full"
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Showreel de proyectos — Gonzalo Martínez"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

    </section>
  );
}

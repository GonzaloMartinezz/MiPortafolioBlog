"use client";
import { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "gH62-RxyEh8";

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full py-12 md:py-16 gap-12 lg:gap-20">

      {/* PROFILE CIRCLE */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-[80px] animate-pulse"></div>

        <div className="relative w-full h-full rounded-full border-2 border-slate-900 p-2 overflow-hidden bg-white shadow-2xl">
          <div className="w-full h-full rounded-full overflow-hidden relative">
            <Image
              src="/LogoPerfil.jpg"
              alt="Gonzalo Martínez"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute bottom-2 right-6 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border border-slate-100"
        >
          <div className="text-3xl font-bold">🏀</div>
        </motion.div>
      </motion.div>

      {/* VIDEO CARD */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl lg:max-w-3xl aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] group"
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
              {/* YouTube-like Header */}
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                  <Image src="/LogoPerfil.jpg" alt="avatar" width={40} height={40} className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-bold truncate">Presentación de Proyectos - Gonzalo Martínez</span>
                  <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Ver ahora</span>
                </div>
              </div>

              <Image
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt="Video Thumbnail"
                fill
                className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-14 bg-[#FF0000] rounded-2xl flex items-center justify-center text-white shadow-2xl transition-all group-hover:bg-[#FF0000]/90"
                >
                  <FaPlay className="ml-1" size={24} />
                </motion.div>
              </div>

              {/* Footer info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">Ver en YOUTUBE</span>
                </div>
                <FiExternalLink className="text-white opacity-60" size={18} />
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
                title="YouTube video player"
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

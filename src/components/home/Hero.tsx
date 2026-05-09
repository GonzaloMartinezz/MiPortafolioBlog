"use client";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full py-20 gap-20">
      
      {/* PROFILE CIRCLE */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-72 h-72 md:w-80 md:h-80"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-[80px] animate-pulse"></div>
        
        <div className="relative w-full h-full rounded-full border-2 border-slate-900 dark:border-slate-100 p-2 overflow-hidden bg-white dark:bg-slate-950 shadow-2xl">
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
          className="absolute -bottom-4 -right-4 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-xl flex items-center justify-center border border-slate-100 dark:border-slate-700"
        >
          <div className="text-blue-600 text-xl font-bold">🌐</div>
        </motion.div>
      </motion.div>

      {/* VIDEO CARD */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-lg aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl group"
      >
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop"
          alt="Video Thumbnail"
          fill
          className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white cursor-pointer shadow-xl"
          >
            <FaPlay className="ml-1" size={20} />
          </motion.div>
        </div>

        {/* Footer info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-900/80 backdrop-blur-md flex justify-between items-center border-t border-white/10">
          <span className="text-white text-xs font-medium">Mirar en Youtube</span>
          <FiExternalLink className="text-white" size={16} />
        </div>
      </motion.div>

    </section>
  );
}
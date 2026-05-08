"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 sm:gap-6 md:gap-8 py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 bg-white">

      {/* LOGO - IZQUIERDA */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
        className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 group cursor-pointer flex-shrink-0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-blue-400/60 blur-[60px] rounded-full pointer-events-none animate-pulse"></div>

        <Image
          src="/LogoPerfil.jpg"
          alt="Gonzalo Martínez"
          fill
          className="rounded-full object-cover border-4 border-white shadow-xl grayscale group-hover:grayscale-0 transition duration-700 ease-in-out transform group-hover:scale-105 group-hover:rotate-3"
          priority
        />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -bottom-2 -right-2 text-4xl sm:text-5xl md:text-6xl"
        >
          🏀
        </motion.div>
      </motion.div>

      {/* VIDEO - DERECHA */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative w-full sm:w-80 md:w-96 aspect-video rounded-2xl overflow-hidden shadow-xl border-2 border-blue-300 hover:border-blue-600 transition-all duration-300 hover:shadow-blue-400/50 hover:scale-105 flex-shrink-0"
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/gH62-RxyEh8?controls=1&modestbranding=1&rel=0"
          title="Mi Video YouTube"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>

    </section>
  );
}
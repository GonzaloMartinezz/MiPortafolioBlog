"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export default function Hero() {
  
  // Arrays (Corregí la coma extra que tenías en stackFull para evitar errores)
  const stackFull = [
    "Javascript", "Typescript", "React", "Node.js", "Next.js", 
    "MongoDB", "Express", "C#", ".NET"
  ];

  const stackData = [
    "Excel", "Power BI", "Tableau", "Canva", 
    "SQL Server", "Figma", "DAX", "MySQL", 
    "Google Data Studio"
  ];

  // Estilo de Badges
  const badgeStyle = "px-3 py-1.5 rounded-lg text-[11px] md:text-sm font-bold tracking-wide border text-white bg-slate-600 transition-all duration-300 ease-out hover:bg-blue-600 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 cursor-default border-slate-500 hover:border-blue-400";

  return (
    // CAMBIO CLAVE 1: pt-0 (antes pt-10) para subir todo el bloque al máximo.
    // min-h-[85vh] asegura que ocupe buena parte de la pantalla pero centrado.
    <section className="flex flex-col items-center justify-center text-center pt-0 pb-10 overflow-visible min-h-[85vh]">

      {/* 1. IMAGEN (TU CÓDIGO EXACTO + Margen reducido abajo) */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
        // Mantenemos tus clases -mt-10 md:-mt-16 intactas.
        // CAMBIO 2: Reduje mb-8 a mb-4 para pegar más el texto al logo.
        className="relative w-32 h-32 md:w-40 md:h-40 group cursor-pointer -mt-10 md:-mt-16 z-10 mb-4"
      >
        {/* Glow azul detrás */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-opacity-50 bg-blue-400/60 blur-[60px] rounded-full pointer-events-none animate-pulse"></div>
        
        <Image 
          src="/LogoPerfil.jpg" 
          alt="Gonzalo Martínez" 
          fill
          className="rounded-full object-cover border-4 border-white shadow-xl grayscale group-hover:grayscale-0 transition duration-500 ease-in-out transform group-hover:scale-105 group-hover:rotate-3"
          priority 
        />
        {/* Emoji flotante */}
        <motion.div 
            animate={{ y: [0, -8, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -bottom-1 -right-1 text-4xl md:text-5xl"
        >
          🏀
        </motion.div>
      </motion.div>

      {/* 2. TEXTO ANIMADO */}
      {/* CAMBIO 3: Reduje mb-10 a mb-6 */}
      <div className="mb-6 h-[40px] md:h-[60px] flex items-center justify-center">
          <div className="font-display text-2xl md:text-5xl font-black text-slate-900 leading-tight">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Data Analyst',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-blue-600"
            />
          </div>
      </div>
  
      {/* 3. STACKS */}
      <Reveal delay={0.3}>
        {/* CAMBIO 4: Reduje mb-10 a mb-5 para acercar los dos bloques de stacks */}
        <div className="mb-5 w-full max-w-4xl px-2">
            <p className="font-mono text-slate-400 mb-4 tracking-[0.2em] text-xs font-bold uppercase">Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {stackFull.map((tech) => (
                    <span key={tech} className={badgeStyle}>
                        {tech}
                    </span>
                ))}
            </div>
        </div>
      </Reveal>

      <Reveal delay={0.5}>
        {/* CAMBIO 5: Reduje mb-16 a mb-8 para subir el botón */}
        <div className="mb-8 w-full max-w-4xl px-2">
            <p className="font-mono text-slate-400 mb-4 tracking-[0.2em] text-xs font-bold uppercase">Data Analytics</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {stackData.map((tech) => (
                    <span key={tech} className={badgeStyle}>
                        {tech}
                    </span>
                ))}
            </div>
        </div>
      </Reveal>

      {/* 4. BOTÓN */}
      <Reveal delay={0.7}>
        <Link href="/blog" className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white transition-all duration-300 bg-slate-900 rounded-full hover:bg-blue-600 hover:shadow-md hover:scale-205">
            Ver mis trabajos!
            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </Link>
      </Reveal>

    </section>
  );
}
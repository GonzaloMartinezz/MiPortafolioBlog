"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaPlay, FaCode } from "react-icons/fa";

export interface SpotlightProject {
  id: string | number;
  title: string;
  description: string;
  image: string;
  demoLink: string;
  codeLink: string;
}

interface ProjectSpotlightProps {
  projects?: SpotlightProject[];
}

// Fallback just in case
const fallbackProjects: SpotlightProject[] = [
  {
    id: 1,
    title: "CENTRO ODONTOLÓGICO C&M",
    description: "Plataforma integral para gestión odontológica: agenda inteligente de turnos, historias clínicas digitales y panel administrativo completo.",
    image: "/coc&m.png",
    demoLink: "https://app-consultorio-odontologico.vercel.app/",
    codeLink: "https://github.com/GonzaloMartinezz/WebConsultorioFrontend",
  }
];

export function ProjectSpotlight({ projects = fallbackProjects }: ProjectSpotlightProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeProjects = projects && projects.length > 0 ? projects : fallbackProjects;

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % activeProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + activeProjects.length) % activeProjects.length);
  };

  const current = activeProjects[currentIndex];

  return (
    <section className="py-16 md:py-24 w-full flex flex-col items-center overflow-hidden relative">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none transition-colors duration-700" />
      
      <div className="w-full max-w-[1300px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-[0.2em] text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/40 rounded-full border border-indigo-100 dark:border-indigo-800/40">
            Proyecto Destacado
          </span>
        </motion.div>

        {/* Text Section */}
        <div className="min-h-[350px] md:min-h-[250px] flex flex-col items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-text"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center w-full"
            >
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
                {current.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg lg:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                {current.description}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-8">
                <a
                  href={current.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <FaPlay size={12} className="relative z-10 group-hover:text-white transition-colors" /> 
                  <span className="relative z-10 group-hover:text-white transition-colors">Ver App</span>
                </a>
                <a
                  href={current.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-white/50 dark:bg-[#0B0F19]/50 backdrop-blur-md text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-slate-50 dark:hover:bg-[#131B2F] transition-all hover:scale-105 hover:border-slate-300 dark:hover:border-slate-700"
                >
                  <FaCode size={16} className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" /> 
                  <span>Ver código en GitHub</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Device Mockup */}
        <div className="relative mx-auto w-full group mt-4 md:mt-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] md:rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-full aspect-[16/9] bg-slate-100 dark:bg-[#0B0F19] rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border-[8px] md:border-[12px] border-white dark:border-[#131B2F] overflow-hidden transition-colors duration-500">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-img"}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white dark:bg-slate-900"
              >
                <Image
                  src={current.image}
                  alt={`Captura de pantalla de ${current.title}`}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 md:mt-16 flex items-center justify-center gap-6 md:gap-8 relative z-20">
          <button
            onClick={prevProject}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B0F19] flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 hover:scale-105 transition-all shadow-sm"
            aria-label="Proyecto anterior"
          >
            <FaChevronLeft size={14} />
          </button>

          <div className="flex gap-3 px-4 py-3 rounded-full bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/50 dark:border-slate-800/50">
            {activeProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]" : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                }`}
                aria-label={`Ver proyecto ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextProject}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white hover:scale-105 transition-all shadow-lg"
            aria-label="Siguiente proyecto"
          >
            <FaChevronRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}

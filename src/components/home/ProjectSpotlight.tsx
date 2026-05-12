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
    description: "Sistema integral de gestión para consultorio dental. Citas online, historias clínicas digitales, seguimiento de pacientes y agenda integrada.",
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
    <section className="py-20 w-full flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[1300px] mx-auto px-4 md:px-8">
        
        {/* TEXT SECTION */}
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
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
                {current.title}
              </h2>
              <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                {current.description}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={current.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-500/25"
                >
                  <FaPlay size={14} /> VER APP
                </a>
                <a
                  href={current.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:scale-105"
                >
                  <FaCode size={16} /> VER CÓDIGO EN GITHUB
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DEVICE MOCKUP SECTION (STATIC SIZE) */}
        <div className="relative mx-auto w-full group">
          <div className="relative w-full aspect-[16/9] bg-slate-900 rounded-[2.5rem] shadow-2xl border-[12px] border-slate-900 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-img"}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project Indicators */}
          <div className="mt-12 flex items-center justify-center gap-8">
            <button
              onClick={prevProject}
              className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all"
            >
              <FaChevronLeft />
            </button>

            <div className="flex gap-2">
              {activeProjects.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-8 bg-blue-600" : "w-2 bg-slate-200 dark:bg-slate-800"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

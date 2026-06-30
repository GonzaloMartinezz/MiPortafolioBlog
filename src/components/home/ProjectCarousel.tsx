"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    client: "ODONTO",
    clientSuffix: "APP",
    title: "Consultorio Odontológico",
    category: "SaaS / WEB APP",
    year: "2024",
    description: "Gestión integral de turnos y pacientes para clínicas odontológicas.",
    image: "/coc&m.png",
    color: "#3b82f6", // Blue
    link: "https://app-consultorio-odontologico.vercel.app/"
  },
  {
    id: 2,
    client: "TITANIO",
    clientSuffix: "FIN",
    title: "Tarjeta Titanio",
    category: "FINTECH PLATFORM",
    year: "2024",
    description: "Plataforma financiera integral para la gestión de tarjetas de crédito y préstamos.",
    image: "/TT.png",
    color: "#eab308", // Yellow/Gold
    link: "https://tarjetatitanio.vercel.app/"
  },
  {
    id: 3,
    client: "JHONES",
    clientSuffix: "COM",
    title: "Mr Jhones",
    category: "E-COMMERCE",
    year: "2023",
    description: "Tienda online de indumentaria con pasarela de pagos y gestión de stock en tiempo real.",
    image: "/MS.png",
    color: "#ef4444", // Red
    link: "https://mrjhones.vercel.app/"
  },
  {
    id: 4,
    client: "BELGRANO",
    clientSuffix: "CLUB",
    title: "Club Belgrano",
    category: "INSTITUCIONAL",
    year: "2023",
    description: "Sistema de gestión de socios, actividades y pagos para club deportivo.",
    image: "/CB.png",
    color: "#10b981", // Emerald
    link: "https://app-club-belgranocyd.vercel.app/"
  },
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      if (nextIndex >= projects.length) nextIndex = 0;
      return nextIndex;
    });
  };

  if (!isClient) return null;

  const currentProject = projects[currentIndex];

  return (
    <>
      {/* Mobile Layout */}
      <div className="block md:hidden w-full bg-[#0B0B0B] pt-12 pb-24 px-6 overflow-hidden relative font-sans">
        <div className="mb-8">
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#71717a] uppercase mb-4">
            PROYECTOS / 0{projects.length}
          </p>
          <h2 className="text-5xl font-black leading-[0.9] tracking-tighter text-white uppercase">
            RESULTADOS<br />REALES
          </h2>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 no-scrollbar">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative w-[85vw] shrink-0 snap-center rounded-2xl overflow-hidden h-[60vh] bg-[#121212] border border-white/5 shadow-2xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/20 to-transparent" />
              </div>



              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#a1a1aa] uppercase mb-3">
                  {project.category} <span className="mx-1">—</span> {project.year}
                </p>
                <h4 className="text-3xl font-black text-white mb-4 leading-none tracking-tight">
                  {project.title}
                </h4>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#fbbf24] flex items-center gap-2"
                >
                  Ver proyecto ↗
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Yellow floating button (asterisk) - matches reference */}
        <div className="absolute bottom-6 right-6 w-12 h-12 bg-[#fbbf24] text-black rounded-xl flex items-center justify-center text-3xl font-black shadow-lg">
          *
        </div>
      </div>

      {/* Desktop Layout */}
      <section className="hidden md:block relative w-full h-[100vh] bg-black overflow-hidden font-sans">
      
      {/* Background Images with AnimatePresence */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.8 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-black/10 z-10" /> {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" /> {/* Bottom gradient for text readability */}
          
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Persistent UI Elements over the carousel */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-6 md:p-12 lg:p-16">
        
        {/* Top Left Label */}
        <div>
          <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-white/70 uppercase">
            Resultados Reales
          </p>
        </div>



        {/* Bottom Content Area */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mt-auto pointer-events-auto">
          
          {/* Bottom Left: Project Info */}
          <div className="max-w-xl w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-white/60 uppercase">
                    {currentProject.category} <span className="mx-2">—</span> {currentProject.year}
                  </p>
                </div>
                
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium mb-4 text-white">
                  {currentProject.title}
                </h2>
                
                <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md">
                  {currentProject.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Right: Button and Pagination */}
          <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
            <AnimatePresence mode="wait">
              <motion.button
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(currentProject.link, '_blank')}
                className="rounded-full px-8 py-3.5 flex items-center gap-3 font-semibold text-black transition-all shadow-lg"
                style={{ backgroundColor: currentProject.color }}
              >
                Ver proyecto <ArrowRight size={18} />
              </motion.button>
            </AnimatePresence>

            <div className="flex items-center gap-6 mt-4 md:mt-0">
              {/* Dashes Pagination */}
              <div className="flex items-center gap-2">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`h-[3px] rounded-full transition-all duration-500 ${
                      idx === currentIndex 
                        ? "w-8 bg-white" 
                        : "w-4 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
              
              {/* Number indicator */}
              <span className="text-xs md:text-sm font-mono tracking-widest text-white/50">
                0{currentIndex + 1} / 0{projects.length}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Arrows (Center Left & Right) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 md:px-8 z-30">
        <button
          className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all hover:scale-110"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>
        <button
          className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all hover:scale-110"
          onClick={() => paginate(1)}
        >
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>
      </div>

      </section>
    </>
  );
};

export default ProjectCarousel;

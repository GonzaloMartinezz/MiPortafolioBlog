"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    client: "FORZA",
    clientSuffix: "CO",
    title: "Forza Co.",
    category: "BRANDING MODA",
    year: "2024",
    description: "Marca urbana necesitaba un sistema visual audaz para diferenciarse.",
    image: "https://images.unsplash.com/photo-1550614000-4b95d4edfa22?q=80&w=2070&auto=format&fit=crop",
    color: "#5dfd5c", // Neon green from the image
  },
  {
    id: 2,
    client: "AURA",
    clientSuffix: "APP",
    title: "Aura Wellness",
    category: "APP DESIGN",
    year: "2023",
    description: "Plataforma digital interactiva centrada en el bienestar y la meditación guiada.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop",
    color: "#FCD100", // Yellow from app
  },
  {
    id: 3,
    client: "NEXUS",
    clientSuffix: "DEV",
    title: "Nexus Tech",
    category: "WEB DEVELOPMENT",
    year: "2024",
    description: "Rediseño completo de la arquitectura web corporativa para mayor escalabilidad.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    color: "#3b82f6", // Blue
  },
  {
    id: 4,
    client: "LUMINA",
    clientSuffix: "PKG",
    title: "Lumina Care",
    category: "PACKAGING",
    year: "2023",
    description: "Identidad visual minimalista y diseño de empaque para línea de cuidado personal.",
    image: "https://images.unsplash.com/photo-1615397323381-e2e4e16bb49d?q=80&w=2070&auto=format&fit=crop",
    color: "#ec4899", // Pink
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
    <section className="relative w-full h-[80vh] md:h-screen bg-black overflow-hidden font-sans">
      
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
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" /> {/* Bottom gradient for text readability */}
          
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

        {/* Center Giant Watermark Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center opacity-[0.15] mix-blend-overlay">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex items-start"
            >
              <h1 className="text-[15vw] md:text-[18vw] font-black leading-none tracking-tighter text-white">
                {currentProject.client}
              </h1>
              {currentProject.clientSuffix && (
                <div className="mt-[2vw] ml-[1vw] border-[0.3vw] border-white rounded-full w-[4vw] h-[4vw] md:w-[3vw] md:h-[3vw] flex items-center justify-center">
                  <span className="text-[1.5vw] md:text-[1vw] font-bold text-white">
                    {currentProject.clientSuffix}
                  </span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
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
  );
};

export default ProjectCarousel;

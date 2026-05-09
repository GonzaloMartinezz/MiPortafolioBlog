"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaPlay, FaCode } from "react-icons/fa";

const spotlightProjects = [
  {
    id: 1,
    title: "CENTRO ODONTOLÓGICO C&M",
    description: "Sistema integral de gestión para consultorio dental. Citas online, historias clínicas digitales, seguimiento de pacientes y agenda integrada.",
    image: "https://images.unsplash.com/photo-1579154204601-01d430248e4d?w=1400&h=800&fit=crop",
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 2,
    title: "TARJETA TITANIO",
    description: "Plataforma de gestión de tarjetas de crédito premium con control de transacciones en tiempo real.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1bf4b4f?w=1400&h=800&fit=crop",
    demoLink: "#",
    codeLink: "#",
  }
];

export function ProjectSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % spotlightProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + spotlightProjects.length) % spotlightProjects.length);
  };

  const current = spotlightProjects[currentIndex];

  return (
    <section className="py-20 flex flex-col items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl px-4"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
            {current.title}
          </h2>
          <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {current.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25">
              <FaPlay size={12} /> VER DEMO
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <FaCode size={14} /> VER CÓDIGO
            </button>
          </div>

          {/* DEVICE MOCKUP */}
          <div className="relative mx-auto max-w-5xl group">
            <div className="relative aspect-[16/10] bg-slate-900 rounded-[2rem] p-2 md:p-4 shadow-2xl border-8 border-slate-900">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-white">
                    <Image
                        src={current.image}
                        alt={current.title}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            
            {/* Project Indicators */}
            <div className="mt-8 flex items-center justify-center gap-8">
              <button 
                onClick={prevProject}
                className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all"
              >
                <FaChevronLeft />
              </button>
              
              <div className="flex gap-2">
                {spotlightProjects.map((_, idx) => (
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
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

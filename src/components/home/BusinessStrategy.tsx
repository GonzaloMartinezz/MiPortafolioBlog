"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Lightbulb, PenTool, Handshake, ChevronRight } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    id: "paso-01",
    title: "Paso 01: Descubrimiento",
    icon: Lightbulb,
    description:
      "Analizamos a fondo tu modelo de negocio, definimos las metas operativas e investigamos detalladamente la experiencia ideal para tus usuarios.",
  },
  {
    id: "paso-02",
    title: "Paso 02: UX/UI & Prototipado",
    icon: PenTool,
    description:
      "Creamos interfaces modernas de alta fidelidad. Diseñamos prototipos totalmente interactivos y navegables antes de comenzar a escribir código.",
  },
  {
    id: "paso-03",
    title: "Paso 03: Desarrollo Ágil",
    icon: Check,
    description:
      "Programamos tu app con código escalable, limpio y testeado. Realizamos entregas continuas semanales en un servidor de pruebas dedicado.",
  },
  {
    id: "paso-04",
    title: "Paso 04: Lanzamiento",
    icon: Handshake,
    description:
      "Publicamos tu app en las tiendas de Apple y Google o en servidores Cloud optimizados, y te brindamos soporte de infraestructura post-lanzamiento.",
  },
];

const servicesList = [
  "Apps Nativas e Híbridas",
  "Sistemas a medida y paneles",
  "Tiendas virtuales ultra rápidas",
  "Integración de ecosistemas & APIs",
  "Infraestructura Cloud segura",
];

const BusinessStrategy = () => {
  const [activeStep, setActiveStep] = useState<string | null>("paso-01");

  return (
    <section className="section-padding relative overflow-hidden font-sans">
      {/* Background Decorative Blobs */}
      <div className="absolute top-10 right-[-10%] w-96 h-96 bg-[#F66C44]/20 rounded-full blur-[100px] animate-blob mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#F66C44]/10 rounded-full blur-[120px] animate-blob delay-700 mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Image & Floating Card */}
          <div className="relative animate-fade-in-up">
            {/* Image Frame */}
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-square rounded-3xl overflow-hidden bg-[#111111] border border-white/5 p-2 group shadow-2xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80" 
                  alt="UX UI Design Strategy"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
                {/* Brand Color Tint */}
                <div className="absolute inset-0 bg-[#F66C44]/10 mix-blend-overlay pointer-events-none transition-opacity duration-700 group-hover:opacity-0"></div>
              </div>
            </div>

            {/* Floating 'Services' Card */}
            <div className="absolute -bottom-10 md:bottom-10 left-[5%] md:left-auto right-auto md:-right-10 w-[90%] md:w-[340px] bg-[#0B0B0B] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-3xl p-6 md:p-8 hover:-translate-y-2 transition-transform duration-500 z-20">
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                Nuestros <span className="text-[#F66C44]">Servicios</span>
              </h3>
              <ul className="space-y-4">
                {servicesList.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[#F66C44]/10 border border-[#F66C44]/30 flex items-center justify-center text-[#F66C44] group-hover:bg-[#F66C44] group-hover:text-black transition-colors duration-300">
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <p className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300 leading-tight">
                      {service}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Content & Accordion */}
          <div className="flex flex-col h-full pt-12 md:pt-4 animate-fade-in-up delay-200">
            
            {/* Header Content */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase leading-[1.1] mb-6 text-white">
                NUESTRO <br className="hidden md:block" />
                <span className="text-[#F66C44]">PROCESO</span>
              </h2>
              
              <h3 className="text-sm md:text-base font-bold uppercase tracking-widest mb-4 text-[#F66C44] flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#F66C44]"></span>
                CÓMO TRABAJAMOS
              </h3>
              <p className="text-base text-gray-400 leading-relaxed font-medium">
                Desarrollamos aplicaciones nativas e híbridas con experiencias fluidas, diseñadas para llevar tu marca directamente al bolsillo de tus clientes. Transforma datos complejos en interfaces visuales intuitivas para gestionar todo tu negocio en tiempo real.
              </p>
            </div>

            {/* Services Accordion */}
            <div className="glass-card p-6 md:p-10 relative overflow-hidden hover-glow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F66C44]/10 rounded-full blur-[50px]"></div>
              
              <h3 className="text-xl font-bold uppercase tracking-widest mb-8 text-white">METODOLOGÍA</h3>
              
              <div className="relative border-l border-white/10 ml-3 space-y-6">
                {steps.map((step) => {
                  const isActive = activeStep === step.id;
                  const Icon = step.icon;

                  return (
                    <div 
                      key={step.id}
                      className="relative pl-10 cursor-pointer group"
                      onMouseEnter={() => setActiveStep(step.id)}
                      onClick={() => setActiveStep(step.id)}
                    >
                      {/* Timeline Dot */}
                      <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-400 ${
                        isActive 
                          ? 'bg-[#F66C44] text-black shadow-[0_0_20px_rgba(246,108,68,0.4)] scale-110' 
                          : 'bg-[#111] border border-white/20 text-gray-500 group-hover:border-[#F66C44]/50 group-hover:text-[#F66C44]'
                      }`}>
                        <Icon size={14} strokeWidth={isActive ? 3 : 2} />
                      </div>

                      <div className="pt-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`text-sm md:text-lg font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                            {step.title}
                          </h4>
                          <ChevronRight 
                            size={18} 
                            className={`transition-all duration-300 ${isActive ? 'text-[#F66C44] rotate-90' : 'text-transparent group-hover:text-white/20'}`} 
                          />
                        </div>
                        
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: "circOut" }}
                              className="overflow-hidden"
                            >
                              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                                {step.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStrategy;

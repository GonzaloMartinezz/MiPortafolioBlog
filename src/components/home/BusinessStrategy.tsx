"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Lightbulb, PenTool, Handshake, ChevronRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: "concept",
    title: "CONCEPT",
    icon: Lightbulb,
    description:
      "We build a robust foundation, transforming your ideas into a concrete, executable business concept that aligns with market demands and your ultimate vision.",
  },
  {
    id: "presentation",
    title: "PRESENTATION",
    icon: PenTool,
    description:
      "Our team crafts a compelling narrative and visual identity, ensuring your business strategy is communicated with clarity, impact, and premium aesthetics.",
  },
  {
    id: "agreement",
    title: "AGREEMENT",
    icon: Handshake,
    description:
      "We solidify the strategy with actionable roadmaps, defined KPIs, and mutual commitment, setting the stage for flawless execution and sustainable growth.",
  },
];

const reasons = [
  "Industry-leading expertise",
  "Data-driven strategic decisions",
  "Agile & adaptive methodology",
  "Commitment to premium quality",
];

const BusinessStrategy = () => {
  const [activeService, setActiveService] = useState<string | null>("concept");

  return (
    <section className="section-padding relative overflow-hidden font-sans">
      {/* Background Decorative Blobs */}
      <div className="absolute top-10 right-[-10%] w-96 h-96 bg-yellowx/10 rounded-full blur-[100px] animate-blob mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-yellowx/5 rounded-full blur-[120px] animate-blob delay-700 mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Image & Floating Card */}
          <div className="relative animate-fade-in-up">
            {/* Image Frame */}
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-square rounded-3xl overflow-hidden glass-card p-2 group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="Business Strategy Planning"
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Floating 'Why Choose Us' Glass Card */}
            <div className="absolute -bottom-10 md:bottom-10 right-0 md:-right-10 w-[90%] md:w-80 glass-card p-6 md:p-8 hover-lift z-20">
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                Why <span className="gradient-text">Choose Us</span>
              </h3>
              <ul className="space-y-4">
                {reasons.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-yellowx/10 border border-yellowx/30 flex items-center justify-center text-yellowx group-hover:bg-yellowx group-hover:text-black transition-colors duration-300">
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <p className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                      {reason}
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase leading-[1.1] mb-6 gradient-text">
                Business <br className="hidden md:block" />
                Strategy <br className="hidden md:block" />
                Plan
              </h2>
              
              <h3 className="text-sm md:text-base font-bold uppercase tracking-widest mb-4 text-yellowx flex items-center gap-3">
                <span className="w-8 h-[2px] bg-yellowx"></span>
                About Us
              </h3>
              <p className="text-base text-gray-400 leading-relaxed font-medium">
                We design and execute cutting-edge business strategies tailored for the digital era. By merging analytics, design thinking, and scalable architecture, we help you position your product exactly where it needs to be. Stop guessing and start leading.
              </p>
            </div>

            {/* Services Accordion */}
            <div className="glass-card p-6 md:p-10 relative overflow-hidden hover-glow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellowx/5 rounded-full blur-[50px]"></div>
              
              <h3 className="text-xl font-bold uppercase tracking-widest mb-8 text-white">Our Services</h3>
              
              <div className="relative border-l border-white/10 ml-3 space-y-6">
                {services.map((service) => {
                  const isActive = activeService === service.id;
                  const Icon = service.icon;

                  return (
                    <div 
                      key={service.id}
                      className="relative pl-10 cursor-pointer group"
                      onMouseEnter={() => setActiveService(service.id)}
                      onClick={() => setActiveService(service.id)}
                    >
                      {/* Timeline Dot */}
                      <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-400 ${
                        isActive 
                          ? 'bg-yellowx text-black shadow-[0_0_20px_rgba(252,209,0,0.4)] scale-110' 
                          : 'bg-[#111] border border-white/20 text-gray-500 group-hover:border-yellowx/50 group-hover:text-yellowx'
                      }`}>
                        <Icon size={14} strokeWidth={isActive ? 3 : 2} />
                      </div>

                      <div className="pt-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`text-lg font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                            {service.title}
                          </h4>
                          <ChevronRight 
                            size={18} 
                            className={`transition-all duration-300 ${isActive ? 'text-yellowx rotate-90' : 'text-transparent group-hover:text-white/20'}`} 
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
                              <p className="text-sm leading-relaxed mt-4 text-gray-400 font-medium pb-2">
                                {service.description}
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

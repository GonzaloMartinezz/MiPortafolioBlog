"use client";

import React, { useState } from "react";
import { Type, Palette, Aperture, LayoutGrid, CheckCircle, Circle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Brand", "Product", "Editorial", "Motion"];

const brandCapabilities = [
  {
    id: "type",
    title: "Type systems",
    icon: Type,
    checked: true,
    feature: "Wordmarks, scale, specimens",
    description: "Hand-tuned hierarchies with a Display anchor and a quiet Sans-serif body — set to read flawlessly on a 6K monitor and a screenshot at 320px.",
  },
  {
    id: "color",
    title: "Color & palette",
    icon: Palette,
    checked: true,
    feature: "Paper, ink, three pops",
    description: "One neutral base, one deep ink, three deliberate accents. We delete more colors than we add and document every chip with a specific job to do.",
  },
  {
    id: "photo",
    title: "Photography",
    icon: Aperture,
    checked: false,
    feature: "Halftone, duotone, art direction",
    description: "Treated photography — halftone, duotone, ink-and-accent washes — that earns its place beside the type and never competes with it.",
  },
  {
    id: "bento",
    title: "Bento systems",
    icon: LayoutGrid,
    checked: true,
    feature: "Tiles, grids, composed spreads",
    description: "Modular tile grammar with hairline borders and mono corner codes — every screen reads as a composed printed spread, not a chaotic feed.",
  },
];

const CapabilitiesSection = () => {
  const [activeTab, setActiveTab] = useState("Brand");

  return (
    <section className="section-padding relative z-10 font-sans mt-12 md:mt-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        
        {/* Main Wrapper Box matching the image's overall container feel, but styled for the app's premium dark theme */}
        <div className="glass-card p-6 md:p-10 lg:p-12 relative overflow-hidden bg-black/40 border border-white/10 rounded-[2rem]">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-yellowx/5 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Header row: Title & Tabs */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-tight text-white">
              Capabilities, <span className="text-gray-400">on the table.</span>
            </h2>
            
            {/* Segmented Control / Tabs */}
            <div className="flex items-center p-1.5 glass-card rounded-full bg-black/50 border border-white/5 overflow-x-auto hide-scrollbar shrink-0">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab 
                      ? "bg-white text-black shadow-lg" 
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {brandCapabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.id} 
                    className="glass-card p-6 md:p-8 rounded-[1.5rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 hover-lift hover:border-yellowx/30 group flex flex-col h-full"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Icon */}
                    <div className="mb-6 text-gray-400 group-hover:text-yellowx transition-colors duration-300">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-6 tracking-wide">
                      {item.title}
                    </h3>

                    {/* Status Feature */}
                    <div className="flex items-center gap-3 mb-6">
                      {item.checked ? (
                        <CheckCircle size={18} className="text-yellowx shrink-0" fill="currentColor" stroke="black" />
                      ) : (
                        <Circle size={18} className="text-gray-600 shrink-0" />
                      )}
                      <span className={`text-xs md:text-sm font-medium ${item.checked ? "text-gray-200" : "text-gray-500"}`}>
                        {item.feature}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed font-medium mt-auto">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
          
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;

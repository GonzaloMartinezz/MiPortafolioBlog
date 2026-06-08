"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "BNP Paribas Open",
    category: "Website & Mobile App",
    image: "/CB.png", // Usando un placeholder local del usuario
  },
  {
    title: "Sport Industry Group",
    category: "Website",
    image: "/TT.png",
  },
  {
    title: "Ligue Nationale de Basket",
    category: "Mobile App",
    image: "/GoStats.png",
  },
  {
    title: "ClickHouse",
    category: "Website",
    image: "/ClickHouse.png",
  },
];

export default function YPPortfolioGallery() {
  return (
    <div className="bg-[#0B0B0B] w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative rounded-[2rem] overflow-hidden bg-[#111] cursor-pointer block h-[400px] md:h-[600px] lg:h-[700px] ${
                idx % 2 === 1 ? 'md:mt-24' : '' // Staggered masonry effect
              }`}
            >
              <div className="absolute inset-0 w-full h-full">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay oscuro para hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col justify-end">
                <span className="text-yellowx font-bold uppercase tracking-widest text-sm mb-2">{project.category}</span>
                <h3 className="text-white text-3xl md:text-5xl font-plakatgrotesk font-black uppercase leading-tight">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

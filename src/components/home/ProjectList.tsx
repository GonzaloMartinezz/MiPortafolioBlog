"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

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
    tags: ["DISEÑO WEB", "DESARROLLO", "SAAS"],
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
    tags: ["FINTECH", "UI/UX", "DESARROLLO"],
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
    tags: ["E-COMMERCE", "BRANDING", "DESARROLLO"],
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
    tags: ["INSTITUCIONAL", "WEB APP", "DESARROLLO"],
    link: "https://app-club-belgranocyd.vercel.app/"
  },
];

export default function ProjectList() {
  return (
    <section className="w-full bg-transparent text-white py-24 md:py-32 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-32 md:gap-48">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-5/12 flex flex-col items-start gap-6">
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#71717a] uppercase flex items-center gap-4">
                  <span>0{project.id}</span>
                  <div className="w-8 h-[1px] bg-[#27272a]"></div>
                  <span>{project.client}.{project.clientSuffix}</span>
                </div>

                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none">
                  {project.title}
                </h2>

                <p className="text-[#a1a1aa] text-base md:text-lg leading-relaxed max-w-md">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-bold tracking-[0.15em] text-[#a1a1aa] uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-2 text-[#fbbf24] hover:text-white font-bold text-xs tracking-[0.2em] uppercase transition-colors group"
                >
                  VISITAR SITIO 
                  <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                </a>
              </div>

              {/* Image Content */}
              <div className="w-full lg:w-7/12 relative group">
                {/* Yellow asterisk decorative element (only on some or all) */}
                <div className={`absolute top-1/2 ${isEven ? '-left-12' : '-right-12'} -translate-y-1/2 hidden lg:flex items-center justify-center text-[#fbbf24] text-3xl font-black opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-180`}>
                  *
                </div>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="block relative rounded-[2rem] overflow-hidden bg-[#18181b] p-2 md:p-3 border border-white/10 hover:border-[#fbbf24]/40 shadow-2xl aspect-video transition-colors duration-500"
                >
                  <div className="relative w-full h-full rounded-2xl md:rounded-[1.5rem] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-700" />
                  </div>
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

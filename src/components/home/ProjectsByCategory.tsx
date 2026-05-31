"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectCategories, Project, ProjectCategory } from "@/data/projects";
import { PhoneMockup, LaptopMockup } from "@/components/ui/DeviceMockup";

function ProjectCard({ project, index, colorTheme }: { project: Project; index: number; colorTheme: string }) {
  // Use alternate layouts depending on the index (Phone or Laptop)
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative flex flex-col h-full rounded-3xl overflow-hidden border transition-all duration-500 hover:shadow-2xl border-slate-200/60 hover:border-slate-300 dark:border-white/10`}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient}`} />
      <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/70" />

      <div className="relative z-10 flex flex-col h-full p-6 sm:p-8">
        {/* Top: category + year */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-300">
            {project.category}
          </span>
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
            {project.year}
          </span>
        </div>

        {/* Device Mockup */}
        <div className="flex justify-center items-center flex-1 py-4 min-h-[260px] sm:min-h-[300px]">
          {isEven ? (
            <PhoneMockup className="w-[50%] sm:w-[40%] max-w-[180px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </PhoneMockup>
          ) : (
            <LaptopMockup className="w-full max-w-[400px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </LaptopMockup>
          )}
        </div>

        {/* Bottom Info */}
        <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-slate-200/40 dark:border-slate-800/40">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-black leading-tight tracking-tight text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-500 dark:group-hover:from-white dark:group-hover:to-slate-300 transition-colors duration-300">
              {project.title}
            </h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver ${project.title}`}
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-black/5 dark:bg-white/10 hover:bg-slate-900 dark:hover:bg-white text-slate-600 dark:text-slate-400 hover:text-white dark:hover:text-slate-900"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-black/5 dark:border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CategorySection({ category, index }: { category: ProjectCategory; index: number }) {
  // Determine gradient text color based on theme string
  const textGradient =
    category.colorTheme === "blue"
      ? "from-blue-600 to-cyan-500"
      : category.colorTheme === "rose"
      ? "from-rose-500 to-pink-500"
      : category.colorTheme === "emerald"
      ? "from-emerald-500 to-teal-400"
      : "from-violet-500 to-purple-500";

  const badgeBg =
    category.colorTheme === "blue"
      ? "bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-800/40 text-blue-600 dark:text-blue-400"
      : category.colorTheme === "rose"
      ? "bg-rose-50 dark:bg-rose-950/40 border-rose-100 dark:border-rose-800/40 text-rose-600 dark:text-rose-400"
      : category.colorTheme === "emerald"
      ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-800/40 text-emerald-600 dark:text-emerald-400"
      : "bg-violet-50 dark:bg-violet-950/40 border-violet-100 dark:border-violet-800/40 text-violet-600 dark:text-violet-400";

  return (
    <div className="mb-24 last:mb-0 relative">
      {/* Background Decorator */}
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${category.gradientTheme} rounded-full blur-[120px] opacity-[0.03] dark:opacity-[0.08] pointer-events-none -z-10 transform translate-x-1/2 -translate-y-1/2`} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10 md:mb-12"
      >
        <span className={`inline-block px-4 py-1 mb-4 text-[12px] font-bold tracking-[0.2em] uppercase rounded-full border ${badgeBg}`}>
          {category.title}
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Proyectos de{" "}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${textGradient}`}>
              {category.title.split(" & ")[0]}
            </span>
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
            {category.description}
          </p>
        </div>
      </motion.div>

      {/* Grid for projects (2 cols on md+, 1 on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {category.projects.map((project, idx) => (
          <div key={project.id} className={idx === 2 ? "md:col-span-2 lg:col-span-1" : ""}>
            <ProjectCard project={project} index={idx} colorTheme={category.colorTheme} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsByCategory() {
  return (
    <section className="w-full relative py-20 md:py-28 overflow-hidden bg-white dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-slate-700 dark:text-slate-300 uppercase">
              Áreas de Expertise
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6"
          >
            Explora por{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">
              Categoría
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed"
          >
            Descubre soluciones diseñadas específicamente para las necesidades de cada industria, combinando tecnología de vanguardia y diseño centrado en el usuario.
          </motion.p>
        </div>

        {/* Render each category block */}
        <div className="flex flex-col space-y-12">
          {projectCategories.map((category, index) => (
            <CategorySection key={category.id} category={category} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

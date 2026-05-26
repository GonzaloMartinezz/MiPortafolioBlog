"use client"

import React, { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { LaptopMockup } from "@/components/ui/DeviceMockup"

const projects = [
  {
    id: 1,
    category: "Healthcare · SaaS Dental",
    title: "Centro Odontológico C&M",
    description:
      "Plataforma integral SaaS para gestión odontológica. Incorpora agenda inteligente interactiva en tiempo real, digitalización segura de historias clínicas y panel de control administrativo y financiero.",
    year: "2026",
    link: "https://app-consultorio-odontologico.vercel.app/",
    image: "/coc&m.png",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    bg: "from-emerald-50 to-teal-100 dark:from-emerald-950/20 dark:to-teal-950/40",
    glow: "rgba(16,185,129,0.12)",
  },
  {
    id: 2,
    category: "Fintech · Premium Banking",
    title: "Tarjeta Titanio",
    description:
      "Portal financiero avanzado para control de tarjetas de crédito corporativas. Incluye pasarela segura de pago, visualización de movimientos en tiempo real y portal exclusivo de beneficios.",
    year: "2025",
    link: "https://tarjetatitanio.vercel.app/",
    image: "/TT.png",
    tags: ["Next.js", "TypeScript", "Stripe API", "Framer Motion"],
    bg: "from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/40",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    id: 3,
    category: "E-commerce · Fashion",
    title: "Malibu Styless",
    description:
      "Tienda online de indumentaria deportiva con catálogo interactivo responsivo, carrito optimizado para celulares y pasarela de pago integrada lista para facturación.",
    year: "2024",
    link: "https://app-malibu-style.vercel.app/",
    image: "/MS.png",
    tags: ["React.js", "Firebase DB", "Tailwind CSS", "Mobile UX"],
    bg: "from-rose-50 to-orange-100 dark:from-rose-950/20 dark:to-orange-950/40",
    glow: "rgba(244,63,94,0.15)",
  },
  {
    id: 4,
    category: "Real Estate · PropTech",
    title: "ClickHouse",
    description:
      "Plataforma de bienes raíces moderna con filtros de geolocalización, búsqueda avanzada de propiedades e interfaces inmersivas de carga optimizada.",
    year: "2026",
    link: "https://app-clickhouse.vercel.app/",
    image: "/ClickHouse.png",
    tags: ["Next.js", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
    bg: "from-violet-50 to-purple-100 dark:from-violet-950/20 dark:to-purple-950/40",
    glow: "rgba(139,92,246,0.12)",
  },
]

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const go = useCallback((delta: number) => {
    setDirection(delta)
    setCurrent((prev) => (prev + delta + projects.length) % projects.length)
  }, [])

  const project = projects[current]
  const isDarkProject = false // Keep the cards readable and uniform in the dark/light modes

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-slate-50/20 dark:bg-slate-950/10 border-t border-slate-200/50 dark:border-slate-800/40">
      
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="inline-block px-4 py-1 text-[11px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 rounded-full border border-blue-100 dark:border-blue-800/40">
            PORTAFOLIO
          </span>
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
        </motion.div>
        
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Proyectos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Destacados
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
            Cada desarrollo resuelve un problema de negocio real aplicando tecnología de punta y metodologías limpias.
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">

        {/* ── Main display card ── */}
        <div className="relative">
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={project.id}
              custom={direction}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className={`relative rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-800 bg-gradient-to-br ${project.bg} p-6 sm:p-8 md:p-10`}
              style={{
                boxShadow: `0 30px 60px ${project.glow}, 0 0 0 1px rgba(255,255,255,0.03)`,
              }}
            >
              {/* Category tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-slate-900/10 dark:bg-white/10 text-slate-700 dark:text-slate-350">
                  {project.category}
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  Año {project.year}
                </span>
              </div>

              {/* Laptop mockup - Centered and Large */}
              <div className="relative max-w-2xl mx-auto mb-6 select-none">
                <LaptopMockup className="w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                </LaptopMockup>
              </div>

              {/* Info Detail Block */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pt-6 border-t border-slate-200/40 dark:border-slate-800/40">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed max-w-xl text-slate-555 dark:text-slate-400">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[9px] font-bold tracking-wider uppercase bg-slate-900/5 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-250 dark:border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl text-xs font-bold bg-slate-950 text-white hover:bg-slate-850 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  Ver Proyecto
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* ── Navigation Controls placed DIRECTLY BELOW the main card ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900/40 rounded-2xl border border-slate-200/50 dark:border-slate-850/50 shadow-sm max-w-md mx-auto w-full">
          
          {/* Numerical Counter */}
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Proyecto <strong className="text-slate-900 dark:text-white">{String(current + 1).padStart(2, "0")}</strong> / {String(projects.length).padStart(2, "0")}
          </span>

          {/* Interactive Dots */}
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1)
                  setCurrent(i)
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 h-2 bg-blue-600 dark:bg-white"
                    : "w-2 h-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                }`}
                aria-label={`Ir al proyecto ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-950 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-all duration-200 shadow-xs cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => go(1)}
              className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-950 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-all duration-200 shadow-xs cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}

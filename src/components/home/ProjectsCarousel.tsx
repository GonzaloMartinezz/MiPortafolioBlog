"use client"

import React, { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { LaptopMockup } from "@/components/ui/DeviceMockup"

const projects = [
  {
    id: 1,
    category: "Healthcare · SaaS",
    title: "Centro Odontológico C&M",
    description:
      "Plataforma integral para gestión odontológica: agenda inteligente de turnos, historias clínicas digitales, seguimiento de tratamientos y panel administrativo completo.",
    year: "2026",
    link: "https://app-consultorio-odontologico.vercel.app/",
    image: "/coc&m.png",
    tags: ["React", "Node.js", "MongoDB"],
    bg: "from-emerald-50 to-teal-100 dark:from-emerald-950/40 dark:to-teal-950/60",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    id: 2,
    category: "Fintech · Premium",
    title: "Tarjeta Titanio",
    description:
      "Sistema financiero premium para gestión de tarjetas de crédito: monitoreo de transacciones en tiempo real, control de límites dinámicos y portal exclusivo de beneficios.",
    year: "2025",
    link: "https://tarjetatitanio.vercel.app/",
    image: "/TT.png",
    tags: ["Next.js", "TypeScript", "Stripe"],
    bg: "from-blue-950 to-slate-900 dark:from-blue-950 dark:to-slate-900",
    glow: "rgba(59,130,246,0.2)",
  },
  {
    id: 3,
    category: "E-commerce · Fashion",
    title: "Malibu Styless",
    description:
      "E-commerce de indumentaria deportiva con catálogo interactivo, carrito de compras optimizado, integración con pasarela de pagos y gestión de inventario.",
    year: "2024",
    link: "https://app-malibu-style.vercel.app/",
    image: "/MS.png",
    tags: ["React", "Firebase", "Tailwind"],
    bg: "from-rose-950 to-orange-950 dark:from-rose-950 dark:to-orange-950",
    glow: "rgba(244,63,94,0.2)",
  },
  {
    id: 4,
    category: "Real Estate · PropTech",
    title: "ClickHouse",
    description:
      "Plataforma inmobiliaria con búsqueda avanzada de propiedades, filtros inteligentes, galería interactiva y sistema de contacto directo con propietarios.",
    year: "2026",
    link: "https://app-clickhouse.vercel.app/",
    image: "/ClickHouse.png",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    bg: "from-violet-50 to-purple-100 dark:from-violet-950/40 dark:to-purple-950/60",
    glow: "rgba(139,92,246,0.15)",
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
  const next = projects[(current + 1) % projects.length]

  const isDark = project.id === 2 || project.id === 3

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12 md:mb-16"
      >
        <span className="inline-block px-4 py-1 mb-4 text-[12px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 rounded-full border border-blue-100 dark:border-blue-800/40">
          PORTAFOLIO
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Proyectos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Destacados
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base max-w-sm leading-relaxed">
            Cada proyecto resuelve un problema real con tecnología de punta.
          </p>
        </div>
      </motion.div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">

          {/* ── Main card ── */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={project.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
              className={`relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br ${project.bg} p-6 sm:p-8 md:p-10`}
              style={{
                boxShadow: `0 40px 80px ${project.glow}, 0 0 0 1px rgba(255,255,255,0.06)`,
              }}
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                    isDark
                      ? "bg-white/10 text-white/60"
                      : "bg-black/5 text-slate-500"
                  }`}
                >
                  {project.category}
                </span>
                <span
                  className={`text-[11px] font-mono ${
                    isDark ? "text-white/30" : "text-slate-400"
                  }`}
                >
                  {project.year}
                </span>
              </div>

              {/* Laptop mockup */}
              <LaptopMockup className="w-full max-w-2xl mx-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain object-top"
                />
              </LaptopMockup>

              {/* Info */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <h3
                    className={`text-2xl sm:text-3xl font-black tracking-tight mb-2 ${
                      isDark ? "text-white" : "text-slate-900 dark:text-white"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed max-w-lg ${
                      isDark
                        ? "text-white/50"
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-widest uppercase ${
                          isDark
                            ? "bg-white/10 text-white/50 border border-white/10"
                            : "bg-black/5 text-slate-600 border border-black/5"
                        }`}
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
                  className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "bg-white text-slate-900 hover:bg-blue-500 hover:text-white"
                      : "bg-slate-900 text-white hover:bg-blue-600 dark:bg-white dark:text-slate-900"
                  }`}
                >
                  Ver Proyecto
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Right column: next card preview + controls ── */}
          <div className="hidden lg:flex flex-col gap-5">

            {/* Next preview */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`next-${next.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                onClick={() => go(1)}
                className={`relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${next.bg} p-4 group`}
              >
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-white/40">
                    Siguiente
                  </span>
                </div>
                <LaptopMockup className="w-full mt-5 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={next.image}
                    alt={next.title}
                    className="w-full h-full object-contain object-top"
                  />
                </LaptopMockup>
                <div className="mt-3 px-1">
                  <p className="text-[9px] font-bold tracking-widest uppercase text-white/30 mb-0.5">
                    {next.category}
                  </p>
                  <h4 className="text-sm font-black text-white leading-tight">
                    {next.title}
                  </h4>
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-white/60" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex flex-col gap-3">
              {/* Counter */}
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => go(-1)}
                    className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-200"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => go(1)}
                    className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-200"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1)
                      setCurrent(i)
                    }}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 h-2 bg-slate-900 dark:bg-white"
                        : "w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
                    }`}
                    aria-label={`Ir al proyecto ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center justify-between mt-2">
            <span className="text-xs font-mono text-slate-400">
              {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => go(1)}
                className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

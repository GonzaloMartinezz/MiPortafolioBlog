"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { PhoneMockup, LaptopMockup } from "@/components/ui/DeviceMockup"

interface Project {
  id: number
  title: string
  category: string
  description: string
  year: string
  link: string
  image: string
  tags: string[]
  dark?: boolean
  gradient?: string
  deviceType: "phone" | "laptop"
}

const projects: Project[] = [
  {
    id: 1,
    title: "Centro Odontológico C&M",
    category: "Healthcare · SaaS",
    description:
      "Plataforma integral para gestión odontológica: agenda inteligente de turnos, historias clínicas digitales y panel administrativo completo.",
    year: "2026",
    link: "https://app-consultorio-odontologico.vercel.app/",
    image: "/loginncoc&m.png",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "from-emerald-950 via-slate-900 to-teal-900",
    dark: true,
    deviceType: "phone"
  },
  {
    id: 2,
    title: "Tarjeta Titanio",
    category: "Fintech · Premium",
    description:
      "Sistema financiero premium para gestión de tarjetas de crédito con monitoreo de transacciones en tiempo real y beneficios exclusivos.",
    year: "2025",
    link: "https://tarjetatitanio.vercel.app/",
    image: "/appcompu.png",
    tags: ["Next.js", "TypeScript", "Stripe"],
    dark: true,
    gradient: "from-blue-900 via-slate-900 to-indigo-900",
    deviceType: "laptop"
  },
  {
    id: 3,
    title: "Malibu Styless",
    category: "E-commerce · Fashion",
    description:
      "E-commerce de indumentaria deportiva con catálogo interactivo, carrito optimizado y pasarela de pagos integrada.",
    year: "2024",
    link: "https://app-malibu-style.vercel.app/",
    image: "/MS.png",
    tags: ["React", "Firebase", "Tailwind"],
    dark: true,
    gradient: "from-rose-900 via-slate-900 to-orange-900",
    deviceType: "phone"
  },
  {
    id: 4,
    title: "ClickHouse",
    category: "Real Estate · PropTech",
    description:
      "Plataforma inmobiliaria con búsqueda avanzada de propiedades, filtros inteligentes y galería interactiva de inmuebles.",
    year: "2026",
    link: "https://app-clickhouse.vercel.app/",
    image: "/ClickHouse.png",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    dark: true,
    gradient: "from-violet-900 via-slate-900 to-pink-900",
    deviceType: "laptop"
  },
  {
    id: 5,
    title: "Apex Analytics",
    category: "Data Analytics · SaaS",
    description:
      "Tablero de control y analítica de datos comerciales en tiempo real con integración de gráficos interactivos de alto rendimiento.",
    year: "2026",
    link: "https://app-gostats.vercel.app/",
    image: "/appcompugostats.png",
    tags: ["React", "Recharts", "Tailwind"],
    dark: true,
    gradient: "from-cyan-900 via-slate-900 to-teal-900",
    deviceType: "laptop"
  },
  {
    id: 6,
    title: "Club Bochas",
    category: "Productivity · App",
    description:
      "Aplicación institucional y de administración para clubes deportivos. Control de socios, noticias y pasarela de pago integrada.",
    year: "2026",
    link: "#",
    image: "/CB.png",
    tags: ["React Native", "Firebase", "Tailwind"],
    dark: true,
    gradient: "from-amber-900 via-slate-900 to-yellow-900",
    deviceType: "phone"
  }
]

function ProjectCard({ project, large }: { project: Project; large?: boolean }) {
  const isDark = project.dark

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      className={`group relative flex flex-col h-full rounded-3xl overflow-hidden border transition-all duration-500 hover:shadow-2xl ${
        isDark
          ? "border-white/10 hover:border-white/20"
          : "border-slate-200/60 hover:border-slate-300 dark:border-white/10"
      }`}
    >
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
      {!isDark && (
        <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/70" />
      )}

      <div className="relative z-10 flex flex-col h-full p-5 sm:p-6">
        {/* Top: category + year + link */}
        <div className="flex items-center justify-between mb-5">
          <span
            className={`text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
              isDark
                ? "bg-white/10 text-white/60"
                : "bg-black/5 dark:bg-white/10 text-slate-500 dark:text-slate-400"
            }`}
          >
            {project.category}
          </span>
          <span
            className={`text-[11px] font-mono ${
              isDark ? "text-white/30" : "text-slate-450"
            }`}
          >
            {project.year}
          </span>
        </div>

        {/* Device mockup — centered */}
        <div className="flex justify-center items-center flex-1 py-4 min-h-[260px] sm:min-h-[300px] w-full">
          {project.deviceType === "laptop" ? (
            <LaptopMockup
              className="w-[85%] sm:w-[75%] max-w-[340px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </LaptopMockup>
          ) : (
            <PhoneMockup
              dark={isDark}
              className={large ? "w-[50%] sm:w-[40%] max-w-[170px]" : "w-[55%] sm:w-[44%] max-w-[150px]"}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </PhoneMockup>
          )}
        </div>

        {/* Bottom: info */}
        <div className="flex flex-col gap-3 mt-5">
          <div className="flex items-start justify-between gap-2">
            <h3
              className={`text-xl sm:text-2xl font-black leading-tight tracking-tight ${
                isDark ? "text-white" : "text-slate-900 dark:text-white"
              }`}
            >
              {project.title}
            </h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver ${project.title}`}
              className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                isDark
                  ? "bg-white/10 hover:bg-white text-white hover:text-slate-900"
                  : "bg-black/5 dark:bg-white/10 hover:bg-slate-900 dark:hover:bg-white text-slate-600 dark:text-slate-400 hover:text-white dark:hover:text-slate-900"
              }`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <p
            className={`text-sm leading-relaxed line-clamp-2 ${
              isDark ? "text-white/50" : "text-slate-500 dark:text-slate-400"
            }`}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-widest uppercase ${
                  isDark
                    ? "bg-white/10 text-white/60 border border-white/10"
                    : "bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-black/5 dark:border-white/10"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-24">
      {/* Header */}
      {!hideHeader && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 md:mb-16"
      >
        <span className="inline-block px-4 py-1 mb-4 text-[12px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 rounded-full border border-blue-100 dark:border-blue-800/40">
          GALERÍA
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Todos los{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Proyectos
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base max-w-sm leading-relaxed">
            Soluciones digitales construidas con tecnología moderna para problemas reales.
          </p>
        </div>
      </motion.div>
      )}

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
        <div className="md:col-span-7">
          <ProjectCard project={projects[0]} large />
        </div>
        <div className="md:col-span-5">
          <ProjectCard project={projects[1]} />
        </div>
        <div className="md:col-span-5">
          <ProjectCard project={projects[2]} />
        </div>
        <div className="md:col-span-7">
          <ProjectCard project={projects[3]} large />
        </div>
        <div className="md:col-span-7">
          <ProjectCard project={projects[4]} large />
        </div>
        <div className="md:col-span-5">
          <ProjectCard project={projects[5]} />
        </div>
      </div>
    </section>
  )
}

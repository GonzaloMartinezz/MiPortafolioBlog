"use client"

import React from "react"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

interface Project {
  title: string
  description: string
  year: string
  link: string
  image: string
  tags?: string[]
}

const projects: Project[] = [
  {
    title: "Centro Odontológico C&M",
    description: "Plataforma integral para gestión odontológica: agenda inteligente de turnos, historias clínicas digitales, seguimiento de tratamientos y panel administrativo completo.",
    year: "2026",
    link: "https://app-consultorio-odontologico.vercel.app/",
    image: "/coc&m.png",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Tarjeta Titanio",
    description: "Sistema financiero premium para gestión de tarjetas de crédito: monitoreo de transacciones en tiempo real, control de límites dinámicos y portal exclusivo de beneficios.",
    year: "2025",
    link: "https://tarjetatitanio.vercel.app/",
    image: "/TT.png",
    tags: ["Next.js", "TypeScript", "Stripe"],
  },
  {
    title: "Malibu Styless",
    description: "E-commerce de indumentaria deportiva con catálogo interactivo, carrito de compras optimizado, integración con pasarela de pagos y gestión de inventario.",
    year: "2024",
    link: "https://app-malibu-style.vercel.app/",
    image: "/MS.png",
    tags: ["React", "Firebase", "Tailwind"],
  },
  {
    title: "ClickHouse",
    description: "Plataforma inmobiliaria con búsqueda avanzada de propiedades, filtros inteligentes, galería interactiva y sistema de contacto directo con propietarios.",
    year: "2026",
    link: "https://app-clickhouse.vercel.app/",
    image: "/ClickHouse.png",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
  },
]

interface ProjectsProps {
  title?: string
}

export default function Projects({ title = "Galería de Proyectos" }: ProjectsProps) {
  return (
    <section className="relative w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-24 text-center flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
          {title}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          Explora mi portafolio completo de soluciones digitales a pantalla completa.
        </p>
      </motion.div>

      {/* Vertical Stack Layout */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <React.Fragment key={project.title}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center max-w-5xl xl:max-w-6xl mx-auto w-full group/project"
            >
              {/* Contenedor de la Imagen Superior */}
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-200/80 dark:border-white/10 group-hover/project:border-blue-500/50 transition-all duration-700 mb-12 lg:mb-16 bg-slate-100 dark:bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-[1.5s] ease-out"
                />
                {/* Gradiente oscuro que aparece en hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/project:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Badge de año estilo Glassmorphism flotante */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 translate-y-8 opacity-0 group-hover/project:translate-y-0 group-hover/project:opacity-100 transition-all duration-500 delay-100">
                  <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-widest shadow-2xl flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    {project.year}
                  </div>
                </div>
              </div>

              {/* Contenedor de la Descripción (Centrada debajo) */}
              <div className="flex flex-col items-center text-center max-w-4xl relative">
                {/* Número Gigante de Fondo (Watermark Centrado) */}
                <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 -translate-y-[40%] text-[150px] md:text-[250px] font-black text-slate-100 dark:text-white/[0.03] select-none pointer-events-none transition-transform duration-1000 group-hover/project:scale-110">
                  0{index + 1}
                </div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter transition-colors duration-500 group-hover/project:text-blue-600 dark:group-hover/project:text-blue-400">
                  {project.title}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg lg:text-xl leading-relaxed mb-10 transition-colors duration-500 group-hover/project:text-slate-800 dark:group-hover/project:text-slate-300">
                  {project.description}
                </p>

                {/* Etiquetas interactivas */}
                <div className="flex flex-wrap gap-3 mb-12 justify-center">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold tracking-widest uppercase border border-slate-200 dark:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Botón de Acción Elegante */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center gap-4 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold transition-all duration-300 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(255,255,255,0.05)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)]"
                >
                  <span className="text-sm tracking-widest uppercase">Explorar Proyecto</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-2 group-hover/btn:bg-white/30 dark:group-hover/btn:bg-black/20">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-45" />
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Separador de línea con efecto de scroll (Ocultar en el último elemento) */}
            {index !== projects.length - 1 && (
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent my-24 md:my-32 origin-center relative flex items-center justify-center"
              >
                {/* Glow brillante en el centro de la línea */}
                <div className="absolute w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80 blur-[2px]" />
                <div className="absolute w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.9)]" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

"use client"

import React, { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"

interface Project {
  title: string
  description: string
  year: string
  link: string
  image: string
}

const projects: Project[] = [
  {
    title: "Centro Odontológico C&M",
    description: "Sistema integral de gestión para consultorio dental. Citas online, historias clínicas digitales, seguimiento de pacientes y agenda integrada.",
    year: "2026",
    link: "https://app-consultorio-odontologico.vercel.app/",
    image: "/coc&m.png",
  },
  {
    title: "Tarjeta Titanio",
    description: "Plataforma de gestión de tarjetas de crédito premium. Control de transacciones en tiempo real, límites de crédito dinámicos y portal de beneficios exclusivos.",
    year: "2025",
    link: "https://tarjetatitanio.vercel.app/",
    image: "/TT.png",
  },
  {
    title: "Malibu Styless",
    description: "Emprendimiento personal dedicado a la venta de indumentaria deportiva con enfoque en calidad y diseño innovador.",
    year: "2024",
    link: "https://app-malibu-style.vercel.app/",
    image: "/MS.png",
  },
  {
    title: "ClickHouse",
    description: "ClickHouse es un sistema de gestión de bases de datos analíticas OLAP (Online Analytical Processing) de código abierto, diseñado para el procesamiento de grandes volúmenes de datos en tiempo real.",
    year: "2026",
    link: "https://app-clickhouse.vercel.app/",
    image: "/clickhouse.png",
  },
]

export default function Projects({ title = "PROYECTOS DESTACADOS" }: { title?: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <section ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-4">
          <span className="w-2 h-12 bg-blue-600 inline-block"></span>{title}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
          Trabajos destacados que muestran mi expertise en desarrollo web y análisis de datos.
        </p>
      </div>

      {/* Floating Image Preview (Desktop only) */}
      <div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl hidden md:block"
        style={{
          left: containerRef.current?.getBoundingClientRect().left ?? 0,
          top: containerRef.current?.getBoundingClientRect().top ?? 0,
          transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="relative w-[320px] h-[200px] bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden">
          {projects.map((project, index) => (
            <img
              key={project.title}
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 1.1,
                filter: hoveredIndex === index ? "none" : "blur(10px)",
              }}
            />
          ))}
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 dark:from-black/40 to-transparent" />
        </div>
      </div>

      <div className="space-y-0 mt-8">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            target={project.link.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="group block"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-6 md:py-8 border-t border-slate-200 dark:border-slate-800 transition-all duration-300 ease-out">
              {/* Background highlight on hover */}
              <div
                className={`
                  absolute inset-0 -mx-4 px-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
              />

              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1 min-w-0 pr-4">
                  {/* Title with animated underline */}
                  <div className="inline-flex items-center gap-2 mb-2">
                    <h3 className="text-slate-900 dark:text-white font-bold text-xl md:text-2xl tracking-tight">
                      <span className="relative">
                        {project.title}
                        {/* Animated underline */}
                        <span
                          className={`
                            absolute left-0 -bottom-1 h-0.5 bg-blue-600
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? "w-full" : "w-0"}
                          `}
                        />
                      </span>
                    </h3>

                    {/* Arrow that slides in */}
                    <ArrowUpRight
                      className={`
                        w-5 h-5 text-blue-600
                        transition-all duration-300 ease-out
                        ${hoveredIndex === index
                          ? "opacity-100 translate-x-0 translate-y-0"
                          : "opacity-0 -translate-x-4 translate-y-4 hidden md:block"
                        }
                      `}
                    />
                  </div>

                  {/* Description with fade effect */}
                  <p
                    className={`
                      text-sm md:text-base leading-relaxed
                      transition-all duration-300 ease-out
                      ${hoveredIndex === index ? "text-slate-600 dark:text-slate-300" : "text-slate-500 dark:text-slate-400"}
                    `}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Mobile Image (Visible only on small screens) */}
                <div className="w-full h-48 md:hidden mt-4 rounded-xl overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Year badge */}
                <span
                  className={`
                    text-sm font-mono font-medium tracking-wider tabular-nums mt-4 md:mt-0
                    transition-all duration-300 ease-out
                    ${hoveredIndex === index ? "text-blue-600" : "text-slate-400 dark:text-slate-500"}
                  `}
                >
                  {project.year}
                </span>
              </div>
            </div>
          </a>
        ))}

        {/* Bottom border for last item */}
        <div className="border-t border-slate-200 dark:border-slate-800" />
      </div>
    </section>
  )
}

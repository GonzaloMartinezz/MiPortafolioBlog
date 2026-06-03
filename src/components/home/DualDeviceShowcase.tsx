"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Activity, Shield, Zap, Sparkles, Database } from "lucide-react"

interface ShowcaseProject {
  id: number
  title: string
  subtitle: string
  description: string
  desktopImage: string
  mobileImage: string
  glowColor: string
  tags: string[]
  demoLink: string
  features: { icon: any; title: string; desc: string }[]
  colorTheme: string
  brandBg: string
}

const projectsData: ShowcaseProject[] = [
  {
    id: 1,
    title: "Centro Odontológico C&M",
    subtitle: "Healthcare · SaaS Dental",
    description: "Plataforma SaaS dental para revolucionar la gestión clínica. Agenda inteligente en tiempo real, digitalización de expedientes médicos y panel analítico de tratamientos y presupuestos.",
    desktopImage: "/coc&m.png",
    mobileImage: "/loginncoc&m.png",
    glowColor: "rgba(16, 185, 129, 0.15)",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    demoLink: "https://app-consultorio-odontologico.vercel.app/",
    colorTheme: "text-emerald-400",
    brandBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    features: [
      { icon: Activity, title: "Agenda Reactiva", desc: "Gestión automatizada de turnos en tiempo real." },
      { icon: Shield, title: "Expedientes Cifrados", desc: "Fichas de pacientes digitalizadas con seguridad." },
      { icon: Zap, title: "Control de Costos", desc: "Reportes y facturación clínica automatizados." },
    ],
  },
  {
    id: 2,
    title: "Tarjeta Titanio",
    subtitle: "Fintech · Premium Banking",
    description: "Portal financiero para administración de tarjetas de crédito corporativas. Pasarela de pago cifrada, movimientos en vivo y catálogo exclusivo de recompensas.",
    desktopImage: "/TT.png",
    mobileImage: "/TT.png",
    glowColor: "rgba(59, 130, 246, 0.15)",
    tags: ["Next.js", "TypeScript", "Stripe API", "Framer Motion"],
    demoLink: "https://tarjetatitanio.vercel.app/",
    colorTheme: "text-blue-400",
    brandBg: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    features: [
      { icon: Shield, title: "Seguridad Bancaria", desc: "Encriptación de extremo a extremo." },
      { icon: Zap, title: "Transacciones en Vivo", desc: "Consumos y límites reflejados al instante." },
      { icon: Sparkles, title: "Catálogo de Recompensas", desc: "Beneficios de alta gama para ejecutivos." },
    ],
  },
  {
    id: 3,
    title: "ClickHouse Real Estate",
    subtitle: "PropTech · Inmobiliaria",
    description: "Plataforma inmobiliaria con búsqueda por mapas interactivos, galerías optimizadas y comunicación en tiempo real con agentes.",
    desktopImage: "/ClickHouse.png",
    mobileImage: "/ClickHouse.png",
    glowColor: "rgba(139, 92, 246, 0.15)",
    tags: ["Next.js", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
    demoLink: "https://app-clickhouse.vercel.app/",
    colorTheme: "text-purple-400",
    brandBg: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    features: [
      { icon: Sparkles, title: "Búsqueda Inmersiva", desc: "Filtros precisos y geolocalización integrada." },
      { icon: Activity, title: "Mensajería Directa", desc: "Conexión ágil con propietarios verificados." },
      { icon: Database, title: "Carga Inteligente", desc: "Imágenes optimizadas en la nube." },
    ],
  },
  {
    id: 4,
    title: "Apex Analytics",
    subtitle: "Data Analytics · SaaS",
    description: "Tablero de inteligencia empresarial para visualizar datos en tiempo real. Gráficos dinámicos, alertas configurables y exportación de reportes automatizada.",
    desktopImage: "/GoStats.png",
    mobileImage: "/GoStats.png",
    glowColor: "rgba(6, 182, 212, 0.15)",
    tags: ["React.js", "Recharts", "Tailwind CSS", "Data Analysis"],
    demoLink: "https://app-gostats.vercel.app/",
    colorTheme: "text-cyan-400",
    brandBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    features: [
      { icon: Activity, title: "Gráficos Reactivos", desc: "Visualizaciones interactivas en tiempo real." },
      { icon: Shield, title: "Exportación Directa", desc: "Reportes en PDF y Excel automáticos." },
      { icon: Zap, title: "Monitoreo Constante", desc: "Alertas configurables por umbrales." },
    ],
  },
]

export default function DualDeviceShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0)
  const project = projectsData[activeTab]

  return (
    <section
      className="relative w-full py-16 sm:py-20 md:py-28 overflow-hidden border-y border-slate-900"
      style={{ background: "radial-gradient(circle at 50% 45%, #0c2c34 0%, #030e11 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[300px] md:h-[500px] rounded-full blur-[120px] pointer-events-none opacity-40 transition-all duration-1000 z-0"
        style={{ background: `radial-gradient(circle, ${project.glowColor.replace("0.15", "0.5")} 0%, transparent 70%)` }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-10 sm:gap-12 md:gap-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 mb-4 text-[11px] font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-950/40 rounded-full border border-blue-800/40"
          >
            VISTA MULTIDISPOSITIVO
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none mb-4">
            Diseño{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Responsivo
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Mis desarrollos funcionan perfecto en escritorio y mobile. Seleccioná un proyecto para verlo en ambos dispositivos.
          </p>
        </div>

        {/* Device showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-row items-end justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-14 w-full select-none"
          >
            {/* MacBook */}
            <div
              className="w-[63%] sm:w-[60%] md:w-[57%] max-w-[560px] relative z-10 hover:scale-[1.012] transition-transform duration-500"
              style={{ WebkitBoxReflect: "below 1px linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.15) 100%)" }}
            >
              <div className="relative w-full aspect-[16/10] bg-zinc-950 border-[8px] sm:border-[10px] md:border-[12px] border-zinc-900 rounded-t-xl md:rounded-t-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden">
                <img
                  src={project.desktopImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-white/8 pointer-events-none" />
              </div>
              <div className="w-full h-1 bg-zinc-950 border-b border-zinc-900/60" />
              <div className="w-[114%] -ml-[7%] h-2.5 md:h-3.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 rounded-b-xl shadow-[0_8px_20px_rgba(0,0,0,0.8)] border-t border-white/10">
                <div className="w-12 md:w-16 h-1.5 bg-zinc-950 rounded-b-md absolute top-0 left-1/2 -translate-x-1/2" />
              </div>
            </div>

            {/* iPhone */}
            <div
              className="w-[27%] sm:w-[24%] md:w-[20%] max-w-[200px] relative z-20 hover:scale-[1.03] transition-transform duration-500"
              style={{
                WebkitBoxReflect: "below 1px linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.2) 100%)",
                marginBottom: "1.2%",
              }}
            >
              <div className="relative w-full aspect-[9/19.5] rounded-[28px] sm:rounded-[32px] md:rounded-[40px] border-[6px] sm:border-[8px] md:border-[10px] border-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-zinc-950 overflow-hidden">
                <img
                  src={project.mobileImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[28%] h-[4%] bg-black rounded-full z-30" />
                <div className="absolute bottom-[1.5%] left-1/2 -translate-x-1/2 w-[32%] h-[0.6%] bg-white/60 rounded-full z-30" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Project selector grid - subido con margin negativo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 w-full max-w-4xl mx-auto -mt-6 md:-mt-10 relative z-30">
          {projectsData.map((proj, idx) => {
            const isActive = idx === activeTab
            return (
              <button
                key={proj.id}
                onClick={() => setActiveTab(idx)}
                className={`relative flex flex-col gap-2 sm:gap-2.5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all duration-300 group focus:outline-none ${
                  isActive
                    ? "bg-slate-900 border-slate-700 shadow-lg"
                    : "bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectCard"
                    className="absolute inset-0 rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-700"
                    transition={{ type: "spring", stiffness: 360, damping: 28 }}
                  />
                )}

                {/* Thumbnail */}
                <div className="relative z-10 w-full aspect-video rounded-lg overflow-hidden bg-slate-800">
                  <img
                    src={proj.desktopImage}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  />
                </div>

                {/* Category */}
                <span className={`relative z-10 text-[8px] sm:text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border w-fit ${proj.brandBg}`}>
                  {proj.subtitle.split(" · ")[0]}
                </span>

                {/* Title */}
                <span className={`relative z-10 text-[10px] sm:text-xs font-extrabold leading-tight transition-colors duration-200 line-clamp-2 ${
                  isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                }`}>
                  {proj.title}
                </span>

                {isActive && (
                  <span className={`absolute top-2.5 right-2.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full ${proj.colorTheme.replace("text-", "bg-")} animate-pulse`} />
                )}
              </button>
            )
          })}
        </div>

        {/* Details panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start text-white bg-slate-950/30 p-5 sm:p-7 md:p-10 rounded-2xl md:rounded-[2rem] border border-slate-800/60 backdrop-blur-2xl mt-4 md:mt-8 shadow-2xl"
          >
            {/* Left: title + description + CTA */}
            <div className="md:col-span-7 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <span className={`inline-block w-fit px-3 py-0.5 text-[10px] font-bold tracking-widest uppercase rounded-full border ${project.brandBg}`}>
                  {project.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  asChild
                  className="flex items-center gap-2 px-5 py-3 bg-white text-slate-950 hover:bg-blue-500 hover:text-white rounded-xl font-bold text-xs tracking-wider uppercase transition-all shadow-lg"
                >
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    Ver Aplicación
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: features + tags */}
            <div className="md:col-span-5 flex flex-col gap-5 md:border-l md:border-slate-800 md:pl-8">
              <div className="flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                  Funcionalidades clave
                </h4>
                <div className="flex flex-col gap-3">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className={`p-1.5 rounded-lg border shrink-0 ${project.brandBg}`}>
                        <feat.icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-200">{feat.title}</p>
                        <p className="text-[11px] text-slate-500 leading-tight mt-0.5">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-800">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide bg-slate-900 border border-slate-800 rounded-lg text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}

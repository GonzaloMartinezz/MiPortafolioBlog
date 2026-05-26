"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Target,
  Compass,
  Code2,
  Rocket,
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  Lightbulb,
  Palette,
  Terminal,
  Globe,
} from "lucide-react"

const steps = [
  {
    id: 1,
    number: "01",
    phase: "Estrategia",
    icon: Target,
    phaseIcon: Lightbulb,
    title: "Descubrimiento & Estrategia",
    subtitle: "Entendemos tu negocio a fondo",
    description:
      "Analizamos tu modelo de negocio, tus procesos internos y las fricciones que frenan el crecimiento. Definimos exactamente qué necesita tu app para generar impacto real desde el primer día.",
    color: "emerald",
    accent: "from-emerald-400 to-teal-500",
    glow: "rgba(16,185,129,0.25)",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    improvements: [
      { icon: "📊", label: "Logística", desc: "Automatizamos procesos que consumen tiempo y recursos" },
      { icon: "🎯", label: "Foco", desc: "Identificamos las funciones con mayor retorno" },
      { icon: "💰", label: "Presupuesto", desc: "Planificación sin sorpresas, roadmap 100% transparente" },
    ],
    develops: [
      "Mapeo de procesos y flujos de usuario",
      "Priorización ágil del backlog",
      "Arquitectura de información inicial",
      "Viabilidad técnica y presupuesto exacto",
    ],
  },
  {
    id: 2,
    number: "02",
    phase: "Diseño",
    icon: Compass,
    phaseIcon: Palette,
    title: "UI/UX & Prototipado",
    subtitle: "Tu app se ve y siente premium",
    description:
      "Diseño pantallas de alta fidelidad en Figma adaptadas a escritorio y mobile. Cada interacción, color y tipografía está pensada para que tus usuarios confíen en tu marca desde el primer clic.",
    color: "blue",
    accent: "from-blue-400 to-indigo-500",
    glow: "rgba(59,130,246,0.25)",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    improvements: [
      { icon: "✨", label: "Diseño", desc: "Interfaces modernas que elevan la percepción de marca" },
      { icon: "📱", label: "Mobile-first", desc: "Funciona perfecto en celular, tablet y escritorio" },
      { icon: "🤝", label: "Confianza", desc: "UX intuitiva que reduce la tasa de abandono" },
    ],
    develops: [
      "Prototipos interactivos de alta fidelidad",
      "Sistema de diseño consistente",
      "Modo oscuro nativo y paleta de colores",
      "Validación visual antes de programar",
    ],
  },
  {
    id: 3,
    number: "03",
    phase: "Desarrollo",
    icon: Code2,
    phaseIcon: Terminal,
    title: "Ingeniería & Programación",
    subtitle: "Código robusto que escala contigo",
    description:
      "Programo con Next.js, TypeScript y bases de datos optimizadas. Integro pagos, autenticación segura y paneles de administración. El código es limpio, modular y preparado para crecer sin reescrituras.",
    color: "violet",
    accent: "from-violet-400 to-purple-500",
    glow: "rgba(139,92,246,0.25)",
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    improvements: [
      { icon: "⚡", label: "Velocidad", desc: "Carga en milisegundos, sin fricciones para el usuario" },
      { icon: "🔒", label: "Seguridad", desc: "Datos cifrados, roles y permisos por usuario" },
      { icon: "🛒", label: "Monetización", desc: "Pasarelas de pago integradas listas para vender" },
    ],
    develops: [
      "Stack moderno: Next.js + TypeScript",
      "Base de datos optimizada (MongoDB / PostgreSQL)",
      "Integración de pagos con Stripe",
      "Panel admin y control de roles",
    ],
  },
  {
    id: 4,
    number: "04",
    phase: "Ejecución",
    icon: Rocket,
    phaseIcon: Globe,
    title: "QA, Lanzamiento & Escala",
    subtitle: "Tu app en producción desde el día 1",
    description:
      "Someto el sistema a auditorías de velocidad, SEO y accesibilidad antes de desplegar. Configuramos el servidor en Vercel o AWS con disponibilidad del 99.9% y te acompañamos en el post-lanzamiento.",
    color: "amber",
    accent: "from-amber-400 to-orange-500",
    glow: "rgba(245,158,11,0.25)",
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    improvements: [
      { icon: "🚀", label: "Ejecución", desc: "Lanzamiento controlado sin fricciones al mercado" },
      { icon: "📈", label: "SEO", desc: "Posicionamiento inicial optimizado en Google" },
      { icon: "🔄", label: "Soporte", desc: "Monitoreo y mejoras continuas post-entrega" },
    ],
    develops: [
      "Pruebas intensivas de flujos (QA)",
      "Optimización SEO y Web Vitals",
      "Deploy en Vercel / AWS con SSL",
      "Soporte de monitoreo post-lanzamiento",
    ],
  },
]

export default function WorkMethodology() {
  const [active, setActive] = useState(0)
  const step = steps[active]
  const Icon = step.icon
  const PhaseIcon = step.phaseIcon

  return (
    <section
      className="relative w-full py-24 md:py-32 overflow-hidden border-t border-slate-900"
      style={{ background: "radial-gradient(ellipse at 50% 0%, #0a1628 0%, #07090e 70%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-30 transition-all duration-1000"
        style={{ background: `radial-gradient(circle, ${step.glow} 0%, transparent 70%)` }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-16 md:gap-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 mb-5 text-[11px] font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-950/40 rounded-full border border-blue-900/40"
          >
            METODOLOGÍA DE TRABAJO
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none mb-5">
            Del concepto al{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              producto real
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Un proceso estructurado en 4 fases para transformar tu idea en una app que mejora tu negocio — desde la logística interna hasta la experiencia de tu cliente final.
          </p>
        </div>

        {/* Step selector — horizontal pills */}
        <div className="flex flex-col sm:flex-row gap-2 max-w-3xl mx-auto w-full">
          {steps.map((s, idx) => {
            const isActive = idx === active
            const StepIcon = s.icon
            return (
              <button
                key={s.id}
                onClick={() => setActive(idx)}
                className={`relative flex-1 flex flex-col sm:items-center gap-2 px-4 py-4 rounded-2xl border text-left sm:text-center transition-all duration-300 group focus:outline-none ${
                  isActive
                    ? `${s.bg} ${s.border} shadow-lg`
                    : "bg-slate-950/50 border-slate-800/60 hover:border-slate-700 hover:bg-slate-900/50"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeStep"
                    className={`absolute inset-0 rounded-2xl ${s.bg} ${s.border} border`}
                    transition={{ type: "spring", stiffness: 360, damping: 28 }}
                  />
                )}
                <div className="relative z-10 flex sm:flex-col sm:items-center gap-3">
                  <div className={`p-2 rounded-xl ${isActive ? s.bg : "bg-slate-900"} border ${isActive ? s.border : "border-slate-800"} transition-colors`}>
                    <StepIcon className={`w-4 h-4 ${isActive ? s.text : "text-slate-500"}`} />
                  </div>
                  <div>
                    <p className={`text-[9px] font-mono font-bold tracking-widest uppercase mb-0.5 ${isActive ? s.text : "text-slate-600"}`}>
                      {s.number}
                    </p>
                    <p className={`text-xs font-extrabold ${isActive ? "text-white" : "text-slate-500 group-hover:text-slate-300"} transition-colors`}>
                      {s.phase}
                    </p>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <ChevronRight className="hidden sm:block absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-700 z-20" />
                )}
              </button>
            )
          })}
        </div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch"
          >
            {/* Left: Phase overview */}
            <div className="lg:col-span-5 flex flex-col gap-5">

              {/* Main card */}
              <div className="flex-1 relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950/80 backdrop-blur-md p-7 sm:p-9 flex flex-col gap-6">
                <div className={`absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r ${step.accent}`} />

                <div className="flex items-center justify-between">
                  <div className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-full ${step.bg} border ${step.border}`}>
                    <PhaseIcon className={`w-3.5 h-3.5 ${step.text}`} />
                    <span className={`text-[10px] font-bold tracking-widest uppercase ${step.text}`}>
                      {step.phase}
                    </span>
                  </div>
                  <span className="text-6xl font-black text-white/5 font-mono select-none">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* What gets developed */}
                <div className="flex flex-col gap-2.5 pt-5 border-t border-slate-800/80">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                    Qué desarrollamos
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.develops.map((d, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${step.text}`} />
                        <span className="text-xs text-slate-400 leading-tight">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Business improvements */}
            <div className="lg:col-span-7 flex flex-col gap-5">

              {/* Title for this column */}
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-4 h-4 text-slate-500" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                  Qué mejora en tu negocio
                </span>
              </div>

              {/* Business improvement cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {step.improvements.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className={`relative flex flex-col gap-3 p-5 rounded-2xl border ${step.border} ${step.bg} backdrop-blur-md`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className={`text-sm font-black ${step.text} mb-1`}>{item.label}</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Full process summary cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-1">
                {[
                  { label: "Logística", desc: "Procesos internos optimizados", color: "text-emerald-400", active: active >= 0 },
                  { label: "Diseño", desc: "Interfaz y experiencia premium", color: "text-blue-400", active: active >= 1 },
                  { label: "Desarrollo", desc: "Código robusto y escalable", color: "text-violet-400", active: active >= 2 },
                  { label: "Ejecución", desc: "Lanzamiento y crecimiento", color: "text-amber-400", active: active >= 3 },
                ].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`text-left p-3.5 rounded-2xl border transition-all duration-300 ${
                      active === i
                        ? `${steps[i].bg} ${steps[i].border}`
                        : item.active
                        ? "bg-slate-900/60 border-slate-700/60"
                        : "bg-slate-950/40 border-slate-800/40"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.active ? item.color.replace("text-", "bg-") : "bg-slate-700"} transition-colors`} />
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${active === i ? item.color : item.active ? "text-slate-300" : "text-slate-600"} transition-colors`}>
                        {item.label}
                      </span>
                    </div>
                    <p className={`text-[11px] leading-tight ${active === i ? "text-slate-300" : "text-slate-600"} transition-colors`}>
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

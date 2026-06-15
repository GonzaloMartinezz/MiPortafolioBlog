"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Palette, Database, Rocket, Sparkles, CheckCircle } from "lucide-react"

interface StepData {
  id: number
  title: string
  subtitle: string
  icon: any
  color: string
  glowColor: string
  textColor: string
  borderColor: string
  bgLight: string
  imageUrl: string
  deliverables: string[]
}

const STEPS: StepData[] = [
  {
    id: 1,
    title: "Lógica de Negocio",
    subtitle: "Análisis de requerimientos y objetivos clave",
    icon: Brain,
    color: "from-orange-500 to-amber-500",
    glowColor: "rgba(249, 115, 22, 0.2)",
    textColor: "text-orange-500",
    borderColor: "border-orange-500/30",
    bgLight: "bg-orange-500/10",
    imageUrl: "/GoStats.png",
    deliverables: [
      "Levantamiento de requerimientos y objetivos de negocio",
      "Definición de historias de usuario y alcances del MVP",
      "Diagramación de flujos de trabajo e interacciones lógicas",
    ]
  },
  {
    id: 2,
    title: "Diseño UX/UI",
    subtitle: "Creación de interfaces modernas y atractivas",
    icon: Palette,
    color: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.2)",
    textColor: "text-emerald-500",
    borderColor: "border-emerald-500/30",
    bgLight: "bg-emerald-500/10",
    imageUrl: "/loginncoc&m.png",
    deliverables: [
      "Wireframes de alta fidelidad y prototipos navegables",
      "Creación de Sistemas de Diseño (Design Systems) consistentes",
      "Enfoque centrado en el usuario con interfaces responsivas",
    ]
  },
  {
    id: 3,
    title: "Arquitectura de Datos",
    subtitle: "Estructuración de información y bases de datos",
    icon: Database,
    color: "from-blue-500 to-indigo-500",
    glowColor: "rgba(59, 130, 246, 0.2)",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
    bgLight: "bg-blue-500/10",
    imageUrl: "/ClickHouse.png",
    deliverables: [
      "Modelado de bases de datos relacionales y no relacionales",
      "Creación y documentación de APIs robustas (REST/GraphQL)",
      "Políticas de seguridad, roles y encriptación de datos",
    ]
  },
  {
    id: 4,
    title: "Producto Final",
    subtitle: "Despliegue y ejecución de la aplicación terminada",
    icon: Rocket,
    color: "from-violet-500 to-fuchsia-500",
    glowColor: "rgba(139, 92, 246, 0.2)",
    textColor: "text-violet-500",
    borderColor: "border-violet-500/30",
    bgLight: "bg-violet-500/10",
    imageUrl: "/bachstage.png",
    deliverables: [
      "Fase exhaustiva de QA y optimización de rendimiento",
      "Configuración de CI/CD para despliegues automatizados",
      "Puesta en producción en la nube con monitoreo activo",
    ]
  }
]

export default function Expertise() {
  const [activeStep, setActiveStep] = useState<number>(0)
  
  const step = STEPS[activeStep]

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-slate-950 border-t border-slate-900">
      
      {/* Dynamic Background Glow changing with active step */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] rounded-full blur-[120px] md:blur-[160px] pointer-events-none transition-all duration-1000 ease-out z-0 opacity-45"
        style={{
          background: step.glowColor,
        }}
      />

      <div className="relative w-full max-w-[94%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-12 z-10 flex flex-col gap-16 md:gap-24">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="inline-block px-3.5 py-1 text-[11px] font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-950/40 rounded-full border border-blue-800/40">
              METODOLOGÍA DE TRABAJO
            </span>
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          </motion.div>
          
          <h2 className="text-3.5xl md:text-5xl lg:text-6.5xl font-black text-white tracking-tight leading-[0.95] mb-6">
            Pasos para desarrollar la app <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold">de tu negocio</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl">
            Un proceso estructurado y transparente diseñado para transformar tus ideas en productos digitales de nivel mundial de manera eficiente y del más alto calibre técnico.
          </p>
        </div>

        {/* Stepper Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Rich Vertical Timeline (5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-4 relative">
            
            {/* Continuous timeline line behind steps */}
            <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-slate-900 pointer-events-none z-0">
              {/* Dynamic filled line based on active step */}
              <motion.div 
                className="w-full bg-gradient-to-b from-blue-500 to-cyan-400 origin-top rounded-full"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: activeStep / (STEPS.length - 1) }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ height: "100%" }}
              />
            </div>

            {STEPS.map((s, idx) => {
              const isActive = idx === activeStep
              const StepIcon = s.icon

              return (
                <div 
                  key={s.id}
                  onClick={() => setActiveStep(idx)}
                  className={`group relative z-10 flex gap-6 p-5 sm:p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    isActive 
                      ? "bg-slate-900/60 border-slate-800 shadow-xl backdrop-blur-sm" 
                      : "bg-transparent border-transparent hover:bg-slate-900/20 hover:border-slate-900"
                  }`}
                >
                  
                  {/* Step Index Circle with Icon */}
                  <div className="relative flex-shrink-0">
                    <motion.div 
                      className={`w-[56px] h-[56px] rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                        isActive 
                          ? `bg-gradient-to-br ${s.color} text-white border-transparent shadow-[0_0_20px_rgba(59,130,246,0.25)]` 
                          : "bg-slate-900 text-slate-500 border-slate-850 group-hover:text-slate-300 group-hover:border-slate-700"
                      }`}
                      animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
                    >
                      <StepIcon className="w-5 h-5" />
                    </motion.div>
                    
                    {/* Pulsing indicator ring */}
                    {isActive && (
                      <span className="absolute -inset-1 rounded-[18px] border-2 border-blue-500/20 animate-ping pointer-events-none" />
                    )}
                  </div>

                  {/* Step Info Content */}
                  <div className="flex-grow flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? s.textColor : "text-slate-600 group-hover:text-slate-400"}`}>
                        Fase 0{s.id}
                      </span>
                      {isActive && (
                        <motion.span 
                          layoutId="activeDot"
                          className="h-1.5 w-1.5 rounded-full bg-blue-400" 
                        />
                      )}
                    </div>
                    
                    <h3 className={`text-xl sm:text-2xl font-black tracking-tight leading-none transition-colors duration-300 ${
                      isActive ? "text-white font-extrabold" : "text-slate-500 group-hover:text-slate-300"
                    }`}>
                      {s.title}
                    </h3>
                    
                    <p className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-slate-300" : "text-slate-600 group-hover:text-slate-500"
                    }`}>
                      {s.subtitle}
                    </p>

                    {/* Detailed deliverables (Collapsible, fades in when active) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-2.5 pt-4 mt-3 border-t border-slate-850">
                            <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                              <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" /> Entregables Clave
                            </h4>
                            <ul className="flex flex-col gap-2 pl-1">
                              {s.deliverables.map((del, dIdx) => (
                                <motion.li 
                                  key={dIdx} 
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: dIdx * 0.1 }}
                                  className="flex items-start gap-2.5 text-xs text-slate-400 font-medium"
                                >
                                  <CheckCircle className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${s.textColor}`} />
                                  <span>{del}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>

                </div>
              )
            })}

          </div>

          {/* RIGHT: High-Fidelity 3D-effect Mockup Card (7 columns) */}
          <div className="lg:col-span-7 flex items-center justify-center min-h-[360px] sm:min-h-[460px] lg:min-h-[580px]">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[760px] mx-auto z-10"
              >
                
                {/* Visual glow ring behind card */}
                <div className={`absolute -inset-2.5 rounded-3xl bg-gradient-to-r ${step.color} opacity-20 blur-xl transition-all duration-750`} />
                
                {/* Realistic Browser Window Mockup Container */}
                <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800 bg-[#090b11] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                  
                  {/* Browser top-bar */}
                  <div className="w-full h-11 bg-slate-900/80 border-b border-slate-850 flex items-center justify-between px-4 select-none">
                    {/* Window Controls */}
                    <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/90 border border-rose-600/30" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/90 border border-amber-600/30" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/90 border border-emerald-600/30" />
                    </div>
                    {/* Mock Address Bar */}
                    <div className="text-[10px] font-mono text-slate-500 bg-slate-950/80 border border-slate-850/60 rounded-md px-6 py-1 max-w-[180px] w-full truncate text-center">
                      my-app.dev/fase_0{step.id}
                    </div>
                    <div className="w-12" /> {/* spacer */}
                  </div>

                  {/* App Screen Display */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950 group">
                    
                    {/* Dark gradient gloss overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none z-10 opacity-70" />
                    
                    {/* Image screenshot */}
                    <img
                      src={step.imageUrl}
                      alt={`Metodología ${step.title}`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Floating Info Tag in corner */}
                    <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 bg-slate-950/90 backdrop-blur-md border border-slate-850 rounded-xl shadow-lg">
                      <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${step.color} animate-pulse`} />
                      <span className="text-[9px] font-bold text-slate-300 uppercase tracking-wider">
                        {step.title}
                      </span>
                    </div>

                  </div>

                </div>

                {/* Ambient dynamic reflection panel below */}
                <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[85%] h-5 bg-gradient-to-t from-transparent to-slate-900/60 rounded-full blur-[10px] pointer-events-none -z-10" />

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  )
}

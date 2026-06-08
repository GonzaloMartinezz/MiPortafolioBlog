"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  BrainCircuit, 
  Palette, 
  Database, 
  Rocket,
  Activity,
  Code2,
  Layout,
  TerminalSquare
} from "lucide-react"

const steps = [
  {
    id: 1,
    phase: "FASE 01",
    title: "Lógica de Negocio",
    subtitle: "Análisis de requerimientos y objetivos clave",
    icon: BrainCircuit,
    color: "bg-blue-500",
    url: "my-app.dev/fase_01",
    image: "/0.1.jpg",
  },
  {
    id: 2,
    phase: "FASE 02",
    title: "Diseño UX/UI",
    subtitle: "Creación de interfaces modernas y atractivas",
    icon: Palette,
    color: "bg-purple-500",
    url: "my-app.dev/fase_02",
    image: "/0.2.jpg",
  },
  {
    id: 3,
    phase: "FASE 03",
    title: "Arquitectura de Datos",
    subtitle: "Estructuración de información y bases de datos",
    icon: Database,
    color: "bg-emerald-500",
    url: "my-app.dev/fase_03",
    image: "/0.3.jpg",
  },
  {
    id: 4,
    phase: "FASE 04",
    title: "Producto Final",
    subtitle: "Despliegue y ejecución de la aplicación terminada",
    icon: Rocket,
    color: "bg-fuchsia-500",
    url: "my-app.dev/fase_04",
    image: "/0.4.jpg",
  },
]

// Mockup Components for the Right Panel
const LogicMockup = () => (
  <div className="w-full h-full bg-[#0a0a0a] text-slate-300 p-8 flex flex-col font-mono relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
      <div className="flex gap-8 items-center">
        <div className="p-4 border border-blue-500/30 bg-blue-500/10 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          User Request
        </div>
        <div className="h-0.5 w-16 bg-blue-500/50"></div>
        <div className="p-4 border border-blue-500/30 bg-blue-500/10 rounded-lg">
          Auth Service
        </div>
      </div>
      <div className="w-0.5 h-16 bg-blue-500/50"></div>
      <div className="flex gap-8 items-center">
        <div className="p-4 border border-blue-500/30 bg-blue-500/10 rounded-lg">
          Database Core
        </div>
        <div className="h-0.5 w-16 bg-blue-500/50"></div>
        <div className="p-4 border border-purple-500/30 bg-purple-500/10 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.2)]">
          Payment Gateway
        </div>
      </div>
    </div>
  </div>
);

const DesignMockup = () => (
  <div className="w-full h-full bg-zinc-950 p-8 flex flex-col gap-6 relative overflow-hidden">
    <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full"></div>
    <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500"></div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500"></div>
        <div className="w-12 h-12 rounded-full bg-zinc-800"></div>
      </div>
      <div className="flex gap-2">
        <div className="px-4 py-2 bg-purple-500 text-white rounded-md text-xs font-bold">Primary</div>
        <div className="px-4 py-2 bg-zinc-800 text-white rounded-md text-xs font-bold">Secondary</div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-6 mt-4">
      <div className="h-32 rounded-xl bg-zinc-900 border border-zinc-800 p-4 flex flex-col justify-end">
        <div className="h-4 w-1/2 bg-zinc-800 rounded"></div>
      </div>
      <div className="h-32 rounded-xl bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/30 p-4 flex flex-col justify-end">
        <div className="h-4 w-2/3 bg-purple-500/50 rounded"></div>
      </div>
    </div>
  </div>
);

const DataMockup = () => (
  <div className="w-full h-full bg-[#0d1117] text-emerald-400 font-mono text-sm p-6 overflow-hidden">
    <div className="flex items-center gap-2 mb-6 text-slate-400">
      <TerminalSquare className="w-4 h-4" />
      <span>schema.prisma</span>
    </div>
    <pre className="text-xs md:text-sm leading-loose">
      <span className="text-purple-400">model</span> <span className="text-blue-400">User</span> {'{\n'}
      {'  '}id        <span className="text-emerald-300">String</span>   <span className="text-slate-500">@id @default(uuid())</span>{'\n'}
      {'  '}email     <span className="text-emerald-300">String</span>   <span className="text-slate-500">@unique</span>{'\n'}
      {'  '}name      <span className="text-emerald-300">String?</span>{'\n'}
      {'  '}role      <span className="text-blue-300">Role</span>     <span className="text-slate-500">@default(USER)</span>{'\n'}
      {'  '}createdAt <span className="text-emerald-300">DateTime</span> <span className="text-slate-500">@default(now())</span>{'\n'}
      {'  '}orders    <span className="text-blue-400">Order[]</span>{'\n'}
      {'}\n\n'}
      <span className="text-purple-400">model</span> <span className="text-blue-400">Order</span> {'{\n'}
      {'  '}id        <span className="text-emerald-300">String</span>   <span className="text-slate-500">@id</span>{'\n'}
      {'  '}amount    <span className="text-emerald-300">Float</span>{'\n'}
      {'}'}
    </pre>
  </div>
);

const BrutalismMockup = () => (
  <div className="w-full h-full bg-[#050505] text-white relative overflow-hidden flex flex-col">
    {/* Internal Navbar */}
    <div className="flex justify-between items-center px-6 py-4 border-b border-white/5 text-[8px] sm:text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-500">
      <div className="flex gap-4 sm:gap-6">
        <span className="text-white">Inicio</span>
        <span className="hover:text-white transition-colors cursor-pointer hidden sm:block">Portfolio</span>
        <span className="hover:text-white transition-colors cursor-pointer hidden md:block">Solutions</span>
        <span className="text-emerald-400 font-bold border-b border-emerald-400 pb-1">Showcase</span>
        <span className="hover:text-white transition-colors cursor-pointer hidden sm:block">Security</span>
        <span className="hover:text-white transition-colors cursor-pointer hidden lg:block">Docs</span>
        <span className="hover:text-white transition-colors cursor-pointer hidden lg:block">Pricing</span>
        <span className="hover:text-white transition-colors cursor-pointer hidden lg:block">About</span>
      </div>
      <div className="w-2 h-2 bg-emerald-500"></div>
    </div>

    {/* Main Content */}
    <div className="flex-1 p-6 md:p-10 relative flex flex-col justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_100%)] pointer-events-none"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
        {/* Left Typography */}
        <div className="z-10 flex flex-col justify-center">
          <p className="text-emerald-500 font-mono text-[10px] tracking-widest uppercase mb-4">
            System Architecture: Engine Alpha
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.85] mb-6">
            PRECISION<br />
            <span className="text-emerald-400">BRUTALISM</span>
          </h1>
          <p className="text-zinc-500 text-xs md:text-sm max-w-sm leading-relaxed">
            High-performance data orchestration for the 22nd-century enterprise. Uncompromising structural integrity meets neon-forged velocity.
          </p>
        </div>

        {/* Right Dashboard Element */}
        <div className="relative w-full aspect-[4/3] bg-[#0A0A0A] border border-white/10 rounded-xl p-4 flex flex-col shadow-2xl overflow-hidden z-10 hidden sm:flex">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 bg-orange-500"></div>
              <div className="w-2 h-2 bg-zinc-700"></div>
              <div className="w-2 h-2 bg-zinc-700"></div>
            </div>
            <span className="text-[8px] text-zinc-600 font-mono uppercase tracking-widest">Active Threads: 4</span>
          </div>

          {/* Chart Bars */}
          <div className="flex-1 flex items-end gap-2 mb-4">
            {[40, 70, 45, 90, 60, 85, 30, 65].map((height, i) => (
              <div 
                key={i} 
                className="flex-1 bg-emerald-500/80 hover:bg-emerald-400 transition-all border-t border-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
            <div>
              <p className="text-[8px] text-zinc-600 font-mono uppercase mb-1">Response</p>
              <p className="text-xl font-bold">12ms</p>
            </div>
            <div>
              <p className="text-[8px] text-zinc-600 font-mono uppercase mb-1">Load</p>
              <p className="text-xl font-bold text-emerald-400">0.04%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default function WorkMethodology() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#050814] text-white overflow-hidden border-t border-white/5 font-sans">
      
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/40 border border-blue-900/50 mb-6">
            <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">
              METODOLOGÍA DE TRABAJO
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-6">
            Pasos para desarrollar<br />
            la app <span className="text-cyan-400">de tu negocio</span>
          </h2>
          
          <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
            Un proceso estructurado y transparente diseñado para transformar tus ideas 
            en productos digitales de nivel mundial de manera eficiente y del más alto 
            calibre técnico.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left: Stepper */}
          <div className="lg:w-[400px] flex-shrink-0 relative">
            {/* The vertical line */}
            <div className="absolute left-[27px] top-8 bottom-12 w-[2px] bg-[#1a2235]">
              {/* Animated active line indicator */}
              <motion.div 
                className="absolute top-0 left-0 w-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                initial={false}
                animate={{ height: `${(active / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>

            <div className="flex flex-col gap-8">
              {steps.map((step, idx) => {
                const isActive = idx === active
                const StepIcon = step.icon

                return (
                  <button
                    key={step.id}
                    onClick={() => setActive(idx)}
                    className="relative flex items-center gap-6 group text-left w-full focus:outline-none"
                  >
                    {/* Icon container */}
                    <div className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isActive 
                        ? `${step.color} border-transparent shadow-[0_0_20px_rgba(0,0,0,0.5)]` 
                        : "bg-[#0B1021] border-[#1e293b] group-hover:border-slate-600"
                    }`}>
                      <StepIcon className={`w-6 h-6 ${isActive ? "text-white" : "text-slate-500 group-hover:text-slate-300"}`} />
                    </div>

                    {/* Text content */}
                    <div className={`flex flex-col flex-1 p-5 rounded-2xl transition-all duration-300 border ${
                      isActive 
                        ? "bg-[#0B1021] border-white/5" 
                        : "bg-transparent border-transparent hover:bg-white/[0.02]"
                    }`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                          {step.phase}
                        </span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>}
                      </div>
                      <h3 className={`text-xl font-black mb-1 transition-colors ${
                        isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-xs leading-relaxed transition-colors ${
                        isActive ? "text-slate-400" : "text-slate-600"
                      }`}>
                        {step.subtitle}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: Window Mockup */}
          <div className="flex-1 relative mt-8 lg:mt-0">
            {/* Soft glow behind window */}
            <div className="absolute inset-0 bg-fuchsia-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <motion.div 
              className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-[#0A0A0A] rounded-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
              initial={false}
              animate={{ y: [10, 0] }}
              transition={{ duration: 0.5 }}
              key={active}
            >
              {/* Mac-style Window Chrome */}
              <div className="h-10 bg-[#111111] border-b border-white/5 flex items-center justify-between px-4 shrink-0">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                
                <div className="px-4 py-1 bg-[#1A1A1A] border border-white/5 rounded text-[10px] font-mono text-zinc-400 tracking-widest">
                  {steps[active].url}
                </div>
                
                <div className="w-12"></div> {/* Spacer for balance */}
              </div>

              {/* Dynamic Content */}
              <div className="flex-1 relative overflow-hidden bg-[#0A0A0A]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img 
                      src={steps[active].image} 
                      alt={steps[active].title} 
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Pagination helper on mobile */}
            <div className="flex justify-center mt-6 lg:hidden gap-2">
              {steps.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-white" : "bg-white/20"}`}
                ></div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

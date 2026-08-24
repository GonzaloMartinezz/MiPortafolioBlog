"use client";

import { motion } from "framer-motion";
import {
  Code2, Database, BarChart3, UserCircle2, GraduationCap,
  Briefcase, Dumbbell, ArrowUpRight, Cpu, Globe, Layers
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
  viewport: { once: true },
});

const stack = [
  { name: "JavaScript", sub: "ES2024+", color: "from-yellow-500/20 to-yellow-500/5 border-yellow-500/20 text-yellow-400" },
  { name: "TypeScript", sub: "Strict Mode", color: "from-blue-500/20 to-blue-500/5 border-blue-500/20 text-blue-400" },
  { name: "React & Next.js", sub: "App Router", color: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 text-cyan-400" },
  { name: "Node.js & Express", sub: "REST / WS", color: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-400" },
  { name: "MongoDB", sub: "NoSQL", color: "from-green-500/20 to-green-500/5 border-green-500/20 text-green-400" },
  { name: "SQL Server", sub: "Relacional", color: "from-slate-400/20 to-slate-400/5 border-slate-400/20 text-slate-300" },
  { name: "Power BI", sub: "Analytics", color: "from-amber-500/20 to-amber-500/5 border-amber-500/20 text-amber-400" },
  { name: "Tailwind CSS", sub: "Design System", color: "from-sky-500/20 to-sky-500/5 border-sky-500/20 text-sky-400" },
];

const education = [
  {
    period: "2024 — 2026",
    title: "Tecnicatura en Desarrollo de Software",
    institution: "Universidad del Norte Santo Tomás de Aquino — UNSTA",
    accent: "text-blue-400", ring: "ring-blue-500/30", dot: "bg-blue-400",
  },
  {
    period: "2025 — 2026",
    title: "Arquitectura Backend & APIs REST",
    institution: "CoderHouse — Node.js & Express Avanzado",
    accent: "text-indigo-400", ring: "ring-indigo-500/30", dot: "bg-indigo-400",
  },
  {
    period: "2024",
    title: "Data Analytics",
    institution: "CoderHouse — SQL Server, Power BI & Excel",
    accent: "text-emerald-400", ring: "ring-emerald-500/30", dot: "bg-emerald-400",
  },
  {
    period: "2023",
    title: "Full Stack Web Developer",
    institution: "Rolling Code School — MERN Stack",
    accent: "text-violet-400", ring: "ring-violet-500/30", dot: "bg-violet-400",
  },
];

const pillars = [
  {
    icon: Code2,
    tag: "Full Stack",
    title: "Ingeniero de Producto",
    desc: "Construyo aplicaciones web de extremo a extremo con el stack MERN, Next.js 14 y TypeScript. Cada pieza de código está pensada para escalar.",
    color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "shadow-blue-500/10",
  },
  {
    icon: BarChart3,
    tag: "Analytics",
    title: "Analista de Datos",
    desc: "Transformo métricas en decisiones comerciales usando Power BI, SQL y dashboards interactivos con gráficos vectoriales en tiempo real.",
    color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "shadow-emerald-500/10",
  },
  {
    icon: Briefcase,
    tag: "B2B",
    title: "Visión Comercial",
    desc: "Mi experiencia en Tarjeta Titanio me dio la capacidad de traducir necesidades de negocio en arquitecturas técnicas efectivas y escalables.",
    color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20", glow: "shadow-violet-500/10",
  },
  {
    icon: Dumbbell,
    tag: "Mentalidad",
    title: "Disciplina de Atleta",
    desc: "El básquet me forjó con disciplina, trabajo en equipo y resiliencia. Esa mentalidad deportiva es el motor de cada proyecto que entrego.",
    color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20", glow: "shadow-amber-500/10",
  },
];

export default function WhoPage() {
  return (
    <main className="relative min-h-screen bg-[#040810] text-white overflow-hidden w-full">

      {/* ── AMBIENT BACKGROUND ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full pt-28 pb-32">

        {/* ══════════════════════════════════════════════
            HERO HEADER
        ══════════════════════════════════════════════ */}
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 mb-24 md:mb-32">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 text-[11px] font-black tracking-[0.25em] text-blue-400 uppercase bg-blue-950/50 rounded-full border border-blue-800/40 backdrop-blur-md">
              <UserCircle2 className="w-3.5 h-3.5" /> Arquitecto de Software
            </span>

            <h1 className="text-[clamp(3.5rem,8.5vw,9rem)] font-black leading-[0.85] tracking-tighter text-white mb-10">
              Ingeniería.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                Datos.
              </span><br />
              Diseño.
            </h1>

            <div className="max-w-3xl">
              <p className="text-slate-300 text-xl md:text-2xl leading-relaxed mb-6 font-light">
                Soy <strong className="text-white font-bold">Gonzalo Martínez</strong>, Ingeniero de Software & Diseñador de Producto. 
                Construyo arquitecturas escalables y diseño experiencias de usuario impecables que generan <strong className="text-white font-bold">impacto comercial directo</strong>.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed">
                Especializado en el ecosistema JavaScript moderno, análisis profundo de datos y en transformar complejidad técnica en interfaces de alta conversión.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════
            4 PILARES (BENTO GRID EXPANSIVO)
        ══════════════════════════════════════════════ */}
        <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 mb-32">
          <motion.div {...fadeUp(0)} className="mb-12">
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">Mi Filosofía</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-2">
              Cuatro dimensiones<br />
              <span className="text-slate-500">que me definen.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.08)}
                  className={`group relative flex flex-col h-full p-8 md:p-10 rounded-[2.5rem] bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/5 hover:border-white/10 hover:bg-[#111111] transition-all duration-500 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-2 overflow-hidden`}
                >
                  {/* Subtle inner ambient glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                  
                  {/* Animated Top Border Line */}
                  <div className={`absolute top-0 inset-x-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500`}>
                     <div className={`w-full h-full bg-gradient-to-r from-transparent via-current to-transparent ${p.color}`} />
                  </div>

                  {/* Icon Container */}
                  <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-colors duration-500 mb-8 bg-[#050505] shadow-inner`}>
                    <div className={`absolute inset-0 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 ${p.bg}`} />
                    <Icon className={`w-6 h-6 ${p.color} relative z-10 group-hover:scale-110 transition-transform duration-500`} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow relative z-10">
                    <span className={`text-[10px] md:text-xs font-black tracking-[0.25em] uppercase ${p.color} mb-4 block drop-shadow-sm`}>
                      {p.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight leading-[1.1] transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed font-medium mt-auto group-hover:text-white/70 transition-colors duration-500">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            STACK TECNOLÓGICO (INFINITE MARQUEE)
        ══════════════════════════════════════════════ */}
        <section className="mb-32 relative py-16 bg-[#040810] border-y border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1120]/50 to-transparent pointer-events-none" />
          
          <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 mb-14 text-center z-10">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#F66C44] uppercase">Arsenal Técnico</span>
            <h2 className="text-4xl font-black tracking-tight text-white mt-2">
              El Stack Tecnológico
            </h2>
          </div>

          <div className="relative flex overflow-x-hidden w-full group/marquee">
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#040810] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#040810] to-transparent z-20 pointer-events-none" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
              className="flex whitespace-nowrap gap-6 px-3 items-center group-hover/marquee:[animation-play-state:paused]"
            >
              {/* Render 4 times for a flawless ultra-wide loop */}
              {[...stack, ...stack, ...stack, ...stack].map((item, i) => {
                const textColor = item.color.split(' ')[3]; // e.g. text-yellow-400
                const bgColor = textColor.replace('text-', 'bg-'); // e.g. bg-yellow-400

                return (
                  <div
                    key={i}
                    className={`group/stack relative flex flex-col justify-center px-8 py-7 rounded-3xl bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/5 hover:border-white/20 transition-all duration-300 shrink-0 w-[260px] md:w-[280px] shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden cursor-default hover:-translate-y-1`}
                  >
                    {/* Animated Top Border */}
                    <div className={`absolute top-0 inset-x-0 h-[2px] opacity-20 group-hover/stack:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-current to-transparent ${textColor}`} />
                    
                    {/* Internal Radial Glow */}
                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] opacity-10 group-hover/stack:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2 ${bgColor}`} />
                    <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover/stack:opacity-100 transition-opacity duration-500" />

                    <span className={`text-xl md:text-2xl font-black tracking-tight ${textColor} drop-shadow-sm relative z-10 transition-transform duration-300 group-hover/stack:scale-[1.02] origin-left`}>
                      {item.name}
                    </span>
                    <span className="text-[10px] md:text-[11px] font-black text-slate-500 tracking-[0.25em] uppercase mt-2 relative z-10">
                      {item.sub}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FORMACIÓN ACADÉMICA — TIMELINE VERTICAL
        ══════════════════════════════════════════════ */}
        <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div {...fadeUp(0)} className="mb-14">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#F66C44] uppercase">Fundación</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-2">
              Bases<br />
              <span className="text-slate-500">Académicas.</span>
            </h2>
          </motion.div>

          <div className="relative pl-10 md:pl-20 max-w-4xl pb-10">
            {/* Main Vertical Timeline Line */}
            <div className="absolute left-0 top-10 bottom-0 w-[2px] bg-gradient-to-b from-white/10 via-white/5 to-transparent" />

            <div className="flex flex-col gap-8 md:gap-10">
              {education.map((ed, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="relative group">
                  
                  {/* Glowing Node Base */}
                  <div className={`absolute -left-[2.85rem] md:-left-[5.35rem] top-8 w-4 h-4 rounded-full bg-[#111111] border-[2px] border-white/20 transition-all duration-500 ring-0 group-hover:ring-[8px] ring-white/5 z-10`} />
                  
                  {/* Glowing Node Hover Fill */}
                  <div className={`absolute -left-[2.85rem] md:-left-[5.35rem] top-8 w-4 h-4 rounded-full ${ed.dot} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 shadow-lg`} />

                  {/* Glass Card */}
                  <div className="relative p-6 md:p-10 rounded-[2.5rem] bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/5 hover:border-white/10 hover:bg-[#111111] transition-all duration-500 shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] overflow-hidden group-hover:-translate-y-1">
                    
                    {/* Inner Ambient Color Glow */}
                    <div className={`absolute top-0 left-0 w-64 h-64 blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none -translate-x-1/2 -translate-y-1/2 ${ed.dot}`} />

                    <div className="relative z-10 flex flex-col items-start">
                      {/* Date Badge */}
                      <span className={`inline-flex px-4 py-1.5 bg-[#050505] border border-white/5 rounded-full text-[10px] md:text-xs font-black tracking-[0.2em] uppercase ${ed.accent} mb-5 shadow-inner transition-colors duration-300`}>
                        {ed.period}
                      </span>
                      
                      <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight mb-3 drop-shadow-sm">
                        {ed.title}
                      </h3>
                      
                      <p className="text-white/40 text-sm md:text-base font-medium leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                        {ed.institution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

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
    <main className="relative min-h-screen bg-[#040810] text-white overflow-hidden -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-24">

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.08)}
                  className={`group relative flex flex-col gap-6 p-8 rounded-3xl bg-slate-900/40 border ${p.border} hover:bg-slate-900/80 transition-all duration-500 shadow-xl ${p.glow} hover:shadow-2xl hover:-translate-y-1`}
                >
                  <div className={`absolute top-0 inset-x-0 h-[2px] rounded-t-3xl bg-gradient-to-r from-transparent via-current to-transparent opacity-30 ${p.color}`} />

                  <div className={`w-fit p-4 rounded-2xl border ${p.bg} ${p.border}`}>
                    <Icon className={`w-6 h-6 ${p.color}`} />
                  </div>

                  <div className="flex-1">
                    <span className={`text-[10px] font-black tracking-[0.25em] uppercase ${p.color} mb-2 block`}>{p.tag}</span>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-tight">{p.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            STACK TECNOLÓGICO (INFINITE MARQUEE)
        ══════════════════════════════════════════════ */}
        <section className="mb-32 relative py-12 bg-slate-950/50 border-y border-slate-900 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 mb-10 text-center">
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">Arsenal Técnico</span>
            <h2 className="text-3xl font-black tracking-tight text-white mt-2">
              El Stack Tecnológico
            </h2>
          </div>

          <div className="relative flex overflow-x-hidden w-full group">
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#040810] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#040810] to-transparent z-10" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              className="flex whitespace-nowrap gap-4 px-2"
            >
              {/* Render twice for seamless loop */}
              {[...stack, ...stack, ...stack].map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col px-8 py-5 rounded-2xl bg-slate-900 border ${item.color.split(' ')[2]} shrink-0 w-[240px] shadow-lg`}
                >
                  <span className={`text-lg font-black tracking-tight ${item.color.split(' ')[3]}`}>{item.name}</span>
                  <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase mt-1">{item.sub}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FORMACIÓN ACADÉMICA — TIMELINE VERTICAL
        ══════════════════════════════════════════════ */}
        <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div {...fadeUp(0)} className="mb-14">
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">Fundación</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-2">
              Bases<br />
              <span className="text-slate-500">Académicas.</span>
            </h2>
          </motion.div>

          <div className="relative pl-10 md:pl-16 max-w-4xl">
            <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500/50 to-transparent" />

            <div className="flex flex-col gap-12">
              {education.map((ed, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="relative group">
                  {/* Glowing Dot */}
                  <div className={`absolute -left-[2.85rem] md:-left-[4.35rem] top-1.5 w-4 h-4 rounded-full ${ed.dot} ring-[6px] ring-[#040810] shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform duration-300`} />

                  <span className={`text-[11px] font-black tracking-[0.2em] uppercase ${ed.accent} mb-3 block`}>
                    {ed.period}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight mb-2 group-hover:text-slate-200 transition-colors">
                    {ed.title}
                  </h3>
                  <p className="text-slate-400 text-base md:text-lg font-medium">{ed.institution}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

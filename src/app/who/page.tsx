"use client";

import { motion } from "framer-motion";
import {
  Code2, Database, BarChart3, UserCircle2, GraduationCap,
  Briefcase, Dumbbell, ArrowUpRight, Cpu, Globe, Layers
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
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
    <main className="relative min-h-screen bg-[#040810] text-white overflow-hidden">

      {/* ── AMBIENT BACKGROUND ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-violet-600/6 rounded-full blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-32">

        {/* ══════════════════════════════════════════════
            HERO HEADER
        ══════════════════════════════════════════════ */}
        <motion.div {...fadeUp(0)} className="mb-24 md:mb-32">
          <span className="inline-flex items-center gap-2 mb-6 px-3.5 py-1 text-[10px] font-black tracking-[0.25em] text-blue-400 uppercase bg-blue-950/50 rounded-full border border-blue-800/40">
            <UserCircle2 className="w-3 h-3" /> Sobre mí
          </span>

          <h1 className="text-[clamp(3rem,9vw,8.5rem)] font-black leading-[0.88] tracking-tighter text-white mb-8">
            Código,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              Datos
            </span>{" "}
            &<br />
            Negocio.
          </h1>

          <div className="max-w-2xl">
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-6">
              Soy <strong className="text-white font-bold">Gonzalo Martínez</strong>, Full Stack Developer & Data Analyst. Combino ingeniería de software con análisis de datos para construir productos que generan{" "}
              <strong className="text-white font-bold">impacto comercial real</strong>.
            </p>
            <p className="text-slate-500 text-base leading-relaxed">
              Actualmente estudio{" "}
              <strong className="text-slate-300">Desarrollo y Calidad de Software en la UNSTA</strong>,
              y aplico arquitecturas modernas para convertir ideas en SaaS de nivel mundial.
            </p>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════
            4 PILARES (BENTO GRID)
        ══════════════════════════════════════════════ */}
        <section className="mb-28">
          <motion.div {...fadeUp(0)} className="mb-10">
            <span className="text-[10px] font-black tracking-[0.25em] text-slate-500 uppercase">Mi Perfil</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-2">
              Cuatro dimensiones<br />
              <span className="text-slate-500">que me definen.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.08)}
                  className={`group relative flex flex-col gap-5 p-7 md:p-9 rounded-3xl bg-slate-900/50 border ${p.border} hover:bg-slate-900/80 transition-all duration-400 shadow-xl ${p.glow} hover:shadow-2xl`}
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 inset-x-0 h-px rounded-t-3xl bg-gradient-to-r from-transparent via-current to-transparent opacity-30 ${p.color}`} />

                  <div className={`w-fit p-3 rounded-2xl border ${p.bg} ${p.border}`}>
                    <Icon className={`w-5 h-5 ${p.color}`} />
                  </div>

                  <div>
                    <span className={`text-[9px] font-black tracking-[0.25em] uppercase ${p.color} mb-1 block`}>{p.tag}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">{p.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            STACK TECNOLÓGICO
        ══════════════════════════════════════════════ */}
        <section className="mb-28">
          <motion.div {...fadeUp(0)} className="mb-10">
            <span className="text-[10px] font-black tracking-[0.25em] text-slate-500 uppercase">Herramientas</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-2">
              Stack<br />
              <span className="text-slate-500">Tecnológico.</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {stack.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className={`flex flex-col px-5 py-3.5 rounded-2xl bg-gradient-to-b border cursor-default hover:-translate-y-1 transition-transform duration-300 ${item.color}`}
              >
                <span className="text-sm font-bold">{item.name}</span>
                <span className="text-[10px] font-bold opacity-60 tracking-wider uppercase">{item.sub}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FORMACIÓN ACADÉMICA — TIMELINE VERTICAL
        ══════════════════════════════════════════════ */}
        <section>
          <motion.div {...fadeUp(0)} className="mb-12">
            <span className="text-[10px] font-black tracking-[0.25em] text-slate-500 uppercase">Educación</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-2">
              Formación<br />
              <span className="text-slate-500">Académica.</span>
            </h2>
          </motion.div>

          {/* Vertical timeline */}
          <div className="relative pl-8 md:pl-12">
            {/* Vertical track */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/50 via-indigo-500/30 to-transparent" />

            <div className="flex flex-col gap-10">
              {education.map((ed, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="relative">
                  {/* Dot on the track */}
                  <div className={`absolute -left-[2.05rem] md:-left-[3.05rem] top-1.5 w-3 h-3 rounded-full ${ed.dot} ring-4 ring-[#040810] shadow-lg`} />

                  <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${ed.accent} mb-2 block`}>
                    {ed.period}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight mb-1">
                    {ed.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium">{ed.institution}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

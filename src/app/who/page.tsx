"use client";

import React, { useState, useEffect } from "react";
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
  { name: "Next.js & React", sub: "Frontend Moderno", color: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 text-cyan-400" },
  { name: "React Native & Expo", sub: "Desarrollo Mobile", color: "from-blue-500/20 to-blue-500/5 border-blue-500/20 text-blue-400" },
  { name: "Node.js & Express", sub: "Backend y APIs REST", color: "from-green-500/20 to-green-500/5 border-green-500/20 text-green-400" },
  { name: "NestJS", sub: "Arquitectura Backend", color: "from-rose-500/20 to-rose-500/5 border-rose-500/20 text-rose-500" },
  { name: "TypeScript", sub: "Desarrollo Escalable", color: "from-blue-600/20 to-blue-600/5 border-blue-600/20 text-blue-500" },
  { name: "MongoDB & Prisma", sub: "Bases NoSQL & ORMs", color: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-400" },
  { name: "PostgreSQL & SQL", sub: "Bases Relacionales", color: "from-slate-400/20 to-slate-400/5 border-slate-400/20 text-slate-300" },
  { name: "Power BI & Excel", sub: "Inteligencia de Negocio", color: "from-amber-500/20 to-amber-500/5 border-amber-500/20 text-amber-400" },
  { name: "Lenguaje R", sub: "Data Analytics", color: "from-indigo-500/20 to-indigo-500/5 border-indigo-500/20 text-indigo-400" },
  { name: "Docker", sub: "Contenedores & DevOps", color: "from-sky-500/20 to-sky-500/5 border-sky-500/20 text-sky-400" },
  { name: "Figma & Canva", sub: "Diseño UI/UX", color: "from-fuchsia-500/20 to-fuchsia-500/5 border-fuchsia-500/20 text-fuchsia-400" },
  { name: "HTML & CSS", sub: "Bases Web", color: "from-orange-500/20 to-orange-500/5 border-orange-500/20 text-orange-400" },
];

const education = [
  {
    period: "mar. 2024 — ago. 2026",
    title: "Tecnicatura en Desarrollo y Calidad de Software",
    institution: "Universidad del Norte Santo Tomás de Aquino — UNSTA",
    status: "EGRESADO",
    accent: "text-[#F66C44]",
    bg: "bg-[#F66C44]",
    badge: "bg-[#F66C44]/10 border-[#F66C44]/30 text-[#F66C44]",
  },
  {
    period: "may. 2025 — ago. 2025",
    title: "Data Analytics",
    institution: "Coderhouse",
    status: null,
    accent: "text-emerald-400",
    bg: "bg-emerald-400",
    badge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  },
  {
    period: "abr. 2024 — ago. 2025",
    title: "Full Stack Web Developer (MERN)",
    institution: "RollingCode School",
    status: "EGRESADO",
    accent: "text-violet-400",
    bg: "bg-violet-400",
    badge: "bg-violet-500/10 border-violet-500/30 text-violet-400",
  },
  {
    period: "2024 — 2025",
    title: "Backend II: Diseño y Arquitectura de Software",
    institution: "Coderhouse",
    status: null,
    accent: "text-blue-400",
    bg: "bg-blue-400",
    badge: "bg-blue-500/10 border-blue-500/30 text-blue-400",
  },
];

const pillars = [
  {
    icon: Code2,
    tag: "Full Stack",
    title: "Ingeniero de Producto",
    desc: "Construyo aplicaciones web de extremo a extremo con el stack MERN, Next.js 14 y TypeScript. Cada pieza de código está pensada para escalar.",
    color: "text-[#F66C44]", bg: "bg-[#F66C44]/10", border: "border-[#F66C44]/20", glow: "shadow-[#F66C44]/10",
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
    color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", glow: "shadow-yellow-500/10",
  },
];

export default function WhoPage() {
  const [marqueeDuration, setMarqueeDuration] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      setMarqueeDuration(window.innerWidth < 768 ? 8 : 12);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#040810] text-white overflow-hidden w-full">

      {/* ── AMBIENT BACKGROUND ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#F66C44]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full pt-28 pb-32">

        {/* ══════════════════════════════════════════════
            HERO HEADER
        ══════════════════════════════════════════════ */}
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 mb-24 md:mb-32">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 text-[11px] font-black tracking-[0.25em] text-[#F66C44] uppercase bg-[#F66C44]/10 rounded-full border border-[#F66C44]/20 backdrop-blur-md">
              <UserCircle2 className="w-3.5 h-3.5" /> Full Stack & Data Analyst
            </span>

            <h1 className="text-[clamp(3.5rem,8.5vw,9rem)] font-black leading-[0.85] tracking-tighter text-white mb-10">
              Negocios.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F66C44] via-[#FF8A00] to-[#FCD100]">
                Código.
              </span><br />
              Resultados.
            </h1>

            <div className="max-w-3xl">
              <p className="text-slate-300 text-xl md:text-2xl leading-relaxed mb-6 font-light">
                Soy <strong className="text-white font-bold">Gonzalo Martínez</strong>, desarrollador de software y analista de datos.
                No solo escribo código; construyo <strong className="text-white font-bold">ecosistemas digitales de alto rendimiento</strong> que resuelven problemas de negocio reales.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed">
                Desde automatizar la gestión de clínicas de salud hasta crear plataformas B2B y e-commerce sin intermediarios. Mi enfoque es claro: combinar arquitectura escalable con diseño premium para acelerar el crecimiento de tu empresa.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.1)}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group relative flex flex-col justify-between p-8 md:p-10 rounded-[2rem] bg-[#0A0A0A]/80 backdrop-blur-3xl border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden shadow-2xl"
                >
                  {/* Subtle Top Border Glow */}
                  <div className={`absolute top-0 inset-x-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}>
                    <div className={`w-full h-full bg-gradient-to-r from-transparent via-current to-transparent ${p.color}`} />
                  </div>

                  {/* Cinematic Corner Flares */}
                  <div className={`absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none ${p.bg.split('/')[0]}`} />
                  <div className={`absolute -bottom-32 -left-32 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none ${p.bg.split('/')[0]}`} />

                  {/* Header: Icon & Tag */}
                  <div className="relative z-10 flex justify-between items-start mb-16">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-[#111111] border border-white/5 group-hover:border-white/20 transition-all duration-500 shadow-inner group-hover:shadow-[0_0_40px_0_rgba(255,255,255,0.05)]`}>
                      <Icon className={`w-6 h-6 ${p.color} transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 drop-shadow-md`} />
                    </div>

                    <div className="flex items-center px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-md group-hover:bg-white/[0.04] transition-all duration-500">
                      <span className={`w-1.5 h-1.5 rounded-full mr-2.5 ${p.bg.split('/')[0]} animate-pulse`} />
                      <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/60 group-hover:text-white/90 transition-colors duration-300">
                        {p.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-auto">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-500">
                      {p.title}
                    </h3>

                    {/* Expanding Divider */}
                    <div className="h-[1px] w-12 bg-white/10 mb-5 group-hover:w-full ease-out" />

                    <p className="text-white/40 text-sm md:text-base leading-relaxed font-medium group-hover:text-white/70 transition-colors duration-500 max-w-[95%]">
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

          <div className="relative flex flex-col gap-6 overflow-x-hidden w-full group/marquee py-4">
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#040810] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#040810] to-transparent z-20 pointer-events-none" />

            {/* Row 1: Moves Left */}
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: marqueeDuration }}
              className="flex whitespace-nowrap gap-6 px-3 items-center group-hover/marquee:[animation-play-state:paused]"
            >
              {[...stack, ...stack, ...stack, ...stack].map((item, i) => {
                const textColor = item.color.split(' ')[3];
                const bgColor = textColor.replace('text-', 'bg-');

                return (
                  <div
                    key={`r1-${i}`}
                    className={`group/stack relative flex flex-col justify-center px-8 py-7 rounded-3xl bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/5 hover:border-white/20 transition-all duration-300 shrink-0 w-[260px] md:w-[280px] shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden cursor-default hover:-translate-y-1`}
                  >
                    <div className={`absolute top-0 inset-x-0 h-[2px] opacity-20 group-hover/stack:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-current to-transparent ${textColor}`} />
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

            {/* Row 2: Moves Right */}
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: marqueeDuration }}
              className="flex whitespace-nowrap gap-6 px-3 items-center group-hover/marquee:[animation-play-state:paused]"
            >
              {[...stack, ...stack, ...stack, ...stack].map((item, i) => {
                // Reverse the item order for variety or just offset it by mapping backwards
                const revItem = stack[(stack.length - 1) - (i % stack.length)];
                const textColor = revItem.color.split(' ')[3];
                const bgColor = textColor.replace('text-', 'bg-');

                return (
                  <div
                    key={`r2-${i}`}
                    className={`group/stack relative flex flex-col justify-center px-8 py-7 rounded-3xl bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/5 hover:border-white/20 transition-all duration-300 shrink-0 w-[260px] md:w-[280px] shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden cursor-default hover:-translate-y-1`}
                  >
                    <div className={`absolute top-0 inset-x-0 h-[2px] opacity-20 group-hover/stack:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-current to-transparent ${textColor}`} />
                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] opacity-10 group-hover/stack:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2 ${bgColor}`} />
                    <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover/stack:opacity-100 transition-opacity duration-500" />

                    <span className={`text-xl md:text-2xl font-black tracking-tight ${textColor} drop-shadow-sm relative z-10 transition-transform duration-300 group-hover/stack:scale-[1.02] origin-left`}>
                      {revItem.name}
                    </span>
                    <span className="text-[10px] md:text-[11px] font-black text-slate-500 tracking-[0.25em] uppercase mt-2 relative z-10">
                      {revItem.sub}
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
        <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 mb-32">
          <motion.div {...fadeUp(0)} className="mb-14">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#F66C44] uppercase">Fundación y Logros</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-2">
              Bases Académicas<br />
              <span className="text-slate-500">& Certificaciones.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {education.map((ed, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="relative group flex">
                <div className="flex flex-col justify-between w-full p-8 md:p-10 rounded-[2.5rem] bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/5 hover:border-white/15 hover:bg-[#111111] transition-all duration-500 shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] overflow-hidden group-hover:-translate-y-1 relative min-h-[220px]">

                  {/* Subtle Background Glow */}
                  <div className={`absolute top-0 right-0 w-48 h-48 blur-[80px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none ${ed.bg}`} />

                  {/* Header: Period & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
                    <span className={`px-4 py-1.5 bg-[#050505] border border-white/10 rounded-full text-[10px] md:text-xs font-black tracking-[0.2em] uppercase ${ed.accent} shadow-inner`}>
                      {ed.period}
                    </span>

                    <GraduationCap className={`w-5 h-5 opacity-40 ${ed.accent}`} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-grow flex flex-col justify-center my-2">
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight mb-3 drop-shadow-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
                      {ed.title}
                    </h3>

                    <p className="text-white/50 text-sm md:text-base font-medium leading-relaxed">
                      {ed.institution}
                    </p>
                  </div>

                  {/* Bottom Footer: Status Badge for EGRESADO */}
                  {ed.status && (
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        Condición
                      </span>
                      <span className={`px-3 py-1 rounded-full border text-[10px] font-black tracking-widest uppercase flex items-center gap-1.5 ${ed.badge}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        {ed.status}
                      </span>
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

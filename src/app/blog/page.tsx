"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/lib/blogData";
import Link from "next/link";
import { ArrowUpRight, Clock, Briefcase, Code2, TrendingUp, ShoppingBag, Building2, Globe } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
  viewport: { once: true },
});

const careerItems = [
  {
    period: "Mayo 2025 — Actualidad",
    company: "Tarjeta Titanio S.A.",
    role: "Full Stack Developer Junior",
    desc: "Ciclo completo de desarrollo: análisis, arquitectura, implementación y documentación de sistemas internos.",
    stack: ["React", "Node.js", "MongoDB", "JavaScript"],
    color: "text-blue-400", dot: "bg-blue-400", border: "border-blue-500/20",
  },
  {
    period: "Marzo 2024 — Actualidad",
    company: "Tarjeta Titanio S.A.",
    role: "Data Analyst",
    desc: "Dashboards ejecutivos en Power BI y estrategias de marketing digital basadas en métricas de rendimiento.",
    stack: ["Power BI", "SQL Server", "Excel", "Power Query"],
    color: "text-emerald-400", dot: "bg-emerald-400", border: "border-emerald-500/20",
  },
  {
    period: "Ago 2023 — Dic 2024",
    company: "Malibu Styless",
    role: "Fundador & Full Stack Developer",
    desc: "E-commerce de indumentaria deportiva. Marca, estrategia de ventas, desarrollo web y marketing digital.",
    stack: ["E-Commerce", "React", "Marketing Digital", "WhatsApp API"],
    color: "text-violet-400", dot: "bg-violet-400", border: "border-violet-500/20",
  },
];

const categoryMeta: Record<string, { color: string; icon: any; label: string }> = {
  Fullstack:     { color: "from-violet-600 to-purple-700",   icon: Code2,       label: "Full Stack" },
  Frontend:      { color: "from-pink-500 to-rose-600",       icon: Globe,       label: "Frontend" },
  Backend:       { color: "from-cyan-600 to-slate-800",      icon: TrendingUp,  label: "Backend" },
  "Data":        { color: "from-emerald-500 to-teal-600",    icon: TrendingUp,  label: "Analytics" },
  Architecture:  { color: "from-amber-500 to-orange-600",    icon: Building2,   label: "Architecture" },
  Emprendimiento:{ color: "from-pink-500 to-red-600",        icon: ShoppingBag, label: "Emprendimiento" },
  Business:      { color: "from-amber-500 to-orange-600",    icon: Briefcase,   label: "Business" },
};

function getCategoryMeta(cat = "") {
  for (const key of Object.keys(categoryMeta)) {
    if (cat.includes(key)) return categoryMeta[key];
  }
  return { color: "from-slate-700 to-slate-900", icon: Globe, label: cat };
}

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-[#040810] text-white overflow-hidden">

      {/* ── AMBIENT GLOW ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-[550px] h-[550px] bg-indigo-600/7 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-32">

        {/* ══════════════════════════════════════════════
            HERO HEADER
        ══════════════════════════════════════════════ */}
        <motion.div {...fadeUp(0)} className="mb-24 md:mb-32">
          <span className="inline-flex items-center gap-2 mb-6 px-3.5 py-1 text-[10px] font-black tracking-[0.25em] text-indigo-400 uppercase bg-indigo-950/50 rounded-full border border-indigo-800/40">
            <Clock className="w-3 h-3" /> Trayectoria & Blog
          </span>

          <h1 className="text-[clamp(3rem,9vw,8.5rem)] font-black leading-[0.88] tracking-tighter text-white mb-8">
            Mi camino<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
              como dev.
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
            Más que artículos —{" "}
            <strong className="text-white">casos de estudio reales</strong>,
            decisiones técnicas documentadas y reflexiones sobre construir software con propósito comercial.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════════
            TRAYECTORIA PROFESIONAL — TIMELINE
        ══════════════════════════════════════════════ */}
        <section className="mb-28">
          <motion.div {...fadeUp(0)} className="mb-12">
            <span className="text-[10px] font-black tracking-[0.25em] text-slate-500 uppercase">Recorrido</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-2">
              Trayectoria<br />
              <span className="text-slate-500">Profesional.</span>
            </h2>
          </motion.div>

          {/* Vertical timeline */}
          <div className="relative pl-8 md:pl-14">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/30 to-transparent" />

            <div className="flex flex-col gap-10">
              {careerItems.map((item, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="relative">
                  {/* Dot */}
                  <div className={`absolute -left-[2.1rem] md:-left-[3.6rem] top-2 w-3.5 h-3.5 rounded-full ${item.dot} ring-4 ring-[#040810]`} />

                  <div className={`p-6 md:p-8 rounded-3xl bg-slate-900/50 border ${item.border} hover:bg-slate-900/80 transition-all duration-300 group`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <span className={`text-[9px] font-black tracking-[0.25em] uppercase ${item.color}`}>{item.period}</span>
                      <span className="text-[9px] font-black tracking-widest uppercase text-slate-600">{item.role}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-3">{item.company}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.stack.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-slate-800/80 border border-slate-700/50 rounded-lg text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            BLOG POSTS — BENTO CARD GRID
        ══════════════════════════════════════════════ */}
        <section>
          <motion.div {...fadeUp(0)} className="mb-12">
            <span className="text-[10px] font-black tracking-[0.25em] text-slate-500 uppercase">Publicaciones</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-2">
              Blog &<br />
              <span className="text-slate-500">Casos de Estudio.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {blogPosts.map((post, i) => {
              const meta = getCategoryMeta(post.category);
              const Icon = meta.icon;

              return (
                <motion.div key={post.slug} {...fadeUp(i * 0.07)}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col h-full rounded-3xl overflow-hidden border border-slate-800/60 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900/70 transition-all duration-400 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                  >
                    {/* Card header gradient */}
                    <div className={`relative h-44 md:h-52 bg-gradient-to-br ${meta.color} flex items-end p-7 overflow-hidden`}>
                      {/* Noise texture */}
                      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

                      {/* Category badge */}
                      <div className="relative z-10 flex items-center gap-2.5">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-black/30 backdrop-blur-sm rounded-full text-[9px] font-black tracking-[0.2em] uppercase text-white border border-white/10">
                          <Icon className="w-3 h-3" />
                          {meta.label}
                        </span>
                        <span className="px-3 py-1.5 bg-black/20 backdrop-blur-sm rounded-full text-[9px] font-bold text-white/70 border border-white/10">
                          {post.date}
                        </span>
                      </div>

                      {/* Decorative large icon */}
                      <Icon className="absolute -right-4 -bottom-4 w-28 h-28 text-white/8 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                    </div>

                    {/* Card body */}
                    <div className="flex flex-col flex-1 p-7">
                      <h2 className="text-lg md:text-xl font-bold text-white leading-snug mb-3 tracking-tight group-hover:text-slate-200 transition-colors line-clamp-3">
                        {post.title}
                      </h2>
                      <p className="text-slate-500 text-sm leading-relaxed flex-1 line-clamp-3">
                        {post.subtitle}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-white transition-colors">
                        <span>Leer caso de estudio</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}
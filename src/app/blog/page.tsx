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
    <main className="relative min-h-screen bg-[#040810] text-white overflow-hidden -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-24">

      {/* ── AMBIENT GLOW ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full pt-28 pb-32">

        {/* ══════════════════════════════════════════════
            HERO HEADER
        ══════════════════════════════════════════════ */}
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 mb-24 md:mb-32">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 text-[11px] font-black tracking-[0.25em] text-indigo-400 uppercase bg-indigo-950/50 rounded-full border border-indigo-800/40 backdrop-blur-md">
              <Code2 className="w-3.5 h-3.5" /> Bitácora Técnica
            </span>

            <h1 className="text-[clamp(3.5rem,8.5vw,9rem)] font-black leading-[0.85] tracking-tighter text-white mb-10">
              Ingeniería<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
                Documentada.
              </span>
            </h1>

            <p className="text-slate-300 text-xl md:text-2xl leading-relaxed max-w-3xl font-light">
              Más que artículos: son <strong className="text-white font-bold">casos de estudio reales</strong>. 
              Decisiones de arquitectura, migraciones de bases de datos y la intersección exacta entre código limpio y rentabilidad comercial.
            </p>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════
            TRAYECTORIA PROFESIONAL — PANORAMIC CARDS
        ══════════════════════════════════════════════ */}
        <section className="mb-32 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div {...fadeUp(0)} className="mb-14">
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">Carrera</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-2">
              Trayectoria<br />
              <span className="text-slate-500">Profesional.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {careerItems.map((item, i) => (
              <motion.div 
                key={i} 
                {...fadeUp(i * 0.1)} 
                className="group relative flex flex-col md:flex-row md:items-center gap-8 md:gap-12 p-8 md:p-12 rounded-[2rem] bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-500 overflow-hidden shadow-xl"
              >
                {/* Background glow on hover */}
                <div className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-1000 ${item.dot.replace('bg-', 'bg-')}`} />

                {/* Left side: Period & Role */}
                <div className="w-full md:w-[35%] shrink-0">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`w-2 h-2 rounded-full ${item.dot} shadow-[0_0_10px_currentColor]`} />
                    <span className={`text-[11px] font-black tracking-[0.2em] uppercase ${item.color}`}>
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2">{item.company}</h3>
                  <span className="text-sm md:text-base font-bold text-slate-400 tracking-wide">{item.role}</span>
                </div>

                {/* Divider (desktop only) */}
                <div className="hidden md:block w-px h-24 bg-slate-800" />

                {/* Right side: Desc & Stack */}
                <div className="flex-1">
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 font-light">{item.desc}</p>
                  <div className="flex flex-wrap gap-2.5">
                    {item.stack.map((t) => (
                      <span key={t} className="px-3.5 py-1.5 text-[10px] font-black tracking-widest uppercase bg-black/40 border border-slate-800 rounded-lg text-slate-300 group-hover:border-slate-600 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            BLOG POSTS — HERO POST + GRID
        ══════════════════════════════════════════════ */}
        <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div {...fadeUp(0)} className="mb-14">
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">Publicaciones</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-2">
              Casos de<br />
              <span className="text-slate-500">Estudio.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {/* HERO POST (First post) */}
            {blogPosts.length > 0 && (() => {
              const post = blogPosts[0];
              const meta = getCategoryMeta(post.category);
              const Icon = meta.icon;
              return (
                <motion.div {...fadeUp(0)}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group relative flex flex-col md:flex-row rounded-[2.5rem] overflow-hidden border border-slate-800/80 hover:border-slate-600 bg-slate-900/60 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] hover:-translate-y-1"
                  >
                    <div className={`w-full md:w-2/5 min-h-[300px] relative bg-gradient-to-br ${meta.color} flex items-center justify-center overflow-hidden`}>
                      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
                      <Icon className="absolute -right-12 -bottom-12 w-64 h-64 text-white/10 rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-700" />
                      <div className="relative z-10 w-24 h-24 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    <div className="w-full md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-800 rounded-full text-[10px] font-black tracking-[0.2em] uppercase text-slate-300 border border-slate-700">
                          {meta.label}
                        </span>
                        <span className="text-[11px] font-bold text-slate-500">{post.date}</span>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6 group-hover:text-blue-200 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-400 text-lg leading-relaxed mb-10 font-light">
                        {post.subtitle}
                      </p>
                      <div className="flex items-center gap-3 text-sm font-black tracking-widest uppercase text-white group-hover:text-blue-400 transition-colors">
                        <span>Leer caso de estudio completo</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })()}

            {/* REST OF POSTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.slice(1).map((post, i) => {
                const meta = getCategoryMeta(post.category);
                const Icon = meta.icon;

                return (
                  <motion.div key={post.slug} {...fadeUp(i * 0.07)}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col h-full rounded-[2rem] overflow-hidden border border-slate-800/60 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-400 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                      <div className={`relative h-48 md:h-56 bg-gradient-to-br ${meta.color} flex items-end p-8 overflow-hidden`}>
                        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
                        
                        <div className="relative z-10 flex items-center gap-3">
                          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-black/30 backdrop-blur-md rounded-full text-[10px] font-black tracking-[0.2em] uppercase text-white border border-white/10">
                            <Icon className="w-3 h-3" />
                            {meta.label}
                          </span>
                          <span className="px-3 py-1.5 bg-black/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white/70 border border-white/10">
                            {post.date}
                          </span>
                        </div>
                        <Icon className="absolute -right-6 -bottom-6 w-32 h-32 text-white/10 rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-500" />
                      </div>

                      <div className="flex flex-col flex-1 p-8">
                        <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-4 tracking-tight group-hover:text-slate-200 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-slate-400 text-base leading-relaxed flex-1 font-light">
                          {post.subtitle}
                        </p>
                        <div className="mt-8 flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-slate-500 group-hover:text-white transition-colors">
                          <span>Leer artículo</span>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
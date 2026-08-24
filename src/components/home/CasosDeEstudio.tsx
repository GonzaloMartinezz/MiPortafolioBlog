"use client";

import React from "react";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/blogData";
import Link from "next/link";
import { ArrowUpRight, Briefcase, Code2, TrendingUp, ShoppingBag, Building2, Globe } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
  viewport: { once: true },
});

const categoryMeta: Record<string, { color: string; icon: any; label: string }> = {
  Fullstack:     { color: "from-[#F66C44] to-[#C91A00]",   icon: Code2,       label: "Full Stack" },
  Frontend:      { color: "from-[#FF5E00] to-[#8A0000]",   icon: Globe,       label: "Frontend" },
  Backend:       { color: "from-[#C91A00] to-[#5A0000]",   icon: TrendingUp,  label: "Backend" },
  "Data":        { color: "from-[#FCD100] to-[#F66C44]",   icon: TrendingUp,  label: "Analytics" },
  Architecture:  { color: "from-[#2A0800] to-[#0B0B0B]",   icon: Building2,   label: "Architecture" },
  Emprendimiento:{ color: "from-[#F66C44] to-[#FF5E00]",   icon: ShoppingBag, label: "Emprendimiento" },
  Business:      { color: "from-[#C91A00] to-[#2A0800]",   icon: Briefcase,   label: "Business" },
};

function getCategoryMeta(cat = "") {
  for (const key of Object.keys(categoryMeta)) {
    if (cat.includes(key)) return categoryMeta[key];
  }
  return { color: "from-slate-700 to-slate-900", icon: Globe, label: cat };
}

export default function CasosDeEstudio() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-20">
      <motion.div {...fadeUp(0)} className="mb-14 text-center">
        <span className="text-[10px] font-black tracking-[0.3em] text-[#F66C44] uppercase">Publicaciones</span>
        <h2 className="text-3xl md:text-5xl font-black text-white mt-2 uppercase tracking-tight">
          Casos de <span className="text-[#F66C44]">Estudio.</span>
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
                className="group relative flex flex-col md:flex-row rounded-[2.5rem] overflow-hidden border border-[#1C1C1E] hover:border-[#F66C44]/40 bg-[#0B0B0B] transition-all duration-500 shadow-2xl hover:shadow-[0_20px_60px_rgba(246,108,68,0.15)] hover:-translate-y-1"
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
                    <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#1C1C1E] rounded-full text-[10px] font-black tracking-[0.2em] uppercase text-white/80 border border-white/10">
                      {meta.label}
                    </span>
                    <span className="text-[11px] font-bold text-white/50">{post.date}</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl lg:text-4xl font-black text-white leading-[1.1] tracking-tight mb-4 group-hover:text-[#FCD100] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed mb-10 font-light">
                    {post.subtitle}
                  </p>
                  <div className="flex items-center gap-3 text-sm font-black tracking-widest uppercase text-white group-hover:text-[#F66C44] transition-colors">
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
                  className="group flex flex-col h-full rounded-[2rem] overflow-hidden border border-[#1C1C1E] hover:border-[#F66C44]/40 bg-[#0B0B0B] hover:bg-[#111111] transition-all duration-400 shadow-xl hover:shadow-2xl hover:-translate-y-1"
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
                    <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-white leading-snug mb-3 tracking-tight group-hover:text-[#FCD100] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/60 text-base leading-relaxed flex-1 font-light">
                      {post.subtitle}
                    </p>
                    <div className="mt-8 flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-white/40 group-hover:text-[#F66C44] transition-colors">
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
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, Copy, Check, MapPin, MessageCircle,
  ArrowUpRight, Send, Zap
} from "lucide-react";

// Brand icons removed from lucide-react — inline SVG replacements
const Github = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const Linkedin = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
});

const socials = [
  {
    name: "LinkedIn",
    handle: "@gonzalomartinezz2004",
    url: "https://www.linkedin.com/in/gonzalomartinezz2004/",
    icon: Linkedin,
    color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20",
    glow: "hover:shadow-blue-500/10",
    desc: "Red profesional",
  },
  {
    name: "GitHub",
    handle: "@GonzaloMartinezz",
    url: "https://github.com/GonzaloMartinezz",
    icon: Github,
    color: "text-white", bg: "bg-white/10", border: "border-white/10",
    glow: "hover:shadow-white/5",
    desc: "Repositorios & código",
  },
  {
    name: "WhatsApp",
    handle: "+54 381 624 2482",
    url: "https://wa.me/543816242482",
    icon: MessageCircle,
    color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20",
    glow: "hover:shadow-emerald-500/10",
    desc: "Mensaje directo",
  },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = "gonzalomartinezzz04@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <main className="relative min-h-screen bg-[#040810] text-white overflow-hidden -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-24">

      {/* ── AMBIENT BACKGROUND ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-600/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-32">

        {/* ══════════════════════════════════════════════
            HERO HEADER
        ══════════════════════════════════════════════ */}
        <div className="mb-20 md:mb-28">
          <motion.div {...fadeUp(0)}>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full bg-slate-900/80 border border-emerald-800/40 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-emerald-400">
                Disponible para nuevos proyectos
              </span>
            </div>
          </motion.div>

          <motion.h1
            {...fadeUp(0.05)}
            className="text-[clamp(4rem,12vw,12rem)] font-black leading-[0.88] tracking-tighter text-white mb-8 mt-4"
          >
            Hablemos<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.1)} className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-3">
            Estoy abierto a nuevos proyectos, colaboraciones y oportunidades laborales.
            Escribime y{" "}
            <strong className="text-white">hagámosla realidad.</strong>
          </motion.p>

          <motion.div {...fadeUp(0.15)} className="flex items-center gap-2 text-slate-600 text-sm">
            <MapPin className="w-3.5 h-3.5 text-red-400" />
            <span>Tucumán, Argentina 🇦🇷</span>
            <span className="mx-2 text-slate-800">·</span>
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Respondo en menos de 24 hs</span>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════
            MAIN CONTACT GRID
        ══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

          {/* ── EMAIL CARD (spans 3 cols) ── */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-3">
            <div className="relative h-full flex flex-col gap-8 p-8 md:p-10 rounded-[2rem] bg-slate-900/50 border border-slate-800/60 overflow-hidden shadow-2xl">

              {/* Top accent glow line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

              {/* Header */}
              <div>
                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-slate-500 mb-2 block">
                  Correo directo
                </span>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">
                  Enviame un mensaje
                </h2>
              </div>

              {/* Email display */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 p-5 rounded-2xl bg-slate-800/60 border border-slate-700/50">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                  <span className="text-slate-200 text-sm md:text-base font-mono font-bold tracking-tight break-all flex-1">
                    {email}
                  </span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleCopy}
                  className="group flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-slate-800/80 border border-slate-700/50 hover:border-blue-500/40 hover:bg-slate-800 text-slate-300 hover:text-white transition-all duration-300 font-bold text-sm"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="check"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="flex items-center gap-2 text-emerald-400"
                      >
                        <Check className="w-4 h-4" /> ¡Copiado!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        Copiar email
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>

                <a
                  href={`mailto:${email}`}
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  Enviar email
                </a>
              </div>

              {/* Bottom ambient decoration */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-600/5 rounded-full blur-2xl pointer-events-none" />
            </div>
          </motion.div>

          {/* ── SOCIAL LINKS (spans 2 cols) ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.name}
                  {...fadeUp(0.25 + i * 0.08)}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-slate-900/50 border ${s.border} hover:bg-slate-900/80 shadow-xl ${s.glow} hover:shadow-2xl transition-all duration-350 hover:-translate-y-0.5`}
                >
                  <div className={`p-3 rounded-2xl border ${s.bg} ${s.border} ${s.color} shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-black text-base text-white tracking-tight">{s.name}</h4>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest truncate">{s.desc}</p>
                    <p className={`text-xs font-mono mt-0.5 truncate ${s.color} opacity-70`}>{s.handle}</p>
                  </div>

                  <ArrowUpRight className={`w-4 h-4 shrink-0 ${s.color} opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`} />
                </motion.a>
              );
            })}
          </div>

        </div>

        {/* ══════════════════════════════════════════════
            BOTTOM CTA STRIP
        ══════════════════════════════════════════════ */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-slate-900/40 border border-slate-800/50"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-1">
              ¿Querés ver el código?
            </h3>
            <p className="text-slate-500 text-sm">Todos mis proyectos están disponibles públicamente en GitHub.</p>
          </div>
          <a
            href="https://github.com/GonzaloMartinezz"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-7 py-4 rounded-2xl bg-white text-slate-950 hover:bg-slate-100 font-black text-sm tracking-wide transition-all duration-300 shadow-xl hover:scale-[1.03] shrink-0 z-10"
          >
            <Github className="w-5 h-5" />
            Ver GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>

      {/* ══════════════════════════════════════════════
          INFINITE MARQUEE FOOTER
      ══════════════════════════════════════════════ */}
      <div className="relative mt-20 md:mt-32 w-[100vw] overflow-hidden bg-blue-600 py-6 sm:py-8 border-y border-blue-500 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex whitespace-nowrap w-fit items-center"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase mx-6 sm:mx-10">
                DISPONIBLE PARA NUEVOS PROYECTOS
              </span>
              <span className="text-blue-300">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

    </main>
  );
}
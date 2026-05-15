"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaCopy, FaCheck, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";
import Tilt from 'react-parallax-tilt';

export default function ContactPage() {
    const [copied, setCopied] = useState(false);
    const email = "gonzalomartinezzz04@gmail.com";

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden px-4 pt-24 pb-20 bg-slate-50 dark:bg-slate-950"
            onMouseMove={handleMouseMove}
        >

            {/* Background Effects */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'url("/noise.png")' }}></div>
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
                }}
            />
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-blue-400/15 dark:bg-blue-400/10 rounded-full blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-normal"></div>
                <div className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-violet-400/15 dark:bg-violet-400/10 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-normal"></div>
            </div>

            {/* Status Badge */}
            <div className="mb-6 w-full flex justify-center">
                <Reveal>
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/50 shadow-sm hover:shadow-md transition-shadow cursor-default transform hover:scale-105 duration-300">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wider uppercase">Disponible para colaborar</span>
                    </div>
                </Reveal>
            </div>

            {/* Page Title */}
            <div className="text-center mb-10 max-w-2xl relative z-10">
                <Reveal delay={0.1}>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                        ¿Tenés una idea?<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 animate-gradient-x">
                            Hagámosla realidad.
                        </span>
                    </h1>
                </Reveal>
                <Reveal delay={0.15}>
                    <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                        Estoy abierto a nuevos proyectos, colaboraciones y oportunidades laborales. Escribime y conversemos.
                    </p>
                </Reveal>
            </div>

            {/* Main Grid */}
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-20 mb-12 items-stretch">

                {/* Email Card */}
                <div className="lg:col-span-2 h-full">
                    <Reveal width="100%" delay={0.2}>
                        <Tilt
                            glareEnable={true}
                            glareMaxOpacity={0.1}
                            scale={1.01}
                            transitionSpeed={2500}
                            className="h-full"
                        >
                            <div className="h-full w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-2xl shadow-blue-900/10 dark:shadow-blue-400/5 border border-white/50 dark:border-slate-800/50 flex flex-col items-center justify-center text-center gap-8 min-h-[320px]">

                                <div className="flex flex-col items-center gap-4">
                                    <div className="p-4 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-full shadow-inner ring-4 ring-white dark:ring-slate-800 animate-pulse-slow">
                                        <FaEnvelope size={32} />
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Correo directo</span>
                                        <h3 className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white break-all font-mono tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-text selection:bg-blue-100 dark:selection:bg-blue-900/40">
                                            {email}
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
                                    <button
                                        onClick={handleCopy}
                                        className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group shadow-sm hover:shadow-md"
                                    >
                                        <AnimatePresence mode="wait">
                                            {copied ? (
                                                <motion.div
                                                    key="check"
                                                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    <FaCheck className="text-emerald-500" />
                                                    <span className="font-bold text-emerald-600 dark:text-emerald-400">¡Copiado!</span>
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="copy"
                                                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    <FaCopy className="group-hover:scale-110 transition-transform" />
                                                    <span className="font-bold">Copiar email</span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </button>

                                    <a
                                        href={`mailto:${email}`}
                                        className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 group"
                                    >
                                        <FaPaperPlane className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                        <span className="font-bold">Enviar email</span>
                                    </a>
                                </div>
                            </div>
                        </Tilt>
                    </Reveal>
                </div>

                {/* Social Links */}
                <div className="flex flex-col gap-4 h-full justify-center">
                    {[
                        { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/gonzalomartinezz2004/", color: "text-blue-700 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-950/40", border: "hover:border-blue-200 dark:hover:border-blue-700", subtitle: "Red profesional" },
                        { name: "GitHub", icon: FaGithub, url: "https://github.com/GonzaloMartinezz", color: "text-slate-900 dark:text-white", bg: "bg-slate-100 dark:bg-slate-800", border: "hover:border-slate-400 dark:hover:border-slate-600", subtitle: "Repositorios & código" },
                        { name: "WhatsApp", icon: FaWhatsapp, url: "https://wa.me/543816242482", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/40", border: "hover:border-emerald-300 dark:hover:border-emerald-700", subtitle: "Mensaje directo" }
                    ].map((social, idx) => (
                        <motion.a
                            key={idx}
                            href={social.url}
                            target="_blank" rel="noopener noreferrer"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (idx * 0.1), duration: 0.5 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}

                            className={`flex items-center gap-4 p-5 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-[1.5rem] border border-white/50 dark:border-slate-800/50 shadow-sm ${social.border} hover:shadow-xl transition-colors duration-300 group h-full`}
                        >
                            <div className={`p-3.5 ${social.bg} ${social.color} rounded-2xl shadow-inner`}>
                                <social.icon size={26} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">{social.name}</h4>
                                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">{social.subtitle}</p>
                            </div>

                            {/* Arrow */}
                            <motion.div
                                className="ml-auto text-slate-300 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400"
                                initial={{ opacity: 0, x: -10 }}
                                whileHover={{ opacity: 1, x: 0 }}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </motion.div>
                        </motion.a>
                    ))}
                </div>

            </div>

            {/* Location Badge */}
            <Reveal delay={0.6}>
                <div className="group flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all cursor-default">
                    <div className="relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <FaMapMarkerAlt className="text-red-500 relative z-10" />
                    </div>
                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Tucumán, Argentina 🇦🇷</span>
                </div>
            </Reveal>

        </div>
    );
}
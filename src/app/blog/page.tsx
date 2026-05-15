"use client";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/blogData";
import Link from "next/link";
import { FaArrowRight, FaTag, FaClock } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";
import Timeline from "@/components/home/Timeline";
import Tilt from 'react-parallax-tilt';

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="flex-1 w-full pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-4 md:px-12">

        {/* HEADER */}
        <section className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-16 relative z-10">
          <Reveal>
            <div className="inline-block px-3 py-1 mb-3 sm:mb-4 text-[11px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/40 rounded-full border border-blue-100 dark:border-blue-800/40">
              Experiencia & Trayectoria
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-[var(--font-display)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight px-2 tracking-tight">
              Documentando mi camino<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                como desarrollador
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-2 max-w-xl mx-auto">
              Más que artículos: <strong className="text-slate-700 dark:text-slate-300">casos de estudio reales</strong>, aprendizajes prácticos y reflexiones sobre el proceso de construir software con propósito.
            </p>
          </Reveal>
        </section>

        {/* TRAYECTORIA SECTION */}
        <section className="py-16 sm:py-20 md:py-24 px-3 sm:px-4 bg-gradient-to-b from-white via-slate-50 to-blue-50/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-t border-slate-100 dark:border-slate-800 rounded-3xl">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <span className="inline-block px-3 py-1 mb-4 text-[11px] font-bold tracking-[0.2em] text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/40 rounded-full border border-indigo-100 dark:border-indigo-800/40">
                Recorrido
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 sm:mb-6 md:mb-8 flex items-center gap-2 sm:gap-4 tracking-tight">
                <span className="text-blue-600 dark:text-blue-400">/</span> Mi trayectoria profesional
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mb-10 sm:mb-12 md:mb-16 leading-relaxed">
                Cada etapa de mi carrera profesional representa un salto de crecimiento. Desde mis primeros pasos hasta los proyectos que desarrollo hoy.
              </p>
            </Reveal>
            <Timeline />
          </div>
        </section>

        {/* BLOG POSTS */}
        <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <span className="inline-block px-3 py-1 mb-4 text-[11px] font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/40 rounded-full border border-emerald-100 dark:border-emerald-800/40">
                Publicaciones
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 sm:mb-6 md:mb-8 flex items-center gap-2 sm:gap-4 tracking-tight">
                <span className="text-blue-600 dark:text-blue-400">/</span> Blog & Casos de Estudio
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mb-10 sm:mb-12 md:mb-16 leading-relaxed">
                Análisis detallados de mis proyectos, decisiones técnicas y lecciones aprendidas en el camino del desarrollo profesional.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-3 sm:px-4 pb-12 sm:pb-16 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.08}
                scale={1.02}
                transitionSpeed={2500}
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                className="h-full"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative flex flex-col h-full bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className={`h-48 md:h-64 w-full relative overflow-hidden bg-gradient-to-br ${(post.category ?? "").includes("Data") ? "from-emerald-500 to-teal-500" :
                      (post.category ?? "").includes("Emprendimiento") ? "from-pink-500 to-red-500" :
                        (post.category ?? "").includes("Business") ? "from-amber-500 to-orange-500" :
                          (post.category ?? "").includes("Backend") ? "from-cyan-500 to-slate-900" :
                            (post.category ?? "").includes("Software") ? "from-blue-700 to-blue-600" :
                              (post.category ?? "").includes("Fullstack") ? "from-violet-500 to-purple-600" :
                                (post.category ?? "").includes("Frontend") ? "from-purple-500 to-pink-500" :
                                  (post.category ?? "").includes("Proyectos") ? "from-yellow-400 to-yellow-500" :
                                    "from-slate-700 to-slate-900"
                    }`}>
                    <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')]"></div>

                    <div className="absolute top-6 left-6 z-10">
                      <span className="px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                        {post.category}
                      </span>
                    </div>

                    <div className="absolute bottom-[-20px] right-[-20px] text-white/15 rotate-12 transform group-hover:rotate-0 transition-transform duration-500">
                      <FaTag size={180} />
                    </div>
                  </div>

                  <div className="flex-1 p-8 md:p-10 flex flex-col">
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-400 dark:text-slate-500 mb-4 uppercase tracking-wider">
                      <span className="flex items-center gap-1"><FaClock /> Caso de estudio</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                      {post.title}
                    </h2>

                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 flex-1 text-sm md:text-base">
                      {post.subtitle}
                    </p>

                    <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold group-hover:translate-x-2 transition-transform text-sm">
                      <span>Leer artículo completo</span>
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <FaArrowRight size={11} />
                      </div>
                    </div>
                  </div>
                </Link>
              </Tilt>
            </motion.div>
          ))}
        </section>

      </div>
    </div>
  );
}
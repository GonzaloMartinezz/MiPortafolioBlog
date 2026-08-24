"use client";
import { blogPosts } from "@/lib/blogData";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaCalendar, FaTag, FaLaptopCode, FaClock, FaStar } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export default function BlogPost() {
  const { slug } = useParams();
  
  // Buscar el post correspondiente
  const post = blogPosts.find((p) => p.slug === slug);

  // Si no existe, mostrar error 404
  if (!post) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">Post no encontrado 😕</h1>
            <Link href="/blog" className="text-blue-600 hover:underline text-sm md:text-base">Volver al Blog</Link>
        </div>
    );
  }

  return (
    <article className="min-h-screen bg-slate-50 pb-12 sm:pb-16 md:pb-20">

      {/* HEADER HERO */}
      <div className="relative w-full min-h-[40vh] sm:min-h-[45vh] md:h-[50vh] bg-slate-900 flex flex-col items-center justify-center text-center px-3 sm:px-4 overflow-hidden pt-20">
        {/* Fondo con gradiente y ruido */}
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 opacity-90"></div>

        <div className="relative z-10 max-w-4xl w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="inline-block px-2.5 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-6 text-[10px] sm:text-xs font-bold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20"
            >
                {post.category}
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight whitespace-pre-line"
            >
                {post.title}
            </motion.h1>

            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 text-slate-300 font-medium text-xs sm:text-sm md:text-base"
            >
                <div className="flex items-center gap-2">
                    <FaCalendar className="text-blue-400" />
                    <span>{post.date}</span>
                </div>
                {post.duration && (
                  <div className="flex items-center gap-2">
                      <FaClock className="text-green-400" />
                      <span>{post.duration}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                    <FaLaptopCode className="text-purple-400" />
                    <span>{post.role}</span>
                </div>
                {post.rating && (
                  <div className="flex items-center gap-1.5 bg-white/10 px-2 py-1 rounded-full border border-white/5">
                      <FaStar className="text-yellow-400 w-3 h-3" />
                      <span className="text-yellow-400 font-bold">{post.rating}.0</span>
                  </div>
                )}
            </motion.div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-6 -mt-16 sm:-mt-20 relative z-20">
        
        {/* Intro Card */}
        <Reveal>
            <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-slate-100 mb-8 sm:mb-12">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 font-medium leading-relaxed">
                    {post.subtitle}
                </p>
                
                {/* Tech Stack Tags */}
                {post.technologies && (
                  <div className="mt-4 sm:mt-6 md:mt-8 flex flex-wrap gap-1.5 sm:gap-2">
                      {post.technologies.map((tech) => (
                          <span key={tech} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                              {tech}
                          </span>
                      ))}
                  </div>
                )}
            </div>
        </Reveal>

        {/* Storytelling Sections */}
        <div className="space-y-6 sm:space-y-8 md:space-y-12 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">

            <Reveal delay={0.1}>
                <section>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4 flex items-center gap-2 sm:gap-3">
                        🎯 El Desafío
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base whitespace-pre-line">{post.content.challenge}</p>
                </section>
            </Reveal>

            <Reveal delay={0.2}>
                <section>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4 flex items-center gap-2 sm:gap-3">
                        💡 La Solución
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base whitespace-pre-line leading-relaxed">{post.content.solution}</p>
                </section>
            </Reveal>

            <Reveal delay={0.3}>
                <section>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4 flex items-center gap-2 sm:gap-3">
                        🚀 El Resultado
                    </h2>
                    <div className="p-3 sm:p-4 md:p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl italic text-slate-700 text-xs sm:text-sm md:text-base whitespace-pre-line">
                        {post.content.results}
                    </div>
                </section>
            </Reveal>

        </div>

        {/* Botón Volver */}
        <div className="mt-12 sm:mt-16 md:mt-20 border-t border-slate-200 pt-6 sm:pt-8 md:pt-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors group text-xs sm:text-sm md:text-base">
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform w-3 h-3 sm:w-4 sm:h-4" />
                Volver al Portfolio
            </Link>
        </div>

      </div>
    </article>
  );
}
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
        <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-center px-4 font-sans">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Post no encontrado 😕</h1>
            <Link href="/#casos-de-estudio" className="text-[#F66C44] hover:underline text-sm md:text-base tracking-widest uppercase text-[10px] font-bold">Volver a Casos de Estudio</Link>
        </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#050505] pb-12 sm:pb-16 md:pb-20 font-sans selection:bg-[#F66C44]/30 selection:text-white">

      {/* HEADER HERO */}
      <div className="relative w-full min-h-[45vh] sm:min-h-[50vh] md:h-[55vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-24 border-b border-white/5 bg-[#0A0A0A]">
        {/* Glowing Decorative Blobs */}
        <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-[#F66C44]/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 left-[10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMTBoNDB2MUgweiIgZmlsbD0icmdiYSgyNTUsIDI1NSLCAyNTUsIDAuMDUpIi8+CjxwYXRoIGQ9Ik0xMCAwaDF2NDBoLTF6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+Cjwvc3ZnPg==')] opacity-30"></div>

        <div className="relative z-10 max-w-5xl w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="inline-flex px-4 py-1.5 mb-6 text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#F66C44] uppercase bg-[#F66C44]/10 rounded-full border border-[#F66C44]/20 items-center justify-center"
            >
                {post.category}
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter"
            >
                {post.title}
            </motion.h1>

            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-white/50 font-medium text-xs sm:text-sm uppercase tracking-widest"
            >
                <div className="flex items-center gap-2">
                    <FaCalendar className="text-[#F66C44]/70" />
                    <span>{post.date}</span>
                </div>
                {post.duration && (
                  <div className="flex items-center gap-2">
                      <FaClock className="text-[#F66C44]/70" />
                      <span>{post.duration}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                    <FaLaptopCode className="text-[#F66C44]/70" />
                    <span>{post.role}</span>
                </div>
                {post.rating && (
                  <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      <FaStar className="text-[#fbbf24] w-3 h-3" />
                      <span className="text-[#fbbf24] font-bold">{post.rating}.0</span>
                  </div>
                )}
            </motion.div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 -mt-16 sm:-mt-24 relative z-20">
        
        {/* Intro Card */}
        <Reveal>
            <div className="bg-[#111111]/95 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/10 mb-12 sm:mb-16 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F66C44]/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-[#F66C44]/10 transition-colors duration-700"></div>
                
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium leading-relaxed relative z-10">
                    {post.subtitle}
                </p>
                
                {/* Tech Stack Tags */}
                {post.technologies && (
                  <div className="mt-8 flex flex-wrap gap-2 relative z-10">
                      {post.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1.5 bg-[#1A1A1A] text-white/60 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] border border-white/5 hover:border-white/20 transition-colors">
                              {tech}
                          </span>
                      ))}
                  </div>
                )}
            </div>
        </Reveal>

        {/* Storytelling Sections */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20 text-base sm:text-lg text-white/60 leading-[1.8] font-light">

            <Reveal delay={0.1}>
                <section>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 flex items-center gap-4 tracking-tight">
                        <span className="text-[#F66C44]">01.</span> El Desafío
                    </h2>
                    <p className="whitespace-pre-line text-white/60">{post.content.challenge}</p>
                </section>
            </Reveal>

            <Reveal delay={0.2}>
                <section>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 flex items-center gap-4 tracking-tight">
                        <span className="text-[#F66C44]">02.</span> La Solución
                    </h2>
                    <p className="whitespace-pre-line text-white/60">{post.content.solution}</p>
                </section>
            </Reveal>

            <Reveal delay={0.3}>
                <section>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 flex items-center gap-4 tracking-tight">
                        <span className="text-[#F66C44]">03.</span> El Resultado
                    </h2>
                    <div className="p-6 sm:p-8 bg-[#F66C44]/[0.03] border border-[#F66C44]/20 rounded-3xl text-white/80 text-base sm:text-lg whitespace-pre-line relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#F66C44]"></div>
                        {post.content.results}
                    </div>
                </section>
            </Reveal>

        </div>

        {/* Botón Volver */}
        <div className="mt-20 sm:mt-24 border-t border-white/5 pt-10 flex justify-center">
            <Link href="/#casos-de-estudio" className="inline-flex items-center gap-3 text-white/40 hover:text-[#F66C44] text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] transition-colors group px-6 py-3 rounded-full hover:bg-white/5">
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform w-3 h-3" />
                Volver a Proyectos
            </Link>
        </div>

      </div>
    </article>
  );
}
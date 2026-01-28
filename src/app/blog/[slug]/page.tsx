"use client";
import { blogPosts } from "@/lib/blogData";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaCalendar, FaTag, FaLaptopCode } from "react-icons/fa";
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
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Post no encontrado 😕</h1>
            <Link href="/blog" className="text-blue-600 hover:underline">Volver al Blog</Link>
        </div>
    );
  }

  return (
    <article className="min-h-screen bg-slate-50 pb-20">
      
      {/* HEADER HERO */}
      <div className="relative w-full h-[50vh] bg-slate-900 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Fondo con gradiente y ruido */}
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 opacity-90"></div>
        
        <div className="relative z-10 max-w-4xl">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20"
            >
                {post.category}
            </motion.div>
            
            <motion.h1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="font-display text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
            >
                {post.title}
            </motion.h1>

            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center items-center gap-6 text-slate-300 font-medium text-sm md:text-base"
            >
                <div className="flex items-center gap-2">
                    <FaCalendar className="text-blue-400" />
                    <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaLaptopCode className="text-purple-400" />
                    <span>{post.role}</span>
                </div>
            </motion.div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-3xl mx-auto px-6 -mt-20 relative z-20">
        
        {/* Intro Card */}
        <Reveal>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 mb-12">
                <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
                    {post.subtitle}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                    {post.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </Reveal>

        {/* Storytelling Sections */}
        <div className="space-y-12 text-lg text-slate-600 leading-relaxed">
            
            <Reveal delay={0.1}>
                <section>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                        🎯 El Desafío
                    </h2>
                    <p>{post.content.challenge}</p>
                </section>
            </Reveal>

            <Reveal delay={0.2}>
                <section>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                        💡 La Solución
                    </h2>
                    <p>{post.content.solution}</p>
                </section>
            </Reveal>

            <Reveal delay={0.3}>
                <section>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                        🚀 El Resultado
                    </h2>
                    <div className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl italic text-slate-700">
                        {post.content.result}
                    </div>
                </section>
            </Reveal>

        </div>

        {/* Botón Volver */}
        <div className="mt-20 border-t border-slate-200 pt-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors group">
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                Volver al Portfolio
            </Link>
        </div>

      </div>
    </article>
  );
}
"use client";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/blogData"; // 1. Importamos los datos reales
import Link from "next/link";
import { FaArrowRight, FaTag, FaClock } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";
import Tilt from 'react-parallax-tilt';

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <main className="flex-1 w-full pt-24 pb-20 px-4 md:px-12">
        
        {/* HEADER */}
        <section className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <Reveal>
                <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
                    Mi Trayectoria Profesional.
                </div>
            </Reveal>
            <Reveal delay={0.1}>
                <h1 className="font-display text-6xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                    Construyendo<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                        mi identidad profesional.
                    </span>
                </h1>
            </Reveal>
            <Reveal delay={0.2}>
                <p className="text-slate-500 text-lg leading-relaxed">
                     Más que simples posts, aquí documento mis <strong> Casos de Estudio y trabajos</strong> reales.Construyendo dia a dia mi identidad y poder compartir mis aprendizajes en el camino.
                </p>
            </Reveal>
        </section>

      {/* GRID DE HISTORIAS */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
                // CAMBIO: Usamos motion.div en lugar de Reveal para evitar el corte (overflow)
                <motion.div 
                    key={post.slug}
                    // Animación de entrada igual a la de Reveal pero sin cortar
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                >
                    <Tilt
                        glareEnable={true} 
                        glareMaxOpacity={0.1} 
                        scale={1.02} 
                        transitionSpeed={2500}
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                        className="h-full"
                    >
                        <Link 
                            href={`/blog/${post.slug}`}
                            className="group relative flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            {/* LOGICA DE GRADIENTES */}
                            <div className={`h-48 md:h-64 w-full relative overflow-hidden bg-gradient-to-br ${
                                // Colores según categoría o palabras clave
                                post.category.includes("Data") ? "from-emerald-500 to-teal-500" :
                                post.category.includes("Emprendimiento") ? "from-pink-500 to-red-500" : // Corregí el typo "imgradient"
                                post.category.includes("Business") ? "from-amber-500 to-orange-500" : 
                                post.category.includes("Backend") ? "from-cyan-500 to-slate-900" : 
                                post.category.includes("Software") ? "from-blue-700 to-blue-600" : 
                                post.category.includes("Fullstack") ? "from-violet-500 to-purple-600" : 
                                post.category.includes("Proyectos") ? "from-yellow-400 to-yellow-500" : 
                                "from-slate-700 to-slate-900" // Default
                            }`}>
                                <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')]"></div>
                                
                                <div className="absolute top-6 left-6 z-10">
                                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                                        {post.category}
                                    </span>
                                </div>
                                
                                <div className="absolute bottom-[-20px] right-[-20px] text-white/20 rotate-12 transform group-hover:rotate-0 transition-transform duration-500">
                                     <FaTag size={180} />
                                </div>
                            </div>

                            {/* CONTENIDO */}
                            <div className="flex-1 p-8 md:p-10 flex flex-col">
                                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                                    <span className="flex items-center gap-1"><FaClock /> Caso de Estudio</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h2>
                                
                                <p className="text-slate-500 leading-relaxed mb-8 flex-1">
                                    {post.subtitle}
                                </p>

                                <div className="flex items-center gap-2 text-slate-900 font-bold group-hover:translate-x-2 transition-transform">
                                    <span>Leer articulo :)</span>
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <FaArrowRight size={12} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Tilt>
                </motion.div>
            ))}
        </section>

      </main>
    </div>
  );
}
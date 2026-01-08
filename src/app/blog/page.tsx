"use client";

import { FaArrowRight, FaTag, FaClock } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";
import Tilt from 'react-parallax-tilt';

// DATOS REALES BASADOS EN TU EXPERIENCIA
const posts = [
  {
    id: 1,
    title: "Malibu Style: Creando una marca E-commerce desde cero",
    excerpt: "Cómo lideré la estrategia digital, el diseño de identidad y la gestión de ventas para posicionar una marca de indumentaria deportiva en el mercado local.",
    date: "Enero 2025",
    category: "Emprendimiento",
    readTime: "Case Study",
    image: "/malibu-cover.jpg", // Asegúrate de tener una imagen o usa un placeholder
    slug: "https://malibu.style", // Link real si existe o al repo
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: 2,
    title: "Tarjeta Titanio: Transformando Datos en Estrategias Comerciales",
    excerpt: "Mi proceso de ETL (Extracción, Transformación y Carga) para limpiar bases de datos de comercios y generar dashboards que guían la toma de decisiones gerenciales.",
    date: "Diciembre 2025",
    category: "Data Analytics",
    readTime: "Experiencia Real",
    image: "/data-cover.jpg",
    slug: "#", // O link a un PDF/Demo
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    id: 3,
    title: "Arquitectura de Software: API NBA con Docker y Microservicios",
    excerpt: "Desafío técnico universitario: Construcción de una API RESTful escalable utilizando Node.js, MongoDB y contenedorización con Docker para aislar servicios.",
    date: "Noviembre 2025",
    category: "Backend Dev",
    readTime: "Código",
    image: "/nba-cover.jpg",
    slug: "https://github.com/gonzalomartinez/nba-api",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    id: 4,
    title: "Freelance Web Dev: Diseñando Landing Pages que Convierten",
    excerpt: "El arte de equilibrar la estética con la funcionalidad. Cómo utilizo React y Tailwind CSS para entregar sitios web ultrarrápidos y optimizados para SEO a mis clientes.",
    date: "Octubre 2025",
    category: "Frontend",
    readTime: "Freelance",
    image: "/web-cover.jpg",
    slug: "#",
    gradient: "from-purple-600 to-indigo-600"
  } ,
    {
    id: 5,
    title: "Arquitectura de Software: API NBA con Docker y Microservicios",
    excerpt: "Desafío técnico universitario: Construcción de una API RESTful escalable utilizando Node.js, MongoDB y contenedorización con Docker para aislar servicios.",
    date: "Noviembre 2025",
    category: "Backend Dev",
    readTime: "Código",
    image: "/nba-cover.jpg",
    slug: "https://github.com/gonzalomartinez/nba-api",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    id: 6,
    title: "Freelance Web Dev: Diseñando Landing Pages que Convierten",
    excerpt: "El arte de equilibrar la estética con la funcionalidad. Cómo utilizo React y Tailwind CSS para entregar sitios web ultrarrápidos y optimizados para SEO a mis clientes.",
    date: "Octubre 2025",
    category: "Frontend",
    readTime: "Freelance",
    image: "/web-cover.jpg",
    slug: "#",
    gradient: "from-purple-600 to-indigo-600"
  } ,

];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <main className="flex-1 w-full pt-24 pb-20 px-4 md:px-12">
        
        {/* 1. HEADER DEL BLOG */}
        <section className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <Reveal delay={0.1}>
                <h1 className="font-display text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
                    Historias de <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                        Código & Negocio
                    </span>
                </h1>
            </Reveal>
            <Reveal delay={0.2}>
                <p className="text-slate-500 text-lg leading-relaxed">
                     Más que simples posts, aquí documento mis <strong>Casos de Estudio</strong> reales. Desde la lógica de negocio en Tarjeta Titanio hasta la arquitectura de software en mis proyectos personales.
                </p>
            </Reveal>
        </section>

        {/* 2. GRID DE HISTORIAS (Bento Grid Style) */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
                <Reveal key={post.id} width="100%" delay={index * 0.1}>
                    <Tilt
                        glareEnable={true} 
                        glareMaxOpacity={0.1} 
                        scale={1.02} 
                        transitionSpeed={2500}
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                        className="h-full"
                    >
                        <a 
                            href={post.slug} 
                            target={post.slug.startsWith("http") ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="group relative flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            {/* IMAGEN DE PORTADA CON GRADIENTE */}
                            <div className={`h-48 md:h-64 w-full relative overflow-hidden bg-gradient-to-br ${post.gradient}`}>
                                {/* Overlay de ruido/textura opcional */}
                                <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')]"></div>
                                
                                {/* Badge de Categoría Flotante */}
                                <div className="absolute top-6 left-6 z-10">
                                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                                        {post.category}
                                    </span>
                                </div>
                                
                                {/* Imagen (Placeholder si no hay real) */}
                                {/* <Image src={post.image} alt={post.title} fill className="object-cover mix-blend-overlay opacity-50 group-hover:scale-105 transition-transform duration-700" /> */}
                                
                                {/* Icono Decorativo Grande (Por si no tienes fotos aún) */}
                                <div className="absolute bottom-[-20px] right-[-20px] text-white/20 rotate-12 transform group-hover:rotate-0 transition-transform duration-500">
                                     {/* Aquí podrías poner un icono gigante según la categoría */}
                                     <FaTag size={180} />
                                </div>
                            </div>

                            {/* CONTENIDO DE LA TARJETA */}
                            <div className="flex-1 p-8 md:p-10 flex flex-col">
                                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                                    <span className="flex items-center gap-1"><FaClock /> {post.readTime}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h2>
                                
                                <p className="text-slate-500 leading-relaxed mb-8 flex-1">
                                    {post.excerpt}
                                </p>

                                {/* CALL TO ACTION */}
                                <div className="flex items-center gap-2 text-slate-900 font-bold group-hover:translate-x-2 transition-transform">
                                    <span>Ver Caso de Estudio</span>
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <FaArrowRight size={12} />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Tilt>
                </Reveal>
            ))}
        </section>

      </main>
    </div>
  );
}
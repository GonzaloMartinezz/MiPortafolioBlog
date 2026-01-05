import type { Metadata } from "next";
import { FaSearch, FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: " My Blog`s | Gonzalo Martínez",
  description: "Pensamientos sobre desarrollo, datos y tecnología.",
};

// Datos simulados (Mock Data) basados en tu perfil
const posts = [
  {
    id: 1,
    title: "De MERN Stack a .NET: Mi viaje hacia la arquitectura empresarial",
    excerpt: "Por qué decidí aprender C# y cómo la tipificación estática y Clean Architecture cambiaron mi forma de programar.",
    date: "Enero 4, 2026",
    category: "Carrera",
    readTime: "5 min",
    slug: "mern-to-net"
  },
  {
    id: 2,
    title: "Dockerizando una API de NBA con Node.js y Mongo",
    excerpt: "Guía paso a paso de cómo resolví el desafío del seminario universitario usando contenedores para aislar servicios.",
    date: "Diciembre 28, 2025",
    category: "Tutorial",
    readTime: "8 min",
    slug: "docker-nba-api"
  },
  {
    id: 3,
    title: "Análisis de Datos: ¿Cómo transformar números en decisiones?",
    excerpt: "Mi experiencia en Tarjeta Titanio limpiando datasets y generando insights reales para el equipo comercial.",
    date: "Diciembre 15, 2025",
    category: "Data Analytics",
    readTime: "6 min",
    slug: "data-analysis-intro"
  }
  
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full py-12 md:py-20 animate-fade-in-up">
        
        {/* HEADER DEL BLOG */}
        <section className="text-center max-w-3xl mx-auto mb-10 px-6 -mt-12 md:-mt-15">
            <h1 className="font-display text-4xl md:text-6xl font-black text-slate-900 mb-6">
                Escribiendo sobre <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    Código y Datos
                </span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
                 Mis Trabajos , aprendizajes y Experiencias. Aquí documento mis aprendizajes, errores (bugs) y descubrimientos mientras construyo software y analizo datos.
            </p>
        </section>

        {/* LISTA DE POSTS */}
        <section className="max-w-4xl mx-auto px-6 grid gap-8">
            {posts.map((post) => (
                <article key={post.id} className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
                            <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                {post.category}
                            </span>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500">{post.readTime} de lectura</span>
                        </div>
                        <span className="text-slate-400 text-xs font-mono">{post.date}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                    </h2>
                    
                    <p className="text-slate-500 leading-relaxed mb-6">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center text-blue-600 font-bold text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
                        Leer artículo <FaArrowRight className="ml-2" />
                    </div>
                </article>
            ))}
        </section>

      </main>
    </div>
  );
}
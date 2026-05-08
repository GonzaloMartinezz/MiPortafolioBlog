"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// 1. IMPORTAMOS 'Variants' AQUÍ PARA ARREGLAR EL ERROR
import { motion, Variants } from "framer-motion"; 
import { Reveal } from "@/components/ui/Reveal";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo: string;
}

const projects: ProjectProps[] = [
  {
    title: "Centro Odontológico C&M",
    description: "Sistema integral de gestión para consultorio dental. Citas online, historias clínicas digitales, seguimiento de pacientes y agenda integrada.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    repo: "https://github.com/gonzalomartinez/consultorio-dental",
    link: "https://app-consultorio-odontologico.vercel.app/"
  },
  {
    title: "Tarjeta Titanio",
    description: "Plataforma de gestión de tarjetas de crédito premium. Control de transacciones, límites de crédito y beneficios exclusivos.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    repo: "https://github.com/gonzalomartinez/tarjeta-titanio",
    link: "https://tarjetatitanio.vercel.app/"
  },
  {
    title: "MalibuStyle E-commerce",
    description: "Tienda online de indumentaria deportiva. Catálogo dinámico, carrito de compras, pasarela Stripe y panel admin completo.",
    tags: ["React", "Firebase", "Stripe", "Tailwind"],
    repo: "https://github.com/gonzalomartinez/malibu-style",
    link: "https://app-malibu-style.vercel.app/"
  },
  {
    title: "Club Belgrano CyD",
    description: "Plataforma para gestión de club deportivo. Inscripción de miembros, eventos, torneos y comunicación con socios.",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
    repo: "https://github.com/gonzalomartinez/club-belgrano",
    link: "https://app-club-belgranocyd.vercel.app/"
  },
  {
    title: "GOstats - Gestor Financiero",
    description: "Aplicación para gestionar ingresos y gastos. Análisis de gastos, reportes visuales y proyecciones de presupuesto.",
    tags: ["React", "Chart.js", "Node.js", "SQL"],
    repo: "https://github.com/gonzalomartinez/gostats",
    link: "https://app-gostats.vercel.app/"
  },
  {
    title: "ClickHouse - Inmobiliaria",
    description: "Plataforma inmobiliaria para búsqueda de departamentos. Filtros avanzados, mapas integrados, contacto con propietarios.",
    tags: ["Next.js", "Mapbox", "PostgreSQL", "Tailwind"],
    repo: "https://github.com/gonzalomartinez/clickhouse",
    link: "https://app-clickhouse.vercel.app/"
  },
  {
    title: "NutriAppGO",
    description: "Plataforma para nutricionistas y sus clientes. Planes de dieta personalizados, seguimiento de evolución y consultas online.",
    tags: ["React", "Node.js", "MongoDB", "Charts"],
    repo: "https://github.com/gonzalomartinez/nutriapp",
    link: "https://nutriappgo.vercel.app/"
  }
];

export default function Projects() {
  
  // 2. APLICAMOS EL TIPO ': Variants' EXPLÍCITAMENTE
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
        opacity: 1, 
        y: 0, 
        transition: { type: "spring", stiffness: 50 } 
    }
  };

  return (
    <section className="px-0 sm:px-0 md:px-0">
      <Reveal>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-4">
            <span className="text-blue-600">/</span> Proyectos
        </h2>
        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mb-8 sm:mb-12 md:mb-16">
          Trabajos destacados que muestran mi expertise en desarrollo web y análisis de datos.
        </p>
      </Reveal>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.a
            key={index}
            variants={item}
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between p-4 sm:p-6 md:p-8 bg-white rounded-2xl md:rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-blue-200 hover:-translate-y-2"
          >
             <div>
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <div className="p-2.5 sm:p-3 md:p-4 bg-slate-50 rounded-lg md:rounded-2xl text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <FaGithub size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    {project.link && (
                         <FaExternalLinkAlt className="text-slate-300 group-hover:text-blue-600 transition-colors w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {project.title}
                </h3>

                <p className="text-slate-500 leading-relaxed mb-4 sm:mb-6 font-medium text-sm sm:text-base line-clamp-3">
                    {project.description}
                </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                    key={tag}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 rounded-md group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
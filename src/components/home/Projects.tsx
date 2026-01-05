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
    title: "NBA API Services",
    description: "API robusta para consultar estadísticas de equipos y jugadores. Arquitectura en capas contenerizada con Docker.",
    tags: ["Node.js", "Express", "Docker", "MongoDB"],
    repo: "https://github.com/gonzalomartinez/nba-api", 
    link: "#"
  },
  {
    title: "TurnoMedico .NET",
    description: "Sistema de gestión de citas médicas. Uso de Entity Framework Core, Clean Architecture y AutoMapper.",
    tags: ["C#", ".NET Core", "SQL Server", "Swagger"],
    repo: "https://github.com/gonzalomartinez/turno-medico",
    link: "#"
  },
  {
    title: "Dental Office Manager",
    description: "Solución completa para consultorio odontológico real. Gestión de pacientes, historia clínica y agenda.",
    tags: ["React", "Node.js", "JWT Auth", "Tailwind"],
    repo: "https://github.com/gonzalomartinez/dental-app",
    link: "#"
  },
  {
    title: "Malibu Style E-commerce",
    description: "Plataforma de venta de indumentaria deportiva. Carrito de compras, pasarela de pagos y panel admin.",
    tags: ["React", "Firebase", "Stripe", "UX/UI"],
    repo: "https://github.com/gonzalomartinez/malibu-style",
    link: "https://malibu.style" 
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
    <section className="py-20">
      <Reveal>
        <h2 className="font-display text-4xl font-black text-slate-900 mb-12 flex items-center gap-4">
            <span className="text-blue-600">/</span> Proyectos Seleccionados
        </h2>
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
            className="group relative flex flex-col justify-between p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-blue-200 hover:-translate-y-2"
          >
             <div>
                <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-slate-50 rounded-2xl text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <FaGithub size={24} />
                    </div>
                    {project.link && (
                         <FaExternalLinkAlt className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                    )}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed mb-6 font-medium">
                    {project.description}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span 
                    key={tag} 
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 rounded-md group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
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
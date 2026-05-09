"use client";

import { FaGithub, FaExternalLinkAlt, FaRegFileAlt, FaCreditCard, FaChartBar, FaServer, FaCode } from "react-icons/fa";
import { motion, Variants } from "framer-motion"; 

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo: string;
  icon: React.ReactNode;
}

const projects: ProjectProps[] = [
  {
    title: "Centro Odontológico C&M",
    description: "Sistema integral de gestión para consultorio dental. Citas online, historias clínicas digitales, seguimiento de pacientes y agenda integrada.",
    tags: ["REACT", "NODE.JS", "MONGODB", "JWT"],
    repo: "https://github.com/gonzalomartinez/consultorio-dental",
    link: "https://app-consultorio-odontologico.vercel.app/",
    icon: <FaRegFileAlt size={20} />
  },
  {
    title: "Tarjeta Titanio",
    description: "Plataforma de gestión de tarjetas de crédito premium. Control de transacciones en tiempo real, límites de crédito dinámicos y portal de beneficios exclusivos.",
    tags: ["NEXT.JS", "TYPESCRIPT", "POSTGRESQL", "STRIPE"],
    repo: "https://github.com/gonzalomartinez/tarjeta-titanio",
    link: "https://tarjetatitanio.vercel.app/",
    icon: <FaCreditCard size={20} />
  },
  {
    title: "Dashboard de Analítica",
    description: "Panel de visualización de datos complejos para e-commerce. Procesamiento masivo de logs y generación de reportes predictivos basados en comportamiento de usuario.",
    tags: ["PYTHON", "PANDAS", "D3.JS", "AWS"],
    repo: "https://github.com/gonzalomartinez/analytics-dashboard",
    link: "#",
    icon: <FaChartBar size={20} />
  },
  {
    title: "Infraestructura Distribuida",
    description: "Diseño y despliegue de microservicios para plataforma de streaming. Implementación de balanceo de carga, caché global y bases de datos replicadas.",
    tags: ["GO", "DOCKER", "REDIS", "K8S"],
    repo: "https://github.com/gonzalomartinez/distributed-infra",
    link: "#",
    icon: <FaServer size={20} />
  }
];

export default function Projects() {
  
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="py-20">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 flex items-center gap-4">
            <span className="w-2 h-12 bg-blue-600 inline-block"></span> GALERÍA DE PROYECTOS
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl">
          Trabajos destacados que muestran mi expertise en desarrollo web y análisis de datos, enfocados en soluciones escalables y diseño centrado en el usuario.
        </p>
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {project.icon}
              </div>
              <div className="flex gap-4 text-slate-400">
                <FaCode className="hover:text-blue-600 cursor-pointer transition-colors" />
                <FaExternalLinkAlt className="hover:text-blue-600 cursor-pointer transition-colors" size={14} />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {project.title}
            </h3>

            <p className="text-slate-500 leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                    key={tag}
                    className="px-3 py-1 text-[10px] font-bold text-blue-600 bg-blue-50 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
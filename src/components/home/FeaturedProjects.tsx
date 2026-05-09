"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

interface FeaturedProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  repo: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "Centro Odontológico C&M",
    description: "Sistema integral de gestión para consultorio dental. Citas online, historias clínicas digitales, seguimiento de pacientes y agenda integrada.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&h=720&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://app-consultorio-odontologico.vercel.app/",
    repo: "https://github.com/gonzalomartinez/consultorio-dental",
  },
  {
    id: 2,
    title: "Tarjeta Titanio",
    description: "Plataforma de gestión de tarjetas de crédito premium. Control de transacciones, límites de crédito y beneficios exclusivos.",
    image: "https://images.unsplash.com/photo-1611987147885-1972dd84b96d?w=1400&h=720&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe"],
    link: "https://tarjetatitanio.vercel.app/",
    repo: "https://github.com/gonzalomartinez/tarjeta-titanio",
  },
  {
    id: 3,
    title: "MalibuStyle E-commerce",
    description: "Tienda online de indumentaria deportiva. Catálogo dinámico, carrito de compras, pasarela Stripe y panel admin completo.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&h=720&fit=crop",
    tags: ["React", "Firebase", "Tailwind"],
    link: "https://app-malibu-style.vercel.app/",
    repo: "https://github.com/gonzalomartinez/malibu-style",
  },
];

export default function FeaturedProjects() {
  const [currentProject, setCurrentProject] = React.useState(0);

  const handleNextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrevProject = () => {
    setCurrentProject((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  const project = featuredProjects[currentProject];

  return (
    <div className="w-full -mx-4 sm:-mx-6 md:-mx-12 px-4 sm:px-6 md:px-12">
      <div className="mb-12 sm:mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-4">
            <span className="text-black dark:text-white">/</span> Proyectos Destacados
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg max-w-3xl">
            Trabajos que demuestran mi expertise en desarrollo web, desde aplicaciones de gestión hasta plataformas de e-commerce.
          </p>
        </motion.div>
      </div>

      <motion.div
        key={currentProject}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-3xl">
                  {project.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                    className="px-4 py-2 text-sm font-semibold text-black dark:text-white bg-black/5 dark:bg-white/10 rounded-full"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:bg-black/90 dark:hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <FaExternalLinkAlt size={18} />
                    Ver Demo
                  </a>
                )}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-black rounded-xl hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <FaGithub size={18} />
                  Ver Código
                </a>
              </motion.div>
            </div>
          }
        >
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </ContainerScroll>
      </motion.div>

      {/* Navigation Controls */}
      <div className="flex flex-col items-center gap-8 mt-16 md:mt-20">
        {/* Project Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-600 dark:text-slate-400 font-medium"
        >
          Proyecto <span className="text-black font-bold">{currentProject + 1}</span> de <span className="text-black font-bold">{featuredProjects.length}</span>
        </motion.div>

        {/* Navigation Buttons & Dots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center items-center gap-8"
        >
          <button
            onClick={handlePrevProject}
            className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-black dark:hover:bg-white text-slate-900 dark:text-white hover:text-white dark:hover:text-black rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Proyecto anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-3">
            {featuredProjects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? "bg-black dark:bg-white w-10 h-3"
                    : "bg-slate-300 dark:bg-slate-600 w-3 h-3 hover:bg-slate-400 dark:hover:bg-slate-500"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Ir al proyecto ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNextProject}
            className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-black dark:hover:bg-white text-slate-900 dark:text-white hover:text-white dark:hover:text-black rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Siguiente proyecto"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
}

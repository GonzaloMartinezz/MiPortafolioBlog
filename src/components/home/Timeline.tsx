"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

interface TimelineItemProps {
  date: string;
  title: string;
  role: string;
  description: string;
  tech?: string[];
}

const historyData: TimelineItemProps[] = [
  {
    date: "Dic 2025",
    title: "Consultorio Dental & Portfolio",
    role: "Freelance",
    description: "Desarrollo del backend para un consultorio dental (Node.js/Express) y creación de este portafolio personal optimizado con Next.js.",
    tech: ["Next.js", "TypeScript", "Tailwind"]
  },
  {
    date: "Nov 2025",
    title: "Seminario Informático III",
    role: "Proyecto Final",
    description: "Creación de una API RESTful temática de la NBA. Implementación de Docker para contenedores y MongoDB para manejo de datos masivos de jugadores y equipos.",
    tech: ["Docker", "Node.js", "MongoDB"]
  },
  {
    date: "Oct 2025",
    title: "Especialización Backend .NET",
    role: "Formación Académica",
    description: "Desarrollo de API 'TurnoMedico' usando C# y Entity Framework. Implementación de patrones de diseño (Repository, DTOs) y documentación con Swagger.",
    tech: ["C#", ".NET", "SQL Server"]
  },
  {
    date: "Sep 2025",
    title: "Gym System Web",
    role: "Proyecto Personal",
    description: "Primera aplicación full stack para gestión de gimnasios. Manejo de estados complejos en React y creación de componentes reutilizables.",
    tech: ["React", "JavaScript", "CSS"]
  },
  {
    date: "2024 - Presente",
    title: "Empresa de Tarjetas de Crédito",
    role: "Analista / Administrativo",
    description: "Análisis de datos y propuestas de estrategias de marketing local. Automatización de procesos internos.",
    tech: ["Excel", "Data Analysis"]
  }
];

export default function Timeline() {
  return (
    <section>
      <div className="space-y-8">
        {historyData.map((item, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row gap-6 md:gap-8 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Línea vertical en mobile */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-300 rounded-full md:hidden"></div>

              {/* Fecha */}
              <div className="md:w-32 shrink-0 pl-6 md:pl-0">
                <span className="inline-block px-2.5 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-lg font-mono text-xs sm:text-sm font-bold group-hover:bg-blue-200 transition-colors">
                  {item.date}
                </span>
              </div>

              {/* Contenido */}
              <div className="md:flex-1 pl-2 md:pl-0">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wider">
                  {item.role}
                </p>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                  {item.description}
                </p>

                {/* Tags de tecnología */}
                {item.tech && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {item.tech.map(t => (
                      <span
                        key={t}
                        className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-slate-100 text-slate-700 rounded-md font-semibold group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

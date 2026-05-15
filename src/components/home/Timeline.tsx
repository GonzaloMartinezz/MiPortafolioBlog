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
    date: "Mayo 2025 — Actualidad",
    title: "Tarjeta Titanio S.A.",
    role: "Desarrollador Full Stack Junior",
    description: "Responsable del ciclo completo de desarrollo de software: análisis de requerimientos, diseño de arquitectura, implementación, testing y documentación técnica de sistemas internos.",
    tech: ["JavaScript", "React", "Node.js", "MongoDB", "Postman"]
  },
  {
    date: "Marzo 2024 — Actualidad",
    title: "Tarjeta Titanio S.A.",
    role: "Data Analyst",
    description: "Análisis integral de datos comerciales y operativos. Diseño de dashboards ejecutivos y propuesta de estrategias de marketing digital basadas en métricas de rendimiento.",
    tech: ["Microsoft Excel", "Power BI", "SQL Server", "Power Query"]
  },
  {
    date: "Agosto 2023 — Diciembre 2024",
    title: "Malibu Styless",
    role: "Fundador & Emprendedor",
    description: "Creación y gestión integral de un e-commerce de indumentaria deportiva masculina. Desarrollo de marca, estrategia de ventas, marketing digital y atención al cliente.",
    tech: ["E-Commerce", "Desarrollo Web", "Instagram", "WhatsApp", "Marketing Digital"]
  },
];

export default function Timeline() {
  return (
    <section>
      <div className="space-y-6 md:space-y-8">
        {historyData.map((item, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 rounded-2xl"
            >
              {/* Vertical Line (Mobile) */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-300 dark:from-blue-400 dark:to-blue-600 rounded-full md:hidden"></div>

              {/* Date */}
              <div className="md:w-36 shrink-0 pl-6 md:pl-0">
                <span className="inline-block px-3 py-1.5 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 rounded-lg font-mono text-xs font-bold group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors border border-blue-100/50 dark:border-blue-800/30">
                  {item.date}
                </span>
              </div>

              {/* Content */}
              <div className="md:flex-1 pl-2 md:pl-0">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 uppercase tracking-wider">
                  {item.role}
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs sm:text-sm md:text-base mb-4">
                  {item.description}
                </p>

                {/* Tech Tags */}
                {item.tech && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {item.tech.map(t => (
                      <span
                        key={t}
                        className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg font-semibold group-hover:bg-blue-50 dark:group-hover:bg-blue-950/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors border border-slate-100/50 dark:border-slate-700/30"
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

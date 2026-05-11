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
    date: "Mayo 2025 - Actualidad",
    title: "Tarjeta Titanio S.A",
    role: "Desarrollador Full Stack Junior",
    description: "Analisis , diseño , implementacion , pruebas y documentacion de softwre.",
    tech: ["Javascript", "React", "Node.js", "MongoDB", "Postman"]
  },
  {
    date: "Marzo 2024 - Actualidad",
    title: "Tarjeta Titanio S.A",
    role: "Data Analitycs",
    description: "Analisis de datos y propuesta de estrategias de marketing digital.",
    tech: ["Microsoft Excel", "Power BI", "SQL Server", "Power Query"]
  },
  {
    date: "Agosto 2023 - Diciembre 2024",
    title: "Fundador de Malibu Styless",
    role: "Emprendedor Autonomo",
    description: "Emprendedor de tienda online de ropa de hombre,venta de remeras y buzos, relacionado al deporte.",
    tech: ["E-Commerce", "Pagina Web", "Instagram", "Whatsapp", "Marketing Digital",]
  },
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
              className="group relative flex flex-col md:flex-row gap-6 md:gap-8 p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
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
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">
                  {item.role}
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                  {item.description}
                </p>

                {/* Tags de tecnología */}
                {item.tech && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {item.tech.map(t => (
                      <span
                        key={t}
                        className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md font-semibold group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
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

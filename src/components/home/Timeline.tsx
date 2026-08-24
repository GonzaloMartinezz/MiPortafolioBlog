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
  {
    date: "Enero 2022 — Julio 2023",
    title: "Agencia Creativa Digital",
    role: "Frontend Web Developer",
    description: "Maquetado y programación de interfaces responsivas para clientes internacionales. Optimización de rendimiento (SEO y métricas Core Web Vitals) y creación de animaciones interactivas.",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    date: "Marzo 2021 — Diciembre 2021",
    title: "Proyectos Freelance",
    role: "Diseñador UX/UI & Web",
    description: "Investigación de usuarios, diseño de wireframes y prototipos de alta fidelidad en Figma. Traspaso de diseño a código funcional para pequeños y medianos emprendimientos locales.",
    tech: ["Figma", "UI/UX", "Adobe XD", "Prototipado", "React"]
  },
];

export default function Timeline() {
  return (
    <section className="relative w-full py-4 px-2 md:px-0">
      <div className="space-y-12 ml-2 md:ml-6">
        {historyData.map((item, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative pl-8 md:pl-16 group"
            >
              {/* Timeline Line & Node */}
              <div className="absolute left-0 top-0 bottom-[-3rem] w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent group-hover:from-[#F66C44]/50 transition-colors duration-500"></div>
              <div className="absolute left-[-6.5px] top-8 w-3.5 h-3.5 rounded-full bg-[#111111] border-[2px] border-white/20 group-hover:border-[#F66C44] group-hover:bg-[#F66C44] transition-all duration-500 shadow-[0_0_0_0_rgba(246,108,68,0)] group-hover:shadow-[0_0_20px_6px_rgba(246,108,68,0.4)]"></div>

              {/* Glassmorphism Card */}
              <div className="p-6 md:p-10 rounded-[2.5rem] bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/5 hover:border-white/10 hover:bg-[#111111] transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:-translate-y-1 relative overflow-hidden group/card">
                
                {/* Subtle Gradient Glow inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F66C44]/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover/card:bg-[#F66C44]/10 transition-colors duration-700 pointer-events-none"></div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start relative z-10">
                  
                  {/* Date Badge */}
                  <div className="shrink-0 pt-1 lg:w-48">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111] border border-white/10 text-white/50 rounded-full font-mono text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase shadow-inner group-hover/card:text-[#F66C44] group-hover/card:border-[#F66C44]/30 group-hover/card:bg-[#F66C44]/5 transition-all duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/card:bg-[#F66C44] transition-colors" />
                      {item.date}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2 group-hover/card:text-white transition-colors duration-300 drop-shadow-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm font-black text-[#F66C44] uppercase tracking-[0.15em] mb-5">
                      {item.role}
                    </p>
                    <p className="text-white/50 leading-relaxed text-sm md:text-base font-medium mb-8 max-w-2xl">
                      {item.description}
                    </p>

                    {/* Tech Tags */}
                    {item.tech && (
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {item.tech.map(t => (
                          <span
                            key={t}
                            className="text-[10px] md:text-xs px-4 py-2 bg-white/[0.03] text-white/60 rounded-full font-bold uppercase tracking-wider border border-white/5 hover:border-[#F66C44]/40 hover:bg-[#F66C44]/10 hover:text-[#F66C44] hover:-translate-y-0.5 transition-all duration-300 cursor-default shadow-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

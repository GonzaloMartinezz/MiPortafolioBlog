"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Briefcase,
  Code2,
  Rocket,
  ExternalLink,
  CheckCircle2,
  BarChart3,
  Users,
  Globe,
  Smartphone,
  Database,
  Zap,
} from "lucide-react";

interface Achievement {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface Task {
  icon: React.ReactNode;
  title: string;
  detail: string;
}

interface TimelineItemData {
  date: string;
  title: string;
  role: string;
  color: string;
  badge: React.ReactNode;
  tagline: string;
  achievements?: Achievement[];
  tasks: Task[];
  tech: string[];
  images?: string[];
  link?: string;
  linkLabel?: string;
}

const historyData: TimelineItemData[] = [
  {
    date: "2025 — Actualidad",
    title: "Tarjeta Titanio S.A.",
    role: "Desarrollador Web & Analista de Datos",
    color: "#F66C44",
    badge: <Briefcase size={16} />,
    tagline: "Desarrollo web institucional + e-commerce + analítica avanzada de datos sobre miles de comercios adheridos.",
    achievements: [
      { icon: <Globe size={18} />, value: "+60", label: "Comercios incorporados" },
      { icon: <BarChart3 size={18} />, value: "100%", label: "Dashboards Power BI" },
      { icon: <Database size={18} />, value: "Manejo de", label: "Bases de Datos" },
      { icon: <CheckCircle2 size={18} />, value: "5", label: "Proyectos entregados para potenciar la empresa" },
    ],
    tasks: [
      {
        icon: <Globe size={15} />,
        title: "Sitio institucional & e-commerce",
        detail: 'Desarrollé y mantuve funcionalidades en el sitio de Tarjeta Titanio y en "Súper Online", su plataforma de e-commerce, en equipo con tecnología.',
      },
      {
        icon: <Zap size={15} />,
        title: "Nuevas secciones & accesibilidad",
        detail: "Propuse y desarrollé nuevas secciones en la plataforma e impulsé mejoras de accesibilidad en la aplicación.",
      },
      {
        icon: <Users size={15} />,
        title: "Expansión comercial",
        detail: "Incorporé más de 60 nuevos comercios a la red mediante prospección y gestión comercial directa.",
      },
      {
        icon: <Database size={15} />,
        title: "Ciclo completo de datos",
        detail: "Gestioné inspección, limpieza, transformación y modelado sobre grandes volúmenes de información de comercios adheridos.",
      },
      {
        icon: <BarChart3 size={15} />,
        title: "Informes & visualizaciones",
        detail: "Desarrollé reportes con detección de tendencias y modelos predictivos para facilitar decisiones estratégicas.",
      },
      {
        icon: <CheckCircle2 size={15} />,
        title: "Dashboards mensuales",
        detail: "Diseñé dashboards por área (Power BI, Excel, Power Query) para identificar cuellos de botella y definir nuevos objetivos.",
      },
    ],
    tech: ["JavaScript", "React", "Node.js", "MongoDB", "Power BI", "SQL Server", "Excel", "Postman"],
    images: ["/TARJETATITANIOPROYECTO.png", "/comerciott.png", "/ttstats.png", "/ttconecta.png"],
  },
  {
    date: "2023 — Actualidad",
    title: "Proyectos Freelance",
    role: "Desarrollador Full Stack",
    color: "#3B82F6",
    badge: <Code2 size={16} />,
    tagline: "Más de 20 soluciones fullstack para clientes de distintos rubros: paneles admin, apps móviles y automatizaciones.",
    achievements: [
      { icon: <CheckCircle2 size={18} />, value: "+20", label: "Proyectos entregados" },
      { icon: <Smartphone size={18} />, value: "3", label: "Apps móviles" },
      { icon: <Users size={18} />, value: "3", label: "Clubes de básquet" },
      { icon: <Globe size={18} />, value: "SaaS", label: "Centro odontológico" },
    ],
    tasks: [
      {
        icon: <Users size={15} />,
        title: "Sistemas para clubes de básquet",
        detail: "Desarrollé sistemas completos para 3 clubes de Liga Federal y Liga Argentina: paneles admin, gestión de socios, estadísticas en tiempo real (Socket.IO), auth JWT/RBAC, AWS S3 y despliegue en Vercel/Render.",
      },
      {
        icon: <Smartphone size={15} />,
        title: "SaaS odontológico con chatbot WhatsApp",
        detail: "Sistema de gestión con chatbot integrado via WhatsApp Business API (24/7) para reserva de turnos, fichas médicas y odontogramas digitales en un dashboard unificado.",
      },
      {
        icon: <Globe size={15} />,
        title: "Mr. John's & Warhol",
        detail: "Lancé en producción el sitio de la agencia de entretenimiento: sección de eventos, sistema de reservas y contacto directo por WhatsApp.",
      },
      {
        icon: <Database size={15} />,
        title: "Sistema hospitalario con 7 roles",
        detail: "Sistema de Gestión Hospitalaria con roles diferenciados y notificaciones en tiempo real vía Socket.IO.",
      },
      {
        icon: <Smartphone size={15} />,
        title: "Axon Fire — App móvil de emergencias",
        detail: "App React Native + Expo para bomberos con navegación por rol, mapas interactivos (Leaflet + Google Maps API), rendering optimizado con requestAnimationFrame y backend Node.js/PostgreSQL.",
      },
      {
        icon: <Zap size={15} />,
        title: "NutriApp",
        detail: "Aplicación de cálculo de IMC/ICC y composición de alimentos para profesional nutricionista.",
      },
    ],
    tech: ["React", "Next.js", "Node.js", "Socket.IO", "AWS S3", "MercadoPago", "React Native", "PostgreSQL"],
    link: "/projects",
    linkLabel: "Ver Más Proyectos",
  },
  {
    date: "2023 — Actualidad",
    title: "Malibu Style",
    role: "CEO & Fundador | Full Stack Developer",
    color: "#A855F7",
    badge: <Rocket size={16} />,
    tagline: "Fundé y construí desde cero una marca de indumentaria con e-commerce propio, pasarela de pagos y logística automatizada.",
    achievements: [
      { icon: <Globe size={18} />, value: "100%", label: "E-commerce propio" },
      { icon: <Zap size={18} />, value: "0%", label: "Comisiones externas" },
      { icon: <Database size={18} />, value: "Template", label: "Reutilizable" },
      { icon: <BarChart3 size={18} />, value: "Real", label: "Métricas de negocio" },
    ],
    tasks: [
      {
        icon: <Globe size={15} />,
        title: "Experiencia del cliente",
        detail: "Interfaz enfocada en conversión con integración de MercadoPago para cobros transparentes y API de Andreani para cotización y seguimiento logístico en tiempo real.",
      },
      {
        icon: <BarChart3 size={15} />,
        title: "Dashboard administrativo",
        detail: "Panel a medida para carga de productos, control de stock y análisis de métricas clave de ventas para identificar tendencias.",
      },
      {
        icon: <Code2 size={15} />,
        title: "Arquitectura modular & template",
        detail: "Abstraje el motor del e-commerce separando lógica de interfaz, derivando en una plantilla escalable y reutilizable adaptable a otros rubros.",
      },
      {
        icon: <Rocket size={15} />,
        title: "Validación de modelo de negocio",
        detail: "Manejé el ciclo de vida completo del producto: desarrollo, lanzamiento, análisis de datos transaccionales y optimización de la marca.",
      },
    ],
    tech: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "MongoDB", "MercadoPago", "Andreani API", "Vercel", "Render"],
    images: ["/MS.png"],
  },
];

function TimelineCard({ item, index }: { item: TimelineItemData; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      viewport={{ once: true, margin: "-60px" }}
      className="relative pl-6 md:pl-14 group"
    >
      {/* Vertical line */}
      <div
        className="absolute left-0 top-0 bottom-[-3rem] w-[2px] rounded-full transition-colors duration-500"
        style={{
          background: open
            ? `linear-gradient(to bottom, ${item.color}, transparent)`
            : "linear-gradient(to bottom, rgba(255,255,255,0.08), transparent)",
        }}
      />
      {/* Node dot */}
      <div
        className="absolute left-[-5px] top-8 w-3 h-3 rounded-full border-2 transition-all duration-500 shadow-lg"
        style={{
          borderColor: open ? item.color : "rgba(255,255,255,0.15)",
          backgroundColor: open ? item.color : "#111",
          boxShadow: open ? `0 0 14px 4px ${item.color}50` : "none",
        }}
      />

      {/* Card */}
      <div
        className="rounded-2xl md:rounded-3xl border transition-all duration-500 overflow-hidden"
        style={{
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(20px)",
          borderColor: open ? `${item.color}30` : "rgba(255,255,255,0.05)",
          boxShadow: open
            ? `0 20px 50px rgba(0,0,0,0.6), 0 0 0 1px ${item.color}15`
            : "0 8px 24px rgba(0,0,0,0.4)",
        }}
      >
        {/* HEADER */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left px-5 py-5 md:px-8 md:py-7 flex items-start gap-4"
          aria-expanded={open}
        >
          {/* Badge icon */}
          <div
            className="shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-xl flex items-center justify-center mt-0.5 transition-all duration-300"
            style={{
              background: open ? `${item.color}20` : "rgba(255,255,255,0.04)",
              color: open ? item.color : "rgba(255,255,255,0.4)",
              border: `1px solid ${open ? item.color + "40" : "rgba(255,255,255,0.08)"}`,
            }}
          >
            {item.badge}
          </div>

          <div className="flex-1 min-w-0">
            {/* Date chip */}
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[10px] font-bold tracking-widest uppercase mb-2"
              style={{
                background: `${item.color}10`,
                color: item.color,
                border: `1px solid ${item.color}25`,
              }}
            >
              <span className="w-1 h-1 rounded-full" style={{ background: item.color }} />
              {item.date}
            </span>

            <h3 className="text-lg md:text-2xl font-black text-white leading-tight mb-0.5">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm font-bold uppercase tracking-widest" style={{ color: item.color }}>
              {item.role}
            </p>

            <AnimatePresence>
              {!open && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-2 text-white/40 text-sm leading-relaxed line-clamp-2"
                >
                  {item.tagline}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Chevron */}
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 mt-1"
          >
            <ChevronDown size={20} className="text-white/30" />
          </motion.div>
        </button>

        {/* EXPANDED BODY */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-6 md:px-8 md:pb-8 space-y-7">

                <div className="h-px w-full" style={{ background: `linear-gradient(to right, ${item.color}30, transparent)` }} />

                {/* Achievement pills */}
                {item.achievements && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {item.achievements.map((a, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex flex-col items-center justify-center gap-1 rounded-xl p-3 text-center border"
                        style={{
                          background: `${item.color}08`,
                          borderColor: `${item.color}20`,
                        }}
                      >
                        <span style={{ color: item.color }}>{a.icon}</span>
                        <span className="text-xl md:text-2xl font-black text-white">{a.value}</span>
                        <span className="text-[10px] text-white/40 uppercase tracking-wider leading-tight">{a.label}</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Tasks list */}
                <div className="space-y-3">
                  {item.tasks.map((task, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                      className="flex items-start gap-3 p-3.5 md:p-4 rounded-xl border border-white/[0.04] hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
                    >
                      <div
                        className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5"
                        style={{
                          background: `${item.color}12`,
                          color: item.color,
                        }}
                      >
                        {task.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-white mb-0.5">{task.title}</p>
                        <p className="text-xs md:text-sm text-white/50 leading-relaxed">{task.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] md:text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wider border cursor-default select-none"
                      style={{
                        background: `${item.color}10`,
                        borderColor: `${item.color}25`,
                        color: item.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Images grid */}
                {item.images && item.images.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {item.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative rounded-xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-500 shadow-lg bg-[#111] group/img"
                      >
                        <img
                          src={img}
                          alt={`${item.title} screenshot ${idx + 1}`}
                          className="w-full h-auto object-cover transform group-hover/img:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Link */}
                {item.link && (
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: item.color,
                      boxShadow: `0 4px 14px ${item.color}40`,
                    }}
                  >
                    <ExternalLink size={15} />
                    {item.linkLabel || "Ver Proyecto"}
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section className="relative w-full py-4 px-2 md:px-0">
      <div className="space-y-8 ml-2 md:ml-6">
        {historyData.map((item, index) => (
          <TimelineCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

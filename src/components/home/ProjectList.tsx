"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  FiArrowUpRight, FiMonitor, FiCalendar, FiMessageCircle, FiBookOpen, 
  FiBell, FiCpu, FiCode, FiShoppingCart, FiLayout, FiEye, 
  FiGrid, FiCreditCard, FiBox, FiTrendingUp, FiStar, FiPenTool, 
  FiUsers, FiActivity, FiEdit3, FiPieChart, FiZap, FiSmartphone, FiSliders 
} from "react-icons/fi";

const FeatureItem = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-0.5 transition-all duration-300 shadow-sm">
    <div className="text-[#fbbf24] bg-[#fbbf24]/10 p-2 rounded-lg shrink-0">
      <Icon size={16} strokeWidth={2.5} />
    </div>
    <span className="text-[13px] md:text-sm text-zinc-300 font-medium leading-snug tracking-wide">{text}</span>
  </div>
);

const IframeCard = ({ iframeUrl, image, title }: { iframeUrl?: string, image: string, title: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    if (!iframeUrl) return; // Only run resize logic if we actually have an iframe

    const updateScale = () => {
      if (containerRef.current) {
        setScale(containerRef.current.getBoundingClientRect().width / 1440);
      }
    };

    updateScale();
    const observer = new ResizeObserver(() => updateScale());
    if (containerRef.current) observer.observe(containerRef.current);
    window.addEventListener("resize", updateScale);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, [iframeUrl]);

  return (
    <div ref={containerRef} className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-black">
      {iframeUrl ? (
        <div 
          className="absolute top-0 left-0 w-[1440px] h-[810px] origin-top-left pointer-events-none opacity-80 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" 
          style={{ transform: `scale(${scale})` }}
        >
          <iframe 
            src={iframeUrl} 
            className="w-full h-full border-none"
            scrolling="no"
            loading="lazy"
          />
        </div>
      ) : (
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
    </div>
  );
};

interface Project {
  id: number;
  client: string;
  clientSuffix: string;
  title: string;
  category: string;
  year: string;
  description: React.ReactNode;
  image: string;
  iframeUrl?: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    client: "ODONTO",
    clientSuffix: "APP",
    title: "Consultorio Odontológico",
    category: "SaaS / WEB APP",
    year: "2024",
    description: (
      <div className="flex flex-col gap-6">
        <p className="text-zinc-400 text-base leading-relaxed">
          <strong className="text-white font-semibold">Gestión automatizada end-to-end.</strong> Plataforma integral diseñada para erradicar la fricción en la reserva de turnos, dotando a la clínica de un ecosistema digital autónomo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FeatureItem icon={FiMonitor} text="Landing page institucional" />
          <FeatureItem icon={FiCalendar} text="Agendamiento autónomo" />
          <FeatureItem icon={FiMessageCircle} text="Integración WhatsApp API" />
          <FeatureItem icon={FiBookOpen} text="Agenda digital colaborativa" />
          <FeatureItem icon={FiBell} text="Recordatorios automatizados" />
          <FeatureItem icon={FiCpu} text="Chatbot de triaje inteligente" />
        </div>
      </div>
    ),
    image: "/coc&m.png",
    tags: ["REACT", "NODE.JS", "MONGODB", "WHATSAPP API", "VERCEL"],
    link: "https://app-consultorio-odontologico.vercel.app/"
  },
  {
    id: 2,
    client: "TITANIO",
    clientSuffix: "FIN",
    title: "Tarjeta Titanio",
    category: "FINTECH PLATFORM",
    year: "2024",
    description: (
      <div className="flex flex-col gap-6">
        <p className="text-zinc-400 text-base leading-relaxed">
          <strong className="text-white font-semibold">Ecosistema Fintech y E-commerce.</strong> Desarrollo colaborativo y escalamiento de la arquitectura frontend para potenciar los canales de adquisición digitales.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FeatureItem icon={FiCode} text="Arquitectura web escalable" />
          <FeatureItem icon={FiShoppingCart} text="Plataforma Súper Online" />
          <FeatureItem icon={FiLayout} text="Diseño de nuevas interfaces" />
          <FeatureItem icon={FiEye} text="Optimización de accesibilidad" />
        </div>
      </div>
    ),
    image: "/TT.png",
    tags: ["FINTECH", "UI/UX", "DESARROLLO"],
    link: "https://tarjetatitanio.vercel.app/"
  },
  {
    id: 3,
    client: "MALIBU",
    clientSuffix: "STYLESS",
    title: "Malibu Styless",
    category: "E-COMMERCE",
    year: "2023",
    description: (
      <div className="flex flex-col gap-6">
        <p className="text-zinc-400 text-base leading-relaxed">
          <strong className="text-white font-semibold">E-commerce de alto rendimiento.</strong> Solución de comercio electrónico construida a medida, centrada en la optimización de métricas de conversión (CRO).
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FeatureItem icon={FiGrid} text="Catálogo dinámico avanzado" />
          <FeatureItem icon={FiCreditCard} text="Pasarela de pago cifrada" />
          <FeatureItem icon={FiBox} text="Sincronización de inventario" />
          <FeatureItem icon={FiTrendingUp} text="UX orientada a conversión" />
        </div>
      </div>
    ),
    image: "/MS.png",
    tags: ["E-COMMERCE", "BRANDING", "DESARROLLO"],
    link: "https://app-malibu-style.vercel.app/"
  },
  {
    id: 4,
    client: "MR",
    clientSuffix: "JHONES",
    title: "Mr. John's & Warhol",
    category: "BAR & CLUB",
    year: "2024",
    description: (
      <div className="flex flex-col gap-6">
        <p className="text-zinc-400 text-base leading-relaxed">
          <strong className="text-white font-semibold">Experiencia nocturna digital.</strong> Diseño y desarrollo de una plataforma inmersiva para centralizar la promoción de eventos y la captación de clientes VIP.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FeatureItem icon={FiCalendar} text="Cartelera interactiva de DJs" />
          <FeatureItem icon={FiStar} text="Booking de espacios VIP" />
          <FeatureItem icon={FiMessageCircle} text="Canal de soporte en tiempo real" />
          <FeatureItem icon={FiPenTool} text="UI oscura de alto impacto" />
        </div>
      </div>
    ),
    image: "/MrJhones.png",
    tags: ["RESERVAS", "WEB APP", "DISEÑO"],
    link: "https://mrjhones.vercel.app/"
  },
  {
    id: 5,
    client: "CLUB",
    clientSuffix: "BELGRANO",
    title: "Club Belgrano C. y D.",
    category: "CLUB DEPORTIVO",
    year: "2024",
    description: (
      <div className="flex flex-col gap-6">
        <p className="text-zinc-400 text-base leading-relaxed">
          <strong className="text-white font-semibold">Portal institucional integral.</strong> Digitalización de la infraestructura administrativa del club, proporcionando un hub centralizado para socios y directivos.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FeatureItem icon={FiUsers} text="Padrón digital de socios" />
          <FeatureItem icon={FiActivity} text="Gestión de disciplinas" />
          <FeatureItem icon={FiEdit3} text="Flujo de inscripciones online" />
          <FeatureItem icon={FiPieChart} text="Dashboard métrico gerencial" />
        </div>
      </div>
    ),
    image: "/ClubBelgranocyd.png",
    tags: ["DEPORTES", "WEB APP", "DESARROLLO"],
    link: "https://app-club-belgranocyd.vercel.app/"
  },
  {
    id: 6,
    client: "CLICK",
    clientSuffix: "HOUSE",
    title: "Clickhouse",
    category: "WEB APP",
    year: "2024",
    description: (
      <div className="flex flex-col gap-6">
        <p className="text-zinc-400 text-base leading-relaxed">
          <strong className="text-white font-semibold">Arquitectura ágil de reservas.</strong> Sistema tecnológico minimalista diseñado para reducir la fricción cognitiva y acelerar drásticamente el proceso de reserva.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FeatureItem icon={FiZap} text="Performance ultra-optimizada" />
          <FeatureItem icon={FiCalendar} text="Motor de reservas en vivo" />
          <FeatureItem icon={FiSmartphone} text="Paradigma Mobile-First" />
          <FeatureItem icon={FiSliders} text="Consola de administración" />
        </div>
      </div>
    ),
    image: "/ClickHouse.png",
    tags: ["TURNOS", "WEB APP", "DESARROLLO"],
    link: "https://app-clickhouse.vercel.app/"
  }
];

export default function ProjectList() {
  return (
    <section className="w-full bg-transparent text-white py-24 md:py-32 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1400px] mx-auto mb-16 md:mb-24 text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center gap-4 justify-center md:justify-start opacity-80">
            <span className="w-8 md:w-12 h-[2px] bg-[#F66C44]"></span>
            <span className="text-[10px] md:text-xs font-black tracking-[0.3em] text-[#F66C44] uppercase">
              Portafolio Exclusivo
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter uppercase text-white leading-[0.9]">
            NUEVOS <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F66C44] to-[#FCD100] drop-shadow-[0_0_30px_rgba(246,108,68,0.2)]">
              PROYECTOS.
            </span>
          </h2>
        </motion.div>
      </div>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-32 md:gap-48">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-5/12 flex flex-col items-start gap-6">
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#71717a] uppercase flex items-center gap-4">
                  <span>0{project.id}</span>
                  <div className="w-8 h-[1px] bg-[#27272a]"></div>
                  <span>{project.client}.{project.clientSuffix}</span>
                </div>

                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none">
                  {project.title}
                </h2>

                <div className="text-[#a1a1aa] text-sm md:text-base leading-relaxed max-w-xl">
                  {project.description}
                </div>

                <div className="flex flex-wrap gap-3 mt-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-bold tracking-[0.15em] text-[#a1a1aa] uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-2 text-[#fbbf24] hover:text-white font-bold text-xs tracking-[0.2em] uppercase transition-colors group"
                >
                  VISITAR SITIO 
                  <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                </a>
              </div>

              {/* Image Content */}
              <div className="w-full lg:w-7/12 relative group">
                {/* Yellow asterisk decorative element */}
                <div className={`absolute top-1/2 ${isEven ? '-left-12' : '-right-12'} -translate-y-1/2 hidden lg:flex items-center justify-center text-[#fbbf24] text-3xl font-black opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-180 z-20`}>
                  *
                </div>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="block relative rounded-[3rem] overflow-hidden bg-[#18181b] p-2 md:p-3 border border-white/10 hover:border-[#fbbf24]/40 shadow-2xl aspect-video transition-colors duration-500 z-10"
                >
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-black">
                    <IframeCard iframeUrl={project.iframeUrl} image={project.image} title={project.title} />
                  </div>
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

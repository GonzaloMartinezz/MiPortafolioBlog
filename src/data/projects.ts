export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
  link: string;
  image: string;
  tags: string[];
  bgGradient: string;
  glowColor: string;
}

export interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  colorTheme: string;
  gradientTheme: string;
  projects: Project[];
}

export const projectCategories: ProjectCategory[] = [
  {
    id: "fintech",
    title: "Fintech & Tarjetas",
    description: "Soluciones financieras de alto rendimiento, seguridad y gestión premium.",
    colorTheme: "blue",
    gradientTheme: "from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900",
    projects: [
      {
        id: 1,
        title: "Tarjeta Titanio",
        category: "Fintech · Premium Banking",
        description: "Portal financiero avanzado para control de tarjetas de crédito corporativas. Incluye pasarela segura de pago y monitoreo.",
        year: "2025",
        link: "https://tarjetatitanio.vercel.app/",
        image: "/appcompu.png",
        tags: ["Next.js", "TypeScript", "Stripe API"],
        bgGradient: "from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/40",
        glowColor: "rgba(59,130,246,0.15)",
      },
      {
        id: 2,
        title: "Titanio Business",
        category: "Fintech · B2B",
        description: "Dashboard financiero de alto nivel. Control de gastos, tarjetas virtuales y conciliación bancaria inteligente automatizada.",
        year: "2026",
        link: "https://tarjetatitanio.vercel.app/",
        image: "/appcompugostats.png",
        tags: ["React", "Node.js", "PostgreSQL"],
        bgGradient: "from-cyan-50 to-blue-100 dark:from-cyan-950/20 dark:to-blue-950/40",
        glowColor: "rgba(6,182,212,0.15)",
      }
    ]
  },
  {
    id: "ecommerce",
    title: "E-commerce & Retail",
    description: "Tiendas online y marketplaces optimizados para máxima conversión y UX.",
    colorTheme: "rose",
    gradientTheme: "from-rose-500 to-orange-500 dark:from-rose-900 dark:to-orange-900",
    projects: [
      {
        id: 3,
        title: "Malibu Styless",
        category: "E-commerce · Fashion",
        description: "Tienda online de indumentaria deportiva con catálogo interactivo responsivo, carrito móvil y pagos integrados.",
        year: "2024",
        link: "https://app-malibu-style.vercel.app/",
        image: "/MS.png",
        tags: ["React.js", "Firebase", "Tailwind CSS"],
        bgGradient: "from-rose-50 to-orange-100 dark:from-rose-950/20 dark:to-orange-950/40",
        glowColor: "rgba(244,63,94,0.15)",
      },
      {
        id: 4,
        title: "Malibu Admin",
        category: "E-commerce · Management",
        description: "Panel de gestión de inventario, métricas de ventas y procesamiento de pedidos en tiempo real para Malibu Styless.",
        year: "2024",
        link: "https://app-malibu-style.vercel.app/",
        image: "/bachstage.png",
        tags: ["React", "Firebase", "Chart.js"],
        bgGradient: "from-pink-50 to-rose-100 dark:from-pink-950/20 dark:to-rose-950/40",
        glowColor: "rgba(236,72,153,0.15)",
      }
    ]
  },
  {
    id: "saas",
    title: "SaaS & PropTech",
    description: "Plataformas de gestión médica y bienes raíces con arquitecturas escalables.",
    colorTheme: "emerald",
    gradientTheme: "from-emerald-500 to-teal-500 dark:from-emerald-900 dark:to-teal-900",
    projects: [
      {
        id: 5,
        title: "Centro Odontológico C&M",
        category: "Healthcare · SaaS Dental",
        description: "Plataforma SaaS para gestión odontológica. Agenda inteligente, digitalización segura de historias clínicas e inventario.",
        year: "2026",
        link: "https://app-consultorio-odontologico.vercel.app/",
        image: "/coc&m.png",
        tags: ["React.js", "Node.js", "MongoDB"],
        bgGradient: "from-emerald-50 to-teal-100 dark:from-emerald-950/20 dark:to-teal-950/40",
        glowColor: "rgba(16,185,129,0.12)",
      },
      {
        id: 6,
        title: "C&M Portal Pacientes",
        category: "SaaS · Auth",
        description: "Portal de autenticación y acceso para pacientes. Seguimiento de tratamientos y visualización de turnos programados.",
        year: "2026",
        link: "https://app-consultorio-odontologico.vercel.app/",
        image: "/loginncoc&m.png",
        tags: ["React", "Express", "JWT"],
        bgGradient: "from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-950/40",
        glowColor: "rgba(34,197,94,0.12)",
      },
      {
        id: 7,
        title: "ClickHouse",
        category: "Real Estate · PropTech",
        description: "Plataforma de bienes raíces moderna con filtros de geolocalización, búsqueda avanzada e interfaces inmersivas.",
        year: "2026",
        link: "https://app-clickhouse.vercel.app/",
        image: "/ClickHouse.png",
        tags: ["Next.js", "Prisma", "PostgreSQL"],
        bgGradient: "from-violet-50 to-purple-100 dark:from-violet-950/20 dark:to-purple-950/40",
        glowColor: "rgba(139,92,246,0.12)",
      }
    ]
  }
];

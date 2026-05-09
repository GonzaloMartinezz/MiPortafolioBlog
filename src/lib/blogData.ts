export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  subtitle?: string;
  content: any;
  date: string;
  image?: string;
  tags: string[];
  author: string;
  category?: string;
  role?: string;
  technologies?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "Centro Odontologico C & M",
    title: "Construyendo un sistema de gestion y registro de pacientes para un consultorio odontológico. Manejo de turnos y agendas médicas, historias clínicas y estudios realizados.",
    excerpt: "Un sistema web para la gestión integral de un consultorio odontológico. Permite el registro y la administración de pacientes, el manejo de turnos y agendas médicas, la gestión de historias clínicas y el registro de estudios realizados por cada paciente. ",
    subtitle: "Un sistema web para la gestión integral de un consultorio odontológico",
    content: {
      challenge: "Desarrollar un sistema web que permitiera gestionar de manera eficiente todas las operaciones de un consultorio odontológico. El sistema debía permitir el registro y la administración de pacientes, el manejo de turnos y agendas médicas, la gestión de historias clínicas y el registro de estudios realizados por cada paciente. ",
      solution: "El desafío fue crear una API escalable que pudiera manejar datos de múltiples fuentes.",
      results: "Sistema completo con funcionalidades de registro, administración, gestión de turnos y agendas médicas, gestión de historias clínicas y registro de estudios realizados por cada paciente."
    },
    date: "2026-04-10",
    tags: ["React", "JavaScript", "API", "Node.js", "Express", "MongoDB", "Backend"],
    author: "Gonzalo Martínez",
    category: "Fullstack",
    role: "Fullstack Developer",
    technologies: ["React", "JavaScript", "API", "Node.js", "Express", "MongoDB", "Backend"]
  },
  {
    id: "2",
    slug: "Tarjeta Titanio S.A",
    title: "Desarrollo de una aplicacion web , manejo de diseño y reestructuración del sistema para la empresa.",
    excerpt: "Diseño y reestructuración de una aplicación web para una empresa de tarjeta de credito. El sistema permite el registro y la administración de clientes, el manejo de datos de las tarjetas y el registro de compras y consumos realizados por cada cliente. ",
    subtitle: "Manejo de diseño y reestructuración de una aplicación web para una empresa de tarjeta de credito",
    content: {
      challenge: "Diseño mejorado para una empresa de tarjeta de credito.",
      solution: "Aplicar patrones de diseño y mejores prácticas de desarrollo.Para la visual de los clientes y lograr un mejor manejo de la app",
      results: "Manejo de los datos de las tarjetas y el registro de compras y consumos realizados por cada cliente."
    },
    date: "2025-11-18",
    tags: ["React", "JavaScript", "Frontend", "Figma", "Tailwind"],
    author: "Gonzalo Martínez",
    category: "Frontend",
    role: "Frontend Developer",
    technologies: ["React", "JavaScript", "Figma", "Tailwind"]
  },
  {
    id: "3",
    slug: "Malibu Styless",
    title: "Marca Personal de venta de indumentaria. Reestructuración del E-commerce.",
    excerpt: "Diseño y reestructuración de la marca personal y su e-commerce. Aplicación de principios de branding y diseño de interfaces para mejorar la experiencia del usuario. ",
    subtitle: "Venta de ropa basada en el basquet ,con remeras de excelente calidad y buzos que marcan tendencia.",
    content: {
      challenge: "Creación de una marca personal y su e-commerce. Aplicación de principios de branding y diseño de interfaces para mejorar la experiencia del usuario. ",
      solution: "El objetivo principal era crear una marca fuerte y reconocible , que se diferenciara de la competencia y atrajera a clientes potenciales. ",
      results: "Aplicación de principios de branding y diseño de interfaces para mejorar la experiencia del usuario."
    },
    date: "2026-03-5",
    tags: ["C#", ".NET", "Architecture", "Clean Code"],
    author: "Gonzalo Martínez",
    category: "Architecture",
    role: "Fullstack Developer",
    technologies: ["React", "JavaScript", "API", "Node.js", "Express", "MongoDB", "Backend"]
  },
  {
    id: "4",
    slug: "Club Belgrano C&D",
    title: "Plataforma integral para la gestión deportiva de un club.",
    excerpt: "Plataforma integral diseñada para optimizar la gestión deportiva de un club, integrando módulos de Venta de entradas, Gestión de Socios, Finanzas y Análisis de Datos.",
    subtitle: "Solución completa de gestión deportiva con análisis de datos en tiempo real.",
    content: {
      challenge: "Desarrollar una solución robusta que automatizar los procesos críticos de un club (Ventas, Stock, Finanzas) y proporcionara inteligencia de negocios (BI) para la toma de decisiones.",
      solution: "Creación de una arquitectura escalable con Backend en .NET Core y Frontend en React. Implementación de un Data Warehouse y paneles interactivos en Power BI.",
      results: "Reducción del 30% en errores manuales, visibilidad total del rendimiento del negocio y mejora significativa en la toma de decisiones estratégicas."
    },
    date: "2026-05-05",
    tags: ["React", "JavaScript", "API", "Node.js", "Express", "MongoDB", "Backend"],
    author: "Gonzalo Martínez",
    category: "Fullstack",
    role: "Fullstack Developer",
    technologies: ["React", "JavaScript", "API", "Node.js", "Express", "MongoDB", "Backend"]
  }
];

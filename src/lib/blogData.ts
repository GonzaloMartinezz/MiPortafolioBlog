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
  duration?: string;
  rating?: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "centro-odontologico-c-y-m",
    title: "Sistema integral de gestión de turnos y registro de pacientes para Consultorio Odontológico.",
    excerpt: "Plataforma web con panel administrativo para automatizar reservas, enviar recordatorios por WhatsApp y gestionar historias clínicas.",
    subtitle: "Modernización total: De turnos manuales por mensaje a un sistema automatizado 24/7.",
    content: {
      challenge: "Antes, el circuito de un turno era manual: el paciente llamaba o escribía, la secretaria revisaba la agenda a mano y asignaba día y horario por mensaje o llamada.",
      solution: "Le armé un sitio web oficial con panel de administrador completo:\n🦷 Muestra al consultorio: especialidades, instalaciones y casos de éxito\n📅 El paciente elige día y horario directamente en la web\n📲 El pedido llega ya armado a WhatsApp, sin coordinar a mano\n🗂️ Agenda digital para que los administradores (odontólogos, Secretaria) gestionen los turnos\n🔔 Recordatorio automático por WhatsApp y mail el día anterior\n🤖 Chatbot de preguntas frecuentes + botón de WhatsApp directo",
      results: "Está en producción, usado a diario por pacientes reales. El cliente está satisfecho con 5 estrellas."
    },
    date: "2026-04-10",
    tags: ["React", "Node.js", "Express", "MongoDB", "WhatsApp API", "Vercel"],
    author: "Gonzalo Martínez",
    category: "Fullstack",
    role: "Único Desarrollador",
    technologies: ["React", "Node.js", "Express", "MongoDB", "WhatsApp Business API", "Google Calendar", "Vercel", "Render"],
    duration: "2 meses",
    rating: 5
  },
  {
    id: "2",
    slug: "tarjeta-titanio-sa",
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
    slug: "malibu-styless",
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
    slug: "club-belgrano-c-y-d",
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
  },
  {
    id: "5",
    slug: "clickhouse",
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

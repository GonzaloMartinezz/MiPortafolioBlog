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
    slug: "mi-primer-api-restful",
    title: "Construyendo mi Primera API RESTful con Node.js",
    excerpt: "Aprende cómo desarrollé una API robusta desde cero usando Express y MongoDB.",
    subtitle: "Una guía paso a paso para crear tu primera API profesional",
    content: {
      challenge: "El desafío fue crear una API escalable que pudiera manejar datos de múltiples fuentes.",
      solution: "Implementé una arquitectura de capas con validaciones robustas.",
      results: "API completamente funcional con documentación Swagger completa."
    },
    date: "2025-11-15",
    tags: ["Node.js", "Express", "API", "Backend"],
    author: "Gonzalo Martínez",
    category: "Backend",
    role: "API Developer",
    technologies: ["Node.js", "Express", "MongoDB", "Docker"]
  },
  {
    id: "2",
    slug: "react-best-practices",
    title: "Mejores Prácticas en React: Patrones y Convenciones",
    excerpt: "Descubre las mejores prácticas y patrones que uso en mis proyectos React.",
    subtitle: "Optimizando componentes y mejorando performance",
    content: {
      challenge: "Mantener el código limpio y escalable en proyectos grandes.",
      solution: "Aplicar patrones como Custom Hooks y composition pattern.",
      results: "Componentes reutilizables y fáciles de mantener."
    },
    date: "2025-10-20",
    tags: ["React", "JavaScript", "Frontend", "Best Practices"],
    author: "Gonzalo Martínez",
    category: "Frontend",
    role: "Frontend Developer",
    technologies: ["React", "TypeScript", "Tailwind", "Next.js"]
  },
  {
    id: "3",
    slug: "dotnet-clean-architecture",
    title: "Implementando Clean Architecture en .NET",
    excerpt: "Una guía práctica sobre cómo implementar Clean Architecture en proyectos .NET.",
    subtitle: "Arquitectura limpia para aplicaciones empresariales",
    content: {
      challenge: "Crear una arquitectura que sea fácil de mantener y testear.",
      solution: "Separación de responsabilidades en capas bien definidas.",
      results: "Código más mantenible y testeable con mínimas dependencias externas."
    },
    date: "2025-09-10",
    tags: ["C#", ".NET", "Architecture", "Clean Code"],
    author: "Gonzalo Martínez",
    category: "Architecture",
    role: ".NET Developer",
    technologies: ["C#", ".NET Core", "Entity Framework", "SQL Server"]
  }
];
